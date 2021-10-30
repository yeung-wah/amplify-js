var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../../node_modules/camelcase-keys/node_modules/map-obj/index.js
var require_map_obj = __commonJS({
  "../../node_modules/camelcase-keys/node_modules/map-obj/index.js"(exports, module2) {
    "use strict";
    var isObject = (value) => typeof value === "object" && value !== null;
    var mapObjectSkip = Symbol("skip");
    var isObjectCustom = (value) => isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
    var mapObject = (object, mapper, options, isSeen = new WeakMap()) => {
      options = {
        deep: false,
        target: {},
        ...options
      };
      if (isSeen.has(object)) {
        return isSeen.get(object);
      }
      isSeen.set(object, options.target);
      const { target } = options;
      delete options.target;
      const mapArray = (array) => array.map((element) => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
      if (Array.isArray(object)) {
        return mapArray(object);
      }
      for (const [key, value] of Object.entries(object)) {
        const mapResult = mapper(key, value, object);
        if (mapResult === mapObjectSkip) {
          continue;
        }
        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
        if (newKey === "__proto__") {
          continue;
        }
        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
          newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
        }
        target[newKey] = newValue;
      }
      return target;
    };
    module2.exports = (object, mapper, options) => {
      if (!isObject(object)) {
        throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
      }
      return mapObject(object, mapper, options);
    };
    module2.exports.mapObjectSkip = mapObjectSkip;
  }
});

// ../../node_modules/camelcase/index.js
var require_camelcase = __commonJS({
  "../../node_modules/camelcase/index.js"(exports, module2) {
    "use strict";
    var preserveCamelCase = (string) => {
      let isLastCharLower = false;
      let isLastCharUpper = false;
      let isLastLastCharUpper = false;
      for (let i = 0; i < string.length; i++) {
        const character = string[i];
        if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
          string = string.slice(0, i) + "-" + string.slice(i);
          isLastCharLower = false;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = true;
          i++;
        } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
          string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = false;
          isLastCharLower = true;
        } else {
          isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
        }
      }
      return string;
    };
    var camelCase = (input, options) => {
      if (!(typeof input === "string" || Array.isArray(input))) {
        throw new TypeError("Expected the input to be `string | string[]`");
      }
      options = Object.assign({
        pascalCase: false
      }, options);
      const postProcess = (x) => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
      if (Array.isArray(input)) {
        input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
      } else {
        input = input.trim();
      }
      if (input.length === 0) {
        return "";
      }
      if (input.length === 1) {
        return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
      }
      const hasUpperCase = input !== input.toLowerCase();
      if (hasUpperCase) {
        input = preserveCamelCase(input);
      }
      input = input.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, (m) => m.toUpperCase());
      return postProcess(input);
    };
    module2.exports = camelCase;
    module2.exports.default = camelCase;
  }
});

// ../../node_modules/quick-lru/index.js
var require_quick_lru = __commonJS({
  "../../node_modules/quick-lru/index.js"(exports, module2) {
    "use strict";
    var QuickLRU = class {
      constructor(options = {}) {
        if (!(options.maxSize && options.maxSize > 0)) {
          throw new TypeError("`maxSize` must be a number greater than 0");
        }
        this.maxSize = options.maxSize;
        this.cache = new Map();
        this.oldCache = new Map();
        this._size = 0;
      }
      _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
          this._size = 0;
          this.oldCache = this.cache;
          this.cache = new Map();
        }
      }
      get(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          const value = this.oldCache.get(key);
          this.oldCache.delete(key);
          this._set(key, value);
          return value;
        }
      }
      set(key, value) {
        if (this.cache.has(key)) {
          this.cache.set(key, value);
        } else {
          this._set(key, value);
        }
        return this;
      }
      has(key) {
        return this.cache.has(key) || this.oldCache.has(key);
      }
      peek(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          return this.oldCache.get(key);
        }
      }
      delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
          this._size--;
        }
        return this.oldCache.delete(key) || deleted;
      }
      clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
      }
      *keys() {
        for (const [key] of this) {
          yield key;
        }
      }
      *values() {
        for (const [, value] of this) {
          yield value;
        }
      }
      *[Symbol.iterator]() {
        for (const item of this.cache) {
          yield item;
        }
        for (const item of this.oldCache) {
          const [key] = item;
          if (!this.cache.has(key)) {
            yield item;
          }
        }
      }
      get size() {
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()) {
          if (!this.cache.has(key)) {
            oldCacheSize++;
          }
        }
        return this._size + oldCacheSize;
      }
    };
    module2.exports = QuickLRU;
  }
});

// ../../node_modules/camelcase-keys/index.js
var require_camelcase_keys = __commonJS({
  "../../node_modules/camelcase-keys/index.js"(exports, module2) {
    "use strict";
    var mapObj = require_map_obj();
    var camelCase = require_camelcase();
    var QuickLru = require_quick_lru();
    var has = (array, key) => array.some((x) => {
      if (typeof x === "string") {
        return x === key;
      }
      x.lastIndex = 0;
      return x.test(key);
    });
    var cache = new QuickLru({ maxSize: 1e5 });
    var isObject = (value) => typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
    var camelCaseConvert = (input, options) => {
      if (!isObject(input)) {
        return input;
      }
      options = {
        deep: false,
        pascalCase: false,
        ...options
      };
      const { exclude, pascalCase, stopPaths, deep } = options;
      const stopPathsSet = new Set(stopPaths);
      const makeMapper = (parentPath) => (key, value) => {
        if (deep && isObject(value)) {
          const path = parentPath === void 0 ? key : `${parentPath}.${key}`;
          if (!stopPathsSet.has(path)) {
            value = mapObj(value, makeMapper(path));
          }
        }
        if (!(exclude && has(exclude, key))) {
          const cacheKey = pascalCase ? `${key}_` : key;
          if (cache.has(cacheKey)) {
            key = cache.get(cacheKey);
          } else {
            const ret = camelCase(key, { pascalCase });
            if (key.length < 100) {
              cache.set(cacheKey, ret);
            }
            key = ret;
          }
        }
        return [key, value];
      };
      return mapObj(input, makeMapper(void 0));
    };
    module2.exports = (input, options) => {
      if (Array.isArray(input)) {
        return Object.keys(input).map((key) => camelCaseConvert(input[key], options));
      }
      return camelCaseConvert(input, options);
    };
  }
});

// ../../node_modules/@aws-sdk/client-location/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/@aws-sdk/client-location/node_modules/tslib/tslib.js"(exports, module2) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __spreadArray3;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __createBinding3;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends3 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate3 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param3 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata3 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter3 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator3 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar3 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding3(o, m, p);
      };
      __createBinding3 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values3 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read3 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread3 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read3(arguments[i]));
        return ar;
      };
      __spreadArrays3 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray3 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await3 = function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      };
      __asyncGenerator3 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator3 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await3(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues3 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject3 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar3 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding3(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault3 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet3 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__spreadArray", __spreadArray3);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
    });
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module2) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __createBinding3;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      __extends3 = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate3 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param3 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata3 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter3 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator3 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding3 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar3 = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values3 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read3 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread3 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read3(arguments[i]));
        return ar;
      };
      __spreadArrays3 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await3 = function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      };
      __asyncGenerator3 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator3 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await3(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues3 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject3 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar3 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault3 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet3 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet3 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
    });
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData;
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/constants.js
var require_constants = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMPTY_DATA_SHA_256 = exports.SHA_256_HMAC_ALGO = exports.SHA_256_HASH = void 0;
    exports.SHA_256_HASH = { name: "SHA-256" };
    exports.SHA_256_HMAC_ALGO = {
      name: "HMAC",
      hash: exports.SHA_256_HASH
    };
    exports.EMPTY_DATA_SHA_256 = new Uint8Array([
      227,
      176,
      196,
      66,
      152,
      252,
      28,
      20,
      154,
      251,
      244,
      200,
      153,
      111,
      185,
      36,
      39,
      174,
      65,
      228,
      100,
      155,
      147,
      76,
      164,
      149,
      153,
      27,
      120,
      82,
      184,
      85
    ]);
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/pureJs.js
var require_pureJs = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf84 = (input) => {
      const bytes = [];
      for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    };
    exports.fromUtf8 = fromUtf84;
    var toUtf84 = (input) => {
      let decoded = "";
      for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i], input[++i], input[++i]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
      }
      return decoded;
    };
    exports.toUtf8 = toUtf84;
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf84(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf84;
    function toUtf84(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf84;
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi();
    var fromUtf84 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf84;
    var toUtf84 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf84;
  }
});

// ../../node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "../../node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.locateWindow = void 0;
    var fallbackWindow = {};
    function locateWindow() {
      if (typeof window !== "undefined") {
        return window;
      } else if (typeof self !== "undefined") {
        return self;
      }
      return fallbackWindow;
    }
    exports.locateWindow = locateWindow;
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js
var require_ie11Sha256 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var isEmptyData_1 = require_isEmptyData();
    var constants_1 = require_constants();
    var util_utf8_browser_1 = require_cjs();
    var util_locate_window_1 = require_dist_cjs();
    var Sha2562 = function() {
      function Sha2563(secret) {
        if (secret) {
          this.operation = getKeyPromise(secret).then(function(keyData) {
            return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);
          });
          this.operation.catch(function() {
          });
        } else {
          this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest("SHA-256"));
        }
      }
      Sha2563.prototype.update = function(toHash) {
        var _this = this;
        if ((0, isEmptyData_1.isEmptyData)(toHash)) {
          return;
        }
        this.operation = this.operation.then(function(operation) {
          operation.onerror = function() {
            _this.operation = Promise.reject(new Error("Error encountered updating hash"));
          };
          operation.process(toArrayBufferView(toHash));
          return operation;
        });
        this.operation.catch(function() {
        });
      };
      Sha2563.prototype.digest = function() {
        return this.operation.then(function(operation) {
          return new Promise(function(resolve, reject) {
            operation.onerror = function() {
              reject(new Error("Error encountered finalizing hash"));
            };
            operation.oncomplete = function() {
              if (operation.result) {
                resolve(new Uint8Array(operation.result));
              }
              reject(new Error("Error encountered finalizing hash"));
            };
            operation.finish();
          });
        });
      };
      return Sha2563;
    }();
    exports.Sha256 = Sha2562;
    function getKeyPromise(secret) {
      return new Promise(function(resolve, reject) {
        var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]);
        keyOperation.oncomplete = function() {
          if (keyOperation.result) {
            resolve(keyOperation.result);
          }
          reject(new Error("ImportKey completed without importing key."));
        };
        keyOperation.onerror = function() {
          reject(new Error("ImportKey failed to import key."));
        };
      });
    }
    function toArrayBufferView(data) {
      if (typeof data === "string") {
        return (0, util_utf8_browser_1.fromUtf8)(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
var require_pureJs2 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf84 = (input) => {
      const bytes = [];
      for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    };
    exports.fromUtf8 = fromUtf84;
    var toUtf84 = (input) => {
      let decoded = "";
      for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i], input[++i], input[++i]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
      }
      return decoded;
    };
    exports.toUtf8 = toUtf84;
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi2 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf84(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf84;
    function toUtf84(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf84;
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs2();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi2();
    var fromUtf84 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf84;
    var toUtf84 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf84;
  }
});

// ../../node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "../../node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs2();
    var fromUtf84 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf84(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer;
  }
});

// ../../node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData2 = __commonJS({
  "../../node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData;
  }
});

// ../../node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "../../node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint8(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    exports.numToUint8 = numToUint8;
  }
});

// ../../node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "../../node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom(a_lookUpTable) {
      if (!Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    exports.uint32ArrayFrom = uint32ArrayFrom;
  }
});

// ../../node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
  "../../node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData2();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js
var require_webCryptoSha256 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var util_1 = require_build();
    var constants_1 = require_constants();
    var util_locate_window_1 = require_dist_cjs();
    var Sha2562 = function() {
      function Sha2563(secret) {
        this.toHash = new Uint8Array(0);
        if (secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      }
      Sha2563.prototype.update = function(data) {
        if ((0, util_1.isEmptyData)(data)) {
          return;
        }
        var update = (0, util_1.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2563.prototype.digest = function() {
        var _this = this;
        if (this.key) {
          return this.key.then(function(key) {
            return (0, util_locate_window_1.locateWindow)().crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
              return new Uint8Array(data);
            });
          });
        }
        if ((0, util_1.isEmptyData)(this.toHash)) {
          return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
        }
        return Promise.resolve().then(function() {
          return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
        }).then(function(data) {
          return Promise.resolve(new Uint8Array(data));
        });
      };
      return Sha2563;
    }();
    exports.Sha256 = Sha2562;
  }
});

// ../../node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
    exports.BLOCK_SIZE = 64;
    exports.DIGEST_LENGTH = 32;
    exports.KEY = new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    exports.INIT = [
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ];
    exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  }
});

// ../../node_modules/@aws-crypto/sha256-js/build/RawSha256.js
var require_RawSha256 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RawSha256 = void 0;
    var constants_1 = require_constants2();
    var RawSha256 = function() {
      function RawSha2562() {
        this.state = Int32Array.from(constants_1.INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
      }
      RawSha2562.prototype.update = function(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength--;
          if (this.bufferLength === constants_1.BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
          }
        }
      };
      RawSha2562.prototype.digest = function() {
        if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8;
          var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
          var undecoratedLength = this.bufferLength;
          bufferView.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++) {
              bufferView.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++) {
            bufferView.setUint8(i, 0);
          }
          bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
          bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
          this.hashBuffer();
          this.finished = true;
        }
        var out = new Uint8Array(constants_1.DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
          out[i * 4] = this.state[i] >>> 24 & 255;
          out[i * 4 + 1] = this.state[i] >>> 16 & 255;
          out[i * 4 + 2] = this.state[i] >>> 8 & 255;
          out[i * 4 + 3] = this.state[i] >>> 0 & 255;
        }
        return out;
      };
      RawSha2562.prototype.hashBuffer = function() {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
          if (i < 16) {
            this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
          } else {
            var u = this.temp[i - 2];
            var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = this.temp[i - 15];
            var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
          }
          var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i] + this.temp[i] | 0) | 0) | 0;
          var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
          state7 = state6;
          state6 = state5;
          state5 = state4;
          state4 = state3 + t1 | 0;
          state3 = state2;
          state2 = state1;
          state1 = state0;
          state0 = t1 + t2 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
      };
      return RawSha2562;
    }();
    exports.RawSha256 = RawSha256;
  }
});

// ../../node_modules/@aws-crypto/sha256-js/build/jsSha256.js
var require_jsSha256 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var tslib_1 = require_tslib2();
    var constants_1 = require_constants2();
    var RawSha256_1 = require_RawSha256();
    var util_1 = require_build();
    var Sha2562 = function() {
      function Sha2563(secret) {
        this.hash = new RawSha256_1.RawSha256();
        if (secret) {
          this.outer = new RawSha256_1.RawSha256();
          var inner = bufferFromSecret(secret);
          var outer = new Uint8Array(constants_1.BLOCK_SIZE);
          outer.set(inner);
          for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
            inner[i] ^= 54;
            outer[i] ^= 92;
          }
          this.hash.update(inner);
          this.outer.update(outer);
          for (var i = 0; i < inner.byteLength; i++) {
            inner[i] = 0;
          }
        }
      }
      Sha2563.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update((0, util_1.convertToBuffer)(toHash));
        } catch (e) {
          this.error = e;
        }
      };
      Sha2563.prototype.digestSync = function() {
        if (this.error) {
          throw this.error;
        }
        if (this.outer) {
          if (!this.outer.finished) {
            this.outer.update(this.hash.digest());
          }
          return this.outer.digest();
        }
        return this.hash.digest();
      };
      Sha2563.prototype.digest = function() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
          return (0, tslib_1.__generator)(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      return Sha2563;
    }();
    exports.Sha256 = Sha2562;
    function bufferFromSecret(secret) {
      var input = (0, util_1.convertToBuffer)(secret);
      if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
      }
      var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
      buffer.set(input);
      return buffer;
    }
  }
});

// ../../node_modules/@aws-crypto/sha256-js/build/index.js
var require_build2 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    (0, tslib_1.__exportStar)(require_jsSha256(), exports);
  }
});

// ../../node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js
var require_supportsWebCrypto = __commonJS({
  "../../node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;
    var tslib_1 = require_tslib2();
    var subtleCryptoMethods = [
      "decrypt",
      "digest",
      "encrypt",
      "exportKey",
      "generateKey",
      "importKey",
      "sign",
      "verify"
    ];
    function supportsWebCrypto(window2) {
      if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
        var subtle = window2.crypto.subtle;
        return supportsSubtleCrypto(subtle);
      }
      return false;
    }
    exports.supportsWebCrypto = supportsWebCrypto;
    function supportsSecureRandom(window2) {
      if (typeof window2 === "object" && typeof window2.crypto === "object") {
        var getRandomValues2 = window2.crypto.getRandomValues;
        return typeof getRandomValues2 === "function";
      }
      return false;
    }
    exports.supportsSecureRandom = supportsSecureRandom;
    function supportsSubtleCrypto(subtle) {
      return subtle && subtleCryptoMethods.every(function(methodName) {
        return typeof subtle[methodName] === "function";
      });
    }
    exports.supportsSubtleCrypto = supportsSubtleCrypto;
    function supportsZeroByteGCM(subtle) {
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        var key, zeroByteAuthTag, _a;
        return tslib_1.__generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!supportsSubtleCrypto(subtle))
                return [2, false];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, , 5]);
              return [4, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
            case 2:
              key = _b.sent();
              return [4, subtle.encrypt({
                name: "AES-GCM",
                iv: new Uint8Array(Array(12)),
                additionalData: new Uint8Array(Array(16)),
                tagLength: 128
              }, key, new Uint8Array(0))];
            case 3:
              zeroByteAuthTag = _b.sent();
              return [2, zeroByteAuthTag.byteLength === 16];
            case 4:
              _a = _b.sent();
              return [2, false];
            case 5:
              return [2];
          }
        });
      });
    }
    exports.supportsZeroByteGCM = supportsZeroByteGCM;
  }
});

// ../../node_modules/@aws-crypto/supports-web-crypto/build/index.js
var require_build3 = __commonJS({
  "../../node_modules/@aws-crypto/supports-web-crypto/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    tslib_1.__exportStar(require_supportsWebCrypto(), exports);
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js
var require_CryptoOperation = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/Key.js
var require_Key = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/Key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js
var require_KeyOperation = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js
var require_MsSubtleCrypto = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/MsWindow.js
var require_MsWindow = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/MsWindow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMsWindow = void 0;
    var msSubtleCryptoMethods = [
      "decrypt",
      "digest",
      "encrypt",
      "exportKey",
      "generateKey",
      "importKey",
      "sign",
      "verify"
    ];
    function quacksLikeAnMsWindow(window2) {
      return "MSInputMethodContext" in window2 && "msCrypto" in window2;
    }
    function isMsWindow(window2) {
      if (quacksLikeAnMsWindow(window2) && window2.msCrypto.subtle !== void 0) {
        var _a = window2.msCrypto, getRandomValues2 = _a.getRandomValues, subtle_1 = _a.subtle;
        return msSubtleCryptoMethods.map(function(methodName) {
          return subtle_1[methodName];
        }).concat(getRandomValues2).every(function(method) {
          return typeof method === "function";
        });
      }
      return false;
    }
    exports.isMsWindow = isMsWindow;
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/index.js
var require_build4 = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    tslib_1.__exportStar(require_CryptoOperation(), exports);
    tslib_1.__exportStar(require_Key(), exports);
    tslib_1.__exportStar(require_KeyOperation(), exports);
    tslib_1.__exportStar(require_MsSubtleCrypto(), exports);
    tslib_1.__exportStar(require_MsWindow(), exports);
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js
var require_crossPlatformSha256 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var ie11Sha256_1 = require_ie11Sha256();
    var webCryptoSha256_1 = require_webCryptoSha256();
    var sha256_js_1 = require_build2();
    var supports_web_crypto_1 = require_build3();
    var ie11_detection_1 = require_build4();
    var util_locate_window_1 = require_dist_cjs();
    var Sha2562 = function() {
      function Sha2563(secret) {
        if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new webCryptoSha256_1.Sha256(secret);
        } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new ie11Sha256_1.Sha256(secret);
        } else {
          this.hash = new sha256_js_1.Sha256(secret);
        }
      }
      Sha2563.prototype.update = function(data, encoding) {
        this.hash.update(data, encoding);
      };
      Sha2563.prototype.digest = function() {
        return this.hash.digest();
      };
      return Sha2563;
    }();
    exports.Sha256 = Sha2562;
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/index.js
var require_build5 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;
    var tslib_1 = require_tslib2();
    (0, tslib_1.__exportStar)(require_crossPlatformSha256(), exports);
    var ie11Sha256_1 = require_ie11Sha256();
    Object.defineProperty(exports, "Ie11Sha256", { enumerable: true, get: function() {
      return ie11Sha256_1.Sha256;
    } });
    var webCryptoSha256_1 = require_webCryptoSha256();
    Object.defineProperty(exports, "WebCryptoSha256", { enumerable: true, get: function() {
      return webCryptoSha256_1.Sha256;
    } });
  }
});

// ../../node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "../../node_modules/bowser/es5.js"(exports, module2) {
    !function(e, t) {
      typeof exports == "object" && typeof module2 == "object" ? module2.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.bowser = t() : e.bowser = t();
    }(exports, function() {
      return function(e) {
        var t = {};
        function r(n) {
          if (t[n])
            return t[n].exports;
          var i = t[n] = { i: n, l: false, exports: {} };
          return e[n].call(i.exports, i, i.exports, r), i.l = true, i.exports;
        }
        return r.m = e, r.c = t, r.d = function(e2, t2, n) {
          r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
        }, r.r = function(e2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, r.t = function(e2, t2) {
          if (1 & t2 && (e2 = r(e2)), 8 & t2)
            return e2;
          if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
            return e2;
          var n = Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
            for (var i in e2)
              r.d(n, i, function(t3) {
                return e2[t3];
              }.bind(null, i));
          return n;
        }, r.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return r.d(t2, "a", t2), t2;
        }, r.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, r.p = "", r(r.s = 90);
      }({ 17: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n = r(18), i = function() {
          function e2() {
          }
          return e2.getFirstMatch = function(e3, t2) {
            var r2 = t2.match(e3);
            return r2 && r2.length > 0 && r2[1] || "";
          }, e2.getSecondMatch = function(e3, t2) {
            var r2 = t2.match(e3);
            return r2 && r2.length > 1 && r2[2] || "";
          }, e2.matchAndReturnConst = function(e3, t2, r2) {
            if (e3.test(t2))
              return r2;
          }, e2.getWindowsVersionName = function(e3) {
            switch (e3) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          }, e2.getMacOSVersionName = function(e3) {
            var t2 = e3.split(".").splice(0, 2).map(function(e4) {
              return parseInt(e4, 10) || 0;
            });
            if (t2.push(0), t2[0] === 10)
              switch (t2[1]) {
                case 5:
                  return "Leopard";
                case 6:
                  return "Snow Leopard";
                case 7:
                  return "Lion";
                case 8:
                  return "Mountain Lion";
                case 9:
                  return "Mavericks";
                case 10:
                  return "Yosemite";
                case 11:
                  return "El Capitan";
                case 12:
                  return "Sierra";
                case 13:
                  return "High Sierra";
                case 14:
                  return "Mojave";
                case 15:
                  return "Catalina";
                default:
                  return;
              }
          }, e2.getAndroidVersionName = function(e3) {
            var t2 = e3.split(".").splice(0, 2).map(function(e4) {
              return parseInt(e4, 10) || 0;
            });
            if (t2.push(0), !(t2[0] === 1 && t2[1] < 5))
              return t2[0] === 1 && t2[1] < 6 ? "Cupcake" : t2[0] === 1 && t2[1] >= 6 ? "Donut" : t2[0] === 2 && t2[1] < 2 ? "Eclair" : t2[0] === 2 && t2[1] === 2 ? "Froyo" : t2[0] === 2 && t2[1] > 2 ? "Gingerbread" : t2[0] === 3 ? "Honeycomb" : t2[0] === 4 && t2[1] < 1 ? "Ice Cream Sandwich" : t2[0] === 4 && t2[1] < 4 ? "Jelly Bean" : t2[0] === 4 && t2[1] >= 4 ? "KitKat" : t2[0] === 5 ? "Lollipop" : t2[0] === 6 ? "Marshmallow" : t2[0] === 7 ? "Nougat" : t2[0] === 8 ? "Oreo" : t2[0] === 9 ? "Pie" : void 0;
          }, e2.getVersionPrecision = function(e3) {
            return e3.split(".").length;
          }, e2.compareVersions = function(t2, r2, n2) {
            n2 === void 0 && (n2 = false);
            var i2 = e2.getVersionPrecision(t2), s = e2.getVersionPrecision(r2), a = Math.max(i2, s), o = 0, u = e2.map([t2, r2], function(t3) {
              var r3 = a - e2.getVersionPrecision(t3), n3 = t3 + new Array(r3 + 1).join(".0");
              return e2.map(n3.split("."), function(e3) {
                return new Array(20 - e3.length).join("0") + e3;
              }).reverse();
            });
            for (n2 && (o = a - Math.min(i2, s)), a -= 1; a >= o; ) {
              if (u[0][a] > u[1][a])
                return 1;
              if (u[0][a] === u[1][a]) {
                if (a === o)
                  return 0;
                a -= 1;
              } else if (u[0][a] < u[1][a])
                return -1;
            }
          }, e2.map = function(e3, t2) {
            var r2, n2 = [];
            if (Array.prototype.map)
              return Array.prototype.map.call(e3, t2);
            for (r2 = 0; r2 < e3.length; r2 += 1)
              n2.push(t2(e3[r2]));
            return n2;
          }, e2.find = function(e3, t2) {
            var r2, n2;
            if (Array.prototype.find)
              return Array.prototype.find.call(e3, t2);
            for (r2 = 0, n2 = e3.length; r2 < n2; r2 += 1) {
              var i2 = e3[r2];
              if (t2(i2, r2))
                return i2;
            }
          }, e2.assign = function(e3) {
            for (var t2, r2, n2 = e3, i2 = arguments.length, s = new Array(i2 > 1 ? i2 - 1 : 0), a = 1; a < i2; a++)
              s[a - 1] = arguments[a];
            if (Object.assign)
              return Object.assign.apply(Object, [e3].concat(s));
            var o = function() {
              var e4 = s[t2];
              typeof e4 == "object" && e4 !== null && Object.keys(e4).forEach(function(t3) {
                n2[t3] = e4[t3];
              });
            };
            for (t2 = 0, r2 = s.length; t2 < r2; t2 += 1)
              o();
            return e3;
          }, e2.getBrowserAlias = function(e3) {
            return n.BROWSER_ALIASES_MAP[e3];
          }, e2.getBrowserTypeByAlias = function(e3) {
            return n.BROWSER_MAP[e3] || "";
          }, e2;
        }();
        t.default = i, e.exports = t.default;
      }, 18: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
        t.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
        t.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
        t.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
        t.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
        t.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
      }, 90: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n, i = (n = r(91)) && n.__esModule ? n : { default: n }, s = r(18);
        function a(e2, t2) {
          for (var r2 = 0; r2 < t2.length; r2++) {
            var n2 = t2[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
          }
        }
        var o = function() {
          function e2() {
          }
          var t2, r2, n2;
          return e2.getParser = function(e3, t3) {
            if (t3 === void 0 && (t3 = false), typeof e3 != "string")
              throw new Error("UserAgent should be a string");
            return new i.default(e3, t3);
          }, e2.parse = function(e3) {
            return new i.default(e3).getResult();
          }, t2 = e2, n2 = [{ key: "BROWSER_MAP", get: function() {
            return s.BROWSER_MAP;
          } }, { key: "ENGINE_MAP", get: function() {
            return s.ENGINE_MAP;
          } }, { key: "OS_MAP", get: function() {
            return s.OS_MAP;
          } }, { key: "PLATFORMS_MAP", get: function() {
            return s.PLATFORMS_MAP;
          } }], (r2 = null) && a(t2.prototype, r2), n2 && a(t2, n2), e2;
        }();
        t.default = o, e.exports = t.default;
      }, 91: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n = u(r(92)), i = u(r(93)), s = u(r(94)), a = u(r(95)), o = u(r(17));
        function u(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var d = function() {
          function e2(e3, t3) {
            if (t3 === void 0 && (t3 = false), e3 == null || e3 === "")
              throw new Error("UserAgent parameter can't be empty");
            this._ua = e3, this.parsedResult = {}, t3 !== true && this.parse();
          }
          var t2 = e2.prototype;
          return t2.getUA = function() {
            return this._ua;
          }, t2.test = function(e3) {
            return e3.test(this._ua);
          }, t2.parseBrowser = function() {
            var e3 = this;
            this.parsedResult.browser = {};
            var t3 = o.default.find(n.default, function(t4) {
              if (typeof t4.test == "function")
                return t4.test(e3);
              if (t4.test instanceof Array)
                return t4.test.some(function(t5) {
                  return e3.test(t5);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t3 && (this.parsedResult.browser = t3.describe(this.getUA())), this.parsedResult.browser;
          }, t2.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t2.getBrowserName = function(e3) {
            return e3 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
          }, t2.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t2.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t2.parseOS = function() {
            var e3 = this;
            this.parsedResult.os = {};
            var t3 = o.default.find(i.default, function(t4) {
              if (typeof t4.test == "function")
                return t4.test(e3);
              if (t4.test instanceof Array)
                return t4.test.some(function(t5) {
                  return e3.test(t5);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t3 && (this.parsedResult.os = t3.describe(this.getUA())), this.parsedResult.os;
          }, t2.getOSName = function(e3) {
            var t3 = this.getOS().name;
            return e3 ? String(t3).toLowerCase() || "" : t3 || "";
          }, t2.getOSVersion = function() {
            return this.getOS().version;
          }, t2.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t2.getPlatformType = function(e3) {
            e3 === void 0 && (e3 = false);
            var t3 = this.getPlatform().type;
            return e3 ? String(t3).toLowerCase() || "" : t3 || "";
          }, t2.parsePlatform = function() {
            var e3 = this;
            this.parsedResult.platform = {};
            var t3 = o.default.find(s.default, function(t4) {
              if (typeof t4.test == "function")
                return t4.test(e3);
              if (t4.test instanceof Array)
                return t4.test.some(function(t5) {
                  return e3.test(t5);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t3 && (this.parsedResult.platform = t3.describe(this.getUA())), this.parsedResult.platform;
          }, t2.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t2.getEngineName = function(e3) {
            return e3 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
          }, t2.parseEngine = function() {
            var e3 = this;
            this.parsedResult.engine = {};
            var t3 = o.default.find(a.default, function(t4) {
              if (typeof t4.test == "function")
                return t4.test(e3);
              if (t4.test instanceof Array)
                return t4.test.some(function(t5) {
                  return e3.test(t5);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t3 && (this.parsedResult.engine = t3.describe(this.getUA())), this.parsedResult.engine;
          }, t2.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }, t2.getResult = function() {
            return o.default.assign({}, this.parsedResult);
          }, t2.satisfies = function(e3) {
            var t3 = this, r2 = {}, n2 = 0, i2 = {}, s2 = 0;
            if (Object.keys(e3).forEach(function(t4) {
              var a3 = e3[t4];
              typeof a3 == "string" ? (i2[t4] = a3, s2 += 1) : typeof a3 == "object" && (r2[t4] = a3, n2 += 1);
            }), n2 > 0) {
              var a2 = Object.keys(r2), u2 = o.default.find(a2, function(e4) {
                return t3.isOS(e4);
              });
              if (u2) {
                var d2 = this.satisfies(r2[u2]);
                if (d2 !== void 0)
                  return d2;
              }
              var c = o.default.find(a2, function(e4) {
                return t3.isPlatform(e4);
              });
              if (c) {
                var f = this.satisfies(r2[c]);
                if (f !== void 0)
                  return f;
              }
            }
            if (s2 > 0) {
              var l = Object.keys(i2), h = o.default.find(l, function(e4) {
                return t3.isBrowser(e4, true);
              });
              if (h !== void 0)
                return this.compareVersion(i2[h]);
            }
          }, t2.isBrowser = function(e3, t3) {
            t3 === void 0 && (t3 = false);
            var r2 = this.getBrowserName().toLowerCase(), n2 = e3.toLowerCase(), i2 = o.default.getBrowserTypeByAlias(n2);
            return t3 && i2 && (n2 = i2.toLowerCase()), n2 === r2;
          }, t2.compareVersion = function(e3) {
            var t3 = [0], r2 = e3, n2 = false, i2 = this.getBrowserVersion();
            if (typeof i2 == "string")
              return e3[0] === ">" || e3[0] === "<" ? (r2 = e3.substr(1), e3[1] === "=" ? (n2 = true, r2 = e3.substr(2)) : t3 = [], e3[0] === ">" ? t3.push(1) : t3.push(-1)) : e3[0] === "=" ? r2 = e3.substr(1) : e3[0] === "~" && (n2 = true, r2 = e3.substr(1)), t3.indexOf(o.default.compareVersions(i2, r2, n2)) > -1;
          }, t2.isOS = function(e3) {
            return this.getOSName(true) === String(e3).toLowerCase();
          }, t2.isPlatform = function(e3) {
            return this.getPlatformType(true) === String(e3).toLowerCase();
          }, t2.isEngine = function(e3) {
            return this.getEngineName(true) === String(e3).toLowerCase();
          }, t2.is = function(e3, t3) {
            return t3 === void 0 && (t3 = false), this.isBrowser(e3, t3) || this.isOS(e3) || this.isPlatform(e3);
          }, t2.some = function(e3) {
            var t3 = this;
            return e3 === void 0 && (e3 = []), e3.some(function(e4) {
              return t3.is(e4);
            });
          }, e2;
        }();
        t.default = d, e.exports = t.default;
      }, 92: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : { default: n };
        var s = /version\/(\d+(\.?_?\d+)+)/i, a = [{ test: [/googlebot/i], describe: function(e2) {
          var t2 = { name: "Googlebot" }, r2 = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/opera/i], describe: function(e2) {
          var t2 = { name: "Opera" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/opr\/|opios/i], describe: function(e2) {
          var t2 = { name: "Opera" }, r2 = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/SamsungBrowser/i], describe: function(e2) {
          var t2 = { name: "Samsung Internet for Android" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/Whale/i], describe: function(e2) {
          var t2 = { name: "NAVER Whale Browser" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/MZBrowser/i], describe: function(e2) {
          var t2 = { name: "MZ Browser" }, r2 = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/focus/i], describe: function(e2) {
          var t2 = { name: "Focus" }, r2 = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/swing/i], describe: function(e2) {
          var t2 = { name: "Swing" }, r2 = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/coast/i], describe: function(e2) {
          var t2 = { name: "Opera Coast" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e2) {
          var t2 = { name: "Opera Touch" }, r2 = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/yabrowser/i], describe: function(e2) {
          var t2 = { name: "Yandex Browser" }, r2 = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/ucbrowser/i], describe: function(e2) {
          var t2 = { name: "UC Browser" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/Maxthon|mxios/i], describe: function(e2) {
          var t2 = { name: "Maxthon" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/epiphany/i], describe: function(e2) {
          var t2 = { name: "Epiphany" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/puffin/i], describe: function(e2) {
          var t2 = { name: "Puffin" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/sleipnir/i], describe: function(e2) {
          var t2 = { name: "Sleipnir" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/k-meleon/i], describe: function(e2) {
          var t2 = { name: "K-Meleon" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/micromessenger/i], describe: function(e2) {
          var t2 = { name: "WeChat" }, r2 = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/qqbrowser/i], describe: function(e2) {
          var t2 = { name: /qqbrowserlite/i.test(e2) ? "QQ Browser Lite" : "QQ Browser" }, r2 = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/msie|trident/i], describe: function(e2) {
          var t2 = { name: "Internet Explorer" }, r2 = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/\sedg\//i], describe: function(e2) {
          var t2 = { name: "Microsoft Edge" }, r2 = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/edg([ea]|ios)/i], describe: function(e2) {
          var t2 = { name: "Microsoft Edge" }, r2 = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/vivaldi/i], describe: function(e2) {
          var t2 = { name: "Vivaldi" }, r2 = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/seamonkey/i], describe: function(e2) {
          var t2 = { name: "SeaMonkey" }, r2 = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/sailfish/i], describe: function(e2) {
          var t2 = { name: "Sailfish" }, r2 = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/silk/i], describe: function(e2) {
          var t2 = { name: "Amazon Silk" }, r2 = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/phantom/i], describe: function(e2) {
          var t2 = { name: "PhantomJS" }, r2 = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/slimerjs/i], describe: function(e2) {
          var t2 = { name: "SlimerJS" }, r2 = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e2) {
          var t2 = { name: "BlackBerry" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e2) {
          var t2 = { name: "WebOS Browser" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/bada/i], describe: function(e2) {
          var t2 = { name: "Bada" }, r2 = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/tizen/i], describe: function(e2) {
          var t2 = { name: "Tizen" }, r2 = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/qupzilla/i], describe: function(e2) {
          var t2 = { name: "QupZilla" }, r2 = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e2) {
          var t2 = { name: "Firefox" }, r2 = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/electron/i], describe: function(e2) {
          var t2 = { name: "Electron" }, r2 = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/MiuiBrowser/i], describe: function(e2) {
          var t2 = { name: "Miui" }, r2 = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/chromium/i], describe: function(e2) {
          var t2 = { name: "Chromium" }, r2 = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/chrome|crios|crmo/i], describe: function(e2) {
          var t2 = { name: "Chrome" }, r2 = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/GSA/i], describe: function(e2) {
          var t2 = { name: "Google Search" }, r2 = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: function(e2) {
          var t2 = !e2.test(/like android/i), r2 = e2.test(/android/i);
          return t2 && r2;
        }, describe: function(e2) {
          var t2 = { name: "Android Browser" }, r2 = i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/playstation 4/i], describe: function(e2) {
          var t2 = { name: "PlayStation 4" }, r2 = i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/safari|applewebkit/i], describe: function(e2) {
          var t2 = { name: "Safari" }, r2 = i.default.getFirstMatch(s, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/.*/i], describe: function(e2) {
          var t2 = e2.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return { name: i.default.getFirstMatch(t2, e2), version: i.default.getSecondMatch(t2, e2) };
        } }];
        t.default = a, e.exports = t.default;
      }, 93: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
        var a = [{ test: [/Roku\/DVP/], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e2);
          return { name: s.OS_MAP.Roku, version: t2 };
        } }, { test: [/windows phone/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e2);
          return { name: s.OS_MAP.WindowsPhone, version: t2 };
        } }, { test: [/windows /i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e2), r2 = i.default.getWindowsVersionName(t2);
          return { name: s.OS_MAP.Windows, version: t2, versionName: r2 };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e2) {
          var t2 = { name: s.OS_MAP.iOS }, r2 = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/macintosh/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e2).replace(/[_\s]/g, "."), r2 = i.default.getMacOSVersionName(t2), n2 = { name: s.OS_MAP.MacOS, version: t2 };
          return r2 && (n2.versionName = r2), n2;
        } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e2).replace(/[_\s]/g, ".");
          return { name: s.OS_MAP.iOS, version: t2 };
        } }, { test: function(e2) {
          var t2 = !e2.test(/like android/i), r2 = e2.test(/android/i);
          return t2 && r2;
        }, describe: function(e2) {
          var t2 = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e2), r2 = i.default.getAndroidVersionName(t2), n2 = { name: s.OS_MAP.Android, version: t2 };
          return r2 && (n2.versionName = r2), n2;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e2), r2 = { name: s.OS_MAP.WebOS };
          return t2 && t2.length && (r2.version = t2), r2;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e2) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e2) || i.default.getFirstMatch(/\bbb(\d+)/i, e2);
          return { name: s.OS_MAP.BlackBerry, version: t2 };
        } }, { test: [/bada/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e2);
          return { name: s.OS_MAP.Bada, version: t2 };
        } }, { test: [/tizen/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e2);
          return { name: s.OS_MAP.Tizen, version: t2 };
        } }, { test: [/linux/i], describe: function() {
          return { name: s.OS_MAP.Linux };
        } }, { test: [/CrOS/], describe: function() {
          return { name: s.OS_MAP.ChromeOS };
        } }, { test: [/PlayStation 4/], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e2);
          return { name: s.OS_MAP.PlayStation4, version: t2 };
        } }];
        t.default = a, e.exports = t.default;
      }, 94: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
        var a = [{ test: [/googlebot/i], describe: function() {
          return { type: "bot", vendor: "Google" };
        } }, { test: [/huawei/i], describe: function(e2) {
          var t2 = i.default.getFirstMatch(/(can-l01)/i, e2) && "Nova", r2 = { type: s.PLATFORMS_MAP.mobile, vendor: "Huawei" };
          return t2 && (r2.model = t2), r2;
        } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
          return { type: s.PLATFORMS_MAP.tablet, vendor: "Nexus" };
        } }, { test: [/ipad/i], describe: function() {
          return { type: s.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
          return { type: s.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/kftt build/i], describe: function() {
          return { type: s.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
        } }, { test: [/silk/i], describe: function() {
          return { type: s.PLATFORMS_MAP.tablet, vendor: "Amazon" };
        } }, { test: [/tablet(?! pc)/i], describe: function() {
          return { type: s.PLATFORMS_MAP.tablet };
        } }, { test: function(e2) {
          var t2 = e2.test(/ipod|iphone/i), r2 = e2.test(/like (ipod|iphone)/i);
          return t2 && !r2;
        }, describe: function(e2) {
          var t2 = i.default.getFirstMatch(/(ipod|iphone)/i, e2);
          return { type: s.PLATFORMS_MAP.mobile, vendor: "Apple", model: t2 };
        } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
          return { type: s.PLATFORMS_MAP.mobile, vendor: "Nexus" };
        } }, { test: [/[^-]mobi/i], describe: function() {
          return { type: s.PLATFORMS_MAP.mobile };
        } }, { test: function(e2) {
          return e2.getBrowserName(true) === "blackberry";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
        } }, { test: function(e2) {
          return e2.getBrowserName(true) === "bada";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.mobile };
        } }, { test: function(e2) {
          return e2.getBrowserName() === "windows phone";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
        } }, { test: function(e2) {
          var t2 = Number(String(e2.getOSVersion()).split(".")[0]);
          return e2.getOSName(true) === "android" && t2 >= 3;
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.tablet };
        } }, { test: function(e2) {
          return e2.getOSName(true) === "android";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.mobile };
        } }, { test: function(e2) {
          return e2.getOSName(true) === "macos";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.desktop, vendor: "Apple" };
        } }, { test: function(e2) {
          return e2.getOSName(true) === "windows";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.desktop };
        } }, { test: function(e2) {
          return e2.getOSName(true) === "linux";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.desktop };
        } }, { test: function(e2) {
          return e2.getOSName(true) === "playstation 4";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.tv };
        } }, { test: function(e2) {
          return e2.getOSName(true) === "roku";
        }, describe: function() {
          return { type: s.PLATFORMS_MAP.tv };
        } }];
        t.default = a, e.exports = t.default;
      }, 95: function(e, t, r) {
        "use strict";
        t.__esModule = true, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
        var a = [{ test: function(e2) {
          return e2.getBrowserName(true) === "microsoft edge";
        }, describe: function(e2) {
          if (/\sedg\//i.test(e2))
            return { name: s.ENGINE_MAP.Blink };
          var t2 = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e2);
          return { name: s.ENGINE_MAP.EdgeHTML, version: t2 };
        } }, { test: [/trident/i], describe: function(e2) {
          var t2 = { name: s.ENGINE_MAP.Trident }, r2 = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: function(e2) {
          return e2.test(/presto/i);
        }, describe: function(e2) {
          var t2 = { name: s.ENGINE_MAP.Presto }, r2 = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: function(e2) {
          var t2 = e2.test(/gecko/i), r2 = e2.test(/like gecko/i);
          return t2 && !r2;
        }, describe: function(e2) {
          var t2 = { name: s.ENGINE_MAP.Gecko }, r2 = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
          return { name: s.ENGINE_MAP.Blink };
        } }, { test: [/(apple)?webkit/i], describe: function(e2) {
          var t2 = { name: s.ENGINE_MAP.WebKit }, r2 = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e2);
          return r2 && (t2.version = r2), t2;
        } }];
        t.default = a, e.exports = t.default;
      } });
    });
  }
});

// ../../node_modules/@aws-sdk/property-provider/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS({
  "../../node_modules/@aws-sdk/property-provider/node_modules/tslib/tslib.js"(exports, module2) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __spreadArray3;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __createBinding3;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends3 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate3 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param3 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata3 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter3 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator3 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar3 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding3(o, m, p);
      };
      __createBinding3 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values3 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read3 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread3 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read3(arguments[i]));
        return ar;
      };
      __spreadArrays3 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray3 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await3 = function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      };
      __asyncGenerator3 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator3 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await3(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues3 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject3 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar3 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding3(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault3 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet3 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__spreadArray", __spreadArray3);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
    });
  }
});

// src/Geo.ts
import {
  Amplify,
  ConsoleLogger as Logger2,
  parseMobileHubConfig
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Providers/AmazonLocationServiceProvider.ts
var import_camelcase_keys = __toModule(require_camelcase_keys());
import {
  ConsoleLogger as Logger,
  Credentials,
  getAmplifyUserAgent
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-location/node_modules/tslib/modules/index.js
var import_tslib = __toModule(require_tslib());
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// ../../node_modules/@aws-sdk/client-location/dist/es/package.json
var name = "@aws-sdk/client-location";
var description = "AWS SDK for JavaScript Location Client for Node.js, Browser and React Native";
var version = "3.22.0";
var scripts = {
  clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
  "build-documentation": "yarn remove-documentation && typedoc ./",
  "remove-definitions": "rimraf ./types",
  "remove-dist": "rimraf ./dist",
  "remove-documentation": "rimraf ./docs",
  test: "yarn build && jest --coverage --passWithNoTests",
  "build:cjs": "tsc -p tsconfig.json",
  "build:es": "tsc -p tsconfig.es.json",
  build: "yarn build:cjs && yarn build:es",
  "downlevel-dts": "downlevel-dts dist/types dist/types/ts3.4"
};
var main = "./dist/cjs/index.js";
var types = "./dist/types/index.d.ts";
var module = "./dist/es/index.js";
var browser = {
  "./runtimeConfig": "./runtimeConfig.browser"
};
var react_native = {
  "./runtimeConfig": "./runtimeConfig.native"
};
var sideEffects = false;
var dependencies = {
  "@aws-crypto/sha256-browser": "^1.1.0",
  "@aws-crypto/sha256-js": "^1.1.0",
  "@aws-sdk/client-sts": "3.22.0",
  "@aws-sdk/config-resolver": "3.22.0",
  "@aws-sdk/credential-provider-node": "3.22.0",
  "@aws-sdk/fetch-http-handler": "3.22.0",
  "@aws-sdk/hash-node": "3.22.0",
  "@aws-sdk/invalid-dependency": "3.22.0",
  "@aws-sdk/middleware-content-length": "3.22.0",
  "@aws-sdk/middleware-host-header": "3.22.0",
  "@aws-sdk/middleware-logger": "3.22.0",
  "@aws-sdk/middleware-retry": "3.22.0",
  "@aws-sdk/middleware-serde": "3.22.0",
  "@aws-sdk/middleware-signing": "3.22.0",
  "@aws-sdk/middleware-stack": "3.22.0",
  "@aws-sdk/middleware-user-agent": "3.22.0",
  "@aws-sdk/node-config-provider": "3.22.0",
  "@aws-sdk/node-http-handler": "3.22.0",
  "@aws-sdk/protocol-http": "3.22.0",
  "@aws-sdk/smithy-client": "3.22.0",
  "@aws-sdk/types": "3.22.0",
  "@aws-sdk/url-parser": "3.22.0",
  "@aws-sdk/util-base64-browser": "3.22.0",
  "@aws-sdk/util-base64-node": "3.22.0",
  "@aws-sdk/util-body-length-browser": "3.22.0",
  "@aws-sdk/util-body-length-node": "3.22.0",
  "@aws-sdk/util-user-agent-browser": "3.22.0",
  "@aws-sdk/util-user-agent-node": "3.22.0",
  "@aws-sdk/util-utf8-browser": "3.22.0",
  "@aws-sdk/util-utf8-node": "3.22.0",
  tslib: "^2.0.0"
};
var devDependencies = {
  "@aws-sdk/client-documentation-generator": "3.22.0",
  "@types/node": "^12.7.5",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  "ts-jest": "^26.4.1",
  typedoc: "^0.19.2",
  typescript: "~4.3.2"
};
var engines = {
  node: ">=10.0.0"
};
var typesVersions = {
  "<4.0": {
    "dist/types/*": [
      "dist/types/ts3.4/*"
    ]
  }
};
var author = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
};
var license = "Apache-2.0";
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-location";
var repository = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-location"
};
var package_default = {
  name,
  description,
  version,
  scripts,
  main,
  types,
  module,
  browser,
  "react-native": react_native,
  sideEffects,
  dependencies,
  devDependencies,
  engines,
  typesVersions,
  author,
  license,
  homepage,
  repository
};

// ../../node_modules/@aws-sdk/client-location/dist/es/runtimeConfig.browser.js
var import_sha256_browser = __toModule(require_build5());

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/protocol-http/dist/es/httpResponse.js
var HttpResponse = function() {
  function HttpResponse2(options) {
    this.statusCode = options.statusCode;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  HttpResponse2.isInstance = function(response) {
    if (!response)
      return false;
    var resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  };
  return HttpResponse2;
}();

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/protocol-http/dist/es/httpRequest.js
var HttpRequest = function() {
  function HttpRequest2(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.substr(-1) !== ":" ? options.protocol + ":" : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? "/" + options.path : options.path : "/";
  }
  HttpRequest2.isInstance = function(request) {
    if (!request)
      return false;
    var req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  };
  HttpRequest2.prototype.clone = function() {
    var cloned = new HttpRequest2(__assign(__assign({}, this), { headers: __assign({}, this.headers) }));
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  };
  return HttpRequest2;
}();
function cloneQuery(query) {
  return Object.keys(query).reduce(function(carry, paramName) {
    var _a;
    var param = query[paramName];
    return __assign(__assign({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? __spreadArray([], __read(param)) : param, _a));
  }, {});
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/protocol-http/dist/es/isValidHostname.js
function isValidHostname(hostname) {
  var hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
  return hostPattern.test(hostname);
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js
var escapeUri = function(uri) {
  return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
};
var hexEncode = function(c) {
  return "%" + c.charCodeAt(0).toString(16).toUpperCase();
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/querystring-builder/dist/es/index.js
function buildQueryString(query) {
  var e_1, _a;
  var parts = [];
  try {
    for (var _b = __values(Object.keys(query).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var value = query[key];
      key = escapeUri(key);
      if (Array.isArray(value)) {
        for (var i = 0, iLen = value.length; i < iLen; i++) {
          parts.push(key + "=" + escapeUri(value[i]));
        }
      } else {
        var qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += "=" + escapeUri(value);
        }
        parts.push(qsEntry);
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return parts.join("&");
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/fetch-http-handler/dist/es/request-timeout.js
function requestTimeout(timeoutInMs) {
  if (timeoutInMs === void 0) {
    timeoutInMs = 0;
  }
  return new Promise(function(resolve, reject) {
    if (timeoutInMs) {
      setTimeout(function() {
        var timeoutError = new Error("Request did not complete within " + timeoutInMs + " ms");
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/fetch-http-handler/dist/es/fetch-http-handler.js
var FetchHttpHandler = function() {
  function FetchHttpHandler2(_a) {
    var _b = _a === void 0 ? {} : _a, requestTimeout2 = _b.requestTimeout;
    this.requestTimeout = requestTimeout2;
  }
  FetchHttpHandler2.prototype.destroy = function() {
  };
  FetchHttpHandler2.prototype.handle = function(request, _a) {
    var _b = _a === void 0 ? {} : _a, abortSignal = _b.abortSignal;
    var requestTimeoutInMs = this.requestTimeout;
    if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
      var abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }
    var path = request.path;
    if (request.query) {
      var queryString = buildQueryString(request.query);
      if (queryString) {
        path += "?" + queryString;
      }
    }
    var port = request.port, method = request.method;
    var url = request.protocol + "//" + request.hostname + (port ? ":" + port : "") + path;
    var body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    var requestOptions = {
      body,
      headers: new Headers(request.headers),
      method
    };
    if (typeof AbortController !== "undefined") {
      requestOptions["signal"] = abortSignal;
    }
    var fetchRequest = new Request(url, requestOptions);
    var raceOfPromises = [
      fetch(fetchRequest).then(function(response) {
        var e_1, _a2;
        var fetchHeaders = response.headers;
        var transformedHeaders = {};
        try {
          for (var _b2 = __values(fetchHeaders.entries()), _c = _b2.next(); !_c.done; _c = _b2.next()) {
            var pair = _c.value;
            transformedHeaders[pair[0]] = pair[1];
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b2.return))
              _a2.call(_b2);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        var hasReadableStream = response.body !== void 0;
        if (!hasReadableStream) {
          return response.blob().then(function(body2) {
            return {
              response: new HttpResponse({
                headers: transformedHeaders,
                statusCode: response.status,
                body: body2
              })
            };
          });
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise(function(resolve, reject) {
        abortSignal.onabort = function() {
          var abortError2 = new Error("Request aborted");
          abortError2.name = "AbortError";
          reject(abortError2);
        };
      }));
    }
    return Promise.race(raceOfPromises);
  };
  return FetchHttpHandler2;
}();

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-base64-browser/dist/es/index.js
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
var char;
var i;
var start;
var limit;
for (i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  char = String.fromCharCode(i + start);
  index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
var char;
var index;
var i;
var start;
var limit;
for (i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  char = i.toString(10);
  index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
var char;
var index;
var i;
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
function fromBase64(input) {
  var totalByteLength = input.length / 4 * 3;
  if (input.substr(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.substr(-1) === "=") {
    totalByteLength--;
  }
  var out = new ArrayBuffer(totalByteLength);
  var dataView = new DataView(out);
  for (var i = 0; i < input.length; i += 4) {
    var bits = 0;
    var bitLength = 0;
    for (var j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] !== "=") {
        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }
    var chunkOffset = i / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    var byteLength = Math.floor(bitLength / bitsPerByte);
    for (var k = 0; k < byteLength; k++) {
      var offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
}
function toBase64(input) {
  var str = "";
  for (var i = 0; i < input.length; i += 3) {
    var bits = 0;
    var bitLength = 0;
    for (var j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << (limit - j - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    var bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (var k = 1; k <= bitClusterCount; k++) {
      var offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/fetch-http-handler/dist/es/stream-collector.js
var streamCollector = function(stream) {
  if (typeof Blob === "function" && stream instanceof Blob) {
    return collectBlob(stream);
  }
  return collectStream(stream);
};
function collectBlob(blob) {
  return __awaiter(this, void 0, void 0, function() {
    var base64, arrayBuffer;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, readToBase64(blob)];
        case 1:
          base64 = _a.sent();
          arrayBuffer = fromBase64(base64);
          return [2, new Uint8Array(arrayBuffer)];
      }
    });
  });
}
function collectStream(stream) {
  return __awaiter(this, void 0, void 0, function() {
    var res, reader, isDone, _a, done, value, prior;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          res = new Uint8Array(0);
          reader = stream.getReader();
          isDone = false;
          _b.label = 1;
        case 1:
          if (!!isDone)
            return [3, 3];
          return [4, reader.read()];
        case 2:
          _a = _b.sent(), done = _a.done, value = _a.value;
          if (value) {
            prior = res;
            res = new Uint8Array(prior.length + value.length);
            res.set(prior);
            res.set(value, prior.length);
          }
          isDone = done;
          return [3, 1];
        case 3:
          return [2, res];
      }
    });
  });
}
function readToBase64(blob) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onloadend = function() {
      var _a;
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      var result = (_a = reader.result) !== null && _a !== void 0 ? _a : "";
      var commaIndex = result.indexOf(",");
      var dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = function() {
      return reject(new Error("Read aborted"));
    };
    reader.onerror = function() {
      return reject(reader.error);
    };
    reader.readAsDataURL(blob);
  });
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/invalid-dependency/dist/es/invalidProvider.js
var invalidProvider = function(message) {
  return function() {
    return Promise.reject(message);
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/retryMiddleware.js
var retryMiddleware = function(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter(void 0, void 0, void 0, function() {
        var retryStrategy;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, options.retryStrategy()];
            case 1:
              retryStrategy = _a.sent();
              if (retryStrategy === null || retryStrategy === void 0 ? void 0 : retryStrategy.mode)
                context.userAgent = __spreadArray(__spreadArray([], __read(context.userAgent || [])), [["cfg/retry-mode", retryStrategy.mode]]);
              return [2, retryStrategy.retry(next, args)];
          }
        });
      });
    };
  };
};
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/constants.js
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/service-error-classification/dist/es/constants.js
var CLOCK_SKEW_ERROR_CODES = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch"
];
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/service-error-classification/dist/es/index.js
var isRetryableByTrait = function(error) {
  return error.$retryable !== void 0;
};
var isClockSkewError = function(error) {
  return CLOCK_SKEW_ERROR_CODES.includes(error.name);
};
var isThrottlingError = function(error) {
  var _a, _b;
  return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 || THROTTLING_ERROR_CODES.includes(error.name) || ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
};
var isTransientError = function(error) {
  var _a;
  return TRANSIENT_ERROR_CODES.includes(error.name) || TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
};

// ../../node_modules/@aws-sdk/client-location/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// ../../node_modules/@aws-sdk/client-location/node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// ../../node_modules/@aws-sdk/client-location/node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// ../../node_modules/@aws-sdk/client-location/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// ../../node_modules/@aws-sdk/client-location/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/config.js
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/defaultRetryQuota.js
var getDefaultRetryQuota = function(initialRetryTokens, options) {
  var _a, _b, _c;
  var MAX_CAPACITY = initialRetryTokens;
  var noRetryIncrement = (_a = options === null || options === void 0 ? void 0 : options.noRetryIncrement) !== null && _a !== void 0 ? _a : NO_RETRY_INCREMENT;
  var retryCost = (_b = options === null || options === void 0 ? void 0 : options.retryCost) !== null && _b !== void 0 ? _b : RETRY_COST;
  var timeoutRetryCost = (_c = options === null || options === void 0 ? void 0 : options.timeoutRetryCost) !== null && _c !== void 0 ? _c : TIMEOUT_RETRY_COST;
  var availableCapacity = initialRetryTokens;
  var getCapacityAmount = function(error) {
    return error.name === "TimeoutError" ? timeoutRetryCost : retryCost;
  };
  var hasRetryTokens = function(error) {
    return getCapacityAmount(error) <= availableCapacity;
  };
  var retrieveRetryTokens = function(error) {
    if (!hasRetryTokens(error)) {
      throw new Error("No retry token available");
    }
    var capacityAmount = getCapacityAmount(error);
    availableCapacity -= capacityAmount;
    return capacityAmount;
  };
  var releaseRetryTokens = function(capacityReleaseAmount) {
    availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : noRetryIncrement;
    availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
  };
  return Object.freeze({
    hasRetryTokens,
    retrieveRetryTokens,
    releaseRetryTokens
  });
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/delayDecider.js
var defaultDelayDecider = function(delayBase, attempts) {
  return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * Math.pow(2, attempts) * delayBase));
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/retryDecider.js
var defaultRetryDecider = function(error) {
  if (!error) {
    return false;
  }
  return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/StandardRetryStrategy.js
var StandardRetryStrategy = function() {
  function StandardRetryStrategy2(maxAttemptsProvider, options) {
    var _a, _b, _c;
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.STANDARD;
    this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : defaultRetryDecider;
    this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : defaultDelayDecider;
    this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
  }
  StandardRetryStrategy2.prototype.shouldRetry = function(error, attempts, maxAttempts) {
    return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
  };
  StandardRetryStrategy2.prototype.getMaxAttempts = function() {
    return __awaiter(this, void 0, void 0, function() {
      var maxAttempts, error_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.maxAttemptsProvider()];
          case 1:
            maxAttempts = _a.sent();
            return [3, 3];
          case 2:
            error_1 = _a.sent();
            maxAttempts = DEFAULT_MAX_ATTEMPTS;
            return [3, 3];
          case 3:
            return [2, maxAttempts];
        }
      });
    });
  };
  StandardRetryStrategy2.prototype.retry = function(next, args, options) {
    return __awaiter(this, void 0, void 0, function() {
      var retryTokenAmount, attempts, totalDelay, maxAttempts, request, _loop_1, this_1, state_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            attempts = 0;
            totalDelay = 0;
            return [4, this.getMaxAttempts()];
          case 1:
            maxAttempts = _a.sent();
            request = args.request;
            if (HttpRequest.isInstance(request)) {
              request.headers[INVOCATION_ID_HEADER] = v4_default();
            }
            _loop_1 = function() {
              var _b, response, output, e_1, err, delay_1;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _c.trys.push([0, 4, , 7]);
                    if (HttpRequest.isInstance(request)) {
                      request.headers[REQUEST_HEADER] = "attempt=" + (attempts + 1) + "; max=" + maxAttempts;
                    }
                    if (!(options === null || options === void 0 ? void 0 : options.beforeRequest))
                      return [3, 2];
                    return [4, options.beforeRequest()];
                  case 1:
                    _c.sent();
                    _c.label = 2;
                  case 2:
                    return [4, next(args)];
                  case 3:
                    _b = _c.sent(), response = _b.response, output = _b.output;
                    if (options === null || options === void 0 ? void 0 : options.afterRequest) {
                      options.afterRequest(response);
                    }
                    this_1.retryQuota.releaseRetryTokens(retryTokenAmount);
                    output.$metadata.attempts = attempts + 1;
                    output.$metadata.totalRetryDelay = totalDelay;
                    return [2, { value: { response, output } }];
                  case 4:
                    e_1 = _c.sent();
                    err = asSdkError(e_1);
                    attempts++;
                    if (!this_1.shouldRetry(err, attempts, maxAttempts))
                      return [3, 6];
                    retryTokenAmount = this_1.retryQuota.retrieveRetryTokens(err);
                    delay_1 = this_1.delayDecider(isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE, attempts);
                    totalDelay += delay_1;
                    return [4, new Promise(function(resolve) {
                      return setTimeout(resolve, delay_1);
                    })];
                  case 5:
                    _c.sent();
                    return [2, "continue"];
                  case 6:
                    if (!err.$metadata) {
                      err.$metadata = {};
                    }
                    err.$metadata.attempts = attempts;
                    err.$metadata.totalRetryDelay = totalDelay;
                    throw err;
                  case 7:
                    return [2];
                }
              });
            };
            this_1 = this;
            _a.label = 2;
          case 2:
            if (false)
              return [3, 4];
            return [5, _loop_1()];
          case 3:
            state_1 = _a.sent();
            if (typeof state_1 === "object")
              return [2, state_1.value];
            return [3, 2];
          case 4:
            return [2];
        }
      });
    });
  };
  return StandardRetryStrategy2;
}();
var asSdkError = function(error) {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error("AWS SDK error wrapper for " + error);
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/DefaultRateLimiter.js
var DefaultRateLimiter = function() {
  function DefaultRateLimiter2(options) {
    var _a, _b, _c, _d, _e;
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = (_a = options === null || options === void 0 ? void 0 : options.beta) !== null && _a !== void 0 ? _a : 0.7;
    this.minCapacity = (_b = options === null || options === void 0 ? void 0 : options.minCapacity) !== null && _b !== void 0 ? _b : 1;
    this.minFillRate = (_c = options === null || options === void 0 ? void 0 : options.minFillRate) !== null && _c !== void 0 ? _c : 0.5;
    this.scaleConstant = (_d = options === null || options === void 0 ? void 0 : options.scaleConstant) !== null && _d !== void 0 ? _d : 0.4;
    this.smooth = (_e = options === null || options === void 0 ? void 0 : options.smooth) !== null && _e !== void 0 ? _e : 0.8;
    var currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  DefaultRateLimiter2.prototype.getCurrentTimeInSeconds = function() {
    return Date.now() / 1e3;
  };
  DefaultRateLimiter2.prototype.getSendToken = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.acquireTokenBucket(1)];
      });
    });
  };
  DefaultRateLimiter2.prototype.acquireTokenBucket = function(amount) {
    return __awaiter(this, void 0, void 0, function() {
      var delay_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this.enabled) {
              return [2];
            }
            this.refillTokenBucket();
            if (!(amount > this.currentCapacity))
              return [3, 2];
            delay_1 = (amount - this.currentCapacity) / this.fillRate * 1e3;
            return [4, new Promise(function(resolve) {
              return setTimeout(resolve, delay_1);
            })];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            this.currentCapacity = this.currentCapacity - amount;
            return [2];
        }
      });
    });
  };
  DefaultRateLimiter2.prototype.refillTokenBucket = function() {
    var timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    var fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  };
  DefaultRateLimiter2.prototype.updateClientSendingRate = function(response) {
    var calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      var rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    var newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  };
  DefaultRateLimiter2.prototype.calculateTimeWindow = function() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  };
  DefaultRateLimiter2.prototype.cubicThrottle = function(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  };
  DefaultRateLimiter2.prototype.cubicSuccess = function(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  };
  DefaultRateLimiter2.prototype.enableTokenBucket = function() {
    this.enabled = true;
  };
  DefaultRateLimiter2.prototype.updateTokenBucketRate = function(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  };
  DefaultRateLimiter2.prototype.updateMeasuredRate = function() {
    var t = this.getCurrentTimeInSeconds();
    var timeBucket = Math.floor(t * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      var currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  };
  DefaultRateLimiter2.prototype.getPrecise = function(num) {
    return parseFloat(num.toFixed(8));
  };
  return DefaultRateLimiter2;
}();

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = function(_super) {
  __extends(AdaptiveRetryStrategy2, _super);
  function AdaptiveRetryStrategy2(maxAttemptsProvider, options) {
    var _this = this;
    var _a = options !== null && options !== void 0 ? options : {}, rateLimiter = _a.rateLimiter, superOptions = __rest(_a, ["rateLimiter"]);
    _this = _super.call(this, maxAttemptsProvider, superOptions) || this;
    _this.rateLimiter = rateLimiter !== null && rateLimiter !== void 0 ? rateLimiter : new DefaultRateLimiter();
    _this.mode = RETRY_MODES.ADAPTIVE;
    return _this;
  }
  AdaptiveRetryStrategy2.prototype.retry = function(next, args) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        return [2, _super.prototype.retry.call(this, next, args, {
          beforeRequest: function() {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, this.rateLimiter.getSendToken()];
              });
            });
          },
          afterRequest: function(response) {
            _this.rateLimiter.updateClientSendingRate(response);
          }
        })];
      });
    });
  };
  return AdaptiveRetryStrategy2;
}(StandardRetryStrategy);

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-retry/dist/es/configurations.js
var resolveRetryConfig = function(input) {
  var maxAttempts = normalizeMaxAttempts(input.maxAttempts);
  return __assign(__assign({}, input), { maxAttempts, retryStrategy: function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var retryMode, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (input.retryStrategy) {
              return [2, input.retryStrategy];
            }
            _a = input.retryMode;
            if (_a)
              return [3, 2];
            return [4, input.retryModeProvider()];
          case 1:
            _a = _b.sent();
            _b.label = 2;
          case 2:
            retryMode = _a;
            if (retryMode === RETRY_MODES.ADAPTIVE) {
              return [2, new AdaptiveRetryStrategy(maxAttempts)];
            }
            return [2, new StandardRetryStrategy(maxAttempts)];
        }
      });
    });
  } });
};
var normalizeMaxAttempts = function(maxAttempts) {
  if (maxAttempts === void 0) {
    maxAttempts = DEFAULT_MAX_ATTEMPTS;
  }
  if (typeof maxAttempts === "number") {
    var promisified_1 = Promise.resolve(maxAttempts);
    return function() {
      return promisified_1;
    };
  }
  return maxAttempts;
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-body-length-browser/dist/es/index.js
function calculateBodyLength(body) {
  if (typeof body === "string") {
    var len = body.length;
    for (var i = len - 1; i >= 0; i--) {
      var code = body.charCodeAt(i);
      if (code > 127 && code <= 2047)
        len++;
      else if (code > 2047 && code <= 65535)
        len += 2;
    }
    return len;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  }
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-user-agent-browser/dist/es/index.js
var import_bowser = __toModule(require_es5());
var defaultUserAgent = function(_a) {
  var serviceId = _a.serviceId, clientVersion = _a.clientVersion;
  return function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var parsedUA, sections;
      var _a2, _b, _c, _d, _e, _f, _g;
      return __generator(this, function(_h) {
        parsedUA = typeof window !== "undefined" && ((_a2 = window === null || window === void 0 ? void 0 : window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
        sections = [
          ["aws-sdk-js", clientVersion],
          ["os/" + (((_b = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.os) === null || _b === void 0 ? void 0 : _b.name) || "other"), (_c = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.os) === null || _c === void 0 ? void 0 : _c.version],
          ["lang/js"],
          ["md/browser", ((_e = (_d = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.browser) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : "unknown") + "_" + ((_g = (_f = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.browser) === null || _f === void 0 ? void 0 : _f.version) !== null && _g !== void 0 ? _g : "unknown")]
        ];
        if (serviceId) {
          sections.push(["api/" + serviceId, clientVersion]);
        }
        return [2, sections];
      });
    });
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js
var fromUtf8 = function(input) {
  var bytes = [];
  for (var i = 0, len = input.length; i < len; i++) {
    var value = input.charCodeAt(i);
    if (value < 128) {
      bytes.push(value);
    } else if (value < 2048) {
      bytes.push(value >> 6 | 192, value & 63 | 128);
    } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
      var surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
      bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
    } else {
      bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
    }
  }
  return Uint8Array.from(bytes);
};
var toUtf8 = function(input) {
  var decoded = "";
  for (var i = 0, len = input.length; i < len; i++) {
    var byte = input[i];
    if (byte < 128) {
      decoded += String.fromCharCode(byte);
    } else if (192 <= byte && byte < 224) {
      var nextByte = input[++i];
      decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
    } else if (240 <= byte && byte < 365) {
      var surrogatePair = [byte, input[++i], input[++i], input[++i]];
      var encoded = "%" + surrogatePair.map(function(byteValue) {
        return byteValue.toString(16);
      }).join("%");
      decoded += decodeURIComponent(encoded);
    } else {
      decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
    }
  }
  return decoded;
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js
function fromUtf82(input) {
  return new TextEncoder().encode(input);
}
function toUtf82(input) {
  return new TextDecoder("utf-8").decode(input);
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js
var fromUtf83 = function(input) {
  return typeof TextEncoder === "function" ? fromUtf82(input) : fromUtf8(input);
};
var toUtf83 = function(input) {
  return typeof TextDecoder === "function" ? toUtf82(input) : toUtf8(input);
};

// ../../node_modules/@aws-sdk/client-location/dist/es/endpoints.js
var AWS_TEMPLATE = "geo.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "geo.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "geo.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "geo.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "geo.{region}.amazonaws.com";
var AWS_REGIONS = new Set([
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-northeast-3",
  "ap-south-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "ca-central-1",
  "eu-central-1",
  "eu-north-1",
  "eu-south-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "me-south-1",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2"
]);
var AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider = function(region, options) {
  var regionInfo = void 0;
  switch (region) {
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws"
        };
      }
      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region),
          partition: "aws-cn"
        };
      }
      if (AWS_ISO_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
          partition: "aws-iso"
        };
      }
      if (AWS_ISO_B_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
          partition: "aws-iso-b"
        };
      }
      if (AWS_US_GOV_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
          partition: "aws-us-gov"
        };
      }
      if (regionInfo === void 0) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws"
        };
      }
  }
  return Promise.resolve(__assign({ signingService: "geo" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/querystring-parser/dist/es/index.js
function parseQueryString(querystring) {
  var e_1, _a;
  var query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    try {
      for (var _b = __values(querystring.split("&")), _c = _b.next(); !_c.done; _c = _b.next()) {
        var pair = _c.value;
        var _d = __read(pair.split("="), 2), key = _d[0], _e = _d[1], value = _e === void 0 ? null : _e;
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  return query;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/url-parser/dist/es/index.js
var parseUrl = function(url) {
  var _a = new URL(url), hostname = _a.hostname, pathname = _a.pathname, port = _a.port, protocol = _a.protocol, search = _a.search;
  var query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
};

// ../../node_modules/@aws-sdk/client-location/dist/es/runtimeConfig.shared.js
var ClientSharedValues = {
  apiVersion: "2020-11-19",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Location",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-location/dist/es/runtimeConfig.browser.js
var ClientDefaultValues = __assign(__assign({}, ClientSharedValues), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues.serviceId,
  clientVersion: package_default.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), retryModeProvider: function() {
  return Promise.resolve(DEFAULT_RETRY_MODE);
}, sha256: import_sha256_browser.Sha256, streamCollector, utf8Decoder: fromUtf83, utf8Encoder: toUtf83 });

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/config-resolver/dist/es/EndpointsConfig.js
var resolveEndpointsConfig = function(input) {
  var _a;
  return __assign(__assign({}, input), { tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true, endpoint: input.endpoint ? normalizeEndpoint(input) : function() {
    return getEndPointFromRegion(input);
  }, isCustomEndpoint: input.endpoint ? true : false });
};
var normalizeEndpoint = function(input) {
  var endpoint = input.endpoint, urlParser = input.urlParser;
  if (typeof endpoint === "string") {
    var promisified_1 = Promise.resolve(urlParser(endpoint));
    return function() {
      return promisified_1;
    };
  } else if (typeof endpoint === "object") {
    var promisified_2 = Promise.resolve(endpoint);
    return function() {
      return promisified_2;
    };
  }
  return endpoint;
};
var getEndPointFromRegion = function(input) {
  return __awaiter(void 0, void 0, void 0, function() {
    var _a, tls, region, dnsHostRegex, hostname;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = input.tls, tls = _a === void 0 ? true : _a;
          return [4, input.region()];
        case 1:
          region = _c.sent();
          dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
          if (!dnsHostRegex.test(region)) {
            throw new Error("Invalid region in client config");
          }
          return [4, input.regionInfoProvider(region)];
        case 2:
          hostname = ((_b = _c.sent()) !== null && _b !== void 0 ? _b : {}).hostname;
          if (!hostname) {
            throw new Error("Cannot resolve hostname from client config");
          }
          return [2, input.urlParser((tls ? "https:" : "http:") + "//" + hostname)];
      }
    });
  });
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/config-resolver/dist/es/RegionConfig.js
var resolveRegionConfig = function(input) {
  if (!input.region) {
    throw new Error("Region is missing");
  }
  return __assign(__assign({}, input), { region: normalizeRegion(input.region) });
};
var normalizeRegion = function(region) {
  if (typeof region === "string") {
    var promisified_1 = Promise.resolve(region);
    return function() {
      return promisified_1;
    };
  }
  return region;
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-content-length/dist/es/index.js
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  var _this = this;
  return function(next) {
    return function(args) {
      return __awaiter(_this, void 0, void 0, function() {
        var request, body, headers, length;
        var _a;
        return __generator(this, function(_b) {
          request = args.request;
          if (HttpRequest.isInstance(request)) {
            body = request.body, headers = request.headers;
            if (body && Object.keys(headers).map(function(str) {
              return str.toLowerCase();
            }).indexOf(CONTENT_LENGTH_HEADER) === -1) {
              length = bodyLengthChecker(body);
              if (length !== void 0) {
                request.headers = __assign(__assign({}, request.headers), (_a = {}, _a[CONTENT_LENGTH_HEADER] = String(length), _a));
              }
            }
          }
          return [2, next(__assign(__assign({}, args), { request }))];
        });
      });
    };
  };
}
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-host-header/dist/es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware = function(options) {
  return function(next) {
    return function(args) {
      return __awaiter(void 0, void 0, void 0, function() {
        var request, _a, handlerProtocol;
        return __generator(this, function(_b) {
          if (!HttpRequest.isInstance(args.request))
            return [2, next(args)];
          request = args.request;
          _a = (options.requestHandler.metadata || {}).handlerProtocol, handlerProtocol = _a === void 0 ? "" : _a;
          if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
            delete request.headers["host"];
            request.headers[":authority"] = "";
          } else if (!request.headers["host"]) {
            request.headers["host"] = request.hostname;
          }
          return [2, next(args)];
        });
      });
    };
  };
};
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-logger/dist/es/loggerMiddleware.js
var loggerMiddleware = function() {
  return function(next, context) {
    return function(args) {
      return __awaiter(void 0, void 0, void 0, function() {
        var clientName, commandName, inputFilterSensitiveLog, logger3, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger3 = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
              return [4, next(args)];
            case 1:
              response = _b.sent();
              if (!logger3) {
                return [2, response];
              }
              if (typeof logger3.info === "function") {
                _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = __rest(_a, ["$metadata"]);
                logger3.info({
                  clientName,
                  commandName,
                  input: inputFilterSensitiveLog(args.input),
                  output: outputFilterSensitiveLog(outputWithoutMetadata),
                  metadata: $metadata
                });
              }
              return [2, response];
          }
        });
      });
    };
  };
};
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/property-provider/node_modules/tslib/modules/index.js
var import_tslib22 = __toModule(require_tslib3());
var {
  __extends: __extends2,
  __assign: __assign2,
  __rest: __rest2,
  __decorate: __decorate2,
  __param: __param2,
  __metadata: __metadata2,
  __awaiter: __awaiter2,
  __generator: __generator2,
  __exportStar: __exportStar2,
  __createBinding: __createBinding2,
  __values: __values2,
  __read: __read2,
  __spread: __spread2,
  __spreadArrays: __spreadArrays2,
  __spreadArray: __spreadArray2,
  __await: __await2,
  __asyncGenerator: __asyncGenerator2,
  __asyncDelegator: __asyncDelegator2,
  __asyncValues: __asyncValues2,
  __makeTemplateObject: __makeTemplateObject2,
  __importStar: __importStar2,
  __importDefault: __importDefault2,
  __classPrivateFieldGet: __classPrivateFieldGet2,
  __classPrivateFieldSet: __classPrivateFieldSet2
} = import_tslib22.default;

// ../../node_modules/@aws-sdk/property-provider/dist/es/ProviderError.js
var ProviderError = function(_super) {
  __extends2(ProviderError2, _super);
  function ProviderError2(message, tryNextLink) {
    if (tryNextLink === void 0) {
      tryNextLink = true;
    }
    var _this = _super.call(this, message) || this;
    _this.tryNextLink = tryNextLink;
    return _this;
  }
  ProviderError2.from = function(error, tryNextLink) {
    if (tryNextLink === void 0) {
      tryNextLink = true;
    }
    Object.defineProperty(error, "tryNextLink", {
      value: tryNextLink,
      configurable: false,
      enumerable: false,
      writable: false
    });
    return error;
  };
  return ProviderError2;
}(Error);
var CredentialsProviderError = function(_super) {
  __extends2(CredentialsProviderError2, _super);
  function CredentialsProviderError2(message, tryNextLink) {
    if (tryNextLink === void 0) {
      tryNextLink = true;
    }
    var _this = _super.call(this, message) || this;
    _this.tryNextLink = tryNextLink;
    _this.name = "CredentialsProviderError";
    return _this;
  }
  CredentialsProviderError2.from = function(error, tryNextLink) {
    if (tryNextLink === void 0) {
      tryNextLink = true;
    }
    Object.defineProperty(error, "tryNextLink", {
      value: tryNextLink,
      configurable: false,
      enumerable: false,
      writable: false
    });
    return error;
  };
  return CredentialsProviderError2;
}(Error);

// ../../node_modules/@aws-sdk/property-provider/dist/es/memoize.js
var memoize = function(provider, isExpired, requiresRefresh) {
  var result;
  var hasResult;
  if (isExpired === void 0) {
    return function() {
      if (!hasResult) {
        result = provider();
        hasResult = true;
      }
      return result;
    };
  }
  var isConstant = false;
  return function() {
    return __awaiter2(void 0, void 0, void 0, function() {
      var resolved;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!hasResult) {
              result = provider();
              hasResult = true;
            }
            if (isConstant) {
              return [2, result];
            }
            return [4, result];
          case 1:
            resolved = _a.sent();
            if (requiresRefresh && !requiresRefresh(resolved)) {
              isConstant = true;
              return [2, resolved];
            }
            if (isExpired(resolved)) {
              return [2, result = provider()];
            }
            return [2, resolved];
        }
      });
    });
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (i = 0; i < 256; i++) {
  encodedByte = i.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = "0" + encodedByte;
  }
  SHORT_TO_HEX[i] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i;
}
var encodedByte;
var i;
function toHex(bytes) {
  var out = "";
  for (var i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX[bytes[i]];
  }
  return out;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/constants.js
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js
var signingKeyCache = {};
var cacheQueue = [];
function createScope(shortDate, region, service) {
  return shortDate + "/" + region + "/" + service + "/" + KEY_TYPE_IDENTIFIER;
}
var getSigningKey = function(sha256Constructor, credentials, shortDate, region, service) {
  return __awaiter(void 0, void 0, void 0, function() {
    var credsHash, cacheKey, key, _a, _b, signable, e_1_1;
    var e_1, _c;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          return [4, hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId)];
        case 1:
          credsHash = _d.sent();
          cacheKey = shortDate + ":" + region + ":" + service + ":" + toHex(credsHash) + ":" + credentials.sessionToken;
          if (cacheKey in signingKeyCache) {
            return [2, signingKeyCache[cacheKey]];
          }
          cacheQueue.push(cacheKey);
          while (cacheQueue.length > MAX_CACHE_SIZE) {
            delete signingKeyCache[cacheQueue.shift()];
          }
          key = "AWS4" + credentials.secretAccessKey;
          _d.label = 2;
        case 2:
          _d.trys.push([2, 7, 8, 9]);
          _a = __values([shortDate, region, service, KEY_TYPE_IDENTIFIER]), _b = _a.next();
          _d.label = 3;
        case 3:
          if (!!_b.done)
            return [3, 6];
          signable = _b.value;
          return [4, hmac(sha256Constructor, key, signable)];
        case 4:
          key = _d.sent();
          _d.label = 5;
        case 5:
          _b = _a.next();
          return [3, 3];
        case 6:
          return [3, 9];
        case 7:
          e_1_1 = _d.sent();
          e_1 = { error: e_1_1 };
          return [3, 9];
        case 8:
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_1)
              throw e_1.error;
          }
          return [7];
        case 9:
          return [2, signingKeyCache[cacheKey] = key];
      }
    });
  });
};
function hmac(ctor, secret, data) {
  var hash = new ctor(secret);
  hash.update(data);
  return hash.digest();
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalHeaders.js
function getCanonicalHeaders(_a, unsignableHeaders, signableHeaders) {
  var e_1, _b;
  var headers = _a.headers;
  var canonical = {};
  try {
    for (var _c = __values(Object.keys(headers).sort()), _d = _c.next(); !_d.done; _d = _c.next()) {
      var headerName = _d.value;
      var canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
        if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
          continue;
        }
      }
      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_d && !_d.done && (_b = _c.return))
        _b.call(_c);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return canonical;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalQuery.js
function getCanonicalQuery(_a) {
  var e_1, _b;
  var _c = _a.query, query = _c === void 0 ? {} : _c;
  var keys = [];
  var serialized = {};
  var _loop_1 = function(key2) {
    if (key2.toLowerCase() === SIGNATURE_HEADER) {
      return "continue";
    }
    keys.push(key2);
    var value = query[key2];
    if (typeof value === "string") {
      serialized[key2] = escapeUri(key2) + "=" + escapeUri(value);
    } else if (Array.isArray(value)) {
      serialized[key2] = value.slice(0).sort().reduce(function(encoded, value2) {
        return encoded.concat([escapeUri(key2) + "=" + escapeUri(value2)]);
      }, []).join("&");
    }
  };
  try {
    for (var _d = __values(Object.keys(query).sort()), _e = _d.next(); !_e.done; _e = _d.next()) {
      var key = _e.value;
      _loop_1(key);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_e && !_e.done && (_b = _d.return))
        _b.call(_d);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return keys.map(function(key2) {
    return serialized[key2];
  }).filter(function(serialized2) {
    return serialized2;
  }).join("&");
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js
var isArrayBuffer = function(arg) {
  return typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/getPayloadHash.js
function getPayloadHash(_a, hashConstructor) {
  var headers = _a.headers, body = _a.body;
  return __awaiter(this, void 0, void 0, function() {
    var _b, _c, headerName, hashCtor, _d;
    var e_1, _e;
    return __generator(this, function(_f) {
      switch (_f.label) {
        case 0:
          try {
            for (_b = __values(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
              headerName = _c.value;
              if (headerName.toLowerCase() === SHA256_HEADER) {
                return [2, headers[headerName]];
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_e = _b.return))
                _e.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (!(body == void 0))
            return [3, 1];
          return [2, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
        case 1:
          if (!(typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)))
            return [3, 3];
          hashCtor = new hashConstructor();
          hashCtor.update(body);
          _d = toHex;
          return [4, hashCtor.digest()];
        case 2:
          return [2, _d.apply(void 0, [_f.sent()])];
        case 3:
          return [2, UNSIGNED_PAYLOAD];
      }
    });
  });
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/hasHeader.js
function hasHeader(soughtHeader, headers) {
  var e_1, _a;
  soughtHeader = soughtHeader.toLowerCase();
  try {
    for (var _b = __values(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var headerName = _c.value;
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return false;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js
function cloneRequest(_a) {
  var headers = _a.headers, query = _a.query, rest = __rest(_a, ["headers", "query"]);
  return __assign(__assign({}, rest), { headers: __assign({}, headers), query: query ? cloneQuery2(query) : void 0 });
}
function cloneQuery2(query) {
  return Object.keys(query).reduce(function(carry, paramName) {
    var _a;
    var param = query[paramName];
    return __assign(__assign({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? __spreadArray([], __read(param)) : param, _a));
  }, {});
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/moveHeadersToQuery.js
function moveHeadersToQuery(request, options) {
  var e_1, _a;
  var _b;
  if (options === void 0) {
    options = {};
  }
  var _c = typeof request.clone === "function" ? request.clone() : cloneRequest(request), headers = _c.headers, _d = _c.query, query = _d === void 0 ? {} : _d;
  try {
    for (var _e = __values(Object.keys(headers)), _f = _e.next(); !_f.done; _f = _e.next()) {
      var name2 = _f.value;
      var lname = name2.toLowerCase();
      if (lname.substr(0, 6) === "x-amz-" && !((_b = options.unhoistableHeaders) === null || _b === void 0 ? void 0 : _b.has(lname))) {
        query[name2] = headers[name2];
        delete headers[name2];
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_f && !_f.done && (_a = _e.return))
        _a.call(_e);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return __assign(__assign({}, request), {
    headers,
    query
  });
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/prepareRequest.js
function prepareRequest(request) {
  var e_1, _a;
  request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
  try {
    for (var _b = __values(Object.keys(request.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var headerName = _c.value;
      if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return request;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/utilDate.js
function iso8601(time) {
  return toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
}
function toDate(time) {
  if (typeof time === "number") {
    return new Date(time * 1e3);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1e3);
    }
    return new Date(time);
  }
  return time;
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/signature-v4/dist/es/SignatureV4.js
var SignatureV4 = function() {
  function SignatureV42(_a) {
    var applyChecksum = _a.applyChecksum, credentials = _a.credentials, region = _a.region, service = _a.service, sha256 = _a.sha256, _b = _a.uriEscapePath, uriEscapePath = _b === void 0 ? true : _b;
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeRegionProvider(region);
    this.credentialProvider = normalizeCredentialsProvider(credentials);
  }
  SignatureV42.prototype.presign = function(originalRequest, options) {
    if (options === void 0) {
      options = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      var _a, signingDate, _b, expiresIn, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, credentials, region, _c, _d, longDate, shortDate, scope, request, canonicalHeaders, _e, _f, _g, _h, _j, _k;
      return __generator(this, function(_l) {
        switch (_l.label) {
          case 0:
            _a = options.signingDate, signingDate = _a === void 0 ? new Date() : _a, _b = options.expiresIn, expiresIn = _b === void 0 ? 3600 : _b, unsignableHeaders = options.unsignableHeaders, unhoistableHeaders = options.unhoistableHeaders, signableHeaders = options.signableHeaders, signingRegion = options.signingRegion, signingService = options.signingService;
            return [4, this.credentialProvider()];
          case 1:
            credentials = _l.sent();
            if (!(signingRegion !== null && signingRegion !== void 0))
              return [3, 2];
            _c = signingRegion;
            return [3, 4];
          case 2:
            return [4, this.regionProvider()];
          case 3:
            _c = _l.sent();
            _l.label = 4;
          case 4:
            region = _c;
            _d = formatDate(signingDate), longDate = _d.longDate, shortDate = _d.shortDate;
            if (expiresIn > MAX_PRESIGNED_TTL) {
              return [2, Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")];
            }
            scope = createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
            request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
            if (credentials.sessionToken) {
              request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
            }
            request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
            request.query[CREDENTIAL_QUERY_PARAM] = credentials.accessKeyId + "/" + scope;
            request.query[AMZ_DATE_QUERY_PARAM] = longDate;
            request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
            canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
            request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
            _e = request.query;
            _f = SIGNATURE_QUERY_PARAM;
            _g = this.getSignature;
            _h = [
              longDate,
              scope,
              this.getSigningKey(credentials, region, shortDate, signingService)
            ];
            _j = this.createCanonicalRequest;
            _k = [request, canonicalHeaders];
            return [4, getPayloadHash(originalRequest, this.sha256)];
          case 5:
            return [4, _g.apply(this, _h.concat([_j.apply(this, _k.concat([_l.sent()]))]))];
          case 6:
            _e[_f] = _l.sent();
            return [2, request];
        }
      });
    });
  };
  SignatureV42.prototype.sign = function(toSign, options) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        if (typeof toSign === "string") {
          return [2, this.signString(toSign, options)];
        } else if (toSign.headers && toSign.payload) {
          return [2, this.signEvent(toSign, options)];
        } else {
          return [2, this.signRequest(toSign, options)];
        }
        return [2];
      });
    });
  };
  SignatureV42.prototype.signEvent = function(_a, _b) {
    var headers = _a.headers, payload = _a.payload;
    var _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, priorSignature = _b.priorSignature, signingRegion = _b.signingRegion, signingService = _b.signingService;
    return __awaiter(this, void 0, void 0, function() {
      var region, _d, _e, shortDate, longDate, scope, hashedPayload, hash, hashedHeaders, _f, stringToSign;
      return __generator(this, function(_g) {
        switch (_g.label) {
          case 0:
            if (!(signingRegion !== null && signingRegion !== void 0))
              return [3, 1];
            _d = signingRegion;
            return [3, 3];
          case 1:
            return [4, this.regionProvider()];
          case 2:
            _d = _g.sent();
            _g.label = 3;
          case 3:
            region = _d;
            _e = formatDate(signingDate), shortDate = _e.shortDate, longDate = _e.longDate;
            scope = createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
            return [4, getPayloadHash({ headers: {}, body: payload }, this.sha256)];
          case 4:
            hashedPayload = _g.sent();
            hash = new this.sha256();
            hash.update(headers);
            _f = toHex;
            return [4, hash.digest()];
          case 5:
            hashedHeaders = _f.apply(void 0, [_g.sent()]);
            stringToSign = [
              EVENT_ALGORITHM_IDENTIFIER,
              longDate,
              scope,
              priorSignature,
              hashedHeaders,
              hashedPayload
            ].join("\n");
            return [2, this.signString(stringToSign, { signingDate, signingRegion: region, signingService })];
        }
      });
    });
  };
  SignatureV42.prototype.signString = function(stringToSign, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signingRegion = _b.signingRegion, signingService = _b.signingService;
    return __awaiter(this, void 0, void 0, function() {
      var credentials, region, _d, shortDate, hash, _e, _f, _g;
      return __generator(this, function(_h) {
        switch (_h.label) {
          case 0:
            return [4, this.credentialProvider()];
          case 1:
            credentials = _h.sent();
            if (!(signingRegion !== null && signingRegion !== void 0))
              return [3, 2];
            _d = signingRegion;
            return [3, 4];
          case 2:
            return [4, this.regionProvider()];
          case 3:
            _d = _h.sent();
            _h.label = 4;
          case 4:
            region = _d;
            shortDate = formatDate(signingDate).shortDate;
            _f = (_e = this.sha256).bind;
            return [4, this.getSigningKey(credentials, region, shortDate, signingService)];
          case 5:
            hash = new (_f.apply(_e, [void 0, _h.sent()]))();
            hash.update(stringToSign);
            _g = toHex;
            return [4, hash.digest()];
          case 6:
            return [2, _g.apply(void 0, [_h.sent()])];
        }
      });
    });
  };
  SignatureV42.prototype.signRequest = function(requestToSign, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signableHeaders = _b.signableHeaders, unsignableHeaders = _b.unsignableHeaders, signingRegion = _b.signingRegion, signingService = _b.signingService;
    return __awaiter(this, void 0, void 0, function() {
      var credentials, region, _d, request, _e, longDate, shortDate, scope, payloadHash, canonicalHeaders, signature;
      return __generator(this, function(_f) {
        switch (_f.label) {
          case 0:
            return [4, this.credentialProvider()];
          case 1:
            credentials = _f.sent();
            if (!(signingRegion !== null && signingRegion !== void 0))
              return [3, 2];
            _d = signingRegion;
            return [3, 4];
          case 2:
            return [4, this.regionProvider()];
          case 3:
            _d = _f.sent();
            _f.label = 4;
          case 4:
            region = _d;
            request = prepareRequest(requestToSign);
            _e = formatDate(signingDate), longDate = _e.longDate, shortDate = _e.shortDate;
            scope = createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
            request.headers[AMZ_DATE_HEADER] = longDate;
            if (credentials.sessionToken) {
              request.headers[TOKEN_HEADER] = credentials.sessionToken;
            }
            return [4, getPayloadHash(request, this.sha256)];
          case 5:
            payloadHash = _f.sent();
            if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
              request.headers[SHA256_HEADER] = payloadHash;
            }
            canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
            return [4, this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash))];
          case 6:
            signature = _f.sent();
            request.headers[AUTH_HEADER] = ALGORITHM_IDENTIFIER + " " + ("Credential=" + credentials.accessKeyId + "/" + scope + ", ") + ("SignedHeaders=" + getCanonicalHeaderList(canonicalHeaders) + ", ") + ("Signature=" + signature);
            return [2, request];
        }
      });
    });
  };
  SignatureV42.prototype.createCanonicalRequest = function(request, canonicalHeaders, payloadHash) {
    var sortedHeaders = Object.keys(canonicalHeaders).sort();
    return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery(request) + "\n" + sortedHeaders.map(function(name2) {
      return name2 + ":" + canonicalHeaders[name2];
    }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
  };
  SignatureV42.prototype.createStringToSign = function(longDate, credentialScope, canonicalRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var hash, hashedRequest;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            hash = new this.sha256();
            hash.update(canonicalRequest);
            return [4, hash.digest()];
          case 1:
            hashedRequest = _a.sent();
            return [2, ALGORITHM_IDENTIFIER + "\n" + longDate + "\n" + credentialScope + "\n" + toHex(hashedRequest)];
        }
      });
    });
  };
  SignatureV42.prototype.getCanonicalPath = function(_a) {
    var path = _a.path;
    if (this.uriEscapePath) {
      var doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
      return "/" + doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  };
  SignatureV42.prototype.getSignature = function(longDate, credentialScope, keyPromise, canonicalRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var stringToSign, hash, _a, _b, _c;
      return __generator(this, function(_d) {
        switch (_d.label) {
          case 0:
            return [4, this.createStringToSign(longDate, credentialScope, canonicalRequest)];
          case 1:
            stringToSign = _d.sent();
            _b = (_a = this.sha256).bind;
            return [4, keyPromise];
          case 2:
            hash = new (_b.apply(_a, [void 0, _d.sent()]))();
            hash.update(stringToSign);
            _c = toHex;
            return [4, hash.digest()];
          case 3:
            return [2, _c.apply(void 0, [_d.sent()])];
        }
      });
    });
  };
  SignatureV42.prototype.getSigningKey = function(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  };
  return SignatureV42;
}();
var formatDate = function(now) {
  var longDate = iso8601(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.substr(0, 8)
  };
};
var getCanonicalHeaderList = function(headers) {
  return Object.keys(headers).sort().join(";");
};
var normalizeRegionProvider = function(region) {
  if (typeof region === "string") {
    var promisified_1 = Promise.resolve(region);
    return function() {
      return promisified_1;
    };
  } else {
    return region;
  }
};
var normalizeCredentialsProvider = function(credentials) {
  if (typeof credentials === "object") {
    var promisified_2 = Promise.resolve(credentials);
    return function() {
      return promisified_2;
    };
  } else {
    return credentials;
  }
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-signing/dist/es/configurations.js
var CREDENTIAL_EXPIRE_WINDOW = 3e5;
var resolveAwsAuthConfig = function(input) {
  var normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(input);
  var _a = input.signingEscapePath, signingEscapePath = _a === void 0 ? true : _a, _b = input.systemClockOffset, systemClockOffset = _b === void 0 ? input.systemClockOffset || 0 : _b, sha256 = input.sha256;
  var signer;
  if (input.signer) {
    signer = normalizeProvider(input.signer);
  } else {
    signer = function() {
      return normalizeProvider(input.region)().then(function(region) {
        return __awaiter(void 0, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, input.regionInfoProvider(region)];
              case 1:
                return [2, [_a2.sent() || {}, region]];
            }
          });
        });
      }).then(function(_a2) {
        var _b2 = __read(_a2, 2), regionInfo = _b2[0], region = _b2[1];
        var signingRegion = regionInfo.signingRegion, signingService = regionInfo.signingService;
        input.signingRegion = input.signingRegion || signingRegion || region;
        input.signingName = input.signingName || signingService || input.serviceId;
        return new SignatureV4({
          credentials: normalizedCreds,
          region: input.signingRegion,
          service: input.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        });
      });
    };
  }
  return __assign(__assign({}, input), {
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer
  });
};
var normalizeProvider = function(input) {
  if (typeof input === "object") {
    var promisified_1 = Promise.resolve(input);
    return function() {
      return promisified_1;
    };
  }
  return input;
};
var normalizeCredentialProvider = function(credentials) {
  if (typeof credentials === "function") {
    return memoize(credentials, function(credentials2) {
      return credentials2.expiration !== void 0 && credentials2.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW;
    }, function(credentials2) {
      return credentials2.expiration !== void 0;
    });
  }
  return normalizeProvider(credentials);
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-signing/dist/es/middleware.js
var isClockSkewed = function(newServerTime, systemClockOffset) {
  return Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >= 3e5;
};
var getSkewCorrectedDate = function(systemClockOffset) {
  return new Date(Date.now() + systemClockOffset);
};
function awsAuthMiddleware(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter(this, void 0, void 0, function() {
        var signer, _a, output, _b, _c, headers, dateHeader, serverTime;
        var _d;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              if (!HttpRequest.isInstance(args.request))
                return [2, next(args)];
              if (!(typeof options.signer === "function"))
                return [3, 2];
              return [4, options.signer()];
            case 1:
              _a = _e.sent();
              return [3, 3];
            case 2:
              _a = options.signer;
              _e.label = 3;
            case 3:
              signer = _a;
              _b = next;
              _c = [__assign({}, args)];
              _d = {};
              return [4, signer.sign(args.request, {
                signingDate: new Date(Date.now() + options.systemClockOffset),
                signingRegion: context["signing_region"],
                signingService: context["signing_service"]
              })];
            case 4:
              return [4, _b.apply(void 0, [__assign.apply(void 0, _c.concat([(_d.request = _e.sent(), _d)]))])];
            case 5:
              output = _e.sent();
              headers = output.response.headers;
              dateHeader = headers && (headers.date || headers.Date);
              if (dateHeader) {
                serverTime = Date.parse(dateHeader);
                if (isClockSkewed(serverTime, options.systemClockOffset)) {
                  options.systemClockOffset = serverTime - Date.now();
                }
              }
              return [2, output];
          }
        });
      });
    };
  };
}
var awsAuthMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true
};
var getAwsAuthPlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-user-agent/dist/es/configurations.js
function resolveUserAgentConfig(input) {
  return __assign(__assign({}, input), { customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent });
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-user-agent/dist/es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-user-agent/dist/es/user-agent-middleware.js
var userAgentMiddleware = function(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter(void 0, void 0, void 0, function() {
        var request, headers, userAgent, defaultUserAgent2, customUserAgent, sdkUserAgentValue, normalUAValue;
        var _a, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              request = args.request;
              if (!HttpRequest.isInstance(request))
                return [2, next(args)];
              headers = request.headers;
              userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
              return [4, options.defaultUserAgentProvider()];
            case 1:
              defaultUserAgent2 = _c.sent().map(escapeUserAgent);
              customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
              sdkUserAgentValue = __spreadArray(__spreadArray(__spreadArray([], __read(defaultUserAgent2)), __read(userAgent)), __read(customUserAgent)).join(SPACE);
              normalUAValue = __spreadArray(__spreadArray([], __read(defaultUserAgent2.filter(function(section) {
                return section.startsWith("aws-sdk-");
              }))), __read(customUserAgent)).join(SPACE);
              if (options.runtime !== "browser") {
                if (normalUAValue) {
                  headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? headers[USER_AGENT] + " " + normalUAValue : normalUAValue;
                }
                headers[USER_AGENT] = sdkUserAgentValue;
              } else {
                headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
              }
              return [2, next(__assign(__assign({}, args), { request }))];
          }
        });
      });
    };
  };
};
var escapeUserAgent = function(_a) {
  var _b = __read(_a, 2), name2 = _b[0], version2 = _b[1];
  var prefixSeparatorIndex = name2.indexOf("/");
  var prefix = name2.substring(0, prefixSeparatorIndex);
  var uaName = name2.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version2].filter(function(item) {
    return item && item.length > 0;
  }).map(function(item) {
    return item === null || item === void 0 ? void 0 : item.replace(UA_ESCAPE_REGEX, "_");
  }).join("/");
};
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = function(config) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-stack/dist/es/MiddlewareStack.js
var constructStack = function() {
  var absoluteEntries = [];
  var relativeEntries = [];
  var entriesNameSet = new Set();
  var sort = function(entries) {
    return entries.sort(function(a, b) {
      return stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"];
    });
  };
  var removeByName = function(toRemove) {
    var isRemoved = false;
    var filterCb = function(entry) {
      if (entry.name && entry.name === toRemove) {
        isRemoved = true;
        entriesNameSet.delete(toRemove);
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };
  var removeByReference = function(toRemove) {
    var isRemoved = false;
    var filterCb = function(entry) {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        if (entry.name)
          entriesNameSet.delete(entry.name);
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };
  var cloneTo = function(toStack) {
    absoluteEntries.forEach(function(entry) {
      toStack.add(entry.middleware, __assign({}, entry));
    });
    relativeEntries.forEach(function(entry) {
      toStack.addRelativeTo(entry.middleware, __assign({}, entry));
    });
    return toStack;
  };
  var expandRelativeMiddlewareList = function(from) {
    var expandedMiddlewareList = [];
    from.before.forEach(function(entry) {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push.apply(expandedMiddlewareList, __spreadArray([], __read(expandRelativeMiddlewareList(entry))));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach(function(entry) {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push.apply(expandedMiddlewareList, __spreadArray([], __read(expandRelativeMiddlewareList(entry))));
      }
    });
    return expandedMiddlewareList;
  };
  var getMiddlewareList = function() {
    var normalizedAbsoluteEntries = [];
    var normalizedRelativeEntries = [];
    var normalizedEntriesNameMap = {};
    absoluteEntries.forEach(function(entry) {
      var normalizedEntry = __assign(__assign({}, entry), { before: [], after: [] });
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach(function(entry) {
      var normalizedEntry = __assign(__assign({}, entry), { before: [], after: [] });
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach(function(entry) {
      if (entry.toMiddleware) {
        var toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          throw new Error(entry.toMiddleware + " is not found when adding " + (entry.name || "anonymous") + " middleware " + entry.relation + " " + entry.toMiddleware);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    var mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce(function(wholeList, expendedMiddlewareList) {
      wholeList.push.apply(wholeList, __spreadArray([], __read(expendedMiddlewareList)));
      return wholeList;
    }, []);
    return mainChain.map(function(entry) {
      return entry.middleware;
    });
  };
  var stack = {
    add: function(middleware, options) {
      if (options === void 0) {
        options = {};
      }
      var name2 = options.name, override = options.override;
      var entry = __assign({ step: "initialize", priority: "normal", middleware }, options);
      if (name2) {
        if (entriesNameSet.has(name2)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name2 + "'");
          var toOverrideIndex = absoluteEntries.findIndex(function(entry2) {
            return entry2.name === name2;
          });
          var toOverride = absoluteEntries[toOverrideIndex];
          if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
            throw new Error('"' + name2 + '" middleware with ' + toOverride.priority + " priority in " + toOverride.step + " step cannot be " + ("overridden by same-name middleware with " + entry.priority + " priority in " + entry.step + " step."));
          }
          absoluteEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name2);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: function(middleware, options) {
      var name2 = options.name, override = options.override;
      var entry = __assign({ middleware }, options);
      if (name2) {
        if (entriesNameSet.has(name2)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name2 + "'");
          var toOverrideIndex = relativeEntries.findIndex(function(entry2) {
            return entry2.name === name2;
          });
          var toOverride = relativeEntries[toOverrideIndex];
          if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
            throw new Error('"' + name2 + '" middleware ' + toOverride.relation + ' "' + toOverride.toMiddleware + '" middleware cannot be overridden ' + ("by same-name middleware " + entry.relation + ' "' + entry.toMiddleware + '" middleware.'));
          }
          relativeEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name2);
      }
      relativeEntries.push(entry);
    },
    clone: function() {
      return cloneTo(constructStack());
    },
    use: function(plugin) {
      plugin.applyToStack(stack);
    },
    remove: function(toRemove) {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    },
    removeByTag: function(toRemove) {
      var isRemoved = false;
      var filterCb = function(entry) {
        var tags = entry.tags, name2 = entry.name;
        if (tags && tags.includes(toRemove)) {
          if (name2)
            entriesNameSet.delete(name2);
          isRemoved = true;
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    },
    concat: function(from) {
      var cloned = cloneTo(constructStack());
      cloned.use(from);
      return cloned;
    },
    applyToStack: cloneTo,
    resolve: function(handler, context) {
      var e_1, _a;
      try {
        for (var _b = __values(getMiddlewareList().reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var middleware = _c.value;
          handler = middleware(handler, context);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return handler;
    }
  };
  return stack;
};
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/client.js
var Client = function() {
  function Client2(config) {
    this.middlewareStack = constructStack();
    this.config = config;
  }
  Client2.prototype.send = function(command, optionsOrCb, cb) {
    var options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    var callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    var handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    if (callback) {
      handler(command).then(function(result) {
        return callback(null, result.output);
      }, function(err) {
        return callback(err);
      }).catch(function() {
      });
    } else {
      return handler(command).then(function(result) {
        return result.output;
      });
    }
  };
  Client2.prototype.destroy = function() {
    if (this.config.requestHandler.destroy)
      this.config.requestHandler.destroy();
  };
  return Client2;
}();

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/command.js
var Command = function() {
  function Command2() {
    this.middlewareStack = constructStack();
  }
  return Command2;
}();

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/lazy-json.js
var StringWrapper = function() {
  var Class = Object.getPrototypeOf(this).constructor;
  var Constructor = Function.bind.apply(String, __spreadArray([null], __read(arguments)));
  var instance = new Constructor();
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
  constructor: {
    value: StringWrapper,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(StringWrapper, String);
var LazyJsonString = function(_super) {
  __extends(LazyJsonString2, _super);
  function LazyJsonString2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  LazyJsonString2.prototype.deserializeJSON = function() {
    return JSON.parse(_super.prototype.toString.call(this));
  };
  LazyJsonString2.prototype.toJSON = function() {
    return _super.prototype.toString.call(this);
  };
  LazyJsonString2.fromObject = function(object) {
    if (object instanceof LazyJsonString2) {
      return object;
    } else if (object instanceof String || typeof object === "string") {
      return new LazyJsonString2(object);
    }
    return new LazyJsonString2(JSON.stringify(object));
  };
  return LazyJsonString2;
}(StringWrapper);

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/parse-utils.js
var expectNumber = function(value) {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError("Expected number, got " + typeof value);
};
var expectString = function(value) {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  throw new TypeError("Expected string, got " + typeof value);
};
var handleFloat = function(value) {
  if (typeof value == "string") {
    switch (value) {
      case "NaN":
        return NaN;
      case "Infinity":
        return Infinity;
      case "-Infinity":
        return -Infinity;
      default:
        throw new Error("Unable to parse float value: " + value);
    }
  }
  return expectNumber(value);
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/ser-utils.js
var serializeFloat = function(value) {
  if (value !== value) {
    return "NaN";
  }
  switch (value) {
    case Infinity:
      return "Infinity";
    case -Infinity:
      return "-Infinity";
    default:
      return value;
  }
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/smithy-client/dist/es/constants.js
var SENSITIVE_STRING = "***SensitiveInformation***";

// ../../node_modules/@aws-sdk/client-location/dist/es/LocationClient.js
var LocationClient = function(_super) {
  __extends(LocationClient2, _super);
  function LocationClient2(configuration) {
    var _this = this;
    var _config_0 = __assign(__assign({}, ClientDefaultValues), configuration);
    var _config_1 = resolveRegionConfig(_config_0);
    var _config_2 = resolveEndpointsConfig(_config_1);
    var _config_3 = resolveRetryConfig(_config_2);
    var _config_4 = resolveHostHeaderConfig(_config_3);
    var _config_5 = resolveAwsAuthConfig(_config_4);
    var _config_6 = resolveUserAgentConfig(_config_5);
    _this = _super.call(this, _config_6) || this;
    _this.config = _config_6;
    _this.middlewareStack.use(getRetryPlugin(_this.config));
    _this.middlewareStack.use(getContentLengthPlugin(_this.config));
    _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
    _this.middlewareStack.use(getLoggerPlugin(_this.config));
    _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
    _this.middlewareStack.use(getUserAgentPlugin(_this.config));
    return _this;
  }
  LocationClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return LocationClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-location/dist/es/models/models_0.js
var AccessDeniedException;
(function(AccessDeniedException2) {
  AccessDeniedException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
var AssociateTrackerConsumerRequest;
(function(AssociateTrackerConsumerRequest2) {
  AssociateTrackerConsumerRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AssociateTrackerConsumerRequest || (AssociateTrackerConsumerRequest = {}));
var AssociateTrackerConsumerResponse;
(function(AssociateTrackerConsumerResponse2) {
  AssociateTrackerConsumerResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AssociateTrackerConsumerResponse || (AssociateTrackerConsumerResponse = {}));
var ConflictException;
(function(ConflictException2) {
  ConflictException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
var InternalServerException;
(function(InternalServerException2) {
  InternalServerException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InternalServerException || (InternalServerException = {}));
var ResourceNotFoundException;
(function(ResourceNotFoundException2) {
  ResourceNotFoundException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
var ThrottlingException;
(function(ThrottlingException2) {
  ThrottlingException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ThrottlingException || (ThrottlingException = {}));
var ValidationExceptionField;
(function(ValidationExceptionField2) {
  ValidationExceptionField2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ValidationExceptionField || (ValidationExceptionField = {}));
var ValidationException;
(function(ValidationException2) {
  ValidationException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
var BatchDeleteDevicePositionHistoryRequest;
(function(BatchDeleteDevicePositionHistoryRequest2) {
  BatchDeleteDevicePositionHistoryRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchDeleteDevicePositionHistoryRequest || (BatchDeleteDevicePositionHistoryRequest = {}));
var BatchItemError;
(function(BatchItemError2) {
  BatchItemError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchItemError || (BatchItemError = {}));
var BatchDeleteDevicePositionHistoryError;
(function(BatchDeleteDevicePositionHistoryError2) {
  BatchDeleteDevicePositionHistoryError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchDeleteDevicePositionHistoryError || (BatchDeleteDevicePositionHistoryError = {}));
var BatchDeleteDevicePositionHistoryResponse;
(function(BatchDeleteDevicePositionHistoryResponse2) {
  BatchDeleteDevicePositionHistoryResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchDeleteDevicePositionHistoryResponse || (BatchDeleteDevicePositionHistoryResponse = {}));
var BatchDeleteGeofenceRequest;
(function(BatchDeleteGeofenceRequest2) {
  BatchDeleteGeofenceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchDeleteGeofenceRequest || (BatchDeleteGeofenceRequest = {}));
var BatchDeleteGeofenceError;
(function(BatchDeleteGeofenceError2) {
  BatchDeleteGeofenceError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchDeleteGeofenceError || (BatchDeleteGeofenceError = {}));
var BatchDeleteGeofenceResponse;
(function(BatchDeleteGeofenceResponse2) {
  BatchDeleteGeofenceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchDeleteGeofenceResponse || (BatchDeleteGeofenceResponse = {}));
var DevicePositionUpdate;
(function(DevicePositionUpdate2) {
  DevicePositionUpdate2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Position && { Position: SENSITIVE_STRING });
  };
})(DevicePositionUpdate || (DevicePositionUpdate = {}));
var BatchEvaluateGeofencesRequest;
(function(BatchEvaluateGeofencesRequest2) {
  BatchEvaluateGeofencesRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.DevicePositionUpdates && {
      DevicePositionUpdates: obj.DevicePositionUpdates.map(function(item) {
        return DevicePositionUpdate.filterSensitiveLog(item);
      })
    });
  };
})(BatchEvaluateGeofencesRequest || (BatchEvaluateGeofencesRequest = {}));
var BatchEvaluateGeofencesError;
(function(BatchEvaluateGeofencesError2) {
  BatchEvaluateGeofencesError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchEvaluateGeofencesError || (BatchEvaluateGeofencesError = {}));
var BatchEvaluateGeofencesResponse;
(function(BatchEvaluateGeofencesResponse2) {
  BatchEvaluateGeofencesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchEvaluateGeofencesResponse || (BatchEvaluateGeofencesResponse = {}));
var BatchGetDevicePositionRequest;
(function(BatchGetDevicePositionRequest2) {
  BatchGetDevicePositionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchGetDevicePositionRequest || (BatchGetDevicePositionRequest = {}));
var DevicePosition;
(function(DevicePosition2) {
  DevicePosition2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Position && { Position: SENSITIVE_STRING });
  };
})(DevicePosition || (DevicePosition = {}));
var BatchGetDevicePositionError;
(function(BatchGetDevicePositionError2) {
  BatchGetDevicePositionError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchGetDevicePositionError || (BatchGetDevicePositionError = {}));
var BatchGetDevicePositionResponse;
(function(BatchGetDevicePositionResponse2) {
  BatchGetDevicePositionResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.DevicePositions && {
      DevicePositions: obj.DevicePositions.map(function(item) {
        return DevicePosition.filterSensitiveLog(item);
      })
    });
  };
})(BatchGetDevicePositionResponse || (BatchGetDevicePositionResponse = {}));
var GeofenceGeometry;
(function(GeofenceGeometry2) {
  GeofenceGeometry2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Polygon && { Polygon: obj.Polygon.map(function(item) {
      return SENSITIVE_STRING;
    }) });
  };
})(GeofenceGeometry || (GeofenceGeometry = {}));
var BatchPutGeofenceRequestEntry;
(function(BatchPutGeofenceRequestEntry2) {
  BatchPutGeofenceRequestEntry2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) });
  };
})(BatchPutGeofenceRequestEntry || (BatchPutGeofenceRequestEntry = {}));
var BatchPutGeofenceRequest;
(function(BatchPutGeofenceRequest2) {
  BatchPutGeofenceRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Entries && { Entries: obj.Entries.map(function(item) {
      return BatchPutGeofenceRequestEntry.filterSensitiveLog(item);
    }) });
  };
})(BatchPutGeofenceRequest || (BatchPutGeofenceRequest = {}));
var BatchPutGeofenceError;
(function(BatchPutGeofenceError2) {
  BatchPutGeofenceError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchPutGeofenceError || (BatchPutGeofenceError = {}));
var BatchPutGeofenceSuccess;
(function(BatchPutGeofenceSuccess2) {
  BatchPutGeofenceSuccess2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchPutGeofenceSuccess || (BatchPutGeofenceSuccess = {}));
var BatchPutGeofenceResponse;
(function(BatchPutGeofenceResponse2) {
  BatchPutGeofenceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchPutGeofenceResponse || (BatchPutGeofenceResponse = {}));
var BatchUpdateDevicePositionRequest;
(function(BatchUpdateDevicePositionRequest2) {
  BatchUpdateDevicePositionRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Updates && { Updates: obj.Updates.map(function(item) {
      return DevicePositionUpdate.filterSensitiveLog(item);
    }) });
  };
})(BatchUpdateDevicePositionRequest || (BatchUpdateDevicePositionRequest = {}));
var BatchUpdateDevicePositionError;
(function(BatchUpdateDevicePositionError2) {
  BatchUpdateDevicePositionError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchUpdateDevicePositionError || (BatchUpdateDevicePositionError = {}));
var BatchUpdateDevicePositionResponse;
(function(BatchUpdateDevicePositionResponse2) {
  BatchUpdateDevicePositionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BatchUpdateDevicePositionResponse || (BatchUpdateDevicePositionResponse = {}));
var CalculateRouteCarModeOptions;
(function(CalculateRouteCarModeOptions2) {
  CalculateRouteCarModeOptions2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CalculateRouteCarModeOptions || (CalculateRouteCarModeOptions = {}));
var TruckDimensions;
(function(TruckDimensions2) {
  TruckDimensions2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TruckDimensions || (TruckDimensions = {}));
var TruckWeight;
(function(TruckWeight2) {
  TruckWeight2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TruckWeight || (TruckWeight = {}));
var CalculateRouteTruckModeOptions;
(function(CalculateRouteTruckModeOptions2) {
  CalculateRouteTruckModeOptions2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CalculateRouteTruckModeOptions || (CalculateRouteTruckModeOptions = {}));
var CalculateRouteRequest;
(function(CalculateRouteRequest2) {
  CalculateRouteRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign({}, obj), obj.DeparturePosition && { DeparturePosition: SENSITIVE_STRING }), obj.DestinationPosition && { DestinationPosition: SENSITIVE_STRING }), obj.WaypointPositions && { WaypointPositions: SENSITIVE_STRING });
  };
})(CalculateRouteRequest || (CalculateRouteRequest = {}));
var LegGeometry;
(function(LegGeometry2) {
  LegGeometry2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.LineString && { LineString: SENSITIVE_STRING });
  };
})(LegGeometry || (LegGeometry = {}));
var Step;
(function(Step2) {
  Step2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.StartPosition && { StartPosition: SENSITIVE_STRING }), obj.EndPosition && { EndPosition: SENSITIVE_STRING });
  };
})(Step || (Step = {}));
var Leg;
(function(Leg2) {
  Leg2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign(__assign({}, obj), obj.StartPosition && { StartPosition: SENSITIVE_STRING }), obj.EndPosition && { EndPosition: SENSITIVE_STRING }), obj.Geometry && { Geometry: LegGeometry.filterSensitiveLog(obj.Geometry) }), obj.Steps && { Steps: obj.Steps.map(function(item) {
      return Step.filterSensitiveLog(item);
    }) });
  };
})(Leg || (Leg = {}));
var CalculateRouteSummary;
(function(CalculateRouteSummary2) {
  CalculateRouteSummary2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.RouteBBox && { RouteBBox: SENSITIVE_STRING });
  };
})(CalculateRouteSummary || (CalculateRouteSummary = {}));
var CalculateRouteResponse;
(function(CalculateRouteResponse2) {
  CalculateRouteResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.Legs && { Legs: obj.Legs.map(function(item) {
      return Leg.filterSensitiveLog(item);
    }) }), obj.Summary && { Summary: CalculateRouteSummary.filterSensitiveLog(obj.Summary) });
  };
})(CalculateRouteResponse || (CalculateRouteResponse = {}));
var CreateGeofenceCollectionRequest;
(function(CreateGeofenceCollectionRequest2) {
  CreateGeofenceCollectionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateGeofenceCollectionRequest || (CreateGeofenceCollectionRequest = {}));
var CreateGeofenceCollectionResponse;
(function(CreateGeofenceCollectionResponse2) {
  CreateGeofenceCollectionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateGeofenceCollectionResponse || (CreateGeofenceCollectionResponse = {}));
var MapConfiguration;
(function(MapConfiguration2) {
  MapConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MapConfiguration || (MapConfiguration = {}));
var CreateMapRequest;
(function(CreateMapRequest2) {
  CreateMapRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateMapRequest || (CreateMapRequest = {}));
var CreateMapResponse;
(function(CreateMapResponse2) {
  CreateMapResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateMapResponse || (CreateMapResponse = {}));
var DataSourceConfiguration;
(function(DataSourceConfiguration2) {
  DataSourceConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DataSourceConfiguration || (DataSourceConfiguration = {}));
var CreatePlaceIndexRequest;
(function(CreatePlaceIndexRequest2) {
  CreatePlaceIndexRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreatePlaceIndexRequest || (CreatePlaceIndexRequest = {}));
var CreatePlaceIndexResponse;
(function(CreatePlaceIndexResponse2) {
  CreatePlaceIndexResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreatePlaceIndexResponse || (CreatePlaceIndexResponse = {}));
var CreateRouteCalculatorRequest;
(function(CreateRouteCalculatorRequest2) {
  CreateRouteCalculatorRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateRouteCalculatorRequest || (CreateRouteCalculatorRequest = {}));
var CreateRouteCalculatorResponse;
(function(CreateRouteCalculatorResponse2) {
  CreateRouteCalculatorResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateRouteCalculatorResponse || (CreateRouteCalculatorResponse = {}));
var CreateTrackerRequest;
(function(CreateTrackerRequest2) {
  CreateTrackerRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateTrackerRequest || (CreateTrackerRequest = {}));
var CreateTrackerResponse;
(function(CreateTrackerResponse2) {
  CreateTrackerResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateTrackerResponse || (CreateTrackerResponse = {}));
var DeleteGeofenceCollectionRequest;
(function(DeleteGeofenceCollectionRequest2) {
  DeleteGeofenceCollectionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteGeofenceCollectionRequest || (DeleteGeofenceCollectionRequest = {}));
var DeleteGeofenceCollectionResponse;
(function(DeleteGeofenceCollectionResponse2) {
  DeleteGeofenceCollectionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteGeofenceCollectionResponse || (DeleteGeofenceCollectionResponse = {}));
var DeleteMapRequest;
(function(DeleteMapRequest2) {
  DeleteMapRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteMapRequest || (DeleteMapRequest = {}));
var DeleteMapResponse;
(function(DeleteMapResponse2) {
  DeleteMapResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteMapResponse || (DeleteMapResponse = {}));
var DeletePlaceIndexRequest;
(function(DeletePlaceIndexRequest2) {
  DeletePlaceIndexRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeletePlaceIndexRequest || (DeletePlaceIndexRequest = {}));
var DeletePlaceIndexResponse;
(function(DeletePlaceIndexResponse2) {
  DeletePlaceIndexResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeletePlaceIndexResponse || (DeletePlaceIndexResponse = {}));
var DeleteRouteCalculatorRequest;
(function(DeleteRouteCalculatorRequest2) {
  DeleteRouteCalculatorRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteRouteCalculatorRequest || (DeleteRouteCalculatorRequest = {}));
var DeleteRouteCalculatorResponse;
(function(DeleteRouteCalculatorResponse2) {
  DeleteRouteCalculatorResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteRouteCalculatorResponse || (DeleteRouteCalculatorResponse = {}));
var DeleteTrackerRequest;
(function(DeleteTrackerRequest2) {
  DeleteTrackerRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteTrackerRequest || (DeleteTrackerRequest = {}));
var DeleteTrackerResponse;
(function(DeleteTrackerResponse2) {
  DeleteTrackerResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteTrackerResponse || (DeleteTrackerResponse = {}));
var DescribeGeofenceCollectionRequest;
(function(DescribeGeofenceCollectionRequest2) {
  DescribeGeofenceCollectionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeGeofenceCollectionRequest || (DescribeGeofenceCollectionRequest = {}));
var DescribeGeofenceCollectionResponse;
(function(DescribeGeofenceCollectionResponse2) {
  DescribeGeofenceCollectionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeGeofenceCollectionResponse || (DescribeGeofenceCollectionResponse = {}));
var DescribeMapRequest;
(function(DescribeMapRequest2) {
  DescribeMapRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeMapRequest || (DescribeMapRequest = {}));
var DescribeMapResponse;
(function(DescribeMapResponse2) {
  DescribeMapResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeMapResponse || (DescribeMapResponse = {}));
var DescribePlaceIndexRequest;
(function(DescribePlaceIndexRequest2) {
  DescribePlaceIndexRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribePlaceIndexRequest || (DescribePlaceIndexRequest = {}));
var DescribePlaceIndexResponse;
(function(DescribePlaceIndexResponse2) {
  DescribePlaceIndexResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribePlaceIndexResponse || (DescribePlaceIndexResponse = {}));
var DescribeRouteCalculatorRequest;
(function(DescribeRouteCalculatorRequest2) {
  DescribeRouteCalculatorRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeRouteCalculatorRequest || (DescribeRouteCalculatorRequest = {}));
var DescribeRouteCalculatorResponse;
(function(DescribeRouteCalculatorResponse2) {
  DescribeRouteCalculatorResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeRouteCalculatorResponse || (DescribeRouteCalculatorResponse = {}));
var DescribeTrackerRequest;
(function(DescribeTrackerRequest2) {
  DescribeTrackerRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeTrackerRequest || (DescribeTrackerRequest = {}));
var DescribeTrackerResponse;
(function(DescribeTrackerResponse2) {
  DescribeTrackerResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeTrackerResponse || (DescribeTrackerResponse = {}));
var DisassociateTrackerConsumerRequest;
(function(DisassociateTrackerConsumerRequest2) {
  DisassociateTrackerConsumerRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DisassociateTrackerConsumerRequest || (DisassociateTrackerConsumerRequest = {}));
var DisassociateTrackerConsumerResponse;
(function(DisassociateTrackerConsumerResponse2) {
  DisassociateTrackerConsumerResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DisassociateTrackerConsumerResponse || (DisassociateTrackerConsumerResponse = {}));
var ListTagsForResourceRequest;
(function(ListTagsForResourceRequest2) {
  ListTagsForResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function(ListTagsForResourceResponse2) {
  ListTagsForResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
var TagResourceRequest;
(function(TagResourceRequest2) {
  TagResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
var TagResourceResponse;
(function(TagResourceResponse2) {
  TagResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
var UntagResourceRequest;
(function(UntagResourceRequest2) {
  UntagResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
var UntagResourceResponse;
(function(UntagResourceResponse2) {
  UntagResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
var GetGeofenceRequest;
(function(GetGeofenceRequest2) {
  GetGeofenceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetGeofenceRequest || (GetGeofenceRequest = {}));
var GetGeofenceResponse;
(function(GetGeofenceResponse2) {
  GetGeofenceResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) });
  };
})(GetGeofenceResponse || (GetGeofenceResponse = {}));
var ListGeofenceCollectionsRequest;
(function(ListGeofenceCollectionsRequest2) {
  ListGeofenceCollectionsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListGeofenceCollectionsRequest || (ListGeofenceCollectionsRequest = {}));
var ListGeofenceCollectionsResponseEntry;
(function(ListGeofenceCollectionsResponseEntry2) {
  ListGeofenceCollectionsResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListGeofenceCollectionsResponseEntry || (ListGeofenceCollectionsResponseEntry = {}));
var ListGeofenceCollectionsResponse;
(function(ListGeofenceCollectionsResponse2) {
  ListGeofenceCollectionsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListGeofenceCollectionsResponse || (ListGeofenceCollectionsResponse = {}));
var ListGeofencesRequest;
(function(ListGeofencesRequest2) {
  ListGeofencesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListGeofencesRequest || (ListGeofencesRequest = {}));
var ListGeofenceResponseEntry;
(function(ListGeofenceResponseEntry2) {
  ListGeofenceResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) });
  };
})(ListGeofenceResponseEntry || (ListGeofenceResponseEntry = {}));
var ListGeofencesResponse;
(function(ListGeofencesResponse2) {
  ListGeofencesResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Entries && { Entries: obj.Entries.map(function(item) {
      return ListGeofenceResponseEntry.filterSensitiveLog(item);
    }) });
  };
})(ListGeofencesResponse || (ListGeofencesResponse = {}));
var PutGeofenceRequest;
(function(PutGeofenceRequest2) {
  PutGeofenceRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) });
  };
})(PutGeofenceRequest || (PutGeofenceRequest = {}));
var PutGeofenceResponse;
(function(PutGeofenceResponse2) {
  PutGeofenceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutGeofenceResponse || (PutGeofenceResponse = {}));
var GetDevicePositionRequest;
(function(GetDevicePositionRequest2) {
  GetDevicePositionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetDevicePositionRequest || (GetDevicePositionRequest = {}));
var GetDevicePositionResponse;
(function(GetDevicePositionResponse2) {
  GetDevicePositionResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Position && { Position: SENSITIVE_STRING });
  };
})(GetDevicePositionResponse || (GetDevicePositionResponse = {}));
var GetDevicePositionHistoryRequest;
(function(GetDevicePositionHistoryRequest2) {
  GetDevicePositionHistoryRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetDevicePositionHistoryRequest || (GetDevicePositionHistoryRequest = {}));
var GetDevicePositionHistoryResponse;
(function(GetDevicePositionHistoryResponse2) {
  GetDevicePositionHistoryResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.DevicePositions && {
      DevicePositions: obj.DevicePositions.map(function(item) {
        return DevicePosition.filterSensitiveLog(item);
      })
    });
  };
})(GetDevicePositionHistoryResponse || (GetDevicePositionHistoryResponse = {}));
var GetMapGlyphsRequest;
(function(GetMapGlyphsRequest2) {
  GetMapGlyphsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapGlyphsRequest || (GetMapGlyphsRequest = {}));
var GetMapGlyphsResponse;
(function(GetMapGlyphsResponse2) {
  GetMapGlyphsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapGlyphsResponse || (GetMapGlyphsResponse = {}));
var GetMapSpritesRequest;
(function(GetMapSpritesRequest2) {
  GetMapSpritesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapSpritesRequest || (GetMapSpritesRequest = {}));
var GetMapSpritesResponse;
(function(GetMapSpritesResponse2) {
  GetMapSpritesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapSpritesResponse || (GetMapSpritesResponse = {}));
var GetMapStyleDescriptorRequest;
(function(GetMapStyleDescriptorRequest2) {
  GetMapStyleDescriptorRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapStyleDescriptorRequest || (GetMapStyleDescriptorRequest = {}));
var GetMapStyleDescriptorResponse;
(function(GetMapStyleDescriptorResponse2) {
  GetMapStyleDescriptorResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapStyleDescriptorResponse || (GetMapStyleDescriptorResponse = {}));
var GetMapTileRequest;
(function(GetMapTileRequest2) {
  GetMapTileRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapTileRequest || (GetMapTileRequest = {}));
var GetMapTileResponse;
(function(GetMapTileResponse2) {
  GetMapTileResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetMapTileResponse || (GetMapTileResponse = {}));
var ListDevicePositionsRequest;
(function(ListDevicePositionsRequest2) {
  ListDevicePositionsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListDevicePositionsRequest || (ListDevicePositionsRequest = {}));
var ListDevicePositionsResponseEntry;
(function(ListDevicePositionsResponseEntry2) {
  ListDevicePositionsResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Position && { Position: SENSITIVE_STRING });
  };
})(ListDevicePositionsResponseEntry || (ListDevicePositionsResponseEntry = {}));
var ListDevicePositionsResponse;
(function(ListDevicePositionsResponse2) {
  ListDevicePositionsResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Entries && {
      Entries: obj.Entries.map(function(item) {
        return ListDevicePositionsResponseEntry.filterSensitiveLog(item);
      })
    });
  };
})(ListDevicePositionsResponse || (ListDevicePositionsResponse = {}));
var ListMapsRequest;
(function(ListMapsRequest2) {
  ListMapsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListMapsRequest || (ListMapsRequest = {}));
var ListMapsResponseEntry;
(function(ListMapsResponseEntry2) {
  ListMapsResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListMapsResponseEntry || (ListMapsResponseEntry = {}));
var ListMapsResponse;
(function(ListMapsResponse2) {
  ListMapsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListMapsResponse || (ListMapsResponse = {}));
var ListPlaceIndexesRequest;
(function(ListPlaceIndexesRequest2) {
  ListPlaceIndexesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListPlaceIndexesRequest || (ListPlaceIndexesRequest = {}));
var ListPlaceIndexesResponseEntry;
(function(ListPlaceIndexesResponseEntry2) {
  ListPlaceIndexesResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListPlaceIndexesResponseEntry || (ListPlaceIndexesResponseEntry = {}));
var ListPlaceIndexesResponse;
(function(ListPlaceIndexesResponse2) {
  ListPlaceIndexesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListPlaceIndexesResponse || (ListPlaceIndexesResponse = {}));
var ListRouteCalculatorsRequest;
(function(ListRouteCalculatorsRequest2) {
  ListRouteCalculatorsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListRouteCalculatorsRequest || (ListRouteCalculatorsRequest = {}));
var ListRouteCalculatorsResponseEntry;
(function(ListRouteCalculatorsResponseEntry2) {
  ListRouteCalculatorsResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListRouteCalculatorsResponseEntry || (ListRouteCalculatorsResponseEntry = {}));
var ListRouteCalculatorsResponse;
(function(ListRouteCalculatorsResponse2) {
  ListRouteCalculatorsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListRouteCalculatorsResponse || (ListRouteCalculatorsResponse = {}));
var ListTrackerConsumersRequest;
(function(ListTrackerConsumersRequest2) {
  ListTrackerConsumersRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTrackerConsumersRequest || (ListTrackerConsumersRequest = {}));
var ListTrackerConsumersResponse;
(function(ListTrackerConsumersResponse2) {
  ListTrackerConsumersResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTrackerConsumersResponse || (ListTrackerConsumersResponse = {}));
var ListTrackersRequest;
(function(ListTrackersRequest2) {
  ListTrackersRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTrackersRequest || (ListTrackersRequest = {}));
var ListTrackersResponseEntry;
(function(ListTrackersResponseEntry2) {
  ListTrackersResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTrackersResponseEntry || (ListTrackersResponseEntry = {}));
var ListTrackersResponse;
(function(ListTrackersResponse2) {
  ListTrackersResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTrackersResponse || (ListTrackersResponse = {}));
var SearchPlaceIndexForPositionRequest;
(function(SearchPlaceIndexForPositionRequest2) {
  SearchPlaceIndexForPositionRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Position && { Position: SENSITIVE_STRING });
  };
})(SearchPlaceIndexForPositionRequest || (SearchPlaceIndexForPositionRequest = {}));
var PlaceGeometry;
(function(PlaceGeometry2) {
  PlaceGeometry2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Point && { Point: SENSITIVE_STRING });
  };
})(PlaceGeometry || (PlaceGeometry = {}));
var Place;
(function(Place2) {
  Place2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Geometry && { Geometry: PlaceGeometry.filterSensitiveLog(obj.Geometry) });
  };
})(Place || (Place = {}));
var SearchForPositionResult;
(function(SearchForPositionResult2) {
  SearchForPositionResult2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Place && { Place: Place.filterSensitiveLog(obj.Place) });
  };
})(SearchForPositionResult || (SearchForPositionResult = {}));
var SearchPlaceIndexForPositionSummary;
(function(SearchPlaceIndexForPositionSummary2) {
  SearchPlaceIndexForPositionSummary2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Position && { Position: SENSITIVE_STRING });
  };
})(SearchPlaceIndexForPositionSummary || (SearchPlaceIndexForPositionSummary = {}));
var SearchPlaceIndexForPositionResponse;
(function(SearchPlaceIndexForPositionResponse2) {
  SearchPlaceIndexForPositionResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.Summary && { Summary: SearchPlaceIndexForPositionSummary.filterSensitiveLog(obj.Summary) }), obj.Results && { Results: obj.Results.map(function(item) {
      return SearchForPositionResult.filterSensitiveLog(item);
    }) });
  };
})(SearchPlaceIndexForPositionResponse || (SearchPlaceIndexForPositionResponse = {}));
var SearchPlaceIndexForTextRequest;
(function(SearchPlaceIndexForTextRequest2) {
  SearchPlaceIndexForTextRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign({}, obj), obj.Text && { Text: SENSITIVE_STRING }), obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }), obj.FilterBBox && { FilterBBox: SENSITIVE_STRING });
  };
})(SearchPlaceIndexForTextRequest || (SearchPlaceIndexForTextRequest = {}));
var SearchForTextResult;
(function(SearchForTextResult2) {
  SearchForTextResult2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Place && { Place: Place.filterSensitiveLog(obj.Place) });
  };
})(SearchForTextResult || (SearchForTextResult = {}));
var SearchPlaceIndexForTextSummary;
(function(SearchPlaceIndexForTextSummary2) {
  SearchPlaceIndexForTextSummary2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign(__assign({}, obj), obj.Text && { Text: SENSITIVE_STRING }), obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }), obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }), obj.ResultBBox && { ResultBBox: SENSITIVE_STRING });
  };
})(SearchPlaceIndexForTextSummary || (SearchPlaceIndexForTextSummary = {}));
var SearchPlaceIndexForTextResponse;
(function(SearchPlaceIndexForTextResponse2) {
  SearchPlaceIndexForTextResponse2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.Summary && { Summary: SearchPlaceIndexForTextSummary.filterSensitiveLog(obj.Summary) }), obj.Results && { Results: obj.Results.map(function(item) {
      return SearchForTextResult.filterSensitiveLog(item);
    }) });
  };
})(SearchPlaceIndexForTextResponse || (SearchPlaceIndexForTextResponse = {}));

// ../../node_modules/@aws-sdk/client-location/dist/es/protocols/Aws_restJson1.js
var serializeAws_restJson1SearchPlaceIndexForPositionCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, body, resolvedHostname;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "" + ((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/indexes/{IndexName}/search/position";
          if (input.IndexName !== void 0) {
            labelValue = input.IndexName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IndexName.");
            }
            resolvedPath = resolvedPath.replace("{IndexName}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IndexName.");
          }
          body = JSON.stringify(__assign(__assign({}, input.MaxResults !== void 0 && input.MaxResults !== null && { MaxResults: input.MaxResults }), input.Position !== void 0 && input.Position !== null && { Position: serializeAws_restJson1Position(input.Position, context) }));
          return [4, context.endpoint()];
        case 2:
          resolvedHostname = _c.sent().hostname;
          if (context.disableHostPrefix !== true) {
            resolvedHostname = "places." + resolvedHostname;
            if (!isValidHostname(resolvedHostname)) {
              throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
            }
          }
          return [2, new HttpRequest({
            protocol,
            hostname: resolvedHostname,
            port,
            method: "POST",
            headers,
            path: resolvedPath,
            body
          })];
      }
    });
  });
};
var serializeAws_restJson1SearchPlaceIndexForTextCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, body, resolvedHostname;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "" + ((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/indexes/{IndexName}/search/text";
          if (input.IndexName !== void 0) {
            labelValue = input.IndexName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IndexName.");
            }
            resolvedPath = resolvedPath.replace("{IndexName}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IndexName.");
          }
          body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, input.BiasPosition !== void 0 && input.BiasPosition !== null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }), input.FilterBBox !== void 0 && input.FilterBBox !== null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }), input.FilterCountries !== void 0 && input.FilterCountries !== null && {
            FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context)
          }), input.MaxResults !== void 0 && input.MaxResults !== null && { MaxResults: input.MaxResults }), input.Text !== void 0 && input.Text !== null && { Text: input.Text }));
          return [4, context.endpoint()];
        case 2:
          resolvedHostname = _c.sent().hostname;
          if (context.disableHostPrefix !== true) {
            resolvedHostname = "places." + resolvedHostname;
            if (!isValidHostname(resolvedHostname)) {
              throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
            }
          }
          return [2, new HttpRequest({
            protocol,
            hostname: resolvedHostname,
            port,
            method: "POST",
            headers,
            path: resolvedPath,
            body
          })];
      }
    });
  });
};
var deserializeAws_restJson1SearchPlaceIndexForPositionCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1SearchPlaceIndexForPositionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Results: void 0,
            Summary: void 0
          };
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Results !== void 0 && data.Results !== null) {
            contents.Results = deserializeAws_restJson1SearchForPositionResultList(data.Results, context);
          }
          if (data.Summary !== void 0 && data.Summary !== null) {
            contents.Summary = deserializeAws_restJson1SearchPlaceIndexForPositionSummary(data.Summary, context);
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1SearchPlaceIndexForPositionCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function(_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.location#AccessDeniedException":
              return [3, 2];
            case "InternalServerException":
              return [3, 4];
            case "com.amazonaws.location#InternalServerException":
              return [3, 4];
            case "ResourceNotFoundException":
              return [3, 6];
            case "com.amazonaws.location#ResourceNotFoundException":
              return [3, 6];
            case "ThrottlingException":
              return [3, 8];
            case "com.amazonaws.location#ThrottlingException":
              return [3, 8];
            case "ValidationException":
              return [3, 10];
            case "com.amazonaws.location#ValidationException":
              return [3, 10];
          }
          return [3, 12];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 4:
          _d = [{}];
          return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 6:
          _e = [{}];
          return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 8:
          _f = [{}];
          return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 10:
          _g = [{}];
          return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1SearchPlaceIndexForTextCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1SearchPlaceIndexForTextCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Results: void 0,
            Summary: void 0
          };
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Results !== void 0 && data.Results !== null) {
            contents.Results = deserializeAws_restJson1SearchForTextResultList(data.Results, context);
          }
          if (data.Summary !== void 0 && data.Summary !== null) {
            contents.Summary = deserializeAws_restJson1SearchPlaceIndexForTextSummary(data.Summary, context);
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1SearchPlaceIndexForTextCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function(_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.location#AccessDeniedException":
              return [3, 2];
            case "InternalServerException":
              return [3, 4];
            case "com.amazonaws.location#InternalServerException":
              return [3, 4];
            case "ResourceNotFoundException":
              return [3, 6];
            case "com.amazonaws.location#ResourceNotFoundException":
              return [3, 6];
            case "ThrottlingException":
              return [3, 8];
            case "com.amazonaws.location#ThrottlingException":
              return [3, 8];
            case "ValidationException":
              return [3, 10];
            case "com.amazonaws.location#ValidationException":
              return [3, 10];
          }
          return [3, 12];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 4:
          _d = [{}];
          return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 6:
          _e = [{}];
          return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 8:
          _f = [{}];
          return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 10:
          _g = [{}];
          return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1AccessDeniedExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.Message = expectString(data.message);
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1InternalServerExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "InternalServerException",
        $fault: "server",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.Message = expectString(data.message);
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.Message = expectString(data.message);
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1ThrottlingExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "ThrottlingException",
        $fault: "client",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.Message = expectString(data.message);
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1ValidationExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        FieldList: void 0,
        Message: void 0,
        Reason: void 0
      };
      data = parsedOutput.body;
      if (data.fieldList !== void 0 && data.fieldList !== null) {
        contents.FieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
      }
      if (data.message !== void 0 && data.message !== null) {
        contents.Message = expectString(data.message);
      }
      if (data.reason !== void 0 && data.reason !== null) {
        contents.Reason = expectString(data.reason);
      }
      return [2, contents];
    });
  });
};
var serializeAws_restJson1BoundingBox = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeFloat(entry);
  });
};
var serializeAws_restJson1CountryCodeList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_restJson1Position = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeFloat(entry);
  });
};
var deserializeAws_restJson1BoundingBox = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return handleFloat(entry);
  });
};
var deserializeAws_restJson1CountryCodeList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return expectString(entry);
  });
};
var deserializeAws_restJson1Place = function(output, context) {
  return {
    AddressNumber: expectString(output.AddressNumber),
    Country: expectString(output.Country),
    Geometry: output.Geometry !== void 0 && output.Geometry !== null ? deserializeAws_restJson1PlaceGeometry(output.Geometry, context) : void 0,
    Label: expectString(output.Label),
    Municipality: expectString(output.Municipality),
    Neighborhood: expectString(output.Neighborhood),
    PostalCode: expectString(output.PostalCode),
    Region: expectString(output.Region),
    Street: expectString(output.Street),
    SubRegion: expectString(output.SubRegion)
  };
};
var deserializeAws_restJson1PlaceGeometry = function(output, context) {
  return {
    Point: output.Point !== void 0 && output.Point !== null ? deserializeAws_restJson1Position(output.Point, context) : void 0
  };
};
var deserializeAws_restJson1Position = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return handleFloat(entry);
  });
};
var deserializeAws_restJson1SearchForPositionResult = function(output, context) {
  return {
    Place: output.Place !== void 0 && output.Place !== null ? deserializeAws_restJson1Place(output.Place, context) : void 0
  };
};
var deserializeAws_restJson1SearchForPositionResultList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_restJson1SearchForPositionResult(entry, context);
  });
};
var deserializeAws_restJson1SearchForTextResult = function(output, context) {
  return {
    Place: output.Place !== void 0 && output.Place !== null ? deserializeAws_restJson1Place(output.Place, context) : void 0
  };
};
var deserializeAws_restJson1SearchForTextResultList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_restJson1SearchForTextResult(entry, context);
  });
};
var deserializeAws_restJson1SearchPlaceIndexForPositionSummary = function(output, context) {
  return {
    DataSource: expectString(output.DataSource),
    MaxResults: expectNumber(output.MaxResults),
    Position: output.Position !== void 0 && output.Position !== null ? deserializeAws_restJson1Position(output.Position, context) : void 0
  };
};
var deserializeAws_restJson1SearchPlaceIndexForTextSummary = function(output, context) {
  return {
    BiasPosition: output.BiasPosition !== void 0 && output.BiasPosition !== null ? deserializeAws_restJson1Position(output.BiasPosition, context) : void 0,
    DataSource: expectString(output.DataSource),
    FilterBBox: output.FilterBBox !== void 0 && output.FilterBBox !== null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : void 0,
    FilterCountries: output.FilterCountries !== void 0 && output.FilterCountries !== null ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context) : void 0,
    MaxResults: expectNumber(output.MaxResults),
    ResultBBox: output.ResultBBox !== void 0 && output.ResultBBox !== null ? deserializeAws_restJson1BoundingBox(output.ResultBBox, context) : void 0,
    Text: expectString(output.Text)
  };
};
var deserializeAws_restJson1ValidationExceptionField = function(output, context) {
  return {
    Message: expectString(output.message),
    Name: expectString(output.name)
  };
};
var deserializeAws_restJson1ValidationExceptionFieldList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_restJson1ValidationExceptionField(entry, context);
  });
};
var deserializeMetadata = function(output) {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  };
};
var collectBody = function(streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString = function(streamBody, context) {
  return collectBody(streamBody, context).then(function(body) {
    return context.utf8Encoder(body);
  });
};
var parseBody = function(streamBody, context) {
  return collectBodyString(streamBody, context).then(function(encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
var loadRestJsonErrorCode = function(output, data) {
  var findKey = function(object, key) {
    return Object.keys(object).find(function(k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };
  var sanitizeErrorCode = function(rawValue) {
    var cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
  return "";
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-serde/dist/es/deserializerMiddleware.js
var deserializerMiddleware = function(options, deserializer) {
  return function(next, context) {
    return function(args) {
      return __awaiter(void 0, void 0, void 0, function() {
        var response, parsed;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, next(args)];
            case 1:
              response = _a.sent().response;
              return [4, deserializer(response, options)];
            case 2:
              parsed = _a.sent();
              return [2, {
                response,
                output: parsed
              }];
          }
        });
      });
    };
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-serde/dist/es/serializerMiddleware.js
var serializerMiddleware = function(options, serializer) {
  return function(next, context) {
    return function(args) {
      return __awaiter(void 0, void 0, void 0, function() {
        var request;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, serializer(args.input, options)];
            case 1:
              request = _a.sent();
              return [2, next(__assign(__assign({}, args), { request }))];
          }
        });
      });
    };
  };
};

// ../../node_modules/@aws-sdk/client-location/node_modules/@aws-sdk/middleware-serde/dist/es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: function(commandStack) {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }
  };
}

// ../../node_modules/@aws-sdk/client-location/dist/es/commands/SearchPlaceIndexForPositionCommand.js
var SearchPlaceIndexForPositionCommand = function(_super) {
  __extends(SearchPlaceIndexForPositionCommand2, _super);
  function SearchPlaceIndexForPositionCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  SearchPlaceIndexForPositionCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger3 = configuration.logger;
    var clientName = "LocationClient";
    var commandName = "SearchPlaceIndexForPositionCommand";
    var handlerExecutionContext = {
      logger: logger3,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchPlaceIndexForPositionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchPlaceIndexForPositionResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchPlaceIndexForPositionCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restJson1SearchPlaceIndexForPositionCommand(input, context);
  };
  SearchPlaceIndexForPositionCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restJson1SearchPlaceIndexForPositionCommand(output, context);
  };
  return SearchPlaceIndexForPositionCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-location/dist/es/commands/SearchPlaceIndexForTextCommand.js
var SearchPlaceIndexForTextCommand = function(_super) {
  __extends(SearchPlaceIndexForTextCommand2, _super);
  function SearchPlaceIndexForTextCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  SearchPlaceIndexForTextCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger3 = configuration.logger;
    var clientName = "LocationClient";
    var commandName = "SearchPlaceIndexForTextCommand";
    var handlerExecutionContext = {
      logger: logger3,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchPlaceIndexForTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchPlaceIndexForTextResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchPlaceIndexForTextCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restJson1SearchPlaceIndexForTextCommand(input, context);
  };
  SearchPlaceIndexForTextCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restJson1SearchPlaceIndexForTextCommand(output, context);
  };
  return SearchPlaceIndexForTextCommand2;
}(Command);

// src/Providers/AmazonLocationServiceProvider.ts
var logger = new Logger("AmazonLocationServiceProvider");
var _AmazonLocationServiceProvider = class {
  constructor(config) {
    this._config = config ? config : {};
    logger.debug("Geo Options", this._config);
  }
  getCategory() {
    return _AmazonLocationServiceProvider.CATEGORY;
  }
  getProviderName() {
    return _AmazonLocationServiceProvider.PROVIDER_NAME;
  }
  configure(config) {
    logger.debug("configure Amazon Location Service Provider", config);
    if (!config)
      return this._config;
    this._config = Object.assign({}, this._config, config);
    return this._config;
  }
  getAvailableMaps() {
    this._verifyMapResources();
    const mapStyles = [];
    const availableMaps = this._config.maps.items;
    const region = this._config.region;
    for (const mapName in availableMaps) {
      const style = availableMaps[mapName].style;
      mapStyles.push({ mapName, style, region });
    }
    return mapStyles;
  }
  getDefaultMap() {
    this._verifyMapResources();
    const mapName = this._config.maps.default;
    const style = this._config.maps.items[mapName].style;
    const region = this._config.region;
    return { mapName, style, region };
  }
  async searchByText(text, options) {
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK) {
      throw new Error("No credentials");
    }
    this._verifySearchIndex(options?.searchIndexName);
    const locationServiceInput = {
      Text: text,
      IndexName: this._config.search_indices.default
    };
    if (options) {
      locationServiceInput.FilterCountries = options.countries;
      locationServiceInput.MaxResults = options.maxResults;
      if (options.searchIndexName) {
        locationServiceInput.IndexName = options.searchIndexName;
      }
      if (options["biasPosition"]) {
        locationServiceInput.BiasPosition = options["biasPosition"];
      } else if (options["searchAreaConstraints"]) {
        locationServiceInput.FilterBBox = options["searchAreaConstraints"];
      }
    }
    const client = new LocationClient({
      credentials: this._config.credentials,
      region: this._config.region,
      customUserAgent: getAmplifyUserAgent()
    });
    const command = new SearchPlaceIndexForTextCommand(locationServiceInput);
    let response;
    try {
      response = await client.send(command);
    } catch (error) {
      logger.debug(error);
      throw error;
    }
    const PascalResults = response.Results.map((result) => result.Place);
    const results = (0, import_camelcase_keys.default)(PascalResults, {
      deep: true
    });
    return results;
  }
  async searchByCoordinates(coordinates, options) {
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK) {
      throw new Error("No credentials");
    }
    this._verifySearchIndex(options?.searchIndexName);
    const locationServiceInput = {
      Position: coordinates,
      IndexName: this._config.search_indices.default
    };
    if (options) {
      if (options.searchIndexName) {
        locationServiceInput.IndexName = options.searchIndexName;
      }
      locationServiceInput.MaxResults = options.maxResults;
    }
    const client = new LocationClient({
      credentials: this._config.credentials,
      region: this._config.region,
      customUserAgent: getAmplifyUserAgent()
    });
    const command = new SearchPlaceIndexForPositionCommand(locationServiceInput);
    let response;
    try {
      response = await client.send(command);
    } catch (error) {
      logger.debug(error);
      throw error;
    }
    const PascalResults = response.Results.map((result) => result.Place);
    const results = (0, import_camelcase_keys.default)(PascalResults[0], {
      deep: true
    });
    return results;
  }
  async _ensureCredentials() {
    try {
      const credentials = await Credentials.get();
      if (!credentials)
        return false;
      const cred = Credentials.shear(credentials);
      logger.debug("Set credentials for storage. Credentials are:", cred);
      this._config.credentials = cred;
      return true;
    } catch (error) {
      logger.warn("Ensure credentials error. Credentials are:", error);
      return false;
    }
  }
  _verifyMapResources() {
    if (!this._config.maps) {
      const errorString = "No map resources found in amplify config, run 'amplify add geo' to create them and ensure to run `amplify push` after";
      logger.warn(errorString);
      throw new Error(errorString);
    }
    if (!this._config.maps.default) {
      const errorString = "No default map resource found in amplify config, run 'amplify add geo' to create one and ensure to run `amplify push` after";
      logger.warn(errorString);
      throw new Error(errorString);
    }
  }
  _verifySearchIndex(optionalSearchIndex) {
    if ((!this._config.search_indices || !this._config.search_indices.default) && !optionalSearchIndex) {
      const errorString = "No Search Index found, please run `amplify add geo` to add one and ensure to run `amplify push` after.";
      logger.warn(errorString);
      throw new Error(errorString);
    }
  }
};
var AmazonLocationServiceProvider = _AmazonLocationServiceProvider;
AmazonLocationServiceProvider.CATEGORY = "Geo";
AmazonLocationServiceProvider.PROVIDER_NAME = "AmazonLocationService";

// src/Geo.ts
var logger2 = new Logger2("Geo");
var DEFAULT_PROVIDER = "AmazonLocationService";
var _GeoClass = class {
  constructor() {
    this._config = {};
    this._pluggables = [];
    logger2.debug("Geo Options", this._config);
  }
  getModuleName() {
    return _GeoClass.MODULE;
  }
  addPluggable(pluggable) {
    if (pluggable && pluggable.getCategory() === "Geo") {
      this._pluggables.push(pluggable);
      const config = pluggable.configure(this._config[pluggable.getProviderName()]);
      return config;
    }
  }
  getPluggable(providerName) {
    const pluggable = this._pluggables.find((pluggable2) => pluggable2.getProviderName() === providerName);
    if (pluggable === void 0) {
      logger2.debug("No plugin found with providerName", providerName);
      throw new Error("No plugin found in Geo for the provider");
    } else
      return pluggable;
  }
  removePluggable(providerName) {
    this._pluggables = this._pluggables.filter((pluggable) => pluggable.getProviderName() !== providerName);
    return;
  }
  configure(config) {
    logger2.debug("configure Geo");
    if (!config)
      return this._config;
    const amplifyConfig = parseMobileHubConfig(config);
    this._config = Object.assign({}, this._config, amplifyConfig.Geo, config);
    this._pluggables.forEach((pluggable) => {
      pluggable.configure(this._config[pluggable.getProviderName()]);
    });
    if (this._pluggables.length === 0) {
      this.addPluggable(new AmazonLocationServiceProvider());
    }
    return this._config;
  }
  getAvailableMaps(provider = DEFAULT_PROVIDER) {
    const prov = this.getPluggable(provider);
    return prov.getAvailableMaps();
  }
  getDefaultMap(provider = DEFAULT_PROVIDER) {
    const prov = this.getPluggable(provider);
    return prov.getDefaultMap();
  }
  async searchByText(text, options) {
    const { providerName = DEFAULT_PROVIDER } = options || {};
    const prov = this.getPluggable(providerName);
    try {
      return await prov.searchByText(text, options);
    } catch (error) {
      logger2.debug(error);
      throw error;
    }
  }
  async searchByCoordinates(coordinates, options) {
    const { providerName = DEFAULT_PROVIDER } = options || {};
    const prov = this.getPluggable(providerName);
    try {
      return await prov.searchByCoordinates(coordinates, options);
    } catch (error) {
      logger2.debug(error);
      throw error;
    }
  }
};
var GeoClass = _GeoClass;
GeoClass.MODULE = "Geo";
var Geo = new GeoClass();
Amplify.register(Geo);
export {
  Geo
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
