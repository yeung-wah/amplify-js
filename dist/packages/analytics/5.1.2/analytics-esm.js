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
var __reExport = (target, module5, desc) => {
  if (module5 && typeof module5 === "object" || typeof module5 === "function") {
    for (let key of __getOwnPropNames(module5))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module5[key], enumerable: !(desc = __getOwnPropDesc(module5, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module5) => {
  return __reExport(__markAsModule(__defProp(module5 != null ? __create(__getProtoOf(module5)) : {}, "default", module5 && module5.__esModule && "default" in module5 ? { get: () => module5.default, enumerable: true } : { value: module5, enumerable: true })), module5);
};

// ../../node_modules/@aws-sdk/client-pinpoint/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/@aws-sdk/client-pinpoint/node_modules/tslib/tslib.js"(exports, module5) {
    var __extends6;
    var __assign6;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __spreadArray5;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module5 === "object" && typeof module5.exports === "object") {
        factory(createExporter(root, createExporter(module5.exports)));
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
      __extends6 = function(d, b) {
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
      __rest6 = function(s, e) {
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
      __decorate6 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
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
      __generator6 = function(thisArg, body) {
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
      __exportStar6 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding6(o, m, p);
      };
      __createBinding6 = Object.create ? function(o, m, k, k2) {
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
      __values6 = function(o) {
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
      __read6 = function(o, n) {
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
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray5 = function(to, from, pack) {
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
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject6 = function(cooked, raw) {
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
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding6(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign6);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__spreadArray", __spreadArray5);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module5) {
    var __extends6;
    var __assign6;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module5 === "object" && typeof module5.exports === "object") {
        factory(createExporter(root, createExporter(module5.exports)));
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
      __extends6 = function(d, b) {
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
      __rest6 = function(s, e) {
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
      __decorate6 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
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
      __generator6 = function(thisArg, body) {
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
      __createBinding6 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar6 = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values6 = function(o) {
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
      __read6 = function(o, n) {
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
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject6 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar6 = function(mod) {
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
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign6);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
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
    var toUtf85 = (input) => {
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
    exports.toUtf8 = toUtf85;
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
    function toUtf85(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf85;
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
    var toUtf85 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf85;
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
    var Sha2565 = function() {
      function Sha2566(secret) {
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
      Sha2566.prototype.update = function(toHash) {
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
      Sha2566.prototype.digest = function() {
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
      return Sha2566;
    }();
    exports.Sha256 = Sha2565;
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
    var toUtf85 = (input) => {
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
    exports.toUtf8 = toUtf85;
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
    function toUtf85(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf85;
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
    var toUtf85 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf85;
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
    var Sha2565 = function() {
      function Sha2566(secret) {
        this.toHash = new Uint8Array(0);
        if (secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      }
      Sha2566.prototype.update = function(data) {
        if ((0, util_1.isEmptyData)(data)) {
          return;
        }
        var update = (0, util_1.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2566.prototype.digest = function() {
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
      return Sha2566;
    }();
    exports.Sha256 = Sha2565;
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
    var Sha2565 = function() {
      function Sha2566(secret) {
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
      Sha2566.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update((0, util_1.convertToBuffer)(toHash));
        } catch (e) {
          this.error = e;
        }
      };
      Sha2566.prototype.digestSync = function() {
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
      Sha2566.prototype.digest = function() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
          return (0, tslib_1.__generator)(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      return Sha2566;
    }();
    exports.Sha256 = Sha2565;
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
    var Sha2565 = function() {
      function Sha2566(secret) {
        if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new webCryptoSha256_1.Sha256(secret);
        } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
          this.hash = new ie11Sha256_1.Sha256(secret);
        } else {
          this.hash = new sha256_js_1.Sha256(secret);
        }
      }
      Sha2566.prototype.update = function(data, encoding) {
        this.hash.update(data, encoding);
      };
      Sha2566.prototype.digest = function() {
        return this.hash.digest();
      };
      return Sha2566;
    }();
    exports.Sha256 = Sha2565;
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
  "../../node_modules/uuid/lib/rng-browser.js"(exports, module5) {
    var getRandomValues2 = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (getRandomValues2) {
      rnds82 = new Uint8Array(16);
      module5.exports = function whatwgRNG() {
        getRandomValues2(rnds82);
        return rnds82;
      };
    } else {
      rnds = new Array(16);
      module5.exports = function mathRNG() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 3) === 0)
            r = Math.random() * 4294967296;
          rnds[i] = r >>> ((i & 3) << 3) & 255;
        }
        return rnds;
      };
    }
    var rnds82;
    var rnds;
  }
});

// ../../node_modules/uuid/lib/bytesToUuid.js
var require_bytesToUuid = __commonJS({
  "../../node_modules/uuid/lib/bytesToUuid.js"(exports, module5) {
    var byteToHex2 = [];
    for (i = 0; i < 256; ++i) {
      byteToHex2[i] = (i + 256).toString(16).substr(1);
    }
    var i;
    function bytesToUuid(buf, offset) {
      var i2 = offset || 0;
      var bth = byteToHex2;
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
    module5.exports = bytesToUuid;
  }
});

// ../../node_modules/uuid/v1.js
var require_v1 = __commonJS({
  "../../node_modules/uuid/v1.js"(exports, module5) {
    var rng2 = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();
    var _nodeId2;
    var _clockseq2;
    var _lastMSecs2 = 0;
    var _lastNSecs2 = 0;
    function v12(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var node = options.node || _nodeId2;
      var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq2;
      if (node == null || clockseq == null) {
        var seedBytes = rng2();
        if (node == null) {
          node = _nodeId2 = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
          ];
        }
        if (clockseq == null) {
          clockseq = _clockseq2 = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      var msecs = options.msecs !== void 0 ? options.msecs : new Date().getTime();
      var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs2 + 1;
      var dt = msecs - _lastMSecs2 + (nsecs - _lastNSecs2) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs2) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs2 = msecs;
      _lastNSecs2 = nsecs;
      _clockseq2 = clockseq;
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
    module5.exports = v12;
  }
});

// ../../node_modules/uuid/v4.js
var require_v4 = __commonJS({
  "../../node_modules/uuid/v4.js"(exports, module5) {
    var rng2 = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();
    function v42(options, buf, offset) {
      var i = buf && offset || 0;
      if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
      }
      options = options || {};
      var rnds = options.random || (options.rng || rng2)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }
      return buf || bytesToUuid(rnds);
    }
    module5.exports = v42;
  }
});

// ../../node_modules/uuid/index.js
var require_uuid = __commonJS({
  "../../node_modules/uuid/index.js"(exports, module5) {
    var v12 = require_v1();
    var v42 = require_v4();
    var uuid = v42;
    uuid.v1 = v12;
    uuid.v4 = v42;
    module5.exports = uuid;
  }
});

// ../../node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "../../node_modules/bowser/es5.js"(exports, module5) {
    !function(e, t) {
      typeof exports == "object" && typeof module5 == "object" ? module5.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.bowser = t() : e.bowser = t();
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

// ../../node_modules/@aws-sdk/client-kinesis/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS({
  "../../node_modules/@aws-sdk/client-kinesis/node_modules/tslib/tslib.js"(exports, module5) {
    var __extends6;
    var __assign6;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __spreadArray5;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module5 === "object" && typeof module5.exports === "object") {
        factory(createExporter(root, createExporter(module5.exports)));
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
      __extends6 = function(d, b) {
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
      __rest6 = function(s, e) {
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
      __decorate6 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
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
      __generator6 = function(thisArg, body) {
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
      __exportStar6 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding6(o, m, p);
      };
      __createBinding6 = Object.create ? function(o, m, k, k2) {
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
      __values6 = function(o) {
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
      __read6 = function(o, n) {
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
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray5 = function(to, from, pack) {
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
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject6 = function(cooked, raw) {
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
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding6(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign6);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__spreadArray", __spreadArray5);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
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

// ../../node_modules/@aws-sdk/client-firehose/node_modules/tslib/tslib.js
var require_tslib4 = __commonJS({
  "../../node_modules/@aws-sdk/client-firehose/node_modules/tslib/tslib.js"(exports, module5) {
    var __extends6;
    var __assign6;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __spreadArray5;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module5 === "object" && typeof module5.exports === "object") {
        factory(createExporter(root, createExporter(module5.exports)));
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
      __extends6 = function(d, b) {
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
      __rest6 = function(s, e) {
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
      __decorate6 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
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
      __generator6 = function(thisArg, body) {
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
      __exportStar6 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding6(o, m, p);
      };
      __createBinding6 = Object.create ? function(o, m, k, k2) {
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
      __values6 = function(o) {
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
      __read6 = function(o, n) {
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
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray5 = function(to, from, pack) {
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
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject6 = function(cooked, raw) {
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
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding6(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign6);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__spreadArray", __spreadArray5);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// ../../node_modules/@aws-sdk/client-personalize-events/node_modules/tslib/tslib.js
var require_tslib5 = __commonJS({
  "../../node_modules/@aws-sdk/client-personalize-events/node_modules/tslib/tslib.js"(exports, module5) {
    var __extends6;
    var __assign6;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __spreadArray5;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root = typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module5 === "object" && typeof module5.exports === "object") {
        factory(createExporter(root, createExporter(module5.exports)));
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
      __extends6 = function(d, b) {
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
      __rest6 = function(s, e) {
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
      __decorate6 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
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
      __generator6 = function(thisArg, body) {
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
      __exportStar6 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding6(o, m, p);
      };
      __createBinding6 = Object.create ? function(o, m, k, k2) {
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
      __values6 = function(o) {
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
      __read6 = function(o, n) {
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
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray5 = function(to, from, pack) {
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
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
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
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
      __makeTemplateObject6 = function(cooked, raw) {
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
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding6(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign6);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__spreadArray", __spreadArray5);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js"(exports, module5) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto2;
    }
    module5.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../node_modules/lodash/_overArg.js"(exports, module5) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module5.exports = overArg;
  }
});

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js"(exports, module5) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module5.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js"(exports, module5) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module5.exports = baseKeys;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module5) {
    var freeGlobal = typeof window == "object" && window && window.Object === Object && window;
    module5.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module5) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module5.exports = root;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module5) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module5.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module5) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module5.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module5) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module5.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module5) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module5.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module5) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module5.exports = isObject;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js"(exports, module5) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module5.exports = isFunction;
  }
});

// ../../node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/lodash/_coreJsData.js"(exports, module5) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module5.exports = coreJsData;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js"(exports, module5) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module5.exports = isMasked;
  }
});

// ../../node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/lodash/_toSource.js"(exports, module5) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module5.exports = toSource;
  }
});

// ../../node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/lodash/_baseIsNative.js"(exports, module5) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module5.exports = baseIsNative;
  }
});

// ../../node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/lodash/_getValue.js"(exports, module5) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module5.exports = getValue;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js"(exports, module5) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module5.exports = getNative;
  }
});

// ../../node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../../node_modules/lodash/_DataView.js"(exports, module5) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module5.exports = DataView2;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js"(exports, module5) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module5.exports = Map;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js"(exports, module5) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module5.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js"(exports, module5) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module5.exports = Set2;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js"(exports, module5) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module5.exports = WeakMap;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js"(exports, module5) {
    var DataView2 = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module5.exports = getTag;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module5) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module5.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js"(exports, module5) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module5.exports = baseIsArguments;
  }
});

// ../../node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../node_modules/lodash/isArguments.js"(exports, module5) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module5.exports = isArguments;
  }
});

// ../../node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/lodash/isArray.js"(exports, module5) {
    var isArray = Array.isArray;
    module5.exports = isArray;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js"(exports, module5) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module5.exports = isLength;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js"(exports, module5) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module5.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js"(exports, module5) {
    function stubFalse() {
      return false;
    }
    module5.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js"(exports, module5) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module5 == "object" && module5 && !module5.nodeType && module5;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module5.exports = isBuffer;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module5) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module5.exports = baseIsTypedArray;
  }
});

// ../../node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../node_modules/lodash/_baseUnary.js"(exports, module5) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module5.exports = baseUnary;
  }
});

// ../../node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../node_modules/lodash/_nodeUtil.js"(exports, module5) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module5 == "object" && module5 && !module5.nodeType && module5;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types5 = freeModule && freeModule.require && freeModule.require("util").types;
        if (types5) {
          return types5;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module5.exports = nodeUtil;
  }
});

// ../../node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../node_modules/lodash/isTypedArray.js"(exports, module5) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module5.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/isEmpty.js
var require_isEmpty = __commonJS({
  "../../node_modules/lodash/isEmpty.js"(exports, module5) {
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLike = require_isArrayLike();
    var isBuffer = require_isBuffer();
    var isPrototype = require_isPrototype();
    var isTypedArray = require_isTypedArray();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function isEmpty3(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }
    module5.exports = isEmpty3;
  }
});

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js"(exports, module5) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module5.exports = listCacheClear;
  }
});

// ../../node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/lodash/eq.js"(exports, module5) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module5.exports = eq;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js"(exports, module5) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module5.exports = assocIndexOf;
  }
});

// ../../node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/lodash/_listCacheDelete.js"(exports, module5) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module5.exports = listCacheDelete;
  }
});

// ../../node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/lodash/_listCacheGet.js"(exports, module5) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module5.exports = listCacheGet;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js"(exports, module5) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module5.exports = listCacheHas;
  }
});

// ../../node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/lodash/_listCacheSet.js"(exports, module5) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module5.exports = listCacheSet;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js"(exports, module5) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module5.exports = ListCache;
  }
});

// ../../node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../node_modules/lodash/_stackClear.js"(exports, module5) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module5.exports = stackClear;
  }
});

// ../../node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../node_modules/lodash/_stackDelete.js"(exports, module5) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module5.exports = stackDelete;
  }
});

// ../../node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../node_modules/lodash/_stackGet.js"(exports, module5) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module5.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js"(exports, module5) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module5.exports = stackHas;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js"(exports, module5) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module5.exports = nativeCreate;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js"(exports, module5) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module5.exports = hashClear;
  }
});

// ../../node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/lodash/_hashDelete.js"(exports, module5) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module5.exports = hashDelete;
  }
});

// ../../node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/lodash/_hashGet.js"(exports, module5) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module5.exports = hashGet;
  }
});

// ../../node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/lodash/_hashHas.js"(exports, module5) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module5.exports = hashHas;
  }
});

// ../../node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/lodash/_hashSet.js"(exports, module5) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module5.exports = hashSet;
  }
});

// ../../node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/lodash/_Hash.js"(exports, module5) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module5.exports = Hash;
  }
});

// ../../node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/lodash/_mapCacheClear.js"(exports, module5) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module5.exports = mapCacheClear;
  }
});

// ../../node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/lodash/_isKeyable.js"(exports, module5) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module5.exports = isKeyable;
  }
});

// ../../node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/lodash/_getMapData.js"(exports, module5) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module5.exports = getMapData;
  }
});

// ../../node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/lodash/_mapCacheDelete.js"(exports, module5) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module5.exports = mapCacheDelete;
  }
});

// ../../node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/lodash/_mapCacheGet.js"(exports, module5) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module5.exports = mapCacheGet;
  }
});

// ../../node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/lodash/_mapCacheHas.js"(exports, module5) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module5.exports = mapCacheHas;
  }
});

// ../../node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/lodash/_mapCacheSet.js"(exports, module5) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module5.exports = mapCacheSet;
  }
});

// ../../node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/lodash/_MapCache.js"(exports, module5) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module5.exports = MapCache;
  }
});

// ../../node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../node_modules/lodash/_stackSet.js"(exports, module5) {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module5.exports = stackSet;
  }
});

// ../../node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../node_modules/lodash/_Stack.js"(exports, module5) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module5.exports = Stack;
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js"(exports, module5) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module5.exports = setCacheAdd;
  }
});

// ../../node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../../node_modules/lodash/_setCacheHas.js"(exports, module5) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module5.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js"(exports, module5) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module5.exports = SetCache;
  }
});

// ../../node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../../node_modules/lodash/_arraySome.js"(exports, module5) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module5.exports = arraySome;
  }
});

// ../../node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../../node_modules/lodash/_cacheHas.js"(exports, module5) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module5.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js"(exports, module5) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module5.exports = equalArrays;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js"(exports, module5) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module5.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js"(exports, module5) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module5.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js"(exports, module5) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module5.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js"(exports, module5) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module5.exports = equalByTag;
  }
});

// ../../node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../../node_modules/lodash/_arrayPush.js"(exports, module5) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module5.exports = arrayPush;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module5) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module5.exports = baseGetAllKeys;
  }
});

// ../../node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../../node_modules/lodash/_arrayFilter.js"(exports, module5) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module5.exports = arrayFilter;
  }
});

// ../../node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../../node_modules/lodash/stubArray.js"(exports, module5) {
    function stubArray() {
      return [];
    }
    module5.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js"(exports, module5) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module5.exports = getSymbols;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js"(exports, module5) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module5.exports = baseTimes;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js"(exports, module5) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module5.exports = isIndex;
  }
});

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module5) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module5.exports = arrayLikeKeys;
  }
});

// ../../node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../../node_modules/lodash/keys.js"(exports, module5) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module5.exports = keys;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js"(exports, module5) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module5.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js"(exports, module5) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module5.exports = equalObjects;
  }
});

// ../../node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module5) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module5.exports = baseIsEqualDeep;
  }
});

// ../../node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../../node_modules/lodash/_baseIsEqual.js"(exports, module5) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module5.exports = baseIsEqual;
  }
});

// ../../node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "../../node_modules/lodash/isEqual.js"(exports, module5) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual3(value, other) {
      return baseIsEqual(value, other);
    }
    module5.exports = isEqual3;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module5) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module5.exports = isSymbol;
  }
});

// ../../node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../../node_modules/lodash/_isKey.js"(exports, module5) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module5.exports = isKey;
  }
});

// ../../node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../../node_modules/lodash/memoize.js"(exports, module5) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module5.exports = memoize;
  }
});

// ../../node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/lodash/_memoizeCapped.js"(exports, module5) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module5.exports = memoizeCapped;
  }
});

// ../../node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../../node_modules/lodash/_stringToPath.js"(exports, module5) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module5.exports = stringToPath;
  }
});

// ../../node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../../node_modules/lodash/_arrayMap.js"(exports, module5) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module5.exports = arrayMap;
  }
});

// ../../node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/lodash/_baseToString.js"(exports, module5) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module5.exports = baseToString;
  }
});

// ../../node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../../node_modules/lodash/toString.js"(exports, module5) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module5.exports = toString;
  }
});

// ../../node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../../node_modules/lodash/_castPath.js"(exports, module5) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module5.exports = castPath;
  }
});

// ../../node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../../node_modules/lodash/_toKey.js"(exports, module5) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module5.exports = toKey;
  }
});

// ../../node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../../node_modules/lodash/_baseGet.js"(exports, module5) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module5.exports = baseGet;
  }
});

// ../../node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/lodash/get.js"(exports, module5) {
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module5.exports = get2;
  }
});

// src/Analytics.ts
import {
  Amplify,
  ConsoleLogger as Logger6,
  Hub as Hub3,
  Parser
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Providers/AWSPinpointProvider.ts
import {
  ConsoleLogger as Logger2,
  ClientDevice,
  Credentials,
  Signer,
  JS,
  Hub,
  getAmplifyUserAgent
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-pinpoint/node_modules/tslib/modules/index.js
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

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/package.json
var name = "@aws-sdk/client-pinpoint";
var description = "AWS SDK for JavaScript Pinpoint Client for Node.js, Browser and React Native";
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
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-pinpoint";
var repository = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-pinpoint"
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

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/runtimeConfig.browser.js
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

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/runtimeConfig.browser.js
var import_util_utf8_browser = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/endpoints.js
var AWS_TEMPLATE = "pinpoint.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "pinpoint.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "pinpoint.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "pinpoint.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "pinpoint.{region}.amazonaws.com";
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
    case "ap-northeast-1":
      regionInfo = {
        hostname: "pinpoint.ap-northeast-1.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "pinpoint.ap-northeast-2.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "pinpoint.ap-south-1.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "pinpoint.ap-southeast-1.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "pinpoint.ap-southeast-2.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "pinpoint.ca-central-1.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "pinpoint.eu-central-1.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "pinpoint.eu-west-1.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "pinpoint.eu-west-2.amazonaws.com",
        partition: "aws",
        signingService: "mobiletargeting"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "pinpoint-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "pinpoint-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "pinpoint-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "pinpoint.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "pinpoint.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "pinpoint.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
          signingService: "mobiletargeting"
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
          partition: "aws-us-gov",
          signingService: "mobiletargeting"
        };
      }
      if (regionInfo === void 0) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
          signingService: "mobiletargeting"
        };
      }
  }
  return Promise.resolve(__assign({ signingService: "mobiletargeting" }, regionInfo));
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

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/runtimeConfig.shared.js
var ClientSharedValues = {
  apiVersion: "2016-12-01",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Pinpoint",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/runtimeConfig.browser.js
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
        var clientName, commandName, inputFilterSensitiveLog, logger11, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger11 = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
              return [4, next(args)];
            case 1:
              response = _b.sent();
              if (!logger11) {
                return [2, response];
              }
              if (typeof logger11.info === "function") {
                _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = __rest2(_a, ["$metadata"]);
                logger11.info({
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
      var name5 = _f.value;
      var lname = name5.toLowerCase();
      if (lname.substr(0, 6) === "x-amz-" && !((_b = options.unhoistableHeaders) === null || _b === void 0 ? void 0 : _b.has(lname))) {
        query[name5] = headers[name5];
        delete headers[name5];
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
    return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery(request) + "\n" + sortedHeaders.map(function(name5) {
      return name5 + ":" + canonicalHeaders[name5];
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
  var _b = __read2(_a, 2), name5 = _b[0], version5 = _b[1];
  var prefixSeparatorIndex = name5.indexOf("/");
  var prefix = name5.substring(0, prefixSeparatorIndex);
  var uaName = name5.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version5].filter(function(item) {
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
      var name5 = options.name, override = options.override;
      var entry = __assign2({ step: "initialize", priority: "normal", middleware }, options);
      if (name5) {
        if (entriesNameSet.has(name5)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name5 + "'");
          var toOverrideIndex = absoluteEntries.findIndex(function(entry2) {
            return entry2.name === name5;
          });
          var toOverride = absoluteEntries[toOverrideIndex];
          if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
            throw new Error('"' + name5 + '" middleware with ' + toOverride.priority + " priority in " + toOverride.step + " step cannot be " + ("overridden by same-name middleware with " + entry.priority + " priority in " + entry.step + " step."));
          }
          absoluteEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name5);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: function(middleware, options) {
      var name5 = options.name, override = options.override;
      var entry = __assign2({ middleware }, options);
      if (name5) {
        if (entriesNameSet.has(name5)) {
          if (!override)
            throw new Error("Duplicate middleware name '" + name5 + "'");
          var toOverrideIndex = relativeEntries.findIndex(function(entry2) {
            return entry2.name === name5;
          });
          var toOverride = relativeEntries[toOverrideIndex];
          if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
            throw new Error('"' + name5 + '" middleware ' + toOverride.relation + ' "' + toOverride.toMiddleware + '" middleware cannot be overridden ' + ("by same-name middleware " + entry.relation + ' "' + entry.toMiddleware + '" middleware.'));
          }
          relativeEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name5);
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
        var tags = entry.tags, name5 = entry.name;
        if (tags && tags.includes(toRemove)) {
          if (name5)
            entriesNameSet.delete(name5);
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

// ../../node_modules/@aws-sdk/smithy-client/dist/es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}

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

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/PinpointClient.js
var PinpointClient = function(_super) {
  __extends(PinpointClient2, _super);
  function PinpointClient2(configuration) {
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
  PinpointClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return PinpointClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/protocols/Aws_restJson1.js
var serializeAws_restJson1PutEventsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "/v1/apps/{ApplicationId}/events";
          if (input.ApplicationId !== void 0) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EventsRequest !== void 0) {
            body = serializeAws_restJson1EventsRequest(input.EventsRequest, context);
          }
          if (body === void 0) {
            body = {};
          }
          body = JSON.stringify(body);
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
var serializeAws_restJson1UpdateEndpointCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
          if (input.ApplicationId !== void 0) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EndpointId !== void 0) {
            labelValue = input.EndpointId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EndpointId.");
            }
            resolvedPath = resolvedPath.replace("{EndpointId}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EndpointId.");
          }
          if (input.EndpointRequest !== void 0) {
            body = serializeAws_restJson1EndpointRequest(input.EndpointRequest, context);
          }
          if (body === void 0) {
            body = {};
          }
          body = JSON.stringify(body);
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "PUT",
            headers,
            path: resolvedPath,
            body
          })];
      }
    });
  });
};
var deserializeAws_restJson1PutEventsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1PutEventsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            EventsResponse: void 0
          };
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.EventsResponse = deserializeAws_restJson1EventsResponse(data, context);
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutEventsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function(_l) {
      switch (_l.label) {
        case 0:
          _a = [__assign({}, output)];
          _k = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3, 2];
            case "com.amazonaws.pinpoint#BadRequestException":
              return [3, 2];
            case "ForbiddenException":
              return [3, 4];
            case "com.amazonaws.pinpoint#ForbiddenException":
              return [3, 4];
            case "InternalServerErrorException":
              return [3, 6];
            case "com.amazonaws.pinpoint#InternalServerErrorException":
              return [3, 6];
            case "MethodNotAllowedException":
              return [3, 8];
            case "com.amazonaws.pinpoint#MethodNotAllowedException":
              return [3, 8];
            case "NotFoundException":
              return [3, 10];
            case "com.amazonaws.pinpoint#NotFoundException":
              return [3, 10];
            case "PayloadTooLargeException":
              return [3, 12];
            case "com.amazonaws.pinpoint#PayloadTooLargeException":
              return [3, 12];
            case "TooManyRequestsException":
              return [3, 14];
            case "com.amazonaws.pinpoint#TooManyRequestsException":
              return [3, 14];
          }
          return [3, 16];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 4:
          _d = [{}];
          return [4, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 6:
          _e = [{}];
          return [4, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 8:
          _f = [{}];
          return [4, deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 10:
          _g = [{}];
          return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 12:
          _h = [{}];
          return [4, deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 14:
          _j = [{}];
          return [4, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _l.label = 17;
        case 17:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1UpdateEndpointCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1UpdateEndpointCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            MessageBody: void 0
          };
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateEndpointCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function(_l) {
      switch (_l.label) {
        case 0:
          _a = [__assign({}, output)];
          _k = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3, 2];
            case "com.amazonaws.pinpoint#BadRequestException":
              return [3, 2];
            case "ForbiddenException":
              return [3, 4];
            case "com.amazonaws.pinpoint#ForbiddenException":
              return [3, 4];
            case "InternalServerErrorException":
              return [3, 6];
            case "com.amazonaws.pinpoint#InternalServerErrorException":
              return [3, 6];
            case "MethodNotAllowedException":
              return [3, 8];
            case "com.amazonaws.pinpoint#MethodNotAllowedException":
              return [3, 8];
            case "NotFoundException":
              return [3, 10];
            case "com.amazonaws.pinpoint#NotFoundException":
              return [3, 10];
            case "PayloadTooLargeException":
              return [3, 12];
            case "com.amazonaws.pinpoint#PayloadTooLargeException":
              return [3, 12];
            case "TooManyRequestsException":
              return [3, 14];
            case "com.amazonaws.pinpoint#TooManyRequestsException":
              return [3, 14];
          }
          return [3, 16];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 4:
          _d = [{}];
          return [4, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 6:
          _e = [{}];
          return [4, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 8:
          _f = [{}];
          return [4, deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 10:
          _g = [{}];
          return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 12:
          _h = [{}];
          return [4, deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 14:
          _j = [{}];
          return [4, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([_l.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          _l.label = 17;
        case 17:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1BadRequestExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1ForbiddenExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1InternalServerErrorExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1MethodNotAllowedExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "MethodNotAllowedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1NotFoundExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1PayloadTooLargeExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "PayloadTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: void 0,
        RequestID: void 0
      };
      data = parsedOutput.body;
      if (data.Message !== void 0 && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.RequestID !== void 0 && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
      }
      return [2, contents];
    });
  });
};
var serializeAws_restJson1EndpointDemographic = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, input.AppVersion !== void 0 && input.AppVersion !== null && { AppVersion: input.AppVersion }), input.Locale !== void 0 && input.Locale !== null && { Locale: input.Locale }), input.Make !== void 0 && input.Make !== null && { Make: input.Make }), input.Model !== void 0 && input.Model !== null && { Model: input.Model }), input.ModelVersion !== void 0 && input.ModelVersion !== null && { ModelVersion: input.ModelVersion }), input.Platform !== void 0 && input.Platform !== null && { Platform: input.Platform }), input.PlatformVersion !== void 0 && input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }), input.Timezone !== void 0 && input.Timezone !== null && { Timezone: input.Timezone });
};
var serializeAws_restJson1EndpointLocation = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign({}, input.City !== void 0 && input.City !== null && { City: input.City }), input.Country !== void 0 && input.Country !== null && { Country: input.Country }), input.Latitude !== void 0 && input.Latitude !== null && { Latitude: input.Latitude }), input.Longitude !== void 0 && input.Longitude !== null && { Longitude: input.Longitude }), input.PostalCode !== void 0 && input.PostalCode !== null && { PostalCode: input.PostalCode }), input.Region !== void 0 && input.Region !== null && { Region: input.Region });
};
var serializeAws_restJson1EndpointRequest = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, input.Address !== void 0 && input.Address !== null && { Address: input.Address }), input.Attributes !== void 0 && input.Attributes !== null && {
    Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context)
  }), input.ChannelType !== void 0 && input.ChannelType !== null && { ChannelType: input.ChannelType }), input.Demographic !== void 0 && input.Demographic !== null && {
    Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context)
  }), input.EffectiveDate !== void 0 && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }), input.EndpointStatus !== void 0 && input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }), input.Location !== void 0 && input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }), input.Metrics !== void 0 && input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }), input.OptOut !== void 0 && input.OptOut !== null && { OptOut: input.OptOut }), input.RequestId !== void 0 && input.RequestId !== null && { RequestId: input.RequestId }), input.User !== void 0 && input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) });
};
var serializeAws_restJson1EndpointUser = function(input, context) {
  return __assign(__assign({}, input.UserAttributes !== void 0 && input.UserAttributes !== null && {
    UserAttributes: serializeAws_restJson1MapOfListOf__string(input.UserAttributes, context)
  }), input.UserId !== void 0 && input.UserId !== null && { UserId: input.UserId });
};
var serializeAws_restJson1Event = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, input.AppPackageName !== void 0 && input.AppPackageName !== null && { AppPackageName: input.AppPackageName }), input.AppTitle !== void 0 && input.AppTitle !== null && { AppTitle: input.AppTitle }), input.AppVersionCode !== void 0 && input.AppVersionCode !== null && { AppVersionCode: input.AppVersionCode }), input.Attributes !== void 0 && input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }), input.ClientSdkVersion !== void 0 && input.ClientSdkVersion !== null && { ClientSdkVersion: input.ClientSdkVersion }), input.EventType !== void 0 && input.EventType !== null && { EventType: input.EventType }), input.Metrics !== void 0 && input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }), input.SdkName !== void 0 && input.SdkName !== null && { SdkName: input.SdkName }), input.Session !== void 0 && input.Session !== null && { Session: serializeAws_restJson1Session(input.Session, context) }), input.Timestamp !== void 0 && input.Timestamp !== null && { Timestamp: input.Timestamp });
};
var serializeAws_restJson1EventsBatch = function(input, context) {
  return __assign(__assign({}, input.Endpoint !== void 0 && input.Endpoint !== null && { Endpoint: serializeAws_restJson1PublicEndpoint(input.Endpoint, context) }), input.Events !== void 0 && input.Events !== null && { Events: serializeAws_restJson1MapOfEvent(input.Events, context) });
};
var serializeAws_restJson1EventsRequest = function(input, context) {
  return __assign({}, input.BatchItem !== void 0 && input.BatchItem !== null && { BatchItem: serializeAws_restJson1MapOfEventsBatch(input.BatchItem, context) });
};
var serializeAws_restJson1ListOf__string = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
};
var serializeAws_restJson1MapOf__double = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};
var serializeAws_restJson1MapOf__string = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};
var serializeAws_restJson1MapOfEvent = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1Event(value, context), _b));
  }, {});
};
var serializeAws_restJson1MapOfEventsBatch = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1EventsBatch(value, context), _b));
  }, {});
};
var serializeAws_restJson1MapOfListOf__string = function(input, context) {
  return Object.entries(input).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1ListOf__string(value, context), _b));
  }, {});
};
var serializeAws_restJson1PublicEndpoint = function(input, context) {
  return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, input.Address !== void 0 && input.Address !== null && { Address: input.Address }), input.Attributes !== void 0 && input.Attributes !== null && {
    Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context)
  }), input.ChannelType !== void 0 && input.ChannelType !== null && { ChannelType: input.ChannelType }), input.Demographic !== void 0 && input.Demographic !== null && {
    Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context)
  }), input.EffectiveDate !== void 0 && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }), input.EndpointStatus !== void 0 && input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }), input.Location !== void 0 && input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }), input.Metrics !== void 0 && input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }), input.OptOut !== void 0 && input.OptOut !== null && { OptOut: input.OptOut }), input.RequestId !== void 0 && input.RequestId !== null && { RequestId: input.RequestId }), input.User !== void 0 && input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) });
};
var serializeAws_restJson1Session = function(input, context) {
  return __assign(__assign(__assign(__assign({}, input.Duration !== void 0 && input.Duration !== null && { Duration: input.Duration }), input.Id !== void 0 && input.Id !== null && { Id: input.Id }), input.StartTimestamp !== void 0 && input.StartTimestamp !== null && { StartTimestamp: input.StartTimestamp }), input.StopTimestamp !== void 0 && input.StopTimestamp !== null && { StopTimestamp: input.StopTimestamp });
};
var deserializeAws_restJson1EndpointItemResponse = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0,
    StatusCode: output.StatusCode !== void 0 && output.StatusCode !== null ? output.StatusCode : void 0
  };
};
var deserializeAws_restJson1EventItemResponse = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0,
    StatusCode: output.StatusCode !== void 0 && output.StatusCode !== null ? output.StatusCode : void 0
  };
};
var deserializeAws_restJson1EventsResponse = function(output, context) {
  return {
    Results: output.Results !== void 0 && output.Results !== null ? deserializeAws_restJson1MapOfItemResponse(output.Results, context) : void 0
  };
};
var deserializeAws_restJson1ItemResponse = function(output, context) {
  return {
    EndpointItemResponse: output.EndpointItemResponse !== void 0 && output.EndpointItemResponse !== null ? deserializeAws_restJson1EndpointItemResponse(output.EndpointItemResponse, context) : void 0,
    EventsItemResponse: output.EventsItemResponse !== void 0 && output.EventsItemResponse !== null ? deserializeAws_restJson1MapOfEventItemResponse(output.EventsItemResponse, context) : void 0
  };
};
var deserializeAws_restJson1MapOfEventItemResponse = function(output, context) {
  return Object.entries(output).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1EventItemResponse(value, context), _b));
  }, {});
};
var deserializeAws_restJson1MapOfItemResponse = function(output, context) {
  return Object.entries(output).reduce(function(acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1ItemResponse(value, context), _b));
  }, {});
};
var deserializeAws_restJson1MessageBody = function(output, context) {
  return {
    Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0,
    RequestID: output.RequestID !== void 0 && output.RequestID !== null ? output.RequestID : void 0
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

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/models/models_1.js
var GetJourneyDateRangeKpiRequest;
(function(GetJourneyDateRangeKpiRequest2) {
  GetJourneyDateRangeKpiRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetJourneyDateRangeKpiRequest || (GetJourneyDateRangeKpiRequest = {}));
var JourneyDateRangeKpiResponse;
(function(JourneyDateRangeKpiResponse2) {
  JourneyDateRangeKpiResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JourneyDateRangeKpiResponse || (JourneyDateRangeKpiResponse = {}));
var GetJourneyDateRangeKpiResponse;
(function(GetJourneyDateRangeKpiResponse2) {
  GetJourneyDateRangeKpiResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetJourneyDateRangeKpiResponse || (GetJourneyDateRangeKpiResponse = {}));
var GetJourneyExecutionActivityMetricsRequest;
(function(GetJourneyExecutionActivityMetricsRequest2) {
  GetJourneyExecutionActivityMetricsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetJourneyExecutionActivityMetricsRequest || (GetJourneyExecutionActivityMetricsRequest = {}));
var JourneyExecutionActivityMetricsResponse;
(function(JourneyExecutionActivityMetricsResponse2) {
  JourneyExecutionActivityMetricsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JourneyExecutionActivityMetricsResponse || (JourneyExecutionActivityMetricsResponse = {}));
var GetJourneyExecutionActivityMetricsResponse;
(function(GetJourneyExecutionActivityMetricsResponse2) {
  GetJourneyExecutionActivityMetricsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetJourneyExecutionActivityMetricsResponse || (GetJourneyExecutionActivityMetricsResponse = {}));
var GetJourneyExecutionMetricsRequest;
(function(GetJourneyExecutionMetricsRequest2) {
  GetJourneyExecutionMetricsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetJourneyExecutionMetricsRequest || (GetJourneyExecutionMetricsRequest = {}));
var JourneyExecutionMetricsResponse;
(function(JourneyExecutionMetricsResponse2) {
  JourneyExecutionMetricsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JourneyExecutionMetricsResponse || (JourneyExecutionMetricsResponse = {}));
var GetJourneyExecutionMetricsResponse;
(function(GetJourneyExecutionMetricsResponse2) {
  GetJourneyExecutionMetricsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetJourneyExecutionMetricsResponse || (GetJourneyExecutionMetricsResponse = {}));
var GetPushTemplateRequest;
(function(GetPushTemplateRequest2) {
  GetPushTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetPushTemplateRequest || (GetPushTemplateRequest = {}));
var PushNotificationTemplateResponse;
(function(PushNotificationTemplateResponse2) {
  PushNotificationTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PushNotificationTemplateResponse || (PushNotificationTemplateResponse = {}));
var GetPushTemplateResponse;
(function(GetPushTemplateResponse2) {
  GetPushTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetPushTemplateResponse || (GetPushTemplateResponse = {}));
var GetRecommenderConfigurationRequest;
(function(GetRecommenderConfigurationRequest2) {
  GetRecommenderConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetRecommenderConfigurationRequest || (GetRecommenderConfigurationRequest = {}));
var GetRecommenderConfigurationResponse;
(function(GetRecommenderConfigurationResponse2) {
  GetRecommenderConfigurationResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetRecommenderConfigurationResponse || (GetRecommenderConfigurationResponse = {}));
var GetRecommenderConfigurationsRequest;
(function(GetRecommenderConfigurationsRequest2) {
  GetRecommenderConfigurationsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetRecommenderConfigurationsRequest || (GetRecommenderConfigurationsRequest = {}));
var ListRecommenderConfigurationsResponse;
(function(ListRecommenderConfigurationsResponse2) {
  ListRecommenderConfigurationsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListRecommenderConfigurationsResponse || (ListRecommenderConfigurationsResponse = {}));
var GetRecommenderConfigurationsResponse;
(function(GetRecommenderConfigurationsResponse2) {
  GetRecommenderConfigurationsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetRecommenderConfigurationsResponse || (GetRecommenderConfigurationsResponse = {}));
var GetSegmentRequest;
(function(GetSegmentRequest2) {
  GetSegmentRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentRequest || (GetSegmentRequest = {}));
var GetSegmentResponse;
(function(GetSegmentResponse2) {
  GetSegmentResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentResponse || (GetSegmentResponse = {}));
var GetSegmentExportJobsRequest;
(function(GetSegmentExportJobsRequest2) {
  GetSegmentExportJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentExportJobsRequest || (GetSegmentExportJobsRequest = {}));
var GetSegmentExportJobsResponse;
(function(GetSegmentExportJobsResponse2) {
  GetSegmentExportJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentExportJobsResponse || (GetSegmentExportJobsResponse = {}));
var GetSegmentImportJobsRequest;
(function(GetSegmentImportJobsRequest2) {
  GetSegmentImportJobsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentImportJobsRequest || (GetSegmentImportJobsRequest = {}));
var GetSegmentImportJobsResponse;
(function(GetSegmentImportJobsResponse2) {
  GetSegmentImportJobsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentImportJobsResponse || (GetSegmentImportJobsResponse = {}));
var GetSegmentsRequest;
(function(GetSegmentsRequest2) {
  GetSegmentsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentsRequest || (GetSegmentsRequest = {}));
var SegmentsResponse;
(function(SegmentsResponse2) {
  SegmentsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SegmentsResponse || (SegmentsResponse = {}));
var GetSegmentsResponse;
(function(GetSegmentsResponse2) {
  GetSegmentsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentsResponse || (GetSegmentsResponse = {}));
var GetSegmentVersionRequest;
(function(GetSegmentVersionRequest2) {
  GetSegmentVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentVersionRequest || (GetSegmentVersionRequest = {}));
var GetSegmentVersionResponse;
(function(GetSegmentVersionResponse2) {
  GetSegmentVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentVersionResponse || (GetSegmentVersionResponse = {}));
var GetSegmentVersionsRequest;
(function(GetSegmentVersionsRequest2) {
  GetSegmentVersionsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentVersionsRequest || (GetSegmentVersionsRequest = {}));
var GetSegmentVersionsResponse;
(function(GetSegmentVersionsResponse2) {
  GetSegmentVersionsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSegmentVersionsResponse || (GetSegmentVersionsResponse = {}));
var GetSmsChannelRequest;
(function(GetSmsChannelRequest2) {
  GetSmsChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSmsChannelRequest || (GetSmsChannelRequest = {}));
var GetSmsChannelResponse;
(function(GetSmsChannelResponse2) {
  GetSmsChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSmsChannelResponse || (GetSmsChannelResponse = {}));
var GetSmsTemplateRequest;
(function(GetSmsTemplateRequest2) {
  GetSmsTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSmsTemplateRequest || (GetSmsTemplateRequest = {}));
var SMSTemplateResponse;
(function(SMSTemplateResponse2) {
  SMSTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SMSTemplateResponse || (SMSTemplateResponse = {}));
var GetSmsTemplateResponse;
(function(GetSmsTemplateResponse2) {
  GetSmsTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetSmsTemplateResponse || (GetSmsTemplateResponse = {}));
var GetUserEndpointsRequest;
(function(GetUserEndpointsRequest2) {
  GetUserEndpointsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetUserEndpointsRequest || (GetUserEndpointsRequest = {}));
var GetUserEndpointsResponse;
(function(GetUserEndpointsResponse2) {
  GetUserEndpointsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetUserEndpointsResponse || (GetUserEndpointsResponse = {}));
var GetVoiceChannelRequest;
(function(GetVoiceChannelRequest2) {
  GetVoiceChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetVoiceChannelRequest || (GetVoiceChannelRequest = {}));
var GetVoiceChannelResponse;
(function(GetVoiceChannelResponse2) {
  GetVoiceChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetVoiceChannelResponse || (GetVoiceChannelResponse = {}));
var GetVoiceTemplateRequest;
(function(GetVoiceTemplateRequest2) {
  GetVoiceTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetVoiceTemplateRequest || (GetVoiceTemplateRequest = {}));
var VoiceTemplateResponse;
(function(VoiceTemplateResponse2) {
  VoiceTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(VoiceTemplateResponse || (VoiceTemplateResponse = {}));
var GetVoiceTemplateResponse;
(function(GetVoiceTemplateResponse2) {
  GetVoiceTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetVoiceTemplateResponse || (GetVoiceTemplateResponse = {}));
var JourneysResponse;
(function(JourneysResponse2) {
  JourneysResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JourneysResponse || (JourneysResponse = {}));
var JourneyStateRequest;
(function(JourneyStateRequest2) {
  JourneyStateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JourneyStateRequest || (JourneyStateRequest = {}));
var ListJourneysRequest;
(function(ListJourneysRequest2) {
  ListJourneysRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListJourneysRequest || (ListJourneysRequest = {}));
var ListJourneysResponse;
(function(ListJourneysResponse2) {
  ListJourneysResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListJourneysResponse || (ListJourneysResponse = {}));
var TemplateResponse;
(function(TemplateResponse2) {
  TemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TemplateResponse || (TemplateResponse = {}));
var TemplateVersionResponse;
(function(TemplateVersionResponse2) {
  TemplateVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TemplateVersionResponse || (TemplateVersionResponse = {}));
var ListTagsForResourceRequest;
(function(ListTagsForResourceRequest2) {
  ListTagsForResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
var TagsModel;
(function(TagsModel2) {
  TagsModel2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TagsModel || (TagsModel = {}));
var ListTagsForResourceResponse;
(function(ListTagsForResourceResponse2) {
  ListTagsForResourceResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
var ListTemplatesRequest;
(function(ListTemplatesRequest2) {
  ListTemplatesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTemplatesRequest || (ListTemplatesRequest = {}));
var TemplatesResponse;
(function(TemplatesResponse2) {
  TemplatesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TemplatesResponse || (TemplatesResponse = {}));
var ListTemplatesResponse;
(function(ListTemplatesResponse2) {
  ListTemplatesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTemplatesResponse || (ListTemplatesResponse = {}));
var ListTemplateVersionsRequest;
(function(ListTemplateVersionsRequest2) {
  ListTemplateVersionsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTemplateVersionsRequest || (ListTemplateVersionsRequest = {}));
var TemplateVersionsResponse;
(function(TemplateVersionsResponse2) {
  TemplateVersionsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TemplateVersionsResponse || (TemplateVersionsResponse = {}));
var ListTemplateVersionsResponse;
(function(ListTemplateVersionsResponse2) {
  ListTemplateVersionsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListTemplateVersionsResponse || (ListTemplateVersionsResponse = {}));
var MessageResult;
(function(MessageResult2) {
  MessageResult2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MessageResult || (MessageResult = {}));
var MessageRequest;
(function(MessageRequest2) {
  MessageRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MessageRequest || (MessageRequest = {}));
var MessageResponse;
(function(MessageResponse2) {
  MessageResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MessageResponse || (MessageResponse = {}));
var NumberValidateRequest;
(function(NumberValidateRequest2) {
  NumberValidateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NumberValidateRequest || (NumberValidateRequest = {}));
var NumberValidateResponse;
(function(NumberValidateResponse2) {
  NumberValidateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NumberValidateResponse || (NumberValidateResponse = {}));
var PhoneNumberValidateRequest;
(function(PhoneNumberValidateRequest2) {
  PhoneNumberValidateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PhoneNumberValidateRequest || (PhoneNumberValidateRequest = {}));
var PhoneNumberValidateResponse;
(function(PhoneNumberValidateResponse2) {
  PhoneNumberValidateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PhoneNumberValidateResponse || (PhoneNumberValidateResponse = {}));
var PutEventsRequest;
(function(PutEventsRequest3) {
  PutEventsRequest3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutEventsRequest || (PutEventsRequest = {}));
var PutEventsResponse;
(function(PutEventsResponse2) {
  PutEventsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutEventsResponse || (PutEventsResponse = {}));
var WriteEventStream;
(function(WriteEventStream2) {
  WriteEventStream2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(WriteEventStream || (WriteEventStream = {}));
var PutEventStreamRequest;
(function(PutEventStreamRequest2) {
  PutEventStreamRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutEventStreamRequest || (PutEventStreamRequest = {}));
var PutEventStreamResponse;
(function(PutEventStreamResponse2) {
  PutEventStreamResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutEventStreamResponse || (PutEventStreamResponse = {}));
var UpdateAttributesRequest;
(function(UpdateAttributesRequest2) {
  UpdateAttributesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateAttributesRequest || (UpdateAttributesRequest = {}));
var RemoveAttributesRequest;
(function(RemoveAttributesRequest2) {
  RemoveAttributesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RemoveAttributesRequest || (RemoveAttributesRequest = {}));
var RemoveAttributesResponse;
(function(RemoveAttributesResponse2) {
  RemoveAttributesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RemoveAttributesResponse || (RemoveAttributesResponse = {}));
var SendMessagesRequest;
(function(SendMessagesRequest2) {
  SendMessagesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SendMessagesRequest || (SendMessagesRequest = {}));
var SendMessagesResponse;
(function(SendMessagesResponse2) {
  SendMessagesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SendMessagesResponse || (SendMessagesResponse = {}));
var SendUsersMessageRequest;
(function(SendUsersMessageRequest2) {
  SendUsersMessageRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SendUsersMessageRequest || (SendUsersMessageRequest = {}));
var SendUsersMessagesRequest;
(function(SendUsersMessagesRequest2) {
  SendUsersMessagesRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SendUsersMessagesRequest || (SendUsersMessagesRequest = {}));
var SendUsersMessageResponse;
(function(SendUsersMessageResponse2) {
  SendUsersMessageResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SendUsersMessageResponse || (SendUsersMessageResponse = {}));
var SendUsersMessagesResponse;
(function(SendUsersMessagesResponse2) {
  SendUsersMessagesResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SendUsersMessagesResponse || (SendUsersMessagesResponse = {}));
var TagResourceRequest;
(function(TagResourceRequest2) {
  TagResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
var UntagResourceRequest;
(function(UntagResourceRequest2) {
  UntagResourceRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
var UpdateAdmChannelRequest;
(function(UpdateAdmChannelRequest2) {
  UpdateAdmChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateAdmChannelRequest || (UpdateAdmChannelRequest = {}));
var UpdateAdmChannelResponse;
(function(UpdateAdmChannelResponse2) {
  UpdateAdmChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateAdmChannelResponse || (UpdateAdmChannelResponse = {}));
var UpdateApnsChannelRequest;
(function(UpdateApnsChannelRequest2) {
  UpdateApnsChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsChannelRequest || (UpdateApnsChannelRequest = {}));
var UpdateApnsChannelResponse;
(function(UpdateApnsChannelResponse2) {
  UpdateApnsChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsChannelResponse || (UpdateApnsChannelResponse = {}));
var UpdateApnsSandboxChannelRequest;
(function(UpdateApnsSandboxChannelRequest2) {
  UpdateApnsSandboxChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsSandboxChannelRequest || (UpdateApnsSandboxChannelRequest = {}));
var UpdateApnsSandboxChannelResponse;
(function(UpdateApnsSandboxChannelResponse2) {
  UpdateApnsSandboxChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsSandboxChannelResponse || (UpdateApnsSandboxChannelResponse = {}));
var UpdateApnsVoipChannelRequest;
(function(UpdateApnsVoipChannelRequest2) {
  UpdateApnsVoipChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsVoipChannelRequest || (UpdateApnsVoipChannelRequest = {}));
var UpdateApnsVoipChannelResponse;
(function(UpdateApnsVoipChannelResponse2) {
  UpdateApnsVoipChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsVoipChannelResponse || (UpdateApnsVoipChannelResponse = {}));
var UpdateApnsVoipSandboxChannelRequest;
(function(UpdateApnsVoipSandboxChannelRequest2) {
  UpdateApnsVoipSandboxChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsVoipSandboxChannelRequest || (UpdateApnsVoipSandboxChannelRequest = {}));
var UpdateApnsVoipSandboxChannelResponse;
(function(UpdateApnsVoipSandboxChannelResponse2) {
  UpdateApnsVoipSandboxChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApnsVoipSandboxChannelResponse || (UpdateApnsVoipSandboxChannelResponse = {}));
var WriteApplicationSettingsRequest;
(function(WriteApplicationSettingsRequest2) {
  WriteApplicationSettingsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(WriteApplicationSettingsRequest || (WriteApplicationSettingsRequest = {}));
var UpdateApplicationSettingsRequest;
(function(UpdateApplicationSettingsRequest2) {
  UpdateApplicationSettingsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApplicationSettingsRequest || (UpdateApplicationSettingsRequest = {}));
var UpdateApplicationSettingsResponse;
(function(UpdateApplicationSettingsResponse2) {
  UpdateApplicationSettingsResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateApplicationSettingsResponse || (UpdateApplicationSettingsResponse = {}));
var UpdateBaiduChannelRequest;
(function(UpdateBaiduChannelRequest2) {
  UpdateBaiduChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateBaiduChannelRequest || (UpdateBaiduChannelRequest = {}));
var UpdateBaiduChannelResponse;
(function(UpdateBaiduChannelResponse2) {
  UpdateBaiduChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateBaiduChannelResponse || (UpdateBaiduChannelResponse = {}));
var UpdateCampaignRequest;
(function(UpdateCampaignRequest2) {
  UpdateCampaignRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateCampaignRequest || (UpdateCampaignRequest = {}));
var UpdateCampaignResponse;
(function(UpdateCampaignResponse2) {
  UpdateCampaignResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateCampaignResponse || (UpdateCampaignResponse = {}));
var UpdateEmailChannelRequest;
(function(UpdateEmailChannelRequest2) {
  UpdateEmailChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEmailChannelRequest || (UpdateEmailChannelRequest = {}));
var UpdateEmailChannelResponse;
(function(UpdateEmailChannelResponse2) {
  UpdateEmailChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEmailChannelResponse || (UpdateEmailChannelResponse = {}));
var UpdateEmailTemplateRequest;
(function(UpdateEmailTemplateRequest2) {
  UpdateEmailTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEmailTemplateRequest || (UpdateEmailTemplateRequest = {}));
var UpdateEmailTemplateResponse;
(function(UpdateEmailTemplateResponse2) {
  UpdateEmailTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEmailTemplateResponse || (UpdateEmailTemplateResponse = {}));
var UpdateEndpointRequest;
(function(UpdateEndpointRequest2) {
  UpdateEndpointRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEndpointRequest || (UpdateEndpointRequest = {}));
var UpdateEndpointResponse;
(function(UpdateEndpointResponse2) {
  UpdateEndpointResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEndpointResponse || (UpdateEndpointResponse = {}));
var UpdateEndpointsBatchRequest;
(function(UpdateEndpointsBatchRequest2) {
  UpdateEndpointsBatchRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEndpointsBatchRequest || (UpdateEndpointsBatchRequest = {}));
var UpdateEndpointsBatchResponse;
(function(UpdateEndpointsBatchResponse2) {
  UpdateEndpointsBatchResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateEndpointsBatchResponse || (UpdateEndpointsBatchResponse = {}));
var UpdateGcmChannelRequest;
(function(UpdateGcmChannelRequest2) {
  UpdateGcmChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateGcmChannelRequest || (UpdateGcmChannelRequest = {}));
var UpdateGcmChannelResponse;
(function(UpdateGcmChannelResponse2) {
  UpdateGcmChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateGcmChannelResponse || (UpdateGcmChannelResponse = {}));
var UpdateJourneyRequest;
(function(UpdateJourneyRequest2) {
  UpdateJourneyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateJourneyRequest || (UpdateJourneyRequest = {}));
var UpdateJourneyResponse;
(function(UpdateJourneyResponse2) {
  UpdateJourneyResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateJourneyResponse || (UpdateJourneyResponse = {}));
var UpdateJourneyStateRequest;
(function(UpdateJourneyStateRequest2) {
  UpdateJourneyStateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateJourneyStateRequest || (UpdateJourneyStateRequest = {}));
var UpdateJourneyStateResponse;
(function(UpdateJourneyStateResponse2) {
  UpdateJourneyStateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateJourneyStateResponse || (UpdateJourneyStateResponse = {}));
var UpdatePushTemplateRequest;
(function(UpdatePushTemplateRequest2) {
  UpdatePushTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdatePushTemplateRequest || (UpdatePushTemplateRequest = {}));
var UpdatePushTemplateResponse;
(function(UpdatePushTemplateResponse2) {
  UpdatePushTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdatePushTemplateResponse || (UpdatePushTemplateResponse = {}));
var UpdateRecommenderConfigurationShape;
(function(UpdateRecommenderConfigurationShape2) {
  UpdateRecommenderConfigurationShape2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateRecommenderConfigurationShape || (UpdateRecommenderConfigurationShape = {}));
var UpdateRecommenderConfigurationRequest;
(function(UpdateRecommenderConfigurationRequest2) {
  UpdateRecommenderConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateRecommenderConfigurationRequest || (UpdateRecommenderConfigurationRequest = {}));
var UpdateRecommenderConfigurationResponse;
(function(UpdateRecommenderConfigurationResponse2) {
  UpdateRecommenderConfigurationResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateRecommenderConfigurationResponse || (UpdateRecommenderConfigurationResponse = {}));
var UpdateSegmentRequest;
(function(UpdateSegmentRequest2) {
  UpdateSegmentRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateSegmentRequest || (UpdateSegmentRequest = {}));
var UpdateSegmentResponse;
(function(UpdateSegmentResponse2) {
  UpdateSegmentResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateSegmentResponse || (UpdateSegmentResponse = {}));
var SMSChannelRequest;
(function(SMSChannelRequest2) {
  SMSChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SMSChannelRequest || (SMSChannelRequest = {}));
var UpdateSmsChannelRequest;
(function(UpdateSmsChannelRequest2) {
  UpdateSmsChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateSmsChannelRequest || (UpdateSmsChannelRequest = {}));
var UpdateSmsChannelResponse;
(function(UpdateSmsChannelResponse2) {
  UpdateSmsChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateSmsChannelResponse || (UpdateSmsChannelResponse = {}));
var UpdateSmsTemplateRequest;
(function(UpdateSmsTemplateRequest2) {
  UpdateSmsTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateSmsTemplateRequest || (UpdateSmsTemplateRequest = {}));
var UpdateSmsTemplateResponse;
(function(UpdateSmsTemplateResponse2) {
  UpdateSmsTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateSmsTemplateResponse || (UpdateSmsTemplateResponse = {}));
var TemplateActiveVersionRequest;
(function(TemplateActiveVersionRequest2) {
  TemplateActiveVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TemplateActiveVersionRequest || (TemplateActiveVersionRequest = {}));
var UpdateTemplateActiveVersionRequest;
(function(UpdateTemplateActiveVersionRequest2) {
  UpdateTemplateActiveVersionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateTemplateActiveVersionRequest || (UpdateTemplateActiveVersionRequest = {}));
var UpdateTemplateActiveVersionResponse;
(function(UpdateTemplateActiveVersionResponse2) {
  UpdateTemplateActiveVersionResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateTemplateActiveVersionResponse || (UpdateTemplateActiveVersionResponse = {}));
var VoiceChannelRequest;
(function(VoiceChannelRequest2) {
  VoiceChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(VoiceChannelRequest || (VoiceChannelRequest = {}));
var UpdateVoiceChannelRequest;
(function(UpdateVoiceChannelRequest2) {
  UpdateVoiceChannelRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceChannelRequest || (UpdateVoiceChannelRequest = {}));
var UpdateVoiceChannelResponse;
(function(UpdateVoiceChannelResponse2) {
  UpdateVoiceChannelResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceChannelResponse || (UpdateVoiceChannelResponse = {}));
var UpdateVoiceTemplateRequest;
(function(UpdateVoiceTemplateRequest2) {
  UpdateVoiceTemplateRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceTemplateRequest || (UpdateVoiceTemplateRequest = {}));
var UpdateVoiceTemplateResponse;
(function(UpdateVoiceTemplateResponse2) {
  UpdateVoiceTemplateResponse2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceTemplateResponse || (UpdateVoiceTemplateResponse = {}));

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/commands/PutEventsCommand.js
var PutEventsCommand = function(_super) {
  __extends(PutEventsCommand3, _super);
  function PutEventsCommand3(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  PutEventsCommand3.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger11 = configuration.logger;
    var clientName = "PinpointClient";
    var commandName = "PutEventsCommand";
    var handlerExecutionContext = {
      logger: logger11,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEventsResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutEventsCommand3.prototype.serialize = function(input, context) {
    return serializeAws_restJson1PutEventsCommand(input, context);
  };
  PutEventsCommand3.prototype.deserialize = function(output, context) {
    return deserializeAws_restJson1PutEventsCommand(output, context);
  };
  return PutEventsCommand3;
}(Command);

// ../../node_modules/@aws-sdk/client-pinpoint/dist/es/commands/UpdateEndpointCommand.js
var UpdateEndpointCommand = function(_super) {
  __extends(UpdateEndpointCommand2, _super);
  function UpdateEndpointCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  UpdateEndpointCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger11 = configuration.logger;
    var clientName = "PinpointClient";
    var commandName = "UpdateEndpointCommand";
    var handlerExecutionContext = {
      logger: logger11,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEndpointResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateEndpointCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restJson1UpdateEndpointCommand(input, context);
  };
  UpdateEndpointCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restJson1UpdateEndpointCommand(output, context);
  };
  return UpdateEndpointCommand2;
}(Command);

// src/Providers/AWSPinpointProvider.ts
import Cache from "http://localhost:8080/packages/cache/4.0.24/cache-esm.js";

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

// node_modules/uuid/dist/esm-browser/v1.js
var _nodeId;
var _clockseq;
var _lastMSecs = 0;
var _lastNSecs = 0;
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
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
  return buf || stringify_default(b);
}
var v1_default = v1;

// src/Providers/EventBuffer.ts
import { ConsoleLogger as Logger } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/utils/AppUtils.ts
var isAppInForeground = () => {
  return true;
};

// src/Providers/EventBuffer.ts
var logger = new Logger("EventsBuffer");
var RETRYABLE_CODES = [429, 500];
var ACCEPTED_CODES = [202];
var EventsBuffer = class {
  constructor(client, config) {
    this._pause = false;
    this._flush = false;
    logger.debug("Instantiating buffer with config:", config);
    this._buffer = [];
    this._client = client;
    this._config = config;
    this._sendBatch = this._sendBatch.bind(this);
    this._startLoop();
  }
  push(event) {
    if (this._buffer > this._config.bufferSize) {
      logger.debug("Exceeded analytics events buffer size");
      return event.handlers.reject(new Error("Exceeded the size of analytics events buffer"));
    }
    const { eventId } = event.params.event;
    const bufferElement = { [eventId]: event };
    this._buffer.push(bufferElement);
  }
  pause() {
    this._pause = true;
  }
  resume() {
    this._pause = false;
  }
  updateClient(client) {
    this._client = client;
  }
  flush() {
    this._flush = true;
  }
  _startLoop() {
    if (this._interval) {
      clearInterval(this._interval);
    }
    const { flushInterval } = this._config;
    this._interval = setInterval(this._sendBatch, flushInterval);
  }
  _sendBatch() {
    const bufferLength = this._buffer.length;
    if (this._flush && !bufferLength) {
      clearInterval(this._interval);
    }
    if (this._pause || !bufferLength || !isAppInForeground()) {
      return;
    }
    const { flushSize } = this._config;
    const batchSize = Math.min(flushSize, bufferLength);
    const bufferSubset = this._buffer.splice(0, batchSize);
    this._putEvents(bufferSubset);
  }
  async _putEvents(buffer) {
    const eventMap = this._bufferToMap(buffer);
    const batchEventParams = this._generateBatchEventParams(eventMap);
    try {
      const command = new PutEventsCommand(batchEventParams);
      const data = await this._client.send(command);
      this._processPutEventsSuccessResponse(data, eventMap);
    } catch (err) {
      return this._handlePutEventsFailure(err, eventMap);
    }
  }
  _generateBatchEventParams(eventMap) {
    const batchEventParams = {
      ApplicationId: "",
      EventsRequest: {
        BatchItem: {}
      }
    };
    Object.values(eventMap).forEach((item) => {
      const { params } = item;
      const { event, timestamp, config } = params;
      const { name: name5, attributes, metrics, eventId, session } = event;
      const { appId, endpointId } = config;
      const batchItem = batchEventParams.EventsRequest.BatchItem;
      batchEventParams.ApplicationId = batchEventParams.ApplicationId || appId;
      if (!batchItem[endpointId]) {
        batchItem[endpointId] = {
          Endpoint: {},
          Events: {}
        };
      }
      batchItem[endpointId].Events[eventId] = {
        EventType: name5,
        Timestamp: new Date(timestamp).toISOString(),
        Attributes: attributes,
        Metrics: metrics,
        Session: session
      };
    });
    return batchEventParams;
  }
  _handlePutEventsFailure(err, eventMap) {
    logger.debug("_putEvents Failed: ", err);
    const statusCode = err.$metadata && err.$metadata.httpStatusCode;
    if (RETRYABLE_CODES.includes(statusCode)) {
      const retryableEvents = Object.values(eventMap);
      this._retry(retryableEvents);
      return;
    }
  }
  _processPutEventsSuccessResponse(data, eventMap) {
    const { Results } = data.EventsResponse;
    const retryableEvents = [];
    Object.entries(Results).forEach(([endpointId, endpointValues]) => {
      const responses = endpointValues.EventsItemResponse;
      Object.entries(responses).forEach(([eventId, { StatusCode, Message }]) => {
        const eventObject = eventMap[eventId];
        const response = {
          EventsResponse: {
            Results: {
              [endpointId]: {
                EventsItemResponse: {
                  [eventId]: { StatusCode, Message }
                }
              }
            }
          }
        };
        if (ACCEPTED_CODES.includes(StatusCode)) {
          eventObject.handlers.resolve(response);
          return;
        }
        if (RETRYABLE_CODES.includes(StatusCode)) {
          retryableEvents.push(eventObject);
          return;
        }
        const { name: name5 } = eventObject.params.event;
        logger.error(`event ${eventId} : ${name5} failed with error: ${Message}`);
        return eventObject.handlers.reject(response);
      });
    });
    if (retryableEvents.length) {
      this._retry(retryableEvents);
    }
  }
  _retry(retryableEvents) {
    const eligibleEvents = [];
    retryableEvents.forEach((event) => {
      const { params } = event;
      const { eventId, name: name5 } = params.event;
      if (params.resendLimit-- > 0) {
        logger.debug(`resending event ${eventId} : ${name5} with ${params.resendLimit} retry attempts remaining`);
        eligibleEvents.push({ [eventId]: event });
        return;
      }
      logger.debug(`no retry attempts remaining for event ${eventId} : ${name5}`);
    });
    this._buffer.unshift(...eligibleEvents);
  }
  _bufferToMap(buffer) {
    return buffer.reduce((acc, curVal) => {
      const [[key, value]] = Object.entries(curVal);
      acc[key] = value;
      return acc;
    }, {});
  }
};

// src/Providers/AWSPinpointProvider.ts
var AMPLIFY_SYMBOL = typeof Symbol !== "undefined" && typeof Symbol.for === "function" ? Symbol.for("amplify_default") : "@@amplify_default";
var dispatchAnalyticsEvent = (event, data) => {
  Hub.dispatch("analytics", { event, data }, "Analytics", AMPLIFY_SYMBOL);
};
var logger2 = new Logger2("AWSPinpointProvider");
var RETRYABLE_CODES2 = [429, 500];
var ACCEPTED_CODES2 = [202];
var FORBIDDEN_CODE = 403;
var MOBILE_SERVICE_NAME = "mobiletargeting";
var EXPIRED_TOKEN_CODE = "ExpiredTokenException";
var UPDATE_ENDPOINT = "_update_endpoint";
var SESSION_START = "_session.start";
var SESSION_STOP = "_session.stop";
var BEACON_SUPPORTED = typeof navigator !== "undefined" && navigator && typeof navigator.sendBeacon === "function";
var BUFFER_SIZE = 1e3;
var FLUSH_SIZE = 100;
var FLUSH_INTERVAL = 5 * 1e3;
var RESEND_LIMIT = 5;
var _AWSPinpointProvider = class {
  constructor(config) {
    this._endpointGenerating = true;
    this._endpointUpdateInProgress = false;
    this._buffer = null;
    this._endpointBuffer = [];
    this._config = config ? config : {};
    this._config.bufferSize = this._config.bufferSize || BUFFER_SIZE;
    this._config.flushSize = this._config.flushSize || FLUSH_SIZE;
    this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL;
    this._config.resendLimit = this._config.resendLimit || RESEND_LIMIT;
    this._clientInfo = ClientDevice.clientInfo();
  }
  getCategory() {
    return _AWSPinpointProvider.category;
  }
  getProviderName() {
    return _AWSPinpointProvider.providerName;
  }
  configure(config) {
    logger2.debug("configure Analytics", config);
    const conf = config || {};
    this._config = Object.assign({}, this._config, conf);
    this._endpointGenerating = !!config["autoSessionRecord"];
    if (this._config.appId && !this._config.disabled) {
      if (!this._config.endpointId) {
        const cacheKey = this.getProviderName() + "_" + this._config.appId;
        this._getEndpointId(cacheKey).then((endpointId) => {
          logger2.debug("setting endpoint id from the cache", endpointId);
          this._config.endpointId = endpointId;
          dispatchAnalyticsEvent("pinpointProvider_configured", null);
        }).catch((err) => {
          logger2.debug("Failed to generate endpointId", err);
        });
      } else {
        dispatchAnalyticsEvent("pinpointProvider_configured", null);
      }
    } else {
      this._flushBuffer();
    }
    return this._config;
  }
  async record(params, handlers) {
    logger2.debug("_public record", params);
    const credentials = await this._getCredentials();
    if (!credentials || !this._config.appId || !this._config.region) {
      logger2.debug("cannot send events without credentials, applicationId or region");
      return handlers.reject(new Error("No credentials, applicationId or region"));
    }
    this._initClients(credentials);
    const timestamp = new Date().getTime();
    this._generateSession(params);
    params.event.eventId = v1_default();
    Object.assign(params, { timestamp, config: this._config });
    if (params.event.immediate) {
      return this._send(params, handlers);
    } else {
      this._putToBuffer(params, handlers);
    }
  }
  async _sendEndpointUpdate(endpointObject) {
    if (this._endpointUpdateInProgress) {
      this._endpointBuffer.push(endpointObject);
      return;
    }
    this._endpointUpdateInProgress = true;
    await this._updateEndpoint(endpointObject);
    const next = this._endpointBuffer.shift();
    this._endpointUpdateInProgress = false;
    next && this._sendEndpointUpdate(next);
  }
  _putToBuffer(params, handlers) {
    if (params.event.name === UPDATE_ENDPOINT) {
      this._sendEndpointUpdate({ params, handlers });
      return;
    }
    this._buffer && this._buffer.push({ params, handlers });
  }
  _generateSession(params) {
    this._sessionId = this._sessionId || v1_default();
    const { event } = params;
    switch (event.name) {
      case SESSION_START:
        this._sessionStartTimestamp = new Date().getTime();
        this._sessionId = v1_default();
        event.session = {
          Id: this._sessionId,
          StartTimestamp: new Date(this._sessionStartTimestamp).toISOString()
        };
        break;
      case SESSION_STOP:
        const stopTimestamp = new Date().getTime();
        this._sessionStartTimestamp = this._sessionStartTimestamp || new Date().getTime();
        this._sessionId = this._sessionId || v1_default();
        event.session = {
          Id: this._sessionId,
          Duration: stopTimestamp - this._sessionStartTimestamp,
          StartTimestamp: new Date(this._sessionStartTimestamp).toISOString(),
          StopTimestamp: new Date(stopTimestamp).toISOString()
        };
        this._sessionId = void 0;
        this._sessionStartTimestamp = void 0;
        break;
      default:
        this._sessionStartTimestamp = this._sessionStartTimestamp || new Date().getTime();
        this._sessionId = this._sessionId || v1_default();
        event.session = {
          Id: this._sessionId,
          StartTimestamp: new Date(this._sessionStartTimestamp).toISOString()
        };
    }
  }
  async _send(params, handlers) {
    const { event } = params;
    switch (event.name) {
      case UPDATE_ENDPOINT:
        return this._updateEndpoint({ params, handlers });
      case SESSION_STOP:
        return this._pinpointSendStopSession(params, handlers);
      default:
        return this._pinpointPutEvents(params, handlers);
    }
  }
  _generateBatchItemContext(params) {
    const { event, timestamp, config } = params;
    const { name: name5, attributes, metrics, eventId, session } = event;
    const { appId, endpointId } = config;
    const endpointContext = {};
    const eventParams = {
      ApplicationId: appId,
      EventsRequest: {
        BatchItem: {}
      }
    };
    const endpointObj = {};
    endpointObj.Endpoint = endpointContext;
    endpointObj.Events = {
      [eventId]: {
        EventType: name5,
        Timestamp: new Date(timestamp).toISOString(),
        Attributes: attributes,
        Metrics: metrics,
        Session: session
      }
    };
    eventParams.EventsRequest.BatchItem[endpointId] = endpointObj;
    return eventParams;
  }
  async _pinpointPutEvents(params, handlers) {
    const {
      event: { eventId },
      config: { endpointId }
    } = params;
    const eventParams = this._generateBatchItemContext(params);
    const command = new PutEventsCommand(eventParams);
    try {
      const data = await this.pinpointClient.send(command);
      const {
        EventsResponse: {
          Results: {
            [endpointId]: {
              EventsItemResponse: {
                [eventId]: { StatusCode, Message }
              }
            }
          }
        }
      } = data;
      if (ACCEPTED_CODES2.includes(StatusCode)) {
        logger2.debug("record event success. ", data);
        return handlers.resolve(data);
      } else {
        if (RETRYABLE_CODES2.includes(StatusCode)) {
          this._retry(params, handlers);
        } else {
          logger2.error(`Event ${eventId} is not accepted, the error is ${Message}`);
          return handlers.reject(data);
        }
      }
    } catch (err) {
      this._eventError(err);
      return handlers.reject(err);
    }
  }
  _pinpointSendStopSession(params, handlers) {
    if (!BEACON_SUPPORTED) {
      this._pinpointPutEvents(params, handlers);
      return;
    }
    const eventParams = this._generateBatchItemContext(params);
    const { region } = this._config;
    const { ApplicationId, EventsRequest } = eventParams;
    const accessInfo = {
      secret_key: this._config.credentials.secretAccessKey,
      access_key: this._config.credentials.accessKeyId,
      session_token: this._config.credentials.sessionToken
    };
    const url = `https://pinpoint.${region}.amazonaws.com/v1/apps/${ApplicationId}/events/legacy`;
    const body = JSON.stringify(EventsRequest);
    const method = "POST";
    const request = {
      url,
      body,
      method
    };
    const serviceInfo = { region, service: MOBILE_SERVICE_NAME };
    const requestUrl = Signer.signUrl(request, accessInfo, serviceInfo, null);
    const success = navigator.sendBeacon(requestUrl, body);
    if (success) {
      return handlers.resolve("sendBeacon success");
    }
    return handlers.reject("sendBeacon failure");
  }
  _retry(params, handlers) {
    const {
      config: { resendLimit }
    } = params;
    params.resendLimit = typeof params.resendLimit === "number" ? params.resendLimit : resendLimit;
    if (params.resendLimit-- > 0) {
      logger2.debug(`resending event ${params.eventName} with ${params.resendLimit} retry times left`);
      this._pinpointPutEvents(params, handlers);
    } else {
      logger2.debug(`retry times used up for event ${params.eventName}`);
    }
  }
  async _updateEndpoint(endpointObject) {
    const { params, handlers } = endpointObject;
    const { config, event } = params;
    const { appId, endpointId } = config;
    const request = this._endpointRequest(config, JS.transferKeyToLowerCase(event, [], ["attributes", "userAttributes", "Attributes", "UserAttributes"]));
    const update_params = {
      ApplicationId: appId,
      EndpointId: endpointId,
      EndpointRequest: request
    };
    try {
      const command = new UpdateEndpointCommand(update_params);
      const data = await this.pinpointClient.send(command);
      logger2.debug("updateEndpoint success", data);
      this._endpointGenerating = false;
      this._resumeBuffer();
      handlers.resolve(data);
      return;
    } catch (err) {
      const failureData = {
        err,
        update_params,
        endpointObject
      };
      return this._handleEndpointUpdateFailure(failureData);
    }
  }
  async _handleEndpointUpdateFailure(failureData) {
    const { err, endpointObject } = failureData;
    const statusCode = err.$metadata && err.$metadata.httpStatusCode;
    logger2.debug("updateEndpoint error", err);
    switch (statusCode) {
      case FORBIDDEN_CODE:
        return this._handleEndpointUpdateForbidden(failureData);
      default:
        if (RETRYABLE_CODES2.includes(statusCode)) {
          const exponential = true;
          return this._retryEndpointUpdate(endpointObject, exponential);
        }
        logger2.error("updateEndpoint failed", err);
        endpointObject.handlers.reject(err);
    }
  }
  _handleEndpointUpdateForbidden(failureData) {
    const { err, endpointObject } = failureData;
    const { code, retryable } = err;
    if (code !== EXPIRED_TOKEN_CODE && !retryable) {
      return endpointObject.handlers.reject(err);
    }
    this._retryEndpointUpdate(endpointObject);
  }
  _retryEndpointUpdate(endpointObject, exponential = false) {
    logger2.debug("_retryEndpointUpdate", endpointObject);
    const { params } = endpointObject;
    const {
      config: { resendLimit }
    } = params;
    params.resendLimit = typeof params.resendLimit === "number" ? params.resendLimit : resendLimit;
    if (params.resendLimit-- > 0) {
      logger2.debug(`resending endpoint update ${params.event.eventId} with ${params.resendLimit} retry attempts remaining`);
      this._endpointBuffer.length ? this._endpointBuffer.unshift(endpointObject) : this._updateEndpoint(endpointObject);
      return;
    }
    logger2.warn(`resending endpoint update ${params.event.eventId} failed after ${params.config.resendLimit} attempts`);
    if (this._endpointGenerating) {
      logger2.error("Initial endpoint update failed. ");
    }
  }
  async _initClients(credentials) {
    logger2.debug("init clients");
    if (this.pinpointClient && this._config.credentials && this._config.credentials.sessionToken === credentials.sessionToken && this._config.credentials.identityId === credentials.identityId) {
      logger2.debug("no change for aws credentials, directly return from init");
      return;
    }
    const identityId = this._config.credentials ? this._config.credentials.identityId : null;
    this._config.credentials = credentials;
    const { region } = this._config;
    logger2.debug("init clients with credentials", credentials);
    this.pinpointClient = new PinpointClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent()
    });
    this.pinpointClient.middlewareStack.addRelativeTo((next) => (args) => {
      delete args.request.headers["amz-sdk-invocation-id"];
      delete args.request.headers["amz-sdk-request"];
      return next(args);
    }, {
      step: "finalizeRequest",
      relation: "after",
      toMiddleware: "retryMiddleware"
    });
    if (this._bufferExists() && identityId === credentials.identityId) {
      this._updateBufferClient();
    } else {
      this._initBuffer();
    }
    this._customizePinpointClientReq();
  }
  _bufferExists() {
    return this._buffer && this._buffer instanceof EventsBuffer;
  }
  _initBuffer() {
    if (this._bufferExists()) {
      this._flushBuffer();
    }
    this._buffer = new EventsBuffer(this.pinpointClient, this._config);
    if (this._endpointGenerating) {
      this._buffer.pause();
    }
  }
  _updateBufferClient() {
    if (this._bufferExists()) {
      this._buffer.updateClient(this.pinpointClient);
    }
  }
  _flushBuffer() {
    if (this._bufferExists()) {
      this._buffer.flush();
      this._buffer = null;
    }
  }
  _resumeBuffer() {
    if (this._bufferExists()) {
      this._buffer.resume();
    }
  }
  _customizePinpointClientReq() {
  }
  async _getEndpointId(cacheKey) {
    let endpointId = await Cache.getItem(cacheKey);
    logger2.debug("endpointId from cache", endpointId, "type", typeof endpointId);
    if (!endpointId) {
      endpointId = v1_default();
      const ttl = 1e3 * 60 * 60 * 24 * 365 * 100;
      const expiration = new Date().getTime() + ttl;
      Cache.setItem(cacheKey, endpointId, {
        expires: expiration,
        priority: 1
      });
    }
    return endpointId;
  }
  _endpointRequest(config, event) {
    const { credentials } = config;
    const clientInfo = this._clientInfo || {};
    const clientContext = config.clientContext || {};
    const defaultEndpointConfig = config.endpoint || {};
    const demographicByClientInfo = {
      appVersion: clientInfo.appVersion,
      make: clientInfo.make,
      model: clientInfo.model,
      modelVersion: clientInfo.version,
      platform: clientInfo.platform
    };
    const {
      clientId,
      appTitle,
      appVersionName,
      appVersionCode,
      appPackageName,
      ...demographicByClientContext
    } = clientContext;
    const channelType = event.address ? clientInfo.platform === "android" ? "GCM" : "APNS" : void 0;
    const tmp = {
      channelType,
      requestId: v1_default(),
      effectiveDate: new Date().toISOString(),
      ...defaultEndpointConfig,
      ...event,
      attributes: {
        ...defaultEndpointConfig.attributes,
        ...event.attributes
      },
      demographic: {
        ...demographicByClientInfo,
        ...demographicByClientContext,
        ...defaultEndpointConfig.demographic,
        ...event.demographic
      },
      location: {
        ...defaultEndpointConfig.location,
        ...event.location
      },
      metrics: {
        ...defaultEndpointConfig.metrics,
        ...event.metrics
      },
      user: {
        userId: event.userId || defaultEndpointConfig.userId || credentials.identityId,
        userAttributes: {
          ...defaultEndpointConfig.userAttributes,
          ...event.userAttributes
        }
      }
    };
    const {
      userId,
      userAttributes,
      name: name5,
      session,
      eventId,
      immediate,
      ...ret
    } = tmp;
    return JS.transferKeyToUpperCase(ret, [], ["metrics", "userAttributes", "attributes"]);
  }
  _eventError(err) {
    logger2.error("record event failed.", err);
    logger2.warn(`Please ensure you have updated your Pinpoint IAM Policy with the Action: "mobiletargeting:PutEvents" in order to record events`);
  }
  async _getCredentials() {
    try {
      const credentials = await Credentials.get();
      if (!credentials)
        return null;
      logger2.debug("set credentials for analytics", credentials);
      return Credentials.shear(credentials);
    } catch (err) {
      logger2.debug("ensure credentials error", err);
      return null;
    }
  }
};
var AWSPinpointProvider = _AWSPinpointProvider;
AWSPinpointProvider.category = "Analytics";
AWSPinpointProvider.providerName = "AWSPinpoint";

// src/utils/MethodEmbed.ts
var lists = [];
var MethodEmbed = class {
  static add(context, methodName, methodOverride) {
    getInstance(context, methodName).set(methodOverride);
  }
  static remove(context, methodName) {
    getInstance(context, methodName).remove();
  }
  constructor(context, methodName) {
    this.context = context;
    this.methodName = methodName;
    this._originalMethod = context[methodName].bind(context);
  }
  set(methodOverride) {
    this.context[this.methodName] = (...args) => {
      return methodOverride(this._originalMethod(...args));
    };
  }
  remove() {
    this.context[this.methodName] = this._originalMethod;
  }
};
function getInstance(context, methodName) {
  let instance = lists.filter((h) => h.context === context && h.methodName === methodName)[0];
  if (!instance) {
    instance = new MethodEmbed(context, methodName);
    lists.push(instance);
  }
  return instance;
}

// src/trackers/PageViewTracker.ts
import { ConsoleLogger as Logger3, JS as JS2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger3 = new Logger3("PageViewTracker");
var PREV_URL_KEY = "aws-amplify-analytics-prevUrl";
var getUrl = () => {
  if (!JS2.browserOrNode().isBrowser)
    return "";
  else
    return window.location.origin + window.location.pathname;
};
var defaultOpts = {
  enable: false,
  provider: "AWSPinpoint",
  getUrl
};
var PageViewTracker = class {
  constructor(tracker, opts) {
    logger3.debug("initialize pageview tracker with opts", opts);
    this._config = Object.assign({}, defaultOpts, opts);
    this._tracker = tracker;
    this._hasEnabled = false;
    this._trackFunc = this._trackFunc.bind(this);
    if (this._config.type === "SPA") {
      this._pageViewTrackSPA();
    } else {
      this._pageViewTrackDefault();
    }
  }
  configure(opts) {
    Object.assign(this._config, opts);
    if (this._config.type === "SPA") {
      this._pageViewTrackSPA();
    }
    return this._config;
  }
  _isSameUrl() {
    const prevUrl = sessionStorage.getItem(PREV_URL_KEY);
    const curUrl = this._config.getUrl();
    if (prevUrl === curUrl) {
      logger3.debug("the url is same");
      return true;
    } else
      return false;
  }
  async _pageViewTrackDefault() {
    if (!JS2.browserOrNode().isBrowser || !window.addEventListener || !window.sessionStorage) {
      logger3.debug("not in the supported web enviroment");
      return;
    }
    const url = this._config.getUrl();
    const customAttrs = typeof this._config.attributes === "function" ? await this._config.attributes() : this._config.attributes;
    const attributes = Object.assign({
      url
    }, customAttrs);
    if (this._config.enable && !this._isSameUrl()) {
      this._tracker({
        name: this._config.eventName || "pageView",
        attributes
      }, this._config.provider).catch((e) => {
        logger3.debug("Failed to record the page view event", e);
      });
      sessionStorage.setItem(PREV_URL_KEY, url);
    }
  }
  async _trackFunc() {
    if (!JS2.browserOrNode().isBrowser || !window.addEventListener || !history.pushState || !window.sessionStorage) {
      logger3.debug("not in the supported web enviroment");
      return;
    }
    const url = this._config.getUrl();
    const customAttrs = typeof this._config.attributes === "function" ? await this._config.attributes() : this._config.attributes;
    const attributes = Object.assign({
      url
    }, customAttrs);
    if (!this._isSameUrl()) {
      this._tracker({
        name: this._config.eventName || "pageView",
        attributes
      }, this._config.provider).catch((e) => {
        logger3.debug("Failed to record the page view event", e);
      });
      sessionStorage.setItem(PREV_URL_KEY, url);
    }
  }
  _pageViewTrackSPA() {
    if (!JS2.browserOrNode().isBrowser || !window.addEventListener || !history.pushState) {
      logger3.debug("not in the supported web enviroment");
      return;
    }
    if (this._config.enable && !this._hasEnabled) {
      MethodEmbed.add(history, "pushState", this._trackFunc);
      MethodEmbed.add(history, "replaceState", this._trackFunc);
      window.addEventListener("popstate", this._trackFunc);
      this._trackFunc();
      this._hasEnabled = true;
    } else {
      MethodEmbed.remove(history, "pushState");
      MethodEmbed.remove(history, "replaceState");
      window.removeEventListener("popstate", this._trackFunc);
      this._hasEnabled = false;
    }
  }
};
var PageViewTracker_default = PageViewTracker;

// src/vendor/dom-utils/matches.ts
import { JS as JS3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var proto = JS3.browserOrNode().isBrowser && window["Element"] ? window["Element"].prototype : null;
var nativeMatches = proto ? proto.matches || proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector : null;
function matches(element, test) {
  if (element && element.nodeType === 1 && test) {
    if (typeof test === "string" || test.nodeType === 1) {
      return element === test || matchesSelector(element, test);
    } else if ("length" in test) {
      for (let i = 0, item; item = test[i]; i++) {
        if (element === item || matchesSelector(element, item))
          return true;
      }
    }
  }
  return false;
}
function matchesSelector(element, selector) {
  if (typeof selector !== "string")
    return false;
  if (nativeMatches)
    return nativeMatches.call(element, selector);
  const nodes = element.parentNode.querySelectorAll(selector);
  for (let i = 0, node; node = nodes[i]; i++) {
    if (node === element)
      return true;
  }
  return false;
}

// src/vendor/dom-utils/parents.ts
function parents(ele) {
  const list = [];
  let element = ele;
  while (element && element.parentNode && element.parentNode.nodeType === 1) {
    element = element.parentNode;
    list.push(element);
  }
  return list;
}

// src/vendor/dom-utils/closest.ts
function closest(element, selector, shouldCheckSelf = false) {
  if (!(element && element.nodeType === 1 && selector))
    return;
  const parentElements = (shouldCheckSelf ? [element] : []).concat(parents(element));
  for (let i = 0, parent; parent = parentElements[i]; i++) {
    if (matches(parent, selector))
      return parent;
  }
}

// src/vendor/dom-utils/delegate.ts
function delegate(ancestor, eventType, selector, callback, opts = {}) {
  const listener2 = function(event) {
    let delegateTarget;
    if (opts["composed"] && typeof event["composedPath"] === "function") {
      const composedPath = event.composedPath();
      for (let i = 0, node; node = composedPath[i]; i++) {
        if (node.nodeType === 1 && matches(node, selector)) {
          delegateTarget = node;
        }
      }
    } else {
      delegateTarget = closest(event.target, selector, true);
    }
    if (delegateTarget) {
      callback.call(delegateTarget, event, delegateTarget);
    }
  };
  ancestor.addEventListener(eventType, listener2, opts["useCapture"]);
  return {
    destroy: () => {
      ancestor.removeEventListener(eventType, listener2, opts["useCapture"]);
    }
  };
}

// src/trackers/EventTracker.ts
import { ConsoleLogger as Logger4, JS as JS4 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger4 = new Logger4("EventTracker");
var defaultOpts2 = {
  enable: false,
  events: ["click"],
  selectorPrefix: "data-amplify-analytics-",
  provider: "AWSPinpoint"
};
var EventTracker = class {
  constructor(tracker, opts) {
    if (!JS4.browserOrNode().isBrowser || !window.addEventListener) {
      logger4.debug("not in the supported web environment");
      return;
    }
    this._config = Object.assign({}, defaultOpts2, opts);
    this._tracker = tracker;
    this._delegates = {};
    this._trackFunc = this._trackFunc.bind(this);
    logger4.debug("initialize pageview tracker with opts", this._config);
    this.configure(this._config);
  }
  configure(opts) {
    Object.assign(this._config, opts);
    if (!this._config.enable) {
      Object.keys(this._delegates).forEach((key) => {
        if (typeof this._delegates[key].destroy === "function")
          this._delegates[key].destroy();
      });
      this._delegates = {};
    } else if (this._config.enable && Object.keys(this._delegates).length === 0) {
      const selector = "[" + this._config.selectorPrefix + "on]";
      this._config.events.forEach((evt) => {
        this._delegates[evt] = delegate(document, evt, selector, this._trackFunc, { composed: true, useCapture: true });
      });
    }
    return this._config;
  }
  async _trackFunc(event, element) {
    const customAttrs = {};
    const events = element.getAttribute(this._config.selectorPrefix + "on").split(/\s*,\s*/);
    const eventName = element.getAttribute(this._config.selectorPrefix + "name");
    const attrs = element.getAttribute(this._config.selectorPrefix + "attrs");
    if (attrs) {
      attrs.split(/\s*,\s*/).forEach((attr) => {
        const tmp = attr.trim().split(/\s*:\s*/);
        customAttrs[tmp[0]] = tmp[1];
      });
    }
    const defaultAttrs = typeof this._config.attributes === "function" ? await this._config.attributes() : this._config.attributes;
    const attributes = Object.assign({
      type: event.type,
      target: `${event.target.localName} with id ${event.target.id}`
    }, defaultAttrs, customAttrs);
    logger4.debug("events needed to be recorded", events);
    logger4.debug("attributes needed to be attached", customAttrs);
    if (events.indexOf(event.type) < 0) {
      logger4.debug(`event ${event.type} is not selected to be recorded`);
      return;
    }
    this._tracker({
      name: eventName || "event",
      attributes
    }, this._config.provider).catch((e) => {
      logger4.debug(`Failed to record the ${event.type} event', ${e}`);
    });
  }
};
var EventTracker_default = EventTracker;

// src/trackers/SessionTracker.ts
import { ConsoleLogger as Logger5, JS as JS5 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger5 = new Logger5("SessionTracker");
var defaultOpts3 = {
  enable: false,
  provider: "AWSPinpoint"
};
var initialEventSent = false;
var SessionTracker = class {
  constructor(tracker, opts) {
    this._config = Object.assign({}, defaultOpts3, opts);
    this._tracker = tracker;
    this._hasEnabled = false;
    this._trackFunc = this._trackFunc.bind(this);
    this._trackBeforeUnload = this._trackBeforeUnload.bind(this);
    this.configure(this._config);
  }
  _envCheck() {
    if (!JS5.browserOrNode().isBrowser) {
      return false;
    }
    if (!document || !document.addEventListener) {
      logger5.debug("not in the supported web environment");
      return false;
    }
    if (typeof document.hidden !== "undefined") {
      this._hidden = "hidden";
      this._visibilityChange = "visibilitychange";
    } else if (typeof document["msHidden"] !== "undefined") {
      this._hidden = "msHidden";
      this._visibilityChange = "msvisibilitychange";
    } else if (typeof document["webkitHidden"] !== "undefined") {
      this._hidden = "webkitHidden";
      this._visibilityChange = "webkitvisibilitychange";
    } else {
      logger5.debug("not in the supported web environment");
      return false;
    }
    return true;
  }
  async _trackFunc() {
    const customAttrs = typeof this._config.attributes === "function" ? await this._config.attributes() : this._config.attributes;
    const attributes = Object.assign({}, customAttrs);
    if (document.visibilityState === this._hidden) {
      this._tracker({
        name: "_session.stop",
        attributes
      }, this._config.provider).catch((e) => {
        logger5.debug("record session stop event failed.", e);
      });
    } else {
      this._tracker({
        name: "_session.start",
        attributes
      }, this._config.provider).catch((e) => {
        logger5.debug("record session start event failed.", e);
      });
    }
  }
  _trackBeforeUnload(event) {
    const customAttrs = typeof this._config.attributes === "function" ? Promise.resolve(this._config.attributes()) : Promise.resolve(this._config.attributes);
    customAttrs.then((custom) => {
      const attributes = Object.assign({}, custom);
      this._tracker({
        name: "_session.stop",
        attributes,
        immediate: true
      }, this._config.provider).catch((e) => {
        logger5.debug("record session stop event failed.", e);
      });
    });
  }
  async _sendInitialEvent() {
    if (initialEventSent) {
      logger5.debug("the start session has been sent when the page is loaded");
      return;
    } else {
      initialEventSent = true;
    }
    const customAttrs = typeof this._config.attributes === "function" ? await this._config.attributes() : this._config.attributes;
    const attributes = Object.assign({}, customAttrs);
    this._tracker({
      name: "_session.start",
      attributes
    }, this._config.provider).catch((e) => {
      logger5.debug("record session start event failed.", e);
    });
  }
  configure(opts) {
    if (!this._envCheck()) {
      return this._config;
    }
    Object.assign(this._config, opts);
    if (this._config.enable && !this._hasEnabled) {
      this._sendInitialEvent();
      document.addEventListener(this._visibilityChange, this._trackFunc, false);
      window.addEventListener("beforeunload", this._trackBeforeUnload, false);
      this._hasEnabled = true;
    } else if (!this._config.enable && this._hasEnabled) {
      document.removeEventListener(this._visibilityChange, this._trackFunc, false);
      window.removeEventListener("beforeunload", this._trackBeforeUnload, false);
      this._hasEnabled = false;
    }
    return this._config;
  }
};
var SessionTracker_default = SessionTracker;

// src/Analytics.ts
var logger6 = new Logger6("AnalyticsClass");
var AMPLIFY_SYMBOL2 = typeof Symbol !== "undefined" && typeof Symbol.for === "function" ? Symbol.for("amplify_default") : "@@amplify_default";
var dispatchAnalyticsEvent2 = (event, data, message) => {
  Hub3.dispatch("analytics", { event, data, message }, "Analytics", AMPLIFY_SYMBOL2);
};
var trackers = {
  pageView: PageViewTracker_default,
  event: EventTracker_default,
  session: SessionTracker_default
};
var _instance = null;
var AnalyticsClass = class {
  constructor() {
    this._config = {};
    this._pluggables = [];
    this._disabled = false;
    this._trackers = {};
    _instance = this;
    this.record = this.record.bind(this);
    Hub3.listen("auth", listener);
    Hub3.listen("storage", listener);
    Hub3.listen("analytics", listener);
  }
  getModuleName() {
    return "Analytics";
  }
  configure(config) {
    if (!config)
      return this._config;
    logger6.debug("configure Analytics", config);
    const amplifyConfig = Parser.parseMobilehubConfig(config);
    this._config = Object.assign({}, this._config, amplifyConfig.Analytics, config);
    if (this._config["disabled"]) {
      this._disabled = true;
    }
    if (this._config["autoSessionRecord"] === void 0) {
      this._config["autoSessionRecord"] = true;
    }
    this._pluggables.forEach((pluggable) => {
      const providerConfig = pluggable.getProviderName() === "AWSPinpoint" && !this._config["AWSPinpoint"] ? this._config : this._config[pluggable.getProviderName()];
      pluggable.configure({
        disabled: this._config["disabled"],
        autoSessionRecord: this._config["autoSessionRecord"],
        ...providerConfig
      });
    });
    if (this._pluggables.length === 0) {
      this.addPluggable(new AWSPinpointProvider());
    }
    dispatchAnalyticsEvent2("configured", null, `The Analytics category has been configured successfully`);
    logger6.debug("current configuration", this._config);
    return this._config;
  }
  addPluggable(pluggable) {
    if (pluggable && pluggable.getCategory() === "Analytics") {
      this._pluggables.push(pluggable);
      const providerConfig = pluggable.getProviderName() === "AWSPinpoint" && !this._config["AWSPinpoint"] ? this._config : this._config[pluggable.getProviderName()];
      const config = { disabled: this._config["disabled"], ...providerConfig };
      pluggable.configure(config);
      return config;
    }
  }
  getPluggable(providerName) {
    for (let i = 0; i < this._pluggables.length; i += 1) {
      const pluggable = this._pluggables[i];
      if (pluggable.getProviderName() === providerName) {
        return pluggable;
      }
    }
    logger6.debug("No plugin found with providerName", providerName);
    return null;
  }
  removePluggable(providerName) {
    let idx = 0;
    while (idx < this._pluggables.length) {
      if (this._pluggables[idx].getProviderName() === providerName) {
        break;
      }
      idx += 1;
    }
    if (idx === this._pluggables.length) {
      logger6.debug("No plugin found with providerName", providerName);
      return;
    } else {
      this._pluggables.splice(idx, idx + 1);
      return;
    }
  }
  disable() {
    this._disabled = true;
  }
  enable() {
    this._disabled = false;
  }
  async startSession(provider) {
    const params = { event: { name: "_session.start" }, provider };
    return this._sendEvent(params);
  }
  async stopSession(provider) {
    const params = { event: { name: "_session.stop" }, provider };
    return this._sendEvent(params);
  }
  async record(event, provider, metrics) {
    let params = null;
    if (typeof event === "string") {
      params = {
        event: {
          name: event,
          attributes: provider,
          metrics
        },
        provider: "AWSPinpoint"
      };
    } else {
      params = { event, provider };
    }
    return this._sendEvent(params);
  }
  async updateEndpoint(attrs, provider) {
    const event = { ...attrs, name: "_update_endpoint" };
    return this.record(event, provider);
  }
  _sendEvent(params) {
    if (this._disabled) {
      logger6.debug("Analytics has been disabled");
      return Promise.resolve();
    }
    const provider = params.provider ? params.provider : "AWSPinpoint";
    return new Promise((resolve, reject) => {
      this._pluggables.forEach((pluggable) => {
        if (pluggable.getProviderName() === provider) {
          pluggable.record(params, { resolve, reject });
        }
      });
    });
  }
  autoTrack(trackerType, opts) {
    if (!trackers[trackerType]) {
      logger6.debug("invalid tracker type");
      return;
    }
    if (trackerType === "session") {
      this._config["autoSessionRecord"] = opts["enable"];
    }
    const tracker = this._trackers[trackerType];
    if (!tracker) {
      this._trackers[trackerType] = new trackers[trackerType](this.record, opts);
    } else {
      tracker.configure(opts);
    }
  }
};
var endpointUpdated = false;
var authConfigured = false;
var analyticsConfigured = false;
var listener = (capsule) => {
  const { channel, payload } = capsule;
  logger6.debug("on hub capsule " + channel, payload);
  switch (channel) {
    case "auth":
      authEvent(payload);
      break;
    case "storage":
      storageEvent(payload);
      break;
    case "analytics":
      analyticsEvent(payload);
      break;
    default:
      break;
  }
};
var storageEvent = (payload) => {
  const {
    data: { attrs, metrics }
  } = payload;
  if (!attrs)
    return;
  if (analyticsConfigured) {
    _instance.record({
      name: "Storage",
      attributes: attrs,
      metrics
    }).catch((e) => {
      logger6.debug("Failed to send the storage event automatically", e);
    });
  }
};
var authEvent = (payload) => {
  const { event } = payload;
  if (!event) {
    return;
  }
  const recordAuthEvent = async (eventName) => {
    if (authConfigured && analyticsConfigured) {
      try {
        return await _instance.record({ name: `_userauth.${eventName}` });
      } catch (err) {
        logger6.debug(`Failed to send the ${eventName} event automatically`, err);
      }
    }
  };
  switch (event) {
    case "signIn":
      return recordAuthEvent("sign_in");
    case "signUp":
      return recordAuthEvent("sign_up");
    case "signOut":
      return recordAuthEvent("sign_out");
    case "signIn_failure":
      return recordAuthEvent("auth_fail");
    case "configured":
      authConfigured = true;
      if (authConfigured && analyticsConfigured) {
        sendEvents();
      }
      break;
  }
};
var analyticsEvent = (payload) => {
  const { event } = payload;
  if (!event)
    return;
  switch (event) {
    case "pinpointProvider_configured":
      analyticsConfigured = true;
      if (authConfigured && analyticsConfigured) {
        sendEvents();
      }
      break;
  }
};
var sendEvents = () => {
  const config = _instance.configure();
  if (!endpointUpdated && config["autoSessionRecord"]) {
    _instance.updateEndpoint({ immediate: true }).catch((e) => {
      logger6.debug("Failed to update the endpoint", e);
    });
    endpointUpdated = true;
  }
  _instance.autoTrack("session", {
    enable: config["autoSessionRecord"]
  });
};
var Analytics = new AnalyticsClass();
Amplify.register(Analytics);

// src/Providers/AWSKinesisProvider.ts
import {
  ConsoleLogger as Logger7,
  Credentials as Credentials2,
  getAmplifyUserAgent as getAmplifyUserAgent2
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-kinesis/node_modules/tslib/modules/index.js
var import_tslib42 = __toModule(require_tslib3());
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
} = import_tslib42.default;

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/package.json
var name2 = "@aws-sdk/client-kinesis";
var description2 = "AWS SDK for JavaScript Kinesis Client for Node.js, Browser and React Native";
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
  "@aws-sdk/eventstream-serde-browser": "3.6.1",
  "@aws-sdk/eventstream-serde-config-resolver": "3.6.1",
  "@aws-sdk/eventstream-serde-node": "3.6.1",
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
var homepage2 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-kinesis";
var repository2 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-kinesis"
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

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/runtimeConfig.browser.js
var import_sha256_browser2 = __toModule(require_build5());

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
  function HeaderMarshaller2(toUtf85, fromUtf87) {
    this.toUtf8 = toUtf85;
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
      var name5 = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name5] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name5] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name5] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name5] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name5] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name5] = {
            type: LONG_TAG,
            value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          var binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name5] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          var stringLength = headers.getUint16(position, false);
          position += 2;
          out[name5] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name5] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          var uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name5] = {
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
  function EventStreamMarshaller4(toUtf85, fromUtf87) {
    this.headerMarshaller = new HeaderMarshaller(toUtf85, fromUtf87);
  }
  EventStreamMarshaller4.prototype.marshall = function(_a) {
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
  EventStreamMarshaller4.prototype.unmarshall = function(message) {
    var _a = splitMessage(message), headers = _a.headers, body = _a.body;
    return { headers: this.headerMarshaller.parse(headers), body };
  };
  EventStreamMarshaller4.prototype.formatHeaders = function(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  };
  return EventStreamMarshaller4;
}();

// ../../node_modules/@aws-sdk/eventstream-serde-browser/node_modules/@aws-sdk/eventstream-serde-universal/dist/es/getChunkedStream.js
function getChunkedStream(source) {
  var _a;
  var currentMessageTotalLength = 0;
  var currentMessagePendingLength = 0;
  var currentMessage = null;
  var messageLengthBuffer = null;
  var allocateMessage = function(size) {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    var currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  };
  var iterator = function() {
    return __asyncGenerator2(this, arguments, function() {
      var sourceIterator, _a2, value, done, chunkLength, currentOffset, bytesRemaining, numBytesForTotal, numBytesToWrite;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            sourceIterator = source[Symbol.asyncIterator]();
            _b.label = 1;
          case 1:
            if (false)
              return [3, 16];
            return [4, __await2(sourceIterator.next())];
          case 2:
            _a2 = _b.sent(), value = _a2.value, done = _a2.done;
            if (!done)
              return [3, 10];
            if (!!currentMessageTotalLength)
              return [3, 4];
            return [4, __await2(void 0)];
          case 3:
            return [2, _b.sent()];
          case 4:
            if (!(currentMessageTotalLength === currentMessagePendingLength))
              return [3, 7];
            return [4, __await2(currentMessage)];
          case 5:
            return [4, _b.sent()];
          case 6:
            _b.sent();
            return [3, 8];
          case 7:
            throw new Error("Truncated event message received.");
          case 8:
            return [4, __await2(void 0)];
          case 9:
            return [2, _b.sent()];
          case 10:
            chunkLength = value.length;
            currentOffset = 0;
            _b.label = 11;
          case 11:
            if (!(currentOffset < chunkLength))
              return [3, 15];
            if (!currentMessage) {
              bytesRemaining = chunkLength - currentOffset;
              if (!messageLengthBuffer) {
                messageLengthBuffer = new Uint8Array(4);
              }
              numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
              messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
              currentMessagePendingLength += numBytesForTotal;
              currentOffset += numBytesForTotal;
              if (currentMessagePendingLength < 4) {
                return [3, 15];
              }
              allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
              messageLengthBuffer = null;
            }
            numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
            currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
            currentMessagePendingLength += numBytesToWrite;
            currentOffset += numBytesToWrite;
            if (!(currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength))
              return [3, 14];
            return [4, __await2(currentMessage)];
          case 12:
            return [4, _b.sent()];
          case 13:
            _b.sent();
            currentMessage = null;
            currentMessageTotalLength = 0;
            currentMessagePendingLength = 0;
            _b.label = 14;
          case 14:
            return [3, 11];
          case 15:
            return [3, 1];
          case 16:
            return [2];
        }
      });
    });
  };
  return _a = {}, _a[Symbol.asyncIterator] = iterator, _a;
}

// ../../node_modules/@aws-sdk/eventstream-serde-browser/node_modules/@aws-sdk/eventstream-serde-universal/dist/es/getUnmarshalledStream.js
function getUnmarshalledStream(source, options) {
  var _a;
  return _a = {}, _a[Symbol.asyncIterator] = function() {
    return __asyncGenerator2(this, arguments, function() {
      var source_1, source_1_1, chunk, message, messageType, unmodeledError, code, exception, deserializedException, error, event, deserialized, e_1_1;
      var _a2, _b;
      var e_1, _c;
      return __generator2(this, function(_d) {
        switch (_d.label) {
          case 0:
            _d.trys.push([0, 12, 13, 18]);
            source_1 = __asyncValues2(source);
            _d.label = 1;
          case 1:
            return [4, __await2(source_1.next())];
          case 2:
            if (!(source_1_1 = _d.sent(), !source_1_1.done))
              return [3, 11];
            chunk = source_1_1.value;
            message = options.eventMarshaller.unmarshall(chunk);
            messageType = message.headers[":message-type"].value;
            if (!(messageType === "error"))
              return [3, 3];
            unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
            unmodeledError.name = message.headers[":error-code"].value;
            throw unmodeledError;
          case 3:
            if (!(messageType === "exception"))
              return [3, 5];
            code = message.headers[":exception-type"].value;
            exception = (_a2 = {}, _a2[code] = message, _a2);
            return [4, __await2(options.deserializer(exception))];
          case 4:
            deserializedException = _d.sent();
            if (deserializedException.$unknown) {
              error = new Error(options.toUtf8(message.body));
              error.name = code;
              throw error;
            }
            throw deserializedException[code];
          case 5:
            if (!(messageType === "event"))
              return [3, 9];
            event = (_b = {}, _b[message.headers[":event-type"].value] = message, _b);
            return [4, __await2(options.deserializer(event))];
          case 6:
            deserialized = _d.sent();
            if (deserialized.$unknown)
              return [3, 10];
            return [4, __await2(deserialized)];
          case 7:
            return [4, _d.sent()];
          case 8:
            _d.sent();
            return [3, 10];
          case 9:
            throw Error("Unrecognizable event type: " + message.headers[":event-type"].value);
          case 10:
            return [3, 1];
          case 11:
            return [3, 18];
          case 12:
            e_1_1 = _d.sent();
            e_1 = { error: e_1_1 };
            return [3, 18];
          case 13:
            _d.trys.push([13, , 16, 17]);
            if (!(source_1_1 && !source_1_1.done && (_c = source_1.return)))
              return [3, 15];
            return [4, __await2(_c.call(source_1))];
          case 14:
            _d.sent();
            _d.label = 15;
          case 15:
            return [3, 17];
          case 16:
            if (e_1)
              throw e_1.error;
            return [7];
          case 17:
            return [7];
          case 18:
            return [2];
        }
      });
    });
  }, _a;
}

// ../../node_modules/@aws-sdk/eventstream-serde-browser/node_modules/@aws-sdk/eventstream-serde-universal/dist/es/EventStreamMarshaller.js
var EventStreamMarshaller2 = function() {
  function EventStreamMarshaller4(_a) {
    var utf8Encoder = _a.utf8Encoder, utf8Decoder = _a.utf8Decoder;
    this.eventMarshaller = new EventStreamMarshaller(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }
  EventStreamMarshaller4.prototype.deserialize = function(body, deserializer) {
    var chunkedStream = getChunkedStream(body);
    var unmarshalledStream = getUnmarshalledStream(chunkedStream, {
      eventMarshaller: this.eventMarshaller,
      deserializer,
      toUtf8: this.utfEncoder
    });
    return unmarshalledStream;
  };
  EventStreamMarshaller4.prototype.serialize = function(input, serializer) {
    var _a;
    var self2 = this;
    var serializedIterator = function() {
      return __asyncGenerator2(this, arguments, function() {
        var input_1, input_1_1, chunk, payloadBuf, e_1_1;
        var e_1, _a2;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 7, 8, 13]);
              input_1 = __asyncValues2(input);
              _b.label = 1;
            case 1:
              return [4, __await2(input_1.next())];
            case 2:
              if (!(input_1_1 = _b.sent(), !input_1_1.done))
                return [3, 6];
              chunk = input_1_1.value;
              payloadBuf = self2.eventMarshaller.marshall(serializer(chunk));
              return [4, __await2(payloadBuf)];
            case 3:
              return [4, _b.sent()];
            case 4:
              _b.sent();
              _b.label = 5;
            case 5:
              return [3, 1];
            case 6:
              return [3, 13];
            case 7:
              e_1_1 = _b.sent();
              e_1 = { error: e_1_1 };
              return [3, 13];
            case 8:
              _b.trys.push([8, , 11, 12]);
              if (!(input_1_1 && !input_1_1.done && (_a2 = input_1.return)))
                return [3, 10];
              return [4, __await2(_a2.call(input_1))];
            case 9:
              _b.sent();
              _b.label = 10;
            case 10:
              return [3, 12];
            case 11:
              if (e_1)
                throw e_1.error;
              return [7];
            case 12:
              return [7];
            case 13:
              return [4, __await2(new Uint8Array(0))];
            case 14:
              return [4, _b.sent()];
            case 15:
              _b.sent();
              return [2];
          }
        });
      });
    };
    return _a = {}, _a[Symbol.asyncIterator] = serializedIterator, _a;
  };
  return EventStreamMarshaller4;
}();

// ../../node_modules/@aws-sdk/eventstream-serde-browser/dist/es/utils.js
var readableStreamtoIterable = function(readableStream) {
  var _a;
  return _a = {}, _a[Symbol.asyncIterator] = function() {
    return __asyncGenerator2(this, arguments, function() {
      var reader, _a2, done, value;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              return [3, 8];
            return [4, __await2(reader.read())];
          case 3:
            _a2 = _b.sent(), done = _a2.done, value = _a2.value;
            if (!done)
              return [3, 5];
            return [4, __await2(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await2(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }, _a;
};
var iterableToReadableStream = function(asyncIterable) {
  var iterator = asyncIterable[Symbol.asyncIterator]();
  return new ReadableStream({
    pull: function(controller) {
      return __awaiter2(this, void 0, void 0, function() {
        var _a, done, value;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, iterator.next()];
            case 1:
              _a = _b.sent(), done = _a.done, value = _a.value;
              if (done) {
                return [2, controller.close()];
              }
              controller.enqueue(value);
              return [2];
          }
        });
      });
    }
  });
};

// ../../node_modules/@aws-sdk/eventstream-serde-browser/dist/es/EventStreamMarshaller.js
var EventStreamMarshaller3 = function() {
  function EventStreamMarshaller4(_a) {
    var utf8Encoder = _a.utf8Encoder, utf8Decoder = _a.utf8Decoder;
    this.eventMarshaller = new EventStreamMarshaller(utf8Encoder, utf8Decoder);
    this.universalMarshaller = new EventStreamMarshaller2({
      utf8Decoder,
      utf8Encoder
    });
  }
  EventStreamMarshaller4.prototype.deserialize = function(body, deserializer) {
    var bodyIterable = isReadableStream(body) ? readableStreamtoIterable(body) : body;
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  };
  EventStreamMarshaller4.prototype.serialize = function(input, serializer) {
    var serialziedIterable = this.universalMarshaller.serialize(input, serializer);
    return typeof ReadableStream === "function" ? iterableToReadableStream(serialziedIterable) : serialziedIterable;
  };
  return EventStreamMarshaller4;
}();
var isReadableStream = function(body) {
  return typeof ReadableStream === "function" && body instanceof ReadableStream;
};

// ../../node_modules/@aws-sdk/eventstream-serde-browser/dist/es/provider.js
var eventStreamSerdeProvider = function(options) {
  return new EventStreamMarshaller3(options);
};

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/runtimeConfig.browser.js
var import_util_utf8_browser2 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/endpoints.js
var AWS_TEMPLATE2 = "kinesis.{region}.amazonaws.com";
var AWS_CN_TEMPLATE2 = "kinesis.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE2 = "kinesis.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE2 = "kinesis.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE2 = "kinesis.{region}.amazonaws.com";
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
    case "af-south-1":
      regionInfo = {
        hostname: "kinesis.af-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-east-1":
      regionInfo = {
        hostname: "kinesis.ap-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "kinesis.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "kinesis.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "kinesis.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "kinesis.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "kinesis.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "kinesis.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "kinesis.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "kinesis.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "kinesis.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "kinesis.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-south-1":
      regionInfo = {
        hostname: "kinesis.eu-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "kinesis.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "kinesis.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "kinesis.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "kinesis-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "kinesis-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "kinesis-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "kinesis-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "kinesis.me-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "kinesis.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "kinesis.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "kinesis.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "kinesis.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-east-1"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "kinesis.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "kinesis.us-iso-east-1.c2s.ic.gov",
        partition: "aws-iso"
      };
      break;
    case "us-isob-east-1":
      regionInfo = {
        hostname: "kinesis.us-isob-east-1.sc2s.sgov.gov",
        partition: "aws-iso-b"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "kinesis.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "kinesis.us-west-2.amazonaws.com",
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
  return Promise.resolve(__assign3({ signingService: "kinesis" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/runtimeConfig.shared.js
var ClientSharedValues2 = {
  apiVersion: "2013-12-02",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider2,
  serviceId: "Kinesis",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/runtimeConfig.browser.js
var ClientDefaultValues2 = __assign3(__assign3({}, ClientSharedValues2), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues2.serviceId,
  clientVersion: package_default2.version
}), eventStreamSerdeProvider, maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser2.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser2.fromUtf8, utf8Encoder: import_util_utf8_browser2.toUtf8 });

// ../../node_modules/@aws-sdk/eventstream-serde-config-resolver/dist/es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = function(input) {
  return __assign2(__assign2({}, input), { eventStreamMarshaller: input.eventStreamSerdeProvider(input) });
};

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/KinesisClient.js
var KinesisClient = function(_super) {
  __extends3(KinesisClient2, _super);
  function KinesisClient2(configuration) {
    var _this = this;
    var _config_0 = __assign3(__assign3({}, ClientDefaultValues2), configuration);
    var _config_1 = resolveRegionConfig(_config_0);
    var _config_2 = resolveEndpointsConfig(_config_1);
    var _config_3 = resolveAwsAuthConfig(_config_2);
    var _config_4 = resolveRetryConfig(_config_3);
    var _config_5 = resolveHostHeaderConfig(_config_4);
    var _config_6 = resolveUserAgentConfig(_config_5);
    var _config_7 = resolveEventStreamSerdeConfig(_config_6);
    _this = _super.call(this, _config_7) || this;
    _this.config = _config_7;
    _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
    _this.middlewareStack.use(getRetryPlugin(_this.config));
    _this.middlewareStack.use(getContentLengthPlugin(_this.config));
    _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
    _this.middlewareStack.use(getLoggerPlugin(_this.config));
    _this.middlewareStack.use(getUserAgentPlugin(_this.config));
    return _this;
  }
  KinesisClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return KinesisClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/models/models_0.js
var AddTagsToStreamInput;
(function(AddTagsToStreamInput2) {
  AddTagsToStreamInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(AddTagsToStreamInput || (AddTagsToStreamInput = {}));
var InvalidArgumentException;
(function(InvalidArgumentException3) {
  InvalidArgumentException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InvalidArgumentException || (InvalidArgumentException = {}));
var LimitExceededException;
(function(LimitExceededException3) {
  LimitExceededException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
var ResourceInUseException;
(function(ResourceInUseException3) {
  ResourceInUseException3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ResourceInUseException || (ResourceInUseException = {}));
var ResourceNotFoundException;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
var HashKeyRange;
(function(HashKeyRange2) {
  HashKeyRange2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(HashKeyRange || (HashKeyRange = {}));
var ChildShard;
(function(ChildShard2) {
  ChildShard2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ChildShard || (ChildShard = {}));
var ConsumerStatus;
(function(ConsumerStatus2) {
  ConsumerStatus2["ACTIVE"] = "ACTIVE";
  ConsumerStatus2["CREATING"] = "CREATING";
  ConsumerStatus2["DELETING"] = "DELETING";
})(ConsumerStatus || (ConsumerStatus = {}));
var Consumer;
(function(Consumer2) {
  Consumer2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(Consumer || (Consumer = {}));
var ConsumerDescription;
(function(ConsumerDescription2) {
  ConsumerDescription2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ConsumerDescription || (ConsumerDescription = {}));
var CreateStreamInput;
(function(CreateStreamInput2) {
  CreateStreamInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(CreateStreamInput || (CreateStreamInput = {}));
var DecreaseStreamRetentionPeriodInput;
(function(DecreaseStreamRetentionPeriodInput2) {
  DecreaseStreamRetentionPeriodInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DecreaseStreamRetentionPeriodInput || (DecreaseStreamRetentionPeriodInput = {}));
var DeleteStreamInput;
(function(DeleteStreamInput2) {
  DeleteStreamInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeleteStreamInput || (DeleteStreamInput = {}));
var DeregisterStreamConsumerInput;
(function(DeregisterStreamConsumerInput2) {
  DeregisterStreamConsumerInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DeregisterStreamConsumerInput || (DeregisterStreamConsumerInput = {}));
var DescribeLimitsInput;
(function(DescribeLimitsInput2) {
  DescribeLimitsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeLimitsInput || (DescribeLimitsInput = {}));
var DescribeLimitsOutput;
(function(DescribeLimitsOutput2) {
  DescribeLimitsOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeLimitsOutput || (DescribeLimitsOutput = {}));
var DescribeStreamInput;
(function(DescribeStreamInput2) {
  DescribeStreamInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeStreamInput || (DescribeStreamInput = {}));
var EncryptionType;
(function(EncryptionType2) {
  EncryptionType2["KMS"] = "KMS";
  EncryptionType2["NONE"] = "NONE";
})(EncryptionType || (EncryptionType = {}));
var MetricsName;
(function(MetricsName2) {
  MetricsName2["ALL"] = "ALL";
  MetricsName2["INCOMING_BYTES"] = "IncomingBytes";
  MetricsName2["INCOMING_RECORDS"] = "IncomingRecords";
  MetricsName2["ITERATOR_AGE_MILLISECONDS"] = "IteratorAgeMilliseconds";
  MetricsName2["OUTGOING_BYTES"] = "OutgoingBytes";
  MetricsName2["OUTGOING_RECORDS"] = "OutgoingRecords";
  MetricsName2["READ_PROVISIONED_THROUGHPUT_EXCEEDED"] = "ReadProvisionedThroughputExceeded";
  MetricsName2["WRITE_PROVISIONED_THROUGHPUT_EXCEEDED"] = "WriteProvisionedThroughputExceeded";
})(MetricsName || (MetricsName = {}));
var EnhancedMetrics;
(function(EnhancedMetrics2) {
  EnhancedMetrics2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(EnhancedMetrics || (EnhancedMetrics = {}));
var SequenceNumberRange;
(function(SequenceNumberRange2) {
  SequenceNumberRange2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SequenceNumberRange || (SequenceNumberRange = {}));
var Shard;
(function(Shard2) {
  Shard2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(Shard || (Shard = {}));
var StreamStatus;
(function(StreamStatus2) {
  StreamStatus2["ACTIVE"] = "ACTIVE";
  StreamStatus2["CREATING"] = "CREATING";
  StreamStatus2["DELETING"] = "DELETING";
  StreamStatus2["UPDATING"] = "UPDATING";
})(StreamStatus || (StreamStatus = {}));
var StreamDescription;
(function(StreamDescription2) {
  StreamDescription2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StreamDescription || (StreamDescription = {}));
var DescribeStreamOutput;
(function(DescribeStreamOutput2) {
  DescribeStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeStreamOutput || (DescribeStreamOutput = {}));
var DescribeStreamConsumerInput;
(function(DescribeStreamConsumerInput2) {
  DescribeStreamConsumerInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeStreamConsumerInput || (DescribeStreamConsumerInput = {}));
var DescribeStreamConsumerOutput;
(function(DescribeStreamConsumerOutput2) {
  DescribeStreamConsumerOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeStreamConsumerOutput || (DescribeStreamConsumerOutput = {}));
var DescribeStreamSummaryInput;
(function(DescribeStreamSummaryInput2) {
  DescribeStreamSummaryInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeStreamSummaryInput || (DescribeStreamSummaryInput = {}));
var StreamDescriptionSummary;
(function(StreamDescriptionSummary2) {
  StreamDescriptionSummary2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StreamDescriptionSummary || (StreamDescriptionSummary = {}));
var DescribeStreamSummaryOutput;
(function(DescribeStreamSummaryOutput2) {
  DescribeStreamSummaryOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DescribeStreamSummaryOutput || (DescribeStreamSummaryOutput = {}));
var DisableEnhancedMonitoringInput;
(function(DisableEnhancedMonitoringInput2) {
  DisableEnhancedMonitoringInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(DisableEnhancedMonitoringInput || (DisableEnhancedMonitoringInput = {}));
var EnhancedMonitoringOutput;
(function(EnhancedMonitoringOutput2) {
  EnhancedMonitoringOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(EnhancedMonitoringOutput || (EnhancedMonitoringOutput = {}));
var EnableEnhancedMonitoringInput;
(function(EnableEnhancedMonitoringInput2) {
  EnableEnhancedMonitoringInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(EnableEnhancedMonitoringInput || (EnableEnhancedMonitoringInput = {}));
var ExpiredIteratorException;
(function(ExpiredIteratorException2) {
  ExpiredIteratorException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ExpiredIteratorException || (ExpiredIteratorException = {}));
var ExpiredNextTokenException;
(function(ExpiredNextTokenException2) {
  ExpiredNextTokenException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ExpiredNextTokenException || (ExpiredNextTokenException = {}));
var GetRecordsInput;
(function(GetRecordsInput2) {
  GetRecordsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetRecordsInput || (GetRecordsInput = {}));
var _Record;
(function(_Record3) {
  _Record3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(_Record || (_Record = {}));
var GetRecordsOutput;
(function(GetRecordsOutput2) {
  GetRecordsOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetRecordsOutput || (GetRecordsOutput = {}));
var KMSAccessDeniedException;
(function(KMSAccessDeniedException2) {
  KMSAccessDeniedException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(KMSAccessDeniedException || (KMSAccessDeniedException = {}));
var KMSDisabledException;
(function(KMSDisabledException2) {
  KMSDisabledException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(KMSDisabledException || (KMSDisabledException = {}));
var KMSInvalidStateException;
(function(KMSInvalidStateException2) {
  KMSInvalidStateException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(KMSInvalidStateException || (KMSInvalidStateException = {}));
var KMSNotFoundException;
(function(KMSNotFoundException2) {
  KMSNotFoundException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(KMSNotFoundException || (KMSNotFoundException = {}));
var KMSOptInRequired;
(function(KMSOptInRequired2) {
  KMSOptInRequired2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(KMSOptInRequired || (KMSOptInRequired = {}));
var KMSThrottlingException;
(function(KMSThrottlingException2) {
  KMSThrottlingException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(KMSThrottlingException || (KMSThrottlingException = {}));
var ProvisionedThroughputExceededException;
(function(ProvisionedThroughputExceededException2) {
  ProvisionedThroughputExceededException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ProvisionedThroughputExceededException || (ProvisionedThroughputExceededException = {}));
var ShardIteratorType;
(function(ShardIteratorType2) {
  ShardIteratorType2["AFTER_SEQUENCE_NUMBER"] = "AFTER_SEQUENCE_NUMBER";
  ShardIteratorType2["AT_SEQUENCE_NUMBER"] = "AT_SEQUENCE_NUMBER";
  ShardIteratorType2["AT_TIMESTAMP"] = "AT_TIMESTAMP";
  ShardIteratorType2["LATEST"] = "LATEST";
  ShardIteratorType2["TRIM_HORIZON"] = "TRIM_HORIZON";
})(ShardIteratorType || (ShardIteratorType = {}));
var GetShardIteratorInput;
(function(GetShardIteratorInput2) {
  GetShardIteratorInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetShardIteratorInput || (GetShardIteratorInput = {}));
var GetShardIteratorOutput;
(function(GetShardIteratorOutput2) {
  GetShardIteratorOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(GetShardIteratorOutput || (GetShardIteratorOutput = {}));
var IncreaseStreamRetentionPeriodInput;
(function(IncreaseStreamRetentionPeriodInput2) {
  IncreaseStreamRetentionPeriodInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(IncreaseStreamRetentionPeriodInput || (IncreaseStreamRetentionPeriodInput = {}));
var InternalFailureException;
(function(InternalFailureException2) {
  InternalFailureException2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(InternalFailureException || (InternalFailureException = {}));
var ShardFilterType;
(function(ShardFilterType2) {
  ShardFilterType2["AFTER_SHARD_ID"] = "AFTER_SHARD_ID";
  ShardFilterType2["AT_LATEST"] = "AT_LATEST";
  ShardFilterType2["AT_TIMESTAMP"] = "AT_TIMESTAMP";
  ShardFilterType2["AT_TRIM_HORIZON"] = "AT_TRIM_HORIZON";
  ShardFilterType2["FROM_TIMESTAMP"] = "FROM_TIMESTAMP";
  ShardFilterType2["FROM_TRIM_HORIZON"] = "FROM_TRIM_HORIZON";
})(ShardFilterType || (ShardFilterType = {}));
var ShardFilter;
(function(ShardFilter2) {
  ShardFilter2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ShardFilter || (ShardFilter = {}));
var ListShardsInput;
(function(ListShardsInput2) {
  ListShardsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListShardsInput || (ListShardsInput = {}));
var ListShardsOutput;
(function(ListShardsOutput2) {
  ListShardsOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListShardsOutput || (ListShardsOutput = {}));
var ListStreamConsumersInput;
(function(ListStreamConsumersInput2) {
  ListStreamConsumersInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListStreamConsumersInput || (ListStreamConsumersInput = {}));
var ListStreamConsumersOutput;
(function(ListStreamConsumersOutput2) {
  ListStreamConsumersOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListStreamConsumersOutput || (ListStreamConsumersOutput = {}));
var ListStreamsInput;
(function(ListStreamsInput2) {
  ListStreamsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListStreamsInput || (ListStreamsInput = {}));
var ListStreamsOutput;
(function(ListStreamsOutput2) {
  ListStreamsOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListStreamsOutput || (ListStreamsOutput = {}));
var ListTagsForStreamInput;
(function(ListTagsForStreamInput2) {
  ListTagsForStreamInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListTagsForStreamInput || (ListTagsForStreamInput = {}));
var Tag;
(function(Tag3) {
  Tag3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(Tag || (Tag = {}));
var ListTagsForStreamOutput;
(function(ListTagsForStreamOutput2) {
  ListTagsForStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(ListTagsForStreamOutput || (ListTagsForStreamOutput = {}));
var MergeShardsInput;
(function(MergeShardsInput2) {
  MergeShardsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(MergeShardsInput || (MergeShardsInput = {}));
var PutRecordInput;
(function(PutRecordInput3) {
  PutRecordInput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutRecordInput || (PutRecordInput = {}));
var PutRecordOutput;
(function(PutRecordOutput3) {
  PutRecordOutput3.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutRecordOutput || (PutRecordOutput = {}));
var PutRecordsRequestEntry;
(function(PutRecordsRequestEntry2) {
  PutRecordsRequestEntry2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutRecordsRequestEntry || (PutRecordsRequestEntry = {}));
var PutRecordsInput;
(function(PutRecordsInput2) {
  PutRecordsInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutRecordsInput || (PutRecordsInput = {}));
var PutRecordsResultEntry;
(function(PutRecordsResultEntry2) {
  PutRecordsResultEntry2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutRecordsResultEntry || (PutRecordsResultEntry = {}));
var PutRecordsOutput;
(function(PutRecordsOutput2) {
  PutRecordsOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(PutRecordsOutput || (PutRecordsOutput = {}));
var RegisterStreamConsumerInput;
(function(RegisterStreamConsumerInput2) {
  RegisterStreamConsumerInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(RegisterStreamConsumerInput || (RegisterStreamConsumerInput = {}));
var RegisterStreamConsumerOutput;
(function(RegisterStreamConsumerOutput2) {
  RegisterStreamConsumerOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(RegisterStreamConsumerOutput || (RegisterStreamConsumerOutput = {}));
var RemoveTagsFromStreamInput;
(function(RemoveTagsFromStreamInput2) {
  RemoveTagsFromStreamInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(RemoveTagsFromStreamInput || (RemoveTagsFromStreamInput = {}));
var SplitShardInput;
(function(SplitShardInput2) {
  SplitShardInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SplitShardInput || (SplitShardInput = {}));
var StartStreamEncryptionInput;
(function(StartStreamEncryptionInput2) {
  StartStreamEncryptionInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StartStreamEncryptionInput || (StartStreamEncryptionInput = {}));
var StopStreamEncryptionInput;
(function(StopStreamEncryptionInput2) {
  StopStreamEncryptionInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StopStreamEncryptionInput || (StopStreamEncryptionInput = {}));
var StartingPosition;
(function(StartingPosition2) {
  StartingPosition2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(StartingPosition || (StartingPosition = {}));
var SubscribeToShardInput;
(function(SubscribeToShardInput2) {
  SubscribeToShardInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SubscribeToShardInput || (SubscribeToShardInput = {}));
var SubscribeToShardEvent;
(function(SubscribeToShardEvent2) {
  SubscribeToShardEvent2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(SubscribeToShardEvent || (SubscribeToShardEvent = {}));
var SubscribeToShardEventStream;
(function(SubscribeToShardEventStream2) {
  SubscribeToShardEventStream2.visit = function(value, visitor) {
    if (value.SubscribeToShardEvent !== void 0)
      return visitor.SubscribeToShardEvent(value.SubscribeToShardEvent);
    if (value.ResourceNotFoundException !== void 0)
      return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
    if (value.ResourceInUseException !== void 0)
      return visitor.ResourceInUseException(value.ResourceInUseException);
    if (value.KMSDisabledException !== void 0)
      return visitor.KMSDisabledException(value.KMSDisabledException);
    if (value.KMSInvalidStateException !== void 0)
      return visitor.KMSInvalidStateException(value.KMSInvalidStateException);
    if (value.KMSAccessDeniedException !== void 0)
      return visitor.KMSAccessDeniedException(value.KMSAccessDeniedException);
    if (value.KMSNotFoundException !== void 0)
      return visitor.KMSNotFoundException(value.KMSNotFoundException);
    if (value.KMSOptInRequired !== void 0)
      return visitor.KMSOptInRequired(value.KMSOptInRequired);
    if (value.KMSThrottlingException !== void 0)
      return visitor.KMSThrottlingException(value.KMSThrottlingException);
    if (value.InternalFailureException !== void 0)
      return visitor.InternalFailureException(value.InternalFailureException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  SubscribeToShardEventStream2.filterSensitiveLog = function(obj) {
    var _a;
    if (obj.SubscribeToShardEvent !== void 0)
      return { SubscribeToShardEvent: SubscribeToShardEvent.filterSensitiveLog(obj.SubscribeToShardEvent) };
    if (obj.ResourceNotFoundException !== void 0)
      return { ResourceNotFoundException: ResourceNotFoundException.filterSensitiveLog(obj.ResourceNotFoundException) };
    if (obj.ResourceInUseException !== void 0)
      return { ResourceInUseException: ResourceInUseException.filterSensitiveLog(obj.ResourceInUseException) };
    if (obj.KMSDisabledException !== void 0)
      return { KMSDisabledException: KMSDisabledException.filterSensitiveLog(obj.KMSDisabledException) };
    if (obj.KMSInvalidStateException !== void 0)
      return { KMSInvalidStateException: KMSInvalidStateException.filterSensitiveLog(obj.KMSInvalidStateException) };
    if (obj.KMSAccessDeniedException !== void 0)
      return { KMSAccessDeniedException: KMSAccessDeniedException.filterSensitiveLog(obj.KMSAccessDeniedException) };
    if (obj.KMSNotFoundException !== void 0)
      return { KMSNotFoundException: KMSNotFoundException.filterSensitiveLog(obj.KMSNotFoundException) };
    if (obj.KMSOptInRequired !== void 0)
      return { KMSOptInRequired: KMSOptInRequired.filterSensitiveLog(obj.KMSOptInRequired) };
    if (obj.KMSThrottlingException !== void 0)
      return { KMSThrottlingException: KMSThrottlingException.filterSensitiveLog(obj.KMSThrottlingException) };
    if (obj.InternalFailureException !== void 0)
      return { InternalFailureException: InternalFailureException.filterSensitiveLog(obj.InternalFailureException) };
    if (obj.$unknown !== void 0)
      return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
  };
})(SubscribeToShardEventStream || (SubscribeToShardEventStream = {}));
var SubscribeToShardOutput;
(function(SubscribeToShardOutput2) {
  SubscribeToShardOutput2.filterSensitiveLog = function(obj) {
    return __assign3(__assign3({}, obj), obj.EventStream && { EventStream: "STREAMING_CONTENT" });
  };
})(SubscribeToShardOutput || (SubscribeToShardOutput = {}));
var ScalingType;
(function(ScalingType2) {
  ScalingType2["UNIFORM_SCALING"] = "UNIFORM_SCALING";
})(ScalingType || (ScalingType = {}));
var UpdateShardCountInput;
(function(UpdateShardCountInput2) {
  UpdateShardCountInput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UpdateShardCountInput || (UpdateShardCountInput = {}));
var UpdateShardCountOutput;
(function(UpdateShardCountOutput2) {
  UpdateShardCountOutput2.filterSensitiveLog = function(obj) {
    return __assign3({}, obj);
  };
})(UpdateShardCountOutput || (UpdateShardCountOutput = {}));

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1PutRecordsCommand = function(input, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator3(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.PutRecords"
      };
      body = JSON.stringify(serializeAws_json1_1PutRecordsInput(input, context));
      return [2, buildHttpRpcRequest(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1PutRecordsCommand = function(output, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator3(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1PutRecordsCommandError(output, context)];
          }
          return [4, parseBody2(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutRecordsOutput(data, context);
          response = __assign3({ $metadata: deserializeMetadata2(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutRecordsCommandError = function(output, context) {
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
            case "InvalidArgumentException":
              return [3, 2];
            case "com.amazonaws.kinesis#InvalidArgumentException":
              return [3, 2];
            case "KMSAccessDeniedException":
              return [3, 4];
            case "com.amazonaws.kinesis#KMSAccessDeniedException":
              return [3, 4];
            case "KMSDisabledException":
              return [3, 6];
            case "com.amazonaws.kinesis#KMSDisabledException":
              return [3, 6];
            case "KMSInvalidStateException":
              return [3, 8];
            case "com.amazonaws.kinesis#KMSInvalidStateException":
              return [3, 8];
            case "KMSNotFoundException":
              return [3, 10];
            case "com.amazonaws.kinesis#KMSNotFoundException":
              return [3, 10];
            case "KMSOptInRequired":
              return [3, 12];
            case "com.amazonaws.kinesis#KMSOptInRequired":
              return [3, 12];
            case "KMSThrottlingException":
              return [3, 14];
            case "com.amazonaws.kinesis#KMSThrottlingException":
              return [3, 14];
            case "ProvisionedThroughputExceededException":
              return [3, 16];
            case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
              return [3, 16];
            case "ResourceNotFoundException":
              return [3, 18];
            case "com.amazonaws.kinesis#ResourceNotFoundException":
              return [3, 18];
          }
          return [3, 20];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _c.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _d.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _e.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _f.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 10:
          _g = [{}];
          return [4, deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _g.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 12:
          _h = [{}];
          return [4, deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context)];
        case 13:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _h.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 14:
          _j = [{}];
          return [4, deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _j.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 16:
          _k = [{}];
          return [4, deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign3.apply(void 0, [__assign3.apply(void 0, _k.concat([_o.sent()])), { name: errorCode, $metadata: deserializeMetadata2(output) }]);
          return [3, 21];
        case 18:
          _l = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1InvalidArgumentExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
      contents = __assign3({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1KMSAccessDeniedExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1KMSAccessDeniedException(body, context);
      contents = __assign3({ name: "KMSAccessDeniedException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1KMSDisabledExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1KMSDisabledException(body, context);
      contents = __assign3({ name: "KMSDisabledException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1KMSInvalidStateExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1KMSInvalidStateException(body, context);
      contents = __assign3({ name: "KMSInvalidStateException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1KMSNotFoundExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1KMSNotFoundException(body, context);
      contents = __assign3({ name: "KMSNotFoundException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1KMSOptInRequiredResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1KMSOptInRequired(body, context);
      contents = __assign3({ name: "KMSOptInRequired", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1KMSThrottlingExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1KMSThrottlingException(body, context);
      contents = __assign3({ name: "KMSThrottlingException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
      contents = __assign3({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function(parsedOutput, context) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator3(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
      contents = __assign3({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata2(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1PutRecordsInput = function(input, context) {
  return __assign3(__assign3({}, input.Records !== void 0 && input.Records !== null && { Records: serializeAws_json1_1PutRecordsRequestEntryList(input.Records, context) }), input.StreamName !== void 0 && input.StreamName !== null && { StreamName: input.StreamName });
};
var serializeAws_json1_1PutRecordsRequestEntry = function(input, context) {
  return __assign3(__assign3(__assign3({}, input.Data !== void 0 && input.Data !== null && { Data: context.base64Encoder(input.Data) }), input.ExplicitHashKey !== void 0 && input.ExplicitHashKey !== null && { ExplicitHashKey: input.ExplicitHashKey }), input.PartitionKey !== void 0 && input.PartitionKey !== null && { PartitionKey: input.PartitionKey });
};
var serializeAws_json1_1PutRecordsRequestEntryList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeAws_json1_1PutRecordsRequestEntry(entry, context);
  });
};
var deserializeAws_json1_1InvalidArgumentException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1KMSAccessDeniedException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1KMSDisabledException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1KMSInvalidStateException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1KMSNotFoundException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1KMSOptInRequired = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1KMSThrottlingException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ProvisionedThroughputExceededException = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1PutRecordsOutput = function(output, context) {
  return {
    EncryptionType: output.EncryptionType !== void 0 && output.EncryptionType !== null ? output.EncryptionType : void 0,
    FailedRecordCount: output.FailedRecordCount !== void 0 && output.FailedRecordCount !== null ? output.FailedRecordCount : void 0,
    Records: output.Records !== void 0 && output.Records !== null ? deserializeAws_json1_1PutRecordsResultEntryList(output.Records, context) : void 0
  };
};
var deserializeAws_json1_1PutRecordsResultEntry = function(output, context) {
  return {
    ErrorCode: output.ErrorCode !== void 0 && output.ErrorCode !== null ? output.ErrorCode : void 0,
    ErrorMessage: output.ErrorMessage !== void 0 && output.ErrorMessage !== null ? output.ErrorMessage : void 0,
    SequenceNumber: output.SequenceNumber !== void 0 && output.SequenceNumber !== null ? output.SequenceNumber : void 0,
    ShardId: output.ShardId !== void 0 && output.ShardId !== null ? output.ShardId : void 0
  };
};
var deserializeAws_json1_1PutRecordsResultEntryList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1PutRecordsResultEntry(entry, context);
  });
};
var deserializeAws_json1_1ResourceNotFoundException = function(output, context) {
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
var buildHttpRpcRequest = function(context, headers, path, resolvedHostname, body) {
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

// ../../node_modules/@aws-sdk/client-kinesis/dist/es/commands/PutRecordsCommand.js
var PutRecordsCommand = function(_super) {
  __extends3(PutRecordsCommand2, _super);
  function PutRecordsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  PutRecordsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger11 = configuration.logger;
    var clientName = "KinesisClient";
    var commandName = "PutRecordsCommand";
    var handlerExecutionContext = {
      logger: logger11,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordsInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutRecordsOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutRecordsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1PutRecordsCommand(input, context);
  };
  PutRecordsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1PutRecordsCommand(output, context);
  };
  return PutRecordsCommand2;
}(Command);

// src/Providers/AWSKinesisProvider.ts
var import_util_utf8_browser3 = __toModule(require_cjs());
var logger7 = new Logger7("AWSKinesisProvider");
var BUFFER_SIZE2 = 1e3;
var FLUSH_SIZE2 = 100;
var FLUSH_INTERVAL2 = 5 * 1e3;
var RESEND_LIMIT2 = 5;
var AWSKinesisProvider = class {
  constructor(config) {
    this._buffer = [];
    this._config = config || {};
    this._config.bufferSize = this._config.bufferSize || BUFFER_SIZE2;
    this._config.flushSize = this._config.flushSize || FLUSH_SIZE2;
    this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL2;
    this._config.resendLimit = this._config.resendLimit || RESEND_LIMIT2;
    this._setupTimer();
  }
  _setupTimer() {
    if (this._timer) {
      clearInterval(this._timer);
    }
    const { flushSize, flushInterval } = this._config;
    this._timer = setInterval(() => {
      const size = this._buffer.length < flushSize ? this._buffer.length : flushSize;
      const events = [];
      for (let i = 0; i < size; i += 1) {
        const params = this._buffer.shift();
        events.push(params);
      }
      this._sendFromBuffer(events);
    }, flushInterval);
  }
  getCategory() {
    return "Analytics";
  }
  getProviderName() {
    return "AWSKinesis";
  }
  configure(config) {
    logger7.debug("configure Analytics", config);
    const conf = config || {};
    this._config = Object.assign({}, this._config, conf);
    this._setupTimer();
    return this._config;
  }
  async record(params) {
    const credentials = await this._getCredentials();
    if (!credentials)
      return Promise.resolve(false);
    Object.assign(params, { config: this._config, credentials });
    return this._putToBuffer(params);
  }
  updateEndpoint() {
    logger7.debug("updateEndpoint is not implemented in Kinesis provider");
    return Promise.resolve(true);
  }
  _putToBuffer(params) {
    if (this._buffer.length < BUFFER_SIZE2) {
      this._buffer.push(params);
      return Promise.resolve(true);
    } else {
      logger7.debug("exceed analytics events buffer size");
      return Promise.reject(false);
    }
  }
  _sendFromBuffer(events) {
    const eventsGroups = [];
    let preCred = null;
    let group = [];
    for (let i = 0; i < events.length; i += 1) {
      const cred = events[i].credentials;
      if (i === 0) {
        group.push(events[i]);
        preCred = cred;
      } else {
        if (cred.sessionToken === preCred.sessionToken && cred.identityId === preCred.identityId) {
          logger7.debug("no change for cred, put event in the same group");
          group.push(events[i]);
        } else {
          eventsGroups.push(group);
          group = [];
          group.push(events[i]);
          preCred = cred;
        }
      }
    }
    eventsGroups.push(group);
    eventsGroups.map((evts) => {
      this._sendEvents(evts);
    });
  }
  _sendEvents(group) {
    if (group.length === 0) {
      return;
    }
    const { config, credentials } = group[0];
    const initClients = this._init(config, credentials);
    if (!initClients)
      return false;
    const records = {};
    group.map((params) => {
      const evt = params.event;
      const { streamName } = evt;
      if (records[streamName] === void 0) {
        records[streamName] = [];
      }
      const bufferData = evt.data && typeof evt.data !== "string" ? JSON.stringify(evt.data) : evt.data;
      const Data = (0, import_util_utf8_browser3.fromUtf8)(bufferData);
      const PartitionKey = evt.partitionKey || "partition-" + credentials.identityId;
      const record = { Data, PartitionKey };
      records[streamName].push(record);
    });
    Object.keys(records).map(async (streamName) => {
      logger7.debug("putting records to kinesis with records", records[streamName]);
      try {
        const command = new PutRecordsCommand({
          Records: records[streamName],
          StreamName: streamName
        });
        await this._kinesis.send(command);
        logger7.debug("Upload records to stream", streamName);
      } catch (err) {
        logger7.debug("Failed to upload records to Kinesis", err);
      }
    });
  }
  _init(config, credentials) {
    logger7.debug("init clients");
    if (this._kinesis && this._config.credentials && this._config.credentials.sessionToken === credentials.sessionToken && this._config.credentials.identityId === credentials.identityId) {
      logger7.debug("no change for analytics config, directly return from init");
      return true;
    }
    this._config.credentials = credentials;
    const { region, endpoint } = config;
    return this._initKinesis(region, endpoint, credentials);
  }
  _initKinesis(region, endpoint, credentials) {
    logger7.debug("initialize kinesis with credentials", credentials);
    this._kinesis = new KinesisClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent2(),
      endpoint
    });
    return true;
  }
  _getCredentials() {
    return Credentials2.get().then((credentials) => {
      if (!credentials)
        return null;
      logger7.debug("set credentials for analytics", this._config.credentials);
      return Credentials2.shear(credentials);
    }).catch((err) => {
      logger7.debug("ensure credentials error", err);
      return null;
    });
  }
};

// src/Providers/AWSKinesisFirehoseProvider.ts
import { ConsoleLogger as Logger8 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-firehose/node_modules/tslib/modules/index.js
var import_tslib55 = __toModule(require_tslib4());
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
} = import_tslib55.default;

// ../../node_modules/@aws-sdk/client-firehose/dist/es/package.json
var name3 = "@aws-sdk/client-firehose";
var description3 = "AWS SDK for JavaScript Firehose Client for Node.js, Browser and React Native";
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
var homepage3 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-firehose";
var repository3 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-firehose"
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

// ../../node_modules/@aws-sdk/client-firehose/dist/es/runtimeConfig.browser.js
var import_sha256_browser3 = __toModule(require_build5());
var import_util_utf8_browser4 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-firehose/dist/es/endpoints.js
var AWS_TEMPLATE3 = "firehose.{region}.amazonaws.com";
var AWS_CN_TEMPLATE3 = "firehose.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE3 = "firehose.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE3 = "firehose.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE3 = "firehose.{region}.amazonaws.com";
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
    case "af-south-1":
      regionInfo = {
        hostname: "firehose.af-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-east-1":
      regionInfo = {
        hostname: "firehose.ap-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "firehose.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "firehose.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "firehose.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "firehose.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "firehose.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "firehose.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "firehose.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "firehose.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "firehose.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "firehose.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-south-1":
      regionInfo = {
        hostname: "firehose.eu-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "firehose.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "firehose.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "firehose.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      regionInfo = {
        hostname: "firehose-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      regionInfo = {
        hostname: "firehose-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-east-1":
      regionInfo = {
        hostname: "firehose-fips.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-east-1"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "firehose-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-1":
      regionInfo = {
        hostname: "firehose-fips.us-west-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-1"
      };
      break;
    case "fips-us-west-2":
      regionInfo = {
        hostname: "firehose-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "firehose.me-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "firehose.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "firehose.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "firehose.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "firehose.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "firehose.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "firehose.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "firehose.us-west-2.amazonaws.com",
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
  return Promise.resolve(__assign4({ signingService: "firehose" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-firehose/dist/es/runtimeConfig.shared.js
var ClientSharedValues3 = {
  apiVersion: "2015-08-04",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider3,
  serviceId: "Firehose",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-firehose/dist/es/runtimeConfig.browser.js
var ClientDefaultValues3 = __assign4(__assign4({}, ClientSharedValues3), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues3.serviceId,
  clientVersion: package_default3.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser3.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser4.fromUtf8, utf8Encoder: import_util_utf8_browser4.toUtf8 });

// ../../node_modules/@aws-sdk/client-firehose/dist/es/FirehoseClient.js
var FirehoseClient = function(_super) {
  __extends4(FirehoseClient2, _super);
  function FirehoseClient2(configuration) {
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
  FirehoseClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return FirehoseClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-firehose/dist/es/models/models_0.js
var BufferingHints;
(function(BufferingHints2) {
  BufferingHints2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(BufferingHints || (BufferingHints = {}));
var CloudWatchLoggingOptions;
(function(CloudWatchLoggingOptions2) {
  CloudWatchLoggingOptions2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CloudWatchLoggingOptions || (CloudWatchLoggingOptions = {}));
var CompressionFormat;
(function(CompressionFormat2) {
  CompressionFormat2["GZIP"] = "GZIP";
  CompressionFormat2["HADOOP_SNAPPY"] = "HADOOP_SNAPPY";
  CompressionFormat2["SNAPPY"] = "Snappy";
  CompressionFormat2["UNCOMPRESSED"] = "UNCOMPRESSED";
  CompressionFormat2["ZIP"] = "ZIP";
})(CompressionFormat || (CompressionFormat = {}));
var ConcurrentModificationException;
(function(ConcurrentModificationException2) {
  ConcurrentModificationException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
var ContentEncoding;
(function(ContentEncoding2) {
  ContentEncoding2["GZIP"] = "GZIP";
  ContentEncoding2["NONE"] = "NONE";
})(ContentEncoding || (ContentEncoding = {}));
var CopyCommand;
(function(CopyCommand2) {
  CopyCommand2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CopyCommand || (CopyCommand = {}));
var KeyType;
(function(KeyType2) {
  KeyType2["AWS_OWNED_CMK"] = "AWS_OWNED_CMK";
  KeyType2["CUSTOMER_MANAGED_CMK"] = "CUSTOMER_MANAGED_CMK";
})(KeyType || (KeyType = {}));
var DeliveryStreamEncryptionConfigurationInput;
(function(DeliveryStreamEncryptionConfigurationInput2) {
  DeliveryStreamEncryptionConfigurationInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeliveryStreamEncryptionConfigurationInput || (DeliveryStreamEncryptionConfigurationInput = {}));
var ElasticsearchBufferingHints;
(function(ElasticsearchBufferingHints2) {
  ElasticsearchBufferingHints2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ElasticsearchBufferingHints || (ElasticsearchBufferingHints = {}));
var ProcessorParameterName;
(function(ProcessorParameterName2) {
  ProcessorParameterName2["BUFFER_INTERVAL_IN_SECONDS"] = "BufferIntervalInSeconds";
  ProcessorParameterName2["BUFFER_SIZE_IN_MB"] = "BufferSizeInMBs";
  ProcessorParameterName2["LAMBDA_ARN"] = "LambdaArn";
  ProcessorParameterName2["LAMBDA_NUMBER_OF_RETRIES"] = "NumberOfRetries";
  ProcessorParameterName2["ROLE_ARN"] = "RoleArn";
})(ProcessorParameterName || (ProcessorParameterName = {}));
var ProcessorParameter;
(function(ProcessorParameter2) {
  ProcessorParameter2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProcessorParameter || (ProcessorParameter = {}));
var Processor;
(function(Processor2) {
  Processor2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Processor || (Processor = {}));
var ProcessingConfiguration;
(function(ProcessingConfiguration2) {
  ProcessingConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ProcessingConfiguration || (ProcessingConfiguration = {}));
var ElasticsearchRetryOptions;
(function(ElasticsearchRetryOptions2) {
  ElasticsearchRetryOptions2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ElasticsearchRetryOptions || (ElasticsearchRetryOptions = {}));
var KMSEncryptionConfig;
(function(KMSEncryptionConfig2) {
  KMSEncryptionConfig2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(KMSEncryptionConfig || (KMSEncryptionConfig = {}));
var EncryptionConfiguration;
(function(EncryptionConfiguration2) {
  EncryptionConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(EncryptionConfiguration || (EncryptionConfiguration = {}));
var S3DestinationConfiguration;
(function(S3DestinationConfiguration2) {
  S3DestinationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(S3DestinationConfiguration || (S3DestinationConfiguration = {}));
var VpcConfiguration;
(function(VpcConfiguration2) {
  VpcConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(VpcConfiguration || (VpcConfiguration = {}));
var ElasticsearchDestinationConfiguration;
(function(ElasticsearchDestinationConfiguration2) {
  ElasticsearchDestinationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ElasticsearchDestinationConfiguration || (ElasticsearchDestinationConfiguration = {}));
var HiveJsonSerDe;
(function(HiveJsonSerDe2) {
  HiveJsonSerDe2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HiveJsonSerDe || (HiveJsonSerDe = {}));
var OpenXJsonSerDe;
(function(OpenXJsonSerDe2) {
  OpenXJsonSerDe2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(OpenXJsonSerDe || (OpenXJsonSerDe = {}));
var Deserializer;
(function(Deserializer2) {
  Deserializer2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Deserializer || (Deserializer = {}));
var InputFormatConfiguration;
(function(InputFormatConfiguration2) {
  InputFormatConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InputFormatConfiguration || (InputFormatConfiguration = {}));
var OrcCompression;
(function(OrcCompression2) {
  OrcCompression2["NONE"] = "NONE";
  OrcCompression2["SNAPPY"] = "SNAPPY";
  OrcCompression2["ZLIB"] = "ZLIB";
})(OrcCompression || (OrcCompression = {}));
var OrcFormatVersion;
(function(OrcFormatVersion2) {
  OrcFormatVersion2["V0_11"] = "V0_11";
  OrcFormatVersion2["V0_12"] = "V0_12";
})(OrcFormatVersion || (OrcFormatVersion = {}));
var OrcSerDe;
(function(OrcSerDe2) {
  OrcSerDe2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(OrcSerDe || (OrcSerDe = {}));
var ParquetCompression;
(function(ParquetCompression2) {
  ParquetCompression2["GZIP"] = "GZIP";
  ParquetCompression2["SNAPPY"] = "SNAPPY";
  ParquetCompression2["UNCOMPRESSED"] = "UNCOMPRESSED";
})(ParquetCompression || (ParquetCompression = {}));
var ParquetWriterVersion;
(function(ParquetWriterVersion2) {
  ParquetWriterVersion2["V1"] = "V1";
  ParquetWriterVersion2["V2"] = "V2";
})(ParquetWriterVersion || (ParquetWriterVersion = {}));
var ParquetSerDe;
(function(ParquetSerDe2) {
  ParquetSerDe2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ParquetSerDe || (ParquetSerDe = {}));
var Serializer;
(function(Serializer2) {
  Serializer2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Serializer || (Serializer = {}));
var OutputFormatConfiguration;
(function(OutputFormatConfiguration2) {
  OutputFormatConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(OutputFormatConfiguration || (OutputFormatConfiguration = {}));
var SchemaConfiguration;
(function(SchemaConfiguration2) {
  SchemaConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SchemaConfiguration || (SchemaConfiguration = {}));
var DataFormatConversionConfiguration;
(function(DataFormatConversionConfiguration2) {
  DataFormatConversionConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DataFormatConversionConfiguration || (DataFormatConversionConfiguration = {}));
var ExtendedS3DestinationConfiguration;
(function(ExtendedS3DestinationConfiguration2) {
  ExtendedS3DestinationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ExtendedS3DestinationConfiguration || (ExtendedS3DestinationConfiguration = {}));
var HttpEndpointBufferingHints;
(function(HttpEndpointBufferingHints2) {
  HttpEndpointBufferingHints2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HttpEndpointBufferingHints || (HttpEndpointBufferingHints = {}));
var HttpEndpointConfiguration;
(function(HttpEndpointConfiguration2) {
  HttpEndpointConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.Url && { Url: SENSITIVE_STRING }), obj.AccessKey && { AccessKey: SENSITIVE_STRING });
  };
})(HttpEndpointConfiguration || (HttpEndpointConfiguration = {}));
var HttpEndpointCommonAttribute;
(function(HttpEndpointCommonAttribute2) {
  HttpEndpointCommonAttribute2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.AttributeName && { AttributeName: SENSITIVE_STRING }), obj.AttributeValue && { AttributeValue: SENSITIVE_STRING });
  };
})(HttpEndpointCommonAttribute || (HttpEndpointCommonAttribute = {}));
var HttpEndpointRequestConfiguration;
(function(HttpEndpointRequestConfiguration2) {
  HttpEndpointRequestConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4({}, obj), obj.CommonAttributes && {
      CommonAttributes: obj.CommonAttributes.map(function(item) {
        return HttpEndpointCommonAttribute.filterSensitiveLog(item);
      })
    });
  };
})(HttpEndpointRequestConfiguration || (HttpEndpointRequestConfiguration = {}));
var HttpEndpointRetryOptions;
(function(HttpEndpointRetryOptions2) {
  HttpEndpointRetryOptions2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(HttpEndpointRetryOptions || (HttpEndpointRetryOptions = {}));
var HttpEndpointDestinationConfiguration;
(function(HttpEndpointDestinationConfiguration2) {
  HttpEndpointDestinationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.EndpointConfiguration && {
      EndpointConfiguration: HttpEndpointConfiguration.filterSensitiveLog(obj.EndpointConfiguration)
    }), obj.RequestConfiguration && {
      RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration)
    });
  };
})(HttpEndpointDestinationConfiguration || (HttpEndpointDestinationConfiguration = {}));
var KinesisStreamSourceConfiguration;
(function(KinesisStreamSourceConfiguration2) {
  KinesisStreamSourceConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(KinesisStreamSourceConfiguration || (KinesisStreamSourceConfiguration = {}));
var RedshiftRetryOptions;
(function(RedshiftRetryOptions2) {
  RedshiftRetryOptions2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(RedshiftRetryOptions || (RedshiftRetryOptions = {}));
var RedshiftDestinationConfiguration;
(function(RedshiftDestinationConfiguration2) {
  RedshiftDestinationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.Username && { Username: SENSITIVE_STRING }), obj.Password && { Password: SENSITIVE_STRING });
  };
})(RedshiftDestinationConfiguration || (RedshiftDestinationConfiguration = {}));
var SplunkRetryOptions;
(function(SplunkRetryOptions2) {
  SplunkRetryOptions2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SplunkRetryOptions || (SplunkRetryOptions = {}));
var SplunkDestinationConfiguration;
(function(SplunkDestinationConfiguration2) {
  SplunkDestinationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SplunkDestinationConfiguration || (SplunkDestinationConfiguration = {}));
var Tag2;
(function(Tag3) {
  Tag3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(Tag2 || (Tag2 = {}));
var CreateDeliveryStreamInput;
(function(CreateDeliveryStreamInput2) {
  CreateDeliveryStreamInput2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.RedshiftDestinationConfiguration && {
      RedshiftDestinationConfiguration: RedshiftDestinationConfiguration.filterSensitiveLog(obj.RedshiftDestinationConfiguration)
    }), obj.HttpEndpointDestinationConfiguration && {
      HttpEndpointDestinationConfiguration: HttpEndpointDestinationConfiguration.filterSensitiveLog(obj.HttpEndpointDestinationConfiguration)
    });
  };
})(CreateDeliveryStreamInput || (CreateDeliveryStreamInput = {}));
var CreateDeliveryStreamOutput;
(function(CreateDeliveryStreamOutput2) {
  CreateDeliveryStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(CreateDeliveryStreamOutput || (CreateDeliveryStreamOutput = {}));
var InvalidArgumentException2;
(function(InvalidArgumentException3) {
  InvalidArgumentException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidArgumentException2 || (InvalidArgumentException2 = {}));
var InvalidKMSResourceException;
(function(InvalidKMSResourceException2) {
  InvalidKMSResourceException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(InvalidKMSResourceException || (InvalidKMSResourceException = {}));
var LimitExceededException2;
(function(LimitExceededException3) {
  LimitExceededException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(LimitExceededException2 || (LimitExceededException2 = {}));
var ResourceInUseException2;
(function(ResourceInUseException3) {
  ResourceInUseException3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceInUseException2 || (ResourceInUseException2 = {}));
var DeleteDeliveryStreamInput;
(function(DeleteDeliveryStreamInput2) {
  DeleteDeliveryStreamInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteDeliveryStreamInput || (DeleteDeliveryStreamInput = {}));
var DeleteDeliveryStreamOutput;
(function(DeleteDeliveryStreamOutput2) {
  DeleteDeliveryStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeleteDeliveryStreamOutput || (DeleteDeliveryStreamOutput = {}));
var ResourceNotFoundException2;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ResourceNotFoundException2 || (ResourceNotFoundException2 = {}));
var DeliveryStreamFailureType;
(function(DeliveryStreamFailureType2) {
  DeliveryStreamFailureType2["CREATE_ENI_FAILED"] = "CREATE_ENI_FAILED";
  DeliveryStreamFailureType2["CREATE_KMS_GRANT_FAILED"] = "CREATE_KMS_GRANT_FAILED";
  DeliveryStreamFailureType2["DELETE_ENI_FAILED"] = "DELETE_ENI_FAILED";
  DeliveryStreamFailureType2["DISABLED_KMS_KEY"] = "DISABLED_KMS_KEY";
  DeliveryStreamFailureType2["ENI_ACCESS_DENIED"] = "ENI_ACCESS_DENIED";
  DeliveryStreamFailureType2["INVALID_KMS_KEY"] = "INVALID_KMS_KEY";
  DeliveryStreamFailureType2["KMS_ACCESS_DENIED"] = "KMS_ACCESS_DENIED";
  DeliveryStreamFailureType2["KMS_KEY_NOT_FOUND"] = "KMS_KEY_NOT_FOUND";
  DeliveryStreamFailureType2["KMS_OPT_IN_REQUIRED"] = "KMS_OPT_IN_REQUIRED";
  DeliveryStreamFailureType2["RETIRE_KMS_GRANT_FAILED"] = "RETIRE_KMS_GRANT_FAILED";
  DeliveryStreamFailureType2["SECURITY_GROUP_ACCESS_DENIED"] = "SECURITY_GROUP_ACCESS_DENIED";
  DeliveryStreamFailureType2["SECURITY_GROUP_NOT_FOUND"] = "SECURITY_GROUP_NOT_FOUND";
  DeliveryStreamFailureType2["SUBNET_ACCESS_DENIED"] = "SUBNET_ACCESS_DENIED";
  DeliveryStreamFailureType2["SUBNET_NOT_FOUND"] = "SUBNET_NOT_FOUND";
  DeliveryStreamFailureType2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(DeliveryStreamFailureType || (DeliveryStreamFailureType = {}));
var FailureDescription;
(function(FailureDescription2) {
  FailureDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(FailureDescription || (FailureDescription = {}));
var DeliveryStreamEncryptionStatus;
(function(DeliveryStreamEncryptionStatus2) {
  DeliveryStreamEncryptionStatus2["DISABLED"] = "DISABLED";
  DeliveryStreamEncryptionStatus2["DISABLING"] = "DISABLING";
  DeliveryStreamEncryptionStatus2["DISABLING_FAILED"] = "DISABLING_FAILED";
  DeliveryStreamEncryptionStatus2["ENABLED"] = "ENABLED";
  DeliveryStreamEncryptionStatus2["ENABLING"] = "ENABLING";
  DeliveryStreamEncryptionStatus2["ENABLING_FAILED"] = "ENABLING_FAILED";
})(DeliveryStreamEncryptionStatus || (DeliveryStreamEncryptionStatus = {}));
var DeliveryStreamEncryptionConfiguration;
(function(DeliveryStreamEncryptionConfiguration2) {
  DeliveryStreamEncryptionConfiguration2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DeliveryStreamEncryptionConfiguration || (DeliveryStreamEncryptionConfiguration = {}));
var DeliveryStreamStatus;
(function(DeliveryStreamStatus2) {
  DeliveryStreamStatus2["ACTIVE"] = "ACTIVE";
  DeliveryStreamStatus2["CREATING"] = "CREATING";
  DeliveryStreamStatus2["CREATING_FAILED"] = "CREATING_FAILED";
  DeliveryStreamStatus2["DELETING"] = "DELETING";
  DeliveryStreamStatus2["DELETING_FAILED"] = "DELETING_FAILED";
})(DeliveryStreamStatus || (DeliveryStreamStatus = {}));
var S3DestinationDescription;
(function(S3DestinationDescription2) {
  S3DestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(S3DestinationDescription || (S3DestinationDescription = {}));
var VpcConfigurationDescription;
(function(VpcConfigurationDescription2) {
  VpcConfigurationDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(VpcConfigurationDescription || (VpcConfigurationDescription = {}));
var ElasticsearchDestinationDescription;
(function(ElasticsearchDestinationDescription2) {
  ElasticsearchDestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ElasticsearchDestinationDescription || (ElasticsearchDestinationDescription = {}));
var ExtendedS3DestinationDescription;
(function(ExtendedS3DestinationDescription2) {
  ExtendedS3DestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ExtendedS3DestinationDescription || (ExtendedS3DestinationDescription = {}));
var HttpEndpointDescription;
(function(HttpEndpointDescription2) {
  HttpEndpointDescription2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4({}, obj), obj.Url && { Url: SENSITIVE_STRING });
  };
})(HttpEndpointDescription || (HttpEndpointDescription = {}));
var HttpEndpointDestinationDescription;
(function(HttpEndpointDestinationDescription2) {
  HttpEndpointDestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.EndpointConfiguration && {
      EndpointConfiguration: HttpEndpointDescription.filterSensitiveLog(obj.EndpointConfiguration)
    }), obj.RequestConfiguration && {
      RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration)
    });
  };
})(HttpEndpointDestinationDescription || (HttpEndpointDestinationDescription = {}));
var RedshiftDestinationDescription;
(function(RedshiftDestinationDescription2) {
  RedshiftDestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4({}, obj), obj.Username && { Username: SENSITIVE_STRING });
  };
})(RedshiftDestinationDescription || (RedshiftDestinationDescription = {}));
var SplunkDestinationDescription;
(function(SplunkDestinationDescription2) {
  SplunkDestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SplunkDestinationDescription || (SplunkDestinationDescription = {}));
var DestinationDescription;
(function(DestinationDescription2) {
  DestinationDescription2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.RedshiftDestinationDescription && {
      RedshiftDestinationDescription: RedshiftDestinationDescription.filterSensitiveLog(obj.RedshiftDestinationDescription)
    }), obj.HttpEndpointDestinationDescription && {
      HttpEndpointDestinationDescription: HttpEndpointDestinationDescription.filterSensitiveLog(obj.HttpEndpointDestinationDescription)
    });
  };
})(DestinationDescription || (DestinationDescription = {}));
var KinesisStreamSourceDescription;
(function(KinesisStreamSourceDescription2) {
  KinesisStreamSourceDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(KinesisStreamSourceDescription || (KinesisStreamSourceDescription = {}));
var SourceDescription;
(function(SourceDescription2) {
  SourceDescription2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SourceDescription || (SourceDescription = {}));
var DeliveryStreamDescription;
(function(DeliveryStreamDescription2) {
  DeliveryStreamDescription2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4({}, obj), obj.Destinations && {
      Destinations: obj.Destinations.map(function(item) {
        return DestinationDescription.filterSensitiveLog(item);
      })
    });
  };
})(DeliveryStreamDescription || (DeliveryStreamDescription = {}));
var DescribeDeliveryStreamInput;
(function(DescribeDeliveryStreamInput2) {
  DescribeDeliveryStreamInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(DescribeDeliveryStreamInput || (DescribeDeliveryStreamInput = {}));
var DescribeDeliveryStreamOutput;
(function(DescribeDeliveryStreamOutput2) {
  DescribeDeliveryStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4({}, obj), obj.DeliveryStreamDescription && {
      DeliveryStreamDescription: DeliveryStreamDescription.filterSensitiveLog(obj.DeliveryStreamDescription)
    });
  };
})(DescribeDeliveryStreamOutput || (DescribeDeliveryStreamOutput = {}));
var S3DestinationUpdate;
(function(S3DestinationUpdate2) {
  S3DestinationUpdate2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(S3DestinationUpdate || (S3DestinationUpdate = {}));
var ElasticsearchDestinationUpdate;
(function(ElasticsearchDestinationUpdate2) {
  ElasticsearchDestinationUpdate2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ElasticsearchDestinationUpdate || (ElasticsearchDestinationUpdate = {}));
var ExtendedS3DestinationUpdate;
(function(ExtendedS3DestinationUpdate2) {
  ExtendedS3DestinationUpdate2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ExtendedS3DestinationUpdate || (ExtendedS3DestinationUpdate = {}));
var ListDeliveryStreamsInput;
(function(ListDeliveryStreamsInput2) {
  ListDeliveryStreamsInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListDeliveryStreamsInput || (ListDeliveryStreamsInput = {}));
var ListDeliveryStreamsOutput;
(function(ListDeliveryStreamsOutput2) {
  ListDeliveryStreamsOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListDeliveryStreamsOutput || (ListDeliveryStreamsOutput = {}));
var ListTagsForDeliveryStreamInput;
(function(ListTagsForDeliveryStreamInput2) {
  ListTagsForDeliveryStreamInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListTagsForDeliveryStreamInput || (ListTagsForDeliveryStreamInput = {}));
var ListTagsForDeliveryStreamOutput;
(function(ListTagsForDeliveryStreamOutput2) {
  ListTagsForDeliveryStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ListTagsForDeliveryStreamOutput || (ListTagsForDeliveryStreamOutput = {}));
var _Record2;
(function(_Record3) {
  _Record3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(_Record2 || (_Record2 = {}));
var PutRecordInput2;
(function(PutRecordInput3) {
  PutRecordInput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PutRecordInput2 || (PutRecordInput2 = {}));
var PutRecordOutput2;
(function(PutRecordOutput3) {
  PutRecordOutput3.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PutRecordOutput2 || (PutRecordOutput2 = {}));
var ServiceUnavailableException;
(function(ServiceUnavailableException2) {
  ServiceUnavailableException2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
var PutRecordBatchInput;
(function(PutRecordBatchInput2) {
  PutRecordBatchInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PutRecordBatchInput || (PutRecordBatchInput = {}));
var PutRecordBatchResponseEntry;
(function(PutRecordBatchResponseEntry2) {
  PutRecordBatchResponseEntry2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PutRecordBatchResponseEntry || (PutRecordBatchResponseEntry = {}));
var PutRecordBatchOutput;
(function(PutRecordBatchOutput2) {
  PutRecordBatchOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(PutRecordBatchOutput || (PutRecordBatchOutput = {}));
var StartDeliveryStreamEncryptionInput;
(function(StartDeliveryStreamEncryptionInput2) {
  StartDeliveryStreamEncryptionInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartDeliveryStreamEncryptionInput || (StartDeliveryStreamEncryptionInput = {}));
var StartDeliveryStreamEncryptionOutput;
(function(StartDeliveryStreamEncryptionOutput2) {
  StartDeliveryStreamEncryptionOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StartDeliveryStreamEncryptionOutput || (StartDeliveryStreamEncryptionOutput = {}));
var StopDeliveryStreamEncryptionInput;
(function(StopDeliveryStreamEncryptionInput2) {
  StopDeliveryStreamEncryptionInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StopDeliveryStreamEncryptionInput || (StopDeliveryStreamEncryptionInput = {}));
var StopDeliveryStreamEncryptionOutput;
(function(StopDeliveryStreamEncryptionOutput2) {
  StopDeliveryStreamEncryptionOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(StopDeliveryStreamEncryptionOutput || (StopDeliveryStreamEncryptionOutput = {}));
var TagDeliveryStreamInput;
(function(TagDeliveryStreamInput2) {
  TagDeliveryStreamInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TagDeliveryStreamInput || (TagDeliveryStreamInput = {}));
var TagDeliveryStreamOutput;
(function(TagDeliveryStreamOutput2) {
  TagDeliveryStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(TagDeliveryStreamOutput || (TagDeliveryStreamOutput = {}));
var UntagDeliveryStreamInput;
(function(UntagDeliveryStreamInput2) {
  UntagDeliveryStreamInput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UntagDeliveryStreamInput || (UntagDeliveryStreamInput = {}));
var UntagDeliveryStreamOutput;
(function(UntagDeliveryStreamOutput2) {
  UntagDeliveryStreamOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UntagDeliveryStreamOutput || (UntagDeliveryStreamOutput = {}));
var HttpEndpointDestinationUpdate;
(function(HttpEndpointDestinationUpdate2) {
  HttpEndpointDestinationUpdate2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.EndpointConfiguration && {
      EndpointConfiguration: HttpEndpointConfiguration.filterSensitiveLog(obj.EndpointConfiguration)
    }), obj.RequestConfiguration && {
      RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration)
    });
  };
})(HttpEndpointDestinationUpdate || (HttpEndpointDestinationUpdate = {}));
var RedshiftDestinationUpdate;
(function(RedshiftDestinationUpdate2) {
  RedshiftDestinationUpdate2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.Username && { Username: SENSITIVE_STRING }), obj.Password && { Password: SENSITIVE_STRING });
  };
})(RedshiftDestinationUpdate || (RedshiftDestinationUpdate = {}));
var SplunkDestinationUpdate;
(function(SplunkDestinationUpdate2) {
  SplunkDestinationUpdate2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(SplunkDestinationUpdate || (SplunkDestinationUpdate = {}));
var UpdateDestinationInput;
(function(UpdateDestinationInput2) {
  UpdateDestinationInput2.filterSensitiveLog = function(obj) {
    return __assign4(__assign4(__assign4({}, obj), obj.RedshiftDestinationUpdate && {
      RedshiftDestinationUpdate: RedshiftDestinationUpdate.filterSensitiveLog(obj.RedshiftDestinationUpdate)
    }), obj.HttpEndpointDestinationUpdate && {
      HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdate.filterSensitiveLog(obj.HttpEndpointDestinationUpdate)
    });
  };
})(UpdateDestinationInput || (UpdateDestinationInput = {}));
var UpdateDestinationOutput;
(function(UpdateDestinationOutput2) {
  UpdateDestinationOutput2.filterSensitiveLog = function(obj) {
    return __assign4({}, obj);
  };
})(UpdateDestinationOutput || (UpdateDestinationOutput = {}));

// ../../node_modules/@aws-sdk/client-firehose/dist/es/protocols/Aws_json1_1.js
var serializeAws_json1_1PutRecordBatchCommand = function(input, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var headers, body;
    return __generator4(this, function(_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Firehose_20150804.PutRecordBatch"
      };
      body = JSON.stringify(serializeAws_json1_1PutRecordBatchInput(input, context));
      return [2, buildHttpRpcRequest2(context, headers, "/", void 0, body)];
    });
  });
};
var deserializeAws_json1_1PutRecordBatchCommand = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var data, contents, response;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2, deserializeAws_json1_1PutRecordBatchCommandError(output, context)];
          }
          return [4, parseBody3(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutRecordBatchOutput(data, context);
          response = __assign4({ $metadata: deserializeMetadata3(output) }, contents);
          return [2, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutRecordBatchCommandError = function(output, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator4(this, function(_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign4({}, output)];
          _g = {};
          return [4, parseBody3(output.body, context)];
        case 1:
          parsedOutput = __assign4.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgumentException":
              return [3, 2];
            case "com.amazonaws.firehose#InvalidArgumentException":
              return [3, 2];
            case "InvalidKMSResourceException":
              return [3, 4];
            case "com.amazonaws.firehose#InvalidKMSResourceException":
              return [3, 4];
            case "ResourceNotFoundException":
              return [3, 6];
            case "com.amazonaws.firehose#ResourceNotFoundException":
              return [3, 6];
            case "ServiceUnavailableException":
              return [3, 8];
            case "com.amazonaws.firehose#ServiceUnavailableException":
              return [3, 8];
          }
          return [3, 10];
        case 2:
          _c = [{}];
          return [4, deserializeAws_json1_1InvalidArgumentExceptionResponse2(parsedOutput, context)];
        case 3:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _c.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 11];
        case 4:
          _d = [{}];
          return [4, deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _d.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 11];
        case 6:
          _e = [{}];
          return [4, deserializeAws_json1_1ResourceNotFoundExceptionResponse2(parsedOutput, context)];
        case 7:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _e.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 11];
        case 8:
          _f = [{}];
          return [4, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign4.apply(void 0, [__assign4.apply(void 0, _f.concat([_h.sent()])), { name: errorCode, $metadata: deserializeMetadata3(output) }]);
          return [3, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign4(__assign4({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata3(output) });
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
var deserializeAws_json1_1InvalidArgumentExceptionResponse2 = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidArgumentException2(body, context);
      contents = __assign4({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var deserializeAws_json1_1InvalidKMSResourceExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidKMSResourceException(body, context);
      contents = __assign4({ name: "InvalidKMSResourceException", $fault: "client", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ServiceUnavailableExceptionResponse = function(parsedOutput, context) {
  return __awaiter4(void 0, void 0, void 0, function() {
    var body, deserialized, contents;
    return __generator4(this, function(_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
      contents = __assign4({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata3(parsedOutput) }, deserialized);
      return [2, contents];
    });
  });
};
var serializeAws_json1_1PutRecordBatchInput = function(input, context) {
  return __assign4(__assign4({}, input.DeliveryStreamName !== void 0 && input.DeliveryStreamName !== null && { DeliveryStreamName: input.DeliveryStreamName }), input.Records !== void 0 && input.Records !== null && {
    Records: serializeAws_json1_1PutRecordBatchRequestEntryList(input.Records, context)
  });
};
var serializeAws_json1_1PutRecordBatchRequestEntryList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeAws_json1_1_Record(entry, context);
  });
};
var serializeAws_json1_1_Record = function(input, context) {
  return __assign4({}, input.Data !== void 0 && input.Data !== null && { Data: context.base64Encoder(input.Data) });
};
var deserializeAws_json1_1InvalidArgumentException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1InvalidKMSResourceException = function(output, context) {
  return {
    code: output.code !== void 0 && output.code !== null ? output.code : void 0,
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1PutRecordBatchOutput = function(output, context) {
  return {
    Encrypted: output.Encrypted !== void 0 && output.Encrypted !== null ? output.Encrypted : void 0,
    FailedPutCount: output.FailedPutCount !== void 0 && output.FailedPutCount !== null ? output.FailedPutCount : void 0,
    RequestResponses: output.RequestResponses !== void 0 && output.RequestResponses !== null ? deserializeAws_json1_1PutRecordBatchResponseEntryList(output.RequestResponses, context) : void 0
  };
};
var deserializeAws_json1_1PutRecordBatchResponseEntry = function(output, context) {
  return {
    ErrorCode: output.ErrorCode !== void 0 && output.ErrorCode !== null ? output.ErrorCode : void 0,
    ErrorMessage: output.ErrorMessage !== void 0 && output.ErrorMessage !== null ? output.ErrorMessage : void 0,
    RecordId: output.RecordId !== void 0 && output.RecordId !== null ? output.RecordId : void 0
  };
};
var deserializeAws_json1_1PutRecordBatchResponseEntryList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_json1_1PutRecordBatchResponseEntry(entry, context);
  });
};
var deserializeAws_json1_1ResourceNotFoundException2 = function(output, context) {
  return {
    message: output.message !== void 0 && output.message !== null ? output.message : void 0
  };
};
var deserializeAws_json1_1ServiceUnavailableException = function(output, context) {
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

// ../../node_modules/@aws-sdk/client-firehose/dist/es/commands/PutRecordBatchCommand.js
var PutRecordBatchCommand = function(_super) {
  __extends4(PutRecordBatchCommand2, _super);
  function PutRecordBatchCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  PutRecordBatchCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger11 = configuration.logger;
    var clientName = "FirehoseClient";
    var commandName = "PutRecordBatchCommand";
    var handlerExecutionContext = {
      logger: logger11,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordBatchInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutRecordBatchOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutRecordBatchCommand2.prototype.serialize = function(input, context) {
    return serializeAws_json1_1PutRecordBatchCommand(input, context);
  };
  PutRecordBatchCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_json1_1PutRecordBatchCommand(output, context);
  };
  return PutRecordBatchCommand2;
}(Command);

// src/Providers/AWSKinesisFirehoseProvider.ts
var import_util_utf8_browser5 = __toModule(require_cjs());
var logger8 = new Logger8("AWSKineisFirehoseProvider");
var AWSKinesisFirehoseProvider = class extends AWSKinesisProvider {
  constructor(config) {
    super(config);
  }
  getProviderName() {
    return "AWSKinesisFirehose";
  }
  _sendEvents(group) {
    if (group.length === 0) {
      return;
    }
    const { config, credentials } = group[0];
    const initClients = this._init(config, credentials);
    if (!initClients)
      return false;
    const records = {};
    group.map((params) => {
      const evt = params.event;
      const { streamName, data } = evt;
      if (records[streamName] === void 0) {
        records[streamName] = [];
      }
      const bufferData = data && typeof data !== "string" ? JSON.stringify(data) : data;
      const Data = (0, import_util_utf8_browser5.fromUtf8)(bufferData);
      const record = { Data };
      records[streamName].push(record);
    });
    Object.keys(records).map((streamName) => {
      logger8.debug("putting records to kinesis", streamName, "with records", records[streamName]);
      this._kinesisFirehose.send(new PutRecordBatchCommand({
        Records: records[streamName],
        DeliveryStreamName: streamName
      })).then((res) => logger8.debug("Upload records to stream", streamName)).catch((err) => logger8.debug("Failed to upload records to Kinesis", err));
    });
  }
  _init(config, credentials) {
    logger8.debug("init clients");
    if (this._kinesisFirehose && this._config.credentials && this._config.credentials.sessionToken === credentials.sessionToken && this._config.credentials.identityId === credentials.identityId) {
      logger8.debug("no change for analytics config, directly return from init");
      return true;
    }
    this._config.credentials = credentials;
    const { region } = config;
    return this._initFirehose(region, credentials);
  }
  _initFirehose(region, credentials) {
    logger8.debug("initialize kinesis firehose with credentials", credentials);
    this._kinesisFirehose = new FirehoseClient({
      apiVersion: "2015-08-04",
      region,
      credentials
    });
    return true;
  }
};

// src/Providers/AmazonPersonalizeProvider.ts
import {
  ConsoleLogger as Logger10,
  Credentials as Credentials3,
  JS as JS7,
  getAmplifyUserAgent as getAmplifyUserAgent3
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-personalize-events/node_modules/tslib/modules/index.js
var import_tslib62 = __toModule(require_tslib5());
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
} = import_tslib62.default;

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/package.json
var name4 = "@aws-sdk/client-personalize-events";
var description4 = "AWS SDK for JavaScript Personalize Events Client for Node.js, Browser and React Native";
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
var homepage4 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-personalize-events";
var repository4 = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-personalize-events"
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

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/runtimeConfig.browser.js
var import_sha256_browser4 = __toModule(require_build5());
var import_util_utf8_browser6 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/endpoints.js
var AWS_TEMPLATE4 = "personalize-events.{region}.amazonaws.com";
var AWS_CN_TEMPLATE4 = "personalize-events.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE4 = "personalize-events.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE4 = "personalize-events.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE4 = "personalize-events.{region}.amazonaws.com";
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
  return Promise.resolve(__assign5({ signingService: "personalize" }, regionInfo));
};

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/runtimeConfig.shared.js
var ClientSharedValues4 = {
  apiVersion: "2018-03-22",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider4,
  serviceId: "Personalize Events",
  urlParser: parseUrl
};

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/runtimeConfig.browser.js
var ClientDefaultValues4 = __assign5(__assign5({}, ClientSharedValues4), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function(_) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: defaultUserAgent({
  serviceId: ClientSharedValues4.serviceId,
  clientVersion: package_default4.version
}), maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), sha256: import_sha256_browser4.Sha256, streamCollector, utf8Decoder: import_util_utf8_browser6.fromUtf8, utf8Encoder: import_util_utf8_browser6.toUtf8 });

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/PersonalizeEventsClient.js
var PersonalizeEventsClient = function(_super) {
  __extends5(PersonalizeEventsClient2, _super);
  function PersonalizeEventsClient2(configuration) {
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
  PersonalizeEventsClient2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return PersonalizeEventsClient2;
}(Client);

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/models/models_0.js
var InvalidInputException;
(function(InvalidInputException2) {
  InvalidInputException2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(InvalidInputException || (InvalidInputException = {}));
var Event;
(function(Event2) {
  Event2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Event || (Event = {}));
var PutEventsRequest2;
(function(PutEventsRequest3) {
  PutEventsRequest3.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(PutEventsRequest2 || (PutEventsRequest2 = {}));
var Item;
(function(Item2) {
  Item2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(Item || (Item = {}));
var PutItemsRequest;
(function(PutItemsRequest2) {
  PutItemsRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(PutItemsRequest || (PutItemsRequest = {}));
var ResourceNotFoundException3;
(function(ResourceNotFoundException4) {
  ResourceNotFoundException4.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(ResourceNotFoundException3 || (ResourceNotFoundException3 = {}));
var User;
(function(User2) {
  User2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(User || (User = {}));
var PutUsersRequest;
(function(PutUsersRequest2) {
  PutUsersRequest2.filterSensitiveLog = function(obj) {
    return __assign5({}, obj);
  };
})(PutUsersRequest || (PutUsersRequest = {}));

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/protocols/Aws_restJson1.js
var serializeAws_restJson1PutEventsCommand2 = function(input, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator5(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "/events";
          body = JSON.stringify(__assign5(__assign5(__assign5(__assign5({}, input.eventList !== void 0 && input.eventList !== null && { eventList: serializeAws_restJson1EventList(input.eventList, context) }), input.sessionId !== void 0 && input.sessionId !== null && { sessionId: input.sessionId }), input.trackingId !== void 0 && input.trackingId !== null && { trackingId: input.trackingId }), input.userId !== void 0 && input.userId !== null && { userId: input.userId }));
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
var deserializeAws_restJson1PutEventsCommand2 = function(output, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var contents;
    return __generator5(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1PutEventsCommandError2(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata4(output)
          };
          return [4, collectBody4(output.body, context)];
        case 1:
          _a.sent();
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutEventsCommandError2 = function(output, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator5(this, function(_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign5({}, output)];
          _d = {};
          return [4, parseBody4(output.body, context)];
        case 1:
          parsedOutput = __assign5.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode4(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidInputException":
              return [3, 2];
            case "com.amazonaws.personalizeevents#InvalidInputException":
              return [3, 2];
          }
          return [3, 4];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign5.apply(void 0, [__assign5.apply(void 0, _c.concat([_e.sent()])), { name: errorCode, $metadata: deserializeMetadata4(output) }]);
          return [3, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign5(__assign5({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata4(output) });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1InvalidInputExceptionResponse = function(parsedOutput, context) {
  return __awaiter5(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator5(this, function(_a) {
      contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata4(parsedOutput),
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
var serializeAws_restJson1Event2 = function(input, context) {
  return __assign5(__assign5(__assign5(__assign5(__assign5(__assign5(__assign5(__assign5({}, input.eventId !== void 0 && input.eventId !== null && { eventId: input.eventId }), input.eventType !== void 0 && input.eventType !== null && { eventType: input.eventType }), input.eventValue !== void 0 && input.eventValue !== null && { eventValue: input.eventValue }), input.impression !== void 0 && input.impression !== null && { impression: serializeAws_restJson1Impression(input.impression, context) }), input.itemId !== void 0 && input.itemId !== null && { itemId: input.itemId }), input.properties !== void 0 && input.properties !== null && { properties: LazyJsonString.fromObject(input.properties) }), input.recommendationId !== void 0 && input.recommendationId !== null && { recommendationId: input.recommendationId }), input.sentAt !== void 0 && input.sentAt !== null && { sentAt: Math.round(input.sentAt.getTime() / 1e3) });
};
var serializeAws_restJson1EventList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return serializeAws_restJson1Event2(entry, context);
  });
};
var serializeAws_restJson1Impression = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return entry;
  });
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

// ../../node_modules/@aws-sdk/client-personalize-events/dist/es/commands/PutEventsCommand.js
var PutEventsCommand2 = function(_super) {
  __extends5(PutEventsCommand3, _super);
  function PutEventsCommand3(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  PutEventsCommand3.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger11 = configuration.logger;
    var clientName = "PersonalizeEventsClient";
    var commandName = "PutEventsCommand";
    var handlerExecutionContext = {
      logger: logger11,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEventsRequest2.filterSensitiveLog,
      outputFilterSensitiveLog: function(output) {
        return output;
      }
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutEventsCommand3.prototype.serialize = function(input, context) {
    return serializeAws_restJson1PutEventsCommand2(input, context);
  };
  PutEventsCommand3.prototype.deserialize = function(output, context) {
    return deserializeAws_restJson1PutEventsCommand2(output, context);
  };
  return PutEventsCommand3;
}(Command);

// src/Providers/AmazonPersonalizeHelper/SessionInfoManager.ts
var import_isEmpty = __toModule(require_isEmpty());
var import_isEqual = __toModule(require_isEqual());
import { ConsoleLogger as Logger9, JS as JS6 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
import Cache2 from "http://localhost:8080/packages/cache/4.0.24/cache-esm.js";
var PERSONALIZE_CACHE = "_awsct";
var PERSONALIZE_CACHE_USERID = "_awsct_uid";
var PERSONALIZE_CACHE_SESSIONID = "_awsct_sid";
var DEFAULT_CACHE_PREFIX = "peronslize";
var TIMER_INTERVAL = 30 * 1e3;
var DELIMITER = ".";
var CACHE_EXPIRY_IN_DAYS = 7;
var logger9 = new Logger9("AmazonPersonalizeProvider");
var SessionInfoManager = class {
  constructor(prefixKey = "") {
    this._isBrowser = JS6.browserOrNode().isBrowser;
    this._timerKey = v1_default().substr(0, 15);
    this._refreshTimer();
  }
  _refreshTimer() {
    if (this._timer) {
      clearInterval(this._timer);
    }
    const that = this;
    this._timer = setInterval(() => {
      that._timerKey = v1_default().substr(0, 15);
    }, TIMER_INTERVAL);
  }
  storeValue(key, value) {
    const today = new Date();
    const expire = new Date();
    expire.setTime(today.getTime() + 36e5 * 24 * CACHE_EXPIRY_IN_DAYS);
    Cache2.setItem(this._getCachePrefix(key), value, {
      expires: expire.getTime()
    });
  }
  retrieveValue(key) {
    return Cache2.getItem(this._getCachePrefix(key));
  }
  _getCachePrefix(key) {
    if (this._isBrowser) {
      return key + DELIMITER + window.location.host;
    }
    return DEFAULT_CACHE_PREFIX;
  }
  getTimerKey() {
    return this._timerKey;
  }
  updateSessionInfo(userId, sessionInfo) {
    const existUserId = sessionInfo.userId;
    const existSessionId = sessionInfo.sessionId;
    if (this._isRequireNewSession(userId, existUserId, existSessionId)) {
      const newSessionId = v1_default();
      this.storeValue(PERSONALIZE_CACHE_USERID, userId);
      this.storeValue(PERSONALIZE_CACHE_SESSIONID, newSessionId);
      sessionInfo.sessionId = newSessionId;
    } else if (this._isRequireUpdateSessionInfo(userId, existUserId, existSessionId)) {
      this.storeValue(PERSONALIZE_CACHE_USERID, userId);
    }
    sessionInfo.userId = userId;
  }
  _isRequireUpdateSessionInfo(userId, cachedSessionUserId, cachedSessionSessionId) {
    const isNoCachedSession = (0, import_isEmpty.default)(cachedSessionSessionId);
    return !isNoCachedSession && (0, import_isEmpty.default)(cachedSessionUserId) && !(0, import_isEmpty.default)(userId);
  }
  retrieveSessionInfo(trackingId) {
    const sessionInfo = {};
    sessionInfo.trackingId = trackingId;
    sessionInfo.sessionId = this.retrieveValue(PERSONALIZE_CACHE_SESSIONID);
    sessionInfo.userId = this.retrieveValue(PERSONALIZE_CACHE_USERID);
    if ((0, import_isEmpty.default)(sessionInfo.sessionId)) {
      sessionInfo.sessionId = v1_default();
      this.storeValue(PERSONALIZE_CACHE_SESSIONID, sessionInfo.sessionId);
    }
    this.storeValue(PERSONALIZE_CACHE, trackingId);
    return sessionInfo;
  }
  _isRequireNewSession(userId, cachedSessionUserId, cachedSessionSessionId) {
    const isNoCachedSession = (0, import_isEmpty.default)(cachedSessionSessionId);
    const isSignoutCase = (0, import_isEmpty.default)(userId) && !(0, import_isEmpty.default)(cachedSessionUserId);
    const isSwitchUserCase = !(0, import_isEmpty.default)(userId) && !(0, import_isEmpty.default)(cachedSessionUserId) && !(0, import_isEqual.default)(userId, cachedSessionUserId);
    return isNoCachedSession || isSignoutCase || isSwitchUserCase;
  }
};

// src/Providers/AmazonPersonalizeHelper/MediaAutoTrack.ts
var HTML5_MEDIA_EVENT;
(function(HTML5_MEDIA_EVENT2) {
  HTML5_MEDIA_EVENT2["PLAY"] = "play";
  HTML5_MEDIA_EVENT2["PAUSE"] = "pause";
  HTML5_MEDIA_EVENT2["ENDED"] = "Ended";
})(HTML5_MEDIA_EVENT || (HTML5_MEDIA_EVENT = {}));
var MEDIA_TYPE;
(function(MEDIA_TYPE2) {
  MEDIA_TYPE2["IFRAME"] = "IFRAME";
  MEDIA_TYPE2["VIDEO"] = "VIDEO";
  MEDIA_TYPE2["AUDIO"] = "AUDIO";
})(MEDIA_TYPE || (MEDIA_TYPE = {}));
var EVENT_TYPE;
(function(EVENT_TYPE2) {
  EVENT_TYPE2["PLAY"] = "Play";
  EVENT_TYPE2["ENDED"] = "Ended";
  EVENT_TYPE2["PAUSE"] = "Pause";
  EVENT_TYPE2["TIME_WATCHED"] = "TimeWatched";
})(EVENT_TYPE || (EVENT_TYPE = {}));
var MediaAutoTrack = class {
  constructor(params, provider) {
    this.eventActionMapping = {
      [EVENT_TYPE.ENDED]: this.endedEventAction.bind(this),
      [EVENT_TYPE.PLAY]: this.playEventAction.bind(this),
      [EVENT_TYPE.PAUSE]: this.pauseEventAction.bind(this)
    };
    const { eventData } = params;
    this._params = params;
    this._mediaElement = document.getElementById(eventData.properties["domElementId"]);
    this._started = false;
    this._provider = provider;
    const mediaTrackFunMapping = {
      IFRAME: this._iframeMediaTracker,
      VIDEO: this._html5MediaTracker,
      AUDIO: this._html5MediaTracker
    };
    mediaTrackFunMapping[this._mediaElement.tagName].bind(this)();
    this._initYoutubeFrame();
  }
  _initYoutubeFrame() {
    this._youTubeIframeLoader = {
      src: "https://www.youtube.com/iframe_api",
      loading: false,
      loaded: false,
      listeners: [],
      load(callback) {
        const _this = this;
        this.listeners.push(callback);
        if (this.loaded) {
          setTimeout(function() {
            _this.done();
          });
          return;
        }
        if (this.loading) {
          return;
        }
        this.loading = true;
        window["onYouTubeIframeAPIReady"] = function() {
          _this.loaded = true;
          _this.done();
        };
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = this.src;
        document.body.appendChild(script);
      },
      done() {
        delete window["onYouTubeIframeAPIReady"];
        while (this.listeners.length) {
          this.listeners.pop()(window["YT"]);
        }
      }
    };
  }
  _iframeMediaTracker() {
    const that = this;
    setInterval(function() {
      if (that._started) {
        that.recordEvent(MEDIA_TYPE.IFRAME, EVENT_TYPE.TIME_WATCHED);
      }
    }, 3 * 1e3);
    this._youTubeIframeLoader.load(function(YT) {
      that._iframePlayer = new YT.Player(that._mediaElement.id, {
        events: { onStateChange: that._onPlayerStateChange.bind(that) }
      });
    });
  }
  _onPlayerStateChange(event) {
    const iframeEventMapping = {
      0: EVENT_TYPE.ENDED,
      1: EVENT_TYPE.PLAY,
      2: EVENT_TYPE.PAUSE
    };
    const eventType = iframeEventMapping[event.data];
    if (eventType) {
      this.eventActionMapping[eventType](MEDIA_TYPE.IFRAME);
    }
  }
  _html5MediaTracker() {
    const that = this;
    setInterval(function() {
      if (that._started) {
        that.recordEvent(MEDIA_TYPE.VIDEO, EVENT_TYPE.TIME_WATCHED);
      }
    }, 3 * 1e3);
    this._mediaElement.addEventListener(HTML5_MEDIA_EVENT.PLAY, () => {
      that.eventActionMapping[EVENT_TYPE.PLAY](MEDIA_TYPE.VIDEO);
    }, false);
    this._mediaElement.addEventListener(HTML5_MEDIA_EVENT.PAUSE, () => {
      that.eventActionMapping[EVENT_TYPE.PAUSE](MEDIA_TYPE.VIDEO);
    }, false);
    this._mediaElement.addEventListener(HTML5_MEDIA_EVENT.ENDED, () => {
      that.eventActionMapping[EVENT_TYPE.ENDED](MEDIA_TYPE.VIDEO);
    }, false);
  }
  playEventAction(mediaType) {
    this._started = true;
    this.recordEvent(mediaType, EVENT_TYPE.PLAY);
  }
  pauseEventAction(mediaType) {
    this._started = false;
    this.recordEvent(mediaType, EVENT_TYPE.PAUSE);
  }
  endedEventAction(mediaType) {
    this._started = false;
    this.recordEvent(mediaType, EVENT_TYPE.ENDED);
  }
  recordEvent(mediaType, eventType) {
    const newParams = Object.assign({}, this._params);
    const { eventData } = newParams;
    eventData.eventType = eventType;
    if (mediaType === MEDIA_TYPE.VIDEO) {
      eventData.properties.timestamp = this._mediaElement.currentTime;
      eventData.properties.duration = this._mediaElement.duration;
    } else {
      eventData.properties.timestamp = this._financial(this._iframePlayer.getCurrentTime());
      eventData.properties.duration = this._financial(this._iframePlayer.getDuration());
    }
    const percentage = parseFloat(eventData.properties.timestamp) / parseFloat(eventData.properties.duration);
    eventData.properties.eventValue = Number(percentage.toFixed(4));
    delete eventData.properties.domElementId;
    this._provider.putToBuffer(newParams);
  }
  _financial(x) {
    return Number.parseFloat(x).toFixed(4);
  }
};

// src/Providers/AmazonPersonalizeProvider.ts
var import_get = __toModule(require_get());
var import_isEmpty2 = __toModule(require_isEmpty());
var import_isEqual2 = __toModule(require_isEqual());
var logger10 = new Logger10("AmazonPersonalizeProvider");
var FLUSH_SIZE3 = 5;
var FLUSH_SIZE_THRESHHOLD = 10;
var FLUSH_INTERVAL3 = 5 * 1e3;
var IDENTIFY_EVENT = "Identify";
var AmazonPersonalizeProvider = class {
  constructor(config) {
    this._buffer = [];
    this._config = config ? config : {};
    this._config.flushSize = this._config.flushSize > 0 && this._config.flushSize <= FLUSH_SIZE_THRESHHOLD ? this._config.flushSize : FLUSH_SIZE3;
    this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL3;
    this._sessionManager = new SessionInfoManager();
    if (!(0, import_isEmpty2.default)(this._config.trackingId)) {
      this._sessionInfo = this._sessionManager.retrieveSessionInfo(this._config.trackingId);
    }
    this._isBrowser = JS7.browserOrNode().isBrowser;
    this._setupTimer();
  }
  _setupTimer() {
    if (this._timer) {
      clearInterval(this._timer);
    }
    const { flushInterval } = this._config;
    const that = this;
    this._timer = setInterval(() => {
      that._sendFromBuffer();
    }, flushInterval);
  }
  async record(params) {
    const credentials = await this._getCredentials();
    if (!credentials)
      return Promise.resolve(false);
    Object.assign(params, {
      config: this._config,
      credentials,
      sentAt: new Date()
    });
    const { eventType, properties } = params.event;
    if (eventType === IDENTIFY_EVENT) {
      this._sessionManager.updateSessionInfo(properties && properties.userId ? properties.userId : "", this._sessionInfo);
      return;
    } else if (!(0, import_isEmpty2.default)(params.event.userId)) {
      this._sessionManager.updateSessionInfo(params.event.userId, this._sessionInfo);
    }
    const requestParams = this.generateRequestParams(params, this._sessionInfo);
    if (eventType === "MediaAutoTrack") {
      if (this._isBrowser) {
        if (!(0, import_isEmpty2.default)((0, import_get.default)(requestParams, "eventData.properties.domElementId", null))) {
          const isLoaded = await this.isElementFullyLoaded(this.loadElement, requestParams.eventData.properties["domElementId"], 500, 5);
          if (isLoaded) {
            new MediaAutoTrack(requestParams, this);
          } else {
            logger10.debug("Cannot find the media element.");
          }
        } else {
          logger10.debug("Missing domElementId field in 'properties' for MediaAutoTrack event type.");
        }
      } else {
        logger10.debug("MediaAutoTrack only for browser");
      }
      return;
    }
    return this.putToBuffer(requestParams);
  }
  loadElement(domId) {
    return new Promise((resolve, reject) => {
      if (document.getElementById(domId) && document.getElementById(domId).clientHeight) {
        return resolve(true);
      } else {
        return reject(true);
      }
    });
  }
  isElementFullyLoaded(operation, params, delay, times) {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    return new Promise((resolve, reject) => {
      return operation(params).then(resolve).catch((reason) => {
        if (times - 1 > 0) {
          return wait(delay).then(this.isElementFullyLoaded.bind(null, operation, params, delay, times - 1)).then(resolve).catch(reject);
        }
        return reject(reason);
      });
    });
  }
  getCategory() {
    return "Analytics";
  }
  getProviderName() {
    return "AmazonPersonalize";
  }
  configure(config) {
    logger10.debug("configure Analytics", config);
    const conf = config ? config : {};
    this._config = Object.assign({}, this._config, conf);
    if (!(0, import_isEmpty2.default)(this._config.trackingId)) {
      this._sessionInfo = this._sessionManager.retrieveSessionInfo(this._config.trackingId);
    }
    this._setupTimer();
    return this._config;
  }
  generateRequestParams(params, sessionInfo) {
    const requestParams = {};
    const { eventType, properties } = params.event;
    requestParams.eventData = { eventType, properties };
    requestParams.sessionInfo = sessionInfo;
    requestParams.sentAt = params.sentAt;
    requestParams.credentials = params.credentials;
    requestParams.config = params.config;
    return requestParams;
  }
  _sendEvents(group) {
    const groupLen = group.length;
    if (groupLen === 0) {
      logger10.debug("events array is empty, directly return");
      return;
    }
    const { config, credentials, sessionInfo } = group[0];
    const initClients = this._init(config, credentials);
    if (!initClients)
      return false;
    if (groupLen > 0) {
      const events = [];
      for (let i = 0; i < groupLen; i += 1) {
        const params = group.shift();
        const eventPayload = this._generateSingleRecordPayload(params, sessionInfo);
        events.push(eventPayload);
      }
      const payload = {};
      payload.trackingId = sessionInfo.trackingId;
      payload.sessionId = sessionInfo.sessionId;
      payload.userId = sessionInfo.userId;
      payload.eventList = [];
      events.forEach((event) => {
        payload.eventList.push(event);
      });
      const command = new PutEventsCommand2(payload);
      this._personalize.send(command, (err) => {
        if (err)
          logger10.debug("Failed to call putEvents in Personalize", err);
        else
          logger10.debug("Put events");
      });
    }
  }
  putToBuffer(params) {
    if (this._buffer.length < this._config.flushSize) {
      this._buffer.push(params);
    } else {
      this._buffer.push(params);
      this._sendFromBuffer();
    }
    return Promise.resolve(true);
  }
  _sendFromBuffer() {
    const size = this._buffer.length;
    if (size <= 0)
      return;
    const eventsGroups = [];
    let preCred = null;
    let group = [];
    for (let i = 0; i < size; i += 1) {
      const currRequestParams = this._buffer.shift();
      const cred = currRequestParams.credentials;
      const sessionInfo = currRequestParams.sessionInfo;
      if (i === 0) {
        group.push(currRequestParams);
        preCred = cred;
      } else {
        if ((0, import_isEqual2.default)(sessionInfo, this._sessionInfo) && cred.sessionToken === preCred.sessionToken && cred.identityId === preCred.identityId) {
          logger10.debug("no change for cred, put event in the same group");
          group.push(currRequestParams);
        } else {
          eventsGroups.push(group);
          group = [];
          group.push(currRequestParams);
          preCred = cred;
          this._sessionInfo = sessionInfo;
        }
      }
    }
    eventsGroups.push(group);
    eventsGroups.map((group2) => {
      this._sendEvents(group2);
    });
  }
  _generateSingleRecordPayload(params, sessionInfo) {
    const { eventData, sentAt } = params;
    const trackPayload = {};
    trackPayload.sentAt = sentAt;
    trackPayload.properties = eventData.properties && JSON.stringify(eventData.properties);
    trackPayload.eventId = this._sessionManager.getTimerKey() + sessionInfo.sessionId;
    trackPayload.eventType = eventData.eventType;
    return trackPayload;
  }
  _init(config, credentials) {
    logger10.debug("init clients");
    if (this._personalize && this._config.credentials && this._config.credentials.sessionToken === credentials.sessionToken && this._config.credentials.identityId === credentials.identityId) {
      logger10.debug("no change for analytics config, directly return from init");
      return true;
    }
    this._config.credentials = credentials;
    const { region } = config;
    logger10.debug("initialize personalize with credentials", credentials);
    this._personalize = new PersonalizeEventsClient({
      region,
      credentials,
      customUserAgent: getAmplifyUserAgent3()
    });
    return true;
  }
  _getCredentials() {
    const that = this;
    return Credentials3.get().then((credentials) => {
      if (!credentials)
        return null;
      logger10.debug("set credentials for analytics", that._config.credentials);
      return Credentials3.shear(credentials);
    }).catch((err) => {
      logger10.debug("ensure credentials error", err);
      return null;
    });
  }
};

// src/index.ts
var src_default = Analytics;
export {
  AWSKinesisFirehoseProvider,
  AWSKinesisProvider,
  AWSPinpointProvider,
  AmazonPersonalizeProvider,
  Analytics,
  src_default as default
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
