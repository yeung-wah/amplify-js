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
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
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
    function getMethod(obj, key) {
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
    function isObservable(x) {
      return x instanceof Observable2;
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
    function enqueue(fn) {
      Promise.resolve().then(function() {
        try {
          fn();
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
          var unsubscribe = getMethod(cleanup, "unsubscribe");
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
      for (var i = 0; i < queue.length; ++i) {
        notifySubscription(subscription, queue[i].type, queue[i].value);
        if (subscription._state === "closed")
          break;
      }
    }
    function notifySubscription(subscription, type, value) {
      subscription._state = "running";
      var observer = subscription._observer;
      try {
        var m = getMethod(observer, type);
        switch (type) {
          case "next":
            if (m)
              m.call(observer, value);
            break;
          case "error":
            closeSubscription(subscription);
            if (m)
              m.call(observer, value);
            else
              throw value;
            break;
          case "complete":
            closeSubscription(subscription);
            if (m)
              m.call(observer);
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
        value: function forEach(fn) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            if (typeof fn !== "function") {
              reject(new TypeError(fn + " is not a function"));
              return;
            }
            function done() {
              subscription.unsubscribe();
              resolve();
            }
            var subscription = _this.subscribe({
              next: function(value) {
                try {
                  fn(value, done);
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
        value: function map(fn) {
          var _this2 = this;
          if (typeof fn !== "function")
            throw new TypeError(fn + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            return _this2.subscribe({
              next: function(value) {
                try {
                  value = fn(value);
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
        value: function filter(fn) {
          var _this3 = this;
          if (typeof fn !== "function")
            throw new TypeError(fn + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            return _this3.subscribe({
              next: function(value) {
                try {
                  if (!fn(value))
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
        value: function reduce(fn) {
          var _this4 = this;
          if (typeof fn !== "function")
            throw new TypeError(fn + " is not a function");
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
                    acc = fn(acc, value);
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
                next: function(v) {
                  observer.next(v);
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
        value: function flatMap(fn) {
          var _this6 = this;
          if (typeof fn !== "function")
            throw new TypeError(fn + " is not a function");
          var C = getSpecies(this);
          return new C(function(observer) {
            var subscriptions = [];
            var outer = _this6.subscribe({
              next: function(value) {
                if (fn) {
                  try {
                    value = fn(value);
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
                    var i = subscriptions.indexOf(inner);
                    if (i >= 0)
                      subscriptions.splice(i, 1);
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
              subscriptions.forEach(function(s) {
                return s.unsubscribe();
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
        value: function from(x) {
          var C = typeof this === "function" ? this : Observable3;
          if (x == null)
            throw new TypeError(x + " is not an object");
          var method = getMethod(x, SymbolObservable);
          if (method) {
            var observable = method.call(x);
            if (Object(observable) !== observable)
              throw new TypeError(observable + " is not an object");
            if (isObservable(observable) && observable.constructor === C)
              return observable;
            return new C(function(observer) {
              return observable.subscribe(observer);
            });
          }
          if (hasSymbol("iterator")) {
            method = getMethod(x, SymbolIterator);
            if (method) {
              return new C(function(observer) {
                enqueue(function() {
                  if (observer.closed)
                    return;
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = void 0;
                  try {
                    for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
          if (Array.isArray(x)) {
            return new C(function(observer) {
              enqueue(function() {
                if (observer.closed)
                  return;
                for (var i = 0; i < x.length; ++i) {
                  observer.next(x[i]);
                  if (observer.closed)
                    return;
                }
                observer.complete();
              });
            });
          }
          throw new TypeError(x + " is not observable");
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
              for (var i = 0; i < items.length; ++i) {
                observer.next(items[i]);
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

// ../../node_modules/paho-mqtt/paho-mqtt.js
var require_paho_mqtt = __commonJS({
  "../../node_modules/paho-mqtt/paho-mqtt.js"(exports, module) {
    (function ExportLibrary(root, factory) {
      if (typeof exports === "object" && typeof module === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof exports === "object") {
        exports = factory();
      } else {
        root.Paho = factory();
      }
    })(exports, function LibraryFactory() {
      var PahoMQTT = function(global2) {
        var version = "@VERSION@-@BUILDLEVEL@";
        var localStorage = global2.localStorage || function() {
          var data = {};
          return {
            setItem: function(key, item) {
              data[key] = item;
            },
            getItem: function(key) {
              return data[key];
            },
            removeItem: function(key) {
              delete data[key];
            }
          };
        }();
        var MESSAGE_TYPE = {
          CONNECT: 1,
          CONNACK: 2,
          PUBLISH: 3,
          PUBACK: 4,
          PUBREC: 5,
          PUBREL: 6,
          PUBCOMP: 7,
          SUBSCRIBE: 8,
          SUBACK: 9,
          UNSUBSCRIBE: 10,
          UNSUBACK: 11,
          PINGREQ: 12,
          PINGRESP: 13,
          DISCONNECT: 14
        };
        var validate2 = function(obj, keys) {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (keys.hasOwnProperty(key)) {
                if (typeof obj[key] !== keys[key])
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof obj[key], key]));
              } else {
                var errorStr = "Unknown property, " + key + ". Valid properties are:";
                for (var validKey in keys)
                  if (keys.hasOwnProperty(validKey))
                    errorStr = errorStr + " " + validKey;
                throw new Error(errorStr);
              }
            }
          }
        };
        var scope = function(f, scope2) {
          return function() {
            return f.apply(scope2, arguments);
          };
        };
        var ERROR = {
          OK: { code: 0, text: "AMQJSC0000I OK." },
          CONNECT_TIMEOUT: { code: 1, text: "AMQJSC0001E Connect timed out." },
          SUBSCRIBE_TIMEOUT: { code: 2, text: "AMQJS0002E Subscribe timed out." },
          UNSUBSCRIBE_TIMEOUT: { code: 3, text: "AMQJS0003E Unsubscribe timed out." },
          PING_TIMEOUT: { code: 4, text: "AMQJS0004E Ping timed out." },
          INTERNAL_ERROR: { code: 5, text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}" },
          CONNACK_RETURNCODE: { code: 6, text: "AMQJS0006E Bad Connack return code:{0} {1}." },
          SOCKET_ERROR: { code: 7, text: "AMQJS0007E Socket error:{0}." },
          SOCKET_CLOSE: { code: 8, text: "AMQJS0008I Socket closed." },
          MALFORMED_UTF: { code: 9, text: "AMQJS0009E Malformed UTF data:{0} {1} {2}." },
          UNSUPPORTED: { code: 10, text: "AMQJS0010E {0} is not supported by this browser." },
          INVALID_STATE: { code: 11, text: "AMQJS0011E Invalid state {0}." },
          INVALID_TYPE: { code: 12, text: "AMQJS0012E Invalid type {0} for {1}." },
          INVALID_ARGUMENT: { code: 13, text: "AMQJS0013E Invalid argument {0} for {1}." },
          UNSUPPORTED_OPERATION: { code: 14, text: "AMQJS0014E Unsupported operation." },
          INVALID_STORED_DATA: { code: 15, text: "AMQJS0015E Invalid data in local storage key={0} value={1}." },
          INVALID_MQTT_MESSAGE_TYPE: { code: 16, text: "AMQJS0016E Invalid MQTT message type {0}." },
          MALFORMED_UNICODE: { code: 17, text: "AMQJS0017E Malformed Unicode string:{0} {1}." },
          BUFFER_FULL: { code: 18, text: "AMQJS0018E Message buffer is full, maximum buffer size: {0}." }
        };
        var CONNACK_RC = {
          0: "Connection Accepted",
          1: "Connection Refused: unacceptable protocol version",
          2: "Connection Refused: identifier rejected",
          3: "Connection Refused: server unavailable",
          4: "Connection Refused: bad user name or password",
          5: "Connection Refused: not authorized"
        };
        var format = function(error, substitutions) {
          var text = error.text;
          if (substitutions) {
            var field, start;
            for (var i = 0; i < substitutions.length; i++) {
              field = "{" + i + "}";
              start = text.indexOf(field);
              if (start > 0) {
                var part1 = text.substring(0, start);
                var part2 = text.substring(start + field.length);
                text = part1 + substitutions[i] + part2;
              }
            }
          }
          return text;
        };
        var MqttProtoIdentifierv3 = [0, 6, 77, 81, 73, 115, 100, 112, 3];
        var MqttProtoIdentifierv4 = [0, 4, 77, 81, 84, 84, 4];
        var WireMessage = function(type, options) {
          this.type = type;
          for (var name in options) {
            if (options.hasOwnProperty(name)) {
              this[name] = options[name];
            }
          }
        };
        WireMessage.prototype.encode = function() {
          var first = (this.type & 15) << 4;
          var remLength = 0;
          var topicStrLength = [];
          var destinationNameLength = 0;
          var willMessagePayloadBytes;
          if (this.messageIdentifier !== void 0)
            remLength += 2;
          switch (this.type) {
            case MESSAGE_TYPE.CONNECT:
              switch (this.mqttVersion) {
                case 3:
                  remLength += MqttProtoIdentifierv3.length + 3;
                  break;
                case 4:
                  remLength += MqttProtoIdentifierv4.length + 3;
                  break;
              }
              remLength += UTF8Length(this.clientId) + 2;
              if (this.willMessage !== void 0) {
                remLength += UTF8Length(this.willMessage.destinationName) + 2;
                willMessagePayloadBytes = this.willMessage.payloadBytes;
                if (!(willMessagePayloadBytes instanceof Uint8Array))
                  willMessagePayloadBytes = new Uint8Array(payloadBytes);
                remLength += willMessagePayloadBytes.byteLength + 2;
              }
              if (this.userName !== void 0)
                remLength += UTF8Length(this.userName) + 2;
              if (this.password !== void 0)
                remLength += UTF8Length(this.password) + 2;
              break;
            case MESSAGE_TYPE.SUBSCRIBE:
              first |= 2;
              for (var i = 0; i < this.topics.length; i++) {
                topicStrLength[i] = UTF8Length(this.topics[i]);
                remLength += topicStrLength[i] + 2;
              }
              remLength += this.requestedQos.length;
              break;
            case MESSAGE_TYPE.UNSUBSCRIBE:
              first |= 2;
              for (var i = 0; i < this.topics.length; i++) {
                topicStrLength[i] = UTF8Length(this.topics[i]);
                remLength += topicStrLength[i] + 2;
              }
              break;
            case MESSAGE_TYPE.PUBREL:
              first |= 2;
              break;
            case MESSAGE_TYPE.PUBLISH:
              if (this.payloadMessage.duplicate)
                first |= 8;
              first = first |= this.payloadMessage.qos << 1;
              if (this.payloadMessage.retained)
                first |= 1;
              destinationNameLength = UTF8Length(this.payloadMessage.destinationName);
              remLength += destinationNameLength + 2;
              var payloadBytes = this.payloadMessage.payloadBytes;
              remLength += payloadBytes.byteLength;
              if (payloadBytes instanceof ArrayBuffer)
                payloadBytes = new Uint8Array(payloadBytes);
              else if (!(payloadBytes instanceof Uint8Array))
                payloadBytes = new Uint8Array(payloadBytes.buffer);
              break;
            case MESSAGE_TYPE.DISCONNECT:
              break;
            default:
              break;
          }
          var mbi = encodeMBI(remLength);
          var pos = mbi.length + 1;
          var buffer = new ArrayBuffer(remLength + pos);
          var byteStream = new Uint8Array(buffer);
          byteStream[0] = first;
          byteStream.set(mbi, 1);
          if (this.type == MESSAGE_TYPE.PUBLISH)
            pos = writeString(this.payloadMessage.destinationName, destinationNameLength, byteStream, pos);
          else if (this.type == MESSAGE_TYPE.CONNECT) {
            switch (this.mqttVersion) {
              case 3:
                byteStream.set(MqttProtoIdentifierv3, pos);
                pos += MqttProtoIdentifierv3.length;
                break;
              case 4:
                byteStream.set(MqttProtoIdentifierv4, pos);
                pos += MqttProtoIdentifierv4.length;
                break;
            }
            var connectFlags = 0;
            if (this.cleanSession)
              connectFlags = 2;
            if (this.willMessage !== void 0) {
              connectFlags |= 4;
              connectFlags |= this.willMessage.qos << 3;
              if (this.willMessage.retained) {
                connectFlags |= 32;
              }
            }
            if (this.userName !== void 0)
              connectFlags |= 128;
            if (this.password !== void 0)
              connectFlags |= 64;
            byteStream[pos++] = connectFlags;
            pos = writeUint16(this.keepAliveInterval, byteStream, pos);
          }
          if (this.messageIdentifier !== void 0)
            pos = writeUint16(this.messageIdentifier, byteStream, pos);
          switch (this.type) {
            case MESSAGE_TYPE.CONNECT:
              pos = writeString(this.clientId, UTF8Length(this.clientId), byteStream, pos);
              if (this.willMessage !== void 0) {
                pos = writeString(this.willMessage.destinationName, UTF8Length(this.willMessage.destinationName), byteStream, pos);
                pos = writeUint16(willMessagePayloadBytes.byteLength, byteStream, pos);
                byteStream.set(willMessagePayloadBytes, pos);
                pos += willMessagePayloadBytes.byteLength;
              }
              if (this.userName !== void 0)
                pos = writeString(this.userName, UTF8Length(this.userName), byteStream, pos);
              if (this.password !== void 0)
                pos = writeString(this.password, UTF8Length(this.password), byteStream, pos);
              break;
            case MESSAGE_TYPE.PUBLISH:
              byteStream.set(payloadBytes, pos);
              break;
            case MESSAGE_TYPE.SUBSCRIBE:
              for (var i = 0; i < this.topics.length; i++) {
                pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
                byteStream[pos++] = this.requestedQos[i];
              }
              break;
            case MESSAGE_TYPE.UNSUBSCRIBE:
              for (var i = 0; i < this.topics.length; i++)
                pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
              break;
            default:
          }
          return buffer;
        };
        function decodeMessage(input, pos) {
          var startingPos = pos;
          var first = input[pos];
          var type = first >> 4;
          var messageInfo = first &= 15;
          pos += 1;
          var digit;
          var remLength = 0;
          var multiplier = 1;
          do {
            if (pos == input.length) {
              return [null, startingPos];
            }
            digit = input[pos++];
            remLength += (digit & 127) * multiplier;
            multiplier *= 128;
          } while ((digit & 128) !== 0);
          var endPos = pos + remLength;
          if (endPos > input.length) {
            return [null, startingPos];
          }
          var wireMessage = new WireMessage(type);
          switch (type) {
            case MESSAGE_TYPE.CONNACK:
              var connectAcknowledgeFlags = input[pos++];
              if (connectAcknowledgeFlags & 1)
                wireMessage.sessionPresent = true;
              wireMessage.returnCode = input[pos++];
              break;
            case MESSAGE_TYPE.PUBLISH:
              var qos = messageInfo >> 1 & 3;
              var len = readUint16(input, pos);
              pos += 2;
              var topicName = parseUTF8(input, pos, len);
              pos += len;
              if (qos > 0) {
                wireMessage.messageIdentifier = readUint16(input, pos);
                pos += 2;
              }
              var message = new Message(input.subarray(pos, endPos));
              if ((messageInfo & 1) == 1)
                message.retained = true;
              if ((messageInfo & 8) == 8)
                message.duplicate = true;
              message.qos = qos;
              message.destinationName = topicName;
              wireMessage.payloadMessage = message;
              break;
            case MESSAGE_TYPE.PUBACK:
            case MESSAGE_TYPE.PUBREC:
            case MESSAGE_TYPE.PUBREL:
            case MESSAGE_TYPE.PUBCOMP:
            case MESSAGE_TYPE.UNSUBACK:
              wireMessage.messageIdentifier = readUint16(input, pos);
              break;
            case MESSAGE_TYPE.SUBACK:
              wireMessage.messageIdentifier = readUint16(input, pos);
              pos += 2;
              wireMessage.returnCode = input.subarray(pos, endPos);
              break;
            default:
              break;
          }
          return [wireMessage, endPos];
        }
        function writeUint16(input, buffer, offset) {
          buffer[offset++] = input >> 8;
          buffer[offset++] = input % 256;
          return offset;
        }
        function writeString(input, utf8Length, buffer, offset) {
          offset = writeUint16(utf8Length, buffer, offset);
          stringToUTF8(input, buffer, offset);
          return offset + utf8Length;
        }
        function readUint16(buffer, offset) {
          return 256 * buffer[offset] + buffer[offset + 1];
        }
        function encodeMBI(number) {
          var output = new Array(1);
          var numBytes = 0;
          do {
            var digit = number % 128;
            number = number >> 7;
            if (number > 0) {
              digit |= 128;
            }
            output[numBytes++] = digit;
          } while (number > 0 && numBytes < 4);
          return output;
        }
        function UTF8Length(input) {
          var output = 0;
          for (var i = 0; i < input.length; i++) {
            var charCode = input.charCodeAt(i);
            if (charCode > 2047) {
              if (55296 <= charCode && charCode <= 56319) {
                i++;
                output++;
              }
              output += 3;
            } else if (charCode > 127)
              output += 2;
            else
              output++;
          }
          return output;
        }
        function stringToUTF8(input, output, start) {
          var pos = start;
          for (var i = 0; i < input.length; i++) {
            var charCode = input.charCodeAt(i);
            if (55296 <= charCode && charCode <= 56319) {
              var lowCharCode = input.charCodeAt(++i);
              if (isNaN(lowCharCode)) {
                throw new Error(format(ERROR.MALFORMED_UNICODE, [charCode, lowCharCode]));
              }
              charCode = (charCode - 55296 << 10) + (lowCharCode - 56320) + 65536;
            }
            if (charCode <= 127) {
              output[pos++] = charCode;
            } else if (charCode <= 2047) {
              output[pos++] = charCode >> 6 & 31 | 192;
              output[pos++] = charCode & 63 | 128;
            } else if (charCode <= 65535) {
              output[pos++] = charCode >> 12 & 15 | 224;
              output[pos++] = charCode >> 6 & 63 | 128;
              output[pos++] = charCode & 63 | 128;
            } else {
              output[pos++] = charCode >> 18 & 7 | 240;
              output[pos++] = charCode >> 12 & 63 | 128;
              output[pos++] = charCode >> 6 & 63 | 128;
              output[pos++] = charCode & 63 | 128;
            }
          }
          return output;
        }
        function parseUTF8(input, offset, length) {
          var output = "";
          var utf16;
          var pos = offset;
          while (pos < offset + length) {
            var byte1 = input[pos++];
            if (byte1 < 128)
              utf16 = byte1;
            else {
              var byte2 = input[pos++] - 128;
              if (byte2 < 0)
                throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), ""]));
              if (byte1 < 224)
                utf16 = 64 * (byte1 - 192) + byte2;
              else {
                var byte3 = input[pos++] - 128;
                if (byte3 < 0)
                  throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16)]));
                if (byte1 < 240)
                  utf16 = 4096 * (byte1 - 224) + 64 * byte2 + byte3;
                else {
                  var byte4 = input[pos++] - 128;
                  if (byte4 < 0)
                    throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
                  if (byte1 < 248)
                    utf16 = 262144 * (byte1 - 240) + 4096 * byte2 + 64 * byte3 + byte4;
                  else
                    throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
                }
              }
            }
            if (utf16 > 65535) {
              utf16 -= 65536;
              output += String.fromCharCode(55296 + (utf16 >> 10));
              utf16 = 56320 + (utf16 & 1023);
            }
            output += String.fromCharCode(utf16);
          }
          return output;
        }
        var Pinger = function(client, keepAliveInterval) {
          this._client = client;
          this._keepAliveInterval = keepAliveInterval * 1e3;
          this.isReset = false;
          var pingReq = new WireMessage(MESSAGE_TYPE.PINGREQ).encode();
          var doTimeout = function(pinger) {
            return function() {
              return doPing.apply(pinger);
            };
          };
          var doPing = function() {
            if (!this.isReset) {
              this._client._trace("Pinger.doPing", "Timed out");
              this._client._disconnected(ERROR.PING_TIMEOUT.code, format(ERROR.PING_TIMEOUT));
            } else {
              this.isReset = false;
              this._client._trace("Pinger.doPing", "send PINGREQ");
              this._client.socket.send(pingReq);
              this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
            }
          };
          this.reset = function() {
            this.isReset = true;
            clearTimeout(this.timeout);
            if (this._keepAliveInterval > 0)
              this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
          };
          this.cancel = function() {
            clearTimeout(this.timeout);
          };
        };
        var Timeout = function(client, timeoutSeconds, action, args) {
          if (!timeoutSeconds)
            timeoutSeconds = 30;
          var doTimeout = function(action2, client2, args2) {
            return function() {
              return action2.apply(client2, args2);
            };
          };
          this.timeout = setTimeout(doTimeout(action, client, args), timeoutSeconds * 1e3);
          this.cancel = function() {
            clearTimeout(this.timeout);
          };
        };
        var ClientImpl = function(uri, host, port, path, clientId) {
          if (!("WebSocket" in global2 && global2.WebSocket !== null)) {
            throw new Error(format(ERROR.UNSUPPORTED, ["WebSocket"]));
          }
          if (!("ArrayBuffer" in global2 && global2.ArrayBuffer !== null)) {
            throw new Error(format(ERROR.UNSUPPORTED, ["ArrayBuffer"]));
          }
          this._trace("Paho.Client", uri, host, port, path, clientId);
          this.host = host;
          this.port = port;
          this.path = path;
          this.uri = uri;
          this.clientId = clientId;
          this._wsuri = null;
          this._localKey = host + ":" + port + (path != "/mqtt" ? ":" + path : "") + ":" + clientId + ":";
          this._msg_queue = [];
          this._buffered_msg_queue = [];
          this._sentMessages = {};
          this._receivedMessages = {};
          this._notify_msg_sent = {};
          this._message_identifier = 1;
          this._sequence = 0;
          for (var key in localStorage)
            if (key.indexOf("Sent:" + this._localKey) === 0 || key.indexOf("Received:" + this._localKey) === 0)
              this.restore(key);
        };
        ClientImpl.prototype.host = null;
        ClientImpl.prototype.port = null;
        ClientImpl.prototype.path = null;
        ClientImpl.prototype.uri = null;
        ClientImpl.prototype.clientId = null;
        ClientImpl.prototype.socket = null;
        ClientImpl.prototype.connected = false;
        ClientImpl.prototype.maxMessageIdentifier = 65536;
        ClientImpl.prototype.connectOptions = null;
        ClientImpl.prototype.hostIndex = null;
        ClientImpl.prototype.onConnected = null;
        ClientImpl.prototype.onConnectionLost = null;
        ClientImpl.prototype.onMessageDelivered = null;
        ClientImpl.prototype.onMessageArrived = null;
        ClientImpl.prototype.traceFunction = null;
        ClientImpl.prototype._msg_queue = null;
        ClientImpl.prototype._buffered_msg_queue = null;
        ClientImpl.prototype._connectTimeout = null;
        ClientImpl.prototype.sendPinger = null;
        ClientImpl.prototype.receivePinger = null;
        ClientImpl.prototype._reconnectInterval = 1;
        ClientImpl.prototype._reconnecting = false;
        ClientImpl.prototype._reconnectTimeout = null;
        ClientImpl.prototype.disconnectedPublishing = false;
        ClientImpl.prototype.disconnectedBufferSize = 5e3;
        ClientImpl.prototype.receiveBuffer = null;
        ClientImpl.prototype._traceBuffer = null;
        ClientImpl.prototype._MAX_TRACE_ENTRIES = 100;
        ClientImpl.prototype.connect = function(connectOptions) {
          var connectOptionsMasked = this._traceMask(connectOptions, "password");
          this._trace("Client.connect", connectOptionsMasked, this.socket, this.connected);
          if (this.connected)
            throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
          if (this.socket)
            throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
          if (this._reconnecting) {
            this._reconnectTimeout.cancel();
            this._reconnectTimeout = null;
            this._reconnecting = false;
          }
          this.connectOptions = connectOptions;
          this._reconnectInterval = 1;
          this._reconnecting = false;
          if (connectOptions.uris) {
            this.hostIndex = 0;
            this._doConnect(connectOptions.uris[0]);
          } else {
            this._doConnect(this.uri);
          }
        };
        ClientImpl.prototype.subscribe = function(filter, subscribeOptions) {
          this._trace("Client.subscribe", filter, subscribeOptions);
          if (!this.connected)
            throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
          var wireMessage = new WireMessage(MESSAGE_TYPE.SUBSCRIBE);
          wireMessage.topics = filter.constructor === Array ? filter : [filter];
          if (subscribeOptions.qos === void 0)
            subscribeOptions.qos = 0;
          wireMessage.requestedQos = [];
          for (var i = 0; i < wireMessage.topics.length; i++)
            wireMessage.requestedQos[i] = subscribeOptions.qos;
          if (subscribeOptions.onSuccess) {
            wireMessage.onSuccess = function(grantedQos) {
              subscribeOptions.onSuccess({ invocationContext: subscribeOptions.invocationContext, grantedQos });
            };
          }
          if (subscribeOptions.onFailure) {
            wireMessage.onFailure = function(errorCode) {
              subscribeOptions.onFailure({ invocationContext: subscribeOptions.invocationContext, errorCode, errorMessage: format(errorCode) });
            };
          }
          if (subscribeOptions.timeout) {
            wireMessage.timeOut = new Timeout(this, subscribeOptions.timeout, subscribeOptions.onFailure, [{
              invocationContext: subscribeOptions.invocationContext,
              errorCode: ERROR.SUBSCRIBE_TIMEOUT.code,
              errorMessage: format(ERROR.SUBSCRIBE_TIMEOUT)
            }]);
          }
          this._requires_ack(wireMessage);
          this._schedule_message(wireMessage);
        };
        ClientImpl.prototype.unsubscribe = function(filter, unsubscribeOptions) {
          this._trace("Client.unsubscribe", filter, unsubscribeOptions);
          if (!this.connected)
            throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
          var wireMessage = new WireMessage(MESSAGE_TYPE.UNSUBSCRIBE);
          wireMessage.topics = filter.constructor === Array ? filter : [filter];
          if (unsubscribeOptions.onSuccess) {
            wireMessage.callback = function() {
              unsubscribeOptions.onSuccess({ invocationContext: unsubscribeOptions.invocationContext });
            };
          }
          if (unsubscribeOptions.timeout) {
            wireMessage.timeOut = new Timeout(this, unsubscribeOptions.timeout, unsubscribeOptions.onFailure, [{
              invocationContext: unsubscribeOptions.invocationContext,
              errorCode: ERROR.UNSUBSCRIBE_TIMEOUT.code,
              errorMessage: format(ERROR.UNSUBSCRIBE_TIMEOUT)
            }]);
          }
          this._requires_ack(wireMessage);
          this._schedule_message(wireMessage);
        };
        ClientImpl.prototype.send = function(message) {
          this._trace("Client.send", message);
          var wireMessage = new WireMessage(MESSAGE_TYPE.PUBLISH);
          wireMessage.payloadMessage = message;
          if (this.connected) {
            if (message.qos > 0) {
              this._requires_ack(wireMessage);
            } else if (this.onMessageDelivered) {
              this._notify_msg_sent[wireMessage] = this.onMessageDelivered(wireMessage.payloadMessage);
            }
            this._schedule_message(wireMessage);
          } else {
            if (this._reconnecting && this.disconnectedPublishing) {
              var messageCount = Object.keys(this._sentMessages).length + this._buffered_msg_queue.length;
              if (messageCount > this.disconnectedBufferSize) {
                throw new Error(format(ERROR.BUFFER_FULL, [this.disconnectedBufferSize]));
              } else {
                if (message.qos > 0) {
                  this._requires_ack(wireMessage);
                } else {
                  wireMessage.sequence = ++this._sequence;
                  this._buffered_msg_queue.unshift(wireMessage);
                }
              }
            } else {
              throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
            }
          }
        };
        ClientImpl.prototype.disconnect = function() {
          this._trace("Client.disconnect");
          if (this._reconnecting) {
            this._reconnectTimeout.cancel();
            this._reconnectTimeout = null;
            this._reconnecting = false;
          }
          if (!this.socket)
            throw new Error(format(ERROR.INVALID_STATE, ["not connecting or connected"]));
          var wireMessage = new WireMessage(MESSAGE_TYPE.DISCONNECT);
          this._notify_msg_sent[wireMessage] = scope(this._disconnected, this);
          this._schedule_message(wireMessage);
        };
        ClientImpl.prototype.getTraceLog = function() {
          if (this._traceBuffer !== null) {
            this._trace("Client.getTraceLog", new Date());
            this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);
            for (var key in this._sentMessages)
              this._trace("_sentMessages ", key, this._sentMessages[key]);
            for (var key in this._receivedMessages)
              this._trace("_receivedMessages ", key, this._receivedMessages[key]);
            return this._traceBuffer;
          }
        };
        ClientImpl.prototype.startTrace = function() {
          if (this._traceBuffer === null) {
            this._traceBuffer = [];
          }
          this._trace("Client.startTrace", new Date(), version);
        };
        ClientImpl.prototype.stopTrace = function() {
          delete this._traceBuffer;
        };
        ClientImpl.prototype._doConnect = function(wsurl) {
          if (this.connectOptions.useSSL) {
            var uriParts = wsurl.split(":");
            uriParts[0] = "wss";
            wsurl = uriParts.join(":");
          }
          this._wsuri = wsurl;
          this.connected = false;
          if (this.connectOptions.mqttVersion < 4) {
            this.socket = new WebSocket(wsurl, ["mqttv3.1"]);
          } else {
            this.socket = new WebSocket(wsurl, ["mqtt"]);
          }
          this.socket.binaryType = "arraybuffer";
          this.socket.onopen = scope(this._on_socket_open, this);
          this.socket.onmessage = scope(this._on_socket_message, this);
          this.socket.onerror = scope(this._on_socket_error, this);
          this.socket.onclose = scope(this._on_socket_close, this);
          this.sendPinger = new Pinger(this, this.connectOptions.keepAliveInterval);
          this.receivePinger = new Pinger(this, this.connectOptions.keepAliveInterval);
          if (this._connectTimeout) {
            this._connectTimeout.cancel();
            this._connectTimeout = null;
          }
          this._connectTimeout = new Timeout(this, this.connectOptions.timeout, this._disconnected, [ERROR.CONNECT_TIMEOUT.code, format(ERROR.CONNECT_TIMEOUT)]);
        };
        ClientImpl.prototype._schedule_message = function(message) {
          this._msg_queue.unshift(message);
          if (this.connected) {
            this._process_queue();
          }
        };
        ClientImpl.prototype.store = function(prefix, wireMessage) {
          var storedMessage = { type: wireMessage.type, messageIdentifier: wireMessage.messageIdentifier, version: 1 };
          switch (wireMessage.type) {
            case MESSAGE_TYPE.PUBLISH:
              if (wireMessage.pubRecReceived)
                storedMessage.pubRecReceived = true;
              storedMessage.payloadMessage = {};
              var hex = "";
              var messageBytes = wireMessage.payloadMessage.payloadBytes;
              for (var i = 0; i < messageBytes.length; i++) {
                if (messageBytes[i] <= 15)
                  hex = hex + "0" + messageBytes[i].toString(16);
                else
                  hex = hex + messageBytes[i].toString(16);
              }
              storedMessage.payloadMessage.payloadHex = hex;
              storedMessage.payloadMessage.qos = wireMessage.payloadMessage.qos;
              storedMessage.payloadMessage.destinationName = wireMessage.payloadMessage.destinationName;
              if (wireMessage.payloadMessage.duplicate)
                storedMessage.payloadMessage.duplicate = true;
              if (wireMessage.payloadMessage.retained)
                storedMessage.payloadMessage.retained = true;
              if (prefix.indexOf("Sent:") === 0) {
                if (wireMessage.sequence === void 0)
                  wireMessage.sequence = ++this._sequence;
                storedMessage.sequence = wireMessage.sequence;
              }
              break;
            default:
              throw Error(format(ERROR.INVALID_STORED_DATA, [prefix + this._localKey + wireMessage.messageIdentifier, storedMessage]));
          }
          localStorage.setItem(prefix + this._localKey + wireMessage.messageIdentifier, JSON.stringify(storedMessage));
        };
        ClientImpl.prototype.restore = function(key) {
          var value = localStorage.getItem(key);
          var storedMessage = JSON.parse(value);
          var wireMessage = new WireMessage(storedMessage.type, storedMessage);
          switch (storedMessage.type) {
            case MESSAGE_TYPE.PUBLISH:
              var hex = storedMessage.payloadMessage.payloadHex;
              var buffer = new ArrayBuffer(hex.length / 2);
              var byteStream = new Uint8Array(buffer);
              var i = 0;
              while (hex.length >= 2) {
                var x = parseInt(hex.substring(0, 2), 16);
                hex = hex.substring(2, hex.length);
                byteStream[i++] = x;
              }
              var payloadMessage = new Message(byteStream);
              payloadMessage.qos = storedMessage.payloadMessage.qos;
              payloadMessage.destinationName = storedMessage.payloadMessage.destinationName;
              if (storedMessage.payloadMessage.duplicate)
                payloadMessage.duplicate = true;
              if (storedMessage.payloadMessage.retained)
                payloadMessage.retained = true;
              wireMessage.payloadMessage = payloadMessage;
              break;
            default:
              throw Error(format(ERROR.INVALID_STORED_DATA, [key, value]));
          }
          if (key.indexOf("Sent:" + this._localKey) === 0) {
            wireMessage.payloadMessage.duplicate = true;
            this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
          } else if (key.indexOf("Received:" + this._localKey) === 0) {
            this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
          }
        };
        ClientImpl.prototype._process_queue = function() {
          var message = null;
          while (message = this._msg_queue.pop()) {
            this._socket_send(message);
            if (this._notify_msg_sent[message]) {
              this._notify_msg_sent[message]();
              delete this._notify_msg_sent[message];
            }
          }
        };
        ClientImpl.prototype._requires_ack = function(wireMessage) {
          var messageCount = Object.keys(this._sentMessages).length;
          if (messageCount > this.maxMessageIdentifier)
            throw Error("Too many messages:" + messageCount);
          while (this._sentMessages[this._message_identifier] !== void 0) {
            this._message_identifier++;
          }
          wireMessage.messageIdentifier = this._message_identifier;
          this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
          if (wireMessage.type === MESSAGE_TYPE.PUBLISH) {
            this.store("Sent:", wireMessage);
          }
          if (this._message_identifier === this.maxMessageIdentifier) {
            this._message_identifier = 1;
          }
        };
        ClientImpl.prototype._on_socket_open = function() {
          var wireMessage = new WireMessage(MESSAGE_TYPE.CONNECT, this.connectOptions);
          wireMessage.clientId = this.clientId;
          this._socket_send(wireMessage);
        };
        ClientImpl.prototype._on_socket_message = function(event) {
          this._trace("Client._on_socket_message", event.data);
          var messages = this._deframeMessages(event.data);
          for (var i = 0; i < messages.length; i += 1) {
            this._handleMessage(messages[i]);
          }
        };
        ClientImpl.prototype._deframeMessages = function(data) {
          var byteArray = new Uint8Array(data);
          var messages = [];
          if (this.receiveBuffer) {
            var newData = new Uint8Array(this.receiveBuffer.length + byteArray.length);
            newData.set(this.receiveBuffer);
            newData.set(byteArray, this.receiveBuffer.length);
            byteArray = newData;
            delete this.receiveBuffer;
          }
          try {
            var offset = 0;
            while (offset < byteArray.length) {
              var result = decodeMessage(byteArray, offset);
              var wireMessage = result[0];
              offset = result[1];
              if (wireMessage !== null) {
                messages.push(wireMessage);
              } else {
                break;
              }
            }
            if (offset < byteArray.length) {
              this.receiveBuffer = byteArray.subarray(offset);
            }
          } catch (error) {
            var errorStack = error.hasOwnProperty("stack") == "undefined" ? error.stack.toString() : "No Error Stack Available";
            this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, errorStack]));
            return;
          }
          return messages;
        };
        ClientImpl.prototype._handleMessage = function(wireMessage) {
          this._trace("Client._handleMessage", wireMessage);
          try {
            switch (wireMessage.type) {
              case MESSAGE_TYPE.CONNACK:
                this._connectTimeout.cancel();
                if (this._reconnectTimeout)
                  this._reconnectTimeout.cancel();
                if (this.connectOptions.cleanSession) {
                  for (var key in this._sentMessages) {
                    var sentMessage = this._sentMessages[key];
                    localStorage.removeItem("Sent:" + this._localKey + sentMessage.messageIdentifier);
                  }
                  this._sentMessages = {};
                  for (var key in this._receivedMessages) {
                    var receivedMessage = this._receivedMessages[key];
                    localStorage.removeItem("Received:" + this._localKey + receivedMessage.messageIdentifier);
                  }
                  this._receivedMessages = {};
                }
                if (wireMessage.returnCode === 0) {
                  this.connected = true;
                  if (this.connectOptions.uris)
                    this.hostIndex = this.connectOptions.uris.length;
                } else {
                  this._disconnected(ERROR.CONNACK_RETURNCODE.code, format(ERROR.CONNACK_RETURNCODE, [wireMessage.returnCode, CONNACK_RC[wireMessage.returnCode]]));
                  break;
                }
                var sequencedMessages = [];
                for (var msgId in this._sentMessages) {
                  if (this._sentMessages.hasOwnProperty(msgId))
                    sequencedMessages.push(this._sentMessages[msgId]);
                }
                if (this._buffered_msg_queue.length > 0) {
                  var msg = null;
                  while (msg = this._buffered_msg_queue.pop()) {
                    sequencedMessages.push(msg);
                    if (this.onMessageDelivered)
                      this._notify_msg_sent[msg] = this.onMessageDelivered(msg.payloadMessage);
                  }
                }
                var sequencedMessages = sequencedMessages.sort(function(a, b) {
                  return a.sequence - b.sequence;
                });
                for (var i = 0, len = sequencedMessages.length; i < len; i++) {
                  var sentMessage = sequencedMessages[i];
                  if (sentMessage.type == MESSAGE_TYPE.PUBLISH && sentMessage.pubRecReceived) {
                    var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, { messageIdentifier: sentMessage.messageIdentifier });
                    this._schedule_message(pubRelMessage);
                  } else {
                    this._schedule_message(sentMessage);
                  }
                }
                if (this.connectOptions.onSuccess) {
                  this.connectOptions.onSuccess({ invocationContext: this.connectOptions.invocationContext });
                }
                var reconnected = false;
                if (this._reconnecting) {
                  reconnected = true;
                  this._reconnectInterval = 1;
                  this._reconnecting = false;
                }
                this._connected(reconnected, this._wsuri);
                this._process_queue();
                break;
              case MESSAGE_TYPE.PUBLISH:
                this._receivePublish(wireMessage);
                break;
              case MESSAGE_TYPE.PUBACK:
                var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
                if (sentMessage) {
                  delete this._sentMessages[wireMessage.messageIdentifier];
                  localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
                  if (this.onMessageDelivered)
                    this.onMessageDelivered(sentMessage.payloadMessage);
                }
                break;
              case MESSAGE_TYPE.PUBREC:
                var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
                if (sentMessage) {
                  sentMessage.pubRecReceived = true;
                  var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, { messageIdentifier: wireMessage.messageIdentifier });
                  this.store("Sent:", sentMessage);
                  this._schedule_message(pubRelMessage);
                }
                break;
              case MESSAGE_TYPE.PUBREL:
                var receivedMessage = this._receivedMessages[wireMessage.messageIdentifier];
                localStorage.removeItem("Received:" + this._localKey + wireMessage.messageIdentifier);
                if (receivedMessage) {
                  this._receiveMessage(receivedMessage);
                  delete this._receivedMessages[wireMessage.messageIdentifier];
                }
                var pubCompMessage = new WireMessage(MESSAGE_TYPE.PUBCOMP, { messageIdentifier: wireMessage.messageIdentifier });
                this._schedule_message(pubCompMessage);
                break;
              case MESSAGE_TYPE.PUBCOMP:
                var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
                delete this._sentMessages[wireMessage.messageIdentifier];
                localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
                if (this.onMessageDelivered)
                  this.onMessageDelivered(sentMessage.payloadMessage);
                break;
              case MESSAGE_TYPE.SUBACK:
                var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
                if (sentMessage) {
                  if (sentMessage.timeOut)
                    sentMessage.timeOut.cancel();
                  if (wireMessage.returnCode[0] === 128) {
                    if (sentMessage.onFailure) {
                      sentMessage.onFailure(wireMessage.returnCode);
                    }
                  } else if (sentMessage.onSuccess) {
                    sentMessage.onSuccess(wireMessage.returnCode);
                  }
                  delete this._sentMessages[wireMessage.messageIdentifier];
                }
                break;
              case MESSAGE_TYPE.UNSUBACK:
                var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
                if (sentMessage) {
                  if (sentMessage.timeOut)
                    sentMessage.timeOut.cancel();
                  if (sentMessage.callback) {
                    sentMessage.callback();
                  }
                  delete this._sentMessages[wireMessage.messageIdentifier];
                }
                break;
              case MESSAGE_TYPE.PINGRESP:
                this.sendPinger.reset();
                break;
              case MESSAGE_TYPE.DISCONNECT:
                this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));
                break;
              default:
                this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));
            }
          } catch (error) {
            var errorStack = error.hasOwnProperty("stack") == "undefined" ? error.stack.toString() : "No Error Stack Available";
            this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, errorStack]));
            return;
          }
        };
        ClientImpl.prototype._on_socket_error = function(error) {
          if (!this._reconnecting) {
            this._disconnected(ERROR.SOCKET_ERROR.code, format(ERROR.SOCKET_ERROR, [error.data]));
          }
        };
        ClientImpl.prototype._on_socket_close = function() {
          if (!this._reconnecting) {
            this._disconnected(ERROR.SOCKET_CLOSE.code, format(ERROR.SOCKET_CLOSE));
          }
        };
        ClientImpl.prototype._socket_send = function(wireMessage) {
          if (wireMessage.type == 1) {
            var wireMessageMasked = this._traceMask(wireMessage, "password");
            this._trace("Client._socket_send", wireMessageMasked);
          } else
            this._trace("Client._socket_send", wireMessage);
          this.socket.send(wireMessage.encode());
          this.sendPinger.reset();
        };
        ClientImpl.prototype._receivePublish = function(wireMessage) {
          switch (wireMessage.payloadMessage.qos) {
            case "undefined":
            case 0:
              this._receiveMessage(wireMessage);
              break;
            case 1:
              var pubAckMessage = new WireMessage(MESSAGE_TYPE.PUBACK, { messageIdentifier: wireMessage.messageIdentifier });
              this._schedule_message(pubAckMessage);
              this._receiveMessage(wireMessage);
              break;
            case 2:
              this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
              this.store("Received:", wireMessage);
              var pubRecMessage = new WireMessage(MESSAGE_TYPE.PUBREC, { messageIdentifier: wireMessage.messageIdentifier });
              this._schedule_message(pubRecMessage);
              break;
            default:
              throw Error("Invaild qos=" + wireMessage.payloadMessage.qos);
          }
        };
        ClientImpl.prototype._receiveMessage = function(wireMessage) {
          if (this.onMessageArrived) {
            this.onMessageArrived(wireMessage.payloadMessage);
          }
        };
        ClientImpl.prototype._connected = function(reconnect, uri) {
          if (this.onConnected)
            this.onConnected(reconnect, uri);
        };
        ClientImpl.prototype._reconnect = function() {
          this._trace("Client._reconnect");
          if (!this.connected) {
            this._reconnecting = true;
            this.sendPinger.cancel();
            this.receivePinger.cancel();
            if (this._reconnectInterval < 128)
              this._reconnectInterval = this._reconnectInterval * 2;
            if (this.connectOptions.uris) {
              this.hostIndex = 0;
              this._doConnect(this.connectOptions.uris[0]);
            } else {
              this._doConnect(this.uri);
            }
          }
        };
        ClientImpl.prototype._disconnected = function(errorCode, errorText) {
          this._trace("Client._disconnected", errorCode, errorText);
          if (errorCode !== void 0 && this._reconnecting) {
            this._reconnectTimeout = new Timeout(this, this._reconnectInterval, this._reconnect);
            return;
          }
          this.sendPinger.cancel();
          this.receivePinger.cancel();
          if (this._connectTimeout) {
            this._connectTimeout.cancel();
            this._connectTimeout = null;
          }
          this._msg_queue = [];
          this._buffered_msg_queue = [];
          this._notify_msg_sent = {};
          if (this.socket) {
            this.socket.onopen = null;
            this.socket.onmessage = null;
            this.socket.onerror = null;
            this.socket.onclose = null;
            if (this.socket.readyState === 1)
              this.socket.close();
            delete this.socket;
          }
          if (this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1) {
            this.hostIndex++;
            this._doConnect(this.connectOptions.uris[this.hostIndex]);
          } else {
            if (errorCode === void 0) {
              errorCode = ERROR.OK.code;
              errorText = format(ERROR.OK);
            }
            if (this.connected) {
              this.connected = false;
              if (this.onConnectionLost) {
                this.onConnectionLost({ errorCode, errorMessage: errorText, reconnect: this.connectOptions.reconnect, uri: this._wsuri });
              }
              if (errorCode !== ERROR.OK.code && this.connectOptions.reconnect) {
                this._reconnectInterval = 1;
                this._reconnect();
                return;
              }
            } else {
              if (this.connectOptions.mqttVersion === 4 && this.connectOptions.mqttVersionExplicit === false) {
                this._trace("Failed to connect V4, dropping back to V3");
                this.connectOptions.mqttVersion = 3;
                if (this.connectOptions.uris) {
                  this.hostIndex = 0;
                  this._doConnect(this.connectOptions.uris[0]);
                } else {
                  this._doConnect(this.uri);
                }
              } else if (this.connectOptions.onFailure) {
                this.connectOptions.onFailure({ invocationContext: this.connectOptions.invocationContext, errorCode, errorMessage: errorText });
              }
            }
          }
        };
        ClientImpl.prototype._trace = function() {
          if (this.traceFunction) {
            var args = Array.prototype.slice.call(arguments);
            for (var i in args) {
              if (typeof args[i] !== "undefined")
                args.splice(i, 1, JSON.stringify(args[i]));
            }
            var record = args.join("");
            this.traceFunction({ severity: "Debug", message: record });
          }
          if (this._traceBuffer !== null) {
            for (var i = 0, max = arguments.length; i < max; i++) {
              if (this._traceBuffer.length == this._MAX_TRACE_ENTRIES) {
                this._traceBuffer.shift();
              }
              if (i === 0)
                this._traceBuffer.push(arguments[i]);
              else if (typeof arguments[i] === "undefined")
                this._traceBuffer.push(arguments[i]);
              else
                this._traceBuffer.push("  " + JSON.stringify(arguments[i]));
            }
          }
        };
        ClientImpl.prototype._traceMask = function(traceObject, masked) {
          var traceObjectMasked = {};
          for (var attr in traceObject) {
            if (traceObject.hasOwnProperty(attr)) {
              if (attr == masked)
                traceObjectMasked[attr] = "******";
              else
                traceObjectMasked[attr] = traceObject[attr];
            }
          }
          return traceObjectMasked;
        };
        var Client2 = function(host, port, path, clientId) {
          var uri;
          if (typeof host !== "string")
            throw new Error(format(ERROR.INVALID_TYPE, [typeof host, "host"]));
          if (arguments.length == 2) {
            clientId = port;
            uri = host;
            var match = uri.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);
            if (match) {
              host = match[4] || match[2];
              port = parseInt(match[7]);
              path = match[8];
            } else {
              throw new Error(format(ERROR.INVALID_ARGUMENT, [host, "host"]));
            }
          } else {
            if (arguments.length == 3) {
              clientId = path;
              path = "/mqtt";
            }
            if (typeof port !== "number" || port < 0)
              throw new Error(format(ERROR.INVALID_TYPE, [typeof port, "port"]));
            if (typeof path !== "string")
              throw new Error(format(ERROR.INVALID_TYPE, [typeof path, "path"]));
            var ipv6AddSBracket = host.indexOf(":") !== -1 && host.slice(0, 1) !== "[" && host.slice(-1) !== "]";
            uri = "ws://" + (ipv6AddSBracket ? "[" + host + "]" : host) + ":" + port + path;
          }
          var clientIdLength = 0;
          for (var i = 0; i < clientId.length; i++) {
            var charCode = clientId.charCodeAt(i);
            if (55296 <= charCode && charCode <= 56319) {
              i++;
            }
            clientIdLength++;
          }
          if (typeof clientId !== "string" || clientIdLength > 65535)
            throw new Error(format(ERROR.INVALID_ARGUMENT, [clientId, "clientId"]));
          var client = new ClientImpl(uri, host, port, path, clientId);
          Object.defineProperties(this, {
            "host": {
              get: function() {
                return host;
              },
              set: function() {
                throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
              }
            },
            "port": {
              get: function() {
                return port;
              },
              set: function() {
                throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
              }
            },
            "path": {
              get: function() {
                return path;
              },
              set: function() {
                throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
              }
            },
            "uri": {
              get: function() {
                return uri;
              },
              set: function() {
                throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
              }
            },
            "clientId": {
              get: function() {
                return client.clientId;
              },
              set: function() {
                throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
              }
            },
            "onConnected": {
              get: function() {
                return client.onConnected;
              },
              set: function(newOnConnected) {
                if (typeof newOnConnected === "function")
                  client.onConnected = newOnConnected;
                else
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnConnected, "onConnected"]));
              }
            },
            "disconnectedPublishing": {
              get: function() {
                return client.disconnectedPublishing;
              },
              set: function(newDisconnectedPublishing) {
                client.disconnectedPublishing = newDisconnectedPublishing;
              }
            },
            "disconnectedBufferSize": {
              get: function() {
                return client.disconnectedBufferSize;
              },
              set: function(newDisconnectedBufferSize) {
                client.disconnectedBufferSize = newDisconnectedBufferSize;
              }
            },
            "onConnectionLost": {
              get: function() {
                return client.onConnectionLost;
              },
              set: function(newOnConnectionLost) {
                if (typeof newOnConnectionLost === "function")
                  client.onConnectionLost = newOnConnectionLost;
                else
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnConnectionLost, "onConnectionLost"]));
              }
            },
            "onMessageDelivered": {
              get: function() {
                return client.onMessageDelivered;
              },
              set: function(newOnMessageDelivered) {
                if (typeof newOnMessageDelivered === "function")
                  client.onMessageDelivered = newOnMessageDelivered;
                else
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnMessageDelivered, "onMessageDelivered"]));
              }
            },
            "onMessageArrived": {
              get: function() {
                return client.onMessageArrived;
              },
              set: function(newOnMessageArrived) {
                if (typeof newOnMessageArrived === "function")
                  client.onMessageArrived = newOnMessageArrived;
                else
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnMessageArrived, "onMessageArrived"]));
              }
            },
            "trace": {
              get: function() {
                return client.traceFunction;
              },
              set: function(trace) {
                if (typeof trace === "function") {
                  client.traceFunction = trace;
                } else {
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof trace, "onTrace"]));
                }
              }
            }
          });
          this.connect = function(connectOptions) {
            connectOptions = connectOptions || {};
            validate2(connectOptions, {
              timeout: "number",
              userName: "string",
              password: "string",
              willMessage: "object",
              keepAliveInterval: "number",
              cleanSession: "boolean",
              useSSL: "boolean",
              invocationContext: "object",
              onSuccess: "function",
              onFailure: "function",
              hosts: "object",
              ports: "object",
              reconnect: "boolean",
              mqttVersion: "number",
              mqttVersionExplicit: "boolean",
              uris: "object"
            });
            if (connectOptions.keepAliveInterval === void 0)
              connectOptions.keepAliveInterval = 60;
            if (connectOptions.mqttVersion > 4 || connectOptions.mqttVersion < 3) {
              throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.mqttVersion, "connectOptions.mqttVersion"]));
            }
            if (connectOptions.mqttVersion === void 0) {
              connectOptions.mqttVersionExplicit = false;
              connectOptions.mqttVersion = 4;
            } else {
              connectOptions.mqttVersionExplicit = true;
            }
            if (connectOptions.password !== void 0 && connectOptions.userName === void 0)
              throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.password, "connectOptions.password"]));
            if (connectOptions.willMessage) {
              if (!(connectOptions.willMessage instanceof Message))
                throw new Error(format(ERROR.INVALID_TYPE, [connectOptions.willMessage, "connectOptions.willMessage"]));
              connectOptions.willMessage.stringPayload = null;
              if (typeof connectOptions.willMessage.destinationName === "undefined")
                throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.willMessage.destinationName, "connectOptions.willMessage.destinationName"]));
            }
            if (typeof connectOptions.cleanSession === "undefined")
              connectOptions.cleanSession = true;
            if (connectOptions.hosts) {
              if (!(connectOptions.hosts instanceof Array))
                throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
              if (connectOptions.hosts.length < 1)
                throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
              var usingURIs = false;
              for (var i2 = 0; i2 < connectOptions.hosts.length; i2++) {
                if (typeof connectOptions.hosts[i2] !== "string")
                  throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.hosts[i2], "connectOptions.hosts[" + i2 + "]"]));
                if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(connectOptions.hosts[i2])) {
                  if (i2 === 0) {
                    usingURIs = true;
                  } else if (!usingURIs) {
                    throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i2], "connectOptions.hosts[" + i2 + "]"]));
                  }
                } else if (usingURIs) {
                  throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i2], "connectOptions.hosts[" + i2 + "]"]));
                }
              }
              if (!usingURIs) {
                if (!connectOptions.ports)
                  throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
                if (!(connectOptions.ports instanceof Array))
                  throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
                if (connectOptions.hosts.length !== connectOptions.ports.length)
                  throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
                connectOptions.uris = [];
                for (var i2 = 0; i2 < connectOptions.hosts.length; i2++) {
                  if (typeof connectOptions.ports[i2] !== "number" || connectOptions.ports[i2] < 0)
                    throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.ports[i2], "connectOptions.ports[" + i2 + "]"]));
                  var host2 = connectOptions.hosts[i2];
                  var port2 = connectOptions.ports[i2];
                  var ipv6 = host2.indexOf(":") !== -1;
                  uri = "ws://" + (ipv6 ? "[" + host2 + "]" : host2) + ":" + port2 + path;
                  connectOptions.uris.push(uri);
                }
              } else {
                connectOptions.uris = connectOptions.hosts;
              }
            }
            client.connect(connectOptions);
          };
          this.subscribe = function(filter, subscribeOptions) {
            if (typeof filter !== "string" && filter.constructor !== Array)
              throw new Error("Invalid argument:" + filter);
            subscribeOptions = subscribeOptions || {};
            validate2(subscribeOptions, {
              qos: "number",
              invocationContext: "object",
              onSuccess: "function",
              onFailure: "function",
              timeout: "number"
            });
            if (subscribeOptions.timeout && !subscribeOptions.onFailure)
              throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
            if (typeof subscribeOptions.qos !== "undefined" && !(subscribeOptions.qos === 0 || subscribeOptions.qos === 1 || subscribeOptions.qos === 2))
              throw new Error(format(ERROR.INVALID_ARGUMENT, [subscribeOptions.qos, "subscribeOptions.qos"]));
            client.subscribe(filter, subscribeOptions);
          };
          this.unsubscribe = function(filter, unsubscribeOptions) {
            if (typeof filter !== "string" && filter.constructor !== Array)
              throw new Error("Invalid argument:" + filter);
            unsubscribeOptions = unsubscribeOptions || {};
            validate2(unsubscribeOptions, {
              invocationContext: "object",
              onSuccess: "function",
              onFailure: "function",
              timeout: "number"
            });
            if (unsubscribeOptions.timeout && !unsubscribeOptions.onFailure)
              throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
            client.unsubscribe(filter, unsubscribeOptions);
          };
          this.send = function(topic, payload, qos, retained) {
            var message;
            if (arguments.length === 0) {
              throw new Error("Invalid argument.length");
            } else if (arguments.length == 1) {
              if (!(topic instanceof Message) && typeof topic !== "string")
                throw new Error("Invalid argument:" + typeof topic);
              message = topic;
              if (typeof message.destinationName === "undefined")
                throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
              client.send(message);
            } else {
              message = new Message(payload);
              message.destinationName = topic;
              if (arguments.length >= 3)
                message.qos = qos;
              if (arguments.length >= 4)
                message.retained = retained;
              client.send(message);
            }
          };
          this.publish = function(topic, payload, qos, retained) {
            var message;
            if (arguments.length === 0) {
              throw new Error("Invalid argument.length");
            } else if (arguments.length == 1) {
              if (!(topic instanceof Message) && typeof topic !== "string")
                throw new Error("Invalid argument:" + typeof topic);
              message = topic;
              if (typeof message.destinationName === "undefined")
                throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
              client.send(message);
            } else {
              message = new Message(payload);
              message.destinationName = topic;
              if (arguments.length >= 3)
                message.qos = qos;
              if (arguments.length >= 4)
                message.retained = retained;
              client.send(message);
            }
          };
          this.disconnect = function() {
            client.disconnect();
          };
          this.getTraceLog = function() {
            return client.getTraceLog();
          };
          this.startTrace = function() {
            client.startTrace();
          };
          this.stopTrace = function() {
            client.stopTrace();
          };
          this.isConnected = function() {
            return client.connected;
          };
        };
        var Message = function(newPayload) {
          var payload;
          if (typeof newPayload === "string" || newPayload instanceof ArrayBuffer || ArrayBuffer.isView(newPayload) && !(newPayload instanceof DataView)) {
            payload = newPayload;
          } else {
            throw format(ERROR.INVALID_ARGUMENT, [newPayload, "newPayload"]);
          }
          var destinationName;
          var qos = 0;
          var retained = false;
          var duplicate = false;
          Object.defineProperties(this, {
            "payloadString": {
              enumerable: true,
              get: function() {
                if (typeof payload === "string")
                  return payload;
                else
                  return parseUTF8(payload, 0, payload.length);
              }
            },
            "payloadBytes": {
              enumerable: true,
              get: function() {
                if (typeof payload === "string") {
                  var buffer = new ArrayBuffer(UTF8Length(payload));
                  var byteStream = new Uint8Array(buffer);
                  stringToUTF8(payload, byteStream, 0);
                  return byteStream;
                } else {
                  return payload;
                }
              }
            },
            "destinationName": {
              enumerable: true,
              get: function() {
                return destinationName;
              },
              set: function(newDestinationName) {
                if (typeof newDestinationName === "string")
                  destinationName = newDestinationName;
                else
                  throw new Error(format(ERROR.INVALID_ARGUMENT, [newDestinationName, "newDestinationName"]));
              }
            },
            "qos": {
              enumerable: true,
              get: function() {
                return qos;
              },
              set: function(newQos) {
                if (newQos === 0 || newQos === 1 || newQos === 2)
                  qos = newQos;
                else
                  throw new Error("Invalid argument:" + newQos);
              }
            },
            "retained": {
              enumerable: true,
              get: function() {
                return retained;
              },
              set: function(newRetained) {
                if (typeof newRetained === "boolean")
                  retained = newRetained;
                else
                  throw new Error(format(ERROR.INVALID_ARGUMENT, [newRetained, "newRetained"]));
              }
            },
            "topic": {
              enumerable: true,
              get: function() {
                return destinationName;
              },
              set: function(newTopic) {
                destinationName = newTopic;
              }
            },
            "duplicate": {
              enumerable: true,
              get: function() {
                return duplicate;
              },
              set: function(newDuplicate) {
                duplicate = newDuplicate;
              }
            }
          });
        };
        return {
          Client: Client2,
          Message
        };
      }(typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      return PahoMQTT;
    });
  }
});

// ../../node_modules/graphql/language/location.js
var require_location = __commonJS({
  "../../node_modules/graphql/language/location.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getLocation = getLocation;
    function getLocation(source, position) {
      var lineRegexp = /\r\n|[\n\r]/g;
      var line = 1;
      var column = position + 1;
      var match;
      while ((match = lineRegexp.exec(source.body)) && match.index < position) {
        line += 1;
        column = position + 1 - (match.index + match[0].length);
      }
      return {
        line,
        column
      };
    }
  }
});

// ../../node_modules/graphql/error/printError.js
var require_printError = __commonJS({
  "../../node_modules/graphql/error/printError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printError = printError2;
    var _location = require_location();
    function printError2(error) {
      var printedLocations = [];
      if (error.nodes) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = error.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;
            if (node.loc) {
              printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, _location.getLocation)(node.loc.source, node.loc.start)));
            }
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
      } else if (error.source && error.locations) {
        var source = error.source;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = void 0;
        try {
          for (var _iterator2 = error.locations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var location = _step2.value;
            printedLocations.push(highlightSourceAtLocation(source, location));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join("\n\n") + "\n";
    }
    function highlightSourceAtLocation(source, location) {
      var firstLineColumnOffset = source.locationOffset.column - 1;
      var body = whitespace(firstLineColumnOffset) + source.body;
      var lineIndex = location.line - 1;
      var lineOffset = source.locationOffset.line - 1;
      var lineNum = location.line + lineOffset;
      var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
      var columnNum = location.column + columnOffset;
      var lines = body.split(/\r\n|[\n\r]/g);
      return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([
        ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]],
        ["".concat(lineNum, ": "), lines[lineIndex]],
        ["", whitespace(columnNum - 1) + "^"],
        ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]
      ]);
    }
    function printPrefixedLines(lines) {
      var existingLines = lines.filter(function(_ref) {
        var _ = _ref[0], line = _ref[1];
        return line !== void 0;
      });
      var padLen = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = void 0;
      try {
        for (var _iterator3 = existingLines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref4 = _step3.value;
          var prefix = _ref4[0];
          padLen = Math.max(padLen, prefix.length);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
      return existingLines.map(function(_ref3) {
        var prefix2 = _ref3[0], line = _ref3[1];
        return lpad(padLen, prefix2) + line;
      }).join("\n");
    }
    function whitespace(len) {
      return Array(len + 1).join(" ");
    }
    function lpad(len, str) {
      return whitespace(len - str.length) + str;
    }
  }
});

// ../../node_modules/graphql/error/GraphQLError.js
var require_GraphQLError = __commonJS({
  "../../node_modules/graphql/error/GraphQLError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLError = GraphQLError2;
    var _printError = require_printError();
    var _location = require_location();
    function GraphQLError2(message, nodes, source, positions, path, originalError, extensions) {
      var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : void 0 : nodes ? [nodes] : void 0;
      var _source = source;
      if (!_source && _nodes) {
        var node = _nodes[0];
        _source = node && node.loc && node.loc.source;
      }
      var _positions = positions;
      if (!_positions && _nodes) {
        _positions = _nodes.reduce(function(list, node2) {
          if (node2.loc) {
            list.push(node2.loc.start);
          }
          return list;
        }, []);
      }
      if (_positions && _positions.length === 0) {
        _positions = void 0;
      }
      var _locations;
      if (positions && source) {
        _locations = positions.map(function(pos) {
          return (0, _location.getLocation)(source, pos);
        });
      } else if (_nodes) {
        _locations = _nodes.reduce(function(list, node2) {
          if (node2.loc) {
            list.push((0, _location.getLocation)(node2.loc.source, node2.loc.start));
          }
          return list;
        }, []);
      }
      var _extensions = extensions || originalError && originalError.extensions;
      Object.defineProperties(this, {
        message: {
          value: message,
          enumerable: true,
          writable: true
        },
        locations: {
          value: _locations || void 0,
          enumerable: Boolean(_locations)
        },
        path: {
          value: path || void 0,
          enumerable: Boolean(path)
        },
        nodes: {
          value: _nodes || void 0
        },
        source: {
          value: _source || void 0
        },
        positions: {
          value: _positions || void 0
        },
        originalError: {
          value: originalError
        },
        extensions: {
          value: _extensions || void 0,
          enumerable: Boolean(_extensions)
        }
      });
      if (originalError && originalError.stack) {
        Object.defineProperty(this, "stack", {
          value: originalError.stack,
          writable: true,
          configurable: true
        });
      } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, GraphQLError2);
      } else {
        Object.defineProperty(this, "stack", {
          value: Error().stack,
          writable: true,
          configurable: true
        });
      }
    }
    GraphQLError2.prototype = Object.create(Error.prototype, {
      constructor: {
        value: GraphQLError2
      },
      name: {
        value: "GraphQLError"
      },
      toString: {
        value: function toString() {
          return (0, _printError.printError)(this);
        }
      }
    });
  }
});

// ../../node_modules/graphql/error/syntaxError.js
var require_syntaxError = __commonJS({
  "../../node_modules/graphql/error/syntaxError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.syntaxError = syntaxError;
    var _GraphQLError = require_GraphQLError();
    function syntaxError(source, position, description) {
      return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), void 0, source, [position]);
    }
  }
});

// ../../node_modules/graphql/error/locatedError.js
var require_locatedError = __commonJS({
  "../../node_modules/graphql/error/locatedError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.locatedError = locatedError;
    var _GraphQLError = require_GraphQLError();
    function locatedError(originalError, nodes, path) {
      if (originalError && Array.isArray(originalError.path)) {
        return originalError;
      }
      return new _GraphQLError.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
    }
  }
});

// ../../node_modules/graphql/jsutils/invariant.js
var require_invariant = __commonJS({
  "../../node_modules/graphql/jsutils/invariant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = invariant;
    function invariant(condition, message) {
      if (!condition) {
        throw new Error(message);
      }
    }
  }
});

// ../../node_modules/graphql/error/formatError.js
var require_formatError = __commonJS({
  "../../node_modules/graphql/error/formatError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatError = formatError2;
    var _invariant = _interopRequireDefault(require_invariant());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function formatError2(error) {
      !error ? (0, _invariant.default)(0, "Received null or undefined error.") : void 0;
      var message = error.message || "An unknown error occurred.";
      var locations = error.locations;
      var path = error.path;
      var extensions = error.extensions;
      return extensions ? {
        message,
        locations,
        path,
        extensions
      } : {
        message,
        locations,
        path
      };
    }
  }
});

// ../../node_modules/graphql/error/index.js
var require_error = __commonJS({
  "../../node_modules/graphql/error/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "GraphQLError", {
      enumerable: true,
      get: function get() {
        return _GraphQLError.GraphQLError;
      }
    });
    Object.defineProperty(exports, "syntaxError", {
      enumerable: true,
      get: function get() {
        return _syntaxError.syntaxError;
      }
    });
    Object.defineProperty(exports, "locatedError", {
      enumerable: true,
      get: function get() {
        return _locatedError.locatedError;
      }
    });
    Object.defineProperty(exports, "printError", {
      enumerable: true,
      get: function get() {
        return _printError.printError;
      }
    });
    Object.defineProperty(exports, "formatError", {
      enumerable: true,
      get: function get() {
        return _formatError.formatError;
      }
    });
    var _GraphQLError = require_GraphQLError();
    var _syntaxError = require_syntaxError();
    var _locatedError = require_locatedError();
    var _printError = require_printError();
    var _formatError = require_formatError();
  }
});

// ../../node_modules/url/node_modules/punycode/punycode.js
var require_punycode = __commonJS({
  "../../node_modules/url/node_modules/punycode/punycode.js"(exports, module) {
    (function(root) {
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = typeof module == "object" && module && !module.nodeType && module;
      var freeGlobal = typeof window == "object" && window;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }
      var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
      function error(type) {
        throw RangeError(errors[type]);
      }
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      function ucs2encode(array) {
        return map(array, function(value) {
          var output = "";
          if (value > 65535) {
            value -= 65536;
            output += stringFromCharCode(value >>> 10 & 1023 | 55296);
            value = 56320 | value & 1023;
          }
          output += stringFromCharCode(value);
          return output;
        }).join("");
      }
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      function decode(input) {
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          for (oldi = i, w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error("invalid-input");
            }
            digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error("overflow");
            }
            i += digit * w;
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error("overflow");
            }
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error("overflow");
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
        input = ucs2decode(input);
        inputLength = input.length;
        n = initialN;
        delta = 0;
        bias = initialBias;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 128) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        handledCPCount = basicLength = output.length;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) {
              error("overflow");
            }
            if (currentValue == n) {
              for (q = delta, k = base; ; k += base) {
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      }
      function toUnicode(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }
      function toASCII(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
      }
      punycode = {
        "version": "1.3.2",
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define("punycode", function() {
          return punycode;
        });
      } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          freeModule.exports = punycode;
        } else {
          for (key in punycode) {
            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
          }
        }
      } else {
        root.punycode = punycode;
      }
    })(exports);
  }
});

// ../../node_modules/url/util.js
var require_util = __commonJS({
  "../../node_modules/url/util.js"(exports, module) {
    "use strict";
    module.exports = {
      isString: function(arg) {
        return typeof arg === "string";
      },
      isObject: function(arg) {
        return typeof arg === "object" && arg !== null;
      },
      isNull: function(arg) {
        return arg === null;
      },
      isNullOrUndefined: function(arg) {
        return arg == null;
      }
    };
  }
});

// ../../node_modules/url/node_modules/querystring/decode.js
var require_decode = __commonJS({
  "../../node_modules/url/node_modules/querystring/decode.js"(exports, module) {
    "use strict";
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    module.exports = function(qs, sep, eq, options) {
      sep = sep || "&";
      eq = eq || "=";
      var obj = {};
      if (typeof qs !== "string" || qs.length === 0) {
        return obj;
      }
      var regexp = /\+/g;
      qs = qs.split(sep);
      var maxKeys = 1e3;
      if (options && typeof options.maxKeys === "number") {
        maxKeys = options.maxKeys;
      }
      var len = qs.length;
      if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
      }
      for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = "";
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) {
          obj[k] = v;
        } else if (Array.isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }
      return obj;
    };
  }
});

// ../../node_modules/url/node_modules/querystring/encode.js
var require_encode = __commonJS({
  "../../node_modules/url/node_modules/querystring/encode.js"(exports, module) {
    "use strict";
    var stringifyPrimitive = function(v) {
      switch (typeof v) {
        case "string":
          return v;
        case "boolean":
          return v ? "true" : "false";
        case "number":
          return isFinite(v) ? v : "";
        default:
          return "";
      }
    };
    module.exports = function(obj, sep, eq, name) {
      sep = sep || "&";
      eq = eq || "=";
      if (obj === null) {
        obj = void 0;
      }
      if (typeof obj === "object") {
        return Object.keys(obj).map(function(k) {
          var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
          if (Array.isArray(obj[k])) {
            return obj[k].map(function(v) {
              return ks + encodeURIComponent(stringifyPrimitive(v));
            }).join(sep);
          } else {
            return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
          }
        }).join(sep);
      }
      if (!name)
        return "";
      return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
    };
  }
});

// ../../node_modules/url/node_modules/querystring/index.js
var require_querystring = __commonJS({
  "../../node_modules/url/node_modules/querystring/index.js"(exports) {
    "use strict";
    exports.decode = exports.parse = require_decode();
    exports.encode = exports.stringify = require_encode();
  }
});

// ../../node_modules/url/url.js
var require_url = __commonJS({
  "../../node_modules/url/url.js"(exports) {
    "use strict";
    var punycode = require_punycode();
    var util = require_util();
    exports.parse = urlParse;
    exports.resolve = urlResolve;
    exports.resolveObject = urlResolveObject;
    exports.format = urlFormat;
    exports.Url = Url;
    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.host = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.query = null;
      this.pathname = null;
      this.path = null;
      this.href = null;
    }
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var unsafeProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    var querystring = require_querystring();
    function urlParse(url2, parseQueryString, slashesDenoteHost) {
      if (url2 && util.isObject(url2) && url2 instanceof Url)
        return url2;
      var u = new Url();
      u.parse(url2, parseQueryString, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url2, parseQueryString, slashesDenoteHost) {
      if (!util.isString(url2)) {
        throw new TypeError("Parameter 'url' must be a string, not " + typeof url2);
      }
      var queryIndex = url2.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url2.indexOf("#") ? "?" : "#", uSplit = url2.split(splitter), slashRegex = /\\/g;
      uSplit[0] = uSplit[0].replace(slashRegex, "/");
      url2 = uSplit.join(splitter);
      var rest = url2;
      rest = rest.trim();
      if (!slashesDenoteHost && url2.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.path = rest;
          this.href = rest;
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
            if (parseQueryString) {
              this.query = querystring.parse(this.search.substr(1));
            } else {
              this.query = this.search.substr(1);
            }
          } else if (parseQueryString) {
            this.search = "";
            this.query = {};
          }
          return this;
        }
      }
      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
      }
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }
      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;
        for (var i = 0; i < hostEndingChars.length; i++) {
          var hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }
        var auth, atSign;
        if (hostEnd === -1) {
          atSign = rest.lastIndexOf("@");
        } else {
          atSign = rest.lastIndexOf("@", hostEnd);
        }
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = decodeURIComponent(auth);
        }
        hostEnd = -1;
        for (var i = 0; i < nonHostChars.length; i++) {
          var hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }
        if (hostEnd === -1)
          hostEnd = rest.length;
        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        this.parseHost();
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (var i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part)
              continue;
            if (!part.match(hostnamePartPattern)) {
              var newpart = "";
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = "/" + notHost.join(".") + rest;
                }
                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }
        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        } else {
          this.hostname = this.hostname.toLowerCase();
        }
        if (!ipv6Hostname) {
          this.hostname = punycode.toASCII(this.hostname);
        }
        var p = this.port ? ":" + this.port : "";
        var h = this.hostname || "";
        this.host = h + p;
        this.href += this.host;
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
          if (rest[0] !== "/") {
            rest = "/" + rest;
          }
        }
      }
      if (!unsafeProtocol[lowerProto]) {
        for (var i = 0, l = autoEscape.length; i < l; i++) {
          var ae = autoEscape[i];
          if (rest.indexOf(ae) === -1)
            continue;
          var esc = encodeURIComponent(ae);
          if (esc === ae) {
            esc = escape(ae);
          }
          rest = rest.split(ae).join(esc);
        }
      }
      var hash = rest.indexOf("#");
      if (hash !== -1) {
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf("?");
      if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) {
          this.query = querystring.parse(this.query);
        }
        rest = rest.slice(0, qm);
      } else if (parseQueryString) {
        this.search = "";
        this.query = {};
      }
      if (rest)
        this.pathname = rest;
      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "/";
      }
      if (this.pathname || this.search) {
        var p = this.pathname || "";
        var s = this.search || "";
        this.path = p + s;
      }
      this.href = this.format();
      return this;
    };
    function urlFormat(obj) {
      if (util.isString(obj))
        obj = urlParse(obj);
      if (!(obj instanceof Url))
        return Url.prototype.format.call(obj);
      return obj.format();
    }
    Url.prototype.format = function() {
      var auth = this.auth || "";
      if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
      }
      var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
      if (this.host) {
        host = auth + this.host;
      } else if (this.hostname) {
        host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
        if (this.port) {
          host += ":" + this.port;
        }
      }
      if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
        query = querystring.stringify(this.query);
      }
      var search = this.search || query && "?" + query || "";
      if (protocol && protocol.substr(-1) !== ":")
        protocol += ":";
      if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname.charAt(0) !== "/")
          pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash.charAt(0) !== "#")
        hash = "#" + hash;
      if (search && search.charAt(0) !== "?")
        search = "?" + search;
      pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
      });
      search = search.replace("#", "%23");
      return protocol + host + pathname + search + hash;
    };
    function urlResolve(source, relative) {
      return urlParse(source, false, true).resolve(relative);
    }
    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };
    function urlResolveObject(source, relative) {
      if (!source)
        return relative;
      return urlParse(source, false, true).resolveObject(relative);
    }
    Url.prototype.resolveObject = function(relative) {
      if (util.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }
      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }
      result.hash = relative.hash;
      if (relative.href === "") {
        result.href = result.format();
        return result;
      }
      if (relative.slashes && !relative.protocol) {
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== "protocol")
            result[rkey] = relative[rkey];
        }
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
          result.path = result.pathname = "/";
        }
        result.href = result.format();
        return result;
      }
      if (relative.protocol && relative.protocol !== result.protocol) {
        if (!slashedProtocol[relative.protocol]) {
          var keys = Object.keys(relative);
          for (var v = 0; v < keys.length; v++) {
            var k = keys[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          var relPath = (relative.pathname || "").split("/");
          while (relPath.length && !(relative.host = relPath.shift()))
            ;
          if (!relative.host)
            relative.host = "";
          if (!relative.hostname)
            relative.hostname = "";
          if (relPath[0] !== "")
            relPath.unshift("");
          if (relPath.length < 2)
            relPath.unshift("");
          result.pathname = relPath.join("/");
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        if (result.pathname || result.search) {
          var p = result.pathname || "";
          var s = result.search || "";
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }
      var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
      if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
          if (srcPath[0] === "")
            srcPath[0] = result.host;
          else
            srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === "")
              relPath[0] = relative.host;
            else
              relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
      }
      if (isRelAbs) {
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
      } else if (relPath.length) {
        if (!srcPath)
          srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!util.isNullOrUndefined(relative.search)) {
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.href = result.format();
        return result;
      }
      if (!srcPath.length) {
        result.pathname = null;
        if (result.search) {
          result.path = "/" + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
          srcPath.splice(i, 1);
        } else if (last === "..") {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift("..");
        }
      }
      if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
        srcPath.unshift("");
      }
      if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
        srcPath.push("");
      }
      var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      mustEndAbs = mustEndAbs || result.host && srcPath.length;
      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
      }
      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join("/");
      }
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };
    Url.prototype.parseHost = function() {
      var host = this.host;
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ":") {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host)
        this.hostname = host;
    };
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
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
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
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
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
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
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
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
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
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
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
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    Buffer3.TYPED_ARRAY_SUPPORT = window.TYPED_ARRAY_SUPPORT !== void 0 ? window.TYPED_ARRAY_SUPPORT : typedArraySupport();
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
      return Buffer3.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError("Invalid typed array length");
      }
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        that = new Uint8Array(length);
        that.__proto__ = Buffer3.prototype;
      } else {
        if (that === null) {
          that = new Buffer3(length);
        }
        that.length = length;
      }
      return that;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (!Buffer3.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer3)) {
        return new Buffer3(arg, encodingOrOffset, length);
      }
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new Error("If encoding is specified then the first argument must be a string");
        }
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    Buffer3._augment = function(arr) {
      arr.__proto__ = Buffer3.prototype;
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
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer3.TYPED_ARRAY_SUPPORT) {
      Buffer3.prototype.__proto__ = Uint8Array.prototype;
      Buffer3.__proto__ = Uint8Array;
      if (typeof Symbol !== "undefined" && Symbol.species && Buffer3[Symbol.species] === Buffer3) {
        Object.defineProperty(Buffer3, Symbol.species, {
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
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };
    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer3.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that;
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    function fromString(that, string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
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
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
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
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        that = array;
        that.__proto__ = Buffer3.prototype;
      } else {
        that = fromArrayLike(that, array);
      }
      return that;
    }
    function fromObject(that, obj) {
      if (Buffer3.isBuffer(obj)) {
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
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };
    Buffer3.compare = function compare(a, b) {
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
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
    Buffer3.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer3.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
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
    Buffer3.byteLength = byteLength;
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
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer3.isBuffer(target)) {
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
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
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
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (Buffer3.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
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
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
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
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
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
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
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
    Buffer3.prototype.toJSON = function toJSON() {
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
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
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
        i += bytesPerSequence;
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
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
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
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
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
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer3.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer3(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
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
    Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
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
    Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer3.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 65535 + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
      }
    }
    Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
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
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
      }
    }
    Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer3.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer3.TYPED_ARRAY_SUPPORT) {
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
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
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
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer3.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
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
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
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
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer3.isBuffer(val) ? val : utf8ToBytes(new Buffer3(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
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
    function toHex(n) {
      if (n < 16)
        return "0" + n.toString(16);
      return n.toString(16);
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
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
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isnan(val) {
      return val !== val;
    }
  }
});

// ../../node_modules/zen-observable-ts/lib/bundle.esm.js
var import_zen_observable = __toModule(require_zen_observable());
var Observable = import_zen_observable.default;
var bundle_esm_default = Observable;

// src/PubSub.ts
import {
  Amplify,
  browserOrNode,
  ConsoleLogger as Logger5,
  INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER,
  INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Providers/PubSubProvider.ts
import { ConsoleLogger as Logger } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger = new Logger("AbstractPubSubProvider");
var AbstractPubSubProvider = class {
  constructor(options = {}) {
    this._config = options;
  }
  configure(config = {}) {
    this._config = { ...config, ...this._config };
    logger.debug(`configure ${this.getProviderName()}`, this._config);
    return this.options;
  }
  getCategory() {
    return "PubSub";
  }
  get options() {
    return { ...this._config };
  }
};

// src/Providers/AWSAppSyncProvider.ts
import { ConsoleLogger as Logger3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Providers/MqttOverWSProvider.ts
var Paho = __toModule(require_paho_mqtt());

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

// node_modules/uuid/dist/esm-browser/v4.js
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

// src/Providers/MqttOverWSProvider.ts
import { ConsoleLogger as Logger2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger2 = new Logger2("MqttOverWSProvider");
function mqttTopicMatch(filter, topic) {
  const filterArray = filter.split("/");
  const length = filterArray.length;
  const topicArray = topic.split("/");
  for (let i = 0; i < length; ++i) {
    const left = filterArray[i];
    const right = topicArray[i];
    if (left === "#")
      return topicArray.length >= length;
    if (left !== "+" && left !== right)
      return false;
  }
  return length === topicArray.length;
}
var ClientsQueue = class {
  constructor() {
    this.promises = new Map();
  }
  async get(clientId, clientFactory) {
    let promise = this.promises.get(clientId);
    if (promise) {
      return promise;
    }
    promise = clientFactory(clientId);
    this.promises.set(clientId, promise);
    return promise;
  }
  get allClients() {
    return Array.from(this.promises.keys());
  }
  remove(clientId) {
    this.promises.delete(clientId);
  }
};
var topicSymbol = typeof Symbol !== "undefined" ? Symbol("topic") : "@@topic";
var MqttOverWSProvider = class extends AbstractPubSubProvider {
  constructor(options = {}) {
    super({ ...options, clientId: options.clientId || v4_default() });
    this._clientsQueue = new ClientsQueue();
    this._topicObservers = new Map();
    this._clientIdObservers = new Map();
  }
  get clientId() {
    return this.options.clientId;
  }
  get endpoint() {
    return this.options.aws_pubsub_endpoint;
  }
  get clientsQueue() {
    return this._clientsQueue;
  }
  get isSSLEnabled() {
    return !this.options.aws_appsync_dangerously_connect_to_http_endpoint_for_testing;
  }
  getTopicForValue(value) {
    return typeof value === "object" && value[topicSymbol];
  }
  getProviderName() {
    return "MqttOverWSProvider";
  }
  onDisconnect({ clientId, errorCode, ...args }) {
    if (errorCode !== 0) {
      logger2.warn(clientId, JSON.stringify({ errorCode, ...args }, null, 2));
      const topicsToDelete = [];
      const clientIdObservers = this._clientIdObservers.get(clientId);
      if (!clientIdObservers) {
        return;
      }
      clientIdObservers.forEach((observer) => {
        observer.error("Disconnected, error code: " + errorCode);
        this._topicObservers.forEach((observerForTopic, observerTopic) => {
          observerForTopic.delete(observer);
          if (observerForTopic.size === 0) {
            topicsToDelete.push(observerTopic);
          }
        });
      });
      this._clientIdObservers.delete(clientId);
      topicsToDelete.forEach((topic) => {
        this._topicObservers.delete(topic);
      });
    }
  }
  async newClient({
    url: url2,
    clientId
  }) {
    logger2.debug("Creating new MQTT client", clientId);
    const client = new Paho.Client(url2, clientId);
    client.onMessageArrived = ({
      destinationName: topic,
      payloadString: msg
    }) => {
      this._onMessage(topic, msg);
    };
    client.onConnectionLost = ({ errorCode, ...args }) => {
      this.onDisconnect({ clientId, errorCode, ...args });
    };
    await new Promise((resolve, reject) => {
      client.connect({
        useSSL: this.isSSLEnabled,
        mqttVersion: 3,
        onSuccess: () => resolve(client),
        onFailure: reject
      });
    });
    return client;
  }
  async connect(clientId, options = {}) {
    return await this.clientsQueue.get(clientId, (clientId2) => this.newClient({ ...options, clientId: clientId2 }));
  }
  async disconnect(clientId) {
    const client = await this.clientsQueue.get(clientId, () => null);
    if (client && client.isConnected()) {
      client.disconnect();
    }
    this.clientsQueue.remove(clientId);
  }
  async publish(topics, msg) {
    const targetTopics = [].concat(topics);
    const message = JSON.stringify(msg);
    const url2 = await this.endpoint;
    const client = await this.connect(this.clientId, { url: url2 });
    logger2.debug("Publishing to topic(s)", targetTopics.join(","), message);
    targetTopics.forEach((topic) => client.send(topic, message));
  }
  _onMessage(topic, msg) {
    try {
      const matchedTopicObservers = [];
      this._topicObservers.forEach((observerForTopic, observerTopic) => {
        if (mqttTopicMatch(observerTopic, topic)) {
          matchedTopicObservers.push(observerForTopic);
        }
      });
      const parsedMessage = JSON.parse(msg);
      if (typeof parsedMessage === "object") {
        parsedMessage[topicSymbol] = topic;
      }
      matchedTopicObservers.forEach((observersForTopic) => {
        observersForTopic.forEach((observer) => observer.next(parsedMessage));
      });
    } catch (error) {
      logger2.warn("Error handling message", error, msg);
    }
  }
  subscribe(topics, options = {}) {
    const targetTopics = [].concat(topics);
    logger2.debug("Subscribing to topic(s)", targetTopics.join(","));
    return new bundle_esm_default((observer) => {
      targetTopics.forEach((topic) => {
        let observersForTopic = this._topicObservers.get(topic);
        if (!observersForTopic) {
          observersForTopic = new Set();
          this._topicObservers.set(topic, observersForTopic);
        }
        observersForTopic.add(observer);
      });
      let client;
      const { clientId = this.clientId } = options;
      let observersForClientId = this._clientIdObservers.get(clientId);
      if (!observersForClientId) {
        observersForClientId = new Set();
      }
      observersForClientId.add(observer);
      this._clientIdObservers.set(clientId, observersForClientId);
      (async () => {
        const { url: url2 = await this.endpoint } = options;
        try {
          client = await this.connect(clientId, { url: url2 });
          targetTopics.forEach((topic) => {
            client.subscribe(topic);
          });
        } catch (e) {
          observer.error(e);
        }
      })();
      return () => {
        logger2.debug("Unsubscribing from topic(s)", targetTopics.join(","));
        if (client) {
          this._clientIdObservers.get(clientId).delete(observer);
          if (this._clientIdObservers.get(clientId).size === 0) {
            this.disconnect(clientId);
            this._clientIdObservers.delete(clientId);
          }
          targetTopics.forEach((topic) => {
            const observersForTopic = this._topicObservers.get(topic) || new Set();
            observersForTopic.delete(observer);
            if (observersForTopic.size === 0) {
              this._topicObservers.delete(topic);
              if (client.isConnected()) {
                client.unsubscribe(topic);
              }
            }
          });
        }
        return null;
      };
    });
  }
};

// src/Providers/AWSAppSyncProvider.ts
var logger3 = new Logger3("AWSAppSyncProvider");
var AWSAppSyncProvider = class extends MqttOverWSProvider {
  constructor() {
    super(...arguments);
    this._topicClient = new Map();
    this._topicAlias = new Map();
  }
  get endpoint() {
    throw new Error("Not supported");
  }
  getProviderName() {
    return "AWSAppSyncProvider";
  }
  async publish(topics, msg, options) {
    throw new Error("Operation not supported");
  }
  _cleanUp(clientId) {
    const topicsForClient = Array.from(this._topicClient.entries()).filter(([, c]) => c.clientId === clientId).map(([t]) => t);
    topicsForClient.forEach((t) => this._cleanUpForTopic(t));
  }
  _cleanUpForTopic(topic) {
    this._topicClient.delete(topic);
    this._topicAlias.delete(topic);
  }
  onDisconnect({ clientId, errorCode, ...args }) {
    if (errorCode !== 0) {
      const topicsForClient = Array.from(this._topicClient.entries()).filter(([, c]) => c.clientId === clientId).map(([t]) => t);
      topicsForClient.forEach((topic) => {
        if (this._topicObservers.has(topic)) {
          this._topicObservers.get(topic).forEach((obs) => {
            if (!obs.closed) {
              obs.error(args);
            }
          });
          this._topicObservers.delete(topic);
        }
      });
      this._cleanUp(clientId);
    }
  }
  async disconnect(clientId) {
    const client = await this.clientsQueue.get(clientId, () => null);
    await super.disconnect(clientId);
    this._cleanUp(clientId);
  }
  subscribe(topics, options = {}) {
    const result = new bundle_esm_default((observer) => {
      const targetTopics = [].concat(topics);
      logger3.debug("Subscribing to topic(s)", targetTopics.join(","));
      (async () => {
        targetTopics.forEach((t) => {
          if (!this._topicObservers.has(t)) {
            this._topicObservers.set(t, new Set());
          }
          this._topicObservers.get(t).add(observer);
        });
        const { mqttConnections = [], newSubscriptions } = options;
        const newAliases = Object.entries(newSubscriptions).map(([alias, v]) => [v.topic, alias]);
        this._topicAlias = new Map([
          ...Array.from(this._topicAlias.entries()),
          ...newAliases
        ]);
        const map = Object.entries(targetTopics.reduce((acc, elem) => {
          const connectionInfoForTopic = mqttConnections.find((c) => c.topics.indexOf(elem) > -1);
          if (connectionInfoForTopic) {
            const { client: clientId, url: url2 } = connectionInfoForTopic;
            if (!acc[clientId]) {
              acc[clientId] = {
                url: url2,
                topics: new Set()
              };
            }
            acc[clientId].topics.add(elem);
          }
          return acc;
        }, {}));
        await Promise.all(map.map(async ([clientId, { url: url2, topics: topics2 }]) => {
          let client = null;
          try {
            client = await this.connect(clientId, {
              clientId,
              url: url2
            });
          } catch (err) {
            observer.error({ message: "Failed to connect", error: err });
            observer.complete();
            return void 0;
          }
          topics2.forEach((topic) => {
            if (client.isConnected()) {
              client.subscribe(topic);
              this._topicClient.set(topic, client);
            }
          });
          return client;
        }));
      })();
      return () => {
        logger3.debug("Unsubscribing from topic(s)", targetTopics.join(","));
        targetTopics.forEach((t) => {
          const client = this._topicClient.get(t);
          if (client && client.isConnected()) {
            client.unsubscribe(t);
            this._topicClient.delete(t);
            if (!Array.from(this._topicClient.values()).some((c) => c === client)) {
              this.disconnect(client.clientId);
            }
          }
          this._topicObservers.delete(t);
        });
      };
    });
    return bundle_esm_default.from(result).map((value) => {
      const topic = this.getTopicForValue(value);
      const alias = this._topicAlias.get(topic);
      value.data = Object.entries(value.data).reduce((obj, [origKey, val]) => (obj[alias || origKey] = val, obj), {});
      return value;
    });
  }
};

// ../../node_modules/graphql/index.mjs
var import_error = __toModule(require_error());

// src/Providers/AWSAppSyncRealTimeProvider.ts
var url = __toModule(require_url());
var import_buffer = __toModule(require_buffer());
import {
  Logger as Logger4,
  Credentials,
  Signer,
  Hub,
  Constants,
  USER_AGENT_HEADER,
  jitteredExponentialRetry,
  NonRetryableError
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
import Cache from "http://localhost:8080/packages/cache/4.0.24/cache-esm.js";
import Auth from "http://localhost:8080/packages/auth/4.3.12/auth-esm.js";
var logger4 = new Logger4("AWSAppSyncRealTimeProvider");
var AMPLIFY_SYMBOL = typeof Symbol !== "undefined" && typeof Symbol.for === "function" ? Symbol.for("amplify_default") : "@@amplify_default";
var dispatchApiEvent = (event, data, message) => {
  Hub.dispatch("api", { event, data, message }, "PubSub", AMPLIFY_SYMBOL);
};
var MAX_DELAY_MS = 5e3;
var NON_RETRYABLE_CODES = [400, 401, 403];
var MESSAGE_TYPES;
(function(MESSAGE_TYPES2) {
  MESSAGE_TYPES2["GQL_CONNECTION_INIT"] = "connection_init";
  MESSAGE_TYPES2["GQL_CONNECTION_ERROR"] = "connection_error";
  MESSAGE_TYPES2["GQL_CONNECTION_ACK"] = "connection_ack";
  MESSAGE_TYPES2["GQL_START"] = "start";
  MESSAGE_TYPES2["GQL_START_ACK"] = "start_ack";
  MESSAGE_TYPES2["GQL_DATA"] = "data";
  MESSAGE_TYPES2["GQL_CONNECTION_KEEP_ALIVE"] = "ka";
  MESSAGE_TYPES2["GQL_STOP"] = "stop";
  MESSAGE_TYPES2["GQL_COMPLETE"] = "complete";
  MESSAGE_TYPES2["GQL_ERROR"] = "error";
})(MESSAGE_TYPES || (MESSAGE_TYPES = {}));
var SUBSCRIPTION_STATUS;
(function(SUBSCRIPTION_STATUS2) {
  SUBSCRIPTION_STATUS2[SUBSCRIPTION_STATUS2["PENDING"] = 0] = "PENDING";
  SUBSCRIPTION_STATUS2[SUBSCRIPTION_STATUS2["CONNECTED"] = 1] = "CONNECTED";
  SUBSCRIPTION_STATUS2[SUBSCRIPTION_STATUS2["FAILED"] = 2] = "FAILED";
})(SUBSCRIPTION_STATUS || (SUBSCRIPTION_STATUS = {}));
var SOCKET_STATUS;
(function(SOCKET_STATUS2) {
  SOCKET_STATUS2[SOCKET_STATUS2["CLOSED"] = 0] = "CLOSED";
  SOCKET_STATUS2[SOCKET_STATUS2["READY"] = 1] = "READY";
  SOCKET_STATUS2[SOCKET_STATUS2["CONNECTING"] = 2] = "CONNECTING";
})(SOCKET_STATUS || (SOCKET_STATUS = {}));
var AWS_APPSYNC_REALTIME_HEADERS = {
  accept: "application/json, text/javascript",
  "content-encoding": "amz-1.0",
  "content-type": "application/json; charset=UTF-8"
};
var CONNECTION_INIT_TIMEOUT = 15e3;
var START_ACK_TIMEOUT = 15e3;
var DEFAULT_KEEP_ALIVE_TIMEOUT = 5 * 60 * 1e3;
var AWSAppSyncRealTimeProvider = class extends AbstractPubSubProvider {
  constructor() {
    super(...arguments);
    this.socketStatus = 0;
    this.keepAliveTimeout = DEFAULT_KEEP_ALIVE_TIMEOUT;
    this.subscriptionObserverMap = new Map();
    this.promiseArray = [];
  }
  getProviderName() {
    return "AWSAppSyncRealTimeProvider";
  }
  newClient() {
    throw new Error("Not used here");
  }
  async publish(_topics, _msg, _options) {
    throw new Error("Operation not supported");
  }
  subscribe(_topics, options) {
    const { appSyncGraphqlEndpoint } = options;
    return new bundle_esm_default((observer) => {
      if (!appSyncGraphqlEndpoint) {
        observer.error({
          errors: [
            {
              ...new import_error.GraphQLError(`Subscribe only available for AWS AppSync endpoint`)
            }
          ]
        });
        observer.complete();
      } else {
        const subscriptionId = v4_default();
        this._startSubscriptionWithAWSAppSyncRealTime({
          options,
          observer,
          subscriptionId
        }).catch((err) => {
          observer.error({
            errors: [
              {
                ...new import_error.GraphQLError(`${CONTROL_MSG.REALTIME_SUBSCRIPTION_INIT_ERROR}: ${err}`)
              }
            ]
          });
          observer.complete();
        });
        return async () => {
          try {
            await this._waitForSubscriptionToBeConnected(subscriptionId);
            const { subscriptionState } = this.subscriptionObserverMap.get(subscriptionId) || {};
            if (!subscriptionState) {
              return;
            }
            if (subscriptionState === 1) {
              this._sendUnsubscriptionMessage(subscriptionId);
            } else {
              throw new Error("Subscription never connected");
            }
          } catch (err) {
            logger4.debug(`Error while unsubscribing ${err}`);
          } finally {
            this._removeSubscriptionObserver(subscriptionId);
          }
        };
      }
    });
  }
  get isSSLEnabled() {
    return !this.options.aws_appsync_dangerously_connect_to_http_endpoint_for_testing;
  }
  async _startSubscriptionWithAWSAppSyncRealTime({
    options,
    observer,
    subscriptionId
  }) {
    const {
      appSyncGraphqlEndpoint,
      authenticationType,
      query,
      variables,
      apiKey,
      region,
      graphql_headers = () => ({}),
      additionalHeaders = {}
    } = options;
    const subscriptionState = 0;
    const data = {
      query,
      variables
    };
    this.subscriptionObserverMap.set(subscriptionId, {
      observer,
      query,
      variables,
      subscriptionState,
      startAckTimeoutId: null
    });
    const dataString = JSON.stringify(data);
    const headerObj = {
      ...await this._awsRealTimeHeaderBasedAuth({
        apiKey,
        appSyncGraphqlEndpoint,
        authenticationType,
        payload: dataString,
        canonicalUri: "",
        region,
        additionalHeaders
      }),
      ...await graphql_headers(),
      ...additionalHeaders,
      [USER_AGENT_HEADER]: Constants.userAgent
    };
    const subscriptionMessage = {
      id: subscriptionId,
      payload: {
        data: dataString,
        extensions: {
          authorization: {
            ...headerObj
          }
        }
      },
      type: MESSAGE_TYPES.GQL_START
    };
    const stringToAWSRealTime = JSON.stringify(subscriptionMessage);
    try {
      await this._initializeWebSocketConnection({
        apiKey,
        appSyncGraphqlEndpoint,
        authenticationType,
        region,
        additionalHeaders
      });
    } catch (err) {
      logger4.debug({ err });
      const { message = "" } = err;
      observer.error({
        errors: [
          {
            ...new import_error.GraphQLError(`${CONTROL_MSG.CONNECTION_FAILED}: ${message}`)
          }
        ]
      });
      observer.complete();
      const { subscriptionFailedCallback: subscriptionFailedCallback2 } = this.subscriptionObserverMap.get(subscriptionId) || {};
      if (typeof subscriptionFailedCallback2 === "function") {
        subscriptionFailedCallback2();
      }
      return;
    }
    const {
      subscriptionFailedCallback,
      subscriptionReadyCallback
    } = this.subscriptionObserverMap.get(subscriptionId);
    this.subscriptionObserverMap.set(subscriptionId, {
      observer,
      subscriptionState,
      variables,
      query,
      subscriptionReadyCallback,
      subscriptionFailedCallback,
      startAckTimeoutId: setTimeout(() => {
        this._timeoutStartSubscriptionAck.call(this, subscriptionId);
      }, START_ACK_TIMEOUT)
    });
    if (this.awsRealTimeSocket) {
      this.awsRealTimeSocket.send(stringToAWSRealTime);
    }
  }
  async _waitForSubscriptionToBeConnected(subscriptionId) {
    const { subscriptionState } = this.subscriptionObserverMap.get(subscriptionId);
    if (subscriptionState === 0) {
      return new Promise((res, rej) => {
        const {
          observer,
          subscriptionState: subscriptionState2,
          variables,
          query
        } = this.subscriptionObserverMap.get(subscriptionId);
        this.subscriptionObserverMap.set(subscriptionId, {
          observer,
          subscriptionState: subscriptionState2,
          variables,
          query,
          subscriptionReadyCallback: res,
          subscriptionFailedCallback: rej
        });
      });
    }
  }
  _sendUnsubscriptionMessage(subscriptionId) {
    try {
      if (this.awsRealTimeSocket && this.awsRealTimeSocket.readyState === WebSocket.OPEN && this.socketStatus === 1) {
        const unsubscribeMessage = {
          id: subscriptionId,
          type: MESSAGE_TYPES.GQL_STOP
        };
        const stringToAWSRealTime = JSON.stringify(unsubscribeMessage);
        this.awsRealTimeSocket.send(stringToAWSRealTime);
      }
    } catch (err) {
      logger4.debug({ err });
    }
  }
  _removeSubscriptionObserver(subscriptionId) {
    this.subscriptionObserverMap.delete(subscriptionId);
    setTimeout(this._closeSocketIfRequired.bind(this), 1e3);
  }
  _closeSocketIfRequired() {
    if (this.subscriptionObserverMap.size > 0) {
      return;
    }
    if (!this.awsRealTimeSocket) {
      this.socketStatus = 0;
      return;
    }
    if (this.awsRealTimeSocket.bufferedAmount > 0) {
      setTimeout(this._closeSocketIfRequired.bind(this), 1e3);
    } else {
      logger4.debug("closing WebSocket...");
      clearTimeout(this.keepAliveTimeoutId);
      const tempSocket = this.awsRealTimeSocket;
      tempSocket.onclose = void 0;
      tempSocket.onerror = void 0;
      tempSocket.close(1e3);
      this.awsRealTimeSocket = null;
      this.socketStatus = 0;
    }
  }
  _handleIncomingSubscriptionMessage(message) {
    logger4.debug(`subscription message from AWS AppSync RealTime: ${message.data}`);
    const { id = "", payload, type } = JSON.parse(message.data);
    const {
      observer = null,
      query = "",
      variables = {},
      startAckTimeoutId,
      subscriptionReadyCallback,
      subscriptionFailedCallback
    } = this.subscriptionObserverMap.get(id) || {};
    logger4.debug({ id, observer, query, variables });
    if (type === MESSAGE_TYPES.GQL_DATA && payload && payload.data) {
      if (observer) {
        observer.next(payload);
      } else {
        logger4.debug(`observer not found for id: ${id}`);
      }
      return;
    }
    if (type === MESSAGE_TYPES.GQL_START_ACK) {
      logger4.debug(`subscription ready for ${JSON.stringify({ query, variables })}`);
      if (typeof subscriptionReadyCallback === "function") {
        subscriptionReadyCallback();
      }
      clearTimeout(startAckTimeoutId);
      dispatchApiEvent(CONTROL_MSG.SUBSCRIPTION_ACK, { query, variables }, "Connection established for subscription");
      const subscriptionState = 1;
      this.subscriptionObserverMap.set(id, {
        observer,
        query,
        variables,
        startAckTimeoutId: null,
        subscriptionState,
        subscriptionReadyCallback,
        subscriptionFailedCallback
      });
      return;
    }
    if (type === MESSAGE_TYPES.GQL_CONNECTION_KEEP_ALIVE) {
      clearTimeout(this.keepAliveTimeoutId);
      this.keepAliveTimeoutId = setTimeout(this._errorDisconnect.bind(this, CONTROL_MSG.TIMEOUT_DISCONNECT), this.keepAliveTimeout);
      return;
    }
    if (type === MESSAGE_TYPES.GQL_ERROR) {
      const subscriptionState = 2;
      this.subscriptionObserverMap.set(id, {
        observer,
        query,
        variables,
        startAckTimeoutId,
        subscriptionReadyCallback,
        subscriptionFailedCallback,
        subscriptionState
      });
      observer.error({
        errors: [
          {
            ...new import_error.GraphQLError(`${CONTROL_MSG.CONNECTION_FAILED}: ${JSON.stringify(payload)}`)
          }
        ]
      });
      clearTimeout(startAckTimeoutId);
      observer.complete();
      if (typeof subscriptionFailedCallback === "function") {
        subscriptionFailedCallback();
      }
    }
  }
  _errorDisconnect(msg) {
    logger4.debug(`Disconnect error: ${msg}`);
    this.subscriptionObserverMap.forEach(({ observer }) => {
      if (observer && !observer.closed) {
        observer.error({
          errors: [{ ...new import_error.GraphQLError(msg) }]
        });
      }
    });
    this.subscriptionObserverMap.clear();
    if (this.awsRealTimeSocket) {
      this.awsRealTimeSocket.close();
    }
    this.socketStatus = 0;
  }
  _timeoutStartSubscriptionAck(subscriptionId) {
    const { observer, query, variables } = this.subscriptionObserverMap.get(subscriptionId) || {};
    if (!observer) {
      return;
    }
    this.subscriptionObserverMap.set(subscriptionId, {
      observer,
      query,
      variables,
      subscriptionState: 2
    });
    if (observer && !observer.closed) {
      observer.error({
        errors: [
          {
            ...new import_error.GraphQLError(`Subscription timeout ${JSON.stringify({
              query,
              variables
            })}`)
          }
        ]
      });
      observer.complete();
    }
    logger4.debug("timeoutStartSubscription", JSON.stringify({ query, variables }));
  }
  _initializeWebSocketConnection({
    appSyncGraphqlEndpoint,
    authenticationType,
    apiKey,
    region,
    additionalHeaders
  }) {
    if (this.socketStatus === 1) {
      return;
    }
    return new Promise(async (res, rej) => {
      this.promiseArray.push({ res, rej });
      if (this.socketStatus === 0) {
        try {
          this.socketStatus = 2;
          const protocol = this.isSSLEnabled ? "wss://" : "ws://";
          const discoverableEndpoint = appSyncGraphqlEndpoint.replace("https://", protocol).replace("http://", protocol).replace("appsync-api", "appsync-realtime-api").replace("gogi-beta", "grt-beta");
          const payloadString = "{}";
          const headerString = JSON.stringify(await this._awsRealTimeHeaderBasedAuth({
            authenticationType,
            payload: payloadString,
            canonicalUri: "/connect",
            apiKey,
            appSyncGraphqlEndpoint,
            region,
            additionalHeaders
          }));
          const headerQs = import_buffer.Buffer.from(headerString).toString("base64");
          const payloadQs = import_buffer.Buffer.from(payloadString).toString("base64");
          const awsRealTimeUrl = `${discoverableEndpoint}?header=${headerQs}&payload=${payloadQs}`;
          await this._initializeRetryableHandshake({ awsRealTimeUrl });
          this.promiseArray.forEach(({ res: res2 }) => {
            logger4.debug("Notifying connection successful");
            res2();
          });
          this.socketStatus = 1;
          this.promiseArray = [];
        } catch (err) {
          this.promiseArray.forEach(({ rej: rej2 }) => rej2(err));
          this.promiseArray = [];
          if (this.awsRealTimeSocket && this.awsRealTimeSocket.readyState === WebSocket.OPEN) {
            this.awsRealTimeSocket.close(3001);
          }
          this.awsRealTimeSocket = null;
          this.socketStatus = 0;
        }
      }
    });
  }
  async _initializeRetryableHandshake({ awsRealTimeUrl }) {
    logger4.debug(`Initializaling retryable Handshake`);
    await jitteredExponentialRetry(this._initializeHandshake.bind(this), [{ awsRealTimeUrl }], MAX_DELAY_MS);
  }
  async _initializeHandshake({ awsRealTimeUrl }) {
    logger4.debug(`Initializing handshake ${awsRealTimeUrl}`);
    try {
      await (() => {
        return new Promise((res, rej) => {
          const newSocket = new WebSocket(awsRealTimeUrl, "graphql-ws");
          newSocket.onerror = () => {
            logger4.debug(`WebSocket connection error`);
          };
          newSocket.onclose = () => {
            rej(new Error("Connection handshake error"));
          };
          newSocket.onopen = () => {
            this.awsRealTimeSocket = newSocket;
            return res();
          };
        });
      })();
      await (() => {
        return new Promise((res, rej) => {
          let ackOk = false;
          this.awsRealTimeSocket.onerror = (error) => {
            logger4.debug(`WebSocket error ${JSON.stringify(error)}`);
          };
          this.awsRealTimeSocket.onclose = (event) => {
            logger4.debug(`WebSocket closed ${event.reason}`);
            rej(new Error(JSON.stringify(event)));
          };
          this.awsRealTimeSocket.onmessage = (message) => {
            logger4.debug(`subscription message from AWS AppSyncRealTime: ${message.data} `);
            const data = JSON.parse(message.data);
            const {
              type,
              payload: {
                connectionTimeoutMs = DEFAULT_KEEP_ALIVE_TIMEOUT
              } = {}
            } = data;
            if (type === MESSAGE_TYPES.GQL_CONNECTION_ACK) {
              ackOk = true;
              this.keepAliveTimeout = connectionTimeoutMs;
              this.awsRealTimeSocket.onmessage = this._handleIncomingSubscriptionMessage.bind(this);
              this.awsRealTimeSocket.onerror = (err) => {
                logger4.debug(err);
                this._errorDisconnect(CONTROL_MSG.CONNECTION_CLOSED);
              };
              this.awsRealTimeSocket.onclose = (event) => {
                logger4.debug(`WebSocket closed ${event.reason}`);
                this._errorDisconnect(CONTROL_MSG.CONNECTION_CLOSED);
              };
              res("Cool, connected to AWS AppSyncRealTime");
              return;
            }
            if (type === MESSAGE_TYPES.GQL_CONNECTION_ERROR) {
              const {
                payload: {
                  errors: [{ errorType = "", errorCode = 0 } = {}] = []
                } = {}
              } = data;
              rej({ errorType, errorCode });
            }
          };
          const gqlInit = {
            type: MESSAGE_TYPES.GQL_CONNECTION_INIT
          };
          this.awsRealTimeSocket.send(JSON.stringify(gqlInit));
          function checkAckOk() {
            if (!ackOk) {
              rej(new Error(`Connection timeout: ack from AWSRealTime was not received on ${CONNECTION_INIT_TIMEOUT} ms`));
            }
          }
          setTimeout(checkAckOk.bind(this), CONNECTION_INIT_TIMEOUT);
        });
      })();
    } catch (err) {
      const { errorType, errorCode } = err;
      if (NON_RETRYABLE_CODES.includes(errorCode)) {
        throw new NonRetryableError(errorType);
      } else if (errorType) {
        throw new Error(errorType);
      } else {
        throw err;
      }
    }
  }
  async _awsRealTimeHeaderBasedAuth({
    authenticationType,
    payload,
    canonicalUri,
    appSyncGraphqlEndpoint,
    apiKey,
    region,
    additionalHeaders
  }) {
    const headerHandler = {
      API_KEY: this._awsRealTimeApiKeyHeader.bind(this),
      AWS_IAM: this._awsRealTimeIAMHeader.bind(this),
      OPENID_CONNECT: this._awsRealTimeOPENIDHeader.bind(this),
      AMAZON_COGNITO_USER_POOLS: this._awsRealTimeCUPHeader.bind(this),
      AWS_LAMBDA: this._customAuthHeader
    };
    const handler = headerHandler[authenticationType];
    if (typeof handler !== "function") {
      logger4.debug(`Authentication type ${authenticationType} not supported`);
      return "";
    }
    const { host } = url.parse(appSyncGraphqlEndpoint);
    const result = await handler({
      payload,
      canonicalUri,
      appSyncGraphqlEndpoint,
      apiKey,
      region,
      host,
      additionalHeaders
    });
    return result;
  }
  async _awsRealTimeCUPHeader({ host }) {
    const session = await Auth.currentSession();
    return {
      Authorization: session.getAccessToken().getJwtToken(),
      host
    };
  }
  async _awsRealTimeOPENIDHeader({ host }) {
    let token;
    const federatedInfo = await Cache.getItem("federatedInfo");
    if (federatedInfo) {
      token = federatedInfo.token;
    } else {
      const currentUser = await Auth.currentAuthenticatedUser();
      if (currentUser) {
        token = currentUser.token;
      }
    }
    if (!token) {
      throw new Error("No federated jwt");
    }
    return {
      Authorization: token,
      host
    };
  }
  async _awsRealTimeApiKeyHeader({ apiKey, host }) {
    const dt = new Date();
    const dtStr = dt.toISOString().replace(/[:\-]|\.\d{3}/g, "");
    return {
      host,
      "x-amz-date": dtStr,
      "x-api-key": apiKey
    };
  }
  async _awsRealTimeIAMHeader({
    payload,
    canonicalUri,
    appSyncGraphqlEndpoint,
    region
  }) {
    const endpointInfo = {
      region,
      service: "appsync"
    };
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK) {
      throw new Error("No credentials");
    }
    const creds = await Credentials.get().then((credentials) => ({
      secret_key: credentials.secretAccessKey,
      access_key: credentials.accessKeyId,
      session_token: credentials.sessionToken
    }));
    const request = {
      url: `${appSyncGraphqlEndpoint}${canonicalUri}`,
      data: payload,
      method: "POST",
      headers: { ...AWS_APPSYNC_REALTIME_HEADERS }
    };
    const signed_params = Signer.sign(request, creds, endpointInfo);
    return signed_params.headers;
  }
  _customAuthHeader({ host, additionalHeaders }) {
    if (!additionalHeaders.Authorization) {
      throw new Error("No auth token specified");
    }
    return {
      Authorization: additionalHeaders.Authorization,
      host
    };
  }
  _ensureCredentials() {
    return Credentials.get().then((credentials) => {
      if (!credentials)
        return false;
      const cred = Credentials.shear(credentials);
      logger4.debug("set credentials for AWSAppSyncRealTimeProvider", cred);
      return true;
    }).catch((err) => {
      logger4.warn("ensure credentials error", err);
      return false;
    });
  }
};

// src/Providers/AWSIotProvider.ts
import { Signer as Signer2, Credentials as Credentials2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var SERVICE_NAME = "iotdevicegateway";
var AWSIoTProvider = class extends MqttOverWSProvider {
  get region() {
    return this.options.aws_pubsub_region;
  }
  getProviderName() {
    return "AWSIoTProvider";
  }
  get endpoint() {
    return (async () => {
      const endpoint = this.options.aws_pubsub_endpoint;
      const serviceInfo = {
        service: SERVICE_NAME,
        region: this.region
      };
      const {
        accessKeyId: access_key,
        secretAccessKey: secret_key,
        sessionToken: session_token
      } = await Credentials2.get();
      const result = Signer2.signUrl(endpoint, { access_key, secret_key, session_token }, serviceInfo);
      return result;
    })();
  }
};

// src/PubSub.ts
var { isNode } = browserOrNode();
var logger5 = new Logger5("PubSub");
var PubSubClass = class {
  get awsAppSyncProvider() {
    if (!this._awsAppSyncProvider) {
      this._awsAppSyncProvider = new AWSAppSyncProvider(this._options);
    }
    return this._awsAppSyncProvider;
  }
  get awsAppSyncRealTimeProvider() {
    if (!this._awsAppSyncRealTimeProvider) {
      this._awsAppSyncRealTimeProvider = new AWSAppSyncRealTimeProvider(this._options);
    }
    return this._awsAppSyncRealTimeProvider;
  }
  constructor(options) {
    this._options = options;
    logger5.debug("PubSub Options", this._options);
    this._pluggables = [];
    this.subscribe = this.subscribe.bind(this);
  }
  getModuleName() {
    return "PubSub";
  }
  configure(options) {
    const opt = options ? options.PubSub || options : {};
    logger5.debug("configure PubSub", { opt });
    this._options = Object.assign({}, this._options, opt);
    this._pluggables.map((pluggable) => pluggable.configure(this._options));
    return this._options;
  }
  async addPluggable(pluggable) {
    if (pluggable && pluggable.getCategory() === "PubSub") {
      this._pluggables.push(pluggable);
      const config = pluggable.configure(this._options);
      return config;
    }
  }
  removePluggable(providerName) {
    this._pluggables = this._pluggables.filter((pluggable) => pluggable.getProviderName() !== providerName);
  }
  getProviderByName(providerName) {
    if (providerName === INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER) {
      return this.awsAppSyncProvider;
    }
    if (providerName === INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER) {
      return this.awsAppSyncRealTimeProvider;
    }
    return this._pluggables.find((pluggable) => pluggable.getProviderName() === providerName);
  }
  getProviders(options = {}) {
    const { provider: providerName } = options;
    if (!providerName) {
      return this._pluggables;
    }
    const provider = this.getProviderByName(providerName);
    if (!provider) {
      throw new Error(`Could not find provider named ${providerName}`);
    }
    return [provider];
  }
  async publish(topics, msg, options) {
    return Promise.all(this.getProviders(options).map((provider) => provider.publish(topics, msg, options)));
  }
  subscribe(topics, options) {
    if (isNode && this._options && this._options.ssr) {
      throw new Error("Subscriptions are not supported for Server-Side Rendering (SSR)");
    }
    logger5.debug("subscribe options", options);
    const providers = this.getProviders(options);
    return new bundle_esm_default((observer) => {
      const observables = providers.map((provider) => ({
        provider,
        observable: provider.subscribe(topics, options)
      }));
      const subscriptions = observables.map(({ provider, observable }) => observable.subscribe({
        start: console.error,
        next: (value) => observer.next({ provider, value }),
        error: (error) => observer.error({ provider, error })
      }));
      return () => subscriptions.forEach((subscription) => subscription.unsubscribe());
    });
  }
};
var PubSub = new PubSubClass(null);
Amplify.register(PubSub);

// src/index.ts
var CONTROL_MSG;
(function(CONTROL_MSG2) {
  CONTROL_MSG2["CONNECTION_CLOSED"] = "Connection closed";
  CONTROL_MSG2["CONNECTION_FAILED"] = "Connection failed";
  CONTROL_MSG2["REALTIME_SUBSCRIPTION_INIT_ERROR"] = "AppSync Realtime subscription init error";
  CONTROL_MSG2["SUBSCRIPTION_ACK"] = "Subscription ack";
  CONTROL_MSG2["TIMEOUT_DISCONNECT"] = "Timeout disconnect";
})(CONTROL_MSG || (CONTROL_MSG = {}));
var src_default = PubSub;
export {
  AWSAppSyncProvider,
  AWSAppSyncRealTimeProvider,
  AWSIoTProvider,
  AbstractPubSubProvider,
  CONTROL_MSG,
  MqttOverWSProvider,
  PubSub,
  src_default as default,
  mqttTopicMatch
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/*! https://mths.be/punycode v1.3.2 by @mathias */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
