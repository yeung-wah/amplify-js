var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// ../../node_modules/zen-observable-ts/node_modules/zen-observable/lib/Observable.js
var require_Observable = __commonJS({
  "../../node_modules/zen-observable-ts/node_modules/zen-observable/lib/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Observable = void 0;
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var hasSymbols = function() {
      return typeof Symbol === "function";
    };
    var hasSymbol = function(name) {
      return hasSymbols() && Boolean(Symbol[name]);
    };
    var getSymbol = function(name) {
      return hasSymbol(name) ? Symbol[name] : "@@" + name;
    };
    if (hasSymbols() && !hasSymbol("observable")) {
      Symbol.observable = Symbol("observable");
    }
    var SymbolIterator = getSymbol("iterator");
    var SymbolObservable = getSymbol("observable");
    var SymbolSpecies = getSymbol("species");
    function getMethod2(obj, key) {
      var value = obj[key];
      if (value == null)
        return void 0;
      if (typeof value !== "function")
        throw new TypeError(value + " is not a function");
      return value;
    }
    function getSpecies(obj) {
      var ctor = obj.constructor;
      if (ctor !== void 0) {
        ctor = ctor[SymbolSpecies];
        if (ctor === null) {
          ctor = void 0;
        }
      }
      return ctor !== void 0 ? ctor : Observable2;
    }
    function isObservable(x2) {
      return x2 instanceof Observable2;
    }
    function hostReportError(e) {
      if (hostReportError.log) {
        hostReportError.log(e);
      } else {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function enqueue(fn2) {
      Promise.resolve().then(function() {
        try {
          fn2();
        } catch (e) {
          hostReportError(e);
        }
      });
    }
    function cleanupSubscription(subscription) {
      var cleanup = subscription._cleanup;
      if (cleanup === void 0)
        return;
      subscription._cleanup = void 0;
      if (!cleanup) {
        return;
      }
      try {
        if (typeof cleanup === "function") {
          cleanup();
        } else {
          var unsubscribe = getMethod2(cleanup, "unsubscribe");
          if (unsubscribe) {
            unsubscribe.call(cleanup);
          }
        }
      } catch (e) {
        hostReportError(e);
      }
    }
    function closeSubscription(subscription) {
      subscription._observer = void 0;
      subscription._queue = void 0;
      subscription._state = "closed";
    }
    function flushSubscription(subscription) {
      var queue = subscription._queue;
      if (!queue) {
        return;
      }
      subscription._queue = void 0;
      subscription._state = "ready";
      for (var i2 = 0; i2 < queue.length; ++i2) {
        notifySubscription(subscription, queue[i2].type, queue[i2].value);
        if (subscription._state === "closed")
          break;
      }
    }
    function notifySubscription(subscription, type, value) {
      subscription._state = "running";
      var observer = subscription._observer;
      try {
        var m2 = getMethod2(observer, type);
        switch (type) {
          case "next":
            if (m2)
              m2.call(observer, value);
            break;
          case "error":
            closeSubscription(subscription);
            if (m2)
              m2.call(observer, value);
            else
              throw value;
            break;
          case "complete":
            closeSubscription(subscription);
            if (m2)
              m2.call(observer);
            break;
        }
      } catch (e) {
        hostReportError(e);
      }
      if (subscription._state === "closed")
        cleanupSubscription(subscription);
      else if (subscription._state === "running")
        subscription._state = "ready";
    }
    function onNotify(subscription, type, value) {
      if (subscription._state === "closed")
        return;
      if (subscription._state === "buffering") {
        subscription._queue.push({
          type,
          value
        });
        return;
      }
      if (subscription._state !== "ready") {
        subscription._state = "buffering";
        subscription._queue = [{
          type,
          value
        }];
        enqueue(function() {
          return flushSubscription(subscription);
        });
        return;
      }
      notifySubscription(subscription, type, value);
    }
    var Subscription = /* @__PURE__ */ function() {
      function Subscription2(observer, subscriber) {
        _classCallCheck(this, Subscription2);
        this._cleanup = void 0;
        this._observer = observer;
        this._queue = void 0;
        this._state = "initializing";
        var subscriptionObserver = new SubscriptionObserver(this);
        try {
          this._cleanup = subscriber.call(void 0, subscriptionObserver);
        } catch (e) {
          subscriptionObserver.error(e);
        }
        if (this._state === "initializing")
          this._state = "ready";
      }
      _createClass(Subscription2, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this._state !== "closed") {
            closeSubscription(this);
            cleanupSubscription(this);
          }
        }
      }, {
        key: "closed",
        get: function() {
          return this._state === "closed";
        }
      }]);
      return Subscription2;
    }();
    var SubscriptionObserver = /* @__PURE__ */ function() {
      function SubscriptionObserver2(subscription) {
        _classCallCheck(this, SubscriptionObserver2);
        this._subscription = subscription;
      }
      _createClass(SubscriptionObserver2, [{
        key: "next",
        value: function next(value) {
          onNotify(this._subscription, "next", value);
        }
      }, {
        key: "error",
        value: function error(value) {
          onNotify(this._subscription, "error", value);
        }
      }, {
        key: "complete",
        value: function complete() {
          onNotify(this._subscription, "complete");
        }
      }, {
        key: "closed",
        get: function() {
          return this._subscription._state === "closed";
        }
      }]);
      return SubscriptionObserver2;
    }();
    var Observable2 = /* @__PURE__ */ function() {
      function Observable3(subscriber) {
        _classCallCheck(this, Observable3);
        if (!(this instanceof Observable3))
          throw new TypeError("Observable cannot be called as a function");
        if (typeof subscriber !== "function")
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = subscriber;
      }
      _createClass(Observable3, [{
        key: "subscribe",
        value: function subscribe(observer) {
          if (typeof observer !== "object" || observer === null) {
            observer = {
              next: observer,
              error: arguments[1],
              complete: arguments[2]
            };
          }
          return new Subscription(observer, this._subscriber);
        }
      }, {
        key: "forEach",
        value: function forEach(fn2) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            if (typeof fn2 !== "function") {
              reject(new TypeError(fn2 + " is not a function"));
              return;
            }
            function done() {
              subscription.unsubscribe();
              resolve();
            }
            var subscription = _this.subscribe({
              next: function(value) {
                try {
                  fn2(value, done);
                } catch (e) {
                  reject(e);
                  subscription.unsubscribe();
                }
              },
              error: reject,
              complete: resolve
            });
          });
        }
      }, {
        key: "map",
        value: function map(fn2) {
          var _this2 = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            return _this2.subscribe({
              next: function(value) {
                try {
                  value = fn2(value);
                } catch (e) {
                  return observer.error(e);
                }
                observer.next(value);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                observer.complete();
              }
            });
          });
        }
      }, {
        key: "filter",
        value: function filter(fn2) {
          var _this3 = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            return _this3.subscribe({
              next: function(value) {
                try {
                  if (!fn2(value))
                    return;
                } catch (e) {
                  return observer.error(e);
                }
                observer.next(value);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                observer.complete();
              }
            });
          });
        }
      }, {
        key: "reduce",
        value: function reduce(fn2) {
          var _this4 = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          var hasSeed = arguments.length > 1;
          var hasValue = false;
          var seed = arguments[1];
          var acc = seed;
          return new C(function(observer) {
            return _this4.subscribe({
              next: function(value) {
                var first = !hasValue;
                hasValue = true;
                if (!first || hasSeed) {
                  try {
                    acc = fn2(acc, value);
                  } catch (e) {
                    return observer.error(e);
                  }
                } else {
                  acc = value;
                }
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                if (!hasValue && !hasSeed)
                  return observer.error(new TypeError("Cannot reduce an empty sequence"));
                observer.next(acc);
                observer.complete();
              }
            });
          });
        }
      }, {
        key: "concat",
        value: function concat() {
          var _this5 = this;
          for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
            sources[_key] = arguments[_key];
          }
          var C = getSpecies(this);
          return new C(function(observer) {
            var subscription;
            var index = 0;
            function startNext(next) {
              subscription = next.subscribe({
                next: function(v2) {
                  observer.next(v2);
                },
                error: function(e) {
                  observer.error(e);
                },
                complete: function() {
                  if (index === sources.length) {
                    subscription = void 0;
                    observer.complete();
                  } else {
                    startNext(C.from(sources[index++]));
                  }
                }
              });
            }
            startNext(_this5);
            return function() {
              if (subscription) {
                subscription.unsubscribe();
                subscription = void 0;
              }
            };
          });
        }
      }, {
        key: "flatMap",
        value: function flatMap(fn2) {
          var _this6 = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            var subscriptions = [];
            var outer = _this6.subscribe({
              next: function(value) {
                if (fn2) {
                  try {
                    value = fn2(value);
                  } catch (e) {
                    return observer.error(e);
                  }
                }
                var inner = C.from(value).subscribe({
                  next: function(value2) {
                    observer.next(value2);
                  },
                  error: function(e) {
                    observer.error(e);
                  },
                  complete: function() {
                    var i2 = subscriptions.indexOf(inner);
                    if (i2 >= 0)
                      subscriptions.splice(i2, 1);
                    completeIfDone();
                  }
                });
                subscriptions.push(inner);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                completeIfDone();
              }
            });
            function completeIfDone() {
              if (outer.closed && subscriptions.length === 0)
                observer.complete();
            }
            return function() {
              subscriptions.forEach(function(s2) {
                return s2.unsubscribe();
              });
              outer.unsubscribe();
            };
          });
        }
      }, {
        key: SymbolObservable,
        value: function() {
          return this;
        }
      }], [{
        key: "from",
        value: function from(x2) {
          var C = typeof this === "function" ? this : Observable3;
          if (x2 == null)
            throw new TypeError(x2 + " is not an object");
          var method = getMethod2(x2, SymbolObservable);
          if (method) {
            var observable = method.call(x2);
            if (Object(observable) !== observable)
              throw new TypeError(observable + " is not an object");
            if (isObservable(observable) && observable.constructor === C)
              return observable;
            return new C(function(observer) {
              return observable.subscribe(observer);
            });
          }
          if (hasSymbol("iterator")) {
            method = getMethod2(x2, SymbolIterator);
            if (method) {
              return new C(function(observer) {
                enqueue(function() {
                  if (observer.closed)
                    return;
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = void 0;
                  try {
                    for (var _iterator = method.call(x2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var _item = _step.value;
                      observer.next(_item);
                      if (observer.closed)
                        return;
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                  observer.complete();
                });
              });
            }
          }
          if (Array.isArray(x2)) {
            return new C(function(observer) {
              enqueue(function() {
                if (observer.closed)
                  return;
                for (var i2 = 0; i2 < x2.length; ++i2) {
                  observer.next(x2[i2]);
                  if (observer.closed)
                    return;
                }
                observer.complete();
              });
            });
          }
          throw new TypeError(x2 + " is not observable");
        }
      }, {
        key: "of",
        value: function of() {
          for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            items[_key2] = arguments[_key2];
          }
          var C = typeof this === "function" ? this : Observable3;
          return new C(function(observer) {
            enqueue(function() {
              if (observer.closed)
                return;
              for (var i2 = 0; i2 < items.length; ++i2) {
                observer.next(items[i2]);
                if (observer.closed)
                  return;
              }
              observer.complete();
            });
          });
        }
      }, {
        key: SymbolSpecies,
        get: function() {
          return this;
        }
      }]);
      return Observable3;
    }();
    exports.Observable = Observable2;
    if (hasSymbols()) {
      Object.defineProperty(Observable2, Symbol("extensions"), {
        value: {
          symbol: SymbolObservable,
          hostReportError
        },
        configurable: true
      });
    }
  }
});

// ../../node_modules/zen-observable-ts/node_modules/zen-observable/index.js
var require_zen_observable = __commonJS({
  "../../node_modules/zen-observable-ts/node_modules/zen-observable/index.js"(exports, module) {
    module.exports = require_Observable().Observable;
  }
});

// ../../node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "../../node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i2 = 0, len = code.length; i2 < len; ++i2) {
      lookup[i2] = code[i2];
      revLookup[code.charCodeAt(i2)] = i2;
    }
    var i2;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i3;
      for (i3 = 0; i3 < len2; i3 += 4) {
        tmp = revLookup[b64.charCodeAt(i3)] << 18 | revLookup[b64.charCodeAt(i3 + 1)] << 12 | revLookup[b64.charCodeAt(i3 + 2)] << 6 | revLookup[b64.charCodeAt(i3 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i3)] << 2 | revLookup[b64.charCodeAt(i3 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i3)] << 10 | revLookup[b64.charCodeAt(i3 + 1)] << 4 | revLookup[b64.charCodeAt(i3 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i3 = start; i3 < end; i3 += 3) {
        tmp = (uint8[i3] << 16 & 16711680) + (uint8[i3 + 1] << 8 & 65280) + (uint8[i3 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i3 = 0, len22 = len2 - extraBytes; i3 < len22; i3 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len22 ? len22 : i3 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// ../../node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "../../node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m2;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i2 = isLE ? nBytes - 1 : 0;
      var d2 = isLE ? -1 : 1;
      var s2 = buffer[offset + i2];
      i2 += d2;
      e = s2 & (1 << -nBits) - 1;
      s2 >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i2], i2 += d2, nBits -= 8) {
      }
      m2 = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m2 = m2 * 256 + buffer[offset + i2], i2 += d2, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m2 ? NaN : (s2 ? -1 : 1) * Infinity;
      } else {
        m2 = m2 + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s2 ? -1 : 1) * m2 * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m2, c2;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i2 = isLE ? 0 : nBytes - 1;
      var d2 = isLE ? 1 : -1;
      var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m2 = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c2 = Math.pow(2, -e)) < 1) {
          e--;
          c2 *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c2;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c2 >= 2) {
          e++;
          c2 /= 2;
        }
        if (e + eBias >= eMax) {
          m2 = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m2 = (value * c2 - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i2] = m2 & 255, i2 += d2, m2 /= 256, mLen -= 8) {
      }
      e = e << mLen | m2;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i2] = e & 255, i2 += d2, e /= 256, eLen -= 8) {
      }
      buffer[offset + i2 - d2] |= s2 * 128;
    };
  }
});

// ../../node_modules/isarray/index.js
var require_isarray = __commonJS({
  "../../node_modules/isarray/index.js"(exports, module) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// ../../node_modules/buffer/index.js
var require_buffer = __commonJS({
  "../../node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var isArray = require_isarray();
    exports.Buffer = Buffer6;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    Buffer6.TYPED_ARRAY_SUPPORT = window.TYPED_ARRAY_SUPPORT !== void 0 ? window.TYPED_ARRAY_SUPPORT : typedArraySupport();
    exports.kMaxLength = kMaxLength();
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } };
        return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
      } catch (e) {
        return false;
      }
    }
    function kMaxLength() {
      return Buffer6.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError("Invalid typed array length");
      }
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        that = new Uint8Array(length);
        that.__proto__ = Buffer6.prototype;
      } else {
        if (that === null) {
          that = new Buffer6(length);
        }
        that.length = length;
      }
      return that;
    }
    function Buffer6(arg, encodingOrOffset, length) {
      if (!Buffer6.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer6)) {
        return new Buffer6(arg, encodingOrOffset, length);
      }
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new Error("If encoding is specified then the first argument must be a string");
        }
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }
    Buffer6.poolSize = 8192;
    Buffer6._augment = function(arr) {
      arr.__proto__ = Buffer6.prototype;
      return arr;
    };
    function from(that, value, encodingOrOffset, length) {
      if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
      }
      if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
      }
      if (typeof value === "string") {
        return fromString(that, value, encodingOrOffset);
      }
      return fromObject(that, value);
    }
    Buffer6.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer6.TYPED_ARRAY_SUPPORT) {
      Buffer6.prototype.__proto__ = Uint8Array.prototype;
      Buffer6.__proto__ = Uint8Array;
      if (typeof Symbol !== "undefined" && Symbol.species && Buffer6[Symbol.species] === Buffer6) {
        Object.defineProperty(Buffer6, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be a number');
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
    }
    function alloc(that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
      }
      return createBuffer(that, size);
    }
    Buffer6.alloc = function(size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };
    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer6.TYPED_ARRAY_SUPPORT) {
        for (var i2 = 0; i2 < size; ++i2) {
          that[i2] = 0;
        }
      }
      return that;
    }
    Buffer6.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer6.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    function fromString(that, string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer6.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }
      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);
      var actual = that.write(string, encoding);
      if (actual !== length) {
        that = that.slice(0, actual);
      }
      return that;
    }
    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i2 = 0; i2 < length; i2 += 1) {
        that[i2] = array[i2] & 255;
      }
      return that;
    }
    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength;
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      if (byteOffset === void 0 && length === void 0) {
        array = new Uint8Array(array);
      } else if (length === void 0) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        that = array;
        that.__proto__ = Buffer6.prototype;
      } else {
        that = fromArrayLike(that, array);
      }
      return that;
    }
    function fromObject(that, obj) {
      if (Buffer6.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);
        if (that.length === 0) {
          return that;
        }
        obj.copy(that, 0, 0, len);
        return that;
      }
      if (obj) {
        if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
          if (typeof obj.length !== "number" || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }
        if (obj.type === "Buffer" && isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function checked(length) {
      if (length >= kMaxLength()) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer6.alloc(+length);
    }
    Buffer6.isBuffer = function isBuffer(b2) {
      return !!(b2 != null && b2._isBuffer);
    };
    Buffer6.compare = function compare(a2, b2) {
      if (!Buffer6.isBuffer(a2) || !Buffer6.isBuffer(b2)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a2 === b2)
        return 0;
      var x2 = a2.length;
      var y2 = b2.length;
      for (var i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
        if (a2[i2] !== b2[i2]) {
          x2 = a2[i2];
          y2 = b2[i2];
          break;
        }
      }
      if (x2 < y2)
        return -1;
      if (y2 < x2)
        return 1;
      return 0;
    };
    Buffer6.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer6.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer6.alloc(0);
      }
      var i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      var buffer = Buffer6.allocUnsafe(length);
      var pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        var buf = list[i2];
        if (!Buffer6.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer6.isBuffer(string)) {
        return string.length;
      }
      if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        string = "" + string;
      }
      var len = string.length;
      if (len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
          case void 0:
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase)
              return utf8ToBytes(string).length;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer6.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer6.prototype._isBuffer = true;
    function swap(b2, n2, m2) {
      var i2 = b2[n2];
      b2[n2] = b2[m2];
      b2[m2] = i2;
    }
    Buffer6.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i2 = 0; i2 < len; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer6.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i2 = 0; i2 < len; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer6.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i2 = 0; i2 < len; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer6.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer6.prototype.equals = function equals(b2) {
      if (!Buffer6.isBuffer(b2))
        throw new TypeError("Argument must be a Buffer");
      if (this === b2)
        return true;
      return Buffer6.compare(this, b2) === 0;
    };
    Buffer6.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer6.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer6.isBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x2 = thisEnd - thisStart;
      var y2 = end - start;
      var len = Math.min(x2, y2);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i2 = 0; i2 < len; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x2 = thisCopy[i2];
          y2 = targetCopy[i2];
          break;
        }
      }
      if (x2 < y2)
        return -1;
      if (y2 < x2)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer6.from(val, encoding);
      }
      if (Buffer6.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (Buffer6.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      var i2;
      if (dir) {
        var foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          var found = true;
          for (var j2 = 0; j2 < valLength; j2++) {
            if (read(arr, i2 + j2) !== read(val, j2)) {
              found = false;
              break;
            }
          }
          if (found)
            return i2;
        }
      }
      return -1;
    }
    Buffer6.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer6.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer6.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (strLen % 2 !== 0)
        throw new TypeError("Invalid hex string");
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i2 = 0; i2 < length; ++i2) {
        var parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (isNaN(parsed))
          return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer6.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer6.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i2 = start;
      while (i2 < end) {
        var firstByte = buf[i2];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i2 = 0;
      while (i2 < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      var out = "";
      for (var i2 = start; i2 < end; ++i2) {
        out += toHex(buf[i2]);
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i2 = 0; i2 < bytes.length; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer6.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer6.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer6(sliceLen, void 0);
        for (var i2 = 0; i2 < sliceLen; ++i2) {
          newBuf[i2] = this[i2 + start];
        }
      }
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer6.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer6.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer6.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer6.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer6.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer6.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer6.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer6.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer6.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i2 = byteLength2;
      var mul = 1;
      var val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer6.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer6.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer6.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer6.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer6.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer6.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer6.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer6.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer6.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer6.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer6.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer6.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i2 = byteLength2 - 1;
      var mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer6.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer6.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 65535 + value + 1;
      for (var i2 = 0, j2 = Math.min(buf.length - offset, 2); i2 < j2; ++i2) {
        buf[offset + i2] = (value & 255 << 8 * (littleEndian ? i2 : 1 - i2)) >>> (littleEndian ? i2 : 1 - i2) * 8;
      }
    }
    Buffer6.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer6.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 4294967295 + value + 1;
      for (var i2 = 0, j2 = Math.min(buf.length - offset, 4); i2 < j2; ++i2) {
        buf[offset + i2] = value >>> (littleEndian ? i2 : 3 - i2) * 8 & 255;
      }
    }
    Buffer6.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer6.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer6.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i2 = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer6.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i2 = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer6.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer6.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer6.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer6.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer6.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer6.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer6.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer6.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer6.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer6.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer6.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer6.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i2;
      if (this === target && start < targetStart && targetStart < end) {
        for (i2 = len - 1; i2 >= 0; --i2) {
          target[i2 + targetStart] = this[i2 + start];
        }
      } else if (len < 1e3 || !Buffer6.TYPED_ARRAY_SUPPORT) {
        for (i2 = 0; i2 < len; ++i2) {
          target[i2 + targetStart] = this[i2 + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer6.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer6.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        var bytes = Buffer6.isBuffer(val) ? val : utf8ToBytes(new Buffer6(val, encoding).toString());
        var len = bytes.length;
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = stringtrim(str).replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function stringtrim(str) {
      if (str.trim)
        return str.trim();
      return str.replace(/^\s+|\s+$/g, "");
    }
    function toHex(n2) {
      if (n2 < 16)
        return "0" + n2.toString(16);
      return n2.toString(16);
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c2, hi, lo;
      var byteArray = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0)
          break;
        c2 = str.charCodeAt(i2);
        hi = c2 >> 8;
        lo = c2 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length)
          break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isnan(val) {
      return val !== val;
    }
  }
});

// ../../node_modules/ulid/stubs/crypto.js
var require_crypto = __commonJS({
  "../../node_modules/ulid/stubs/crypto.js"() {
  }
});

// (disabled):crypto
var require_crypto2 = __commonJS({
  "(disabled):crypto"() {
  }
});

// ../amazon-cognito-identity-js/node_modules/crypto-js/core.js
var require_core = __commonJS({
  "../amazon-cognito-identity-js/node_modules/crypto-js/core.js"(exports, module) {
    (function(root, factory2) {
      if (typeof exports === "object") {
        module.exports = exports = factory2();
      } else if (typeof define === "function" && define.amd) {
        define([], factory2);
      } else {
        root.CryptoJS = factory2();
      }
    })(exports, function() {
      var CryptoJS3 = CryptoJS3 || function(Math2, undefined2) {
        var crypto3;
        if (typeof window !== "undefined" && window.crypto) {
          crypto3 = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto3 = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto3 = globalThis.crypto;
        }
        if (!crypto3 && typeof window !== "undefined" && window.msCrypto) {
          crypto3 = window.msCrypto;
        }
        if (!crypto3 && typeof window !== "undefined" && window.crypto) {
          crypto3 = window.crypto;
        }
        if (!crypto3 && typeof __require === "function") {
          try {
            crypto3 = require_crypto2();
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt2 = function() {
          if (crypto3) {
            if (typeof crypto3.getRandomValues === "function") {
              try {
                return crypto3.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto3.randomBytes === "function") {
              try {
                return crypto3.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || function() {
          function F2() {
          }
          return function(obj) {
            var subtype;
            F2.prototype = obj;
            subtype = new F2();
            F2.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            create: function() {
              var instance2 = this.extend();
              instance2.init.apply(instance2, arguments);
              return instance2;
            },
            init: function() {
            },
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray2 = C_lib.WordArray = Base.extend({
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i2 = 0; i2 < thatSigBytes; i2++) {
                var thatByte = thatWords[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                thisWords[thisSigBytes + i2 >>> 2] |= thatByte << 24 - (thisSigBytes + i2) % 4 * 8;
              }
            } else {
              for (var j2 = 0; j2 < thatSigBytes; j2 += 4) {
                thisWords[thisSigBytes + j2 >>> 2] = thatWords[j2 >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          random: function(nBytes) {
            var words = [];
            for (var i2 = 0; i2 < nBytes; i2 += 4) {
              words.push(cryptoSecureRandomInt2());
            }
            return new WordArray2.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i2 = 0; i2 < sigBytes; i2++) {
              var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i2 = 0; i2 < hexStrLength; i2 += 2) {
              words[i2 >>> 3] |= parseInt(hexStr.substr(i2, 2), 16) << 24 - i2 % 8 * 4;
            }
            return new WordArray2.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i2 = 0; i2 < sigBytes; i2++) {
              var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i2 = 0; i2 < latin1StrLength; i2++) {
              words[i2 >>> 2] |= (latin1Str.charCodeAt(i2) & 255) << 24 - i2 % 4 * 8;
            }
            return new WordArray2.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          reset: function() {
            this._data = new WordArray2.init();
            this._nDataBytes = 0;
          },
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray2.init(processedWords, nBytesReady);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS3;
    });
  }
});

// ../amazon-cognito-identity-js/node_modules/crypto-js/lib-typedarrays.js
var require_lib_typedarrays = __commonJS({
  "../amazon-cognito-identity-js/node_modules/crypto-js/lib-typedarrays.js"(exports, module) {
    (function(root, factory2) {
      if (typeof exports === "object") {
        module.exports = exports = factory2(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory2);
      } else {
        factory2(root.CryptoJS);
      }
    })(exports, function(CryptoJS3) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS3;
        var C_lib = C.lib;
        var WordArray2 = C_lib.WordArray;
        var superInit = WordArray2.init;
        var subInit = WordArray2.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i2 = 0; i2 < typedArrayByteLength; i2++) {
              words[i2 >>> 2] |= typedArray[i2] << 24 - i2 % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray2;
      })();
      return CryptoJS3.lib.WordArray;
    });
  }
});

// ../amazon-cognito-identity-js/node_modules/crypto-js/sha256.js
var require_sha256 = __commonJS({
  "../amazon-cognito-identity-js/node_modules/crypto-js/sha256.js"(exports, module) {
    (function(root, factory2) {
      if (typeof exports === "object") {
        module.exports = exports = factory2(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory2);
      } else {
        factory2(root.CryptoJS);
      }
    })(exports, function(CryptoJS3) {
      (function(Math2) {
        var C = CryptoJS3;
        var C_lib = C.lib;
        var WordArray2 = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H2 = [];
        var K = [];
        (function() {
          function isPrime(n3) {
            var sqrtN = Math2.sqrt(n3);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n3 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n3) {
            return (n3 - (n3 | 0)) * 4294967296 | 0;
          }
          var n2 = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n2)) {
              if (nPrime < 8) {
                H2[nPrime] = getFractionalBits(Math2.pow(n2, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n2, 1 / 3));
              nPrime++;
            }
            n2++;
          }
        })();
        var W2 = [];
        var SHA2562 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray2.init(H2.slice(0));
          },
          _doProcessBlock: function(M2, offset) {
            var H3 = this._hash.words;
            var a2 = H3[0];
            var b2 = H3[1];
            var c2 = H3[2];
            var d2 = H3[3];
            var e = H3[4];
            var f2 = H3[5];
            var g2 = H3[6];
            var h2 = H3[7];
            for (var i2 = 0; i2 < 64; i2++) {
              if (i2 < 16) {
                W2[i2] = M2[offset + i2] | 0;
              } else {
                var gamma0x = W2[i2 - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W2[i2 - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W2[i2] = gamma0 + W2[i2 - 7] + gamma1 + W2[i2 - 16];
              }
              var ch = e & f2 ^ ~e & g2;
              var maj = a2 & b2 ^ a2 & c2 ^ b2 & c2;
              var sigma0 = (a2 << 30 | a2 >>> 2) ^ (a2 << 19 | a2 >>> 13) ^ (a2 << 10 | a2 >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h2 + sigma1 + ch + K[i2] + W2[i2];
              var t2 = sigma0 + maj;
              h2 = g2;
              g2 = f2;
              f2 = e;
              e = d2 + t1 | 0;
              d2 = c2;
              c2 = b2;
              b2 = a2;
              a2 = t1 + t2 | 0;
            }
            H3[0] = H3[0] + a2 | 0;
            H3[1] = H3[1] + b2 | 0;
            H3[2] = H3[2] + c2 | 0;
            H3[3] = H3[3] + d2 | 0;
            H3[4] = H3[4] + e | 0;
            H3[5] = H3[5] + f2 | 0;
            H3[6] = H3[6] + g2 | 0;
            H3[7] = H3[7] + h2 | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA2562);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA2562);
      })(Math);
      return CryptoJS3.SHA256;
    });
  }
});

// ../amazon-cognito-identity-js/node_modules/crypto-js/hmac.js
var require_hmac = __commonJS({
  "../amazon-cognito-identity-js/node_modules/crypto-js/hmac.js"(exports, module) {
    (function(root, factory2) {
      if (typeof exports === "object") {
        module.exports = exports = factory2(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory2);
      } else {
        factory2(root.CryptoJS);
      }
    })(exports, function(CryptoJS3) {
      (function() {
        var C = CryptoJS3;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i2 = 0; i2 < hasherBlockSize; i2++) {
              oKeyWords[i2] ^= 1549556828;
              iKeyWords[i2] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
  }
});

// ../amazon-cognito-identity-js/node_modules/crypto-js/hmac-sha256.js
var require_hmac_sha256 = __commonJS({
  "../amazon-cognito-identity-js/node_modules/crypto-js/hmac-sha256.js"(exports, module) {
    (function(root, factory2, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory2(require_core(), require_sha256(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256", "./hmac"], factory2);
      } else {
        factory2(root.CryptoJS);
      }
    })(exports, function(CryptoJS3) {
      return CryptoJS3.HmacSHA256;
    });
  }
});

// ../amazon-cognito-identity-js/node_modules/crypto-js/enc-base64.js
var require_enc_base64 = __commonJS({
  "../amazon-cognito-identity-js/node_modules/crypto-js/enc-base64.js"(exports, module) {
    (function(root, factory2) {
      if (typeof exports === "object") {
        module.exports = exports = factory2(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory2);
      } else {
        factory2(root.CryptoJS);
      }
    })(exports, function(CryptoJS3) {
      (function() {
        var C = CryptoJS3;
        var C_lib = C.lib;
        var WordArray2 = C_lib.WordArray;
        var C_enc = C.enc;
        var Base642 = C_enc.Base64 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i2 = 0; i2 < sigBytes; i2 += 3) {
              var byte1 = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
              var byte2 = words[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255;
              var byte3 = words[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j2 = 0; j2 < 4 && i2 + j2 * 0.75 < sigBytes; j2++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j2) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j2 = 0; j2 < map.length; j2++) {
                reverseMap[map.charCodeAt(j2)] = j2;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i2 = 0; i2 < base64StrLength; i2++) {
            if (i2 % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i2 - 1)] << i2 % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i2)] >>> 6 - i2 % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray2.create(words, nBytes);
        }
      })();
      return CryptoJS3.enc.Base64;
    });
  }
});

// ../../node_modules/unfetch/dist/unfetch.js
var require_unfetch = __commonJS({
  "../../node_modules/unfetch/dist/unfetch.js"(exports, module) {
    module.exports = function(e, n2) {
      return n2 = n2 || {}, new Promise(function(t2, r2) {
        var s2 = new XMLHttpRequest(), o2 = [], u2 = [], i2 = {}, a2 = function() {
          return { ok: (s2.status / 100 | 0) == 2, statusText: s2.statusText, status: s2.status, url: s2.responseURL, text: function() {
            return Promise.resolve(s2.responseText);
          }, json: function() {
            return Promise.resolve(s2.responseText).then(JSON.parse);
          }, blob: function() {
            return Promise.resolve(new Blob([s2.response]));
          }, clone: a2, headers: { keys: function() {
            return o2;
          }, entries: function() {
            return u2;
          }, get: function(e2) {
            return i2[e2.toLowerCase()];
          }, has: function(e2) {
            return e2.toLowerCase() in i2;
          } } };
        };
        for (var l2 in s2.open(n2.method || "get", e, true), s2.onload = function() {
          s2.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n3, t3) {
            o2.push(n3 = n3.toLowerCase()), u2.push([n3, t3]), i2[n3] = i2[n3] ? i2[n3] + "," + t3 : t3;
          }), t2(a2());
        }, s2.onerror = r2, s2.withCredentials = n2.credentials == "include", n2.headers)
          s2.setRequestHeader(l2, n2.headers[l2]);
        s2.send(n2.body || null);
      });
    };
  }
});

// ../../node_modules/isomorphic-unfetch/browser.js
var require_browser = __commonJS({
  "../../node_modules/isomorphic-unfetch/browser.js"(exports, module) {
    module.exports = self.fetch || (self.fetch = require_unfetch().default || require_unfetch());
  }
});

// ../../node_modules/js-cookie/src/js.cookie.js
var require_js_cookie = __commonJS({
  "../../node_modules/js-cookie/src/js.cookie.js"(exports, module) {
    (function(factory2) {
      var registeredInModuleLoader;
      if (typeof define === "function" && define.amd) {
        define(factory2);
        registeredInModuleLoader = true;
      }
      if (typeof exports === "object") {
        module.exports = factory2();
        registeredInModuleLoader = true;
      }
      if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory2();
        api.noConflict = function() {
          window.Cookies = OldCookies;
          return api;
        };
      }
    })(function() {
      function extend() {
        var i2 = 0;
        var result = {};
        for (; i2 < arguments.length; i2++) {
          var attributes = arguments[i2];
          for (var key in attributes) {
            result[key] = attributes[key];
          }
        }
        return result;
      }
      function decode(s2) {
        return s2.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      function init(converter) {
        function api() {
        }
        function set2(key, value, attributes) {
          if (typeof document === "undefined") {
            return;
          }
          attributes = extend({
            path: "/"
          }, api.defaults, attributes);
          if (typeof attributes.expires === "number") {
            attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e5);
          }
          attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
          try {
            var result = JSON.stringify(value);
            if (/^[\{\[]/.test(result)) {
              value = result;
            }
          } catch (e) {
          }
          value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var stringifiedAttributes = "";
          for (var attributeName in attributes) {
            if (!attributes[attributeName]) {
              continue;
            }
            stringifiedAttributes += "; " + attributeName;
            if (attributes[attributeName] === true) {
              continue;
            }
            stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
          }
          return document.cookie = key + "=" + value + stringifiedAttributes;
        }
        function get2(key, json) {
          if (typeof document === "undefined") {
            return;
          }
          var jar = {};
          var cookies = document.cookie ? document.cookie.split("; ") : [];
          var i2 = 0;
          for (; i2 < cookies.length; i2++) {
            var parts = cookies[i2].split("=");
            var cookie = parts.slice(1).join("=");
            if (!json && cookie.charAt(0) === '"') {
              cookie = cookie.slice(1, -1);
            }
            try {
              var name = decode(parts[0]);
              cookie = (converter.read || converter)(cookie, name) || decode(cookie);
              if (json) {
                try {
                  cookie = JSON.parse(cookie);
                } catch (e) {
                }
              }
              jar[name] = cookie;
              if (key === name) {
                break;
              }
            } catch (e) {
            }
          }
          return key ? jar[key] : jar;
        }
        api.set = set2;
        api.get = function(key) {
          return get2(key, false);
        };
        api.getJSON = function(key) {
          return get2(key, true);
        };
        api.remove = function(key, attributes) {
          set2(key, "", extend(attributes, {
            expires: -1
          }));
        };
        api.defaults = {};
        api.withConverter = init;
        return api;
      }
      return init(function() {
      });
    });
  }
});

// ../../node_modules/zen-observable/zen-observable.js
var require_zen_observable2 = __commonJS({
  "../../node_modules/zen-observable/zen-observable.js"(exports, module) {
    "use strict";
    (function(fn2, name) {
      if (typeof exports !== "undefined") {
        fn2(exports, module);
      } else if (typeof self !== "undefined") {
        var e = name === "*" ? self : name ? self[name] = {} : {};
        fn2(e, { exports: e });
      }
    })(function(exports2, module2) {
      function hasSymbol(name) {
        return typeof Symbol === "function" && Boolean(Symbol[name]);
      }
      function getSymbol(name) {
        return hasSymbol(name) ? Symbol[name] : "@@" + name;
      }
      if (typeof Symbol === "function" && !Symbol.observable) {
        Symbol.observable = Symbol("observable");
      }
      function hostReportError(e) {
        setTimeout(function() {
          throw e;
        });
      }
      function getMethod2(obj, key) {
        var value = obj[key];
        if (value == null)
          return void 0;
        if (typeof value !== "function")
          throw new TypeError(value + " is not a function");
        return value;
      }
      function getSpecies(obj) {
        var ctor = obj.constructor;
        if (ctor !== void 0) {
          ctor = ctor[getSymbol("species")];
          if (ctor === null) {
            ctor = void 0;
          }
        }
        return ctor !== void 0 ? ctor : Observable2;
      }
      function addMethods(target, methods) {
        Object.keys(methods).forEach(function(k2) {
          var desc = Object.getOwnPropertyDescriptor(methods, k2);
          desc.enumerable = false;
          Object.defineProperty(target, k2, desc);
        });
      }
      function cleanupSubscription(subscription) {
        var cleanup = subscription._cleanup;
        if (!cleanup)
          return;
        subscription._cleanup = void 0;
        try {
          cleanup();
        } catch (e) {
          hostReportError(e);
        }
      }
      function subscriptionClosed(subscription) {
        return subscription._observer === void 0;
      }
      function closeSubscription(subscription) {
        if (subscriptionClosed(subscription))
          return;
        subscription._observer = void 0;
        cleanupSubscription(subscription);
      }
      function cleanupFromSubscription(subscription) {
        return function() {
          subscription.unsubscribe();
        };
      }
      function Subscription(observer, subscriber) {
        if (Object(observer) !== observer)
          throw new TypeError("Observer must be an object");
        this._cleanup = void 0;
        this._observer = observer;
        try {
          var start$0 = getMethod2(observer, "start");
          if (start$0)
            start$0.call(observer, this);
        } catch (e) {
          hostReportError(e);
        }
        if (subscriptionClosed(this))
          return;
        observer = new SubscriptionObserver(this);
        try {
          var cleanup$0 = subscriber.call(void 0, observer);
          if (cleanup$0 != null) {
            if (typeof cleanup$0.unsubscribe === "function")
              cleanup$0 = cleanupFromSubscription(cleanup$0);
            else if (typeof cleanup$0 !== "function")
              throw new TypeError(cleanup$0 + " is not a function");
            this._cleanup = cleanup$0;
          }
        } catch (e) {
          observer.error(e);
          return;
        }
        if (subscriptionClosed(this))
          cleanupSubscription(this);
      }
      addMethods(Subscription.prototype = {}, {
        get closed() {
          return subscriptionClosed(this);
        },
        unsubscribe: function() {
          closeSubscription(this);
        }
      });
      function SubscriptionObserver(subscription) {
        this._subscription = subscription;
      }
      addMethods(SubscriptionObserver.prototype = {}, {
        get closed() {
          return subscriptionClosed(this._subscription);
        },
        next: function(value) {
          var subscription = this._subscription;
          if (subscriptionClosed(subscription))
            return;
          var observer = subscription._observer;
          try {
            var m$0 = getMethod2(observer, "next");
            if (m$0)
              m$0.call(observer, value);
          } catch (e) {
            hostReportError(e);
          }
        },
        error: function(value) {
          var subscription = this._subscription;
          if (subscriptionClosed(subscription)) {
            hostReportError(value);
            return;
          }
          var observer = subscription._observer;
          subscription._observer = void 0;
          try {
            var m$1 = getMethod2(observer, "error");
            if (m$1)
              m$1.call(observer, value);
            else
              throw value;
          } catch (e) {
            hostReportError(e);
          }
          cleanupSubscription(subscription);
        },
        complete: function() {
          var subscription = this._subscription;
          if (subscriptionClosed(subscription))
            return;
          var observer = subscription._observer;
          subscription._observer = void 0;
          try {
            var m$2 = getMethod2(observer, "complete");
            if (m$2)
              m$2.call(observer);
          } catch (e) {
            hostReportError(e);
          }
          cleanupSubscription(subscription);
        }
      });
      function Observable2(subscriber) {
        if (!(this instanceof Observable2))
          throw new TypeError("Observable cannot be called as a function");
        if (typeof subscriber !== "function")
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = subscriber;
      }
      addMethods(Observable2.prototype, {
        subscribe: function(observer) {
          for (var args = [], __$0 = 1; __$0 < arguments.length; ++__$0)
            args.push(arguments[__$0]);
          if (typeof observer === "function") {
            observer = {
              next: observer,
              error: args[0],
              complete: args[1]
            };
          } else if (typeof observer !== "object" || observer === null) {
            observer = {};
          }
          return new Subscription(observer, this._subscriber);
        },
        forEach: function(fn2) {
          var __this = this;
          return new Promise(function(resolve, reject) {
            if (typeof fn2 !== "function")
              return Promise.reject(new TypeError(fn2 + " is not a function"));
            __this.subscribe({
              _subscription: null,
              start: function(subscription) {
                if (Object(subscription) !== subscription)
                  throw new TypeError(subscription + " is not an object");
                this._subscription = subscription;
              },
              next: function(value) {
                var subscription = this._subscription;
                if (subscription.closed)
                  return;
                try {
                  fn2(value);
                } catch (err) {
                  reject(err);
                  subscription.unsubscribe();
                }
              },
              error: reject,
              complete: resolve
            });
          });
        },
        map: function(fn2) {
          var __this = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            return __this.subscribe({
              next: function(value) {
                if (observer.closed)
                  return;
                try {
                  value = fn2(value);
                } catch (e) {
                  return observer.error(e);
                }
                observer.next(value);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                observer.complete();
              }
            });
          });
        },
        filter: function(fn2) {
          var __this = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            return __this.subscribe({
              next: function(value) {
                if (observer.closed)
                  return;
                try {
                  if (!fn2(value))
                    return;
                } catch (e) {
                  return observer.error(e);
                }
                observer.next(value);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                observer.complete();
              }
            });
          });
        },
        reduce: function(fn2) {
          var __this = this;
          if (typeof fn2 !== "function")
            throw new TypeError(fn2 + " is not a function");
          var C = getSpecies(this);
          var hasSeed = arguments.length > 1;
          var hasValue = false;
          var seed = arguments[1];
          var acc = seed;
          return new C(function(observer) {
            return __this.subscribe({
              next: function(value) {
                if (observer.closed)
                  return;
                var first = !hasValue;
                hasValue = true;
                if (!first || hasSeed) {
                  try {
                    acc = fn2(acc, value);
                  } catch (e) {
                    return observer.error(e);
                  }
                } else {
                  acc = value;
                }
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                if (!hasValue && !hasSeed) {
                  return observer.error(new TypeError("Cannot reduce an empty sequence"));
                }
                observer.next(acc);
                observer.complete();
              }
            });
          });
        }
      });
      Object.defineProperty(Observable2.prototype, getSymbol("observable"), {
        value: function() {
          return this;
        },
        writable: true,
        configurable: true
      });
      addMethods(Observable2, {
        from: function(x2) {
          var C = typeof this === "function" ? this : Observable2;
          if (x2 == null)
            throw new TypeError(x2 + " is not an object");
          var method = getMethod2(x2, getSymbol("observable"));
          if (method) {
            var observable$0 = method.call(x2);
            if (Object(observable$0) !== observable$0)
              throw new TypeError(observable$0 + " is not an object");
            if (observable$0.constructor === C)
              return observable$0;
            return new C(function(observer) {
              return observable$0.subscribe(observer);
            });
          }
          if (hasSymbol("iterator") && (method = getMethod2(x2, getSymbol("iterator")))) {
            return new C(function(observer) {
              for (var __$0 = method.call(x2)[Symbol.iterator](), __$1; __$1 = __$0.next(), !__$1.done; ) {
                var item$0 = __$1.value;
                observer.next(item$0);
                if (observer.closed)
                  return;
              }
              observer.complete();
            });
          }
          if (Array.isArray(x2)) {
            return new C(function(observer) {
              for (var i$0 = 0; i$0 < x2.length; ++i$0) {
                observer.next(x2[i$0]);
                if (observer.closed)
                  return;
              }
              observer.complete();
            });
          }
          throw new TypeError(x2 + " is not observable");
        },
        of: function() {
          for (var items = [], __$0 = 0; __$0 < arguments.length; ++__$0)
            items.push(arguments[__$0]);
          var C = typeof this === "function" ? this : Observable2;
          return new C(function(observer) {
            for (var i$1 = 0; i$1 < items.length; ++i$1) {
              observer.next(items[i$1]);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        }
      });
      Object.defineProperty(Observable2, getSymbol("species"), {
        get: function() {
          return this;
        },
        configurable: true
      });
      Object.defineProperty(Observable2, "extensions", {
        value: {
          observableSymbol: getSymbol("observable"),
          setHostReportError: function(fn2) {
            hostReportError = fn2;
          }
        }
      });
      exports2.Observable = Observable2;
    }, "*");
  }
});

// ../../node_modules/zen-observable/index.js
var require_zen_observable3 = __commonJS({
  "../../node_modules/zen-observable/index.js"(exports, module) {
    module.exports = require_zen_observable2().Observable;
  }
});

// ../../node_modules/zen-push/index.js
var require_zen_push = __commonJS({
  "../../node_modules/zen-push/index.js"(exports, module) {
    "use strict";
    var Observable2 = require_zen_observable3();
    function addMethods(target, methods) {
      Object.keys(methods).forEach(function(k2) {
        var desc = Object.getOwnPropertyDescriptor(methods, k2);
        desc.enumerable = false;
        Object.defineProperty(target, k2, desc);
      });
    }
    function send(p2, message, value) {
      if (p2._observer) {
        sendMessage(p2._observer, message, value);
      } else if (p2._observers) {
        var list = [];
        p2._observers.forEach(function(to) {
          list.push(to);
        });
        list.forEach(function(to) {
          sendMessage(to, message, value);
        });
      }
    }
    function sendMessage(observer, message, value) {
      if (observer.closed) {
        return;
      }
      switch (message) {
        case "next":
          return observer.next(value);
        case "error":
          return observer.error(value);
        case "complete":
          return observer.complete(value);
      }
    }
    function hasObserver(p2) {
      return p2._observer || p2._observers && p2._observers.size > 0;
    }
    function addObserver(p2, observer) {
      if (p2._observers) {
        p2._observers.add(observer);
      } else if (!p2._observer) {
        p2._observer = observer;
      } else {
        p2._observers = new Set();
        p2._observers.add(p2._observer);
        p2._observers.add(observer);
        p2._observer = null;
      }
    }
    function deleteObserver(p2, observer) {
      if (p2._observers) {
        p2._observers.delete(observer);
      } else if (p2._observer === observer) {
        p2._observer = null;
      }
    }
    function notifyStart(p2, opts) {
      !hasObserver(p2) && opts && opts.start && opts.start();
    }
    function notifyPause(p2, opts) {
      !hasObserver(p2) && opts && opts.pause && opts.pause();
    }
    function PushStream2(opts) {
      var p2 = this;
      this._observer = null;
      this._observers = null;
      this._observable = new Observable2(function(observer) {
        notifyStart(p2, opts);
        addObserver(p2, observer);
        return function() {
          deleteObserver(p2, observer);
          notifyPause(p2, opts);
        };
      });
    }
    addMethods(PushStream2.prototype, {
      get observable() {
        return this._observable;
      },
      get observed() {
        return hasObserver(this);
      },
      next: function(x2) {
        send(this, "next", x2);
      },
      error: function(e) {
        send(this, "error", e);
      },
      complete: function(x2) {
        send(this, "complete", x2);
      }
    });
    module.exports = PushStream2;
  }
});

// src/datastore/datastore.ts
import { Amplify as Amplify2, ConsoleLogger as Logger12, Hub as Hub3, JS } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// node_modules/immer/dist/immer.esm.js
function n(n2) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), e = 1; e < t2; e++)
    r2[e - 1] = arguments[e];
  if (true) {
    var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, r2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function t(n2) {
  return !!n2 && !!n2[Q];
}
function r(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var t2 = Object.getPrototypeOf(n3);
    if (t2 === null)
      return true;
    var r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
    return r2 === Object || typeof r2 == "function" && Function.toString.call(r2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, t2, r2) {
  r2 === void 0 && (r2 = false), o(n2) === 0 ? (r2 ? Object.keys : nn)(n2).forEach(function(e) {
    r2 && typeof e == "symbol" || t2(e, n2[e], n2);
  }) : n2.forEach(function(r3, e) {
    return t2(e, r3, n2);
  });
}
function o(n2) {
  var t2 = n2[Q];
  return t2 ? t2.i > 3 ? t2.i - 4 : t2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, t2) {
  return o(n2) === 2 ? n2.has(t2) : Object.prototype.hasOwnProperty.call(n2, t2);
}
function a(n2, t2) {
  return o(n2) === 2 ? n2.get(t2) : n2[t2];
}
function f(n2, t2, r2) {
  var e = o(n2);
  e === 2 ? n2.set(t2, r2) : e === 3 ? (n2.delete(t2), n2.add(r2)) : n2[t2] = r2;
}
function c(n2, t2) {
  return n2 === t2 ? n2 !== 0 || 1 / n2 == 1 / t2 : n2 != n2 && t2 != t2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var t2 = tn(n2);
  delete t2[Q];
  for (var r2 = nn(t2), e = 0; e < r2.length; e++) {
    var i2 = r2[e], o2 = t2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), t2);
}
function d(n2, e) {
  return e === void 0 && (e = false), y(n2) || t(n2) || !r(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, t2) {
    return d(t2, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(t2) {
  var r2 = rn[t2];
  return r2 || n(18, t2), r2;
}
function m(n2, t2) {
  rn[n2] || (rn[n2] = t2);
}
function _() {
  return U || n(0), U;
}
function j(n2, t2) {
  t2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = t2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var t2 = n2[Q];
  t2.i === 0 || t2.i === 1 ? t2.j() : t2.O = true;
}
function P(t2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = t2 !== void 0 && t2 !== i2;
  return e.h.g || b("ES5").S(e, t2, o2), o2 ? (i2[Q].P && (O(e), n(4)), r(t2) && (t2 = M(e, t2), e.l || x(e, t2)), e.u && b("Patches").M(i2[Q], t2, e.u, e.s)) : t2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), t2 !== H ? t2 : void 0;
}
function M(n2, t2, r2) {
  if (y(t2))
    return t2;
  var e = t2[Q];
  if (!e)
    return i(t2, function(i2, o3) {
      return A(n2, e, t2, i2, o3, r2);
    }, true), t2;
  if (e.A !== n2)
    return t2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
    i(e.i === 3 ? new Set(o2) : o2, function(t3, i2) {
      return A(n2, e, o2, t3, i2, r2);
    }), x(n2, o2, false), r2 && n2.u && b("Patches").R(e, r2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2) {
  if (c2 === o2 && n(5), t(c2)) {
    var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !t(v2))
      return;
    e.m = false;
  }
  if (r(c2) && !y(c2)) {
    if (!e.h.F && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, t2, r2) {
  r2 === void 0 && (r2 = false), n2.h.F && n2.m && d(t2, r2);
}
function z(n2, t2) {
  var r2 = n2[Q];
  return (r2 ? p(r2) : n2)[t2];
}
function I(n2, t2) {
  if (t2 in n2)
    for (var r2 = Object.getPrototypeOf(n2); r2; ) {
      var e = Object.getOwnPropertyDescriptor(r2, t2);
      if (e)
        return e;
      r2 = Object.getPrototypeOf(r2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, t2, r2) {
  var e = s(t2) ? b("MapSet").N(t2, r2) : v(t2) ? b("MapSet").T(t2, r2) : n2.g ? function(n3, t3) {
    var r3 = Array.isArray(n3), e2 = { i: r3 ? 1 : 0, A: t3 ? t3.A : _(), P: false, I: false, D: {}, l: t3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    r3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(t2, r2) : b("ES5").J(t2, r2);
  return (r2 ? r2.A : _()).p.push(e), e;
}
function D(e) {
  return t(e) || n(22, e), function n2(t2) {
    if (!r(t2))
      return t2;
    var e2, u2 = t2[Q], c2 = o(t2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = F(t2, c2), u2.I = false;
    } else
      e2 = F(t2, c2);
    return i(e2, function(t3, r2) {
      u2 && a(u2.t, t3) === r2 || f(e2, t3, n2(r2));
    }), c2 === 3 ? new Set(e2) : e2;
  }(e);
}
function F(n2, t2) {
  switch (t2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function T() {
  function e(n2) {
    if (!r(n2))
      return n2;
    if (Array.isArray(n2))
      return n2.map(e);
    if (s(n2))
      return new Map(Array.from(n2.entries()).map(function(n3) {
        return [n3[0], e(n3[1])];
      }));
    if (v(n2))
      return new Set(Array.from(n2).map(e));
    var t2 = Object.create(Object.getPrototypeOf(n2));
    for (var i2 in n2)
      t2[i2] = e(n2[i2]);
    return u(n2, L) && (t2[L] = n2[L]), t2;
  }
  function f2(n2) {
    return t(n2) ? e(n2) : n2;
  }
  var c2 = "add";
  m("Patches", { $: function(t2, r2) {
    return r2.forEach(function(r3) {
      for (var i2 = r3.path, u2 = r3.op, f3 = t2, s2 = 0; s2 < i2.length - 1; s2++) {
        var v2 = o(f3), p2 = "" + i2[s2];
        v2 !== 0 && v2 !== 1 || p2 !== "__proto__" && p2 !== "constructor" || n(24), typeof f3 == "function" && p2 === "prototype" && n(24), typeof (f3 = a(f3, p2)) != "object" && n(15, i2.join("/"));
      }
      var l2 = o(f3), d2 = e(r3.value), h2 = i2[i2.length - 1];
      switch (u2) {
        case "replace":
          switch (l2) {
            case 2:
              return f3.set(h2, d2);
            case 3:
              n(16);
            default:
              return f3[h2] = d2;
          }
        case c2:
          switch (l2) {
            case 1:
              return f3.splice(h2, 0, d2);
            case 2:
              return f3.set(h2, d2);
            case 3:
              return f3.add(d2);
            default:
              return f3[h2] = d2;
          }
        case "remove":
          switch (l2) {
            case 1:
              return f3.splice(h2, 1);
            case 2:
              return f3.delete(h2);
            case 3:
              return f3.delete(r3.value);
            default:
              return delete f3[h2];
          }
        default:
          n(17, u2);
      }
    }), t2;
  }, R: function(n2, t2, r2, e2) {
    switch (n2.i) {
      case 0:
      case 4:
      case 2:
        return function(n3, t3, r3, e3) {
          var o2 = n3.t, s2 = n3.o;
          i(n3.D, function(n4, i2) {
            var v2 = a(o2, n4), p2 = a(s2, n4), l2 = i2 ? u(o2, n4) ? "replace" : c2 : "remove";
            if (v2 !== p2 || l2 !== "replace") {
              var d2 = t3.concat(n4);
              r3.push(l2 === "remove" ? { op: l2, path: d2 } : { op: l2, path: d2, value: p2 }), e3.push(l2 === c2 ? { op: "remove", path: d2 } : l2 === "remove" ? { op: c2, path: d2, value: f2(v2) } : { op: "replace", path: d2, value: f2(v2) });
            }
          });
        }(n2, t2, r2, e2);
      case 5:
      case 1:
        return function(n3, t3, r3, e3) {
          var i2 = n3.t, o2 = n3.D, u2 = n3.o;
          if (u2.length < i2.length) {
            var a2 = [u2, i2];
            i2 = a2[0], u2 = a2[1];
            var s2 = [e3, r3];
            r3 = s2[0], e3 = s2[1];
          }
          for (var v2 = 0; v2 < i2.length; v2++)
            if (o2[v2] && u2[v2] !== i2[v2]) {
              var p2 = t3.concat([v2]);
              r3.push({ op: "replace", path: p2, value: f2(u2[v2]) }), e3.push({ op: "replace", path: p2, value: f2(i2[v2]) });
            }
          for (var l2 = i2.length; l2 < u2.length; l2++) {
            var d2 = t3.concat([l2]);
            r3.push({ op: c2, path: d2, value: f2(u2[l2]) });
          }
          i2.length < u2.length && e3.push({ op: "replace", path: t3.concat(["length"]), value: i2.length });
        }(n2, t2, r2, e2);
      case 3:
        return function(n3, t3, r3, e3) {
          var i2 = n3.t, o2 = n3.o, u2 = 0;
          i2.forEach(function(n4) {
            if (!o2.has(n4)) {
              var i3 = t3.concat([u2]);
              r3.push({ op: "remove", path: i3, value: n4 }), e3.unshift({ op: c2, path: i3, value: n4 });
            }
            u2++;
          }), u2 = 0, o2.forEach(function(n4) {
            if (!i2.has(n4)) {
              var o3 = t3.concat([u2]);
              r3.push({ op: c2, path: o3, value: n4 }), e3.unshift({ op: "remove", path: o3, value: n4 });
            }
            u2++;
          });
        }(n2, t2, r2, e2);
    }
  }, M: function(n2, t2, r2, e2) {
    r2.push({ op: "replace", path: [], value: t2 === H ? void 0 : t2 }), e2.push({ op: "replace", path: [], value: n2.t });
  } });
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var tn = Object.getOwnPropertyDescriptors || function(n2) {
  var t2 = {};
  return nn(n2).forEach(function(r2) {
    t2[r2] = Object.getOwnPropertyDescriptor(n2, r2);
  }), t2;
};
var rn = {};
var en = { get: function(n2, t2) {
  if (t2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, t2))
    return function(n3, t3, r2) {
      var e2, i3 = I(t3, r2);
      return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === void 0 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, t2);
  var i2 = e[t2];
  return n2.I || !r(i2) ? i2 : i2 === z(n2.t, t2) ? (E(n2), n2.o[t2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, t2) {
  return t2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, t2, r2) {
  var e = I(p(n2), t2);
  if (e == null ? void 0 : e.set)
    return e.set.call(n2.k, r2), true;
  if (!n2.P) {
    var i2 = z(p(n2), t2), o2 = i2 == null ? void 0 : i2[Q];
    if (o2 && o2.t === r2)
      return n2.o[t2] = r2, n2.D[t2] = false, true;
    if (c(r2, i2) && (r2 !== void 0 || u(n2.t, t2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[t2] === r2 && typeof r2 != "number" && (r2 !== void 0 || t2 in n2.o) || (n2.o[t2] = r2, n2.D[t2] = true, true);
}, deleteProperty: function(n2, t2) {
  return z(n2.t, t2) !== void 0 || t2 in n2.t ? (n2.D[t2] = false, E(n2), k(n2)) : delete n2.D[t2], n2.o && delete n2.o[t2], true;
}, getOwnPropertyDescriptor: function(n2, t2) {
  var r2 = p(n2), e = Reflect.getOwnPropertyDescriptor(r2, t2);
  return e ? { writable: true, configurable: n2.i !== 1 || t2 !== "length", enumerable: e.enumerable, value: r2[t2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, t2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), on.deleteProperty = function(t2, r2) {
  return isNaN(parseInt(r2)) && n(13), en.deleteProperty.call(this, t2[0], r2);
}, on.set = function(t2, r2, e) {
  return r2 !== "length" && isNaN(parseInt(r2)) && n(14), en.set.call(this, t2[0], r2, e, t2[0]);
};
var un = function() {
  function e(t2) {
    var e2 = this;
    this.g = B, this.F = true, this.produce = function(t3, i3, o2) {
      if (typeof t3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = t3;
        var a2 = e2;
        return function(n2) {
          var t4 = this;
          n2 === void 0 && (n2 = u2);
          for (var r2 = arguments.length, e3 = Array(r2 > 1 ? r2 - 1 : 0), o3 = 1; o3 < r2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var r3;
            return (r3 = i3).call.apply(r3, [t4, n3].concat(e3));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), r(t3)) {
        var c2 = w(e2), s2 = R(e2, t3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!t3 || typeof t3 != "object") {
        if ((f2 = i3(t3)) === H)
          return;
        return f2 === void 0 && (f2 = t3), e2.F && d(f2, true), f2;
      }
      n(21, t3);
    }, this.produceWithPatches = function(n2, t3) {
      return typeof n2 == "function" ? function(t4) {
        for (var r3 = arguments.length, i4 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
          i4[o2 - 1] = arguments[o2];
        return e2.produceWithPatches(t4, function(t5) {
          return n2.apply(void 0, [t5].concat(i4));
        });
      } : [e2.produce(n2, t3, function(n3, t4) {
        r2 = n3, i3 = t4;
      }), r2, i3];
      var r2, i3;
    }, typeof (t2 == null ? void 0 : t2.useProxies) == "boolean" && this.setUseProxies(t2.useProxies), typeof (t2 == null ? void 0 : t2.autoFreeze) == "boolean" && this.setAutoFreeze(t2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    r(e2) || n(8), t(e2) && (e2 = D(e2));
    var i3 = w(this), o2 = R(this, e2, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(t2, r2) {
    var e2 = t2 && t2[Q];
    e2 && e2.C || n(9), e2.I && n(10);
    var i3 = e2.A;
    return j(i3, r2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(t2) {
    t2 && !B && n(20), this.g = t2;
  }, i2.applyPatches = function(n2, r2) {
    var e2;
    for (e2 = r2.length - 1; e2 >= 0; e2--) {
      var i3 = r2[e2];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    var o2 = b("Patches").$;
    return t(n2) ? o2(n2, r2) : this.produce(n2, function(n3) {
      return o2(n3, r2.slice(e2 + 1));
    });
  }, e;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// node_modules/uuid/dist/esm-browser/rng.js
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

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).substr(1));
}
var i2;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i2 = 0; i2 < 16; ++i2) {
      buf[offset + i2] = rnds[i2];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// ../../node_modules/zen-observable-ts/lib/bundle.esm.js
var import_zen_observable = __toModule(require_zen_observable());
var Observable = import_zen_observable.default;
var bundle_esm_default = Observable;

// src/authModeStrategies/defaultAuthStrategy.ts
var defaultAuthStrategy = () => [];

// src/authModeStrategies/multiAuthStrategy.ts
import Auth from "http://localhost:8080/packages/auth/4.3.12/auth-esm.js";
import { GRAPHQL_AUTH_MODE } from "http://localhost:8080/packages/api/4.0.22/api-esm.js";

// src/util.ts
var import_buffer4 = __toModule(require_buffer());

// ../../node_modules/ulid/dist/index.esm.js
function createError(message) {
  var err = new Error(message);
  err.source = "ulid";
  return err;
}
var ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
var ENCODING_LEN = ENCODING.length;
var TIME_MAX = Math.pow(2, 48) - 1;
var TIME_LEN = 10;
var RANDOM_LEN = 16;
function replaceCharAt(str, index, char) {
  if (index > str.length - 1) {
    return str;
  }
  return str.substr(0, index) + char + str.substr(index + 1);
}
function incrementBase32(str) {
  var done = void 0;
  var index = str.length;
  var char = void 0;
  var charIndex = void 0;
  var maxCharIndex = ENCODING_LEN - 1;
  while (!done && index-- >= 0) {
    char = str[index];
    charIndex = ENCODING.indexOf(char);
    if (charIndex === -1) {
      throw createError("incorrectly encoded string");
    }
    if (charIndex === maxCharIndex) {
      str = replaceCharAt(str, index, ENCODING[0]);
      continue;
    }
    done = replaceCharAt(str, index, ENCODING[charIndex + 1]);
  }
  if (typeof done === "string") {
    return done;
  }
  throw createError("cannot increment this string");
}
function randomChar(prng2) {
  var rand = Math.floor(prng2() * ENCODING_LEN);
  if (rand === ENCODING_LEN) {
    rand = ENCODING_LEN - 1;
  }
  return ENCODING.charAt(rand);
}
function encodeTime(now, len) {
  if (isNaN(now)) {
    throw new Error(now + " must be a number");
  }
  if (now > TIME_MAX) {
    throw createError("cannot encode time greater than " + TIME_MAX);
  }
  if (now < 0) {
    throw createError("time must be positive");
  }
  if (Number.isInteger(now) === false) {
    throw createError("time must be an integer");
  }
  var mod = void 0;
  var str = "";
  for (; len > 0; len--) {
    mod = now % ENCODING_LEN;
    str = ENCODING.charAt(mod) + str;
    now = (now - mod) / ENCODING_LEN;
  }
  return str;
}
function encodeRandom(len, prng2) {
  var str = "";
  for (; len > 0; len--) {
    str = randomChar(prng2) + str;
  }
  return str;
}
function detectPrng() {
  var allowInsecure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  var root = arguments[1];
  if (!root) {
    root = typeof window !== "undefined" ? window : null;
  }
  var browserCrypto = root && (root.crypto || root.msCrypto);
  if (browserCrypto) {
    return function() {
      var buffer = new Uint8Array(1);
      browserCrypto.getRandomValues(buffer);
      return buffer[0] / 255;
    };
  } else {
    try {
      var nodeCrypto = require_crypto();
      return function() {
        return nodeCrypto.randomBytes(1).readUInt8() / 255;
      };
    } catch (e) {
    }
  }
  if (allowInsecure) {
    try {
      console.error("secure crypto unusable, falling back to insecure Math.random()!");
    } catch (e) {
    }
    return function() {
      return Math.random();
    };
  }
  throw createError("secure crypto unusable, insecure Math.random not allowed");
}
function factory(currPrng) {
  if (!currPrng) {
    currPrng = detectPrng();
  }
  return function ulid3(seedTime) {
    if (isNaN(seedTime)) {
      seedTime = Date.now();
    }
    return encodeTime(seedTime, TIME_LEN) + encodeRandom(RANDOM_LEN, currPrng);
  };
}
function monotonicFactory(currPrng) {
  if (!currPrng) {
    currPrng = detectPrng();
  }
  var lastTime = 0;
  var lastRandom = void 0;
  return function ulid3(seedTime) {
    if (isNaN(seedTime)) {
      seedTime = Date.now();
    }
    if (seedTime <= lastTime) {
      var incrementedRandom = lastRandom = incrementBase32(lastRandom);
      return encodeTime(lastTime, TIME_LEN) + incrementedRandom;
    }
    lastTime = seedTime;
    var newRandom = lastRandom = encodeRandom(RANDOM_LEN, currPrng);
    return encodeTime(seedTime, TIME_LEN) + newRandom;
  };
}
var ulid = factory();

// ../amazon-cognito-identity-js/es/AuthenticationHelper.js
var import_buffer = __toModule(require_buffer());
var import_core = __toModule(require_core());
var import_lib_typedarrays = __toModule(require_lib_typedarrays());
var import_sha256 = __toModule(require_sha256());
var import_hmac_sha256 = __toModule(require_hmac_sha256());

// ../amazon-cognito-identity-js/es/utils/cryptoSecureRandomInt.js
var crypto2;
if (typeof window !== "undefined" && window.crypto) {
  crypto2 = window.crypto;
}
if (!crypto2 && typeof window !== "undefined" && window.msCrypto) {
  crypto2 = window.msCrypto;
}
if (!crypto2 && typeof window !== "undefined" && window.crypto) {
  crypto2 = window.crypto;
}
if (!crypto2 && typeof __require === "function") {
  try {
    crypto2 = require_crypto2();
  } catch (err) {
  }
}
function cryptoSecureRandomInt() {
  if (crypto2) {
    if (typeof crypto2.getRandomValues === "function") {
      try {
        return crypto2.getRandomValues(new Uint32Array(1))[0];
      } catch (err) {
      }
    }
    if (typeof crypto2.randomBytes === "function") {
      try {
        return crypto2.randomBytes(4).readInt32LE();
      } catch (err) {
      }
    }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
}

// ../amazon-cognito-identity-js/es/utils/WordArray.js
function hexStringify(wordArray) {
  var words = wordArray.words;
  var sigBytes = wordArray.sigBytes;
  var hexChars = [];
  for (var i2 = 0; i2 < sigBytes; i2++) {
    var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
    hexChars.push((bite >>> 4).toString(16));
    hexChars.push((bite & 15).toString(16));
  }
  return hexChars.join("");
}
var WordArray = /* @__PURE__ */ function() {
  function WordArray2(words, sigBytes) {
    words = this.words = words || [];
    if (sigBytes != void 0) {
      this.sigBytes = sigBytes;
    } else {
      this.sigBytes = words.length * 4;
    }
  }
  var _proto = WordArray2.prototype;
  _proto.random = function random(nBytes) {
    var words = [];
    for (var i2 = 0; i2 < nBytes; i2 += 4) {
      words.push(cryptoSecureRandomInt());
    }
    return new WordArray2(words, nBytes);
  };
  _proto.toString = function toString() {
    return hexStringify(this);
  };
  return WordArray2;
}();

// ../amazon-cognito-identity-js/es/BigInteger.js
function BigInteger(a2, b2) {
  if (a2 != null)
    this.fromString(a2, b2);
}
function nbi() {
  return new BigInteger(null);
}
var dbits;
var canary = 244837814094590;
var j_lm = (canary & 16777215) == 15715070;
function am1(i2, x2, w2, j2, c2, n2) {
  while (--n2 >= 0) {
    var v2 = x2 * this[i2++] + w2[j2] + c2;
    c2 = Math.floor(v2 / 67108864);
    w2[j2++] = v2 & 67108863;
  }
  return c2;
}
function am2(i2, x2, w2, j2, c2, n2) {
  var xl = x2 & 32767, xh = x2 >> 15;
  while (--n2 >= 0) {
    var l2 = this[i2] & 32767;
    var h2 = this[i2++] >> 15;
    var m2 = xh * l2 + h2 * xl;
    l2 = xl * l2 + ((m2 & 32767) << 15) + w2[j2] + (c2 & 1073741823);
    c2 = (l2 >>> 30) + (m2 >>> 15) + xh * h2 + (c2 >>> 30);
    w2[j2++] = l2 & 1073741823;
  }
  return c2;
}
function am3(i2, x2, w2, j2, c2, n2) {
  var xl = x2 & 16383, xh = x2 >> 14;
  while (--n2 >= 0) {
    var l2 = this[i2] & 16383;
    var h2 = this[i2++] >> 14;
    var m2 = xh * l2 + h2 * xl;
    l2 = xl * l2 + ((m2 & 16383) << 14) + w2[j2] + c2;
    c2 = (l2 >> 28) + (m2 >> 14) + xh * h2;
    w2[j2++] = l2 & 268435455;
  }
  return c2;
}
var inBrowser = typeof navigator !== "undefined";
if (inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer") {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if (inBrowser && j_lm && navigator.appName != "Netscape") {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else {
  BigInteger.prototype.am = am3;
  dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr;
var vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
  BI_RC[rr++] = vv;
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}
function int2char(n2) {
  return BI_RM.charAt(n2);
}
function intAt(s2, i2) {
  var c2 = BI_RC[s2.charCodeAt(i2)];
  return c2 == null ? -1 : c2;
}
function bnpCopyTo(r2) {
  for (var i2 = this.t - 1; i2 >= 0; --i2) {
    r2[i2] = this[i2];
  }
  r2.t = this.t;
  r2.s = this.s;
}
function bnpFromInt(x2) {
  this.t = 1;
  this.s = x2 < 0 ? -1 : 0;
  if (x2 > 0)
    this[0] = x2;
  else if (x2 < -1)
    this[0] = x2 + this.DV;
  else
    this.t = 0;
}
function nbv(i2) {
  var r2 = nbi();
  r2.fromInt(i2);
  return r2;
}
function bnpFromString(s2, b2) {
  var k2;
  if (b2 == 16)
    k2 = 4;
  else if (b2 == 8)
    k2 = 3;
  else if (b2 == 2)
    k2 = 1;
  else if (b2 == 32)
    k2 = 5;
  else if (b2 == 4)
    k2 = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  this.t = 0;
  this.s = 0;
  var i2 = s2.length, mi = false, sh = 0;
  while (--i2 >= 0) {
    var x2 = intAt(s2, i2);
    if (x2 < 0) {
      if (s2.charAt(i2) == "-")
        mi = true;
      continue;
    }
    mi = false;
    if (sh == 0)
      this[this.t++] = x2;
    else if (sh + k2 > this.DB) {
      this[this.t - 1] |= (x2 & (1 << this.DB - sh) - 1) << sh;
      this[this.t++] = x2 >> this.DB - sh;
    } else
      this[this.t - 1] |= x2 << sh;
    sh += k2;
    if (sh >= this.DB)
      sh -= this.DB;
  }
  this.clamp();
  if (mi)
    BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
  var c2 = this.s & this.DM;
  while (this.t > 0 && this[this.t - 1] == c2) {
    --this.t;
  }
}
function bnToString(b2) {
  if (this.s < 0)
    return "-" + this.negate().toString(b2);
  var k2;
  if (b2 == 16)
    k2 = 4;
  else if (b2 == 8)
    k2 = 3;
  else if (b2 == 2)
    k2 = 1;
  else if (b2 == 32)
    k2 = 5;
  else if (b2 == 4)
    k2 = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  var km = (1 << k2) - 1, d2, m2 = false, r2 = "", i2 = this.t;
  var p2 = this.DB - i2 * this.DB % k2;
  if (i2-- > 0) {
    if (p2 < this.DB && (d2 = this[i2] >> p2) > 0) {
      m2 = true;
      r2 = int2char(d2);
    }
    while (i2 >= 0) {
      if (p2 < k2) {
        d2 = (this[i2] & (1 << p2) - 1) << k2 - p2;
        d2 |= this[--i2] >> (p2 += this.DB - k2);
      } else {
        d2 = this[i2] >> (p2 -= k2) & km;
        if (p2 <= 0) {
          p2 += this.DB;
          --i2;
        }
      }
      if (d2 > 0)
        m2 = true;
      if (m2)
        r2 += int2char(d2);
    }
  }
  return m2 ? r2 : "0";
}
function bnNegate() {
  var r2 = nbi();
  BigInteger.ZERO.subTo(this, r2);
  return r2;
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(a2) {
  var r2 = this.s - a2.s;
  if (r2 != 0)
    return r2;
  var i2 = this.t;
  r2 = i2 - a2.t;
  if (r2 != 0)
    return this.s < 0 ? -r2 : r2;
  while (--i2 >= 0) {
    if ((r2 = this[i2] - a2[i2]) != 0)
      return r2;
  }
  return 0;
}
function nbits(x2) {
  var r2 = 1, t2;
  if ((t2 = x2 >>> 16) != 0) {
    x2 = t2;
    r2 += 16;
  }
  if ((t2 = x2 >> 8) != 0) {
    x2 = t2;
    r2 += 8;
  }
  if ((t2 = x2 >> 4) != 0) {
    x2 = t2;
    r2 += 4;
  }
  if ((t2 = x2 >> 2) != 0) {
    x2 = t2;
    r2 += 2;
  }
  if ((t2 = x2 >> 1) != 0) {
    x2 = t2;
    r2 += 1;
  }
  return r2;
}
function bnBitLength() {
  if (this.t <= 0)
    return 0;
  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}
function bnpDLShiftTo(n2, r2) {
  var i2;
  for (i2 = this.t - 1; i2 >= 0; --i2) {
    r2[i2 + n2] = this[i2];
  }
  for (i2 = n2 - 1; i2 >= 0; --i2) {
    r2[i2] = 0;
  }
  r2.t = this.t + n2;
  r2.s = this.s;
}
function bnpDRShiftTo(n2, r2) {
  for (var i2 = n2; i2 < this.t; ++i2) {
    r2[i2 - n2] = this[i2];
  }
  r2.t = Math.max(this.t - n2, 0);
  r2.s = this.s;
}
function bnpLShiftTo(n2, r2) {
  var bs = n2 % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n2 / this.DB), c2 = this.s << bs & this.DM, i2;
  for (i2 = this.t - 1; i2 >= 0; --i2) {
    r2[i2 + ds + 1] = this[i2] >> cbs | c2;
    c2 = (this[i2] & bm) << bs;
  }
  for (i2 = ds - 1; i2 >= 0; --i2) {
    r2[i2] = 0;
  }
  r2[ds] = c2;
  r2.t = this.t + ds + 1;
  r2.s = this.s;
  r2.clamp();
}
function bnpRShiftTo(n2, r2) {
  r2.s = this.s;
  var ds = Math.floor(n2 / this.DB);
  if (ds >= this.t) {
    r2.t = 0;
    return;
  }
  var bs = n2 % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << bs) - 1;
  r2[0] = this[ds] >> bs;
  for (var i2 = ds + 1; i2 < this.t; ++i2) {
    r2[i2 - ds - 1] |= (this[i2] & bm) << cbs;
    r2[i2 - ds] = this[i2] >> bs;
  }
  if (bs > 0)
    r2[this.t - ds - 1] |= (this.s & bm) << cbs;
  r2.t = this.t - ds;
  r2.clamp();
}
function bnpSubTo(a2, r2) {
  var i2 = 0, c2 = 0, m2 = Math.min(a2.t, this.t);
  while (i2 < m2) {
    c2 += this[i2] - a2[i2];
    r2[i2++] = c2 & this.DM;
    c2 >>= this.DB;
  }
  if (a2.t < this.t) {
    c2 -= a2.s;
    while (i2 < this.t) {
      c2 += this[i2];
      r2[i2++] = c2 & this.DM;
      c2 >>= this.DB;
    }
    c2 += this.s;
  } else {
    c2 += this.s;
    while (i2 < a2.t) {
      c2 -= a2[i2];
      r2[i2++] = c2 & this.DM;
      c2 >>= this.DB;
    }
    c2 -= a2.s;
  }
  r2.s = c2 < 0 ? -1 : 0;
  if (c2 < -1)
    r2[i2++] = this.DV + c2;
  else if (c2 > 0)
    r2[i2++] = c2;
  r2.t = i2;
  r2.clamp();
}
function bnpMultiplyTo(a2, r2) {
  var x2 = this.abs(), y2 = a2.abs();
  var i2 = x2.t;
  r2.t = i2 + y2.t;
  while (--i2 >= 0) {
    r2[i2] = 0;
  }
  for (i2 = 0; i2 < y2.t; ++i2) {
    r2[i2 + x2.t] = x2.am(0, y2[i2], r2, i2, 0, x2.t);
  }
  r2.s = 0;
  r2.clamp();
  if (this.s != a2.s)
    BigInteger.ZERO.subTo(r2, r2);
}
function bnpSquareTo(r2) {
  var x2 = this.abs();
  var i2 = r2.t = 2 * x2.t;
  while (--i2 >= 0) {
    r2[i2] = 0;
  }
  for (i2 = 0; i2 < x2.t - 1; ++i2) {
    var c2 = x2.am(i2, x2[i2], r2, 2 * i2, 0, 1);
    if ((r2[i2 + x2.t] += x2.am(i2 + 1, 2 * x2[i2], r2, 2 * i2 + 1, c2, x2.t - i2 - 1)) >= x2.DV) {
      r2[i2 + x2.t] -= x2.DV;
      r2[i2 + x2.t + 1] = 1;
    }
  }
  if (r2.t > 0)
    r2[r2.t - 1] += x2.am(i2, x2[i2], r2, 2 * i2, 0, 1);
  r2.s = 0;
  r2.clamp();
}
function bnpDivRemTo(m2, q2, r2) {
  var pm = m2.abs();
  if (pm.t <= 0)
    return;
  var pt = this.abs();
  if (pt.t < pm.t) {
    if (q2 != null)
      q2.fromInt(0);
    if (r2 != null)
      this.copyTo(r2);
    return;
  }
  if (r2 == null)
    r2 = nbi();
  var y2 = nbi(), ts = this.s, ms = m2.s;
  var nsh = this.DB - nbits(pm[pm.t - 1]);
  if (nsh > 0) {
    pm.lShiftTo(nsh, y2);
    pt.lShiftTo(nsh, r2);
  } else {
    pm.copyTo(y2);
    pt.copyTo(r2);
  }
  var ys = y2.t;
  var y0 = y2[ys - 1];
  if (y0 == 0)
    return;
  var yt = y0 * (1 << this.F1) + (ys > 1 ? y2[ys - 2] >> this.F2 : 0);
  var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
  var i2 = r2.t, j2 = i2 - ys, t2 = q2 == null ? nbi() : q2;
  y2.dlShiftTo(j2, t2);
  if (r2.compareTo(t2) >= 0) {
    r2[r2.t++] = 1;
    r2.subTo(t2, r2);
  }
  BigInteger.ONE.dlShiftTo(ys, t2);
  t2.subTo(y2, y2);
  while (y2.t < ys) {
    y2[y2.t++] = 0;
  }
  while (--j2 >= 0) {
    var qd = r2[--i2] == y0 ? this.DM : Math.floor(r2[i2] * d1 + (r2[i2 - 1] + e) * d2);
    if ((r2[i2] += y2.am(0, qd, r2, j2, 0, ys)) < qd) {
      y2.dlShiftTo(j2, t2);
      r2.subTo(t2, r2);
      while (r2[i2] < --qd) {
        r2.subTo(t2, r2);
      }
    }
  }
  if (q2 != null) {
    r2.drShiftTo(ys, q2);
    if (ts != ms)
      BigInteger.ZERO.subTo(q2, q2);
  }
  r2.t = ys;
  r2.clamp();
  if (nsh > 0)
    r2.rShiftTo(nsh, r2);
  if (ts < 0)
    BigInteger.ZERO.subTo(r2, r2);
}
function bnMod(a2) {
  var r2 = nbi();
  this.abs().divRemTo(a2, null, r2);
  if (this.s < 0 && r2.compareTo(BigInteger.ZERO) > 0)
    a2.subTo(r2, r2);
  return r2;
}
function bnpInvDigit() {
  if (this.t < 1)
    return 0;
  var x2 = this[0];
  if ((x2 & 1) == 0)
    return 0;
  var y2 = x2 & 3;
  y2 = y2 * (2 - (x2 & 15) * y2) & 15;
  y2 = y2 * (2 - (x2 & 255) * y2) & 255;
  y2 = y2 * (2 - ((x2 & 65535) * y2 & 65535)) & 65535;
  y2 = y2 * (2 - x2 * y2 % this.DV) % this.DV;
  return y2 > 0 ? this.DV - y2 : -y2;
}
function bnEquals(a2) {
  return this.compareTo(a2) == 0;
}
function bnpAddTo(a2, r2) {
  var i2 = 0, c2 = 0, m2 = Math.min(a2.t, this.t);
  while (i2 < m2) {
    c2 += this[i2] + a2[i2];
    r2[i2++] = c2 & this.DM;
    c2 >>= this.DB;
  }
  if (a2.t < this.t) {
    c2 += a2.s;
    while (i2 < this.t) {
      c2 += this[i2];
      r2[i2++] = c2 & this.DM;
      c2 >>= this.DB;
    }
    c2 += this.s;
  } else {
    c2 += this.s;
    while (i2 < a2.t) {
      c2 += a2[i2];
      r2[i2++] = c2 & this.DM;
      c2 >>= this.DB;
    }
    c2 += a2.s;
  }
  r2.s = c2 < 0 ? -1 : 0;
  if (c2 > 0)
    r2[i2++] = c2;
  else if (c2 < -1)
    r2[i2++] = this.DV + c2;
  r2.t = i2;
  r2.clamp();
}
function bnAdd(a2) {
  var r2 = nbi();
  this.addTo(a2, r2);
  return r2;
}
function bnSubtract(a2) {
  var r2 = nbi();
  this.subTo(a2, r2);
  return r2;
}
function bnMultiply(a2) {
  var r2 = nbi();
  this.multiplyTo(a2, r2);
  return r2;
}
function bnDivide(a2) {
  var r2 = nbi();
  this.divRemTo(a2, r2, null);
  return r2;
}
function Montgomery(m2) {
  this.m = m2;
  this.mp = m2.invDigit();
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << m2.DB - 15) - 1;
  this.mt2 = 2 * m2.t;
}
function montConvert(x2) {
  var r2 = nbi();
  x2.abs().dlShiftTo(this.m.t, r2);
  r2.divRemTo(this.m, null, r2);
  if (x2.s < 0 && r2.compareTo(BigInteger.ZERO) > 0)
    this.m.subTo(r2, r2);
  return r2;
}
function montRevert(x2) {
  var r2 = nbi();
  x2.copyTo(r2);
  this.reduce(r2);
  return r2;
}
function montReduce(x2) {
  while (x2.t <= this.mt2) {
    x2[x2.t++] = 0;
  }
  for (var i2 = 0; i2 < this.m.t; ++i2) {
    var j2 = x2[i2] & 32767;
    var u0 = j2 * this.mpl + ((j2 * this.mph + (x2[i2] >> 15) * this.mpl & this.um) << 15) & x2.DM;
    j2 = i2 + this.m.t;
    x2[j2] += this.m.am(0, u0, x2, i2, 0, this.m.t);
    while (x2[j2] >= x2.DV) {
      x2[j2] -= x2.DV;
      x2[++j2]++;
    }
  }
  x2.clamp();
  x2.drShiftTo(this.m.t, x2);
  if (x2.compareTo(this.m) >= 0)
    x2.subTo(this.m, x2);
}
function montSqrTo(x2, r2) {
  x2.squareTo(r2);
  this.reduce(r2);
}
function montMulTo(x2, y2, r2) {
  x2.multiplyTo(y2, r2);
  this.reduce(r2);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnModPow(e, m2, callback) {
  var i2 = e.bitLength(), k2, r2 = nbv(1), z2 = new Montgomery(m2);
  if (i2 <= 0)
    return r2;
  else if (i2 < 18)
    k2 = 1;
  else if (i2 < 48)
    k2 = 3;
  else if (i2 < 144)
    k2 = 4;
  else if (i2 < 768)
    k2 = 5;
  else
    k2 = 6;
  var g2 = new Array(), n2 = 3, k1 = k2 - 1, km = (1 << k2) - 1;
  g2[1] = z2.convert(this);
  if (k2 > 1) {
    var g22 = nbi();
    z2.sqrTo(g2[1], g22);
    while (n2 <= km) {
      g2[n2] = nbi();
      z2.mulTo(g22, g2[n2 - 2], g2[n2]);
      n2 += 2;
    }
  }
  var j2 = e.t - 1, w2, is1 = true, r22 = nbi(), t2;
  i2 = nbits(e[j2]) - 1;
  while (j2 >= 0) {
    if (i2 >= k1)
      w2 = e[j2] >> i2 - k1 & km;
    else {
      w2 = (e[j2] & (1 << i2 + 1) - 1) << k1 - i2;
      if (j2 > 0)
        w2 |= e[j2 - 1] >> this.DB + i2 - k1;
    }
    n2 = k2;
    while ((w2 & 1) == 0) {
      w2 >>= 1;
      --n2;
    }
    if ((i2 -= n2) < 0) {
      i2 += this.DB;
      --j2;
    }
    if (is1) {
      g2[w2].copyTo(r2);
      is1 = false;
    } else {
      while (n2 > 1) {
        z2.sqrTo(r2, r22);
        z2.sqrTo(r22, r2);
        n2 -= 2;
      }
      if (n2 > 0)
        z2.sqrTo(r2, r22);
      else {
        t2 = r2;
        r2 = r22;
        r22 = t2;
      }
      z2.mulTo(r22, g2[w2], r2);
    }
    while (j2 >= 0 && (e[j2] & 1 << i2) == 0) {
      z2.sqrTo(r2, r22);
      t2 = r2;
      r2 = r22;
      r22 = t2;
      if (--i2 < 0) {
        i2 = this.DB - 1;
        --j2;
      }
    }
  }
  var result = z2.revert(r2);
  callback(null, result);
  return result;
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.modPow = bnModPow;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

// ../amazon-cognito-identity-js/es/CognitoJwtToken.js
var import_buffer2 = __toModule(require_buffer());

// ../amazon-cognito-identity-js/es/CognitoUser.js
var import_buffer3 = __toModule(require_buffer());
var import_core2 = __toModule(require_core());
var import_lib_typedarrays2 = __toModule(require_lib_typedarrays());
var import_enc_base64 = __toModule(require_enc_base64());
var import_hmac_sha2562 = __toModule(require_hmac_sha256());
var isBrowser = typeof navigator !== "undefined";
var userAgent = isBrowser ? navigator.userAgent : "nodejs";

// ../amazon-cognito-identity-js/es/Client.js
var import_isomorphic_unfetch = __toModule(require_browser());

// ../amazon-cognito-identity-js/es/Platform/version.js
var version = "5.0.4";

// ../amazon-cognito-identity-js/es/Platform/index.js
var BASE_USER_AGENT = "aws-amplify/" + version;
var Platform = {
  userAgent: BASE_USER_AGENT + " js",
  product: "",
  navigator: null,
  isReactNative: false
};
if (typeof navigator !== "undefined" && navigator.product) {
  Platform.product = navigator.product || "";
  Platform.navigator = navigator || null;
  switch (navigator.product) {
    case "ReactNative":
      Platform.userAgent = BASE_USER_AGENT + " react-native";
      Platform.isReactNative = true;
      break;
    default:
      Platform.userAgent = BASE_USER_AGENT + " js";
      Platform.isReactNative = false;
      break;
  }
}
var getUserAgent = function getUserAgent2() {
  return Platform.userAgent;
};

// ../amazon-cognito-identity-js/es/UserAgent.js
function UserAgent() {
}
UserAgent.prototype.userAgent = getUserAgent();

// ../amazon-cognito-identity-js/es/Client.js
var MAX_DELAY_MS = 5 * 60 * 1e3;

// ../amazon-cognito-identity-js/es/CookieStorage.js
var Cookies = __toModule(require_js_cookie());

// src/util.ts
var exhaustiveCheck = (obj, throwOnError = true) => {
  if (throwOnError) {
    throw new Error(`Invalid ${obj}`);
  }
};
var isNullOrUndefined = (val) => {
  return typeof val === "undefined" || val === void 0 || val === null;
};
var validatePredicate = (model, groupType, predicatesOrGroups) => {
  let filterType;
  let isNegation = false;
  if (predicatesOrGroups.length === 0) {
    return true;
  }
  switch (groupType) {
    case "not":
      filterType = "every";
      isNegation = true;
      break;
    case "and":
      filterType = "every";
      break;
    case "or":
      filterType = "some";
      break;
    default:
      exhaustiveCheck(groupType);
  }
  const result = predicatesOrGroups[filterType]((predicateOrGroup) => {
    if (isPredicateObj(predicateOrGroup)) {
      const { field, operator, operand } = predicateOrGroup;
      const value = model[field];
      return validatePredicateField(value, operator, operand);
    }
    if (isPredicateGroup(predicateOrGroup)) {
      const { type, predicates } = predicateOrGroup;
      return validatePredicate(model, type, predicates);
    }
    throw new Error("Not a predicate or group");
  });
  return isNegation ? !result : result;
};
var validatePredicateField = (value, operator, operand) => {
  switch (operator) {
    case "ne":
      return value !== operand;
    case "eq":
      return value === operand;
    case "le":
      return value <= operand;
    case "lt":
      return value < operand;
    case "ge":
      return value >= operand;
    case "gt":
      return value > operand;
    case "between":
      const [min, max] = operand;
      return value >= min && value <= max;
    case "beginsWith":
      return !isNullOrUndefined(value) && value.startsWith(operand);
    case "contains":
      return !isNullOrUndefined(value) && value.indexOf(operand) > -1;
    case "notContains":
      return isNullOrUndefined(value) || value.indexOf(operand) === -1;
    default:
      exhaustiveCheck(operator, false);
      return false;
  }
};
var isModelConstructor = (obj) => {
  return obj && typeof obj.copyOf === "function";
};
var nonModelClasses = new WeakSet();
function registerNonModelClass(clazz) {
  nonModelClasses.add(clazz);
}
var isNonModelConstructor = (obj) => {
  return nonModelClasses.has(obj);
};
var processCompositeKeys = (attributes) => {
  const extractCompositeSortKey = ({
    properties: {
      fields: [, ...sortKeyFields]
    }
  }) => sortKeyFields;
  const compositeKeyFields = attributes.filter(isModelAttributeCompositeKey).map(extractCompositeSortKey);
  const combineIntersecting = (fields) => fields.reduce((combined2, sortKeyFields) => {
    const sortKeyFieldsSet = new Set(sortKeyFields);
    if (combined2.length === 0) {
      combined2.push(sortKeyFieldsSet);
      return combined2;
    }
    const intersectingSetIdx = combined2.findIndex((existingSet) => {
      return [...existingSet].some((f2) => sortKeyFieldsSet.has(f2));
    });
    if (intersectingSetIdx > -1) {
      const union = new Set([
        ...combined2[intersectingSetIdx],
        ...sortKeyFieldsSet
      ]);
      combined2[intersectingSetIdx] = union;
    } else {
      combined2.push(sortKeyFieldsSet);
    }
    return combined2;
  }, []);
  const initial = combineIntersecting(compositeKeyFields);
  const combined = combineIntersecting(initial);
  return combined;
};
var establishRelationAndKeys = (namespace) => {
  const relationship = {};
  const keys = {};
  Object.keys(namespace.models).forEach((mKey) => {
    relationship[mKey] = { indexes: [], relationTypes: [] };
    keys[mKey] = {};
    const model = namespace.models[mKey];
    Object.keys(model.fields).forEach((attr) => {
      const fieldAttribute = model.fields[attr];
      if (typeof fieldAttribute.type === "object" && "model" in fieldAttribute.type) {
        const connectionType = fieldAttribute.association.connectionType;
        relationship[mKey].relationTypes.push({
          fieldName: fieldAttribute.name,
          modelName: fieldAttribute.type.model,
          relationType: connectionType,
          targetName: fieldAttribute.association["targetName"],
          associatedWith: fieldAttribute.association["associatedWith"]
        });
        if (connectionType === "BELONGS_TO") {
          relationship[mKey].indexes.push(fieldAttribute.association["targetName"]);
        }
      }
    });
    if (model.attributes) {
      keys[mKey].compositeKeys = processCompositeKeys(model.attributes);
      for (const attribute of model.attributes) {
        if (!isModelAttributeKey(attribute)) {
          continue;
        }
        if (isModelAttributePrimaryKey(attribute)) {
          keys[mKey].primaryKey = attribute.properties.fields;
        }
        const { fields } = attribute.properties;
        for (const field of fields) {
          const exists = relationship[mKey].indexes.includes(field);
          if (!exists) {
            relationship[mKey].indexes.push(field);
          }
        }
      }
    }
  });
  return [relationship, keys];
};
var topologicallySortedModels = new WeakMap();
var traverseModel = (srcModelName, instance2, namespace, modelInstanceCreator2, getModelConstructorByModelName2) => {
  const relationships = namespace.relationships;
  const modelConstructor = getModelConstructorByModelName2(namespace.name, srcModelName);
  const relation = relationships[srcModelName];
  const result = [];
  const newInstance = modelConstructor.copyOf(instance2, (draftInstance) => {
    relation.relationTypes.forEach((rItem) => {
      const modelConstructor2 = getModelConstructorByModelName2(namespace.name, rItem.modelName);
      switch (rItem.relationType) {
        case "HAS_ONE":
          if (instance2[rItem.fieldName]) {
            let modelInstance;
            try {
              modelInstance = modelInstanceCreator2(modelConstructor2, instance2[rItem.fieldName]);
            } catch (error) {
            }
            result.push({
              modelName: rItem.modelName,
              item: instance2[rItem.fieldName],
              instance: modelInstance
            });
            draftInstance[rItem.fieldName] = draftInstance[rItem.fieldName].id;
          }
          break;
        case "BELONGS_TO":
          if (instance2[rItem.fieldName]) {
            let modelInstance;
            try {
              modelInstance = modelInstanceCreator2(modelConstructor2, instance2[rItem.fieldName]);
            } catch (error) {
            }
            const isDeleted = draftInstance[rItem.fieldName]._deleted;
            if (!isDeleted) {
              result.push({
                modelName: rItem.modelName,
                item: instance2[rItem.fieldName],
                instance: modelInstance
              });
            }
          }
          if (draftInstance[rItem.fieldName]) {
            draftInstance[rItem.targetName] = draftInstance[rItem.fieldName].id;
            delete draftInstance[rItem.fieldName];
          }
          break;
        case "HAS_MANY":
          break;
        default:
          exhaustiveCheck(rItem.relationType);
          break;
      }
    });
  });
  result.unshift({
    modelName: srcModelName,
    item: newInstance,
    instance: newInstance
  });
  if (!topologicallySortedModels.has(namespace)) {
    topologicallySortedModels.set(namespace, Array.from(namespace.modelTopologicalOrdering.keys()));
  }
  const sortedModels = topologicallySortedModels.get(namespace);
  result.sort((a2, b2) => {
    return sortedModels.indexOf(a2.modelName) - sortedModels.indexOf(b2.modelName);
  });
  return result;
};
var getIndex = (rel, src) => {
  let index = "";
  rel.some((relItem) => {
    if (relItem.modelName === src) {
      index = relItem.targetName;
    }
  });
  return index;
};
var getIndexFromAssociation = (indexes, src) => {
  const index = indexes.find((idx) => idx === src);
  return index;
};
var NAMESPACES;
(function(NAMESPACES3) {
  NAMESPACES3["DATASTORE"] = "datastore";
  NAMESPACES3["USER"] = "user";
  NAMESPACES3["SYNC"] = "sync";
  NAMESPACES3["STORAGE"] = "storage";
})(NAMESPACES || (NAMESPACES = {}));
var DATASTORE = NAMESPACES.DATASTORE;
var USER = NAMESPACES.USER;
var SYNC = NAMESPACES.SYNC;
var STORAGE = NAMESPACES.STORAGE;
var privateModeCheckResult;
var isPrivateMode = () => {
  return new Promise((resolve) => {
    const dbname = v4_default();
    let db;
    const isPrivate = () => {
      privateModeCheckResult = false;
      resolve(true);
    };
    const isNotPrivate = async () => {
      if (db && db.result && typeof db.result.close === "function") {
        await db.result.close();
      }
      await indexedDB.deleteDatabase(dbname);
      privateModeCheckResult = true;
      return resolve(false);
    };
    if (privateModeCheckResult === true) {
      return isNotPrivate();
    }
    if (privateModeCheckResult === false) {
      return isPrivate();
    }
    if (indexedDB === null)
      return isPrivate();
    db = indexedDB.open(dbname);
    db.onerror = isPrivate;
    db.onsuccess = isNotPrivate;
  });
};
var randomBytes = function(nBytes) {
  return import_buffer4.Buffer.from(new WordArray().random(nBytes).toString(), "hex");
};
var prng = () => randomBytes(1).readUInt8(0) / 255;
function monotonicUlidFactory(seed) {
  const ulid3 = monotonicFactory(prng);
  return () => {
    return ulid3(seed);
  };
}
function getNow() {
  if (typeof performance !== "undefined" && performance && typeof performance.now === "function") {
    return performance.now() | 0;
  } else {
    return Date.now();
  }
}
function sortCompareFunction(sortPredicates) {
  return function compareFunction(a2, b2) {
    for (const predicate of sortPredicates) {
      const { field, sortDirection } = predicate;
      const sortMultiplier = sortDirection === SortDirection.ASCENDING ? 1 : -1;
      if (a2[field] < b2[field]) {
        return -1 * sortMultiplier;
      }
      if (a2[field] > b2[field]) {
        return 1 * sortMultiplier;
      }
    }
    return 0;
  };
}
function valuesEqual(valA, valB, nullish = false) {
  let a2 = valA;
  let b2 = valB;
  const nullishCompare = (_a, _b) => {
    return (_a === void 0 || _a === null) && (_b === void 0 || _b === null);
  };
  if (a2 instanceof Object && !(b2 instanceof Object) || !(a2 instanceof Object) && b2 instanceof Object) {
    return false;
  }
  if (!(a2 instanceof Object)) {
    if (nullish && nullishCompare(a2, b2)) {
      return true;
    }
    return a2 === b2;
  }
  if (Array.isArray(a2) && !Array.isArray(b2) || Array.isArray(b2) && !Array.isArray(a2)) {
    return false;
  }
  if (a2 instanceof Set && b2 instanceof Set) {
    a2 = [...a2];
    b2 = [...b2];
  }
  if (a2 instanceof Map && b2 instanceof Map) {
    a2 = Object.fromEntries(a2);
    b2 = Object.fromEntries(b2);
  }
  const aKeys = Object.keys(a2);
  const bKeys = Object.keys(b2);
  if (aKeys.length !== bKeys.length && (!nullish || Array.isArray(a2))) {
    return false;
  }
  const keys = aKeys.length >= bKeys.length ? aKeys : bKeys;
  for (const key of keys) {
    const aVal = a2[key];
    const bVal = b2[key];
    if (!valuesEqual(aVal, bVal, nullish)) {
      return false;
    }
  }
  return true;
}
var isAWSDate = (val) => {
  return !!/^\d{4}-\d{2}-\d{2}(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
var isAWSTime = (val) => {
  return !!/^\d{2}:\d{2}(:\d{2}(.\d+)?)?(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
var isAWSDateTime = (val) => {
  return !!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(.\d+)?)?(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
var isAWSTimestamp = (val) => {
  return !!/^\d+$/.exec(String(val));
};
var isAWSEmail = (val) => {
  return !!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.exec(val);
};
var isAWSJSON = (val) => {
  try {
    JSON.parse(val);
    return true;
  } catch {
    return false;
  }
};
var isAWSURL = (val) => {
  try {
    return !!new URL(val);
  } catch {
    return false;
  }
};
var isAWSPhone = (val) => {
  return !!/^\+?\d[\d\s-]+$/.exec(val);
};
var isAWSIPAddress = (val) => {
  return !!/((^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$)|(^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$))$/.exec(val);
};

// src/types.ts
function isSchemaModel(obj) {
  return obj && obj.pluralName !== void 0;
}
function isAssociatedWith(obj) {
  return obj && obj.associatedWith;
}
function isTargetNameAssociation(obj) {
  return obj && obj.targetName;
}
function isModelAttributeAuth(attr) {
  return attr.type === "auth" && attr.properties && attr.properties.rules && attr.properties.rules.length > 0;
}
function isModelAttributeKey(attr) {
  return attr.type === "key" && attr.properties && attr.properties.fields && attr.properties.fields.length > 0;
}
function isModelAttributePrimaryKey(attr) {
  return isModelAttributeKey(attr) && attr.properties.name === void 0;
}
function isModelAttributeCompositeKey(attr) {
  return isModelAttributeKey(attr) && attr.properties.name !== void 0 && attr.properties.fields.length > 2;
}
var ModelAttributeAuthAllow;
(function(ModelAttributeAuthAllow2) {
  ModelAttributeAuthAllow2["CUSTOM"] = "custom";
  ModelAttributeAuthAllow2["OWNER"] = "owner";
  ModelAttributeAuthAllow2["GROUPS"] = "groups";
  ModelAttributeAuthAllow2["PRIVATE"] = "private";
  ModelAttributeAuthAllow2["PUBLIC"] = "public";
})(ModelAttributeAuthAllow || (ModelAttributeAuthAllow = {}));
var ModelAttributeAuthProvider;
(function(ModelAttributeAuthProvider2) {
  ModelAttributeAuthProvider2["FUNCTION"] = "function";
  ModelAttributeAuthProvider2["USER_POOLS"] = "userPools";
  ModelAttributeAuthProvider2["OIDC"] = "oidc";
  ModelAttributeAuthProvider2["IAM"] = "iam";
  ModelAttributeAuthProvider2["API_KEY"] = "apiKey";
})(ModelAttributeAuthProvider || (ModelAttributeAuthProvider = {}));
var GraphQLScalarType;
(function(GraphQLScalarType2) {
  GraphQLScalarType2[GraphQLScalarType2["ID"] = 0] = "ID";
  GraphQLScalarType2[GraphQLScalarType2["String"] = 1] = "String";
  GraphQLScalarType2[GraphQLScalarType2["Int"] = 2] = "Int";
  GraphQLScalarType2[GraphQLScalarType2["Float"] = 3] = "Float";
  GraphQLScalarType2[GraphQLScalarType2["Boolean"] = 4] = "Boolean";
  GraphQLScalarType2[GraphQLScalarType2["AWSDate"] = 5] = "AWSDate";
  GraphQLScalarType2[GraphQLScalarType2["AWSTime"] = 6] = "AWSTime";
  GraphQLScalarType2[GraphQLScalarType2["AWSDateTime"] = 7] = "AWSDateTime";
  GraphQLScalarType2[GraphQLScalarType2["AWSTimestamp"] = 8] = "AWSTimestamp";
  GraphQLScalarType2[GraphQLScalarType2["AWSEmail"] = 9] = "AWSEmail";
  GraphQLScalarType2[GraphQLScalarType2["AWSJSON"] = 10] = "AWSJSON";
  GraphQLScalarType2[GraphQLScalarType2["AWSURL"] = 11] = "AWSURL";
  GraphQLScalarType2[GraphQLScalarType2["AWSPhone"] = 12] = "AWSPhone";
  GraphQLScalarType2[GraphQLScalarType2["AWSIPAddress"] = 13] = "AWSIPAddress";
})(GraphQLScalarType || (GraphQLScalarType = {}));
(function(GraphQLScalarType2) {
  function getJSType(scalar) {
    switch (scalar) {
      case "Boolean":
        return "boolean";
      case "ID":
      case "String":
      case "AWSDate":
      case "AWSTime":
      case "AWSDateTime":
      case "AWSEmail":
      case "AWSURL":
      case "AWSPhone":
      case "AWSIPAddress":
        return "string";
      case "Int":
      case "Float":
      case "AWSTimestamp":
        return "number";
      case "AWSJSON":
        return "object";
      default:
        exhaustiveCheck(scalar);
    }
  }
  GraphQLScalarType2.getJSType = getJSType;
  function getValidationFunction(scalar) {
    switch (scalar) {
      case "AWSDate":
        return isAWSDate;
      case "AWSTime":
        return isAWSTime;
      case "AWSDateTime":
        return isAWSDateTime;
      case "AWSTimestamp":
        return isAWSTimestamp;
      case "AWSEmail":
        return isAWSEmail;
      case "AWSJSON":
        return isAWSJSON;
      case "AWSURL":
        return isAWSURL;
      case "AWSPhone":
        return isAWSPhone;
      case "AWSIPAddress":
        return isAWSIPAddress;
      default:
        return void 0;
    }
  }
  GraphQLScalarType2.getValidationFunction = getValidationFunction;
})(GraphQLScalarType || (GraphQLScalarType = {}));
function isGraphQLScalarType(obj) {
  return obj && GraphQLScalarType[obj] !== void 0;
}
function isModelFieldType(obj) {
  const modelField = "model";
  if (obj && obj[modelField])
    return true;
  return false;
}
function isNonModelFieldType(obj) {
  const typeField = "nonModel";
  if (obj && obj[typeField])
    return true;
  return false;
}
function isEnumFieldType(obj) {
  const modelField = "enum";
  if (obj && obj[modelField])
    return true;
  return false;
}
var OpType;
(function(OpType2) {
  OpType2["INSERT"] = "INSERT";
  OpType2["UPDATE"] = "UPDATE";
  OpType2["DELETE"] = "DELETE";
})(OpType || (OpType = {}));
function isPredicateObj(obj) {
  return obj && obj.field !== void 0;
}
function isPredicateGroup(obj) {
  return obj && obj.type !== void 0;
}
var QueryOne;
(function(QueryOne2) {
  QueryOne2[QueryOne2["FIRST"] = 0] = "FIRST";
  QueryOne2[QueryOne2["LAST"] = 1] = "LAST";
})(QueryOne || (QueryOne = {}));
var SortDirection;
(function(SortDirection2) {
  SortDirection2["ASCENDING"] = "ASCENDING";
  SortDirection2["DESCENDING"] = "DESCENDING";
})(SortDirection || (SortDirection = {}));
var AuthModeStrategyType;
(function(AuthModeStrategyType2) {
  AuthModeStrategyType2["DEFAULT"] = "DEFAULT";
  AuthModeStrategyType2["MULTI_AUTH"] = "MULTI_AUTH";
})(AuthModeStrategyType || (AuthModeStrategyType = {}));
var ModelOperation;
(function(ModelOperation2) {
  ModelOperation2["CREATE"] = "CREATE";
  ModelOperation2["READ"] = "READ";
  ModelOperation2["UPDATE"] = "UPDATE";
  ModelOperation2["DELETE"] = "DELETE";
})(ModelOperation || (ModelOperation = {}));
async function syncExpression(modelConstructor, conditionProducer) {
  return {
    modelConstructor,
    conditionProducer
  };
}
var DISCARD = Symbol("DISCARD");

// src/authModeStrategies/multiAuthStrategy.ts
function getProviderFromRule(rule) {
  if (rule.allow === "private" && !rule.provider) {
    return ModelAttributeAuthProvider.USER_POOLS;
  }
  if (rule.allow === "public" && !rule.provider) {
    return ModelAttributeAuthProvider.API_KEY;
  }
  return rule.provider;
}
function sortAuthRulesWithPriority(rules) {
  const allowSortPriority = [
    ModelAttributeAuthAllow.CUSTOM,
    ModelAttributeAuthAllow.OWNER,
    ModelAttributeAuthAllow.GROUPS,
    ModelAttributeAuthAllow.PRIVATE,
    ModelAttributeAuthAllow.PUBLIC
  ];
  const providerSortPriority = [
    ModelAttributeAuthProvider.FUNCTION,
    ModelAttributeAuthProvider.USER_POOLS,
    ModelAttributeAuthProvider.OIDC,
    ModelAttributeAuthProvider.IAM,
    ModelAttributeAuthProvider.API_KEY
  ];
  return [...rules].sort((a2, b2) => {
    if (a2.allow === b2.allow) {
      return providerSortPriority.indexOf(getProviderFromRule(a2)) - providerSortPriority.indexOf(getProviderFromRule(b2));
    }
    return allowSortPriority.indexOf(a2.allow) - allowSortPriority.indexOf(b2.allow);
  });
}
function getAuthRules({
  rules,
  currentUser
}) {
  const authModes = new Set();
  rules.forEach((rule) => {
    switch (rule.allow) {
      case ModelAttributeAuthAllow.CUSTOM:
        if (!rule.provider || rule.provider === ModelAttributeAuthProvider.FUNCTION) {
          authModes.add(GRAPHQL_AUTH_MODE.AWS_LAMBDA);
        }
        break;
      case ModelAttributeAuthAllow.GROUPS:
      case ModelAttributeAuthAllow.OWNER: {
        if (currentUser) {
          if (rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
            authModes.add(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
          } else if (rule.provider === ModelAttributeAuthProvider.OIDC) {
            authModes.add(GRAPHQL_AUTH_MODE.OPENID_CONNECT);
          }
        }
        break;
      }
      case ModelAttributeAuthAllow.PRIVATE: {
        if (currentUser) {
          if (!rule.provider || rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
            authModes.add(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
          } else if (rule.provider === ModelAttributeAuthProvider.IAM) {
            authModes.add(GRAPHQL_AUTH_MODE.AWS_IAM);
          }
        }
        break;
      }
      case ModelAttributeAuthAllow.PUBLIC: {
        if (rule.provider === ModelAttributeAuthProvider.IAM) {
          authModes.add(GRAPHQL_AUTH_MODE.AWS_IAM);
        } else if (!rule.provider || rule.provider === ModelAttributeAuthProvider.API_KEY) {
          authModes.add(GRAPHQL_AUTH_MODE.API_KEY);
        }
        break;
      }
      default:
        break;
    }
  });
  return Array.from(authModes);
}
var multiAuthStrategy = async ({
  schema: schema2,
  modelName
}) => {
  let currentUser;
  try {
    currentUser = await Auth.currentAuthenticatedUser();
  } catch (e) {
  }
  const { attributes } = schema2.namespaces.user.models[modelName];
  if (attributes) {
    const authAttribute = attributes.find((attr) => attr.type === "auth");
    if (authAttribute.properties && authAttribute.properties.rules) {
      const sortedRules = sortAuthRulesWithPriority(authAttribute.properties.rules);
      return getAuthRules({ currentUser, rules: sortedRules });
    }
  }
  return [];
};

// src/predicates/sort.ts
var _ModelSortPredicateCreator = class {
  static createPredicateBuilder(modelDefinition) {
    const { name: modelName } = modelDefinition;
    const fieldNames = new Set(Object.keys(modelDefinition.fields));
    let handler;
    const predicate = new Proxy({}, handler = {
      get(_target, propertyKey, receiver) {
        const field = propertyKey;
        if (!fieldNames.has(field)) {
          throw new Error(`Invalid field for model. field: ${field}, model: ${modelName}`);
        }
        const result = (sortDirection) => {
          _ModelSortPredicateCreator.sortPredicateGroupsMap.get(receiver).push({ field, sortDirection });
          return receiver;
        };
        return result;
      }
    });
    _ModelSortPredicateCreator.sortPredicateGroupsMap.set(predicate, []);
    return predicate;
  }
  static isValidPredicate(predicate) {
    return _ModelSortPredicateCreator.sortPredicateGroupsMap.has(predicate);
  }
  static getPredicates(predicate, throwOnInvalid = true) {
    if (throwOnInvalid && !_ModelSortPredicateCreator.isValidPredicate(predicate)) {
      throw new Error("The predicate is not valid");
    }
    return _ModelSortPredicateCreator.sortPredicateGroupsMap.get(predicate);
  }
  static createFromExisting(modelDefinition, existing) {
    if (!existing || !modelDefinition) {
      return void 0;
    }
    return existing(_ModelSortPredicateCreator.createPredicateBuilder(modelDefinition));
  }
};
var ModelSortPredicateCreator = _ModelSortPredicateCreator;
ModelSortPredicateCreator.sortPredicateGroupsMap = new WeakMap();

// src/predicates/index.ts
var predicatesAllSet = new WeakSet();
function isPredicatesAll(predicate) {
  return predicatesAllSet.has(predicate);
}
var PredicateAll = Symbol("A predicate that matches all records");
var Predicates = class {
  static get ALL() {
    const predicate = (c2) => c2;
    predicatesAllSet.add(predicate);
    return predicate;
  }
};
var _ModelPredicateCreator = class {
  static createPredicateBuilder(modelDefinition) {
    const { name: modelName } = modelDefinition;
    const fieldNames = new Set(Object.keys(modelDefinition.fields));
    let handler;
    const predicate = new Proxy({}, handler = {
      get(_target, propertyKey, receiver) {
        const groupType = propertyKey;
        switch (groupType) {
          case "and":
          case "or":
          case "not":
            const result2 = (newPredicate) => {
              const group2 = {
                type: groupType,
                predicates: []
              };
              const tmpPredicateRecorder = new Proxy({}, handler);
              _ModelPredicateCreator.predicateGroupsMap.set(tmpPredicateRecorder, group2);
              newPredicate(tmpPredicateRecorder);
              _ModelPredicateCreator.predicateGroupsMap.get(receiver).predicates.push(group2);
              return receiver;
            };
            return result2;
          default:
            exhaustiveCheck(groupType, false);
        }
        const field = propertyKey;
        if (!fieldNames.has(field)) {
          throw new Error(`Invalid field for model. field: ${field}, model: ${modelName}`);
        }
        const result = (operator, operand) => {
          _ModelPredicateCreator.predicateGroupsMap.get(receiver).predicates.push({ field, operator, operand });
          return receiver;
        };
        return result;
      }
    });
    const group = {
      type: "and",
      predicates: []
    };
    _ModelPredicateCreator.predicateGroupsMap.set(predicate, group);
    return predicate;
  }
  static isValidPredicate(predicate) {
    return _ModelPredicateCreator.predicateGroupsMap.has(predicate);
  }
  static getPredicates(predicate, throwOnInvalid = true) {
    if (throwOnInvalid && !_ModelPredicateCreator.isValidPredicate(predicate)) {
      throw new Error("The predicate is not valid");
    }
    return _ModelPredicateCreator.predicateGroupsMap.get(predicate);
  }
  static createFromExisting(modelDefinition, existing) {
    if (!existing || !modelDefinition) {
      return void 0;
    }
    return existing(_ModelPredicateCreator.createPredicateBuilder(modelDefinition));
  }
  static createForId(modelDefinition, id) {
    return _ModelPredicateCreator.createPredicateBuilder(modelDefinition).id("eq", id);
  }
};
var ModelPredicateCreator = _ModelPredicateCreator;
ModelPredicateCreator.predicateGroupsMap = new WeakMap();

// src/storage/storage.ts
var import_zen_push = __toModule(require_zen_push());
import { Logger as Logger3, Mutex } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/storage/adapter/getDefaultAdapter/index.ts
import { browserOrNode, isWebWorker } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/storage/adapter/IndexedDBAdapter.ts
import { ConsoleLogger as Logger } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/idb/build/esm/wrap-idb-value.js
var instanceOfAny = (object, constructors) => constructors.some((c2) => object instanceof c2);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);

// ../../node_modules/idb/build/esm/index.js
function openDB(name, version2, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version2);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
    });
  }
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking)
      db.addEventListener("versionchange", () => blocking());
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  return wrap(request).then(() => void 0);
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    const returnVal = await target2[targetFuncName](...args);
    if (isWrite)
      await tx.done;
    return returnVal;
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));

// src/storage/adapter/IndexedDBAdapter.ts
var logger = new Logger("DataStore");
var DB_NAME = "amplify-datastore";
var IndexedDBAdapter = class {
  constructor() {
    this.dbName = DB_NAME;
  }
  async checkPrivate() {
    const isPrivate = await isPrivateMode().then((isPrivate2) => {
      return isPrivate2;
    });
    if (isPrivate) {
      logger.error("IndexedDB not supported in this browser's private mode");
      return Promise.reject("IndexedDB not supported in this browser's private mode");
    } else {
      return Promise.resolve();
    }
  }
  getStorenameForModel(modelConstructor) {
    const namespace = this.namespaceResolver(modelConstructor);
    const { name: modelName } = modelConstructor;
    return this.getStorename(namespace, modelName);
  }
  getStorename(namespace, modelName) {
    const storeName = `${namespace}_${modelName}`;
    return storeName;
  }
  async setUp(theSchema, namespaceResolver2, modelInstanceCreator2, getModelConstructorByModelName2, sessionId) {
    await this.checkPrivate();
    if (!this.initPromise) {
      this.initPromise = new Promise((res, rej) => {
        this.resolve = res;
        this.reject = rej;
      });
    } else {
      await this.initPromise;
    }
    if (sessionId) {
      this.dbName = `${DB_NAME}-${sessionId}`;
    }
    this.schema = theSchema;
    this.namespaceResolver = namespaceResolver2;
    this.modelInstanceCreator = modelInstanceCreator2;
    this.getModelConstructorByModelName = getModelConstructorByModelName2;
    try {
      if (!this.db) {
        const VERSION = 2;
        this.db = await openDB(this.dbName, VERSION, {
          upgrade: async (db, oldVersion, newVersion, txn) => {
            if (oldVersion === 0) {
              Object.keys(theSchema.namespaces).forEach((namespaceName) => {
                const namespace = theSchema.namespaces[namespaceName];
                Object.keys(namespace.models).forEach((modelName) => {
                  const storeName = this.getStorename(namespaceName, modelName);
                  const store2 = db.createObjectStore(storeName, {
                    autoIncrement: true
                  });
                  const indexes = this.schema.namespaces[namespaceName].relationships[modelName].indexes;
                  indexes.forEach((index) => store2.createIndex(index, index));
                  store2.createIndex("byId", "id", { unique: true });
                });
              });
              return;
            }
            if (oldVersion === 1 && newVersion === 2) {
              try {
                for (const storeName of txn.objectStoreNames) {
                  const origStore = txn.objectStore(storeName);
                  const tmpName = `tmp_${storeName}`;
                  origStore.name = tmpName;
                  const newStore = db.createObjectStore(storeName, {
                    keyPath: void 0,
                    autoIncrement: true
                  });
                  newStore.createIndex("byId", "id", { unique: true });
                  let cursor = await origStore.openCursor();
                  let count = 0;
                  while (cursor && cursor.value) {
                    await newStore.put(cursor.value);
                    cursor = await cursor.continue();
                    count++;
                  }
                  db.deleteObjectStore(tmpName);
                  logger.debug(`${count} ${storeName} records migrated`);
                }
              } catch (error) {
                logger.error("Error migrating IndexedDB data", error);
                txn.abort();
                throw error;
              }
              return;
            }
          }
        });
        this.resolve();
      }
    } catch (error) {
      this.reject(error);
    }
  }
  async _get(storeOrStoreName, id) {
    let index;
    if (typeof storeOrStoreName === "string") {
      const storeName = storeOrStoreName;
      index = this.db.transaction(storeName, "readonly").store.index("byId");
    } else {
      const store2 = storeOrStoreName;
      index = store2.index("byId");
    }
    const result = await index.get(id);
    return result;
  }
  async save(model, condition) {
    await this.checkPrivate();
    const modelConstructor = Object.getPrototypeOf(model).constructor;
    const storeName = this.getStorenameForModel(modelConstructor);
    const connectedModels = traverseModel(modelConstructor.name, model, this.schema.namespaces[this.namespaceResolver(modelConstructor)], this.modelInstanceCreator, this.getModelConstructorByModelName);
    const namespaceName = this.namespaceResolver(modelConstructor);
    const set2 = new Set();
    const connectionStoreNames = Object.values(connectedModels).map(({ modelName, item, instance: instance2 }) => {
      const storeName2 = this.getStorename(namespaceName, modelName);
      set2.add(storeName2);
      return { storeName: storeName2, item, instance: instance2 };
    });
    const tx = this.db.transaction([storeName, ...Array.from(set2.values())], "readwrite");
    const store2 = tx.objectStore(storeName);
    const fromDB = await this._get(store2, model.id);
    if (condition && fromDB) {
      const predicates = ModelPredicateCreator.getPredicates(condition);
      const { predicates: predicateObjs, type } = predicates;
      const isValid = validatePredicate(fromDB, type, predicateObjs);
      if (!isValid) {
        const msg = "Conditional update failed";
        logger.error(msg, { model: fromDB, condition: predicateObjs });
        throw new Error(msg);
      }
    }
    const result = [];
    for await (const resItem of connectionStoreNames) {
      const { storeName: storeName2, item, instance: instance2 } = resItem;
      const store3 = tx.objectStore(storeName2);
      const { id } = item;
      const fromDB2 = await this._get(store3, id);
      const opType = fromDB2 === void 0 ? OpType.INSERT : OpType.UPDATE;
      if (id === model.id || opType === OpType.INSERT) {
        const key = await store3.index("byId").getKey(item.id);
        await store3.put(item, key);
        result.push([instance2, opType]);
      }
    }
    await tx.done;
    return result;
  }
  async load(namespaceName, srcModelName, records) {
    const namespace = this.schema.namespaces[namespaceName];
    const relations = namespace.relationships[srcModelName].relationTypes;
    const connectionStoreNames = relations.map(({ modelName }) => {
      return this.getStorename(namespaceName, modelName);
    });
    const modelConstructor = this.getModelConstructorByModelName(namespaceName, srcModelName);
    if (connectionStoreNames.length === 0) {
      return records.map((record) => this.modelInstanceCreator(modelConstructor, record));
    }
    const tx = this.db.transaction([...connectionStoreNames], "readonly");
    for await (const relation of relations) {
      const { fieldName, modelName, targetName } = relation;
      const storeName = this.getStorename(namespaceName, modelName);
      const store2 = tx.objectStore(storeName);
      const modelConstructor2 = this.getModelConstructorByModelName(namespaceName, modelName);
      switch (relation.relationType) {
        case "HAS_ONE":
          for await (const recordItem of records) {
            if (recordItem[fieldName]) {
              const connectionRecord = await this._get(store2, recordItem[fieldName]);
              recordItem[fieldName] = connectionRecord && this.modelInstanceCreator(modelConstructor2, connectionRecord);
            }
          }
          break;
        case "BELONGS_TO":
          for await (const recordItem of records) {
            if (recordItem[targetName]) {
              const connectionRecord = await this._get(store2, recordItem[targetName]);
              recordItem[fieldName] = connectionRecord && this.modelInstanceCreator(modelConstructor2, connectionRecord);
              delete recordItem[targetName];
            }
          }
          break;
        case "HAS_MANY":
          break;
        default:
          exhaustiveCheck(relation.relationType);
          break;
      }
    }
    return records.map((record) => this.modelInstanceCreator(modelConstructor, record));
  }
  async query(modelConstructor, predicate, pagination) {
    await this.checkPrivate();
    const storeName = this.getStorenameForModel(modelConstructor);
    const namespaceName = this.namespaceResolver(modelConstructor);
    const predicates = predicate && ModelPredicateCreator.getPredicates(predicate);
    const queryById = predicates && this.idFromPredicate(predicates);
    const hasSort = pagination && pagination.sort;
    const hasPagination = pagination && pagination.limit;
    const records = await (async () => {
      if (queryById) {
        const record = await this.getById(storeName, queryById);
        return record ? [record] : [];
      }
      if (predicates) {
        const filtered = await this.filterOnPredicate(storeName, predicates);
        return this.inMemoryPagination(filtered, pagination);
      }
      if (hasSort) {
        const all = await this.getAll(storeName);
        return this.inMemoryPagination(all, pagination);
      }
      if (hasPagination) {
        return this.enginePagination(storeName, pagination);
      }
      return this.getAll(storeName);
    })();
    return await this.load(namespaceName, modelConstructor.name, records);
  }
  async getById(storeName, id) {
    const record = await this._get(storeName, id);
    return record;
  }
  async getAll(storeName) {
    return await this.db.getAll(storeName);
  }
  idFromPredicate(predicates) {
    const { predicates: predicateObjs } = predicates;
    const idPredicate = predicateObjs.length === 1 && predicateObjs.find((p2) => isPredicateObj(p2) && p2.field === "id" && p2.operator === "eq");
    return idPredicate && idPredicate.operand;
  }
  async filterOnPredicate(storeName, predicates) {
    const { predicates: predicateObjs, type } = predicates;
    const all = await this.getAll(storeName);
    const filtered = predicateObjs ? all.filter((m2) => validatePredicate(m2, type, predicateObjs)) : all;
    return filtered;
  }
  inMemoryPagination(records, pagination) {
    if (pagination && records.length > 1) {
      if (pagination.sort) {
        const sortPredicates = ModelSortPredicateCreator.getPredicates(pagination.sort);
        if (sortPredicates.length) {
          const compareFn = sortCompareFunction(sortPredicates);
          records.sort(compareFn);
        }
      }
      const { page = 0, limit = 0 } = pagination;
      const start = Math.max(0, page * limit) || 0;
      const end = limit > 0 ? start + limit : records.length;
      return records.slice(start, end);
    }
    return records;
  }
  async enginePagination(storeName, pagination) {
    let result;
    if (pagination) {
      const { page = 0, limit = 0 } = pagination;
      const initialRecord = Math.max(0, page * limit) || 0;
      let cursor = await this.db.transaction(storeName).objectStore(storeName).openCursor();
      if (cursor && initialRecord > 0) {
        await cursor.advance(initialRecord);
      }
      const pageResults = [];
      const hasLimit = typeof limit === "number" && limit > 0;
      while (cursor && cursor.value) {
        pageResults.push(cursor.value);
        if (hasLimit && pageResults.length === limit) {
          break;
        }
        cursor = await cursor.continue();
      }
      result = pageResults;
    } else {
      result = await this.db.getAll(storeName);
    }
    return result;
  }
  async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
    await this.checkPrivate();
    const storeName = this.getStorenameForModel(modelConstructor);
    const cursor = await this.db.transaction([storeName], "readonly").objectStore(storeName).openCursor(void 0, firstOrLast === QueryOne.FIRST ? "next" : "prev");
    const result = cursor ? cursor.value : void 0;
    return result && this.modelInstanceCreator(modelConstructor, result);
  }
  async delete(modelOrModelConstructor, condition) {
    await this.checkPrivate();
    const deleteQueue = [];
    if (isModelConstructor(modelOrModelConstructor)) {
      const modelConstructor = modelOrModelConstructor;
      const nameSpace = this.namespaceResolver(modelConstructor);
      const storeName = this.getStorenameForModel(modelConstructor);
      const models = await this.query(modelConstructor, condition);
      const relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
      if (condition !== void 0) {
        await this.deleteTraverse(relations, models, modelConstructor.name, nameSpace, deleteQueue);
        await this.deleteItem(deleteQueue);
        const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
        return [models, deletedModels];
      } else {
        await this.deleteTraverse(relations, models, modelConstructor.name, nameSpace, deleteQueue);
        await this.db.transaction([storeName], "readwrite").objectStore(storeName).clear();
        const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
        return [models, deletedModels];
      }
    } else {
      const model = modelOrModelConstructor;
      const modelConstructor = Object.getPrototypeOf(model).constructor;
      const nameSpace = this.namespaceResolver(modelConstructor);
      const storeName = this.getStorenameForModel(modelConstructor);
      if (condition) {
        const tx = this.db.transaction([storeName], "readwrite");
        const store2 = tx.objectStore(storeName);
        const fromDB = await this._get(store2, model.id);
        if (fromDB === void 0) {
          const msg = "Model instance not found in storage";
          logger.warn(msg, { model });
          return [[model], []];
        }
        const predicates = ModelPredicateCreator.getPredicates(condition);
        const { predicates: predicateObjs, type } = predicates;
        const isValid = validatePredicate(fromDB, type, predicateObjs);
        if (!isValid) {
          const msg = "Conditional update failed";
          logger.error(msg, { model: fromDB, condition: predicateObjs });
          throw new Error(msg);
        }
        await tx.done;
        const relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
        await this.deleteTraverse(relations, [model], modelConstructor.name, nameSpace, deleteQueue);
      } else {
        const relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
        await this.deleteTraverse(relations, [model], modelConstructor.name, nameSpace, deleteQueue);
      }
      await this.deleteItem(deleteQueue);
      const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
      return [[model], deletedModels];
    }
  }
  async deleteItem(deleteQueue) {
    const connectionStoreNames = deleteQueue.map(({ storeName }) => {
      return storeName;
    });
    const tx = this.db.transaction([...connectionStoreNames], "readwrite");
    for await (const deleteItem of deleteQueue) {
      const { storeName, items } = deleteItem;
      const store2 = tx.objectStore(storeName);
      for await (const item of items) {
        if (item) {
          let key;
          if (typeof item === "object") {
            key = await store2.index("byId").getKey(item["id"]);
          } else {
            key = await store2.index("byId").getKey(item.toString());
          }
          if (key !== void 0) {
            await store2.delete(key);
          }
        }
      }
    }
  }
  async deleteTraverse(relations, models, srcModel, nameSpace, deleteQueue) {
    for await (const rel of relations) {
      const { relationType, fieldName, modelName, targetName } = rel;
      const storeName = this.getStorename(nameSpace, modelName);
      const index = getIndex(this.schema.namespaces[nameSpace].relationships[modelName].relationTypes, srcModel) || getIndexFromAssociation(this.schema.namespaces[nameSpace].relationships[modelName].indexes, rel.associatedWith);
      switch (relationType) {
        case "HAS_ONE":
          for await (const model of models) {
            const hasOneIndex = index || "byId";
            const hasOneCustomField = targetName in model;
            const value = hasOneCustomField ? model[targetName] : model.id;
            const recordToDelete = await this.db.transaction(storeName, "readwrite").objectStore(storeName).index(hasOneIndex).get(value);
            await this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName].relationTypes, recordToDelete ? [recordToDelete] : [], modelName, nameSpace, deleteQueue);
          }
          break;
        case "HAS_MANY":
          for await (const model of models) {
            const childrenArray = await this.db.transaction(storeName, "readwrite").objectStore(storeName).index(index).getAll(model["id"]);
            await this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName].relationTypes, childrenArray, modelName, nameSpace, deleteQueue);
          }
          break;
        case "BELONGS_TO":
          break;
        default:
          exhaustiveCheck(relationType);
          break;
      }
    }
    deleteQueue.push({
      storeName: this.getStorename(nameSpace, srcModel),
      items: models.map((record) => this.modelInstanceCreator(this.getModelConstructorByModelName(nameSpace, srcModel), record))
    });
  }
  async clear() {
    await this.checkPrivate();
    this.db.close();
    await deleteDB(this.dbName);
    this.db = void 0;
    this.initPromise = void 0;
  }
  async batchSave(modelConstructor, items) {
    if (items.length === 0) {
      return [];
    }
    await this.checkPrivate();
    const result = [];
    const storeName = this.getStorenameForModel(modelConstructor);
    const txn = this.db.transaction(storeName, "readwrite");
    const store2 = txn.store;
    for (const item of items) {
      const connectedModels = traverseModel(modelConstructor.name, this.modelInstanceCreator(modelConstructor, item), this.schema.namespaces[this.namespaceResolver(modelConstructor)], this.modelInstanceCreator, this.getModelConstructorByModelName);
      const { id, _deleted } = item;
      const index = store2.index("byId");
      const key = await index.getKey(id);
      if (!_deleted) {
        const { instance: instance2 } = connectedModels.find(({ instance: instance3 }) => instance3.id === id);
        result.push([
          instance2,
          key ? OpType.UPDATE : OpType.INSERT
        ]);
        await store2.put(instance2, key);
      } else {
        result.push([item, OpType.DELETE]);
        if (key) {
          await store2.delete(key);
        }
      }
    }
    await txn.done;
    return result;
  }
};
var IndexedDBAdapter_default = new IndexedDBAdapter();

// src/storage/adapter/AsyncStorageAdapter.ts
import { ConsoleLogger as Logger2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/storage/adapter/InMemoryStore.ts
var InMemoryStore = class {
  constructor() {
    this.db = new Map();
    this.getAllKeys = async () => {
      return Array.from(this.db.keys());
    };
    this.multiGet = async (keys) => {
      return keys.reduce((res, k2) => (res.push([k2, this.db.get(k2)]), res), []);
    };
    this.multiRemove = async (keys, callback) => {
      keys.forEach((k2) => this.db.delete(k2));
      callback();
    };
    this.multiSet = async (entries, callback) => {
      entries.forEach(([key, value]) => {
        this.setItem(key, value);
      });
      callback();
    };
    this.setItem = async (key, value) => {
      return this.db.set(key, value);
    };
    this.removeItem = async (key) => {
      return this.db.delete(key);
    };
    this.getItem = async (key) => {
      return this.db.get(key);
    };
  }
};
function createInMemoryStore() {
  return new InMemoryStore();
}

// src/storage/adapter/AsyncStorageDatabase.ts
var DB_NAME2 = "@AmplifyDatastore";
var COLLECTION = "Collection";
var DATA = "Data";
var monotonicFactoriesMap = new Map();
var AsyncStorageDatabase = class {
  constructor() {
    this._collectionInMemoryIndex = new Map();
    this.storage = createInMemoryStore();
  }
  getCollectionIndex(storeName) {
    if (!this._collectionInMemoryIndex.has(storeName)) {
      this._collectionInMemoryIndex.set(storeName, new Map());
    }
    return this._collectionInMemoryIndex.get(storeName);
  }
  getMonotonicFactory(storeName) {
    if (!monotonicFactoriesMap.has(storeName)) {
      monotonicFactoriesMap.set(storeName, monotonicUlidFactory());
    }
    return monotonicFactoriesMap.get(storeName);
  }
  async init() {
    this._collectionInMemoryIndex.clear();
    const allKeys = await this.storage.getAllKeys();
    const keysForCollectionEntries = [];
    for (const key of allKeys) {
      const [dbName, storeName, recordType, ulidOrId, id] = key.split("::");
      if (dbName === DB_NAME2) {
        if (recordType === DATA) {
          let ulid3;
          if (id === void 0) {
            const id2 = ulidOrId;
            const newUlid = this.getMonotonicFactory(storeName)();
            const oldKey = this.getLegacyKeyForItem(storeName, id2);
            const newKey = this.getKeyForItem(storeName, id2, newUlid);
            const item = await this.storage.getItem(oldKey);
            await this.storage.setItem(newKey, item);
            await this.storage.removeItem(oldKey);
            ulid3 = newUlid;
          } else {
            ulid3 = ulidOrId;
          }
          this.getCollectionIndex(storeName).set(id, ulid3);
        } else if (recordType === COLLECTION) {
          keysForCollectionEntries.push(key);
        }
      }
    }
    if (keysForCollectionEntries.length > 0) {
      await this.storage.multiRemove(keysForCollectionEntries);
    }
  }
  async save(item, storeName) {
    const ulid3 = this.getCollectionIndex(storeName).get(item.id) || this.getMonotonicFactory(storeName)();
    const itemKey = this.getKeyForItem(storeName, item.id, ulid3);
    this.getCollectionIndex(storeName).set(item.id, ulid3);
    await this.storage.setItem(itemKey, JSON.stringify(item));
  }
  async batchSave(storeName, items) {
    if (items.length === 0) {
      return [];
    }
    const result = [];
    const collection = this.getCollectionIndex(storeName);
    const keysToDelete = new Set();
    const keysToSave = new Set();
    const allItemsKeys = [];
    const itemsMap = {};
    for (const item of items) {
      const { id, _deleted } = item;
      const ulid3 = collection.get(id) || this.getMonotonicFactory(storeName)();
      const key = this.getKeyForItem(storeName, id, ulid3);
      allItemsKeys.push(key);
      itemsMap[key] = { ulid: ulid3, model: item };
      if (_deleted) {
        keysToDelete.add(key);
      } else {
        keysToSave.add(key);
      }
    }
    const existingRecordsMap = await this.storage.multiGet(allItemsKeys);
    const existingRecordsKeys = existingRecordsMap.filter(([, v2]) => !!v2).reduce((set2, [k2]) => set2.add(k2), new Set());
    await new Promise((resolve, reject) => {
      if (keysToDelete.size === 0) {
        resolve();
        return;
      }
      const keysToDeleteArray = Array.from(keysToDelete);
      keysToDeleteArray.forEach((key) => collection.delete(itemsMap[key].model.id));
      this.storage.multiRemove(keysToDeleteArray, (errors) => {
        if (errors && errors.length > 0) {
          reject(errors);
        } else {
          resolve();
        }
      });
    });
    await new Promise((resolve, reject) => {
      if (keysToSave.size === 0) {
        resolve();
        return;
      }
      const entriesToSet = Array.from(keysToSave).map((key) => [
        key,
        JSON.stringify(itemsMap[key].model)
      ]);
      keysToSave.forEach((key) => {
        const {
          model: { id },
          ulid: ulid3
        } = itemsMap[key];
        collection.set(id, ulid3);
      });
      this.storage.multiSet(entriesToSet, (errors) => {
        if (errors && errors.length > 0) {
          reject(errors);
        } else {
          resolve();
        }
      });
    });
    for (const key of allItemsKeys) {
      if (keysToDelete.has(key) && existingRecordsKeys.has(key)) {
        result.push([itemsMap[key].model, OpType.DELETE]);
      } else if (keysToSave.has(key)) {
        result.push([
          itemsMap[key].model,
          existingRecordsKeys.has(key) ? OpType.UPDATE : OpType.INSERT
        ]);
      }
    }
    return result;
  }
  async get(id, storeName) {
    const ulid3 = this.getCollectionIndex(storeName).get(id);
    const itemKey = this.getKeyForItem(storeName, id, ulid3);
    const recordAsString = await this.storage.getItem(itemKey);
    const record = recordAsString && JSON.parse(recordAsString);
    return record;
  }
  async getOne(firstOrLast, storeName) {
    const collection = this.getCollectionIndex(storeName);
    const [itemId, ulid3] = firstOrLast === QueryOne.FIRST ? (() => {
      let id, ulid4;
      for ([id, ulid4] of collection)
        break;
      return [id, ulid4];
    })() : (() => {
      let id, ulid4;
      for ([id, ulid4] of collection)
        ;
      return [id, ulid4];
    })();
    const itemKey = this.getKeyForItem(storeName, itemId, ulid3);
    const itemString = itemKey && await this.storage.getItem(itemKey);
    const result = itemString ? JSON.parse(itemString) || void 0 : void 0;
    return result;
  }
  async getAll(storeName, pagination) {
    const collection = this.getCollectionIndex(storeName);
    const { page = 0, limit = 0 } = pagination || {};
    const start = Math.max(0, page * limit) || 0;
    const end = limit > 0 ? start + limit : void 0;
    const keysForStore = [];
    let count = 0;
    for (const [id, ulid3] of collection) {
      count++;
      if (count <= start) {
        continue;
      }
      keysForStore.push(this.getKeyForItem(storeName, id, ulid3));
      if (count === end) {
        break;
      }
    }
    const storeRecordStrings = await this.storage.multiGet(keysForStore);
    const records = storeRecordStrings.filter(([, value]) => value).map(([, value]) => JSON.parse(value));
    return records;
  }
  async delete(id, storeName) {
    const ulid3 = this.getCollectionIndex(storeName).get(id);
    const itemKey = this.getKeyForItem(storeName, id, ulid3);
    this.getCollectionIndex(storeName).delete(id);
    await this.storage.removeItem(itemKey);
  }
  async clear() {
    const allKeys = await this.storage.getAllKeys();
    const allDataStoreKeys = allKeys.filter((key) => key.startsWith(DB_NAME2));
    await this.storage.multiRemove(allDataStoreKeys);
    this._collectionInMemoryIndex.clear();
  }
  getKeyForItem(storeName, id, ulid3) {
    return `${this.getKeyPrefixForStoreItems(storeName)}::${ulid3}::${id}`;
  }
  getLegacyKeyForItem(storeName, id) {
    return `${this.getKeyPrefixForStoreItems(storeName)}::${id}`;
  }
  getKeyPrefixForStoreItems(storeName) {
    return `${DB_NAME2}::${storeName}::${DATA}`;
  }
};
var AsyncStorageDatabase_default = AsyncStorageDatabase;

// src/storage/adapter/AsyncStorageAdapter.ts
var logger2 = new Logger2("DataStore");
var AsyncStorageAdapter = class {
  getStorenameForModel(modelConstructor) {
    const namespace = this.namespaceResolver(modelConstructor);
    const { name: modelName } = modelConstructor;
    return this.getStorename(namespace, modelName);
  }
  getStorename(namespace, modelName) {
    const storeName = `${namespace}_${modelName}`;
    return storeName;
  }
  async setUp(theSchema, namespaceResolver2, modelInstanceCreator2, getModelConstructorByModelName2) {
    if (!this.initPromise) {
      this.initPromise = new Promise((res, rej) => {
        this.resolve = res;
        this.reject = rej;
      });
    } else {
      await this.initPromise;
      return;
    }
    this.schema = theSchema;
    this.namespaceResolver = namespaceResolver2;
    this.modelInstanceCreator = modelInstanceCreator2;
    this.getModelConstructorByModelName = getModelConstructorByModelName2;
    try {
      if (!this.db) {
        this.db = new AsyncStorageDatabase_default();
        await this.db.init();
        this.resolve();
      }
    } catch (error) {
      this.reject(error);
    }
  }
  async save(model, condition) {
    const modelConstructor = Object.getPrototypeOf(model).constructor;
    const storeName = this.getStorenameForModel(modelConstructor);
    const connectedModels = traverseModel(modelConstructor.name, model, this.schema.namespaces[this.namespaceResolver(modelConstructor)], this.modelInstanceCreator, this.getModelConstructorByModelName);
    const namespaceName = this.namespaceResolver(modelConstructor);
    const set2 = new Set();
    const connectionStoreNames = Object.values(connectedModels).map(({ modelName, item, instance: instance2 }) => {
      const storeName2 = this.getStorename(namespaceName, modelName);
      set2.add(storeName2);
      return { storeName: storeName2, item, instance: instance2 };
    });
    const fromDB = await this.db.get(model.id, storeName);
    if (condition && fromDB) {
      const predicates = ModelPredicateCreator.getPredicates(condition);
      const { predicates: predicateObjs, type } = predicates;
      const isValid = validatePredicate(fromDB, type, predicateObjs);
      if (!isValid) {
        const msg = "Conditional update failed";
        logger2.error(msg, { model: fromDB, condition: predicateObjs });
        throw new Error(msg);
      }
    }
    const result = [];
    for await (const resItem of connectionStoreNames) {
      const { storeName: storeName2, item, instance: instance2 } = resItem;
      const { id } = item;
      const fromDB2 = await this.db.get(id, storeName2);
      const opType = fromDB2 ? OpType.UPDATE : OpType.INSERT;
      if (id === model.id || opType === OpType.INSERT) {
        await this.db.save(item, storeName2);
        result.push([instance2, opType]);
      }
    }
    return result;
  }
  async load(namespaceName, srcModelName, records) {
    const namespace = this.schema.namespaces[namespaceName];
    const relations = namespace.relationships[srcModelName].relationTypes;
    const connectionStoreNames = relations.map(({ modelName }) => {
      return this.getStorename(namespaceName, modelName);
    });
    const modelConstructor = this.getModelConstructorByModelName(namespaceName, srcModelName);
    if (connectionStoreNames.length === 0) {
      return records.map((record) => this.modelInstanceCreator(modelConstructor, record));
    }
    for await (const relation of relations) {
      const { fieldName, modelName, targetName, relationType } = relation;
      const storeName = this.getStorename(namespaceName, modelName);
      const modelConstructor2 = this.getModelConstructorByModelName(namespaceName, modelName);
      switch (relationType) {
        case "HAS_ONE":
          for await (const recordItem of records) {
            if (recordItem[fieldName]) {
              const connectionRecord = await this.db.get(recordItem[fieldName], storeName);
              recordItem[fieldName] = connectionRecord && this.modelInstanceCreator(modelConstructor2, connectionRecord);
            }
          }
          break;
        case "BELONGS_TO":
          for await (const recordItem of records) {
            if (recordItem[targetName]) {
              const connectionRecord = await this.db.get(recordItem[targetName], storeName);
              recordItem[fieldName] = connectionRecord && this.modelInstanceCreator(modelConstructor2, connectionRecord);
              delete recordItem[targetName];
            }
          }
          break;
        case "HAS_MANY":
          break;
        default:
          exhaustiveCheck(relationType);
          break;
      }
    }
    return records.map((record) => this.modelInstanceCreator(modelConstructor, record));
  }
  async query(modelConstructor, predicate, pagination) {
    const storeName = this.getStorenameForModel(modelConstructor);
    const namespaceName = this.namespaceResolver(modelConstructor);
    const predicates = predicate && ModelPredicateCreator.getPredicates(predicate);
    const queryById = predicates && this.idFromPredicate(predicates);
    const hasSort = pagination && pagination.sort;
    const hasPagination = pagination && pagination.limit;
    const records = await (async () => {
      if (queryById) {
        const record = await this.getById(storeName, queryById);
        return record ? [record] : [];
      }
      if (predicates) {
        const filtered = await this.filterOnPredicate(storeName, predicates);
        return this.inMemoryPagination(filtered, pagination);
      }
      if (hasSort || hasPagination) {
        const all = await this.getAll(storeName);
        return this.inMemoryPagination(all, pagination);
      }
      return this.getAll(storeName);
    })();
    return await this.load(namespaceName, modelConstructor.name, records);
  }
  async getById(storeName, id) {
    const record = await this.db.get(id, storeName);
    return record;
  }
  async getAll(storeName) {
    return await this.db.getAll(storeName);
  }
  idFromPredicate(predicates) {
    const { predicates: predicateObjs } = predicates;
    const idPredicate = predicateObjs.length === 1 && predicateObjs.find((p2) => isPredicateObj(p2) && p2.field === "id" && p2.operator === "eq");
    return idPredicate && idPredicate.operand;
  }
  async filterOnPredicate(storeName, predicates) {
    const { predicates: predicateObjs, type } = predicates;
    const all = await this.getAll(storeName);
    const filtered = predicateObjs ? all.filter((m2) => validatePredicate(m2, type, predicateObjs)) : all;
    return filtered;
  }
  inMemoryPagination(records, pagination) {
    if (pagination && records.length > 1) {
      if (pagination.sort) {
        const sortPredicates = ModelSortPredicateCreator.getPredicates(pagination.sort);
        if (sortPredicates.length) {
          const compareFn = sortCompareFunction(sortPredicates);
          records.sort(compareFn);
        }
      }
      const { page = 0, limit = 0 } = pagination;
      const start = Math.max(0, page * limit) || 0;
      const end = limit > 0 ? start + limit : records.length;
      return records.slice(start, end);
    }
    return records;
  }
  async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
    const storeName = this.getStorenameForModel(modelConstructor);
    const result = await this.db.getOne(firstOrLast, storeName);
    return result && this.modelInstanceCreator(modelConstructor, result);
  }
  async delete(modelOrModelConstructor, condition) {
    const deleteQueue = [];
    if (isModelConstructor(modelOrModelConstructor)) {
      const modelConstructor = modelOrModelConstructor;
      const nameSpace = this.namespaceResolver(modelConstructor);
      const models = await this.query(modelConstructor, condition);
      const relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
      if (condition !== void 0) {
        await this.deleteTraverse(relations, models, modelConstructor.name, nameSpace, deleteQueue);
        await this.deleteItem(deleteQueue);
        const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
        return [models, deletedModels];
      } else {
        await this.deleteTraverse(relations, models, modelConstructor.name, nameSpace, deleteQueue);
        await this.deleteItem(deleteQueue);
        const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
        return [models, deletedModels];
      }
    } else {
      const model = modelOrModelConstructor;
      const modelConstructor = Object.getPrototypeOf(model).constructor;
      const nameSpace = this.namespaceResolver(modelConstructor);
      const storeName = this.getStorenameForModel(modelConstructor);
      if (condition) {
        const fromDB = await this.db.get(model.id, storeName);
        if (fromDB === void 0) {
          const msg = "Model instance not found in storage";
          logger2.warn(msg, { model });
          return [[model], []];
        }
        const predicates = ModelPredicateCreator.getPredicates(condition);
        const { predicates: predicateObjs, type } = predicates;
        const isValid = validatePredicate(fromDB, type, predicateObjs);
        if (!isValid) {
          const msg = "Conditional update failed";
          logger2.error(msg, { model: fromDB, condition: predicateObjs });
          throw new Error(msg);
        }
        const relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
        await this.deleteTraverse(relations, [model], modelConstructor.name, nameSpace, deleteQueue);
      } else {
        const relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
        await this.deleteTraverse(relations, [model], modelConstructor.name, nameSpace, deleteQueue);
      }
      await this.deleteItem(deleteQueue);
      const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
      return [[model], deletedModels];
    }
  }
  async deleteItem(deleteQueue) {
    for await (const deleteItem of deleteQueue) {
      const { storeName, items } = deleteItem;
      for await (const item of items) {
        if (item) {
          if (typeof item === "object") {
            const id = item["id"];
            await this.db.delete(id, storeName);
          }
        }
      }
    }
  }
  async deleteTraverse(relations, models, srcModel, nameSpace, deleteQueue) {
    for await (const rel of relations) {
      const { relationType, modelName, targetName } = rel;
      const storeName = this.getStorename(nameSpace, modelName);
      const index = getIndex(this.schema.namespaces[nameSpace].relationships[modelName].relationTypes, srcModel) || getIndexFromAssociation(this.schema.namespaces[nameSpace].relationships[modelName].indexes, rel.associatedWith);
      switch (relationType) {
        case "HAS_ONE":
          for await (const model of models) {
            const hasOneIndex = index || "byId";
            const hasOneCustomField = targetName in model;
            const value = hasOneCustomField ? model[targetName] : model.id;
            const allRecords = await this.db.getAll(storeName);
            const recordToDelete = allRecords.filter((childItem) => childItem[hasOneIndex] === value);
            await this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName].relationTypes, recordToDelete, modelName, nameSpace, deleteQueue);
          }
          break;
        case "HAS_MANY":
          for await (const model of models) {
            const allRecords = await this.db.getAll(storeName);
            const childrenArray = allRecords.filter((childItem) => childItem[index] === model.id);
            await this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName].relationTypes, childrenArray, modelName, nameSpace, deleteQueue);
          }
          break;
        case "BELONGS_TO":
          break;
        default:
          exhaustiveCheck(relationType);
          break;
      }
    }
    deleteQueue.push({
      storeName: this.getStorename(nameSpace, srcModel),
      items: models.map((record) => this.modelInstanceCreator(this.getModelConstructorByModelName(nameSpace, srcModel), record))
    });
  }
  async clear() {
    await this.db.clear();
    this.db = void 0;
    this.initPromise = void 0;
  }
  async batchSave(modelConstructor, items) {
    const { name: modelName } = modelConstructor;
    const namespaceName = this.namespaceResolver(modelConstructor);
    const storeName = this.getStorename(namespaceName, modelName);
    const batch = [];
    for (const item of items) {
      const { id } = item;
      const connectedModels = traverseModel(modelConstructor.name, this.modelInstanceCreator(modelConstructor, item), this.schema.namespaces[this.namespaceResolver(modelConstructor)], this.modelInstanceCreator, this.getModelConstructorByModelName);
      const { instance: instance2 } = connectedModels.find(({ instance: instance3 }) => instance3.id === id);
      batch.push(instance2);
    }
    return await this.db.batchSave(storeName, batch);
  }
};
var AsyncStorageAdapter_default = new AsyncStorageAdapter();

// src/storage/adapter/getDefaultAdapter/index.ts
var getDefaultAdapter = () => {
  const { isBrowser: isBrowser2 } = browserOrNode();
  if (isBrowser2 && window.indexedDB || isWebWorker() && self.indexedDB) {
    return IndexedDBAdapter_default;
  }
  return AsyncStorageAdapter_default;
};
var getDefaultAdapter_default = getDefaultAdapter;

// src/storage/storage.ts
var logger3 = new Logger3("DataStore");
var StorageClass = class {
  constructor(schema2, namespaceResolver2, getModelConstructorByModelName2, modelInstanceCreator2, adapter, sessionId) {
    this.schema = schema2;
    this.namespaceResolver = namespaceResolver2;
    this.getModelConstructorByModelName = getModelConstructorByModelName2;
    this.modelInstanceCreator = modelInstanceCreator2;
    this.adapter = adapter;
    this.sessionId = sessionId;
    this.adapter = this.adapter || getDefaultAdapter_default();
    this.pushStream = new import_zen_push.default();
  }
  static getNamespace() {
    const namespace = {
      name: STORAGE,
      relationships: {},
      enums: {},
      models: {},
      nonModels: {}
    };
    return namespace;
  }
  async init() {
    if (this.initialized !== void 0) {
      await this.initialized;
      return;
    }
    logger3.debug("Starting Storage");
    let resolve;
    let reject;
    this.initialized = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.adapter.setUp(this.schema, this.namespaceResolver, this.modelInstanceCreator, this.getModelConstructorByModelName, this.sessionId).then(resolve, reject);
    await this.initialized;
  }
  async save(model, condition, mutator, patchesTuple) {
    await this.init();
    const result = await this.adapter.save(model, condition);
    result.forEach((r2) => {
      const [originalElement, opType] = r2;
      const syncResponse = !!mutator;
      let updateMutationInput;
      if (opType === OpType.UPDATE && !syncResponse) {
        updateMutationInput = this.getUpdateMutationInput(model, originalElement, patchesTuple);
        if (updateMutationInput === null) {
          return result;
        }
      }
      const element = updateMutationInput || originalElement;
      const modelConstructor = Object.getPrototypeOf(originalElement).constructor;
      this.pushStream.next({
        model: modelConstructor,
        opType,
        element,
        mutator,
        condition: ModelPredicateCreator.getPredicates(condition, false)
      });
    });
    return result;
  }
  async delete(modelOrModelConstructor, condition, mutator) {
    await this.init();
    let deleted;
    let models;
    [models, deleted] = await this.adapter.delete(modelOrModelConstructor, condition);
    const modelIds = new Set(models.map(({ id }) => id));
    if (!isModelConstructor(modelOrModelConstructor) && !Array.isArray(deleted)) {
      deleted = [deleted];
    }
    deleted.forEach((model) => {
      const modelConstructor = Object.getPrototypeOf(model).constructor;
      let theCondition;
      if (!isModelConstructor(modelOrModelConstructor)) {
        theCondition = modelIds.has(model.id) ? ModelPredicateCreator.getPredicates(condition, false) : void 0;
      }
      this.pushStream.next({
        model: modelConstructor,
        opType: OpType.DELETE,
        element: model,
        mutator,
        condition: theCondition
      });
    });
    return [models, deleted];
  }
  async query(modelConstructor, predicate, pagination) {
    await this.init();
    return await this.adapter.query(modelConstructor, predicate, pagination);
  }
  async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
    await this.init();
    const record = await this.adapter.queryOne(modelConstructor, firstOrLast);
    return record;
  }
  observe(modelConstructor, predicate, skipOwn) {
    const listenToAll = !modelConstructor;
    const { predicates, type } = ModelPredicateCreator.getPredicates(predicate, false) || {};
    const hasPredicate = !!predicates;
    let result = this.pushStream.observable.filter(({ mutator }) => {
      return !skipOwn || mutator !== skipOwn;
    }).map(({ mutator: _mutator, ...message }) => message);
    if (!listenToAll) {
      result = result.filter(({ model, element }) => {
        if (modelConstructor !== model) {
          return false;
        }
        if (hasPredicate) {
          return validatePredicate(element, type, predicates);
        }
        return true;
      });
    }
    return result;
  }
  async clear(completeObservable = true) {
    this.initialized = void 0;
    await this.adapter.clear();
    if (completeObservable) {
      this.pushStream.complete();
    }
  }
  async batchSave(modelConstructor, items, mutator) {
    await this.init();
    const result = await this.adapter.batchSave(modelConstructor, items);
    result.forEach(([element, opType]) => {
      this.pushStream.next({
        model: modelConstructor,
        opType,
        element,
        mutator,
        condition: void 0
      });
    });
    return result;
  }
  getUpdateMutationInput(model, originalElement, patchesTuple) {
    const containsPatches = patchesTuple && patchesTuple.length;
    if (!containsPatches) {
      return null;
    }
    const [patches, source] = patchesTuple;
    const updatedElement = {};
    const updatedFields = patches.map((patch) => patch.path && patch.path[0]);
    const modelConstructor = Object.getPrototypeOf(model).constructor;
    const namespace = this.namespaceResolver(modelConstructor);
    const { fields } = this.schema.namespaces[namespace].models[modelConstructor.name];
    const { primaryKey, compositeKeys = [] } = this.schema.namespaces[namespace].keys[modelConstructor.name];
    updatedFields.forEach((field) => {
      const targetName = isTargetNameAssociation(fields[field].association);
      const key = targetName || field;
      if (!valuesEqual(source[key], originalElement[key])) {
        updatedElement[key] = originalElement[key] === void 0 ? null : originalElement[key];
        for (const fieldSet of compositeKeys) {
          if (fieldSet.has(key)) {
            for (const compositeField of fieldSet) {
              updatedElement[compositeField] = originalElement[compositeField];
            }
          }
        }
      }
    });
    if (primaryKey && primaryKey.length) {
      for (const pkField of primaryKey) {
        updatedElement[pkField] = originalElement[pkField];
      }
    }
    if (Object.keys(updatedElement).length === 0) {
      return null;
    }
    const { id, _version, _lastChangedAt, _deleted } = originalElement;
    return {
      ...updatedElement,
      id,
      _version,
      _lastChangedAt,
      _deleted
    };
  }
};
var ExclusiveStorage = class {
  constructor(schema2, namespaceResolver2, getModelConstructorByModelName2, modelInstanceCreator2, adapter, sessionId) {
    this.mutex = new Mutex();
    this.storage = new StorageClass(schema2, namespaceResolver2, getModelConstructorByModelName2, modelInstanceCreator2, adapter, sessionId);
  }
  runExclusive(fn2) {
    return this.mutex.runExclusive(fn2.bind(this, this.storage));
  }
  async save(model, condition, mutator, patchesTuple) {
    return this.runExclusive((storage) => storage.save(model, condition, mutator, patchesTuple));
  }
  async delete(modelOrModelConstructor, condition, mutator) {
    return this.runExclusive((storage) => {
      if (isModelConstructor(modelOrModelConstructor)) {
        const modelConstructor = modelOrModelConstructor;
        return storage.delete(modelConstructor, condition, mutator);
      } else {
        const model = modelOrModelConstructor;
        return storage.delete(model, condition, mutator);
      }
    });
  }
  async query(modelConstructor, predicate, pagination) {
    return this.runExclusive((storage) => storage.query(modelConstructor, predicate, pagination));
  }
  async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
    return this.runExclusive((storage) => storage.queryOne(modelConstructor, firstOrLast));
  }
  static getNamespace() {
    return StorageClass.getNamespace();
  }
  observe(modelConstructor, predicate, skipOwn) {
    return this.storage.observe(modelConstructor, predicate, skipOwn);
  }
  async clear() {
    await this.storage.clear();
  }
  batchSave(modelConstructor, items) {
    return this.storage.batchSave(modelConstructor, items);
  }
  async init() {
    return this.storage.init();
  }
};

// src/sync/index.ts
import { browserOrNode as browserOrNode2, ConsoleLogger as Logger11 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
import { CONTROL_MSG as PUBSUB_CONTROL_MSG2 } from "http://localhost:8080/packages/pubsub/4.1.14/pubsub-esm.js";

// src/sync/datastoreConnectivity.ts
import { ConsoleLogger as Logger4 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/sync/datastoreReachability/index.ts
import { Reachability } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var ReachabilityMonitor = new Reachability().networkMonitor();

// src/sync/datastoreConnectivity.ts
var logger4 = new Logger4("DataStore");
var RECONNECTING_IN = 5e3;
var DataStoreConnectivity = class {
  constructor() {
    this.connectionStatus = {
      online: false
    };
  }
  status() {
    if (this.observer) {
      throw new Error("Subscriber already exists");
    }
    return new bundle_esm_default((observer) => {
      this.observer = observer;
      this.subscription = ReachabilityMonitor.subscribe(({ online }) => {
        this.connectionStatus.online = online;
        const observerResult = { ...this.connectionStatus };
        observer.next(observerResult);
      });
      return () => {
        clearTimeout(this.timeout);
        this.unsubscribe();
      };
    });
  }
  unsubscribe() {
    if (this.subscription) {
      clearTimeout(this.timeout);
      this.subscription.unsubscribe();
    }
  }
  socketDisconnected() {
    if (this.observer && typeof this.observer.next === "function") {
      this.observer.next({ online: false });
      this.timeout = setTimeout(() => {
        const observerResult = { ...this.connectionStatus };
        this.observer.next(observerResult);
      }, RECONNECTING_IN);
    }
  }
};

// src/sync/merger.ts
var ModelMerger = class {
  constructor(outbox, ownSymbol2) {
    this.outbox = outbox;
    this.ownSymbol = ownSymbol2;
  }
  async merge(storage, model) {
    let result;
    const mutationsForModel = await this.outbox.getForModel(storage, model);
    const isDelete = model._deleted;
    if (mutationsForModel.length === 0) {
      if (isDelete) {
        result = OpType.DELETE;
        await storage.delete(model, void 0, this.ownSymbol);
      } else {
        [[, result]] = await storage.save(model, void 0, this.ownSymbol);
      }
    }
    return result;
  }
  async mergePage(storage, modelConstructor, items) {
    const itemsMap = new Map();
    for (const item of items) {
      itemsMap.set(item.id, item);
    }
    const page = [...itemsMap.values()];
    return await storage.batchSave(modelConstructor, page, this.ownSymbol);
  }
};

// src/sync/utils.ts
import { GRAPHQL_AUTH_MODE as GRAPHQL_AUTH_MODE2 } from "http://localhost:8080/packages/api/4.0.22/api-esm.js";
import { GraphQLAuthError } from "http://localhost:8080/packages/api/4.0.22/api-esm.js";
import { Logger as Logger5 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger5 = new Logger5("DataStore");
var GraphQLOperationType;
(function(GraphQLOperationType2) {
  GraphQLOperationType2["LIST"] = "query";
  GraphQLOperationType2["CREATE"] = "mutation";
  GraphQLOperationType2["UPDATE"] = "mutation";
  GraphQLOperationType2["DELETE"] = "mutation";
  GraphQLOperationType2["GET"] = "query";
})(GraphQLOperationType || (GraphQLOperationType = {}));
var TransformerMutationType;
(function(TransformerMutationType3) {
  TransformerMutationType3["CREATE"] = "Create";
  TransformerMutationType3["UPDATE"] = "Update";
  TransformerMutationType3["DELETE"] = "Delete";
  TransformerMutationType3["GET"] = "Get";
})(TransformerMutationType || (TransformerMutationType = {}));
var dummyMetadata = {
  _version: void 0,
  _lastChangedAt: void 0,
  _deleted: void 0
};
var metadataFields = Object.keys(dummyMetadata);
function getMetadataFields() {
  return metadataFields;
}
function generateSelectionSet(namespace, modelDefinition) {
  const scalarFields = getScalarFields(modelDefinition);
  const nonModelFields = getNonModelFields(namespace, modelDefinition);
  const implicitOwnerField = getImplicitOwnerField(modelDefinition, scalarFields);
  let scalarAndMetadataFields = Object.values(scalarFields).map(({ name }) => name).concat(implicitOwnerField).concat(nonModelFields);
  if (isSchemaModel(modelDefinition)) {
    scalarAndMetadataFields = scalarAndMetadataFields.concat(getMetadataFields()).concat(getConnectionFields(modelDefinition));
  }
  const result = scalarAndMetadataFields.join("\n");
  return result;
}
function getImplicitOwnerField(modelDefinition, scalarFields) {
  const ownerFields = getOwnerFields(modelDefinition);
  if (!scalarFields.owner && ownerFields.includes("owner")) {
    return ["owner"];
  }
  return [];
}
function getOwnerFields(modelDefinition) {
  const ownerFields = [];
  if (isSchemaModel(modelDefinition) && modelDefinition.attributes) {
    modelDefinition.attributes.forEach((attr) => {
      if (attr.properties && attr.properties.rules) {
        const rule = attr.properties.rules.find((rule2) => rule2.allow === "owner");
        if (rule && rule.ownerField) {
          ownerFields.push(rule.ownerField);
        }
      }
    });
  }
  return ownerFields;
}
function getScalarFields(modelDefinition) {
  const { fields } = modelDefinition;
  const result = Object.values(fields).filter((field) => {
    if (isGraphQLScalarType(field.type) || isEnumFieldType(field.type)) {
      return true;
    }
    return false;
  }).reduce((acc, field) => {
    acc[field.name] = field;
    return acc;
  }, {});
  return result;
}
function getConnectionFields(modelDefinition) {
  const result = [];
  Object.values(modelDefinition.fields).filter(({ association }) => association && Object.keys(association).length).forEach(({ name, association }) => {
    const { connectionType } = association;
    switch (connectionType) {
      case "HAS_ONE":
      case "HAS_MANY":
        break;
      case "BELONGS_TO":
        if (isTargetNameAssociation(association)) {
          result.push(`${name} { id _deleted }`);
        }
        break;
      default:
        exhaustiveCheck(connectionType);
    }
  });
  return result;
}
function getNonModelFields(namespace, modelDefinition) {
  const result = [];
  Object.values(modelDefinition.fields).forEach(({ name, type }) => {
    if (isNonModelFieldType(type)) {
      const typeDefinition = namespace.nonModels[type.nonModel];
      const scalarFields = Object.values(getScalarFields(typeDefinition)).map(({ name: name2 }) => name2);
      const nested = [];
      Object.values(typeDefinition.fields).forEach((field) => {
        const { type: type2, name: name2 } = field;
        if (isNonModelFieldType(type2)) {
          const typeDefinition2 = namespace.nonModels[type2.nonModel];
          nested.push(`${name2} { ${generateSelectionSet(namespace, typeDefinition2)} }`);
        }
      });
      result.push(`${name} { ${scalarFields.join(" ")} ${nested.join(" ")} }`);
    }
  });
  return result;
}
function getAuthorizationRules(modelDefinition) {
  const authConfig = [].concat(modelDefinition.attributes).find((attr) => attr && attr.type === "auth");
  const { properties: { rules = [] } = {} } = authConfig || {};
  const resultRules = [];
  rules.forEach((rule) => {
    const {
      identityClaim = "cognito:username",
      ownerField = "owner",
      operations = ["create", "update", "delete", "read"],
      provider = "userPools",
      groupClaim = "cognito:groups",
      allow: authStrategy = "iam",
      groups = []
    } = rule;
    const isReadAuthorized = operations.includes("read");
    const isOwnerAuth = authStrategy === "owner";
    if (!isReadAuthorized && !isOwnerAuth) {
      return;
    }
    const authRule = {
      identityClaim,
      ownerField,
      provider,
      groupClaim,
      authStrategy,
      groups,
      areSubscriptionsPublic: false
    };
    if (isOwnerAuth) {
      const modelConfig = [].concat(modelDefinition.attributes).find((attr) => attr && attr.type === "model");
      const { properties: { subscriptions: { level = "on" } = {} } = {} } = modelConfig || {};
      authRule.areSubscriptionsPublic = !operations.includes("read") || level === "public";
    }
    if (isOwnerAuth) {
      resultRules.push(authRule);
      return;
    }
    resultRules.unshift(authRule);
  });
  return resultRules;
}
function buildSubscriptionGraphQLOperation(namespace, modelDefinition, transformerMutationType, isOwnerAuthorization, ownerField) {
  const selectionSet = generateSelectionSet(namespace, modelDefinition);
  const { name: typeName, pluralName: pluralTypeName } = modelDefinition;
  const opName = `on${transformerMutationType}${typeName}`;
  let docArgs = "";
  let opArgs = "";
  if (isOwnerAuthorization) {
    docArgs = `($${ownerField}: String!)`;
    opArgs = `(${ownerField}: $${ownerField})`;
  }
  return [
    transformerMutationType,
    opName,
    `subscription operation${docArgs}{
			${opName}${opArgs}{
				${selectionSet}
			}
		}`
  ];
}
function buildGraphQLOperation(namespace, modelDefinition, graphQLOpType) {
  let selectionSet = generateSelectionSet(namespace, modelDefinition);
  const { name: typeName, pluralName: pluralTypeName } = modelDefinition;
  let operation;
  let documentArgs = " ";
  let operationArgs = " ";
  let transformerMutationType;
  switch (graphQLOpType) {
    case "LIST":
      operation = `sync${pluralTypeName}`;
      documentArgs = `($limit: Int, $nextToken: String, $lastSync: AWSTimestamp, $filter: Model${typeName}FilterInput)`;
      operationArgs = "(limit: $limit, nextToken: $nextToken, lastSync: $lastSync, filter: $filter)";
      selectionSet = `items {
							${selectionSet}
						}
						nextToken
						startedAt`;
      break;
    case "CREATE":
      operation = `create${typeName}`;
      documentArgs = `($input: Create${typeName}Input!)`;
      operationArgs = "(input: $input)";
      transformerMutationType = TransformerMutationType.CREATE;
      break;
    case "UPDATE":
      operation = `update${typeName}`;
      documentArgs = `($input: Update${typeName}Input!, $condition: Model${typeName}ConditionInput)`;
      operationArgs = "(input: $input, condition: $condition)";
      transformerMutationType = TransformerMutationType.UPDATE;
      break;
    case "DELETE":
      operation = `delete${typeName}`;
      documentArgs = `($input: Delete${typeName}Input!, $condition: Model${typeName}ConditionInput)`;
      operationArgs = "(input: $input, condition: $condition)";
      transformerMutationType = TransformerMutationType.DELETE;
      break;
    case "GET":
      operation = `get${typeName}`;
      documentArgs = `($id: ID!)`;
      operationArgs = "(id: $id)";
      transformerMutationType = TransformerMutationType.GET;
      break;
    default:
      exhaustiveCheck(graphQLOpType);
  }
  return [
    [
      transformerMutationType,
      operation,
      `${GraphQLOperationType[graphQLOpType]} operation${documentArgs}{
		${operation}${operationArgs}{
			${selectionSet}
		}
	}`
    ]
  ];
}
function createMutationInstanceFromModelOperation(relationships, modelDefinition, opType, model, element, condition, MutationEventConstructor, modelInstanceCreator2, id) {
  let operation;
  switch (opType) {
    case OpType.INSERT:
      operation = TransformerMutationType.CREATE;
      break;
    case OpType.UPDATE:
      operation = TransformerMutationType.UPDATE;
      break;
    case OpType.DELETE:
      operation = TransformerMutationType.DELETE;
      break;
    default:
      exhaustiveCheck(opType);
  }
  const replacer = (k2, v2) => {
    const isAWSJSON2 = k2 && v2 !== null && typeof v2 === "object" && modelDefinition.fields[k2] && modelDefinition.fields[k2].type === "AWSJSON";
    if (isAWSJSON2) {
      return JSON.stringify(v2);
    }
    return v2;
  };
  const mutationEvent = modelInstanceCreator2(MutationEventConstructor, {
    ...id ? { id } : {},
    data: JSON.stringify(element, replacer),
    modelId: element.id,
    model: model.name,
    operation,
    condition: JSON.stringify(condition)
  });
  return mutationEvent;
}
function predicateToGraphQLCondition(predicate) {
  const result = {};
  if (!predicate || !Array.isArray(predicate.predicates)) {
    return result;
  }
  predicate.predicates.forEach((p2) => {
    if (isPredicateObj(p2)) {
      const { field, operator, operand } = p2;
      if (field === "id") {
        return;
      }
      result[field] = { [operator]: operand };
    } else {
      result[p2.type] = predicateToGraphQLCondition(p2);
    }
  });
  return result;
}
function predicateToGraphQLFilter(predicatesGroup) {
  const result = {};
  if (!predicatesGroup || !Array.isArray(predicatesGroup.predicates)) {
    return result;
  }
  const { type, predicates } = predicatesGroup;
  const isList = type === "and" || type === "or";
  result[type] = isList ? [] : {};
  const appendToFilter = (value) => isList ? result[type].push(value) : result[type] = value;
  predicates.forEach((predicate) => {
    if (isPredicateObj(predicate)) {
      const { field, operator, operand } = predicate;
      const gqlField = {
        [field]: { [operator]: operand }
      };
      appendToFilter(gqlField);
      return;
    }
    appendToFilter(predicateToGraphQLFilter(predicate));
  });
  return result;
}
function getUserGroupsFromToken(token, rule) {
  let userGroups = token[rule.groupClaim] || [];
  if (typeof userGroups === "string") {
    let parsedGroups;
    try {
      parsedGroups = JSON.parse(userGroups);
    } catch (e) {
      parsedGroups = userGroups;
    }
    userGroups = [].concat(parsedGroups);
  }
  return userGroups;
}
async function getModelAuthModes({
  authModeStrategy,
  defaultAuthMode,
  modelName,
  schema: schema2
}) {
  const operations = Object.values(ModelOperation);
  const modelAuthModes = {
    CREATE: [],
    READ: [],
    UPDATE: [],
    DELETE: []
  };
  try {
    await Promise.all(operations.map(async (operation) => {
      const authModes = await authModeStrategy({
        schema: schema2,
        modelName,
        operation
      });
      if (typeof authModes === "string") {
        modelAuthModes[operation] = [authModes];
      } else if (Array.isArray(authModes) && authModes.length) {
        modelAuthModes[operation] = authModes;
      } else {
        modelAuthModes[operation] = [defaultAuthMode];
      }
    }));
  } catch (error) {
    logger5.debug(`Error getting auth modes for model: ${modelName}`, error);
  }
  return modelAuthModes;
}
function getForbiddenError(error) {
  const forbiddenErrorMessages = [
    "Request failed with status code 401",
    "Request failed with status code 403"
  ];
  let forbiddenError;
  if (error && error.errors) {
    forbiddenError = error.errors.find((err) => forbiddenErrorMessages.includes(err.message));
  } else if (error && error.message) {
    forbiddenError = error;
  }
  if (forbiddenError) {
    return forbiddenError.message;
  }
  return null;
}
function getClientSideAuthError(error) {
  const clientSideAuthErrors = Object.values(GraphQLAuthError);
  const clientSideError = error && error.message && clientSideAuthErrors.find((clientError) => error.message.includes(clientError));
  return clientSideError || null;
}
async function getTokenForCustomAuth(authMode, amplifyConfig = {}) {
  if (authMode === GRAPHQL_AUTH_MODE2.AWS_LAMBDA) {
    const {
      authProviders: { functionAuthProvider } = { functionAuthProvider: null }
    } = amplifyConfig;
    if (functionAuthProvider && typeof functionAuthProvider === "function") {
      try {
        const { token } = await functionAuthProvider();
        return token;
      } catch (error) {
        throw new Error(`Error retrieving token from \`functionAuthProvider\`: ${error}`);
      }
    } else {
      throw new Error(`You must provide a \`functionAuthProvider\` function to \`DataStore.configure\` when using ${GRAPHQL_AUTH_MODE2.AWS_LAMBDA}`);
    }
  }
}

// src/sync/outbox.ts
var MutationEventOutbox = class {
  constructor(schema2, MutationEvent, modelInstanceCreator2, ownSymbol2) {
    this.schema = schema2;
    this.MutationEvent = MutationEvent;
    this.modelInstanceCreator = modelInstanceCreator2;
    this.ownSymbol = ownSymbol2;
  }
  async enqueue(storage, mutationEvent) {
    storage.runExclusive(async (s2) => {
      const mutationEventModelDefinition = this.schema.namespaces[SYNC].models["MutationEvent"];
      const predicate = ModelPredicateCreator.createFromExisting(mutationEventModelDefinition, (c2) => c2.modelId("eq", mutationEvent.modelId).id("ne", this.inProgressMutationEventId));
      const [first] = await s2.query(this.MutationEvent, predicate);
      if (first === void 0) {
        await s2.save(mutationEvent, void 0, this.ownSymbol);
        return;
      }
      const { operation: incomingMutationType } = mutationEvent;
      if (first.operation === TransformerMutationType.CREATE) {
        if (incomingMutationType === TransformerMutationType.DELETE) {
          await s2.delete(this.MutationEvent, predicate);
        } else {
          const merged = this.mergeUserFields(first, mutationEvent);
          await s2.save(this.MutationEvent.copyOf(first, (draft) => {
            draft.data = merged.data;
          }), void 0, this.ownSymbol);
        }
      } else {
        const { condition: incomingConditionJSON } = mutationEvent;
        const incomingCondition = JSON.parse(incomingConditionJSON);
        let merged;
        if (Object.keys(incomingCondition).length === 0) {
          merged = this.mergeUserFields(first, mutationEvent);
          await s2.delete(this.MutationEvent, predicate);
        }
        merged = merged || mutationEvent;
        await s2.save(merged, void 0, this.ownSymbol);
      }
    });
  }
  async dequeue(storage, record, recordOp) {
    const head = await this.peek(storage);
    if (record) {
      await this.syncOutboxVersionsOnDequeue(storage, record, head, recordOp);
    }
    await storage.delete(head);
    this.inProgressMutationEventId = void 0;
    return head;
  }
  async peek(storage) {
    const head = await storage.queryOne(this.MutationEvent, QueryOne.FIRST);
    this.inProgressMutationEventId = head ? head.id : void 0;
    return head;
  }
  async getForModel(storage, model) {
    const mutationEventModelDefinition = this.schema.namespaces[SYNC].models.MutationEvent;
    const mutationEvents = await storage.query(this.MutationEvent, ModelPredicateCreator.createFromExisting(mutationEventModelDefinition, (c2) => c2.modelId("eq", model.id)));
    return mutationEvents;
  }
  async getModelIds(storage) {
    const mutationEvents = await storage.query(this.MutationEvent);
    const result = new Set();
    mutationEvents.forEach(({ modelId }) => result.add(modelId));
    return result;
  }
  async syncOutboxVersionsOnDequeue(storage, record, head, recordOp) {
    if (head.operation !== recordOp) {
      return;
    }
    const { _version, _lastChangedAt, _deleted, ...incomingData } = record;
    const data = JSON.parse(head.data);
    if (!data) {
      return;
    }
    const {
      _version: __version,
      _lastChangedAt: __lastChangedAt,
      _deleted: __deleted,
      ...outgoingData
    } = data;
    if (!valuesEqual(incomingData, outgoingData, true)) {
      return;
    }
    const mutationEventModelDefinition = this.schema.namespaces[SYNC].models["MutationEvent"];
    const predicate = ModelPredicateCreator.createFromExisting(mutationEventModelDefinition, (c2) => c2.modelId("eq", record.id).id("ne", this.inProgressMutationEventId));
    const outdatedMutations = await storage.query(this.MutationEvent, predicate);
    if (!outdatedMutations.length) {
      return;
    }
    const reconciledMutations = outdatedMutations.map((m2) => {
      const oldData = JSON.parse(m2.data);
      const newData = { ...oldData, _version, _lastChangedAt };
      return this.MutationEvent.copyOf(m2, (draft) => {
        draft.data = JSON.stringify(newData);
      });
    });
    await storage.delete(this.MutationEvent, predicate);
    await Promise.all(reconciledMutations.map(async (m2) => await storage.save(m2, void 0, this.ownSymbol)));
  }
  mergeUserFields(previous, current) {
    const {
      _version,
      id,
      _lastChangedAt,
      _deleted,
      ...previousData
    } = JSON.parse(previous.data);
    const {
      id: __id,
      _version: __version,
      _lastChangedAt: __lastChangedAt,
      _deleted: __deleted,
      ...currentData
    } = JSON.parse(current.data);
    const data = JSON.stringify({
      id,
      _version,
      _lastChangedAt,
      _deleted,
      ...previousData,
      ...currentData
    });
    return this.modelInstanceCreator(this.MutationEvent, {
      ...current,
      data
    });
  }
};

// src/sync/processors/mutation.ts
import API from "http://localhost:8080/packages/api/4.0.22/api-esm.js";
import {
  ConsoleLogger as Logger6,
  jitteredExponentialRetry,
  NonRetryableError
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var MAX_ATTEMPTS = 10;
var logger6 = new Logger6("DataStore");
var MutationProcessor = class {
  constructor(schema2, storage, userClasses2, outbox, modelInstanceCreator2, MutationEvent, amplifyConfig = {}, authModeStrategy, conflictHandler, errorHandler) {
    this.schema = schema2;
    this.storage = storage;
    this.userClasses = userClasses2;
    this.outbox = outbox;
    this.modelInstanceCreator = modelInstanceCreator2;
    this.MutationEvent = MutationEvent;
    this.amplifyConfig = amplifyConfig;
    this.authModeStrategy = authModeStrategy;
    this.conflictHandler = conflictHandler;
    this.errorHandler = errorHandler;
    this.typeQuery = new WeakMap();
    this.processing = false;
    this.generateQueries();
  }
  generateQueries() {
    Object.values(this.schema.namespaces).forEach((namespace) => {
      Object.values(namespace.models).filter(({ syncable }) => syncable).forEach((model) => {
        const [createMutation] = buildGraphQLOperation(namespace, model, "CREATE");
        const [updateMutation] = buildGraphQLOperation(namespace, model, "UPDATE");
        const [deleteMutation] = buildGraphQLOperation(namespace, model, "DELETE");
        this.typeQuery.set(model, [
          createMutation,
          updateMutation,
          deleteMutation
        ]);
      });
    });
  }
  isReady() {
    return this.observer !== void 0;
  }
  start() {
    const observable = new bundle_esm_default((observer) => {
      this.observer = observer;
      this.resume();
      return () => {
        this.pause();
      };
    });
    return observable;
  }
  async resume() {
    if (this.processing || !this.isReady()) {
      return;
    }
    this.processing = true;
    let head;
    const namespaceName = USER;
    while (this.processing && (head = await this.outbox.peek(this.storage)) !== void 0) {
      const { model, operation, data, condition } = head;
      const modelConstructor = this.userClasses[model];
      let result;
      let opName;
      let modelDefinition;
      try {
        const modelAuthModes = await getModelAuthModes({
          authModeStrategy: this.authModeStrategy,
          defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
          modelName: model,
          schema: this.schema
        });
        const operationAuthModes = modelAuthModes[operation.toUpperCase()];
        let authModeAttempts = 0;
        const authModeRetry = async () => {
          try {
            logger6.debug(`Attempting mutation with authMode: ${operationAuthModes[authModeAttempts]}`);
            const response = await this.jitteredRetry(namespaceName, model, operation, data, condition, modelConstructor, this.MutationEvent, head, operationAuthModes[authModeAttempts]);
            logger6.debug(`Mutation sent successfully with authMode: ${operationAuthModes[authModeAttempts]}`);
            return response;
          } catch (error) {
            authModeAttempts++;
            if (authModeAttempts >= operationAuthModes.length) {
              logger6.debug(`Mutation failed with authMode: ${operationAuthModes[authModeAttempts - 1]}`);
              throw error;
            }
            logger6.debug(`Mutation failed with authMode: ${operationAuthModes[authModeAttempts - 1]}. Retrying with authMode: ${operationAuthModes[authModeAttempts]}`);
            return await authModeRetry();
          }
        };
        [result, opName, modelDefinition] = await authModeRetry();
      } catch (error) {
        if (error.message === "Offline" || error.message === "RetryMutation") {
          continue;
        }
      }
      if (result === void 0) {
        logger6.debug("done retrying");
        await this.storage.runExclusive(async (storage) => {
          await this.outbox.dequeue(storage);
        });
        continue;
      }
      const record = result.data[opName];
      let hasMore = false;
      await this.storage.runExclusive(async (storage) => {
        await this.outbox.dequeue(storage, record, operation);
        hasMore = await this.outbox.peek(storage) !== void 0;
      });
      this.observer.next({
        operation,
        modelDefinition,
        model: record,
        hasMore
      });
    }
    this.pause();
  }
  async jitteredRetry(namespaceName, model, operation, data, condition, modelConstructor, MutationEvent, mutationEvent, authMode) {
    return await jitteredExponentialRetry(async (model2, operation2, data2, condition2, modelConstructor2, MutationEvent2, mutationEvent2) => {
      const [
        query,
        variables,
        graphQLCondition,
        opName,
        modelDefinition
      ] = this.createQueryVariables(namespaceName, model2, operation2, data2, condition2);
      const authToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
      const tryWith = { query, variables, authMode, authToken };
      let attempt = 0;
      const opType = this.opTypeFromTransformerOperation(operation2);
      do {
        try {
          const result = await API.graphql(tryWith);
          return [result, opName, modelDefinition];
        } catch (err) {
          if (err.errors && err.errors.length > 0) {
            const [error] = err.errors;
            const { originalError: { code = null } = {} } = error;
            if (error.errorType === "Unauthorized") {
              throw new NonRetryableError("Unauthorized");
            }
            if (error.message === "Network Error" || code === "ECONNABORTED") {
              if (!this.processing) {
                throw new NonRetryableError("Offline");
              }
              throw new Error("Network Error");
            }
            if (error.errorType === "ConflictUnhandled") {
              attempt++;
              let retryWith;
              if (attempt > MAX_ATTEMPTS) {
                retryWith = DISCARD;
              } else {
                try {
                  retryWith = await this.conflictHandler({
                    modelConstructor: modelConstructor2,
                    localModel: this.modelInstanceCreator(modelConstructor2, variables.input),
                    remoteModel: this.modelInstanceCreator(modelConstructor2, error.data),
                    operation: opType,
                    attempts: attempt
                  });
                } catch (err2) {
                  logger6.warn("conflict trycatch", err2);
                  continue;
                }
              }
              if (retryWith === DISCARD) {
                const [[, opName2, query2]] = buildGraphQLOperation(this.schema.namespaces[namespaceName], modelDefinition, "GET");
                const authToken2 = await getTokenForCustomAuth(authMode, this.amplifyConfig);
                const serverData = await API.graphql({
                  query: query2,
                  variables: { id: variables.input.id },
                  authMode,
                  authToken: authToken2
                });
                return [serverData, opName2, modelDefinition];
              }
              const namespace = this.schema.namespaces[namespaceName];
              const updatedMutation = createMutationInstanceFromModelOperation(namespace.relationships, modelDefinition, opType, modelConstructor2, retryWith, graphQLCondition, MutationEvent2, this.modelInstanceCreator, mutationEvent2.id);
              await this.storage.save(updatedMutation);
              throw new NonRetryableError("RetryMutation");
            } else {
              try {
                await this.errorHandler({
                  localModel: this.modelInstanceCreator(modelConstructor2, variables.input),
                  message: error.message,
                  operation: operation2,
                  errorType: error.errorType,
                  errorInfo: error.errorInfo,
                  remoteModel: error.data ? this.modelInstanceCreator(modelConstructor2, error.data) : null
                });
              } catch (err2) {
                logger6.warn("failed to execute errorHandler", err2);
              } finally {
                return error.data ? [
                  { data: { [opName]: error.data } },
                  opName,
                  modelDefinition
                ] : [];
              }
            }
          } else {
            throw new NonRetryableError(err);
          }
        }
      } while (tryWith);
    }, [
      model,
      operation,
      data,
      condition,
      modelConstructor,
      MutationEvent,
      mutationEvent
    ]);
  }
  createQueryVariables(namespaceName, model, operation, data, condition) {
    const modelDefinition = this.schema.namespaces[namespaceName].models[model];
    const { primaryKey } = this.schema.namespaces[namespaceName].keys[model];
    const queriesTuples = this.typeQuery.get(modelDefinition);
    const [, opName, query] = queriesTuples.find(([transformerMutationType]) => transformerMutationType === operation);
    const { _version, ...parsedData } = JSON.parse(data);
    const deleteInput = {};
    if (primaryKey && primaryKey.length) {
      for (const pkField of primaryKey) {
        deleteInput[pkField] = parsedData[pkField];
      }
    } else {
      deleteInput["id"] = parsedData.id;
    }
    const filteredData = operation === TransformerMutationType.DELETE ? deleteInput : Object.values(modelDefinition.fields).filter(({ name, type, association }) => {
      if (isModelFieldType(type)) {
        if (isTargetNameAssociation(association) && association.connectionType === "BELONGS_TO") {
          return true;
        }
        return false;
      }
      if (operation === TransformerMutationType.UPDATE) {
        return parsedData.hasOwnProperty(name);
      }
      return true;
    }).map(({ name, type, association }) => {
      let fieldName = name;
      let val = parsedData[name];
      if (isModelFieldType(type) && isTargetNameAssociation(association)) {
        fieldName = association.targetName;
        val = parsedData[fieldName];
      }
      return [fieldName, val];
    }).reduce((acc, [k2, v2]) => {
      acc[k2] = v2;
      return acc;
    }, {});
    const input = {
      ...filteredData,
      _version
    };
    const graphQLCondition = JSON.parse(condition);
    const variables = {
      input,
      ...operation === TransformerMutationType.CREATE ? {} : {
        condition: Object.keys(graphQLCondition).length > 0 ? graphQLCondition : null
      }
    };
    return [query, variables, graphQLCondition, opName, modelDefinition];
  }
  opTypeFromTransformerOperation(operation) {
    switch (operation) {
      case TransformerMutationType.CREATE:
        return OpType.INSERT;
      case TransformerMutationType.DELETE:
        return OpType.DELETE;
      case TransformerMutationType.UPDATE:
        return OpType.UPDATE;
      case TransformerMutationType.GET:
        break;
      default:
        exhaustiveCheck(operation);
    }
  }
  pause() {
    this.processing = false;
  }
};

// src/sync/processors/subscription.ts
import API2, { GRAPHQL_AUTH_MODE as GRAPHQL_AUTH_MODE4 } from "http://localhost:8080/packages/api/4.0.22/api-esm.js";
import Auth2 from "http://localhost:8080/packages/auth/4.3.12/auth-esm.js";

// ../cache/lib-esm/index.js
import { Amplify } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../cache/lib-esm/Utils/CacheUtils.js
import { StorageHelper as StorageHelper2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var defaultConfig = {
  keyPrefix: "aws-amplify-cache",
  capacityInBytes: 1048576,
  itemMaxSize: 21e4,
  defaultTTL: 2592e5,
  defaultPriority: 5,
  warningThreshold: 0.8,
  storage: new StorageHelper2().getStorage()
};
function getByteLength(str) {
  var ret = 0;
  ret = str.length;
  for (var i2 = str.length; i2 >= 0; i2 -= 1) {
    var charCode = str.charCodeAt(i2);
    if (charCode > 127 && charCode <= 2047) {
      ret += 1;
    } else if (charCode > 2047 && charCode <= 65535) {
      ret += 2;
    }
    if (charCode >= 56320 && charCode <= 57343) {
      i2 -= 1;
    }
  }
  return ret;
}
function getCurrTime() {
  var currTime = new Date();
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
var CacheObject = function() {
  function CacheObject2() {
  }
  CacheObject2.clear = function() {
    store = {};
  };
  CacheObject2.getItem = function(key) {
    return store[key] || null;
  };
  CacheObject2.setItem = function(key, value) {
    store[key] = value;
  };
  CacheObject2.removeItem = function(key) {
    delete store[key];
  };
  return CacheObject2;
}();

// ../cache/lib-esm/StorageCache.js
import { ConsoleLogger as Logger7 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger7 = new Logger7("StorageCache");
var StorageCache = function() {
  function StorageCache2(config) {
    this.config = Object.assign({}, config);
    this.cacheCurSizeKey = this.config.keyPrefix + "CurSize";
    this.checkConfig();
  }
  StorageCache2.prototype.getModuleName = function() {
    return "Cache";
  };
  StorageCache2.prototype.checkConfig = function() {
    if (!isInteger(this.config.capacityInBytes)) {
      logger7.error("Invalid parameter: capacityInBytes. It should be an Integer. Setting back to default.");
      this.config.capacityInBytes = defaultConfig.capacityInBytes;
    }
    if (!isInteger(this.config.itemMaxSize)) {
      logger7.error("Invalid parameter: itemMaxSize. It should be an Integer. Setting back to default.");
      this.config.itemMaxSize = defaultConfig.itemMaxSize;
    }
    if (!isInteger(this.config.defaultTTL)) {
      logger7.error("Invalid parameter: defaultTTL. It should be an Integer. Setting back to default.");
      this.config.defaultTTL = defaultConfig.defaultTTL;
    }
    if (!isInteger(this.config.defaultPriority)) {
      logger7.error("Invalid parameter: defaultPriority. It should be an Integer. Setting back to default.");
      this.config.defaultPriority = defaultConfig.defaultPriority;
    }
    if (this.config.itemMaxSize > this.config.capacityInBytes) {
      logger7.error("Invalid parameter: itemMaxSize. It should be smaller than capacityInBytes. Setting back to default.");
      this.config.itemMaxSize = defaultConfig.itemMaxSize;
    }
    if (this.config.defaultPriority > 5 || this.config.defaultPriority < 1) {
      logger7.error("Invalid parameter: defaultPriority. It should be between 1 and 5. Setting back to default.");
      this.config.defaultPriority = defaultConfig.defaultPriority;
    }
    if (Number(this.config.warningThreshold) > 1 || Number(this.config.warningThreshold) < 0) {
      logger7.error("Invalid parameter: warningThreshold. It should be between 0 and 1. Setting back to default.");
      this.config.warningThreshold = defaultConfig.warningThreshold;
    }
    var cacheLimit = 5 * 1024 * 1024;
    if (this.config.capacityInBytes > cacheLimit) {
      logger7.error("Cache Capacity should be less than 5MB. Setting back to default. Setting back to default.");
      this.config.capacityInBytes = defaultConfig.capacityInBytes;
    }
  };
  StorageCache2.prototype.fillCacheItem = function(key, value, options) {
    var ret = {
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
  };
  StorageCache2.prototype.configure = function(config) {
    if (!config) {
      return this.config;
    }
    if (config.keyPrefix) {
      logger7.warn("Don't try to configure keyPrefix!");
    }
    this.config = Object.assign({}, this.config, config, config.Cache);
    this.checkConfig();
    return this.config;
  };
  return StorageCache2;
}();

// ../cache/lib-esm/BrowserStorageCache.js
import { ConsoleLogger as Logger8 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var __extends = function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var logger8 = new Logger8("Cache");
var BrowserStorageCacheClass = function(_super) {
  __extends(BrowserStorageCacheClass2, _super);
  function BrowserStorageCacheClass2(config) {
    var _this = this;
    var cacheConfig = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    _this = _super.call(this, cacheConfig) || this;
    _this.config.storage = cacheConfig.storage;
    _this.getItem = _this.getItem.bind(_this);
    _this.setItem = _this.setItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    return _this;
  }
  BrowserStorageCacheClass2.prototype._decreaseCurSizeInBytes = function(amount) {
    var curSize = this.getCacheCurSize();
    this.config.storage.setItem(this.cacheCurSizeKey, (curSize - amount).toString());
  };
  BrowserStorageCacheClass2.prototype._increaseCurSizeInBytes = function(amount) {
    var curSize = this.getCacheCurSize();
    this.config.storage.setItem(this.cacheCurSizeKey, (curSize + amount).toString());
  };
  BrowserStorageCacheClass2.prototype._refreshItem = function(item, prefixedKey) {
    item.visitedTime = getCurrTime();
    this.config.storage.setItem(prefixedKey, JSON.stringify(item));
    return item;
  };
  BrowserStorageCacheClass2.prototype._isExpired = function(key) {
    var text = this.config.storage.getItem(key);
    var item = JSON.parse(text);
    if (getCurrTime() >= item.expires) {
      return true;
    }
    return false;
  };
  BrowserStorageCacheClass2.prototype._removeItem = function(prefixedKey, size) {
    var itemSize = size ? size : JSON.parse(this.config.storage.getItem(prefixedKey)).byteSize;
    this._decreaseCurSizeInBytes(itemSize);
    this.config.storage.removeItem(prefixedKey);
  };
  BrowserStorageCacheClass2.prototype._setItem = function(prefixedKey, item) {
    this._increaseCurSizeInBytes(item.byteSize);
    try {
      this.config.storage.setItem(prefixedKey, JSON.stringify(item));
    } catch (setItemErr) {
      this._decreaseCurSizeInBytes(item.byteSize);
      logger8.error("Failed to set item " + setItemErr);
    }
  };
  BrowserStorageCacheClass2.prototype._sizeToPop = function(itemSize) {
    var spaceItemNeed = this.getCacheCurSize() + itemSize - this.config.capacityInBytes;
    var cacheThresholdSpace = (1 - this.config.warningThreshold) * this.config.capacityInBytes;
    return spaceItemNeed > cacheThresholdSpace ? spaceItemNeed : cacheThresholdSpace;
  };
  BrowserStorageCacheClass2.prototype._isCacheFull = function(itemSize) {
    return itemSize + this.getCacheCurSize() > this.config.capacityInBytes;
  };
  BrowserStorageCacheClass2.prototype._findValidKeys = function() {
    var keys = [];
    var keyInCache = [];
    for (var i2 = 0; i2 < this.config.storage.length; i2 += 1) {
      keyInCache.push(this.config.storage.key(i2));
    }
    for (var i2 = 0; i2 < keyInCache.length; i2 += 1) {
      var key = keyInCache[i2];
      if (key.indexOf(this.config.keyPrefix) === 0 && key !== this.cacheCurSizeKey) {
        if (this._isExpired(key)) {
          this._removeItem(key);
        } else {
          keys.push(key);
        }
      }
    }
    return keys;
  };
  BrowserStorageCacheClass2.prototype._popOutItems = function(keys, sizeToPop) {
    var items = [];
    var remainedSize = sizeToPop;
    for (var i2 = 0; i2 < keys.length; i2 += 1) {
      var val = this.config.storage.getItem(keys[i2]);
      if (val != null) {
        var item = JSON.parse(val);
        items.push(item);
      }
    }
    items.sort(function(a2, b2) {
      if (a2.priority > b2.priority) {
        return -1;
      } else if (a2.priority < b2.priority) {
        return 1;
      } else {
        if (a2.visitedTime < b2.visitedTime) {
          return -1;
        } else
          return 1;
      }
    });
    for (var i2 = 0; i2 < items.length; i2 += 1) {
      this._removeItem(items[i2].key, items[i2].byteSize);
      remainedSize -= items[i2].byteSize;
      if (remainedSize <= 0) {
        return;
      }
    }
  };
  BrowserStorageCacheClass2.prototype.setItem = function(key, value, options) {
    logger8.log("Set item: key is " + key + ", value is " + value + " with options: " + options);
    var prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      logger8.warn("Invalid key: should not be empty or 'CurSize'");
      return;
    }
    if (typeof value === "undefined") {
      logger8.warn("The value of item should not be undefined!");
      return;
    }
    var cacheItemOptions = {
      priority: options && options.priority !== void 0 ? options.priority : this.config.defaultPriority,
      expires: options && options.expires !== void 0 ? options.expires : this.config.defaultTTL + getCurrTime()
    };
    if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
      logger8.warn("Invalid parameter: priority due to out or range. It should be within 1 and 5.");
      return;
    }
    var item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
    if (item.byteSize > this.config.itemMaxSize) {
      logger8.warn("Item with key: " + key + " you are trying to put into is too big!");
      return;
    }
    try {
      var val = this.config.storage.getItem(prefixedKey);
      if (val) {
        this._removeItem(prefixedKey, JSON.parse(val).byteSize);
      }
      if (this._isCacheFull(item.byteSize)) {
        var validKeys = this._findValidKeys();
        if (this._isCacheFull(item.byteSize)) {
          var sizeToPop = this._sizeToPop(item.byteSize);
          this._popOutItems(validKeys, sizeToPop);
        }
      }
      this._setItem(prefixedKey, item);
    } catch (e) {
      logger8.warn("setItem failed! " + e);
    }
  };
  BrowserStorageCacheClass2.prototype.getItem = function(key, options) {
    logger8.log("Get item: key is " + key + " with options " + options);
    var ret = null;
    var prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      logger8.warn("Invalid key: should not be empty or 'CurSize'");
      return null;
    }
    try {
      ret = this.config.storage.getItem(prefixedKey);
      if (ret != null) {
        if (this._isExpired(prefixedKey)) {
          this._removeItem(prefixedKey, JSON.parse(ret).byteSize);
          ret = null;
        } else {
          var item = JSON.parse(ret);
          item = this._refreshItem(item, prefixedKey);
          return item.data;
        }
      }
      if (options && options.callback !== void 0) {
        var val = options.callback();
        if (val !== null) {
          this.setItem(key, val, options);
        }
        return val;
      }
      return null;
    } catch (e) {
      logger8.warn("getItem failed! " + e);
      return null;
    }
  };
  BrowserStorageCacheClass2.prototype.removeItem = function(key) {
    logger8.log("Remove item: key is " + key);
    var prefixedKey = this.config.keyPrefix + key;
    if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
      return;
    }
    try {
      var val = this.config.storage.getItem(prefixedKey);
      if (val) {
        this._removeItem(prefixedKey, JSON.parse(val).byteSize);
      }
    } catch (e) {
      logger8.warn("removeItem failed! " + e);
    }
  };
  BrowserStorageCacheClass2.prototype.clear = function() {
    logger8.log("Clear Cache");
    var keysToRemove = [];
    for (var i2 = 0; i2 < this.config.storage.length; i2 += 1) {
      var key = this.config.storage.key(i2);
      if (key.indexOf(this.config.keyPrefix) === 0) {
        keysToRemove.push(key);
      }
    }
    try {
      for (var i2 = 0; i2 < keysToRemove.length; i2 += 1) {
        this.config.storage.removeItem(keysToRemove[i2]);
      }
    } catch (e) {
      logger8.warn("clear failed! " + e);
    }
  };
  BrowserStorageCacheClass2.prototype.getAllKeys = function() {
    var keys = [];
    for (var i2 = 0; i2 < this.config.storage.length; i2 += 1) {
      var key = this.config.storage.key(i2);
      if (key.indexOf(this.config.keyPrefix) === 0 && key !== this.cacheCurSizeKey) {
        keys.push(key.substring(this.config.keyPrefix.length));
      }
    }
    return keys;
  };
  BrowserStorageCacheClass2.prototype.getCacheCurSize = function() {
    var ret = this.config.storage.getItem(this.cacheCurSizeKey);
    if (!ret) {
      this.config.storage.setItem(this.cacheCurSizeKey, "0");
      ret = "0";
    }
    return Number(ret);
  };
  BrowserStorageCacheClass2.prototype.createInstance = function(config) {
    if (!config.keyPrefix || config.keyPrefix === defaultConfig.keyPrefix) {
      logger8.error("invalid keyPrefix, setting keyPrefix with timeStamp");
      config.keyPrefix = getCurrTime.toString();
    }
    return new BrowserStorageCacheClass2(config);
  };
  return BrowserStorageCacheClass2;
}(StorageCache);
var BrowserStorageCache = new BrowserStorageCacheClass();

// ../cache/lib-esm/index.js
var lib_esm_default = BrowserStorageCache;
Amplify.register(BrowserStorageCache);

// src/sync/processors/subscription.ts
import { ConsoleLogger as Logger9, Hub } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
import { CONTROL_MSG as PUBSUB_CONTROL_MSG } from "http://localhost:8080/packages/pubsub/4.1.14/pubsub-esm.js";
var logger9 = new Logger9("DataStore");
var CONTROL_MSG;
(function(CONTROL_MSG2) {
  CONTROL_MSG2["CONNECTED"] = "CONNECTED";
})(CONTROL_MSG || (CONTROL_MSG = {}));
var USER_CREDENTIALS;
(function(USER_CREDENTIALS2) {
  USER_CREDENTIALS2[USER_CREDENTIALS2["none"] = 0] = "none";
  USER_CREDENTIALS2[USER_CREDENTIALS2["unauth"] = 1] = "unauth";
  USER_CREDENTIALS2[USER_CREDENTIALS2["auth"] = 2] = "auth";
})(USER_CREDENTIALS || (USER_CREDENTIALS = {}));
var SubscriptionProcessor = class {
  constructor(schema2, syncPredicates, amplifyConfig = {}, authModeStrategy) {
    this.schema = schema2;
    this.syncPredicates = syncPredicates;
    this.amplifyConfig = amplifyConfig;
    this.authModeStrategy = authModeStrategy;
    this.typeQuery = new WeakMap();
    this.buffer = [];
  }
  buildSubscription(namespace, model, transformerMutationType, userCredentials, cognitoTokenPayload, oidcTokenPayload, authMode) {
    const { aws_appsync_authenticationType } = this.amplifyConfig;
    const { isOwner, ownerField, ownerValue } = this.getAuthorizationInfo(model, userCredentials, aws_appsync_authenticationType, cognitoTokenPayload, oidcTokenPayload, authMode) || {};
    const [opType, opName, query] = buildSubscriptionGraphQLOperation(namespace, model, transformerMutationType, isOwner, ownerField);
    return { authMode, opType, opName, query, isOwner, ownerField, ownerValue };
  }
  getAuthorizationInfo(model, userCredentials, defaultAuthType, cognitoTokenPayload = {}, oidcTokenPayload = {}, authMode) {
    const rules = getAuthorizationRules(model);
    const iamPrivateAuth = authMode === GRAPHQL_AUTH_MODE4.AWS_IAM && rules.find((rule) => rule.authStrategy === "private" && rule.provider === "iam");
    if (iamPrivateAuth && userCredentials === 1) {
      return null;
    }
    const groupAuthRules = rules.filter((rule) => rule.authStrategy === "groups" && ["userPools", "oidc"].includes(rule.provider));
    const validGroup = (authMode === GRAPHQL_AUTH_MODE4.AMAZON_COGNITO_USER_POOLS || authMode === GRAPHQL_AUTH_MODE4.OPENID_CONNECT) && groupAuthRules.find((groupAuthRule) => {
      const cognitoUserGroups = getUserGroupsFromToken(cognitoTokenPayload, groupAuthRule);
      const oidcUserGroups = getUserGroupsFromToken(oidcTokenPayload, groupAuthRule);
      return [...cognitoUserGroups, ...oidcUserGroups].find((userGroup) => {
        return groupAuthRule.groups.find((group) => group === userGroup);
      });
    });
    if (validGroup) {
      return {
        authMode,
        isOwner: false
      };
    }
    const cognitoOwnerAuthRules = authMode === GRAPHQL_AUTH_MODE4.AMAZON_COGNITO_USER_POOLS ? rules.filter((rule) => rule.authStrategy === "owner" && rule.provider === "userPools") : [];
    let ownerAuthInfo;
    cognitoOwnerAuthRules.forEach((ownerAuthRule) => {
      const ownerValue = cognitoTokenPayload[ownerAuthRule.identityClaim];
      if (ownerValue) {
        ownerAuthInfo = {
          authMode: GRAPHQL_AUTH_MODE4.AMAZON_COGNITO_USER_POOLS,
          isOwner: ownerAuthRule.areSubscriptionsPublic ? false : true,
          ownerField: ownerAuthRule.ownerField,
          ownerValue
        };
      }
    });
    if (ownerAuthInfo) {
      return ownerAuthInfo;
    }
    const oidcOwnerAuthRules = authMode === GRAPHQL_AUTH_MODE4.OPENID_CONNECT ? rules.filter((rule) => rule.authStrategy === "owner" && rule.provider === "oidc") : [];
    oidcOwnerAuthRules.forEach((ownerAuthRule) => {
      const ownerValue = oidcTokenPayload[ownerAuthRule.identityClaim];
      if (ownerValue) {
        ownerAuthInfo = {
          authMode: GRAPHQL_AUTH_MODE4.OPENID_CONNECT,
          isOwner: ownerAuthRule.areSubscriptionsPublic ? false : true,
          ownerField: ownerAuthRule.ownerField,
          ownerValue
        };
      }
    });
    if (ownerAuthInfo) {
      return ownerAuthInfo;
    }
    return {
      authMode: authMode || defaultAuthType,
      isOwner: false
    };
  }
  hubQueryCompletionListener(completed, capsule) {
    const {
      payload: { event }
    } = capsule;
    if (event === PUBSUB_CONTROL_MSG.SUBSCRIPTION_ACK) {
      completed();
    }
  }
  start() {
    const ctlObservable = new bundle_esm_default((observer) => {
      const promises = [];
      let subscriptions = {};
      let cognitoTokenPayload, oidcTokenPayload;
      let userCredentials = 0;
      (async () => {
        try {
          const credentials = await Auth2.currentCredentials();
          userCredentials = credentials.authenticated ? 2 : 1;
        } catch (err) {
        }
        try {
          const session = await Auth2.currentSession();
          cognitoTokenPayload = session.getIdToken().decodePayload();
        } catch (err) {
        }
        try {
          const { aws_cognito_region, Auth: AuthConfig } = this.amplifyConfig;
          if (!aws_cognito_region || AuthConfig && !AuthConfig.region) {
            throw "Auth is not configured";
          }
          let token;
          const federatedInfo = await lib_esm_default.getItem("federatedInfo");
          if (federatedInfo) {
            token = federatedInfo.token;
          } else {
            const currentUser = await Auth2.currentAuthenticatedUser();
            if (currentUser) {
              token = currentUser.token;
            }
          }
          if (token) {
            const payload = token.split(".")[1];
            oidcTokenPayload = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
          }
        } catch (err) {
          logger9.debug("error getting OIDC JWT", err);
        }
        Object.values(this.schema.namespaces).forEach((namespace) => {
          Object.values(namespace.models).filter(({ syncable }) => syncable).forEach(async (modelDefinition) => {
            const modelAuthModes = await getModelAuthModes({
              authModeStrategy: this.authModeStrategy,
              defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
              modelName: modelDefinition.name,
              schema: this.schema
            });
            const readAuthModes = modelAuthModes.READ;
            subscriptions = {
              ...subscriptions,
              [modelDefinition.name]: {
                [TransformerMutationType.CREATE]: [],
                [TransformerMutationType.UPDATE]: [],
                [TransformerMutationType.DELETE]: []
              }
            };
            const operations = [
              TransformerMutationType.CREATE,
              TransformerMutationType.UPDATE,
              TransformerMutationType.DELETE
            ];
            const operationAuthModeAttempts = {
              [TransformerMutationType.CREATE]: 0,
              [TransformerMutationType.UPDATE]: 0,
              [TransformerMutationType.DELETE]: 0
            };
            const authModeRetry = async (operation) => {
              const {
                opType: transformerMutationType,
                opName,
                query,
                isOwner,
                ownerField,
                ownerValue,
                authMode
              } = this.buildSubscription(namespace, modelDefinition, operation, userCredentials, cognitoTokenPayload, oidcTokenPayload, readAuthModes[operationAuthModeAttempts[operation]]);
              const authToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
              const variables = {};
              if (isOwner) {
                if (!ownerValue) {
                  observer.error("Owner field required, sign in is needed in order to perform this operation");
                  return;
                }
                variables[ownerField] = ownerValue;
              }
              logger9.debug(`Attempting ${operation} subscription with authMode: ${readAuthModes[operationAuthModeAttempts[operation]]}`);
              const queryObservable = API2.graphql({ query, variables, ...{ authMode }, authToken });
              let subscriptionReadyCallback;
              subscriptions[modelDefinition.name][transformerMutationType].push(queryObservable.map(({ value }) => value).subscribe({
                next: ({ data, errors }) => {
                  if (Array.isArray(errors) && errors.length > 0) {
                    const messages = errors.map(({ message }) => message);
                    logger9.warn(`Skipping incoming subscription. Messages: ${messages.join("\n")}`);
                    this.drainBuffer();
                    return;
                  }
                  const predicatesGroup = ModelPredicateCreator.getPredicates(this.syncPredicates.get(modelDefinition), false);
                  const { [opName]: record } = data;
                  if (this.passesPredicateValidation(record, predicatesGroup)) {
                    this.pushToBuffer(transformerMutationType, modelDefinition, record);
                  }
                  this.drainBuffer();
                },
                error: (subscriptionError) => {
                  const {
                    error: { errors: [{ message = "" } = {}] } = {
                      errors: []
                    }
                  } = subscriptionError;
                  if (message.includes(PUBSUB_CONTROL_MSG.REALTIME_SUBSCRIPTION_INIT_ERROR) || message.includes(PUBSUB_CONTROL_MSG.CONNECTION_FAILED)) {
                    subscriptions[modelDefinition.name][transformerMutationType].forEach((subscription) => subscription.unsubscribe());
                    subscriptions[modelDefinition.name][transformerMutationType] = [];
                    operationAuthModeAttempts[operation]++;
                    if (operationAuthModeAttempts[operation] >= readAuthModes.length) {
                      logger9.debug(`${operation} subscription failed with authMode: ${readAuthModes[operationAuthModeAttempts[operation] - 1]}`);
                      logger9.warn("subscriptionError", message);
                      return;
                    } else {
                      logger9.debug(`${operation} subscription failed with authMode: ${readAuthModes[operationAuthModeAttempts[operation] - 1]}. Retrying with authMode: ${readAuthModes[operationAuthModeAttempts[operation]]}`);
                      authModeRetry(operation);
                      return;
                    }
                  }
                  logger9.warn("subscriptionError", message);
                  if (typeof subscriptionReadyCallback === "function") {
                    subscriptionReadyCallback();
                  }
                  if (message.includes('"errorType":"Unauthorized"') || message.includes('"errorType":"OperationDisabled"')) {
                    return;
                  }
                  observer.error(message);
                }
              }));
              promises.push((async () => {
                let boundFunction;
                await new Promise((res) => {
                  subscriptionReadyCallback = res;
                  boundFunction = this.hubQueryCompletionListener.bind(this, res);
                  Hub.listen("api", boundFunction);
                });
                Hub.remove("api", boundFunction);
              })());
            };
            operations.forEach((op) => authModeRetry(op));
          });
        });
        Promise.all(promises).then(() => observer.next(CONTROL_MSG.CONNECTED));
      })();
      return () => {
        Object.keys(subscriptions).map((modelName) => {
          subscriptions[modelName][TransformerMutationType.CREATE].forEach((subscription) => subscription.unsubscribe());
          subscriptions[modelName][TransformerMutationType.UPDATE].forEach((subscription) => subscription.unsubscribe());
          subscriptions[modelName][TransformerMutationType.DELETE].forEach((subscription) => subscription.unsubscribe());
        });
      };
    });
    const dataObservable = new bundle_esm_default((observer) => {
      this.dataObserver = observer;
      this.drainBuffer();
      return () => {
        this.dataObserver = null;
      };
    });
    return [ctlObservable, dataObservable];
  }
  passesPredicateValidation(record, predicatesGroup) {
    if (!predicatesGroup) {
      return true;
    }
    const { predicates, type } = predicatesGroup;
    return validatePredicate(record, type, predicates);
  }
  pushToBuffer(transformerMutationType, modelDefinition, data) {
    this.buffer.push([transformerMutationType, modelDefinition, data]);
  }
  drainBuffer() {
    if (this.dataObserver) {
      this.buffer.forEach((data) => this.dataObserver.next(data));
      this.buffer = [];
    }
  }
};

// src/sync/processors/sync.ts
import API3 from "http://localhost:8080/packages/api/4.0.22/api-esm.js";
import {
  jitteredExponentialRetry as jitteredExponentialRetry2,
  ConsoleLogger as Logger10,
  Hub as Hub2,
  NonRetryableError as NonRetryableError2
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var opResultDefaults = {
  items: [],
  nextToken: null,
  startedAt: null
};
var logger10 = new Logger10("DataStore");
var SyncProcessor = class {
  constructor(schema2, syncPredicates, amplifyConfig = {}, authModeStrategy) {
    this.schema = schema2;
    this.syncPredicates = syncPredicates;
    this.amplifyConfig = amplifyConfig;
    this.authModeStrategy = authModeStrategy;
    this.typeQuery = new WeakMap();
    this.generateQueries();
  }
  generateQueries() {
    Object.values(this.schema.namespaces).forEach((namespace) => {
      Object.values(namespace.models).filter(({ syncable }) => syncable).forEach((model) => {
        const [[, ...opNameQuery]] = buildGraphQLOperation(namespace, model, "LIST");
        this.typeQuery.set(model, opNameQuery);
      });
    });
  }
  graphqlFilterFromPredicate(model) {
    if (!this.syncPredicates) {
      return null;
    }
    const predicatesGroup = ModelPredicateCreator.getPredicates(this.syncPredicates.get(model), false);
    if (!predicatesGroup) {
      return null;
    }
    return predicateToGraphQLFilter(predicatesGroup);
  }
  async retrievePage(modelDefinition, lastSync, nextToken, limit = null, filter) {
    const [opName, query] = this.typeQuery.get(modelDefinition);
    const variables = {
      limit,
      nextToken,
      lastSync,
      filter
    };
    const modelAuthModes = await getModelAuthModes({
      authModeStrategy: this.authModeStrategy,
      defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
      modelName: modelDefinition.name,
      schema: this.schema
    });
    const readAuthModes = modelAuthModes.READ;
    let authModeAttempts = 0;
    const authModeRetry = async () => {
      try {
        logger10.debug(`Attempting sync with authMode: ${readAuthModes[authModeAttempts]}`);
        const response = await this.jitteredRetry({
          query,
          variables,
          opName,
          modelDefinition,
          authMode: readAuthModes[authModeAttempts]
        });
        logger10.debug(`Sync successful with authMode: ${readAuthModes[authModeAttempts]}`);
        return response;
      } catch (error) {
        authModeAttempts++;
        if (authModeAttempts >= readAuthModes.length) {
          const authMode = readAuthModes[authModeAttempts - 1];
          logger10.debug(`Sync failed with authMode: ${authMode}`, error);
          if (getClientSideAuthError(error) || getForbiddenError(error)) {
            logger10.warn(`User is unauthorized to query ${opName} with auth mode ${authMode}. No data could be returned.`);
            return {
              data: {
                [opName]: opResultDefaults
              }
            };
          }
          throw error;
        }
        logger10.debug(`Sync failed with authMode: ${readAuthModes[authModeAttempts - 1]}. Retrying with authMode: ${readAuthModes[authModeAttempts]}`);
        return await authModeRetry();
      }
    };
    const { data } = await authModeRetry();
    const { [opName]: opResult } = data;
    const { items, nextToken: newNextToken, startedAt } = opResult;
    return {
      nextToken: newNextToken,
      startedAt,
      items
    };
  }
  partialDataFeatureFlagEnabled() {
    try {
      const flag = sessionStorage.getItem("datastorePartialData");
      return Boolean(flag);
    } catch (e) {
      return false;
    }
  }
  async jitteredRetry({
    query,
    variables,
    opName,
    modelDefinition,
    authMode
  }) {
    return await jitteredExponentialRetry2(async (query2, variables2) => {
      try {
        const authToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
        return await API3.graphql({
          query: query2,
          variables: variables2,
          authMode,
          authToken
        });
      } catch (error) {
        const clientOrForbiddenErrorMessage = getClientSideAuthError(error) || getForbiddenError(error);
        if (clientOrForbiddenErrorMessage) {
          throw new NonRetryableError2(clientOrForbiddenErrorMessage);
        }
        const hasItems = Boolean(error && error.data && error.data[opName] && error.data[opName].items);
        if (this.partialDataFeatureFlagEnabled()) {
          if (hasItems) {
            const result = error;
            result.data[opName].items = result.data[opName].items.filter((item) => item !== null);
            if (error.errors) {
              Hub2.dispatch("datastore", {
                event: "syncQueriesPartialSyncError",
                data: {
                  errors: error.errors,
                  modelName: modelDefinition.name
                }
              });
            }
            return result;
          } else {
            throw error;
          }
        }
        const unauthorized = error && error.errors && error.errors.some((err) => err.errorType === "Unauthorized");
        if (unauthorized) {
          const result = error;
          if (hasItems) {
            result.data[opName].items = result.data[opName].items.filter((item) => item !== null);
          } else {
            result.data[opName] = {
              ...opResultDefaults,
              ...result.data[opName]
            };
          }
          logger10.warn("queryError", `User is unauthorized to query ${opName}, some items could not be returned.`);
          return result;
        } else {
          throw error;
        }
      }
    }, [query, variables]);
  }
  start(typesLastSync) {
    let processing = true;
    const { maxRecordsToSync, syncPageSize } = this.amplifyConfig;
    const parentPromises = new Map();
    const observable = new bundle_esm_default((observer) => {
      const sortedTypesLastSyncs = Object.values(this.schema.namespaces).reduce((map, namespace) => {
        for (const modelName of Array.from(namespace.modelTopologicalOrdering.keys())) {
          const typeLastSync = typesLastSync.get(namespace.models[modelName]);
          map.set(namespace.models[modelName], typeLastSync);
        }
        return map;
      }, new Map());
      const allModelsReady = Array.from(sortedTypesLastSyncs.entries()).filter(([{ syncable }]) => syncable).map(async ([modelDefinition, [namespace, lastSync]]) => {
        let done = false;
        let nextToken = null;
        let startedAt = null;
        let items = null;
        let recordsReceived = 0;
        const filter = this.graphqlFilterFromPredicate(modelDefinition);
        const parents = this.schema.namespaces[namespace].modelTopologicalOrdering.get(modelDefinition.name);
        const promises = parents.map((parent) => parentPromises.get(`${namespace}_${parent}`));
        const promise = new Promise(async (res) => {
          await Promise.all(promises);
          do {
            if (!processing) {
              return;
            }
            const limit = Math.min(maxRecordsToSync - recordsReceived, syncPageSize);
            ({ items, nextToken, startedAt } = await this.retrievePage(modelDefinition, lastSync, nextToken, limit, filter));
            recordsReceived += items.length;
            done = nextToken === null || recordsReceived >= maxRecordsToSync;
            observer.next({
              namespace,
              modelDefinition,
              items,
              done,
              startedAt,
              isFullSync: !lastSync
            });
          } while (!done);
          res();
        });
        parentPromises.set(`${namespace}_${modelDefinition.name}`, promise);
        await promise;
      });
      Promise.all(allModelsReady).then(() => {
        observer.complete();
      });
      return () => {
        processing = false;
      };
    });
    return observable;
  }
};

// src/sync/index.ts
var { isNode } = browserOrNode2();
var logger11 = new Logger11("DataStore");
var ownSymbol = Symbol("sync");
var ControlMessage;
(function(ControlMessage2) {
  ControlMessage2["SYNC_ENGINE_STORAGE_SUBSCRIBED"] = "storageSubscribed";
  ControlMessage2["SYNC_ENGINE_SUBSCRIPTIONS_ESTABLISHED"] = "subscriptionsEstablished";
  ControlMessage2["SYNC_ENGINE_SYNC_QUERIES_STARTED"] = "syncQueriesStarted";
  ControlMessage2["SYNC_ENGINE_SYNC_QUERIES_READY"] = "syncQueriesReady";
  ControlMessage2["SYNC_ENGINE_MODEL_SYNCED"] = "modelSynced";
  ControlMessage2["SYNC_ENGINE_OUTBOX_MUTATION_ENQUEUED"] = "outboxMutationEnqueued";
  ControlMessage2["SYNC_ENGINE_OUTBOX_MUTATION_PROCESSED"] = "outboxMutationProcessed";
  ControlMessage2["SYNC_ENGINE_OUTBOX_STATUS"] = "outboxStatus";
  ControlMessage2["SYNC_ENGINE_NETWORK_STATUS"] = "networkStatus";
  ControlMessage2["SYNC_ENGINE_READY"] = "ready";
})(ControlMessage || (ControlMessage = {}));
var SyncEngine = class {
  constructor(schema2, namespaceResolver2, modelClasses, userModelClasses, storage, modelInstanceCreator2, maxRecordsToSync, syncPageSize, conflictHandler, errorHandler, syncPredicates, amplifyConfig = {}, authModeStrategy) {
    this.schema = schema2;
    this.namespaceResolver = namespaceResolver2;
    this.modelClasses = modelClasses;
    this.userModelClasses = userModelClasses;
    this.storage = storage;
    this.modelInstanceCreator = modelInstanceCreator2;
    this.maxRecordsToSync = maxRecordsToSync;
    this.syncPageSize = syncPageSize;
    this.syncPredicates = syncPredicates;
    this.amplifyConfig = amplifyConfig;
    this.authModeStrategy = authModeStrategy;
    this.online = false;
    this.modelSyncedStatus = new WeakMap();
    const MutationEvent = this.modelClasses["MutationEvent"];
    this.outbox = new MutationEventOutbox(this.schema, MutationEvent, modelInstanceCreator2, ownSymbol);
    this.modelMerger = new ModelMerger(this.outbox, ownSymbol);
    this.syncQueriesProcessor = new SyncProcessor(this.schema, this.syncPredicates, this.amplifyConfig, this.authModeStrategy);
    this.subscriptionsProcessor = new SubscriptionProcessor(this.schema, this.syncPredicates, this.amplifyConfig, this.authModeStrategy);
    this.mutationsProcessor = new MutationProcessor(this.schema, this.storage, this.userModelClasses, this.outbox, this.modelInstanceCreator, MutationEvent, this.amplifyConfig, this.authModeStrategy, conflictHandler, errorHandler);
    this.datastoreConnectivity = new DataStoreConnectivity();
  }
  getModelSyncedStatus(modelConstructor) {
    return this.modelSyncedStatus.get(modelConstructor);
  }
  start(params) {
    return new bundle_esm_default((observer) => {
      logger11.log("starting sync engine...");
      let subscriptions = [];
      (async () => {
        try {
          await this.setupModels(params);
        } catch (err) {
          observer.error(err);
          return;
        }
        const startPromise = new Promise((resolve) => {
          this.datastoreConnectivity.status().subscribe(async ({ online }) => {
            if (online && !this.online) {
              this.online = online;
              observer.next({
                type: ControlMessage.SYNC_ENGINE_NETWORK_STATUS,
                data: {
                  active: this.online
                }
              });
              let ctlSubsObservable;
              let dataSubsObservable;
              if (isNode) {
                logger11.warn("Realtime disabled when in a server-side environment");
              } else {
                [
                  ctlSubsObservable,
                  dataSubsObservable
                ] = this.subscriptionsProcessor.start();
                try {
                  await new Promise((resolve2, reject) => {
                    const ctlSubsSubscription = ctlSubsObservable.subscribe({
                      next: (msg) => {
                        if (msg === CONTROL_MSG.CONNECTED) {
                          resolve2();
                        }
                      },
                      error: (err) => {
                        reject(err);
                        const handleDisconnect = this.disconnectionHandler();
                        handleDisconnect(err);
                      }
                    });
                    subscriptions.push(ctlSubsSubscription);
                  });
                } catch (err) {
                  observer.error(err);
                  return;
                }
                logger11.log("Realtime ready");
                observer.next({
                  type: ControlMessage.SYNC_ENGINE_SUBSCRIPTIONS_ESTABLISHED
                });
              }
              try {
                await new Promise((resolve2, reject) => {
                  const syncQuerySubscription = this.syncQueriesObservable().subscribe({
                    next: (message) => {
                      const { type } = message;
                      if (type === ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY) {
                        resolve2();
                      }
                      observer.next(message);
                    },
                    complete: () => {
                      resolve2();
                    },
                    error: (error) => {
                      reject(error);
                    }
                  });
                  if (syncQuerySubscription) {
                    subscriptions.push(syncQuerySubscription);
                  }
                });
              } catch (error) {
                observer.error(error);
                return;
              }
              subscriptions.push(this.mutationsProcessor.start().subscribe(({ modelDefinition, model: item, hasMore }) => {
                const modelConstructor = this.userModelClasses[modelDefinition.name];
                const model = this.modelInstanceCreator(modelConstructor, item);
                this.storage.runExclusive((storage) => this.modelMerger.merge(storage, model));
                observer.next({
                  type: ControlMessage.SYNC_ENGINE_OUTBOX_MUTATION_PROCESSED,
                  data: {
                    model: modelConstructor,
                    element: model
                  }
                });
                observer.next({
                  type: ControlMessage.SYNC_ENGINE_OUTBOX_STATUS,
                  data: {
                    isEmpty: !hasMore
                  }
                });
              }));
              if (!isNode) {
                subscriptions.push(dataSubsObservable.subscribe(([_transformerMutationType, modelDefinition, item]) => {
                  const modelConstructor = this.userModelClasses[modelDefinition.name];
                  const model = this.modelInstanceCreator(modelConstructor, item);
                  this.storage.runExclusive((storage) => this.modelMerger.merge(storage, model));
                }));
              }
            } else if (!online) {
              this.online = online;
              observer.next({
                type: ControlMessage.SYNC_ENGINE_NETWORK_STATUS,
                data: {
                  active: this.online
                }
              });
              subscriptions.forEach((sub) => sub.unsubscribe());
              subscriptions = [];
            }
            resolve();
          });
        });
        this.storage.observe(null, null, ownSymbol).filter(({ model }) => {
          const modelDefinition = this.getModelDefinition(model);
          return modelDefinition.syncable === true;
        }).subscribe({
          next: async ({ opType, model, element, condition }) => {
            const namespace = this.schema.namespaces[this.namespaceResolver(model)];
            const MutationEventConstructor = this.modelClasses["MutationEvent"];
            const graphQLCondition = predicateToGraphQLCondition(condition);
            const mutationEvent = createMutationInstanceFromModelOperation(namespace.relationships, this.getModelDefinition(model), opType, model, element, graphQLCondition, MutationEventConstructor, this.modelInstanceCreator);
            await this.outbox.enqueue(this.storage, mutationEvent);
            observer.next({
              type: ControlMessage.SYNC_ENGINE_OUTBOX_MUTATION_ENQUEUED,
              data: {
                model,
                element
              }
            });
            observer.next({
              type: ControlMessage.SYNC_ENGINE_OUTBOX_STATUS,
              data: {
                isEmpty: false
              }
            });
            await startPromise;
            if (this.online) {
              this.mutationsProcessor.resume();
            }
          }
        });
        observer.next({
          type: ControlMessage.SYNC_ENGINE_STORAGE_SUBSCRIBED
        });
        const hasMutationsInOutbox = await this.outbox.peek(this.storage) === void 0;
        observer.next({
          type: ControlMessage.SYNC_ENGINE_OUTBOX_STATUS,
          data: {
            isEmpty: hasMutationsInOutbox
          }
        });
        await startPromise;
        observer.next({
          type: ControlMessage.SYNC_ENGINE_READY
        });
      })();
      return () => {
        subscriptions.forEach((sub) => sub.unsubscribe());
      };
    });
  }
  async getModelsMetadataWithNextFullSync(currentTimeStamp) {
    const modelLastSync = new Map((await this.getModelsMetadata()).map(({
      namespace,
      model,
      lastSync,
      lastFullSync,
      fullSyncInterval,
      lastSyncPredicate
    }) => {
      const nextFullSync = lastFullSync + fullSyncInterval;
      const syncFrom = !lastFullSync || nextFullSync < currentTimeStamp ? 0 : lastSync;
      return [
        this.schema.namespaces[namespace].models[model],
        [namespace, syncFrom]
      ];
    }));
    return modelLastSync;
  }
  syncQueriesObservable() {
    if (!this.online) {
      return bundle_esm_default.of();
    }
    return new bundle_esm_default((observer) => {
      let syncQueriesSubscription;
      let waitTimeoutId;
      (async () => {
        while (!observer.closed) {
          const count = new WeakMap();
          const modelLastSync = await this.getModelsMetadataWithNextFullSync(Date.now());
          const paginatingModels = new Set(modelLastSync.keys());
          let newestFullSyncStartedAt;
          let theInterval;
          let start;
          let duration;
          let newestStartedAt;
          await new Promise((resolve) => {
            syncQueriesSubscription = this.syncQueriesProcessor.start(modelLastSync).subscribe({
              next: async ({
                namespace,
                modelDefinition,
                items,
                done,
                startedAt,
                isFullSync
              }) => {
                const modelConstructor = this.userModelClasses[modelDefinition.name];
                if (!count.has(modelConstructor)) {
                  count.set(modelConstructor, {
                    new: 0,
                    updated: 0,
                    deleted: 0
                  });
                  start = getNow();
                  newestStartedAt = newestStartedAt === void 0 ? startedAt : Math.max(newestStartedAt, startedAt);
                }
                await this.storage.runExclusive(async (storage) => {
                  const idsInOutbox = await this.outbox.getModelIds(storage);
                  const oneByOne = [];
                  const page = items.filter((item) => {
                    if (!idsInOutbox.has(item.id)) {
                      return true;
                    }
                    oneByOne.push(item);
                    return false;
                  });
                  const opTypeCount = [];
                  for (const item of oneByOne) {
                    const opType = await this.modelMerger.merge(storage, item);
                    if (opType !== void 0) {
                      opTypeCount.push([item, opType]);
                    }
                  }
                  opTypeCount.push(...await this.modelMerger.mergePage(storage, modelConstructor, page));
                  const counts = count.get(modelConstructor);
                  opTypeCount.forEach(([, opType]) => {
                    switch (opType) {
                      case OpType.INSERT:
                        counts.new++;
                        break;
                      case OpType.UPDATE:
                        counts.updated++;
                        break;
                      case OpType.DELETE:
                        counts.deleted++;
                        break;
                      default:
                        exhaustiveCheck(opType);
                    }
                  });
                });
                if (done) {
                  const { name: modelName } = modelDefinition;
                  let modelMetadata = await this.getModelMetadata(namespace, modelName);
                  const { lastFullSync, fullSyncInterval } = modelMetadata;
                  theInterval = fullSyncInterval;
                  newestFullSyncStartedAt = newestFullSyncStartedAt === void 0 ? lastFullSync : Math.max(newestFullSyncStartedAt, isFullSync ? startedAt : lastFullSync);
                  modelMetadata = this.modelClasses.ModelMetadata.copyOf(modelMetadata, (draft) => {
                    draft.lastSync = startedAt;
                    draft.lastFullSync = isFullSync ? startedAt : modelMetadata.lastFullSync;
                  });
                  await this.storage.save(modelMetadata, void 0, ownSymbol);
                  const counts = count.get(modelConstructor);
                  this.modelSyncedStatus.set(modelConstructor, true);
                  observer.next({
                    type: ControlMessage.SYNC_ENGINE_MODEL_SYNCED,
                    data: {
                      model: modelConstructor,
                      isFullSync,
                      isDeltaSync: !isFullSync,
                      counts
                    }
                  });
                  paginatingModels.delete(modelDefinition);
                  if (paginatingModels.size === 0) {
                    duration = getNow() - start;
                    resolve();
                    observer.next({
                      type: ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY
                    });
                    syncQueriesSubscription.unsubscribe();
                  }
                }
              },
              error: (error) => {
                observer.error(error);
              }
            });
            observer.next({
              type: ControlMessage.SYNC_ENGINE_SYNC_QUERIES_STARTED,
              data: {
                models: Array.from(paginatingModels).map(({ name }) => name)
              }
            });
          });
          const msNextFullSync = newestFullSyncStartedAt + theInterval - (newestStartedAt + duration);
          logger11.debug(`Next fullSync in ${msNextFullSync / 1e3} seconds. (${new Date(Date.now() + msNextFullSync)})`);
          await new Promise((res) => {
            waitTimeoutId = setTimeout(res, msNextFullSync);
          });
        }
      })();
      return () => {
        if (syncQueriesSubscription) {
          syncQueriesSubscription.unsubscribe();
        }
        if (waitTimeoutId) {
          clearTimeout(waitTimeoutId);
        }
      };
    });
  }
  disconnectionHandler() {
    return (msg) => {
      if (PUBSUB_CONTROL_MSG2.CONNECTION_CLOSED === msg || PUBSUB_CONTROL_MSG2.TIMEOUT_DISCONNECT === msg) {
        this.datastoreConnectivity.socketDisconnected();
      }
    };
  }
  unsubscribeConnectivity() {
    this.datastoreConnectivity.unsubscribe();
  }
  async setupModels(params) {
    const { fullSyncInterval } = params;
    const ModelMetadata = this.modelClasses.ModelMetadata;
    const models = [];
    let savedModel;
    Object.values(this.schema.namespaces).forEach((namespace) => {
      Object.values(namespace.models).filter(({ syncable }) => syncable).forEach((model) => {
        models.push([namespace.name, model]);
        if (namespace.name === USER) {
          const modelConstructor = this.userModelClasses[model.name];
          this.modelSyncedStatus.set(modelConstructor, false);
        }
      });
    });
    const promises = models.map(async ([namespace, model]) => {
      const modelMetadata = await this.getModelMetadata(namespace, model.name);
      const syncPredicate = ModelPredicateCreator.getPredicates(this.syncPredicates.get(model), false);
      const lastSyncPredicate = syncPredicate ? JSON.stringify(syncPredicate) : null;
      if (modelMetadata === void 0) {
        [[savedModel]] = await this.storage.save(this.modelInstanceCreator(ModelMetadata, {
          model: model.name,
          namespace,
          lastSync: null,
          fullSyncInterval,
          lastFullSync: null,
          lastSyncPredicate
        }), void 0, ownSymbol);
      } else {
        const prevSyncPredicate = modelMetadata.lastSyncPredicate ? modelMetadata.lastSyncPredicate : null;
        const syncPredicateUpdated = prevSyncPredicate !== lastSyncPredicate;
        [[savedModel]] = await this.storage.save(this.modelClasses.ModelMetadata.copyOf(modelMetadata, (draft) => {
          draft.fullSyncInterval = fullSyncInterval;
          if (syncPredicateUpdated) {
            draft.lastSync = null;
            draft.lastFullSync = null;
            draft.lastSyncPredicate = lastSyncPredicate;
          }
        }));
      }
      return savedModel;
    });
    const result = {};
    for (const modelMetadata of await Promise.all(promises)) {
      const { model: modelName } = modelMetadata;
      result[modelName] = modelMetadata;
    }
    return result;
  }
  async getModelsMetadata() {
    const ModelMetadata = this.modelClasses.ModelMetadata;
    const modelsMetadata = await this.storage.query(ModelMetadata);
    return modelsMetadata;
  }
  async getModelMetadata(namespace, model) {
    const ModelMetadata = this.modelClasses.ModelMetadata;
    const predicate = ModelPredicateCreator.createFromExisting(this.schema.namespaces[SYNC].models[ModelMetadata.name], (c2) => c2.namespace("eq", namespace).model("eq", model));
    const [modelMetadata] = await this.storage.query(ModelMetadata, predicate, {
      page: 0,
      limit: 1
    });
    return modelMetadata;
  }
  getModelDefinition(modelConstructor) {
    const namespaceName = this.namespaceResolver(modelConstructor);
    const modelDefinition = this.schema.namespaces[namespaceName].models[modelConstructor.name];
    return modelDefinition;
  }
  static getNamespace() {
    const namespace = {
      name: SYNC,
      relationships: {},
      enums: {
        OperationType: {
          name: "OperationType",
          values: ["CREATE", "UPDATE", "DELETE"]
        }
      },
      nonModels: {},
      models: {
        MutationEvent: {
          name: "MutationEvent",
          pluralName: "MutationEvents",
          syncable: false,
          fields: {
            id: {
              name: "id",
              type: "ID",
              isRequired: true,
              isArray: false
            },
            model: {
              name: "model",
              type: "String",
              isRequired: true,
              isArray: false
            },
            data: {
              name: "data",
              type: "String",
              isRequired: true,
              isArray: false
            },
            modelId: {
              name: "modelId",
              type: "String",
              isRequired: true,
              isArray: false
            },
            operation: {
              name: "operation",
              type: {
                enum: "Operationtype"
              },
              isArray: false,
              isRequired: true
            },
            condition: {
              name: "condition",
              type: "String",
              isArray: false,
              isRequired: true
            }
          }
        },
        ModelMetadata: {
          name: "ModelMetadata",
          pluralName: "ModelsMetadata",
          syncable: false,
          fields: {
            id: {
              name: "id",
              type: "ID",
              isRequired: true,
              isArray: false
            },
            namespace: {
              name: "namespace",
              type: "String",
              isRequired: true,
              isArray: false
            },
            model: {
              name: "model",
              type: "String",
              isRequired: true,
              isArray: false
            },
            lastSync: {
              name: "lastSync",
              type: "Int",
              isRequired: false,
              isArray: false
            },
            lastFullSync: {
              name: "lastFullSync",
              type: "Int",
              isRequired: false,
              isArray: false
            },
            fullSyncInterval: {
              name: "fullSyncInterval",
              type: "Int",
              isRequired: true,
              isArray: false
            },
            lastSyncPredicate: {
              name: "lastSyncPredicate",
              type: "String",
              isRequired: false,
              isArray: false
            }
          }
        }
      }
    };
    return namespace;
  }
};

// src/datastore/datastore.ts
sn(true);
T();
var logger12 = new Logger12("DataStore");
var ulid2 = monotonicUlidFactory(Date.now());
var { isNode: isNode2 } = JS.browserOrNode();
var SETTING_SCHEMA_VERSION = "schemaVersion";
var schema;
var modelNamespaceMap = new WeakMap();
var modelPatchesMap = new WeakMap();
var getModelDefinition = (modelConstructor) => {
  const namespace = modelNamespaceMap.get(modelConstructor);
  return schema.namespaces[namespace].models[modelConstructor.name];
};
var isValidModelConstructor = (obj) => {
  return isModelConstructor(obj) && modelNamespaceMap.has(obj);
};
var namespaceResolver = (modelConstructor) => modelNamespaceMap.get(modelConstructor);
var syncClasses;
var userClasses;
var dataStoreClasses;
var storageClasses;
var initSchema = (userSchema) => {
  if (schema !== void 0) {
    console.warn("The schema has already been initialized");
    return userClasses;
  }
  logger12.log("validating schema", { schema: userSchema });
  const internalUserNamespace = {
    name: USER,
    ...userSchema
  };
  logger12.log("DataStore", "Init models");
  userClasses = createTypeClasses(internalUserNamespace);
  logger12.log("DataStore", "Models initialized");
  const dataStoreNamespace = getNamespace();
  const storageNamespace = ExclusiveStorage.getNamespace();
  const syncNamespace = SyncEngine.getNamespace();
  dataStoreClasses = createTypeClasses(dataStoreNamespace);
  storageClasses = createTypeClasses(storageNamespace);
  syncClasses = createTypeClasses(syncNamespace);
  schema = {
    namespaces: {
      [dataStoreNamespace.name]: dataStoreNamespace,
      [internalUserNamespace.name]: internalUserNamespace,
      [storageNamespace.name]: storageNamespace,
      [syncNamespace.name]: syncNamespace
    },
    version: userSchema.version
  };
  Object.keys(schema.namespaces).forEach((namespace) => {
    const [relations, keys] = establishRelationAndKeys(schema.namespaces[namespace]);
    schema.namespaces[namespace].relationships = relations;
    schema.namespaces[namespace].keys = keys;
    const modelAssociations = new Map();
    Object.values(schema.namespaces[namespace].models).forEach((model) => {
      const connectedModels = [];
      Object.values(model.fields).filter((field) => field.association && field.association.connectionType === "BELONGS_TO" && field.type.model !== model.name).forEach((field) => connectedModels.push(field.type.model));
      modelAssociations.set(model.name, connectedModels);
    });
    const result = new Map();
    let count = 1e3;
    while (count > 0) {
      if (modelAssociations.size === 0) {
        break;
      }
      count--;
      if (count === 0) {
        throw new Error("Models are not topologically sortable. Please verify your schema.");
      }
      for (const modelName of Array.from(modelAssociations.keys())) {
        const parents = modelAssociations.get(modelName);
        if (parents.every((x2) => result.has(x2))) {
          result.set(modelName, parents);
        }
      }
      Array.from(result.keys()).forEach((x2) => modelAssociations.delete(x2));
    }
    schema.namespaces[namespace].modelTopologicalOrdering = result;
  });
  return userClasses;
};
var createTypeClasses = (namespace) => {
  const classes = {};
  Object.entries(namespace.models).forEach(([modelName, modelDefinition]) => {
    const clazz = createModelClass(modelDefinition);
    classes[modelName] = clazz;
    modelNamespaceMap.set(clazz, namespace.name);
  });
  Object.entries(namespace.nonModels || {}).forEach(([typeName, typeDefinition]) => {
    const clazz = createNonModelClass(typeDefinition);
    classes[typeName] = clazz;
  });
  return classes;
};
var instancesMetadata = new WeakSet();
function modelInstanceCreator(modelConstructor, init) {
  instancesMetadata.add(init);
  return new modelConstructor(init);
}
var validateModelFields = (modelDefinition) => (k2, v2) => {
  const fieldDefinition = modelDefinition.fields[k2];
  if (fieldDefinition !== void 0) {
    const {
      type,
      isRequired,
      isArrayNullable,
      name,
      isArray
    } = fieldDefinition;
    if ((!isArray && isRequired || isArray && !isArrayNullable) && (v2 === null || v2 === void 0)) {
      throw new Error(`Field ${name} is required`);
    }
    if (isGraphQLScalarType(type)) {
      const jsType = GraphQLScalarType.getJSType(type);
      const validateScalar = GraphQLScalarType.getValidationFunction(type);
      if (type === "AWSJSON") {
        if (typeof v2 === jsType) {
          return;
        }
        if (typeof v2 === "string") {
          try {
            JSON.parse(v2);
            return;
          } catch (error) {
            throw new Error(`Field ${name} is an invalid JSON object. ${v2}`);
          }
        }
      }
      if (isArray) {
        let errorTypeText = jsType;
        if (!isRequired) {
          errorTypeText = `${jsType} | null | undefined`;
        }
        if (!Array.isArray(v2) && !isArrayNullable) {
          throw new Error(`Field ${name} should be of type [${errorTypeText}], ${typeof v2} received. ${v2}`);
        }
        if (!isNullOrUndefined(v2) && v2.some((e) => isNullOrUndefined(e) ? isRequired : typeof e !== jsType)) {
          const elemTypes = v2.map((e) => e === null ? "null" : typeof e).join(",");
          throw new Error(`All elements in the ${name} array should be of type ${errorTypeText}, [${elemTypes}] received. ${v2}`);
        }
        if (validateScalar && !isNullOrUndefined(v2)) {
          const validationStatus = v2.map((e) => {
            if (!isNullOrUndefined(e)) {
              return validateScalar(e);
            } else if (isNullOrUndefined(e) && !isRequired) {
              return true;
            } else {
              return false;
            }
          });
          if (!validationStatus.every((s2) => s2)) {
            throw new Error(`All elements in the ${name} array should be of type ${type}, validation failed for one or more elements. ${v2}`);
          }
        }
      } else if (!isRequired && v2 === void 0) {
        return;
      } else if (typeof v2 !== jsType && v2 !== null) {
        throw new Error(`Field ${name} should be of type ${jsType}, ${typeof v2} received. ${v2}`);
      } else if (!isNullOrUndefined(v2) && validateScalar && !validateScalar(v2)) {
        throw new Error(`Field ${name} should be of type ${type}, validation failed. ${v2}`);
      }
    }
  }
};
var castInstanceType = (modelDefinition, k2, v2) => {
  const { isArray, type } = modelDefinition.fields[k2] || {};
  if (typeof v2 === "string" && (isArray || type === "AWSJSON" || isNonModelFieldType(type) || isModelFieldType(type))) {
    try {
      return JSON.parse(v2);
    } catch {
    }
  }
  if (typeof v2 === "number" && type === "Boolean") {
    return Boolean(v2);
  }
  return v2;
};
var initializeInstance = (init, modelDefinition, draft) => {
  const modelValidator = validateModelFields(modelDefinition);
  Object.entries(init).forEach(([k2, v2]) => {
    const parsedValue = castInstanceType(modelDefinition, k2, v2);
    modelValidator(k2, parsedValue);
    draft[k2] = parsedValue;
  });
};
var createModelClass = (modelDefinition) => {
  const clazz = class Model {
    constructor(init) {
      const instance2 = fn(this, (draft) => {
        initializeInstance(init, modelDefinition, draft);
        const modelInstanceMetadata = instancesMetadata.has(init) ? init : {};
        const {
          id: _id,
          _version,
          _lastChangedAt,
          _deleted
        } = modelInstanceMetadata;
        const isInternal = _id !== null && _id !== void 0;
        const id = isInternal ? _id : modelDefinition.syncable ? v4_default() : ulid2();
        if (!isInternal) {
          checkReadOnlyPropertyOnCreate(draft, modelDefinition);
        }
        draft.id = id;
        if (modelDefinition.syncable) {
          draft._version = _version;
          draft._lastChangedAt = _lastChangedAt;
          draft._deleted = _deleted;
        }
      });
      return instance2;
    }
    static copyOf(source, fn2) {
      const modelConstructor = Object.getPrototypeOf(source || {}).constructor;
      if (!isValidModelConstructor(modelConstructor)) {
        const msg = "The source object is not a valid model";
        logger12.error(msg, { source });
        throw new Error(msg);
      }
      let patches;
      const model = fn(source, (draft) => {
        fn2(draft);
        draft.id = source.id;
        const modelValidator = validateModelFields(modelDefinition);
        Object.entries(draft).forEach(([k2, v2]) => {
          const parsedValue = castInstanceType(modelDefinition, k2, v2);
          modelValidator(k2, parsedValue);
        });
      }, (p2) => patches = p2);
      if (patches.length) {
        modelPatchesMap.set(model, [patches, source]);
        checkReadOnlyPropertyOnUpdate(patches, modelDefinition);
      }
      return model;
    }
    static fromJSON(json) {
      if (Array.isArray(json)) {
        return json.map((init) => this.fromJSON(init));
      }
      const instance2 = modelInstanceCreator(clazz, json);
      const modelValidator = validateModelFields(modelDefinition);
      Object.entries(instance2).forEach(([k2, v2]) => {
        modelValidator(k2, v2);
      });
      return instance2;
    }
  };
  clazz[L] = true;
  Object.defineProperty(clazz, "name", { value: modelDefinition.name });
  return clazz;
};
var checkReadOnlyPropertyOnCreate = (draft, modelDefinition) => {
  const modelKeys = Object.keys(draft);
  const { fields } = modelDefinition;
  modelKeys.forEach((key) => {
    if (fields[key] && fields[key].isReadOnly) {
      throw new Error(`${key} is read-only.`);
    }
  });
};
var checkReadOnlyPropertyOnUpdate = (patches, modelDefinition) => {
  const patchArray = patches.map((p2) => [p2.path[0], p2.value]);
  const { fields } = modelDefinition;
  patchArray.forEach(([key, val]) => {
    if (!val || !fields[key])
      return;
    if (fields[key].isReadOnly) {
      throw new Error(`${key} is read-only.`);
    }
  });
};
var createNonModelClass = (typeDefinition) => {
  const clazz = class Model {
    constructor(init) {
      const instance2 = fn(this, (draft) => {
        initializeInstance(init, typeDefinition, draft);
      });
      return instance2;
    }
  };
  clazz[L] = true;
  Object.defineProperty(clazz, "name", { value: typeDefinition.name });
  registerNonModelClass(clazz);
  return clazz;
};
function isQueryOne(obj) {
  return typeof obj === "string";
}
function defaultConflictHandler(conflictData) {
  const { localModel, modelConstructor, remoteModel } = conflictData;
  const { _version } = remoteModel;
  return modelInstanceCreator(modelConstructor, { ...localModel, _version });
}
function defaultErrorHandler(error) {
  logger12.warn(error);
}
function getModelConstructorByModelName(namespaceName, modelName) {
  let result;
  switch (namespaceName) {
    case DATASTORE:
      result = dataStoreClasses[modelName];
      break;
    case USER:
      result = userClasses[modelName];
      break;
    case SYNC:
      result = syncClasses[modelName];
      break;
    case STORAGE:
      result = storageClasses[modelName];
      break;
    default:
      exhaustiveCheck(namespaceName);
      break;
  }
  if (isValidModelConstructor(result)) {
    return result;
  } else {
    const msg = `Model name is not valid for namespace. modelName: ${modelName}, namespace: ${namespaceName}`;
    logger12.error(msg);
    throw new Error(msg);
  }
}
async function checkSchemaVersion(storage, version2) {
  const Setting = dataStoreClasses.Setting;
  const modelDefinition = schema.namespaces[DATASTORE].models.Setting;
  await storage.runExclusive(async (s2) => {
    const [schemaVersionSetting] = await s2.query(Setting, ModelPredicateCreator.createFromExisting(modelDefinition, (c2) => c2.key("eq", SETTING_SCHEMA_VERSION)), { page: 0, limit: 1 });
    if (schemaVersionSetting !== void 0 && schemaVersionSetting.value !== void 0) {
      const storedValue = JSON.parse(schemaVersionSetting.value);
      if (storedValue !== version2) {
        await s2.clear(false);
      }
    } else {
      await s2.save(modelInstanceCreator(Setting, {
        key: SETTING_SCHEMA_VERSION,
        value: JSON.stringify(version2)
      }));
    }
  });
}
var syncSubscription;
function getNamespace() {
  const namespace = {
    name: DATASTORE,
    relationships: {},
    enums: {},
    nonModels: {},
    models: {
      Setting: {
        name: "Setting",
        pluralName: "Settings",
        syncable: false,
        fields: {
          id: {
            name: "id",
            type: "ID",
            isRequired: true,
            isArray: false
          },
          key: {
            name: "key",
            type: "String",
            isRequired: true,
            isArray: false
          },
          value: {
            name: "value",
            type: "String",
            isRequired: true,
            isArray: false
          }
        }
      }
    }
  };
  return namespace;
}
var DataStore = class {
  constructor() {
    this.amplifyConfig = {};
    this.syncPredicates = new WeakMap();
    this.start = async () => {
      if (this.initialized === void 0) {
        logger12.debug("Starting DataStore");
        this.initialized = new Promise((res, rej) => {
          this.initResolve = res;
          this.initReject = rej;
        });
      } else {
        await this.initialized;
        return;
      }
      this.storage = new ExclusiveStorage(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, this.storageAdapter, this.sessionId);
      await this.storage.init();
      await checkSchemaVersion(this.storage, schema.version);
      const { aws_appsync_graphqlEndpoint } = this.amplifyConfig;
      if (aws_appsync_graphqlEndpoint) {
        logger12.debug("GraphQL endpoint available", aws_appsync_graphqlEndpoint);
        this.syncPredicates = await this.processSyncExpressions();
        this.sync = new SyncEngine(schema, namespaceResolver, syncClasses, userClasses, this.storage, modelInstanceCreator, this.maxRecordsToSync, this.syncPageSize, this.conflictHandler, this.errorHandler, this.syncPredicates, this.amplifyConfig, this.authModeStrategy);
        const fullSyncIntervalInMilliseconds = this.fullSyncInterval * 1e3 * 60;
        syncSubscription = this.sync.start({ fullSyncInterval: fullSyncIntervalInMilliseconds }).subscribe({
          next: ({ type, data }) => {
            const readyType = isNode2 ? ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY : ControlMessage.SYNC_ENGINE_STORAGE_SUBSCRIBED;
            if (type === readyType) {
              this.initResolve();
            }
            Hub3.dispatch("datastore", {
              event: type,
              data
            });
          },
          error: (err) => {
            logger12.warn("Sync error", err);
            this.initReject();
          }
        });
      } else {
        logger12.warn("Data won't be synchronized. No GraphQL endpoint configured. Did you forget `Amplify.configure(awsconfig)`?", {
          config: this.amplifyConfig
        });
        this.initResolve();
      }
      await this.initialized;
    };
    this.query = async (modelConstructor, idOrCriteria, paginationProducer) => {
      await this.start();
      if (!isValidModelConstructor(modelConstructor)) {
        const msg = "Constructor is not for a valid model";
        logger12.error(msg, { modelConstructor });
        throw new Error(msg);
      }
      if (typeof idOrCriteria === "string") {
        if (paginationProducer !== void 0) {
          logger12.warn("Pagination is ignored when querying by id");
        }
      }
      const modelDefinition = getModelDefinition(modelConstructor);
      let predicate;
      if (isQueryOne(idOrCriteria)) {
        predicate = ModelPredicateCreator.createForId(modelDefinition, idOrCriteria);
      } else {
        if (isPredicatesAll(idOrCriteria)) {
          predicate = void 0;
        } else {
          predicate = ModelPredicateCreator.createFromExisting(modelDefinition, idOrCriteria);
        }
      }
      const pagination = this.processPagination(modelDefinition, paginationProducer);
      logger12.debug("params ready", {
        modelConstructor,
        predicate: ModelPredicateCreator.getPredicates(predicate, false),
        pagination: {
          ...pagination,
          sort: ModelSortPredicateCreator.getPredicates(pagination && pagination.sort, false)
        }
      });
      const result = await this.storage.query(modelConstructor, predicate, pagination);
      return isQueryOne(idOrCriteria) ? result[0] : result;
    };
    this.save = async (model, condition) => {
      await this.start();
      const patchesTuple = modelPatchesMap.get(model);
      const modelConstructor = model ? model.constructor : void 0;
      if (!isValidModelConstructor(modelConstructor)) {
        const msg = "Object is not an instance of a valid model";
        logger12.error(msg, { model });
        throw new Error(msg);
      }
      const modelDefinition = getModelDefinition(modelConstructor);
      const producedCondition = ModelPredicateCreator.createFromExisting(modelDefinition, condition);
      const [savedModel] = await this.storage.runExclusive(async (s2) => {
        await s2.save(model, producedCondition, void 0, patchesTuple);
        return s2.query(modelConstructor, ModelPredicateCreator.createForId(modelDefinition, model.id));
      });
      return savedModel;
    };
    this.setConflictHandler = (config) => {
      const { DataStore: configDataStore } = config;
      const conflictHandlerIsDefault = () => this.conflictHandler === defaultConflictHandler;
      if (configDataStore && configDataStore.conflictHandler) {
        return configDataStore.conflictHandler;
      }
      if (conflictHandlerIsDefault() && config.conflictHandler) {
        return config.conflictHandler;
      }
      return this.conflictHandler || defaultConflictHandler;
    };
    this.setErrorHandler = (config) => {
      const { DataStore: configDataStore } = config;
      const errorHandlerIsDefault = () => this.errorHandler === defaultErrorHandler;
      if (configDataStore && configDataStore.errorHandler) {
        return configDataStore.errorHandler;
      }
      if (errorHandlerIsDefault() && config.errorHandler) {
        return config.errorHandler;
      }
      return this.errorHandler || defaultErrorHandler;
    };
    this.delete = async (modelOrConstructor, idOrCriteria) => {
      await this.start();
      let condition;
      if (!modelOrConstructor) {
        const msg = "Model or Model Constructor required";
        logger12.error(msg, { modelOrConstructor });
        throw new Error(msg);
      }
      if (isValidModelConstructor(modelOrConstructor)) {
        const modelConstructor = modelOrConstructor;
        if (!idOrCriteria) {
          const msg = "Id to delete or criteria required. Do you want to delete all? Pass Predicates.ALL";
          logger12.error(msg, { idOrCriteria });
          throw new Error(msg);
        }
        if (typeof idOrCriteria === "string") {
          condition = ModelPredicateCreator.createForId(getModelDefinition(modelConstructor), idOrCriteria);
        } else {
          condition = ModelPredicateCreator.createFromExisting(getModelDefinition(modelConstructor), idOrCriteria);
          if (!condition || !ModelPredicateCreator.isValidPredicate(condition)) {
            const msg = "Criteria required. Do you want to delete all? Pass Predicates.ALL";
            logger12.error(msg, { condition });
            throw new Error(msg);
          }
        }
        const [deleted] = await this.storage.delete(modelConstructor, condition);
        return deleted;
      } else {
        const model = modelOrConstructor;
        const modelConstructor = Object.getPrototypeOf(model || {}).constructor;
        if (!isValidModelConstructor(modelConstructor)) {
          const msg = "Object is not an instance of a valid model";
          logger12.error(msg, { model });
          throw new Error(msg);
        }
        const modelDefinition = getModelDefinition(modelConstructor);
        const idPredicate = ModelPredicateCreator.createForId(modelDefinition, model.id);
        if (idOrCriteria) {
          if (typeof idOrCriteria !== "function") {
            const msg = "Invalid criteria";
            logger12.error(msg, { idOrCriteria });
            throw new Error(msg);
          }
          condition = idOrCriteria(idPredicate);
        } else {
          condition = idPredicate;
        }
        const [[deleted]] = await this.storage.delete(model, condition);
        return deleted;
      }
    };
    this.observe = (modelOrConstructor, idOrCriteria) => {
      let predicate;
      const modelConstructor = modelOrConstructor && isValidModelConstructor(modelOrConstructor) ? modelOrConstructor : void 0;
      if (modelOrConstructor && modelConstructor === void 0) {
        const model = modelOrConstructor;
        const modelConstructor2 = model && Object.getPrototypeOf(model).constructor;
        if (isValidModelConstructor(modelConstructor2)) {
          if (idOrCriteria) {
            logger12.warn("idOrCriteria is ignored when using a model instance", {
              model,
              idOrCriteria
            });
          }
          return this.observe(modelConstructor2, model.id);
        } else {
          const msg = "The model is not an instance of a PersistentModelConstructor";
          logger12.error(msg, { model });
          throw new Error(msg);
        }
      }
      if (idOrCriteria !== void 0 && modelConstructor === void 0) {
        const msg = "Cannot provide criteria without a modelConstructor";
        logger12.error(msg, idOrCriteria);
        throw new Error(msg);
      }
      if (modelConstructor && !isValidModelConstructor(modelConstructor)) {
        const msg = "Constructor is not for a valid model";
        logger12.error(msg, { modelConstructor });
        throw new Error(msg);
      }
      if (typeof idOrCriteria === "string") {
        predicate = ModelPredicateCreator.createForId(getModelDefinition(modelConstructor), idOrCriteria);
      } else {
        predicate = modelConstructor && ModelPredicateCreator.createFromExisting(getModelDefinition(modelConstructor), idOrCriteria);
      }
      return new bundle_esm_default((observer) => {
        let handle;
        (async () => {
          await this.start();
          handle = this.storage.observe(modelConstructor, predicate).filter(({ model }) => namespaceResolver(model) === USER).subscribe(observer);
        })();
        return () => {
          if (handle) {
            handle.unsubscribe();
          }
        };
      });
    };
    this.observeQuery = (model, criteria, options) => {
      return new bundle_esm_default((observer) => {
        const items = new Map();
        const itemsChanged = new Map();
        let deletedItemIds = [];
        let handle;
        (async () => {
          try {
            (await this.query(model, criteria, options)).forEach((item) => items.set(item.id, item));
            handle = this.observe(model, criteria).subscribe(({ element, model: model2, opType }) => {
              if (opType === "DELETE") {
                deletedItemIds.push(element.id);
              } else {
                itemsChanged.set(element.id, element);
              }
              const isSynced = this.sync.getModelSyncedStatus(model2);
              if (itemsChanged.size - deletedItemIds.length >= this.syncPageSize || isSynced) {
                generateAndEmitSnapshot();
              }
            });
            generateAndEmitSnapshot();
          } catch (err) {
            observer.error(err);
          }
        })();
        const generateSnapshot = () => {
          const isSynced = this.sync.getModelSyncedStatus(model);
          const itemsArray = [
            ...Array.from(items.values()),
            ...Array.from(itemsChanged.values())
          ];
          if (options?.sort) {
            sortItems(itemsArray);
          }
          items.clear();
          itemsArray.forEach((item) => items.set(item.id, item));
          deletedItemIds.forEach((id) => items.delete(id));
          return {
            items: Array.from(items.values()),
            isSynced
          };
        };
        const emitSnapshot = (snapshot) => {
          observer.next(snapshot);
          itemsChanged.clear();
          deletedItemIds = [];
        };
        const generateAndEmitSnapshot = () => {
          const snapshot = generateSnapshot();
          emitSnapshot(snapshot);
        };
        const sortItems = (itemsToSort) => {
          const modelDefinition = getModelDefinition(model);
          const pagination = this.processPagination(modelDefinition, options);
          const sortPredicates = ModelSortPredicateCreator.getPredicates(pagination.sort);
          if (sortPredicates.length) {
            const compareFn = sortCompareFunction(sortPredicates);
            itemsToSort.sort(compareFn);
          }
        };
        const hubCallback = ({ payload }) => {
          const { event, data } = payload;
          if (event === ControlMessage.SYNC_ENGINE_MODEL_SYNCED && data?.model?.name === model.name) {
            generateAndEmitSnapshot();
            Hub3.remove("api", hubCallback);
          }
        };
        Hub3.listen("datastore", hubCallback);
        return () => {
          if (handle) {
            handle.unsubscribe();
          }
        };
      });
    };
    this.configure = (config = {}) => {
      const {
        DataStore: configDataStore,
        authModeStrategyType: configAuthModeStrategyType,
        conflictHandler: configConflictHandler,
        errorHandler: configErrorHandler,
        maxRecordsToSync: configMaxRecordsToSync,
        syncPageSize: configSyncPageSize,
        fullSyncInterval: configFullSyncInterval,
        syncExpressions: configSyncExpressions,
        authProviders: configAuthProviders,
        storageAdapter: configStorageAdapter,
        ...configFromAmplify
      } = config;
      this.amplifyConfig = {
        ...configFromAmplify,
        ...this.amplifyConfig
      };
      this.conflictHandler = this.setConflictHandler(config);
      this.errorHandler = this.setErrorHandler(config);
      const authModeStrategyType = configDataStore && configDataStore.authModeStrategyType || configAuthModeStrategyType || AuthModeStrategyType.DEFAULT;
      switch (authModeStrategyType) {
        case AuthModeStrategyType.MULTI_AUTH:
          this.authModeStrategy = multiAuthStrategy;
          break;
        case AuthModeStrategyType.DEFAULT:
          this.authModeStrategy = defaultAuthStrategy;
          break;
        default:
          this.authModeStrategy = defaultAuthStrategy;
          break;
      }
      this.amplifyConfig.authProviders = configDataStore && configDataStore.authProviders || configAuthProviders;
      this.syncExpressions = configDataStore && configDataStore.syncExpressions || this.syncExpressions || configSyncExpressions;
      this.maxRecordsToSync = configDataStore && configDataStore.maxRecordsToSync || configMaxRecordsToSync || 1e4;
      this.amplifyConfig.maxRecordsToSync = this.maxRecordsToSync;
      this.syncPageSize = configDataStore && configDataStore.syncPageSize || configSyncPageSize || 1e3;
      this.amplifyConfig.syncPageSize = this.syncPageSize;
      this.fullSyncInterval = configDataStore && configDataStore.fullSyncInterval || this.fullSyncInterval || configFullSyncInterval || 24 * 60;
      this.storageAdapter = configDataStore && configDataStore.storageAdapter || this.storageAdapter || configStorageAdapter || void 0;
      this.sessionId = this.retrieveSessionId();
    };
    this.clear = async function clear() {
      if (this.storage === void 0) {
        return;
      }
      if (syncSubscription && !syncSubscription.closed) {
        syncSubscription.unsubscribe();
      }
      await this.storage.clear();
      if (this.sync) {
        this.sync.unsubscribeConnectivity();
      }
      this.initialized = void 0;
      this.storage = void 0;
      this.sync = void 0;
      this.syncPredicates = new WeakMap();
    };
    this.stop = async function stop() {
      if (this.initialized !== void 0) {
        await this.start();
      }
      if (syncSubscription && !syncSubscription.closed) {
        syncSubscription.unsubscribe();
      }
      if (this.sync) {
        this.sync.unsubscribeConnectivity();
      }
      this.initialized = void 0;
      this.sync = void 0;
    };
  }
  getModuleName() {
    return "DataStore";
  }
  processPagination(modelDefinition, paginationProducer) {
    let sortPredicate;
    const { limit, page, sort } = paginationProducer || {};
    if (limit === void 0 && page === void 0 && sort === void 0) {
      return void 0;
    }
    if (page !== void 0 && limit === void 0) {
      throw new Error("Limit is required when requesting a page");
    }
    if (page !== void 0) {
      if (typeof page !== "number") {
        throw new Error("Page should be a number");
      }
      if (page < 0) {
        throw new Error("Page can't be negative");
      }
    }
    if (limit !== void 0) {
      if (typeof limit !== "number") {
        throw new Error("Limit should be a number");
      }
      if (limit < 0) {
        throw new Error("Limit can't be negative");
      }
    }
    if (sort) {
      sortPredicate = ModelSortPredicateCreator.createFromExisting(modelDefinition, paginationProducer.sort);
    }
    return {
      limit,
      page,
      sort: sortPredicate
    };
  }
  async processSyncExpressions() {
    if (!this.syncExpressions || !this.syncExpressions.length) {
      return new WeakMap();
    }
    const syncPredicates = await Promise.all(this.syncExpressions.map(async (syncExpression2) => {
      const { modelConstructor, conditionProducer } = await syncExpression2;
      const modelDefinition = getModelDefinition(modelConstructor);
      const condition = await this.unwrapPromise(conditionProducer);
      if (isPredicatesAll(condition)) {
        return [modelDefinition, null];
      }
      const predicate = this.createFromCondition(modelDefinition, condition);
      return [modelDefinition, predicate];
    }));
    return this.weakMapFromEntries(syncPredicates);
  }
  createFromCondition(modelDefinition, condition) {
    try {
      return ModelPredicateCreator.createFromExisting(modelDefinition, condition);
    } catch (error) {
      logger12.error("Error creating Sync Predicate");
      throw error;
    }
  }
  async unwrapPromise(conditionProducer) {
    try {
      const condition = await conditionProducer();
      return condition;
    } catch (error) {
      if (error instanceof TypeError) {
        return conditionProducer;
      }
      throw error;
    }
  }
  weakMapFromEntries(entries) {
    return entries.reduce((map, [modelDefinition, predicate]) => {
      if (map.has(modelDefinition)) {
        const { name } = modelDefinition;
        logger12.warn(`You can only utilize one Sync Expression per model.
          Subsequent sync expressions for the ${name} model will be ignored.`);
        return map;
      }
      if (predicate) {
        map.set(modelDefinition, predicate);
      }
      return map;
    }, new WeakMap());
  }
  retrieveSessionId() {
    try {
      const sessionId = sessionStorage.getItem("datastoreSessionId");
      if (sessionId) {
        const { aws_appsync_graphqlEndpoint } = this.amplifyConfig;
        const appSyncUrl = aws_appsync_graphqlEndpoint.split("/")[2];
        const [appSyncId] = appSyncUrl.split(".");
        return `${sessionId}-${appSyncId}`;
      }
    } catch {
      return void 0;
    }
  }
};
var instance = new DataStore();
Amplify2.register(instance);

// src/index.ts
var utils = {
  USER,
  traverseModel,
  validatePredicate,
  isNonModelConstructor,
  isModelConstructor
};
export {
  AuthModeStrategyType,
  DISCARD,
  instance as DataStore,
  DataStore as DataStoreClass,
  GraphQLScalarType,
  ModelAttributeAuthAllow,
  ModelAttributeAuthProvider,
  ModelOperation,
  ModelPredicateCreator,
  ModelSortPredicateCreator,
  OpType,
  Predicates,
  QueryOne,
  SortDirection,
  initSchema,
  isAssociatedWith,
  isEnumFieldType,
  isGraphQLScalarType,
  isModelAttributeAuth,
  isModelAttributeCompositeKey,
  isModelAttributeKey,
  isModelAttributePrimaryKey,
  isModelFieldType,
  isNonModelFieldType,
  isPredicateGroup,
  isPredicateObj,
  isSchemaModel,
  isTargetNameAssociation,
  syncExpression,
  utils
};
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
