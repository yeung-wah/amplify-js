// src/index.ts
import { Amplify } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Utils/CacheUtils.ts
import { StorageHelper } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var defaultConfig = {
  keyPrefix: "aws-amplify-cache",
  capacityInBytes: 1048576,
  itemMaxSize: 21e4,
  defaultTTL: 2592e5,
  defaultPriority: 5,
  warningThreshold: 0.8,
  storage: new StorageHelper().getStorage()
};
function getByteLength(str) {
  let ret = 0;
  ret = str.length;
  for (let i = str.length; i >= 0; i -= 1) {
    const charCode = str.charCodeAt(i);
    if (charCode > 127 && charCode <= 2047) {
      ret += 1;
    } else if (charCode > 2047 && charCode <= 65535) {
      ret += 2;
    }
    if (charCode >= 56320 && charCode <= 57343) {
      i -= 1;
    }
  }
  return ret;
}
function getCurrTime() {
  const currTime = new Date();
  return currTime.getTime();
}
function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }
  return _isInteger(value);
}
function _isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
var store = {};
var CacheObject = class {
  static clear() {
    store = {};
  }
  static getItem(key) {
    return store[key] || null;
  }
  static setItem(key, value) {
    store[key] = value;
  }
  static removeItem(key) {
    delete store[key];
  }
};

// src/Utils/CacheList.ts
var DoubleLinkedNode = class {
  constructor(keyVal) {
    this.key = keyVal ? keyVal : "";
    this.prevNode = null;
    this.nextNode = null;
  }
};
var CacheList = class {
  constructor() {
    this.head = new DoubleLinkedNode();
    this.tail = new DoubleLinkedNode();
    this.hashtable = {};
    this.length = 0;
    this.head.nextNode = this.tail;
    this.tail.prevNode = this.head;
  }
  insertNodeToHead(node) {
    const tmp = this.head.nextNode;
    this.head.nextNode = node;
    node.nextNode = tmp;
    node.prevNode = this.head;
    tmp.prevNode = node;
    this.length = this.length + 1;
  }
  removeNode(node) {
    node.prevNode.nextNode = node.nextNode;
    node.nextNode.prevNode = node.prevNode;
    node.prevNode = null;
    node.nextNode = null;
    this.length = this.length - 1;
  }
  isEmpty() {
    return this.length === 0;
  }
  refresh(key) {
    const node = this.hashtable[key];
    this.removeNode(node);
    this.insertNodeToHead(node);
  }
  insertItem(key) {
    const node = new DoubleLinkedNode(key);
    this.hashtable[key] = node;
    this.insertNodeToHead(node);
  }
  getLastItem() {
    return this.tail.prevNode.key;
  }
  removeItem(key) {
    const removedItem = this.hashtable[key];
    this.removeNode(removedItem);
    delete this.hashtable[key];
  }
  getSize() {
    return this.length;
  }
  containsKey(key) {
    return key in this.hashtable;
  }
  clearList() {
    for (const key of Object.keys(this.hashtable)) {
      if (this.hashtable.hasOwnProperty(key)) {
        delete this.hashtable[key];
      }
    }
    this.head.nextNode = this.tail;
    this.tail.prevNode = this.head;
    this.length = 0;
  }
  getKeys() {
    return Object.keys(this.hashtable);
  }
  isHeadNode(key) {
    const node = this.hashtable[key];
    return node.prevNode === this.head;
  }
  isTailNode(key) {
    const node = this.hashtable[key];
    return node.nextNode === this.tail;
  }
};

// src/StorageCache.ts
import { ConsoleLogger as Logger } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger = new Logger("StorageCache");
var StorageCache = class {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.cacheCurSizeKey = this.config.keyPrefix + "CurSize";
    this.checkConfig();
  }
  getModuleName() {
    return "Cache";
  }
  checkConfig() {
    if (!isInteger(this.config.capacityInBytes)) {
      logger.error("Invalid parameter: capacityInBytes. It should be an Integer. Setting back to default.");
      this.config.capacityInBytes = defaultConfig.capacityInBytes;
    }
    if (!isInteger(this.config.itemMaxSize)) {
      logger.error("Invalid parameter: itemMaxSize. It should be an Integer. Setting back to default.");
      this.config.itemMaxSize = defaultConfig.itemMaxSize;
    }
    if (!isInteger(this.config.defaultTTL)) {
      logger.error("Invalid parameter: defaultTTL. It should be an Integer. Setting back to default.");
      this.config.defaultTTL = defaultConfig.defaultTTL;
    }
    if (!isInteger(this.config.defaultPriority)) {
      logger.error("Invalid parameter: defaultPriority. It should be an Integer. Setting back to default.");
      this.config.defaultPriority = defaultConfig.defaultPriority;
    }
    if (this.config.itemMaxSize > this.config.capacityInBytes) {
      logger.error("Invalid parameter: itemMaxSize. It should be smaller than capacityInBytes. Setting back to default.");
      this.config.itemMaxSize = defaultConfig.itemMaxSize;
    }
    if (this.config.defaultPriority > 5 || this.config.defaultPriority < 1) {
      logger.error("Invalid parameter: defaultPriority. It should be between 1 and 5. Setting back to default.");
      this.config.defaultPriority = defaultConfig.defaultPriority;
    }
    if (Number(this.config.warningThreshold) > 1 || Number(this.config.warningThreshold) < 0) {
      logger.error("Invalid parameter: warningThreshold. It should be between 0 and 1. Setting back to default.");
      this.config.warningThreshold = defaultConfig.warningThreshold;
    }
    const cacheLimit = 5 * 1024 * 1024;
    if (this.config.capacityInBytes > cacheLimit) {
      logger.error("Cache Capacity should be less than 5MB. Setting back to default. Setting back to default.");
      this.config.capacityInBytes = defaultConfig.capacityInBytes;
    }
  }
  fillCacheItem(key, value, options) {
    const ret = {
      key,
      data: value,
      timestamp: getCurrTime(),
      visitedTime: getCurrTime(),
      priority: options.priority,
      expires: options.expires,
      type: typeof value,
      byteSize: 0
    };
    ret.byteSize = getByteLength(JSON.stringify(ret));
    ret.byteSize = getByteLength(JSON.stringify(ret));
    return ret;
  }
  configure(config) {
    if (!config) {
      return this.config;
    }
    if (config.keyPrefix) {
      logger.warn(`Don't try to configure keyPrefix!`);
    }
    this.config = Object.assign({}, this.config, config, config.Cache);
    this.checkConfig();
    return this.config;
  }
};

// src/BrowserStorageCache.ts
import { ConsoleLogger as Logger2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger2 = new Logger2("Cache");
var BrowserStorageCacheClass = class extends StorageCache {
  constructor(config) {
    const cacheConfig = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    super(cacheConfig);
    this.config.storage = cacheConfig.storage;
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  _decreaseCurSizeInBytes(amount) {
    const curSize = this.getCacheCurSize();
    this.config.storage.setItem(this.cacheCurSizeKey, (curSize - amount).toString());
  }
  _increaseCurSizeInBytes(amount) {
    const curSize = this.getCacheCurSize();
    this.config.storage.setItem(this.cacheCurSizeKey, (curSize + amount).toString());
  }
  _refreshItem(item, prefixedKey) {
    item.visitedTime = getCurrTime();
    this.config.storage.setItem(prefixedKey, JSON.stringify(item));
    return item;
  }
  _isExpired(key) {
    const text = this.config.storage.getItem(key);
    const item = JSON.parse(text);
    if (getCurrTime() >= item.expires) {
      return true;
    }
    return false;
  }
  _removeItem(prefixedKey, size) {
    const itemSize = size ? size : JSON.parse(this.config.storage.getItem(prefixedKey)).byteSize;
    this._decreaseCurSizeInBytes(itemSize);
    this.config.storage.removeItem(prefixedKey);
  }
  _setItem(prefixedKey, item) {
    this._increaseCurSizeInBytes(item.byteSize);
    try {
      this.config.storage.setItem(prefixedKey, JSON.stringify(item));
    } catch (setItemErr) {
      this._decreaseCurSizeInBytes(item.byteSize);
      logger2.error(`Failed to set item ${setItemErr}`);
    }
  }
  _sizeToPop(itemSize) {
    const spaceItemNeed = this.getCacheCurSize() + itemSize - this.config.capacityInBytes;
    const cacheThresholdSpace = (1 - this.config.warningThreshold) * this.config.capacityInBytes;
    return spaceItemNeed > cacheThresholdSpace ? spaceItemNeed : cacheThresholdSpace;
  }
  _isCacheFull(itemSize) {
    return itemSize + this.getCacheCurSize() > this.config.capacityInBytes;
  }
  _findValidKeys() {
    const keys = [];
    const keyInCache = [];
    for (let i = 0; i < this.config.storage.length; i += 1) {
      keyInCache.push(this.config.storage.key(i));
    }
    for (let i = 0; i < keyInCache.length; i += 1) {
      const key = keyInCache[i];
      if (key.indexOf(this.config.keyPrefix) === 0 && key !== this.cacheCurSizeKey) {
        if (this._isExpired(key)) {
          this._removeItem(key);
        } else {
          keys.push(key);
        }
      }
    }
    return keys;
  }
  _popOutItems(keys, sizeToPop) {
    const items = [];
    let remainedSize = sizeToPop;
    for (let i = 0; i < keys.length; i += 1) {
      const val = this.config.storage.getItem(keys[i]);
      if (val != null) {
        const item = JSON.parse(val);
        items.push(item);
      }
    }
    items.sort((a, b) => {
      if (a.priority > b.priority) {
        return -1;
      } else if (a.priority < b.priority) {
        return 1;
      } else {
        if (a.visitedTime < b.visitedTime) {
          return -1;
        } else
          return 1;
      }
    });
    for (let i = 0; i < items.length; i += 1) {
      this._removeItem(items[i].key, items[i].byteSize);
      remainedSize -= items[i].byteSize;
      if (remainedSize <= 0) {
        return;
      }
    }
  }
  setItem(key, value, options) {
    logger2.log(`Set item: key is ${key}, value is ${value} with options: ${options}`);
    const prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      logger2.warn(`Invalid key: should not be empty or 'CurSize'`);
      return;
    }
    if (typeof value === "undefined") {
      logger2.warn(`The value of item should not be undefined!`);
      return;
    }
    const cacheItemOptions = {
      priority: options && options.priority !== void 0 ? options.priority : this.config.defaultPriority,
      expires: options && options.expires !== void 0 ? options.expires : this.config.defaultTTL + getCurrTime()
    };
    if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
      logger2.warn(`Invalid parameter: priority due to out or range. It should be within 1 and 5.`);
      return;
    }
    const item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
    if (item.byteSize > this.config.itemMaxSize) {
      logger2.warn(`Item with key: ${key} you are trying to put into is too big!`);
      return;
    }
    try {
      const val = this.config.storage.getItem(prefixedKey);
      if (val) {
        this._removeItem(prefixedKey, JSON.parse(val).byteSize);
      }
      if (this._isCacheFull(item.byteSize)) {
        const validKeys = this._findValidKeys();
        if (this._isCacheFull(item.byteSize)) {
          const sizeToPop = this._sizeToPop(item.byteSize);
          this._popOutItems(validKeys, sizeToPop);
        }
      }
      this._setItem(prefixedKey, item);
    } catch (e) {
      logger2.warn(`setItem failed! ${e}`);
    }
  }
  getItem(key, options) {
    logger2.log(`Get item: key is ${key} with options ${options}`);
    let ret = null;
    const prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      logger2.warn(`Invalid key: should not be empty or 'CurSize'`);
      return null;
    }
    try {
      ret = this.config.storage.getItem(prefixedKey);
      if (ret != null) {
        if (this._isExpired(prefixedKey)) {
          this._removeItem(prefixedKey, JSON.parse(ret).byteSize);
          ret = null;
        } else {
          let item = JSON.parse(ret);
          item = this._refreshItem(item, prefixedKey);
          return item.data;
        }
      }
      if (options && options.callback !== void 0) {
        const val = options.callback();
        if (val !== null) {
          this.setItem(key, val, options);
        }
        return val;
      }
      return null;
    } catch (e) {
      logger2.warn(`getItem failed! ${e}`);
      return null;
    }
  }
  removeItem(key) {
    logger2.log(`Remove item: key is ${key}`);
    const prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      return;
    }
    try {
      const val = this.config.storage.getItem(prefixedKey);
      if (val) {
        this._removeItem(prefixedKey, JSON.parse(val).byteSize);
      }
    } catch (e) {
      logger2.warn(`removeItem failed! ${e}`);
    }
  }
  clear() {
    logger2.log(`Clear Cache`);
    const keysToRemove = [];
    for (let i = 0; i < this.config.storage.length; i += 1) {
      const key = this.config.storage.key(i);
      if (key.indexOf(this.config.keyPrefix) === 0) {
        keysToRemove.push(key);
      }
    }
    try {
      for (let i = 0; i < keysToRemove.length; i += 1) {
        this.config.storage.removeItem(keysToRemove[i]);
      }
    } catch (e) {
      logger2.warn(`clear failed! ${e}`);
    }
  }
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.config.storage.length; i += 1) {
      const key = this.config.storage.key(i);
      if (key.indexOf(this.config.keyPrefix) === 0 && key !== this.cacheCurSizeKey) {
        keys.push(key.substring(this.config.keyPrefix.length));
      }
    }
    return keys;
  }
  getCacheCurSize() {
    let ret = this.config.storage.getItem(this.cacheCurSizeKey);
    if (!ret) {
      this.config.storage.setItem(this.cacheCurSizeKey, "0");
      ret = "0";
    }
    return Number(ret);
  }
  createInstance(config) {
    if (!config.keyPrefix || config.keyPrefix === defaultConfig.keyPrefix) {
      logger2.error("invalid keyPrefix, setting keyPrefix with timeStamp");
      config.keyPrefix = getCurrTime.toString();
    }
    return new BrowserStorageCacheClass(config);
  }
};
var BrowserStorageCache = new BrowserStorageCacheClass();

// src/InMemoryCache.ts
import { ConsoleLogger as Logger3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger3 = new Logger3("InMemoryCache");
var InMemoryCacheClass = class extends StorageCache {
  constructor(config) {
    const cacheConfig = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    super(cacheConfig);
    logger3.debug("now we start!");
    this.cacheList = [];
    this.curSizeInBytes = 0;
    this.maxPriority = 5;
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    for (let i = 0; i < this.maxPriority; i += 1) {
      this.cacheList[i] = new CacheList();
    }
  }
  _decreaseCurSizeInBytes(amount) {
    this.curSizeInBytes -= amount;
  }
  _increaseCurSizeInBytes(amount) {
    this.curSizeInBytes += amount;
  }
  _isExpired(key) {
    const text = CacheObject.getItem(key);
    const item = JSON.parse(text);
    if (getCurrTime() >= item.expires) {
      return true;
    }
    return false;
  }
  _removeItem(prefixedKey, listIdx) {
    this.cacheList[listIdx].removeItem(prefixedKey);
    this._decreaseCurSizeInBytes(JSON.parse(CacheObject.getItem(prefixedKey)).byteSize);
    CacheObject.removeItem(prefixedKey);
  }
  _setItem(prefixedKey, item, listIdx) {
    this.cacheList[listIdx].insertItem(prefixedKey);
    this._increaseCurSizeInBytes(item.byteSize);
    CacheObject.setItem(prefixedKey, JSON.stringify(item));
  }
  _isCacheFull(itemSize) {
    return this.curSizeInBytes + itemSize > this.config.capacityInBytes;
  }
  containsKey(key) {
    const prefixedKey = this.config.keyPrefix + key;
    for (let i = 0; i < this.maxPriority; i += 1) {
      if (this.cacheList[i].containsKey(prefixedKey)) {
        return i + 1;
      }
    }
    return -1;
  }
  setItem(key, value, options) {
    const prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      logger3.warn(`Invalid key: should not be empty or 'CurSize'`);
      return;
    }
    if (typeof value === "undefined") {
      logger3.warn(`The value of item should not be undefined!`);
      return;
    }
    const cacheItemOptions = {
      priority: options && options.priority !== void 0 ? options.priority : this.config.defaultPriority,
      expires: options && options.expires !== void 0 ? options.expires : this.config.defaultTTL + getCurrTime()
    };
    if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
      logger3.warn(`Invalid parameter: priority due to out or range. It should be within 1 and 5.`);
      return;
    }
    const item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
    if (item.byteSize > this.config.itemMaxSize) {
      logger3.warn(`Item with key: ${key} you are trying to put into is too big!`);
      return;
    }
    const presentKeyPrio = this.containsKey(key);
    if (presentKeyPrio !== -1) {
      this._removeItem(prefixedKey, presentKeyPrio - 1);
    }
    let cacheListIdx = this.maxPriority - 1;
    while (this._isCacheFull(item.byteSize) && cacheListIdx >= 0) {
      if (!this.cacheList[cacheListIdx].isEmpty()) {
        const popedItemKey = this.cacheList[cacheListIdx].getLastItem();
        this._removeItem(popedItemKey, cacheListIdx);
      } else {
        cacheListIdx -= 1;
      }
    }
    this._setItem(prefixedKey, item, Number(item.priority) - 1);
  }
  getItem(key, options) {
    let ret = null;
    const prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      logger3.warn(`Invalid key: should not be empty or 'CurSize'`);
      return null;
    }
    const presentKeyPrio = this.containsKey(key);
    if (presentKeyPrio !== -1) {
      if (this._isExpired(prefixedKey)) {
        this._removeItem(prefixedKey, presentKeyPrio - 1);
      } else {
        ret = CacheObject.getItem(prefixedKey);
        const item = JSON.parse(ret);
        this.cacheList[item.priority - 1].refresh(prefixedKey);
        return item.data;
      }
    }
    if (options && options.callback !== void 0) {
      const val = options.callback();
      if (val !== null) {
        this.setItem(key, val, options);
      }
      return val;
    }
    return null;
  }
  removeItem(key) {
    const prefixedKey = this.config.keyPrefix + key;
    const presentKeyPrio = this.containsKey(key);
    if (presentKeyPrio !== -1) {
      this._removeItem(prefixedKey, presentKeyPrio - 1);
    }
  }
  clear() {
    for (let i = 0; i < this.maxPriority; i += 1) {
      for (const key of this.cacheList[i].getKeys()) {
        this._removeItem(key, i);
      }
    }
  }
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.maxPriority; i += 1) {
      for (const key of this.cacheList[i].getKeys()) {
        keys.push(key.substring(this.config.keyPrefix.length));
      }
    }
    return keys;
  }
  getCacheCurSize() {
    return this.curSizeInBytes;
  }
  createInstance(config) {
    return new InMemoryCacheClass(config);
  }
};
var InMemoryCache = new InMemoryCacheClass();

// src/index.ts
var src_default = BrowserStorageCache;
Amplify.register(BrowserStorageCache);
export {
  BrowserStorageCache,
  InMemoryCache,
  src_default as default
};
