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
var __reExport = (target, module3, desc) => {
  if (module3 && typeof module3 === "object" || typeof module3 === "function") {
    for (let key of __getOwnPropNames(module3))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module3[key], enumerable: !(desc = __getOwnPropDesc(module3, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module3) => {
  return __reExport(__markAsModule(__defProp(module3 != null ? __create(__getProtoOf(module3)) : {}, "default", module3 && module3.__esModule && "default" in module3 ? { get: () => module3.default, enumerable: true } : { value: module3, enumerable: true })), module3);
};

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module3) {
    var __extends5;
    var __assign6;
    var __rest5;
    var __decorate5;
    var __param5;
    var __metadata5;
    var __awaiter5;
    var __generator5;
    var __exportStar5;
    var __values5;
    var __read5;
    var __spread5;
    var __spreadArrays5;
    var __await5;
    var __asyncGenerator5;
    var __asyncDelegator5;
    var __asyncValues5;
    var __makeTemplateObject5;
    var __importStar5;
    var __importDefault5;
    var __classPrivateFieldGet5;
    var __classPrivateFieldSet5;
    var __createBinding5;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module3 === "object" && typeof module3.exports === "object") {
        factory(createExporter(root, createExporter(module3.exports)));
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
      __extends5 = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest5 = function(s, e) {
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
      __decorate5 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param5 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata5 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter5 = function(thisArg, _arguments, P, generator) {
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
      __generator5 = function(thisArg, body) {
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
      __createBinding5 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar5 = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values5 = function(o) {
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
      __read5 = function(o, n) {
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
      __spread5 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read5(arguments[i]));
        return ar;
      };
      __spreadArrays5 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await5 = function(v) {
        return this instanceof __await5 ? (this.v = v, this) : new __await5(v);
      };
      __asyncGenerator5 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await5 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator5 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await5(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues5 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values5 === "function" ? __values5(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject5 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar5 = function(mod) {
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
      __importDefault5 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet5 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet5 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends5);
      exporter("__assign", __assign6);
      exporter("__rest", __rest5);
      exporter("__decorate", __decorate5);
      exporter("__param", __param5);
      exporter("__metadata", __metadata5);
      exporter("__awaiter", __awaiter5);
      exporter("__generator", __generator5);
      exporter("__exportStar", __exportStar5);
      exporter("__createBinding", __createBinding5);
      exporter("__values", __values5);
      exporter("__read", __read5);
      exporter("__spread", __spread5);
      exporter("__spreadArrays", __spreadArrays5);
      exporter("__await", __await5);
      exporter("__asyncGenerator", __asyncGenerator5);
      exporter("__asyncDelegator", __asyncDelegator5);
      exporter("__asyncValues", __asyncValues5);
      exporter("__makeTemplateObject", __makeTemplateObject5);
      exporter("__importStar", __importStar5);
      exporter("__importDefault", __importDefault5);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet5);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet5);
    });
  }
});

// node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

// node_modules/@aws-crypto/sha256-js/build/RawSha256.js
var require_RawSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require_constants();
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

// node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/cjs/pureJs.js
var require_pureJs = __commonJS({
  "node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf83 = (input) => {
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
    exports.fromUtf8 = fromUtf83;
    var toUtf83 = (input) => {
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
    exports.toUtf8 = toUtf83;
  }
});

// node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf83(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf83;
    function toUtf83(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf83;
  }
});

// node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi();
    var fromUtf83 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf83;
    var toUtf83 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf83;
  }
});

// node_modules/@aws-crypto/sha256-js/build/jsSha256.js
var require_jsSha256 = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    var constants_1 = require_constants();
    var RawSha256_1 = require_RawSha256();
    var util_utf8_browser_1 = require_cjs();
    var Sha2563 = function() {
      function Sha2564(secret) {
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
      Sha2564.prototype.update = function(toHash) {
        if (isEmptyData(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update(convertToBuffer(toHash));
        } catch (e) {
          this.error = e;
        }
      };
      Sha2564.prototype.digestSync = function() {
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
      Sha2564.prototype.digest = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      return Sha2564;
    }();
    exports.Sha256 = Sha2563;
    function bufferFromSecret(secret) {
      var input = convertToBuffer(secret);
      if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
      }
      var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
      buffer.set(input);
      return buffer;
    }
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    function convertToBuffer(data) {
      if (typeof data === "string") {
        return util_utf8_browser_1.fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
  }
});

// node_modules/@aws-crypto/sha256-js/build/index.js
var require_build = __commonJS({
  "node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    tslib_1.__exportStar(require_jsSha256(), exports);
  }
});

// ../../node_modules/url/node_modules/punycode/punycode.js
var require_punycode = __commonJS({
  "../../node_modules/url/node_modules/punycode/punycode.js"(exports, module3) {
    (function(root) {
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = typeof module3 == "object" && module3 && !module3.nodeType && module3;
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
        if (module3.exports == freeExports) {
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
  "../../node_modules/url/util.js"(exports, module3) {
    "use strict";
    module3.exports = {
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
  "../../node_modules/url/node_modules/querystring/decode.js"(exports, module3) {
    "use strict";
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    module3.exports = function(qs, sep, eq, options) {
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
  "../../node_modules/url/node_modules/querystring/encode.js"(exports, module3) {
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
    module3.exports = function(obj, sep, eq, name3) {
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
      if (!name3)
        return "";
      return encodeURIComponent(stringifyPrimitive(name3)) + eq + encodeURIComponent(stringifyPrimitive(obj));
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
    function urlParse(url, parseQueryString2, slashesDenoteHost) {
      if (url && util.isObject(url) && url instanceof Url)
        return url;
      var u = new Url();
      u.parse(url, parseQueryString2, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url, parseQueryString2, slashesDenoteHost) {
      if (!util.isString(url)) {
        throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
      }
      var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
      uSplit[0] = uSplit[0].replace(slashRegex, "/");
      url = uSplit.join(splitter);
      var rest = url;
      rest = rest.trim();
      if (!slashesDenoteHost && url.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.path = rest;
          this.href = rest;
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
            if (parseQueryString2) {
              this.query = querystring.parse(this.search.substr(1));
            } else {
              this.query = this.search.substr(1);
            }
          } else if (parseQueryString2) {
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
      var hash2 = rest.indexOf("#");
      if (hash2 !== -1) {
        this.hash = rest.substr(hash2);
        rest = rest.slice(0, hash2);
      }
      var qm = rest.indexOf("?");
      if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString2) {
          this.query = querystring.parse(this.query);
        }
        rest = rest.slice(0, qm);
      } else if (parseQueryString2) {
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
      var protocol = this.protocol || "", pathname = this.pathname || "", hash2 = this.hash || "", host = false, query = "";
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
      if (hash2 && hash2.charAt(0) !== "#")
        hash2 = "#" + hash2;
      if (search && search.charAt(0) !== "?")
        search = "?" + search;
      pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
      });
      search = search.replace("#", "%23");
      return protocol + host + pathname + search + hash2;
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
    var hasSymbol2 = function(name3) {
      return hasSymbols() && Boolean(Symbol[name3]);
    };
    var getSymbol = function(name3) {
      return hasSymbol2(name3) ? Symbol[name3] : "@@" + name3;
    };
    if (hasSymbols() && !hasSymbol2("observable")) {
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
          if (hasSymbol2("iterator")) {
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
  "../../node_modules/zen-observable-ts/node_modules/zen-observable/index.js"(exports, module3) {
    module3.exports = require_Observable().Observable;
  }
});

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "../../node_modules/@aws-sdk/client-cloudwatch-logs/node_modules/tslib/tslib.js"(exports, module3) {
    var __extends5;
    var __assign6;
    var __rest5;
    var __decorate5;
    var __param5;
    var __metadata5;
    var __awaiter5;
    var __generator5;
    var __exportStar5;
    var __values5;
    var __read5;
    var __spread5;
    var __spreadArrays5;
    var __spreadArray4;
    var __await5;
    var __asyncGenerator5;
    var __asyncDelegator5;
    var __asyncValues5;
    var __makeTemplateObject5;
    var __importStar5;
    var __importDefault5;
    var __classPrivateFieldGet5;
    var __classPrivateFieldSet5;
    var __createBinding5;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module3 === "object" && typeof module3.exports === "object") {
        factory(createExporter(root, createExporter(module3.exports)));
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
      __extends5 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest5 = function(s, e) {
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
      __decorate5 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param5 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata5 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter5 = function(thisArg, _arguments, P, generator) {
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
      __generator5 = function(thisArg, body) {
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
      __exportStar5 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding5(o, m, p);
      };
      __createBinding5 = Object.create ? function(o, m, k, k2) {
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
      __values5 = function(o) {
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
      __read5 = function(o, n) {
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
      __spread5 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read5(arguments[i]));
        return ar;
      };
      __spreadArrays5 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray4 = function(to, from, pack) {
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
      __await5 = function(v) {
        return this instanceof __await5 ? (this.v = v, this) : new __await5(v);
      };
      __asyncGenerator5 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await5 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator5 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await5(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues5 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values5 === "function" ? __values5(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject5 = function(cooked, raw) {
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
      __importStar5 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding5(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault5 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet5 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends5);
      exporter("__assign", __assign6);
      exporter("__rest", __rest5);
      exporter("__decorate", __decorate5);
      exporter("__param", __param5);
      exporter("__metadata", __metadata5);
      exporter("__awaiter", __awaiter5);
      exporter("__generator", __generator5);
      exporter("__exportStar", __exportStar5);
      exporter("__createBinding", __createBinding5);
      exporter("__values", __values5);
      exporter("__read", __read5);
      exporter("__spread", __spread5);
      exporter("__spreadArrays", __spreadArrays5);
      exporter("__spreadArray", __spreadArray4);
      exporter("__await", __await5);
      exporter("__asyncGenerator", __asyncGenerator5);
      exporter("__asyncDelegator", __asyncDelegator5);
      exporter("__asyncValues", __asyncValues5);
      exporter("__makeTemplateObject", __makeTemplateObject5);
      exporter("__importStar", __importStar5);
      exporter("__importDefault", __importDefault5);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet5);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet5);
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
var require_constants2 = __commonJS({
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
var require_pureJs2 = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf83 = (input) => {
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
    exports.fromUtf8 = fromUtf83;
    var toUtf83 = (input) => {
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
    exports.toUtf8 = toUtf83;
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi2 = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf83(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf83;
    function toUtf83(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf83;
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs2();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi2();
    var fromUtf83 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf83;
    var toUtf83 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf83;
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
    var constants_1 = require_constants2();
    var util_utf8_browser_1 = require_cjs2();
    var util_locate_window_1 = require_dist_cjs();
    var Sha2563 = function() {
      function Sha2564(secret) {
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
      Sha2564.prototype.update = function(toHash) {
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
      Sha2564.prototype.digest = function() {
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
      return Sha2564;
    }();
    exports.Sha256 = Sha2563;
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
var require_pureJs3 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf83 = (input) => {
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
    exports.fromUtf8 = fromUtf83;
    var toUtf83 = (input) => {
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
    exports.toUtf8 = toUtf83;
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi3 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf83(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf83;
    function toUtf83(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf83;
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs3();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi3();
    var fromUtf83 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf83;
    var toUtf83 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf83;
  }
});

// ../../node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "../../node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs2();
    var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf83(data);
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
var require_build2 = __commonJS({
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
    var util_1 = require_build2();
    var constants_1 = require_constants2();
    var util_locate_window_1 = require_dist_cjs();
    var Sha2563 = function() {
      function Sha2564(secret) {
        this.toHash = new Uint8Array(0);
        if (secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      }
      Sha2564.prototype.update = function(data) {
        if ((0, util_1.isEmptyData)(data)) {
          return;
        }
        var update = (0, util_1.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2564.prototype.digest = function() {
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
      return Sha2564;
    }();
    exports.Sha256 = Sha2563;
  }
});

// ../../node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants3 = __commonJS({
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
var require_RawSha2562 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RawSha256 = void 0;
    var constants_1 = require_constants3();
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
var require_jsSha2562 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var tslib_1 = require_tslib();
    var constants_1 = require_constants3();
    var RawSha256_1 = require_RawSha2562();
    var util_1 = require_build2();
    var Sha2563 = function() {
      function Sha2564(secret) {
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
      Sha2564.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update((0, util_1.convertToBuffer)(toHash));
        } catch (e) {
          this.error = e;
        }
      };
      Sha2564.prototype.digestSync = function() {
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
      Sha2564.prototype.digest = function() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
          return (0, tslib_1.__generator)(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      return Sha2564;
    }();
    exports.Sha256 = Sha2563;
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
var require_build3 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    (0, tslib_1.__exportStar)(require_jsSha2562(), exports);
  }
});

// ../../node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js
var require_supportsWebCrypto = __commonJS({
  "../../node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;
    var tslib_1 = require_tslib();
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
        var getRandomValues = window2.crypto.getRandomValues;
        return typeof getRandomValues === "function";
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
var require_build4 = __commonJS({
  "../../node_modules/@aws-crypto/supports-web-crypto/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
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
        var _a = window2.msCrypto, getRandomValues = _a.getRandomValues, subtle_1 = _a.subtle;
        return msSubtleCryptoMethods.map(function(methodName) {
          return subtle_1[methodName];
        }).concat(getRandomValues).every(function(method) {
          return typeof method === "function";
        });
      }
      return false;
    }
    exports.isMsWindow = isMsWindow;
  }
});

// ../../node_modules/@aws-crypto/ie11-detection/build/index.js
var require_build5 = __commonJS({
  "../../node_modules/@aws-crypto/ie11-detection/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
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
    var sha256_js_1 = require_build3();
    var supports_web_crypto_1 = require_build4();
    var ie11_detection_1 = require_build5();
    var util_locate_window_1 = require_dist_cjs();
    var Sha2563 = function() {
      function Sha2564(secret) {
        if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new webCryptoSha256_1.Sha256(secret);
        } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new ie11Sha256_1.Sha256(secret);
        } else {
          this.hash = new sha256_js_1.Sha256(secret);
        }
      }
      Sha2564.prototype.update = function(data, encoding) {
        this.hash.update(data, encoding);
      };
      Sha2564.prototype.digest = function() {
        return this.hash.digest();
      };
      return Sha2564;
    }();
    exports.Sha256 = Sha2563;
  }
});

// ../../node_modules/@aws-crypto/sha256-browser/build/index.js
var require_build6 = __commonJS({
  "../../node_modules/@aws-crypto/sha256-browser/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;
    var tslib_1 = require_tslib();
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

// ../../node_modules/uuid/lib/rng-browser.js
var require_rng_browser = __commonJS({
  "../../node_modules/uuid/lib/rng-browser.js"(exports, module3) {
    var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (getRandomValues) {
      rnds8 = new Uint8Array(16);
      module3.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
      };
    } else {
      rnds = new Array(16);
      module3.exports = function mathRNG() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 3) === 0)
            r = Math.random() * 4294967296;
          rnds[i] = r >>> ((i & 3) << 3) & 255;
        }
        return rnds;
      };
    }
    var rnds8;
    var rnds;
  }
});

// ../../node_modules/uuid/lib/bytesToUuid.js
var require_bytesToUuid = __commonJS({
  "../../node_modules/uuid/lib/bytesToUuid.js"(exports, module3) {
    var byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 256).toString(16).substr(1);
    }
    var i;
    function bytesToUuid(buf, offset) {
      var i2 = offset || 0;
      var bth = byteToHex;
      return [
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]]
      ].join("");
    }
    module3.exports = bytesToUuid;
  }
});

// ../../node_modules/uuid/v1.js
var require_v1 = __commonJS({
  "../../node_modules/uuid/v1.js"(exports, module3) {
    var rng = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        var seedBytes = rng();
        if (node == null) {
          node = _nodeId = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
          ];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      var msecs = options.msecs !== void 0 ? options.msecs : new Date().getTime();
      var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      var tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf ? buf : bytesToUuid(b);
    }
    module3.exports = v1;
  }
});

// ../../node_modules/uuid/v4.js
var require_v4 = __commonJS({
  "../../node_modules/uuid/v4.js"(exports, module3) {
    var rng = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();
    function v42(options, buf, offset) {
      var i = buf && offset || 0;
      if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
      }
      options = options || {};
      var rnds = options.random || (options.rng || rng)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }
      return buf || bytesToUuid(rnds);
    }
    module3.exports = v42;
  }
});

// ../../node_modules/uuid/index.js
var require_uuid = __commonJS({
  "../../node_modules/uuid/index.js"(exports, module3) {
    var v1 = require_v1();
    var v42 = require_v4();
    var uuid = v42;
    uuid.v1 = v1;
    uuid.v4 = v42;
    module3.exports = uuid;
  }
});

// ../../node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "../../node_modules/bowser/es5.js"(exports, module3) {
    !function(e, t) {
      typeof exports == "object" && typeof module3 == "object" ? module3.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.bowser = t() : e.bowser = t();
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

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS({
  "../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/node_modules/tslib/tslib.js"(exports, module3) {
    var __extends5;
    var __assign6;
    var __rest5;
    var __decorate5;
    var __param5;
    var __metadata5;
    var __awaiter5;
    var __generator5;
    var __exportStar5;
    var __values5;
    var __read5;
    var __spread5;
    var __spreadArrays5;
    var __spreadArray4;
    var __await5;
    var __asyncGenerator5;
    var __asyncDelegator5;
    var __asyncValues5;
    var __makeTemplateObject5;
    var __importStar5;
    var __importDefault5;
    var __classPrivateFieldGet5;
    var __classPrivateFieldSet5;
    var __createBinding5;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module3 === "object" && typeof module3.exports === "object") {
        factory(createExporter(root, createExporter(module3.exports)));
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
      __extends5 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest5 = function(s, e) {
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
      __decorate5 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param5 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata5 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter5 = function(thisArg, _arguments, P, generator) {
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
      __generator5 = function(thisArg, body) {
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
      __exportStar5 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding5(o, m, p);
      };
      __createBinding5 = Object.create ? function(o, m, k, k2) {
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
      __values5 = function(o) {
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
      __read5 = function(o, n) {
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
      __spread5 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read5(arguments[i]));
        return ar;
      };
      __spreadArrays5 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray4 = function(to, from, pack) {
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
      __await5 = function(v) {
        return this instanceof __await5 ? (this.v = v, this) : new __await5(v);
      };
      __asyncGenerator5 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await5 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator5 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await5(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues5 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values5 === "function" ? __values5(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject5 = function(cooked, raw) {
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
      __importStar5 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding5(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault5 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet5 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends5);
      exporter("__assign", __assign6);
      exporter("__rest", __rest5);
      exporter("__decorate", __decorate5);
      exporter("__param", __param5);
      exporter("__metadata", __metadata5);
      exporter("__awaiter", __awaiter5);
      exporter("__generator", __generator5);
      exporter("__exportStar", __exportStar5);
      exporter("__createBinding", __createBinding5);
      exporter("__values", __values5);
      exporter("__read", __read5);
      exporter("__spread", __spread5);
      exporter("__spreadArrays", __spreadArrays5);
      exporter("__spreadArray", __spreadArray4);
      exporter("__await", __await5);
      exporter("__asyncGenerator", __asyncGenerator5);
      exporter("__asyncDelegator", __asyncDelegator5);
      exporter("__asyncValues", __asyncValues5);
      exporter("__makeTemplateObject", __makeTemplateObject5);
      exporter("__importStar", __importStar5);
      exporter("__importDefault", __importDefault5);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet5);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet5);
    });
  }
});

// node_modules/@aws-sdk/client-cognito-identity/node_modules/tslib/tslib.js
var require_tslib4 = __commonJS({
  "node_modules/@aws-sdk/client-cognito-identity/node_modules/tslib/tslib.js"(exports, module3) {
    var __extends5;
    var __assign6;
    var __rest5;
    var __decorate5;
    var __param5;
    var __metadata5;
    var __awaiter5;
    var __generator5;
    var __exportStar5;
    var __values5;
    var __read5;
    var __spread5;
    var __spreadArrays5;
    var __spreadArray4;
    var __await5;
    var __asyncGenerator5;
    var __asyncDelegator5;
    var __asyncValues5;
    var __makeTemplateObject5;
    var __importStar5;
    var __importDefault5;
    var __classPrivateFieldGet5;
    var __classPrivateFieldSet5;
    var __createBinding5;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module3 === "object" && typeof module3.exports === "object") {
        factory(createExporter(root, createExporter(module3.exports)));
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
      __extends5 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest5 = function(s, e) {
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
      __decorate5 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param5 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata5 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter5 = function(thisArg, _arguments, P, generator) {
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
      __generator5 = function(thisArg, body) {
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
      __exportStar5 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding5(o, m, p);
      };
      __createBinding5 = Object.create ? function(o, m, k, k2) {
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
      __values5 = function(o) {
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
      __read5 = function(o, n) {
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
      __spread5 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read5(arguments[i]));
        return ar;
      };
      __spreadArrays5 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray4 = function(to, from, pack) {
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
      __await5 = function(v) {
        return this instanceof __await5 ? (this.v = v, this) : new __await5(v);
      };
      __asyncGenerator5 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await5 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator5 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await5(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues5 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values5 === "function" ? __values5(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject5 = function(cooked, raw) {
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
      __importStar5 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding5(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault5 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet5 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends5);
      exporter("__assign", __assign6);
      exporter("__rest", __rest5);
      exporter("__decorate", __decorate5);
      exporter("__param", __param5);
      exporter("__metadata", __metadata5);
      exporter("__awaiter", __awaiter5);
      exporter("__generator", __generator5);
      exporter("__exportStar", __exportStar5);
      exporter("__createBinding", __createBinding5);
      exporter("__values", __values5);
      exporter("__read", __read5);
      exporter("__spread", __spread5);
      exporter("__spreadArrays", __spreadArrays5);
      exporter("__spreadArray", __spreadArray4);
      exporter("__await", __await5);
      exporter("__asyncGenerator", __asyncGenerator5);
      exporter("__asyncDelegator", __asyncDelegator5);
      exporter("__asyncValues", __asyncValues5);
      exporter("__makeTemplateObject", __makeTemplateObject5);
      exporter("__importStar", __importStar5);
      exporter("__importDefault", __importDefault5);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet5);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet5);
    });
  }
});

// ../../node_modules/universal-cookie/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "../../node_modules/universal-cookie/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse4;
    exports.serialize = serialize2;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse4(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize2(name3, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name3)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name3 + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// src/Util/Constants.ts
var AWS_CLOUDWATCH_BASE_BUFFER_SIZE = 26;
var AWS_CLOUDWATCH_MAX_BATCH_EVENT_SIZE = 1048576;
var AWS_CLOUDWATCH_MAX_EVENT_SIZE = 256e3;
var AWS_CLOUDWATCH_CATEGORY = "Logging";
var AWS_CLOUDWATCH_PROVIDER_NAME = "AWSCloudWatch";
var NO_CREDS_ERROR_STRING = "No credentials";
var RETRY_ERROR_CODES = [
  "ResourceNotFoundException",
  "InvalidSequenceTokenException"
];

// src/Logger/ConsoleLogger.ts
var LOG_LEVELS = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
};
var LOG_TYPE;
(function(LOG_TYPE2) {
  LOG_TYPE2["DEBUG"] = "DEBUG";
  LOG_TYPE2["ERROR"] = "ERROR";
  LOG_TYPE2["INFO"] = "INFO";
  LOG_TYPE2["WARN"] = "WARN";
  LOG_TYPE2["VERBOSE"] = "VERBOSE";
})(LOG_TYPE || (LOG_TYPE = {}));
var _ConsoleLogger = class {
  constructor(name3, level = LOG_TYPE.WARN) {
    this.name = name3;
    this.level = level;
    this._pluggables = [];
  }
  _padding(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  _ts() {
    const dt = new Date();
    return [this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(":") + "." + dt.getMilliseconds();
  }
  configure(config) {
    if (!config)
      return this._config;
    this._config = config;
    return this._config;
  }
  _log(type, ...msg) {
    let logger_level_name = this.level;
    if (_ConsoleLogger.LOG_LEVEL) {
      logger_level_name = _ConsoleLogger.LOG_LEVEL;
    }
    if (typeof window !== "undefined" && window.LOG_LEVEL) {
      logger_level_name = window.LOG_LEVEL;
    }
    const logger_level = LOG_LEVELS[logger_level_name];
    const type_level = LOG_LEVELS[type];
    if (!(type_level >= logger_level)) {
      return;
    }
    let log = console.log.bind(console);
    if (type === LOG_TYPE.ERROR && console.error) {
      log = console.error.bind(console);
    }
    if (type === LOG_TYPE.WARN && console.warn) {
      log = console.warn.bind(console);
    }
    const prefix = `[${type}] ${this._ts()} ${this.name}`;
    let message = "";
    if (msg.length === 1 && typeof msg[0] === "string") {
      message = `${prefix} - ${msg[0]}`;
      log(message);
    } else if (msg.length === 1) {
      message = `${prefix} ${msg[0]}`;
      log(prefix, msg[0]);
    } else if (typeof msg[0] === "string") {
      let obj = msg.slice(1);
      if (obj.length === 1) {
        obj = obj[0];
      }
      message = `${prefix} - ${msg[0]} ${obj}`;
      log(`${prefix} - ${msg[0]}`, obj);
    } else {
      message = `${prefix} ${msg}`;
      log(prefix, msg);
    }
    for (const plugin of this._pluggables) {
      const logEvent = { message, timestamp: Date.now() };
      plugin.pushLogs([logEvent]);
    }
  }
  log(...msg) {
    this._log(LOG_TYPE.INFO, ...msg);
  }
  info(...msg) {
    this._log(LOG_TYPE.INFO, ...msg);
  }
  warn(...msg) {
    this._log(LOG_TYPE.WARN, ...msg);
  }
  error(...msg) {
    this._log(LOG_TYPE.ERROR, ...msg);
  }
  debug(...msg) {
    this._log(LOG_TYPE.DEBUG, ...msg);
  }
  verbose(...msg) {
    this._log(LOG_TYPE.VERBOSE, ...msg);
  }
  addPluggable(pluggable) {
    if (pluggable && pluggable.getCategoryName() === AWS_CLOUDWATCH_CATEGORY) {
      this._pluggables.push(pluggable);
      pluggable.configure(this._config);
    }
  }
  listPluggables() {
    return this._pluggables;
  }
};
var ConsoleLogger = _ConsoleLogger;
ConsoleLogger.LOG_LEVEL = null;

// src/Amplify.ts
var logger = new ConsoleLogger("Amplify");
var AmplifyClass = class {
  constructor() {
    this._components = [];
    this._config = {};
    this._modules = {};
    this.Auth = null;
    this.Analytics = null;
    this.API = null;
    this.Credentials = null;
    this.Storage = null;
    this.I18n = null;
    this.Cache = null;
    this.PubSub = null;
    this.Interactions = null;
    this.Pushnotification = null;
    this.UI = null;
    this.XR = null;
    this.Predictions = null;
    this.DataStore = null;
    this.Geo = null;
    this.Logger = ConsoleLogger;
    this.ServiceWorker = null;
  }
  register(comp) {
    logger.debug("component registered in amplify", comp);
    this._components.push(comp);
    if (typeof comp.getModuleName === "function") {
      this._modules[comp.getModuleName()] = comp;
      this[comp.getModuleName()] = comp;
    } else {
      logger.debug("no getModuleName method for component", comp);
    }
    comp.configure(this._config);
  }
  configure(config) {
    if (!config)
      return this._config;
    this._config = Object.assign(this._config, config);
    logger.debug("amplify config", this._config);
    Object.entries(this._modules).forEach(([Name, comp]) => {
      Object.keys(comp).forEach((property) => {
        if (this._modules[property]) {
          comp[property] = this._modules[property];
        }
      });
    });
    this._components.map((comp) => {
      comp.configure(this._config);
    });
    return this._config;
  }
  addPluggable(pluggable) {
    if (pluggable && pluggable["getCategory"] && typeof pluggable["getCategory"] === "function") {
      this._components.map((comp) => {
        if (comp["addPluggable"] && typeof comp["addPluggable"] === "function") {
          comp.addPluggable(pluggable);
        }
      });
    }
  }
};
var Amplify = new AmplifyClass();

// src/Platform/version.ts
var version = "4.3.4";

// src/Platform/index.ts
var BASE_USER_AGENT = `aws-amplify/${version}`;
var Platform = {
  userAgent: `${BASE_USER_AGENT} js`,
  product: "",
  navigator: null,
  isReactNative: false
};
if (typeof navigator !== "undefined" && navigator.product) {
  Platform.product = navigator.product || "";
  Platform.navigator = navigator || null;
  switch (navigator.product) {
    case "ReactNative":
      Platform.userAgent = `${BASE_USER_AGENT} react-native`;
      Platform.isReactNative = true;
      break;
    default:
      Platform.userAgent = `${BASE_USER_AGENT} js`;
      Platform.isReactNative = false;
      break;
  }
}
var getAmplifyUserAgent = () => {
  return Platform.userAgent;
};

// src/ClientDevice/browser.ts
var logger2 = new ConsoleLogger("ClientDevice_Browser");
function clientInfo() {
  if (typeof window === "undefined") {
    return {};
  }
  return browserClientInfo();
}
function browserClientInfo() {
  if (typeof window === "undefined") {
    logger2.warn("No window object available to get browser client info");
    return {};
  }
  const nav = window.navigator;
  if (!nav) {
    logger2.warn("No navigator object available to get browser client info");
    return {};
  }
  const { platform, product, vendor, userAgent, language } = nav;
  const type = browserType(userAgent);
  const timezone = browserTimezone();
  return {
    platform,
    make: product || vendor,
    model: type.type,
    version: type.version,
    appVersion: [type.type, type.version].join("/"),
    language,
    timezone
  };
}
function dimension() {
  if (typeof window === "undefined") {
    logger2.warn("No window object available to get browser client info");
    return { width: 320, height: 320 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function browserTimezone() {
  const tzMatch = /\(([A-Za-z\s].*)\)/.exec(new Date().toString());
  return tzMatch ? tzMatch[1] || "" : "";
}
function browserType(userAgent) {
  const operaMatch = /.+(Opera[\s[A-Z]*|OPR[\sA-Z]*)\/([0-9\.]+).*/i.exec(userAgent);
  if (operaMatch) {
    return { type: operaMatch[1], version: operaMatch[2] };
  }
  const ieMatch = /.+(Trident|Edge)\/([0-9\.]+).*/i.exec(userAgent);
  if (ieMatch) {
    return { type: ieMatch[1], version: ieMatch[2] };
  }
  const cfMatch = /.+(Chrome|Firefox|FxiOS)\/([0-9\.]+).*/i.exec(userAgent);
  if (cfMatch) {
    return { type: cfMatch[1], version: cfMatch[2] };
  }
  const sMatch = /.+(Safari)\/([0-9\.]+).*/i.exec(userAgent);
  if (sMatch) {
    return { type: sMatch[1], version: sMatch[2] };
  }
  const awkMatch = /.+(AppleWebKit)\/([0-9\.]+).*/i.exec(userAgent);
  if (awkMatch) {
    return { type: awkMatch[1], version: awkMatch[2] };
  }
  const anyMatch = /.*([A-Z]+)\/([0-9\.]+).*/i.exec(userAgent);
  if (anyMatch) {
    return { type: anyMatch[1], version: anyMatch[2] };
  }
  return { type: "", version: "" };
}

// src/ClientDevice/index.ts
var ClientDevice = class {
  static clientInfo() {
    return clientInfo();
  }
  static dimension() {
    return dimension();
  }
};

// src/Errors.ts
function missingConfig(name3) {
  return new Error("Missing config value of " + name3);
}
function invalidParameter(name3) {
  return new Error("Invalid parameter value of " + name3);
}

// src/Hub.ts
var logger3 = new ConsoleLogger("Hub");
var AMPLIFY_SYMBOL = typeof Symbol !== "undefined" && typeof Symbol.for === "function" ? Symbol.for("amplify_default") : "@@amplify_default";
function isLegacyCallback(callback) {
  return callback.onHubCapsule !== void 0;
}
var HubClass = class {
  constructor(name3) {
    this.listeners = [];
    this.patterns = [];
    this.protectedChannels = [
      "core",
      "auth",
      "api",
      "analytics",
      "interactions",
      "pubsub",
      "storage",
      "xr"
    ];
    this.name = name3;
  }
  remove(channel, listener) {
    if (channel instanceof RegExp) {
      const pattern = this.patterns.find(({ pattern: pattern2 }) => pattern2.source === channel.source);
      if (!pattern) {
        logger3.warn(`No listeners for ${channel}`);
        return;
      }
      this.patterns = [...this.patterns.filter((x) => x !== pattern)];
    } else {
      const holder = this.listeners[channel];
      if (!holder) {
        logger3.warn(`No listeners for ${channel}`);
        return;
      }
      this.listeners[channel] = [
        ...holder.filter(({ callback }) => callback !== listener)
      ];
    }
  }
  dispatch(channel, payload, source = "", ampSymbol) {
    if (this.protectedChannels.indexOf(channel) > -1) {
      const hasAccess = ampSymbol === AMPLIFY_SYMBOL;
      if (!hasAccess) {
        logger3.warn(`WARNING: ${channel} is protected and dispatching on it can have unintended consequences`);
      }
    }
    const capsule = {
      channel,
      payload: { ...payload },
      source,
      patternInfo: []
    };
    try {
      this._toListeners(capsule);
    } catch (e) {
      logger3.error(e);
    }
  }
  listen(channel, callback, listenerName = "noname") {
    let cb;
    if (isLegacyCallback(callback)) {
      logger3.warn(`WARNING onHubCapsule is Deprecated. Please pass in a callback.`);
      cb = callback.onHubCapsule.bind(callback);
    } else if (typeof callback !== "function") {
      throw new Error("No callback supplied to Hub");
    } else {
      cb = callback;
    }
    if (channel instanceof RegExp) {
      this.patterns.push({
        pattern: channel,
        callback: cb
      });
    } else {
      let holder = this.listeners[channel];
      if (!holder) {
        holder = [];
        this.listeners[channel] = holder;
      }
      holder.push({
        name: listenerName,
        callback: cb
      });
    }
    return () => {
      this.remove(channel, cb);
    };
  }
  _toListeners(capsule) {
    const { channel, payload } = capsule;
    const holder = this.listeners[channel];
    if (holder) {
      holder.forEach((listener) => {
        logger3.debug(`Dispatching to ${channel} with `, payload);
        try {
          listener.callback(capsule);
        } catch (e) {
          logger3.error(e);
        }
      });
    }
    if (this.patterns.length > 0) {
      if (!payload.message) {
        logger3.warn(`Cannot perform pattern matching without a message key`);
        return;
      }
      const payloadStr = payload.message;
      this.patterns.forEach((pattern) => {
        const match = payloadStr.match(pattern.pattern);
        if (match) {
          const [, ...groups] = match;
          const dispatchingCapsule = {
            ...capsule,
            patternInfo: groups
          };
          try {
            pattern.callback(dispatchingCapsule);
          } catch (e) {
            logger3.error(e);
          }
        }
      });
    }
  }
};
var Hub = new HubClass("__default__");

// src/I18n/I18n.ts
var logger4 = new ConsoleLogger("I18n");
var I18n = class {
  constructor(options) {
    this._options = null;
    this._lang = null;
    this._dict = {};
    this._options = Object.assign({}, options);
    this._lang = this._options.language;
    if (!this._lang && typeof window !== "undefined" && window && window.navigator) {
      this._lang = window.navigator.language;
    }
    logger4.debug(this._lang);
  }
  setLanguage(lang) {
    this._lang = lang;
  }
  get(key, defVal = void 0) {
    if (!this._lang) {
      return typeof defVal !== "undefined" ? defVal : key;
    }
    const lang = this._lang;
    let val = this.getByLanguage(key, lang);
    if (val) {
      return val;
    }
    if (lang.indexOf("-") > 0) {
      val = this.getByLanguage(key, lang.split("-")[0]);
    }
    if (val) {
      return val;
    }
    return typeof defVal !== "undefined" ? defVal : key;
  }
  getByLanguage(key, language, defVal = null) {
    if (!language) {
      return defVal;
    }
    const lang_dict = this._dict[language];
    if (!lang_dict) {
      return defVal;
    }
    return lang_dict[key];
  }
  putVocabulariesForLanguage(language, vocabularies) {
    let lang_dict = this._dict[language];
    if (!lang_dict) {
      lang_dict = this._dict[language] = {};
    }
    Object.assign(lang_dict, vocabularies);
  }
  putVocabularies(vocabularies) {
    Object.keys(vocabularies).map((key) => {
      this.putVocabulariesForLanguage(key, vocabularies[key]);
    });
  }
};

// src/I18n/index.ts
var logger5 = new ConsoleLogger("I18n");
var _config = null;
var _i18n = null;
var I18n2 = class {
  static configure(config) {
    logger5.debug("configure I18n");
    if (!config) {
      return _config;
    }
    _config = Object.assign({}, _config, config.I18n || config);
    I18n2.createInstance();
    return _config;
  }
  static getModuleName() {
    return "I18n";
  }
  static createInstance() {
    logger5.debug("create I18n instance");
    if (_i18n) {
      return;
    }
    _i18n = new I18n(_config);
  }
  static setLanguage(lang) {
    I18n2.checkConfig();
    return _i18n.setLanguage(lang);
  }
  static get(key, defVal) {
    if (!I18n2.checkConfig()) {
      return typeof defVal === "undefined" ? key : defVal;
    }
    return _i18n.get(key, defVal);
  }
  static putVocabulariesForLanguage(language, vocabularies) {
    I18n2.checkConfig();
    return _i18n.putVocabulariesForLanguage(language, vocabularies);
  }
  static putVocabularies(vocabularies) {
    I18n2.checkConfig();
    return _i18n.putVocabularies(vocabularies);
  }
  static checkConfig() {
    if (!_i18n) {
      _i18n = new I18n(_config);
    }
    return true;
  }
};
Amplify.register(I18n2);

// src/JS.ts
var MIME_MAP = [
  { type: "text/plain", ext: "txt" },
  { type: "text/html", ext: "html" },
  { type: "text/javascript", ext: "js" },
  { type: "text/css", ext: "css" },
  { type: "text/csv", ext: "csv" },
  { type: "text/yaml", ext: "yml" },
  { type: "text/yaml", ext: "yaml" },
  { type: "text/calendar", ext: "ics" },
  { type: "text/calendar", ext: "ical" },
  { type: "image/apng", ext: "apng" },
  { type: "image/bmp", ext: "bmp" },
  { type: "image/gif", ext: "gif" },
  { type: "image/x-icon", ext: "ico" },
  { type: "image/x-icon", ext: "cur" },
  { type: "image/jpeg", ext: "jpg" },
  { type: "image/jpeg", ext: "jpeg" },
  { type: "image/jpeg", ext: "jfif" },
  { type: "image/jpeg", ext: "pjp" },
  { type: "image/jpeg", ext: "pjpeg" },
  { type: "image/png", ext: "png" },
  { type: "image/svg+xml", ext: "svg" },
  { type: "image/tiff", ext: "tif" },
  { type: "image/tiff", ext: "tiff" },
  { type: "image/webp", ext: "webp" },
  { type: "application/json", ext: "json" },
  { type: "application/xml", ext: "xml" },
  { type: "application/x-sh", ext: "sh" },
  { type: "application/zip", ext: "zip" },
  { type: "application/x-rar-compressed", ext: "rar" },
  { type: "application/x-tar", ext: "tar" },
  { type: "application/x-bzip", ext: "bz" },
  { type: "application/x-bzip2", ext: "bz2" },
  { type: "application/pdf", ext: "pdf" },
  { type: "application/java-archive", ext: "jar" },
  { type: "application/msword", ext: "doc" },
  { type: "application/vnd.ms-excel", ext: "xls" },
  { type: "application/vnd.ms-excel", ext: "xlsx" },
  { type: "message/rfc822", ext: "eml" }
];
var isEmpty = (obj = {}) => Object.keys(obj).length === 0;
var sortByField = (list, field, dir) => {
  if (!list || !list.sort) {
    return false;
  }
  const dirX = dir && dir === "desc" ? -1 : 1;
  list.sort(function(a, b) {
    const a_val = a[field];
    const b_val = b[field];
    if (typeof b_val === "undefined") {
      return typeof a_val === "undefined" ? 0 : 1 * dirX;
    }
    if (typeof a_val === "undefined") {
      return -1 * dirX;
    }
    if (a_val < b_val) {
      return -1 * dirX;
    }
    if (a_val > b_val) {
      return 1 * dirX;
    }
    return 0;
  });
  return true;
};
var objectLessAttributes = (obj, less) => {
  const ret = Object.assign({}, obj);
  if (less) {
    if (typeof less === "string") {
      delete ret[less];
    } else {
      less.forEach((attr) => {
        delete ret[attr];
      });
    }
  }
  return ret;
};
var filenameToContentType = (filename, defVal = "application/octet-stream") => {
  const name3 = filename.toLowerCase();
  const filtered = MIME_MAP.filter((mime) => name3.endsWith("." + mime.ext));
  return filtered.length > 0 ? filtered[0].type : defVal;
};
var isTextFile = (contentType) => {
  const type = contentType.toLowerCase();
  if (type.startsWith("text/")) {
    return true;
  }
  return type === "application/json" || type === "application/xml" || type === "application/sh";
};
var generateRandomString = () => {
  let result = "";
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 32; i > 0; i -= 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};
var makeQuerablePromise = (promise) => {
  if (promise.isResolved)
    return promise;
  let isPending = true;
  let isRejected = false;
  let isFullfilled = false;
  const result = promise.then((data) => {
    isFullfilled = true;
    isPending = false;
    return data;
  }, (e) => {
    isRejected = true;
    isPending = false;
    throw e;
  });
  result.isFullfilled = () => isFullfilled;
  result.isPending = () => isPending;
  result.isRejected = () => isRejected;
  return result;
};
var isWebWorker = () => {
  if (typeof self === "undefined") {
    return false;
  }
  const selfContext = self;
  return typeof selfContext.WorkerGlobalScope !== "undefined" && self instanceof selfContext.WorkerGlobalScope;
};
var browserOrNode = () => {
  const isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined";
  const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
  return {
    isBrowser: isBrowser2,
    isNode
  };
};
var transferKeyToLowerCase = (obj, whiteListForItself = [], whiteListForChildren = []) => {
  if (!isStrictObject(obj))
    return obj;
  const ret = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const transferedKey = whiteListForItself.includes(key) ? key : key[0].toLowerCase() + key.slice(1);
      ret[transferedKey] = whiteListForChildren.includes(key) ? obj[key] : transferKeyToLowerCase(obj[key], whiteListForItself, whiteListForChildren);
    }
  }
  return ret;
};
var transferKeyToUpperCase = (obj, whiteListForItself = [], whiteListForChildren = []) => {
  if (!isStrictObject(obj))
    return obj;
  const ret = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const transferredKey = whiteListForItself.includes(key) ? key : key[0].toUpperCase() + key.slice(1);
      ret[transferredKey] = whiteListForChildren.includes(key) ? obj[key] : transferKeyToUpperCase(obj[key], whiteListForItself, whiteListForChildren);
    }
  }
  return ret;
};
var isStrictObject = (obj) => {
  return obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) && !(obj instanceof Number) && !(obj instanceof String) && !(obj instanceof Boolean);
};
var JS = class {
};
JS.isEmpty = isEmpty;
JS.sortByField = sortByField;
JS.objectLessAttributes = objectLessAttributes;
JS.filenameToContentType = filenameToContentType;
JS.isTextFile = isTextFile;
JS.generateRandomString = generateRandomString;
JS.makeQuerablePromise = makeQuerablePromise;
JS.isWebWorker = isWebWorker;
JS.browserOrNode = browserOrNode;
JS.transferKeyToLowerCase = transferKeyToLowerCase;
JS.transferKeyToUpperCase = transferKeyToUpperCase;
JS.isStrictObject = isStrictObject;

// src/Signer.ts
var import_sha256_js = __toModule(require_build());

// node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js
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

// src/Signer.ts
var import_url = __toModule(require_url());

// src/Util/Retry.ts
var logger6 = new ConsoleLogger("Util");
var NonRetryableError = class extends Error {
  constructor(message) {
    super(message);
    this.nonRetryable = true;
  }
};
var isNonRetryableError = (obj) => {
  const key = "nonRetryable";
  return obj && obj[key];
};
async function retry(functionToRetry, args, delayFn, attempt = 1) {
  if (typeof functionToRetry !== "function") {
    throw Error("functionToRetry must be a function");
  }
  logger6.debug(`${functionToRetry.name} attempt #${attempt} with this vars: ${JSON.stringify(args)}`);
  try {
    return await functionToRetry(...args);
  } catch (err) {
    logger6.debug(`error on ${functionToRetry.name}`, err);
    if (isNonRetryableError(err)) {
      logger6.debug(`${functionToRetry.name} non retryable error`, err);
      throw err;
    }
    const retryIn = delayFn(attempt, args, err);
    logger6.debug(`${functionToRetry.name} retrying in ${retryIn} ms`);
    if (retryIn !== false) {
      await new Promise((res) => setTimeout(res, retryIn));
      return await retry(functionToRetry, args, delayFn, attempt + 1);
    } else {
      throw err;
    }
  }
}
var MAX_DELAY_MS = 5 * 60 * 1e3;
function jitteredBackoff(maxDelayMs) {
  const BASE_TIME_MS = 100;
  const JITTER_FACTOR = 100;
  return (attempt) => {
    const delay = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
    return delay > maxDelayMs ? false : delay;
  };
}
var jitteredExponentialRetry = (functionToRetry, args, maxDelayMs = MAX_DELAY_MS) => retry(functionToRetry, args, jitteredBackoff(maxDelayMs));

// src/Util/Mutex.ts
var Mutex = class {
  constructor() {
    this._queue = [];
    this._pending = false;
  }
  isLocked() {
    return this._pending;
  }
  acquire() {
    const ticket = new Promise((resolve) => this._queue.push(resolve));
    if (!this._pending) {
      this._dispatchNext();
    }
    return ticket;
  }
  runExclusive(callback) {
    return this.acquire().then((release) => {
      let result;
      try {
        result = callback();
      } catch (e) {
        release();
        throw e;
      }
      return Promise.resolve(result).then((x) => (release(), x), (e) => {
        release();
        throw e;
      });
    });
  }
  _dispatchNext() {
    if (this._queue.length > 0) {
      this._pending = true;
      this._queue.shift()(this._dispatchNext.bind(this));
    } else {
      this._pending = false;
    }
  }
};
var Mutex_default = Mutex;

// ../../node_modules/zen-observable-ts/lib/bundle.esm.js
var import_zen_observable = __toModule(require_zen_observable());
var Observable = import_zen_observable.default;
var bundle_esm_default = Observable;

// src/Util/Reachability.ts
var _ReachabilityNavigator = class {
  networkMonitor(netInfo) {
    if (browserOrNode().isNode) {
      return bundle_esm_default.from([{ online: true }]);
    }
    const globalObj = isWebWorker() ? self : window;
    return new bundle_esm_default((observer) => {
      observer.next({ online: globalObj.navigator.onLine });
      const notifyOnline = () => observer.next({ online: true });
      const notifyOffline = () => observer.next({ online: false });
      globalObj.addEventListener("online", notifyOnline);
      globalObj.addEventListener("offline", notifyOffline);
      _ReachabilityNavigator._observers.push(observer);
      return () => {
        globalObj.removeEventListener("online", notifyOnline);
        globalObj.removeEventListener("offline", notifyOffline);
        _ReachabilityNavigator._observers = _ReachabilityNavigator._observers.filter((_observer) => _observer !== observer);
      };
    });
  }
  static _observerOverride(status) {
    for (const observer of _ReachabilityNavigator._observers) {
      if (observer.closed) {
        _ReachabilityNavigator._observers = _ReachabilityNavigator._observers.filter((_observer) => _observer !== observer);
        continue;
      }
      observer.next(status);
    }
  }
};
var ReachabilityNavigator = _ReachabilityNavigator;
ReachabilityNavigator._observers = [];

// src/Util/DateUtils.ts
var FIVE_MINUTES_IN_MS = 1e3 * 60 * 5;
var DateUtils = {
  clockOffset: 0,
  getDateWithClockOffset() {
    if (DateUtils.clockOffset) {
      return new Date(new Date().getTime() + DateUtils.clockOffset);
    } else {
      return new Date();
    }
  },
  getClockOffset() {
    return DateUtils.clockOffset;
  },
  getHeaderStringFromDate(date = DateUtils.getDateWithClockOffset()) {
    return date.toISOString().replace(/[:\-]|\.\d{3}/g, "");
  },
  getDateFromHeaderString(header) {
    const [, year, month, day, hour, minute, second] = header.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2}).+/);
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
  },
  isClockSkewed(serverDate) {
    return Math.abs(serverDate.getTime() - DateUtils.getDateWithClockOffset().getTime()) >= FIVE_MINUTES_IN_MS;
  },
  isClockSkewError(error) {
    if (!error.response || !error.response.headers) {
      return false;
    }
    const { headers } = error.response;
    return Boolean(["BadRequestException", "InvalidSignatureException"].includes(headers["x-amzn-errortype"]) && (headers.date || headers.Date));
  },
  setClockOffset(offset) {
    DateUtils.clockOffset = offset;
  }
};

// src/Util/StringUtils.ts
function urlSafeEncode(str) {
  return str.split("").map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join("");
}
function urlSafeDecode(hex) {
  return hex.match(/.{2}/g).map((char) => String.fromCharCode(parseInt(char, 16))).join("");
}

// src/Signer.ts
var logger7 = new ConsoleLogger("Signer");
var DEFAULT_ALGORITHM = "AWS4-HMAC-SHA256";
var IOT_SERVICE_NAME = "iotdevicegateway";
var encrypt = function(key, src) {
  const hash2 = new import_sha256_js.Sha256(key);
  hash2.update(src);
  return hash2.digestSync();
};
var hash = function(src) {
  const arg = src || "";
  const hash2 = new import_sha256_js.Sha256();
  hash2.update(arg);
  return toHex(hash2.digestSync());
};
var escape_RFC3986 = function(component) {
  return component.replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
};
var canonical_query = function(query) {
  if (!query || query.length === 0) {
    return "";
  }
  return query.split("&").map((e) => {
    const key_val = e.split("=");
    if (key_val.length === 1) {
      return e;
    } else {
      const reencoded_val = escape_RFC3986(key_val[1]);
      return key_val[0] + "=" + reencoded_val;
    }
  }).sort((a, b) => {
    const key_a = a.split("=")[0];
    const key_b = b.split("=")[0];
    if (key_a === key_b) {
      return a < b ? -1 : 1;
    } else {
      return key_a < key_b ? -1 : 1;
    }
  }).join("&");
};
var canonical_headers = function(headers) {
  if (!headers || Object.keys(headers).length === 0) {
    return "";
  }
  return Object.keys(headers).map(function(key) {
    return {
      key: key.toLowerCase(),
      value: headers[key] ? headers[key].trim().replace(/\s+/g, " ") : ""
    };
  }).sort(function(a, b) {
    return a.key < b.key ? -1 : 1;
  }).map(function(item) {
    return item.key + ":" + item.value;
  }).join("\n") + "\n";
};
var signed_headers = function(headers) {
  return Object.keys(headers).map(function(key) {
    return key.toLowerCase();
  }).sort().join(";");
};
var canonical_request = function(request) {
  const url_info = (0, import_url.parse)(request.url);
  return [
    request.method || "/",
    encodeURIComponent(url_info.pathname).replace(/%2F/gi, "/"),
    canonical_query(url_info.query),
    canonical_headers(request.headers),
    signed_headers(request.headers),
    hash(request.data)
  ].join("\n");
};
var parse_service_info = function(request) {
  const url_info = (0, import_url.parse)(request.url), host = url_info.host;
  const matched = host.match(/([^\.]+)\.(?:([^\.]*)\.)?amazonaws\.com$/);
  let parsed = (matched || []).slice(1, 3);
  if (parsed[1] === "es") {
    parsed = parsed.reverse();
  }
  return {
    service: request.service || parsed[0],
    region: request.region || parsed[1]
  };
};
var credential_scope = function(d_str, region, service) {
  return [d_str, region, service, "aws4_request"].join("/");
};
var string_to_sign = function(algorithm, canonical_request2, dt_str, scope) {
  return [algorithm, dt_str, scope, hash(canonical_request2)].join("\n");
};
var get_signing_key = function(secret_key, d_str, service_info) {
  logger7.debug(service_info);
  const k = "AWS4" + secret_key, k_date = encrypt(k, d_str), k_region = encrypt(k_date, service_info.region), k_service = encrypt(k_region, service_info.service), k_signing = encrypt(k_service, "aws4_request");
  return k_signing;
};
var get_signature = function(signing_key, str_to_sign) {
  return toHex(encrypt(signing_key, str_to_sign));
};
var get_authorization_header = function(algorithm, access_key, scope, signed_headers2, signature) {
  return [
    algorithm + " Credential=" + access_key + "/" + scope,
    "SignedHeaders=" + signed_headers2,
    "Signature=" + signature
  ].join(", ");
};
var Signer = class {
  static sign(request, access_info, service_info = null) {
    request.headers = request.headers || {};
    const dt = DateUtils.getDateWithClockOffset(), dt_str = dt.toISOString().replace(/[:\-]|\.\d{3}/g, ""), d_str = dt_str.substr(0, 8);
    const url_info = (0, import_url.parse)(request.url);
    request.headers["host"] = url_info.host;
    request.headers["x-amz-date"] = dt_str;
    if (access_info.session_token) {
      request.headers["X-Amz-Security-Token"] = access_info.session_token;
    }
    const request_str = canonical_request(request);
    logger7.debug(request_str);
    const serviceInfo = service_info || parse_service_info(request), scope = credential_scope(d_str, serviceInfo.region, serviceInfo.service), str_to_sign = string_to_sign(DEFAULT_ALGORITHM, request_str, dt_str, scope);
    const signing_key = get_signing_key(access_info.secret_key, d_str, serviceInfo), signature = get_signature(signing_key, str_to_sign);
    const authorization_header = get_authorization_header(DEFAULT_ALGORITHM, access_info.access_key, scope, signed_headers(request.headers), signature);
    request.headers["Authorization"] = authorization_header;
    return request;
  }
  static signUrl(urlOrRequest, accessInfo, serviceInfo, expiration) {
    const urlToSign = typeof urlOrRequest === "object" ? urlOrRequest.url : urlOrRequest;
    const method = typeof urlOrRequest === "object" ? urlOrRequest.method : "GET";
    const body = typeof urlOrRequest === "object" ? urlOrRequest.body : void 0;
    const now = DateUtils.getDateWithClockOffset().toISOString().replace(/[:\-]|\.\d{3}/g, "");
    const today = now.substr(0, 8);
    const { search, ...parsedUrl } = (0, import_url.parse)(urlToSign, true, true);
    const { host } = parsedUrl;
    const signedHeaders = { host };
    const { region, service } = serviceInfo || parse_service_info({ url: (0, import_url.format)(parsedUrl) });
    const credentialScope = credential_scope(today, region, service);
    const sessionTokenRequired = accessInfo.session_token && service !== IOT_SERVICE_NAME;
    const queryParams = {
      "X-Amz-Algorithm": DEFAULT_ALGORITHM,
      "X-Amz-Credential": [accessInfo.access_key, credentialScope].join("/"),
      "X-Amz-Date": now.substr(0, 16),
      ...sessionTokenRequired ? { "X-Amz-Security-Token": `${accessInfo.session_token}` } : {},
      ...expiration ? { "X-Amz-Expires": `${expiration}` } : {},
      "X-Amz-SignedHeaders": Object.keys(signedHeaders).join(",")
    };
    const canonicalRequest = canonical_request({
      method,
      url: (0, import_url.format)({
        ...parsedUrl,
        query: {
          ...parsedUrl.query,
          ...queryParams
        }
      }),
      headers: signedHeaders,
      data: body
    });
    const stringToSign = string_to_sign(DEFAULT_ALGORITHM, canonicalRequest, now, credentialScope);
    const signing_key = get_signing_key(accessInfo.secret_key, today, {
      region,
      service
    });
    const signature = get_signature(signing_key, stringToSign);
    const additionalQueryParams = {
      "X-Amz-Signature": signature,
      ...accessInfo.session_token && {
        "X-Amz-Security-Token": accessInfo.session_token
      }
    };
    const result = (0, import_url.format)({
      protocol: parsedUrl.protocol,
      slashes: true,
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      pathname: parsedUrl.pathname,
      query: {
        ...parsedUrl.query,
        ...queryParams,
        ...additionalQueryParams
      }
    });
    return result;
  }
};

// src/Parser.ts
var logger8 = new ConsoleLogger("Parser");
var parseMobileHubConfig = (config) => {
  const amplifyConfig = {};
  if (config["aws_mobile_analytics_app_id"]) {
    const Analytics = {
      AWSPinpoint: {
        appId: config["aws_mobile_analytics_app_id"],
        region: config["aws_mobile_analytics_app_region"]
      }
    };
    amplifyConfig.Analytics = Analytics;
  }
  if (config["aws_cognito_identity_pool_id"] || config["aws_user_pools_id"]) {
    amplifyConfig.Auth = {
      userPoolId: config["aws_user_pools_id"],
      userPoolWebClientId: config["aws_user_pools_web_client_id"],
      region: config["aws_cognito_region"],
      identityPoolId: config["aws_cognito_identity_pool_id"],
      identityPoolRegion: config["aws_cognito_region"],
      mandatorySignIn: config["aws_mandatory_sign_in"] === "enable"
    };
  }
  let storageConfig;
  if (config["aws_user_files_s3_bucket"]) {
    storageConfig = {
      AWSS3: {
        bucket: config["aws_user_files_s3_bucket"],
        region: config["aws_user_files_s3_bucket_region"],
        dangerouslyConnectToHttpEndpointForTesting: config["aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing"]
      }
    };
  } else {
    storageConfig = config ? config.Storage || config : {};
  }
  if (config["Logging"]) {
    amplifyConfig.Logging = {
      ...config["Logging"],
      region: config["aws_project_region"]
    };
  }
  if (config["geo"]) {
    amplifyConfig.Geo = Object.assign({}, config.geo);
    if (config.geo["amazon_location_service"]) {
      amplifyConfig.Geo = {
        AmazonLocationService: config.geo["amazon_location_service"]
      };
    }
  }
  amplifyConfig.Analytics = Object.assign({}, amplifyConfig.Analytics, config.Analytics);
  amplifyConfig.Auth = Object.assign({}, amplifyConfig.Auth, config.Auth);
  amplifyConfig.Storage = Object.assign({}, storageConfig);
  amplifyConfig.Logging = Object.assign({}, amplifyConfig.Logging, config.Logging);
  logger8.debug("parse config", config, "to amplifyconfig", amplifyConfig);
  return amplifyConfig;
};
var Parser = class {
};
Parser.parseMobilehubConfig = parseMobileHubConfig;

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/node_modules/tslib/modules/index.js
var import_tslib = __toModule(require_tslib2());
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

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/package.json
var name = "@aws-sdk/client-cloudwatch-logs";
var description = "AWS SDK for JavaScript Cloudwatch Logs Client for Node.js, Browser and React Native";
var version2 = "3.6.1";
var scripts = {
  clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
  "build-documentation": "yarn remove-documentation && typedoc ./",
  prepublishOnly: "yarn build",
  pretest: "yarn build:cjs",
  "remove-definitions": "rimraf ./types",
  "remove-dist": "rimraf ./dist",
  "remove-documentation": "rimraf ./docs",
  test: "exit 0",
  "build:cjs": "tsc -p tsconfig.json",
  "build:es": "tsc -p tsconfig.es.json",
  build: "yarn build:cjs && yarn build:es",
  postbuild: "downlevel-dts types types/ts3.4"
};
var main = "./dist/cjs/index.js";
var types = "./types/index.d.ts";
var module = "./dist/es/index.js";
var browser = {
  "./runtimeConfig": "./runtimeConfig.browser"
};
var react_native = {
  "./runtimeConfig": "./runtimeConfig.native"
};
var sideEffects = false;
var dependencies = {
  "@aws-crypto/sha256-browser": "^1.0.0",
  "@aws-crypto/sha256-js": "^1.0.0",
  "@aws-sdk/config-resolver": "3.6.1",
  "@aws-sdk/credential-provider-node": "3.6.1",
  "@aws-sdk/fetch-http-handler": "3.6.1",
  "@aws-sdk/hash-node": "3.6.1",
  "@aws-sdk/invalid-dependency": "3.6.1",
  "@aws-sdk/middleware-content-length": "3.6.1",
  "@aws-sdk/middleware-host-header": "3.6.1",
  "@aws-sdk/middleware-logger": "3.6.1",
  "@aws-sdk/middleware-retry": "3.6.1",
  "@aws-sdk/middleware-serde": "3.6.1",
  "@aws-sdk/middleware-signing": "3.6.1",
  "@aws-sdk/middleware-stack": "3.6.1",
  "@aws-sdk/middleware-user-agent": "3.6.1",
  "@aws-sdk/node-config-provider": "3.6.1",
  "@aws-sdk/node-http-handler": "3.6.1",
  "@aws-sdk/protocol-http": "3.6.1",
  "@aws-sdk/smithy-client": "3.6.1",
  "@aws-sdk/types": "3.6.1",
  "@aws-sdk/url-parser": "3.6.1",
  "@aws-sdk/url-parser-native": "3.6.1",
  "@aws-sdk/util-base64-browser": "3.6.1",
  "@aws-sdk/util-base64-node": "3.6.1",
  "@aws-sdk/util-body-length-browser": "3.6.1",
  "@aws-sdk/util-body-length-node": "3.6.1",
  "@aws-sdk/util-user-agent-browser": "3.6.1",
  "@aws-sdk/util-user-agent-node": "3.6.1",
  "@aws-sdk/util-utf8-browser": "3.6.1",
  "@aws-sdk/util-utf8-node": "3.6.1",
  tslib: "^2.0.0"
};
var devDependencies = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@types/node": "^12.7.5",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  typedoc: "^0.19.2",
  typescript: "~4.1.2"
};
var engines = {
  node: ">=10.0.0"
};
var typesVersions = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
};
var author = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
};
var license = "Apache-2.0";
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cloudwatch-logs";
var repository = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-cloudwatch-logs"
};
var package_default = {
  name,
  description,
  version: version2,
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

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/runtimeConfig.browser.js
var import_sha256_browser = __toModule(require_build6());

// ../../node_modules/tslib/modules/index.js
var import_tslib2 = __toModule(require_tslib());
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
  __await: __await2,
  __asyncGenerator: __asyncGenerator2,
  __asyncDelegator: __asyncDelegator2,
  __asyncValues: __asyncValues2,
  __makeTemplateObject: __makeTemplateObject2,
  __importStar: __importStar2,
  __importDefault: __importDefault2,
  __classPrivateFieldGet: __classPrivateFieldGet2,
  __classPrivateFieldSet: __classPrivateFieldSet2
} = import_tslib2.default;

// ../../node_modules/@aws-sdk/protocol-http/dist/es/httpResponse.js
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

// ../../node_modules/@aws-sdk/protocol-http/dist/es/httpRequest.js
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
    var cloned = new HttpRequest2(__assign2(__assign2({}, this), { headers: __assign2({}, this.headers) }));
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
    return __assign2(__assign2({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? __spread2(param) : param, _a));
  }, {});
}

// ../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js
var escapeUri = function(uri) {
  return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
};
var hexEncode = function(c) {
  return "%" + c.charCodeAt(0).toString(16).toUpperCase();
};

// ../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/querystring-builder/dist/es/index.js
function buildQueryString(query) {
  var e_1, _a;
  var parts = [];
  try {
    for (var _b = __values2(Object.keys(query).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
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

// ../../node_modules/@aws-sdk/fetch-http-handler/dist/es/request-timeout.js
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

// ../../node_modules/@aws-sdk/fetch-http-handler/dist/es/fetch-http-handler.js
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
          for (var _b2 = __values2(fetchHeaders.entries()), _c = _b2.next(); !_c.done; _c = _b2.next()) {
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

// ../../node_modules/@aws-sdk/util-base64-browser/dist/es/index.js
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

// ../../node_modules/@aws-sdk/fetch-http-handler/dist/es/stream-collector.js
var streamCollector = function(stream) {
  if (typeof Blob === "function" && stream instanceof Blob) {
    return collectBlob(stream);
  }
  return collectStream(stream);
};
function collectBlob(blob) {
  return __awaiter2(this, void 0, void 0, function() {
    var base64, arrayBuffer;
    return __generator2(this, function(_a) {
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
  return __awaiter2(this, void 0, void 0, function() {
    var res, reader, isDone, _a, done, value, prior;
    return __generator2(this, function(_b) {
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

// ../../node_modules/@aws-sdk/invalid-dependency/dist/es/invalidProvider.js
var invalidProvider = function(message) {
  return function() {
    return Promise.reject(message);
  };
};

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/retryMiddleware.js
var retryMiddleware = function(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var _a;
        return __generator2(this, function(_b) {
          if ((_a = options === null || options === void 0 ? void 0 : options.retryStrategy) === null || _a === void 0 ? void 0 : _a.mode)
            context.userAgent = __spread2(context.userAgent || [], [["cfg/retry-mode", options.retryStrategy.mode]]);
          return [2, options.retryStrategy.retry(next, args)];
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

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/constants.js
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// ../../node_modules/@aws-sdk/service-error-classification/dist/es/constants.js
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

// ../../node_modules/@aws-sdk/service-error-classification/dist/es/index.js
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

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultStrategy.js
var import_uuid = __toModule(require_uuid());

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultRetryQuota.js
var getDefaultRetryQuota = function(initialRetryTokens) {
  var MAX_CAPACITY = initialRetryTokens;
  var availableCapacity = initialRetryTokens;
  var getCapacityAmount = function(error) {
    return error.name === "TimeoutError" ? TIMEOUT_RETRY_COST : RETRY_COST;
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
    availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : NO_RETRY_INCREMENT;
    availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
  };
  return Object.freeze({
    hasRetryTokens,
    retrieveRetryTokens,
    releaseRetryTokens
  });
};

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/delayDecider.js
var defaultDelayDecider = function(delayBase, attempts) {
  return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * Math.pow(2, attempts) * delayBase));
};

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/retryDecider.js
var defaultRetryDecider = function(error) {
  if (!error) {
    return false;
  }
  return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultStrategy.js
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = "standard";
var StandardRetryStrategy = function() {
  function StandardRetryStrategy2(maxAttemptsProvider, options) {
    var _a, _b, _c;
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = DEFAULT_RETRY_MODE;
    this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : defaultRetryDecider;
    this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : defaultDelayDecider;
    this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
  }
  StandardRetryStrategy2.prototype.shouldRetry = function(error, attempts, maxAttempts) {
    return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
  };
  StandardRetryStrategy2.prototype.getMaxAttempts = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var maxAttempts, error_1;
      return __generator2(this, function(_a) {
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
  StandardRetryStrategy2.prototype.retry = function(next, args) {
    return __awaiter2(this, void 0, void 0, function() {
      var retryTokenAmount, attempts, totalDelay, maxAttempts, request, _loop_1, this_1, state_1;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            attempts = 0;
            totalDelay = 0;
            return [4, this.getMaxAttempts()];
          case 1:
            maxAttempts = _a.sent();
            request = args.request;
            if (HttpRequest.isInstance(request)) {
              request.headers[INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
            }
            _loop_1 = function() {
              var _a2, response, output, err_1, delay_1;
              return __generator2(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    _b.trys.push([0, 2, , 5]);
                    if (HttpRequest.isInstance(request)) {
                      request.headers[REQUEST_HEADER] = "attempt=" + (attempts + 1) + "; max=" + maxAttempts;
                    }
                    return [4, next(args)];
                  case 1:
                    _a2 = _b.sent(), response = _a2.response, output = _a2.output;
                    this_1.retryQuota.releaseRetryTokens(retryTokenAmount);
                    output.$metadata.attempts = attempts + 1;
                    output.$metadata.totalRetryDelay = totalDelay;
                    return [2, { value: { response, output } }];
                  case 2:
                    err_1 = _b.sent();
                    attempts++;
                    if (!this_1.shouldRetry(err_1, attempts, maxAttempts))
                      return [3, 4];
                    retryTokenAmount = this_1.retryQuota.retrieveRetryTokens(err_1);
                    delay_1 = this_1.delayDecider(isThrottlingError(err_1) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE, attempts);
                    totalDelay += delay_1;
                    return [4, new Promise(function(resolve) {
                      return setTimeout(resolve, delay_1);
                    })];
                  case 3:
                    _b.sent();
                    return [2, "continue"];
                  case 4:
                    if (!err_1.$metadata) {
                      err_1.$metadata = {};
                    }
                    err_1.$metadata.attempts = attempts;
                    err_1.$metadata.totalRetryDelay = totalDelay;
                    throw err_1;
                  case 5:
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

// ../../node_modules/@aws-sdk/middleware-retry/dist/es/configurations.js
var resolveRetryConfig = function(input) {
  var maxAttempts = normalizeMaxAttempts(input.maxAttempts);
  return __assign2(__assign2({}, input), { maxAttempts, retryStrategy: input.retryStrategy || new StandardRetryStrategy(maxAttempts) });
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

// ../../node_modules/@aws-sdk/util-body-length-browser/dist/es/index.js
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

// ../../node_modules/@aws-sdk/util-user-agent-browser/dist/es/index.js
var import_bowser = __toModule(require_es5());
var defaultUserAgent = function(_a) {
  var serviceId = _a.serviceId, clientVersion = _a.clientVersion;
  return function() {
    return __awaiter2(void 0, void 0, void 0, function() {
      var parsedUA, sections;
      var _a2, _b, _c, _d, _e, _f, _g;
      return __generator2(this, function(_h) {
        parsedUA = ((_a2 = window === null || window === void 0 ? void 0 : window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
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

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/runtimeConfig.browser.js
var import_util_utf8_browser = __toModule(require_cjs2());

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/endpoints.js
var AWS_TEMPLATE = "logs.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "logs.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "logs.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "logs.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "logs.{region}.amazonaws.com";
var AWS_REGIONS = new Set([
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
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
    case "af-south-1":
      regionInfo = {
        hostname: "logs.af-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-east-1":
      regionInfo = {
        hostname: "logs.ap-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "logs.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "logs.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "logs.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "logs.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "logs.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "logs.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "logs.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "logs.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "logs.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "logs.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-south-1":
      regionInfo = {
        hostname: "logs.eu-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "logs.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "logs.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "logs.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "logs-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "logs-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "logs-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "logs-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "logs.me-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "logs.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "logs.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "logs.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "logs.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-east-1"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "logs.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "logs.us-iso-east-1.c2s.ic.gov",
        partition: "aws-iso"
      };
      break;
    case "us-isob-east-1":
      regionInfo = {
        hostname: "logs.us-isob-east-1.sc2s.sgov.gov",
        partition: "aws-iso-b"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "logs.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "logs.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
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
  return Promise.resolve(__assign({ signingService: "logs" }, regionInfo));
};

// ../../node_modules/@aws-sdk/url-parser/node_modules/@aws-sdk/querystring-parser/dist/es/index.js
function parseQueryString(querystring) {
  var e_1, _a;
  var query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    try {
      for (var _b = __values2(querystring.split("&")), _c = _b.next(); !_c.done; _c = _b.next()) {
        var pair = _c.value;
        var _d = __read2(pair.split("="), 2), key = _d[0], _e = _d[1], value = _e === void 0 ? null : _e;
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

// ../../node_modules/@aws-sdk/url-parser/dist/es/index.js
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

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/runtimeConfig.shared.js
var ClientSharedValues = {
  apiVersion: "2014-03-28",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "CloudWatch Logs",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/runtimeConfig.browser.js
var ClientDefaultValues = __assign(__assign({}, ClientSharedValues), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues.serviceId,
  clientVersion: package_default.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser.fromUtf8, utf8Encoder: import_util_utf8_browser.toUtf8 });

// ../../node_modules/@aws-sdk/config-resolver/dist/es/EndpointsConfig.js
var resolveEndpointsConfig = function(input) {
  var _a;
  return __assign2(__assign2({}, input), { tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true, endpoint: input.endpoint ? normalizeEndpoint(input) : function() {
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
  return __awaiter2(void 0, void 0, void 0, function() {
    var _a, tls, region, dnsHostRegex, hostname;
    var _b;
    return __generator2(this, function(_c) {
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

// ../../node_modules/@aws-sdk/config-resolver/dist/es/RegionConfig.js
var resolveRegionConfig = function(input) {
  if (!input.region) {
    throw new Error("Region is missing");
  }
  return __assign2(__assign2({}, input), { region: normalizeRegion(input.region) });
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

// ../../node_modules/@aws-sdk/middleware-content-length/dist/es/index.js
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  var _this = this;
  return function(next) {
    return function(args) {
      return __awaiter2(_this, void 0, void 0, function() {
        var request, body, headers, length;
        var _a;
        return __generator2(this, function(_b) {
          request = args.request;
          if (HttpRequest.isInstance(request)) {
            body = request.body, headers = request.headers;
            if (body && Object.keys(headers).map(function(str) {
              return str.toLowerCase();
            }).indexOf(CONTENT_LENGTH_HEADER) === -1) {
              length = bodyLengthChecker(body);
              if (length !== void 0) {
                request.headers = __assign2(__assign2({}, request.headers), (_a = {}, _a[CONTENT_LENGTH_HEADER] = String(length), _a));
              }
            }
          }
          return [2, next(__assign2(__assign2({}, args), { request }))];
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

// ../../node_modules/@aws-sdk/middleware-host-header/dist/es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware = function(options) {
  return function(next) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var request, _a, handlerProtocol;
        return __generator2(this, function(_b) {
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

// ../../node_modules/@aws-sdk/middleware-logger/dist/es/loggerMiddleware.js
var loggerMiddleware = function() {
  return function(next, context) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var clientName, commandName, inputFilterSensitiveLog, logger13, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger13 = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
              return [4, next(args)];
            case 1:
              response = _b.sent();
              if (!logger13) {
                return [2, response];
              }
              if (typeof logger13.info === "function") {
                _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = __rest2(_a, ["$metadata"]);
                logger13.info({
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js
var SHORT_TO_HEX2 = {};
var HEX_TO_SHORT2 = {};
for (i = 0; i < 256; i++) {
  encodedByte = i.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = "0" + encodedByte;
  }
  SHORT_TO_HEX2[i] = encodedByte;
  HEX_TO_SHORT2[encodedByte] = i;
}
var encodedByte;
var i;
function toHex2(bytes) {
  var out = "";
  for (var i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX2[bytes[i]];
  }
  return out;
}

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js
var signingKeyCache = {};
var cacheQueue = [];
function createScope(shortDate, region, service) {
  return shortDate + "/" + region + "/" + service + "/" + KEY_TYPE_IDENTIFIER;
}
var getSigningKey = function(sha256Constructor, credentials, shortDate, region, service) {
  return __awaiter2(void 0, void 0, void 0, function() {
    var credsHash, cacheKey, key, _a, _b, signable, e_1_1;
    var e_1, _c;
    return __generator2(this, function(_d) {
      switch (_d.label) {
        case 0:
          return [4, hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId)];
        case 1:
          credsHash = _d.sent();
          cacheKey = shortDate + ":" + region + ":" + service + ":" + toHex2(credsHash) + ":" + credentials.sessionToken;
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
          _a = __values2([shortDate, region, service, KEY_TYPE_IDENTIFIER]), _b = _a.next();
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
  var hash2 = new ctor(secret);
  hash2.update(data);
  return hash2.digest();
}

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalHeaders.js
function getCanonicalHeaders(_a, unsignableHeaders, signableHeaders) {
  var e_1, _b;
  var headers = _a.headers;
  var canonical = {};
  try {
    for (var _c = __values2(Object.keys(headers).sort()), _d = _c.next(); !_d.done; _d = _c.next()) {
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js
var escapeUri2 = function(uri) {
  return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode2);
};
var hexEncode2 = function(c) {
  return "%" + c.charCodeAt(0).toString(16).toUpperCase();
};

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalQuery.js
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
      serialized[key2] = escapeUri2(key2) + "=" + escapeUri2(value);
    } else if (Array.isArray(value)) {
      serialized[key2] = value.slice(0).sort().reduce(function(encoded, value2) {
        return encoded.concat([escapeUri2(key2) + "=" + escapeUri2(value2)]);
      }, []).join("&");
    }
  };
  try {
    for (var _d = __values2(Object.keys(query).sort()), _e = _d.next(); !_e.done; _e = _d.next()) {
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js
var isArrayBuffer = function(arg) {
  return typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
};

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getPayloadHash.js
function getPayloadHash(_a, hashConstructor) {
  var headers = _a.headers, body = _a.body;
  return __awaiter2(this, void 0, void 0, function() {
    var _b, _c, headerName, hashCtor, _d;
    var e_1, _e;
    return __generator2(this, function(_f) {
      switch (_f.label) {
        case 0:
          try {
            for (_b = __values2(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
          _d = toHex2;
          return [4, hashCtor.digest()];
        case 2:
          return [2, _d.apply(void 0, [_f.sent()])];
        case 3:
          return [2, UNSIGNED_PAYLOAD];
      }
    });
  });
}

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/hasHeader.js
function hasHeader(soughtHeader, headers) {
  var e_1, _a;
  soughtHeader = soughtHeader.toLowerCase();
  try {
    for (var _b = __values2(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js
function cloneRequest(_a) {
  var headers = _a.headers, query = _a.query, rest = __rest2(_a, ["headers", "query"]);
  return __assign2(__assign2({}, rest), { headers: __assign2({}, headers), query: query ? cloneQuery2(query) : void 0 });
}
function cloneQuery2(query) {
  return Object.keys(query).reduce(function(carry, paramName) {
    var _a;
    var param = query[paramName];
    return __assign2(__assign2({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? __spread2(param) : param, _a));
  }, {});
}

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/moveHeadersToQuery.js
function moveHeadersToQuery(request, options) {
  var e_1, _a;
  var _b;
  if (options === void 0) {
    options = {};
  }
  var _c = typeof request.clone === "function" ? request.clone() : cloneRequest(request), headers = _c.headers, _d = _c.query, query = _d === void 0 ? {} : _d;
  try {
    for (var _e = __values2(Object.keys(headers)), _f = _e.next(); !_f.done; _f = _e.next()) {
      var name3 = _f.value;
      var lname = name3.toLowerCase();
      if (lname.substr(0, 6) === "x-amz-" && !((_b = options.unhoistableHeaders) === null || _b === void 0 ? void 0 : _b.has(lname))) {
        query[name3] = headers[name3];
        delete headers[name3];
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
  return __assign2(__assign2({}, request), {
    headers,
    query
  });
}

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/prepareRequest.js
function prepareRequest(request) {
  var e_1, _a;
  request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
  try {
    for (var _b = __values2(Object.keys(request.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/utilDate.js
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

// ../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/SignatureV4.js
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
    return __awaiter2(this, void 0, void 0, function() {
      var _a, signingDate, _b, expiresIn, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, credentials, region, _c, _d, longDate, shortDate, scope, request, canonicalHeaders, _e, _f, _g, _h, _j, _k;
      return __generator2(this, function(_l) {
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
    return __awaiter2(this, void 0, void 0, function() {
      return __generator2(this, function(_a) {
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
    return __awaiter2(this, void 0, void 0, function() {
      var region, _d, _e, shortDate, longDate, scope, hashedPayload, hash2, hashedHeaders, _f, stringToSign;
      return __generator2(this, function(_g) {
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
            hash2 = new this.sha256();
            hash2.update(headers);
            _f = toHex2;
            return [4, hash2.digest()];
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
    return __awaiter2(this, void 0, void 0, function() {
      var credentials, region, _d, shortDate, hash2, _e, _f, _g;
      return __generator2(this, function(_h) {
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
            hash2 = new (_f.apply(_e, [void 0, _h.sent()]))();
            hash2.update(stringToSign);
            _g = toHex2;
            return [4, hash2.digest()];
          case 6:
            return [2, _g.apply(void 0, [_h.sent()])];
        }
      });
    });
  };
  SignatureV42.prototype.signRequest = function(requestToSign, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signableHeaders = _b.signableHeaders, unsignableHeaders = _b.unsignableHeaders, signingRegion = _b.signingRegion, signingService = _b.signingService;
    return __awaiter2(this, void 0, void 0, function() {
      var credentials, region, _d, request, _e, longDate, shortDate, scope, payloadHash, canonicalHeaders, signature;
      return __generator2(this, function(_f) {
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
    return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery(request) + "\n" + sortedHeaders.map(function(name3) {
      return name3 + ":" + canonicalHeaders[name3];
    }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
  };
  SignatureV42.prototype.createStringToSign = function(longDate, credentialScope, canonicalRequest) {
    return __awaiter2(this, void 0, void 0, function() {
      var hash2, hashedRequest;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            hash2 = new this.sha256();
            hash2.update(canonicalRequest);
            return [4, hash2.digest()];
          case 1:
            hashedRequest = _a.sent();
            return [2, ALGORITHM_IDENTIFIER + "\n" + longDate + "\n" + credentialScope + "\n" + toHex2(hashedRequest)];
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
    return __awaiter2(this, void 0, void 0, function() {
      var stringToSign, hash2, _a, _b, _c;
      return __generator2(this, function(_d) {
        switch (_d.label) {
          case 0:
            return [4, this.createStringToSign(longDate, credentialScope, canonicalRequest)];
          case 1:
            stringToSign = _d.sent();
            _b = (_a = this.sha256).bind;
            return [4, keyPromise];
          case 2:
            hash2 = new (_b.apply(_a, [void 0, _d.sent()]))();
            hash2.update(stringToSign);
            _c = toHex2;
            return [4, hash2.digest()];
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

// ../../node_modules/@aws-sdk/middleware-signing/dist/es/configurations.js
function resolveAwsAuthConfig(input) {
  var _this = this;
  var credentials = input.credentials || input.credentialDefaultProvider(input);
  var normalizedCreds = normalizeProvider(credentials);
  var _a = input.signingEscapePath, signingEscapePath = _a === void 0 ? true : _a, _b = input.systemClockOffset, systemClockOffset = _b === void 0 ? input.systemClockOffset || 0 : _b, sha256 = input.sha256;
  var signer;
  if (input.signer) {
    signer = normalizeProvider(input.signer);
  } else {
    signer = function() {
      return normalizeProvider(input.region)().then(function(region) {
        return __awaiter2(_this, void 0, void 0, function() {
          return __generator2(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, input.regionInfoProvider(region)];
              case 1:
                return [2, [_a2.sent() || {}, region]];
            }
          });
        });
      }).then(function(_a2) {
        var _b2 = __read2(_a2, 2), regionInfo = _b2[0], region = _b2[1];
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
  return __assign2(__assign2({}, input), {
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer
  });
}
function normalizeProvider(input) {
  if (typeof input === "object") {
    var promisified_1 = Promise.resolve(input);
    return function() {
      return promisified_1;
    };
  }
  return input;
}

// ../../node_modules/@aws-sdk/middleware-signing/dist/es/middleware.js
var isClockSkewed = function(newServerTime, systemClockOffset) {
  return Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >= 3e5;
};
var getSkewCorrectedDate = function(systemClockOffset) {
  return new Date(Date.now() + systemClockOffset);
};
function awsAuthMiddleware(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter2(this, void 0, void 0, function() {
        var signer, _a, output, _b, _c, headers, dateHeader, serverTime;
        var _d;
        return __generator2(this, function(_e) {
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
              _c = [__assign2({}, args)];
              _d = {};
              return [4, signer.sign(args.request, {
                signingDate: new Date(Date.now() + options.systemClockOffset),
                signingRegion: context["signing_region"],
                signingService: context["signing_service"]
              })];
            case 4:
              return [4, _b.apply(void 0, [__assign2.apply(void 0, _c.concat([(_d.request = _e.sent(), _d)]))])];
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

// ../../node_modules/@aws-sdk/middleware-user-agent/dist/es/configurations.js
function resolveUserAgentConfig(input) {
  return __assign2(__assign2({}, input), { customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent });
}

// ../../node_modules/@aws-sdk/middleware-user-agent/dist/es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;

// ../../node_modules/@aws-sdk/middleware-user-agent/dist/es/user-agent-middleware.js
var userAgentMiddleware = function(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var request, headers, userAgent, defaultUserAgent2, customUserAgent, normalUAValue;
        var _a, _b;
        return __generator2(this, function(_c) {
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
              headers[X_AMZ_USER_AGENT] = __spread2(defaultUserAgent2, userAgent, customUserAgent).join(SPACE);
              normalUAValue = __spread2(defaultUserAgent2.filter(function(section) {
                return section.startsWith("aws-sdk-");
              }), customUserAgent).join(SPACE);
              if (options.runtime !== "browser" && normalUAValue) {
                headers[USER_AGENT] = headers[USER_AGENT] ? headers[USER_AGENT] + " " + normalUAValue : normalUAValue;
              }
              return [2, next(__assign2(__assign2({}, args), { request }))];
          }
        });
      });
    };
  };
};
var escapeUserAgent = function(_a) {
  var _b = __read2(_a, 2), name3 = _b[0], version4 = _b[1];
  var prefixSeparatorIndex = name3.indexOf("/");
  var prefix = name3.substring(0, prefixSeparatorIndex);
  var uaName = name3.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version4].filter(function(item) {
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

// ../../node_modules/@aws-sdk/middleware-stack/dist/es/MiddlewareStack.js
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
      toStack.add(entry.middleware, __assign2({}, entry));
    });
    relativeEntries.forEach(function(entry) {
      toStack.addRelativeTo(entry.middleware, __assign2({}, entry));
    });
    return toStack;
  };
  var expandRelativeMiddlewareList = function(from) {
    var expandedMiddlewareList = [];
    from.before.forEach(function(entry) {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push.apply(expandedMiddlewareList, __spread2(expandRelativeMiddlewareList(entry)));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach(function(entry) {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push.apply(expandedMiddlewareList, __spread2(expandRelativeMiddlewareList(entry)));
      }
    });
    return expandedMiddlewareList;
  };
  var getMiddlewareList = function() {
    var normalizedAbsoluteEntries = [];
    var normalizedRelativeEntries = [];
    var normalizedEntriesNameMap = {};
    absoluteEntries.forEach(function(entry) {
      var normalizedEntry = __assign2(__assign2({}, entry), { before: [], after: [] });
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach(function(entry) {
      var normalizedEntry = __assign2(__assign2({}, entry), { before: [], after: [] });
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
      wholeList.push.apply(wholeList, __spread2(expendedMiddlewareList));
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
      var name3 = options.name, override = options.override;
      var entry = __assign2({ step: "initialize", priority: "normal", middleware }, options);
      if (name3) {
        if (entriesNameSet.has(name3)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name3 + "'");
          var toOverrideIndex = absoluteEntries.findIndex(function(entry2) {
            return entry2.name === name3;
          });
          var toOverride = absoluteEntries[toOverrideIndex];
          if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
            throw new Error('"' + name3 + '" middleware with ' + toOverride.priority + " priority in " + toOverride.step + " step cannot be " + ("overridden by same-name middleware with " + entry.priority + " priority in " + entry.step + " step."));
          }
          absoluteEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name3);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: function(middleware, options) {
      var name3 = options.name, override = options.override;
      var entry = __assign2({ middleware }, options);
      if (name3) {
        if (entriesNameSet.has(name3)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name3 + "'");
          var toOverrideIndex = relativeEntries.findIndex(function(entry2) {
            return entry2.name === name3;
          });
          var toOverride = relativeEntries[toOverrideIndex];
          if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
            throw new Error('"' + name3 + '" middleware ' + toOverride.relation + ' "' + toOverride.toMiddleware + '" middleware cannot be overridden ' + ("by same-name middleware " + entry.relation + ' "' + entry.toMiddleware + '" middleware.'));
          }
          relativeEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name3);
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
        var tags = entry.tags, name3 = entry.name;
        if (tags && tags.includes(toRemove)) {
          if (name3)
            entriesNameSet.delete(name3);
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
        for (var _b = __values2(getMiddlewareList().reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
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

// ../../node_modules/@aws-sdk/smithy-client/dist/es/client.js
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

// ../../node_modules/@aws-sdk/smithy-client/dist/es/command.js
var Command = function() {
  function Command2() {
    this.middlewareStack = constructStack();
  }
  return Command2;
}();

// ../../node_modules/@aws-sdk/smithy-client/dist/es/lazy-json.js
var StringWrapper = function() {
  var Class = Object.getPrototypeOf(this).constructor;
  var Constructor = Function.bind.apply(String, __spread2([null], arguments));
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
  __extends2(LazyJsonString2, _super);
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

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/CloudWatchLogsClient.js
var CloudWatchLogsClient = function(_super) {
  __extends(CloudWatchLogsClient2, _super);
  function CloudWatchLogsClient2(configuration) {
    var _this = this;
    var _config_0 = __assign(__assign({}, ClientDefaultValues), configuration);
    var _config_1 = resolveRegionConfig(_config_0);
    var _config_2 = resolveEndpointsConfig(_config_1);
    var _config_3 = resolveAwsAuthConfig(_config_2);
    var _config_4 = resolveRetryConfig(_config_3);
    var _config_5 = resolveHostHeaderConfig(_config_4);
    var _config_6 = resolveUserAgentConfig(_config_5);
    _this = _super.call(this, _config_6) || this;
    _this.config = _config_6;
    _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
    _this.middlewareStack.use(getRetryPlugin(_this.config));
    _this.middlewareStack.use(getContentLengthPlugin(_this.config));
    _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
    _this.middlewareStack.use(getLoggerPlugin(_this.config));
    _this.middlewareStack.use(getUserAgentPlugin(_this.config));
    return _this;
  }
  CloudWatchLogsClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return CloudWatchLogsClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/models/models_0.js
var AssociateKmsKeyRequest;
(function(AssociateKmsKeyRequest2) {
  AssociateKmsKeyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AssociateKmsKeyRequest || (AssociateKmsKeyRequest = {}));
var InvalidParameterException;
(function(InvalidParameterException4) {
  InvalidParameterException4.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidParameterException || (InvalidParameterException = {}));
var OperationAbortedException;
(function(OperationAbortedException2) {
  OperationAbortedException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(OperationAbortedException || (OperationAbortedException = {}));
var ResourceNotFoundException;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function(ServiceUnavailableException2) {
  ServiceUnavailableException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
var CancelExportTaskRequest;
(function(CancelExportTaskRequest2) {
  CancelExportTaskRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CancelExportTaskRequest || (CancelExportTaskRequest = {}));
var InvalidOperationException;
(function(InvalidOperationException2) {
  InvalidOperationException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidOperationException || (InvalidOperationException = {}));
var CreateExportTaskRequest;
(function(CreateExportTaskRequest2) {
  CreateExportTaskRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateExportTaskRequest || (CreateExportTaskRequest = {}));
var CreateExportTaskResponse;
(function(CreateExportTaskResponse2) {
  CreateExportTaskResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateExportTaskResponse || (CreateExportTaskResponse = {}));
var LimitExceededException;
(function(LimitExceededException4) {
  LimitExceededException4.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function(ResourceAlreadyExistsException2) {
  ResourceAlreadyExistsException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
var CreateLogGroupRequest;
(function(CreateLogGroupRequest2) {
  CreateLogGroupRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateLogGroupRequest || (CreateLogGroupRequest = {}));
var CreateLogStreamRequest;
(function(CreateLogStreamRequest2) {
  CreateLogStreamRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateLogStreamRequest || (CreateLogStreamRequest = {}));
var DataAlreadyAcceptedException;
(function(DataAlreadyAcceptedException2) {
  DataAlreadyAcceptedException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DataAlreadyAcceptedException || (DataAlreadyAcceptedException = {}));
var DeleteDestinationRequest;
(function(DeleteDestinationRequest2) {
  DeleteDestinationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteDestinationRequest || (DeleteDestinationRequest = {}));
var DeleteLogGroupRequest;
(function(DeleteLogGroupRequest2) {
  DeleteLogGroupRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteLogGroupRequest || (DeleteLogGroupRequest = {}));
var DeleteLogStreamRequest;
(function(DeleteLogStreamRequest2) {
  DeleteLogStreamRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteLogStreamRequest || (DeleteLogStreamRequest = {}));
var DeleteMetricFilterRequest;
(function(DeleteMetricFilterRequest2) {
  DeleteMetricFilterRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteMetricFilterRequest || (DeleteMetricFilterRequest = {}));
var DeleteQueryDefinitionRequest;
(function(DeleteQueryDefinitionRequest2) {
  DeleteQueryDefinitionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteQueryDefinitionRequest || (DeleteQueryDefinitionRequest = {}));
var DeleteQueryDefinitionResponse;
(function(DeleteQueryDefinitionResponse2) {
  DeleteQueryDefinitionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteQueryDefinitionResponse || (DeleteQueryDefinitionResponse = {}));
var DeleteResourcePolicyRequest;
(function(DeleteResourcePolicyRequest2) {
  DeleteResourcePolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteResourcePolicyRequest || (DeleteResourcePolicyRequest = {}));
var DeleteRetentionPolicyRequest;
(function(DeleteRetentionPolicyRequest2) {
  DeleteRetentionPolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteRetentionPolicyRequest || (DeleteRetentionPolicyRequest = {}));
var DeleteSubscriptionFilterRequest;
(function(DeleteSubscriptionFilterRequest2) {
  DeleteSubscriptionFilterRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteSubscriptionFilterRequest || (DeleteSubscriptionFilterRequest = {}));
var DescribeDestinationsRequest;
(function(DescribeDestinationsRequest2) {
  DescribeDestinationsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeDestinationsRequest || (DescribeDestinationsRequest = {}));
var Destination;
(function(Destination2) {
  Destination2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Destination || (Destination = {}));
var DescribeDestinationsResponse;
(function(DescribeDestinationsResponse2) {
  DescribeDestinationsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeDestinationsResponse || (DescribeDestinationsResponse = {}));
var ExportTaskStatusCode;
(function(ExportTaskStatusCode2) {
  ExportTaskStatusCode2["CANCELLED"] = "CANCELLED";
  ExportTaskStatusCode2["COMPLETED"] = "COMPLETED";
  ExportTaskStatusCode2["FAILED"] = "FAILED";
  ExportTaskStatusCode2["PENDING"] = "PENDING";
  ExportTaskStatusCode2["PENDING_CANCEL"] = "PENDING_CANCEL";
  ExportTaskStatusCode2["RUNNING"] = "RUNNING";
})(ExportTaskStatusCode || (ExportTaskStatusCode = {}));
var DescribeExportTasksRequest;
(function(DescribeExportTasksRequest2) {
  DescribeExportTasksRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeExportTasksRequest || (DescribeExportTasksRequest = {}));
var ExportTaskExecutionInfo;
(function(ExportTaskExecutionInfo2) {
  ExportTaskExecutionInfo2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ExportTaskExecutionInfo || (ExportTaskExecutionInfo = {}));
var ExportTaskStatus;
(function(ExportTaskStatus2) {
  ExportTaskStatus2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ExportTaskStatus || (ExportTaskStatus = {}));
var ExportTask;
(function(ExportTask2) {
  ExportTask2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ExportTask || (ExportTask = {}));
var DescribeExportTasksResponse;
(function(DescribeExportTasksResponse2) {
  DescribeExportTasksResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeExportTasksResponse || (DescribeExportTasksResponse = {}));
var DescribeLogGroupsRequest;
(function(DescribeLogGroupsRequest2) {
  DescribeLogGroupsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeLogGroupsRequest || (DescribeLogGroupsRequest = {}));
var LogGroup;
(function(LogGroup3) {
  LogGroup3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LogGroup || (LogGroup = {}));
var DescribeLogGroupsResponse;
(function(DescribeLogGroupsResponse2) {
  DescribeLogGroupsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeLogGroupsResponse || (DescribeLogGroupsResponse = {}));
var OrderBy;
(function(OrderBy2) {
  OrderBy2["LastEventTime"] = "LastEventTime";
  OrderBy2["LogStreamName"] = "LogStreamName";
})(OrderBy || (OrderBy = {}));
var DescribeLogStreamsRequest;
(function(DescribeLogStreamsRequest2) {
  DescribeLogStreamsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeLogStreamsRequest || (DescribeLogStreamsRequest = {}));
var LogStream;
(function(LogStream3) {
  LogStream3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LogStream || (LogStream = {}));
var DescribeLogStreamsResponse;
(function(DescribeLogStreamsResponse2) {
  DescribeLogStreamsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeLogStreamsResponse || (DescribeLogStreamsResponse = {}));
var DescribeMetricFiltersRequest;
(function(DescribeMetricFiltersRequest2) {
  DescribeMetricFiltersRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeMetricFiltersRequest || (DescribeMetricFiltersRequest = {}));
var MetricTransformation;
(function(MetricTransformation2) {
  MetricTransformation2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MetricTransformation || (MetricTransformation = {}));
var MetricFilter;
(function(MetricFilter2) {
  MetricFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MetricFilter || (MetricFilter = {}));
var DescribeMetricFiltersResponse;
(function(DescribeMetricFiltersResponse2) {
  DescribeMetricFiltersResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeMetricFiltersResponse || (DescribeMetricFiltersResponse = {}));
var QueryStatus;
(function(QueryStatus2) {
  QueryStatus2["Cancelled"] = "Cancelled";
  QueryStatus2["Complete"] = "Complete";
  QueryStatus2["Failed"] = "Failed";
  QueryStatus2["Running"] = "Running";
  QueryStatus2["Scheduled"] = "Scheduled";
})(QueryStatus || (QueryStatus = {}));
var DescribeQueriesRequest;
(function(DescribeQueriesRequest2) {
  DescribeQueriesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeQueriesRequest || (DescribeQueriesRequest = {}));
var QueryInfo;
(function(QueryInfo2) {
  QueryInfo2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(QueryInfo || (QueryInfo = {}));
var DescribeQueriesResponse;
(function(DescribeQueriesResponse2) {
  DescribeQueriesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeQueriesResponse || (DescribeQueriesResponse = {}));
var DescribeQueryDefinitionsRequest;
(function(DescribeQueryDefinitionsRequest2) {
  DescribeQueryDefinitionsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeQueryDefinitionsRequest || (DescribeQueryDefinitionsRequest = {}));
var QueryDefinition;
(function(QueryDefinition2) {
  QueryDefinition2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(QueryDefinition || (QueryDefinition = {}));
var DescribeQueryDefinitionsResponse;
(function(DescribeQueryDefinitionsResponse2) {
  DescribeQueryDefinitionsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeQueryDefinitionsResponse || (DescribeQueryDefinitionsResponse = {}));
var DescribeResourcePoliciesRequest;
(function(DescribeResourcePoliciesRequest2) {
  DescribeResourcePoliciesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeResourcePoliciesRequest || (DescribeResourcePoliciesRequest = {}));
var ResourcePolicy;
(function(ResourcePolicy2) {
  ResourcePolicy2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ResourcePolicy || (ResourcePolicy = {}));
var DescribeResourcePoliciesResponse;
(function(DescribeResourcePoliciesResponse2) {
  DescribeResourcePoliciesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeResourcePoliciesResponse || (DescribeResourcePoliciesResponse = {}));
var DescribeSubscriptionFiltersRequest;
(function(DescribeSubscriptionFiltersRequest2) {
  DescribeSubscriptionFiltersRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeSubscriptionFiltersRequest || (DescribeSubscriptionFiltersRequest = {}));
var Distribution;
(function(Distribution2) {
  Distribution2["ByLogStream"] = "ByLogStream";
  Distribution2["Random"] = "Random";
})(Distribution || (Distribution = {}));
var SubscriptionFilter;
(function(SubscriptionFilter2) {
  SubscriptionFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SubscriptionFilter || (SubscriptionFilter = {}));
var DescribeSubscriptionFiltersResponse;
(function(DescribeSubscriptionFiltersResponse2) {
  DescribeSubscriptionFiltersResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeSubscriptionFiltersResponse || (DescribeSubscriptionFiltersResponse = {}));
var DisassociateKmsKeyRequest;
(function(DisassociateKmsKeyRequest2) {
  DisassociateKmsKeyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DisassociateKmsKeyRequest || (DisassociateKmsKeyRequest = {}));
var FilteredLogEvent;
(function(FilteredLogEvent2) {
  FilteredLogEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(FilteredLogEvent || (FilteredLogEvent = {}));
var FilterLogEventsRequest;
(function(FilterLogEventsRequest2) {
  FilterLogEventsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(FilterLogEventsRequest || (FilterLogEventsRequest = {}));
var SearchedLogStream;
(function(SearchedLogStream2) {
  SearchedLogStream2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SearchedLogStream || (SearchedLogStream = {}));
var FilterLogEventsResponse;
(function(FilterLogEventsResponse2) {
  FilterLogEventsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(FilterLogEventsResponse || (FilterLogEventsResponse = {}));
var GetLogEventsRequest;
(function(GetLogEventsRequest2) {
  GetLogEventsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetLogEventsRequest || (GetLogEventsRequest = {}));
var OutputLogEvent;
(function(OutputLogEvent2) {
  OutputLogEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(OutputLogEvent || (OutputLogEvent = {}));
var GetLogEventsResponse;
(function(GetLogEventsResponse2) {
  GetLogEventsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetLogEventsResponse || (GetLogEventsResponse = {}));
var GetLogGroupFieldsRequest;
(function(GetLogGroupFieldsRequest2) {
  GetLogGroupFieldsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetLogGroupFieldsRequest || (GetLogGroupFieldsRequest = {}));
var LogGroupField;
(function(LogGroupField2) {
  LogGroupField2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LogGroupField || (LogGroupField = {}));
var GetLogGroupFieldsResponse;
(function(GetLogGroupFieldsResponse2) {
  GetLogGroupFieldsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetLogGroupFieldsResponse || (GetLogGroupFieldsResponse = {}));
var GetLogRecordRequest;
(function(GetLogRecordRequest2) {
  GetLogRecordRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetLogRecordRequest || (GetLogRecordRequest = {}));
var GetLogRecordResponse;
(function(GetLogRecordResponse2) {
  GetLogRecordResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetLogRecordResponse || (GetLogRecordResponse = {}));
var GetQueryResultsRequest;
(function(GetQueryResultsRequest2) {
  GetQueryResultsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetQueryResultsRequest || (GetQueryResultsRequest = {}));
var ResultField;
(function(ResultField2) {
  ResultField2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ResultField || (ResultField = {}));
var QueryStatistics;
(function(QueryStatistics2) {
  QueryStatistics2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(QueryStatistics || (QueryStatistics = {}));
var GetQueryResultsResponse;
(function(GetQueryResultsResponse2) {
  GetQueryResultsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetQueryResultsResponse || (GetQueryResultsResponse = {}));
var InputLogEvent;
(function(InputLogEvent3) {
  InputLogEvent3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InputLogEvent || (InputLogEvent = {}));
var InvalidSequenceTokenException;
(function(InvalidSequenceTokenException2) {
  InvalidSequenceTokenException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidSequenceTokenException || (InvalidSequenceTokenException = {}));
var ListTagsLogGroupRequest;
(function(ListTagsLogGroupRequest2) {
  ListTagsLogGroupRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTagsLogGroupRequest || (ListTagsLogGroupRequest = {}));
var ListTagsLogGroupResponse;
(function(ListTagsLogGroupResponse2) {
  ListTagsLogGroupResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTagsLogGroupResponse || (ListTagsLogGroupResponse = {}));
var PutDestinationRequest;
(function(PutDestinationRequest2) {
  PutDestinationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutDestinationRequest || (PutDestinationRequest = {}));
var PutDestinationResponse;
(function(PutDestinationResponse2) {
  PutDestinationResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutDestinationResponse || (PutDestinationResponse = {}));
var PutDestinationPolicyRequest;
(function(PutDestinationPolicyRequest2) {
  PutDestinationPolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutDestinationPolicyRequest || (PutDestinationPolicyRequest = {}));
var PutLogEventsRequest;
(function(PutLogEventsRequest2) {
  PutLogEventsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutLogEventsRequest || (PutLogEventsRequest = {}));
var RejectedLogEventsInfo;
(function(RejectedLogEventsInfo2) {
  RejectedLogEventsInfo2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RejectedLogEventsInfo || (RejectedLogEventsInfo = {}));
var PutLogEventsResponse;
(function(PutLogEventsResponse2) {
  PutLogEventsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutLogEventsResponse || (PutLogEventsResponse = {}));
var UnrecognizedClientException;
(function(UnrecognizedClientException2) {
  UnrecognizedClientException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UnrecognizedClientException || (UnrecognizedClientException = {}));
var PutMetricFilterRequest;
(function(PutMetricFilterRequest2) {
  PutMetricFilterRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutMetricFilterRequest || (PutMetricFilterRequest = {}));
var PutQueryDefinitionRequest;
(function(PutQueryDefinitionRequest2) {
  PutQueryDefinitionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutQueryDefinitionRequest || (PutQueryDefinitionRequest = {}));
var PutQueryDefinitionResponse;
(function(PutQueryDefinitionResponse2) {
  PutQueryDefinitionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutQueryDefinitionResponse || (PutQueryDefinitionResponse = {}));
var PutResourcePolicyRequest;
(function(PutResourcePolicyRequest2) {
  PutResourcePolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutResourcePolicyRequest || (PutResourcePolicyRequest = {}));
var PutResourcePolicyResponse;
(function(PutResourcePolicyResponse2) {
  PutResourcePolicyResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutResourcePolicyResponse || (PutResourcePolicyResponse = {}));
var PutRetentionPolicyRequest;
(function(PutRetentionPolicyRequest2) {
  PutRetentionPolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutRetentionPolicyRequest || (PutRetentionPolicyRequest = {}));
var PutSubscriptionFilterRequest;
(function(PutSubscriptionFilterRequest2) {
  PutSubscriptionFilterRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutSubscriptionFilterRequest || (PutSubscriptionFilterRequest = {}));
var QueryCompileErrorLocation;
(function(QueryCompileErrorLocation2) {
  QueryCompileErrorLocation2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(QueryCompileErrorLocation || (QueryCompileErrorLocation = {}));
var QueryCompileError;
(function(QueryCompileError2) {
  QueryCompileError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(QueryCompileError || (QueryCompileError = {}));
var MalformedQueryException;
(function(MalformedQueryException2) {
  MalformedQueryException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MalformedQueryException || (MalformedQueryException = {}));
var StartQueryRequest;
(function(StartQueryRequest2) {
  StartQueryRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StartQueryRequest || (StartQueryRequest = {}));
var StartQueryResponse;
(function(StartQueryResponse2) {
  StartQueryResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StartQueryResponse || (StartQueryResponse = {}));
var StopQueryRequest;
(function(StopQueryRequest2) {
  StopQueryRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StopQueryRequest || (StopQueryRequest = {}));
var StopQueryResponse;
(function(StopQueryResponse2) {
  StopQueryResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StopQueryResponse || (StopQueryResponse = {}));
var TagLogGroupRequest;
(function(TagLogGroupRequest2) {
  TagLogGroupRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TagLogGroupRequest || (TagLogGroupRequest = {}));
var TestMetricFilterRequest;
(function(TestMetricFilterRequest2) {
  TestMetricFilterRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TestMetricFilterRequest || (TestMetricFilterRequest = {}));
var MetricFilterMatchRecord;
(function(MetricFilterMatchRecord2) {
  MetricFilterMatchRecord2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MetricFilterMatchRecord || (MetricFilterMatchRecord = {}));
var TestMetricFilterResponse;
(function(TestMetricFilterResponse2) {
  TestMetricFilterResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TestMetricFilterResponse || (TestMetricFilterResponse = {}));
var UntagLogGroupRequest;
(function(UntagLogGroupRequest2) {
  UntagLogGroupRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UntagLogGroupRequest || (UntagLogGroupRequest = {}));

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1CreateLogGroupCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.CreateLogGroup"
      };
      body = JSON.stringify(serializeAws_json1_1CreateLogGroupRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1CreateLogStreamCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.CreateLogStream"
      };
      body = JSON.stringify(serializeAws_json1_1CreateLogStreamRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DescribeLogGroupsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeLogGroups"
      };
      body = JSON.stringify(serializeAws_json1_1DescribeLogGroupsRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DescribeLogStreamsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeLogStreams"
      };
      body = JSON.stringify(serializeAws_json1_1DescribeLogStreamsRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1GetLogEventsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.GetLogEvents"
      };
      body = JSON.stringify(serializeAws_json1_1GetLogEventsRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1PutLogEventsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutLogEvents"
      };
      body = JSON.stringify(serializeAws_json1_1PutLogEventsRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1CreateLogGroupCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1CreateLogGroupCommandError(output, context)];
          }
          return [4, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output)
          };
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateLogGroupCommandError = function(output, context) {
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
            case "InvalidParameterException":
              return [3, 2];
            case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
              return [3, 2];
            case "LimitExceededException":
              return [3, 4];
            case "com.amazonaws.cloudwatchlogs#LimitExceededException":
              return [3, 4];
            case "OperationAbortedException":
              return [3, 6];
            case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
              return [3, 6];
            case "ResourceAlreadyExistsException":
              return [3, 8];
            case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
              return [3, 8];
            case "ServiceUnavailableException":
              return [3, 10];
            case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
              return [3, 10];
          }
          return [3, 12];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 13];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1CreateLogStreamCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1CreateLogStreamCommandError(output, context)];
          }
          return [4, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output)
          };
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateLogStreamCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function(_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterException":
              return [3, 2];
            case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
              return [3, 2];
            case "ResourceAlreadyExistsException":
              return [3, 4];
            case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
              return [3, 4];
            case "ResourceNotFoundException":
              return [3, 6];
            case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
              return [3, 6];
            case "ServiceUnavailableException":
              return [3, 8];
            case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
              return [3, 8];
          }
          return [3, 10];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 11];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 11];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 11];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1DescribeLogGroupsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DescribeLogGroupsCommandError(output, context)];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeLogGroupsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeLogGroupsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function(_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterException":
              return [3, 2];
            case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
              return [3, 2];
            case "ServiceUnavailableException":
              return [3, 4];
            case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
              return [3, 4];
          }
          return [3, 6];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_f.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 7];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_f.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1DescribeLogStreamsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DescribeLogStreamsCommandError(output, context)];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeLogStreamsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeLogStreamsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function(_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterException":
              return [3, 2];
            case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
              return [3, 2];
            case "ResourceNotFoundException":
              return [3, 4];
            case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
              return [3, 4];
            case "ServiceUnavailableException":
              return [3, 6];
            case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 9];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 9];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1GetLogEventsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1GetLogEventsCommandError(output, context)];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetLogEventsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetLogEventsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function(_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterException":
              return [3, 2];
            case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
              return [3, 2];
            case "ResourceNotFoundException":
              return [3, 4];
            case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
              return [3, 4];
            case "ServiceUnavailableException":
              return [3, 6];
            case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 9];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 9];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1PutLogEventsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1PutLogEventsCommandError(output, context)];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutLogEventsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutLogEventsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function(_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "DataAlreadyAcceptedException":
              return [3, 2];
            case "com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException":
              return [3, 2];
            case "InvalidParameterException":
              return [3, 4];
            case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
              return [3, 4];
            case "InvalidSequenceTokenException":
              return [3, 6];
            case "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException":
              return [3, 6];
            case "ResourceNotFoundException":
              return [3, 8];
            case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
              return [3, 8];
            case "ServiceUnavailableException":
              return [3, 10];
            case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
              return [3, 10];
            case "UnrecognizedClientException":
              return [3, 12];
            case "com.amazonaws.cloudwatchlogs#UnrecognizedClientException":
              return [3, 12];
          }
          return [3, 14];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_k.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 15];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_k.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 15];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InvalidSequenceTokenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_k.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 15];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_k.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 15];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([_k.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 15];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1UnrecognizedClientExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([_k.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1DataAlreadyAcceptedException(body, context);
      contents = __assign({ name: "DataAlreadyAcceptedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
      contents = __assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidSequenceTokenExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidSequenceTokenException(body, context);
      contents = __assign({ name: "InvalidSequenceTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1LimitExceededExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LimitExceededException(body, context);
      contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1OperationAbortedExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1OperationAbortedException(body, context);
      contents = __assign({ name: "OperationAbortedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
      contents = __assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
      contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ServiceUnavailableExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
      contents = __assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1UnrecognizedClientExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1UnrecognizedClientException(body, context);
      contents = __assign({ name: "UnrecognizedClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1CreateLogGroupRequest = function(input, context) {
  return __assign(__assign(__assign({}, input.kmsKeyId !== void 0 && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }), input.logGroupName !== void 0 && input.logGroupName !== null && { logGroupName: input.logGroupName }), input.tags !== void 0 && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) });
};
var serializeAws_json1_1CreateLogStreamRequest = function(input, context) {
  return __assign(__assign({}, input.logGroupName !== void 0 && input.logGroupName !== null && { logGroupName: input.logGroupName }), input.logStreamName !== void 0 && input.logStreamName !== null && { logStreamName: input.logStreamName });
};
var serializeAws_json1_1DescribeLogGroupsRequest = function(input, context) {
  return __assign(__assign(__assign({}, input.limit !== void 0 && input.limit !== null && { limit: input.limit }), input.logGroupNamePrefix !== void 0 && input.logGroupNamePrefix !== null && { logGroupNamePrefix: input.logGroupNamePrefix }), input.nextToken !== void 0 && input.nextToken !== null && { nextToken: input.nextToken });
};
var serializeAws_json1_1DescribeLogStreamsRequest = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign({}, input.descending !== void 0 && input.descending !== null && { descending: input.descending }), input.limit !== void 0 && input.limit !== null && { limit: input.limit }), input.logGroupName !== void 0 && input.logGroupName !== null && { logGroupName: input.logGroupName }), input.logStreamNamePrefix !== void 0 && input.logStreamNamePrefix !== null && { logStreamNamePrefix: input.logStreamNamePrefix }), input.nextToken !== void 0 && input.nextToken !== null && { nextToken: input.nextToken }), input.orderBy !== void 0 && input.orderBy !== null && { orderBy: input.orderBy });
};
var serializeAws_json1_1GetLogEventsRequest = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, input.endTime !== void 0 && input.endTime !== null && { endTime: input.endTime }), input.limit !== void 0 && input.limit !== null && { limit: input.limit }), input.logGroupName !== void 0 && input.logGroupName !== null && { logGroupName: input.logGroupName }), input.logStreamName !== void 0 && input.logStreamName !== null && { logStreamName: input.logStreamName }), input.nextToken !== void 0 && input.nextToken !== null && { nextToken: input.nextToken }), input.startFromHead !== void 0 && input.startFromHead !== null && { startFromHead: input.startFromHead }), input.startTime !== void 0 && input.startTime !== null && { startTime: input.startTime });
};
var serializeAws_json1_1InputLogEvent = function(input, context) {
  return __assign(__assign({}, input.message !== void 0 && input.message !== null && { message: input.message }), input.timestamp !== void 0 && input.timestamp !== null && { timestamp: input.timestamp });
};
var serializeAws_json1_1InputLogEvents = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeAws_json1_1InputLogEvent(entry, context);
  });
};
var serializeAws_json1_1PutLogEventsRequest = function(input, context) {
  return __assign(__assign(__assign(__assign({}, input.logEvents !== void 0 && input.logEvents !== null && { logEvents: serializeAws_json1_1InputLogEvents(input.logEvents, context) }), input.logGroupName !== void 0 && input.logGroupName !== null && { logGroupName: input.logGroupName }), input.logStreamName !== void 0 && input.logStreamName !== null && { logStreamName: input.logStreamName }), input.sequenceToken !== void 0 && input.sequenceToken !== null && { sequenceToken: input.sequenceToken });
};
var serializeAws_json1_1Tags = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};
var deserializeAws_json1_1DataAlreadyAcceptedException = function(output, context) {
  return {
    expectedSequenceToken: output.expectedSequenceToken !== void 0 && output.expectedSequenceToken !== null ? output.expectedSequenceToken : void 0,
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1DescribeLogGroupsResponse = function(output, context) {
  return {
    logGroups: output.logGroups !== void 0 && output.logGroups !== null ? deserializeAws_json1_1LogGroups(output.logGroups, context) : void 0,
    nextToken: output.nextToken !== void 0 && output.nextToken !== null ? output.nextToken : void 0
  };
};
var deserializeAws_json1_1DescribeLogStreamsResponse = function(output, context) {
  return {
    logStreams: output.logStreams !== void 0 && output.logStreams !== null ? deserializeAws_json1_1LogStreams(output.logStreams, context) : void 0,
    nextToken: output.nextToken !== void 0 && output.nextToken !== null ? output.nextToken : void 0
  };
};
var deserializeAws_json1_1GetLogEventsResponse = function(output, context) {
  return {
    events: output.events !== void 0 && output.events !== null ? deserializeAws_json1_1OutputLogEvents(output.events, context) : void 0,
    nextBackwardToken: output.nextBackwardToken !== void 0 && output.nextBackwardToken !== null ? output.nextBackwardToken : void 0,
    nextForwardToken: output.nextForwardToken !== void 0 && output.nextForwardToken !== null ? output.nextForwardToken : void 0
  };
};
var deserializeAws_json1_1InvalidParameterException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1InvalidSequenceTokenException = function(output, context) {
  return {
    expectedSequenceToken: output.expectedSequenceToken !== void 0 && output.expectedSequenceToken !== null ? output.expectedSequenceToken : void 0,
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1LimitExceededException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1LogGroup = function(output, context) {
  return {
    arn: output.arn !== void 0 && output.arn !== null ? output.arn : void 0,
    creationTime: output.creationTime !== void 0 && output.creationTime !== null ? output.creationTime : void 0,
    kmsKeyId: output.kmsKeyId !== void 0 && output.kmsKeyId !== null ? output.kmsKeyId : void 0,
    logGroupName: output.logGroupName !== void 0 && output.logGroupName !== null ? output.logGroupName : void 0,
    metricFilterCount: output.metricFilterCount !== void 0 && output.metricFilterCount !== null ? output.metricFilterCount : void 0,
    retentionInDays: output.retentionInDays !== void 0 && output.retentionInDays !== null ? output.retentionInDays : void 0,
    storedBytes: output.storedBytes !== void 0 && output.storedBytes !== null ? output.storedBytes : void 0
  };
};
var deserializeAws_json1_1LogGroups = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1LogGroup(entry, context);
  });
};
var deserializeAws_json1_1LogStream = function(output, context) {
  return {
    arn: output.arn !== void 0 && output.arn !== null ? output.arn : void 0,
    creationTime: output.creationTime !== void 0 && output.creationTime !== null ? output.creationTime : void 0,
    firstEventTimestamp: output.firstEventTimestamp !== void 0 && output.firstEventTimestamp !== null ? output.firstEventTimestamp : void 0,
    lastEventTimestamp: output.lastEventTimestamp !== void 0 && output.lastEventTimestamp !== null ? output.lastEventTimestamp : void 0,
    lastIngestionTime: output.lastIngestionTime !== void 0 && output.lastIngestionTime !== null ? output.lastIngestionTime : void 0,
    logStreamName: output.logStreamName !== void 0 && output.logStreamName !== null ? output.logStreamName : void 0,
    storedBytes: output.storedBytes !== void 0 && output.storedBytes !== null ? output.storedBytes : void 0,
    uploadSequenceToken: output.uploadSequenceToken !== void 0 && output.uploadSequenceToken !== null ? output.uploadSequenceToken : void 0
  };
};
var deserializeAws_json1_1LogStreams = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1LogStream(entry, context);
  });
};
var deserializeAws_json1_1OperationAbortedException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1OutputLogEvent = function(output, context) {
  return {
    ingestionTime: output.ingestionTime !== void 0 && output.ingestionTime !== null ? output.ingestionTime : void 0,
    message: output.message !== void 0 && output.message !== null ? output.message : void 0,
    timestamp: output.timestamp !== void 0 && output.timestamp !== null ? output.timestamp : void 0
  };
};
var deserializeAws_json1_1OutputLogEvents = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1OutputLogEvent(entry, context);
  });
};
var deserializeAws_json1_1PutLogEventsResponse = function(output, context) {
  return {
    nextSequenceToken: output.nextSequenceToken !== void 0 && output.nextSequenceToken !== null ? output.nextSequenceToken : void 0,
    rejectedLogEventsInfo: output.rejectedLogEventsInfo !== void 0 && output.rejectedLogEventsInfo !== null ? deserializeAws_json1_1RejectedLogEventsInfo(output.rejectedLogEventsInfo, context) : void 0
  };
};
var deserializeAws_json1_1RejectedLogEventsInfo = function(output, context) {
  return {
    expiredLogEventEndIndex: output.expiredLogEventEndIndex !== void 0 && output.expiredLogEventEndIndex !== null ? output.expiredLogEventEndIndex : void 0,
    tooNewLogEventStartIndex: output.tooNewLogEventStartIndex !== void 0 && output.tooNewLogEventStartIndex !== null ? output.tooNewLogEventStartIndex : void 0,
    tooOldLogEventEndIndex: output.tooOldLogEventEndIndex !== void 0 && output.tooOldLogEventEndIndex !== null ? output.tooOldLogEventEndIndex : void 0
  };
};
var deserializeAws_json1_1ResourceAlreadyExistsException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ResourceNotFoundException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ServiceUnavailableException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1UnrecognizedClientException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
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
var buildHttpRpcRequest = function(context, headers, path, resolvedHostname, body) {
  return __awaiter(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          contents = {
            protocol,
            hostname,
            port,
            method: "POST",
            path,
            headers
          };
          if (resolvedHostname !== void 0) {
            contents.hostname = resolvedHostname;
          }
          if (body !== void 0) {
            contents.body = body;
          }
          return [2, new HttpRequest(contents)];
      }
    });
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

// ../../node_modules/@aws-sdk/middleware-serde/dist/es/deserializerMiddleware.js
var deserializerMiddleware = function(options, deserializer) {
  return function(next, context) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var response, parsed;
        return __generator2(this, function(_a) {
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

// ../../node_modules/@aws-sdk/middleware-serde/dist/es/serializerMiddleware.js
var serializerMiddleware = function(options, serializer) {
  return function(next, context) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var request;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, serializer(args.input, options)];
            case 1:
              request = _a.sent();
              return [2, next(__assign2(__assign2({}, args), { request }))];
          }
        });
      });
    };
  };
};

// ../../node_modules/@aws-sdk/middleware-serde/dist/es/serdePlugin.js
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

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/commands/CreateLogGroupCommand.js
var CreateLogGroupCommand = function(_super) {
  __extends(CreateLogGroupCommand2, _super);
  function CreateLogGroupCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  CreateLogGroupCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CloudWatchLogsClient";
    var commandName = "CreateLogGroupCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLogGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function(output) {
        return output;
      }
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateLogGroupCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1CreateLogGroupCommand(input, context);
  };
  CreateLogGroupCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1CreateLogGroupCommand(output, context);
  };
  return CreateLogGroupCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/commands/CreateLogStreamCommand.js
var CreateLogStreamCommand = function(_super) {
  __extends(CreateLogStreamCommand2, _super);
  function CreateLogStreamCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  CreateLogStreamCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CloudWatchLogsClient";
    var commandName = "CreateLogStreamCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLogStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function(output) {
        return output;
      }
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateLogStreamCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1CreateLogStreamCommand(input, context);
  };
  CreateLogStreamCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1CreateLogStreamCommand(output, context);
  };
  return CreateLogStreamCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/commands/DescribeLogGroupsCommand.js
var DescribeLogGroupsCommand = function(_super) {
  __extends(DescribeLogGroupsCommand2, _super);
  function DescribeLogGroupsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DescribeLogGroupsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CloudWatchLogsClient";
    var commandName = "DescribeLogGroupsCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLogGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLogGroupsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeLogGroupsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DescribeLogGroupsCommand(input, context);
  };
  DescribeLogGroupsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DescribeLogGroupsCommand(output, context);
  };
  return DescribeLogGroupsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/commands/DescribeLogStreamsCommand.js
var DescribeLogStreamsCommand = function(_super) {
  __extends(DescribeLogStreamsCommand2, _super);
  function DescribeLogStreamsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DescribeLogStreamsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CloudWatchLogsClient";
    var commandName = "DescribeLogStreamsCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLogStreamsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLogStreamsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeLogStreamsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DescribeLogStreamsCommand(input, context);
  };
  DescribeLogStreamsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DescribeLogStreamsCommand(output, context);
  };
  return DescribeLogStreamsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/commands/GetLogEventsCommand.js
var GetLogEventsCommand = function(_super) {
  __extends(GetLogEventsCommand2, _super);
  function GetLogEventsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  GetLogEventsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CloudWatchLogsClient";
    var commandName = "GetLogEventsCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLogEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLogEventsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetLogEventsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1GetLogEventsCommand(input, context);
  };
  GetLogEventsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1GetLogEventsCommand(output, context);
  };
  return GetLogEventsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-cloudwatch-logs/dist/es/commands/PutLogEventsCommand.js
var PutLogEventsCommand = function(_super) {
  __extends(PutLogEventsCommand2, _super);
  function PutLogEventsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  PutLogEventsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CloudWatchLogsClient";
    var commandName = "PutLogEventsCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLogEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutLogEventsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutLogEventsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1PutLogEventsCommand(input, context);
  };
  PutLogEventsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1PutLogEventsCommand(output, context);
  };
  return PutLogEventsCommand2;
}(Command);

// src/StorageHelper/index.ts
var dataMemory = {};
var MemoryStorage = class {
  static setItem(key, value) {
    dataMemory[key] = value;
    return dataMemory[key];
  }
  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : void 0;
  }
  static removeItem(key) {
    return delete dataMemory[key];
  }
  static clear() {
    dataMemory = {};
    return dataMemory;
  }
};
var StorageHelper = class {
  constructor() {
    try {
      this.storageWindow = window.localStorage;
      this.storageWindow.setItem("aws.amplify.test-ls", 1);
      this.storageWindow.removeItem("aws.amplify.test-ls");
    } catch (exception) {
      this.storageWindow = MemoryStorage;
    }
  }
  getStorage() {
    return this.storageWindow;
  }
};

// src/OAuthHelper/GoogleOAuth.ts
var logger9 = new ConsoleLogger("CognitoCredentials");
var waitForInit = new Promise((res, rej) => {
  if (!browserOrNode().isBrowser) {
    logger9.debug("not in the browser, directly resolved");
    return res();
  }
  const ga = window["gapi"] && window["gapi"].auth2 ? window["gapi"].auth2 : null;
  if (ga) {
    logger9.debug("google api already loaded");
    return res();
  } else {
    setTimeout(() => {
      return res();
    }, 2e3);
  }
});
var GoogleOAuth = class {
  constructor() {
    this.initialized = false;
    this.refreshGoogleToken = this.refreshGoogleToken.bind(this);
    this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
  }
  async refreshGoogleToken() {
    if (!this.initialized) {
      logger9.debug("need to wait for the Google SDK loaded");
      await waitForInit;
      this.initialized = true;
      logger9.debug("finish waiting");
    }
    return this._refreshGoogleTokenImpl();
  }
  _refreshGoogleTokenImpl() {
    let ga = null;
    if (browserOrNode().isBrowser)
      ga = window["gapi"] && window["gapi"].auth2 ? window["gapi"].auth2 : null;
    if (!ga) {
      logger9.debug("no gapi auth2 available");
      return Promise.reject("no gapi auth2 available");
    }
    return new Promise((res, rej) => {
      ga.getAuthInstance().then((googleAuth) => {
        if (!googleAuth) {
          logger9.debug("google Auth undefined");
          rej(new NonRetryableError("google Auth undefined"));
        }
        const googleUser = googleAuth.currentUser.get();
        if (googleUser.isSignedIn()) {
          logger9.debug("refreshing the google access token");
          googleUser.reloadAuthResponse().then((authResponse) => {
            const { id_token, expires_at } = authResponse;
            res({ token: id_token, expires_at });
          }).catch((err) => {
            if (err && err.error === "network_error") {
              rej("Network error reloading google auth response");
            } else {
              rej(new NonRetryableError("Failed to reload google auth response"));
            }
          });
        } else {
          rej(new NonRetryableError("User is not signed in with Google"));
        }
      }).catch((err) => {
        logger9.debug("Failed to refresh google token", err);
        rej(new NonRetryableError("Failed to refresh google token"));
      });
    });
  }
};

// src/OAuthHelper/FacebookOAuth.ts
var logger10 = new ConsoleLogger("CognitoCredentials");
var waitForInit2 = new Promise((res, rej) => {
  if (!browserOrNode().isBrowser) {
    logger10.debug("not in the browser, directly resolved");
    return res();
  }
  const fb = window["FB"];
  if (fb) {
    logger10.debug("FB SDK already loaded");
    return res();
  } else {
    setTimeout(() => {
      return res();
    }, 2e3);
  }
});
var FacebookOAuth = class {
  constructor() {
    this.initialized = false;
    this.refreshFacebookToken = this.refreshFacebookToken.bind(this);
    this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
  }
  async refreshFacebookToken() {
    if (!this.initialized) {
      logger10.debug("need to wait for the Facebook SDK loaded");
      await waitForInit2;
      this.initialized = true;
      logger10.debug("finish waiting");
    }
    return this._refreshFacebookTokenImpl();
  }
  _refreshFacebookTokenImpl() {
    let fb = null;
    if (browserOrNode().isBrowser)
      fb = window["FB"];
    if (!fb) {
      const errorMessage = "no fb sdk available";
      logger10.debug(errorMessage);
      return Promise.reject(new NonRetryableError(errorMessage));
    }
    return new Promise((res, rej) => {
      fb.getLoginStatus((fbResponse) => {
        if (!fbResponse || !fbResponse.authResponse) {
          const errorMessage = "no response from facebook when refreshing the jwt token";
          logger10.debug(errorMessage);
          rej(new NonRetryableError(errorMessage));
        } else {
          const response = fbResponse.authResponse;
          const { accessToken, expiresIn } = response;
          const date = new Date();
          const expires_at = expiresIn * 1e3 + date.getTime();
          if (!accessToken) {
            const errorMessage = "the jwtToken is undefined";
            logger10.debug(errorMessage);
            rej(new NonRetryableError(errorMessage));
          }
          res({
            token: accessToken,
            expires_at
          });
        }
      }, { scope: "public_profile,email" });
    });
  }
};

// src/OAuthHelper/index.ts
var GoogleOAuth2 = new GoogleOAuth();
var FacebookOAuth2 = new FacebookOAuth();

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/node_modules/tslib/modules/index.js
var import_tslib46 = __toModule(require_tslib3());
var {
  __extends: __extends3,
  __assign: __assign3,
  __rest: __rest3,
  __decorate: __decorate3,
  __param: __param3,
  __metadata: __metadata3,
  __awaiter: __awaiter3,
  __generator: __generator3,
  __exportStar: __exportStar3,
  __createBinding: __createBinding3,
  __values: __values3,
  __read: __read3,
  __spread: __spread3,
  __spreadArrays: __spreadArrays3,
  __spreadArray: __spreadArray2,
  __await: __await3,
  __asyncGenerator: __asyncGenerator3,
  __asyncDelegator: __asyncDelegator3,
  __asyncValues: __asyncValues3,
  __makeTemplateObject: __makeTemplateObject3,
  __importStar: __importStar3,
  __importDefault: __importDefault3,
  __classPrivateFieldGet: __classPrivateFieldGet3,
  __classPrivateFieldSet: __classPrivateFieldSet3
} = import_tslib46.default;

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/dist/es/models/models_0.js
var AmbiguousRoleResolutionType;
(function(AmbiguousRoleResolutionType3) {
  AmbiguousRoleResolutionType3["AUTHENTICATED_ROLE"] = "AuthenticatedRole";
  AmbiguousRoleResolutionType3["DENY"] = "Deny";
})(AmbiguousRoleResolutionType || (AmbiguousRoleResolutionType = {}));
var CognitoIdentityProvider;
(function(CognitoIdentityProvider3) {
  CognitoIdentityProvider3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(CognitoIdentityProvider || (CognitoIdentityProvider = {}));
var CreateIdentityPoolInput;
(function(CreateIdentityPoolInput3) {
  CreateIdentityPoolInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(CreateIdentityPoolInput || (CreateIdentityPoolInput = {}));
var IdentityPool;
(function(IdentityPool3) {
  IdentityPool3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(IdentityPool || (IdentityPool = {}));
var InternalErrorException;
(function(InternalErrorException3) {
  InternalErrorException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InternalErrorException || (InternalErrorException = {}));
var InvalidParameterException2;
(function(InvalidParameterException4) {
  InvalidParameterException4.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidParameterException2 || (InvalidParameterException2 = {}));
var LimitExceededException2;
(function(LimitExceededException4) {
  LimitExceededException4.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LimitExceededException2 || (LimitExceededException2 = {}));
var NotAuthorizedException;
(function(NotAuthorizedException3) {
  NotAuthorizedException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(NotAuthorizedException || (NotAuthorizedException = {}));
var ResourceConflictException;
(function(ResourceConflictException3) {
  ResourceConflictException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ResourceConflictException || (ResourceConflictException = {}));
var TooManyRequestsException;
(function(TooManyRequestsException3) {
  TooManyRequestsException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(TooManyRequestsException || (TooManyRequestsException = {}));
var DeleteIdentitiesInput;
(function(DeleteIdentitiesInput3) {
  DeleteIdentitiesInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeleteIdentitiesInput || (DeleteIdentitiesInput = {}));
var ErrorCode;
(function(ErrorCode3) {
  ErrorCode3["ACCESS_DENIED"] = "AccessDenied";
  ErrorCode3["INTERNAL_SERVER_ERROR"] = "InternalServerError";
})(ErrorCode || (ErrorCode = {}));
var UnprocessedIdentityId;
(function(UnprocessedIdentityId3) {
  UnprocessedIdentityId3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UnprocessedIdentityId || (UnprocessedIdentityId = {}));
var DeleteIdentitiesResponse;
(function(DeleteIdentitiesResponse3) {
  DeleteIdentitiesResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeleteIdentitiesResponse || (DeleteIdentitiesResponse = {}));
var DeleteIdentityPoolInput;
(function(DeleteIdentityPoolInput3) {
  DeleteIdentityPoolInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeleteIdentityPoolInput || (DeleteIdentityPoolInput = {}));
var ResourceNotFoundException2;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ResourceNotFoundException2 || (ResourceNotFoundException2 = {}));
var DescribeIdentityInput;
(function(DescribeIdentityInput3) {
  DescribeIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeIdentityInput || (DescribeIdentityInput = {}));
var IdentityDescription;
(function(IdentityDescription3) {
  IdentityDescription3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(IdentityDescription || (IdentityDescription = {}));
var DescribeIdentityPoolInput;
(function(DescribeIdentityPoolInput3) {
  DescribeIdentityPoolInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeIdentityPoolInput || (DescribeIdentityPoolInput = {}));
var ExternalServiceException;
(function(ExternalServiceException3) {
  ExternalServiceException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ExternalServiceException || (ExternalServiceException = {}));
var GetCredentialsForIdentityInput;
(function(GetCredentialsForIdentityInput3) {
  GetCredentialsForIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetCredentialsForIdentityInput || (GetCredentialsForIdentityInput = {}));
var Credentials;
(function(Credentials4) {
  Credentials4.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(Credentials || (Credentials = {}));
var GetCredentialsForIdentityResponse;
(function(GetCredentialsForIdentityResponse3) {
  GetCredentialsForIdentityResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetCredentialsForIdentityResponse || (GetCredentialsForIdentityResponse = {}));
var InvalidIdentityPoolConfigurationException;
(function(InvalidIdentityPoolConfigurationException3) {
  InvalidIdentityPoolConfigurationException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidIdentityPoolConfigurationException || (InvalidIdentityPoolConfigurationException = {}));
var GetIdInput;
(function(GetIdInput3) {
  GetIdInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetIdInput || (GetIdInput = {}));
var GetIdResponse;
(function(GetIdResponse3) {
  GetIdResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetIdResponse || (GetIdResponse = {}));
var GetIdentityPoolRolesInput;
(function(GetIdentityPoolRolesInput3) {
  GetIdentityPoolRolesInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetIdentityPoolRolesInput || (GetIdentityPoolRolesInput = {}));
var MappingRuleMatchType;
(function(MappingRuleMatchType3) {
  MappingRuleMatchType3["CONTAINS"] = "Contains";
  MappingRuleMatchType3["EQUALS"] = "Equals";
  MappingRuleMatchType3["NOT_EQUAL"] = "NotEqual";
  MappingRuleMatchType3["STARTS_WITH"] = "StartsWith";
})(MappingRuleMatchType || (MappingRuleMatchType = {}));
var MappingRule;
(function(MappingRule3) {
  MappingRule3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MappingRule || (MappingRule = {}));
var RulesConfigurationType;
(function(RulesConfigurationType3) {
  RulesConfigurationType3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(RulesConfigurationType || (RulesConfigurationType = {}));
var RoleMappingType;
(function(RoleMappingType3) {
  RoleMappingType3["RULES"] = "Rules";
  RoleMappingType3["TOKEN"] = "Token";
})(RoleMappingType || (RoleMappingType = {}));
var RoleMapping;
(function(RoleMapping3) {
  RoleMapping3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(RoleMapping || (RoleMapping = {}));
var GetIdentityPoolRolesResponse;
(function(GetIdentityPoolRolesResponse3) {
  GetIdentityPoolRolesResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetIdentityPoolRolesResponse || (GetIdentityPoolRolesResponse = {}));
var GetOpenIdTokenInput;
(function(GetOpenIdTokenInput3) {
  GetOpenIdTokenInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetOpenIdTokenInput || (GetOpenIdTokenInput = {}));
var GetOpenIdTokenResponse;
(function(GetOpenIdTokenResponse3) {
  GetOpenIdTokenResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetOpenIdTokenResponse || (GetOpenIdTokenResponse = {}));
var DeveloperUserAlreadyRegisteredException;
(function(DeveloperUserAlreadyRegisteredException3) {
  DeveloperUserAlreadyRegisteredException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeveloperUserAlreadyRegisteredException || (DeveloperUserAlreadyRegisteredException = {}));
var GetOpenIdTokenForDeveloperIdentityInput;
(function(GetOpenIdTokenForDeveloperIdentityInput3) {
  GetOpenIdTokenForDeveloperIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetOpenIdTokenForDeveloperIdentityInput || (GetOpenIdTokenForDeveloperIdentityInput = {}));
var GetOpenIdTokenForDeveloperIdentityResponse;
(function(GetOpenIdTokenForDeveloperIdentityResponse3) {
  GetOpenIdTokenForDeveloperIdentityResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetOpenIdTokenForDeveloperIdentityResponse || (GetOpenIdTokenForDeveloperIdentityResponse = {}));
var ListIdentitiesInput;
(function(ListIdentitiesInput3) {
  ListIdentitiesInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListIdentitiesInput || (ListIdentitiesInput = {}));
var ListIdentitiesResponse;
(function(ListIdentitiesResponse3) {
  ListIdentitiesResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListIdentitiesResponse || (ListIdentitiesResponse = {}));
var ListIdentityPoolsInput;
(function(ListIdentityPoolsInput3) {
  ListIdentityPoolsInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListIdentityPoolsInput || (ListIdentityPoolsInput = {}));
var IdentityPoolShortDescription;
(function(IdentityPoolShortDescription3) {
  IdentityPoolShortDescription3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(IdentityPoolShortDescription || (IdentityPoolShortDescription = {}));
var ListIdentityPoolsResponse;
(function(ListIdentityPoolsResponse3) {
  ListIdentityPoolsResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListIdentityPoolsResponse || (ListIdentityPoolsResponse = {}));
var ListTagsForResourceInput;
(function(ListTagsForResourceInput3) {
  ListTagsForResourceInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
var ListTagsForResourceResponse;
(function(ListTagsForResourceResponse3) {
  ListTagsForResourceResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
var LookupDeveloperIdentityInput;
(function(LookupDeveloperIdentityInput3) {
  LookupDeveloperIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LookupDeveloperIdentityInput || (LookupDeveloperIdentityInput = {}));
var LookupDeveloperIdentityResponse;
(function(LookupDeveloperIdentityResponse3) {
  LookupDeveloperIdentityResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LookupDeveloperIdentityResponse || (LookupDeveloperIdentityResponse = {}));
var MergeDeveloperIdentitiesInput;
(function(MergeDeveloperIdentitiesInput3) {
  MergeDeveloperIdentitiesInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MergeDeveloperIdentitiesInput || (MergeDeveloperIdentitiesInput = {}));
var MergeDeveloperIdentitiesResponse;
(function(MergeDeveloperIdentitiesResponse3) {
  MergeDeveloperIdentitiesResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MergeDeveloperIdentitiesResponse || (MergeDeveloperIdentitiesResponse = {}));
var ConcurrentModificationException;
(function(ConcurrentModificationException3) {
  ConcurrentModificationException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
var SetIdentityPoolRolesInput;
(function(SetIdentityPoolRolesInput3) {
  SetIdentityPoolRolesInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SetIdentityPoolRolesInput || (SetIdentityPoolRolesInput = {}));
var TagResourceInput;
(function(TagResourceInput3) {
  TagResourceInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(TagResourceInput || (TagResourceInput = {}));
var TagResourceResponse;
(function(TagResourceResponse3) {
  TagResourceResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
var UnlinkDeveloperIdentityInput;
(function(UnlinkDeveloperIdentityInput3) {
  UnlinkDeveloperIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UnlinkDeveloperIdentityInput || (UnlinkDeveloperIdentityInput = {}));
var UnlinkIdentityInput;
(function(UnlinkIdentityInput3) {
  UnlinkIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UnlinkIdentityInput || (UnlinkIdentityInput = {}));
var UntagResourceInput;
(function(UntagResourceInput3) {
  UntagResourceInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UntagResourceInput || (UntagResourceInput = {}));
var UntagResourceResponse;
(function(UntagResourceResponse3) {
  UntagResourceResponse3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1GetCredentialsForIdentityCommand = function(input, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator3(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
      };
      body = JSON.stringify(serializeAws_json1_1GetCredentialsForIdentityInput(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1GetIdCommand = function(input, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator3(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId"
      };
      body = JSON.stringify(serializeAws_json1_1GetIdInput(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1GetCredentialsForIdentityCommand = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator3(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1GetCredentialsForIdentityCommandError(output, context)];
          }
          return [4, parseBody2(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetCredentialsForIdentityResponse(data, context);
          response = __assign3({ $metadata: deserializeMetadata2(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetCredentialsForIdentityCommandError = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator3(this, function(_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign3({}, output)];
          _l = {};
          return [4, parseBody2(output.body, context)];
        case 1:
          parsedOutput = __assign3.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode2(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ExternalServiceException":
              return [3, 2];
            case "com.amazonaws.cognitoidentity#ExternalServiceException":
              return [3, 2];
            case "InternalErrorException":
              return [3, 4];
            case "com.amazonaws.cognitoidentity#InternalErrorException":
              return [3, 4];
            case "InvalidIdentityPoolConfigurationException":
              return [3, 6];
            case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
              return [3, 6];
            case "InvalidParameterException":
              return [3, 8];
            case "com.amazonaws.cognitoidentity#InvalidParameterException":
              return [3, 8];
            case "NotAuthorizedException":
              return [3, 10];
            case "com.amazonaws.cognitoidentity#NotAuthorizedException":
              return [3, 10];
            case "ResourceConflictException":
              return [3, 12];
            case "com.amazonaws.cognitoidentity#ResourceConflictException":
              return [3, 12];
            case "ResourceNotFoundException":
              return [3, 14];
            case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
              return [3, 14];
            case "TooManyRequestsException":
              return [3, 16];
            case "com.amazonaws.cognitoidentity#TooManyRequestsException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse2(parsedOutput, context)];
        case 9:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse2(parsedOutput, context)];
        case 15:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _k.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign3(__assign3({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata2(output) });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1GetIdCommand = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator3(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1GetIdCommandError(output, context)];
          }
          return [4, parseBody2(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetIdResponse(data, context);
          response = __assign3({ $metadata: deserializeMetadata2(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetIdCommandError = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator3(this, function(_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign3({}, output)];
          _l = {};
          return [4, parseBody2(output.body, context)];
        case 1:
          parsedOutput = __assign3.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode2(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ExternalServiceException":
              return [3, 2];
            case "com.amazonaws.cognitoidentity#ExternalServiceException":
              return [3, 2];
            case "InternalErrorException":
              return [3, 4];
            case "com.amazonaws.cognitoidentity#InternalErrorException":
              return [3, 4];
            case "InvalidParameterException":
              return [3, 6];
            case "com.amazonaws.cognitoidentity#InvalidParameterException":
              return [3, 6];
            case "LimitExceededException":
              return [3, 8];
            case "com.amazonaws.cognitoidentity#LimitExceededException":
              return [3, 8];
            case "NotAuthorizedException":
              return [3, 10];
            case "com.amazonaws.cognitoidentity#NotAuthorizedException":
              return [3, 10];
            case "ResourceConflictException":
              return [3, 12];
            case "com.amazonaws.cognitoidentity#ResourceConflictException":
              return [3, 12];
            case "ResourceNotFoundException":
              return [3, 14];
            case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
              return [3, 14];
            case "TooManyRequestsException":
              return [3, 16];
            case "com.amazonaws.cognitoidentity#TooManyRequestsException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1LimitExceededExceptionResponse2(parsedOutput, context)];
        case 9:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse2(parsedOutput, context)];
        case 15:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _k.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign3(__assign3({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata2(output) });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1ExternalServiceExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ExternalServiceException(body, context);
      contents = __assign3({ name: "ExternalServiceException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InternalErrorExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalErrorException(body, context);
      contents = __assign3({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidIdentityPoolConfigurationException(body, context);
      contents = __assign3({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterException2(body, context);
      contents = __assign3({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1LimitExceededExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LimitExceededException2(body, context);
      contents = __assign3({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1NotAuthorizedExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
      contents = __assign3({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceConflictExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceConflictException(body, context);
      contents = __assign3({ name: "ResourceConflictException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException2(body, context);
      contents = __assign3({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1TooManyRequestsExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
      contents = __assign3({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1GetCredentialsForIdentityInput = function(input, context) {
  return __assign3(__assign3(__assign3({}, input.CustomRoleArn !== void 0 && input.CustomRoleArn !== null && { CustomRoleArn: input.CustomRoleArn }), input.IdentityId !== void 0 && input.IdentityId !== null && { IdentityId: input.IdentityId }), input.Logins !== void 0 && input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) });
};
var serializeAws_json1_1GetIdInput = function(input, context) {
  return __assign3(__assign3(__assign3({}, input.AccountId !== void 0 && input.AccountId !== null && { AccountId: input.AccountId }), input.IdentityPoolId !== void 0 && input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }), input.Logins !== void 0 && input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) });
};
var serializeAws_json1_1LoginsMap = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read3(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign3(__assign3({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};
var deserializeAws_json1_1Credentials = function(output, context) {
  return {
    AccessKeyId: output.AccessKeyId !== void 0 && output.AccessKeyId !== null ? output.AccessKeyId : void 0,
    Expiration: output.Expiration !== void 0 && output.Expiration !== null ? new Date(Math.round(output.Expiration * 1e3)) : void 0,
    SecretKey: output.SecretKey !== void 0 && output.SecretKey !== null ? output.SecretKey : void 0,
    SessionToken: output.SessionToken !== void 0 && output.SessionToken !== null ? output.SessionToken : void 0
  };
};
var deserializeAws_json1_1ExternalServiceException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1GetCredentialsForIdentityResponse = function(output, context) {
  return {
    Credentials: output.Credentials !== void 0 && output.Credentials !== null ? deserializeAws_json1_1Credentials(output.Credentials, context) : void 0,
    IdentityId: output.IdentityId !== void 0 && output.IdentityId !== null ? output.IdentityId : void 0
  };
};
var deserializeAws_json1_1GetIdResponse = function(output, context) {
  return {
    IdentityId: output.IdentityId !== void 0 && output.IdentityId !== null ? output.IdentityId : void 0
  };
};
var deserializeAws_json1_1InternalErrorException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1InvalidIdentityPoolConfigurationException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1InvalidParameterException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1LimitExceededException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1NotAuthorizedException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ResourceConflictException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ResourceNotFoundException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1TooManyRequestsException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeMetadata2 = function(output) {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  };
};
var collectBody2 = function(streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString2 = function(streamBody, context) {
  return collectBody2(streamBody, context).then(function(body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest2 = function(context, headers, path, resolvedHostname, body) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, contents;
    return __generator3(this, function(_c) {
      switch (_c.label) {
        case 0:
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          contents = {
            protocol,
            hostname,
            port,
            method: "POST",
            path,
            headers
          };
          if (resolvedHostname !== void 0) {
            contents.hostname = resolvedHostname;
          }
          if (body !== void 0) {
            contents.body = body;
          }
          return [2, new HttpRequest(contents)];
      }
    });
  });
};
var parseBody2 = function(streamBody, context) {
  return collectBodyString2(streamBody, context).then(function(encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
var loadRestJsonErrorCode2 = function(output, data) {
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

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/dist/es/commands/GetCredentialsForIdentityCommand.js
var GetCredentialsForIdentityCommand = function(_super) {
  __extends3(GetCredentialsForIdentityCommand3, _super);
  function GetCredentialsForIdentityCommand3(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  GetCredentialsForIdentityCommand3.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CognitoIdentityClient";
    var commandName = "GetCredentialsForIdentityCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCredentialsForIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCredentialsForIdentityResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCredentialsForIdentityCommand3.prototype.serialize = function(input, context) {
    return serializeAws_json1_1GetCredentialsForIdentityCommand(input, context);
  };
  GetCredentialsForIdentityCommand3.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1GetCredentialsForIdentityCommand(output, context);
  };
  return GetCredentialsForIdentityCommand3;
}(Command);

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/client-cognito-identity/dist/es/commands/GetIdCommand.js
var GetIdCommand = function(_super) {
  __extends3(GetIdCommand3, _super);
  function GetIdCommand3(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  GetIdCommand3.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CognitoIdentityClient";
    var commandName = "GetIdCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetIdCommand3.prototype.serialize = function(input, context) {
    return serializeAws_json1_1GetIdCommand(input, context);
  };
  GetIdCommand3.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1GetIdCommand(output, context);
  };
  return GetIdCommand3;
}(Command);

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/node_modules/@aws-sdk/property-provider/dist/es/ProviderError.js
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
  return ProviderError2;
}(Error);

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/dist/es/resolveLogins.js
function resolveLogins(logins) {
  return Promise.all(Object.keys(logins).reduce(function(arr, name3) {
    var tokenOrProvider = logins[name3];
    if (typeof tokenOrProvider === "string") {
      arr.push([name3, tokenOrProvider]);
    } else {
      arr.push(tokenOrProvider().then(function(token) {
        return [name3, token];
      }));
    }
    return arr;
  }, [])).then(function(resolvedPairs) {
    return resolvedPairs.reduce(function(logins2, _a) {
      var _b = __read2(_a, 2), key = _b[0], value = _b[1];
      logins2[key] = value;
      return logins2;
    }, {});
  });
}

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/dist/es/fromCognitoIdentity.js
function fromCognitoIdentity(parameters) {
  var _this = this;
  return function() {
    return __awaiter2(_this, void 0, void 0, function() {
      var _a, _b, _c, AccessKeyId, Expiration, _d, SecretKey, SessionToken, _e, _f, _g, _h;
      var _j;
      return __generator2(this, function(_k) {
        switch (_k.label) {
          case 0:
            _f = (_e = parameters.client).send;
            _g = GetCredentialsForIdentityCommand.bind;
            _j = {
              CustomRoleArn: parameters.customRoleArn,
              IdentityId: parameters.identityId
            };
            if (!parameters.logins)
              return [3, 2];
            return [4, resolveLogins(parameters.logins)];
          case 1:
            _h = _k.sent();
            return [3, 3];
          case 2:
            _h = void 0;
            _k.label = 3;
          case 3:
            return [4, _f.apply(_e, [new (_g.apply(GetCredentialsForIdentityCommand, [void 0, (_j.Logins = _h, _j)]))()])];
          case 4:
            _a = _k.sent().Credentials, _b = _a === void 0 ? throwOnMissingCredentials() : _a, _c = _b.AccessKeyId, AccessKeyId = _c === void 0 ? throwOnMissingAccessKeyId() : _c, Expiration = _b.Expiration, _d = _b.SecretKey, SecretKey = _d === void 0 ? throwOnMissingSecretKey() : _d, SessionToken = _b.SessionToken;
            return [2, {
              identityId: parameters.identityId,
              accessKeyId: AccessKeyId,
              secretAccessKey: SecretKey,
              sessionToken: SessionToken,
              expiration: Expiration
            }];
        }
      });
    });
  };
}
function throwOnMissingAccessKeyId() {
  throw new ProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
  throw new ProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
  throw new ProviderError("Response from Amazon Cognito contained no secret key");
}

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/dist/es/IndexedDbStorage.js
var STORE_NAME = "IdentityIds";
var IndexedDbStorage = function() {
  function IndexedDbStorage2(dbName) {
    if (dbName === void 0) {
      dbName = "aws:cognito-identity-ids";
    }
    this.dbName = dbName;
  }
  IndexedDbStorage2.prototype.getItem = function(key) {
    return this.withObjectStore("readonly", function(store) {
      var req = store.get(key);
      return new Promise(function(resolve) {
        req.onerror = function() {
          return resolve(null);
        };
        req.onsuccess = function() {
          return resolve(req.result ? req.result.value : null);
        };
      });
    }).catch(function() {
      return null;
    });
  };
  IndexedDbStorage2.prototype.removeItem = function(key) {
    return this.withObjectStore("readwrite", function(store) {
      var req = store.delete(key);
      return new Promise(function(resolve, reject) {
        req.onerror = function() {
          return reject(req.error);
        };
        req.onsuccess = function() {
          return resolve();
        };
      });
    });
  };
  IndexedDbStorage2.prototype.setItem = function(id, value) {
    return this.withObjectStore("readwrite", function(store) {
      var req = store.put({ id, value });
      return new Promise(function(resolve, reject) {
        req.onerror = function() {
          return reject(req.error);
        };
        req.onsuccess = function() {
          return resolve();
        };
      });
    });
  };
  IndexedDbStorage2.prototype.getDb = function() {
    var openDbRequest = self.indexedDB.open(this.dbName, 1);
    return new Promise(function(resolve, reject) {
      openDbRequest.onsuccess = function() {
        resolve(openDbRequest.result);
      };
      openDbRequest.onerror = function() {
        reject(openDbRequest.error);
      };
      openDbRequest.onblocked = function() {
        reject(new Error("Unable to access DB"));
      };
      openDbRequest.onupgradeneeded = function() {
        var db = openDbRequest.result;
        db.onerror = function() {
          reject(new Error("Failed to create object store"));
        };
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      };
    });
  };
  IndexedDbStorage2.prototype.withObjectStore = function(mode, action) {
    return this.getDb().then(function(db) {
      var tx = db.transaction(STORE_NAME, mode);
      tx.oncomplete = function() {
        return db.close();
      };
      return new Promise(function(resolve, reject) {
        tx.onerror = function() {
          return reject(tx.error);
        };
        resolve(action(tx.objectStore(STORE_NAME)));
      }).catch(function(err) {
        db.close();
        throw err;
      });
    });
  };
  return IndexedDbStorage2;
}();

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/dist/es/InMemoryStorage.js
var InMemoryStorage = function() {
  function InMemoryStorage2(store) {
    if (store === void 0) {
      store = {};
    }
    this.store = store;
  }
  InMemoryStorage2.prototype.getItem = function(key) {
    if (key in this.store) {
      return this.store[key];
    }
    return null;
  };
  InMemoryStorage2.prototype.removeItem = function(key) {
    delete this.store[key];
  };
  InMemoryStorage2.prototype.setItem = function(key, value) {
    this.store[key] = value;
  };
  return InMemoryStorage2;
}();

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/dist/es/localStorage.js
var inMemoryStorage = new InMemoryStorage();
function localStorage() {
  if (typeof self === "object" && self.indexedDB) {
    return new IndexedDbStorage();
  }
  if (typeof window === "object" && window.localStorage) {
    return window.localStorage;
  }
  return inMemoryStorage;
}

// ../../node_modules/@aws-sdk/credential-provider-cognito-identity/dist/es/fromCognitoIdentityPool.js
function fromCognitoIdentityPool(_a) {
  var _this = this;
  var accountId = _a.accountId, _b = _a.cache, cache = _b === void 0 ? localStorage() : _b, client = _a.client, customRoleArn = _a.customRoleArn, identityPoolId = _a.identityPoolId, logins = _a.logins, _c = _a.userIdentifier, userIdentifier = _c === void 0 ? !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : void 0 : _c;
  var cacheKey = userIdentifier ? "aws:cognito-identity-credentials:" + identityPoolId + ":" + userIdentifier : void 0;
  var provider = function() {
    return __awaiter2(_this, void 0, void 0, function() {
      var identityId, _a2, _b2, IdentityId, _c2, _d, _e, _f;
      var _g;
      return __generator2(this, function(_h) {
        switch (_h.label) {
          case 0:
            _a2 = cacheKey;
            if (!_a2)
              return [3, 2];
            return [4, cache.getItem(cacheKey)];
          case 1:
            _a2 = _h.sent();
            _h.label = 2;
          case 2:
            identityId = _a2;
            if (!!identityId)
              return [3, 7];
            _d = (_c2 = client).send;
            _e = GetIdCommand.bind;
            _g = {
              AccountId: accountId,
              IdentityPoolId: identityPoolId
            };
            if (!logins)
              return [3, 4];
            return [4, resolveLogins(logins)];
          case 3:
            _f = _h.sent();
            return [3, 5];
          case 4:
            _f = void 0;
            _h.label = 5;
          case 5:
            return [4, _d.apply(_c2, [new (_e.apply(GetIdCommand, [void 0, (_g.Logins = _f, _g)]))()])];
          case 6:
            _b2 = _h.sent().IdentityId, IdentityId = _b2 === void 0 ? throwOnMissingId() : _b2;
            identityId = IdentityId;
            if (cacheKey) {
              Promise.resolve(cache.setItem(cacheKey, identityId)).catch(function() {
              });
            }
            _h.label = 7;
          case 7:
            provider = fromCognitoIdentity({
              client,
              customRoleArn,
              logins,
              identityId
            });
            return [2, provider()];
        }
      });
    });
  };
  return function() {
    return provider().catch(function(err) {
      return __awaiter2(_this, void 0, void 0, function() {
        return __generator2(this, function(_a2) {
          if (cacheKey) {
            Promise.resolve(cache.removeItem(cacheKey)).catch(function() {
            });
          }
          throw err;
        });
      });
    });
  };
}
function throwOnMissingId() {
  throw new ProviderError("Response from Amazon Cognito contained no identity ID");
}

// node_modules/@aws-sdk/client-cognito-identity/node_modules/tslib/modules/index.js
var import_tslib57 = __toModule(require_tslib4());
var {
  __extends: __extends4,
  __assign: __assign4,
  __rest: __rest4,
  __decorate: __decorate4,
  __param: __param4,
  __metadata: __metadata4,
  __awaiter: __awaiter4,
  __generator: __generator4,
  __exportStar: __exportStar4,
  __createBinding: __createBinding4,
  __values: __values4,
  __read: __read4,
  __spread: __spread4,
  __spreadArrays: __spreadArrays4,
  __spreadArray: __spreadArray3,
  __await: __await4,
  __asyncGenerator: __asyncGenerator4,
  __asyncDelegator: __asyncDelegator4,
  __asyncValues: __asyncValues4,
  __makeTemplateObject: __makeTemplateObject4,
  __importStar: __importStar4,
  __importDefault: __importDefault4,
  __classPrivateFieldGet: __classPrivateFieldGet4,
  __classPrivateFieldSet: __classPrivateFieldSet4
} = import_tslib57.default;

// node_modules/@aws-sdk/client-cognito-identity/dist/es/package.json
var name2 = "@aws-sdk/client-cognito-identity";
var description2 = "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native";
var version3 = "3.6.1";
var scripts2 = {
  clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
  "build-documentation": "yarn remove-documentation && typedoc ./",
  prepublishOnly: "yarn build",
  pretest: "yarn build:cjs",
  "remove-definitions": "rimraf ./types",
  "remove-dist": "rimraf ./dist",
  "remove-documentation": "rimraf ./docs",
  "test:unit": "mocha **/cjs/**/*.spec.js",
  "test:e2e": "mocha **/cjs/**/*.ispec.js && karma start karma.conf.js",
  test: "yarn test:unit",
  "build:cjs": "tsc -p tsconfig.json",
  "build:es": "tsc -p tsconfig.es.json",
  build: "yarn build:cjs && yarn build:es",
  postbuild: "downlevel-dts types types/ts3.4"
};
var main2 = "./dist/cjs/index.js";
var types2 = "./types/index.d.ts";
var module2 = "./dist/es/index.js";
var browser2 = {
  "./runtimeConfig": "./runtimeConfig.browser"
};
var react_native2 = {
  "./runtimeConfig": "./runtimeConfig.native"
};
var sideEffects2 = false;
var dependencies2 = {
  "@aws-crypto/sha256-browser": "^1.0.0",
  "@aws-crypto/sha256-js": "^1.0.0",
  "@aws-sdk/config-resolver": "3.6.1",
  "@aws-sdk/credential-provider-node": "3.6.1",
  "@aws-sdk/fetch-http-handler": "3.6.1",
  "@aws-sdk/hash-node": "3.6.1",
  "@aws-sdk/invalid-dependency": "3.6.1",
  "@aws-sdk/middleware-content-length": "3.6.1",
  "@aws-sdk/middleware-host-header": "3.6.1",
  "@aws-sdk/middleware-logger": "3.6.1",
  "@aws-sdk/middleware-retry": "3.6.1",
  "@aws-sdk/middleware-serde": "3.6.1",
  "@aws-sdk/middleware-signing": "3.6.1",
  "@aws-sdk/middleware-stack": "3.6.1",
  "@aws-sdk/middleware-user-agent": "3.6.1",
  "@aws-sdk/node-config-provider": "3.6.1",
  "@aws-sdk/node-http-handler": "3.6.1",
  "@aws-sdk/protocol-http": "3.6.1",
  "@aws-sdk/smithy-client": "3.6.1",
  "@aws-sdk/types": "3.6.1",
  "@aws-sdk/url-parser": "3.6.1",
  "@aws-sdk/url-parser-native": "3.6.1",
  "@aws-sdk/util-base64-browser": "3.6.1",
  "@aws-sdk/util-base64-node": "3.6.1",
  "@aws-sdk/util-body-length-browser": "3.6.1",
  "@aws-sdk/util-body-length-node": "3.6.1",
  "@aws-sdk/util-user-agent-browser": "3.6.1",
  "@aws-sdk/util-user-agent-node": "3.6.1",
  "@aws-sdk/util-utf8-browser": "3.6.1",
  "@aws-sdk/util-utf8-node": "3.6.1",
  tslib: "^2.0.0"
};
var devDependencies2 = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@aws-sdk/client-iam": "3.6.1",
  "@types/chai": "^4.2.11",
  "@types/mocha": "^8.0.4",
  "@types/node": "^12.7.5",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  typedoc: "^0.19.2",
  typescript: "~4.1.2"
};
var engines2 = {
  node: ">=10.0.0"
};
var typesVersions2 = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
};
var author2 = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
};
var license2 = "Apache-2.0";
var homepage2 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity";
var repository2 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-cognito-identity"
};
var package_default2 = {
  name: name2,
  description: description2,
  version: version3,
  scripts: scripts2,
  main: main2,
  types: types2,
  module: module2,
  browser: browser2,
  "react-native": react_native2,
  sideEffects: sideEffects2,
  dependencies: dependencies2,
  devDependencies: devDependencies2,
  engines: engines2,
  typesVersions: typesVersions2,
  author: author2,
  license: license2,
  homepage: homepage2,
  repository: repository2
};

// node_modules/@aws-sdk/client-cognito-identity/dist/es/runtimeConfig.browser.js
var import_sha256_browser2 = __toModule(require_build6());
var import_util_utf8_browser2 = __toModule(require_cjs2());

// node_modules/@aws-sdk/client-cognito-identity/dist/es/endpoints.js
var AWS_TEMPLATE2 = "cognito-identity.{region}.amazonaws.com";
var AWS_CN_TEMPLATE2 = "cognito-identity.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE2 = "cognito-identity.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE2 = "cognito-identity.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE2 = "cognito-identity.{region}.amazonaws.com";
var AWS_REGIONS2 = new Set([
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
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
var AWS_CN_REGIONS2 = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS2 = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS2 = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS2 = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider2 = function(region, options) {
  var regionInfo = void 0;
  switch (region) {
    case "ap-northeast-1":
      regionInfo = {
        hostname: "cognito-identity.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "cognito-identity.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "cognito-identity.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "cognito-identity.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "cognito-identity.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "cognito-identity.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "cognito-identity.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "cognito-identity.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "cognito-identity.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "cognito-identity.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "cognito-identity.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "cognito-identity.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "cognito-identity-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "cognito-identity-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "cognito-identity-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "cognito-identity-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "cognito-identity.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "cognito-identity.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "cognito-identity.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "cognito-identity.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "cognito-identity.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "cognito-identity.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    default:
      if (AWS_REGIONS2.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE2.replace("{region}", region),
          partition: "aws"
        };
      }
      if (AWS_CN_REGIONS2.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE2.replace("{region}", region),
          partition: "aws-cn"
        };
      }
      if (AWS_ISO_REGIONS2.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE2.replace("{region}", region),
          partition: "aws-iso"
        };
      }
      if (AWS_ISO_B_REGIONS2.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE2.replace("{region}", region),
          partition: "aws-iso-b"
        };
      }
      if (AWS_US_GOV_REGIONS2.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE2.replace("{region}", region),
          partition: "aws-us-gov"
        };
      }
      if (regionInfo === void 0) {
        regionInfo = {
          hostname: AWS_TEMPLATE2.replace("{region}", region),
          partition: "aws"
        };
      }
  }
  return Promise.resolve(__assign4({ signingService: "cognito-identity" }, regionInfo));
};

// node_modules/@aws-sdk/client-cognito-identity/dist/es/runtimeConfig.shared.js
var ClientSharedValues2 = {
  apiVersion: "2014-06-30",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider2,
  serviceId: "Cognito Identity",
  urlParser: parseUrl
};

// node_modules/@aws-sdk/client-cognito-identity/dist/es/runtimeConfig.browser.js
var ClientDefaultValues2 = __assign4(__assign4({}, ClientSharedValues2), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues2.serviceId,
  clientVersion: package_default2.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser2.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser2.fromUtf8, utf8Encoder: import_util_utf8_browser2.toUtf8 });

// node_modules/@aws-sdk/client-cognito-identity/dist/es/CognitoIdentityClient.js
var CognitoIdentityClient = function(_super) {
  __extends4(CognitoIdentityClient2, _super);
  function CognitoIdentityClient2(configuration) {
    var _this = this;
    var _config_0 = __assign4(__assign4({}, ClientDefaultValues2), configuration);
    var _config_1 = resolveRegionConfig(_config_0);
    var _config_2 = resolveEndpointsConfig(_config_1);
    var _config_3 = resolveAwsAuthConfig(_config_2);
    var _config_4 = resolveRetryConfig(_config_3);
    var _config_5 = resolveHostHeaderConfig(_config_4);
    var _config_6 = resolveUserAgentConfig(_config_5);
    _this = _super.call(this, _config_6) || this;
    _this.config = _config_6;
    _this.middlewareStack.use(getRetryPlugin(_this.config));
    _this.middlewareStack.use(getContentLengthPlugin(_this.config));
    _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
    _this.middlewareStack.use(getLoggerPlugin(_this.config));
    _this.middlewareStack.use(getUserAgentPlugin(_this.config));
    return _this;
  }
  CognitoIdentityClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return CognitoIdentityClient2;
}(Client);

// node_modules/@aws-sdk/client-cognito-identity/dist/es/models/models_0.js
var AmbiguousRoleResolutionType2;
(function(AmbiguousRoleResolutionType3) {
  AmbiguousRoleResolutionType3["AUTHENTICATED_ROLE"] = "AuthenticatedRole";
  AmbiguousRoleResolutionType3["DENY"] = "Deny";
})(AmbiguousRoleResolutionType2 || (AmbiguousRoleResolutionType2 = {}));
var CognitoIdentityProvider2;
(function(CognitoIdentityProvider3) {
  CognitoIdentityProvider3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CognitoIdentityProvider2 || (CognitoIdentityProvider2 = {}));
var CreateIdentityPoolInput2;
(function(CreateIdentityPoolInput3) {
  CreateIdentityPoolInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateIdentityPoolInput2 || (CreateIdentityPoolInput2 = {}));
var IdentityPool2;
(function(IdentityPool3) {
  IdentityPool3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(IdentityPool2 || (IdentityPool2 = {}));
var InternalErrorException2;
(function(InternalErrorException3) {
  InternalErrorException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InternalErrorException2 || (InternalErrorException2 = {}));
var InvalidParameterException3;
(function(InvalidParameterException4) {
  InvalidParameterException4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidParameterException3 || (InvalidParameterException3 = {}));
var LimitExceededException3;
(function(LimitExceededException4) {
  LimitExceededException4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(LimitExceededException3 || (LimitExceededException3 = {}));
var NotAuthorizedException2;
(function(NotAuthorizedException3) {
  NotAuthorizedException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(NotAuthorizedException2 || (NotAuthorizedException2 = {}));
var ResourceConflictException2;
(function(ResourceConflictException3) {
  ResourceConflictException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceConflictException2 || (ResourceConflictException2 = {}));
var TooManyRequestsException2;
(function(TooManyRequestsException3) {
  TooManyRequestsException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TooManyRequestsException2 || (TooManyRequestsException2 = {}));
var DeleteIdentitiesInput2;
(function(DeleteIdentitiesInput3) {
  DeleteIdentitiesInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteIdentitiesInput2 || (DeleteIdentitiesInput2 = {}));
var ErrorCode2;
(function(ErrorCode3) {
  ErrorCode3["ACCESS_DENIED"] = "AccessDenied";
  ErrorCode3["INTERNAL_SERVER_ERROR"] = "InternalServerError";
})(ErrorCode2 || (ErrorCode2 = {}));
var UnprocessedIdentityId2;
(function(UnprocessedIdentityId3) {
  UnprocessedIdentityId3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UnprocessedIdentityId2 || (UnprocessedIdentityId2 = {}));
var DeleteIdentitiesResponse2;
(function(DeleteIdentitiesResponse3) {
  DeleteIdentitiesResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteIdentitiesResponse2 || (DeleteIdentitiesResponse2 = {}));
var DeleteIdentityPoolInput2;
(function(DeleteIdentityPoolInput3) {
  DeleteIdentityPoolInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteIdentityPoolInput2 || (DeleteIdentityPoolInput2 = {}));
var ResourceNotFoundException3;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceNotFoundException3 || (ResourceNotFoundException3 = {}));
var DescribeIdentityInput2;
(function(DescribeIdentityInput3) {
  DescribeIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeIdentityInput2 || (DescribeIdentityInput2 = {}));
var IdentityDescription2;
(function(IdentityDescription3) {
  IdentityDescription3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(IdentityDescription2 || (IdentityDescription2 = {}));
var DescribeIdentityPoolInput2;
(function(DescribeIdentityPoolInput3) {
  DescribeIdentityPoolInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeIdentityPoolInput2 || (DescribeIdentityPoolInput2 = {}));
var ExternalServiceException2;
(function(ExternalServiceException3) {
  ExternalServiceException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ExternalServiceException2 || (ExternalServiceException2 = {}));
var GetCredentialsForIdentityInput2;
(function(GetCredentialsForIdentityInput3) {
  GetCredentialsForIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetCredentialsForIdentityInput2 || (GetCredentialsForIdentityInput2 = {}));
var Credentials2;
(function(Credentials4) {
  Credentials4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Credentials2 || (Credentials2 = {}));
var GetCredentialsForIdentityResponse2;
(function(GetCredentialsForIdentityResponse3) {
  GetCredentialsForIdentityResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetCredentialsForIdentityResponse2 || (GetCredentialsForIdentityResponse2 = {}));
var InvalidIdentityPoolConfigurationException2;
(function(InvalidIdentityPoolConfigurationException3) {
  InvalidIdentityPoolConfigurationException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidIdentityPoolConfigurationException2 || (InvalidIdentityPoolConfigurationException2 = {}));
var GetIdInput2;
(function(GetIdInput3) {
  GetIdInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetIdInput2 || (GetIdInput2 = {}));
var GetIdResponse2;
(function(GetIdResponse3) {
  GetIdResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetIdResponse2 || (GetIdResponse2 = {}));
var GetIdentityPoolRolesInput2;
(function(GetIdentityPoolRolesInput3) {
  GetIdentityPoolRolesInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetIdentityPoolRolesInput2 || (GetIdentityPoolRolesInput2 = {}));
var MappingRuleMatchType2;
(function(MappingRuleMatchType3) {
  MappingRuleMatchType3["CONTAINS"] = "Contains";
  MappingRuleMatchType3["EQUALS"] = "Equals";
  MappingRuleMatchType3["NOT_EQUAL"] = "NotEqual";
  MappingRuleMatchType3["STARTS_WITH"] = "StartsWith";
})(MappingRuleMatchType2 || (MappingRuleMatchType2 = {}));
var MappingRule2;
(function(MappingRule3) {
  MappingRule3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(MappingRule2 || (MappingRule2 = {}));
var RulesConfigurationType2;
(function(RulesConfigurationType3) {
  RulesConfigurationType3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(RulesConfigurationType2 || (RulesConfigurationType2 = {}));
var RoleMappingType2;
(function(RoleMappingType3) {
  RoleMappingType3["RULES"] = "Rules";
  RoleMappingType3["TOKEN"] = "Token";
})(RoleMappingType2 || (RoleMappingType2 = {}));
var RoleMapping2;
(function(RoleMapping3) {
  RoleMapping3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(RoleMapping2 || (RoleMapping2 = {}));
var GetIdentityPoolRolesResponse2;
(function(GetIdentityPoolRolesResponse3) {
  GetIdentityPoolRolesResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetIdentityPoolRolesResponse2 || (GetIdentityPoolRolesResponse2 = {}));
var GetOpenIdTokenInput2;
(function(GetOpenIdTokenInput3) {
  GetOpenIdTokenInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetOpenIdTokenInput2 || (GetOpenIdTokenInput2 = {}));
var GetOpenIdTokenResponse2;
(function(GetOpenIdTokenResponse3) {
  GetOpenIdTokenResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetOpenIdTokenResponse2 || (GetOpenIdTokenResponse2 = {}));
var DeveloperUserAlreadyRegisteredException2;
(function(DeveloperUserAlreadyRegisteredException3) {
  DeveloperUserAlreadyRegisteredException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeveloperUserAlreadyRegisteredException2 || (DeveloperUserAlreadyRegisteredException2 = {}));
var GetOpenIdTokenForDeveloperIdentityInput2;
(function(GetOpenIdTokenForDeveloperIdentityInput3) {
  GetOpenIdTokenForDeveloperIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetOpenIdTokenForDeveloperIdentityInput2 || (GetOpenIdTokenForDeveloperIdentityInput2 = {}));
var GetOpenIdTokenForDeveloperIdentityResponse2;
(function(GetOpenIdTokenForDeveloperIdentityResponse3) {
  GetOpenIdTokenForDeveloperIdentityResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetOpenIdTokenForDeveloperIdentityResponse2 || (GetOpenIdTokenForDeveloperIdentityResponse2 = {}));
var ListIdentitiesInput2;
(function(ListIdentitiesInput3) {
  ListIdentitiesInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListIdentitiesInput2 || (ListIdentitiesInput2 = {}));
var ListIdentitiesResponse2;
(function(ListIdentitiesResponse3) {
  ListIdentitiesResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListIdentitiesResponse2 || (ListIdentitiesResponse2 = {}));
var ListIdentityPoolsInput2;
(function(ListIdentityPoolsInput3) {
  ListIdentityPoolsInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListIdentityPoolsInput2 || (ListIdentityPoolsInput2 = {}));
var IdentityPoolShortDescription2;
(function(IdentityPoolShortDescription3) {
  IdentityPoolShortDescription3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(IdentityPoolShortDescription2 || (IdentityPoolShortDescription2 = {}));
var ListIdentityPoolsResponse2;
(function(ListIdentityPoolsResponse3) {
  ListIdentityPoolsResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListIdentityPoolsResponse2 || (ListIdentityPoolsResponse2 = {}));
var ListTagsForResourceInput2;
(function(ListTagsForResourceInput3) {
  ListTagsForResourceInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListTagsForResourceInput2 || (ListTagsForResourceInput2 = {}));
var ListTagsForResourceResponse2;
(function(ListTagsForResourceResponse3) {
  ListTagsForResourceResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListTagsForResourceResponse2 || (ListTagsForResourceResponse2 = {}));
var LookupDeveloperIdentityInput2;
(function(LookupDeveloperIdentityInput3) {
  LookupDeveloperIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(LookupDeveloperIdentityInput2 || (LookupDeveloperIdentityInput2 = {}));
var LookupDeveloperIdentityResponse2;
(function(LookupDeveloperIdentityResponse3) {
  LookupDeveloperIdentityResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(LookupDeveloperIdentityResponse2 || (LookupDeveloperIdentityResponse2 = {}));
var MergeDeveloperIdentitiesInput2;
(function(MergeDeveloperIdentitiesInput3) {
  MergeDeveloperIdentitiesInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(MergeDeveloperIdentitiesInput2 || (MergeDeveloperIdentitiesInput2 = {}));
var MergeDeveloperIdentitiesResponse2;
(function(MergeDeveloperIdentitiesResponse3) {
  MergeDeveloperIdentitiesResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(MergeDeveloperIdentitiesResponse2 || (MergeDeveloperIdentitiesResponse2 = {}));
var ConcurrentModificationException2;
(function(ConcurrentModificationException3) {
  ConcurrentModificationException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ConcurrentModificationException2 || (ConcurrentModificationException2 = {}));
var SetIdentityPoolRolesInput2;
(function(SetIdentityPoolRolesInput3) {
  SetIdentityPoolRolesInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SetIdentityPoolRolesInput2 || (SetIdentityPoolRolesInput2 = {}));
var TagResourceInput2;
(function(TagResourceInput3) {
  TagResourceInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TagResourceInput2 || (TagResourceInput2 = {}));
var TagResourceResponse2;
(function(TagResourceResponse3) {
  TagResourceResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TagResourceResponse2 || (TagResourceResponse2 = {}));
var UnlinkDeveloperIdentityInput2;
(function(UnlinkDeveloperIdentityInput3) {
  UnlinkDeveloperIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UnlinkDeveloperIdentityInput2 || (UnlinkDeveloperIdentityInput2 = {}));
var UnlinkIdentityInput2;
(function(UnlinkIdentityInput3) {
  UnlinkIdentityInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UnlinkIdentityInput2 || (UnlinkIdentityInput2 = {}));
var UntagResourceInput2;
(function(UntagResourceInput3) {
  UntagResourceInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UntagResourceInput2 || (UntagResourceInput2 = {}));
var UntagResourceResponse2;
(function(UntagResourceResponse3) {
  UntagResourceResponse3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UntagResourceResponse2 || (UntagResourceResponse2 = {}));

// node_modules/@aws-sdk/client-cognito-identity/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1GetCredentialsForIdentityCommand2 = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
      };
      body = JSON.stringify(serializeAws_json1_1GetCredentialsForIdentityInput2(input, context));
      return [2, buildHttpRpcRequest3(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1GetIdCommand2 = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId"
      };
      body = JSON.stringify(serializeAws_json1_1GetIdInput2(input, context));
      return [2, buildHttpRpcRequest3(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1GetCredentialsForIdentityCommand2 = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1GetCredentialsForIdentityCommandError2(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetCredentialsForIdentityResponse2(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetCredentialsForIdentityCommandError2 = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator4(this, function(_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign4({}, output)];
          _l = {};
          return [4, parseBody3(output.body, context)];
        case 1:
          parsedOutput = __assign4.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ExternalServiceException":
              return [3, 2];
            case "com.amazonaws.cognitoidentity#ExternalServiceException":
              return [3, 2];
            case "InternalErrorException":
              return [3, 4];
            case "com.amazonaws.cognitoidentity#InternalErrorException":
              return [3, 4];
            case "InvalidIdentityPoolConfigurationException":
              return [3, 6];
            case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
              return [3, 6];
            case "InvalidParameterException":
              return [3, 8];
            case "com.amazonaws.cognitoidentity#InvalidParameterException":
              return [3, 8];
            case "NotAuthorizedException":
              return [3, 10];
            case "com.amazonaws.cognitoidentity#NotAuthorizedException":
              return [3, 10];
            case "ResourceConflictException":
              return [3, 12];
            case "com.amazonaws.cognitoidentity#ResourceConflictException":
              return [3, 12];
            case "ResourceNotFoundException":
              return [3, 14];
            case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
              return [3, 14];
            case "TooManyRequestsException":
              return [3, 16];
            case "com.amazonaws.cognitoidentity#TooManyRequestsException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1ExternalServiceExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InternalErrorExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse3(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1NotAuthorizedExceptionResponse2(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1ResourceConflictExceptionResponse2(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse3(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1TooManyRequestsExceptionResponse2(parsedOutput, context)];
        case 17:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _k.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign4(__assign4({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata3(output) });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1GetIdCommand2 = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1GetIdCommandError2(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetIdResponse2(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetIdCommandError2 = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator4(this, function(_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign4({}, output)];
          _l = {};
          return [4, parseBody3(output.body, context)];
        case 1:
          parsedOutput = __assign4.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ExternalServiceException":
              return [3, 2];
            case "com.amazonaws.cognitoidentity#ExternalServiceException":
              return [3, 2];
            case "InternalErrorException":
              return [3, 4];
            case "com.amazonaws.cognitoidentity#InternalErrorException":
              return [3, 4];
            case "InvalidParameterException":
              return [3, 6];
            case "com.amazonaws.cognitoidentity#InvalidParameterException":
              return [3, 6];
            case "LimitExceededException":
              return [3, 8];
            case "com.amazonaws.cognitoidentity#LimitExceededException":
              return [3, 8];
            case "NotAuthorizedException":
              return [3, 10];
            case "com.amazonaws.cognitoidentity#NotAuthorizedException":
              return [3, 10];
            case "ResourceConflictException":
              return [3, 12];
            case "com.amazonaws.cognitoidentity#ResourceConflictException":
              return [3, 12];
            case "ResourceNotFoundException":
              return [3, 14];
            case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
              return [3, 14];
            case "TooManyRequestsException":
              return [3, 16];
            case "com.amazonaws.cognitoidentity#TooManyRequestsException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1ExternalServiceExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InternalErrorExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse3(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1LimitExceededExceptionResponse3(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1NotAuthorizedExceptionResponse2(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1ResourceConflictExceptionResponse2(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse3(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1TooManyRequestsExceptionResponse2(parsedOutput, context)];
        case 17:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _k.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign4(__assign4({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata3(output) });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1ExternalServiceExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ExternalServiceException2(body, context);
      contents = __assign4({ name: "ExternalServiceException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InternalErrorExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalErrorException2(body, context);
      contents = __assign4({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidIdentityPoolConfigurationException2(body, context);
      contents = __assign4({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterExceptionResponse3 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterException3(body, context);
      contents = __assign4({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1LimitExceededExceptionResponse3 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LimitExceededException3(body, context);
      contents = __assign4({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1NotAuthorizedExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1NotAuthorizedException2(body, context);
      contents = __assign4({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceConflictExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceConflictException2(body, context);
      contents = __assign4({ name: "ResourceConflictException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse3 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException3(body, context);
      contents = __assign4({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1TooManyRequestsExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TooManyRequestsException2(body, context);
      contents = __assign4({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1GetCredentialsForIdentityInput2 = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.CustomRoleArn !== void 0 && input.CustomRoleArn !== null && { CustomRoleArn: input.CustomRoleArn }), input.IdentityId !== void 0 && input.IdentityId !== null && { IdentityId: input.IdentityId }), input.Logins !== void 0 && input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap2(input.Logins, context) });
};
var serializeAws_json1_1GetIdInput2 = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.AccountId !== void 0 && input.AccountId !== null && { AccountId: input.AccountId }), input.IdentityPoolId !== void 0 && input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }), input.Logins !== void 0 && input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap2(input.Logins, context) });
};
var serializeAws_json1_1LoginsMap2 = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read4(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign4(__assign4({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};
var deserializeAws_json1_1Credentials2 = function(output, context) {
  return {
    AccessKeyId: output.AccessKeyId !== void 0 && output.AccessKeyId !== null ? output.AccessKeyId : void 0,
    Expiration: output.Expiration !== void 0 && output.Expiration !== null ? new Date(Math.round(output.Expiration * 1e3)) : void 0,
    SecretKey: output.SecretKey !== void 0 && output.SecretKey !== null ? output.SecretKey : void 0,
    SessionToken: output.SessionToken !== void 0 && output.SessionToken !== null ? output.SessionToken : void 0
  };
};
var deserializeAws_json1_1ExternalServiceException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1GetCredentialsForIdentityResponse2 = function(output, context) {
  return {
    Credentials: output.Credentials !== void 0 && output.Credentials !== null ? deserializeAws_json1_1Credentials2(output.Credentials, context) : void 0,
    IdentityId: output.IdentityId !== void 0 && output.IdentityId !== null ? output.IdentityId : void 0
  };
};
var deserializeAws_json1_1GetIdResponse2 = function(output, context) {
  return {
    IdentityId: output.IdentityId !== void 0 && output.IdentityId !== null ? output.IdentityId : void 0
  };
};
var deserializeAws_json1_1InternalErrorException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1InvalidIdentityPoolConfigurationException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1InvalidParameterException3 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1LimitExceededException3 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1NotAuthorizedException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ResourceConflictException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ResourceNotFoundException3 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1TooManyRequestsException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeMetadata3 = function(output) {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  };
};
var collectBody3 = function(streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString3 = function(streamBody, context) {
  return collectBody3(streamBody, context).then(function(body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest3 = function(context, headers, path, resolvedHostname, body) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, contents;
    return __generator4(this, function(_c) {
      switch (_c.label) {
        case 0:
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          contents = {
            protocol,
            hostname,
            port,
            method: "POST",
            path,
            headers
          };
          if (resolvedHostname !== void 0) {
            contents.hostname = resolvedHostname;
          }
          if (body !== void 0) {
            contents.body = body;
          }
          return [2, new HttpRequest(contents)];
      }
    });
  });
};
var parseBody3 = function(streamBody, context) {
  return collectBodyString3(streamBody, context).then(function(encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
var loadRestJsonErrorCode3 = function(output, data) {
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

// node_modules/@aws-sdk/client-cognito-identity/dist/es/commands/GetCredentialsForIdentityCommand.js
var GetCredentialsForIdentityCommand2 = function(_super) {
  __extends4(GetCredentialsForIdentityCommand3, _super);
  function GetCredentialsForIdentityCommand3(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  GetCredentialsForIdentityCommand3.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CognitoIdentityClient";
    var commandName = "GetCredentialsForIdentityCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCredentialsForIdentityInput2.filterSensitiveLog,
      outputFilterSensitiveLog: GetCredentialsForIdentityResponse2.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCredentialsForIdentityCommand3.prototype.serialize = function(input, context) {
    return serializeAws_json1_1GetCredentialsForIdentityCommand2(input, context);
  };
  GetCredentialsForIdentityCommand3.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1GetCredentialsForIdentityCommand2(output, context);
  };
  return GetCredentialsForIdentityCommand3;
}(Command);

// node_modules/@aws-sdk/client-cognito-identity/dist/es/commands/GetIdCommand.js
var GetIdCommand2 = function(_super) {
  __extends4(GetIdCommand3, _super);
  function GetIdCommand3(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  GetIdCommand3.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger13 = configuration.logger;
    var clientName = "CognitoIdentityClient";
    var commandName = "GetIdCommand";
    var handlerExecutionContext = {
      logger: logger13,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdInput2.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdResponse2.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetIdCommand3.prototype.serialize = function(input, context) {
    return serializeAws_json1_1GetIdCommand2(input, context);
  };
  GetIdCommand3.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1GetIdCommand2(output, context);
  };
  return GetIdCommand3;
}(Command);

// src/Credentials.ts
var logger11 = new ConsoleLogger("Credentials");
var CREDENTIALS_TTL = 50 * 60 * 1e3;
var COGNITO_IDENTITY_KEY_PREFIX = "CognitoIdentityId-";
var CredentialsClass = class {
  constructor(config) {
    this._gettingCredPromise = null;
    this._refreshHandlers = {};
    this.Auth = void 0;
    this.configure(config);
    this._refreshHandlers["google"] = GoogleOAuth2.refreshGoogleToken;
    this._refreshHandlers["facebook"] = FacebookOAuth2.refreshFacebookToken;
  }
  getModuleName() {
    return "Credentials";
  }
  getCredSource() {
    return this._credentials_source;
  }
  configure(config) {
    if (!config)
      return this._config || {};
    this._config = Object.assign({}, this._config, config);
    const { refreshHandlers } = this._config;
    if (refreshHandlers) {
      this._refreshHandlers = {
        ...this._refreshHandlers,
        ...refreshHandlers
      };
    }
    this._storage = this._config.storage;
    if (!this._storage) {
      this._storage = new StorageHelper().getStorage();
    }
    this._storageSync = Promise.resolve();
    if (typeof this._storage["sync"] === "function") {
      this._storageSync = this._storage["sync"]();
    }
    return this._config;
  }
  get() {
    logger11.debug("getting credentials");
    return this._pickupCredentials();
  }
  _getCognitoIdentityIdStorageKey(identityPoolId) {
    return `${COGNITO_IDENTITY_KEY_PREFIX}${identityPoolId}`;
  }
  _pickupCredentials() {
    logger11.debug("picking up credentials");
    if (!this._gettingCredPromise || !this._gettingCredPromise.isPending()) {
      logger11.debug("getting new cred promise");
      this._gettingCredPromise = makeQuerablePromise(this._keepAlive());
    } else {
      logger11.debug("getting old cred promise");
    }
    return this._gettingCredPromise;
  }
  async _keepAlive() {
    logger11.debug("checking if credentials exists and not expired");
    const cred = this._credentials;
    if (cred && !this._isExpired(cred) && !this._isPastTTL()) {
      logger11.debug("credentials not changed and not expired, directly return");
      return Promise.resolve(cred);
    }
    logger11.debug("need to get a new credential or refresh the existing one");
    const { Auth = Amplify.Auth } = this;
    if (!Auth || typeof Auth.currentUserCredentials !== "function") {
      return Promise.reject("No Auth module registered in Amplify");
    }
    if (!this._isExpired(cred) && this._isPastTTL()) {
      logger11.debug("ttl has passed but token is not yet expired");
      try {
        const user = await Auth.currentUserPoolUser();
        const session = await Auth.currentSession();
        const refreshToken = session.refreshToken;
        const refreshRequest = new Promise((res, rej) => {
          user.refreshSession(refreshToken, (err, data) => {
            return err ? rej(err) : res(data);
          });
        });
        await refreshRequest;
      } catch (err) {
        logger11.debug("Error attempting to refreshing the session", err);
      }
    }
    return Auth.currentUserCredentials();
  }
  refreshFederatedToken(federatedInfo) {
    logger11.debug("Getting federated credentials");
    const { provider, user, token, identity_id } = federatedInfo;
    let { expires_at } = federatedInfo;
    expires_at = new Date(expires_at).getFullYear() === 1970 ? expires_at * 1e3 : expires_at;
    const that = this;
    logger11.debug("checking if federated jwt token expired");
    if (expires_at > new Date().getTime()) {
      logger11.debug("token not expired");
      return this._setCredentialsFromFederation({
        provider,
        token,
        user,
        identity_id,
        expires_at
      });
    } else {
      if (that._refreshHandlers[provider] && typeof that._refreshHandlers[provider] === "function") {
        logger11.debug("getting refreshed jwt token from federation provider");
        return this._providerRefreshWithRetry({
          refreshHandler: that._refreshHandlers[provider],
          provider,
          user
        });
      } else {
        logger11.debug("no refresh handler for provider:", provider);
        this.clear();
        return Promise.reject("no refresh handler for provider");
      }
    }
  }
  _providerRefreshWithRetry({ refreshHandler, provider, user }) {
    const MAX_DELAY_MS2 = 10 * 1e3;
    return jitteredExponentialRetry(refreshHandler, [], MAX_DELAY_MS2).then((data) => {
      logger11.debug("refresh federated token sucessfully", data);
      return this._setCredentialsFromFederation({
        provider,
        token: data.token,
        user,
        identity_id: data.identity_id,
        expires_at: data.expires_at
      });
    }).catch((e) => {
      const isNetworkError = typeof e === "string" && e.toLowerCase().lastIndexOf("network error", e.length) === 0;
      if (!isNetworkError) {
        this.clear();
      }
      logger11.debug("refresh federated token failed", e);
      return Promise.reject("refreshing federation token failed: " + e);
    });
  }
  _isExpired(credentials) {
    if (!credentials) {
      logger11.debug("no credentials for expiration check");
      return true;
    }
    logger11.debug("are these credentials expired?", credentials);
    const ts = Date.now();
    const { expiration } = credentials;
    return expiration.getTime() <= ts;
  }
  _isPastTTL() {
    return this._nextCredentialsRefresh <= Date.now();
  }
  async _setCredentialsForGuest() {
    logger11.debug("setting credentials for guest");
    const { identityPoolId, region, mandatorySignIn } = this._config;
    if (mandatorySignIn) {
      return Promise.reject("cannot get guest credentials when mandatory signin enabled");
    }
    if (!identityPoolId) {
      logger11.debug("No Cognito Identity pool provided for unauthenticated access");
      return Promise.reject("No Cognito Identity pool provided for unauthenticated access");
    }
    if (!region) {
      logger11.debug("region is not configured for getting the credentials");
      return Promise.reject("region is not configured for getting the credentials");
    }
    const identityId = this._identityId = await this._getGuestIdentityId();
    const cognitoClient = new CognitoIdentityClient({
      region,
      customUserAgent: getAmplifyUserAgent()
    });
    let credentials = void 0;
    if (identityId) {
      const cognitoIdentityParams = {
        identityId,
        client: cognitoClient
      };
      credentials = fromCognitoIdentity(cognitoIdentityParams)();
    } else {
      const credentialsProvider = async () => {
        const { IdentityId } = await cognitoClient.send(new GetIdCommand2({
          IdentityPoolId: identityPoolId
        }));
        this._identityId = IdentityId;
        const cognitoIdentityParams = {
          client: cognitoClient,
          identityId: IdentityId
        };
        const credentialsFromCognitoIdentity = fromCognitoIdentity(cognitoIdentityParams);
        return credentialsFromCognitoIdentity();
      };
      credentials = credentialsProvider().catch(async (err) => {
        throw err;
      });
    }
    return this._loadCredentials(credentials, "guest", false, null).then((res) => {
      return res;
    }).catch(async (e) => {
      if (e.name === "ResourceNotFoundException" && e.message === `Identity '${identityId}' not found.`) {
        logger11.debug("Failed to load guest credentials");
        await this._removeGuestIdentityId();
        const credentialsProvider = async () => {
          const { IdentityId } = await cognitoClient.send(new GetIdCommand2({
            IdentityPoolId: identityPoolId
          }));
          this._identityId = IdentityId;
          const cognitoIdentityParams = {
            client: cognitoClient,
            identityId: IdentityId
          };
          const credentialsFromCognitoIdentity = fromCognitoIdentity(cognitoIdentityParams);
          return credentialsFromCognitoIdentity();
        };
        credentials = credentialsProvider().catch(async (err) => {
          throw err;
        });
        return this._loadCredentials(credentials, "guest", false, null);
      } else {
        return e;
      }
    });
  }
  _setCredentialsFromFederation(params) {
    const { provider, token, identity_id } = params;
    const domains = {
      google: "accounts.google.com",
      facebook: "graph.facebook.com",
      amazon: "www.amazon.com",
      developer: "cognito-identity.amazonaws.com"
    };
    const domain = domains[provider] || provider;
    if (!domain) {
      return Promise.reject("You must specify a federated provider");
    }
    const logins = {};
    logins[domain] = token;
    const { identityPoolId, region } = this._config;
    if (!identityPoolId) {
      logger11.debug("No Cognito Federated Identity pool provided");
      return Promise.reject("No Cognito Federated Identity pool provided");
    }
    if (!region) {
      logger11.debug("region is not configured for getting the credentials");
      return Promise.reject("region is not configured for getting the credentials");
    }
    const cognitoClient = new CognitoIdentityClient({
      region,
      customUserAgent: getAmplifyUserAgent()
    });
    let credentials = void 0;
    if (identity_id) {
      const cognitoIdentityParams = {
        identityId: identity_id,
        logins,
        client: cognitoClient
      };
      credentials = fromCognitoIdentity(cognitoIdentityParams)();
    } else {
      const cognitoIdentityParams = {
        logins,
        identityPoolId,
        client: cognitoClient
      };
      credentials = fromCognitoIdentityPool(cognitoIdentityParams)();
    }
    return this._loadCredentials(credentials, "federated", true, params);
  }
  _setCredentialsFromSession(session) {
    logger11.debug("set credentials from session");
    const idToken = session.getIdToken().getJwtToken();
    const { region, userPoolId, identityPoolId } = this._config;
    if (!identityPoolId) {
      logger11.debug("No Cognito Federated Identity pool provided");
      return Promise.reject("No Cognito Federated Identity pool provided");
    }
    if (!region) {
      logger11.debug("region is not configured for getting the credentials");
      return Promise.reject("region is not configured for getting the credentials");
    }
    const key = "cognito-idp." + region + ".amazonaws.com/" + userPoolId;
    const logins = {};
    logins[key] = idToken;
    const cognitoClient = new CognitoIdentityClient({
      region,
      customUserAgent: getAmplifyUserAgent()
    });
    const credentialsProvider = async () => {
      const guestIdentityId = await this._getGuestIdentityId();
      let generatedOrRetrievedIdentityId;
      if (!guestIdentityId) {
        const { IdentityId } = await cognitoClient.send(new GetIdCommand2({
          IdentityPoolId: identityPoolId,
          Logins: logins
        }));
        generatedOrRetrievedIdentityId = IdentityId;
      }
      const {
        Credentials: {
          AccessKeyId,
          Expiration,
          SecretKey,
          SessionToken
        },
        IdentityId: primaryIdentityId
      } = await cognitoClient.send(new GetCredentialsForIdentityCommand2({
        IdentityId: guestIdentityId || generatedOrRetrievedIdentityId,
        Logins: logins
      }));
      this._identityId = primaryIdentityId;
      if (guestIdentityId) {
        logger11.debug(`The guest identity ${guestIdentityId} has been successfully linked to the logins`);
        if (guestIdentityId === primaryIdentityId) {
          logger11.debug(`The guest identity ${guestIdentityId} has become the primary identity`);
        }
        await this._removeGuestIdentityId();
      }
      return {
        accessKeyId: AccessKeyId,
        secretAccessKey: SecretKey,
        sessionToken: SessionToken,
        expiration: Expiration,
        identityId: primaryIdentityId
      };
    };
    const credentials = credentialsProvider().catch(async (err) => {
      throw err;
    });
    return this._loadCredentials(credentials, "userPool", true, null);
  }
  _loadCredentials(credentials, source, authenticated, info) {
    const that = this;
    return new Promise((res, rej) => {
      credentials.then(async (credentials2) => {
        logger11.debug("Load credentials successfully", credentials2);
        if (this._identityId && !credentials2.identityId) {
          credentials2["identityId"] = this._identityId;
        }
        that._credentials = credentials2;
        that._credentials.authenticated = authenticated;
        that._credentials_source = source;
        that._nextCredentialsRefresh = new Date().getTime() + CREDENTIALS_TTL;
        if (source === "federated") {
          const user = Object.assign({ id: this._credentials.identityId }, info.user);
          const { provider, token, expires_at, identity_id } = info;
          try {
            this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
              provider,
              token,
              user,
              expires_at,
              identity_id
            }));
          } catch (e) {
            logger11.debug("Failed to put federated info into auth storage", e);
          }
        }
        if (source === "guest") {
          await this._setGuestIdentityId(credentials2.identityId);
        }
        res(that._credentials);
        return;
      }).catch((err) => {
        if (err) {
          logger11.debug("Failed to load credentials", credentials);
          logger11.debug("Error loading credentials", err);
          rej(err);
          return;
        }
      });
    });
  }
  set(params, source) {
    if (source === "session") {
      return this._setCredentialsFromSession(params);
    } else if (source === "federation") {
      return this._setCredentialsFromFederation(params);
    } else if (source === "guest") {
      return this._setCredentialsForGuest();
    } else {
      logger11.debug("no source specified for setting credentials");
      return Promise.reject("invalid source");
    }
  }
  async clear() {
    this._credentials = null;
    this._credentials_source = null;
    logger11.debug("removing aws-amplify-federatedInfo from storage");
    this._storage.removeItem("aws-amplify-federatedInfo");
  }
  async _getGuestIdentityId() {
    const { identityPoolId } = this._config;
    try {
      await this._storageSync;
      return this._storage.getItem(this._getCognitoIdentityIdStorageKey(identityPoolId));
    } catch (e) {
      logger11.debug("Failed to get the cached guest identityId", e);
    }
  }
  async _setGuestIdentityId(identityId) {
    const { identityPoolId } = this._config;
    try {
      await this._storageSync;
      this._storage.setItem(this._getCognitoIdentityIdStorageKey(identityPoolId), identityId);
    } catch (e) {
      logger11.debug("Failed to cache guest identityId", e);
    }
  }
  async _removeGuestIdentityId() {
    const { identityPoolId } = this._config;
    logger11.debug(`removing ${this._getCognitoIdentityIdStorageKey(identityPoolId)} from storage`);
    this._storage.removeItem(this._getCognitoIdentityIdStorageKey(identityPoolId));
  }
  shear(credentials) {
    return {
      accessKeyId: credentials.accessKeyId,
      sessionToken: credentials.sessionToken,
      secretAccessKey: credentials.secretAccessKey,
      identityId: credentials.identityId,
      authenticated: credentials.authenticated
    };
  }
};
var Credentials3 = new CredentialsClass(null);
Amplify.register(Credentials3);

// src/Providers/AWSCloudWatchProvider.ts
var logger12 = new ConsoleLogger("AWSCloudWatch");
var _AWSCloudWatchProvider = class {
  constructor(config) {
    this.configure(config);
    this._dataTracker = {
      eventUploadInProgress: false,
      logEvents: []
    };
    this._currentLogBatch = [];
    this._initiateLogPushInterval();
  }
  getProviderName() {
    return _AWSCloudWatchProvider.PROVIDER_NAME;
  }
  getCategoryName() {
    return _AWSCloudWatchProvider.CATEGORY;
  }
  getLogQueue() {
    return this._dataTracker.logEvents;
  }
  configure(config) {
    if (!config)
      return this._config || {};
    const conf = Object.assign({}, this._config, parseMobileHubConfig(config).Logging, config);
    this._config = conf;
    return this._config;
  }
  async createLogGroup(params) {
    logger12.debug("creating new log group in CloudWatch - ", params.logGroupName);
    const cmd = new CreateLogGroupCommand(params);
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const client = this._initCloudWatchLogs();
      const output = await client.send(cmd);
      return output;
    } catch (error) {
      logger12.error(`error creating log group - ${error}`);
      throw error;
    }
  }
  async getLogGroups(params) {
    logger12.debug("getting list of log groups");
    const cmd = new DescribeLogGroupsCommand(params);
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const client = this._initCloudWatchLogs();
      const output = await client.send(cmd);
      return output;
    } catch (error) {
      logger12.error(`error getting log group - ${error}`);
      throw error;
    }
  }
  async createLogStream(params) {
    logger12.debug("creating new log stream in CloudWatch - ", params.logStreamName);
    const cmd = new CreateLogStreamCommand(params);
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const client = this._initCloudWatchLogs();
      const output = await client.send(cmd);
      return output;
    } catch (error) {
      logger12.error(`error creating log stream - ${error}`);
      throw error;
    }
  }
  async getLogStreams(params) {
    logger12.debug("getting list of log streams");
    const cmd = new DescribeLogStreamsCommand(params);
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const client = this._initCloudWatchLogs();
      const output = await client.send(cmd);
      return output;
    } catch (error) {
      logger12.error(`error getting log stream - ${error}`);
      throw error;
    }
  }
  async getLogEvents(params) {
    logger12.debug("getting log events from stream - ", params.logStreamName);
    const cmd = new GetLogEventsCommand(params);
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const client = this._initCloudWatchLogs();
      const output = await client.send(cmd);
      return output;
    } catch (error) {
      logger12.error(`error getting log events - ${error}`);
      throw error;
    }
  }
  pushLogs(logs) {
    logger12.debug("pushing log events to Cloudwatch...");
    this._dataTracker.logEvents = [...this._dataTracker.logEvents, ...logs];
  }
  async _validateLogGroupExistsAndCreate(logGroupName) {
    if (this._dataTracker.verifiedLogGroup) {
      return this._dataTracker.verifiedLogGroup;
    }
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const currGroups = await this.getLogGroups({
        logGroupNamePrefix: logGroupName
      });
      if (!(typeof currGroups === "string") && currGroups.logGroups) {
        const foundGroups = currGroups.logGroups.filter((group) => group.logGroupName === logGroupName);
        if (foundGroups.length > 0) {
          this._dataTracker.verifiedLogGroup = foundGroups[0];
          return foundGroups[0];
        }
      }
      await this.createLogGroup({ logGroupName });
      return null;
    } catch (err) {
      const errString = `failure during log group search: ${err}`;
      logger12.error(errString);
      throw err;
    }
  }
  async _validateLogStreamExists(logGroupName, logStreamName) {
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      const currStreams = await this.getLogStreams({
        logGroupName,
        logStreamNamePrefix: logStreamName
      });
      if (currStreams.logStreams) {
        const foundStreams = currStreams.logStreams.filter((stream) => stream.logStreamName === logStreamName);
        if (foundStreams.length > 0) {
          this._nextSequenceToken = foundStreams[0].uploadSequenceToken;
          return foundStreams[0];
        }
      }
      await this.createLogStream({
        logGroupName,
        logStreamName
      });
      return null;
    } catch (err) {
      const errString = `failure during log stream search: ${err}`;
      logger12.error(errString);
      throw err;
    }
  }
  async _sendLogEvents(params) {
    try {
      const credentialsOK = await this._ensureCredentials();
      if (!credentialsOK) {
        throw new Error(NO_CREDS_ERROR_STRING);
      }
      logger12.debug("sending log events to stream - ", params.logStreamName);
      const cmd = new PutLogEventsCommand(params);
      const client = this._initCloudWatchLogs();
      const output = await client.send(cmd);
      return output;
    } catch (err) {
      const errString = `failure during log push: ${err}`;
      logger12.error(errString);
    }
  }
  _initCloudWatchLogs() {
    return new CloudWatchLogsClient({
      region: this._config.region,
      credentials: this._config.credentials,
      customUserAgent: getAmplifyUserAgent(),
      endpoint: this._config.endpoint
    });
  }
  async _ensureCredentials() {
    return await Credentials3.get().then((credentials) => {
      if (!credentials)
        return false;
      const cred = Credentials3.shear(credentials);
      logger12.debug("set credentials for logging", cred);
      this._config.credentials = cred;
      return true;
    }).catch((error) => {
      logger12.warn("ensure credentials error", error);
      return false;
    });
  }
  async _getNextSequenceToken() {
    if (this._nextSequenceToken && this._nextSequenceToken.length > 0) {
      return this._nextSequenceToken;
    }
    try {
      await this._validateLogGroupExistsAndCreate(this._config.logGroupName);
      const logStream = await this._validateLogStreamExists(this._config.logGroupName, this._config.logStreamName);
      if (!logStream) {
        this._nextSequenceToken = "";
        return "";
      }
      this._nextSequenceToken = logStream.uploadSequenceToken || "";
      return this._nextSequenceToken;
    } catch (err) {
      logger12.error(`failure while getting next sequence token: ${err}`);
      throw err;
    }
  }
  async _safeUploadLogEvents() {
    try {
      const seqToken = await this._getNextSequenceToken();
      const logBatch = this._currentLogBatch.length === 0 ? this._getBufferedBatchOfLogs() : this._currentLogBatch;
      const putLogsPayload = {
        logGroupName: this._config.logGroupName,
        logStreamName: this._config.logStreamName,
        logEvents: logBatch,
        sequenceToken: seqToken
      };
      this._dataTracker.eventUploadInProgress = true;
      const sendLogEventsResponse = await this._sendLogEvents(putLogsPayload);
      this._nextSequenceToken = sendLogEventsResponse.nextSequenceToken;
      this._dataTracker.eventUploadInProgress = false;
      this._currentLogBatch = [];
      return sendLogEventsResponse;
    } catch (err) {
      logger12.error(`error during _safeUploadLogEvents: ${err}`);
      if (RETRY_ERROR_CODES.includes(err.name)) {
        this._getNewSequenceTokenAndSubmit({
          logEvents: this._currentLogBatch,
          logGroupName: this._config.logGroupName,
          logStreamName: this._config.logStreamName
        });
      } else {
        this._dataTracker.eventUploadInProgress = false;
        throw err;
      }
    }
  }
  _getBufferedBatchOfLogs() {
    let currentEventIdx = 0;
    let totalByteSize = 0;
    while (currentEventIdx < this._dataTracker.logEvents.length) {
      const currentEvent = this._dataTracker.logEvents[currentEventIdx];
      const eventSize = currentEvent ? new TextEncoder().encode(currentEvent.message).length + AWS_CLOUDWATCH_BASE_BUFFER_SIZE : 0;
      if (eventSize > AWS_CLOUDWATCH_MAX_EVENT_SIZE) {
        const errString = `Log entry exceeds maximum size for CloudWatch logs. Log size: ${eventSize}. Truncating log message.`;
        logger12.warn(errString);
        currentEvent.message = currentEvent.message.substring(0, eventSize);
      }
      if (totalByteSize + eventSize > AWS_CLOUDWATCH_MAX_BATCH_EVENT_SIZE)
        break;
      totalByteSize += eventSize;
      currentEventIdx++;
    }
    this._currentLogBatch = this._dataTracker.logEvents.splice(0, currentEventIdx);
    return this._currentLogBatch;
  }
  async _getNewSequenceTokenAndSubmit(payload) {
    try {
      this._nextSequenceToken = "";
      this._dataTracker.eventUploadInProgress = true;
      const seqToken = await this._getNextSequenceToken();
      payload.sequenceToken = seqToken;
      const sendLogEventsRepsonse = await this._sendLogEvents(payload);
      this._dataTracker.eventUploadInProgress = false;
      this._currentLogBatch = [];
      return sendLogEventsRepsonse;
    } catch (err) {
      logger12.error(`error when retrying log submission with new sequence token: ${err}`);
      this._dataTracker.eventUploadInProgress = false;
      throw err;
    }
  }
  _initiateLogPushInterval() {
    if (this._timer) {
      clearInterval(this._timer);
    }
    this._timer = setInterval(async () => {
      try {
        if (this._getDocUploadPermissibility()) {
          await this._safeUploadLogEvents();
        }
      } catch (err) {
        logger12.error(`error when calling _safeUploadLogEvents in the timer interval - ${err}`);
      }
    }, 2e3);
  }
  _getDocUploadPermissibility() {
    return (this._dataTracker.logEvents.length !== 0 || this._currentLogBatch.length !== 0) && !this._dataTracker.eventUploadInProgress;
  }
};
var AWSCloudWatchProvider = _AWSCloudWatchProvider;
AWSCloudWatchProvider.PROVIDER_NAME = AWS_CLOUDWATCH_PROVIDER_NAME;
AWSCloudWatchProvider.CATEGORY = AWS_CLOUDWATCH_CATEGORY;

// src/RNComponents/index.ts
var Linking = {};
var AppState = {
  addEventListener: (action, handler) => void 0
};
var AsyncStorage = browserOrNode().isBrowser ? new StorageHelper().getStorage() : void 0;

// src/ServiceWorker/ServiceWorker.ts
var ServiceWorkerClass = class {
  constructor() {
    this._logger = new ConsoleLogger("ServiceWorker");
  }
  get serviceWorker() {
    return this._serviceWorker;
  }
  register(filePath = "/service-worker.js", scope = "/") {
    this._logger.debug(`registering ${filePath}`);
    this._logger.debug(`registering service worker with scope ${scope}`);
    return new Promise((resolve, reject) => {
      if (navigator && "serviceWorker" in navigator) {
        navigator.serviceWorker.register(filePath, {
          scope
        }).then((registration) => {
          if (registration.installing) {
            this._serviceWorker = registration.installing;
          } else if (registration.waiting) {
            this._serviceWorker = registration.waiting;
          } else if (registration.active) {
            this._serviceWorker = registration.active;
          }
          this._registration = registration;
          this._setupListeners();
          this._logger.debug(`Service Worker Registration Success: ${registration}`);
          return resolve(registration);
        }).catch((error) => {
          this._logger.debug(`Service Worker Registration Failed ${error}`);
          return reject(error);
        });
      } else {
        return reject(new Error("Service Worker not available"));
      }
    });
  }
  enablePush(publicKey) {
    if (!this._registration)
      throw new Error("Service Worker not registered");
    this._publicKey = publicKey;
    return new Promise((resolve, reject) => {
      if (browserOrNode().isBrowser) {
        this._registration.pushManager.getSubscription().then((subscription) => {
          if (subscription) {
            this._subscription = subscription;
            this._logger.debug(`User is subscribed to push: ${JSON.stringify(subscription)}`);
            resolve(subscription);
          } else {
            this._logger.debug(`User is NOT subscribed to push`);
            return this._registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this._urlB64ToUint8Array(publicKey)
            }).then((subscription2) => {
              this._subscription = subscription2;
              this._logger.debug(`User subscribed: ${JSON.stringify(subscription2)}`);
              resolve(subscription2);
            }).catch((error) => {
              this._logger.error(error);
            });
          }
        });
      } else {
        return reject(new Error("Service Worker not available"));
      }
    });
  }
  _urlB64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  send(message) {
    if (this._serviceWorker) {
      this._serviceWorker.postMessage(typeof message === "object" ? JSON.stringify(message) : message);
    }
  }
  _setupListeners() {
    this._serviceWorker.addEventListener("statechange", (event) => {
      const currentState = this._serviceWorker.state;
      this._logger.debug(`ServiceWorker statechange: ${currentState}`);
      if (Amplify.Analytics && typeof Amplify.Analytics.record === "function") {
        Amplify.Analytics.record({
          name: "ServiceWorker",
          attributes: {
            state: currentState
          }
        });
      }
    });
    this._serviceWorker.addEventListener("message", (event) => {
      this._logger.debug(`ServiceWorker message event: ${event}`);
    });
  }
};

// ../../node_modules/universal-cookie/es6/Cookies.js
var cookie2 = __toModule(require_cookie());

// ../../node_modules/universal-cookie/es6/utils.js
var cookie = __toModule(require_cookie());
function hasDocumentCookie() {
  return typeof document === "object" && typeof document.cookie === "string";
}
function parseCookies(cookies, options) {
  if (typeof cookies === "string") {
    return cookie.parse(cookies, options);
  } else if (typeof cookies === "object" && cookies !== null) {
    return cookies;
  } else {
    return {};
  }
}
function isParsingCookie(value, doNotParse) {
  if (typeof doNotParse === "undefined") {
    doNotParse = !value || value[0] !== "{" && value[0] !== "[" && value[0] !== '"';
  }
  return !doNotParse;
}
function readCookie(value, options) {
  if (options === void 0) {
    options = {};
  }
  var cleanValue = cleanupCookieValue(value);
  if (isParsingCookie(cleanValue, options.doNotParse)) {
    try {
      return JSON.parse(cleanValue);
    } catch (e) {
    }
  }
  return value;
}
function cleanupCookieValue(value) {
  if (value && value[0] === "j" && value[1] === ":") {
    return value.substr(2);
  }
  return value;
}

// ../../node_modules/universal-cookie/es6/Cookies.js
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var Cookies = function() {
  function Cookies2(cookies, options) {
    var _this = this;
    this.changeListeners = [];
    this.HAS_DOCUMENT_COOKIE = false;
    this.cookies = parseCookies(cookies, options);
    new Promise(function() {
      _this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();
    }).catch(function() {
    });
  }
  Cookies2.prototype._updateBrowserValues = function(parseOptions) {
    if (!this.HAS_DOCUMENT_COOKIE) {
      return;
    }
    this.cookies = cookie2.parse(document.cookie, parseOptions);
  };
  Cookies2.prototype._emitChange = function(params) {
    for (var i = 0; i < this.changeListeners.length; ++i) {
      this.changeListeners[i](params);
    }
  };
  Cookies2.prototype.get = function(name3, options, parseOptions) {
    if (options === void 0) {
      options = {};
    }
    this._updateBrowserValues(parseOptions);
    return readCookie(this.cookies[name3], options);
  };
  Cookies2.prototype.getAll = function(options, parseOptions) {
    if (options === void 0) {
      options = {};
    }
    this._updateBrowserValues(parseOptions);
    var result = {};
    for (var name_1 in this.cookies) {
      result[name_1] = readCookie(this.cookies[name_1], options);
    }
    return result;
  };
  Cookies2.prototype.set = function(name3, value, options) {
    var _a;
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    this.cookies = __assign5(__assign5({}, this.cookies), (_a = {}, _a[name3] = value, _a));
    if (this.HAS_DOCUMENT_COOKIE) {
      document.cookie = cookie2.serialize(name3, value, options);
    }
    this._emitChange({ name: name3, value, options });
  };
  Cookies2.prototype.remove = function(name3, options) {
    var finalOptions = options = __assign5(__assign5({}, options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
    this.cookies = __assign5({}, this.cookies);
    delete this.cookies[name3];
    if (this.HAS_DOCUMENT_COOKIE) {
      document.cookie = cookie2.serialize(name3, "", finalOptions);
    }
    this._emitChange({ name: name3, value: void 0, options });
  };
  Cookies2.prototype.addChangeListener = function(callback) {
    this.changeListeners.push(callback);
  };
  Cookies2.prototype.removeChangeListener = function(callback) {
    var idx = this.changeListeners.indexOf(callback);
    if (idx >= 0) {
      this.changeListeners.splice(idx, 1);
    }
  };
  return Cookies2;
}();
var Cookies_default = Cookies;

// ../../node_modules/universal-cookie/es6/index.js
var es6_default = Cookies_default;

// src/UniversalStorage/index.ts
var { isBrowser } = browserOrNode();
var UniversalStorage = class {
  constructor(context = {}) {
    this.cookies = new es6_default();
    this.store = isBrowser ? window.localStorage : Object.create(null);
    this.cookies = context.req ? new es6_default(context.req.headers.cookie) : new es6_default();
    Object.assign(this.store, this.cookies.getAll());
  }
  get length() {
    return Object.entries(this.store).length;
  }
  clear() {
    Array.from(new Array(this.length)).map((_, i) => this.key(i)).forEach((key) => this.removeItem(key));
  }
  getItem(key) {
    return this.getLocalItem(key);
  }
  getLocalItem(key) {
    return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
  }
  getUniversalItem(key) {
    return this.cookies.get(key);
  }
  key(index) {
    return Object.keys(this.store)[index];
  }
  removeItem(key) {
    this.removeLocalItem(key);
    this.removeUniversalItem(key);
  }
  removeLocalItem(key) {
    delete this.store[key];
  }
  removeUniversalItem(key) {
    this.cookies.remove(key, {
      path: "/"
    });
  }
  setItem(key, value) {
    this.setLocalItem(key, value);
    const tokenType = key.split(".").pop();
    switch (tokenType) {
      case "LastAuthUser":
      case "accessToken":
      case "refreshToken":
      case "idToken":
        isBrowser ? this.setUniversalItem(key, value) : this.setLocalItem(key, value);
    }
  }
  setLocalItem(key, value) {
    this.store[key] = value;
  }
  setUniversalItem(key, value) {
    this.cookies.set(key, value, {
      path: "/",
      sameSite: true,
      secure: window.location.hostname === "localhost" ? false : true
    });
  }
};

// src/constants.ts
var hasSymbol = typeof Symbol !== "undefined" && typeof Symbol.for === "function";
var INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER = hasSymbol ? Symbol.for("INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER") : "@@INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER";
var INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER = hasSymbol ? Symbol.for("INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER") : "@@INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER";
var USER_AGENT_HEADER = "x-amz-user-agent";

// src/index.ts
var Constants = {
  userAgent: Platform.userAgent
};
var src_default = Amplify;
export {
  AWSCloudWatchProvider,
  AWS_CLOUDWATCH_BASE_BUFFER_SIZE,
  AWS_CLOUDWATCH_CATEGORY,
  AWS_CLOUDWATCH_MAX_BATCH_EVENT_SIZE,
  AWS_CLOUDWATCH_MAX_EVENT_SIZE,
  AWS_CLOUDWATCH_PROVIDER_NAME,
  Amplify,
  AmplifyClass,
  AppState,
  AsyncStorage,
  ClientDevice,
  ConsoleLogger,
  Constants,
  Credentials3 as Credentials,
  CredentialsClass,
  DateUtils,
  FacebookOAuth2 as FacebookOAuth,
  GoogleOAuth2 as GoogleOAuth,
  Hub,
  I18n2 as I18n,
  INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER,
  INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER,
  JS,
  Linking,
  ConsoleLogger as Logger,
  MemoryStorage,
  Mutex_default as Mutex,
  NO_CREDS_ERROR_STRING,
  NonRetryableError,
  Parser,
  Platform,
  RETRY_ERROR_CODES,
  ReachabilityNavigator as Reachability,
  ServiceWorkerClass as ServiceWorker,
  Signer,
  StorageHelper,
  USER_AGENT_HEADER,
  UniversalStorage,
  browserOrNode,
  src_default as default,
  filenameToContentType,
  generateRandomString,
  getAmplifyUserAgent,
  invalidParameter,
  isEmpty,
  isStrictObject,
  isTextFile,
  isWebWorker,
  jitteredExponentialRetry,
  makeQuerablePromise,
  missingConfig,
  objectLessAttributes,
  parseMobileHubConfig,
  retry,
  sortByField,
  transferKeyToLowerCase,
  transferKeyToUpperCase,
  urlSafeDecode,
  urlSafeEncode
};
/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Christian Speckner <cnspeckn@googlemail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
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
/*! https://mths.be/punycode v1.3.2 by @mathias */
