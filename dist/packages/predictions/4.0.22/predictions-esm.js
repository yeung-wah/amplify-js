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
var __reExport = (target, module6, desc) => {
  if (module6 && typeof module6 === "object" || typeof module6 === "function") {
    for (let key of __getOwnPropNames(module6))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module6[key], enumerable: !(desc = __getOwnPropDesc(module6, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module6) => {
  return __reExport(__markAsModule(__defProp(module6 != null ? __create(__getProtoOf(module6)) : {}, "default", module6 && module6.__esModule && "default" in module6 ? { get: () => module6.default, enumerable: true } : { value: module6, enumerable: true })), module6);
};

// ../../node_modules/@aws-sdk/client-translate/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/@aws-sdk/client-translate/node_modules/tslib/tslib.js"(exports, module6) {
    var __extends7;
    var __assign7;
    var __rest7;
    var __decorate7;
    var __param7;
    var __metadata7;
    var __awaiter7;
    var __generator7;
    var __exportStar7;
    var __values7;
    var __read7;
    var __spread7;
    var __spreadArrays7;
    var __spreadArray6;
    var __await7;
    var __asyncGenerator7;
    var __asyncDelegator7;
    var __asyncValues7;
    var __makeTemplateObject7;
    var __importStar7;
    var __importDefault7;
    var __classPrivateFieldGet7;
    var __classPrivateFieldSet7;
    var __createBinding7;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module6 === "object" && typeof module6.exports === "object") {
        factory(createExporter(root, createExporter(module6.exports)));
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
      __extends7 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest7 = function(s, e) {
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
      __decorate7 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param7 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata7 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter7 = function(thisArg, _arguments, P, generator) {
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
      __generator7 = function(thisArg, body) {
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
      __exportStar7 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding7(o, m, p);
      };
      __createBinding7 = Object.create ? function(o, m, k, k2) {
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
      __values7 = function(o) {
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
      __read7 = function(o, n) {
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
      __spread7 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read7(arguments[i]));
        return ar;
      };
      __spreadArrays7 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray6 = function(to, from, pack) {
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
      __await7 = function(v) {
        return this instanceof __await7 ? (this.v = v, this) : new __await7(v);
      };
      __asyncGenerator7 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await7 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator7 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await7(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues7 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values7 === "function" ? __values7(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject7 = function(cooked, raw) {
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
      __importStar7 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding7(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault7 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet7 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends7);
      exporter("__assign", __assign7);
      exporter("__rest", __rest7);
      exporter("__decorate", __decorate7);
      exporter("__param", __param7);
      exporter("__metadata", __metadata7);
      exporter("__awaiter", __awaiter7);
      exporter("__generator", __generator7);
      exporter("__exportStar", __exportStar7);
      exporter("__createBinding", __createBinding7);
      exporter("__values", __values7);
      exporter("__read", __read7);
      exporter("__spread", __spread7);
      exporter("__spreadArrays", __spreadArrays7);
      exporter("__spreadArray", __spreadArray6);
      exporter("__await", __await7);
      exporter("__asyncGenerator", __asyncGenerator7);
      exporter("__asyncDelegator", __asyncDelegator7);
      exporter("__asyncValues", __asyncValues7);
      exporter("__makeTemplateObject", __makeTemplateObject7);
      exporter("__importStar", __importStar7);
      exporter("__importDefault", __importDefault7);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet7);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet7);
    });
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module6) {
    var __extends7;
    var __assign7;
    var __rest7;
    var __decorate7;
    var __param7;
    var __metadata7;
    var __awaiter7;
    var __generator7;
    var __exportStar7;
    var __values7;
    var __read7;
    var __spread7;
    var __spreadArrays7;
    var __await7;
    var __asyncGenerator7;
    var __asyncDelegator7;
    var __asyncValues7;
    var __makeTemplateObject7;
    var __importStar7;
    var __importDefault7;
    var __classPrivateFieldGet7;
    var __classPrivateFieldSet7;
    var __createBinding7;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module6 === "object" && typeof module6.exports === "object") {
        factory(createExporter(root, createExporter(module6.exports)));
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
      __extends7 = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest7 = function(s, e) {
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
      __decorate7 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param7 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata7 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter7 = function(thisArg, _arguments, P, generator) {
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
      __generator7 = function(thisArg, body) {
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
      __createBinding7 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar7 = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values7 = function(o) {
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
      __read7 = function(o, n) {
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
      __spread7 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read7(arguments[i]));
        return ar;
      };
      __spreadArrays7 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await7 = function(v) {
        return this instanceof __await7 ? (this.v = v, this) : new __await7(v);
      };
      __asyncGenerator7 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await7 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator7 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await7(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues7 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values7 === "function" ? __values7(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject7 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar7 = function(mod) {
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
      __importDefault7 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet7 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet7 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends7);
      exporter("__assign", __assign7);
      exporter("__rest", __rest7);
      exporter("__decorate", __decorate7);
      exporter("__param", __param7);
      exporter("__metadata", __metadata7);
      exporter("__awaiter", __awaiter7);
      exporter("__generator", __generator7);
      exporter("__exportStar", __exportStar7);
      exporter("__createBinding", __createBinding7);
      exporter("__values", __values7);
      exporter("__read", __read7);
      exporter("__spread", __spread7);
      exporter("__spreadArrays", __spreadArrays7);
      exporter("__await", __await7);
      exporter("__asyncGenerator", __asyncGenerator7);
      exporter("__asyncDelegator", __asyncDelegator7);
      exporter("__asyncValues", __asyncValues7);
      exporter("__makeTemplateObject", __makeTemplateObject7);
      exporter("__importStar", __importStar7);
      exporter("__importDefault", __importDefault7);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet7);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet7);
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
    var fromUtf87 = (input) => {
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
    exports.fromUtf8 = fromUtf87;
    var toUtf87 = (input) => {
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
    exports.toUtf8 = toUtf87;
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf87(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf87;
    function toUtf87(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf87;
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
    var fromUtf87 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf87;
    var toUtf87 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf87;
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
    var Sha2566 = function() {
      function Sha2567(secret) {
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
      Sha2567.prototype.update = function(toHash) {
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
      Sha2567.prototype.digest = function() {
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
      return Sha2567;
    }();
    exports.Sha256 = Sha2566;
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
    var fromUtf87 = (input) => {
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
    exports.fromUtf8 = fromUtf87;
    var toUtf87 = (input) => {
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
    exports.toUtf8 = toUtf87;
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi2 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf87(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf87;
    function toUtf87(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf87;
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
    var fromUtf87 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf87;
    var toUtf87 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf87;
  }
});

// ../../node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "../../node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs2();
    var fromUtf87 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf87(data);
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
    var Sha2566 = function() {
      function Sha2567(secret) {
        this.toHash = new Uint8Array(0);
        if (secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      }
      Sha2567.prototype.update = function(data) {
        if ((0, util_1.isEmptyData)(data)) {
          return;
        }
        var update = (0, util_1.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2567.prototype.digest = function() {
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
      return Sha2567;
    }();
    exports.Sha256 = Sha2566;
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
    var Sha2566 = function() {
      function Sha2567(secret) {
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
      Sha2567.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update((0, util_1.convertToBuffer)(toHash));
        } catch (e) {
          this.error = e;
        }
      };
      Sha2567.prototype.digestSync = function() {
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
      Sha2567.prototype.digest = function() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
          return (0, tslib_1.__generator)(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      return Sha2567;
    }();
    exports.Sha256 = Sha2566;
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
    var Sha2566 = function() {
      function Sha2567(secret) {
        if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new webCryptoSha256_1.Sha256(secret);
        } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new ie11Sha256_1.Sha256(secret);
        } else {
          this.hash = new sha256_js_1.Sha256(secret);
        }
      }
      Sha2567.prototype.update = function(data, encoding) {
        this.hash.update(data, encoding);
      };
      Sha2567.prototype.digest = function() {
        return this.hash.digest();
      };
      return Sha2567;
    }();
    exports.Sha256 = Sha2566;
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

// ../../node_modules/uuid/lib/rng-browser.js
var require_rng_browser = __commonJS({
  "../../node_modules/uuid/lib/rng-browser.js"(exports, module6) {
    var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (getRandomValues) {
      rnds8 = new Uint8Array(16);
      module6.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
      };
    } else {
      rnds = new Array(16);
      module6.exports = function mathRNG() {
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
  "../../node_modules/uuid/lib/bytesToUuid.js"(exports, module6) {
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
    module6.exports = bytesToUuid;
  }
});

// ../../node_modules/uuid/v1.js
var require_v1 = __commonJS({
  "../../node_modules/uuid/v1.js"(exports, module6) {
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
    module6.exports = v1;
  }
});

// ../../node_modules/uuid/v4.js
var require_v4 = __commonJS({
  "../../node_modules/uuid/v4.js"(exports, module6) {
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
    module6.exports = v42;
  }
});

// ../../node_modules/uuid/index.js
var require_uuid = __commonJS({
  "../../node_modules/uuid/index.js"(exports, module6) {
    var v1 = require_v1();
    var v42 = require_v4();
    var uuid = v42;
    uuid.v1 = v1;
    uuid.v4 = v42;
    module6.exports = uuid;
  }
});

// ../../node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "../../node_modules/bowser/es5.js"(exports, module6) {
    !function(e, t) {
      typeof exports == "object" && typeof module6 == "object" ? module6.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.bowser = t() : e.bowser = t();
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

// ../../node_modules/@aws-sdk/client-polly/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS({
  "../../node_modules/@aws-sdk/client-polly/node_modules/tslib/tslib.js"(exports, module6) {
    var __extends7;
    var __assign7;
    var __rest7;
    var __decorate7;
    var __param7;
    var __metadata7;
    var __awaiter7;
    var __generator7;
    var __exportStar7;
    var __values7;
    var __read7;
    var __spread7;
    var __spreadArrays7;
    var __spreadArray6;
    var __await7;
    var __asyncGenerator7;
    var __asyncDelegator7;
    var __asyncValues7;
    var __makeTemplateObject7;
    var __importStar7;
    var __importDefault7;
    var __classPrivateFieldGet7;
    var __classPrivateFieldSet7;
    var __createBinding7;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module6 === "object" && typeof module6.exports === "object") {
        factory(createExporter(root, createExporter(module6.exports)));
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
      __extends7 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest7 = function(s, e) {
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
      __decorate7 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param7 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata7 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter7 = function(thisArg, _arguments, P, generator) {
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
      __generator7 = function(thisArg, body) {
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
      __exportStar7 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding7(o, m, p);
      };
      __createBinding7 = Object.create ? function(o, m, k, k2) {
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
      __values7 = function(o) {
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
      __read7 = function(o, n) {
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
      __spread7 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read7(arguments[i]));
        return ar;
      };
      __spreadArrays7 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray6 = function(to, from, pack) {
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
      __await7 = function(v) {
        return this instanceof __await7 ? (this.v = v, this) : new __await7(v);
      };
      __asyncGenerator7 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await7 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator7 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await7(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues7 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values7 === "function" ? __values7(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject7 = function(cooked, raw) {
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
      __importStar7 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding7(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault7 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet7 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends7);
      exporter("__assign", __assign7);
      exporter("__rest", __rest7);
      exporter("__decorate", __decorate7);
      exporter("__param", __param7);
      exporter("__metadata", __metadata7);
      exporter("__awaiter", __awaiter7);
      exporter("__generator", __generator7);
      exporter("__exportStar", __exportStar7);
      exporter("__createBinding", __createBinding7);
      exporter("__values", __values7);
      exporter("__read", __read7);
      exporter("__spread", __spread7);
      exporter("__spreadArrays", __spreadArrays7);
      exporter("__spreadArray", __spreadArray6);
      exporter("__await", __await7);
      exporter("__asyncGenerator", __asyncGenerator7);
      exporter("__asyncDelegator", __asyncDelegator7);
      exporter("__asyncValues", __asyncValues7);
      exporter("__makeTemplateObject", __makeTemplateObject7);
      exporter("__importStar", __importStar7);
      exporter("__importDefault", __importDefault7);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet7);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet7);
    });
  }
});

// ../../node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "../../node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = require_tslib2();
    var util_1 = require_build();
    var index_1 = require_build6();
    var AwsCrc32 = function() {
      function AwsCrc322() {
        this.crc32 = new index_1.Crc32();
      }
      AwsCrc322.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash))
          return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
      };
      AwsCrc322.prototype.digest = function() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
          return (0, tslib_1.__generator)(this, function(_a) {
            return [2, (0, util_1.numToUint8)(this.crc32.digest())];
          });
        });
      };
      return AwsCrc322;
    }();
    exports.AwsCrc32 = AwsCrc32;
  }
});

// ../../node_modules/@aws-crypto/crc32/build/index.js
var require_build6 = __commonJS({
  "../../node_modules/@aws-crypto/crc32/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = require_tslib2();
    var util_1 = require_build();
    function crc32(data) {
      return new Crc323().update(data).digest();
    }
    exports.crc32 = crc32;
    var Crc323 = function() {
      function Crc324() {
        this.checksum = 4294967295;
      }
      Crc324.prototype.update = function(data) {
        var e_1, _a;
        try {
          for (var data_1 = (0, tslib_1.__values)(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var byte = data_1_1.value;
            this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return))
              _a.call(data_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return this;
      };
      Crc324.prototype.digest = function() {
        return (this.checksum ^ 4294967295) >>> 0;
      };
      return Crc324;
    }();
    exports.Crc32 = Crc323;
    var a_lookUpTable = [
      0,
      1996959894,
      3993919788,
      2567524794,
      124634137,
      1886057615,
      3915621685,
      2657392035,
      249268274,
      2044508324,
      3772115230,
      2547177864,
      162941995,
      2125561021,
      3887607047,
      2428444049,
      498536548,
      1789927666,
      4089016648,
      2227061214,
      450548861,
      1843258603,
      4107580753,
      2211677639,
      325883990,
      1684777152,
      4251122042,
      2321926636,
      335633487,
      1661365465,
      4195302755,
      2366115317,
      997073096,
      1281953886,
      3579855332,
      2724688242,
      1006888145,
      1258607687,
      3524101629,
      2768942443,
      901097722,
      1119000684,
      3686517206,
      2898065728,
      853044451,
      1172266101,
      3705015759,
      2882616665,
      651767980,
      1373503546,
      3369554304,
      3218104598,
      565507253,
      1454621731,
      3485111705,
      3099436303,
      671266974,
      1594198024,
      3322730930,
      2970347812,
      795835527,
      1483230225,
      3244367275,
      3060149565,
      1994146192,
      31158534,
      2563907772,
      4023717930,
      1907459465,
      112637215,
      2680153253,
      3904427059,
      2013776290,
      251722036,
      2517215374,
      3775830040,
      2137656763,
      141376813,
      2439277719,
      3865271297,
      1802195444,
      476864866,
      2238001368,
      4066508878,
      1812370925,
      453092731,
      2181625025,
      4111451223,
      1706088902,
      314042704,
      2344532202,
      4240017532,
      1658658271,
      366619977,
      2362670323,
      4224994405,
      1303535960,
      984961486,
      2747007092,
      3569037538,
      1256170817,
      1037604311,
      2765210733,
      3554079995,
      1131014506,
      879679996,
      2909243462,
      3663771856,
      1141124467,
      855842277,
      2852801631,
      3708648649,
      1342533948,
      654459306,
      3188396048,
      3373015174,
      1466479909,
      544179635,
      3110523913,
      3462522015,
      1591671054,
      702138776,
      2966460450,
      3352799412,
      1504918807,
      783551873,
      3082640443,
      3233442989,
      3988292384,
      2596254646,
      62317068,
      1957810842,
      3939845945,
      2647816111,
      81470997,
      1943803523,
      3814918930,
      2489596804,
      225274430,
      2053790376,
      3826175755,
      2466906013,
      167816743,
      2097651377,
      4027552580,
      2265490386,
      503444072,
      1762050814,
      4150417245,
      2154129355,
      426522225,
      1852507879,
      4275313526,
      2312317920,
      282753626,
      1742555852,
      4189708143,
      2394877945,
      397917763,
      1622183637,
      3604390888,
      2714866558,
      953729732,
      1340076626,
      3518719985,
      2797360999,
      1068828381,
      1219638859,
      3624741850,
      2936675148,
      906185462,
      1090812512,
      3747672003,
      2825379669,
      829329135,
      1181335161,
      3412177804,
      3160834842,
      628085408,
      1382605366,
      3423369109,
      3138078467,
      570562233,
      1426400815,
      3317316542,
      2998733608,
      733239954,
      1555261956,
      3268935591,
      3050360625,
      752459403,
      1541320221,
      2607071920,
      3965973030,
      1969922972,
      40735498,
      2617837225,
      3943577151,
      1913087877,
      83908371,
      2512341634,
      3803740692,
      2075208622,
      213261112,
      2463272603,
      3855990285,
      2094854071,
      198958881,
      2262029012,
      4057260610,
      1759359992,
      534414190,
      2176718541,
      4139329115,
      1873836001,
      414664567,
      2282248934,
      4279200368,
      1711684554,
      285281116,
      2405801727,
      4167216745,
      1634467795,
      376229701,
      2685067896,
      3608007406,
      1308918612,
      956543938,
      2808555105,
      3495958263,
      1231636301,
      1047427035,
      2932959818,
      3654703836,
      1088359270,
      936918e3,
      2847714899,
      3736837829,
      1202900863,
      817233897,
      3183342108,
      3401237130,
      1404277552,
      615818150,
      3134207493,
      3453421203,
      1423857449,
      601450431,
      3009837614,
      3294710456,
      1567103746,
      711928724,
      3020668471,
      3272380065,
      1510334235,
      755167117
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
    var aws_crc32_1 = require_aws_crc32();
    Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
      return aws_crc32_1.AwsCrc32;
    } });
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
  "../../node_modules/isarray/index.js"(exports, module6) {
    var toString = {}.toString;
    module6.exports = Array.isArray || function(arr) {
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
        return fromArrayBuffer2(that, value, encodingOrOffset, length);
      }
      if (typeof value === "string") {
        return fromString2(that, value, encodingOrOffset);
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
    function fromString2(that, string, encoding) {
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
    function fromArrayBuffer2(that, array, byteOffset, length) {
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
        out += toHex3(buf[i]);
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
    function toHex3(n) {
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

// ../../node_modules/@aws-sdk/client-rekognition/node_modules/tslib/tslib.js
var require_tslib4 = __commonJS({
  "../../node_modules/@aws-sdk/client-rekognition/node_modules/tslib/tslib.js"(exports, module6) {
    var __extends7;
    var __assign7;
    var __rest7;
    var __decorate7;
    var __param7;
    var __metadata7;
    var __awaiter7;
    var __generator7;
    var __exportStar7;
    var __values7;
    var __read7;
    var __spread7;
    var __spreadArrays7;
    var __spreadArray6;
    var __await7;
    var __asyncGenerator7;
    var __asyncDelegator7;
    var __asyncValues7;
    var __makeTemplateObject7;
    var __importStar7;
    var __importDefault7;
    var __classPrivateFieldGet7;
    var __classPrivateFieldSet7;
    var __createBinding7;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module6 === "object" && typeof module6.exports === "object") {
        factory(createExporter(root, createExporter(module6.exports)));
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
      __extends7 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest7 = function(s, e) {
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
      __decorate7 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param7 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata7 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter7 = function(thisArg, _arguments, P, generator) {
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
      __generator7 = function(thisArg, body) {
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
      __exportStar7 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding7(o, m, p);
      };
      __createBinding7 = Object.create ? function(o, m, k, k2) {
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
      __values7 = function(o) {
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
      __read7 = function(o, n) {
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
      __spread7 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read7(arguments[i]));
        return ar;
      };
      __spreadArrays7 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray6 = function(to, from, pack) {
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
      __await7 = function(v) {
        return this instanceof __await7 ? (this.v = v, this) : new __await7(v);
      };
      __asyncGenerator7 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await7 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator7 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await7(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues7 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values7 === "function" ? __values7(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject7 = function(cooked, raw) {
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
      __importStar7 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding7(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault7 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet7 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends7);
      exporter("__assign", __assign7);
      exporter("__rest", __rest7);
      exporter("__decorate", __decorate7);
      exporter("__param", __param7);
      exporter("__metadata", __metadata7);
      exporter("__awaiter", __awaiter7);
      exporter("__generator", __generator7);
      exporter("__exportStar", __exportStar7);
      exporter("__createBinding", __createBinding7);
      exporter("__values", __values7);
      exporter("__read", __read7);
      exporter("__spread", __spread7);
      exporter("__spreadArrays", __spreadArrays7);
      exporter("__spreadArray", __spreadArray6);
      exporter("__await", __await7);
      exporter("__asyncGenerator", __asyncGenerator7);
      exporter("__asyncDelegator", __asyncDelegator7);
      exporter("__asyncValues", __asyncValues7);
      exporter("__makeTemplateObject", __makeTemplateObject7);
      exporter("__importStar", __importStar7);
      exporter("__importDefault", __importDefault7);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet7);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet7);
    });
  }
});

// ../../node_modules/@aws-sdk/client-textract/node_modules/tslib/tslib.js
var require_tslib5 = __commonJS({
  "../../node_modules/@aws-sdk/client-textract/node_modules/tslib/tslib.js"(exports, module6) {
    var __extends7;
    var __assign7;
    var __rest7;
    var __decorate7;
    var __param7;
    var __metadata7;
    var __awaiter7;
    var __generator7;
    var __exportStar7;
    var __values7;
    var __read7;
    var __spread7;
    var __spreadArrays7;
    var __spreadArray6;
    var __await7;
    var __asyncGenerator7;
    var __asyncDelegator7;
    var __asyncValues7;
    var __makeTemplateObject7;
    var __importStar7;
    var __importDefault7;
    var __classPrivateFieldGet7;
    var __classPrivateFieldSet7;
    var __createBinding7;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module6 === "object" && typeof module6.exports === "object") {
        factory(createExporter(root, createExporter(module6.exports)));
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
      __extends7 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest7 = function(s, e) {
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
      __decorate7 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param7 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata7 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter7 = function(thisArg, _arguments, P, generator) {
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
      __generator7 = function(thisArg, body) {
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
      __exportStar7 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding7(o, m, p);
      };
      __createBinding7 = Object.create ? function(o, m, k, k2) {
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
      __values7 = function(o) {
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
      __read7 = function(o, n) {
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
      __spread7 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read7(arguments[i]));
        return ar;
      };
      __spreadArrays7 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray6 = function(to, from, pack) {
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
      __await7 = function(v) {
        return this instanceof __await7 ? (this.v = v, this) : new __await7(v);
      };
      __asyncGenerator7 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await7 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator7 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await7(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues7 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values7 === "function" ? __values7(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject7 = function(cooked, raw) {
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
      __importStar7 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding7(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault7 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet7 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends7);
      exporter("__assign", __assign7);
      exporter("__rest", __rest7);
      exporter("__decorate", __decorate7);
      exporter("__param", __param7);
      exporter("__metadata", __metadata7);
      exporter("__awaiter", __awaiter7);
      exporter("__generator", __generator7);
      exporter("__exportStar", __exportStar7);
      exporter("__createBinding", __createBinding7);
      exporter("__values", __values7);
      exporter("__read", __read7);
      exporter("__spread", __spread7);
      exporter("__spreadArrays", __spreadArrays7);
      exporter("__spreadArray", __spreadArray6);
      exporter("__await", __await7);
      exporter("__asyncGenerator", __asyncGenerator7);
      exporter("__asyncDelegator", __asyncDelegator7);
      exporter("__asyncValues", __asyncValues7);
      exporter("__makeTemplateObject", __makeTemplateObject7);
      exporter("__importStar", __importStar7);
      exporter("__importDefault", __importDefault7);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet7);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet7);
    });
  }
});

// ../../node_modules/@aws-sdk/client-comprehend/node_modules/tslib/tslib.js
var require_tslib6 = __commonJS({
  "../../node_modules/@aws-sdk/client-comprehend/node_modules/tslib/tslib.js"(exports, module6) {
    var __extends7;
    var __assign7;
    var __rest7;
    var __decorate7;
    var __param7;
    var __metadata7;
    var __awaiter7;
    var __generator7;
    var __exportStar7;
    var __values7;
    var __read7;
    var __spread7;
    var __spreadArrays7;
    var __spreadArray6;
    var __await7;
    var __asyncGenerator7;
    var __asyncDelegator7;
    var __asyncValues7;
    var __makeTemplateObject7;
    var __importStar7;
    var __importDefault7;
    var __classPrivateFieldGet7;
    var __classPrivateFieldSet7;
    var __createBinding7;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module6 === "object" && typeof module6.exports === "object") {
        factory(createExporter(root, createExporter(module6.exports)));
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
      __extends7 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest7 = function(s, e) {
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
      __decorate7 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param7 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata7 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter7 = function(thisArg, _arguments, P, generator) {
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
      __generator7 = function(thisArg, body) {
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
      __exportStar7 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding7(o, m, p);
      };
      __createBinding7 = Object.create ? function(o, m, k, k2) {
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
      __values7 = function(o) {
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
      __read7 = function(o, n) {
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
      __spread7 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read7(arguments[i]));
        return ar;
      };
      __spreadArrays7 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray6 = function(to, from, pack) {
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
      __await7 = function(v) {
        return this instanceof __await7 ? (this.v = v, this) : new __await7(v);
      };
      __asyncGenerator7 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await7 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator7 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await7(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues7 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values7 === "function" ? __values7(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject7 = function(cooked, raw) {
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
      __importStar7 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding7(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault7 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet7 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends7);
      exporter("__assign", __assign7);
      exporter("__rest", __rest7);
      exporter("__decorate", __decorate7);
      exporter("__param", __param7);
      exporter("__metadata", __metadata7);
      exporter("__awaiter", __awaiter7);
      exporter("__generator", __generator7);
      exporter("__exportStar", __exportStar7);
      exporter("__createBinding", __createBinding7);
      exporter("__values", __values7);
      exporter("__read", __read7);
      exporter("__spread", __spread7);
      exporter("__spreadArrays", __spreadArrays7);
      exporter("__spreadArray", __spreadArray6);
      exporter("__await", __await7);
      exporter("__asyncGenerator", __asyncGenerator7);
      exporter("__asyncDelegator", __asyncDelegator7);
      exporter("__asyncValues", __asyncValues7);
      exporter("__makeTemplateObject", __makeTemplateObject7);
      exporter("__importStar", __importStar7);
      exporter("__importDefault", __importDefault7);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet7);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet7);
    });
  }
});

// src/Predictions.ts
import { Amplify, ConsoleLogger as Logger } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger = new Logger("Predictions");
var PredictionsClass = class {
  constructor(options) {
    this._options = options;
    this._convertPluggables = [];
    this._identifyPluggables = [];
    this._interpretPluggables = [];
  }
  getModuleName() {
    return "Predictions";
  }
  addPluggable(pluggable) {
    if (this.getPluggable(pluggable.getProviderName())) {
      throw new Error(`Pluggable with name ${pluggable.getProviderName()} has already been added.`);
    }
    let pluggableAdded = false;
    if (this.implementsConvertPluggable(pluggable)) {
      this._convertPluggables.push(pluggable);
      pluggableAdded = true;
    }
    if (this.implementsIdentifyPluggable(pluggable)) {
      this._identifyPluggables.push(pluggable);
      pluggableAdded = true;
    }
    if (this.implementsInterpretPluggable(pluggable)) {
      this._interpretPluggables.push(pluggable);
      pluggableAdded = true;
    }
    if (pluggableAdded) {
      this.configurePluggable(pluggable);
    }
  }
  getPluggable(providerName) {
    const pluggable = this.getAllProviders().find((pluggable2) => pluggable2.getProviderName() === providerName);
    if (pluggable === void 0) {
      logger.debug("No plugin found with providerName=>", providerName);
      return null;
    } else
      return pluggable;
  }
  removePluggable(providerName) {
    this._convertPluggables = this._convertPluggables.filter((pluggable) => pluggable.getProviderName() !== providerName);
    this._identifyPluggables = this._identifyPluggables.filter((pluggable) => pluggable.getProviderName() !== providerName);
    this._interpretPluggables = this._interpretPluggables.filter((pluggable) => pluggable.getProviderName() !== providerName);
    return;
  }
  configure(options) {
    let predictionsConfig = options ? options.predictions || options : {};
    predictionsConfig = { ...predictionsConfig, ...options };
    this._options = Object.assign({}, this._options, predictionsConfig);
    logger.debug("configure Predictions", this._options);
    this.getAllProviders().forEach((pluggable) => this.configurePluggable(pluggable));
  }
  interpret(input, options) {
    const pluggableToExecute = this.getPluggableToExecute(this._interpretPluggables, options);
    return pluggableToExecute.interpret(input);
  }
  convert(input, options) {
    const pluggableToExecute = this.getPluggableToExecute(this._convertPluggables, options);
    return pluggableToExecute.convert(input);
  }
  identify(input, options) {
    const pluggableToExecute = this.getPluggableToExecute(this._identifyPluggables, options);
    return pluggableToExecute.identify(input);
  }
  getPluggableToExecute(pluggables, providerOptions) {
    if (providerOptions && providerOptions.providerName) {
      return [...pluggables].find((pluggable) => pluggable.getProviderName() === providerOptions.providerName);
    } else {
      if (pluggables.length === 1) {
        return pluggables[0];
      } else {
        throw new Error("More than one or no providers are configured, Either specify a provider name or configure exactly one provider");
      }
    }
  }
  getAllProviders() {
    return [
      ...this._convertPluggables,
      ...this._identifyPluggables,
      ...this._interpretPluggables
    ];
  }
  configurePluggable(pluggable) {
    const categoryConfig = Object.assign({}, this._options["predictions"], this._options[pluggable.getCategory().toLowerCase()]);
    pluggable.configure(categoryConfig);
  }
  implementsConvertPluggable(obj) {
    return obj && typeof obj.convert === "function";
  }
  implementsIdentifyPluggable(obj) {
    return obj && typeof obj.identify === "function";
  }
  implementsInterpretPluggable(obj) {
    return obj && typeof obj.interpret === "function";
  }
};
var Predictions = new PredictionsClass({});
Amplify.register(Predictions);

// src/types/Predictions.ts
var InterpretTextCategories;
(function(InterpretTextCategories2) {
  InterpretTextCategories2["ALL"] = "ALL";
  InterpretTextCategories2["LANGUAGE"] = "LANGUAGE";
  InterpretTextCategories2["ENTITIES"] = "ENTITIES";
  InterpretTextCategories2["SENTIMENT"] = "SENTIMENT";
  InterpretTextCategories2["SYNTAX"] = "SYNTAX";
  InterpretTextCategories2["KEY_PHRASES"] = "KEY_PHRASES";
})(InterpretTextCategories || (InterpretTextCategories = {}));
function isIdentifyFromCollection(obj) {
  const key = "collection";
  const keyId = "collectionId";
  return obj && (obj.hasOwnProperty(key) || obj.hasOwnProperty(keyId));
}
function isIdentifyCelebrities(obj) {
  const key = "celebrityDetection";
  return obj && obj.hasOwnProperty(key);
}
function isTranslateTextInput(obj) {
  const key = "translateText";
  return obj && obj.hasOwnProperty(key);
}
function isTextToSpeechInput(obj) {
  const key = "textToSpeech";
  return obj && obj.hasOwnProperty(key);
}
function isSpeechToTextInput(obj) {
  const key = "transcription";
  return obj && obj.hasOwnProperty(key);
}
function isStorageSource(obj) {
  const key = "key";
  return obj && obj.hasOwnProperty(key);
}
function isFileSource(obj) {
  const key = "file";
  return obj && obj.hasOwnProperty(key);
}
function isBytesSource(obj) {
  const key = "bytes";
  return obj && obj.hasOwnProperty(key);
}
function isIdentifyTextInput(obj) {
  const key = "text";
  return obj && obj.hasOwnProperty(key);
}
function isIdentifyLabelsInput(obj) {
  const key = "labels";
  return obj && obj.hasOwnProperty(key);
}
function isIdentifyEntitiesInput(obj) {
  const key = "entities";
  return obj && obj.hasOwnProperty(key);
}
function isInterpretTextInput(obj) {
  const key = "text";
  return obj && obj.hasOwnProperty(key);
}

// src/types/Providers/AbstractPredictionsProvider.ts
import { ConsoleLogger as Logger2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger2 = new Logger2("Amplify");
var AbstractPredictionsProvider = class {
  configure(config) {
    logger2.debug("configure AbstractPredictionsProvider", { config });
    this._config = config;
    return config;
  }
};

// src/types/Providers/AbstractConvertPredictionsProvider.ts
import { ConsoleLogger as Logger3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger3 = new Logger3("AbstractConvertPredictionsProvider");
var AbstractConvertPredictionsProvider = class extends AbstractPredictionsProvider {
  getCategory() {
    return "Convert";
  }
  convert(input) {
    if (isTranslateTextInput(input)) {
      logger3.debug("translateText");
      return this.translateText(input);
    } else if (isTextToSpeechInput(input)) {
      logger3.debug("textToSpeech");
      return this.convertTextToSpeech(input);
    } else if (isSpeechToTextInput(input)) {
      logger3.debug("textToSpeech");
      return this.convertSpeechToText(input);
    }
  }
  translateText(translateTextInput) {
    throw new Error("convertText is not implemented by this provider");
  }
  convertTextToSpeech(textToSpeechInput) {
    throw new Error("convertTextToSpeech is not implemented by this provider");
  }
  convertSpeechToText(speechToTextInput) {
    throw new Error("convertSpeechToText is not implemented by this provider");
  }
};

// ../../node_modules/@aws-sdk/client-translate/node_modules/tslib/modules/index.js
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

// ../../node_modules/@aws-sdk/client-translate/dist/es/package.json
var name = "@aws-sdk/client-translate";
var description = "AWS SDK for JavaScript Translate Client for Node.js, Browser and React Native";
var version = "3.6.1";
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
  tslib: "^2.0.0",
  uuid: "^3.0.0"
};
var devDependencies = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@types/node": "^12.7.5",
  "@types/uuid": "^3.0.0",
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
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-translate";
var repository = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-translate"
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

// ../../node_modules/@aws-sdk/client-translate/dist/es/runtimeConfig.browser.js
var import_sha256_browser = __toModule(require_build5());

// ../../node_modules/tslib/modules/index.js
var import_tslib2 = __toModule(require_tslib2());
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

// ../../node_modules/@aws-sdk/client-translate/dist/es/runtimeConfig.browser.js
var import_util_utf8_browser = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-translate/dist/es/endpoints.js
var AWS_TEMPLATE = "translate.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "translate.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "translate.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "translate.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "translate.{region}.amazonaws.com";
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
    case "ap-east-1":
      regionInfo = {
        hostname: "translate.ap-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "translate.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "translate.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "translate.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "translate.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "translate.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "translate.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "translate.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "translate.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "translate.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "translate.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "translate.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "translate.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1-fips":
      regionInfo = {
        hostname: "translate-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "translate.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2-fips":
      regionInfo = {
        hostname: "translate-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "translate.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-gov-west-1-fips":
      regionInfo = {
        hostname: "translate-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "translate.us-iso-east-1.c2s.ic.gov",
        partition: "aws-iso"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "translate.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "translate.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2-fips":
      regionInfo = {
        hostname: "translate-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
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
  return Promise.resolve(__assign({ signingService: "translate" }, regionInfo));
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

// ../../node_modules/@aws-sdk/client-translate/dist/es/runtimeConfig.shared.js
var ClientSharedValues = {
  apiVersion: "2017-07-01",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Translate",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-translate/dist/es/runtimeConfig.browser.js
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
        var clientName, commandName, inputFilterSensitiveLog, logger6, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger6 = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
              return [4, next(args)];
            case 1:
              response = _b.sent();
              if (!logger6) {
                return [2, response];
              }
              if (typeof logger6.info === "function") {
                _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = __rest2(_a, ["$metadata"]);
                logger6.info({
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
  var hash = new ctor(secret);
  hash.update(data);
  return hash.digest();
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
      var name6 = _f.value;
      var lname = name6.toLowerCase();
      if (lname.substr(0, 6) === "x-amz-" && !((_b = options.unhoistableHeaders) === null || _b === void 0 ? void 0 : _b.has(lname))) {
        query[name6] = headers[name6];
        delete headers[name6];
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
      var region, _d, _e, shortDate, longDate, scope, hashedPayload, hash, hashedHeaders, _f, stringToSign;
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
    return __awaiter2(this, void 0, void 0, function() {
      var credentials, region, _d, shortDate, hash, _e, _f, _g;
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
    return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery(request) + "\n" + sortedHeaders.map(function(name6) {
      return name6 + ":" + canonicalHeaders[name6];
    }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
  };
  SignatureV42.prototype.createStringToSign = function(longDate, credentialScope, canonicalRequest) {
    return __awaiter2(this, void 0, void 0, function() {
      var hash, hashedRequest;
      return __generator2(this, function(_a) {
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
    return __awaiter2(this, void 0, void 0, function() {
      var stringToSign, hash, _a, _b, _c;
      return __generator2(this, function(_d) {
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
  var _b = __read2(_a, 2), name6 = _b[0], version6 = _b[1];
  var prefixSeparatorIndex = name6.indexOf("/");
  var prefix = name6.substring(0, prefixSeparatorIndex);
  var uaName = name6.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version6].filter(function(item) {
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
      var name6 = options.name, override = options.override;
      var entry = __assign2({ step: "initialize", priority: "normal", middleware }, options);
      if (name6) {
        if (entriesNameSet.has(name6)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name6 + "'");
          var toOverrideIndex = absoluteEntries.findIndex(function(entry2) {
            return entry2.name === name6;
          });
          var toOverride = absoluteEntries[toOverrideIndex];
          if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
            throw new Error('"' + name6 + '" middleware with ' + toOverride.priority + " priority in " + toOverride.step + " step cannot be " + ("overridden by same-name middleware with " + entry.priority + " priority in " + entry.step + " step."));
          }
          absoluteEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name6);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: function(middleware, options) {
      var name6 = options.name, override = options.override;
      var entry = __assign2({ middleware }, options);
      if (name6) {
        if (entriesNameSet.has(name6)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name6 + "'");
          var toOverrideIndex = relativeEntries.findIndex(function(entry2) {
            return entry2.name === name6;
          });
          var toOverride = relativeEntries[toOverrideIndex];
          if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
            throw new Error('"' + name6 + '" middleware ' + toOverride.relation + ' "' + toOverride.toMiddleware + '" middleware cannot be overridden ' + ("by same-name middleware " + entry.relation + ' "' + entry.toMiddleware + '" middleware.'));
          }
          relativeEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name6);
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
        var tags = entry.tags, name6 = entry.name;
        if (tags && tags.includes(toRemove)) {
          if (name6)
            entriesNameSet.delete(name6);
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

// ../../node_modules/@aws-sdk/smithy-client/dist/es/constants.js
var SENSITIVE_STRING = "***SensitiveInformation***";

// ../../node_modules/@aws-sdk/client-translate/dist/es/TranslateClient.js
var TranslateClient = function(_super) {
  __extends(TranslateClient2, _super);
  function TranslateClient2(configuration) {
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
  TranslateClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return TranslateClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-translate/dist/es/models/models_0.js
var Term;
(function(Term2) {
  Term2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Term || (Term = {}));
var AppliedTerminology;
(function(AppliedTerminology2) {
  AppliedTerminology2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AppliedTerminology || (AppliedTerminology = {}));
var ConflictException;
(function(ConflictException2) {
  ConflictException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
var EncryptionKeyType;
(function(EncryptionKeyType2) {
  EncryptionKeyType2["KMS"] = "KMS";
})(EncryptionKeyType || (EncryptionKeyType = {}));
var EncryptionKey;
(function(EncryptionKey2) {
  EncryptionKey2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(EncryptionKey || (EncryptionKey = {}));
var ParallelDataFormat;
(function(ParallelDataFormat2) {
  ParallelDataFormat2["CSV"] = "CSV";
  ParallelDataFormat2["TMX"] = "TMX";
  ParallelDataFormat2["TSV"] = "TSV";
})(ParallelDataFormat || (ParallelDataFormat = {}));
var ParallelDataConfig;
(function(ParallelDataConfig2) {
  ParallelDataConfig2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ParallelDataConfig || (ParallelDataConfig = {}));
var CreateParallelDataRequest;
(function(CreateParallelDataRequest2) {
  CreateParallelDataRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateParallelDataRequest || (CreateParallelDataRequest = {}));
var ParallelDataStatus;
(function(ParallelDataStatus2) {
  ParallelDataStatus2["ACTIVE"] = "ACTIVE";
  ParallelDataStatus2["CREATING"] = "CREATING";
  ParallelDataStatus2["DELETING"] = "DELETING";
  ParallelDataStatus2["FAILED"] = "FAILED";
  ParallelDataStatus2["UPDATING"] = "UPDATING";
})(ParallelDataStatus || (ParallelDataStatus = {}));
var CreateParallelDataResponse;
(function(CreateParallelDataResponse2) {
  CreateParallelDataResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateParallelDataResponse || (CreateParallelDataResponse = {}));
var InternalServerException;
(function(InternalServerException3) {
  InternalServerException3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InternalServerException || (InternalServerException = {}));
var InvalidParameterValueException;
(function(InvalidParameterValueException2) {
  InvalidParameterValueException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidParameterValueException || (InvalidParameterValueException = {}));
var InvalidRequestException;
(function(InvalidRequestException3) {
  InvalidRequestException3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidRequestException || (InvalidRequestException = {}));
var LimitExceededException;
(function(LimitExceededException4) {
  LimitExceededException4.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
var TooManyRequestsException;
(function(TooManyRequestsException3) {
  TooManyRequestsException3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TooManyRequestsException || (TooManyRequestsException = {}));
var ConcurrentModificationException;
(function(ConcurrentModificationException3) {
  ConcurrentModificationException3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
var DeleteParallelDataRequest;
(function(DeleteParallelDataRequest2) {
  DeleteParallelDataRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteParallelDataRequest || (DeleteParallelDataRequest = {}));
var DeleteParallelDataResponse;
(function(DeleteParallelDataResponse2) {
  DeleteParallelDataResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteParallelDataResponse || (DeleteParallelDataResponse = {}));
var ResourceNotFoundException;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
var DeleteTerminologyRequest;
(function(DeleteTerminologyRequest2) {
  DeleteTerminologyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteTerminologyRequest || (DeleteTerminologyRequest = {}));
var DescribeTextTranslationJobRequest;
(function(DescribeTextTranslationJobRequest2) {
  DescribeTextTranslationJobRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeTextTranslationJobRequest || (DescribeTextTranslationJobRequest = {}));
var InputDataConfig;
(function(InputDataConfig3) {
  InputDataConfig3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InputDataConfig || (InputDataConfig = {}));
var JobDetails;
(function(JobDetails2) {
  JobDetails2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JobDetails || (JobDetails = {}));
var JobStatus;
(function(JobStatus4) {
  JobStatus4["COMPLETED"] = "COMPLETED";
  JobStatus4["COMPLETED_WITH_ERROR"] = "COMPLETED_WITH_ERROR";
  JobStatus4["FAILED"] = "FAILED";
  JobStatus4["IN_PROGRESS"] = "IN_PROGRESS";
  JobStatus4["STOPPED"] = "STOPPED";
  JobStatus4["STOP_REQUESTED"] = "STOP_REQUESTED";
  JobStatus4["SUBMITTED"] = "SUBMITTED";
})(JobStatus || (JobStatus = {}));
var OutputDataConfig;
(function(OutputDataConfig3) {
  OutputDataConfig3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(OutputDataConfig || (OutputDataConfig = {}));
var TextTranslationJobProperties;
(function(TextTranslationJobProperties2) {
  TextTranslationJobProperties2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TextTranslationJobProperties || (TextTranslationJobProperties = {}));
var DescribeTextTranslationJobResponse;
(function(DescribeTextTranslationJobResponse2) {
  DescribeTextTranslationJobResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DescribeTextTranslationJobResponse || (DescribeTextTranslationJobResponse = {}));
var GetParallelDataRequest;
(function(GetParallelDataRequest2) {
  GetParallelDataRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetParallelDataRequest || (GetParallelDataRequest = {}));
var ParallelDataDataLocation;
(function(ParallelDataDataLocation2) {
  ParallelDataDataLocation2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ParallelDataDataLocation || (ParallelDataDataLocation = {}));
var ParallelDataProperties;
(function(ParallelDataProperties2) {
  ParallelDataProperties2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ParallelDataProperties || (ParallelDataProperties = {}));
var GetParallelDataResponse;
(function(GetParallelDataResponse2) {
  GetParallelDataResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetParallelDataResponse || (GetParallelDataResponse = {}));
var TerminologyDataFormat;
(function(TerminologyDataFormat2) {
  TerminologyDataFormat2["CSV"] = "CSV";
  TerminologyDataFormat2["TMX"] = "TMX";
})(TerminologyDataFormat || (TerminologyDataFormat = {}));
var GetTerminologyRequest;
(function(GetTerminologyRequest2) {
  GetTerminologyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetTerminologyRequest || (GetTerminologyRequest = {}));
var TerminologyDataLocation;
(function(TerminologyDataLocation2) {
  TerminologyDataLocation2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TerminologyDataLocation || (TerminologyDataLocation = {}));
var TerminologyProperties;
(function(TerminologyProperties2) {
  TerminologyProperties2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TerminologyProperties || (TerminologyProperties = {}));
var GetTerminologyResponse;
(function(GetTerminologyResponse2) {
  GetTerminologyResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetTerminologyResponse || (GetTerminologyResponse = {}));
var MergeStrategy;
(function(MergeStrategy2) {
  MergeStrategy2["OVERWRITE"] = "OVERWRITE";
})(MergeStrategy || (MergeStrategy = {}));
var TerminologyData;
(function(TerminologyData2) {
  TerminologyData2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.File && { File: SENSITIVE_STRING });
  };
})(TerminologyData || (TerminologyData = {}));
var ImportTerminologyRequest;
(function(ImportTerminologyRequest2) {
  ImportTerminologyRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.TerminologyData && { TerminologyData: TerminologyData.filterSensitiveLog(obj.TerminologyData) });
  };
})(ImportTerminologyRequest || (ImportTerminologyRequest = {}));
var ImportTerminologyResponse;
(function(ImportTerminologyResponse2) {
  ImportTerminologyResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ImportTerminologyResponse || (ImportTerminologyResponse = {}));
var ListParallelDataRequest;
(function(ListParallelDataRequest2) {
  ListParallelDataRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListParallelDataRequest || (ListParallelDataRequest = {}));
var ListParallelDataResponse;
(function(ListParallelDataResponse2) {
  ListParallelDataResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListParallelDataResponse || (ListParallelDataResponse = {}));
var ListTerminologiesRequest;
(function(ListTerminologiesRequest2) {
  ListTerminologiesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTerminologiesRequest || (ListTerminologiesRequest = {}));
var ListTerminologiesResponse;
(function(ListTerminologiesResponse2) {
  ListTerminologiesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTerminologiesResponse || (ListTerminologiesResponse = {}));
var InvalidFilterException;
(function(InvalidFilterException3) {
  InvalidFilterException3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidFilterException || (InvalidFilterException = {}));
var TextTranslationJobFilter;
(function(TextTranslationJobFilter2) {
  TextTranslationJobFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TextTranslationJobFilter || (TextTranslationJobFilter = {}));
var ListTextTranslationJobsRequest;
(function(ListTextTranslationJobsRequest2) {
  ListTextTranslationJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTextTranslationJobsRequest || (ListTextTranslationJobsRequest = {}));
var ListTextTranslationJobsResponse;
(function(ListTextTranslationJobsResponse2) {
  ListTextTranslationJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTextTranslationJobsResponse || (ListTextTranslationJobsResponse = {}));
var StartTextTranslationJobRequest;
(function(StartTextTranslationJobRequest2) {
  StartTextTranslationJobRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StartTextTranslationJobRequest || (StartTextTranslationJobRequest = {}));
var StartTextTranslationJobResponse;
(function(StartTextTranslationJobResponse2) {
  StartTextTranslationJobResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StartTextTranslationJobResponse || (StartTextTranslationJobResponse = {}));
var UnsupportedLanguagePairException;
(function(UnsupportedLanguagePairException2) {
  UnsupportedLanguagePairException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UnsupportedLanguagePairException || (UnsupportedLanguagePairException = {}));
var StopTextTranslationJobRequest;
(function(StopTextTranslationJobRequest2) {
  StopTextTranslationJobRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StopTextTranslationJobRequest || (StopTextTranslationJobRequest = {}));
var StopTextTranslationJobResponse;
(function(StopTextTranslationJobResponse2) {
  StopTextTranslationJobResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StopTextTranslationJobResponse || (StopTextTranslationJobResponse = {}));
var DetectedLanguageLowConfidenceException;
(function(DetectedLanguageLowConfidenceException2) {
  DetectedLanguageLowConfidenceException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DetectedLanguageLowConfidenceException || (DetectedLanguageLowConfidenceException = {}));
var ServiceUnavailableException;
(function(ServiceUnavailableException2) {
  ServiceUnavailableException2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
var TextSizeLimitExceededException;
(function(TextSizeLimitExceededException3) {
  TextSizeLimitExceededException3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TextSizeLimitExceededException || (TextSizeLimitExceededException = {}));
var TranslateTextRequest;
(function(TranslateTextRequest2) {
  TranslateTextRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TranslateTextRequest || (TranslateTextRequest = {}));
var TranslateTextResponse;
(function(TranslateTextResponse2) {
  TranslateTextResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TranslateTextResponse || (TranslateTextResponse = {}));
var UpdateParallelDataRequest;
(function(UpdateParallelDataRequest2) {
  UpdateParallelDataRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateParallelDataRequest || (UpdateParallelDataRequest = {}));
var UpdateParallelDataResponse;
(function(UpdateParallelDataResponse2) {
  UpdateParallelDataResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateParallelDataResponse || (UpdateParallelDataResponse = {}));

// ../../node_modules/@aws-sdk/client-translate/dist/es/protocols/Aws_json1_1.js
var import_uuid2 = __toModule(require_uuid());
var serializeAws_json1_1TranslateTextCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShineFrontendService_20170701.TranslateText"
      };
      body = JSON.stringify(serializeAws_json1_1TranslateTextRequest(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1TranslateTextCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1TranslateTextCommandError(output, context)];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1TranslateTextResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1TranslateTextCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function(_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "DetectedLanguageLowConfidenceException":
              return [3, 2];
            case "com.amazonaws.translate#DetectedLanguageLowConfidenceException":
              return [3, 2];
            case "InternalServerException":
              return [3, 4];
            case "com.amazonaws.translate#InternalServerException":
              return [3, 4];
            case "InvalidRequestException":
              return [3, 6];
            case "com.amazonaws.translate#InvalidRequestException":
              return [3, 6];
            case "ResourceNotFoundException":
              return [3, 8];
            case "com.amazonaws.translate#ResourceNotFoundException":
              return [3, 8];
            case "ServiceUnavailableException":
              return [3, 10];
            case "com.amazonaws.translate#ServiceUnavailableException":
              return [3, 10];
            case "TextSizeLimitExceededException":
              return [3, 12];
            case "com.amazonaws.translate#TextSizeLimitExceededException":
              return [3, 12];
            case "TooManyRequestsException":
              return [3, 14];
            case "com.amazonaws.translate#TooManyRequestsException":
              return [3, 14];
            case "UnsupportedLanguagePairException":
              return [3, 16];
            case "com.amazonaws.translate#UnsupportedLanguagePairException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
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
var deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1DetectedLanguageLowConfidenceException(body, context);
      contents = __assign({ name: "DetectedLanguageLowConfidenceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InternalServerExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalServerException(body, context);
      contents = __assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidRequestExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
      contents = __assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
      contents = __assign({ name: "TextSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1TooManyRequestsExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
      contents = __assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1UnsupportedLanguagePairException(body, context);
      contents = __assign({ name: "UnsupportedLanguagePairException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1ResourceNameList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_json1_1TranslateTextRequest = function(input, context) {
  return __assign(__assign(__assign(__assign({}, input.SourceLanguageCode !== void 0 && input.SourceLanguageCode !== null && { SourceLanguageCode: input.SourceLanguageCode }), input.TargetLanguageCode !== void 0 && input.TargetLanguageCode !== null && { TargetLanguageCode: input.TargetLanguageCode }), input.TerminologyNames !== void 0 && input.TerminologyNames !== null && {
    TerminologyNames: serializeAws_json1_1ResourceNameList(input.TerminologyNames, context)
  }), input.Text !== void 0 && input.Text !== null && { Text: input.Text });
};
var deserializeAws_json1_1AppliedTerminology = function(output, context) {
  return {
    Name: output.Name !== void 0 && output.Name !== null ? output.Name : void 0,
    Terms: output.Terms !== void 0 && output.Terms !== null ? deserializeAws_json1_1TermList(output.Terms, context) : void 0
  };
};
var deserializeAws_json1_1AppliedTerminologyList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1AppliedTerminology(entry, context);
  });
};
var deserializeAws_json1_1DetectedLanguageLowConfidenceException = function(output, context) {
  return {
    DetectedLanguageCode: output.DetectedLanguageCode !== void 0 && output.DetectedLanguageCode !== null ? output.DetectedLanguageCode : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InternalServerException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidRequestException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1ResourceNotFoundException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1ServiceUnavailableException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Term = function(output, context) {
  return {
    SourceText: output.SourceText !== void 0 && output.SourceText !== null ? output.SourceText : void 0,
    TargetText: output.TargetText !== void 0 && output.TargetText !== null ? output.TargetText : void 0
  };
};
var deserializeAws_json1_1TermList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Term(entry, context);
  });
};
var deserializeAws_json1_1TextSizeLimitExceededException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1TooManyRequestsException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1TranslateTextResponse = function(output, context) {
  return {
    AppliedTerminologies: output.AppliedTerminologies !== void 0 && output.AppliedTerminologies !== null ? deserializeAws_json1_1AppliedTerminologyList(output.AppliedTerminologies, context) : void 0,
    SourceLanguageCode: output.SourceLanguageCode !== void 0 && output.SourceLanguageCode !== null ? output.SourceLanguageCode : void 0,
    TargetLanguageCode: output.TargetLanguageCode !== void 0 && output.TargetLanguageCode !== null ? output.TargetLanguageCode : void 0,
    TranslatedText: output.TranslatedText !== void 0 && output.TranslatedText !== null ? output.TranslatedText : void 0
  };
};
var deserializeAws_json1_1UnsupportedLanguagePairException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0,
    SourceLanguageCode: output.SourceLanguageCode !== void 0 && output.SourceLanguageCode !== null ? output.SourceLanguageCode : void 0,
    TargetLanguageCode: output.TargetLanguageCode !== void 0 && output.TargetLanguageCode !== null ? output.TargetLanguageCode : void 0
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

// ../../node_modules/@aws-sdk/client-translate/dist/es/commands/TranslateTextCommand.js
var TranslateTextCommand = function(_super) {
  __extends(TranslateTextCommand2, _super);
  function TranslateTextCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  TranslateTextCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "TranslateClient";
    var commandName = "TranslateTextCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: TranslateTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TranslateTextResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TranslateTextCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1TranslateTextCommand(input, context);
  };
  TranslateTextCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1TranslateTextCommand(output, context);
  };
  return TranslateTextCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-polly/node_modules/tslib/modules/index.js
var import_tslib41 = __toModule(require_tslib3());
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
} = import_tslib41.default;

// ../../node_modules/@aws-sdk/client-polly/dist/es/package.json
var name2 = "@aws-sdk/client-polly";
var description2 = "AWS SDK for JavaScript Polly Client for Node.js, Browser and React Native";
var version2 = "3.6.1";
var scripts2 = {
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
var homepage2 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-polly";
var repository2 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-polly"
};
var package_default2 = {
  name: name2,
  description: description2,
  version: version2,
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

// ../../node_modules/@aws-sdk/client-polly/dist/es/runtimeConfig.browser.js
var import_sha256_browser2 = __toModule(require_build5());
var import_util_utf8_browser2 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-polly/dist/es/endpoints.js
var AWS_TEMPLATE2 = "polly.{region}.amazonaws.com";
var AWS_CN_TEMPLATE2 = "polly.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE2 = "polly.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE2 = "polly.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE2 = "polly.{region}.amazonaws.com";
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
    case "ap-east-1":
      regionInfo = {
        hostname: "polly.ap-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "polly.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "polly.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "polly.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "polly.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "polly.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "polly.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "polly.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "polly.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "polly.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "polly.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "polly.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "polly.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "polly-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "polly-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "polly-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "polly-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "polly-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "polly.me-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "polly.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "polly.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "polly.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "polly.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "polly.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "polly.us-west-2.amazonaws.com",
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
  return Promise.resolve(__assign3({ signingService: "polly" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-polly/dist/es/runtimeConfig.shared.js
var ClientSharedValues2 = {
  apiVersion: "2016-06-10",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider2,
  serviceId: "Polly",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-polly/dist/es/runtimeConfig.browser.js
var ClientDefaultValues2 = __assign3(__assign3({}, ClientSharedValues2), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues2.serviceId,
  clientVersion: package_default2.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser2.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser2.fromUtf8, utf8Encoder: import_util_utf8_browser2.toUtf8 });

// ../../node_modules/@aws-sdk/client-polly/dist/es/PollyClient.js
var PollyClient = function(_super) {
  __extends3(PollyClient2, _super);
  function PollyClient2(configuration) {
    var _this = this;
    var _config_0 = __assign3(__assign3({}, ClientDefaultValues2), configuration);
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
  PollyClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return PollyClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-polly/dist/es/models/models_0.js
var DeleteLexiconInput;
(function(DeleteLexiconInput2) {
  DeleteLexiconInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeleteLexiconInput || (DeleteLexiconInput = {}));
var DeleteLexiconOutput;
(function(DeleteLexiconOutput2) {
  DeleteLexiconOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeleteLexiconOutput || (DeleteLexiconOutput = {}));
var LexiconNotFoundException;
(function(LexiconNotFoundException2) {
  LexiconNotFoundException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LexiconNotFoundException || (LexiconNotFoundException = {}));
var ServiceFailureException;
(function(ServiceFailureException2) {
  ServiceFailureException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ServiceFailureException || (ServiceFailureException = {}));
var Engine;
(function(Engine2) {
  Engine2["NEURAL"] = "neural";
  Engine2["STANDARD"] = "standard";
})(Engine || (Engine = {}));
var DescribeVoicesInput;
(function(DescribeVoicesInput2) {
  DescribeVoicesInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeVoicesInput || (DescribeVoicesInput = {}));
var Voice;
(function(Voice2) {
  Voice2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(Voice || (Voice = {}));
var DescribeVoicesOutput;
(function(DescribeVoicesOutput2) {
  DescribeVoicesOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeVoicesOutput || (DescribeVoicesOutput = {}));
var InvalidNextTokenException;
(function(InvalidNextTokenException2) {
  InvalidNextTokenException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
var EngineNotSupportedException;
(function(EngineNotSupportedException2) {
  EngineNotSupportedException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(EngineNotSupportedException || (EngineNotSupportedException = {}));
var GetLexiconInput;
(function(GetLexiconInput2) {
  GetLexiconInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetLexiconInput || (GetLexiconInput = {}));
var Lexicon;
(function(Lexicon2) {
  Lexicon2.filterSensitiveLog = function(obj) {
    return __assign3(__assign3({}, obj), obj.Content && { Content: SENSITIVE_STRING });
  };
})(Lexicon || (Lexicon = {}));
var LexiconAttributes;
(function(LexiconAttributes2) {
  LexiconAttributes2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LexiconAttributes || (LexiconAttributes = {}));
var GetLexiconOutput;
(function(GetLexiconOutput2) {
  GetLexiconOutput2.filterSensitiveLog = function(obj) {
    return __assign3(__assign3({}, obj), obj.Lexicon && { Lexicon: Lexicon.filterSensitiveLog(obj.Lexicon) });
  };
})(GetLexiconOutput || (GetLexiconOutput = {}));
var GetSpeechSynthesisTaskInput;
(function(GetSpeechSynthesisTaskInput2) {
  GetSpeechSynthesisTaskInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetSpeechSynthesisTaskInput || (GetSpeechSynthesisTaskInput = {}));
var OutputFormat;
(function(OutputFormat2) {
  OutputFormat2["JSON"] = "json";
  OutputFormat2["MP3"] = "mp3";
  OutputFormat2["OGG_VORBIS"] = "ogg_vorbis";
  OutputFormat2["PCM"] = "pcm";
})(OutputFormat || (OutputFormat = {}));
var SpeechMarkType;
(function(SpeechMarkType2) {
  SpeechMarkType2["SENTENCE"] = "sentence";
  SpeechMarkType2["SSML"] = "ssml";
  SpeechMarkType2["VISEME"] = "viseme";
  SpeechMarkType2["WORD"] = "word";
})(SpeechMarkType || (SpeechMarkType = {}));
var TaskStatus;
(function(TaskStatus2) {
  TaskStatus2["COMPLETED"] = "completed";
  TaskStatus2["FAILED"] = "failed";
  TaskStatus2["IN_PROGRESS"] = "inProgress";
  TaskStatus2["SCHEDULED"] = "scheduled";
})(TaskStatus || (TaskStatus = {}));
var TextType;
(function(TextType3) {
  TextType3["SSML"] = "ssml";
  TextType3["TEXT"] = "text";
})(TextType || (TextType = {}));
var SynthesisTask;
(function(SynthesisTask2) {
  SynthesisTask2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SynthesisTask || (SynthesisTask = {}));
var GetSpeechSynthesisTaskOutput;
(function(GetSpeechSynthesisTaskOutput2) {
  GetSpeechSynthesisTaskOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetSpeechSynthesisTaskOutput || (GetSpeechSynthesisTaskOutput = {}));
var InvalidTaskIdException;
(function(InvalidTaskIdException2) {
  InvalidTaskIdException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidTaskIdException || (InvalidTaskIdException = {}));
var SynthesisTaskNotFoundException;
(function(SynthesisTaskNotFoundException2) {
  SynthesisTaskNotFoundException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SynthesisTaskNotFoundException || (SynthesisTaskNotFoundException = {}));
var InvalidLexiconException;
(function(InvalidLexiconException2) {
  InvalidLexiconException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidLexiconException || (InvalidLexiconException = {}));
var InvalidS3BucketException;
(function(InvalidS3BucketException2) {
  InvalidS3BucketException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidS3BucketException || (InvalidS3BucketException = {}));
var InvalidS3KeyException;
(function(InvalidS3KeyException2) {
  InvalidS3KeyException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidS3KeyException || (InvalidS3KeyException = {}));
var InvalidSampleRateException;
(function(InvalidSampleRateException2) {
  InvalidSampleRateException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidSampleRateException || (InvalidSampleRateException = {}));
var InvalidSnsTopicArnException;
(function(InvalidSnsTopicArnException2) {
  InvalidSnsTopicArnException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidSnsTopicArnException || (InvalidSnsTopicArnException = {}));
var InvalidSsmlException;
(function(InvalidSsmlException2) {
  InvalidSsmlException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidSsmlException || (InvalidSsmlException = {}));
var LanguageNotSupportedException;
(function(LanguageNotSupportedException2) {
  LanguageNotSupportedException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LanguageNotSupportedException || (LanguageNotSupportedException = {}));
var LexiconDescription;
(function(LexiconDescription2) {
  LexiconDescription2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LexiconDescription || (LexiconDescription = {}));
var LexiconSizeExceededException;
(function(LexiconSizeExceededException2) {
  LexiconSizeExceededException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LexiconSizeExceededException || (LexiconSizeExceededException = {}));
var ListLexiconsInput;
(function(ListLexiconsInput2) {
  ListLexiconsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListLexiconsInput || (ListLexiconsInput = {}));
var ListLexiconsOutput;
(function(ListLexiconsOutput2) {
  ListLexiconsOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListLexiconsOutput || (ListLexiconsOutput = {}));
var ListSpeechSynthesisTasksInput;
(function(ListSpeechSynthesisTasksInput2) {
  ListSpeechSynthesisTasksInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListSpeechSynthesisTasksInput || (ListSpeechSynthesisTasksInput = {}));
var ListSpeechSynthesisTasksOutput;
(function(ListSpeechSynthesisTasksOutput2) {
  ListSpeechSynthesisTasksOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListSpeechSynthesisTasksOutput || (ListSpeechSynthesisTasksOutput = {}));
var MarksNotSupportedForFormatException;
(function(MarksNotSupportedForFormatException2) {
  MarksNotSupportedForFormatException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MarksNotSupportedForFormatException || (MarksNotSupportedForFormatException = {}));
var MaxLexemeLengthExceededException;
(function(MaxLexemeLengthExceededException2) {
  MaxLexemeLengthExceededException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MaxLexemeLengthExceededException || (MaxLexemeLengthExceededException = {}));
var MaxLexiconsNumberExceededException;
(function(MaxLexiconsNumberExceededException2) {
  MaxLexiconsNumberExceededException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MaxLexiconsNumberExceededException || (MaxLexiconsNumberExceededException = {}));
var PutLexiconInput;
(function(PutLexiconInput2) {
  PutLexiconInput2.filterSensitiveLog = function(obj) {
    return __assign3(__assign3({}, obj), obj.Content && { Content: SENSITIVE_STRING });
  };
})(PutLexiconInput || (PutLexiconInput = {}));
var PutLexiconOutput;
(function(PutLexiconOutput2) {
  PutLexiconOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutLexiconOutput || (PutLexiconOutput = {}));
var UnsupportedPlsAlphabetException;
(function(UnsupportedPlsAlphabetException2) {
  UnsupportedPlsAlphabetException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UnsupportedPlsAlphabetException || (UnsupportedPlsAlphabetException = {}));
var UnsupportedPlsLanguageException;
(function(UnsupportedPlsLanguageException2) {
  UnsupportedPlsLanguageException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UnsupportedPlsLanguageException || (UnsupportedPlsLanguageException = {}));
var SsmlMarksNotSupportedForTextTypeException;
(function(SsmlMarksNotSupportedForTextTypeException2) {
  SsmlMarksNotSupportedForTextTypeException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SsmlMarksNotSupportedForTextTypeException || (SsmlMarksNotSupportedForTextTypeException = {}));
var StartSpeechSynthesisTaskInput;
(function(StartSpeechSynthesisTaskInput2) {
  StartSpeechSynthesisTaskInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StartSpeechSynthesisTaskInput || (StartSpeechSynthesisTaskInput = {}));
var StartSpeechSynthesisTaskOutput;
(function(StartSpeechSynthesisTaskOutput2) {
  StartSpeechSynthesisTaskOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StartSpeechSynthesisTaskOutput || (StartSpeechSynthesisTaskOutput = {}));
var TextLengthExceededException;
(function(TextLengthExceededException2) {
  TextLengthExceededException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(TextLengthExceededException || (TextLengthExceededException = {}));
var SynthesizeSpeechInput;
(function(SynthesizeSpeechInput2) {
  SynthesizeSpeechInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SynthesizeSpeechInput || (SynthesizeSpeechInput = {}));
var SynthesizeSpeechOutput;
(function(SynthesizeSpeechOutput2) {
  SynthesizeSpeechOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SynthesizeSpeechOutput || (SynthesizeSpeechOutput = {}));

// ../../node_modules/@aws-sdk/client-polly/dist/es/protocols/Aws_restJson1.js
var serializeAws_restJson1SynthesizeSpeechCommand = function(input, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator3(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "/v1/speech";
          body = JSON.stringify(__assign3(__assign3(__assign3(__assign3(__assign3(__assign3(__assign3(__assign3(__assign3({}, input.Engine !== void 0 && input.Engine !== null && { Engine: input.Engine }), input.LanguageCode !== void 0 && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }), input.LexiconNames !== void 0 && input.LexiconNames !== null && {
            LexiconNames: serializeAws_restJson1LexiconNameList(input.LexiconNames, context)
          }), input.OutputFormat !== void 0 && input.OutputFormat !== null && { OutputFormat: input.OutputFormat }), input.SampleRate !== void 0 && input.SampleRate !== null && { SampleRate: input.SampleRate }), input.SpeechMarkTypes !== void 0 && input.SpeechMarkTypes !== null && {
            SpeechMarkTypes: serializeAws_restJson1SpeechMarkTypeList(input.SpeechMarkTypes, context)
          }), input.Text !== void 0 && input.Text !== null && { Text: input.Text }), input.TextType !== void 0 && input.TextType !== null && { TextType: input.TextType }), input.VoiceId !== void 0 && input.VoiceId !== null && { VoiceId: input.VoiceId }));
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
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
var deserializeAws_restJson1SynthesizeSpeechCommand = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return [2, deserializeAws_restJson1SynthesizeSpeechCommandError(output, context)];
      }
      contents = {
        $metadata: deserializeMetadata2(output),
        AudioStream: void 0,
        ContentType: void 0,
        RequestCharacters: void 0
      };
      if (output.headers["content-type"] !== void 0) {
        contents.ContentType = output.headers["content-type"];
      }
      if (output.headers["x-amzn-requestcharacters"] !== void 0) {
        contents.RequestCharacters = parseInt(output.headers["x-amzn-requestcharacters"], 10);
      }
      data = output.body;
      contents.AudioStream = data;
      return [2, Promise.resolve(contents)];
    });
  });
};
var deserializeAws_restJson1SynthesizeSpeechCommandError = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator3(this, function(_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign3({}, output)];
          _m = {};
          return [4, parseBody2(output.body, context)];
        case 1:
          parsedOutput = __assign3.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode2(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "EngineNotSupportedException":
              return [3, 2];
            case "com.amazonaws.polly#EngineNotSupportedException":
              return [3, 2];
            case "InvalidSampleRateException":
              return [3, 4];
            case "com.amazonaws.polly#InvalidSampleRateException":
              return [3, 4];
            case "InvalidSsmlException":
              return [3, 6];
            case "com.amazonaws.polly#InvalidSsmlException":
              return [3, 6];
            case "LanguageNotSupportedException":
              return [3, 8];
            case "com.amazonaws.polly#LanguageNotSupportedException":
              return [3, 8];
            case "LexiconNotFoundException":
              return [3, 10];
            case "com.amazonaws.polly#LexiconNotFoundException":
              return [3, 10];
            case "MarksNotSupportedForFormatException":
              return [3, 12];
            case "com.amazonaws.polly#MarksNotSupportedForFormatException":
              return [3, 12];
            case "ServiceFailureException":
              return [3, 14];
            case "com.amazonaws.polly#ServiceFailureException":
              return [3, 14];
            case "SsmlMarksNotSupportedForTextTypeException":
              return [3, 16];
            case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
              return [3, 16];
            case "TextLengthExceededException":
              return [3, 18];
            case "com.amazonaws.polly#TextLengthExceededException":
              return [3, 18];
          }
          return [3, 20];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restJson1EngineNotSupportedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _c.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 4:
          _d = [{}];
          return [4, deserializeAws_restJson1InvalidSampleRateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _d.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 6:
          _e = [{}];
          return [4, deserializeAws_restJson1InvalidSsmlExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _e.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 8:
          _f = [{}];
          return [4, deserializeAws_restJson1LanguageNotSupportedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _f.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 10:
          _g = [{}];
          return [4, deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _g.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 12:
          _h = [{}];
          return [4, deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _h.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 14:
          _j = [{}];
          return [4, deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _j.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 16:
          _k = [{}];
          return [4, deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _k.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 18:
          _l = [{}];
          return [4, deserializeAws_restJson1TextLengthExceededExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _l.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign3(__assign3({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata2(output) });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1EngineNotSupportedExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "EngineNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1InvalidSampleRateExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "InvalidSampleRateException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1InvalidSsmlExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "InvalidSsmlException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1LanguageNotSupportedExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "LanguageNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1LexiconNotFoundExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "LexiconNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "MarksNotSupportedForFormatException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1ServiceFailureExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "ServiceFailureException",
        $fault: "server",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "SsmlMarksNotSupportedForTextTypeException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1TextLengthExceededExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator3(this, function(_a) {
      contents = {
        name: "TextLengthExceededException",
        $fault: "client",
        $metadata: deserializeMetadata2(parsedOutput),
        message: void 0
      };
      data = parsedOutput.body;
      if (data.message !== void 0 && data.message !== null) {
        contents.message = data.message;
      }
      return [2, contents];
    });
  });
};
var serializeAws_restJson1LexiconNameList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_restJson1SpeechMarkTypeList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
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

// ../../node_modules/@aws-sdk/client-polly/dist/es/commands/SynthesizeSpeechCommand.js
var SynthesizeSpeechCommand = function(_super) {
  __extends3(SynthesizeSpeechCommand2, _super);
  function SynthesizeSpeechCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  SynthesizeSpeechCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "PollyClient";
    var commandName = "SynthesizeSpeechCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: SynthesizeSpeechInput.filterSensitiveLog,
      outputFilterSensitiveLog: SynthesizeSpeechOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SynthesizeSpeechCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restJson1SynthesizeSpeechCommand(input, context);
  };
  SynthesizeSpeechCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restJson1SynthesizeSpeechCommand(output, context);
  };
  return SynthesizeSpeechCommand2;
}(Command);

// src/Providers/AmazonAIConvertPredictionsProvider.ts
import {
  Credentials,
  ConsoleLogger as Logger4,
  Signer,
  getAmplifyUserAgent
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/eventstream-marshaller/dist/es/EventStreamMarshaller.js
var import_crc322 = __toModule(require_build6());

// ../../node_modules/@aws-sdk/eventstream-marshaller/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js
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
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  var out = new Uint8Array(encoded.length / 2);
  for (var i = 0; i < encoded.length; i += 2) {
    var encodedByte = encoded.substr(i, 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT2) {
      out[i / 2] = HEX_TO_SHORT2[encodedByte];
    } else {
      throw new Error("Cannot decode unrecognized sequence " + encodedByte + " as hexadecimal");
    }
  }
  return out;
}
function toHex2(bytes) {
  var out = "";
  for (var i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX2[bytes[i]];
  }
  return out;
}

// ../../node_modules/@aws-sdk/eventstream-marshaller/dist/es/Int64.js
var Int64 = function() {
  function Int642(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  Int642.fromNumber = function(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(number + " is too large (or, if negative, too small) to represent as an Int64");
    }
    var bytes = new Uint8Array(8);
    for (var i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
      bytes[i] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new Int642(bytes);
  };
  Int642.prototype.valueOf = function() {
    var bytes = this.bytes.slice(0);
    var negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex2(bytes), 16) * (negative ? -1 : 1);
  };
  Int642.prototype.toString = function() {
    return String(this.valueOf());
  };
  return Int642;
}();
function negate(bytes) {
  for (var i = 0; i < 8; i++) {
    bytes[i] ^= 255;
  }
  for (var i = 7; i > -1; i--) {
    bytes[i]++;
    if (bytes[i] !== 0)
      break;
  }
}

// ../../node_modules/@aws-sdk/eventstream-marshaller/dist/es/HeaderMarshaller.js
var HeaderMarshaller = function() {
  function HeaderMarshaller2(toUtf87, fromUtf87) {
    this.toUtf8 = toUtf87;
    this.fromUtf8 = fromUtf87;
  }
  HeaderMarshaller2.prototype.format = function(headers) {
    var e_1, _a, e_2, _b;
    var chunks = [];
    try {
      for (var _c = __values2(Object.keys(headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var headerName = _d.value;
        var bytes = this.fromUtf8(headerName);
        chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return))
          _a.call(_c);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var out = new Uint8Array(chunks.reduce(function(carry, bytes2) {
      return carry + bytes2.byteLength;
    }, 0));
    var position = 0;
    try {
      for (var chunks_1 = __values2(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
        var chunk = chunks_1_1.value;
        out.set(chunk, position);
        position += chunk.byteLength;
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (chunks_1_1 && !chunks_1_1.done && (_b = chunks_1.return))
          _b.call(chunks_1);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return out;
  };
  HeaderMarshaller2.prototype.formatHeaderValue = function(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        var shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        var intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        var longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        var binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        var binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        var utf8Bytes = this.fromUtf8(header.value);
        var strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        var strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        var tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error("Invalid UUID received: " + header.value);
        }
        var uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  };
  HeaderMarshaller2.prototype.parse = function(headers) {
    var out = {};
    var position = 0;
    while (position < headers.byteLength) {
      var nameLength = headers.getUint8(position++);
      var name6 = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name6] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name6] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name6] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name6] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name6] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name6] = {
            type: LONG_TAG,
            value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          var binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name6] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          var stringLength = headers.getUint16(position, false);
          position += 2;
          out[name6] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name6] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          var uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name6] = {
            type: UUID_TAG,
            value: toHex2(uuidBytes.subarray(0, 4)) + "-" + toHex2(uuidBytes.subarray(4, 6)) + "-" + toHex2(uuidBytes.subarray(6, 8)) + "-" + toHex2(uuidBytes.subarray(8, 10)) + "-" + toHex2(uuidBytes.subarray(10))
          };
          break;
        default:
          throw new Error("Unrecognized header type tag");
      }
    }
    return out;
  };
  return HeaderMarshaller2;
}();
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE2) {
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// ../../node_modules/@aws-sdk/eventstream-marshaller/dist/es/splitMessage.js
var import_crc32 = __toModule(require_build6());
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage(_a) {
  var byteLength = _a.byteLength, byteOffset = _a.byteOffset, buffer = _a.buffer;
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  var view = new DataView(buffer, byteOffset, byteLength);
  var messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  var headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  var expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  var expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  var checksummer = new import_crc32.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error("The prelude checksum specified in the message (" + expectedPreludeChecksum + ") does not match the calculated CRC32 checksum (" + checksummer.digest() + ")");
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error("The message checksum (" + checksummer.digest() + ") did not match the expected value of " + expectedMessageChecksum);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}

// ../../node_modules/@aws-sdk/eventstream-marshaller/dist/es/EventStreamMarshaller.js
var EventStreamMarshaller = function() {
  function EventStreamMarshaller2(toUtf87, fromUtf87) {
    this.headerMarshaller = new HeaderMarshaller(toUtf87, fromUtf87);
  }
  EventStreamMarshaller2.prototype.marshall = function(_a) {
    var rawHeaders = _a.headers, body = _a.body;
    var headers = this.headerMarshaller.format(rawHeaders);
    var length = headers.byteLength + body.byteLength + 16;
    var out = new Uint8Array(length);
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    var checksum = new import_crc322.Crc32();
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  };
  EventStreamMarshaller2.prototype.unmarshall = function(message) {
    var _a = splitMessage(message), headers = _a.headers, body = _a.body;
    return { headers: this.headerMarshaller.parse(headers), body };
  };
  EventStreamMarshaller2.prototype.formatHeaders = function(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  };
  return EventStreamMarshaller2;
}();

// ../../node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js
var isArrayBuffer2 = function(arg) {
  return typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
};

// ../../node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/util-buffer-from/dist/es/index.js
var import_buffer = __toModule(require_buffer());
var fromArrayBuffer = function(input, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }
  if (length === void 0) {
    length = input.byteLength - offset;
  }
  if (!isArrayBuffer2(input)) {
    throw new TypeError('The "input" argument must be ArrayBuffer. Received type ' + typeof input + " (" + input + ")");
  }
  return import_buffer.Buffer.from(input, offset, length);
};
var fromString = function(input, encoding) {
  if (typeof input !== "string") {
    throw new TypeError('The "input" argument must be of type string. Received type ' + typeof input + " (" + input + ")");
  }
  return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
};

// ../../node_modules/@aws-sdk/util-utf8-node/dist/es/index.js
var fromUtf83 = function(input) {
  var buf = fromString(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
var toUtf83 = function(input) {
  return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};

// src/Providers/AmazonAIConvertPredictionsProvider.ts
var logger4 = new Logger4("AmazonAIConvertPredictionsProvider");
var eventBuilder = new EventStreamMarshaller(toUtf83, fromUtf83);
var LANGUAGES_CODE_IN_8KHZ = ["fr-FR", "en-AU", "en-GB", "fr-CA"];
var AmazonAIConvertPredictionsProvider = class extends AbstractConvertPredictionsProvider {
  constructor() {
    super();
    this.inputSampleRate = 44100;
  }
  getProviderName() {
    return "AmazonAIConvertPredictionsProvider";
  }
  async translateText(input) {
    logger4.debug("Starting translation");
    const {
      translateText: {
        defaults: { sourceLanguage = "", targetLanguage = "" } = {},
        region = ""
      } = {}
    } = this._config;
    if (!region) {
      return Promise.reject("region not configured for transcription");
    }
    const credentials = await Credentials.get();
    if (!credentials) {
      return Promise.reject("No credentials");
    }
    const sourceLanguageCode = input.translateText.source.language || sourceLanguage;
    const targetLanguageCode = input.translateText.targetLanguage || targetLanguage;
    if (!sourceLanguageCode || !targetLanguageCode) {
      return Promise.reject("Please provide both source and target language");
    }
    this.translateClient = new TranslateClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent()
    });
    const translateTextCommand = new TranslateTextCommand({
      SourceLanguageCode: sourceLanguageCode,
      TargetLanguageCode: targetLanguageCode,
      Text: input.translateText.source.text
    });
    try {
      const data = await this.translateClient.send(translateTextCommand);
      return {
        text: data.TranslatedText,
        language: data.TargetLanguageCode
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async convertTextToSpeech(input) {
    const credentials = await Credentials.get();
    if (!credentials) {
      return Promise.reject("No credentials");
    }
    const {
      speechGenerator: { defaults: { VoiceId = "" } = {}, region = "" } = {}
    } = this._config;
    if (!input.textToSpeech.source) {
      return Promise.reject("Source needs to be provided in the input");
    }
    const voiceId = input.textToSpeech.voiceId || VoiceId;
    if (!region) {
      return Promise.reject("Region was undefined. Did you enable speech generator using amplify CLI?");
    }
    if (!voiceId) {
      return Promise.reject("VoiceId was undefined.");
    }
    this.pollyClient = new PollyClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent()
    });
    const synthesizeSpeechCommand = new SynthesizeSpeechCommand({
      OutputFormat: "mp3",
      Text: input.textToSpeech.source.text,
      VoiceId: voiceId,
      TextType: "text",
      SampleRate: "24000"
    });
    try {
      const data = await this.pollyClient.send(synthesizeSpeechCommand);
      const response = new Response(data.AudioStream);
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], {
        type: data.ContentType
      });
      const url = URL.createObjectURL(blob);
      return {
        speech: { url },
        audioStream: arrayBuffer,
        text: input.textToSpeech.source.text
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async convertSpeechToText(input) {
    try {
      logger4.debug("starting transcription..");
      const credentials = await Credentials.get();
      if (!credentials) {
        return Promise.reject("No credentials");
      }
      const {
        transcription: {
          defaults: { language: languageCode = "" } = {},
          region = ""
        } = {}
      } = this._config;
      if (!region) {
        return Promise.reject("region not configured for transcription");
      }
      if (!languageCode) {
        return Promise.reject("languageCode not configured or provided for transcription");
      }
      const {
        transcription: { source, language = languageCode }
      } = input;
      if (isBytesSource(source)) {
        const connection = await this.openConnectionWithTranscribe({
          credentials,
          region,
          languageCode: language
        });
        try {
          const fullText = await this.sendDataToTranscribe({
            connection,
            raw: source.bytes,
            languageCode: language
          });
          return {
            transcription: {
              fullText
            }
          };
        } catch (err) {
          return Promise.reject(err);
        }
      }
      return Promise.reject("Source types other than byte source are not supported.");
    } catch (err) {
      return Promise.reject(err.name + ": " + err.message);
    }
  }
  static serializeDataFromTranscribe(message) {
    let decodedMessage = "";
    const transcribeMessage = eventBuilder.unmarshall(Buffer.from(message.data));
    const transcribeMessageJson = JSON.parse(toUtf83(transcribeMessage.body));
    if (transcribeMessage.headers[":message-type"].value === "exception") {
      logger4.debug("exception", JSON.stringify(transcribeMessageJson.Message, null, 2));
      throw new Error(transcribeMessageJson.Message);
    } else if (transcribeMessage.headers[":message-type"].value === "event") {
      if (transcribeMessageJson.Transcript.Results.length > 0) {
        if (transcribeMessageJson.Transcript.Results[0].Alternatives.length > 0) {
          if (transcribeMessageJson.Transcript.Results[0].Alternatives[0].Transcript.length > 0) {
            if (transcribeMessageJson.Transcript.Results[0].IsPartial === false) {
              decodedMessage = transcribeMessageJson.Transcript.Results[0].Alternatives[0].Transcript + "\n";
              logger4.debug({ decodedMessage });
            } else {
              logger4.debug({
                transcript: transcribeMessageJson.Transcript.Results[0].Alternatives[0]
              });
            }
          }
        }
      }
    }
    return decodedMessage;
  }
  sendDataToTranscribe({
    connection,
    raw,
    languageCode
  }) {
    return new Promise((res, rej) => {
      let fullText = "";
      connection.onmessage = (message) => {
        try {
          const decodedMessage = AmazonAIConvertPredictionsProvider.serializeDataFromTranscribe(message);
          if (decodedMessage) {
            fullText += decodedMessage + " ";
          }
        } catch (err) {
          logger4.debug(err);
          rej(err.message);
        }
      };
      connection.onerror = (errorEvent) => {
        logger4.debug({ errorEvent });
        rej("failed to transcribe, network error");
      };
      connection.onclose = (closeEvent) => {
        logger4.debug({ closeEvent });
        return res(fullText.trim());
      };
      logger4.debug({ raw });
      if (Array.isArray(raw)) {
        for (let i = 0; i < raw.length - 1023; i += 1024) {
          const data = raw.slice(i, i + 1024);
          this.sendEncodedDataToTranscribe(connection, data, languageCode);
        }
      } else {
        this.sendEncodedDataToTranscribe(connection, raw, languageCode);
      }
      const endFrameEventMessage = this.getAudioEventMessage(Buffer.from([]));
      const endFrameBinary = eventBuilder.marshall(endFrameEventMessage);
      connection.send(endFrameBinary);
    });
  }
  sendEncodedDataToTranscribe(connection, data, languageCode) {
    const downsampledBuffer = this.downsampleBuffer({
      buffer: data,
      outputSampleRate: LANGUAGES_CODE_IN_8KHZ.includes(languageCode) ? 8e3 : 16e3
    });
    const pcmEncodedBuffer = this.pcmEncode(downsampledBuffer);
    const audioEventMessage = this.getAudioEventMessage(Buffer.from(pcmEncodedBuffer));
    const binary = eventBuilder.marshall(audioEventMessage);
    connection.send(binary);
  }
  getAudioEventMessage(buffer) {
    const audioEventMessage = {
      body: buffer,
      headers: {
        ":message-type": {
          type: "string",
          value: "event"
        },
        ":event-type": {
          type: "string",
          value: "AudioEvent"
        }
      }
    };
    return audioEventMessage;
  }
  pcmEncode(input) {
    let offset = 0;
    const buffer = new ArrayBuffer(input.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < input.length; i++, offset += 2) {
      const s = Math.max(-1, Math.min(1, input[i]));
      view.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
    }
    return buffer;
  }
  downsampleBuffer({ buffer, outputSampleRate = 16e3 }) {
    if (outputSampleRate === this.inputSampleRate) {
      return buffer;
    }
    const sampleRateRatio = this.inputSampleRate / outputSampleRate;
    const newLength = Math.round(buffer.length / sampleRateRatio);
    const result = new Float32Array(newLength);
    let offsetResult = 0;
    let offsetBuffer = 0;
    while (offsetResult < result.length) {
      const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
      let accum = 0, count = 0;
      for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
        accum += buffer[i];
        count++;
      }
      result[offsetResult] = accum / count;
      offsetResult++;
      offsetBuffer = nextOffsetBuffer;
    }
    return result;
  }
  openConnectionWithTranscribe({
    credentials: userCredentials,
    region,
    languageCode
  }) {
    return new Promise(async (res, rej) => {
      const {
        accessKeyId: access_key,
        secretAccessKey: secret_key,
        sessionToken: session_token
      } = userCredentials;
      const credentials = {
        access_key,
        secret_key,
        session_token
      };
      const signedUrl = this.generateTranscribeUrl({
        credentials,
        region,
        languageCode
      });
      logger4.debug("connecting...");
      const connection = new WebSocket(signedUrl);
      connection.binaryType = "arraybuffer";
      connection.onopen = () => {
        logger4.debug("connected");
        res(connection);
      };
    });
  }
  generateTranscribeUrl({ credentials, region, languageCode }) {
    const url = [
      `wss://transcribestreaming.${region}.amazonaws.com:8443`,
      "/stream-transcription-websocket?",
      `media-encoding=pcm&`,
      `sample-rate=${LANGUAGES_CODE_IN_8KHZ.includes(languageCode) ? "8000" : "16000"}&`,
      `language-code=${languageCode}`
    ].join("");
    const signedUrl = Signer.signUrl(url, credentials, { region, service: "transcribe" }, 300);
    return signedUrl;
  }
};

// src/Providers/AmazonAIIdentifyPredictionsProvider.ts
import {
  Credentials as Credentials2,
  getAmplifyUserAgent as getAmplifyUserAgent2
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
import Storage from "http://localhost:8080/packages/storage/4.4.5/storage-esm.js";

// src/types/Providers/AbstractIdentifyPredictionsProvider.ts
import { Logger as Logger5 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger5 = new Logger5("AbstractIdentifyPredictionsProvider");
var AbstractIdentifyPredictionsProvider = class extends AbstractPredictionsProvider {
  getCategory() {
    return "Identify";
  }
  identify(input) {
    if (isIdentifyTextInput(input)) {
      logger5.debug("identifyText");
      return this.identifyText(input);
    } else if (isIdentifyLabelsInput(input)) {
      logger5.debug("identifyLabels");
      return this.identifyLabels(input);
    } else if (isIdentifyEntitiesInput(input)) {
      logger5.debug("identifyEntities");
      return this.identifyEntities(input);
    }
  }
  identifyText(input) {
    throw new Error("identifyText is not implemented by this provider.");
  }
  identifyLabels(input) {
    throw new Error("identifyLabels is not implemented by this provider");
  }
  identifyEntities(input) {
    throw new Error("identifyEntities is not implemented by this provider");
  }
};

// src/types/Providers/AbstractInterpretPredictionsProvider.ts
var AbstractInterpretPredictionsProvider = class extends AbstractPredictionsProvider {
  getCategory() {
    return "Interpret";
  }
  interpret(input) {
    if (isInterpretTextInput(input)) {
      return this.interpretText(input);
    }
  }
  interpretText(input) {
    throw new Error("interpretText is not implement by this provider");
  }
};

// ../../node_modules/@aws-sdk/client-rekognition/node_modules/tslib/modules/index.js
var import_tslib49 = __toModule(require_tslib4());
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
} = import_tslib49.default;

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/package.json
var name3 = "@aws-sdk/client-rekognition";
var description3 = "AWS SDK for JavaScript Rekognition Client for Node.js, Browser and React Native";
var version3 = "3.6.1";
var scripts3 = {
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
var main3 = "./dist/cjs/index.js";
var types3 = "./types/index.d.ts";
var module3 = "./dist/es/index.js";
var browser3 = {
  "./runtimeConfig": "./runtimeConfig.browser"
};
var react_native3 = {
  "./runtimeConfig": "./runtimeConfig.native"
};
var sideEffects3 = false;
var dependencies3 = {
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
  "@aws-sdk/util-waiter": "3.6.1",
  tslib: "^2.0.0"
};
var devDependencies3 = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@types/node": "^12.7.5",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  typedoc: "^0.19.2",
  typescript: "~4.1.2"
};
var engines3 = {
  node: ">=10.0.0"
};
var typesVersions3 = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
};
var author3 = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
};
var license3 = "Apache-2.0";
var homepage3 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-rekognition";
var repository3 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-rekognition"
};
var package_default3 = {
  name: name3,
  description: description3,
  version: version3,
  scripts: scripts3,
  main: main3,
  types: types3,
  module: module3,
  browser: browser3,
  "react-native": react_native3,
  sideEffects: sideEffects3,
  dependencies: dependencies3,
  devDependencies: devDependencies3,
  engines: engines3,
  typesVersions: typesVersions3,
  author: author3,
  license: license3,
  homepage: homepage3,
  repository: repository3
};

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/runtimeConfig.browser.js
var import_sha256_browser3 = __toModule(require_build5());
var import_util_utf8_browser3 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/endpoints.js
var AWS_TEMPLATE3 = "rekognition.{region}.amazonaws.com";
var AWS_CN_TEMPLATE3 = "rekognition.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE3 = "rekognition.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE3 = "rekognition.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE3 = "rekognition.{region}.amazonaws.com";
var AWS_REGIONS3 = new Set([
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
var AWS_CN_REGIONS3 = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS3 = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS3 = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS3 = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider3 = function(region, options) {
  var regionInfo = void 0;
  switch (region) {
    case "ap-northeast-1":
      regionInfo = {
        hostname: "rekognition.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "rekognition.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "rekognition.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "rekognition.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "rekognition.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "rekognition.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "rekognition.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "rekognition.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "rekognition.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "rekognition-fips.ca-central-1":
      regionInfo = {
        hostname: "rekognition-fips.ca-central-1.amazonaws.com",
        partition: "aws",
        signingRegion: "ca-central-1"
      };
      break;
    case "rekognition-fips.us-east-1":
      regionInfo = {
        hostname: "rekognition-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "rekognition-fips.us-east-2":
      regionInfo = {
        hostname: "rekognition-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "rekognition-fips.us-gov-west-1":
      regionInfo = {
        hostname: "rekognition-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "rekognition-fips.us-west-1":
      regionInfo = {
        hostname: "rekognition-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1"
      };
      break;
    case "rekognition-fips.us-west-2":
      regionInfo = {
        hostname: "rekognition-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "rekognition.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "rekognition.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "rekognition.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "rekognition.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "rekognition.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    default:
      if (AWS_REGIONS3.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE3.replace("{region}", region),
          partition: "aws"
        };
      }
      if (AWS_CN_REGIONS3.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE3.replace("{region}", region),
          partition: "aws-cn"
        };
      }
      if (AWS_ISO_REGIONS3.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE3.replace("{region}", region),
          partition: "aws-iso"
        };
      }
      if (AWS_ISO_B_REGIONS3.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE3.replace("{region}", region),
          partition: "aws-iso-b"
        };
      }
      if (AWS_US_GOV_REGIONS3.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE3.replace("{region}", region),
          partition: "aws-us-gov"
        };
      }
      if (regionInfo === void 0) {
        regionInfo = {
          hostname: AWS_TEMPLATE3.replace("{region}", region),
          partition: "aws"
        };
      }
  }
  return Promise.resolve(__assign4({ signingService: "rekognition" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/runtimeConfig.shared.js
var ClientSharedValues3 = {
  apiVersion: "2016-06-27",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider3,
  serviceId: "Rekognition",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/runtimeConfig.browser.js
var ClientDefaultValues3 = __assign4(__assign4({}, ClientSharedValues3), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues3.serviceId,
  clientVersion: package_default3.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser3.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser3.fromUtf8, utf8Encoder: import_util_utf8_browser3.toUtf8 });

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/RekognitionClient.js
var RekognitionClient = function(_super) {
  __extends4(RekognitionClient2, _super);
  function RekognitionClient2(configuration) {
    var _this = this;
    var _config_0 = __assign4(__assign4({}, ClientDefaultValues3), configuration);
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
  RekognitionClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return RekognitionClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/models/models_0.js
var AccessDeniedException;
(function(AccessDeniedException3) {
  AccessDeniedException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
var AgeRange;
(function(AgeRange2) {
  AgeRange2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(AgeRange || (AgeRange = {}));
var S3Object;
(function(S3Object3) {
  S3Object3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(S3Object || (S3Object = {}));
var GroundTruthManifest;
(function(GroundTruthManifest2) {
  GroundTruthManifest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GroundTruthManifest || (GroundTruthManifest = {}));
var Asset;
(function(Asset2) {
  Asset2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Asset || (Asset = {}));
var Attribute;
(function(Attribute2) {
  Attribute2["ALL"] = "ALL";
  Attribute2["DEFAULT"] = "DEFAULT";
})(Attribute || (Attribute = {}));
var AudioMetadata;
(function(AudioMetadata2) {
  AudioMetadata2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(AudioMetadata || (AudioMetadata = {}));
var Beard;
(function(Beard2) {
  Beard2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Beard || (Beard = {}));
var BodyPart;
(function(BodyPart2) {
  BodyPart2["FACE"] = "FACE";
  BodyPart2["HEAD"] = "HEAD";
  BodyPart2["LEFT_HAND"] = "LEFT_HAND";
  BodyPart2["RIGHT_HAND"] = "RIGHT_HAND";
})(BodyPart || (BodyPart = {}));
var BoundingBox;
(function(BoundingBox3) {
  BoundingBox3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(BoundingBox || (BoundingBox = {}));
var CoversBodyPart;
(function(CoversBodyPart2) {
  CoversBodyPart2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CoversBodyPart || (CoversBodyPart = {}));
var ProtectiveEquipmentType;
(function(ProtectiveEquipmentType2) {
  ProtectiveEquipmentType2["FACE_COVER"] = "FACE_COVER";
  ProtectiveEquipmentType2["HAND_COVER"] = "HAND_COVER";
  ProtectiveEquipmentType2["HEAD_COVER"] = "HEAD_COVER";
})(ProtectiveEquipmentType || (ProtectiveEquipmentType = {}));
var EquipmentDetection;
(function(EquipmentDetection2) {
  EquipmentDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(EquipmentDetection || (EquipmentDetection = {}));
var ProtectiveEquipmentBodyPart;
(function(ProtectiveEquipmentBodyPart2) {
  ProtectiveEquipmentBodyPart2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProtectiveEquipmentBodyPart || (ProtectiveEquipmentBodyPart = {}));
var LandmarkType;
(function(LandmarkType2) {
  LandmarkType2["chinBottom"] = "chinBottom";
  LandmarkType2["eyeLeft"] = "eyeLeft";
  LandmarkType2["eyeRight"] = "eyeRight";
  LandmarkType2["leftEyeBrowLeft"] = "leftEyeBrowLeft";
  LandmarkType2["leftEyeBrowRight"] = "leftEyeBrowRight";
  LandmarkType2["leftEyeBrowUp"] = "leftEyeBrowUp";
  LandmarkType2["leftEyeDown"] = "leftEyeDown";
  LandmarkType2["leftEyeLeft"] = "leftEyeLeft";
  LandmarkType2["leftEyeRight"] = "leftEyeRight";
  LandmarkType2["leftEyeUp"] = "leftEyeUp";
  LandmarkType2["leftPupil"] = "leftPupil";
  LandmarkType2["midJawlineLeft"] = "midJawlineLeft";
  LandmarkType2["midJawlineRight"] = "midJawlineRight";
  LandmarkType2["mouthDown"] = "mouthDown";
  LandmarkType2["mouthLeft"] = "mouthLeft";
  LandmarkType2["mouthRight"] = "mouthRight";
  LandmarkType2["mouthUp"] = "mouthUp";
  LandmarkType2["nose"] = "nose";
  LandmarkType2["noseLeft"] = "noseLeft";
  LandmarkType2["noseRight"] = "noseRight";
  LandmarkType2["rightEyeBrowLeft"] = "rightEyeBrowLeft";
  LandmarkType2["rightEyeBrowRight"] = "rightEyeBrowRight";
  LandmarkType2["rightEyeBrowUp"] = "rightEyeBrowUp";
  LandmarkType2["rightEyeDown"] = "rightEyeDown";
  LandmarkType2["rightEyeLeft"] = "rightEyeLeft";
  LandmarkType2["rightEyeRight"] = "rightEyeRight";
  LandmarkType2["rightEyeUp"] = "rightEyeUp";
  LandmarkType2["rightPupil"] = "rightPupil";
  LandmarkType2["upperJawlineLeft"] = "upperJawlineLeft";
  LandmarkType2["upperJawlineRight"] = "upperJawlineRight";
})(LandmarkType || (LandmarkType = {}));
var Landmark;
(function(Landmark2) {
  Landmark2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Landmark || (Landmark = {}));
var Pose;
(function(Pose2) {
  Pose2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Pose || (Pose = {}));
var ImageQuality;
(function(ImageQuality2) {
  ImageQuality2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ImageQuality || (ImageQuality = {}));
var ComparedFace;
(function(ComparedFace2) {
  ComparedFace2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ComparedFace || (ComparedFace = {}));
var Celebrity;
(function(Celebrity2) {
  Celebrity2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Celebrity || (Celebrity = {}));
var Emotion;
(function(Emotion2) {
  Emotion2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Emotion || (Emotion = {}));
var Eyeglasses;
(function(Eyeglasses2) {
  Eyeglasses2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Eyeglasses || (Eyeglasses = {}));
var EyeOpen;
(function(EyeOpen2) {
  EyeOpen2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(EyeOpen || (EyeOpen = {}));
var GenderType;
(function(GenderType2) {
  GenderType2["Female"] = "Female";
  GenderType2["Male"] = "Male";
})(GenderType || (GenderType = {}));
var Gender;
(function(Gender2) {
  Gender2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Gender || (Gender = {}));
var MouthOpen;
(function(MouthOpen2) {
  MouthOpen2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(MouthOpen || (MouthOpen = {}));
var Mustache;
(function(Mustache2) {
  Mustache2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Mustache || (Mustache = {}));
var Smile;
(function(Smile2) {
  Smile2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Smile || (Smile = {}));
var Sunglasses;
(function(Sunglasses2) {
  Sunglasses2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Sunglasses || (Sunglasses = {}));
var FaceDetail;
(function(FaceDetail2) {
  FaceDetail2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(FaceDetail || (FaceDetail = {}));
var CelebrityDetail;
(function(CelebrityDetail2) {
  CelebrityDetail2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CelebrityDetail || (CelebrityDetail = {}));
var CelebrityRecognition;
(function(CelebrityRecognition2) {
  CelebrityRecognition2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CelebrityRecognition || (CelebrityRecognition = {}));
var CelebrityRecognitionSortBy;
(function(CelebrityRecognitionSortBy2) {
  CelebrityRecognitionSortBy2["ID"] = "ID";
  CelebrityRecognitionSortBy2["TIMESTAMP"] = "TIMESTAMP";
})(CelebrityRecognitionSortBy || (CelebrityRecognitionSortBy = {}));
var ComparedSourceImageFace;
(function(ComparedSourceImageFace2) {
  ComparedSourceImageFace2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ComparedSourceImageFace || (ComparedSourceImageFace = {}));
var QualityFilter;
(function(QualityFilter2) {
  QualityFilter2["AUTO"] = "AUTO";
  QualityFilter2["HIGH"] = "HIGH";
  QualityFilter2["LOW"] = "LOW";
  QualityFilter2["MEDIUM"] = "MEDIUM";
  QualityFilter2["NONE"] = "NONE";
})(QualityFilter || (QualityFilter = {}));
var Image;
(function(Image2) {
  Image2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Image || (Image = {}));
var CompareFacesRequest;
(function(CompareFacesRequest2) {
  CompareFacesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CompareFacesRequest || (CompareFacesRequest = {}));
var CompareFacesMatch;
(function(CompareFacesMatch2) {
  CompareFacesMatch2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CompareFacesMatch || (CompareFacesMatch = {}));
var OrientationCorrection;
(function(OrientationCorrection2) {
  OrientationCorrection2["ROTATE_0"] = "ROTATE_0";
  OrientationCorrection2["ROTATE_180"] = "ROTATE_180";
  OrientationCorrection2["ROTATE_270"] = "ROTATE_270";
  OrientationCorrection2["ROTATE_90"] = "ROTATE_90";
})(OrientationCorrection || (OrientationCorrection = {}));
var CompareFacesResponse;
(function(CompareFacesResponse2) {
  CompareFacesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CompareFacesResponse || (CompareFacesResponse = {}));
var ImageTooLargeException;
(function(ImageTooLargeException2) {
  ImageTooLargeException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ImageTooLargeException || (ImageTooLargeException = {}));
var InternalServerError;
(function(InternalServerError3) {
  InternalServerError3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InternalServerError || (InternalServerError = {}));
var InvalidImageFormatException;
(function(InvalidImageFormatException2) {
  InvalidImageFormatException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidImageFormatException || (InvalidImageFormatException = {}));
var InvalidParameterException;
(function(InvalidParameterException3) {
  InvalidParameterException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidParameterException || (InvalidParameterException = {}));
var InvalidS3ObjectException;
(function(InvalidS3ObjectException3) {
  InvalidS3ObjectException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidS3ObjectException || (InvalidS3ObjectException = {}));
var ProvisionedThroughputExceededException;
(function(ProvisionedThroughputExceededException3) {
  ProvisionedThroughputExceededException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProvisionedThroughputExceededException || (ProvisionedThroughputExceededException = {}));
var ThrottlingException;
(function(ThrottlingException3) {
  ThrottlingException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ThrottlingException || (ThrottlingException = {}));
var ContentClassifier;
(function(ContentClassifier3) {
  ContentClassifier3["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
  ContentClassifier3["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier || (ContentClassifier = {}));
var ModerationLabel;
(function(ModerationLabel2) {
  ModerationLabel2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ModerationLabel || (ModerationLabel = {}));
var ContentModerationDetection;
(function(ContentModerationDetection2) {
  ContentModerationDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ContentModerationDetection || (ContentModerationDetection = {}));
var ContentModerationSortBy;
(function(ContentModerationSortBy2) {
  ContentModerationSortBy2["NAME"] = "NAME";
  ContentModerationSortBy2["TIMESTAMP"] = "TIMESTAMP";
})(ContentModerationSortBy || (ContentModerationSortBy = {}));
var CreateCollectionRequest;
(function(CreateCollectionRequest2) {
  CreateCollectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateCollectionRequest || (CreateCollectionRequest = {}));
var CreateCollectionResponse;
(function(CreateCollectionResponse2) {
  CreateCollectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateCollectionResponse || (CreateCollectionResponse = {}));
var ResourceAlreadyExistsException;
(function(ResourceAlreadyExistsException2) {
  ResourceAlreadyExistsException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
var CreateProjectRequest;
(function(CreateProjectRequest2) {
  CreateProjectRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateProjectRequest || (CreateProjectRequest = {}));
var CreateProjectResponse;
(function(CreateProjectResponse2) {
  CreateProjectResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateProjectResponse || (CreateProjectResponse = {}));
var LimitExceededException2;
(function(LimitExceededException4) {
  LimitExceededException4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(LimitExceededException2 || (LimitExceededException2 = {}));
var ResourceInUseException;
(function(ResourceInUseException3) {
  ResourceInUseException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceInUseException || (ResourceInUseException = {}));
var OutputConfig;
(function(OutputConfig3) {
  OutputConfig3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(OutputConfig || (OutputConfig = {}));
var TestingData;
(function(TestingData2) {
  TestingData2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TestingData || (TestingData = {}));
var TrainingData;
(function(TrainingData2) {
  TrainingData2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TrainingData || (TrainingData = {}));
var CreateProjectVersionRequest;
(function(CreateProjectVersionRequest2) {
  CreateProjectVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateProjectVersionRequest || (CreateProjectVersionRequest = {}));
var CreateProjectVersionResponse;
(function(CreateProjectVersionResponse2) {
  CreateProjectVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateProjectVersionResponse || (CreateProjectVersionResponse = {}));
var ResourceNotFoundException2;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceNotFoundException2 || (ResourceNotFoundException2 = {}));
var KinesisVideoStream;
(function(KinesisVideoStream2) {
  KinesisVideoStream2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(KinesisVideoStream || (KinesisVideoStream = {}));
var StreamProcessorInput;
(function(StreamProcessorInput2) {
  StreamProcessorInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StreamProcessorInput || (StreamProcessorInput = {}));
var KinesisDataStream;
(function(KinesisDataStream2) {
  KinesisDataStream2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(KinesisDataStream || (KinesisDataStream = {}));
var StreamProcessorOutput;
(function(StreamProcessorOutput2) {
  StreamProcessorOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StreamProcessorOutput || (StreamProcessorOutput = {}));
var FaceSearchSettings;
(function(FaceSearchSettings2) {
  FaceSearchSettings2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(FaceSearchSettings || (FaceSearchSettings = {}));
var StreamProcessorSettings;
(function(StreamProcessorSettings2) {
  StreamProcessorSettings2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StreamProcessorSettings || (StreamProcessorSettings = {}));
var CreateStreamProcessorRequest;
(function(CreateStreamProcessorRequest2) {
  CreateStreamProcessorRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateStreamProcessorRequest || (CreateStreamProcessorRequest = {}));
var CreateStreamProcessorResponse;
(function(CreateStreamProcessorResponse2) {
  CreateStreamProcessorResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateStreamProcessorResponse || (CreateStreamProcessorResponse = {}));
var Point;
(function(Point3) {
  Point3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Point || (Point = {}));
var Geometry;
(function(Geometry3) {
  Geometry3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Geometry || (Geometry = {}));
var CustomLabel;
(function(CustomLabel2) {
  CustomLabel2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CustomLabel || (CustomLabel = {}));
var DeleteCollectionRequest;
(function(DeleteCollectionRequest2) {
  DeleteCollectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteCollectionRequest || (DeleteCollectionRequest = {}));
var DeleteCollectionResponse;
(function(DeleteCollectionResponse2) {
  DeleteCollectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteCollectionResponse || (DeleteCollectionResponse = {}));
var DeleteFacesRequest;
(function(DeleteFacesRequest2) {
  DeleteFacesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteFacesRequest || (DeleteFacesRequest = {}));
var DeleteFacesResponse;
(function(DeleteFacesResponse2) {
  DeleteFacesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteFacesResponse || (DeleteFacesResponse = {}));
var DeleteProjectRequest;
(function(DeleteProjectRequest2) {
  DeleteProjectRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteProjectRequest || (DeleteProjectRequest = {}));
var ProjectStatus;
(function(ProjectStatus2) {
  ProjectStatus2["CREATED"] = "CREATED";
  ProjectStatus2["CREATING"] = "CREATING";
  ProjectStatus2["DELETING"] = "DELETING";
})(ProjectStatus || (ProjectStatus = {}));
var DeleteProjectResponse;
(function(DeleteProjectResponse2) {
  DeleteProjectResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteProjectResponse || (DeleteProjectResponse = {}));
var DeleteProjectVersionRequest;
(function(DeleteProjectVersionRequest2) {
  DeleteProjectVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteProjectVersionRequest || (DeleteProjectVersionRequest = {}));
var ProjectVersionStatus;
(function(ProjectVersionStatus2) {
  ProjectVersionStatus2["DELETING"] = "DELETING";
  ProjectVersionStatus2["FAILED"] = "FAILED";
  ProjectVersionStatus2["RUNNING"] = "RUNNING";
  ProjectVersionStatus2["STARTING"] = "STARTING";
  ProjectVersionStatus2["STOPPED"] = "STOPPED";
  ProjectVersionStatus2["STOPPING"] = "STOPPING";
  ProjectVersionStatus2["TRAINING_COMPLETED"] = "TRAINING_COMPLETED";
  ProjectVersionStatus2["TRAINING_FAILED"] = "TRAINING_FAILED";
  ProjectVersionStatus2["TRAINING_IN_PROGRESS"] = "TRAINING_IN_PROGRESS";
})(ProjectVersionStatus || (ProjectVersionStatus = {}));
var DeleteProjectVersionResponse;
(function(DeleteProjectVersionResponse2) {
  DeleteProjectVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteProjectVersionResponse || (DeleteProjectVersionResponse = {}));
var DeleteStreamProcessorRequest;
(function(DeleteStreamProcessorRequest2) {
  DeleteStreamProcessorRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteStreamProcessorRequest || (DeleteStreamProcessorRequest = {}));
var DeleteStreamProcessorResponse;
(function(DeleteStreamProcessorResponse2) {
  DeleteStreamProcessorResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteStreamProcessorResponse || (DeleteStreamProcessorResponse = {}));
var DescribeCollectionRequest;
(function(DescribeCollectionRequest2) {
  DescribeCollectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeCollectionRequest || (DescribeCollectionRequest = {}));
var DescribeCollectionResponse;
(function(DescribeCollectionResponse2) {
  DescribeCollectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeCollectionResponse || (DescribeCollectionResponse = {}));
var DescribeProjectsRequest;
(function(DescribeProjectsRequest2) {
  DescribeProjectsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeProjectsRequest || (DescribeProjectsRequest = {}));
var ProjectDescription;
(function(ProjectDescription2) {
  ProjectDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProjectDescription || (ProjectDescription = {}));
var DescribeProjectsResponse;
(function(DescribeProjectsResponse2) {
  DescribeProjectsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeProjectsResponse || (DescribeProjectsResponse = {}));
var InvalidPaginationTokenException;
(function(InvalidPaginationTokenException2) {
  InvalidPaginationTokenException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidPaginationTokenException || (InvalidPaginationTokenException = {}));
var DescribeProjectVersionsRequest;
(function(DescribeProjectVersionsRequest2) {
  DescribeProjectVersionsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeProjectVersionsRequest || (DescribeProjectVersionsRequest = {}));
var Summary;
(function(Summary2) {
  Summary2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Summary || (Summary = {}));
var EvaluationResult;
(function(EvaluationResult2) {
  EvaluationResult2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(EvaluationResult || (EvaluationResult = {}));
var ValidationData;
(function(ValidationData2) {
  ValidationData2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ValidationData || (ValidationData = {}));
var TestingDataResult;
(function(TestingDataResult2) {
  TestingDataResult2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TestingDataResult || (TestingDataResult = {}));
var TrainingDataResult;
(function(TrainingDataResult2) {
  TrainingDataResult2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TrainingDataResult || (TrainingDataResult = {}));
var ProjectVersionDescription;
(function(ProjectVersionDescription2) {
  ProjectVersionDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProjectVersionDescription || (ProjectVersionDescription = {}));
var DescribeProjectVersionsResponse;
(function(DescribeProjectVersionsResponse2) {
  DescribeProjectVersionsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeProjectVersionsResponse || (DescribeProjectVersionsResponse = {}));
var DescribeStreamProcessorRequest;
(function(DescribeStreamProcessorRequest2) {
  DescribeStreamProcessorRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeStreamProcessorRequest || (DescribeStreamProcessorRequest = {}));
var StreamProcessorStatus;
(function(StreamProcessorStatus2) {
  StreamProcessorStatus2["FAILED"] = "FAILED";
  StreamProcessorStatus2["RUNNING"] = "RUNNING";
  StreamProcessorStatus2["STARTING"] = "STARTING";
  StreamProcessorStatus2["STOPPED"] = "STOPPED";
  StreamProcessorStatus2["STOPPING"] = "STOPPING";
})(StreamProcessorStatus || (StreamProcessorStatus = {}));
var DescribeStreamProcessorResponse;
(function(DescribeStreamProcessorResponse2) {
  DescribeStreamProcessorResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeStreamProcessorResponse || (DescribeStreamProcessorResponse = {}));
var DetectCustomLabelsRequest;
(function(DetectCustomLabelsRequest2) {
  DetectCustomLabelsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectCustomLabelsRequest || (DetectCustomLabelsRequest = {}));
var DetectCustomLabelsResponse;
(function(DetectCustomLabelsResponse2) {
  DetectCustomLabelsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectCustomLabelsResponse || (DetectCustomLabelsResponse = {}));
var ResourceNotReadyException;
(function(ResourceNotReadyException2) {
  ResourceNotReadyException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceNotReadyException || (ResourceNotReadyException = {}));
var DetectFacesRequest;
(function(DetectFacesRequest2) {
  DetectFacesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectFacesRequest || (DetectFacesRequest = {}));
var DetectFacesResponse;
(function(DetectFacesResponse2) {
  DetectFacesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectFacesResponse || (DetectFacesResponse = {}));
var DetectionFilter;
(function(DetectionFilter2) {
  DetectionFilter2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectionFilter || (DetectionFilter = {}));
var DetectLabelsRequest;
(function(DetectLabelsRequest2) {
  DetectLabelsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectLabelsRequest || (DetectLabelsRequest = {}));
var Instance;
(function(Instance2) {
  Instance2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Instance || (Instance = {}));
var Parent;
(function(Parent2) {
  Parent2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Parent || (Parent = {}));
var Label;
(function(Label2) {
  Label2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Label || (Label = {}));
var DetectLabelsResponse;
(function(DetectLabelsResponse2) {
  DetectLabelsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectLabelsResponse || (DetectLabelsResponse = {}));
var HumanLoopDataAttributes;
(function(HumanLoopDataAttributes3) {
  HumanLoopDataAttributes3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HumanLoopDataAttributes || (HumanLoopDataAttributes = {}));
var HumanLoopConfig;
(function(HumanLoopConfig3) {
  HumanLoopConfig3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HumanLoopConfig || (HumanLoopConfig = {}));
var DetectModerationLabelsRequest;
(function(DetectModerationLabelsRequest2) {
  DetectModerationLabelsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectModerationLabelsRequest || (DetectModerationLabelsRequest = {}));
var HumanLoopActivationOutput;
(function(HumanLoopActivationOutput3) {
  HumanLoopActivationOutput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HumanLoopActivationOutput || (HumanLoopActivationOutput = {}));
var DetectModerationLabelsResponse;
(function(DetectModerationLabelsResponse2) {
  DetectModerationLabelsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectModerationLabelsResponse || (DetectModerationLabelsResponse = {}));
var HumanLoopQuotaExceededException;
(function(HumanLoopQuotaExceededException3) {
  HumanLoopQuotaExceededException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HumanLoopQuotaExceededException || (HumanLoopQuotaExceededException = {}));
var ProtectiveEquipmentSummarizationAttributes;
(function(ProtectiveEquipmentSummarizationAttributes2) {
  ProtectiveEquipmentSummarizationAttributes2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProtectiveEquipmentSummarizationAttributes || (ProtectiveEquipmentSummarizationAttributes = {}));
var DetectProtectiveEquipmentRequest;
(function(DetectProtectiveEquipmentRequest2) {
  DetectProtectiveEquipmentRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectProtectiveEquipmentRequest || (DetectProtectiveEquipmentRequest = {}));
var ProtectiveEquipmentPerson;
(function(ProtectiveEquipmentPerson2) {
  ProtectiveEquipmentPerson2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProtectiveEquipmentPerson || (ProtectiveEquipmentPerson = {}));
var ProtectiveEquipmentSummary;
(function(ProtectiveEquipmentSummary2) {
  ProtectiveEquipmentSummary2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProtectiveEquipmentSummary || (ProtectiveEquipmentSummary = {}));
var DetectProtectiveEquipmentResponse;
(function(DetectProtectiveEquipmentResponse2) {
  DetectProtectiveEquipmentResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectProtectiveEquipmentResponse || (DetectProtectiveEquipmentResponse = {}));
var RegionOfInterest;
(function(RegionOfInterest2) {
  RegionOfInterest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(RegionOfInterest || (RegionOfInterest = {}));
var DetectTextFilters;
(function(DetectTextFilters2) {
  DetectTextFilters2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectTextFilters || (DetectTextFilters = {}));
var DetectTextRequest;
(function(DetectTextRequest2) {
  DetectTextRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectTextRequest || (DetectTextRequest = {}));
var TextTypes;
(function(TextTypes2) {
  TextTypes2["LINE"] = "LINE";
  TextTypes2["WORD"] = "WORD";
})(TextTypes || (TextTypes = {}));
var TextDetection;
(function(TextDetection2) {
  TextDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TextDetection || (TextDetection = {}));
var DetectTextResponse;
(function(DetectTextResponse2) {
  DetectTextResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DetectTextResponse || (DetectTextResponse = {}));
var Face;
(function(Face2) {
  Face2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Face || (Face = {}));
var FaceAttributes;
(function(FaceAttributes2) {
  FaceAttributes2["ALL"] = "ALL";
  FaceAttributes2["DEFAULT"] = "DEFAULT";
})(FaceAttributes || (FaceAttributes = {}));
var FaceDetection;
(function(FaceDetection2) {
  FaceDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(FaceDetection || (FaceDetection = {}));
var FaceMatch;
(function(FaceMatch2) {
  FaceMatch2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(FaceMatch || (FaceMatch = {}));
var FaceRecord;
(function(FaceRecord2) {
  FaceRecord2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(FaceRecord || (FaceRecord = {}));
var FaceSearchSortBy;
(function(FaceSearchSortBy2) {
  FaceSearchSortBy2["INDEX"] = "INDEX";
  FaceSearchSortBy2["TIMESTAMP"] = "TIMESTAMP";
})(FaceSearchSortBy || (FaceSearchSortBy = {}));
var GetCelebrityInfoRequest;
(function(GetCelebrityInfoRequest2) {
  GetCelebrityInfoRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetCelebrityInfoRequest || (GetCelebrityInfoRequest = {}));
var GetCelebrityInfoResponse;
(function(GetCelebrityInfoResponse2) {
  GetCelebrityInfoResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetCelebrityInfoResponse || (GetCelebrityInfoResponse = {}));
var GetCelebrityRecognitionRequest;
(function(GetCelebrityRecognitionRequest2) {
  GetCelebrityRecognitionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetCelebrityRecognitionRequest || (GetCelebrityRecognitionRequest = {}));
var VideoJobStatus;
(function(VideoJobStatus2) {
  VideoJobStatus2["FAILED"] = "FAILED";
  VideoJobStatus2["IN_PROGRESS"] = "IN_PROGRESS";
  VideoJobStatus2["SUCCEEDED"] = "SUCCEEDED";
})(VideoJobStatus || (VideoJobStatus = {}));
var VideoMetadata;
(function(VideoMetadata2) {
  VideoMetadata2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(VideoMetadata || (VideoMetadata = {}));
var GetCelebrityRecognitionResponse;
(function(GetCelebrityRecognitionResponse2) {
  GetCelebrityRecognitionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetCelebrityRecognitionResponse || (GetCelebrityRecognitionResponse = {}));
var GetContentModerationRequest;
(function(GetContentModerationRequest2) {
  GetContentModerationRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetContentModerationRequest || (GetContentModerationRequest = {}));
var GetContentModerationResponse;
(function(GetContentModerationResponse2) {
  GetContentModerationResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetContentModerationResponse || (GetContentModerationResponse = {}));
var GetFaceDetectionRequest;
(function(GetFaceDetectionRequest2) {
  GetFaceDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetFaceDetectionRequest || (GetFaceDetectionRequest = {}));
var GetFaceDetectionResponse;
(function(GetFaceDetectionResponse2) {
  GetFaceDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetFaceDetectionResponse || (GetFaceDetectionResponse = {}));
var GetFaceSearchRequest;
(function(GetFaceSearchRequest2) {
  GetFaceSearchRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetFaceSearchRequest || (GetFaceSearchRequest = {}));
var PersonDetail;
(function(PersonDetail2) {
  PersonDetail2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PersonDetail || (PersonDetail = {}));
var PersonMatch;
(function(PersonMatch2) {
  PersonMatch2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PersonMatch || (PersonMatch = {}));
var GetFaceSearchResponse;
(function(GetFaceSearchResponse2) {
  GetFaceSearchResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetFaceSearchResponse || (GetFaceSearchResponse = {}));
var LabelDetectionSortBy;
(function(LabelDetectionSortBy2) {
  LabelDetectionSortBy2["NAME"] = "NAME";
  LabelDetectionSortBy2["TIMESTAMP"] = "TIMESTAMP";
})(LabelDetectionSortBy || (LabelDetectionSortBy = {}));
var GetLabelDetectionRequest;
(function(GetLabelDetectionRequest2) {
  GetLabelDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetLabelDetectionRequest || (GetLabelDetectionRequest = {}));
var LabelDetection;
(function(LabelDetection2) {
  LabelDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(LabelDetection || (LabelDetection = {}));
var GetLabelDetectionResponse;
(function(GetLabelDetectionResponse2) {
  GetLabelDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetLabelDetectionResponse || (GetLabelDetectionResponse = {}));
var PersonTrackingSortBy;
(function(PersonTrackingSortBy2) {
  PersonTrackingSortBy2["INDEX"] = "INDEX";
  PersonTrackingSortBy2["TIMESTAMP"] = "TIMESTAMP";
})(PersonTrackingSortBy || (PersonTrackingSortBy = {}));
var GetPersonTrackingRequest;
(function(GetPersonTrackingRequest2) {
  GetPersonTrackingRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetPersonTrackingRequest || (GetPersonTrackingRequest = {}));
var PersonDetection;
(function(PersonDetection2) {
  PersonDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PersonDetection || (PersonDetection = {}));
var GetPersonTrackingResponse;
(function(GetPersonTrackingResponse2) {
  GetPersonTrackingResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetPersonTrackingResponse || (GetPersonTrackingResponse = {}));
var GetSegmentDetectionRequest;
(function(GetSegmentDetectionRequest2) {
  GetSegmentDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetSegmentDetectionRequest || (GetSegmentDetectionRequest = {}));
var ShotSegment;
(function(ShotSegment2) {
  ShotSegment2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ShotSegment || (ShotSegment = {}));
var TechnicalCueType;
(function(TechnicalCueType2) {
  TechnicalCueType2["BLACK_FRAMES"] = "BlackFrames";
  TechnicalCueType2["COLOR_BARS"] = "ColorBars";
  TechnicalCueType2["END_CREDITS"] = "EndCredits";
})(TechnicalCueType || (TechnicalCueType = {}));
var TechnicalCueSegment;
(function(TechnicalCueSegment2) {
  TechnicalCueSegment2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TechnicalCueSegment || (TechnicalCueSegment = {}));
var SegmentType;
(function(SegmentType2) {
  SegmentType2["SHOT"] = "SHOT";
  SegmentType2["TECHNICAL_CUE"] = "TECHNICAL_CUE";
})(SegmentType || (SegmentType = {}));
var SegmentDetection;
(function(SegmentDetection2) {
  SegmentDetection2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SegmentDetection || (SegmentDetection = {}));
var SegmentTypeInfo;
(function(SegmentTypeInfo2) {
  SegmentTypeInfo2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SegmentTypeInfo || (SegmentTypeInfo = {}));
var GetSegmentDetectionResponse;
(function(GetSegmentDetectionResponse2) {
  GetSegmentDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetSegmentDetectionResponse || (GetSegmentDetectionResponse = {}));
var GetTextDetectionRequest;
(function(GetTextDetectionRequest2) {
  GetTextDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetTextDetectionRequest || (GetTextDetectionRequest = {}));
var TextDetectionResult;
(function(TextDetectionResult2) {
  TextDetectionResult2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TextDetectionResult || (TextDetectionResult = {}));
var GetTextDetectionResponse;
(function(GetTextDetectionResponse2) {
  GetTextDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(GetTextDetectionResponse || (GetTextDetectionResponse = {}));
var IdempotentParameterMismatchException;
(function(IdempotentParameterMismatchException3) {
  IdempotentParameterMismatchException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(IdempotentParameterMismatchException || (IdempotentParameterMismatchException = {}));
var IndexFacesRequest;
(function(IndexFacesRequest2) {
  IndexFacesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(IndexFacesRequest || (IndexFacesRequest = {}));
var Reason;
(function(Reason2) {
  Reason2["EXCEEDS_MAX_FACES"] = "EXCEEDS_MAX_FACES";
  Reason2["EXTREME_POSE"] = "EXTREME_POSE";
  Reason2["LOW_BRIGHTNESS"] = "LOW_BRIGHTNESS";
  Reason2["LOW_CONFIDENCE"] = "LOW_CONFIDENCE";
  Reason2["LOW_FACE_QUALITY"] = "LOW_FACE_QUALITY";
  Reason2["LOW_SHARPNESS"] = "LOW_SHARPNESS";
  Reason2["SMALL_BOUNDING_BOX"] = "SMALL_BOUNDING_BOX";
})(Reason || (Reason = {}));
var UnindexedFace;
(function(UnindexedFace2) {
  UnindexedFace2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UnindexedFace || (UnindexedFace = {}));
var IndexFacesResponse;
(function(IndexFacesResponse2) {
  IndexFacesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(IndexFacesResponse || (IndexFacesResponse = {}));
var ServiceQuotaExceededException;
(function(ServiceQuotaExceededException2) {
  ServiceQuotaExceededException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
var ListCollectionsRequest;
(function(ListCollectionsRequest2) {
  ListCollectionsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListCollectionsRequest || (ListCollectionsRequest = {}));
var ListCollectionsResponse;
(function(ListCollectionsResponse2) {
  ListCollectionsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListCollectionsResponse || (ListCollectionsResponse = {}));
var ListFacesRequest;
(function(ListFacesRequest2) {
  ListFacesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListFacesRequest || (ListFacesRequest = {}));
var ListFacesResponse;
(function(ListFacesResponse2) {
  ListFacesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListFacesResponse || (ListFacesResponse = {}));
var ListStreamProcessorsRequest;
(function(ListStreamProcessorsRequest2) {
  ListStreamProcessorsRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListStreamProcessorsRequest || (ListStreamProcessorsRequest = {}));
var StreamProcessor;
(function(StreamProcessor2) {
  StreamProcessor2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StreamProcessor || (StreamProcessor = {}));
var ListStreamProcessorsResponse;
(function(ListStreamProcessorsResponse2) {
  ListStreamProcessorsResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListStreamProcessorsResponse || (ListStreamProcessorsResponse = {}));
var NotificationChannel;
(function(NotificationChannel3) {
  NotificationChannel3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(NotificationChannel || (NotificationChannel = {}));
var RecognizeCelebritiesRequest;
(function(RecognizeCelebritiesRequest2) {
  RecognizeCelebritiesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(RecognizeCelebritiesRequest || (RecognizeCelebritiesRequest = {}));
var RecognizeCelebritiesResponse;
(function(RecognizeCelebritiesResponse2) {
  RecognizeCelebritiesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(RecognizeCelebritiesResponse || (RecognizeCelebritiesResponse = {}));
var SearchFacesRequest;
(function(SearchFacesRequest2) {
  SearchFacesRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SearchFacesRequest || (SearchFacesRequest = {}));
var SearchFacesResponse;
(function(SearchFacesResponse2) {
  SearchFacesResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SearchFacesResponse || (SearchFacesResponse = {}));
var SearchFacesByImageRequest;
(function(SearchFacesByImageRequest2) {
  SearchFacesByImageRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SearchFacesByImageRequest || (SearchFacesByImageRequest = {}));
var SearchFacesByImageResponse;
(function(SearchFacesByImageResponse2) {
  SearchFacesByImageResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SearchFacesByImageResponse || (SearchFacesByImageResponse = {}));
var Video;
(function(Video2) {
  Video2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Video || (Video = {}));
var StartCelebrityRecognitionRequest;
(function(StartCelebrityRecognitionRequest2) {
  StartCelebrityRecognitionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartCelebrityRecognitionRequest || (StartCelebrityRecognitionRequest = {}));
var StartCelebrityRecognitionResponse;
(function(StartCelebrityRecognitionResponse2) {
  StartCelebrityRecognitionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartCelebrityRecognitionResponse || (StartCelebrityRecognitionResponse = {}));
var VideoTooLargeException;
(function(VideoTooLargeException2) {
  VideoTooLargeException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(VideoTooLargeException || (VideoTooLargeException = {}));
var StartContentModerationRequest;
(function(StartContentModerationRequest2) {
  StartContentModerationRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartContentModerationRequest || (StartContentModerationRequest = {}));
var StartContentModerationResponse;
(function(StartContentModerationResponse2) {
  StartContentModerationResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartContentModerationResponse || (StartContentModerationResponse = {}));
var StartFaceDetectionRequest;
(function(StartFaceDetectionRequest2) {
  StartFaceDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartFaceDetectionRequest || (StartFaceDetectionRequest = {}));
var StartFaceDetectionResponse;
(function(StartFaceDetectionResponse2) {
  StartFaceDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartFaceDetectionResponse || (StartFaceDetectionResponse = {}));
var StartFaceSearchRequest;
(function(StartFaceSearchRequest2) {
  StartFaceSearchRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartFaceSearchRequest || (StartFaceSearchRequest = {}));
var StartFaceSearchResponse;
(function(StartFaceSearchResponse2) {
  StartFaceSearchResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartFaceSearchResponse || (StartFaceSearchResponse = {}));
var StartLabelDetectionRequest;
(function(StartLabelDetectionRequest2) {
  StartLabelDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartLabelDetectionRequest || (StartLabelDetectionRequest = {}));
var StartLabelDetectionResponse;
(function(StartLabelDetectionResponse2) {
  StartLabelDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartLabelDetectionResponse || (StartLabelDetectionResponse = {}));
var StartPersonTrackingRequest;
(function(StartPersonTrackingRequest2) {
  StartPersonTrackingRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartPersonTrackingRequest || (StartPersonTrackingRequest = {}));
var StartPersonTrackingResponse;
(function(StartPersonTrackingResponse2) {
  StartPersonTrackingResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartPersonTrackingResponse || (StartPersonTrackingResponse = {}));
var StartProjectVersionRequest;
(function(StartProjectVersionRequest2) {
  StartProjectVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartProjectVersionRequest || (StartProjectVersionRequest = {}));
var StartProjectVersionResponse;
(function(StartProjectVersionResponse2) {
  StartProjectVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartProjectVersionResponse || (StartProjectVersionResponse = {}));
var StartShotDetectionFilter;
(function(StartShotDetectionFilter2) {
  StartShotDetectionFilter2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartShotDetectionFilter || (StartShotDetectionFilter = {}));
var StartTechnicalCueDetectionFilter;
(function(StartTechnicalCueDetectionFilter2) {
  StartTechnicalCueDetectionFilter2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartTechnicalCueDetectionFilter || (StartTechnicalCueDetectionFilter = {}));
var StartSegmentDetectionFilters;
(function(StartSegmentDetectionFilters2) {
  StartSegmentDetectionFilters2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartSegmentDetectionFilters || (StartSegmentDetectionFilters = {}));
var StartSegmentDetectionRequest;
(function(StartSegmentDetectionRequest2) {
  StartSegmentDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartSegmentDetectionRequest || (StartSegmentDetectionRequest = {}));
var StartSegmentDetectionResponse;
(function(StartSegmentDetectionResponse2) {
  StartSegmentDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartSegmentDetectionResponse || (StartSegmentDetectionResponse = {}));
var StartStreamProcessorRequest;
(function(StartStreamProcessorRequest2) {
  StartStreamProcessorRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartStreamProcessorRequest || (StartStreamProcessorRequest = {}));
var StartStreamProcessorResponse;
(function(StartStreamProcessorResponse2) {
  StartStreamProcessorResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartStreamProcessorResponse || (StartStreamProcessorResponse = {}));
var StartTextDetectionFilters;
(function(StartTextDetectionFilters2) {
  StartTextDetectionFilters2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartTextDetectionFilters || (StartTextDetectionFilters = {}));
var StartTextDetectionRequest;
(function(StartTextDetectionRequest2) {
  StartTextDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartTextDetectionRequest || (StartTextDetectionRequest = {}));
var StartTextDetectionResponse;
(function(StartTextDetectionResponse2) {
  StartTextDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartTextDetectionResponse || (StartTextDetectionResponse = {}));
var StopProjectVersionRequest;
(function(StopProjectVersionRequest2) {
  StopProjectVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StopProjectVersionRequest || (StopProjectVersionRequest = {}));
var StopProjectVersionResponse;
(function(StopProjectVersionResponse2) {
  StopProjectVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StopProjectVersionResponse || (StopProjectVersionResponse = {}));
var StopStreamProcessorRequest;
(function(StopStreamProcessorRequest2) {
  StopStreamProcessorRequest2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StopStreamProcessorRequest || (StopStreamProcessorRequest = {}));
var StopStreamProcessorResponse;
(function(StopStreamProcessorResponse2) {
  StopStreamProcessorResponse2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StopStreamProcessorResponse || (StopStreamProcessorResponse = {}));

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1DetectFacesCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RekognitionService.DetectFaces"
      };
      body = JSON.stringify(serializeAws_json1_1DetectFacesRequest(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectLabelsCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RekognitionService.DetectLabels"
      };
      body = JSON.stringify(serializeAws_json1_1DetectLabelsRequest(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectModerationLabelsCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RekognitionService.DetectModerationLabels"
      };
      body = JSON.stringify(serializeAws_json1_1DetectModerationLabelsRequest(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectTextCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RekognitionService.DetectText"
      };
      body = JSON.stringify(serializeAws_json1_1DetectTextRequest(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1RecognizeCelebritiesCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RekognitionService.RecognizeCelebrities"
      };
      body = JSON.stringify(serializeAws_json1_1RecognizeCelebritiesRequest(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1SearchFacesByImageCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RekognitionService.SearchFacesByImage"
      };
      body = JSON.stringify(serializeAws_json1_1SearchFacesByImageRequest(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1DetectFacesCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectFacesCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectFacesResponse(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectFacesCommandError = function(output, context) {
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
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.rekognition#AccessDeniedException":
              return [3, 2];
            case "ImageTooLargeException":
              return [3, 4];
            case "com.amazonaws.rekognition#ImageTooLargeException":
              return [3, 4];
            case "InternalServerError":
              return [3, 6];
            case "com.amazonaws.rekognition#InternalServerError":
              return [3, 6];
            case "InvalidImageFormatException":
              return [3, 8];
            case "com.amazonaws.rekognition#InvalidImageFormatException":
              return [3, 8];
            case "InvalidParameterException":
              return [3, 10];
            case "com.amazonaws.rekognition#InvalidParameterException":
              return [3, 10];
            case "InvalidS3ObjectException":
              return [3, 12];
            case "com.amazonaws.rekognition#InvalidS3ObjectException":
              return [3, 12];
            case "ProvisionedThroughputExceededException":
              return [3, 14];
            case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
              return [3, 14];
            case "ThrottlingException":
              return [3, 16];
            case "com.amazonaws.rekognition#ThrottlingException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1DetectLabelsCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectLabelsCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectLabelsResponse(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectLabelsCommandError = function(output, context) {
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
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.rekognition#AccessDeniedException":
              return [3, 2];
            case "ImageTooLargeException":
              return [3, 4];
            case "com.amazonaws.rekognition#ImageTooLargeException":
              return [3, 4];
            case "InternalServerError":
              return [3, 6];
            case "com.amazonaws.rekognition#InternalServerError":
              return [3, 6];
            case "InvalidImageFormatException":
              return [3, 8];
            case "com.amazonaws.rekognition#InvalidImageFormatException":
              return [3, 8];
            case "InvalidParameterException":
              return [3, 10];
            case "com.amazonaws.rekognition#InvalidParameterException":
              return [3, 10];
            case "InvalidS3ObjectException":
              return [3, 12];
            case "com.amazonaws.rekognition#InvalidS3ObjectException":
              return [3, 12];
            case "ProvisionedThroughputExceededException":
              return [3, 14];
            case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
              return [3, 14];
            case "ThrottlingException":
              return [3, 16];
            case "com.amazonaws.rekognition#ThrottlingException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1DetectModerationLabelsCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectModerationLabelsCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectModerationLabelsResponse(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectModerationLabelsCommandError = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator4(this, function(_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign4({}, output)];
          _m = {};
          return [4, parseBody3(output.body, context)];
        case 1:
          parsedOutput = __assign4.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.rekognition#AccessDeniedException":
              return [3, 2];
            case "HumanLoopQuotaExceededException":
              return [3, 4];
            case "com.amazonaws.rekognition#HumanLoopQuotaExceededException":
              return [3, 4];
            case "ImageTooLargeException":
              return [3, 6];
            case "com.amazonaws.rekognition#ImageTooLargeException":
              return [3, 6];
            case "InternalServerError":
              return [3, 8];
            case "com.amazonaws.rekognition#InternalServerError":
              return [3, 8];
            case "InvalidImageFormatException":
              return [3, 10];
            case "com.amazonaws.rekognition#InvalidImageFormatException":
              return [3, 10];
            case "InvalidParameterException":
              return [3, 12];
            case "com.amazonaws.rekognition#InvalidParameterException":
              return [3, 12];
            case "InvalidS3ObjectException":
              return [3, 14];
            case "com.amazonaws.rekognition#InvalidS3ObjectException":
              return [3, 14];
            case "ProvisionedThroughputExceededException":
              return [3, 16];
            case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
              return [3, 16];
            case "ThrottlingException":
              return [3, 18];
            case "com.amazonaws.rekognition#ThrottlingException":
              return [3, 18];
          }
          return [3, 20];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _k.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 18:
          _l = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _l.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign4(__assign4({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata3(output) });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1DetectTextCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectTextCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectTextResponse(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectTextCommandError = function(output, context) {
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
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.rekognition#AccessDeniedException":
              return [3, 2];
            case "ImageTooLargeException":
              return [3, 4];
            case "com.amazonaws.rekognition#ImageTooLargeException":
              return [3, 4];
            case "InternalServerError":
              return [3, 6];
            case "com.amazonaws.rekognition#InternalServerError":
              return [3, 6];
            case "InvalidImageFormatException":
              return [3, 8];
            case "com.amazonaws.rekognition#InvalidImageFormatException":
              return [3, 8];
            case "InvalidParameterException":
              return [3, 10];
            case "com.amazonaws.rekognition#InvalidParameterException":
              return [3, 10];
            case "InvalidS3ObjectException":
              return [3, 12];
            case "com.amazonaws.rekognition#InvalidS3ObjectException":
              return [3, 12];
            case "ProvisionedThroughputExceededException":
              return [3, 14];
            case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
              return [3, 14];
            case "ThrottlingException":
              return [3, 16];
            case "com.amazonaws.rekognition#ThrottlingException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1RecognizeCelebritiesCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1RecognizeCelebritiesCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1RecognizeCelebritiesResponse(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RecognizeCelebritiesCommandError = function(output, context) {
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
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.rekognition#AccessDeniedException":
              return [3, 2];
            case "ImageTooLargeException":
              return [3, 4];
            case "com.amazonaws.rekognition#ImageTooLargeException":
              return [3, 4];
            case "InternalServerError":
              return [3, 6];
            case "com.amazonaws.rekognition#InternalServerError":
              return [3, 6];
            case "InvalidImageFormatException":
              return [3, 8];
            case "com.amazonaws.rekognition#InvalidImageFormatException":
              return [3, 8];
            case "InvalidParameterException":
              return [3, 10];
            case "com.amazonaws.rekognition#InvalidParameterException":
              return [3, 10];
            case "InvalidS3ObjectException":
              return [3, 12];
            case "com.amazonaws.rekognition#InvalidS3ObjectException":
              return [3, 12];
            case "ProvisionedThroughputExceededException":
              return [3, 14];
            case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
              return [3, 14];
            case "ThrottlingException":
              return [3, 16];
            case "com.amazonaws.rekognition#ThrottlingException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_m.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 19];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1SearchFacesByImageCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1SearchFacesByImageCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchFacesByImageResponse(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchFacesByImageCommandError = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator4(this, function(_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign4({}, output)];
          _m = {};
          return [4, parseBody3(output.body, context)];
        case 1:
          parsedOutput = __assign4.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.rekognition#AccessDeniedException":
              return [3, 2];
            case "ImageTooLargeException":
              return [3, 4];
            case "com.amazonaws.rekognition#ImageTooLargeException":
              return [3, 4];
            case "InternalServerError":
              return [3, 6];
            case "com.amazonaws.rekognition#InternalServerError":
              return [3, 6];
            case "InvalidImageFormatException":
              return [3, 8];
            case "com.amazonaws.rekognition#InvalidImageFormatException":
              return [3, 8];
            case "InvalidParameterException":
              return [3, 10];
            case "com.amazonaws.rekognition#InvalidParameterException":
              return [3, 10];
            case "InvalidS3ObjectException":
              return [3, 12];
            case "com.amazonaws.rekognition#InvalidS3ObjectException":
              return [3, 12];
            case "ProvisionedThroughputExceededException":
              return [3, 14];
            case "com.amazonaws.rekognition#ProvisionedThroughputExceededException":
              return [3, 14];
            case "ResourceNotFoundException":
              return [3, 16];
            case "com.amazonaws.rekognition#ResourceNotFoundException":
              return [3, 16];
            case "ThrottlingException":
              return [3, 18];
            case "com.amazonaws.rekognition#ThrottlingException":
              return [3, 18];
          }
          return [3, 20];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _g.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _h.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _j.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse2(parsedOutput, context)];
        case 17:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _k.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 18:
          _l = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _l.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign4(__assign4({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata3(output) });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1AccessDeniedExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
      contents = __assign4({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
      contents = __assign4({ name: "HumanLoopQuotaExceededException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ImageTooLargeExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ImageTooLargeException(body, context);
      contents = __assign4({ name: "ImageTooLargeException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InternalServerErrorResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalServerError(body, context);
      contents = __assign4({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidImageFormatExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidImageFormatException(body, context);
      contents = __assign4({ name: "InvalidImageFormatException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
      contents = __assign4({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidS3ObjectExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidS3ObjectException(body, context);
      contents = __assign4({ name: "InvalidS3ObjectException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
      contents = __assign4({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException2(body, context);
      contents = __assign4({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ThrottlingExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ThrottlingException(body, context);
      contents = __assign4({ name: "ThrottlingException", $fault: "server", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1Attributes = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_json1_1BoundingBox = function(input, context) {
  return __assign4(__assign4(__assign4(__assign4({}, input.Height !== void 0 && input.Height !== null && { Height: input.Height }), input.Left !== void 0 && input.Left !== null && { Left: input.Left }), input.Top !== void 0 && input.Top !== null && { Top: input.Top }), input.Width !== void 0 && input.Width !== null && { Width: input.Width });
};
var serializeAws_json1_1ContentClassifiers = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_json1_1DetectFacesRequest = function(input, context) {
  return __assign4(__assign4({}, input.Attributes !== void 0 && input.Attributes !== null && { Attributes: serializeAws_json1_1Attributes(input.Attributes, context) }), input.Image !== void 0 && input.Image !== null && { Image: serializeAws_json1_1Image(input.Image, context) });
};
var serializeAws_json1_1DetectionFilter = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.MinBoundingBoxHeight !== void 0 && input.MinBoundingBoxHeight !== null && { MinBoundingBoxHeight: input.MinBoundingBoxHeight }), input.MinBoundingBoxWidth !== void 0 && input.MinBoundingBoxWidth !== null && { MinBoundingBoxWidth: input.MinBoundingBoxWidth }), input.MinConfidence !== void 0 && input.MinConfidence !== null && { MinConfidence: input.MinConfidence });
};
var serializeAws_json1_1DetectLabelsRequest = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.Image !== void 0 && input.Image !== null && { Image: serializeAws_json1_1Image(input.Image, context) }), input.MaxLabels !== void 0 && input.MaxLabels !== null && { MaxLabels: input.MaxLabels }), input.MinConfidence !== void 0 && input.MinConfidence !== null && { MinConfidence: input.MinConfidence });
};
var serializeAws_json1_1DetectModerationLabelsRequest = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.HumanLoopConfig !== void 0 && input.HumanLoopConfig !== null && {
    HumanLoopConfig: serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context)
  }), input.Image !== void 0 && input.Image !== null && { Image: serializeAws_json1_1Image(input.Image, context) }), input.MinConfidence !== void 0 && input.MinConfidence !== null && { MinConfidence: input.MinConfidence });
};
var serializeAws_json1_1DetectTextFilters = function(input, context) {
  return __assign4(__assign4({}, input.RegionsOfInterest !== void 0 && input.RegionsOfInterest !== null && {
    RegionsOfInterest: serializeAws_json1_1RegionsOfInterest(input.RegionsOfInterest, context)
  }), input.WordFilter !== void 0 && input.WordFilter !== null && { WordFilter: serializeAws_json1_1DetectionFilter(input.WordFilter, context) });
};
var serializeAws_json1_1DetectTextRequest = function(input, context) {
  return __assign4(__assign4({}, input.Filters !== void 0 && input.Filters !== null && { Filters: serializeAws_json1_1DetectTextFilters(input.Filters, context) }), input.Image !== void 0 && input.Image !== null && { Image: serializeAws_json1_1Image(input.Image, context) });
};
var serializeAws_json1_1HumanLoopConfig = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.DataAttributes !== void 0 && input.DataAttributes !== null && {
    DataAttributes: serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context)
  }), input.FlowDefinitionArn !== void 0 && input.FlowDefinitionArn !== null && { FlowDefinitionArn: input.FlowDefinitionArn }), input.HumanLoopName !== void 0 && input.HumanLoopName !== null && { HumanLoopName: input.HumanLoopName });
};
var serializeAws_json1_1HumanLoopDataAttributes = function(input, context) {
  return __assign4({}, input.ContentClassifiers !== void 0 && input.ContentClassifiers !== null && {
    ContentClassifiers: serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context)
  });
};
var serializeAws_json1_1Image = function(input, context) {
  return __assign4(__assign4({}, input.Bytes !== void 0 && input.Bytes !== null && { Bytes: context.base64Encoder(input.Bytes) }), input.S3Object !== void 0 && input.S3Object !== null && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) });
};
var serializeAws_json1_1RecognizeCelebritiesRequest = function(input, context) {
  return __assign4({}, input.Image !== void 0 && input.Image !== null && { Image: serializeAws_json1_1Image(input.Image, context) });
};
var serializeAws_json1_1RegionOfInterest = function(input, context) {
  return __assign4({}, input.BoundingBox !== void 0 && input.BoundingBox !== null && { BoundingBox: serializeAws_json1_1BoundingBox(input.BoundingBox, context) });
};
var serializeAws_json1_1RegionsOfInterest = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeAws_json1_1RegionOfInterest(entry, context);
  });
};
var serializeAws_json1_1S3Object = function(input, context) {
  return __assign4(__assign4(__assign4({}, input.Bucket !== void 0 && input.Bucket !== null && { Bucket: input.Bucket }), input.Name !== void 0 && input.Name !== null && { Name: input.Name }), input.Version !== void 0 && input.Version !== null && { Version: input.Version });
};
var serializeAws_json1_1SearchFacesByImageRequest = function(input, context) {
  return __assign4(__assign4(__assign4(__assign4(__assign4({}, input.CollectionId !== void 0 && input.CollectionId !== null && { CollectionId: input.CollectionId }), input.FaceMatchThreshold !== void 0 && input.FaceMatchThreshold !== null && { FaceMatchThreshold: input.FaceMatchThreshold }), input.Image !== void 0 && input.Image !== null && { Image: serializeAws_json1_1Image(input.Image, context) }), input.MaxFaces !== void 0 && input.MaxFaces !== null && { MaxFaces: input.MaxFaces }), input.QualityFilter !== void 0 && input.QualityFilter !== null && { QualityFilter: input.QualityFilter });
};
var deserializeAws_json1_1AccessDeniedException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1AgeRange = function(output, context) {
  return {
    High: output.High !== void 0 && output.High !== null ? output.High : void 0,
    Low: output.Low !== void 0 && output.Low !== null ? output.Low : void 0
  };
};
var deserializeAws_json1_1Beard = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1BoundingBox = function(output, context) {
  return {
    Height: output.Height !== void 0 && output.Height !== null ? output.Height : void 0,
    Left: output.Left !== void 0 && output.Left !== null ? output.Left : void 0,
    Top: output.Top !== void 0 && output.Top !== null ? output.Top : void 0,
    Width: output.Width !== void 0 && output.Width !== null ? output.Width : void 0
  };
};
var deserializeAws_json1_1Celebrity = function(output, context) {
  return {
    Face: output.Face !== void 0 && output.Face !== null ? deserializeAws_json1_1ComparedFace(output.Face, context) : void 0,
    Id: output.Id !== void 0 && output.Id !== null ? output.Id : void 0,
    MatchConfidence: output.MatchConfidence !== void 0 && output.MatchConfidence !== null ? output.MatchConfidence : void 0,
    Name: output.Name !== void 0 && output.Name !== null ? output.Name : void 0,
    Urls: output.Urls !== void 0 && output.Urls !== null ? deserializeAws_json1_1Urls(output.Urls, context) : void 0
  };
};
var deserializeAws_json1_1CelebrityList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Celebrity(entry, context);
  });
};
var deserializeAws_json1_1ComparedFace = function(output, context) {
  return {
    BoundingBox: output.BoundingBox !== void 0 && output.BoundingBox !== null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : void 0,
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Landmarks: output.Landmarks !== void 0 && output.Landmarks !== null ? deserializeAws_json1_1Landmarks(output.Landmarks, context) : void 0,
    Pose: output.Pose !== void 0 && output.Pose !== null ? deserializeAws_json1_1Pose(output.Pose, context) : void 0,
    Quality: output.Quality !== void 0 && output.Quality !== null ? deserializeAws_json1_1ImageQuality(output.Quality, context) : void 0
  };
};
var deserializeAws_json1_1ComparedFaceList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1ComparedFace(entry, context);
  });
};
var deserializeAws_json1_1DetectFacesResponse = function(output, context) {
  return {
    FaceDetails: output.FaceDetails !== void 0 && output.FaceDetails !== null ? deserializeAws_json1_1FaceDetailList(output.FaceDetails, context) : void 0,
    OrientationCorrection: output.OrientationCorrection !== void 0 && output.OrientationCorrection !== null ? output.OrientationCorrection : void 0
  };
};
var deserializeAws_json1_1DetectLabelsResponse = function(output, context) {
  return {
    LabelModelVersion: output.LabelModelVersion !== void 0 && output.LabelModelVersion !== null ? output.LabelModelVersion : void 0,
    Labels: output.Labels !== void 0 && output.Labels !== null ? deserializeAws_json1_1Labels(output.Labels, context) : void 0,
    OrientationCorrection: output.OrientationCorrection !== void 0 && output.OrientationCorrection !== null ? output.OrientationCorrection : void 0
  };
};
var deserializeAws_json1_1DetectModerationLabelsResponse = function(output, context) {
  return {
    HumanLoopActivationOutput: output.HumanLoopActivationOutput !== void 0 && output.HumanLoopActivationOutput !== null ? deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context) : void 0,
    ModerationLabels: output.ModerationLabels !== void 0 && output.ModerationLabels !== null ? deserializeAws_json1_1ModerationLabels(output.ModerationLabels, context) : void 0,
    ModerationModelVersion: output.ModerationModelVersion !== void 0 && output.ModerationModelVersion !== null ? output.ModerationModelVersion : void 0
  };
};
var deserializeAws_json1_1DetectTextResponse = function(output, context) {
  return {
    TextDetections: output.TextDetections !== void 0 && output.TextDetections !== null ? deserializeAws_json1_1TextDetectionList(output.TextDetections, context) : void 0,
    TextModelVersion: output.TextModelVersion !== void 0 && output.TextModelVersion !== null ? output.TextModelVersion : void 0
  };
};
var deserializeAws_json1_1Emotion = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Type: output.Type !== void 0 && output.Type !== null ? output.Type : void 0
  };
};
var deserializeAws_json1_1Emotions = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Emotion(entry, context);
  });
};
var deserializeAws_json1_1Eyeglasses = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1EyeOpen = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1Face = function(output, context) {
  return {
    BoundingBox: output.BoundingBox !== void 0 && output.BoundingBox !== null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : void 0,
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    ExternalImageId: output.ExternalImageId !== void 0 && output.ExternalImageId !== null ? output.ExternalImageId : void 0,
    FaceId: output.FaceId !== void 0 && output.FaceId !== null ? output.FaceId : void 0,
    ImageId: output.ImageId !== void 0 && output.ImageId !== null ? output.ImageId : void 0
  };
};
var deserializeAws_json1_1FaceDetail = function(output, context) {
  return {
    AgeRange: output.AgeRange !== void 0 && output.AgeRange !== null ? deserializeAws_json1_1AgeRange(output.AgeRange, context) : void 0,
    Beard: output.Beard !== void 0 && output.Beard !== null ? deserializeAws_json1_1Beard(output.Beard, context) : void 0,
    BoundingBox: output.BoundingBox !== void 0 && output.BoundingBox !== null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : void 0,
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Emotions: output.Emotions !== void 0 && output.Emotions !== null ? deserializeAws_json1_1Emotions(output.Emotions, context) : void 0,
    Eyeglasses: output.Eyeglasses !== void 0 && output.Eyeglasses !== null ? deserializeAws_json1_1Eyeglasses(output.Eyeglasses, context) : void 0,
    EyesOpen: output.EyesOpen !== void 0 && output.EyesOpen !== null ? deserializeAws_json1_1EyeOpen(output.EyesOpen, context) : void 0,
    Gender: output.Gender !== void 0 && output.Gender !== null ? deserializeAws_json1_1Gender(output.Gender, context) : void 0,
    Landmarks: output.Landmarks !== void 0 && output.Landmarks !== null ? deserializeAws_json1_1Landmarks(output.Landmarks, context) : void 0,
    MouthOpen: output.MouthOpen !== void 0 && output.MouthOpen !== null ? deserializeAws_json1_1MouthOpen(output.MouthOpen, context) : void 0,
    Mustache: output.Mustache !== void 0 && output.Mustache !== null ? deserializeAws_json1_1Mustache(output.Mustache, context) : void 0,
    Pose: output.Pose !== void 0 && output.Pose !== null ? deserializeAws_json1_1Pose(output.Pose, context) : void 0,
    Quality: output.Quality !== void 0 && output.Quality !== null ? deserializeAws_json1_1ImageQuality(output.Quality, context) : void 0,
    Smile: output.Smile !== void 0 && output.Smile !== null ? deserializeAws_json1_1Smile(output.Smile, context) : void 0,
    Sunglasses: output.Sunglasses !== void 0 && output.Sunglasses !== null ? deserializeAws_json1_1Sunglasses(output.Sunglasses, context) : void 0
  };
};
var deserializeAws_json1_1FaceDetailList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1FaceDetail(entry, context);
  });
};
var deserializeAws_json1_1FaceMatch = function(output, context) {
  return {
    Face: output.Face !== void 0 && output.Face !== null ? deserializeAws_json1_1Face(output.Face, context) : void 0,
    Similarity: output.Similarity !== void 0 && output.Similarity !== null ? output.Similarity : void 0
  };
};
var deserializeAws_json1_1FaceMatchList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1FaceMatch(entry, context);
  });
};
var deserializeAws_json1_1Gender = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1Geometry = function(output, context) {
  return {
    BoundingBox: output.BoundingBox !== void 0 && output.BoundingBox !== null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : void 0,
    Polygon: output.Polygon !== void 0 && output.Polygon !== null ? deserializeAws_json1_1Polygon(output.Polygon, context) : void 0
  };
};
var deserializeAws_json1_1HumanLoopActivationOutput = function(output, context) {
  return {
    HumanLoopActivationConditionsEvaluationResults: output.HumanLoopActivationConditionsEvaluationResults !== void 0 && output.HumanLoopActivationConditionsEvaluationResults !== null ? new LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults) : void 0,
    HumanLoopActivationReasons: output.HumanLoopActivationReasons !== void 0 && output.HumanLoopActivationReasons !== null ? deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context) : void 0,
    HumanLoopArn: output.HumanLoopArn !== void 0 && output.HumanLoopArn !== null ? output.HumanLoopArn : void 0
  };
};
var deserializeAws_json1_1HumanLoopActivationReasons = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var deserializeAws_json1_1HumanLoopQuotaExceededException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0,
    QuotaCode: output.QuotaCode !== void 0 && output.QuotaCode !== null ? output.QuotaCode : void 0,
    ResourceType: output.ResourceType !== void 0 && output.ResourceType !== null ? output.ResourceType : void 0,
    ServiceCode: output.ServiceCode !== void 0 && output.ServiceCode !== null ? output.ServiceCode : void 0
  };
};
var deserializeAws_json1_1ImageQuality = function(output, context) {
  return {
    Brightness: output.Brightness !== void 0 && output.Brightness !== null ? output.Brightness : void 0,
    Sharpness: output.Sharpness !== void 0 && output.Sharpness !== null ? output.Sharpness : void 0
  };
};
var deserializeAws_json1_1ImageTooLargeException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Instance = function(output, context) {
  return {
    BoundingBox: output.BoundingBox !== void 0 && output.BoundingBox !== null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : void 0,
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0
  };
};
var deserializeAws_json1_1Instances = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Instance(entry, context);
  });
};
var deserializeAws_json1_1InternalServerError = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidImageFormatException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidParameterException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidS3ObjectException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Label = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Instances: output.Instances !== void 0 && output.Instances !== null ? deserializeAws_json1_1Instances(output.Instances, context) : void 0,
    Name: output.Name !== void 0 && output.Name !== null ? output.Name : void 0,
    Parents: output.Parents !== void 0 && output.Parents !== null ? deserializeAws_json1_1Parents(output.Parents, context) : void 0
  };
};
var deserializeAws_json1_1Labels = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Label(entry, context);
  });
};
var deserializeAws_json1_1Landmark = function(output, context) {
  return {
    Type: output.Type !== void 0 && output.Type !== null ? output.Type : void 0,
    X: output.X !== void 0 && output.X !== null ? output.X : void 0,
    Y: output.Y !== void 0 && output.Y !== null ? output.Y : void 0
  };
};
var deserializeAws_json1_1Landmarks = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Landmark(entry, context);
  });
};
var deserializeAws_json1_1ModerationLabel = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Name: output.Name !== void 0 && output.Name !== null ? output.Name : void 0,
    ParentName: output.ParentName !== void 0 && output.ParentName !== null ? output.ParentName : void 0
  };
};
var deserializeAws_json1_1ModerationLabels = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1ModerationLabel(entry, context);
  });
};
var deserializeAws_json1_1MouthOpen = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1Mustache = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1Parent = function(output, context) {
  return {
    Name: output.Name !== void 0 && output.Name !== null ? output.Name : void 0
  };
};
var deserializeAws_json1_1Parents = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Parent(entry, context);
  });
};
var deserializeAws_json1_1Point = function(output, context) {
  return {
    X: output.X !== void 0 && output.X !== null ? output.X : void 0,
    Y: output.Y !== void 0 && output.Y !== null ? output.Y : void 0
  };
};
var deserializeAws_json1_1Polygon = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Point(entry, context);
  });
};
var deserializeAws_json1_1Pose = function(output, context) {
  return {
    Pitch: output.Pitch !== void 0 && output.Pitch !== null ? output.Pitch : void 0,
    Roll: output.Roll !== void 0 && output.Roll !== null ? output.Roll : void 0,
    Yaw: output.Yaw !== void 0 && output.Yaw !== null ? output.Yaw : void 0
  };
};
var deserializeAws_json1_1ProvisionedThroughputExceededException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1RecognizeCelebritiesResponse = function(output, context) {
  return {
    CelebrityFaces: output.CelebrityFaces !== void 0 && output.CelebrityFaces !== null ? deserializeAws_json1_1CelebrityList(output.CelebrityFaces, context) : void 0,
    OrientationCorrection: output.OrientationCorrection !== void 0 && output.OrientationCorrection !== null ? output.OrientationCorrection : void 0,
    UnrecognizedFaces: output.UnrecognizedFaces !== void 0 && output.UnrecognizedFaces !== null ? deserializeAws_json1_1ComparedFaceList(output.UnrecognizedFaces, context) : void 0
  };
};
var deserializeAws_json1_1ResourceNotFoundException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1SearchFacesByImageResponse = function(output, context) {
  return {
    FaceMatches: output.FaceMatches !== void 0 && output.FaceMatches !== null ? deserializeAws_json1_1FaceMatchList(output.FaceMatches, context) : void 0,
    FaceModelVersion: output.FaceModelVersion !== void 0 && output.FaceModelVersion !== null ? output.FaceModelVersion : void 0,
    SearchedFaceBoundingBox: output.SearchedFaceBoundingBox !== void 0 && output.SearchedFaceBoundingBox !== null ? deserializeAws_json1_1BoundingBox(output.SearchedFaceBoundingBox, context) : void 0,
    SearchedFaceConfidence: output.SearchedFaceConfidence !== void 0 && output.SearchedFaceConfidence !== null ? output.SearchedFaceConfidence : void 0
  };
};
var deserializeAws_json1_1Smile = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1Sunglasses = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
  };
};
var deserializeAws_json1_1TextDetection = function(output, context) {
  return {
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    DetectedText: output.DetectedText !== void 0 && output.DetectedText !== null ? output.DetectedText : void 0,
    Geometry: output.Geometry !== void 0 && output.Geometry !== null ? deserializeAws_json1_1Geometry(output.Geometry, context) : void 0,
    Id: output.Id !== void 0 && output.Id !== null ? output.Id : void 0,
    ParentId: output.ParentId !== void 0 && output.ParentId !== null ? output.ParentId : void 0,
    Type: output.Type !== void 0 && output.Type !== null ? output.Type : void 0
  };
};
var deserializeAws_json1_1TextDetectionList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1TextDetection(entry, context);
  });
};
var deserializeAws_json1_1ThrottlingException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Logref: output.Logref !== void 0 && output.Logref !== null ? output.Logref : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Urls = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
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
var buildHttpRpcRequest2 = function(context, headers, path, resolvedHostname, body) {
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

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/commands/DetectFacesCommand.js
var DetectFacesCommand = function(_super) {
  __extends4(DetectFacesCommand2, _super);
  function DetectFacesCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectFacesCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "RekognitionClient";
    var commandName = "DetectFacesCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectFacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectFacesResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectFacesCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectFacesCommand(input, context);
  };
  DetectFacesCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectFacesCommand(output, context);
  };
  return DetectFacesCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/commands/DetectLabelsCommand.js
var DetectLabelsCommand = function(_super) {
  __extends4(DetectLabelsCommand2, _super);
  function DetectLabelsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectLabelsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "RekognitionClient";
    var commandName = "DetectLabelsCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectLabelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectLabelsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectLabelsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectLabelsCommand(input, context);
  };
  DetectLabelsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectLabelsCommand(output, context);
  };
  return DetectLabelsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/commands/DetectModerationLabelsCommand.js
var DetectModerationLabelsCommand = function(_super) {
  __extends4(DetectModerationLabelsCommand2, _super);
  function DetectModerationLabelsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectModerationLabelsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "RekognitionClient";
    var commandName = "DetectModerationLabelsCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectModerationLabelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectModerationLabelsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectModerationLabelsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectModerationLabelsCommand(input, context);
  };
  DetectModerationLabelsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectModerationLabelsCommand(output, context);
  };
  return DetectModerationLabelsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/commands/DetectTextCommand.js
var DetectTextCommand = function(_super) {
  __extends4(DetectTextCommand2, _super);
  function DetectTextCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectTextCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "RekognitionClient";
    var commandName = "DetectTextCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectTextResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectTextCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectTextCommand(input, context);
  };
  DetectTextCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectTextCommand(output, context);
  };
  return DetectTextCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/commands/RecognizeCelebritiesCommand.js
var RecognizeCelebritiesCommand = function(_super) {
  __extends4(RecognizeCelebritiesCommand2, _super);
  function RecognizeCelebritiesCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  RecognizeCelebritiesCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "RekognitionClient";
    var commandName = "RecognizeCelebritiesCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeCelebritiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RecognizeCelebritiesResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RecognizeCelebritiesCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1RecognizeCelebritiesCommand(input, context);
  };
  RecognizeCelebritiesCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1RecognizeCelebritiesCommand(output, context);
  };
  return RecognizeCelebritiesCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-rekognition/dist/es/commands/SearchFacesByImageCommand.js
var SearchFacesByImageCommand = function(_super) {
  __extends4(SearchFacesByImageCommand2, _super);
  function SearchFacesByImageCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  SearchFacesByImageCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "RekognitionClient";
    var commandName = "SearchFacesByImageCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchFacesByImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchFacesByImageResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchFacesByImageCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1SearchFacesByImageCommand(input, context);
  };
  SearchFacesByImageCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1SearchFacesByImageCommand(output, context);
  };
  return SearchFacesByImageCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-textract/node_modules/tslib/modules/index.js
var import_tslib61 = __toModule(require_tslib5());
var {
  __extends: __extends5,
  __assign: __assign5,
  __rest: __rest5,
  __decorate: __decorate5,
  __param: __param5,
  __metadata: __metadata5,
  __awaiter: __awaiter5,
  __generator: __generator5,
  __exportStar: __exportStar5,
  __createBinding: __createBinding5,
  __values: __values5,
  __read: __read5,
  __spread: __spread5,
  __spreadArrays: __spreadArrays5,
  __spreadArray: __spreadArray4,
  __await: __await5,
  __asyncGenerator: __asyncGenerator5,
  __asyncDelegator: __asyncDelegator5,
  __asyncValues: __asyncValues5,
  __makeTemplateObject: __makeTemplateObject5,
  __importStar: __importStar5,
  __importDefault: __importDefault5,
  __classPrivateFieldGet: __classPrivateFieldGet5,
  __classPrivateFieldSet: __classPrivateFieldSet5
} = import_tslib61.default;

// ../../node_modules/@aws-sdk/client-textract/dist/es/package.json
var name4 = "@aws-sdk/client-textract";
var description4 = "AWS SDK for JavaScript Textract Client for Node.js, Browser and React Native";
var version4 = "3.6.1";
var scripts4 = {
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
var main4 = "./dist/cjs/index.js";
var types4 = "./types/index.d.ts";
var module4 = "./dist/es/index.js";
var browser4 = {
  "./runtimeConfig": "./runtimeConfig.browser"
};
var react_native4 = {
  "./runtimeConfig": "./runtimeConfig.native"
};
var sideEffects4 = false;
var dependencies4 = {
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
var devDependencies4 = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@types/node": "^12.7.5",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  typedoc: "^0.19.2",
  typescript: "~4.1.2"
};
var engines4 = {
  node: ">=10.0.0"
};
var typesVersions4 = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
};
var author4 = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
};
var license4 = "Apache-2.0";
var homepage4 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-textract";
var repository4 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-textract"
};
var package_default4 = {
  name: name4,
  description: description4,
  version: version4,
  scripts: scripts4,
  main: main4,
  types: types4,
  module: module4,
  browser: browser4,
  "react-native": react_native4,
  sideEffects: sideEffects4,
  dependencies: dependencies4,
  devDependencies: devDependencies4,
  engines: engines4,
  typesVersions: typesVersions4,
  author: author4,
  license: license4,
  homepage: homepage4,
  repository: repository4
};

// ../../node_modules/@aws-sdk/client-textract/dist/es/runtimeConfig.browser.js
var import_sha256_browser4 = __toModule(require_build5());
var import_util_utf8_browser4 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-textract/dist/es/endpoints.js
var AWS_TEMPLATE4 = "textract.{region}.amazonaws.com";
var AWS_CN_TEMPLATE4 = "textract.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE4 = "textract.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE4 = "textract.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE4 = "textract.{region}.amazonaws.com";
var AWS_REGIONS4 = new Set([
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
var AWS_CN_REGIONS4 = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS4 = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS4 = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS4 = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider4 = function(region, options) {
  var regionInfo = void 0;
  switch (region) {
    default:
      if (AWS_REGIONS4.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE4.replace("{region}", region),
          partition: "aws"
        };
      }
      if (AWS_CN_REGIONS4.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE4.replace("{region}", region),
          partition: "aws-cn"
        };
      }
      if (AWS_ISO_REGIONS4.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE4.replace("{region}", region),
          partition: "aws-iso"
        };
      }
      if (AWS_ISO_B_REGIONS4.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE4.replace("{region}", region),
          partition: "aws-iso-b"
        };
      }
      if (AWS_US_GOV_REGIONS4.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE4.replace("{region}", region),
          partition: "aws-us-gov"
        };
      }
      if (regionInfo === void 0) {
        regionInfo = {
          hostname: AWS_TEMPLATE4.replace("{region}", region),
          partition: "aws"
        };
      }
  }
  return Promise.resolve(__assign5({ signingService: "textract" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-textract/dist/es/runtimeConfig.shared.js
var ClientSharedValues4 = {
  apiVersion: "2018-06-27",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider4,
  serviceId: "Textract",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-textract/dist/es/runtimeConfig.browser.js
var ClientDefaultValues4 = __assign5(__assign5({}, ClientSharedValues4), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues4.serviceId,
  clientVersion: package_default4.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser4.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser4.fromUtf8, utf8Encoder: import_util_utf8_browser4.toUtf8 });

// ../../node_modules/@aws-sdk/client-textract/dist/es/TextractClient.js
var TextractClient = function(_super) {
  __extends5(TextractClient2, _super);
  function TextractClient2(configuration) {
    var _this = this;
    var _config_0 = __assign5(__assign5({}, ClientDefaultValues4), configuration);
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
  TextractClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return TextractClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-textract/dist/es/models/models_0.js
var AccessDeniedException2;
(function(AccessDeniedException3) {
  AccessDeniedException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(AccessDeniedException2 || (AccessDeniedException2 = {}));
var S3Object2;
(function(S3Object3) {
  S3Object3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(S3Object2 || (S3Object2 = {}));
var Document;
(function(Document2) {
  Document2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Document || (Document = {}));
var FeatureType;
(function(FeatureType2) {
  FeatureType2["FORMS"] = "FORMS";
  FeatureType2["TABLES"] = "TABLES";
})(FeatureType || (FeatureType = {}));
var ContentClassifier2;
(function(ContentClassifier3) {
  ContentClassifier3["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
  ContentClassifier3["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier2 || (ContentClassifier2 = {}));
var HumanLoopDataAttributes2;
(function(HumanLoopDataAttributes3) {
  HumanLoopDataAttributes3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(HumanLoopDataAttributes2 || (HumanLoopDataAttributes2 = {}));
var HumanLoopConfig2;
(function(HumanLoopConfig3) {
  HumanLoopConfig3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(HumanLoopConfig2 || (HumanLoopConfig2 = {}));
var AnalyzeDocumentRequest;
(function(AnalyzeDocumentRequest2) {
  AnalyzeDocumentRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(AnalyzeDocumentRequest || (AnalyzeDocumentRequest = {}));
var BlockType;
(function(BlockType2) {
  BlockType2["CELL"] = "CELL";
  BlockType2["KEY_VALUE_SET"] = "KEY_VALUE_SET";
  BlockType2["LINE"] = "LINE";
  BlockType2["PAGE"] = "PAGE";
  BlockType2["SELECTION_ELEMENT"] = "SELECTION_ELEMENT";
  BlockType2["TABLE"] = "TABLE";
  BlockType2["WORD"] = "WORD";
})(BlockType || (BlockType = {}));
var EntityType;
(function(EntityType3) {
  EntityType3["KEY"] = "KEY";
  EntityType3["VALUE"] = "VALUE";
})(EntityType || (EntityType = {}));
var BoundingBox2;
(function(BoundingBox3) {
  BoundingBox3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(BoundingBox2 || (BoundingBox2 = {}));
var Point2;
(function(Point3) {
  Point3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Point2 || (Point2 = {}));
var Geometry2;
(function(Geometry3) {
  Geometry3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Geometry2 || (Geometry2 = {}));
var RelationshipType;
(function(RelationshipType2) {
  RelationshipType2["CHILD"] = "CHILD";
  RelationshipType2["COMPLEX_FEATURES"] = "COMPLEX_FEATURES";
  RelationshipType2["VALUE"] = "VALUE";
})(RelationshipType || (RelationshipType = {}));
var Relationship;
(function(Relationship2) {
  Relationship2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Relationship || (Relationship = {}));
var SelectionStatus;
(function(SelectionStatus2) {
  SelectionStatus2["NOT_SELECTED"] = "NOT_SELECTED";
  SelectionStatus2["SELECTED"] = "SELECTED";
})(SelectionStatus || (SelectionStatus = {}));
var TextType2;
(function(TextType3) {
  TextType3["HANDWRITING"] = "HANDWRITING";
  TextType3["PRINTED"] = "PRINTED";
})(TextType2 || (TextType2 = {}));
var Block;
(function(Block2) {
  Block2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Block || (Block = {}));
var DocumentMetadata;
(function(DocumentMetadata2) {
  DocumentMetadata2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(DocumentMetadata || (DocumentMetadata = {}));
var HumanLoopActivationOutput2;
(function(HumanLoopActivationOutput3) {
  HumanLoopActivationOutput3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(HumanLoopActivationOutput2 || (HumanLoopActivationOutput2 = {}));
var AnalyzeDocumentResponse;
(function(AnalyzeDocumentResponse2) {
  AnalyzeDocumentResponse2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(AnalyzeDocumentResponse || (AnalyzeDocumentResponse = {}));
var BadDocumentException;
(function(BadDocumentException2) {
  BadDocumentException2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(BadDocumentException || (BadDocumentException = {}));
var DocumentTooLargeException;
(function(DocumentTooLargeException2) {
  DocumentTooLargeException2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(DocumentTooLargeException || (DocumentTooLargeException = {}));
var HumanLoopQuotaExceededException2;
(function(HumanLoopQuotaExceededException3) {
  HumanLoopQuotaExceededException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(HumanLoopQuotaExceededException2 || (HumanLoopQuotaExceededException2 = {}));
var InternalServerError2;
(function(InternalServerError3) {
  InternalServerError3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(InternalServerError2 || (InternalServerError2 = {}));
var InvalidParameterException2;
(function(InvalidParameterException3) {
  InvalidParameterException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(InvalidParameterException2 || (InvalidParameterException2 = {}));
var InvalidS3ObjectException2;
(function(InvalidS3ObjectException3) {
  InvalidS3ObjectException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(InvalidS3ObjectException2 || (InvalidS3ObjectException2 = {}));
var ProvisionedThroughputExceededException2;
(function(ProvisionedThroughputExceededException3) {
  ProvisionedThroughputExceededException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(ProvisionedThroughputExceededException2 || (ProvisionedThroughputExceededException2 = {}));
var ThrottlingException2;
(function(ThrottlingException3) {
  ThrottlingException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(ThrottlingException2 || (ThrottlingException2 = {}));
var UnsupportedDocumentException;
(function(UnsupportedDocumentException2) {
  UnsupportedDocumentException2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(UnsupportedDocumentException || (UnsupportedDocumentException = {}));
var DetectDocumentTextRequest;
(function(DetectDocumentTextRequest2) {
  DetectDocumentTextRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(DetectDocumentTextRequest || (DetectDocumentTextRequest = {}));
var DetectDocumentTextResponse;
(function(DetectDocumentTextResponse2) {
  DetectDocumentTextResponse2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(DetectDocumentTextResponse || (DetectDocumentTextResponse = {}));
var DocumentLocation;
(function(DocumentLocation2) {
  DocumentLocation2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(DocumentLocation || (DocumentLocation = {}));
var GetDocumentAnalysisRequest;
(function(GetDocumentAnalysisRequest2) {
  GetDocumentAnalysisRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(GetDocumentAnalysisRequest || (GetDocumentAnalysisRequest = {}));
var JobStatus2;
(function(JobStatus4) {
  JobStatus4["FAILED"] = "FAILED";
  JobStatus4["IN_PROGRESS"] = "IN_PROGRESS";
  JobStatus4["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
  JobStatus4["SUCCEEDED"] = "SUCCEEDED";
})(JobStatus2 || (JobStatus2 = {}));
var Warning;
(function(Warning2) {
  Warning2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Warning || (Warning = {}));
var GetDocumentAnalysisResponse;
(function(GetDocumentAnalysisResponse2) {
  GetDocumentAnalysisResponse2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(GetDocumentAnalysisResponse || (GetDocumentAnalysisResponse = {}));
var InvalidJobIdException;
(function(InvalidJobIdException2) {
  InvalidJobIdException2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(InvalidJobIdException || (InvalidJobIdException = {}));
var GetDocumentTextDetectionRequest;
(function(GetDocumentTextDetectionRequest2) {
  GetDocumentTextDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(GetDocumentTextDetectionRequest || (GetDocumentTextDetectionRequest = {}));
var GetDocumentTextDetectionResponse;
(function(GetDocumentTextDetectionResponse2) {
  GetDocumentTextDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(GetDocumentTextDetectionResponse || (GetDocumentTextDetectionResponse = {}));
var IdempotentParameterMismatchException2;
(function(IdempotentParameterMismatchException3) {
  IdempotentParameterMismatchException3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(IdempotentParameterMismatchException2 || (IdempotentParameterMismatchException2 = {}));
var InvalidKMSKeyException;
(function(InvalidKMSKeyException2) {
  InvalidKMSKeyException2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(InvalidKMSKeyException || (InvalidKMSKeyException = {}));
var LimitExceededException3;
(function(LimitExceededException4) {
  LimitExceededException4.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(LimitExceededException3 || (LimitExceededException3 = {}));
var NotificationChannel2;
(function(NotificationChannel3) {
  NotificationChannel3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(NotificationChannel2 || (NotificationChannel2 = {}));
var OutputConfig2;
(function(OutputConfig3) {
  OutputConfig3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(OutputConfig2 || (OutputConfig2 = {}));
var StartDocumentAnalysisRequest;
(function(StartDocumentAnalysisRequest2) {
  StartDocumentAnalysisRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(StartDocumentAnalysisRequest || (StartDocumentAnalysisRequest = {}));
var StartDocumentAnalysisResponse;
(function(StartDocumentAnalysisResponse2) {
  StartDocumentAnalysisResponse2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(StartDocumentAnalysisResponse || (StartDocumentAnalysisResponse = {}));
var StartDocumentTextDetectionRequest;
(function(StartDocumentTextDetectionRequest2) {
  StartDocumentTextDetectionRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(StartDocumentTextDetectionRequest || (StartDocumentTextDetectionRequest = {}));
var StartDocumentTextDetectionResponse;
(function(StartDocumentTextDetectionResponse2) {
  StartDocumentTextDetectionResponse2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(StartDocumentTextDetectionResponse || (StartDocumentTextDetectionResponse = {}));

// ../../node_modules/@aws-sdk/client-textract/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1AnalyzeDocumentCommand = function(input, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator5(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Textract.AnalyzeDocument"
      };
      body = JSON.stringify(serializeAws_json1_1AnalyzeDocumentRequest(input, context));
      return [2, buildHttpRpcRequest3(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectDocumentTextCommand = function(input, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator5(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Textract.DetectDocumentText"
      };
      body = JSON.stringify(serializeAws_json1_1DetectDocumentTextRequest(input, context));
      return [2, buildHttpRpcRequest3(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1AnalyzeDocumentCommand = function(output, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator5(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1AnalyzeDocumentCommandError(output, context)];
          }
          return [4, parseBody4(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AnalyzeDocumentResponse(data, context);
          response = __assign5({ $metadata: deserializeMetadata4(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AnalyzeDocumentCommandError = function(output, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator5(this, function(_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign5({}, output)];
          _o = {};
          return [4, parseBody4(output.body, context)];
        case 1:
          parsedOutput = __assign5.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode4(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.textract#AccessDeniedException":
              return [3, 2];
            case "BadDocumentException":
              return [3, 4];
            case "com.amazonaws.textract#BadDocumentException":
              return [3, 4];
            case "DocumentTooLargeException":
              return [3, 6];
            case "com.amazonaws.textract#DocumentTooLargeException":
              return [3, 6];
            case "HumanLoopQuotaExceededException":
              return [3, 8];
            case "com.amazonaws.textract#HumanLoopQuotaExceededException":
              return [3, 8];
            case "InternalServerError":
              return [3, 10];
            case "com.amazonaws.textract#InternalServerError":
              return [3, 10];
            case "InvalidParameterException":
              return [3, 12];
            case "com.amazonaws.textract#InvalidParameterException":
              return [3, 12];
            case "InvalidS3ObjectException":
              return [3, 14];
            case "com.amazonaws.textract#InvalidS3ObjectException":
              return [3, 14];
            case "ProvisionedThroughputExceededException":
              return [3, 16];
            case "com.amazonaws.textract#ProvisionedThroughputExceededException":
              return [3, 16];
            case "ThrottlingException":
              return [3, 18];
            case "com.amazonaws.textract#ThrottlingException":
              return [3, 18];
            case "UnsupportedDocumentException":
              return [3, 20];
            case "com.amazonaws.textract#UnsupportedDocumentException":
              return [3, 20];
          }
          return [3, 22];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _c.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _d.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _e.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse2(parsedOutput, context)];
        case 9:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _f.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse2(parsedOutput, context)];
        case 11:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _g.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse2(parsedOutput, context)];
        case 13:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _h.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse2(parsedOutput, context)];
        case 15:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _j.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse2(parsedOutput, context)];
        case 17:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _k.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 18:
          _l = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse2(parsedOutput, context)];
        case 19:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _l.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 20:
          _m = [{}];
          return [4, deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _m.concat([_p.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign5(__assign5({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata4(output) });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1DetectDocumentTextCommand = function(output, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator5(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectDocumentTextCommandError(output, context)];
          }
          return [4, parseBody4(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectDocumentTextResponse(data, context);
          response = __assign5({ $metadata: deserializeMetadata4(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectDocumentTextCommandError = function(output, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator5(this, function(_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign5({}, output)];
          _m = {};
          return [4, parseBody4(output.body, context)];
        case 1:
          parsedOutput = __assign5.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode4(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3, 2];
            case "com.amazonaws.textract#AccessDeniedException":
              return [3, 2];
            case "BadDocumentException":
              return [3, 4];
            case "com.amazonaws.textract#BadDocumentException":
              return [3, 4];
            case "DocumentTooLargeException":
              return [3, 6];
            case "com.amazonaws.textract#DocumentTooLargeException":
              return [3, 6];
            case "InternalServerError":
              return [3, 8];
            case "com.amazonaws.textract#InternalServerError":
              return [3, 8];
            case "InvalidParameterException":
              return [3, 10];
            case "com.amazonaws.textract#InvalidParameterException":
              return [3, 10];
            case "InvalidS3ObjectException":
              return [3, 12];
            case "com.amazonaws.textract#InvalidS3ObjectException":
              return [3, 12];
            case "ProvisionedThroughputExceededException":
              return [3, 14];
            case "com.amazonaws.textract#ProvisionedThroughputExceededException":
              return [3, 14];
            case "ThrottlingException":
              return [3, 16];
            case "com.amazonaws.textract#ThrottlingException":
              return [3, 16];
            case "UnsupportedDocumentException":
              return [3, 18];
            case "com.amazonaws.textract#UnsupportedDocumentException":
              return [3, 18];
          }
          return [3, 20];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1AccessDeniedExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _c.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _d.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _e.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1InternalServerErrorResponse2(parsedOutput, context)];
        case 9:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _f.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1InvalidParameterExceptionResponse2(parsedOutput, context)];
        case 11:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _g.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1InvalidS3ObjectExceptionResponse2(parsedOutput, context)];
        case 13:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _h.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse2(parsedOutput, context)];
        case 15:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _j.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ThrottlingExceptionResponse2(parsedOutput, context)];
        case 17:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _k.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 18:
          _l = [{}];
          return [4, deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _l.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign5(__assign5({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata4(output) });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1AccessDeniedExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1AccessDeniedException2(body, context);
      contents = __assign5({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1BadDocumentExceptionResponse = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1BadDocumentException(body, context);
      contents = __assign5({ name: "BadDocumentException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1DocumentTooLargeExceptionResponse = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1DocumentTooLargeException(body, context);
      contents = __assign5({ name: "DocumentTooLargeException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1HumanLoopQuotaExceededException2(body, context);
      contents = __assign5({ name: "HumanLoopQuotaExceededException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InternalServerErrorResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalServerError2(body, context);
      contents = __assign5({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterException2(body, context);
      contents = __assign5({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidS3ObjectExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidS3ObjectException2(body, context);
      contents = __assign5({ name: "InvalidS3ObjectException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException2(body, context);
      contents = __assign5({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ThrottlingExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ThrottlingException2(body, context);
      contents = __assign5({ name: "ThrottlingException", $fault: "server", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1UnsupportedDocumentExceptionResponse = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator5(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1UnsupportedDocumentException(body, context);
      contents = __assign5({ name: "UnsupportedDocumentException", $fault: "client", $metadata: deserializeMetadata4(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1AnalyzeDocumentRequest = function(input, context) {
  return __assign5(__assign5(__assign5({}, input.Document !== void 0 && input.Document !== null && { Document: serializeAws_json1_1Document(input.Document, context) }), input.FeatureTypes !== void 0 && input.FeatureTypes !== null && { FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context) }), input.HumanLoopConfig !== void 0 && input.HumanLoopConfig !== null && {
    HumanLoopConfig: serializeAws_json1_1HumanLoopConfig2(input.HumanLoopConfig, context)
  });
};
var serializeAws_json1_1ContentClassifiers2 = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_json1_1DetectDocumentTextRequest = function(input, context) {
  return __assign5({}, input.Document !== void 0 && input.Document !== null && { Document: serializeAws_json1_1Document(input.Document, context) });
};
var serializeAws_json1_1Document = function(input, context) {
  return __assign5(__assign5({}, input.Bytes !== void 0 && input.Bytes !== null && { Bytes: context.base64Encoder(input.Bytes) }), input.S3Object !== void 0 && input.S3Object !== null && { S3Object: serializeAws_json1_1S3Object2(input.S3Object, context) });
};
var serializeAws_json1_1FeatureTypes = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_json1_1HumanLoopConfig2 = function(input, context) {
  return __assign5(__assign5(__assign5({}, input.DataAttributes !== void 0 && input.DataAttributes !== null && {
    DataAttributes: serializeAws_json1_1HumanLoopDataAttributes2(input.DataAttributes, context)
  }), input.FlowDefinitionArn !== void 0 && input.FlowDefinitionArn !== null && { FlowDefinitionArn: input.FlowDefinitionArn }), input.HumanLoopName !== void 0 && input.HumanLoopName !== null && { HumanLoopName: input.HumanLoopName });
};
var serializeAws_json1_1HumanLoopDataAttributes2 = function(input, context) {
  return __assign5({}, input.ContentClassifiers !== void 0 && input.ContentClassifiers !== null && {
    ContentClassifiers: serializeAws_json1_1ContentClassifiers2(input.ContentClassifiers, context)
  });
};
var serializeAws_json1_1S3Object2 = function(input, context) {
  return __assign5(__assign5(__assign5({}, input.Bucket !== void 0 && input.Bucket !== null && { Bucket: input.Bucket }), input.Name !== void 0 && input.Name !== null && { Name: input.Name }), input.Version !== void 0 && input.Version !== null && { Version: input.Version });
};
var deserializeAws_json1_1AccessDeniedException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1AnalyzeDocumentResponse = function(output, context) {
  return {
    AnalyzeDocumentModelVersion: output.AnalyzeDocumentModelVersion !== void 0 && output.AnalyzeDocumentModelVersion !== null ? output.AnalyzeDocumentModelVersion : void 0,
    Blocks: output.Blocks !== void 0 && output.Blocks !== null ? deserializeAws_json1_1BlockList(output.Blocks, context) : void 0,
    DocumentMetadata: output.DocumentMetadata !== void 0 && output.DocumentMetadata !== null ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context) : void 0,
    HumanLoopActivationOutput: output.HumanLoopActivationOutput !== void 0 && output.HumanLoopActivationOutput !== null ? deserializeAws_json1_1HumanLoopActivationOutput2(output.HumanLoopActivationOutput, context) : void 0
  };
};
var deserializeAws_json1_1BadDocumentException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Block = function(output, context) {
  return {
    BlockType: output.BlockType !== void 0 && output.BlockType !== null ? output.BlockType : void 0,
    ColumnIndex: output.ColumnIndex !== void 0 && output.ColumnIndex !== null ? output.ColumnIndex : void 0,
    ColumnSpan: output.ColumnSpan !== void 0 && output.ColumnSpan !== null ? output.ColumnSpan : void 0,
    Confidence: output.Confidence !== void 0 && output.Confidence !== null ? output.Confidence : void 0,
    EntityTypes: output.EntityTypes !== void 0 && output.EntityTypes !== null ? deserializeAws_json1_1EntityTypes(output.EntityTypes, context) : void 0,
    Geometry: output.Geometry !== void 0 && output.Geometry !== null ? deserializeAws_json1_1Geometry2(output.Geometry, context) : void 0,
    Id: output.Id !== void 0 && output.Id !== null ? output.Id : void 0,
    Page: output.Page !== void 0 && output.Page !== null ? output.Page : void 0,
    Relationships: output.Relationships !== void 0 && output.Relationships !== null ? deserializeAws_json1_1RelationshipList(output.Relationships, context) : void 0,
    RowIndex: output.RowIndex !== void 0 && output.RowIndex !== null ? output.RowIndex : void 0,
    RowSpan: output.RowSpan !== void 0 && output.RowSpan !== null ? output.RowSpan : void 0,
    SelectionStatus: output.SelectionStatus !== void 0 && output.SelectionStatus !== null ? output.SelectionStatus : void 0,
    Text: output.Text !== void 0 && output.Text !== null ? output.Text : void 0,
    TextType: output.TextType !== void 0 && output.TextType !== null ? output.TextType : void 0
  };
};
var deserializeAws_json1_1BlockList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Block(entry, context);
  });
};
var deserializeAws_json1_1BoundingBox2 = function(output, context) {
  return {
    Height: output.Height !== void 0 && output.Height !== null ? output.Height : void 0,
    Left: output.Left !== void 0 && output.Left !== null ? output.Left : void 0,
    Top: output.Top !== void 0 && output.Top !== null ? output.Top : void 0,
    Width: output.Width !== void 0 && output.Width !== null ? output.Width : void 0
  };
};
var deserializeAws_json1_1DetectDocumentTextResponse = function(output, context) {
  return {
    Blocks: output.Blocks !== void 0 && output.Blocks !== null ? deserializeAws_json1_1BlockList(output.Blocks, context) : void 0,
    DetectDocumentTextModelVersion: output.DetectDocumentTextModelVersion !== void 0 && output.DetectDocumentTextModelVersion !== null ? output.DetectDocumentTextModelVersion : void 0,
    DocumentMetadata: output.DocumentMetadata !== void 0 && output.DocumentMetadata !== null ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context) : void 0
  };
};
var deserializeAws_json1_1DocumentMetadata = function(output, context) {
  return {
    Pages: output.Pages !== void 0 && output.Pages !== null ? output.Pages : void 0
  };
};
var deserializeAws_json1_1DocumentTooLargeException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1EntityTypes = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var deserializeAws_json1_1Geometry2 = function(output, context) {
  return {
    BoundingBox: output.BoundingBox !== void 0 && output.BoundingBox !== null ? deserializeAws_json1_1BoundingBox2(output.BoundingBox, context) : void 0,
    Polygon: output.Polygon !== void 0 && output.Polygon !== null ? deserializeAws_json1_1Polygon2(output.Polygon, context) : void 0
  };
};
var deserializeAws_json1_1HumanLoopActivationOutput2 = function(output, context) {
  return {
    HumanLoopActivationConditionsEvaluationResults: output.HumanLoopActivationConditionsEvaluationResults !== void 0 && output.HumanLoopActivationConditionsEvaluationResults !== null ? new LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults) : void 0,
    HumanLoopActivationReasons: output.HumanLoopActivationReasons !== void 0 && output.HumanLoopActivationReasons !== null ? deserializeAws_json1_1HumanLoopActivationReasons2(output.HumanLoopActivationReasons, context) : void 0,
    HumanLoopArn: output.HumanLoopArn !== void 0 && output.HumanLoopArn !== null ? output.HumanLoopArn : void 0
  };
};
var deserializeAws_json1_1HumanLoopActivationReasons2 = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var deserializeAws_json1_1HumanLoopQuotaExceededException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0,
    QuotaCode: output.QuotaCode !== void 0 && output.QuotaCode !== null ? output.QuotaCode : void 0,
    ResourceType: output.ResourceType !== void 0 && output.ResourceType !== null ? output.ResourceType : void 0,
    ServiceCode: output.ServiceCode !== void 0 && output.ServiceCode !== null ? output.ServiceCode : void 0
  };
};
var deserializeAws_json1_1IdList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var deserializeAws_json1_1InternalServerError2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidParameterException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidS3ObjectException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Point2 = function(output, context) {
  return {
    X: output.X !== void 0 && output.X !== null ? output.X : void 0,
    Y: output.Y !== void 0 && output.Y !== null ? output.Y : void 0
  };
};
var deserializeAws_json1_1Polygon2 = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Point2(entry, context);
  });
};
var deserializeAws_json1_1ProvisionedThroughputExceededException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1Relationship = function(output, context) {
  return {
    Ids: output.Ids !== void 0 && output.Ids !== null ? deserializeAws_json1_1IdList(output.Ids, context) : void 0,
    Type: output.Type !== void 0 && output.Type !== null ? output.Type : void 0
  };
};
var deserializeAws_json1_1RelationshipList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Relationship(entry, context);
  });
};
var deserializeAws_json1_1ThrottlingException2 = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1UnsupportedDocumentException = function(output, context) {
  return {
    Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeMetadata4 = function(output) {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  };
};
var collectBody4 = function(streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString4 = function(streamBody, context) {
  return collectBody4(streamBody, context).then(function(body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest3 = function(context, headers, path, resolvedHostname, body) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, contents;
    return __generator5(this, function(_c) {
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
var parseBody4 = function(streamBody, context) {
  return collectBodyString4(streamBody, context).then(function(encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
var loadRestJsonErrorCode4 = function(output, data) {
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

// ../../node_modules/@aws-sdk/client-textract/dist/es/commands/AnalyzeDocumentCommand.js
var AnalyzeDocumentCommand = function(_super) {
  __extends5(AnalyzeDocumentCommand2, _super);
  function AnalyzeDocumentCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  AnalyzeDocumentCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "TextractClient";
    var commandName = "AnalyzeDocumentCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: AnalyzeDocumentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AnalyzeDocumentResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AnalyzeDocumentCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1AnalyzeDocumentCommand(input, context);
  };
  AnalyzeDocumentCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1AnalyzeDocumentCommand(output, context);
  };
  return AnalyzeDocumentCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-textract/dist/es/commands/DetectDocumentTextCommand.js
var DetectDocumentTextCommand = function(_super) {
  __extends5(DetectDocumentTextCommand2, _super);
  function DetectDocumentTextCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectDocumentTextCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "TextractClient";
    var commandName = "DetectDocumentTextCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectDocumentTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectDocumentTextResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectDocumentTextCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectDocumentTextCommand(input, context);
  };
  DetectDocumentTextCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectDocumentTextCommand(output, context);
  };
  return DetectDocumentTextCommand2;
}(Command);

// src/Providers/Utils.ts
function makeCamelCase(obj, keys) {
  if (!obj)
    return void 0;
  const newObj = {};
  const keysToRename = keys ? keys : Object.keys(obj);
  keysToRename.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      const camelCaseKey = key.charAt(0).toLowerCase() + key.substr(1);
      Object.assign(newObj, { [camelCaseKey]: obj[key] });
    }
  });
  return newObj;
}
function makeCamelCaseArray(objArr, keys) {
  if (!objArr)
    return void 0;
  return objArr.map((obj) => makeCamelCase(obj, keys));
}
function blobToArrayBuffer(blob) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = (_event) => {
      res(reader.result);
    };
    reader.onerror = (err) => {
      rej(err);
    };
    try {
      reader.readAsArrayBuffer(blob);
    } catch (err) {
      rej(err);
    }
  });
}

// src/Providers/IdentifyTextUtils.ts
function getBoundingBox(geometry) {
  if (!geometry)
    return void 0;
  return makeCamelCase(geometry.BoundingBox);
}
function getPolygon(geometry) {
  if (!geometry)
    return void 0;
  return makeCamelCaseArray(Array.from(geometry.Polygon));
}
function categorizeRekognitionBlocks(blocks) {
  const response = {
    text: {
      fullText: "",
      words: [],
      lines: [],
      linesDetailed: []
    }
  };
  blocks.forEach((block) => {
    switch (block.Type) {
      case "LINE":
        response.text.lines.push(block.DetectedText);
        response.text.linesDetailed.push({
          text: block.DetectedText,
          polygon: getPolygon(block.Geometry),
          boundingBox: getBoundingBox(block.Geometry),
          page: null
        });
        break;
      case "WORD":
        response.text.fullText += block.DetectedText + " ";
        response.text.words.push({
          text: block.DetectedText,
          polygon: getPolygon(block.Geometry),
          boundingBox: getBoundingBox(block.Geometry)
        });
        break;
    }
  });
  response.text.fullText = response.text.fullText.substr(0, response.text.fullText.length - 1);
  return response;
}
function categorizeTextractBlocks(blocks) {
  const response = {
    text: {
      fullText: "",
      words: [],
      lines: [],
      linesDetailed: []
    }
  };
  if (blocks.length === 0)
    return response;
  const tableBlocks = Array();
  const keyValueBlocks = Array();
  const blockMap = {};
  blocks.forEach((block) => {
    switch (block.BlockType) {
      case "LINE":
        response.text.lines.push(block.Text);
        response.text.linesDetailed.push({
          text: block.Text,
          polygon: getPolygon(block.Geometry),
          boundingBox: getBoundingBox(block.Geometry),
          page: block.Page
        });
        break;
      case "WORD":
        response.text.fullText += block.Text + " ";
        response.text.words.push({
          text: block.Text,
          polygon: getPolygon(block.Geometry),
          boundingBox: getBoundingBox(block.Geometry)
        });
        blockMap[block.Id] = block;
        break;
      case "SELECTION_ELEMENT":
        const selectionStatus = block.SelectionStatus === "SELECTED" ? true : false;
        if (!response.text.selections)
          response.text.selections = [];
        response.text.selections.push({
          selected: selectionStatus,
          polygon: getPolygon(block.Geometry),
          boundingBox: getBoundingBox(block.Geometry)
        });
        blockMap[block.Id] = block;
        break;
      case "TABLE":
        tableBlocks.push(block);
        break;
      case "KEY_VALUE_SET":
        keyValueBlocks.push(block);
        blockMap[block.Id] = block;
        break;
      default:
        blockMap[block.Id] = block;
    }
  });
  response.text.fullText = response.text.fullText.substr(0, response.text.fullText.length - 1);
  if (tableBlocks.length !== 0) {
    const tableResponse = Array();
    tableBlocks.forEach((table) => {
      tableResponse.push(constructTable(table, blockMap));
    });
    response.text.tables = tableResponse;
  }
  if (keyValueBlocks.length !== 0) {
    const keyValueResponse = Array();
    keyValueBlocks.forEach((keyValue) => {
      const entityTypes = Array.from(keyValue.EntityTypes);
      if (entityTypes.indexOf("KEY") !== -1) {
        keyValueResponse.push(constructKeyValue(keyValue, blockMap));
      }
    });
    response.text.keyValues = keyValueResponse;
  }
  return response;
}
function constructTable(table, blockMap) {
  let tableMatrix;
  tableMatrix = [];
  for (const tableRelation of table.Relationships) {
    for (const cellId of tableRelation.Ids) {
      const cellBlock = blockMap[cellId];
      const row = cellBlock.RowIndex - 1;
      const col = cellBlock.ColumnIndex - 1;
      const content = extractContentsFromBlock(cellBlock, blockMap);
      const cell = {
        text: content.text,
        boundingBox: getBoundingBox(cellBlock.Geometry),
        polygon: getPolygon(cellBlock.Geometry),
        selected: content.selected,
        rowSpan: cellBlock.RowSpan,
        columnSpan: cellBlock.ColumnSpan
      };
      if (!tableMatrix[row])
        tableMatrix[row] = [];
      tableMatrix[row][col] = cell;
    }
  }
  const rowSize = tableMatrix.length;
  const columnSize = tableMatrix[0].length;
  return {
    size: { rows: rowSize, columns: columnSize },
    table: tableMatrix,
    boundingBox: getBoundingBox(table.Geometry),
    polygon: getPolygon(table.Geometry)
  };
}
function constructKeyValue(keyBlock, blockMap) {
  let keyText = "";
  let valueText = "";
  let valueSelected;
  for (const keyValueRelation of keyBlock.Relationships) {
    if (keyValueRelation.Type === "CHILD") {
      const contents = extractContentsFromBlock(keyBlock, blockMap);
      keyText = contents.text;
    } else if (keyValueRelation.Type === "VALUE") {
      for (const valueId of keyValueRelation.Ids) {
        const valueBlock = blockMap[valueId];
        const contents = extractContentsFromBlock(valueBlock, blockMap);
        valueText = contents.text;
        if (contents.selected != null)
          valueSelected = contents.selected;
      }
    }
  }
  return {
    key: keyText,
    value: { text: valueText, selected: valueSelected },
    polygon: getPolygon(keyBlock.Geometry),
    boundingBox: getBoundingBox(keyBlock.Geometry)
  };
}
function extractContentsFromBlock(block, blockMap) {
  let words = "";
  let isSelected;
  if (!block.Relationships) {
    return { text: "", selected: void 0 };
  }
  for (const relation of block.Relationships) {
    for (const contentId of relation.Ids) {
      const contentBlock = blockMap[contentId];
      if (contentBlock.BlockType === "WORD") {
        words += contentBlock.Text + " ";
      } else if (contentBlock.BlockType === "SELECTION_ELEMENT") {
        isSelected = contentBlock.SelectionStatus === "SELECTED" ? true : false;
      }
    }
  }
  words = words.substr(0, words.length - 1);
  return { text: words, selected: isSelected };
}

// src/Providers/AmazonAIIdentifyPredictionsProvider.ts
var AmazonAIIdentifyPredictionsProvider = class extends AbstractIdentifyPredictionsProvider {
  constructor() {
    super();
  }
  getProviderName() {
    return "AmazonAIIdentifyPredictionsProvider";
  }
  configureSource(source) {
    return new Promise((res, rej) => {
      if (isStorageSource(source)) {
        const storageConfig = {
          level: source.level,
          identityId: source.identityId
        };
        Storage.get(source.key, storageConfig).then((url) => {
          const parser = /https:\/\/([a-zA-Z0-9%-_.]+)\.s3\.[A-Za-z0-9%-._~]+\/([a-zA-Z0-9%-._~/]+)\?/;
          const parsedURL = url.match(parser);
          if (parsedURL.length < 3)
            rej("Invalid S3 key was given.");
          res({
            S3Object: {
              Bucket: parsedURL[1],
              Name: decodeURIComponent(parsedURL[2])
            }
          });
        }).catch((err) => rej(err));
      } else if (isFileSource(source)) {
        blobToArrayBuffer(source.file).then((buffer) => {
          res({ Bytes: new Uint8Array(buffer) });
        }).catch((err) => rej(err));
      } else if (isBytesSource(source)) {
        const bytes = source.bytes;
        if (bytes instanceof Blob) {
          blobToArrayBuffer(bytes).then((buffer) => {
            res({ Bytes: new Uint8Array(buffer) });
          }).catch((err) => rej(err));
        }
        if (bytes instanceof ArrayBuffer || bytes instanceof Buffer) {
          res({ Bytes: new Uint8Array(bytes) });
        }
        res({ Bytes: bytes });
      } else {
        rej("Input source is not configured correctly.");
      }
    });
  }
  async identifyText(input) {
    const credentials = await Credentials2.get();
    if (!credentials)
      return Promise.reject("No credentials");
    const {
      identifyText: {
        region = "",
        defaults: { format: configFormat = "PLAIN" } = {}
      } = {}
    } = this._config;
    this.rekognitionClient = new RekognitionClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent2()
    });
    this.textractClient = new TextractClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent2()
    });
    let inputDocument;
    try {
      inputDocument = await this.configureSource(input.text.source);
    } catch (err) {
      return Promise.reject(err);
    }
    const format = input.text.format || configFormat;
    const featureTypes = [];
    if (format === "FORM" || format === "ALL")
      featureTypes.push("FORMS");
    if (format === "TABLE" || format === "ALL")
      featureTypes.push("TABLES");
    if (featureTypes.length === 0) {
      const textractParam = {
        Document: inputDocument
      };
      const rekognitionParam = {
        Image: inputDocument
      };
      try {
        const detectTextCommand = new DetectTextCommand(rekognitionParam);
        const rekognitionData = await this.rekognitionClient.send(detectTextCommand);
        const rekognitionResponse = categorizeRekognitionBlocks(rekognitionData.TextDetections);
        if (rekognitionResponse.text.words.length < 50) {
          return rekognitionResponse;
        }
        const detectDocumentTextCommand = new DetectDocumentTextCommand(textractParam);
        const { Blocks } = await this.textractClient.send(detectDocumentTextCommand);
        if (rekognitionData.TextDetections.length > Blocks.length) {
          return rekognitionResponse;
        }
        return categorizeTextractBlocks(Blocks);
      } catch (err) {
        Promise.reject(err);
      }
    } else {
      const param = {
        Document: inputDocument,
        FeatureTypes: featureTypes
      };
      try {
        const analyzeDocumentCommand = new AnalyzeDocumentCommand(param);
        const { Blocks } = await this.textractClient.send(analyzeDocumentCommand);
        return categorizeTextractBlocks(Blocks);
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
  async identifyLabels(input) {
    try {
      const credentials = await Credentials2.get();
      if (!credentials)
        return Promise.reject("No credentials");
      const {
        identifyLabels: {
          region = "",
          defaults: { type = "LABELS" } = {}
        } = {}
      } = this._config;
      this.rekognitionClient = new RekognitionClient({
        region,
        credentials,
        customUserAgent: getAmplifyUserAgent2()
      });
      let inputImage;
      await this.configureSource(input.labels.source).then((data) => {
        inputImage = data;
      }).catch((err) => {
        return Promise.reject(err);
      });
      const param = { Image: inputImage };
      const servicePromises = [];
      const entityType = input.labels.type || type;
      if (entityType === "LABELS" || entityType === "ALL") {
        servicePromises.push(this.detectLabels(param));
      }
      if (entityType === "UNSAFE" || entityType === "ALL") {
        servicePromises.push(this.detectModerationLabels(param));
      }
      return Promise.all(servicePromises).then((data) => {
        let identifyResult = {};
        data.forEach((val) => {
          identifyResult = { ...identifyResult, ...val };
        });
        return identifyResult;
      }).catch((err) => Promise.reject(err));
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async detectLabels(param) {
    try {
      const detectLabelsCommand = new DetectLabelsCommand(param);
      const data = await this.rekognitionClient.send(detectLabelsCommand);
      if (!data.Labels)
        return { labels: null };
      const detectLabelData = data.Labels.map((val) => {
        const boxes = val.Instances ? val.Instances.map((val2) => makeCamelCase(val2.BoundingBox)) : void 0;
        return {
          name: val.Name,
          boundingBoxes: boxes,
          metadata: {
            confidence: val.Confidence,
            parents: makeCamelCaseArray(val.Parents)
          }
        };
      });
      return { labels: detectLabelData };
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async detectModerationLabels(param) {
    try {
      const detectModerationLabelsCommand = new DetectModerationLabelsCommand(param);
      const data = await this.rekognitionClient.send(detectModerationLabelsCommand);
      if (data.ModerationLabels.length !== 0) {
        return { unsafe: "YES" };
      } else {
        return { unsafe: "NO" };
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async identifyEntities(input) {
    const credentials = await Credentials2.get();
    if (!credentials)
      return Promise.reject("No credentials");
    const {
      identifyEntities: {
        region = "",
        celebrityDetectionEnabled = false,
        defaults: {
          collectionId: collectionIdConfig = "",
          maxEntities: maxFacesConfig = 50
        } = {}
      } = {}
    } = this._config;
    this.rekognitionClient = new RekognitionClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent2()
    });
    let inputImage;
    await this.configureSource(input.entities.source).then((data) => inputImage = data).catch((err) => {
      return Promise.reject(err);
    });
    const param = { Attributes: ["ALL"], Image: inputImage };
    if (isIdentifyCelebrities(input.entities) && input.entities.celebrityDetection) {
      if (!celebrityDetectionEnabled) {
        return Promise.reject("Error: You have to enable celebrity detection first");
      }
      try {
        const recognizeCelebritiesCommand = new RecognizeCelebritiesCommand(param);
        const data = await this.rekognitionClient.send(recognizeCelebritiesCommand);
        const faces = data.CelebrityFaces.map((celebrity) => {
          return {
            boundingBox: makeCamelCase(celebrity.Face.BoundingBox),
            landmarks: makeCamelCaseArray(celebrity.Face.Landmarks),
            metadata: {
              ...makeCamelCase(celebrity, ["Id", "Name", "Urls"]),
              pose: makeCamelCase(celebrity.Face.Pose)
            }
          };
        });
        return { entities: faces };
      } catch (err) {
        return Promise.reject(err);
      }
    } else if (isIdentifyFromCollection(input.entities) && input.entities.collection) {
      const {
        collectionId = collectionIdConfig,
        maxEntities: maxFaces = maxFacesConfig
      } = input.entities;
      const updatedParam = {
        ...param,
        CollectionId: collectionId,
        MaxFaces: maxFaces
      };
      try {
        const searchFacesByImageCommand = new SearchFacesByImageCommand(updatedParam);
        const data = await this.rekognitionClient.send(searchFacesByImageCommand);
        const faces = data.FaceMatches.map((val) => {
          return {
            boundingBox: makeCamelCase(val.Face.BoundingBox),
            metadata: {
              externalImageId: this.decodeExternalImageId(val.Face.ExternalImageId),
              similarity: val.Similarity
            }
          };
        });
        return { entities: faces };
      } catch (err) {
        return Promise.reject(err);
      }
    } else {
      try {
        const detectFacesCommand = new DetectFacesCommand(param);
        const data = await this.rekognitionClient.send(detectFacesCommand);
        const faces = data.FaceDetails.map((detail) => {
          const attributeKeys = [
            "Smile",
            "Eyeglasses",
            "Sunglasses",
            "Gender",
            "Beard",
            "Mustache",
            "EyesOpen",
            "MouthOpen"
          ];
          const faceAttributes = makeCamelCase(detail, attributeKeys);
          if (detail.Emotions) {
            faceAttributes["emotions"] = detail.Emotions.map((emotion) => emotion.Type);
          }
          return {
            boundingBox: makeCamelCase(detail.BoundingBox),
            landmarks: makeCamelCaseArray(detail.Landmarks),
            ageRange: makeCamelCase(detail.AgeRange),
            attributes: faceAttributes,
            metadata: {
              confidence: detail.Confidence,
              pose: makeCamelCase(detail.Pose)
            }
          };
        });
        return { entities: faces };
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
  decodeExternalImageId(externalImageId) {
    return ("" + externalImageId).replace(/::/g, "/");
  }
};

// src/Providers/AmazonAIInterpretPredictionsProvider.ts
import { Credentials as Credentials3, getAmplifyUserAgent as getAmplifyUserAgent3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-comprehend/node_modules/tslib/modules/index.js
var import_tslib69 = __toModule(require_tslib6());
var {
  __extends: __extends6,
  __assign: __assign6,
  __rest: __rest6,
  __decorate: __decorate6,
  __param: __param6,
  __metadata: __metadata6,
  __awaiter: __awaiter6,
  __generator: __generator6,
  __exportStar: __exportStar6,
  __createBinding: __createBinding6,
  __values: __values6,
  __read: __read6,
  __spread: __spread6,
  __spreadArrays: __spreadArrays6,
  __spreadArray: __spreadArray5,
  __await: __await6,
  __asyncGenerator: __asyncGenerator6,
  __asyncDelegator: __asyncDelegator6,
  __asyncValues: __asyncValues6,
  __makeTemplateObject: __makeTemplateObject6,
  __importStar: __importStar6,
  __importDefault: __importDefault6,
  __classPrivateFieldGet: __classPrivateFieldGet6,
  __classPrivateFieldSet: __classPrivateFieldSet6
} = import_tslib69.default;

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/package.json
var name5 = "@aws-sdk/client-comprehend";
var description5 = "AWS SDK for JavaScript Comprehend Client for Node.js, Browser and React Native";
var version5 = "3.6.1";
var scripts5 = {
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
var main5 = "./dist/cjs/index.js";
var types5 = "./types/index.d.ts";
var module5 = "./dist/es/index.js";
var browser5 = {
  "./runtimeConfig": "./runtimeConfig.browser"
};
var react_native5 = {
  "./runtimeConfig": "./runtimeConfig.native"
};
var sideEffects5 = false;
var dependencies5 = {
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
  tslib: "^2.0.0",
  uuid: "^3.0.0"
};
var devDependencies5 = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@types/node": "^12.7.5",
  "@types/uuid": "^3.0.0",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  typedoc: "^0.19.2",
  typescript: "~4.1.2"
};
var engines5 = {
  node: ">=10.0.0"
};
var typesVersions5 = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
};
var author5 = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
};
var license5 = "Apache-2.0";
var homepage5 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-comprehend";
var repository5 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-comprehend"
};
var package_default5 = {
  name: name5,
  description: description5,
  version: version5,
  scripts: scripts5,
  main: main5,
  types: types5,
  module: module5,
  browser: browser5,
  "react-native": react_native5,
  sideEffects: sideEffects5,
  dependencies: dependencies5,
  devDependencies: devDependencies5,
  engines: engines5,
  typesVersions: typesVersions5,
  author: author5,
  license: license5,
  homepage: homepage5,
  repository: repository5
};

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/runtimeConfig.browser.js
var import_sha256_browser5 = __toModule(require_build5());
var import_util_utf8_browser5 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/endpoints.js
var AWS_TEMPLATE5 = "comprehend.{region}.amazonaws.com";
var AWS_CN_TEMPLATE5 = "comprehend.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE5 = "comprehend.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE5 = "comprehend.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE5 = "comprehend.{region}.amazonaws.com";
var AWS_REGIONS5 = new Set([
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
var AWS_CN_REGIONS5 = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS5 = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS5 = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS5 = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider5 = function(region, options) {
  var regionInfo = void 0;
  switch (region) {
    case "ap-northeast-1":
      regionInfo = {
        hostname: "comprehend.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "comprehend.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "comprehend.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "comprehend.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "comprehend.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "comprehend.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "comprehend.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "comprehend.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "comprehend.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "comprehend-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "comprehend-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "comprehend-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "comprehend-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "comprehend.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "comprehend.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "comprehend.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "comprehend.us-iso-east-1.c2s.ic.gov",
        partition: "aws-iso"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "comprehend.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    default:
      if (AWS_REGIONS5.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE5.replace("{region}", region),
          partition: "aws"
        };
      }
      if (AWS_CN_REGIONS5.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE5.replace("{region}", region),
          partition: "aws-cn"
        };
      }
      if (AWS_ISO_REGIONS5.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE5.replace("{region}", region),
          partition: "aws-iso"
        };
      }
      if (AWS_ISO_B_REGIONS5.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE5.replace("{region}", region),
          partition: "aws-iso-b"
        };
      }
      if (AWS_US_GOV_REGIONS5.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE5.replace("{region}", region),
          partition: "aws-us-gov"
        };
      }
      if (regionInfo === void 0) {
        regionInfo = {
          hostname: AWS_TEMPLATE5.replace("{region}", region),
          partition: "aws"
        };
      }
  }
  return Promise.resolve(__assign6({ signingService: "comprehend" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/runtimeConfig.shared.js
var ClientSharedValues5 = {
  apiVersion: "2017-11-27",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider5,
  serviceId: "Comprehend",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/runtimeConfig.browser.js
var ClientDefaultValues5 = __assign6(__assign6({}, ClientSharedValues5), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues5.serviceId,
  clientVersion: package_default5.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser5.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser5.fromUtf8, utf8Encoder: import_util_utf8_browser5.toUtf8 });

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/ComprehendClient.js
var ComprehendClient = function(_super) {
  __extends6(ComprehendClient2, _super);
  function ComprehendClient2(configuration) {
    var _this = this;
    var _config_0 = __assign6(__assign6({}, ClientDefaultValues5), configuration);
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
  ComprehendClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return ComprehendClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/models/models_0.js
var AugmentedManifestsListItem;
(function(AugmentedManifestsListItem2) {
  AugmentedManifestsListItem2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(AugmentedManifestsListItem || (AugmentedManifestsListItem = {}));
var BatchDetectDominantLanguageRequest;
(function(BatchDetectDominantLanguageRequest2) {
  BatchDetectDominantLanguageRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.TextList && { TextList: SENSITIVE_STRING });
  };
})(BatchDetectDominantLanguageRequest || (BatchDetectDominantLanguageRequest = {}));
var BatchItemError;
(function(BatchItemError2) {
  BatchItemError2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchItemError || (BatchItemError = {}));
var DominantLanguage;
(function(DominantLanguage2) {
  DominantLanguage2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DominantLanguage || (DominantLanguage = {}));
var BatchDetectDominantLanguageItemResult;
(function(BatchDetectDominantLanguageItemResult2) {
  BatchDetectDominantLanguageItemResult2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectDominantLanguageItemResult || (BatchDetectDominantLanguageItemResult = {}));
var BatchDetectDominantLanguageResponse;
(function(BatchDetectDominantLanguageResponse2) {
  BatchDetectDominantLanguageResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectDominantLanguageResponse || (BatchDetectDominantLanguageResponse = {}));
var BatchSizeLimitExceededException;
(function(BatchSizeLimitExceededException2) {
  BatchSizeLimitExceededException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchSizeLimitExceededException || (BatchSizeLimitExceededException = {}));
var InternalServerException2;
(function(InternalServerException3) {
  InternalServerException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(InternalServerException2 || (InternalServerException2 = {}));
var InvalidRequestException2;
(function(InvalidRequestException3) {
  InvalidRequestException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(InvalidRequestException2 || (InvalidRequestException2 = {}));
var TextSizeLimitExceededException2;
(function(TextSizeLimitExceededException3) {
  TextSizeLimitExceededException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TextSizeLimitExceededException2 || (TextSizeLimitExceededException2 = {}));
var LanguageCode;
(function(LanguageCode2) {
  LanguageCode2["AR"] = "ar";
  LanguageCode2["DE"] = "de";
  LanguageCode2["EN"] = "en";
  LanguageCode2["ES"] = "es";
  LanguageCode2["FR"] = "fr";
  LanguageCode2["HI"] = "hi";
  LanguageCode2["IT"] = "it";
  LanguageCode2["JA"] = "ja";
  LanguageCode2["KO"] = "ko";
  LanguageCode2["PT"] = "pt";
  LanguageCode2["ZH"] = "zh";
  LanguageCode2["ZH_TW"] = "zh-TW";
})(LanguageCode || (LanguageCode = {}));
var BatchDetectEntitiesRequest;
(function(BatchDetectEntitiesRequest2) {
  BatchDetectEntitiesRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.TextList && { TextList: SENSITIVE_STRING });
  };
})(BatchDetectEntitiesRequest || (BatchDetectEntitiesRequest = {}));
var EntityType2;
(function(EntityType3) {
  EntityType3["COMMERCIAL_ITEM"] = "COMMERCIAL_ITEM";
  EntityType3["DATE"] = "DATE";
  EntityType3["EVENT"] = "EVENT";
  EntityType3["LOCATION"] = "LOCATION";
  EntityType3["ORGANIZATION"] = "ORGANIZATION";
  EntityType3["OTHER"] = "OTHER";
  EntityType3["PERSON"] = "PERSON";
  EntityType3["QUANTITY"] = "QUANTITY";
  EntityType3["TITLE"] = "TITLE";
})(EntityType2 || (EntityType2 = {}));
var Entity;
(function(Entity2) {
  Entity2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(Entity || (Entity = {}));
var BatchDetectEntitiesItemResult;
(function(BatchDetectEntitiesItemResult2) {
  BatchDetectEntitiesItemResult2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectEntitiesItemResult || (BatchDetectEntitiesItemResult = {}));
var BatchDetectEntitiesResponse;
(function(BatchDetectEntitiesResponse2) {
  BatchDetectEntitiesResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectEntitiesResponse || (BatchDetectEntitiesResponse = {}));
var UnsupportedLanguageException;
(function(UnsupportedLanguageException2) {
  UnsupportedLanguageException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(UnsupportedLanguageException || (UnsupportedLanguageException = {}));
var BatchDetectKeyPhrasesRequest;
(function(BatchDetectKeyPhrasesRequest2) {
  BatchDetectKeyPhrasesRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.TextList && { TextList: SENSITIVE_STRING });
  };
})(BatchDetectKeyPhrasesRequest || (BatchDetectKeyPhrasesRequest = {}));
var KeyPhrase;
(function(KeyPhrase2) {
  KeyPhrase2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(KeyPhrase || (KeyPhrase = {}));
var BatchDetectKeyPhrasesItemResult;
(function(BatchDetectKeyPhrasesItemResult2) {
  BatchDetectKeyPhrasesItemResult2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectKeyPhrasesItemResult || (BatchDetectKeyPhrasesItemResult = {}));
var BatchDetectKeyPhrasesResponse;
(function(BatchDetectKeyPhrasesResponse2) {
  BatchDetectKeyPhrasesResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectKeyPhrasesResponse || (BatchDetectKeyPhrasesResponse = {}));
var BatchDetectSentimentRequest;
(function(BatchDetectSentimentRequest2) {
  BatchDetectSentimentRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.TextList && { TextList: SENSITIVE_STRING });
  };
})(BatchDetectSentimentRequest || (BatchDetectSentimentRequest = {}));
var SentimentType;
(function(SentimentType2) {
  SentimentType2["MIXED"] = "MIXED";
  SentimentType2["NEGATIVE"] = "NEGATIVE";
  SentimentType2["NEUTRAL"] = "NEUTRAL";
  SentimentType2["POSITIVE"] = "POSITIVE";
})(SentimentType || (SentimentType = {}));
var SentimentScore;
(function(SentimentScore2) {
  SentimentScore2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(SentimentScore || (SentimentScore = {}));
var BatchDetectSentimentItemResult;
(function(BatchDetectSentimentItemResult2) {
  BatchDetectSentimentItemResult2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectSentimentItemResult || (BatchDetectSentimentItemResult = {}));
var BatchDetectSentimentResponse;
(function(BatchDetectSentimentResponse2) {
  BatchDetectSentimentResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectSentimentResponse || (BatchDetectSentimentResponse = {}));
var SyntaxLanguageCode;
(function(SyntaxLanguageCode2) {
  SyntaxLanguageCode2["DE"] = "de";
  SyntaxLanguageCode2["EN"] = "en";
  SyntaxLanguageCode2["ES"] = "es";
  SyntaxLanguageCode2["FR"] = "fr";
  SyntaxLanguageCode2["IT"] = "it";
  SyntaxLanguageCode2["PT"] = "pt";
})(SyntaxLanguageCode || (SyntaxLanguageCode = {}));
var BatchDetectSyntaxRequest;
(function(BatchDetectSyntaxRequest2) {
  BatchDetectSyntaxRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.TextList && { TextList: SENSITIVE_STRING });
  };
})(BatchDetectSyntaxRequest || (BatchDetectSyntaxRequest = {}));
var PartOfSpeechTagType;
(function(PartOfSpeechTagType2) {
  PartOfSpeechTagType2["ADJ"] = "ADJ";
  PartOfSpeechTagType2["ADP"] = "ADP";
  PartOfSpeechTagType2["ADV"] = "ADV";
  PartOfSpeechTagType2["AUX"] = "AUX";
  PartOfSpeechTagType2["CCONJ"] = "CCONJ";
  PartOfSpeechTagType2["CONJ"] = "CONJ";
  PartOfSpeechTagType2["DET"] = "DET";
  PartOfSpeechTagType2["INTJ"] = "INTJ";
  PartOfSpeechTagType2["NOUN"] = "NOUN";
  PartOfSpeechTagType2["NUM"] = "NUM";
  PartOfSpeechTagType2["O"] = "O";
  PartOfSpeechTagType2["PART"] = "PART";
  PartOfSpeechTagType2["PRON"] = "PRON";
  PartOfSpeechTagType2["PROPN"] = "PROPN";
  PartOfSpeechTagType2["PUNCT"] = "PUNCT";
  PartOfSpeechTagType2["SCONJ"] = "SCONJ";
  PartOfSpeechTagType2["SYM"] = "SYM";
  PartOfSpeechTagType2["VERB"] = "VERB";
})(PartOfSpeechTagType || (PartOfSpeechTagType = {}));
var PartOfSpeechTag;
(function(PartOfSpeechTag2) {
  PartOfSpeechTag2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(PartOfSpeechTag || (PartOfSpeechTag = {}));
var SyntaxToken;
(function(SyntaxToken2) {
  SyntaxToken2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(SyntaxToken || (SyntaxToken = {}));
var BatchDetectSyntaxItemResult;
(function(BatchDetectSyntaxItemResult2) {
  BatchDetectSyntaxItemResult2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectSyntaxItemResult || (BatchDetectSyntaxItemResult = {}));
var BatchDetectSyntaxResponse;
(function(BatchDetectSyntaxResponse2) {
  BatchDetectSyntaxResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(BatchDetectSyntaxResponse || (BatchDetectSyntaxResponse = {}));
var ClassifierEvaluationMetrics;
(function(ClassifierEvaluationMetrics2) {
  ClassifierEvaluationMetrics2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ClassifierEvaluationMetrics || (ClassifierEvaluationMetrics = {}));
var ClassifierMetadata;
(function(ClassifierMetadata2) {
  ClassifierMetadata2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ClassifierMetadata || (ClassifierMetadata = {}));
var ClassifyDocumentRequest;
(function(ClassifyDocumentRequest2) {
  ClassifyDocumentRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.Text && { Text: SENSITIVE_STRING });
  };
})(ClassifyDocumentRequest || (ClassifyDocumentRequest = {}));
var DocumentClass;
(function(DocumentClass2) {
  DocumentClass2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentClass || (DocumentClass = {}));
var DocumentLabel;
(function(DocumentLabel2) {
  DocumentLabel2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentLabel || (DocumentLabel = {}));
var ClassifyDocumentResponse;
(function(ClassifyDocumentResponse2) {
  ClassifyDocumentResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ClassifyDocumentResponse || (ClassifyDocumentResponse = {}));
var ResourceUnavailableException;
(function(ResourceUnavailableException2) {
  ResourceUnavailableException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ResourceUnavailableException || (ResourceUnavailableException = {}));
var DocumentClassifierDataFormat;
(function(DocumentClassifierDataFormat2) {
  DocumentClassifierDataFormat2["AUGMENTED_MANIFEST"] = "AUGMENTED_MANIFEST";
  DocumentClassifierDataFormat2["COMPREHEND_CSV"] = "COMPREHEND_CSV";
})(DocumentClassifierDataFormat || (DocumentClassifierDataFormat = {}));
var DocumentClassifierInputDataConfig;
(function(DocumentClassifierInputDataConfig2) {
  DocumentClassifierInputDataConfig2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentClassifierInputDataConfig || (DocumentClassifierInputDataConfig = {}));
var DocumentClassifierMode;
(function(DocumentClassifierMode2) {
  DocumentClassifierMode2["MULTI_CLASS"] = "MULTI_CLASS";
  DocumentClassifierMode2["MULTI_LABEL"] = "MULTI_LABEL";
})(DocumentClassifierMode || (DocumentClassifierMode = {}));
var DocumentClassifierOutputDataConfig;
(function(DocumentClassifierOutputDataConfig2) {
  DocumentClassifierOutputDataConfig2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentClassifierOutputDataConfig || (DocumentClassifierOutputDataConfig = {}));
var Tag;
(function(Tag2) {
  Tag2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(Tag || (Tag = {}));
var VpcConfig;
(function(VpcConfig2) {
  VpcConfig2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(VpcConfig || (VpcConfig = {}));
var CreateDocumentClassifierRequest;
(function(CreateDocumentClassifierRequest2) {
  CreateDocumentClassifierRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(CreateDocumentClassifierRequest || (CreateDocumentClassifierRequest = {}));
var CreateDocumentClassifierResponse;
(function(CreateDocumentClassifierResponse2) {
  CreateDocumentClassifierResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(CreateDocumentClassifierResponse || (CreateDocumentClassifierResponse = {}));
var KmsKeyValidationException;
(function(KmsKeyValidationException2) {
  KmsKeyValidationException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(KmsKeyValidationException || (KmsKeyValidationException = {}));
var ResourceInUseException2;
(function(ResourceInUseException3) {
  ResourceInUseException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ResourceInUseException2 || (ResourceInUseException2 = {}));
var ResourceLimitExceededException;
(function(ResourceLimitExceededException2) {
  ResourceLimitExceededException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ResourceLimitExceededException || (ResourceLimitExceededException = {}));
var TooManyRequestsException2;
(function(TooManyRequestsException3) {
  TooManyRequestsException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TooManyRequestsException2 || (TooManyRequestsException2 = {}));
var TooManyTagsException;
(function(TooManyTagsException2) {
  TooManyTagsException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TooManyTagsException || (TooManyTagsException = {}));
var CreateEndpointRequest;
(function(CreateEndpointRequest2) {
  CreateEndpointRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(CreateEndpointRequest || (CreateEndpointRequest = {}));
var CreateEndpointResponse;
(function(CreateEndpointResponse2) {
  CreateEndpointResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(CreateEndpointResponse || (CreateEndpointResponse = {}));
var ResourceNotFoundException3;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ResourceNotFoundException3 || (ResourceNotFoundException3 = {}));
var EntityRecognizerAnnotations;
(function(EntityRecognizerAnnotations2) {
  EntityRecognizerAnnotations2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerAnnotations || (EntityRecognizerAnnotations = {}));
var EntityRecognizerDataFormat;
(function(EntityRecognizerDataFormat2) {
  EntityRecognizerDataFormat2["AUGMENTED_MANIFEST"] = "AUGMENTED_MANIFEST";
  EntityRecognizerDataFormat2["COMPREHEND_CSV"] = "COMPREHEND_CSV";
})(EntityRecognizerDataFormat || (EntityRecognizerDataFormat = {}));
var EntityRecognizerDocuments;
(function(EntityRecognizerDocuments2) {
  EntityRecognizerDocuments2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerDocuments || (EntityRecognizerDocuments = {}));
var EntityRecognizerEntityList;
(function(EntityRecognizerEntityList2) {
  EntityRecognizerEntityList2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerEntityList || (EntityRecognizerEntityList = {}));
var EntityTypesListItem;
(function(EntityTypesListItem2) {
  EntityTypesListItem2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityTypesListItem || (EntityTypesListItem = {}));
var EntityRecognizerInputDataConfig;
(function(EntityRecognizerInputDataConfig2) {
  EntityRecognizerInputDataConfig2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerInputDataConfig || (EntityRecognizerInputDataConfig = {}));
var CreateEntityRecognizerRequest;
(function(CreateEntityRecognizerRequest2) {
  CreateEntityRecognizerRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(CreateEntityRecognizerRequest || (CreateEntityRecognizerRequest = {}));
var CreateEntityRecognizerResponse;
(function(CreateEntityRecognizerResponse2) {
  CreateEntityRecognizerResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(CreateEntityRecognizerResponse || (CreateEntityRecognizerResponse = {}));
var DeleteDocumentClassifierRequest;
(function(DeleteDocumentClassifierRequest2) {
  DeleteDocumentClassifierRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DeleteDocumentClassifierRequest || (DeleteDocumentClassifierRequest = {}));
var DeleteDocumentClassifierResponse;
(function(DeleteDocumentClassifierResponse2) {
  DeleteDocumentClassifierResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DeleteDocumentClassifierResponse || (DeleteDocumentClassifierResponse = {}));
var DeleteEndpointRequest;
(function(DeleteEndpointRequest2) {
  DeleteEndpointRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DeleteEndpointRequest || (DeleteEndpointRequest = {}));
var DeleteEndpointResponse;
(function(DeleteEndpointResponse2) {
  DeleteEndpointResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DeleteEndpointResponse || (DeleteEndpointResponse = {}));
var DeleteEntityRecognizerRequest;
(function(DeleteEntityRecognizerRequest2) {
  DeleteEntityRecognizerRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DeleteEntityRecognizerRequest || (DeleteEntityRecognizerRequest = {}));
var DeleteEntityRecognizerResponse;
(function(DeleteEntityRecognizerResponse2) {
  DeleteEntityRecognizerResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DeleteEntityRecognizerResponse || (DeleteEntityRecognizerResponse = {}));
var DescribeDocumentClassificationJobRequest;
(function(DescribeDocumentClassificationJobRequest2) {
  DescribeDocumentClassificationJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeDocumentClassificationJobRequest || (DescribeDocumentClassificationJobRequest = {}));
var InputFormat;
(function(InputFormat2) {
  InputFormat2["ONE_DOC_PER_FILE"] = "ONE_DOC_PER_FILE";
  InputFormat2["ONE_DOC_PER_LINE"] = "ONE_DOC_PER_LINE";
})(InputFormat || (InputFormat = {}));
var InputDataConfig2;
(function(InputDataConfig3) {
  InputDataConfig3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(InputDataConfig2 || (InputDataConfig2 = {}));
var JobStatus3;
(function(JobStatus4) {
  JobStatus4["COMPLETED"] = "COMPLETED";
  JobStatus4["FAILED"] = "FAILED";
  JobStatus4["IN_PROGRESS"] = "IN_PROGRESS";
  JobStatus4["STOPPED"] = "STOPPED";
  JobStatus4["STOP_REQUESTED"] = "STOP_REQUESTED";
  JobStatus4["SUBMITTED"] = "SUBMITTED";
})(JobStatus3 || (JobStatus3 = {}));
var OutputDataConfig2;
(function(OutputDataConfig3) {
  OutputDataConfig3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(OutputDataConfig2 || (OutputDataConfig2 = {}));
var DocumentClassificationJobProperties;
(function(DocumentClassificationJobProperties2) {
  DocumentClassificationJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentClassificationJobProperties || (DocumentClassificationJobProperties = {}));
var DescribeDocumentClassificationJobResponse;
(function(DescribeDocumentClassificationJobResponse2) {
  DescribeDocumentClassificationJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeDocumentClassificationJobResponse || (DescribeDocumentClassificationJobResponse = {}));
var JobNotFoundException;
(function(JobNotFoundException2) {
  JobNotFoundException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(JobNotFoundException || (JobNotFoundException = {}));
var DescribeDocumentClassifierRequest;
(function(DescribeDocumentClassifierRequest2) {
  DescribeDocumentClassifierRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeDocumentClassifierRequest || (DescribeDocumentClassifierRequest = {}));
var ModelStatus;
(function(ModelStatus2) {
  ModelStatus2["DELETING"] = "DELETING";
  ModelStatus2["IN_ERROR"] = "IN_ERROR";
  ModelStatus2["STOPPED"] = "STOPPED";
  ModelStatus2["STOP_REQUESTED"] = "STOP_REQUESTED";
  ModelStatus2["SUBMITTED"] = "SUBMITTED";
  ModelStatus2["TRAINED"] = "TRAINED";
  ModelStatus2["TRAINING"] = "TRAINING";
})(ModelStatus || (ModelStatus = {}));
var DocumentClassifierProperties;
(function(DocumentClassifierProperties2) {
  DocumentClassifierProperties2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.ClassifierMetadata && { ClassifierMetadata: SENSITIVE_STRING });
  };
})(DocumentClassifierProperties || (DocumentClassifierProperties = {}));
var DescribeDocumentClassifierResponse;
(function(DescribeDocumentClassifierResponse2) {
  DescribeDocumentClassifierResponse2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.DocumentClassifierProperties && {
      DocumentClassifierProperties: DocumentClassifierProperties.filterSensitiveLog(obj.DocumentClassifierProperties)
    });
  };
})(DescribeDocumentClassifierResponse || (DescribeDocumentClassifierResponse = {}));
var DescribeDominantLanguageDetectionJobRequest;
(function(DescribeDominantLanguageDetectionJobRequest2) {
  DescribeDominantLanguageDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeDominantLanguageDetectionJobRequest || (DescribeDominantLanguageDetectionJobRequest = {}));
var DominantLanguageDetectionJobProperties;
(function(DominantLanguageDetectionJobProperties2) {
  DominantLanguageDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DominantLanguageDetectionJobProperties || (DominantLanguageDetectionJobProperties = {}));
var DescribeDominantLanguageDetectionJobResponse;
(function(DescribeDominantLanguageDetectionJobResponse2) {
  DescribeDominantLanguageDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeDominantLanguageDetectionJobResponse || (DescribeDominantLanguageDetectionJobResponse = {}));
var DescribeEndpointRequest;
(function(DescribeEndpointRequest2) {
  DescribeEndpointRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEndpointRequest || (DescribeEndpointRequest = {}));
var EndpointStatus;
(function(EndpointStatus2) {
  EndpointStatus2["CREATING"] = "CREATING";
  EndpointStatus2["DELETING"] = "DELETING";
  EndpointStatus2["FAILED"] = "FAILED";
  EndpointStatus2["IN_SERVICE"] = "IN_SERVICE";
  EndpointStatus2["UPDATING"] = "UPDATING";
})(EndpointStatus || (EndpointStatus = {}));
var EndpointProperties;
(function(EndpointProperties2) {
  EndpointProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EndpointProperties || (EndpointProperties = {}));
var DescribeEndpointResponse;
(function(DescribeEndpointResponse2) {
  DescribeEndpointResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEndpointResponse || (DescribeEndpointResponse = {}));
var DescribeEntitiesDetectionJobRequest;
(function(DescribeEntitiesDetectionJobRequest2) {
  DescribeEntitiesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEntitiesDetectionJobRequest || (DescribeEntitiesDetectionJobRequest = {}));
var EntitiesDetectionJobProperties;
(function(EntitiesDetectionJobProperties2) {
  EntitiesDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntitiesDetectionJobProperties || (EntitiesDetectionJobProperties = {}));
var DescribeEntitiesDetectionJobResponse;
(function(DescribeEntitiesDetectionJobResponse2) {
  DescribeEntitiesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEntitiesDetectionJobResponse || (DescribeEntitiesDetectionJobResponse = {}));
var DescribeEntityRecognizerRequest;
(function(DescribeEntityRecognizerRequest2) {
  DescribeEntityRecognizerRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEntityRecognizerRequest || (DescribeEntityRecognizerRequest = {}));
var EntityTypesEvaluationMetrics;
(function(EntityTypesEvaluationMetrics2) {
  EntityTypesEvaluationMetrics2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityTypesEvaluationMetrics || (EntityTypesEvaluationMetrics = {}));
var EntityRecognizerMetadataEntityTypesListItem;
(function(EntityRecognizerMetadataEntityTypesListItem2) {
  EntityRecognizerMetadataEntityTypesListItem2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerMetadataEntityTypesListItem || (EntityRecognizerMetadataEntityTypesListItem = {}));
var EntityRecognizerEvaluationMetrics;
(function(EntityRecognizerEvaluationMetrics2) {
  EntityRecognizerEvaluationMetrics2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerEvaluationMetrics || (EntityRecognizerEvaluationMetrics = {}));
var EntityRecognizerMetadata;
(function(EntityRecognizerMetadata2) {
  EntityRecognizerMetadata2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerMetadata || (EntityRecognizerMetadata = {}));
var EntityRecognizerProperties;
(function(EntityRecognizerProperties2) {
  EntityRecognizerProperties2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.RecognizerMetadata && { RecognizerMetadata: SENSITIVE_STRING });
  };
})(EntityRecognizerProperties || (EntityRecognizerProperties = {}));
var DescribeEntityRecognizerResponse;
(function(DescribeEntityRecognizerResponse2) {
  DescribeEntityRecognizerResponse2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.EntityRecognizerProperties && {
      EntityRecognizerProperties: EntityRecognizerProperties.filterSensitiveLog(obj.EntityRecognizerProperties)
    });
  };
})(DescribeEntityRecognizerResponse || (DescribeEntityRecognizerResponse = {}));
var DescribeEventsDetectionJobRequest;
(function(DescribeEventsDetectionJobRequest2) {
  DescribeEventsDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEventsDetectionJobRequest || (DescribeEventsDetectionJobRequest = {}));
var EventsDetectionJobProperties;
(function(EventsDetectionJobProperties2) {
  EventsDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EventsDetectionJobProperties || (EventsDetectionJobProperties = {}));
var DescribeEventsDetectionJobResponse;
(function(DescribeEventsDetectionJobResponse2) {
  DescribeEventsDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeEventsDetectionJobResponse || (DescribeEventsDetectionJobResponse = {}));
var DescribeKeyPhrasesDetectionJobRequest;
(function(DescribeKeyPhrasesDetectionJobRequest2) {
  DescribeKeyPhrasesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeKeyPhrasesDetectionJobRequest || (DescribeKeyPhrasesDetectionJobRequest = {}));
var KeyPhrasesDetectionJobProperties;
(function(KeyPhrasesDetectionJobProperties2) {
  KeyPhrasesDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(KeyPhrasesDetectionJobProperties || (KeyPhrasesDetectionJobProperties = {}));
var DescribeKeyPhrasesDetectionJobResponse;
(function(DescribeKeyPhrasesDetectionJobResponse2) {
  DescribeKeyPhrasesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeKeyPhrasesDetectionJobResponse || (DescribeKeyPhrasesDetectionJobResponse = {}));
var DescribePiiEntitiesDetectionJobRequest;
(function(DescribePiiEntitiesDetectionJobRequest2) {
  DescribePiiEntitiesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribePiiEntitiesDetectionJobRequest || (DescribePiiEntitiesDetectionJobRequest = {}));
var PiiEntitiesDetectionMode;
(function(PiiEntitiesDetectionMode2) {
  PiiEntitiesDetectionMode2["ONLY_OFFSETS"] = "ONLY_OFFSETS";
  PiiEntitiesDetectionMode2["ONLY_REDACTION"] = "ONLY_REDACTION";
})(PiiEntitiesDetectionMode || (PiiEntitiesDetectionMode = {}));
var PiiOutputDataConfig;
(function(PiiOutputDataConfig2) {
  PiiOutputDataConfig2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(PiiOutputDataConfig || (PiiOutputDataConfig = {}));
var PiiEntitiesDetectionMaskMode;
(function(PiiEntitiesDetectionMaskMode2) {
  PiiEntitiesDetectionMaskMode2["MASK"] = "MASK";
  PiiEntitiesDetectionMaskMode2["REPLACE_WITH_PII_ENTITY_TYPE"] = "REPLACE_WITH_PII_ENTITY_TYPE";
})(PiiEntitiesDetectionMaskMode || (PiiEntitiesDetectionMaskMode = {}));
var PiiEntityType;
(function(PiiEntityType2) {
  PiiEntityType2["ADDRESS"] = "ADDRESS";
  PiiEntityType2["AGE"] = "AGE";
  PiiEntityType2["ALL"] = "ALL";
  PiiEntityType2["AWS_ACCESS_KEY"] = "AWS_ACCESS_KEY";
  PiiEntityType2["AWS_SECRET_KEY"] = "AWS_SECRET_KEY";
  PiiEntityType2["BANK_ACCOUNT_NUMBER"] = "BANK_ACCOUNT_NUMBER";
  PiiEntityType2["BANK_ROUTING"] = "BANK_ROUTING";
  PiiEntityType2["CREDIT_DEBIT_CVV"] = "CREDIT_DEBIT_CVV";
  PiiEntityType2["CREDIT_DEBIT_EXPIRY"] = "CREDIT_DEBIT_EXPIRY";
  PiiEntityType2["CREDIT_DEBIT_NUMBER"] = "CREDIT_DEBIT_NUMBER";
  PiiEntityType2["DATE_TIME"] = "DATE_TIME";
  PiiEntityType2["DRIVER_ID"] = "DRIVER_ID";
  PiiEntityType2["EMAIL"] = "EMAIL";
  PiiEntityType2["IP_ADDRESS"] = "IP_ADDRESS";
  PiiEntityType2["MAC_ADDRESS"] = "MAC_ADDRESS";
  PiiEntityType2["NAME"] = "NAME";
  PiiEntityType2["PASSPORT_NUMBER"] = "PASSPORT_NUMBER";
  PiiEntityType2["PASSWORD"] = "PASSWORD";
  PiiEntityType2["PHONE"] = "PHONE";
  PiiEntityType2["PIN"] = "PIN";
  PiiEntityType2["SSN"] = "SSN";
  PiiEntityType2["URL"] = "URL";
  PiiEntityType2["USERNAME"] = "USERNAME";
})(PiiEntityType || (PiiEntityType = {}));
var RedactionConfig;
(function(RedactionConfig2) {
  RedactionConfig2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(RedactionConfig || (RedactionConfig = {}));
var PiiEntitiesDetectionJobProperties;
(function(PiiEntitiesDetectionJobProperties2) {
  PiiEntitiesDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(PiiEntitiesDetectionJobProperties || (PiiEntitiesDetectionJobProperties = {}));
var DescribePiiEntitiesDetectionJobResponse;
(function(DescribePiiEntitiesDetectionJobResponse2) {
  DescribePiiEntitiesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribePiiEntitiesDetectionJobResponse || (DescribePiiEntitiesDetectionJobResponse = {}));
var DescribeSentimentDetectionJobRequest;
(function(DescribeSentimentDetectionJobRequest2) {
  DescribeSentimentDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeSentimentDetectionJobRequest || (DescribeSentimentDetectionJobRequest = {}));
var SentimentDetectionJobProperties;
(function(SentimentDetectionJobProperties2) {
  SentimentDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(SentimentDetectionJobProperties || (SentimentDetectionJobProperties = {}));
var DescribeSentimentDetectionJobResponse;
(function(DescribeSentimentDetectionJobResponse2) {
  DescribeSentimentDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeSentimentDetectionJobResponse || (DescribeSentimentDetectionJobResponse = {}));
var DescribeTopicsDetectionJobRequest;
(function(DescribeTopicsDetectionJobRequest2) {
  DescribeTopicsDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeTopicsDetectionJobRequest || (DescribeTopicsDetectionJobRequest = {}));
var TopicsDetectionJobProperties;
(function(TopicsDetectionJobProperties2) {
  TopicsDetectionJobProperties2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TopicsDetectionJobProperties || (TopicsDetectionJobProperties = {}));
var DescribeTopicsDetectionJobResponse;
(function(DescribeTopicsDetectionJobResponse2) {
  DescribeTopicsDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DescribeTopicsDetectionJobResponse || (DescribeTopicsDetectionJobResponse = {}));
var DetectDominantLanguageRequest;
(function(DetectDominantLanguageRequest2) {
  DetectDominantLanguageRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.Text && { Text: SENSITIVE_STRING });
  };
})(DetectDominantLanguageRequest || (DetectDominantLanguageRequest = {}));
var DetectDominantLanguageResponse;
(function(DetectDominantLanguageResponse2) {
  DetectDominantLanguageResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectDominantLanguageResponse || (DetectDominantLanguageResponse = {}));
var DetectEntitiesRequest;
(function(DetectEntitiesRequest2) {
  DetectEntitiesRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.Text && { Text: SENSITIVE_STRING });
  };
})(DetectEntitiesRequest || (DetectEntitiesRequest = {}));
var DetectEntitiesResponse;
(function(DetectEntitiesResponse2) {
  DetectEntitiesResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectEntitiesResponse || (DetectEntitiesResponse = {}));
var DetectKeyPhrasesRequest;
(function(DetectKeyPhrasesRequest2) {
  DetectKeyPhrasesRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.Text && { Text: SENSITIVE_STRING });
  };
})(DetectKeyPhrasesRequest || (DetectKeyPhrasesRequest = {}));
var DetectKeyPhrasesResponse;
(function(DetectKeyPhrasesResponse2) {
  DetectKeyPhrasesResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectKeyPhrasesResponse || (DetectKeyPhrasesResponse = {}));
var DetectPiiEntitiesRequest;
(function(DetectPiiEntitiesRequest2) {
  DetectPiiEntitiesRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectPiiEntitiesRequest || (DetectPiiEntitiesRequest = {}));
var PiiEntity;
(function(PiiEntity2) {
  PiiEntity2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(PiiEntity || (PiiEntity = {}));
var DetectPiiEntitiesResponse;
(function(DetectPiiEntitiesResponse2) {
  DetectPiiEntitiesResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectPiiEntitiesResponse || (DetectPiiEntitiesResponse = {}));
var DetectSentimentRequest;
(function(DetectSentimentRequest2) {
  DetectSentimentRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.Text && { Text: SENSITIVE_STRING });
  };
})(DetectSentimentRequest || (DetectSentimentRequest = {}));
var DetectSentimentResponse;
(function(DetectSentimentResponse2) {
  DetectSentimentResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectSentimentResponse || (DetectSentimentResponse = {}));
var DetectSyntaxRequest;
(function(DetectSyntaxRequest2) {
  DetectSyntaxRequest2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.Text && { Text: SENSITIVE_STRING });
  };
})(DetectSyntaxRequest || (DetectSyntaxRequest = {}));
var DetectSyntaxResponse;
(function(DetectSyntaxResponse2) {
  DetectSyntaxResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DetectSyntaxResponse || (DetectSyntaxResponse = {}));
var InvalidFilterException2;
(function(InvalidFilterException3) {
  InvalidFilterException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(InvalidFilterException2 || (InvalidFilterException2 = {}));
var DocumentClassificationJobFilter;
(function(DocumentClassificationJobFilter2) {
  DocumentClassificationJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentClassificationJobFilter || (DocumentClassificationJobFilter = {}));
var ListDocumentClassificationJobsRequest;
(function(ListDocumentClassificationJobsRequest2) {
  ListDocumentClassificationJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListDocumentClassificationJobsRequest || (ListDocumentClassificationJobsRequest = {}));
var ListDocumentClassificationJobsResponse;
(function(ListDocumentClassificationJobsResponse2) {
  ListDocumentClassificationJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListDocumentClassificationJobsResponse || (ListDocumentClassificationJobsResponse = {}));
var DocumentClassifierFilter;
(function(DocumentClassifierFilter2) {
  DocumentClassifierFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DocumentClassifierFilter || (DocumentClassifierFilter = {}));
var ListDocumentClassifiersRequest;
(function(ListDocumentClassifiersRequest2) {
  ListDocumentClassifiersRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListDocumentClassifiersRequest || (ListDocumentClassifiersRequest = {}));
var ListDocumentClassifiersResponse;
(function(ListDocumentClassifiersResponse2) {
  ListDocumentClassifiersResponse2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.DocumentClassifierPropertiesList && {
      DocumentClassifierPropertiesList: obj.DocumentClassifierPropertiesList.map(function(item) {
        return DocumentClassifierProperties.filterSensitiveLog(item);
      })
    });
  };
})(ListDocumentClassifiersResponse || (ListDocumentClassifiersResponse = {}));
var DominantLanguageDetectionJobFilter;
(function(DominantLanguageDetectionJobFilter2) {
  DominantLanguageDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(DominantLanguageDetectionJobFilter || (DominantLanguageDetectionJobFilter = {}));
var ListDominantLanguageDetectionJobsRequest;
(function(ListDominantLanguageDetectionJobsRequest2) {
  ListDominantLanguageDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListDominantLanguageDetectionJobsRequest || (ListDominantLanguageDetectionJobsRequest = {}));
var ListDominantLanguageDetectionJobsResponse;
(function(ListDominantLanguageDetectionJobsResponse2) {
  ListDominantLanguageDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListDominantLanguageDetectionJobsResponse || (ListDominantLanguageDetectionJobsResponse = {}));
var EndpointFilter;
(function(EndpointFilter2) {
  EndpointFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EndpointFilter || (EndpointFilter = {}));
var ListEndpointsRequest;
(function(ListEndpointsRequest2) {
  ListEndpointsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEndpointsRequest || (ListEndpointsRequest = {}));
var ListEndpointsResponse;
(function(ListEndpointsResponse2) {
  ListEndpointsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEndpointsResponse || (ListEndpointsResponse = {}));
var EntitiesDetectionJobFilter;
(function(EntitiesDetectionJobFilter2) {
  EntitiesDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntitiesDetectionJobFilter || (EntitiesDetectionJobFilter = {}));
var ListEntitiesDetectionJobsRequest;
(function(ListEntitiesDetectionJobsRequest2) {
  ListEntitiesDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEntitiesDetectionJobsRequest || (ListEntitiesDetectionJobsRequest = {}));
var ListEntitiesDetectionJobsResponse;
(function(ListEntitiesDetectionJobsResponse2) {
  ListEntitiesDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEntitiesDetectionJobsResponse || (ListEntitiesDetectionJobsResponse = {}));
var EntityRecognizerFilter;
(function(EntityRecognizerFilter2) {
  EntityRecognizerFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EntityRecognizerFilter || (EntityRecognizerFilter = {}));
var ListEntityRecognizersRequest;
(function(ListEntityRecognizersRequest2) {
  ListEntityRecognizersRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEntityRecognizersRequest || (ListEntityRecognizersRequest = {}));
var ListEntityRecognizersResponse;
(function(ListEntityRecognizersResponse2) {
  ListEntityRecognizersResponse2.filterSensitiveLog = function(obj) {
    return __assign6(__assign6({}, obj), obj.EntityRecognizerPropertiesList && {
      EntityRecognizerPropertiesList: obj.EntityRecognizerPropertiesList.map(function(item) {
        return EntityRecognizerProperties.filterSensitiveLog(item);
      })
    });
  };
})(ListEntityRecognizersResponse || (ListEntityRecognizersResponse = {}));
var EventsDetectionJobFilter;
(function(EventsDetectionJobFilter2) {
  EventsDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(EventsDetectionJobFilter || (EventsDetectionJobFilter = {}));
var ListEventsDetectionJobsRequest;
(function(ListEventsDetectionJobsRequest2) {
  ListEventsDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEventsDetectionJobsRequest || (ListEventsDetectionJobsRequest = {}));
var ListEventsDetectionJobsResponse;
(function(ListEventsDetectionJobsResponse2) {
  ListEventsDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListEventsDetectionJobsResponse || (ListEventsDetectionJobsResponse = {}));
var KeyPhrasesDetectionJobFilter;
(function(KeyPhrasesDetectionJobFilter2) {
  KeyPhrasesDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(KeyPhrasesDetectionJobFilter || (KeyPhrasesDetectionJobFilter = {}));
var ListKeyPhrasesDetectionJobsRequest;
(function(ListKeyPhrasesDetectionJobsRequest2) {
  ListKeyPhrasesDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListKeyPhrasesDetectionJobsRequest || (ListKeyPhrasesDetectionJobsRequest = {}));
var ListKeyPhrasesDetectionJobsResponse;
(function(ListKeyPhrasesDetectionJobsResponse2) {
  ListKeyPhrasesDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListKeyPhrasesDetectionJobsResponse || (ListKeyPhrasesDetectionJobsResponse = {}));
var PiiEntitiesDetectionJobFilter;
(function(PiiEntitiesDetectionJobFilter2) {
  PiiEntitiesDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(PiiEntitiesDetectionJobFilter || (PiiEntitiesDetectionJobFilter = {}));
var ListPiiEntitiesDetectionJobsRequest;
(function(ListPiiEntitiesDetectionJobsRequest2) {
  ListPiiEntitiesDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListPiiEntitiesDetectionJobsRequest || (ListPiiEntitiesDetectionJobsRequest = {}));
var ListPiiEntitiesDetectionJobsResponse;
(function(ListPiiEntitiesDetectionJobsResponse2) {
  ListPiiEntitiesDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListPiiEntitiesDetectionJobsResponse || (ListPiiEntitiesDetectionJobsResponse = {}));
var SentimentDetectionJobFilter;
(function(SentimentDetectionJobFilter2) {
  SentimentDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(SentimentDetectionJobFilter || (SentimentDetectionJobFilter = {}));
var ListSentimentDetectionJobsRequest;
(function(ListSentimentDetectionJobsRequest2) {
  ListSentimentDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListSentimentDetectionJobsRequest || (ListSentimentDetectionJobsRequest = {}));
var ListSentimentDetectionJobsResponse;
(function(ListSentimentDetectionJobsResponse2) {
  ListSentimentDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListSentimentDetectionJobsResponse || (ListSentimentDetectionJobsResponse = {}));
var ListTagsForResourceRequest;
(function(ListTagsForResourceRequest2) {
  ListTagsForResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function(ListTagsForResourceResponse2) {
  ListTagsForResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
var TopicsDetectionJobFilter;
(function(TopicsDetectionJobFilter2) {
  TopicsDetectionJobFilter2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TopicsDetectionJobFilter || (TopicsDetectionJobFilter = {}));
var ListTopicsDetectionJobsRequest;
(function(ListTopicsDetectionJobsRequest2) {
  ListTopicsDetectionJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListTopicsDetectionJobsRequest || (ListTopicsDetectionJobsRequest = {}));
var ListTopicsDetectionJobsResponse;
(function(ListTopicsDetectionJobsResponse2) {
  ListTopicsDetectionJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ListTopicsDetectionJobsResponse || (ListTopicsDetectionJobsResponse = {}));
var StartDocumentClassificationJobRequest;
(function(StartDocumentClassificationJobRequest2) {
  StartDocumentClassificationJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartDocumentClassificationJobRequest || (StartDocumentClassificationJobRequest = {}));
var StartDocumentClassificationJobResponse;
(function(StartDocumentClassificationJobResponse2) {
  StartDocumentClassificationJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartDocumentClassificationJobResponse || (StartDocumentClassificationJobResponse = {}));
var StartDominantLanguageDetectionJobRequest;
(function(StartDominantLanguageDetectionJobRequest2) {
  StartDominantLanguageDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartDominantLanguageDetectionJobRequest || (StartDominantLanguageDetectionJobRequest = {}));
var StartDominantLanguageDetectionJobResponse;
(function(StartDominantLanguageDetectionJobResponse2) {
  StartDominantLanguageDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartDominantLanguageDetectionJobResponse || (StartDominantLanguageDetectionJobResponse = {}));
var StartEntitiesDetectionJobRequest;
(function(StartEntitiesDetectionJobRequest2) {
  StartEntitiesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartEntitiesDetectionJobRequest || (StartEntitiesDetectionJobRequest = {}));
var StartEntitiesDetectionJobResponse;
(function(StartEntitiesDetectionJobResponse2) {
  StartEntitiesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartEntitiesDetectionJobResponse || (StartEntitiesDetectionJobResponse = {}));
var StartEventsDetectionJobRequest;
(function(StartEventsDetectionJobRequest2) {
  StartEventsDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartEventsDetectionJobRequest || (StartEventsDetectionJobRequest = {}));
var StartEventsDetectionJobResponse;
(function(StartEventsDetectionJobResponse2) {
  StartEventsDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartEventsDetectionJobResponse || (StartEventsDetectionJobResponse = {}));
var StartKeyPhrasesDetectionJobRequest;
(function(StartKeyPhrasesDetectionJobRequest2) {
  StartKeyPhrasesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartKeyPhrasesDetectionJobRequest || (StartKeyPhrasesDetectionJobRequest = {}));
var StartKeyPhrasesDetectionJobResponse;
(function(StartKeyPhrasesDetectionJobResponse2) {
  StartKeyPhrasesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartKeyPhrasesDetectionJobResponse || (StartKeyPhrasesDetectionJobResponse = {}));
var StartPiiEntitiesDetectionJobRequest;
(function(StartPiiEntitiesDetectionJobRequest2) {
  StartPiiEntitiesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartPiiEntitiesDetectionJobRequest || (StartPiiEntitiesDetectionJobRequest = {}));
var StartPiiEntitiesDetectionJobResponse;
(function(StartPiiEntitiesDetectionJobResponse2) {
  StartPiiEntitiesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartPiiEntitiesDetectionJobResponse || (StartPiiEntitiesDetectionJobResponse = {}));
var StartSentimentDetectionJobRequest;
(function(StartSentimentDetectionJobRequest2) {
  StartSentimentDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartSentimentDetectionJobRequest || (StartSentimentDetectionJobRequest = {}));
var StartSentimentDetectionJobResponse;
(function(StartSentimentDetectionJobResponse2) {
  StartSentimentDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartSentimentDetectionJobResponse || (StartSentimentDetectionJobResponse = {}));
var StartTopicsDetectionJobRequest;
(function(StartTopicsDetectionJobRequest2) {
  StartTopicsDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartTopicsDetectionJobRequest || (StartTopicsDetectionJobRequest = {}));
var StartTopicsDetectionJobResponse;
(function(StartTopicsDetectionJobResponse2) {
  StartTopicsDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StartTopicsDetectionJobResponse || (StartTopicsDetectionJobResponse = {}));
var StopDominantLanguageDetectionJobRequest;
(function(StopDominantLanguageDetectionJobRequest2) {
  StopDominantLanguageDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopDominantLanguageDetectionJobRequest || (StopDominantLanguageDetectionJobRequest = {}));
var StopDominantLanguageDetectionJobResponse;
(function(StopDominantLanguageDetectionJobResponse2) {
  StopDominantLanguageDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopDominantLanguageDetectionJobResponse || (StopDominantLanguageDetectionJobResponse = {}));
var StopEntitiesDetectionJobRequest;
(function(StopEntitiesDetectionJobRequest2) {
  StopEntitiesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopEntitiesDetectionJobRequest || (StopEntitiesDetectionJobRequest = {}));
var StopEntitiesDetectionJobResponse;
(function(StopEntitiesDetectionJobResponse2) {
  StopEntitiesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopEntitiesDetectionJobResponse || (StopEntitiesDetectionJobResponse = {}));
var StopEventsDetectionJobRequest;
(function(StopEventsDetectionJobRequest2) {
  StopEventsDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopEventsDetectionJobRequest || (StopEventsDetectionJobRequest = {}));
var StopEventsDetectionJobResponse;
(function(StopEventsDetectionJobResponse2) {
  StopEventsDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopEventsDetectionJobResponse || (StopEventsDetectionJobResponse = {}));
var StopKeyPhrasesDetectionJobRequest;
(function(StopKeyPhrasesDetectionJobRequest2) {
  StopKeyPhrasesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopKeyPhrasesDetectionJobRequest || (StopKeyPhrasesDetectionJobRequest = {}));
var StopKeyPhrasesDetectionJobResponse;
(function(StopKeyPhrasesDetectionJobResponse2) {
  StopKeyPhrasesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopKeyPhrasesDetectionJobResponse || (StopKeyPhrasesDetectionJobResponse = {}));
var StopPiiEntitiesDetectionJobRequest;
(function(StopPiiEntitiesDetectionJobRequest2) {
  StopPiiEntitiesDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopPiiEntitiesDetectionJobRequest || (StopPiiEntitiesDetectionJobRequest = {}));
var StopPiiEntitiesDetectionJobResponse;
(function(StopPiiEntitiesDetectionJobResponse2) {
  StopPiiEntitiesDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopPiiEntitiesDetectionJobResponse || (StopPiiEntitiesDetectionJobResponse = {}));
var StopSentimentDetectionJobRequest;
(function(StopSentimentDetectionJobRequest2) {
  StopSentimentDetectionJobRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopSentimentDetectionJobRequest || (StopSentimentDetectionJobRequest = {}));
var StopSentimentDetectionJobResponse;
(function(StopSentimentDetectionJobResponse2) {
  StopSentimentDetectionJobResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopSentimentDetectionJobResponse || (StopSentimentDetectionJobResponse = {}));
var StopTrainingDocumentClassifierRequest;
(function(StopTrainingDocumentClassifierRequest2) {
  StopTrainingDocumentClassifierRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopTrainingDocumentClassifierRequest || (StopTrainingDocumentClassifierRequest = {}));
var StopTrainingDocumentClassifierResponse;
(function(StopTrainingDocumentClassifierResponse2) {
  StopTrainingDocumentClassifierResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopTrainingDocumentClassifierResponse || (StopTrainingDocumentClassifierResponse = {}));
var StopTrainingEntityRecognizerRequest;
(function(StopTrainingEntityRecognizerRequest2) {
  StopTrainingEntityRecognizerRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopTrainingEntityRecognizerRequest || (StopTrainingEntityRecognizerRequest = {}));
var StopTrainingEntityRecognizerResponse;
(function(StopTrainingEntityRecognizerResponse2) {
  StopTrainingEntityRecognizerResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(StopTrainingEntityRecognizerResponse || (StopTrainingEntityRecognizerResponse = {}));
var ConcurrentModificationException2;
(function(ConcurrentModificationException3) {
  ConcurrentModificationException3.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(ConcurrentModificationException2 || (ConcurrentModificationException2 = {}));
var TagResourceRequest;
(function(TagResourceRequest2) {
  TagResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
var TagResourceResponse;
(function(TagResourceResponse2) {
  TagResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
var TooManyTagKeysException;
(function(TooManyTagKeysException2) {
  TooManyTagKeysException2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(TooManyTagKeysException || (TooManyTagKeysException = {}));
var UntagResourceRequest;
(function(UntagResourceRequest2) {
  UntagResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
var UntagResourceResponse;
(function(UntagResourceResponse2) {
  UntagResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
var UpdateEndpointRequest;
(function(UpdateEndpointRequest2) {
  UpdateEndpointRequest2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(UpdateEndpointRequest || (UpdateEndpointRequest = {}));
var UpdateEndpointResponse;
(function(UpdateEndpointResponse2) {
  UpdateEndpointResponse2.filterSensitiveLog = function(obj) {
    return __assign6({}, obj);
  };
})(UpdateEndpointResponse || (UpdateEndpointResponse = {}));

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/protocols/Aws_json1_1.js
var import_uuid3 = __toModule(require_uuid());
var serializeAws_json1_1DetectDominantLanguageCommand = function(input, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator6(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Comprehend_20171127.DetectDominantLanguage"
      };
      body = JSON.stringify(serializeAws_json1_1DetectDominantLanguageRequest(input, context));
      return [2, buildHttpRpcRequest4(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectEntitiesCommand = function(input, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator6(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Comprehend_20171127.DetectEntities"
      };
      body = JSON.stringify(serializeAws_json1_1DetectEntitiesRequest(input, context));
      return [2, buildHttpRpcRequest4(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectKeyPhrasesCommand = function(input, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator6(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Comprehend_20171127.DetectKeyPhrases"
      };
      body = JSON.stringify(serializeAws_json1_1DetectKeyPhrasesRequest(input, context));
      return [2, buildHttpRpcRequest4(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectSentimentCommand = function(input, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator6(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Comprehend_20171127.DetectSentiment"
      };
      body = JSON.stringify(serializeAws_json1_1DetectSentimentRequest(input, context));
      return [2, buildHttpRpcRequest4(context, headers, "/", void 0, body)];
    });
  });
};
var serializeAws_json1_1DetectSyntaxCommand = function(input, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator6(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Comprehend_20171127.DetectSyntax"
      };
      body = JSON.stringify(serializeAws_json1_1DetectSyntaxRequest(input, context));
      return [2, buildHttpRpcRequest4(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1DetectDominantLanguageCommand = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator6(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectDominantLanguageCommandError(output, context)];
          }
          return [4, parseBody5(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectDominantLanguageResponse(data, context);
          response = __assign6({ $metadata: deserializeMetadata5(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectDominantLanguageCommandError = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator6(this, function(_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign6({}, output)];
          _f = {};
          return [4, parseBody5(output.body, context)];
        case 1:
          parsedOutput = __assign6.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode5(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3, 2];
            case "com.amazonaws.comprehend#InternalServerException":
              return [3, 2];
            case "InvalidRequestException":
              return [3, 4];
            case "com.amazonaws.comprehend#InvalidRequestException":
              return [3, 4];
            case "TextSizeLimitExceededException":
              return [3, 6];
            case "com.amazonaws.comprehend#TextSizeLimitExceededException":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InternalServerExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _c.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 9];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidRequestExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _d.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 9];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1TextSizeLimitExceededExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _e.concat([_g.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign6(__assign6({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata5(output) });
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
var deserializeAws_json1_1DetectEntitiesCommand = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator6(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectEntitiesCommandError(output, context)];
          }
          return [4, parseBody5(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
          response = __assign6({ $metadata: deserializeMetadata5(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectEntitiesCommandError = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator6(this, function(_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign6({}, output)];
          _h = {};
          return [4, parseBody5(output.body, context)];
        case 1:
          parsedOutput = __assign6.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode5(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3, 2];
            case "com.amazonaws.comprehend#InternalServerException":
              return [3, 2];
            case "InvalidRequestException":
              return [3, 4];
            case "com.amazonaws.comprehend#InvalidRequestException":
              return [3, 4];
            case "ResourceUnavailableException":
              return [3, 6];
            case "com.amazonaws.comprehend#ResourceUnavailableException":
              return [3, 6];
            case "TextSizeLimitExceededException":
              return [3, 8];
            case "com.amazonaws.comprehend#TextSizeLimitExceededException":
              return [3, 8];
            case "UnsupportedLanguageException":
              return [3, 10];
            case "com.amazonaws.comprehend#UnsupportedLanguageException":
              return [3, 10];
          }
          return [3, 12];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InternalServerExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _c.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 13];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidRequestExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _d.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 13];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _e.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 13];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1TextSizeLimitExceededExceptionResponse2(parsedOutput, context)];
        case 9:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _f.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 13];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _g.concat([_j.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign6(__assign6({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata5(output) });
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
var deserializeAws_json1_1DetectKeyPhrasesCommand = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator6(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectKeyPhrasesCommandError(output, context)];
          }
          return [4, parseBody5(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectKeyPhrasesResponse(data, context);
          response = __assign6({ $metadata: deserializeMetadata5(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectKeyPhrasesCommandError = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator6(this, function(_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign6({}, output)];
          _g = {};
          return [4, parseBody5(output.body, context)];
        case 1:
          parsedOutput = __assign6.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode5(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3, 2];
            case "com.amazonaws.comprehend#InternalServerException":
              return [3, 2];
            case "InvalidRequestException":
              return [3, 4];
            case "com.amazonaws.comprehend#InvalidRequestException":
              return [3, 4];
            case "TextSizeLimitExceededException":
              return [3, 6];
            case "com.amazonaws.comprehend#TextSizeLimitExceededException":
              return [3, 6];
            case "UnsupportedLanguageException":
              return [3, 8];
            case "com.amazonaws.comprehend#UnsupportedLanguageException":
              return [3, 8];
          }
          return [3, 10];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InternalServerExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _c.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidRequestExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _d.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1TextSizeLimitExceededExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _e.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _f.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign6(__assign6({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata5(output) });
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
var deserializeAws_json1_1DetectSentimentCommand = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator6(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectSentimentCommandError(output, context)];
          }
          return [4, parseBody5(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectSentimentResponse(data, context);
          response = __assign6({ $metadata: deserializeMetadata5(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectSentimentCommandError = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator6(this, function(_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign6({}, output)];
          _g = {};
          return [4, parseBody5(output.body, context)];
        case 1:
          parsedOutput = __assign6.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode5(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3, 2];
            case "com.amazonaws.comprehend#InternalServerException":
              return [3, 2];
            case "InvalidRequestException":
              return [3, 4];
            case "com.amazonaws.comprehend#InvalidRequestException":
              return [3, 4];
            case "TextSizeLimitExceededException":
              return [3, 6];
            case "com.amazonaws.comprehend#TextSizeLimitExceededException":
              return [3, 6];
            case "UnsupportedLanguageException":
              return [3, 8];
            case "com.amazonaws.comprehend#UnsupportedLanguageException":
              return [3, 8];
          }
          return [3, 10];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InternalServerExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _c.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidRequestExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _d.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1TextSizeLimitExceededExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _e.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _f.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign6(__assign6({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata5(output) });
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
var deserializeAws_json1_1DetectSyntaxCommand = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator6(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1DetectSyntaxCommandError(output, context)];
          }
          return [4, parseBody5(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DetectSyntaxResponse(data, context);
          response = __assign6({ $metadata: deserializeMetadata5(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DetectSyntaxCommandError = function(output, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator6(this, function(_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign6({}, output)];
          _g = {};
          return [4, parseBody5(output.body, context)];
        case 1:
          parsedOutput = __assign6.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode5(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3, 2];
            case "com.amazonaws.comprehend#InternalServerException":
              return [3, 2];
            case "InvalidRequestException":
              return [3, 4];
            case "com.amazonaws.comprehend#InvalidRequestException":
              return [3, 4];
            case "TextSizeLimitExceededException":
              return [3, 6];
            case "com.amazonaws.comprehend#TextSizeLimitExceededException":
              return [3, 6];
            case "UnsupportedLanguageException":
              return [3, 8];
            case "com.amazonaws.comprehend#UnsupportedLanguageException":
              return [3, 8];
          }
          return [3, 10];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InternalServerExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _c.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidRequestExceptionResponse2(parsedOutput, context)];
        case 5:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _d.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1TextSizeLimitExceededExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _e.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign6.apply(void 0, [__assign6.apply(void 0, _f.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata5(output) }]);
          return [3, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign6(__assign6({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata5(output) });
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
var deserializeAws_json1_1InternalServerExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator6(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalServerException2(body, context);
      contents = __assign6({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata5(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidRequestExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator6(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidRequestException2(body, context);
      contents = __assign6({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata5(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceUnavailableExceptionResponse = function(parsedOutput, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator6(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
      contents = __assign6({ name: "ResourceUnavailableException", $fault: "client", $metadata: deserializeMetadata5(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1TextSizeLimitExceededExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator6(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TextSizeLimitExceededException2(body, context);
      contents = __assign6({ name: "TextSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata5(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1UnsupportedLanguageExceptionResponse = function(parsedOutput, context) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator6(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1UnsupportedLanguageException(body, context);
      contents = __assign6({ name: "UnsupportedLanguageException", $fault: "client", $metadata: deserializeMetadata5(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1DetectDominantLanguageRequest = function(input, context) {
  return __assign6({}, input.Text !== void 0 && input.Text !== null && { Text: input.Text });
};
var serializeAws_json1_1DetectEntitiesRequest = function(input, context) {
  return __assign6(__assign6(__assign6({}, input.EndpointArn !== void 0 && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }), input.LanguageCode !== void 0 && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }), input.Text !== void 0 && input.Text !== null && { Text: input.Text });
};
var serializeAws_json1_1DetectKeyPhrasesRequest = function(input, context) {
  return __assign6(__assign6({}, input.LanguageCode !== void 0 && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }), input.Text !== void 0 && input.Text !== null && { Text: input.Text });
};
var serializeAws_json1_1DetectSentimentRequest = function(input, context) {
  return __assign6(__assign6({}, input.LanguageCode !== void 0 && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }), input.Text !== void 0 && input.Text !== null && { Text: input.Text });
};
var serializeAws_json1_1DetectSyntaxRequest = function(input, context) {
  return __assign6(__assign6({}, input.LanguageCode !== void 0 && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }), input.Text !== void 0 && input.Text !== null && { Text: input.Text });
};
var deserializeAws_json1_1DetectDominantLanguageResponse = function(output, context) {
  return {
    Languages: output.Languages !== void 0 && output.Languages !== null ? deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context) : void 0
  };
};
var deserializeAws_json1_1DetectEntitiesResponse = function(output, context) {
  return {
    Entities: output.Entities !== void 0 && output.Entities !== null ? deserializeAws_json1_1ListOfEntities(output.Entities, context) : void 0
  };
};
var deserializeAws_json1_1DetectKeyPhrasesResponse = function(output, context) {
  return {
    KeyPhrases: output.KeyPhrases !== void 0 && output.KeyPhrases !== null ? deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context) : void 0
  };
};
var deserializeAws_json1_1DetectSentimentResponse = function(output, context) {
  return {
    Sentiment: output.Sentiment !== void 0 && output.Sentiment !== null ? output.Sentiment : void 0,
    SentimentScore: output.SentimentScore !== void 0 && output.SentimentScore !== null ? deserializeAws_json1_1SentimentScore(output.SentimentScore, context) : void 0
  };
};
var deserializeAws_json1_1DetectSyntaxResponse = function(output, context) {
  return {
    SyntaxTokens: output.SyntaxTokens !== void 0 && output.SyntaxTokens !== null ? deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context) : void 0
  };
};
var deserializeAws_json1_1DominantLanguage = function(output, context) {
  return {
    LanguageCode: output.LanguageCode !== void 0 && output.LanguageCode !== null ? output.LanguageCode : void 0,
    Score: output.Score !== void 0 && output.Score !== null ? output.Score : void 0
  };
};
var deserializeAws_json1_1Entity = function(output, context) {
  return {
    BeginOffset: output.BeginOffset !== void 0 && output.BeginOffset !== null ? output.BeginOffset : void 0,
    EndOffset: output.EndOffset !== void 0 && output.EndOffset !== null ? output.EndOffset : void 0,
    Score: output.Score !== void 0 && output.Score !== null ? output.Score : void 0,
    Text: output.Text !== void 0 && output.Text !== null ? output.Text : void 0,
    Type: output.Type !== void 0 && output.Type !== null ? output.Type : void 0
  };
};
var deserializeAws_json1_1InternalServerException2 = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1InvalidRequestException2 = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1KeyPhrase = function(output, context) {
  return {
    BeginOffset: output.BeginOffset !== void 0 && output.BeginOffset !== null ? output.BeginOffset : void 0,
    EndOffset: output.EndOffset !== void 0 && output.EndOffset !== null ? output.EndOffset : void 0,
    Score: output.Score !== void 0 && output.Score !== null ? output.Score : void 0,
    Text: output.Text !== void 0 && output.Text !== null ? output.Text : void 0
  };
};
var deserializeAws_json1_1ListOfDominantLanguages = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1DominantLanguage(entry, context);
  });
};
var deserializeAws_json1_1ListOfEntities = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1Entity(entry, context);
  });
};
var deserializeAws_json1_1ListOfKeyPhrases = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1KeyPhrase(entry, context);
  });
};
var deserializeAws_json1_1ListOfSyntaxTokens = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1SyntaxToken(entry, context);
  });
};
var deserializeAws_json1_1PartOfSpeechTag = function(output, context) {
  return {
    Score: output.Score !== void 0 && output.Score !== null ? output.Score : void 0,
    Tag: output.Tag !== void 0 && output.Tag !== null ? output.Tag : void 0
  };
};
var deserializeAws_json1_1ResourceUnavailableException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1SentimentScore = function(output, context) {
  return {
    Mixed: output.Mixed !== void 0 && output.Mixed !== null ? output.Mixed : void 0,
    Negative: output.Negative !== void 0 && output.Negative !== null ? output.Negative : void 0,
    Neutral: output.Neutral !== void 0 && output.Neutral !== null ? output.Neutral : void 0,
    Positive: output.Positive !== void 0 && output.Positive !== null ? output.Positive : void 0
  };
};
var deserializeAws_json1_1SyntaxToken = function(output, context) {
  return {
    BeginOffset: output.BeginOffset !== void 0 && output.BeginOffset !== null ? output.BeginOffset : void 0,
    EndOffset: output.EndOffset !== void 0 && output.EndOffset !== null ? output.EndOffset : void 0,
    PartOfSpeech: output.PartOfSpeech !== void 0 && output.PartOfSpeech !== null ? deserializeAws_json1_1PartOfSpeechTag(output.PartOfSpeech, context) : void 0,
    Text: output.Text !== void 0 && output.Text !== null ? output.Text : void 0,
    TokenId: output.TokenId !== void 0 && output.TokenId !== null ? output.TokenId : void 0
  };
};
var deserializeAws_json1_1TextSizeLimitExceededException2 = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeAws_json1_1UnsupportedLanguageException = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
  };
};
var deserializeMetadata5 = function(output) {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  };
};
var collectBody5 = function(streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString5 = function(streamBody, context) {
  return collectBody5(streamBody, context).then(function(body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest4 = function(context, headers, path, resolvedHostname, body) {
  return __awaiter6(void 0, void 0, void 0, function() {
    var _a, hostname, _b, protocol, port, contents;
    return __generator6(this, function(_c) {
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
var parseBody5 = function(streamBody, context) {
  return collectBodyString5(streamBody, context).then(function(encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
var loadRestJsonErrorCode5 = function(output, data) {
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

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/commands/DetectDominantLanguageCommand.js
var DetectDominantLanguageCommand = function(_super) {
  __extends6(DetectDominantLanguageCommand2, _super);
  function DetectDominantLanguageCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectDominantLanguageCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "ComprehendClient";
    var commandName = "DetectDominantLanguageCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectDominantLanguageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectDominantLanguageResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectDominantLanguageCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectDominantLanguageCommand(input, context);
  };
  DetectDominantLanguageCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectDominantLanguageCommand(output, context);
  };
  return DetectDominantLanguageCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/commands/DetectEntitiesCommand.js
var DetectEntitiesCommand = function(_super) {
  __extends6(DetectEntitiesCommand2, _super);
  function DetectEntitiesCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectEntitiesCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "ComprehendClient";
    var commandName = "DetectEntitiesCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectEntitiesResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectEntitiesCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectEntitiesCommand(input, context);
  };
  DetectEntitiesCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectEntitiesCommand(output, context);
  };
  return DetectEntitiesCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/commands/DetectKeyPhrasesCommand.js
var DetectKeyPhrasesCommand = function(_super) {
  __extends6(DetectKeyPhrasesCommand2, _super);
  function DetectKeyPhrasesCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectKeyPhrasesCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "ComprehendClient";
    var commandName = "DetectKeyPhrasesCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectKeyPhrasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectKeyPhrasesResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectKeyPhrasesCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectKeyPhrasesCommand(input, context);
  };
  DetectKeyPhrasesCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectKeyPhrasesCommand(output, context);
  };
  return DetectKeyPhrasesCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/commands/DetectSentimentCommand.js
var DetectSentimentCommand = function(_super) {
  __extends6(DetectSentimentCommand2, _super);
  function DetectSentimentCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectSentimentCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "ComprehendClient";
    var commandName = "DetectSentimentCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectSentimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectSentimentResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectSentimentCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectSentimentCommand(input, context);
  };
  DetectSentimentCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectSentimentCommand(output, context);
  };
  return DetectSentimentCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-comprehend/dist/es/commands/DetectSyntaxCommand.js
var DetectSyntaxCommand = function(_super) {
  __extends6(DetectSyntaxCommand2, _super);
  function DetectSyntaxCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DetectSyntaxCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger6 = configuration.logger;
    var clientName = "ComprehendClient";
    var commandName = "DetectSyntaxCommand";
    var handlerExecutionContext = {
      logger: logger6,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectSyntaxRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectSyntaxResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectSyntaxCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1DetectSyntaxCommand(input, context);
  };
  DetectSyntaxCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1DetectSyntaxCommand(output, context);
  };
  return DetectSyntaxCommand2;
}(Command);

// src/Providers/AmazonAIInterpretPredictionsProvider.ts
var AmazonAIInterpretPredictionsProvider = class extends AbstractInterpretPredictionsProvider {
  constructor() {
    super();
  }
  getProviderName() {
    return "AmazonAIInterpretPredictionsProvider";
  }
  interpretText(input) {
    return new Promise(async (res, rej) => {
      const credentials = await Credentials3.get();
      if (!credentials)
        return rej("No credentials");
      const {
        interpretText: {
          region = "",
          defaults: { type: interpretTypeConfig = "" } = {}
        } = {}
      } = this._config;
      const {
        text: {
          source: { text = "" } = {},
          type: interpretType = interpretTypeConfig
        } = {}
      } = {} = input;
      const {
        text: { source: { language = void 0 } = {} } = {}
      } = {} = input;
      const comprehendClient = new ComprehendClient({
        credentials,
        region,
        customUserAgent: getAmplifyUserAgent3()
      });
      const doAll = interpretType === InterpretTextCategories.ALL;
      let languagePromise;
      if (doAll || interpretType === InterpretTextCategories.LANGUAGE) {
        const languageDetectionParams = {
          Text: text
        };
        languagePromise = this.detectLanguage(languageDetectionParams, comprehendClient);
      }
      let entitiesPromise;
      if (doAll || interpretType === InterpretTextCategories.ENTITIES) {
        const LanguageCode2 = language || await languagePromise;
        if (!LanguageCode2) {
          return rej("language code is required on source for this selection");
        }
        const entitiesDetectionParams = {
          Text: text,
          LanguageCode: LanguageCode2
        };
        entitiesPromise = this.detectEntities(entitiesDetectionParams, comprehendClient);
      }
      let sentimentPromise;
      if (doAll || interpretType === InterpretTextCategories.SENTIMENT) {
        const LanguageCode2 = language || await languagePromise;
        if (!LanguageCode2) {
          return rej("language code is required on source for this selection");
        }
        const sentimentParams = {
          Text: text,
          LanguageCode: LanguageCode2
        };
        sentimentPromise = this.detectSentiment(sentimentParams, comprehendClient);
      }
      let syntaxPromise;
      if (doAll || interpretType === InterpretTextCategories.SYNTAX) {
        const LanguageCode2 = language || await languagePromise;
        if (!LanguageCode2) {
          return rej("language code is required on source for this selection");
        }
        const syntaxParams = {
          Text: text,
          LanguageCode: LanguageCode2
        };
        syntaxPromise = this.detectSyntax(syntaxParams, comprehendClient);
      }
      let keyPhrasesPromise;
      if (doAll || interpretType === InterpretTextCategories.KEY_PHRASES) {
        const LanguageCode2 = language || await languagePromise;
        if (!LanguageCode2) {
          return rej("language code is required on source for this selection");
        }
        const keyPhrasesParams = {
          Text: text,
          LanguageCode: LanguageCode2
        };
        keyPhrasesPromise = this.detectKeyPhrases(keyPhrasesParams, comprehendClient);
      }
      try {
        const results = await Promise.all([
          languagePromise,
          entitiesPromise,
          sentimentPromise,
          syntaxPromise,
          keyPhrasesPromise
        ]);
        res({
          textInterpretation: {
            keyPhrases: results[4] || [],
            language: results[0] || "",
            sentiment: results[2],
            syntax: results[3] || [],
            textEntities: results[1] || []
          }
        });
      } catch (err) {
        rej(err);
      }
    });
  }
  async detectKeyPhrases(params, comprehend) {
    try {
      const detectKeyPhrasesCommand = new DetectKeyPhrasesCommand(params);
      const data = await comprehend.send(detectKeyPhrasesCommand);
      const { KeyPhrases: KeyPhrases2 = [] } = data || {};
      return KeyPhrases2.map(({ Text: text }) => {
        return { text };
      });
    } catch (err) {
      if (err.code === "AccessDeniedException") {
        Promise.reject("Not authorized, did you enable Interpret Text on predictions category Amplify CLI? try: amplify predictions add");
      } else {
        Promise.reject(err.message);
      }
    }
  }
  async detectSyntax(params, comprehend) {
    try {
      const detectSyntaxCommand = new DetectSyntaxCommand(params);
      const data = await comprehend.send(detectSyntaxCommand);
      const { SyntaxTokens = [] } = data || {};
      return this.serializeSyntaxFromComprehend(SyntaxTokens);
    } catch (err) {
      if (err.code === "AccessDeniedException") {
        Promise.reject("Not authorized, did you enable Interpret Text on predictions category Amplify CLI? try: amplify predictions add");
      } else {
        Promise.reject(err.message);
      }
    }
  }
  serializeSyntaxFromComprehend(tokens) {
    let response = [];
    if (tokens && Array.isArray(tokens)) {
      response = tokens.map(({ Text: text = "", PartOfSpeech: { Tag: syntax = "" } = {} }) => {
        return { text, syntax };
      });
    }
    return response;
  }
  async detectSentiment(params, comprehend) {
    try {
      const detectSentimentCommand = new DetectSentimentCommand(params);
      const data = await comprehend.send(detectSentimentCommand);
      const {
        Sentiment: predominant = "",
        SentimentScore: {
          Positive: positive = 0,
          Negative: negative = 0,
          Neutral: neutral = 0,
          Mixed: mixed = 0
        } = {}
      } = {} = data;
      return { predominant, positive, negative, neutral, mixed };
    } catch (err) {
      if (err.code === "AccessDeniedException") {
        Promise.reject("Not authorized, did you enable Interpret Text on predictions category Amplify CLI? try: amplify predictions add");
      } else {
        Promise.reject(err.message);
      }
    }
  }
  async detectEntities(params, comprehend) {
    try {
      const detectEntitiesCommand = new DetectEntitiesCommand(params);
      const data = await comprehend.send(detectEntitiesCommand);
      const { Entities = [] } = data || {};
      return this.serializeEntitiesFromComprehend(Entities);
    } catch (err) {
      if (err.code === "AccessDeniedException") {
        Promise.reject("Not authorized, did you enable Interpret Text on predictions category Amplify CLI? try: amplify predictions add");
      } else {
        Promise.reject(err.message);
      }
    }
  }
  serializeEntitiesFromComprehend(data) {
    let response = [];
    if (data && Array.isArray(data)) {
      response = data.map(({ Type: type, Text: text }) => {
        return { type, text };
      });
    }
    return response;
  }
  async detectLanguage(params, comprehend) {
    try {
      const detectDominantLanguageCommand = new DetectDominantLanguageCommand(params);
      const data = await comprehend.send(detectDominantLanguageCommand);
      const { Languages: [{ LanguageCode: LanguageCode2 }] = [""] } = {} = data || {};
      if (!LanguageCode2) {
        Promise.reject("Language not detected");
      }
      return data.Languages[0].LanguageCode;
    } catch (err) {
      if (err.code === "AccessDeniedException") {
        Promise.reject("Not authorized, did you enable Interpret Text on predictions category Amplify CLI? try: amplify predictions add");
      } else {
        Promise.reject(err.message);
      }
    }
  }
};

// src/Providers/AmazonAIPredictionsProvider.ts
var AmazonAIPredictionsProvider = class extends AbstractPredictionsProvider {
  constructor() {
    super();
    this.convertProvider = new AmazonAIConvertPredictionsProvider();
    this.identifyProvider = new AmazonAIIdentifyPredictionsProvider();
    this.interpretProvider = new AmazonAIInterpretPredictionsProvider();
  }
  getCategory() {
    return "Predictions";
  }
  getProviderName() {
    return "AmazonAIPredictionsProvider";
  }
  configure(config) {
    this.convertProvider.configure(config.convert);
    this.identifyProvider.configure(config.identify);
    this.interpretProvider.configure(config.interpret);
    return config;
  }
  interpret(input) {
    return this.interpretProvider.interpret(input);
  }
  convert(input) {
    return this.convertProvider.convert(input);
  }
  identify(input) {
    return this.identifyProvider.identify(input);
  }
};

// src/index.ts
var src_default = Predictions;
export {
  AmazonAIConvertPredictionsProvider,
  AmazonAIIdentifyPredictionsProvider,
  AmazonAIInterpretPredictionsProvider,
  AmazonAIPredictionsProvider,
  InterpretTextCategories,
  Predictions,
  src_default as default,
  isBytesSource,
  isFileSource,
  isIdentifyCelebrities,
  isIdentifyEntitiesInput,
  isIdentifyFromCollection,
  isIdentifyLabelsInput,
  isIdentifyTextInput,
  isInterpretTextInput,
  isSpeechToTextInput,
  isStorageSource,
  isTextToSpeechInput,
  isTranslateTextInput
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
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
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
