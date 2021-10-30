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

// ../../node_modules/@aws-sdk/client-s3/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/@aws-sdk/client-s3/node_modules/tslib/tslib.js"(exports, module2) {
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
    var __spreadArray2;
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
      __spreadArray2 = function(to, from, pack) {
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
      exporter("__spreadArray", __spreadArray2);
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
    function isEmptyData2(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData2;
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
    var toUtf82 = (input) => {
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
    exports.toUtf8 = toUtf82;
  }
});

// ../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "../../node_modules/@aws-sdk/util-utf8-browser/dist/cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf83(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf83;
    function toUtf82(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf82;
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
    var fromUtf83 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf83;
    var toUtf82 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf82;
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
    var toUtf82 = (input) => {
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
    exports.toUtf8 = toUtf82;
  }
});

// ../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi2 = __commonJS({
  "../../node_modules/@aws-crypto/util/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf83(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf83;
    function toUtf82(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf82;
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
    var fromUtf83 = (input) => typeof TextEncoder === "function" ? whatwgEncodingApi_1.fromUtf8(input) : pureJs_1.fromUtf8(input);
    exports.fromUtf8 = fromUtf83;
    var toUtf82 = (input) => typeof TextDecoder === "function" ? whatwgEncodingApi_1.toUtf8(input) : pureJs_1.toUtf8(input);
    exports.toUtf8 = toUtf82;
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
    function convertToBuffer2(data) {
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
    exports.convertToBuffer = convertToBuffer2;
  }
});

// ../../node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData2 = __commonJS({
  "../../node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData2(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData2;
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
        var byteLength2 = data.byteLength;
        this.bytesHashed += byteLength2;
        if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength2 > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength2--;
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

// ../../node_modules/uuid/lib/rng-browser.js
var require_rng_browser = __commonJS({
  "../../node_modules/uuid/lib/rng-browser.js"(exports, module2) {
    var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (getRandomValues) {
      rnds8 = new Uint8Array(16);
      module2.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
      };
    } else {
      rnds = new Array(16);
      module2.exports = function mathRNG() {
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
  "../../node_modules/uuid/lib/bytesToUuid.js"(exports, module2) {
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
    module2.exports = bytesToUuid;
  }
});

// ../../node_modules/uuid/v1.js
var require_v1 = __commonJS({
  "../../node_modules/uuid/v1.js"(exports, module2) {
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
    module2.exports = v1;
  }
});

// ../../node_modules/uuid/v4.js
var require_v4 = __commonJS({
  "../../node_modules/uuid/v4.js"(exports, module2) {
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
        for (var ii2 = 0; ii2 < 16; ++ii2) {
          buf[i + ii2] = rnds[ii2];
        }
      }
      return buf || bytesToUuid(rnds);
    }
    module2.exports = v42;
  }
});

// ../../node_modules/uuid/index.js
var require_uuid = __commonJS({
  "../../node_modules/uuid/index.js"(exports, module2) {
    var v1 = require_v1();
    var v42 = require_v4();
    var uuid = v42;
    uuid.v1 = v1;
    uuid.v4 = v42;
    module2.exports = uuid;
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

// ../../node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "../../node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          if (arrayMode === "strict") {
            target[keys[i]] = [a[keys[i]]];
          } else {
            target[keys[i]] = a[keys[i]];
          }
        }
      }
    };
    exports.getValue = function(v) {
      if (exports.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    exports.buildOptions = function(options, defaultOptions, props) {
      let newOptions = {};
      if (!options) {
        return defaultOptions;
      }
      for (let i = 0; i < props.length; i++) {
        if (options[props[i]] !== void 0) {
          newOptions[props[i]] = options[props[i]];
        } else {
          newOptions[props[i]] = defaultOptions[props[i]];
        }
      }
      return newOptions;
    };
    exports.isTagNameInArrayMode = function(tagName, arrayMode, parentTagName) {
      if (arrayMode === false) {
        return false;
      } else if (arrayMode instanceof RegExp) {
        return arrayMode.test(tagName);
      } else if (typeof arrayMode === "function") {
        return !!arrayMode(tagName, parentTagName);
      }
      return arrayMode === "strict";
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// ../../node_modules/fast-xml-parser/src/node2json.js
var require_node2json = __commonJS({
  "../../node_modules/fast-xml-parser/src/node2json.js"(exports) {
    "use strict";
    var util = require_util();
    var convertToJson = function(node, options, parentTagName) {
      const jObj = {};
      if (!options.alwaysCreateTextNode && (!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
        return util.isExist(node.val) ? node.val : "";
      }
      if (util.isExist(node.val) && !(typeof node.val === "string" && (node.val === "" || node.val === options.cdataPositionChar))) {
        const asArray = util.isTagNameInArrayMode(node.tagname, options.arrayMode, parentTagName);
        jObj[options.textNodeName] = asArray ? [node.val] : node.val;
      }
      util.merge(jObj, node.attrsMap, options.arrayMode);
      const keys = Object.keys(node.child);
      for (let index = 0; index < keys.length; index++) {
        const tagName = keys[index];
        if (node.child[tagName] && node.child[tagName].length > 1) {
          jObj[tagName] = [];
          for (let tag in node.child[tagName]) {
            if (node.child[tagName].hasOwnProperty(tag)) {
              jObj[tagName].push(convertToJson(node.child[tagName][tag], options, tagName));
            }
          }
        } else {
          const result = convertToJson(node.child[tagName][0], options, tagName);
          const asArray = options.arrayMode === true && typeof result === "object" || util.isTagNameInArrayMode(tagName, options.arrayMode, parentTagName);
          jObj[tagName] = asArray ? [result] : result;
        }
      }
      return jObj;
    };
    exports.convertToJson = convertToJson;
  }
});

// ../../node_modules/fast-xml-parser/src/xmlNode.js
var require_xmlNode = __commonJS({
  "../../node_modules/fast-xml-parser/src/xmlNode.js"(exports, module2) {
    "use strict";
    module2.exports = function(tagname, parent, val) {
      this.tagname = tagname;
      this.parent = parent;
      this.child = {};
      this.attrsMap = {};
      this.val = val;
      this.addChild = function(child) {
        if (Array.isArray(this.child[child.tagname])) {
          this.child[child.tagname].push(child);
        } else {
          this.child[child.tagname] = [child];
        }
      };
    };
  }
});

// ../../node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "../../node_modules/strnum/strnum.js"(exports, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: "."
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const negative = match[1];
          const leadingZeros = match[2];
          const num = match[3];
          const eNotation = match[4] || match[6];
          if (leadingZeros.length === 1 && num[0] === ".")
            return Number(str);
          else if (!options.leadingZeros && leadingZeros.length > 0)
            return str;
          else
            return Number(trimmedStr);
        } else {
          return str;
        }
      }
    }
    module2.exports = toNumber;
  }
});

// ../../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js
var require_xmlstr2xmlnode = __commonJS({
  "../../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js"(exports) {
    "use strict";
    var util = require_util();
    var buildOptions = require_util().buildOptions;
    var xmlNode = require_xmlNode();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attrNodeName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      ignoreNameSpace: false,
      allowBooleanAttributes: false,
      parseNodeValue: true,
      parseAttributeValue: false,
      arrayMode: false,
      trimValues: true,
      cdataTagName: false,
      cdataPositionChar: "\\c",
      numParseOptions: {
        hex: true,
        leadingZeros: true
      },
      tagValueProcessor: function(a, tagName) {
        return a;
      },
      attrValueProcessor: function(a, attrName) {
        return a;
      },
      stopNodes: [],
      alwaysCreateTextNode: false
    };
    exports.defaultOptions = defaultOptions;
    var props = [
      "attributeNamePrefix",
      "attrNodeName",
      "textNodeName",
      "ignoreAttributes",
      "ignoreNameSpace",
      "allowBooleanAttributes",
      "parseNodeValue",
      "parseAttributeValue",
      "arrayMode",
      "trimValues",
      "cdataTagName",
      "cdataPositionChar",
      "tagValueProcessor",
      "attrValueProcessor",
      "parseTrueNumberOnly",
      "numParseOptions",
      "stopNodes",
      "alwaysCreateTextNode"
    ];
    exports.props = props;
    function processTagValue(tagName, val, options) {
      if (val) {
        if (options.trimValues) {
          val = val.trim();
        }
        val = options.tagValueProcessor(val, tagName);
        val = parseValue(val, options.parseNodeValue, options.numParseOptions);
      }
      return val;
    }
    function resolveNameSpace(tagname, options) {
      if (options.ignoreNameSpace) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    function parseValue(val, shouldParse, options) {
      if (shouldParse && typeof val === "string") {
        const newval = val.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val, options);
      } else {
        if (util.isExist(val)) {
          return val;
        } else {
          return "";
        }
      }
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])(.*?)\\3)?`, "g");
    function buildAttributesMap(attrStr, options) {
      if (!options.ignoreAttributes && typeof attrStr === "string") {
        attrStr = attrStr.replace(/\r?\n/g, " ");
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = resolveNameSpace(matches[i][1], options);
          if (attrName.length) {
            if (matches[i][4] !== void 0) {
              if (options.trimValues) {
                matches[i][4] = matches[i][4].trim();
              }
              matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
              attrs[options.attributeNamePrefix + attrName] = parseValue(matches[i][4], options.parseAttributeValue, options.numParseOptions);
            } else if (options.allowBooleanAttributes) {
              attrs[options.attributeNamePrefix + attrName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (options.attrNodeName) {
          const attrCollection = {};
          attrCollection[options.attrNodeName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var getTraversalObj = function(xmlData, options) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      options = buildOptions(options, defaultOptions, props);
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (options.ignoreNameSpace) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (currentNode) {
              if (currentNode.val) {
                currentNode.val = util.getValue(currentNode.val) + "" + processTagValue(tagName, textData, options);
              } else {
                currentNode.val = processTagValue(tagName, textData, options);
              }
            }
            if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
              currentNode.child = [];
              if (currentNode.attrsMap == void 0) {
                currentNode.attrsMap = {};
              }
              currentNode.val = xmlData.substr(currentNode.startIndex + 1, i - currentNode.startIndex - 1);
            }
            currentNode = currentNode.parent;
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.");
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.");
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.");
            const tagExp = xmlData.substring(i, closeIndex);
            if (tagExp.indexOf("[") >= 0) {
              i = xmlData.indexOf("]>", i) + 1;
            } else {
              i = closeIndex;
            }
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            if (textData) {
              currentNode.val = util.getValue(currentNode.val) + "" + processTagValue(currentNode.tagname, textData, options);
              textData = "";
            }
            if (options.cdataTagName) {
              const childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
              currentNode.addChild(childNode);
              currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar;
              if (tagExp) {
                childNode.val = tagExp;
              }
            } else {
              currentNode.val = (currentNode.val || "") + (tagExp || "");
            }
            i = closeIndex + 2;
          } else {
            const result = closingIndexForOpeningTag(xmlData, i + 1);
            let tagExp = result.data;
            const closeIndex = result.index;
            const separatorIndex = tagExp.indexOf(" ");
            let tagName = tagExp;
            let shouldBuildAttributesMap = true;
            if (separatorIndex !== -1) {
              tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
              tagExp = tagExp.substr(separatorIndex + 1);
            }
            if (options.ignoreNameSpace) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
                shouldBuildAttributesMap = tagName !== result.data.substr(colonIndex + 1);
              }
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                currentNode.val = util.getValue(currentNode.val) + "" + processTagValue(currentNode.tagname, textData, options);
              }
            }
            if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substr(0, tagName.length - 1);
                tagExp = tagName;
              } else {
                tagExp = tagExp.substr(0, tagExp.length - 1);
              }
              const childNode = new xmlNode(tagName, currentNode, "");
              if (tagName !== tagExp) {
                childNode.attrsMap = buildAttributesMap(tagExp, options);
              }
              currentNode.addChild(childNode);
            } else {
              const childNode = new xmlNode(tagName, currentNode);
              if (options.stopNodes.length && options.stopNodes.includes(childNode.tagname)) {
                childNode.startIndex = closeIndex;
              }
              if (tagName !== tagExp && shouldBuildAttributesMap) {
                childNode.attrsMap = buildAttributesMap(tagExp, options);
              }
              currentNode.addChild(childNode);
              currentNode = childNode;
            }
            textData = "";
            i = closeIndex;
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj;
    };
    function closingIndexForOpeningTag(data, i) {
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < data.length; index++) {
        let ch = data[index];
        if (attrBoundary) {
          if (ch === attrBoundary)
            attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === ">") {
          return {
            data: tagExp,
            index
          };
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i, errMsg) {
      const closingIndex = xmlData.indexOf(str, i);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    exports.getTraversalObj = getTraversalObj;
  }
});

// ../../node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "../../node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false
    };
    var props = ["allowBooleanAttributes"];
    exports.validate = function(xmlData, options) {
      options = util.buildOptions(options, defaultOptions, props);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i = 0; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
          i += 2;
          i = readPI(xmlData, i);
          if (i.err)
            return i;
        } else if (xmlData[i] === "<") {
          let tagStartPos = i;
          i++;
          if (xmlData[i] === "!") {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === "/") {
              closingTag = true;
              i++;
            }
            let tagName = "";
            for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
            }
            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject("InvalidTag", "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "!") {
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i + 1] === "?") {
                  i = readPI(xmlData, ++i);
                  if (i.err)
                    return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === "&") {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              }
            }
            if (xmlData[i] === "<") {
              i--;
            }
          }
        } else {
          if (xmlData[i] === " " || xmlData[i] === "	" || xmlData[i] === "\n" || xmlData[i] === "\r") {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == "?" || xmlData[i] == " ") {
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }
    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      }
      return i;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ";")
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i) {
      i++;
      if (xmlData[i] === ";")
        return -1;
      if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ";")
          break;
        return -1;
      }
      return i;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// ../../node_modules/fast-xml-parser/src/nimndata.js
var require_nimndata = __commonJS({
  "../../node_modules/fast-xml-parser/src/nimndata.js"(exports) {
    "use strict";
    var char = function(a) {
      return String.fromCharCode(a);
    };
    var chars = {
      nilChar: char(176),
      missingChar: char(201),
      nilPremitive: char(175),
      missingPremitive: char(200),
      emptyChar: char(178),
      emptyValue: char(177),
      boundryChar: char(179),
      objStart: char(198),
      arrStart: char(204),
      arrayEnd: char(185)
    };
    var charsArr = [
      chars.nilChar,
      chars.nilPremitive,
      chars.missingChar,
      chars.missingPremitive,
      chars.boundryChar,
      chars.emptyChar,
      chars.emptyValue,
      chars.arrayEnd,
      chars.objStart,
      chars.arrStart
    ];
    var _e = function(node, e_schema, options) {
      if (typeof e_schema === "string") {
        if (node && node[0] && node[0].val !== void 0) {
          return getValue(node[0].val, e_schema);
        } else {
          return getValue(node, e_schema);
        }
      } else {
        const hasValidData = hasData(node);
        if (hasValidData === true) {
          let str = "";
          if (Array.isArray(e_schema)) {
            str += chars.arrStart;
            const itemSchema = e_schema[0];
            const arr_len = node.length;
            if (typeof itemSchema === "string") {
              for (let arr_i = 0; arr_i < arr_len; arr_i++) {
                const r = getValue(node[arr_i].val, itemSchema);
                str = processValue(str, r);
              }
            } else {
              for (let arr_i = 0; arr_i < arr_len; arr_i++) {
                const r = _e(node[arr_i], itemSchema, options);
                str = processValue(str, r);
              }
            }
            str += chars.arrayEnd;
          } else {
            str += chars.objStart;
            const keys = Object.keys(e_schema);
            if (Array.isArray(node)) {
              node = node[0];
            }
            for (let i in keys) {
              const key = keys[i];
              let r;
              if (!options.ignoreAttributes && node.attrsMap && node.attrsMap[key]) {
                r = _e(node.attrsMap[key], e_schema[key], options);
              } else if (key === options.textNodeName) {
                r = _e(node.val, e_schema[key], options);
              } else {
                r = _e(node.child[key], e_schema[key], options);
              }
              str = processValue(str, r);
            }
          }
          return str;
        } else {
          return hasValidData;
        }
      }
    };
    var getValue = function(a) {
      switch (a) {
        case void 0:
          return chars.missingPremitive;
        case null:
          return chars.nilPremitive;
        case "":
          return chars.emptyValue;
        default:
          return a;
      }
    };
    var processValue = function(str, r) {
      if (!isAppChar(r[0]) && !isAppChar(str[str.length - 1])) {
        str += chars.boundryChar;
      }
      return str + r;
    };
    var isAppChar = function(ch) {
      return charsArr.indexOf(ch) !== -1;
    };
    function hasData(jObj) {
      if (jObj === void 0) {
        return chars.missingChar;
      } else if (jObj === null) {
        return chars.nilChar;
      } else if (jObj.child && Object.keys(jObj.child).length === 0 && (!jObj.attrsMap || Object.keys(jObj.attrsMap).length === 0)) {
        return chars.emptyChar;
      } else {
        return true;
      }
    }
    var x2j = require_xmlstr2xmlnode();
    var buildOptions = require_util().buildOptions;
    var convert2nimn = function(node, e_schema, options) {
      options = buildOptions(options, x2j.defaultOptions, x2j.props);
      return _e(node, e_schema, options);
    };
    exports.convert2nimn = convert2nimn;
  }
});

// ../../node_modules/fast-xml-parser/src/node2json_str.js
var require_node2json_str = __commonJS({
  "../../node_modules/fast-xml-parser/src/node2json_str.js"(exports) {
    "use strict";
    var util = require_util();
    var buildOptions = require_util().buildOptions;
    var x2j = require_xmlstr2xmlnode();
    var convertToJsonString = function(node, options) {
      options = buildOptions(options, x2j.defaultOptions, x2j.props);
      options.indentBy = options.indentBy || "";
      return _cToJsonStr(node, options, 0);
    };
    var _cToJsonStr = function(node, options, level) {
      let jObj = "{";
      const keys = Object.keys(node.child);
      for (let index = 0; index < keys.length; index++) {
        const tagname = keys[index];
        if (node.child[tagname] && node.child[tagname].length > 1) {
          jObj += '"' + tagname + '" : [ ';
          for (let tag in node.child[tagname]) {
            jObj += _cToJsonStr(node.child[tagname][tag], options) + " , ";
          }
          jObj = jObj.substr(0, jObj.length - 1) + " ] ";
        } else {
          jObj += '"' + tagname + '" : ' + _cToJsonStr(node.child[tagname][0], options) + " ,";
        }
      }
      util.merge(jObj, node.attrsMap);
      if (util.isEmptyObject(jObj)) {
        return util.isExist(node.val) ? node.val : "";
      } else {
        if (util.isExist(node.val)) {
          if (!(typeof node.val === "string" && (node.val === "" || node.val === options.cdataPositionChar))) {
            jObj += '"' + options.textNodeName + '" : ' + stringval(node.val);
          }
        }
      }
      if (jObj[jObj.length - 1] === ",") {
        jObj = jObj.substr(0, jObj.length - 2);
      }
      return jObj + "}";
    };
    function stringval(v) {
      if (v === true || v === false || !isNaN(v)) {
        return v;
      } else {
        return '"' + v + '"';
      }
    }
    exports.convertToJsonString = convertToJsonString;
  }
});

// ../../node_modules/fast-xml-parser/src/json2xml.js
var require_json2xml = __commonJS({
  "../../node_modules/fast-xml-parser/src/json2xml.js"(exports, module2) {
    "use strict";
    var buildOptions = require_util().buildOptions;
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attrNodeName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataTagName: false,
      cdataPositionChar: "\\c",
      format: false,
      indentBy: "  ",
      supressEmptyNode: false,
      tagValueProcessor: function(a) {
        return a;
      },
      attrValueProcessor: function(a) {
        return a;
      }
    };
    var props = [
      "attributeNamePrefix",
      "attrNodeName",
      "textNodeName",
      "ignoreAttributes",
      "cdataTagName",
      "cdataPositionChar",
      "format",
      "indentBy",
      "supressEmptyNode",
      "tagValueProcessor",
      "attrValueProcessor",
      "rootNodeName"
    ];
    function Parser3(options) {
      this.options = buildOptions(options, defaultOptions, props);
      if (this.options.ignoreAttributes || this.options.attrNodeName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      if (this.options.cdataTagName) {
        this.isCDATA = isCDATA;
      } else {
        this.isCDATA = function() {
          return false;
        };
      }
      this.replaceCDATAstr = replaceCDATAstr;
      this.replaceCDATAarr = replaceCDATAarr;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
      if (this.options.supressEmptyNode) {
        this.buildTextNode = buildEmptyTextNode;
        this.buildObjNode = buildEmptyObjNode;
      } else {
        this.buildTextNode = buildTextValNode;
        this.buildObjNode = buildObjectNode;
      }
      this.buildTextValNode = buildTextValNode;
      this.buildObjectNode = buildObjectNode;
    }
    Parser3.prototype.parse = function(jObj) {
      if (Array.isArray(jObj) && this.options.rootNodeName && this.options.rootNodeName.length > 1) {
        jObj = {
          [this.options.rootNodeName]: jObj
        };
      }
      return this.j2x(jObj, 0).val;
    };
    Parser3.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val = "";
      const keys = Object.keys(jObj);
      const len = keys.length;
      for (let i = 0; i < len; i++) {
        const key = keys[i];
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val += this.buildTextNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += " " + attr + '="' + this.options.attrValueProcessor("" + jObj[key]) + '"';
          } else if (this.isCDATA(key)) {
            if (jObj[this.options.textNodeName]) {
              val += this.replaceCDATAstr(jObj[this.options.textNodeName], jObj[key]);
            } else {
              val += this.replaceCDATAstr("", jObj[key]);
            }
          } else {
            if (key === this.options.textNodeName) {
              if (jObj[this.options.cdataTagName]) {
              } else {
                val += this.options.tagValueProcessor("" + jObj[key]);
              }
            } else {
              val += this.buildTextNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          if (this.isCDATA(key)) {
            val += this.indentate(level);
            if (jObj[this.options.textNodeName]) {
              val += this.replaceCDATAarr(jObj[this.options.textNodeName], jObj[key]);
            } else {
              val += this.replaceCDATAarr("", jObj[key]);
            }
          } else {
            const arrLen = jObj[key].length;
            for (let j = 0; j < arrLen; j++) {
              const item = jObj[key][j];
              if (typeof item === "undefined") {
              } else if (item === null) {
                val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
              } else if (typeof item === "object") {
                const result = this.j2x(item, level + 1);
                val += this.buildObjNode(result.val, key, result.attrStr, level);
              } else {
                val += this.buildTextNode(item, key, "", level);
              }
            }
          }
        } else {
          if (this.options.attrNodeName && key === this.options.attrNodeName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += " " + Ks[j] + '="' + this.options.attrValueProcessor("" + jObj[key][Ks[j]]) + '"';
            }
          } else {
            const result = this.j2x(jObj[key], level + 1);
            val += this.buildObjNode(result.val, key, result.attrStr, level);
          }
        }
      }
      return { attrStr, val };
    };
    function replaceCDATAstr(str, cdata) {
      str = this.options.tagValueProcessor("" + str);
      if (this.options.cdataPositionChar === "" || str === "") {
        return str + "<![CDATA[" + cdata + "]]" + this.tagEndChar;
      } else {
        return str.replace(this.options.cdataPositionChar, "<![CDATA[" + cdata + "]]" + this.tagEndChar);
      }
    }
    function replaceCDATAarr(str, cdata) {
      str = this.options.tagValueProcessor("" + str);
      if (this.options.cdataPositionChar === "" || str === "") {
        return str + "<![CDATA[" + cdata.join("]]><![CDATA[") + "]]" + this.tagEndChar;
      } else {
        for (let v in cdata) {
          str = str.replace(this.options.cdataPositionChar, "<![CDATA[" + cdata[v] + "]]>");
        }
        return str + this.newLine;
      }
    }
    function buildObjectNode(val, key, attrStr, level) {
      if (attrStr && !val.includes("<")) {
        return this.indentate(level) + "<" + key + attrStr + ">" + val + "</" + key + this.tagEndChar;
      } else {
        return this.indentate(level) + "<" + key + attrStr + this.tagEndChar + val + this.indentate(level) + "</" + key + this.tagEndChar;
      }
    }
    function buildEmptyObjNode(val, key, attrStr, level) {
      if (val !== "") {
        return this.buildObjectNode(val, key, attrStr, level);
      } else {
        return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
      }
    }
    function buildTextValNode(val, key, attrStr, level) {
      return this.indentate(level) + "<" + key + attrStr + ">" + this.options.tagValueProcessor(val) + "</" + key + this.tagEndChar;
    }
    function buildEmptyTextNode(val, key, attrStr, level) {
      if (val !== "") {
        return this.buildTextValNode(val, key, attrStr, level);
      } else {
        return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
      }
    }
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name2) {
      if (name2.startsWith(this.options.attributeNamePrefix)) {
        return name2.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    function isCDATA(name2) {
      return name2 === this.options.cdataTagName;
    }
    module2.exports = Parser3;
  }
});

// ../../node_modules/fast-xml-parser/src/parser.js
var require_parser = __commonJS({
  "../../node_modules/fast-xml-parser/src/parser.js"(exports) {
    "use strict";
    var nodeToJson = require_node2json();
    var xmlToNodeobj = require_xmlstr2xmlnode();
    var x2xmlnode = require_xmlstr2xmlnode();
    var buildOptions = require_util().buildOptions;
    var validator = require_validator();
    exports.parse = function(xmlData, givenOptions = {}, validationOption) {
      if (validationOption) {
        if (validationOption === true)
          validationOption = {};
        const result = validator.validate(xmlData, validationOption);
        if (result !== true) {
          throw Error(result.err.msg);
        }
      }
      if (givenOptions.parseTrueNumberOnly && givenOptions.parseNodeValue !== false && !givenOptions.numParseOptions) {
        givenOptions.numParseOptions = {
          leadingZeros: false
        };
      }
      let options = buildOptions(givenOptions, x2xmlnode.defaultOptions, x2xmlnode.props);
      const traversableObj = xmlToNodeobj.getTraversalObj(xmlData, options);
      return nodeToJson.convertToJson(traversableObj, options);
    };
    exports.convertTonimn = require_nimndata().convert2nimn;
    exports.getTraversalObj = xmlToNodeobj.getTraversalObj;
    exports.convertToJson = nodeToJson.convertToJson;
    exports.convertToJsonString = require_node2json_str().convertToJsonString;
    exports.validate = validator.validate;
    exports.j2xParser = require_json2xml();
    exports.parseToNimn = function(xmlData, schema, options) {
      return exports.convertTonimn(exports.getTraversalObj(xmlData, options), schema, options);
    };
  }
});

// ../../node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "../../node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    "use strict";
    module2.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// ../../node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/axios/lib/utils.js"(exports, module2) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return toString.call(val) === "[object Array]";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer4(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile2(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob3(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray,
      isArrayBuffer: isArrayBuffer4,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile: isFile2,
      isBlob: isBlob3,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// ../../node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "../../node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// ../../node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "../../node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// ../../node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "../../node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name2) {
        if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name2];
        }
      });
    };
  }
});

// ../../node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "../../node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    "use strict";
    module2.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
  }
});

// ../../node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "../../node_modules/axios/lib/core/createError.js"(exports, module2) {
    "use strict";
    var enhanceError = require_enhanceError();
    module2.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// ../../node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "../../node_modules/axios/lib/core/settle.js"(exports, module2) {
    "use strict";
    var createError = require_createError();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// ../../node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "../../node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name2, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name2 + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name2) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name2) {
          this.write(name2, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// ../../node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "../../node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// ../../node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "../../node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// ../../node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "../../node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// ../../node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "../../node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// ../../node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "../../node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// ../../node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "../../node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    module2.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(resolve, reject, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// ../../node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "../../node_modules/axios/lib/defaults.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// ../../node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "../../node_modules/axios/lib/core/transformData.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// ../../node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "../../node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// ../../node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "../../node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    module2.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// ../../node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "../../node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config;
    };
  }
});

// ../../node_modules/axios/package.json
var require_package = __commonJS({
  "../../node_modules/axios/package.json"(exports, module2) {
    module2.exports = {
      name: "axios",
      version: "0.21.4",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/axios/axios.git"
      },
      keywords: [
        "xhr",
        "http",
        "ajax",
        "promise",
        "node"
      ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/axios/axios/issues"
      },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.14.0"
      },
      bundlesize: [
        {
          path: "./dist/axios.min.js",
          threshold: "5kB"
        }
      ]
    };
  }
});

// ../../node_modules/axios/lib/helpers/validator.js
var require_validator2 = __commonJS({
  "../../node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    "use strict";
    var pkg = require_package();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split(".");
    function isOlderVersion(version2, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
      var destVer = version2.split(".");
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) {
          return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
          return false;
        }
      }
      return false;
    }
    validators.transitional = function transitional(validator, version2, message) {
      var isDeprecated = version2 && isOlderVersion(version2);
      function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed in " + version2));
        }
        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      isOlderVersion,
      assertOptions,
      validators
    };
  }
});

// ../../node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "../../node_modules/axios/lib/core/Axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator2();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// ../../node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "../../node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// ../../node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "../../node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// ../../node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "../../node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// ../../node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "../../node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// ../../node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "../../node_modules/axios/lib/axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios4 = createInstance(defaults);
    axios4.Axios = Axios;
    axios4.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios4.defaults, instanceConfig));
    };
    axios4.Cancel = require_Cancel();
    axios4.CancelToken = require_CancelToken();
    axios4.isCancel = require_isCancel();
    axios4.all = function all(promises) {
      return Promise.all(promises);
    };
    axios4.spread = require_spread();
    axios4.isAxiosError = require_isAxiosError();
    module2.exports = axios4;
    module2.exports.default = axios4;
  }
});

// ../../node_modules/axios/index.js
var require_axios2 = __commonJS({
  "../../node_modules/axios/index.js"(exports, module2) {
    module2.exports = require_axios();
  }
});

// ../../node_modules/events/events.js
var require_events = __commonJS({
  "../../node_modules/events/events.js"(exports, module2) {
    "use strict";
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn)
        console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter3() {
      EventEmitter3.init.call(this);
    }
    module2.exports = EventEmitter3;
    module2.exports.once = once;
    EventEmitter3.EventEmitter = EventEmitter3;
    EventEmitter3.prototype._events = void 0;
    EventEmitter3.prototype._eventsCount = 0;
    EventEmitter3.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter3, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter3.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter3.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter3.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter3.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter3.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++)
        args.push(arguments[i]);
      var doError = type === "error";
      var events3 = this._events;
      if (events3 !== void 0)
        doError = doError && events3.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events3[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events3;
      var existing;
      checkListener(listener);
      events3 = target._events;
      if (events3 === void 0) {
        events3 = target._events = Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events3.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events3 = target._events;
        }
        existing = events3[type];
      }
      if (existing === void 0) {
        existing = events3[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events3[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter3.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter3.prototype.on = EventEmitter3.prototype.addListener;
    EventEmitter3.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter3.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter3.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter3.prototype.removeListener = function removeListener(type, listener) {
      var list, events3, position, i, originalListener;
      checkListener(listener);
      events3 = this._events;
      if (events3 === void 0)
        return this;
      list = events3[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events3[type];
          if (events3.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events3[type] = list[0];
        if (events3.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter3.prototype.off = EventEmitter3.prototype.removeListener;
    EventEmitter3.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events3, i;
      events3 = this._events;
      if (events3 === void 0)
        return this;
      if (events3.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events3[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events3[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events3);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events3[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events3 = target._events;
      if (events3 === void 0)
        return [];
      var evlistener = events3[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter3.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter3.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter3.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter3.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events3 = this._events;
      if (events3 !== void 0) {
        var evlistener = events3[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter3.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once(emitter, name2) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name2, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name2, resolver, { once: true });
        if (name2 !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name2, listener);
        } else {
          emitter.on(name2, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name2, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name2, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// src/Storage.ts
import { ConsoleLogger as Logger5, Parser as Parser2 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/providers/AWSS3Provider.ts
import {
  ConsoleLogger as Logger4,
  Credentials as Credentials3,
  Parser,
  getAmplifyUserAgent as getAmplifyUserAgent2,
  StorageHelper,
  Hub as Hub2
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// ../../node_modules/@aws-sdk/client-s3/node_modules/tslib/modules/index.js
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

// ../../node_modules/@aws-sdk/client-s3/dist/es/package.json
var name = "@aws-sdk/client-s3";
var description = "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native";
var version = "3.6.1";
var scripts = {
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
  "@aws-sdk/eventstream-serde-browser": "3.6.1",
  "@aws-sdk/eventstream-serde-config-resolver": "3.6.1",
  "@aws-sdk/eventstream-serde-node": "3.6.1",
  "@aws-sdk/fetch-http-handler": "3.6.1",
  "@aws-sdk/hash-blob-browser": "3.6.1",
  "@aws-sdk/hash-node": "3.6.1",
  "@aws-sdk/hash-stream-node": "3.6.1",
  "@aws-sdk/invalid-dependency": "3.6.1",
  "@aws-sdk/md5-js": "3.6.1",
  "@aws-sdk/middleware-apply-body-checksum": "3.6.1",
  "@aws-sdk/middleware-bucket-endpoint": "3.6.1",
  "@aws-sdk/middleware-content-length": "3.6.1",
  "@aws-sdk/middleware-expect-continue": "3.6.1",
  "@aws-sdk/middleware-host-header": "3.6.1",
  "@aws-sdk/middleware-location-constraint": "3.6.1",
  "@aws-sdk/middleware-logger": "3.6.1",
  "@aws-sdk/middleware-retry": "3.6.1",
  "@aws-sdk/middleware-sdk-s3": "3.6.1",
  "@aws-sdk/middleware-serde": "3.6.1",
  "@aws-sdk/middleware-signing": "3.6.1",
  "@aws-sdk/middleware-ssec": "3.6.1",
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
  "@aws-sdk/xml-builder": "3.6.1",
  "fast-xml-parser": "^3.16.0",
  tslib: "^2.0.0"
};
var devDependencies = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@types/chai": "^4.2.11",
  "@types/mocha": "^8.0.4",
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
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3";
var repository = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-s3"
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

// ../../node_modules/@aws-sdk/client-s3/dist/es/runtimeConfig.browser.js
var import_sha256_browser = __toModule(require_build5());

// ../../node_modules/@aws-sdk/eventstream-marshaller/dist/es/EventStreamMarshaller.js
var import_crc322 = __toModule(require_build6());

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

// ../../node_modules/@aws-sdk/eventstream-marshaller/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js
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
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  var out = new Uint8Array(encoded.length / 2);
  for (var i = 0; i < encoded.length; i += 2) {
    var encodedByte = encoded.substr(i, 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error("Cannot decode unrecognized sequence " + encodedByte + " as hexadecimal");
    }
  }
  return out;
}
function toHex(bytes) {
  var out = "";
  for (var i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX[bytes[i]];
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
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
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
  function HeaderMarshaller2(toUtf82, fromUtf83) {
    this.toUtf8 = toUtf82;
    this.fromUtf8 = fromUtf83;
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
      var name2 = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name2] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name2] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name2] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name2] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name2] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name2] = {
            type: LONG_TAG,
            value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          var binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name2] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          var stringLength = headers.getUint16(position, false);
          position += 2;
          out[name2] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name2] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          var uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name2] = {
            type: UUID_TAG,
            value: toHex(uuidBytes.subarray(0, 4)) + "-" + toHex(uuidBytes.subarray(4, 6)) + "-" + toHex(uuidBytes.subarray(6, 8)) + "-" + toHex(uuidBytes.subarray(8, 10)) + "-" + toHex(uuidBytes.subarray(10))
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
  var byteLength2 = _a.byteLength, byteOffset = _a.byteOffset, buffer = _a.buffer;
  if (byteLength2 < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  var view = new DataView(buffer, byteOffset, byteLength2);
  var messageLength = view.getUint32(0, false);
  if (byteLength2 !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  var headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  var expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  var expectedMessageChecksum = view.getUint32(byteLength2 - CHECKSUM_LENGTH, false);
  var checksummer = new import_crc32.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error("The prelude checksum specified in the message (" + expectedPreludeChecksum + ") does not match the calculated CRC32 checksum (" + checksummer.digest() + ")");
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength2 - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
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
  function EventStreamMarshaller4(toUtf82, fromUtf83) {
    this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf83);
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
  function HttpRequest3(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.substr(-1) !== ":" ? options.protocol + ":" : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? "/" + options.path : options.path : "/";
  }
  HttpRequest3.isInstance = function(request) {
    if (!request)
      return false;
    var req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  };
  HttpRequest3.prototype.clone = function() {
    var cloned = new HttpRequest3(__assign2(__assign2({}, this), { headers: __assign2({}, this.headers) }));
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  };
  return HttpRequest3;
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
    var _b = _a === void 0 ? {} : _a, requestTimeout3 = _b.requestTimeout;
    this.requestTimeout = requestTimeout3;
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
    var byteLength2 = Math.floor(bitLength / bitsPerByte);
    for (var k = 0; k < byteLength2; k++) {
      var offset = (byteLength2 - k - 1) * bitsPerByte;
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

// ../../node_modules/@aws-sdk/chunked-blob-reader/dist/es/index.js
function blobReader(blob, onChunk, chunkSize) {
  if (chunkSize === void 0) {
    chunkSize = 1024 * 1024;
  }
  return new Promise(function(resolve, reject) {
    var fileReader = new FileReader();
    fileReader.addEventListener("error", reject);
    fileReader.addEventListener("abort", reject);
    var size = blob.size;
    var totalBytesRead = 0;
    function read() {
      if (totalBytesRead >= size) {
        resolve();
        return;
      }
      fileReader.readAsArrayBuffer(blob.slice(totalBytesRead, Math.min(size, totalBytesRead + chunkSize)));
    }
    fileReader.addEventListener("load", function(event) {
      var result = event.target.result;
      onChunk(new Uint8Array(result));
      totalBytesRead += result.byteLength;
      read();
    });
    read();
  });
}

// ../../node_modules/@aws-sdk/hash-blob-browser/dist/es/index.js
var blobHasher = function blobHasher2(hashCtor, blob) {
  return __awaiter2(this, void 0, void 0, function() {
    var hash;
    return __generator2(this, function(_a) {
      switch (_a.label) {
        case 0:
          hash = new hashCtor();
          return [4, blobReader(blob, function(chunk) {
            hash.update(chunk);
          })];
        case 1:
          _a.sent();
          return [2, hash.digest()];
      }
    });
  });
};

// ../../node_modules/@aws-sdk/invalid-dependency/dist/es/invalidProvider.js
var invalidProvider = function(message) {
  return function() {
    return Promise.reject(message);
  };
};

// ../../node_modules/@aws-sdk/md5-js/dist/es/index.js
var import_util_utf8_browser = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/md5-js/dist/es/constants.js
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 16;
var INIT = [1732584193, 4023233417, 2562383102, 271733878];

// ../../node_modules/@aws-sdk/md5-js/dist/es/index.js
var Md5 = function() {
  function Md52() {
    this.state = Uint32Array.from(INIT);
    this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
  }
  Md52.prototype.update = function(sourceData) {
    if (isEmptyData(sourceData)) {
      return;
    } else if (this.finished) {
      throw new Error("Attempted to update an already finished hash.");
    }
    var data = convertToBuffer(sourceData);
    var position = 0;
    var byteLength2 = data.byteLength;
    this.bytesHashed += byteLength2;
    while (byteLength2 > 0) {
      this.buffer.setUint8(this.bufferLength++, data[position++]);
      byteLength2--;
      if (this.bufferLength === BLOCK_SIZE) {
        this.hashBuffer();
        this.bufferLength = 0;
      }
    }
  };
  Md52.prototype.digest = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var _a, buffer, undecoratedLength, bytesHashed, bitsHashed, i, i, out, i;
      return __generator2(this, function(_b) {
        if (!this.finished) {
          _a = this, buffer = _a.buffer, undecoratedLength = _a.bufferLength, bytesHashed = _a.bytesHashed;
          bitsHashed = bytesHashed * 8;
          buffer.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (i = this.bufferLength; i < BLOCK_SIZE; i++) {
              buffer.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
            buffer.setUint8(i, 0);
          }
          buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
          buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 4294967296), true);
          this.hashBuffer();
          this.finished = true;
        }
        out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
        for (i = 0; i < 4; i++) {
          out.setUint32(i * 4, this.state[i], true);
        }
        return [2, new Uint8Array(out.buffer, out.byteOffset, out.byteLength)];
      });
    });
  };
  Md52.prototype.hashBuffer = function() {
    var _a = this, buffer = _a.buffer, state = _a.state;
    var a = state[0], b = state[1], c = state[2], d = state[3];
    a = ff(a, b, c, d, buffer.getUint32(0, true), 7, 3614090360);
    d = ff(d, a, b, c, buffer.getUint32(4, true), 12, 3905402710);
    c = ff(c, d, a, b, buffer.getUint32(8, true), 17, 606105819);
    b = ff(b, c, d, a, buffer.getUint32(12, true), 22, 3250441966);
    a = ff(a, b, c, d, buffer.getUint32(16, true), 7, 4118548399);
    d = ff(d, a, b, c, buffer.getUint32(20, true), 12, 1200080426);
    c = ff(c, d, a, b, buffer.getUint32(24, true), 17, 2821735955);
    b = ff(b, c, d, a, buffer.getUint32(28, true), 22, 4249261313);
    a = ff(a, b, c, d, buffer.getUint32(32, true), 7, 1770035416);
    d = ff(d, a, b, c, buffer.getUint32(36, true), 12, 2336552879);
    c = ff(c, d, a, b, buffer.getUint32(40, true), 17, 4294925233);
    b = ff(b, c, d, a, buffer.getUint32(44, true), 22, 2304563134);
    a = ff(a, b, c, d, buffer.getUint32(48, true), 7, 1804603682);
    d = ff(d, a, b, c, buffer.getUint32(52, true), 12, 4254626195);
    c = ff(c, d, a, b, buffer.getUint32(56, true), 17, 2792965006);
    b = ff(b, c, d, a, buffer.getUint32(60, true), 22, 1236535329);
    a = gg(a, b, c, d, buffer.getUint32(4, true), 5, 4129170786);
    d = gg(d, a, b, c, buffer.getUint32(24, true), 9, 3225465664);
    c = gg(c, d, a, b, buffer.getUint32(44, true), 14, 643717713);
    b = gg(b, c, d, a, buffer.getUint32(0, true), 20, 3921069994);
    a = gg(a, b, c, d, buffer.getUint32(20, true), 5, 3593408605);
    d = gg(d, a, b, c, buffer.getUint32(40, true), 9, 38016083);
    c = gg(c, d, a, b, buffer.getUint32(60, true), 14, 3634488961);
    b = gg(b, c, d, a, buffer.getUint32(16, true), 20, 3889429448);
    a = gg(a, b, c, d, buffer.getUint32(36, true), 5, 568446438);
    d = gg(d, a, b, c, buffer.getUint32(56, true), 9, 3275163606);
    c = gg(c, d, a, b, buffer.getUint32(12, true), 14, 4107603335);
    b = gg(b, c, d, a, buffer.getUint32(32, true), 20, 1163531501);
    a = gg(a, b, c, d, buffer.getUint32(52, true), 5, 2850285829);
    d = gg(d, a, b, c, buffer.getUint32(8, true), 9, 4243563512);
    c = gg(c, d, a, b, buffer.getUint32(28, true), 14, 1735328473);
    b = gg(b, c, d, a, buffer.getUint32(48, true), 20, 2368359562);
    a = hh(a, b, c, d, buffer.getUint32(20, true), 4, 4294588738);
    d = hh(d, a, b, c, buffer.getUint32(32, true), 11, 2272392833);
    c = hh(c, d, a, b, buffer.getUint32(44, true), 16, 1839030562);
    b = hh(b, c, d, a, buffer.getUint32(56, true), 23, 4259657740);
    a = hh(a, b, c, d, buffer.getUint32(4, true), 4, 2763975236);
    d = hh(d, a, b, c, buffer.getUint32(16, true), 11, 1272893353);
    c = hh(c, d, a, b, buffer.getUint32(28, true), 16, 4139469664);
    b = hh(b, c, d, a, buffer.getUint32(40, true), 23, 3200236656);
    a = hh(a, b, c, d, buffer.getUint32(52, true), 4, 681279174);
    d = hh(d, a, b, c, buffer.getUint32(0, true), 11, 3936430074);
    c = hh(c, d, a, b, buffer.getUint32(12, true), 16, 3572445317);
    b = hh(b, c, d, a, buffer.getUint32(24, true), 23, 76029189);
    a = hh(a, b, c, d, buffer.getUint32(36, true), 4, 3654602809);
    d = hh(d, a, b, c, buffer.getUint32(48, true), 11, 3873151461);
    c = hh(c, d, a, b, buffer.getUint32(60, true), 16, 530742520);
    b = hh(b, c, d, a, buffer.getUint32(8, true), 23, 3299628645);
    a = ii(a, b, c, d, buffer.getUint32(0, true), 6, 4096336452);
    d = ii(d, a, b, c, buffer.getUint32(28, true), 10, 1126891415);
    c = ii(c, d, a, b, buffer.getUint32(56, true), 15, 2878612391);
    b = ii(b, c, d, a, buffer.getUint32(20, true), 21, 4237533241);
    a = ii(a, b, c, d, buffer.getUint32(48, true), 6, 1700485571);
    d = ii(d, a, b, c, buffer.getUint32(12, true), 10, 2399980690);
    c = ii(c, d, a, b, buffer.getUint32(40, true), 15, 4293915773);
    b = ii(b, c, d, a, buffer.getUint32(4, true), 21, 2240044497);
    a = ii(a, b, c, d, buffer.getUint32(32, true), 6, 1873313359);
    d = ii(d, a, b, c, buffer.getUint32(60, true), 10, 4264355552);
    c = ii(c, d, a, b, buffer.getUint32(24, true), 15, 2734768916);
    b = ii(b, c, d, a, buffer.getUint32(52, true), 21, 1309151649);
    a = ii(a, b, c, d, buffer.getUint32(16, true), 6, 4149444226);
    d = ii(d, a, b, c, buffer.getUint32(44, true), 10, 3174756917);
    c = ii(c, d, a, b, buffer.getUint32(8, true), 15, 718787259);
    b = ii(b, c, d, a, buffer.getUint32(36, true), 21, 3951481745);
    state[0] = a + state[0] & 4294967295;
    state[1] = b + state[1] & 4294967295;
    state[2] = c + state[2] & 4294967295;
    state[3] = d + state[3] & 4294967295;
  };
  return Md52;
}();
function cmn(q, a, b, x, s, t) {
  a = (a + q & 4294967295) + (x + t & 4294967295) & 4294967295;
  return (a << s | a >>> 32 - s) + b & 4294967295;
}
function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
function convertToBuffer(data) {
  if (typeof data === "string") {
    return (0, import_util_utf8_browser.fromUtf8)(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

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

// ../../node_modules/@aws-sdk/client-s3/dist/es/runtimeConfig.browser.js
var import_util_utf8_browser2 = __toModule(require_cjs());

// ../../node_modules/@aws-sdk/client-s3/dist/es/endpoints.js
var AWS_TEMPLATE = "s3.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "s3.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "s3.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "s3.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "s3.{region}.amazonaws.com";
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
        hostname: "s3.af-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-east-1":
      regionInfo = {
        hostname: "s3.ap-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "s3.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "s3.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "s3.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "s3.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "s3.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "aws-global":
      regionInfo = {
        hostname: "s3.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "s3.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "s3.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "s3.cn-northwest-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "s3.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "s3.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-south-1":
      regionInfo = {
        hostname: "s3.eu-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "s3.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "s3.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "s3.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-gov-west-1":
      regionInfo = {
        hostname: "s3-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "s3.me-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "s3-external-1":
      regionInfo = {
        hostname: "s3-external-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "s3.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "s3.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "s3.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "s3.us-gov-east-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "s3.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "s3.us-iso-east-1.c2s.ic.gov",
        partition: "aws-iso"
      };
      break;
    case "us-isob-east-1":
      regionInfo = {
        hostname: "s3.us-isob-east-1.sc2s.sgov.gov",
        partition: "aws-iso-b"
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "s3.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "s3.us-west-2.amazonaws.com",
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
  return Promise.resolve(__assign({ signingService: "s3" }, regionInfo));
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

// ../../node_modules/@aws-sdk/client-s3/dist/es/runtimeConfig.shared.js
var ClientSharedValues = {
  apiVersion: "2006-03-01",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "S3",
  signingEscapePath: false,
  urlParser: parseUrl,
  useArnRegion: false
};

// ../../node_modules/@aws-sdk/client-s3/dist/es/runtimeConfig.browser.js
var ClientDefaultValues = __assign(__assign({}, ClientSharedValues), {
  runtime: "browser",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider: function(_) {
    return function() {
      return Promise.reject(new Error("Credential is missing"));
    };
  },
  defaultUserAgentProvider: defaultUserAgent({
    serviceId: ClientSharedValues.serviceId,
    clientVersion: package_default.version
  }),
  eventStreamSerdeProvider,
  maxAttempts: DEFAULT_MAX_ATTEMPTS,
  md5: Md5,
  region: invalidProvider("Region is missing"),
  requestHandler: new FetchHttpHandler(),
  sha256: import_sha256_browser.Sha256,
  streamCollector,
  streamHasher: blobHasher,
  utf8Decoder: import_util_utf8_browser2.fromUtf8,
  utf8Encoder: import_util_utf8_browser2.toUtf8
});

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

// ../../node_modules/@aws-sdk/eventstream-serde-config-resolver/dist/es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = function(input) {
  return __assign2(__assign2({}, input), { eventStreamMarshaller: input.eventStreamSerdeProvider(input) });
};

// ../../node_modules/@aws-sdk/middleware-bucket-endpoint/node_modules/@aws-sdk/util-arn-parser/dist/es/index.js
var validate = function(str) {
  return typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;
};
var parse = function(arn) {
  var segments = arn.split(":");
  if (segments.length < 6 || segments[0] !== "arn")
    throw new Error("Malformed ARN");
  var _a = __read2(segments), partition = _a[1], service = _a[2], region = _a[3], accountId = _a[4], resource = _a.slice(5);
  return {
    partition,
    service,
    region,
    accountId,
    resource: resource.join(":")
  };
};

// ../../node_modules/@aws-sdk/middleware-bucket-endpoint/dist/es/bucketHostnameUtils.js
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var DOT_PATTERN = /\./;
var S3_HOSTNAME_PATTERN = /^(.+\.)?s3[.-]([a-z0-9-]+)\./;
var S3_US_EAST_1_ALTNAME_PATTERN = /^s3(-external-1)?\.amazonaws\.com$/;
var AWS_PARTITION_SUFFIX = "amazonaws.com";
var isBucketNameOptions = function(options) {
  return typeof options.bucketName === "string";
};
var getPseudoRegion = function(region) {
  return isFipsRegion(region) ? region.replace(/fips-|-fips/, "") : region;
};
var isDnsCompatibleBucketName = function(bucketName) {
  return DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
};
var getRegionalSuffix = function(hostname) {
  var parts = hostname.match(S3_HOSTNAME_PATTERN);
  return [parts[2], hostname.replace(new RegExp("^" + parts[0]), "")];
};
var getSuffix = function(hostname) {
  return S3_US_EAST_1_ALTNAME_PATTERN.test(hostname) ? ["us-east-1", AWS_PARTITION_SUFFIX] : getRegionalSuffix(hostname);
};
var getSuffixForArnEndpoint = function(hostname) {
  return S3_US_EAST_1_ALTNAME_PATTERN.test(hostname) ? [hostname.replace("." + AWS_PARTITION_SUFFIX, ""), AWS_PARTITION_SUFFIX] : getRegionalSuffix(hostname);
};
var validateArnEndpointOptions = function(options) {
  if (options.pathStyleEndpoint) {
    throw new Error("Path-style S3 endpoint is not supported when bucket is an ARN");
  }
  if (options.accelerateEndpoint) {
    throw new Error("Accelerate endpoint is not supported when bucket is an ARN");
  }
  if (!options.tlsCompatible) {
    throw new Error("HTTPS is required when bucket is an ARN");
  }
};
var validateService = function(service) {
  if (service !== "s3" && service !== "s3-outposts") {
    throw new Error("Expect 's3' or 's3-outposts' in ARN service component");
  }
};
var validateS3Service = function(service) {
  if (service !== "s3") {
    throw new Error("Expect 's3' in Accesspoint ARN service component");
  }
};
var validateOutpostService = function(service) {
  if (service !== "s3-outposts") {
    throw new Error("Expect 's3-posts' in Outpost ARN service component");
  }
};
var validatePartition = function(partition, options) {
  if (partition !== options.clientPartition) {
    throw new Error('Partition in ARN is incompatible, got "' + partition + '" but expected "' + options.clientPartition + '"');
  }
};
var validateRegion = function(region, options) {
  if (region === "") {
    throw new Error("ARN region is empty");
  }
  if (!options.useArnRegion && !isEqualRegions(region, options.clientRegion) && !isEqualRegions(region, options.clientSigningRegion)) {
    throw new Error("Region in ARN is incompatible, got " + region + " but expected " + options.clientRegion);
  }
  if (options.useArnRegion && isFipsRegion(region)) {
    throw new Error("Endpoint does not support FIPS region");
  }
};
var isFipsRegion = function(region) {
  return region.startsWith("fips-") || region.endsWith("-fips");
};
var isEqualRegions = function(regionA, regionB) {
  return regionA === regionB || getPseudoRegion(regionA) === regionB || regionA === getPseudoRegion(regionB);
};
var validateAccountId = function(accountId) {
  if (!/[0-9]{12}/.exec(accountId)) {
    throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
  }
};
var validateDNSHostLabel = function(label, options) {
  if (options === void 0) {
    options = { tlsCompatible: true };
  }
  if (label.length >= 64 || !/^[a-z0-9][a-z0-9.-]+[a-z0-9]$/.test(label) || /(\d+\.){3}\d+/.test(label) || /[.-]{2}/.test(label) || (options === null || options === void 0 ? void 0 : options.tlsCompatible) && DOT_PATTERN.test(label)) {
    throw new Error("Invalid DNS label " + label);
  }
};
var getArnResources = function(resource) {
  var delimiter = resource.includes(":") ? ":" : "/";
  var _a = __read2(resource.split(delimiter)), resourceType = _a[0], rest = _a.slice(1);
  if (resourceType === "accesspoint") {
    if (rest.length !== 1 || rest[0] === "") {
      throw new Error("Access Point ARN should have one resource accesspoint" + delimiter + "{accesspointname}");
    }
    return { accesspointName: rest[0] };
  } else if (resourceType === "outpost") {
    if (!rest[0] || rest[1] !== "accesspoint" || !rest[2] || rest.length !== 3) {
      throw new Error("Outpost ARN should have resource outpost" + delimiter + "{outpostId}" + delimiter + "accesspoint" + delimiter + "{accesspointName}");
    }
    var _b = __read2(rest, 3), outpostId = _b[0], _ = _b[1], accesspointName = _b[2];
    return { outpostId, accesspointName };
  } else {
    throw new Error("ARN resource should begin with 'accesspoint" + delimiter + "' or 'outpost" + delimiter + "'");
  }
};
var validateNoDualstack = function(dualstackEndpoint) {
  if (dualstackEndpoint)
    throw new Error("Dualstack endpoint is not supported with Outpost");
};
var validateNoFIPS = function(region) {
  if (isFipsRegion(region !== null && region !== void 0 ? region : ""))
    throw new Error("FIPS region is not supported with Outpost, got " + region);
};

// ../../node_modules/@aws-sdk/middleware-bucket-endpoint/dist/es/bucketHostname.js
var bucketHostname = function(options) {
  var isCustomEndpoint = options.isCustomEndpoint, baseHostname = options.baseHostname, dualstackEndpoint = options.dualstackEndpoint, accelerateEndpoint = options.accelerateEndpoint;
  if (isCustomEndpoint) {
    if (dualstackEndpoint)
      throw new Error("Dualstack endpoint is not supported with custom endpoint");
    if (accelerateEndpoint)
      throw new Error("Accelerate endpoint is not supported with custom endpoint");
  }
  return isBucketNameOptions(options) ? getEndpointFromBucketName(__assign2(__assign2({}, options), { isCustomEndpoint })) : getEndpointFromArn(__assign2(__assign2({}, options), { isCustomEndpoint }));
};
var getEndpointFromArn = function(options) {
  var isCustomEndpoint = options.isCustomEndpoint, baseHostname = options.baseHostname;
  var _a = __read2(isCustomEndpoint ? [options.clientRegion, baseHostname] : getSuffixForArnEndpoint(baseHostname), 2), clientRegion = _a[0], hostnameSuffix = _a[1];
  var pathStyleEndpoint = options.pathStyleEndpoint, _b = options.dualstackEndpoint, dualstackEndpoint = _b === void 0 ? false : _b, _c = options.accelerateEndpoint, accelerateEndpoint = _c === void 0 ? false : _c, _d = options.tlsCompatible, tlsCompatible = _d === void 0 ? true : _d, useArnRegion = options.useArnRegion, bucketName = options.bucketName, _e = options.clientPartition, clientPartition = _e === void 0 ? "aws" : _e, _f = options.clientSigningRegion, clientSigningRegion = _f === void 0 ? clientRegion : _f;
  validateArnEndpointOptions({ pathStyleEndpoint, accelerateEndpoint, tlsCompatible });
  var service = bucketName.service, partition = bucketName.partition, accountId = bucketName.accountId, region = bucketName.region, resource = bucketName.resource;
  validateService(service);
  validatePartition(partition, { clientPartition });
  validateAccountId(accountId);
  validateRegion(region, { useArnRegion, clientRegion, clientSigningRegion });
  var _g = getArnResources(resource), accesspointName = _g.accesspointName, outpostId = _g.outpostId;
  validateDNSHostLabel(accesspointName + "-" + accountId, { tlsCompatible });
  var endpointRegion = useArnRegion ? region : clientRegion;
  var signingRegion = useArnRegion ? region : clientSigningRegion;
  if (outpostId) {
    validateOutpostService(service);
    validateDNSHostLabel(outpostId, { tlsCompatible });
    validateNoDualstack(dualstackEndpoint);
    validateNoFIPS(endpointRegion);
    var hostnamePrefix_1 = accesspointName + "-" + accountId + "." + outpostId;
    return {
      bucketEndpoint: true,
      hostname: "" + hostnamePrefix_1 + (isCustomEndpoint ? "" : ".s3-outposts." + endpointRegion) + "." + hostnameSuffix,
      signingRegion,
      signingService: "s3-outposts"
    };
  }
  validateS3Service(service);
  var hostnamePrefix = accesspointName + "-" + accountId;
  return {
    bucketEndpoint: true,
    hostname: "" + hostnamePrefix + (isCustomEndpoint ? "" : ".s3-accesspoint" + (dualstackEndpoint ? ".dualstack" : "") + "." + endpointRegion) + "." + hostnameSuffix,
    signingRegion
  };
};
var getEndpointFromBucketName = function(_a) {
  var _b = _a.accelerateEndpoint, accelerateEndpoint = _b === void 0 ? false : _b, region = _a.clientRegion, baseHostname = _a.baseHostname, bucketName = _a.bucketName, _c = _a.dualstackEndpoint, dualstackEndpoint = _c === void 0 ? false : _c, _d = _a.pathStyleEndpoint, pathStyleEndpoint = _d === void 0 ? false : _d, _e = _a.tlsCompatible, tlsCompatible = _e === void 0 ? true : _e, _f = _a.isCustomEndpoint, isCustomEndpoint = _f === void 0 ? false : _f;
  var _g = __read2(isCustomEndpoint ? [region, baseHostname] : getSuffix(baseHostname), 2), clientRegion = _g[0], hostnameSuffix = _g[1];
  if (pathStyleEndpoint || !isDnsCompatibleBucketName(bucketName) || tlsCompatible && DOT_PATTERN.test(bucketName)) {
    return {
      bucketEndpoint: false,
      hostname: dualstackEndpoint ? "s3.dualstack." + clientRegion + "." + hostnameSuffix : baseHostname
    };
  }
  if (accelerateEndpoint) {
    baseHostname = "s3-accelerate" + (dualstackEndpoint ? ".dualstack" : "") + "." + hostnameSuffix;
  } else if (dualstackEndpoint) {
    baseHostname = "s3.dualstack." + clientRegion + "." + hostnameSuffix;
  }
  return {
    bucketEndpoint: true,
    hostname: bucketName + "." + baseHostname
  };
};

// ../../node_modules/@aws-sdk/middleware-bucket-endpoint/dist/es/bucketEndpointMiddleware.js
var bucketEndpointMiddleware = function(options) {
  return function(next, context) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var bucketName, replaceBucketInPath, request, bucketArn, clientRegion, _a, _b, partition, _c, signingRegion, useArnRegion, _d, hostname, bucketEndpoint, modifiedSigningRegion, signingService, clientRegion, _e, _f, hostname, bucketEndpoint;
        return __generator2(this, function(_g) {
          switch (_g.label) {
            case 0:
              bucketName = args.input.Bucket;
              replaceBucketInPath = options.bucketEndpoint;
              request = args.request;
              if (!HttpRequest.isInstance(request))
                return [3, 8];
              if (!options.bucketEndpoint)
                return [3, 1];
              request.hostname = bucketName;
              return [3, 7];
            case 1:
              if (!validate(bucketName))
                return [3, 5];
              bucketArn = parse(bucketName);
              _a = getPseudoRegion;
              return [4, options.region()];
            case 2:
              clientRegion = _a.apply(void 0, [_g.sent()]);
              return [4, options.regionInfoProvider(clientRegion)];
            case 3:
              _b = _g.sent() || {}, partition = _b.partition, _c = _b.signingRegion, signingRegion = _c === void 0 ? clientRegion : _c;
              return [4, options.useArnRegion()];
            case 4:
              useArnRegion = _g.sent();
              _d = bucketHostname({
                bucketName: bucketArn,
                baseHostname: request.hostname,
                accelerateEndpoint: options.useAccelerateEndpoint,
                dualstackEndpoint: options.useDualstackEndpoint,
                pathStyleEndpoint: options.forcePathStyle,
                tlsCompatible: request.protocol === "https:",
                useArnRegion,
                clientPartition: partition,
                clientSigningRegion: signingRegion,
                clientRegion,
                isCustomEndpoint: options.isCustomEndpoint
              }), hostname = _d.hostname, bucketEndpoint = _d.bucketEndpoint, modifiedSigningRegion = _d.signingRegion, signingService = _d.signingService;
              if (modifiedSigningRegion && modifiedSigningRegion !== signingRegion) {
                context["signing_region"] = modifiedSigningRegion;
              }
              if (signingService && signingService !== "s3") {
                context["signing_service"] = signingService;
              }
              request.hostname = hostname;
              replaceBucketInPath = bucketEndpoint;
              return [3, 7];
            case 5:
              _e = getPseudoRegion;
              return [4, options.region()];
            case 6:
              clientRegion = _e.apply(void 0, [_g.sent()]);
              _f = bucketHostname({
                bucketName,
                clientRegion,
                baseHostname: request.hostname,
                accelerateEndpoint: options.useAccelerateEndpoint,
                dualstackEndpoint: options.useDualstackEndpoint,
                pathStyleEndpoint: options.forcePathStyle,
                tlsCompatible: request.protocol === "https:",
                isCustomEndpoint: options.isCustomEndpoint
              }), hostname = _f.hostname, bucketEndpoint = _f.bucketEndpoint;
              request.hostname = hostname;
              replaceBucketInPath = bucketEndpoint;
              _g.label = 7;
            case 7:
              if (replaceBucketInPath) {
                request.path = request.path.replace(/^(\/)?[^\/]+/, "");
                if (request.path === "") {
                  request.path = "/";
                }
              }
              _g.label = 8;
            case 8:
              return [2, next(__assign2(__assign2({}, args), { request }))];
          }
        });
      });
    };
  };
};
var bucketEndpointMiddlewareOptions = {
  tags: ["BUCKET_ENDPOINT"],
  name: "bucketEndpointMiddleware",
  relation: "before",
  toMiddleware: "hostHeaderMiddleware",
  override: true
};
var getBucketEndpointPlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/middleware-bucket-endpoint/dist/es/configurations.js
function resolveBucketEndpointConfig(input) {
  var _a = input.bucketEndpoint, bucketEndpoint = _a === void 0 ? false : _a, _b = input.forcePathStyle, forcePathStyle = _b === void 0 ? false : _b, _c = input.useAccelerateEndpoint, useAccelerateEndpoint = _c === void 0 ? false : _c, _d = input.useDualstackEndpoint, useDualstackEndpoint = _d === void 0 ? false : _d, _e = input.useArnRegion, useArnRegion = _e === void 0 ? false : _e;
  return __assign2(__assign2({}, input), {
    bucketEndpoint,
    forcePathStyle,
    useAccelerateEndpoint,
    useDualstackEndpoint,
    useArnRegion: typeof useArnRegion === "function" ? useArnRegion : function() {
      return Promise.resolve(useArnRegion);
    }
  });
}

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

// ../../node_modules/@aws-sdk/middleware-expect-continue/dist/es/index.js
function addExpectContinueMiddleware(options) {
  var _this = this;
  return function(next) {
    return function(args) {
      return __awaiter2(_this, void 0, void 0, function() {
        var request;
        return __generator2(this, function(_a) {
          request = args.request;
          if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
            request.headers = __assign2(__assign2({}, request.headers), { Expect: "100-continue" });
          }
          return [2, next(__assign2(__assign2({}, args), { request }))];
        });
      });
    };
  };
}
var addExpectContinueMiddlewareOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true
};
var getAddExpectContinuePlugin = function(options) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
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
        var clientName, commandName, inputFilterSensitiveLog, logger7, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger7 = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
              return [4, next(args)];
            case 1:
              response = _b.sent();
              if (!logger7) {
                return [2, response];
              }
              if (typeof logger7.info === "function") {
                _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = __rest2(_a, ["$metadata"]);
                logger7.info({
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

// ../../node_modules/@aws-sdk/middleware-sdk-s3/node_modules/@aws-sdk/util-arn-parser/dist/es/index.js
var validate2 = function(str) {
  return typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;
};

// ../../node_modules/@aws-sdk/middleware-sdk-s3/dist/es/validate-bucket-name.js
function validateBucketNameMiddleware() {
  var _this = this;
  return function(next) {
    return function(args) {
      return __awaiter2(_this, void 0, void 0, function() {
        var Bucket2, err;
        return __generator2(this, function(_a) {
          Bucket2 = args.input.Bucket;
          if (typeof Bucket2 === "string" && !validate2(Bucket2) && Bucket2.indexOf("/") >= 0) {
            err = new Error("Bucket name shouldn't contain '/', received '" + Bucket2 + "'");
            err.name = "InvalidBucketName";
            throw err;
          }
          return [2, next(__assign2({}, args))];
        });
      });
    };
  };
}
var validateBucketNameMiddlewareOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true
};
var getValidateBucketNamePlugin = function(unused) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(validateBucketNameMiddleware(), validateBucketNameMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/middleware-sdk-s3/dist/es/use-regional-endpoint.js
var useRegionalEndpointMiddleware = function(config) {
  return function(next) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var request, _a;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              request = args.request;
              if (!HttpRequest.isInstance(request) || config.isCustomEndpoint)
                return [2, next(__assign2({}, args))];
              if (!(request.hostname === "s3.amazonaws.com"))
                return [3, 1];
              request.hostname = "s3.us-east-1.amazonaws.com";
              return [3, 3];
            case 1:
              _a = "aws-global";
              return [4, config.region()];
            case 2:
              if (_a === _b.sent()) {
                request.hostname = "s3.amazonaws.com";
              }
              _b.label = 3;
            case 3:
              return [2, next(__assign2({}, args))];
          }
        });
      });
    };
  };
};
var useRegionalEndpointMiddlewareOptions = {
  step: "build",
  tags: ["USE_REGIONAL_ENDPOINT", "S3"],
  name: "useRegionalEndpointMiddleware",
  override: true
};
var getUseRegionalEndpointPlugin = function(config) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(useRegionalEndpointMiddleware(config), useRegionalEndpointMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/middleware-sdk-s3/dist/es/throw-200-exceptions.js
var throw200ExceptionsMiddleware = function(config) {
  return function(next) {
    return function(args) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var result, response, statusCode, body, bodyBytes, bodyString, err;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, next(args)];
            case 1:
              result = _a.sent();
              response = result.response;
              if (!HttpResponse.isInstance(response))
                return [2, result];
              statusCode = response.statusCode, body = response.body;
              if (statusCode < 200 && statusCode >= 300)
                return [2, result];
              return [4, collectBody(body, config)];
            case 2:
              bodyBytes = _a.sent();
              return [4, collectBodyString(bodyBytes, config)];
            case 3:
              bodyString = _a.sent();
              if (bodyBytes.length === 0) {
                err = new Error("S3 aborted request");
                err.name = "InternalError";
                throw err;
              }
              if (bodyString && bodyString.match("<Error>")) {
                response.statusCode = 400;
              }
              response.body = bodyBytes;
              return [2, result];
          }
        });
      });
    };
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
var throw200ExceptionsMiddlewareOptions = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: true
};
var getThrow200ExceptionsPlugin = function(config) {
  return {
    applyToStack: function(clientStack) {
      clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
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
  function SignatureV43(_a) {
    var applyChecksum = _a.applyChecksum, credentials = _a.credentials, region = _a.region, service = _a.service, sha256 = _a.sha256, _b = _a.uriEscapePath, uriEscapePath = _b === void 0 ? true : _b;
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeRegionProvider(region);
    this.credentialProvider = normalizeCredentialsProvider(credentials);
  }
  SignatureV43.prototype.presign = function(originalRequest, options) {
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
  SignatureV43.prototype.sign = function(toSign, options) {
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
  SignatureV43.prototype.signEvent = function(_a, _b) {
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
            _f = toHex2;
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
  SignatureV43.prototype.signString = function(stringToSign, _a) {
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
            _g = toHex2;
            return [4, hash.digest()];
          case 6:
            return [2, _g.apply(void 0, [_h.sent()])];
        }
      });
    });
  };
  SignatureV43.prototype.signRequest = function(requestToSign, _a) {
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
  SignatureV43.prototype.createCanonicalRequest = function(request, canonicalHeaders, payloadHash) {
    var sortedHeaders = Object.keys(canonicalHeaders).sort();
    return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery(request) + "\n" + sortedHeaders.map(function(name2) {
      return name2 + ":" + canonicalHeaders[name2];
    }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
  };
  SignatureV43.prototype.createStringToSign = function(longDate, credentialScope, canonicalRequest) {
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
            return [2, ALGORITHM_IDENTIFIER + "\n" + longDate + "\n" + credentialScope + "\n" + toHex2(hashedRequest)];
        }
      });
    });
  };
  SignatureV43.prototype.getCanonicalPath = function(_a) {
    var path = _a.path;
    if (this.uriEscapePath) {
      var doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
      return "/" + doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  };
  SignatureV43.prototype.getSignature = function(longDate, credentialScope, keyPromise, canonicalRequest) {
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
            _c = toHex2;
            return [4, hash.digest()];
          case 3:
            return [2, _c.apply(void 0, [_d.sent()])];
        }
      });
    });
  };
  SignatureV43.prototype.getSigningKey = function(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  };
  return SignatureV43;
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
  var _b = __read2(_a, 2), name2 = _b[0], version2 = _b[1];
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
      var name2 = options.name, override = options.override;
      var entry = __assign2({ step: "initialize", priority: "normal", middleware }, options);
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
      var entry = __assign2({ middleware }, options);
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

// ../../node_modules/@aws-sdk/smithy-client/dist/es/get-array-if-single-item.js
var getArrayIfSingleItem = function(mayBeArray) {
  return Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
};

// ../../node_modules/@aws-sdk/smithy-client/dist/es/get-value-from-text-node.js
var getValueFromTextNode = function(obj) {
  var textNodeName = "#text";
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
};

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

// ../../node_modules/@aws-sdk/smithy-client/dist/es/date-utils.js
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
  var year = date.getUTCFullYear();
  var month = date.getUTCMonth();
  var dayOfWeek = date.getUTCDay();
  var dayOfMonthInt = date.getUTCDate();
  var hoursInt = date.getUTCHours();
  var minutesInt = date.getUTCMinutes();
  var secondsInt = date.getUTCSeconds();
  var dayOfMonthString = dayOfMonthInt < 10 ? "0" + dayOfMonthInt : "" + dayOfMonthInt;
  var hoursString = hoursInt < 10 ? "0" + hoursInt : "" + hoursInt;
  var minutesString = minutesInt < 10 ? "0" + minutesInt : "" + minutesInt;
  var secondsString = secondsInt < 10 ? "0" + secondsInt : "" + secondsInt;
  return days[dayOfWeek] + ", " + dayOfMonthString + " " + months[month] + " " + year + " " + hoursString + ":" + minutesString + ":" + secondsString + " GMT";
}

// ../../node_modules/@aws-sdk/smithy-client/dist/es/constants.js
var SENSITIVE_STRING = "***SensitiveInformation***";

// ../../node_modules/@aws-sdk/client-s3/dist/es/S3Client.js
var S3Client = function(_super) {
  __extends(S3Client3, _super);
  function S3Client3(configuration) {
    var _this = this;
    var _config_0 = __assign(__assign({}, ClientDefaultValues), configuration);
    var _config_1 = resolveRegionConfig(_config_0);
    var _config_2 = resolveEndpointsConfig(_config_1);
    var _config_3 = resolveAwsAuthConfig(_config_2);
    var _config_4 = resolveRetryConfig(_config_3);
    var _config_5 = resolveHostHeaderConfig(_config_4);
    var _config_6 = resolveBucketEndpointConfig(_config_5);
    var _config_7 = resolveUserAgentConfig(_config_6);
    var _config_8 = resolveEventStreamSerdeConfig(_config_7);
    _this = _super.call(this, _config_8) || this;
    _this.config = _config_8;
    _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
    _this.middlewareStack.use(getRetryPlugin(_this.config));
    _this.middlewareStack.use(getContentLengthPlugin(_this.config));
    _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
    _this.middlewareStack.use(getLoggerPlugin(_this.config));
    _this.middlewareStack.use(getValidateBucketNamePlugin(_this.config));
    _this.middlewareStack.use(getUseRegionalEndpointPlugin(_this.config));
    _this.middlewareStack.use(getAddExpectContinuePlugin(_this.config));
    _this.middlewareStack.use(getUserAgentPlugin(_this.config));
    return _this;
  }
  S3Client3.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
  };
  return S3Client3;
}(Client);

// ../../node_modules/@aws-sdk/client-s3/dist/es/models/models_0.js
var AbortIncompleteMultipartUpload;
(function(AbortIncompleteMultipartUpload2) {
  AbortIncompleteMultipartUpload2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AbortIncompleteMultipartUpload || (AbortIncompleteMultipartUpload = {}));
var AbortMultipartUploadOutput;
(function(AbortMultipartUploadOutput2) {
  AbortMultipartUploadOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AbortMultipartUploadOutput || (AbortMultipartUploadOutput = {}));
var AbortMultipartUploadRequest;
(function(AbortMultipartUploadRequest2) {
  AbortMultipartUploadRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AbortMultipartUploadRequest || (AbortMultipartUploadRequest = {}));
var NoSuchUpload;
(function(NoSuchUpload2) {
  NoSuchUpload2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NoSuchUpload || (NoSuchUpload = {}));
var AccelerateConfiguration;
(function(AccelerateConfiguration2) {
  AccelerateConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AccelerateConfiguration || (AccelerateConfiguration = {}));
var Grantee;
(function(Grantee2) {
  Grantee2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Grantee || (Grantee = {}));
var Grant;
(function(Grant2) {
  Grant2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Grant || (Grant = {}));
var Owner;
(function(Owner2) {
  Owner2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Owner || (Owner = {}));
var AccessControlPolicy;
(function(AccessControlPolicy2) {
  AccessControlPolicy2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AccessControlPolicy || (AccessControlPolicy = {}));
var AccessControlTranslation;
(function(AccessControlTranslation2) {
  AccessControlTranslation2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AccessControlTranslation || (AccessControlTranslation = {}));
var CompleteMultipartUploadOutput;
(function(CompleteMultipartUploadOutput2) {
  CompleteMultipartUploadOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING });
  };
})(CompleteMultipartUploadOutput || (CompleteMultipartUploadOutput = {}));
var CompletedPart;
(function(CompletedPart4) {
  CompletedPart4.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CompletedPart || (CompletedPart = {}));
var CompletedMultipartUpload;
(function(CompletedMultipartUpload2) {
  CompletedMultipartUpload2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CompletedMultipartUpload || (CompletedMultipartUpload = {}));
var CompleteMultipartUploadRequest;
(function(CompleteMultipartUploadRequest2) {
  CompleteMultipartUploadRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CompleteMultipartUploadRequest || (CompleteMultipartUploadRequest = {}));
var CopyObjectResult;
(function(CopyObjectResult2) {
  CopyObjectResult2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CopyObjectResult || (CopyObjectResult = {}));
var CopyObjectOutput;
(function(CopyObjectOutput2) {
  CopyObjectOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }), obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING });
  };
})(CopyObjectOutput || (CopyObjectOutput = {}));
var CopyObjectRequest;
(function(CopyObjectRequest2) {
  CopyObjectRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }), obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }), obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING });
  };
})(CopyObjectRequest || (CopyObjectRequest = {}));
var ObjectNotInActiveTierError;
(function(ObjectNotInActiveTierError2) {
  ObjectNotInActiveTierError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectNotInActiveTierError || (ObjectNotInActiveTierError = {}));
var BucketAlreadyExists;
(function(BucketAlreadyExists2) {
  BucketAlreadyExists2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BucketAlreadyExists || (BucketAlreadyExists = {}));
var BucketAlreadyOwnedByYou;
(function(BucketAlreadyOwnedByYou2) {
  BucketAlreadyOwnedByYou2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BucketAlreadyOwnedByYou || (BucketAlreadyOwnedByYou = {}));
var CreateBucketOutput;
(function(CreateBucketOutput2) {
  CreateBucketOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateBucketOutput || (CreateBucketOutput = {}));
var CreateBucketConfiguration;
(function(CreateBucketConfiguration2) {
  CreateBucketConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateBucketConfiguration || (CreateBucketConfiguration = {}));
var CreateBucketRequest;
(function(CreateBucketRequest2) {
  CreateBucketRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CreateBucketRequest || (CreateBucketRequest = {}));
var CreateMultipartUploadOutput;
(function(CreateMultipartUploadOutput2) {
  CreateMultipartUploadOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }), obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING });
  };
})(CreateMultipartUploadOutput || (CreateMultipartUploadOutput = {}));
var CreateMultipartUploadRequest;
(function(CreateMultipartUploadRequest2) {
  CreateMultipartUploadRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }), obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING });
  };
})(CreateMultipartUploadRequest || (CreateMultipartUploadRequest = {}));
var DeleteBucketRequest;
(function(DeleteBucketRequest2) {
  DeleteBucketRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketRequest || (DeleteBucketRequest = {}));
var DeleteBucketAnalyticsConfigurationRequest;
(function(DeleteBucketAnalyticsConfigurationRequest2) {
  DeleteBucketAnalyticsConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketAnalyticsConfigurationRequest || (DeleteBucketAnalyticsConfigurationRequest = {}));
var DeleteBucketCorsRequest;
(function(DeleteBucketCorsRequest2) {
  DeleteBucketCorsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketCorsRequest || (DeleteBucketCorsRequest = {}));
var DeleteBucketEncryptionRequest;
(function(DeleteBucketEncryptionRequest2) {
  DeleteBucketEncryptionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketEncryptionRequest || (DeleteBucketEncryptionRequest = {}));
var DeleteBucketIntelligentTieringConfigurationRequest;
(function(DeleteBucketIntelligentTieringConfigurationRequest2) {
  DeleteBucketIntelligentTieringConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketIntelligentTieringConfigurationRequest || (DeleteBucketIntelligentTieringConfigurationRequest = {}));
var DeleteBucketInventoryConfigurationRequest;
(function(DeleteBucketInventoryConfigurationRequest2) {
  DeleteBucketInventoryConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketInventoryConfigurationRequest || (DeleteBucketInventoryConfigurationRequest = {}));
var DeleteBucketLifecycleRequest;
(function(DeleteBucketLifecycleRequest2) {
  DeleteBucketLifecycleRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketLifecycleRequest || (DeleteBucketLifecycleRequest = {}));
var DeleteBucketMetricsConfigurationRequest;
(function(DeleteBucketMetricsConfigurationRequest2) {
  DeleteBucketMetricsConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketMetricsConfigurationRequest || (DeleteBucketMetricsConfigurationRequest = {}));
var DeleteBucketOwnershipControlsRequest;
(function(DeleteBucketOwnershipControlsRequest2) {
  DeleteBucketOwnershipControlsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketOwnershipControlsRequest || (DeleteBucketOwnershipControlsRequest = {}));
var DeleteBucketPolicyRequest;
(function(DeleteBucketPolicyRequest2) {
  DeleteBucketPolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketPolicyRequest || (DeleteBucketPolicyRequest = {}));
var DeleteBucketReplicationRequest;
(function(DeleteBucketReplicationRequest2) {
  DeleteBucketReplicationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketReplicationRequest || (DeleteBucketReplicationRequest = {}));
var DeleteBucketTaggingRequest;
(function(DeleteBucketTaggingRequest2) {
  DeleteBucketTaggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketTaggingRequest || (DeleteBucketTaggingRequest = {}));
var DeleteBucketWebsiteRequest;
(function(DeleteBucketWebsiteRequest2) {
  DeleteBucketWebsiteRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteBucketWebsiteRequest || (DeleteBucketWebsiteRequest = {}));
var DeleteObjectOutput;
(function(DeleteObjectOutput2) {
  DeleteObjectOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteObjectOutput || (DeleteObjectOutput = {}));
var DeleteObjectRequest;
(function(DeleteObjectRequest2) {
  DeleteObjectRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteObjectRequest || (DeleteObjectRequest = {}));
var DeletedObject;
(function(DeletedObject2) {
  DeletedObject2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeletedObject || (DeletedObject = {}));
var _Error;
(function(_Error2) {
  _Error2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(_Error || (_Error = {}));
var DeleteObjectsOutput;
(function(DeleteObjectsOutput2) {
  DeleteObjectsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteObjectsOutput || (DeleteObjectsOutput = {}));
var ObjectIdentifier;
(function(ObjectIdentifier2) {
  ObjectIdentifier2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectIdentifier || (ObjectIdentifier = {}));
var Delete;
(function(Delete2) {
  Delete2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Delete || (Delete = {}));
var DeleteObjectsRequest;
(function(DeleteObjectsRequest2) {
  DeleteObjectsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteObjectsRequest || (DeleteObjectsRequest = {}));
var DeleteObjectTaggingOutput;
(function(DeleteObjectTaggingOutput2) {
  DeleteObjectTaggingOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteObjectTaggingOutput || (DeleteObjectTaggingOutput = {}));
var DeleteObjectTaggingRequest;
(function(DeleteObjectTaggingRequest2) {
  DeleteObjectTaggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteObjectTaggingRequest || (DeleteObjectTaggingRequest = {}));
var DeletePublicAccessBlockRequest;
(function(DeletePublicAccessBlockRequest2) {
  DeletePublicAccessBlockRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeletePublicAccessBlockRequest || (DeletePublicAccessBlockRequest = {}));
var GetBucketAccelerateConfigurationOutput;
(function(GetBucketAccelerateConfigurationOutput2) {
  GetBucketAccelerateConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketAccelerateConfigurationOutput || (GetBucketAccelerateConfigurationOutput = {}));
var GetBucketAccelerateConfigurationRequest;
(function(GetBucketAccelerateConfigurationRequest2) {
  GetBucketAccelerateConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketAccelerateConfigurationRequest || (GetBucketAccelerateConfigurationRequest = {}));
var GetBucketAclOutput;
(function(GetBucketAclOutput2) {
  GetBucketAclOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketAclOutput || (GetBucketAclOutput = {}));
var GetBucketAclRequest;
(function(GetBucketAclRequest2) {
  GetBucketAclRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketAclRequest || (GetBucketAclRequest = {}));
var Tag;
(function(Tag2) {
  Tag2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
var AnalyticsAndOperator;
(function(AnalyticsAndOperator2) {
  AnalyticsAndOperator2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AnalyticsAndOperator || (AnalyticsAndOperator = {}));
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = function(value, visitor) {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  AnalyticsFilter2.filterSensitiveLog = function(obj) {
    var _a;
    if (obj.Prefix !== void 0)
      return { Prefix: obj.Prefix };
    if (obj.Tag !== void 0)
      return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== void 0)
      return { And: AnalyticsAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== void 0)
      return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var AnalyticsS3BucketDestination;
(function(AnalyticsS3BucketDestination2) {
  AnalyticsS3BucketDestination2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AnalyticsS3BucketDestination || (AnalyticsS3BucketDestination = {}));
var AnalyticsExportDestination;
(function(AnalyticsExportDestination2) {
  AnalyticsExportDestination2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(AnalyticsExportDestination || (AnalyticsExportDestination = {}));
var StorageClassAnalysisDataExport;
(function(StorageClassAnalysisDataExport2) {
  StorageClassAnalysisDataExport2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StorageClassAnalysisDataExport || (StorageClassAnalysisDataExport = {}));
var StorageClassAnalysis;
(function(StorageClassAnalysis2) {
  StorageClassAnalysis2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StorageClassAnalysis || (StorageClassAnalysis = {}));
var AnalyticsConfiguration;
(function(AnalyticsConfiguration2) {
  AnalyticsConfiguration2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Filter && { Filter: AnalyticsFilter.filterSensitiveLog(obj.Filter) });
  };
})(AnalyticsConfiguration || (AnalyticsConfiguration = {}));
var GetBucketAnalyticsConfigurationOutput;
(function(GetBucketAnalyticsConfigurationOutput2) {
  GetBucketAnalyticsConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration)
    });
  };
})(GetBucketAnalyticsConfigurationOutput || (GetBucketAnalyticsConfigurationOutput = {}));
var GetBucketAnalyticsConfigurationRequest;
(function(GetBucketAnalyticsConfigurationRequest2) {
  GetBucketAnalyticsConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketAnalyticsConfigurationRequest || (GetBucketAnalyticsConfigurationRequest = {}));
var CORSRule;
(function(CORSRule2) {
  CORSRule2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CORSRule || (CORSRule = {}));
var GetBucketCorsOutput;
(function(GetBucketCorsOutput2) {
  GetBucketCorsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketCorsOutput || (GetBucketCorsOutput = {}));
var GetBucketCorsRequest;
(function(GetBucketCorsRequest2) {
  GetBucketCorsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketCorsRequest || (GetBucketCorsRequest = {}));
var ServerSideEncryptionByDefault;
(function(ServerSideEncryptionByDefault2) {
  ServerSideEncryptionByDefault2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING });
  };
})(ServerSideEncryptionByDefault || (ServerSideEncryptionByDefault = {}));
var ServerSideEncryptionRule;
(function(ServerSideEncryptionRule2) {
  ServerSideEncryptionRule2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.ApplyServerSideEncryptionByDefault && {
      ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefault.filterSensitiveLog(obj.ApplyServerSideEncryptionByDefault)
    });
  };
})(ServerSideEncryptionRule || (ServerSideEncryptionRule = {}));
var ServerSideEncryptionConfiguration;
(function(ServerSideEncryptionConfiguration2) {
  ServerSideEncryptionConfiguration2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Rules && { Rules: obj.Rules.map(function(item) {
      return ServerSideEncryptionRule.filterSensitiveLog(item);
    }) });
  };
})(ServerSideEncryptionConfiguration || (ServerSideEncryptionConfiguration = {}));
var GetBucketEncryptionOutput;
(function(GetBucketEncryptionOutput2) {
  GetBucketEncryptionOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration)
    });
  };
})(GetBucketEncryptionOutput || (GetBucketEncryptionOutput = {}));
var GetBucketEncryptionRequest;
(function(GetBucketEncryptionRequest2) {
  GetBucketEncryptionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketEncryptionRequest || (GetBucketEncryptionRequest = {}));
var IntelligentTieringAndOperator;
(function(IntelligentTieringAndOperator2) {
  IntelligentTieringAndOperator2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(IntelligentTieringAndOperator || (IntelligentTieringAndOperator = {}));
var IntelligentTieringFilter;
(function(IntelligentTieringFilter2) {
  IntelligentTieringFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(IntelligentTieringFilter || (IntelligentTieringFilter = {}));
var Tiering;
(function(Tiering2) {
  Tiering2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Tiering || (Tiering = {}));
var IntelligentTieringConfiguration;
(function(IntelligentTieringConfiguration2) {
  IntelligentTieringConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(IntelligentTieringConfiguration || (IntelligentTieringConfiguration = {}));
var GetBucketIntelligentTieringConfigurationOutput;
(function(GetBucketIntelligentTieringConfigurationOutput2) {
  GetBucketIntelligentTieringConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketIntelligentTieringConfigurationOutput || (GetBucketIntelligentTieringConfigurationOutput = {}));
var GetBucketIntelligentTieringConfigurationRequest;
(function(GetBucketIntelligentTieringConfigurationRequest2) {
  GetBucketIntelligentTieringConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketIntelligentTieringConfigurationRequest || (GetBucketIntelligentTieringConfigurationRequest = {}));
var SSEKMS;
(function(SSEKMS2) {
  SSEKMS2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.KeyId && { KeyId: SENSITIVE_STRING });
  };
})(SSEKMS || (SSEKMS = {}));
var SSES3;
(function(SSES32) {
  SSES32.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SSES3 || (SSES3 = {}));
var InventoryEncryption;
(function(InventoryEncryption2) {
  InventoryEncryption2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSEKMS && { SSEKMS: SSEKMS.filterSensitiveLog(obj.SSEKMS) });
  };
})(InventoryEncryption || (InventoryEncryption = {}));
var InventoryS3BucketDestination;
(function(InventoryS3BucketDestination2) {
  InventoryS3BucketDestination2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Encryption && { Encryption: InventoryEncryption.filterSensitiveLog(obj.Encryption) });
  };
})(InventoryS3BucketDestination || (InventoryS3BucketDestination = {}));
var InventoryDestination;
(function(InventoryDestination2) {
  InventoryDestination2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.S3BucketDestination && {
      S3BucketDestination: InventoryS3BucketDestination.filterSensitiveLog(obj.S3BucketDestination)
    });
  };
})(InventoryDestination || (InventoryDestination = {}));
var InventoryFilter;
(function(InventoryFilter2) {
  InventoryFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InventoryFilter || (InventoryFilter = {}));
var InventorySchedule;
(function(InventorySchedule2) {
  InventorySchedule2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InventorySchedule || (InventorySchedule = {}));
var InventoryConfiguration;
(function(InventoryConfiguration2) {
  InventoryConfiguration2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Destination && { Destination: InventoryDestination.filterSensitiveLog(obj.Destination) });
  };
})(InventoryConfiguration || (InventoryConfiguration = {}));
var GetBucketInventoryConfigurationOutput;
(function(GetBucketInventoryConfigurationOutput2) {
  GetBucketInventoryConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration)
    });
  };
})(GetBucketInventoryConfigurationOutput || (GetBucketInventoryConfigurationOutput = {}));
var GetBucketInventoryConfigurationRequest;
(function(GetBucketInventoryConfigurationRequest2) {
  GetBucketInventoryConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketInventoryConfigurationRequest || (GetBucketInventoryConfigurationRequest = {}));
var LifecycleExpiration;
(function(LifecycleExpiration2) {
  LifecycleExpiration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LifecycleExpiration || (LifecycleExpiration = {}));
var LifecycleRuleAndOperator;
(function(LifecycleRuleAndOperator2) {
  LifecycleRuleAndOperator2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LifecycleRuleAndOperator || (LifecycleRuleAndOperator = {}));
var LifecycleRuleFilter;
(function(LifecycleRuleFilter2) {
  LifecycleRuleFilter2.visit = function(value, visitor) {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  LifecycleRuleFilter2.filterSensitiveLog = function(obj) {
    var _a;
    if (obj.Prefix !== void 0)
      return { Prefix: obj.Prefix };
    if (obj.Tag !== void 0)
      return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== void 0)
      return { And: LifecycleRuleAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== void 0)
      return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
  };
})(LifecycleRuleFilter || (LifecycleRuleFilter = {}));
var NoncurrentVersionExpiration;
(function(NoncurrentVersionExpiration2) {
  NoncurrentVersionExpiration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NoncurrentVersionExpiration || (NoncurrentVersionExpiration = {}));
var NoncurrentVersionTransition;
(function(NoncurrentVersionTransition2) {
  NoncurrentVersionTransition2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NoncurrentVersionTransition || (NoncurrentVersionTransition = {}));
var Transition;
(function(Transition2) {
  Transition2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Transition || (Transition = {}));
var LifecycleRule;
(function(LifecycleRule2) {
  LifecycleRule2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Filter && { Filter: LifecycleRuleFilter.filterSensitiveLog(obj.Filter) });
  };
})(LifecycleRule || (LifecycleRule = {}));
var GetBucketLifecycleConfigurationOutput;
(function(GetBucketLifecycleConfigurationOutput2) {
  GetBucketLifecycleConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Rules && { Rules: obj.Rules.map(function(item) {
      return LifecycleRule.filterSensitiveLog(item);
    }) });
  };
})(GetBucketLifecycleConfigurationOutput || (GetBucketLifecycleConfigurationOutput = {}));
var GetBucketLifecycleConfigurationRequest;
(function(GetBucketLifecycleConfigurationRequest2) {
  GetBucketLifecycleConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketLifecycleConfigurationRequest || (GetBucketLifecycleConfigurationRequest = {}));
var GetBucketLocationOutput;
(function(GetBucketLocationOutput2) {
  GetBucketLocationOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketLocationOutput || (GetBucketLocationOutput = {}));
var GetBucketLocationRequest;
(function(GetBucketLocationRequest2) {
  GetBucketLocationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketLocationRequest || (GetBucketLocationRequest = {}));
var TargetGrant;
(function(TargetGrant2) {
  TargetGrant2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TargetGrant || (TargetGrant = {}));
var LoggingEnabled;
(function(LoggingEnabled2) {
  LoggingEnabled2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LoggingEnabled || (LoggingEnabled = {}));
var GetBucketLoggingOutput;
(function(GetBucketLoggingOutput2) {
  GetBucketLoggingOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketLoggingOutput || (GetBucketLoggingOutput = {}));
var GetBucketLoggingRequest;
(function(GetBucketLoggingRequest2) {
  GetBucketLoggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketLoggingRequest || (GetBucketLoggingRequest = {}));
var MetricsAndOperator;
(function(MetricsAndOperator2) {
  MetricsAndOperator2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MetricsAndOperator || (MetricsAndOperator = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = function(value, visitor) {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  MetricsFilter2.filterSensitiveLog = function(obj) {
    var _a;
    if (obj.Prefix !== void 0)
      return { Prefix: obj.Prefix };
    if (obj.Tag !== void 0)
      return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== void 0)
      return { And: MetricsAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== void 0)
      return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
  };
})(MetricsFilter || (MetricsFilter = {}));
var MetricsConfiguration;
(function(MetricsConfiguration2) {
  MetricsConfiguration2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Filter && { Filter: MetricsFilter.filterSensitiveLog(obj.Filter) });
  };
})(MetricsConfiguration || (MetricsConfiguration = {}));
var GetBucketMetricsConfigurationOutput;
(function(GetBucketMetricsConfigurationOutput2) {
  GetBucketMetricsConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration)
    });
  };
})(GetBucketMetricsConfigurationOutput || (GetBucketMetricsConfigurationOutput = {}));
var GetBucketMetricsConfigurationRequest;
(function(GetBucketMetricsConfigurationRequest2) {
  GetBucketMetricsConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketMetricsConfigurationRequest || (GetBucketMetricsConfigurationRequest = {}));
var GetBucketNotificationConfigurationRequest;
(function(GetBucketNotificationConfigurationRequest2) {
  GetBucketNotificationConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketNotificationConfigurationRequest || (GetBucketNotificationConfigurationRequest = {}));
var FilterRule;
(function(FilterRule2) {
  FilterRule2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(FilterRule || (FilterRule = {}));
var S3KeyFilter;
(function(S3KeyFilter2) {
  S3KeyFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(S3KeyFilter || (S3KeyFilter = {}));
var NotificationConfigurationFilter;
(function(NotificationConfigurationFilter2) {
  NotificationConfigurationFilter2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NotificationConfigurationFilter || (NotificationConfigurationFilter = {}));
var LambdaFunctionConfiguration;
(function(LambdaFunctionConfiguration2) {
  LambdaFunctionConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(LambdaFunctionConfiguration || (LambdaFunctionConfiguration = {}));
var QueueConfiguration;
(function(QueueConfiguration2) {
  QueueConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(QueueConfiguration || (QueueConfiguration = {}));
var TopicConfiguration;
(function(TopicConfiguration2) {
  TopicConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(TopicConfiguration || (TopicConfiguration = {}));
var NotificationConfiguration;
(function(NotificationConfiguration2) {
  NotificationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NotificationConfiguration || (NotificationConfiguration = {}));
var OwnershipControlsRule;
(function(OwnershipControlsRule2) {
  OwnershipControlsRule2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(OwnershipControlsRule || (OwnershipControlsRule = {}));
var OwnershipControls;
(function(OwnershipControls2) {
  OwnershipControls2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(OwnershipControls || (OwnershipControls = {}));
var GetBucketOwnershipControlsOutput;
(function(GetBucketOwnershipControlsOutput2) {
  GetBucketOwnershipControlsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketOwnershipControlsOutput || (GetBucketOwnershipControlsOutput = {}));
var GetBucketOwnershipControlsRequest;
(function(GetBucketOwnershipControlsRequest2) {
  GetBucketOwnershipControlsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketOwnershipControlsRequest || (GetBucketOwnershipControlsRequest = {}));
var GetBucketPolicyOutput;
(function(GetBucketPolicyOutput2) {
  GetBucketPolicyOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketPolicyOutput || (GetBucketPolicyOutput = {}));
var GetBucketPolicyRequest;
(function(GetBucketPolicyRequest2) {
  GetBucketPolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketPolicyRequest || (GetBucketPolicyRequest = {}));
var PolicyStatus;
(function(PolicyStatus2) {
  PolicyStatus2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PolicyStatus || (PolicyStatus = {}));
var GetBucketPolicyStatusOutput;
(function(GetBucketPolicyStatusOutput2) {
  GetBucketPolicyStatusOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketPolicyStatusOutput || (GetBucketPolicyStatusOutput = {}));
var GetBucketPolicyStatusRequest;
(function(GetBucketPolicyStatusRequest2) {
  GetBucketPolicyStatusRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketPolicyStatusRequest || (GetBucketPolicyStatusRequest = {}));
var DeleteMarkerReplication;
(function(DeleteMarkerReplication2) {
  DeleteMarkerReplication2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteMarkerReplication || (DeleteMarkerReplication = {}));
var EncryptionConfiguration;
(function(EncryptionConfiguration2) {
  EncryptionConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(EncryptionConfiguration || (EncryptionConfiguration = {}));
var ReplicationTimeValue;
(function(ReplicationTimeValue2) {
  ReplicationTimeValue2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ReplicationTimeValue || (ReplicationTimeValue = {}));
var Metrics;
(function(Metrics2) {
  Metrics2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Metrics || (Metrics = {}));
var ReplicationTime;
(function(ReplicationTime2) {
  ReplicationTime2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ReplicationTime || (ReplicationTime = {}));
var Destination;
(function(Destination2) {
  Destination2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Destination || (Destination = {}));
var ExistingObjectReplication;
(function(ExistingObjectReplication2) {
  ExistingObjectReplication2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ExistingObjectReplication || (ExistingObjectReplication = {}));
var ReplicationRuleAndOperator;
(function(ReplicationRuleAndOperator2) {
  ReplicationRuleAndOperator2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ReplicationRuleAndOperator || (ReplicationRuleAndOperator = {}));
var ReplicationRuleFilter;
(function(ReplicationRuleFilter2) {
  ReplicationRuleFilter2.visit = function(value, visitor) {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  ReplicationRuleFilter2.filterSensitiveLog = function(obj) {
    var _a;
    if (obj.Prefix !== void 0)
      return { Prefix: obj.Prefix };
    if (obj.Tag !== void 0)
      return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== void 0)
      return { And: ReplicationRuleAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== void 0)
      return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
  };
})(ReplicationRuleFilter || (ReplicationRuleFilter = {}));
var ReplicaModifications;
(function(ReplicaModifications2) {
  ReplicaModifications2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ReplicaModifications || (ReplicaModifications = {}));
var SseKmsEncryptedObjects;
(function(SseKmsEncryptedObjects2) {
  SseKmsEncryptedObjects2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SseKmsEncryptedObjects || (SseKmsEncryptedObjects = {}));
var SourceSelectionCriteria;
(function(SourceSelectionCriteria2) {
  SourceSelectionCriteria2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SourceSelectionCriteria || (SourceSelectionCriteria = {}));
var ReplicationRule;
(function(ReplicationRule2) {
  ReplicationRule2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Filter && { Filter: ReplicationRuleFilter.filterSensitiveLog(obj.Filter) });
  };
})(ReplicationRule || (ReplicationRule = {}));
var ReplicationConfiguration;
(function(ReplicationConfiguration2) {
  ReplicationConfiguration2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Rules && { Rules: obj.Rules.map(function(item) {
      return ReplicationRule.filterSensitiveLog(item);
    }) });
  };
})(ReplicationConfiguration || (ReplicationConfiguration = {}));
var GetBucketReplicationOutput;
(function(GetBucketReplicationOutput2) {
  GetBucketReplicationOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration)
    });
  };
})(GetBucketReplicationOutput || (GetBucketReplicationOutput = {}));
var GetBucketReplicationRequest;
(function(GetBucketReplicationRequest2) {
  GetBucketReplicationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketReplicationRequest || (GetBucketReplicationRequest = {}));
var GetBucketRequestPaymentOutput;
(function(GetBucketRequestPaymentOutput2) {
  GetBucketRequestPaymentOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketRequestPaymentOutput || (GetBucketRequestPaymentOutput = {}));
var GetBucketRequestPaymentRequest;
(function(GetBucketRequestPaymentRequest2) {
  GetBucketRequestPaymentRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketRequestPaymentRequest || (GetBucketRequestPaymentRequest = {}));
var GetBucketTaggingOutput;
(function(GetBucketTaggingOutput2) {
  GetBucketTaggingOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketTaggingOutput || (GetBucketTaggingOutput = {}));
var GetBucketTaggingRequest;
(function(GetBucketTaggingRequest2) {
  GetBucketTaggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketTaggingRequest || (GetBucketTaggingRequest = {}));
var GetBucketVersioningOutput;
(function(GetBucketVersioningOutput2) {
  GetBucketVersioningOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketVersioningOutput || (GetBucketVersioningOutput = {}));
var GetBucketVersioningRequest;
(function(GetBucketVersioningRequest2) {
  GetBucketVersioningRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketVersioningRequest || (GetBucketVersioningRequest = {}));
var ErrorDocument;
(function(ErrorDocument2) {
  ErrorDocument2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ErrorDocument || (ErrorDocument = {}));
var IndexDocument;
(function(IndexDocument2) {
  IndexDocument2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(IndexDocument || (IndexDocument = {}));
var RedirectAllRequestsTo;
(function(RedirectAllRequestsTo2) {
  RedirectAllRequestsTo2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RedirectAllRequestsTo || (RedirectAllRequestsTo = {}));
var Condition;
(function(Condition2) {
  Condition2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Condition || (Condition = {}));
var Redirect;
(function(Redirect2) {
  Redirect2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Redirect || (Redirect = {}));
var RoutingRule;
(function(RoutingRule2) {
  RoutingRule2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RoutingRule || (RoutingRule = {}));
var GetBucketWebsiteOutput;
(function(GetBucketWebsiteOutput2) {
  GetBucketWebsiteOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketWebsiteOutput || (GetBucketWebsiteOutput = {}));
var GetBucketWebsiteRequest;
(function(GetBucketWebsiteRequest2) {
  GetBucketWebsiteRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetBucketWebsiteRequest || (GetBucketWebsiteRequest = {}));
var GetObjectOutput;
(function(GetObjectOutput2) {
  GetObjectOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING });
  };
})(GetObjectOutput || (GetObjectOutput = {}));
var GetObjectRequest;
(function(GetObjectRequest2) {
  GetObjectRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING });
  };
})(GetObjectRequest || (GetObjectRequest = {}));
var InvalidObjectState;
(function(InvalidObjectState2) {
  InvalidObjectState2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InvalidObjectState || (InvalidObjectState = {}));
var NoSuchKey;
(function(NoSuchKey2) {
  NoSuchKey2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NoSuchKey || (NoSuchKey = {}));
var GetObjectAclOutput;
(function(GetObjectAclOutput2) {
  GetObjectAclOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectAclOutput || (GetObjectAclOutput = {}));
var GetObjectAclRequest;
(function(GetObjectAclRequest2) {
  GetObjectAclRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectAclRequest || (GetObjectAclRequest = {}));
var ObjectLockLegalHold;
(function(ObjectLockLegalHold2) {
  ObjectLockLegalHold2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectLockLegalHold || (ObjectLockLegalHold = {}));
var GetObjectLegalHoldOutput;
(function(GetObjectLegalHoldOutput2) {
  GetObjectLegalHoldOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectLegalHoldOutput || (GetObjectLegalHoldOutput = {}));
var GetObjectLegalHoldRequest;
(function(GetObjectLegalHoldRequest2) {
  GetObjectLegalHoldRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectLegalHoldRequest || (GetObjectLegalHoldRequest = {}));
var DefaultRetention;
(function(DefaultRetention2) {
  DefaultRetention2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DefaultRetention || (DefaultRetention = {}));
var ObjectLockRule;
(function(ObjectLockRule2) {
  ObjectLockRule2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectLockRule || (ObjectLockRule = {}));
var ObjectLockConfiguration;
(function(ObjectLockConfiguration2) {
  ObjectLockConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectLockConfiguration || (ObjectLockConfiguration = {}));
var GetObjectLockConfigurationOutput;
(function(GetObjectLockConfigurationOutput2) {
  GetObjectLockConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectLockConfigurationOutput || (GetObjectLockConfigurationOutput = {}));
var GetObjectLockConfigurationRequest;
(function(GetObjectLockConfigurationRequest2) {
  GetObjectLockConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectLockConfigurationRequest || (GetObjectLockConfigurationRequest = {}));
var ObjectLockRetention;
(function(ObjectLockRetention2) {
  ObjectLockRetention2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectLockRetention || (ObjectLockRetention = {}));
var GetObjectRetentionOutput;
(function(GetObjectRetentionOutput2) {
  GetObjectRetentionOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectRetentionOutput || (GetObjectRetentionOutput = {}));
var GetObjectRetentionRequest;
(function(GetObjectRetentionRequest2) {
  GetObjectRetentionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectRetentionRequest || (GetObjectRetentionRequest = {}));
var GetObjectTaggingOutput;
(function(GetObjectTaggingOutput2) {
  GetObjectTaggingOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectTaggingOutput || (GetObjectTaggingOutput = {}));
var GetObjectTaggingRequest;
(function(GetObjectTaggingRequest2) {
  GetObjectTaggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectTaggingRequest || (GetObjectTaggingRequest = {}));
var GetObjectTorrentOutput;
(function(GetObjectTorrentOutput2) {
  GetObjectTorrentOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectTorrentOutput || (GetObjectTorrentOutput = {}));
var GetObjectTorrentRequest;
(function(GetObjectTorrentRequest2) {
  GetObjectTorrentRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetObjectTorrentRequest || (GetObjectTorrentRequest = {}));
var PublicAccessBlockConfiguration;
(function(PublicAccessBlockConfiguration2) {
  PublicAccessBlockConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PublicAccessBlockConfiguration || (PublicAccessBlockConfiguration = {}));
var GetPublicAccessBlockOutput;
(function(GetPublicAccessBlockOutput2) {
  GetPublicAccessBlockOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetPublicAccessBlockOutput || (GetPublicAccessBlockOutput = {}));
var GetPublicAccessBlockRequest;
(function(GetPublicAccessBlockRequest2) {
  GetPublicAccessBlockRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GetPublicAccessBlockRequest || (GetPublicAccessBlockRequest = {}));
var HeadBucketRequest;
(function(HeadBucketRequest2) {
  HeadBucketRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(HeadBucketRequest || (HeadBucketRequest = {}));
var NoSuchBucket;
(function(NoSuchBucket2) {
  NoSuchBucket2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(NoSuchBucket || (NoSuchBucket = {}));
var HeadObjectOutput;
(function(HeadObjectOutput2) {
  HeadObjectOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING });
  };
})(HeadObjectOutput || (HeadObjectOutput = {}));
var HeadObjectRequest;
(function(HeadObjectRequest2) {
  HeadObjectRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING });
  };
})(HeadObjectRequest || (HeadObjectRequest = {}));
var ListBucketAnalyticsConfigurationsOutput;
(function(ListBucketAnalyticsConfigurationsOutput2) {
  ListBucketAnalyticsConfigurationsOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.AnalyticsConfigurationList && {
      AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map(function(item) {
        return AnalyticsConfiguration.filterSensitiveLog(item);
      })
    });
  };
})(ListBucketAnalyticsConfigurationsOutput || (ListBucketAnalyticsConfigurationsOutput = {}));
var ListBucketAnalyticsConfigurationsRequest;
(function(ListBucketAnalyticsConfigurationsRequest2) {
  ListBucketAnalyticsConfigurationsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListBucketAnalyticsConfigurationsRequest || (ListBucketAnalyticsConfigurationsRequest = {}));
var ListBucketIntelligentTieringConfigurationsOutput;
(function(ListBucketIntelligentTieringConfigurationsOutput2) {
  ListBucketIntelligentTieringConfigurationsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListBucketIntelligentTieringConfigurationsOutput || (ListBucketIntelligentTieringConfigurationsOutput = {}));
var ListBucketIntelligentTieringConfigurationsRequest;
(function(ListBucketIntelligentTieringConfigurationsRequest2) {
  ListBucketIntelligentTieringConfigurationsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListBucketIntelligentTieringConfigurationsRequest || (ListBucketIntelligentTieringConfigurationsRequest = {}));
var ListBucketInventoryConfigurationsOutput;
(function(ListBucketInventoryConfigurationsOutput2) {
  ListBucketInventoryConfigurationsOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.InventoryConfigurationList && {
      InventoryConfigurationList: obj.InventoryConfigurationList.map(function(item) {
        return InventoryConfiguration.filterSensitiveLog(item);
      })
    });
  };
})(ListBucketInventoryConfigurationsOutput || (ListBucketInventoryConfigurationsOutput = {}));
var ListBucketInventoryConfigurationsRequest;
(function(ListBucketInventoryConfigurationsRequest2) {
  ListBucketInventoryConfigurationsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListBucketInventoryConfigurationsRequest || (ListBucketInventoryConfigurationsRequest = {}));
var ListBucketMetricsConfigurationsOutput;
(function(ListBucketMetricsConfigurationsOutput2) {
  ListBucketMetricsConfigurationsOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.MetricsConfigurationList && {
      MetricsConfigurationList: obj.MetricsConfigurationList.map(function(item) {
        return MetricsConfiguration.filterSensitiveLog(item);
      })
    });
  };
})(ListBucketMetricsConfigurationsOutput || (ListBucketMetricsConfigurationsOutput = {}));
var ListBucketMetricsConfigurationsRequest;
(function(ListBucketMetricsConfigurationsRequest2) {
  ListBucketMetricsConfigurationsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListBucketMetricsConfigurationsRequest || (ListBucketMetricsConfigurationsRequest = {}));
var Bucket;
(function(Bucket2) {
  Bucket2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Bucket || (Bucket = {}));
var ListBucketsOutput;
(function(ListBucketsOutput2) {
  ListBucketsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListBucketsOutput || (ListBucketsOutput = {}));
var CommonPrefix;
(function(CommonPrefix2) {
  CommonPrefix2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CommonPrefix || (CommonPrefix = {}));
var Initiator;
(function(Initiator2) {
  Initiator2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Initiator || (Initiator = {}));
var MultipartUpload;
(function(MultipartUpload2) {
  MultipartUpload2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MultipartUpload || (MultipartUpload = {}));
var ListMultipartUploadsOutput;
(function(ListMultipartUploadsOutput2) {
  ListMultipartUploadsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListMultipartUploadsOutput || (ListMultipartUploadsOutput = {}));
var ListMultipartUploadsRequest;
(function(ListMultipartUploadsRequest2) {
  ListMultipartUploadsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListMultipartUploadsRequest || (ListMultipartUploadsRequest = {}));
var _Object;
(function(_Object2) {
  _Object2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(_Object || (_Object = {}));
var ListObjectsOutput;
(function(ListObjectsOutput2) {
  ListObjectsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListObjectsOutput || (ListObjectsOutput = {}));
var ListObjectsRequest;
(function(ListObjectsRequest2) {
  ListObjectsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListObjectsRequest || (ListObjectsRequest = {}));
var ListObjectsV2Output;
(function(ListObjectsV2Output2) {
  ListObjectsV2Output2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListObjectsV2Output || (ListObjectsV2Output = {}));
var ListObjectsV2Request;
(function(ListObjectsV2Request2) {
  ListObjectsV2Request2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListObjectsV2Request || (ListObjectsV2Request = {}));
var DeleteMarkerEntry;
(function(DeleteMarkerEntry2) {
  DeleteMarkerEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(DeleteMarkerEntry || (DeleteMarkerEntry = {}));
var ObjectVersion;
(function(ObjectVersion2) {
  ObjectVersion2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectVersion || (ObjectVersion = {}));
var ListObjectVersionsOutput;
(function(ListObjectVersionsOutput2) {
  ListObjectVersionsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListObjectVersionsOutput || (ListObjectVersionsOutput = {}));
var ListObjectVersionsRequest;
(function(ListObjectVersionsRequest2) {
  ListObjectVersionsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListObjectVersionsRequest || (ListObjectVersionsRequest = {}));
var Part;
(function(Part3) {
  Part3.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Part || (Part = {}));
var ListPartsOutput;
(function(ListPartsOutput2) {
  ListPartsOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListPartsOutput || (ListPartsOutput = {}));
var ListPartsRequest;
(function(ListPartsRequest2) {
  ListPartsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ListPartsRequest || (ListPartsRequest = {}));
var PutBucketAccelerateConfigurationRequest;
(function(PutBucketAccelerateConfigurationRequest2) {
  PutBucketAccelerateConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketAccelerateConfigurationRequest || (PutBucketAccelerateConfigurationRequest = {}));
var PutBucketAclRequest;
(function(PutBucketAclRequest2) {
  PutBucketAclRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketAclRequest || (PutBucketAclRequest = {}));
var PutBucketAnalyticsConfigurationRequest;
(function(PutBucketAnalyticsConfigurationRequest2) {
  PutBucketAnalyticsConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration)
    });
  };
})(PutBucketAnalyticsConfigurationRequest || (PutBucketAnalyticsConfigurationRequest = {}));
var CORSConfiguration;
(function(CORSConfiguration2) {
  CORSConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CORSConfiguration || (CORSConfiguration = {}));
var PutBucketCorsRequest;
(function(PutBucketCorsRequest2) {
  PutBucketCorsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketCorsRequest || (PutBucketCorsRequest = {}));
var PutBucketEncryptionRequest;
(function(PutBucketEncryptionRequest2) {
  PutBucketEncryptionRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration)
    });
  };
})(PutBucketEncryptionRequest || (PutBucketEncryptionRequest = {}));
var PutBucketIntelligentTieringConfigurationRequest;
(function(PutBucketIntelligentTieringConfigurationRequest2) {
  PutBucketIntelligentTieringConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketIntelligentTieringConfigurationRequest || (PutBucketIntelligentTieringConfigurationRequest = {}));
var PutBucketInventoryConfigurationRequest;
(function(PutBucketInventoryConfigurationRequest2) {
  PutBucketInventoryConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration)
    });
  };
})(PutBucketInventoryConfigurationRequest || (PutBucketInventoryConfigurationRequest = {}));
var BucketLifecycleConfiguration;
(function(BucketLifecycleConfiguration2) {
  BucketLifecycleConfiguration2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Rules && { Rules: obj.Rules.map(function(item) {
      return LifecycleRule.filterSensitiveLog(item);
    }) });
  };
})(BucketLifecycleConfiguration || (BucketLifecycleConfiguration = {}));
var PutBucketLifecycleConfigurationRequest;
(function(PutBucketLifecycleConfigurationRequest2) {
  PutBucketLifecycleConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.LifecycleConfiguration && {
      LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration)
    });
  };
})(PutBucketLifecycleConfigurationRequest || (PutBucketLifecycleConfigurationRequest = {}));
var BucketLoggingStatus;
(function(BucketLoggingStatus2) {
  BucketLoggingStatus2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(BucketLoggingStatus || (BucketLoggingStatus = {}));
var PutBucketLoggingRequest;
(function(PutBucketLoggingRequest2) {
  PutBucketLoggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketLoggingRequest || (PutBucketLoggingRequest = {}));
var PutBucketMetricsConfigurationRequest;
(function(PutBucketMetricsConfigurationRequest2) {
  PutBucketMetricsConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration)
    });
  };
})(PutBucketMetricsConfigurationRequest || (PutBucketMetricsConfigurationRequest = {}));
var PutBucketNotificationConfigurationRequest;
(function(PutBucketNotificationConfigurationRequest2) {
  PutBucketNotificationConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketNotificationConfigurationRequest || (PutBucketNotificationConfigurationRequest = {}));
var PutBucketOwnershipControlsRequest;
(function(PutBucketOwnershipControlsRequest2) {
  PutBucketOwnershipControlsRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketOwnershipControlsRequest || (PutBucketOwnershipControlsRequest = {}));
var PutBucketPolicyRequest;
(function(PutBucketPolicyRequest2) {
  PutBucketPolicyRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketPolicyRequest || (PutBucketPolicyRequest = {}));
var PutBucketReplicationRequest;
(function(PutBucketReplicationRequest2) {
  PutBucketReplicationRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration)
    });
  };
})(PutBucketReplicationRequest || (PutBucketReplicationRequest = {}));
var RequestPaymentConfiguration;
(function(RequestPaymentConfiguration2) {
  RequestPaymentConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RequestPaymentConfiguration || (RequestPaymentConfiguration = {}));
var PutBucketRequestPaymentRequest;
(function(PutBucketRequestPaymentRequest2) {
  PutBucketRequestPaymentRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketRequestPaymentRequest || (PutBucketRequestPaymentRequest = {}));
var Tagging;
(function(Tagging2) {
  Tagging2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Tagging || (Tagging = {}));
var PutBucketTaggingRequest;
(function(PutBucketTaggingRequest2) {
  PutBucketTaggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketTaggingRequest || (PutBucketTaggingRequest = {}));
var VersioningConfiguration;
(function(VersioningConfiguration2) {
  VersioningConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(VersioningConfiguration || (VersioningConfiguration = {}));
var PutBucketVersioningRequest;
(function(PutBucketVersioningRequest2) {
  PutBucketVersioningRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketVersioningRequest || (PutBucketVersioningRequest = {}));
var WebsiteConfiguration;
(function(WebsiteConfiguration2) {
  WebsiteConfiguration2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(WebsiteConfiguration || (WebsiteConfiguration = {}));
var PutBucketWebsiteRequest;
(function(PutBucketWebsiteRequest2) {
  PutBucketWebsiteRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutBucketWebsiteRequest || (PutBucketWebsiteRequest = {}));
var PutObjectOutput;
(function(PutObjectOutput2) {
  PutObjectOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }), obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING });
  };
})(PutObjectOutput || (PutObjectOutput = {}));
var PutObjectRequest;
(function(PutObjectRequest3) {
  PutObjectRequest3.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }), obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING });
  };
})(PutObjectRequest || (PutObjectRequest = {}));
var PutObjectAclOutput;
(function(PutObjectAclOutput2) {
  PutObjectAclOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectAclOutput || (PutObjectAclOutput = {}));
var PutObjectAclRequest;
(function(PutObjectAclRequest2) {
  PutObjectAclRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectAclRequest || (PutObjectAclRequest = {}));
var PutObjectLegalHoldOutput;
(function(PutObjectLegalHoldOutput2) {
  PutObjectLegalHoldOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectLegalHoldOutput || (PutObjectLegalHoldOutput = {}));
var PutObjectLegalHoldRequest;
(function(PutObjectLegalHoldRequest2) {
  PutObjectLegalHoldRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectLegalHoldRequest || (PutObjectLegalHoldRequest = {}));
var PutObjectLockConfigurationOutput;
(function(PutObjectLockConfigurationOutput2) {
  PutObjectLockConfigurationOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectLockConfigurationOutput || (PutObjectLockConfigurationOutput = {}));
var PutObjectLockConfigurationRequest;
(function(PutObjectLockConfigurationRequest2) {
  PutObjectLockConfigurationRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectLockConfigurationRequest || (PutObjectLockConfigurationRequest = {}));
var PutObjectRetentionOutput;
(function(PutObjectRetentionOutput2) {
  PutObjectRetentionOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectRetentionOutput || (PutObjectRetentionOutput = {}));
var PutObjectRetentionRequest;
(function(PutObjectRetentionRequest2) {
  PutObjectRetentionRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectRetentionRequest || (PutObjectRetentionRequest = {}));
var PutObjectTaggingOutput;
(function(PutObjectTaggingOutput2) {
  PutObjectTaggingOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectTaggingOutput || (PutObjectTaggingOutput = {}));
var PutObjectTaggingRequest;
(function(PutObjectTaggingRequest2) {
  PutObjectTaggingRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutObjectTaggingRequest || (PutObjectTaggingRequest = {}));
var PutPublicAccessBlockRequest;
(function(PutPublicAccessBlockRequest2) {
  PutPublicAccessBlockRequest2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(PutPublicAccessBlockRequest || (PutPublicAccessBlockRequest = {}));
var ObjectAlreadyInActiveTierError;
(function(ObjectAlreadyInActiveTierError2) {
  ObjectAlreadyInActiveTierError2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ObjectAlreadyInActiveTierError || (ObjectAlreadyInActiveTierError = {}));
var RestoreObjectOutput;
(function(RestoreObjectOutput2) {
  RestoreObjectOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RestoreObjectOutput || (RestoreObjectOutput = {}));
var GlacierJobParameters;
(function(GlacierJobParameters2) {
  GlacierJobParameters2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(GlacierJobParameters || (GlacierJobParameters = {}));
var Encryption;
(function(Encryption2) {
  Encryption2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING });
  };
})(Encryption || (Encryption = {}));

// ../../node_modules/@aws-sdk/xml-builder/dist/es/escape-attribute.js
function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ../../node_modules/@aws-sdk/xml-builder/dist/es/XmlNode.js
var XmlNode = function() {
  function XmlNode2(name2, children) {
    if (children === void 0) {
      children = [];
    }
    this.name = name2;
    this.children = children;
    this.attributes = {};
  }
  XmlNode2.prototype.withName = function(name2) {
    this.name = name2;
    return this;
  };
  XmlNode2.prototype.addAttribute = function(name2, value) {
    this.attributes[name2] = value;
    return this;
  };
  XmlNode2.prototype.addChildNode = function(child) {
    this.children.push(child);
    return this;
  };
  XmlNode2.prototype.removeAttribute = function(name2) {
    delete this.attributes[name2];
    return this;
  };
  XmlNode2.prototype.toString = function() {
    var e_1, _a;
    var hasChildren = Boolean(this.children.length);
    var xmlText = "<" + this.name;
    var attributes = this.attributes;
    try {
      for (var _b = __values2(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var attributeName = _c.value;
        var attribute = attributes[attributeName];
        if (typeof attribute !== "undefined" && attribute !== null) {
          xmlText += " " + attributeName + '="' + escapeAttribute("" + attribute) + '"';
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
    return xmlText += !hasChildren ? "/>" : ">" + this.children.map(function(c) {
      return c.toString();
    }).join("") + "</" + this.name + ">";
  };
  return XmlNode2;
}();

// ../../node_modules/@aws-sdk/xml-builder/dist/es/escape-element.js
function escapeElement(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ../../node_modules/@aws-sdk/xml-builder/dist/es/XmlText.js
var XmlText = function() {
  function XmlText2(value) {
    this.value = value;
  }
  XmlText2.prototype.toString = function() {
    return escapeElement("" + this.value);
  };
  return XmlText2;
}();

// ../../node_modules/@aws-sdk/client-s3/dist/es/protocols/Aws_restXml.js
var import_fast_xml_parser = __toModule(require_parser());
var serializeAws_restXmlAbortMultipartUploadCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign({}, isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = __assign({ "x-id": "AbortMultipartUpload" }, input.UploadId !== void 0 && { uploadId: input.UploadId });
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "DELETE",
            headers,
            path: resolvedPath,
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlCompleteMultipartUploadCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign({ "content-type": "application/xml" }, isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = __assign({}, input.UploadId !== void 0 && { uploadId: input.UploadId });
          if (input.MultipartUpload !== void 0) {
            contents = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
            body += contents.toString();
          }
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
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlCopyObjectCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL }), isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl }), isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition }), isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding }), isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage }), isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }), isSerializableHeaderValue(input.CopySource) && { "x-amz-copy-source": input.CopySource }), isSerializableHeaderValue(input.CopySourceIfMatch) && {
            "x-amz-copy-source-if-match": input.CopySourceIfMatch
          }), isSerializableHeaderValue(input.CopySourceIfModifiedSince) && {
            "x-amz-copy-source-if-modified-since": dateToUtcString(input.CopySourceIfModifiedSince).toString()
          }), isSerializableHeaderValue(input.CopySourceIfNoneMatch) && {
            "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch
          }), isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince) && {
            "x-amz-copy-source-if-unmodified-since": dateToUtcString(input.CopySourceIfUnmodifiedSince).toString()
          }), isSerializableHeaderValue(input.Expires) && { expires: dateToUtcString(input.Expires).toString() }), isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl }), isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead }), isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP }), isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP }), isSerializableHeaderValue(input.MetadataDirective) && { "x-amz-metadata-directive": input.MetadataDirective }), isSerializableHeaderValue(input.TaggingDirective) && { "x-amz-tagging-directive": input.TaggingDirective }), isSerializableHeaderValue(input.ServerSideEncryption) && {
            "x-amz-server-side-encryption": input.ServerSideEncryption
          }), isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass }), isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
            "x-amz-website-redirect-location": input.WebsiteRedirectLocation
          }), isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
            "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm
          }), isSerializableHeaderValue(input.SSECustomerKey) && {
            "x-amz-server-side-encryption-customer-key": input.SSECustomerKey
          }), isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
            "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5
          }), isSerializableHeaderValue(input.SSEKMSKeyId) && {
            "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId
          }), isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
            "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext
          }), isSerializableHeaderValue(input.BucketKeyEnabled) && {
            "x-amz-server-side-encryption-bucket-key-enabled": input.BucketKeyEnabled.toString()
          }), isSerializableHeaderValue(input.CopySourceSSECustomerAlgorithm) && {
            "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm
          }), isSerializableHeaderValue(input.CopySourceSSECustomerKey) && {
            "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey
          }), isSerializableHeaderValue(input.CopySourceSSECustomerKeyMD5) && {
            "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5
          }), isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging }), isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode }), isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
            "x-amz-object-lock-retain-until-date": (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString()
          }), isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
            "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus
          }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          }), isSerializableHeaderValue(input.ExpectedSourceBucketOwner) && {
            "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner
          }), input.Metadata !== void 0 && Object.keys(input.Metadata).reduce(function(acc, suffix) {
            var _a2;
            return __assign(__assign({}, acc), (_a2 = {}, _a2["x-amz-meta-" + suffix.toLowerCase()] = input.Metadata[suffix], _a2));
          }, {}));
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = {
            "x-id": "CopyObject"
          };
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
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlCreateMultipartUploadCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL }), isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl }), isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition }), isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding }), isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage }), isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }), isSerializableHeaderValue(input.Expires) && { expires: dateToUtcString(input.Expires).toString() }), isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl }), isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead }), isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP }), isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP }), isSerializableHeaderValue(input.ServerSideEncryption) && {
            "x-amz-server-side-encryption": input.ServerSideEncryption
          }), isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass }), isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
            "x-amz-website-redirect-location": input.WebsiteRedirectLocation
          }), isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
            "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm
          }), isSerializableHeaderValue(input.SSECustomerKey) && {
            "x-amz-server-side-encryption-customer-key": input.SSECustomerKey
          }), isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
            "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5
          }), isSerializableHeaderValue(input.SSEKMSKeyId) && {
            "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId
          }), isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
            "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext
          }), isSerializableHeaderValue(input.BucketKeyEnabled) && {
            "x-amz-server-side-encryption-bucket-key-enabled": input.BucketKeyEnabled.toString()
          }), isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging }), isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode }), isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
            "x-amz-object-lock-retain-until-date": (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString()
          }), isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
            "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus
          }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          }), input.Metadata !== void 0 && Object.keys(input.Metadata).reduce(function(acc, suffix) {
            var _a2;
            return __assign(__assign({}, acc), (_a2 = {}, _a2["x-amz-meta-" + suffix.toLowerCase()] = input.Metadata[suffix], _a2));
          }, {}));
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = {
            uploads: ""
          };
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
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlDeleteObjectCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign(__assign(__assign({}, isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA }), isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.BypassGovernanceRetention) && {
            "x-amz-bypass-governance-retention": input.BypassGovernanceRetention.toString()
          }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = __assign({ "x-id": "DeleteObject" }, input.VersionId !== void 0 && { versionId: input.VersionId });
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "DELETE",
            headers,
            path: resolvedPath,
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlGetObjectCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }), isSerializableHeaderValue(input.IfModifiedSince) && {
            "if-modified-since": dateToUtcString(input.IfModifiedSince).toString()
          }), isSerializableHeaderValue(input.IfNoneMatch) && { "if-none-match": input.IfNoneMatch }), isSerializableHeaderValue(input.IfUnmodifiedSince) && {
            "if-unmodified-since": dateToUtcString(input.IfUnmodifiedSince).toString()
          }), isSerializableHeaderValue(input.Range) && { range: input.Range }), isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
            "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm
          }), isSerializableHeaderValue(input.SSECustomerKey) && {
            "x-amz-server-side-encryption-customer-key": input.SSECustomerKey
          }), isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
            "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5
          }), isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ "x-id": "GetObject" }, input.ResponseCacheControl !== void 0 && { "response-cache-control": input.ResponseCacheControl }), input.ResponseContentDisposition !== void 0 && {
            "response-content-disposition": input.ResponseContentDisposition
          }), input.ResponseContentEncoding !== void 0 && { "response-content-encoding": input.ResponseContentEncoding }), input.ResponseContentLanguage !== void 0 && { "response-content-language": input.ResponseContentLanguage }), input.ResponseContentType !== void 0 && { "response-content-type": input.ResponseContentType }), input.ResponseExpires !== void 0 && {
            "response-expires": (input.ResponseExpires.toISOString().split(".")[0] + "Z").toString()
          }), input.VersionId !== void 0 && { versionId: input.VersionId }), input.PartNumber !== void 0 && { partNumber: input.PartNumber.toString() });
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "GET",
            headers,
            path: resolvedPath,
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlListObjectsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign({}, isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          query = __assign(__assign(__assign(__assign(__assign({}, input.Delimiter !== void 0 && { delimiter: input.Delimiter }), input.EncodingType !== void 0 && { "encoding-type": input.EncodingType }), input.Marker !== void 0 && { marker: input.Marker }), input.MaxKeys !== void 0 && { "max-keys": input.MaxKeys.toString() }), input.Prefix !== void 0 && { prefix: input.Prefix });
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "GET",
            headers,
            path: resolvedPath,
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlListObjectsV2Command = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign({}, isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          query = __assign(__assign(__assign(__assign(__assign(__assign(__assign({ "list-type": "2" }, input.Delimiter !== void 0 && { delimiter: input.Delimiter }), input.EncodingType !== void 0 && { "encoding-type": input.EncodingType }), input.MaxKeys !== void 0 && { "max-keys": input.MaxKeys.toString() }), input.Prefix !== void 0 && { prefix: input.Prefix }), input.ContinuationToken !== void 0 && { "continuation-token": input.ContinuationToken }), input.FetchOwner !== void 0 && { "fetch-owner": input.FetchOwner.toString() }), input.StartAfter !== void 0 && { "start-after": input.StartAfter });
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "GET",
            headers,
            path: resolvedPath,
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlListPartsCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign({}, isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = __assign(__assign(__assign({ "x-id": "ListParts" }, input.MaxParts !== void 0 && { "max-parts": input.MaxParts.toString() }), input.PartNumberMarker !== void 0 && { "part-number-marker": input.PartNumberMarker }), input.UploadId !== void 0 && { uploadId: input.UploadId });
          return [4, context.endpoint()];
        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2, new HttpRequest({
            protocol,
            hostname,
            port,
            method: "GET",
            headers,
            path: resolvedPath,
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlPutObjectCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ "content-type": "application/octet-stream" }, isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL }), isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl }), isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition }), isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding }), isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage }), isSerializableHeaderValue(input.ContentLength) && { "content-length": input.ContentLength.toString() }), isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5 }), isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }), isSerializableHeaderValue(input.Expires) && { expires: dateToUtcString(input.Expires).toString() }), isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl }), isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead }), isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP }), isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP }), isSerializableHeaderValue(input.ServerSideEncryption) && {
            "x-amz-server-side-encryption": input.ServerSideEncryption
          }), isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass }), isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
            "x-amz-website-redirect-location": input.WebsiteRedirectLocation
          }), isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
            "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm
          }), isSerializableHeaderValue(input.SSECustomerKey) && {
            "x-amz-server-side-encryption-customer-key": input.SSECustomerKey
          }), isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
            "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5
          }), isSerializableHeaderValue(input.SSEKMSKeyId) && {
            "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId
          }), isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
            "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext
          }), isSerializableHeaderValue(input.BucketKeyEnabled) && {
            "x-amz-server-side-encryption-bucket-key-enabled": input.BucketKeyEnabled.toString()
          }), isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging }), isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode }), isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
            "x-amz-object-lock-retain-until-date": (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString()
          }), isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
            "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus
          }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          }), input.Metadata !== void 0 && Object.keys(input.Metadata).reduce(function(acc, suffix) {
            var _a2;
            return __assign(__assign({}, acc), (_a2 = {}, _a2["x-amz-meta-" + suffix.toLowerCase()] = input.Metadata[suffix], _a2));
          }, {}));
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = {
            "x-id": "PutObject"
          };
          if (input.Body !== void 0) {
            contents = input.Body;
            body = contents;
          }
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
            query,
            body
          })];
      }
    });
  });
};
var serializeAws_restXmlUploadPartCommand = function(input, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var headers, resolvedPath, labelValue, labelValue, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign({ "content-type": "application/octet-stream" }, isSerializableHeaderValue(input.ContentLength) && { "content-length": input.ContentLength.toString() }), isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5 }), isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
            "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm
          }), isSerializableHeaderValue(input.SSECustomerKey) && {
            "x-amz-server-side-encryption-customer-key": input.SSECustomerKey
          }), isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
            "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5
          }), isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer }), isSerializableHeaderValue(input.ExpectedBucketOwner) && {
            "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
          });
          resolvedPath = "/{Bucket}/{Key+}";
          if (input.Bucket !== void 0) {
            labelValue = input.Bucket;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Bucket.");
            }
            resolvedPath = resolvedPath.replace("{Bucket}", extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Bucket.");
          }
          if (input.Key !== void 0) {
            labelValue = input.Key;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Key.");
            }
            resolvedPath = resolvedPath.replace("{Key+}", labelValue.split("/").map(function(segment) {
              return extendedEncodeURIComponent(segment);
            }).join("/"));
          } else {
            throw new Error("No value provided for input HTTP label: Key.");
          }
          query = __assign(__assign({ "x-id": "UploadPart" }, input.PartNumber !== void 0 && { partNumber: input.PartNumber.toString() }), input.UploadId !== void 0 && { uploadId: input.UploadId });
          if (input.Body !== void 0) {
            contents = input.Body;
            body = contents;
          }
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
            query,
            body
          })];
      }
    });
  });
};
var deserializeAws_restXmlAbortMultipartUploadCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlAbortMultipartUploadCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            RequestCharged: void 0
          };
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, collectBody2(output.body, context)];
        case 1:
          _a.sent();
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlAbortMultipartUploadCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchUpload":
              return [3, 2];
            case "com.amazonaws.s3#NoSuchUpload":
              return [3, 2];
          }
          return [3, 4];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restXmlNoSuchUploadResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_e.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
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
var deserializeAws_restXmlCompleteMultipartUploadCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Bucket: void 0,
            BucketKeyEnabled: void 0,
            ETag: void 0,
            Expiration: void 0,
            Key: void 0,
            Location: void 0,
            RequestCharged: void 0,
            SSEKMSKeyId: void 0,
            ServerSideEncryption: void 0,
            VersionId: void 0
          };
          if (output.headers["x-amz-expiration"] !== void 0) {
            contents.Expiration = output.headers["x-amz-expiration"];
          }
          if (output.headers["x-amz-server-side-encryption"] !== void 0) {
            contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
          }
          if (output.headers["x-amz-version-id"] !== void 0) {
            contents.VersionId = output.headers["x-amz-version-id"];
          }
          if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== void 0) {
            contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
          }
          if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== void 0) {
            contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data["Bucket"] !== void 0) {
            contents.Bucket = data["Bucket"];
          }
          if (data["ETag"] !== void 0) {
            contents.ETag = data["ETag"];
          }
          if (data["Key"] !== void 0) {
            contents.Key = data["Key"];
          }
          if (data["Location"] !== void 0) {
            contents.Location = data["Location"];
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCompleteMultipartUploadCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlCopyObjectCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlCopyObjectCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BucketKeyEnabled: void 0,
            CopyObjectResult: void 0,
            CopySourceVersionId: void 0,
            Expiration: void 0,
            RequestCharged: void 0,
            SSECustomerAlgorithm: void 0,
            SSECustomerKeyMD5: void 0,
            SSEKMSEncryptionContext: void 0,
            SSEKMSKeyId: void 0,
            ServerSideEncryption: void 0,
            VersionId: void 0
          };
          if (output.headers["x-amz-expiration"] !== void 0) {
            contents.Expiration = output.headers["x-amz-expiration"];
          }
          if (output.headers["x-amz-copy-source-version-id"] !== void 0) {
            contents.CopySourceVersionId = output.headers["x-amz-copy-source-version-id"];
          }
          if (output.headers["x-amz-version-id"] !== void 0) {
            contents.VersionId = output.headers["x-amz-version-id"];
          }
          if (output.headers["x-amz-server-side-encryption"] !== void 0) {
            contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== void 0) {
            contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== void 0) {
            contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
          }
          if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== void 0) {
            contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
          }
          if (output.headers["x-amz-server-side-encryption-context"] !== void 0) {
            contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
          }
          if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== void 0) {
            contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CopyObjectResult = deserializeAws_restXmlCopyObjectResult(data, context);
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCopyObjectCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ObjectNotInActiveTierError":
              return [3, 2];
            case "com.amazonaws.s3#ObjectNotInActiveTierError":
              return [3, 2];
          }
          return [3, 4];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restXmlObjectNotInActiveTierErrorResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_e.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
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
var deserializeAws_restXmlCreateMultipartUploadCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlCreateMultipartUploadCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AbortDate: void 0,
            AbortRuleId: void 0,
            Bucket: void 0,
            BucketKeyEnabled: void 0,
            Key: void 0,
            RequestCharged: void 0,
            SSECustomerAlgorithm: void 0,
            SSECustomerKeyMD5: void 0,
            SSEKMSEncryptionContext: void 0,
            SSEKMSKeyId: void 0,
            ServerSideEncryption: void 0,
            UploadId: void 0
          };
          if (output.headers["x-amz-abort-date"] !== void 0) {
            contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
          }
          if (output.headers["x-amz-abort-rule-id"] !== void 0) {
            contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
          }
          if (output.headers["x-amz-server-side-encryption"] !== void 0) {
            contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== void 0) {
            contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== void 0) {
            contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
          }
          if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== void 0) {
            contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
          }
          if (output.headers["x-amz-server-side-encryption-context"] !== void 0) {
            contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
          }
          if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== void 0) {
            contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data["Bucket"] !== void 0) {
            contents.Bucket = data["Bucket"];
          }
          if (data["Key"] !== void 0) {
            contents.Key = data["Key"];
          }
          if (data["UploadId"] !== void 0) {
            contents.UploadId = data["UploadId"];
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateMultipartUploadCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlDeleteObjectCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlDeleteObjectCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DeleteMarker: void 0,
            RequestCharged: void 0,
            VersionId: void 0
          };
          if (output.headers["x-amz-delete-marker"] !== void 0) {
            contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
          }
          if (output.headers["x-amz-version-id"] !== void 0) {
            contents.VersionId = output.headers["x-amz-version-id"];
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, collectBody2(output.body, context)];
        case 1:
          _a.sent();
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlDeleteObjectCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlGetObjectCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return [2, deserializeAws_restXmlGetObjectCommandError(output, context)];
      }
      contents = {
        $metadata: deserializeMetadata(output),
        AcceptRanges: void 0,
        Body: void 0,
        BucketKeyEnabled: void 0,
        CacheControl: void 0,
        ContentDisposition: void 0,
        ContentEncoding: void 0,
        ContentLanguage: void 0,
        ContentLength: void 0,
        ContentRange: void 0,
        ContentType: void 0,
        DeleteMarker: void 0,
        ETag: void 0,
        Expiration: void 0,
        Expires: void 0,
        LastModified: void 0,
        Metadata: void 0,
        MissingMeta: void 0,
        ObjectLockLegalHoldStatus: void 0,
        ObjectLockMode: void 0,
        ObjectLockRetainUntilDate: void 0,
        PartsCount: void 0,
        ReplicationStatus: void 0,
        RequestCharged: void 0,
        Restore: void 0,
        SSECustomerAlgorithm: void 0,
        SSECustomerKeyMD5: void 0,
        SSEKMSKeyId: void 0,
        ServerSideEncryption: void 0,
        StorageClass: void 0,
        TagCount: void 0,
        VersionId: void 0,
        WebsiteRedirectLocation: void 0
      };
      if (output.headers["x-amz-delete-marker"] !== void 0) {
        contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
      }
      if (output.headers["accept-ranges"] !== void 0) {
        contents.AcceptRanges = output.headers["accept-ranges"];
      }
      if (output.headers["x-amz-expiration"] !== void 0) {
        contents.Expiration = output.headers["x-amz-expiration"];
      }
      if (output.headers["x-amz-restore"] !== void 0) {
        contents.Restore = output.headers["x-amz-restore"];
      }
      if (output.headers["last-modified"] !== void 0) {
        contents.LastModified = new Date(output.headers["last-modified"]);
      }
      if (output.headers["content-length"] !== void 0) {
        contents.ContentLength = parseInt(output.headers["content-length"], 10);
      }
      if (output.headers["etag"] !== void 0) {
        contents.ETag = output.headers["etag"];
      }
      if (output.headers["x-amz-missing-meta"] !== void 0) {
        contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
      }
      if (output.headers["x-amz-version-id"] !== void 0) {
        contents.VersionId = output.headers["x-amz-version-id"];
      }
      if (output.headers["cache-control"] !== void 0) {
        contents.CacheControl = output.headers["cache-control"];
      }
      if (output.headers["content-disposition"] !== void 0) {
        contents.ContentDisposition = output.headers["content-disposition"];
      }
      if (output.headers["content-encoding"] !== void 0) {
        contents.ContentEncoding = output.headers["content-encoding"];
      }
      if (output.headers["content-language"] !== void 0) {
        contents.ContentLanguage = output.headers["content-language"];
      }
      if (output.headers["content-range"] !== void 0) {
        contents.ContentRange = output.headers["content-range"];
      }
      if (output.headers["content-type"] !== void 0) {
        contents.ContentType = output.headers["content-type"];
      }
      if (output.headers["expires"] !== void 0) {
        contents.Expires = new Date(output.headers["expires"]);
      }
      if (output.headers["x-amz-website-redirect-location"] !== void 0) {
        contents.WebsiteRedirectLocation = output.headers["x-amz-website-redirect-location"];
      }
      if (output.headers["x-amz-server-side-encryption"] !== void 0) {
        contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
      }
      if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== void 0) {
        contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
      }
      if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== void 0) {
        contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
      }
      if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== void 0) {
        contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
      }
      if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== void 0) {
        contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
      }
      if (output.headers["x-amz-storage-class"] !== void 0) {
        contents.StorageClass = output.headers["x-amz-storage-class"];
      }
      if (output.headers["x-amz-request-charged"] !== void 0) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
      }
      if (output.headers["x-amz-replication-status"] !== void 0) {
        contents.ReplicationStatus = output.headers["x-amz-replication-status"];
      }
      if (output.headers["x-amz-mp-parts-count"] !== void 0) {
        contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
      }
      if (output.headers["x-amz-tagging-count"] !== void 0) {
        contents.TagCount = parseInt(output.headers["x-amz-tagging-count"], 10);
      }
      if (output.headers["x-amz-object-lock-mode"] !== void 0) {
        contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
      }
      if (output.headers["x-amz-object-lock-retain-until-date"] !== void 0) {
        contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
      }
      if (output.headers["x-amz-object-lock-legal-hold"] !== void 0) {
        contents.ObjectLockLegalHoldStatus = output.headers["x-amz-object-lock-legal-hold"];
      }
      Object.keys(output.headers).forEach(function(header) {
        if (contents.Metadata === void 0) {
          contents.Metadata = {};
        }
        if (header.startsWith("x-amz-meta-")) {
          contents.Metadata[header.substring(11)] = output.headers[header];
        }
      });
      data = output.body;
      contents.Body = data;
      return [2, Promise.resolve(contents)];
    });
  });
};
var deserializeAws_restXmlGetObjectCommandError = function(output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidObjectState":
              return [3, 2];
            case "com.amazonaws.s3#InvalidObjectState":
              return [3, 2];
            case "NoSuchKey":
              return [3, 4];
            case "com.amazonaws.s3#NoSuchKey":
              return [3, 4];
          }
          return [3, 6];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restXmlInvalidObjectStateResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_f.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 7];
        case 4:
          _d = [{}];
          return [4, deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)];
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
var deserializeAws_restXmlListObjectsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlListObjectsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CommonPrefixes: void 0,
            Contents: void 0,
            Delimiter: void 0,
            EncodingType: void 0,
            IsTruncated: void 0,
            Marker: void 0,
            MaxKeys: void 0,
            Name: void 0,
            NextMarker: void 0,
            Prefix: void 0
          };
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.CommonPrefixes === "") {
            contents.CommonPrefixes = [];
          }
          if (data["CommonPrefixes"] !== void 0) {
            contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(getArrayIfSingleItem(data["CommonPrefixes"]), context);
          }
          if (data.Contents === "") {
            contents.Contents = [];
          }
          if (data["Contents"] !== void 0) {
            contents.Contents = deserializeAws_restXmlObjectList(getArrayIfSingleItem(data["Contents"]), context);
          }
          if (data["Delimiter"] !== void 0) {
            contents.Delimiter = data["Delimiter"];
          }
          if (data["EncodingType"] !== void 0) {
            contents.EncodingType = data["EncodingType"];
          }
          if (data["IsTruncated"] !== void 0) {
            contents.IsTruncated = data["IsTruncated"] == "true";
          }
          if (data["Marker"] !== void 0) {
            contents.Marker = data["Marker"];
          }
          if (data["MaxKeys"] !== void 0) {
            contents.MaxKeys = parseInt(data["MaxKeys"]);
          }
          if (data["Name"] !== void 0) {
            contents.Name = data["Name"];
          }
          if (data["NextMarker"] !== void 0) {
            contents.NextMarker = data["NextMarker"];
          }
          if (data["Prefix"] !== void 0) {
            contents.Prefix = data["Prefix"];
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListObjectsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchBucket":
              return [3, 2];
            case "com.amazonaws.s3#NoSuchBucket":
              return [3, 2];
          }
          return [3, 4];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_e.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
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
var deserializeAws_restXmlListObjectsV2Command = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlListObjectsV2CommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CommonPrefixes: void 0,
            Contents: void 0,
            ContinuationToken: void 0,
            Delimiter: void 0,
            EncodingType: void 0,
            IsTruncated: void 0,
            KeyCount: void 0,
            MaxKeys: void 0,
            Name: void 0,
            NextContinuationToken: void 0,
            Prefix: void 0,
            StartAfter: void 0
          };
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.CommonPrefixes === "") {
            contents.CommonPrefixes = [];
          }
          if (data["CommonPrefixes"] !== void 0) {
            contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(getArrayIfSingleItem(data["CommonPrefixes"]), context);
          }
          if (data.Contents === "") {
            contents.Contents = [];
          }
          if (data["Contents"] !== void 0) {
            contents.Contents = deserializeAws_restXmlObjectList(getArrayIfSingleItem(data["Contents"]), context);
          }
          if (data["ContinuationToken"] !== void 0) {
            contents.ContinuationToken = data["ContinuationToken"];
          }
          if (data["Delimiter"] !== void 0) {
            contents.Delimiter = data["Delimiter"];
          }
          if (data["EncodingType"] !== void 0) {
            contents.EncodingType = data["EncodingType"];
          }
          if (data["IsTruncated"] !== void 0) {
            contents.IsTruncated = data["IsTruncated"] == "true";
          }
          if (data["KeyCount"] !== void 0) {
            contents.KeyCount = parseInt(data["KeyCount"]);
          }
          if (data["MaxKeys"] !== void 0) {
            contents.MaxKeys = parseInt(data["MaxKeys"]);
          }
          if (data["Name"] !== void 0) {
            contents.Name = data["Name"];
          }
          if (data["NextContinuationToken"] !== void 0) {
            contents.NextContinuationToken = data["NextContinuationToken"];
          }
          if (data["Prefix"] !== void 0) {
            contents.Prefix = data["Prefix"];
          }
          if (data["StartAfter"] !== void 0) {
            contents.StartAfter = data["StartAfter"];
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListObjectsV2CommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchBucket":
              return [3, 2];
            case "com.amazonaws.s3#NoSuchBucket":
              return [3, 2];
          }
          return [3, 4];
        case 2:
          _c = [{}];
          return [4, deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([_e.sent()])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
          return [3, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
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
var deserializeAws_restXmlListPartsCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlListPartsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AbortDate: void 0,
            AbortRuleId: void 0,
            Bucket: void 0,
            Initiator: void 0,
            IsTruncated: void 0,
            Key: void 0,
            MaxParts: void 0,
            NextPartNumberMarker: void 0,
            Owner: void 0,
            PartNumberMarker: void 0,
            Parts: void 0,
            RequestCharged: void 0,
            StorageClass: void 0,
            UploadId: void 0
          };
          if (output.headers["x-amz-abort-date"] !== void 0) {
            contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
          }
          if (output.headers["x-amz-abort-rule-id"] !== void 0) {
            contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data["Bucket"] !== void 0) {
            contents.Bucket = data["Bucket"];
          }
          if (data["Initiator"] !== void 0) {
            contents.Initiator = deserializeAws_restXmlInitiator(data["Initiator"], context);
          }
          if (data["IsTruncated"] !== void 0) {
            contents.IsTruncated = data["IsTruncated"] == "true";
          }
          if (data["Key"] !== void 0) {
            contents.Key = data["Key"];
          }
          if (data["MaxParts"] !== void 0) {
            contents.MaxParts = parseInt(data["MaxParts"]);
          }
          if (data["NextPartNumberMarker"] !== void 0) {
            contents.NextPartNumberMarker = data["NextPartNumberMarker"];
          }
          if (data["Owner"] !== void 0) {
            contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
          }
          if (data["PartNumberMarker"] !== void 0) {
            contents.PartNumberMarker = data["PartNumberMarker"];
          }
          if (data.Part === "") {
            contents.Parts = [];
          }
          if (data["Part"] !== void 0) {
            contents.Parts = deserializeAws_restXmlParts(getArrayIfSingleItem(data["Part"]), context);
          }
          if (data["StorageClass"] !== void 0) {
            contents.StorageClass = data["StorageClass"];
          }
          if (data["UploadId"] !== void 0) {
            contents.UploadId = data["UploadId"];
          }
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListPartsCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlPutObjectCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlPutObjectCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BucketKeyEnabled: void 0,
            ETag: void 0,
            Expiration: void 0,
            RequestCharged: void 0,
            SSECustomerAlgorithm: void 0,
            SSECustomerKeyMD5: void 0,
            SSEKMSEncryptionContext: void 0,
            SSEKMSKeyId: void 0,
            ServerSideEncryption: void 0,
            VersionId: void 0
          };
          if (output.headers["x-amz-expiration"] !== void 0) {
            contents.Expiration = output.headers["x-amz-expiration"];
          }
          if (output.headers["etag"] !== void 0) {
            contents.ETag = output.headers["etag"];
          }
          if (output.headers["x-amz-server-side-encryption"] !== void 0) {
            contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
          }
          if (output.headers["x-amz-version-id"] !== void 0) {
            contents.VersionId = output.headers["x-amz-version-id"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== void 0) {
            contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== void 0) {
            contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
          }
          if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== void 0) {
            contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
          }
          if (output.headers["x-amz-server-side-encryption-context"] !== void 0) {
            contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
          }
          if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== void 0) {
            contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, collectBody2(output.body, context)];
        case 1:
          _a.sent();
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlPutObjectCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlUploadPartCommand = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restXmlUploadPartCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BucketKeyEnabled: void 0,
            ETag: void 0,
            RequestCharged: void 0,
            SSECustomerAlgorithm: void 0,
            SSECustomerKeyMD5: void 0,
            SSEKMSKeyId: void 0,
            ServerSideEncryption: void 0
          };
          if (output.headers["x-amz-server-side-encryption"] !== void 0) {
            contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
          }
          if (output.headers["etag"] !== void 0) {
            contents.ETag = output.headers["etag"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== void 0) {
            contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
          }
          if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== void 0) {
            contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
          }
          if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== void 0) {
            contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
          }
          if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== void 0) {
            contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
          }
          if (output.headers["x-amz-request-charged"] !== void 0) {
            contents.RequestCharged = output.headers["x-amz-request-charged"];
          }
          return [4, collectBody2(output.body, context)];
        case 1:
          _a.sent();
          return [2, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUploadPartCommandError = function(output, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlInvalidObjectStateResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "InvalidObjectState",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        AccessTier: void 0,
        StorageClass: void 0
      };
      data = parsedOutput.body;
      if (data["AccessTier"] !== void 0) {
        contents.AccessTier = data["AccessTier"];
      }
      if (data["StorageClass"] !== void 0) {
        contents.StorageClass = data["StorageClass"];
      }
      return [2, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchBucketResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "NoSuchBucket",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
      };
      data = parsedOutput.body;
      return [2, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchKeyResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "NoSuchKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
      };
      data = parsedOutput.body;
      return [2, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchUploadResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "NoSuchUpload",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
      };
      data = parsedOutput.body;
      return [2, contents];
    });
  });
};
var deserializeAws_restXmlObjectNotInActiveTierErrorResponse = function(parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function() {
    var contents, data;
    return __generator(this, function(_a) {
      contents = {
        name: "ObjectNotInActiveTierError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
      };
      data = parsedOutput.body;
      return [2, contents];
    });
  });
};
var serializeAws_restXmlCompletedMultipartUpload = function(input, context) {
  var bodyNode = new XmlNode("CompletedMultipartUpload");
  if (input.Parts !== void 0 && input.Parts !== null) {
    var nodes = serializeAws_restXmlCompletedPartList(input.Parts, context);
    nodes.map(function(node) {
      node = node.withName("Part");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};
var serializeAws_restXmlCompletedPart = function(input, context) {
  var bodyNode = new XmlNode("CompletedPart");
  if (input.ETag !== void 0 && input.ETag !== null) {
    var node = new XmlNode("ETag").addChildNode(new XmlText(input.ETag)).withName("ETag");
    bodyNode.addChildNode(node);
  }
  if (input.PartNumber !== void 0 && input.PartNumber !== null) {
    var node = new XmlNode("PartNumber").addChildNode(new XmlText(String(input.PartNumber))).withName("PartNumber");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCompletedPartList = function(input, context) {
  return input.filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    var node = serializeAws_restXmlCompletedPart(entry, context);
    return node.withName("member");
  });
};
var deserializeAws_restXmlCommonPrefix = function(output, context) {
  var contents = {
    Prefix: void 0
  };
  if (output["Prefix"] !== void 0) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};
var deserializeAws_restXmlCommonPrefixList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_restXmlCommonPrefix(entry, context);
  });
};
var deserializeAws_restXmlCopyObjectResult = function(output, context) {
  var contents = {
    ETag: void 0,
    LastModified: void 0
  };
  if (output["ETag"] !== void 0) {
    contents.ETag = output["ETag"];
  }
  if (output["LastModified"] !== void 0) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};
var deserializeAws_restXmlInitiator = function(output, context) {
  var contents = {
    ID: void 0,
    DisplayName: void 0
  };
  if (output["ID"] !== void 0) {
    contents.ID = output["ID"];
  }
  if (output["DisplayName"] !== void 0) {
    contents.DisplayName = output["DisplayName"];
  }
  return contents;
};
var deserializeAws_restXml_Object = function(output, context) {
  var contents = {
    Key: void 0,
    LastModified: void 0,
    ETag: void 0,
    Size: void 0,
    StorageClass: void 0,
    Owner: void 0
  };
  if (output["Key"] !== void 0) {
    contents.Key = output["Key"];
  }
  if (output["LastModified"] !== void 0) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["ETag"] !== void 0) {
    contents.ETag = output["ETag"];
  }
  if (output["Size"] !== void 0) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["StorageClass"] !== void 0) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Owner"] !== void 0) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};
var deserializeAws_restXmlObjectList = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_restXml_Object(entry, context);
  });
};
var deserializeAws_restXmlOwner = function(output, context) {
  var contents = {
    DisplayName: void 0,
    ID: void 0
  };
  if (output["DisplayName"] !== void 0) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["ID"] !== void 0) {
    contents.ID = output["ID"];
  }
  return contents;
};
var deserializeAws_restXmlPart = function(output, context) {
  var contents = {
    PartNumber: void 0,
    LastModified: void 0,
    ETag: void 0,
    Size: void 0
  };
  if (output["PartNumber"] !== void 0) {
    contents.PartNumber = parseInt(output["PartNumber"]);
  }
  if (output["LastModified"] !== void 0) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["ETag"] !== void 0) {
    contents.ETag = output["ETag"];
  }
  if (output["Size"] !== void 0) {
    contents.Size = parseInt(output["Size"]);
  }
  return contents;
};
var deserializeAws_restXmlParts = function(output, context) {
  return (output || []).filter(function(e) {
    return e != null;
  }).map(function(entry) {
    if (entry === null) {
      return null;
    }
    return deserializeAws_restXmlPart(entry, context);
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
var isSerializableHeaderValue = function(value) {
  return value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var decodeEscapedXML = function(str) {
  return str.replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<");
};
var parseBody = function(streamBody, context) {
  return collectBodyString2(streamBody, context).then(function(encoded) {
    if (encoded.length) {
      var parsedObj = (0, import_fast_xml_parser.parse)(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: function(val, tagName) {
          return decodeEscapedXML(val);
        }
      });
      var textNodeName = "#text";
      var key = Object.keys(parsedObj)[0];
      var parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });
};
var loadRestXmlErrorCode = function(output, data) {
  if (data.Code !== void 0) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
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

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/AbortMultipartUploadCommand.js
var AbortMultipartUploadCommand = function(_super) {
  __extends(AbortMultipartUploadCommand2, _super);
  function AbortMultipartUploadCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  AbortMultipartUploadCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "AbortMultipartUploadCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: AbortMultipartUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AbortMultipartUploadOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AbortMultipartUploadCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlAbortMultipartUploadCommand(input, context);
  };
  AbortMultipartUploadCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlAbortMultipartUploadCommand(output, context);
  };
  return AbortMultipartUploadCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/CompleteMultipartUploadCommand.js
var CompleteMultipartUploadCommand = function(_super) {
  __extends(CompleteMultipartUploadCommand2, _super);
  function CompleteMultipartUploadCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  CompleteMultipartUploadCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getThrow200ExceptionsPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "CompleteMultipartUploadCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteMultipartUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteMultipartUploadOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CompleteMultipartUploadCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlCompleteMultipartUploadCommand(input, context);
  };
  CompleteMultipartUploadCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlCompleteMultipartUploadCommand(output, context);
  };
  return CompleteMultipartUploadCommand2;
}(Command);

// ../../node_modules/@aws-sdk/middleware-ssec/dist/es/index.js
function ssecMiddleware(options) {
  var _this = this;
  return function(next) {
    return function(args) {
      return __awaiter2(_this, void 0, void 0, function() {
        var input, properties, properties_1, properties_1_1, prop, value, valueView, encoded, hash, _a, _b, _c, _d, e_1_1;
        var e_1, _e, _f;
        return __generator2(this, function(_g) {
          switch (_g.label) {
            case 0:
              input = __assign2({}, args.input);
              properties = [
                {
                  target: "SSECustomerKey",
                  hash: "SSECustomerKeyMD5"
                },
                {
                  target: "CopySourceSSECustomerKey",
                  hash: "CopySourceSSECustomerKeyMD5"
                }
              ];
              _g.label = 1;
            case 1:
              _g.trys.push([1, 6, 7, 8]);
              properties_1 = __values2(properties), properties_1_1 = properties_1.next();
              _g.label = 2;
            case 2:
              if (!!properties_1_1.done)
                return [3, 5];
              prop = properties_1_1.value;
              value = input[prop.target];
              if (!value)
                return [3, 4];
              valueView = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : typeof value === "string" ? options.utf8Decoder(value) : new Uint8Array(value);
              encoded = options.base64Encoder(valueView);
              hash = new options.md5();
              hash.update(valueView);
              _a = [__assign2({}, input)];
              _f = {}, _f[prop.target] = encoded;
              _b = prop.hash;
              _d = (_c = options).base64Encoder;
              return [4, hash.digest()];
            case 3:
              input = __assign2.apply(void 0, _a.concat([(_f[_b] = _d.apply(_c, [_g.sent()]), _f)]));
              _g.label = 4;
            case 4:
              properties_1_1 = properties_1.next();
              return [3, 2];
            case 5:
              return [3, 8];
            case 6:
              e_1_1 = _g.sent();
              e_1 = { error: e_1_1 };
              return [3, 8];
            case 7:
              try {
                if (properties_1_1 && !properties_1_1.done && (_e = properties_1.return))
                  _e.call(properties_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
              return [7];
            case 8:
              return [2, next(__assign2(__assign2({}, args), { input }))];
          }
        });
      });
    };
  };
}
var ssecMiddlewareOptions = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: true
};
var getSsecPlugin = function(config) {
  return {
    applyToStack: function(clientStack) {
      clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
    }
  };
};

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/CopyObjectCommand.js
var CopyObjectCommand = function(_super) {
  __extends(CopyObjectCommand2, _super);
  function CopyObjectCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  CopyObjectCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getThrow200ExceptionsPlugin(configuration));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "CopyObjectCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyObjectOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CopyObjectCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlCopyObjectCommand(input, context);
  };
  CopyObjectCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlCopyObjectCommand(output, context);
  };
  return CopyObjectCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/CreateMultipartUploadCommand.js
var CreateMultipartUploadCommand = function(_super) {
  __extends(CreateMultipartUploadCommand2, _super);
  function CreateMultipartUploadCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  CreateMultipartUploadCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "CreateMultipartUploadCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMultipartUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMultipartUploadOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateMultipartUploadCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlCreateMultipartUploadCommand(input, context);
  };
  CreateMultipartUploadCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlCreateMultipartUploadCommand(output, context);
  };
  return CreateMultipartUploadCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/DeleteObjectCommand.js
var DeleteObjectCommand = function(_super) {
  __extends(DeleteObjectCommand2, _super);
  function DeleteObjectCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  DeleteObjectCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "DeleteObjectCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteObjectOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteObjectCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlDeleteObjectCommand(input, context);
  };
  DeleteObjectCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlDeleteObjectCommand(output, context);
  };
  return DeleteObjectCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/GetObjectCommand.js
var GetObjectCommand = function(_super) {
  __extends(GetObjectCommand2, _super);
  function GetObjectCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  GetObjectCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "GetObjectCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetObjectOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetObjectCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlGetObjectCommand(input, context);
  };
  GetObjectCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlGetObjectCommand(output, context);
  };
  return GetObjectCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/ListObjectsCommand.js
var ListObjectsCommand = function(_super) {
  __extends(ListObjectsCommand2, _super);
  function ListObjectsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  ListObjectsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "ListObjectsCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListObjectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectsOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListObjectsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlListObjectsCommand(input, context);
  };
  ListObjectsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlListObjectsCommand(output, context);
  };
  return ListObjectsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/ListObjectsV2Command.js
var ListObjectsV2Command = function(_super) {
  __extends(ListObjectsV2Command2, _super);
  function ListObjectsV2Command2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  ListObjectsV2Command2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "ListObjectsV2Command";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListObjectsV2Request.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectsV2Output.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListObjectsV2Command2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlListObjectsV2Command(input, context);
  };
  ListObjectsV2Command2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlListObjectsV2Command(output, context);
  };
  return ListObjectsV2Command2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/ListPartsCommand.js
var ListPartsCommand = function(_super) {
  __extends(ListPartsCommand2, _super);
  function ListPartsCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  ListPartsCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "ListPartsCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPartsOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPartsCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlListPartsCommand(input, context);
  };
  ListPartsCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlListPartsCommand(output, context);
  };
  return ListPartsCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/PutObjectCommand.js
var PutObjectCommand = function(_super) {
  __extends(PutObjectCommand2, _super);
  function PutObjectCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  PutObjectCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "PutObjectCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutObjectOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutObjectCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlPutObjectCommand(input, context);
  };
  PutObjectCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlPutObjectCommand(output, context);
  };
  return PutObjectCommand2;
}(Command);

// ../../node_modules/@aws-sdk/client-s3/dist/es/models/models_1.js
var MetadataEntry;
(function(MetadataEntry2) {
  MetadataEntry2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(MetadataEntry || (MetadataEntry = {}));
var S3Location;
(function(S3Location2) {
  S3Location2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Encryption && { Encryption: Encryption.filterSensitiveLog(obj.Encryption) });
  };
})(S3Location || (S3Location = {}));
var OutputLocation;
(function(OutputLocation2) {
  OutputLocation2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.S3 && { S3: S3Location.filterSensitiveLog(obj.S3) });
  };
})(OutputLocation || (OutputLocation = {}));
var FileHeaderInfo;
(function(FileHeaderInfo2) {
  FileHeaderInfo2["IGNORE"] = "IGNORE";
  FileHeaderInfo2["NONE"] = "NONE";
  FileHeaderInfo2["USE"] = "USE";
})(FileHeaderInfo || (FileHeaderInfo = {}));
var CSVInput;
(function(CSVInput2) {
  CSVInput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CSVInput || (CSVInput = {}));
var JSONType;
(function(JSONType2) {
  JSONType2["DOCUMENT"] = "DOCUMENT";
  JSONType2["LINES"] = "LINES";
})(JSONType || (JSONType = {}));
var JSONInput;
(function(JSONInput2) {
  JSONInput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JSONInput || (JSONInput = {}));
var ParquetInput;
(function(ParquetInput2) {
  ParquetInput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ParquetInput || (ParquetInput = {}));
var InputSerialization;
(function(InputSerialization2) {
  InputSerialization2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(InputSerialization || (InputSerialization = {}));
var QuoteFields;
(function(QuoteFields2) {
  QuoteFields2["ALWAYS"] = "ALWAYS";
  QuoteFields2["ASNEEDED"] = "ASNEEDED";
})(QuoteFields || (QuoteFields = {}));
var CSVOutput;
(function(CSVOutput2) {
  CSVOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CSVOutput || (CSVOutput = {}));
var JSONOutput;
(function(JSONOutput2) {
  JSONOutput2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(JSONOutput || (JSONOutput = {}));
var OutputSerialization;
(function(OutputSerialization2) {
  OutputSerialization2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(OutputSerialization || (OutputSerialization = {}));
var SelectParameters;
(function(SelectParameters2) {
  SelectParameters2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(SelectParameters || (SelectParameters = {}));
var RestoreRequestType;
(function(RestoreRequestType2) {
  RestoreRequestType2["SELECT"] = "SELECT";
})(RestoreRequestType || (RestoreRequestType = {}));
var RestoreRequest;
(function(RestoreRequest2) {
  RestoreRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.OutputLocation && { OutputLocation: OutputLocation.filterSensitiveLog(obj.OutputLocation) });
  };
})(RestoreRequest || (RestoreRequest = {}));
var RestoreObjectRequest;
(function(RestoreObjectRequest2) {
  RestoreObjectRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.RestoreRequest && { RestoreRequest: RestoreRequest.filterSensitiveLog(obj.RestoreRequest) });
  };
})(RestoreObjectRequest || (RestoreObjectRequest = {}));
var ContinuationEvent;
(function(ContinuationEvent2) {
  ContinuationEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ContinuationEvent || (ContinuationEvent = {}));
var EndEvent;
(function(EndEvent2) {
  EndEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(EndEvent || (EndEvent = {}));
var Progress;
(function(Progress2) {
  Progress2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Progress || (Progress = {}));
var ProgressEvent;
(function(ProgressEvent2) {
  ProgressEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ProgressEvent || (ProgressEvent = {}));
var RecordsEvent;
(function(RecordsEvent2) {
  RecordsEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RecordsEvent || (RecordsEvent = {}));
var Stats;
(function(Stats2) {
  Stats2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(Stats || (Stats = {}));
var StatsEvent;
(function(StatsEvent2) {
  StatsEvent2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(StatsEvent || (StatsEvent = {}));
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = function(value, visitor) {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  SelectObjectContentEventStream2.filterSensitiveLog = function(obj) {
    var _a;
    if (obj.Records !== void 0)
      return { Records: RecordsEvent.filterSensitiveLog(obj.Records) };
    if (obj.Stats !== void 0)
      return { Stats: StatsEvent.filterSensitiveLog(obj.Stats) };
    if (obj.Progress !== void 0)
      return { Progress: ProgressEvent.filterSensitiveLog(obj.Progress) };
    if (obj.Cont !== void 0)
      return { Cont: ContinuationEvent.filterSensitiveLog(obj.Cont) };
    if (obj.End !== void 0)
      return { End: EndEvent.filterSensitiveLog(obj.End) };
    if (obj.$unknown !== void 0)
      return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
var SelectObjectContentOutput;
(function(SelectObjectContentOutput2) {
  SelectObjectContentOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.Payload && { Payload: "STREAMING_CONTENT" });
  };
})(SelectObjectContentOutput || (SelectObjectContentOutput = {}));
var RequestProgress;
(function(RequestProgress2) {
  RequestProgress2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(RequestProgress || (RequestProgress = {}));
var ScanRange;
(function(ScanRange2) {
  ScanRange2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(ScanRange || (ScanRange = {}));
var SelectObjectContentRequest;
(function(SelectObjectContentRequest2) {
  SelectObjectContentRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING });
  };
})(SelectObjectContentRequest || (SelectObjectContentRequest = {}));
var UploadPartOutput;
(function(UploadPartOutput2) {
  UploadPartOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING });
  };
})(UploadPartOutput || (UploadPartOutput = {}));
var UploadPartRequest;
(function(UploadPartRequest2) {
  UploadPartRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING });
  };
})(UploadPartRequest || (UploadPartRequest = {}));
var CopyPartResult;
(function(CopyPartResult2) {
  CopyPartResult2.filterSensitiveLog = function(obj) {
    return __assign({}, obj);
  };
})(CopyPartResult || (CopyPartResult = {}));
var UploadPartCopyOutput;
(function(UploadPartCopyOutput2) {
  UploadPartCopyOutput2.filterSensitiveLog = function(obj) {
    return __assign(__assign({}, obj), obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING });
  };
})(UploadPartCopyOutput || (UploadPartCopyOutput = {}));
var UploadPartCopyRequest;
(function(UploadPartCopyRequest2) {
  UploadPartCopyRequest2.filterSensitiveLog = function(obj) {
    return __assign(__assign(__assign({}, obj), obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }), obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING });
  };
})(UploadPartCopyRequest || (UploadPartCopyRequest = {}));

// ../../node_modules/@aws-sdk/client-s3/dist/es/commands/UploadPartCommand.js
var UploadPartCommand = function(_super) {
  __extends(UploadPartCommand2, _super);
  function UploadPartCommand2(input) {
    var _this = _super.call(this) || this;
    _this.input = input;
    return _this;
  }
  UploadPartCommand2.prototype.resolveMiddleware = function(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    var stack = clientStack.concat(this.middlewareStack);
    var logger7 = configuration.logger;
    var clientName = "S3Client";
    var commandName = "UploadPartCommand";
    var handlerExecutionContext = {
      logger: logger7,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadPartRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UploadPartOutput.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function(request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UploadPartCommand2.prototype.serialize = function(input, context) {
    return serializeAws_restXmlUploadPartCommand(input, context);
  };
  UploadPartCommand2.prototype.deserialize = function(output, context) {
    return deserializeAws_restXmlUploadPartCommand(output, context);
  };
  return UploadPartCommand2;
}(Command);

// node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js
var escapeUri3 = function(uri) {
  return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode3);
};
var hexEncode3 = function(c) {
  return "%" + c.charCodeAt(0).toString(16).toUpperCase();
};

// node_modules/@aws-sdk/querystring-builder/dist/es/index.js
function buildQueryString2(query) {
  var e_1, _a;
  var parts = [];
  try {
    for (var _b = __values2(Object.keys(query).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var value = query[key];
      key = escapeUri3(key);
      if (Array.isArray(value)) {
        for (var i = 0, iLen = value.length; i < iLen; i++) {
          parts.push(key + "=" + escapeUri3(value[i]));
        }
      } else {
        var qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += "=" + escapeUri3(value);
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

// node_modules/@aws-sdk/util-format-url/dist/es/index.js
function formatUrl(request) {
  var port = request.port, query = request.query;
  var protocol = request.protocol, path = request.path, hostname = request.hostname;
  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }
  if (port) {
    hostname += ":" + port;
  }
  if (path && path.charAt(0) !== "/") {
    path = "/" + path;
  }
  var queryString = query ? buildQueryString2(query) : "";
  if (queryString && queryString[0] !== "?") {
    queryString = "?" + queryString;
  }
  return protocol + "//" + hostname + path + queryString;
}

// node_modules/@aws-sdk/util-create-request/dist/es/index.js
function createRequest(client, command) {
  return __awaiter2(this, void 0, void 0, function() {
    var interceptMiddleware, clientStack, handler;
    var _this = this;
    return __generator2(this, function(_a) {
      switch (_a.label) {
        case 0:
          interceptMiddleware = function(next) {
            return function(args) {
              return __awaiter2(_this, void 0, void 0, function() {
                return __generator2(this, function(_a2) {
                  return [2, { output: { request: args.request }, response: void 0 }];
                });
              });
            };
          };
          clientStack = client.middlewareStack.clone();
          clientStack.add(interceptMiddleware, {
            step: "build",
            priority: "low"
          });
          handler = command.resolveMiddleware(clientStack, client.config, void 0);
          return [4, handler(command).then(function(output) {
            return output.output.request;
          })];
        case 1:
          return [2, _a.sent()];
      }
    });
  });
}

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js
var SHORT_TO_HEX3 = {};
var HEX_TO_SHORT3 = {};
for (i = 0; i < 256; i++) {
  encodedByte = i.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = "0" + encodedByte;
  }
  SHORT_TO_HEX3[i] = encodedByte;
  HEX_TO_SHORT3[encodedByte] = i;
}
var encodedByte;
var i;
function toHex3(bytes) {
  var out = "";
  for (var i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX3[bytes[i]];
  }
  return out;
}

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/constants.js
var ALGORITHM_QUERY_PARAM2 = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM2 = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM2 = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM2 = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM2 = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM2 = "X-Amz-Signature";
var TOKEN_QUERY_PARAM2 = "X-Amz-Security-Token";
var AUTH_HEADER2 = "authorization";
var AMZ_DATE_HEADER2 = AMZ_DATE_QUERY_PARAM2.toLowerCase();
var DATE_HEADER2 = "date";
var GENERATED_HEADERS2 = [AUTH_HEADER2, AMZ_DATE_HEADER2, DATE_HEADER2];
var SIGNATURE_HEADER2 = SIGNATURE_QUERY_PARAM2.toLowerCase();
var SHA256_HEADER2 = "x-amz-content-sha256";
var TOKEN_HEADER2 = TOKEN_QUERY_PARAM2.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS2 = {
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
var PROXY_HEADER_PATTERN2 = /^proxy-/;
var SEC_HEADER_PATTERN2 = /^sec-/;
var ALGORITHM_IDENTIFIER2 = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER2 = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD2 = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE2 = 50;
var KEY_TYPE_IDENTIFIER2 = "aws4_request";
var MAX_PRESIGNED_TTL2 = 60 * 60 * 24 * 7;

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js
var signingKeyCache2 = {};
var cacheQueue2 = [];
function createScope2(shortDate, region, service) {
  return shortDate + "/" + region + "/" + service + "/" + KEY_TYPE_IDENTIFIER2;
}
var getSigningKey2 = function(sha256Constructor, credentials, shortDate, region, service) {
  return __awaiter2(void 0, void 0, void 0, function() {
    var credsHash, cacheKey, key, _a, _b, signable, e_1_1;
    var e_1, _c;
    return __generator2(this, function(_d) {
      switch (_d.label) {
        case 0:
          return [4, hmac2(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId)];
        case 1:
          credsHash = _d.sent();
          cacheKey = shortDate + ":" + region + ":" + service + ":" + toHex3(credsHash) + ":" + credentials.sessionToken;
          if (cacheKey in signingKeyCache2) {
            return [2, signingKeyCache2[cacheKey]];
          }
          cacheQueue2.push(cacheKey);
          while (cacheQueue2.length > MAX_CACHE_SIZE2) {
            delete signingKeyCache2[cacheQueue2.shift()];
          }
          key = "AWS4" + credentials.secretAccessKey;
          _d.label = 2;
        case 2:
          _d.trys.push([2, 7, 8, 9]);
          _a = __values2([shortDate, region, service, KEY_TYPE_IDENTIFIER2]), _b = _a.next();
          _d.label = 3;
        case 3:
          if (!!_b.done)
            return [3, 6];
          signable = _b.value;
          return [4, hmac2(sha256Constructor, key, signable)];
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
          return [2, signingKeyCache2[cacheKey] = key];
      }
    });
  });
};
function hmac2(ctor, secret, data) {
  var hash = new ctor(secret);
  hash.update(data);
  return hash.digest();
}

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalHeaders.js
function getCanonicalHeaders2(_a, unsignableHeaders, signableHeaders) {
  var e_1, _b;
  var headers = _a.headers;
  var canonical = {};
  try {
    for (var _c = __values2(Object.keys(headers).sort()), _d = _c.next(); !_d.done; _d = _c.next()) {
      var headerName = _d.value;
      var canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS2 || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || PROXY_HEADER_PATTERN2.test(canonicalHeaderName) || SEC_HEADER_PATTERN2.test(canonicalHeaderName)) {
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

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js
var escapeUri4 = function(uri) {
  return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode4);
};
var hexEncode4 = function(c) {
  return "%" + c.charCodeAt(0).toString(16).toUpperCase();
};

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalQuery.js
function getCanonicalQuery2(_a) {
  var e_1, _b;
  var _c = _a.query, query = _c === void 0 ? {} : _c;
  var keys = [];
  var serialized = {};
  var _loop_1 = function(key2) {
    if (key2.toLowerCase() === SIGNATURE_HEADER2) {
      return "continue";
    }
    keys.push(key2);
    var value = query[key2];
    if (typeof value === "string") {
      serialized[key2] = escapeUri4(key2) + "=" + escapeUri4(value);
    } else if (Array.isArray(value)) {
      serialized[key2] = value.slice(0).sort().reduce(function(encoded, value2) {
        return encoded.concat([escapeUri4(key2) + "=" + escapeUri4(value2)]);
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

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js
var isArrayBuffer2 = function(arg) {
  return typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
};

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/getPayloadHash.js
function getPayloadHash2(_a, hashConstructor) {
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
              if (headerName.toLowerCase() === SHA256_HEADER2) {
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
          if (!(typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer2(body)))
            return [3, 3];
          hashCtor = new hashConstructor();
          hashCtor.update(body);
          _d = toHex3;
          return [4, hashCtor.digest()];
        case 2:
          return [2, _d.apply(void 0, [_f.sent()])];
        case 3:
          return [2, UNSIGNED_PAYLOAD2];
      }
    });
  });
}

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/hasHeader.js
function hasHeader2(soughtHeader, headers) {
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

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js
function cloneRequest2(_a) {
  var headers = _a.headers, query = _a.query, rest = __rest2(_a, ["headers", "query"]);
  return __assign2(__assign2({}, rest), { headers: __assign2({}, headers), query: query ? cloneQuery3(query) : void 0 });
}
function cloneQuery3(query) {
  return Object.keys(query).reduce(function(carry, paramName) {
    var _a;
    var param = query[paramName];
    return __assign2(__assign2({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? __spread2(param) : param, _a));
  }, {});
}

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/moveHeadersToQuery.js
function moveHeadersToQuery2(request, options) {
  var e_1, _a;
  var _b;
  if (options === void 0) {
    options = {};
  }
  var _c = typeof request.clone === "function" ? request.clone() : cloneRequest2(request), headers = _c.headers, _d = _c.query, query = _d === void 0 ? {} : _d;
  try {
    for (var _e = __values2(Object.keys(headers)), _f = _e.next(); !_f.done; _f = _e.next()) {
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
  return __assign2(__assign2({}, request), {
    headers,
    query
  });
}

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/prepareRequest.js
function prepareRequest2(request) {
  var e_1, _a;
  request = typeof request.clone === "function" ? request.clone() : cloneRequest2(request);
  try {
    for (var _b = __values2(Object.keys(request.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var headerName = _c.value;
      if (GENERATED_HEADERS2.indexOf(headerName.toLowerCase()) > -1) {
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

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/utilDate.js
function iso86012(time) {
  return toDate2(time).toISOString().replace(/\.\d{3}Z$/, "Z");
}
function toDate2(time) {
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

// ../../node_modules/@aws-sdk/s3-request-presigner/node_modules/@aws-sdk/signature-v4/dist/es/SignatureV4.js
var SignatureV42 = function() {
  function SignatureV43(_a) {
    var applyChecksum = _a.applyChecksum, credentials = _a.credentials, region = _a.region, service = _a.service, sha256 = _a.sha256, _b = _a.uriEscapePath, uriEscapePath = _b === void 0 ? true : _b;
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeRegionProvider2(region);
    this.credentialProvider = normalizeCredentialsProvider2(credentials);
  }
  SignatureV43.prototype.presign = function(originalRequest, options) {
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
            _d = formatDate2(signingDate), longDate = _d.longDate, shortDate = _d.shortDate;
            if (expiresIn > MAX_PRESIGNED_TTL2) {
              return [2, Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")];
            }
            scope = createScope2(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
            request = moveHeadersToQuery2(prepareRequest2(originalRequest), { unhoistableHeaders });
            if (credentials.sessionToken) {
              request.query[TOKEN_QUERY_PARAM2] = credentials.sessionToken;
            }
            request.query[ALGORITHM_QUERY_PARAM2] = ALGORITHM_IDENTIFIER2;
            request.query[CREDENTIAL_QUERY_PARAM2] = credentials.accessKeyId + "/" + scope;
            request.query[AMZ_DATE_QUERY_PARAM2] = longDate;
            request.query[EXPIRES_QUERY_PARAM2] = expiresIn.toString(10);
            canonicalHeaders = getCanonicalHeaders2(request, unsignableHeaders, signableHeaders);
            request.query[SIGNED_HEADERS_QUERY_PARAM2] = getCanonicalHeaderList2(canonicalHeaders);
            _e = request.query;
            _f = SIGNATURE_QUERY_PARAM2;
            _g = this.getSignature;
            _h = [
              longDate,
              scope,
              this.getSigningKey(credentials, region, shortDate, signingService)
            ];
            _j = this.createCanonicalRequest;
            _k = [request, canonicalHeaders];
            return [4, getPayloadHash2(originalRequest, this.sha256)];
          case 5:
            return [4, _g.apply(this, _h.concat([_j.apply(this, _k.concat([_l.sent()]))]))];
          case 6:
            _e[_f] = _l.sent();
            return [2, request];
        }
      });
    });
  };
  SignatureV43.prototype.sign = function(toSign, options) {
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
  SignatureV43.prototype.signEvent = function(_a, _b) {
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
            _e = formatDate2(signingDate), shortDate = _e.shortDate, longDate = _e.longDate;
            scope = createScope2(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
            return [4, getPayloadHash2({ headers: {}, body: payload }, this.sha256)];
          case 4:
            hashedPayload = _g.sent();
            hash = new this.sha256();
            hash.update(headers);
            _f = toHex3;
            return [4, hash.digest()];
          case 5:
            hashedHeaders = _f.apply(void 0, [_g.sent()]);
            stringToSign = [
              EVENT_ALGORITHM_IDENTIFIER2,
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
  SignatureV43.prototype.signString = function(stringToSign, _a) {
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
            shortDate = formatDate2(signingDate).shortDate;
            _f = (_e = this.sha256).bind;
            return [4, this.getSigningKey(credentials, region, shortDate, signingService)];
          case 5:
            hash = new (_f.apply(_e, [void 0, _h.sent()]))();
            hash.update(stringToSign);
            _g = toHex3;
            return [4, hash.digest()];
          case 6:
            return [2, _g.apply(void 0, [_h.sent()])];
        }
      });
    });
  };
  SignatureV43.prototype.signRequest = function(requestToSign, _a) {
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
            request = prepareRequest2(requestToSign);
            _e = formatDate2(signingDate), longDate = _e.longDate, shortDate = _e.shortDate;
            scope = createScope2(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
            request.headers[AMZ_DATE_HEADER2] = longDate;
            if (credentials.sessionToken) {
              request.headers[TOKEN_HEADER2] = credentials.sessionToken;
            }
            return [4, getPayloadHash2(request, this.sha256)];
          case 5:
            payloadHash = _f.sent();
            if (!hasHeader2(SHA256_HEADER2, request.headers) && this.applyChecksum) {
              request.headers[SHA256_HEADER2] = payloadHash;
            }
            canonicalHeaders = getCanonicalHeaders2(request, unsignableHeaders, signableHeaders);
            return [4, this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash))];
          case 6:
            signature = _f.sent();
            request.headers[AUTH_HEADER2] = ALGORITHM_IDENTIFIER2 + " " + ("Credential=" + credentials.accessKeyId + "/" + scope + ", ") + ("SignedHeaders=" + getCanonicalHeaderList2(canonicalHeaders) + ", ") + ("Signature=" + signature);
            return [2, request];
        }
      });
    });
  };
  SignatureV43.prototype.createCanonicalRequest = function(request, canonicalHeaders, payloadHash) {
    var sortedHeaders = Object.keys(canonicalHeaders).sort();
    return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery2(request) + "\n" + sortedHeaders.map(function(name2) {
      return name2 + ":" + canonicalHeaders[name2];
    }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
  };
  SignatureV43.prototype.createStringToSign = function(longDate, credentialScope, canonicalRequest) {
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
            return [2, ALGORITHM_IDENTIFIER2 + "\n" + longDate + "\n" + credentialScope + "\n" + toHex3(hashedRequest)];
        }
      });
    });
  };
  SignatureV43.prototype.getCanonicalPath = function(_a) {
    var path = _a.path;
    if (this.uriEscapePath) {
      var doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
      return "/" + doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  };
  SignatureV43.prototype.getSignature = function(longDate, credentialScope, keyPromise, canonicalRequest) {
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
            _c = toHex3;
            return [4, hash.digest()];
          case 3:
            return [2, _c.apply(void 0, [_d.sent()])];
        }
      });
    });
  };
  SignatureV43.prototype.getSigningKey = function(credentials, region, shortDate, service) {
    return getSigningKey2(this.sha256, credentials, shortDate, region, service || this.service);
  };
  return SignatureV43;
}();
var formatDate2 = function(now) {
  var longDate = iso86012(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.substr(0, 8)
  };
};
var getCanonicalHeaderList2 = function(headers) {
  return Object.keys(headers).sort().join(";");
};
var normalizeRegionProvider2 = function(region) {
  if (typeof region === "string") {
    var promisified_1 = Promise.resolve(region);
    return function() {
      return promisified_1;
    };
  } else {
    return region;
  }
};
var normalizeCredentialsProvider2 = function(credentials) {
  if (typeof credentials === "object") {
    var promisified_2 = Promise.resolve(credentials);
    return function() {
      return promisified_2;
    };
  } else {
    return credentials;
  }
};

// ../../node_modules/@aws-sdk/s3-request-presigner/dist/es/constants.js
var UNSIGNED_PAYLOAD3 = "UNSIGNED-PAYLOAD";
var SHA256_HEADER3 = "X-Amz-Content-Sha256";

// ../../node_modules/@aws-sdk/s3-request-presigner/dist/es/presigner.js
var S3RequestPresigner = function() {
  function S3RequestPresigner2(options) {
    var resolvedOptions = __assign2({
      service: options.signingName || options.service || "s3",
      uriEscapePath: options.uriEscapePath || false
    }, options);
    this.signer = new SignatureV42(resolvedOptions);
  }
  S3RequestPresigner2.prototype.presign = function(requestToSign, _a) {
    if (_a === void 0) {
      _a = {};
    }
    var _b = _a.unsignableHeaders, unsignableHeaders = _b === void 0 ? new Set() : _b, _c = _a.unhoistableHeaders, unhoistableHeaders = _c === void 0 ? new Set() : _c, options = __rest2(_a, ["unsignableHeaders", "unhoistableHeaders"]);
    return __awaiter2(this, void 0, void 0, function() {
      return __generator2(this, function(_d) {
        unsignableHeaders.add("content-type");
        Object.keys(requestToSign.headers).map(function(header) {
          return header.toLowerCase();
        }).filter(function(header) {
          return header.startsWith("x-amz-server-side-encryption");
        }).forEach(function(header) {
          unhoistableHeaders.add(header);
        });
        requestToSign.headers[SHA256_HEADER3] = UNSIGNED_PAYLOAD3;
        if (!requestToSign.headers["host"]) {
          requestToSign.headers.host = requestToSign.hostname;
        }
        return [2, this.signer.presign(requestToSign, __assign2({
          expiresIn: 900,
          unsignableHeaders,
          unhoistableHeaders
        }, options))];
      });
    });
  };
  return S3RequestPresigner2;
}();

// src/providers/axios-http-handler.ts
var import_axios = __toModule(require_axios2());
import { ConsoleLogger as Logger, Platform } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/common/StorageErrorStrings.ts
var StorageErrorStrings;
(function(StorageErrorStrings2) {
  StorageErrorStrings2["NO_CREDENTIALS"] = "No credentials";
  StorageErrorStrings2["NO_SRC_KEY"] = 'source param should be an object with the property "key" with value of type string';
  StorageErrorStrings2["NO_DEST_KEY"] = 'destination param should be an object with the property "key" with value of type string';
  StorageErrorStrings2["INVALID_BLOB"] = "Object must be an instance of Blob";
})(StorageErrorStrings || (StorageErrorStrings = {}));
var AWSS3ProviderMultipartCopierErrors;
(function(AWSS3ProviderMultipartCopierErrors2) {
  AWSS3ProviderMultipartCopierErrors2["CLEANUP_FAILED"] = "Multipart copy clean up failed";
  AWSS3ProviderMultipartCopierErrors2["NO_OBJECT_FOUND"] = "Object does not exist";
  AWSS3ProviderMultipartCopierErrors2["INVALID_QUEUESIZE"] = "Queue size must be a positive number";
  AWSS3ProviderMultipartCopierErrors2["NO_COPYSOURCE"] = "You must specify a copy source";
  AWSS3ProviderMultipartCopierErrors2["MAX_NUM_PARTS_EXCEEDED"] = "Only a maximum of 10000 parts are allowed";
})(AWSS3ProviderMultipartCopierErrors || (AWSS3ProviderMultipartCopierErrors = {}));
var AWSS3ProviderUploadErrorStrings;
(function(AWSS3ProviderUploadErrorStrings2) {
  AWSS3ProviderUploadErrorStrings2["UPLOAD_PAUSED_MESSAGE"] = "paused";
})(AWSS3ProviderUploadErrorStrings || (AWSS3ProviderUploadErrorStrings = {}));

// src/providers/axios-http-handler.ts
var logger = new Logger("axios-http-handler");
var SEND_UPLOAD_PROGRESS_EVENT = "sendUploadProgress";
var SEND_DOWNLOAD_PROGRESS_EVENT = "sendDownloadProgress";
function isBlob(body) {
  return typeof Blob !== "undefined" && body instanceof Blob;
}
var normalizeHeaders = (headers, normalizedName) => {
  for (const [k, v] of Object.entries(headers)) {
    if (k !== normalizedName && k.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = v;
      delete headers[k];
    }
  }
};
var reactNativeRequestTransformer = [
  function(data, headers) {
    if (isBlob(data)) {
      normalizeHeaders(headers, "Content-Type");
      normalizeHeaders(headers, "Accept");
      return data;
    }
    return import_axios.default.defaults.transformRequest[0].call(null, data, headers);
  }
];
var AxiosHttpHandler = class {
  constructor(httpOptions = {}, emitter, cancelTokenSource) {
    this.httpOptions = httpOptions;
    this.emitter = emitter;
    this.cancelTokenSource = cancelTokenSource;
  }
  destroy() {
  }
  handle(request, options) {
    const requestTimeoutInMs = this.httpOptions.requestTimeout;
    const emitter = this.emitter;
    let path = request.path;
    if (request.query) {
      const queryString = buildQueryString2(request.query);
      if (queryString) {
        path += `?${queryString}`;
      }
    }
    const port = request.port;
    const url = `${request.protocol}//${request.hostname}${port ? `:${port}` : ""}${path}`;
    const axiosRequest = {};
    axiosRequest.url = url;
    axiosRequest.method = request.method;
    axiosRequest.headers = request.headers;
    delete axiosRequest.headers["host"];
    if (request.body) {
      axiosRequest.data = request.body;
    } else {
      if (axiosRequest.headers[Object.keys(axiosRequest.headers).find((key) => key.toLowerCase() === "content-type")]) {
        axiosRequest.data = null;
      }
    }
    if (emitter) {
      axiosRequest.onUploadProgress = function(event) {
        emitter.emit(SEND_UPLOAD_PROGRESS_EVENT, event);
        logger.debug(event);
      };
      axiosRequest.onDownloadProgress = function(event) {
        emitter.emit(SEND_DOWNLOAD_PROGRESS_EVENT, event);
        logger.debug(event);
      };
    }
    if (this.cancelTokenSource) {
      axiosRequest.cancelToken = this.cancelTokenSource.token;
    }
    if (options.cancelTokenSource) {
      axiosRequest.cancelToken = options.cancelTokenSource.token;
    }
    axiosRequest.responseType = "blob";
    if (Platform.isReactNative) {
      axiosRequest.transformRequest = reactNativeRequestTransformer;
    }
    const raceOfPromises = [
      import_axios.default.request(axiosRequest).then((response) => {
        return {
          response: new HttpResponse({
            headers: response.headers,
            statusCode: response.status,
            body: response.data
          })
        };
      }).catch((error) => {
        if (error.message !== AWSS3ProviderUploadErrorStrings.UPLOAD_PAUSED_MESSAGE) {
          logger.error(error.message);
        }
        if (import_axios.default.isCancel(error)) {
          throw error;
        }
        return {
          response: new HttpResponse({
            statusCode: error.response?.status,
            body: error.response?.data,
            headers: error.response?.headers
          })
        };
      }),
      requestTimeout2(requestTimeoutInMs)
    ];
    return Promise.race(raceOfPromises);
  }
};
function requestTimeout2(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}

// src/common/StorageUtils.ts
import { Hub } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/common/StorageConstants.ts
var AMPLIFY_SYMBOL = typeof Symbol !== "undefined" && typeof Symbol.for === "function" ? Symbol.for("amplify_default") : "@@amplify_default";
var SET_CONTENT_LENGTH_HEADER = "contentLengthMiddleware";
var localTestingStorageEndpoint = "http://localhost:20005";
var UPLOADS_STORAGE_KEY = "__uploadInProgress";

// src/common/StorageUtils.ts
var byteLength = (x) => {
  if (typeof x === "string") {
    return x.length;
  } else if (isArrayBuffer3(x)) {
    return x.byteLength;
  } else if (isBlob2(x)) {
    return x.size;
  } else {
    throw new Error("Cannot determine byte length of " + x);
  }
};
var dispatchStorageEvent = (track, event, attrs, metrics, message) => {
  if (track) {
    const data = { attrs };
    if (metrics) {
      data["metrics"] = metrics;
    }
    Hub.dispatch("storage", {
      event,
      data,
      message
    }, "Storage", AMPLIFY_SYMBOL);
  }
};
var isFile = (x) => {
  return typeof x !== "undefined" && x instanceof File;
};
var isBlob2 = (x) => {
  return typeof x !== "undefined" && x instanceof Blob;
};
var isArrayBuffer3 = (x) => {
  return typeof x !== "undefined" && x instanceof ArrayBuffer;
};

// src/common/S3ClientUtils.ts
import { Credentials } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var getPrefix = (config) => {
  const { credentials, level, customPrefix, identityId } = config;
  const resolvedCustomPrefix = customPrefix || {};
  const resolvedIdentityId = identityId || credentials.identityId;
  const privatePath = (resolvedCustomPrefix.private !== void 0 ? resolvedCustomPrefix.private : "private/") + resolvedIdentityId + "/";
  const protectedPath = (resolvedCustomPrefix.protected !== void 0 ? resolvedCustomPrefix.protected : "protected/") + resolvedIdentityId + "/";
  const publicPath = resolvedCustomPrefix.public !== void 0 ? resolvedCustomPrefix.public : "public/";
  switch (level) {
    case "private":
      return privatePath;
    case "protected":
      return protectedPath;
    default:
      return publicPath;
  }
};
var createPrefixMiddleware = (opt, key) => (next, _context) => async (args) => {
  const credentials = await Credentials.get();
  const cred = Credentials.shear(credentials);
  const prefix = getPrefix({ ...opt, credentials: cred });
  const clonedInput = Object.assign({}, args.input);
  if (Object.prototype.hasOwnProperty.call(args.input, "Key")) {
    clonedInput.Key = prefix + key;
    args.input = clonedInput;
  } else if (Object.prototype.hasOwnProperty.call(args.input, "Prefix")) {
    clonedInput.Prefix = prefix + key;
    args.input = clonedInput;
  }
  const result = next(args);
  return result;
};
var prefixMiddlewareOptions = {
  step: "initialize",
  name: "addPrefixMiddleware"
};

// src/providers/AWSS3ProviderManagedUpload.ts
import {
  ConsoleLogger as Logger2,
  getAmplifyUserAgent,
  Credentials as Credentials2
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var events = __toModule(require_events());
var logger2 = new Logger2("AWSS3ProviderManagedUpload");
var AWSS3ProviderManagedUpload = class {
  constructor(params, opts, emitter) {
    this.minPartSize = 5 * 1024 * 1024;
    this.queueSize = 4;
    this.body = null;
    this.params = null;
    this.opts = null;
    this.completedParts = [];
    this.cancel = false;
    this.bytesUploaded = 0;
    this.totalBytesToUpload = 0;
    this.emitter = null;
    this.params = params;
    this.opts = opts;
    this.emitter = emitter;
  }
  async upload() {
    this.body = await this.validateAndSanitizeBody(this.params.Body);
    this.totalBytesToUpload = this.byteLength(this.body);
    if (this.totalBytesToUpload <= this.minPartSize) {
      this.params.Body = this.body;
      const putObjectCommand = new PutObjectCommand(this.params);
      const s3 = await this._createNewS3Client(this.opts, this.emitter);
      return s3.send(putObjectCommand);
    } else {
      const uploadId = await this.createMultiPartUpload();
      const numberOfPartsToUpload = Math.ceil(this.totalBytesToUpload / this.minPartSize);
      const parts = this.createParts();
      for (let start = 0; start < numberOfPartsToUpload; start += this.queueSize) {
        await this.checkIfUploadCancelled(uploadId);
        await this.uploadParts(uploadId, parts.slice(start, start + this.queueSize));
        await this.checkIfUploadCancelled(uploadId);
      }
      parts.map((part) => {
        this.removeEventListener(part);
      });
      return await this.finishMultiPartUpload(uploadId);
    }
  }
  createParts() {
    const parts = [];
    for (let bodyStart = 0; bodyStart < this.totalBytesToUpload; ) {
      const bodyEnd = Math.min(bodyStart + this.minPartSize, this.totalBytesToUpload);
      parts.push({
        bodyPart: this.body.slice(bodyStart, bodyEnd),
        partNumber: parts.length + 1,
        emitter: new events.EventEmitter(),
        _lastUploadedBytes: 0
      });
      bodyStart += this.minPartSize;
    }
    return parts;
  }
  async createMultiPartUpload() {
    const createMultiPartUploadCommand = new CreateMultipartUploadCommand(this.params);
    const s3 = await this._createNewS3Client(this.opts);
    const response = await s3.send(createMultiPartUploadCommand);
    logger2.debug(response.UploadId);
    return response.UploadId;
  }
  async uploadParts(uploadId, parts) {
    try {
      const allResults = await Promise.all(parts.map(async (part) => {
        this.setupEventListener(part);
        const s3 = await this._createNewS3Client(this.opts, part.emitter);
        const {
          Key,
          Bucket: Bucket2,
          SSECustomerAlgorithm,
          SSECustomerKey,
          SSECustomerKeyMD5
        } = this.params;
        return s3.send(new UploadPartCommand({
          PartNumber: part.partNumber,
          Body: part.bodyPart,
          UploadId: uploadId,
          Key,
          Bucket: Bucket2,
          ...SSECustomerAlgorithm && { SSECustomerAlgorithm },
          ...SSECustomerKey && { SSECustomerKey },
          ...SSECustomerKeyMD5 && { SSECustomerKeyMD5 }
        }));
      }));
      for (let i = 0; i < allResults.length; i++) {
        this.completedParts.push({
          PartNumber: parts[i].partNumber,
          ETag: allResults[i].ETag
        });
      }
    } catch (error) {
      logger2.error("error happened while uploading a part. Cancelling the multipart upload", error);
      this.cancelUpload();
      return;
    }
  }
  async finishMultiPartUpload(uploadId) {
    const input = {
      Bucket: this.params.Bucket,
      Key: this.params.Key,
      UploadId: uploadId,
      MultipartUpload: { Parts: this.completedParts }
    };
    const completeUploadCommand = new CompleteMultipartUploadCommand(input);
    const s3 = await this._createNewS3Client(this.opts);
    try {
      const data = await s3.send(completeUploadCommand);
      return data.Key;
    } catch (error) {
      logger2.error("error happened while finishing the upload. Cancelling the multipart upload", error);
      this.cancelUpload();
      return;
    }
  }
  async checkIfUploadCancelled(uploadId) {
    if (this.cancel) {
      let errorMessage = "Upload was cancelled.";
      try {
        await this.cleanup(uploadId);
      } catch (error) {
        errorMessage += ` ${error.message}`;
      }
      throw new Error(errorMessage);
    }
  }
  cancelUpload() {
    this.cancel = true;
  }
  async cleanup(uploadId) {
    this.body = null;
    this.completedParts = [];
    this.bytesUploaded = 0;
    this.totalBytesToUpload = 0;
    const input = {
      Bucket: this.params.Bucket,
      Key: this.params.Key,
      UploadId: uploadId
    };
    const s3 = await this._createNewS3Client(this.opts);
    await s3.send(new AbortMultipartUploadCommand(input));
    const data = await s3.send(new ListPartsCommand(input));
    if (data && data.Parts && data.Parts.length > 0) {
      throw new Error("Multi Part upload clean up failed");
    }
  }
  removeEventListener(part) {
    part.emitter.removeAllListeners(SEND_UPLOAD_PROGRESS_EVENT);
    part.emitter.removeAllListeners(SEND_DOWNLOAD_PROGRESS_EVENT);
  }
  setupEventListener(part) {
    part.emitter.on(SEND_UPLOAD_PROGRESS_EVENT, (progress) => {
      this.progressChanged(part.partNumber, progress.loaded - part._lastUploadedBytes);
      part._lastUploadedBytes = progress.loaded;
    });
  }
  progressChanged(partNumber, incrementalUpdate) {
    this.bytesUploaded += incrementalUpdate;
    this.emitter.emit(SEND_UPLOAD_PROGRESS_EVENT, {
      loaded: this.bytesUploaded,
      total: this.totalBytesToUpload,
      part: partNumber,
      key: this.params.Key
    });
  }
  byteLength(input) {
    if (input === null || input === void 0)
      return 0;
    if (typeof input.byteLength === "number") {
      return input.byteLength;
    } else if (typeof input.length === "number") {
      return input.length;
    } else if (typeof input.size === "number") {
      return input.size;
    } else if (typeof input.path === "string") {
    } else {
      throw new Error("Cannot determine length of " + input);
    }
  }
  async validateAndSanitizeBody(body) {
    if (this.isGenericObject(body)) {
      return JSON.stringify(body);
    } else {
      return body;
    }
  }
  isGenericObject(body) {
    if (body !== null && typeof body === "object") {
      try {
        return !(this.byteLength(body) >= 0);
      } catch (error) {
        return true;
      }
    }
    return false;
  }
  async _createNewS3Client(config, emitter) {
    const credentials = await this._getCredentials();
    const {
      region,
      dangerouslyConnectToHttpEndpointForTesting,
      cancelTokenSource,
      useAccelerateEndpoint
    } = config;
    let localTestingConfig = {};
    if (dangerouslyConnectToHttpEndpointForTesting) {
      localTestingConfig = {
        endpoint: localTestingStorageEndpoint,
        tls: false,
        bucketEndpoint: false,
        forcePathStyle: true
      };
    }
    const client = new S3Client({
      region,
      credentials,
      useAccelerateEndpoint,
      ...localTestingConfig,
      requestHandler: new AxiosHttpHandler({}, emitter, cancelTokenSource),
      customUserAgent: getAmplifyUserAgent()
    });
    client.middlewareStack.remove(SET_CONTENT_LENGTH_HEADER);
    client.middlewareStack.add(createPrefixMiddleware(this.opts, this.params.Key), prefixMiddlewareOptions);
    return client;
  }
  _getCredentials() {
    return Credentials2.get().then((credentials) => {
      if (!credentials)
        return false;
      const cred = Credentials2.shear(credentials);
      logger2.debug("set credentials for storage", cred);
      return cred;
    }).catch((error) => {
      logger2.warn("ensure credentials error", error);
      return false;
    });
  }
};

// src/providers/AWSS3UploadTask.ts
var import_axios2 = __toModule(require_axios2());
import { Logger as Logger3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger3 = new Logger3("AWSS3UploadTask");
var AWSS3UploadTaskState;
(function(AWSS3UploadTaskState2) {
  AWSS3UploadTaskState2[AWSS3UploadTaskState2["INIT"] = 0] = "INIT";
  AWSS3UploadTaskState2[AWSS3UploadTaskState2["IN_PROGRESS"] = 1] = "IN_PROGRESS";
  AWSS3UploadTaskState2[AWSS3UploadTaskState2["PAUSED"] = 2] = "PAUSED";
  AWSS3UploadTaskState2[AWSS3UploadTaskState2["CANCELLED"] = 3] = "CANCELLED";
  AWSS3UploadTaskState2[AWSS3UploadTaskState2["COMPLETED"] = 4] = "COMPLETED";
})(AWSS3UploadTaskState || (AWSS3UploadTaskState = {}));
var TaskEvents;
(function(TaskEvents2) {
  TaskEvents2["CANCEL"] = "cancel";
  TaskEvents2["UPLOAD_COMPLETE"] = "uploadComplete";
  TaskEvents2["UPLOAD_PROGRESS"] = "uploadPartProgress";
  TaskEvents2["ERROR"] = "error";
})(TaskEvents || (TaskEvents = {}));
var MAX_PARTS = 1e4;
var PART_SIZE = 5 * 1024 * 1024;
var DEFAULT_QUEUE_SIZE = 4;
function comparePartNumber(a, b) {
  return a.PartNumber - b.PartNumber;
}
var AWSS3UploadTask = class {
  constructor({
    s3Client,
    file,
    emitter,
    storage,
    params,
    level,
    prefixPromise
  }) {
    this.partSize = PART_SIZE;
    this.queueSize = DEFAULT_QUEUE_SIZE;
    this.inProgress = [];
    this.completedParts = [];
    this.queued = [];
    this.bytesUploaded = 0;
    this.totalBytes = 0;
    this.state = 0;
    this.prefixPromise = prefixPromise;
    this.s3client = s3Client;
    this.s3client.middlewareStack.remove(SET_CONTENT_LENGTH_HEADER);
    this.storage = storage;
    this.storageSync = Promise.resolve();
    if (typeof this.storage["sync"] === "function") {
      this.storageSync = this.storage["sync"]();
    }
    this.params = params;
    this.file = file;
    this.totalBytes = this.file.size;
    this.bytesUploaded = 0;
    this.emitter = emitter;
    this.queued = [];
    this.fileId = this._getFileId(level);
    this._validateParams();
    this.emitter.on(TaskEvents.ERROR, () => {
    });
  }
  get percent() {
    return this.bytesUploaded / this.totalBytes * 100;
  }
  get isInProgress() {
    return this.state === 1;
  }
  async _listSingleFile({
    key,
    bucket
  }) {
    const listObjectRes = await this.s3client.send(new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: key
    }));
    const { Contents = [] } = listObjectRes;
    const prefix = await this.prefixPromise;
    const obj = Contents.find((o) => o.Key === `${prefix}${key}`);
    return obj;
  }
  _getFileId(level) {
    if (isFile(this.file)) {
      return [
        this.file.name,
        this.file.lastModified,
        this.file.size,
        this.file.type,
        this.params.Bucket,
        level,
        this.params.Key
      ].join("-");
    } else {
      return [
        this.file.size,
        this.file.type,
        this.params.Bucket,
        level,
        this.params.Key
      ].join("-");
    }
  }
  async _findCachedUploadParts() {
    const uploadRequests = await this._listCachedUploadTasks();
    if (Object.keys(uploadRequests).length === 0 || !Object.prototype.hasOwnProperty.call(uploadRequests, this.fileId)) {
      return { parts: [], uploadId: null };
    }
    const cachedUploadFileData = uploadRequests[this.fileId];
    cachedUploadFileData.lastTouched = Date.now();
    this.storage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(uploadRequests));
    const listPartsOutput = await this.s3client.send(new ListPartsCommand({
      Bucket: this.params.Bucket,
      Key: this.params.Key,
      UploadId: cachedUploadFileData.uploadId
    }));
    return {
      parts: listPartsOutput.Parts || [],
      uploadId: cachedUploadFileData.uploadId
    };
  }
  _emitEvent(event, payload) {
    this.emitter.emit(event, payload);
  }
  _validateParams() {
    if (this.file.size / this.partSize > MAX_PARTS) {
      throw new Error(`Too many parts. Number of parts is ${this.file.size / this.partSize}, maximum is ${MAX_PARTS}.`);
    }
  }
  async _listCachedUploadTasks() {
    await this.storageSync;
    const tasks = this.storage.getItem(UPLOADS_STORAGE_KEY) || "{}";
    return JSON.parse(tasks);
  }
  async _cache(fileMetadata) {
    const uploadRequests = await this._listCachedUploadTasks();
    uploadRequests[this.fileId] = fileMetadata;
    this.storage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(uploadRequests));
  }
  async _isCached() {
    return Object.prototype.hasOwnProperty.call(await this._listCachedUploadTasks(), this.fileId);
  }
  async _removeFromCache() {
    const uploadRequests = await this._listCachedUploadTasks();
    delete uploadRequests[this.fileId];
    this.storage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(uploadRequests));
  }
  async _onPartUploadCompletion({
    eTag,
    partNumber,
    chunk
  }) {
    this.completedParts.push({
      ETag: eTag,
      PartNumber: partNumber
    });
    this.bytesUploaded += byteLength(chunk);
    this._emitEvent(TaskEvents.UPLOAD_PROGRESS, {
      loaded: this.bytesUploaded,
      total: this.totalBytes
    });
    this.inProgress = this.inProgress.filter((job) => job.uploadPartInput.PartNumber !== partNumber);
    if (this.queued.length && this.state !== 2)
      this._startNextPart();
    if (this._isDone())
      this._completeUpload();
  }
  async _completeUpload() {
    try {
      await this.s3client.send(new CompleteMultipartUploadCommand({
        Bucket: this.params.Bucket,
        Key: this.params.Key,
        UploadId: this.uploadId,
        MultipartUpload: {
          Parts: this.completedParts.sort(comparePartNumber)
        }
      }));
      this._verifyFileSize();
      this._emitEvent(TaskEvents.UPLOAD_COMPLETE, {
        key: `${this.params.Bucket}/${this.params.Key}`
      });
      this._removeFromCache();
      this.state = 4;
    } catch (err) {
      logger3.error("error completing upload", err);
      this._emitEvent(TaskEvents.ERROR, err);
    }
  }
  async _makeUploadPartRequest(input, cancelTokenSource) {
    try {
      const res = await this.s3client.send(new UploadPartCommand(input), {
        cancelTokenSource
      });
      await this._onPartUploadCompletion({
        eTag: res.ETag,
        partNumber: input.PartNumber,
        chunk: input.Body
      });
    } catch (err) {
      if (this.state === 2) {
        logger3.log("upload paused");
      } else if (this.state === 3) {
        logger3.log("upload aborted");
      } else {
        logger3.error("error starting next part of upload: ", err);
      }
      if (!import_axios2.default.isCancel(err) && err.message !== AWSS3ProviderUploadErrorStrings.UPLOAD_PAUSED_MESSAGE) {
        this._emitEvent(TaskEvents.ERROR, err);
        this.pause();
      }
    }
  }
  _startNextPart() {
    if (this.queued.length > 0 && this.state !== 2) {
      const cancelTokenSource = import_axios2.default.CancelToken.source();
      const nextPart = this.queued.shift();
      this.inProgress.push({
        uploadPartInput: nextPart,
        s3Request: this._makeUploadPartRequest(nextPart, cancelTokenSource),
        cancel: cancelTokenSource.cancel
      });
    }
  }
  async _verifyFileSize() {
    const obj = await this._listSingleFile({
      key: this.params.Key,
      bucket: this.params.Bucket
    });
    const valid = Boolean(obj && obj.Size === this.file.size);
    if (!valid) {
      throw new Error("File size does not match between local file and file on s3");
    }
    return valid;
  }
  _isDone() {
    return !this.queued.length && !this.inProgress.length && this.bytesUploaded === this.totalBytes;
  }
  _createParts() {
    const size = this.file.size;
    const parts = [];
    for (let bodyStart = 0; bodyStart < size; ) {
      const bodyEnd = Math.min(bodyStart + this.partSize, size);
      parts.push({
        Body: this.file.slice(bodyStart, bodyEnd),
        Key: this.params.Key,
        Bucket: this.params.Bucket,
        PartNumber: parts.length + 1,
        UploadId: this.uploadId
      });
      bodyStart += this.partSize;
    }
    return parts;
  }
  _initCachedUploadParts(cachedParts) {
    this.bytesUploaded += cachedParts.reduce((acc, part) => acc + part.Size, 0);
    const uploadedPartNumSet = new Set(cachedParts.map((part) => part.PartNumber));
    this.queued = this.queued.filter((part) => !uploadedPartNumSet.has(part.PartNumber));
    this.completedParts = cachedParts.map((part) => ({
      PartNumber: part.PartNumber,
      ETag: part.ETag
    }));
    this._emitEvent(TaskEvents.UPLOAD_PROGRESS, {
      loaded: this.bytesUploaded,
      total: this.totalBytes
    });
  }
  async _initMultipartUpload() {
    const res = await this.s3client.send(new CreateMultipartUploadCommand(this.params));
    this._cache({
      uploadId: res.UploadId,
      lastTouched: Date.now(),
      bucket: this.params.Bucket,
      key: this.params.Key,
      fileName: this.file instanceof File ? this.file.name : ""
    });
    return res.UploadId;
  }
  async _initializeUploadTask() {
    this.state = 1;
    try {
      if (await this._isCached()) {
        const { parts, uploadId } = await this._findCachedUploadParts();
        this.uploadId = uploadId;
        this.queued = this._createParts();
        this._initCachedUploadParts(parts);
        this._startUpload();
      } else {
        if (!this.uploadId) {
          const uploadId = await this._initMultipartUpload();
          this.uploadId = uploadId;
          this.queued = this._createParts();
          this._startUpload();
        }
      }
    } catch (err) {
      if (!import_axios2.default.isCancel(err)) {
        logger3.error("Error initializing the upload task", err);
      }
    }
  }
  resume() {
    if (this.state === 3) {
      logger3.warn("This task has already been cancelled");
    } else if (this.state === 4) {
      logger3.warn("This task has already been completed");
    } else if (this.state === 1) {
      logger3.warn("Upload task already in progress");
    } else if (!this.uploadId) {
      this._initializeUploadTask();
    } else {
      this._startUpload();
    }
  }
  _startUpload() {
    this.state = 1;
    for (let i = 0; i < this.queueSize; i++) {
      this._startNextPart();
    }
  }
  async _cancel() {
    if (this.state === 3) {
      logger3.warn("This task has already been cancelled");
      return false;
    } else if (this.state === 4) {
      logger3.warn("This task has already been completed");
      return false;
    } else {
      this.pause();
      this.queued = [];
      this.completedParts = [];
      this.bytesUploaded = 0;
      this.state = 3;
      try {
        await this.s3client.send(new AbortMultipartUploadCommand({
          Bucket: this.params.Bucket,
          Key: this.params.Key,
          UploadId: this.uploadId
        }));
        await this._removeFromCache();
        return true;
      } catch (err) {
        logger3.error("Error cancelling upload task", err);
        return false;
      }
    }
  }
  pause() {
    if (this.state === 3) {
      logger3.warn("This task has already been cancelled");
    } else if (this.state === 4) {
      logger3.warn("This task has already been completed");
    } else if (this.state === 2) {
      logger3.warn("This task is already paused");
    }
    this.state = 2;
    const removedInProgressReq = this.inProgress.splice(0, this.inProgress.length);
    removedInProgressReq.forEach((req) => {
      req.cancel(AWSS3ProviderUploadErrorStrings.UPLOAD_PAUSED_MESSAGE);
    });
    this.queued.unshift(...removedInProgressReq.map((req) => req.uploadPartInput));
  }
};

// src/providers/AWSS3Provider.ts
var events2 = __toModule(require_events());
var logger4 = new Logger4("AWSS3Provider");
var DEFAULT_STORAGE_LEVEL = "public";
var DEFAULT_PRESIGN_EXPIRATION = 900;
var INVALID_CRED = { accessKeyId: "", secretAccessKey: "" };
var _AWSS3Provider = class {
  constructor(config) {
    this._config = config ? config : {};
    this._storage = new StorageHelper().getStorage();
    Hub2.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signOut" || payload.event === "signIn") {
        this._storage.removeItem(UPLOADS_STORAGE_KEY);
      }
    });
    logger4.debug("Storage Options", this._config);
  }
  getCategory() {
    return _AWSS3Provider.CATEGORY;
  }
  getProviderName() {
    return _AWSS3Provider.PROVIDER_NAME;
  }
  configure(config) {
    logger4.debug("configure Storage", config);
    if (!config)
      return this._config;
    const amplifyConfig = Parser.parseMobilehubConfig(config);
    this._config = Object.assign({}, this._config, amplifyConfig.Storage);
    if (!this._config.bucket) {
      logger4.debug("Do not have bucket yet");
    }
    return this._config;
  }
  startResumableUpload(addTaskInput, config) {
    const { s3Client, emitter, key, file, params } = addTaskInput;
    const {
      progressCallback,
      completeCallback,
      errorCallback,
      track = false
    } = config;
    if (!(file instanceof Blob)) {
      throw new Error(StorageErrorStrings.INVALID_BLOB);
    }
    emitter.on(TaskEvents.UPLOAD_PROGRESS, (event) => {
      if (progressCallback) {
        if (typeof progressCallback === "function") {
          progressCallback(event);
        } else {
          logger4.warn("progressCallback should be a function, not a " + typeof progressCallback);
        }
      }
    });
    emitter.on(TaskEvents.UPLOAD_COMPLETE, (event) => {
      if (completeCallback) {
        if (typeof completeCallback === "function") {
          completeCallback(event);
        } else {
          logger4.warn("completeCallback should be a function, not a " + typeof completeCallback);
        }
      }
    });
    emitter.on(TaskEvents.ERROR, (err) => {
      if (errorCallback) {
        if (typeof errorCallback === "function") {
          errorCallback(err);
        } else {
          logger4.warn("errorCallback should be a function, not a " + typeof errorCallback);
        }
      }
    });
    const prefixPromise = Credentials3.get().then((credentials) => {
      const cred = Credentials3.shear(credentials);
      return getPrefix({
        ...config,
        credentials: cred
      });
    });
    const task = new AWSS3UploadTask({
      s3Client,
      file,
      emitter,
      level: config.level,
      storage: this._storage,
      params,
      prefixPromise
    });
    dispatchStorageEvent(track, "upload", { method: "put", result: "success" }, null, `Upload Task created successfully for ${key}`);
    task.resume();
    return task;
  }
  async copy(src, dest, config) {
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK || !this._isWithCredentials(this._config)) {
      throw new Error(StorageErrorStrings.NO_CREDENTIALS);
    }
    const opt = Object.assign({}, this._config, config);
    const {
      acl,
      bucket,
      cacheControl,
      expires,
      track,
      serverSideEncryption,
      SSECustomerAlgorithm,
      SSECustomerKey,
      SSECustomerKeyMD5,
      SSEKMSKeyId
    } = opt;
    const {
      level: srcLevel = DEFAULT_STORAGE_LEVEL,
      identityId: srcIdentityId,
      key: srcKey
    } = src;
    const { level: destLevel = DEFAULT_STORAGE_LEVEL, key: destKey } = dest;
    if (!srcKey || typeof srcKey !== "string") {
      throw new Error(StorageErrorStrings.NO_SRC_KEY);
    }
    if (!destKey || typeof destKey !== "string") {
      throw new Error(StorageErrorStrings.NO_DEST_KEY);
    }
    if (srcLevel !== "protected" && srcIdentityId) {
      logger4.warn(`You may copy files from another user if the source level is "protected", currently it's ${srcLevel}`);
    }
    const srcPrefix = this._prefix({
      ...opt,
      level: srcLevel,
      ...srcIdentityId && { identityId: srcIdentityId }
    });
    const destPrefix = this._prefix({ ...opt, level: destLevel });
    const finalSrcKey = `${bucket}/${srcPrefix}${srcKey}`;
    const finalDestKey = `${destPrefix}${destKey}`;
    logger4.debug(`copying ${finalSrcKey} to ${finalDestKey}`);
    const params = {
      Bucket: bucket,
      CopySource: finalSrcKey,
      Key: finalDestKey,
      MetadataDirective: "COPY"
    };
    if (cacheControl)
      params.CacheControl = cacheControl;
    if (expires)
      params.Expires = expires;
    if (serverSideEncryption) {
      params.ServerSideEncryption = serverSideEncryption;
    }
    if (SSECustomerAlgorithm) {
      params.SSECustomerAlgorithm = SSECustomerAlgorithm;
    }
    if (SSECustomerKey) {
      params.SSECustomerKey = SSECustomerKey;
    }
    if (SSECustomerKeyMD5) {
      params.SSECustomerKeyMD5 = SSECustomerKeyMD5;
    }
    if (SSEKMSKeyId) {
      params.SSEKMSKeyId = SSEKMSKeyId;
    }
    if (acl)
      params.ACL = acl;
    const s3 = this._createNewS3Client(opt);
    s3.middlewareStack.remove(SET_CONTENT_LENGTH_HEADER);
    try {
      await s3.send(new CopyObjectCommand(params));
      dispatchStorageEvent(track, "copy", {
        method: "copy",
        result: "success"
      }, null, `Copy success from ${srcKey} to ${destKey}`);
      return {
        key: destKey
      };
    } catch (error) {
      dispatchStorageEvent(track, "copy", {
        method: "copy",
        result: "failed"
      }, null, `Copy failed from ${srcKey} to ${destKey}`);
      throw error;
    }
  }
  async get(key, config) {
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK || !this._isWithCredentials(this._config)) {
      throw new Error(StorageErrorStrings.NO_CREDENTIALS);
    }
    const opt = Object.assign({}, this._config, config);
    const {
      bucket,
      download,
      cacheControl,
      contentDisposition,
      contentEncoding,
      contentLanguage,
      contentType,
      expires,
      track,
      SSECustomerAlgorithm,
      SSECustomerKey,
      SSECustomerKeyMD5,
      progressCallback
    } = opt;
    const prefix = this._prefix(opt);
    const final_key = prefix + key;
    const emitter = new events2.EventEmitter();
    const s3 = this._createNewS3Client(opt, emitter);
    logger4.debug("get " + key + " from " + final_key);
    const params = {
      Bucket: bucket,
      Key: final_key
    };
    if (cacheControl)
      params.ResponseCacheControl = cacheControl;
    if (contentDisposition)
      params.ResponseContentDisposition = contentDisposition;
    if (contentEncoding)
      params.ResponseContentEncoding = contentEncoding;
    if (contentLanguage)
      params.ResponseContentLanguage = contentLanguage;
    if (contentType)
      params.ResponseContentType = contentType;
    if (SSECustomerAlgorithm) {
      params.SSECustomerAlgorithm = SSECustomerAlgorithm;
    }
    if (SSECustomerKey) {
      params.SSECustomerKey = SSECustomerKey;
    }
    if (SSECustomerKeyMD5) {
      params.SSECustomerKeyMD5 = SSECustomerKeyMD5;
    }
    if (download === true) {
      const getObjectCommand = new GetObjectCommand(params);
      try {
        if (progressCallback) {
          if (typeof progressCallback === "function") {
            emitter.on(SEND_DOWNLOAD_PROGRESS_EVENT, (progress) => {
              progressCallback(progress);
            });
          } else {
            logger4.warn("progressCallback should be a function, not a " + typeof progressCallback);
          }
        }
        const response = await s3.send(getObjectCommand);
        emitter.removeAllListeners(SEND_DOWNLOAD_PROGRESS_EVENT);
        dispatchStorageEvent(track, "download", { method: "get", result: "success" }, {
          fileSize: Number(response.Body["size"] || response.Body["length"])
        }, `Download success for ${key}`);
        return response;
      } catch (error) {
        dispatchStorageEvent(track, "download", {
          method: "get",
          result: "failed"
        }, null, `Download failed with ${error.message}`);
        throw error;
      }
    }
    try {
      const signer = new S3RequestPresigner({ ...s3.config });
      const request = await createRequest(s3, new GetObjectCommand(params));
      const url = formatUrl(await signer.presign(request, {
        expiresIn: expires || DEFAULT_PRESIGN_EXPIRATION
      }));
      dispatchStorageEvent(track, "getSignedUrl", { method: "get", result: "success" }, null, `Signed URL: ${url}`);
      return url;
    } catch (error) {
      logger4.warn("get signed url error", error);
      dispatchStorageEvent(track, "getSignedUrl", { method: "get", result: "failed" }, null, `Could not get a signed URL for ${key}`);
      throw error;
    }
  }
  put(key, object, config) {
    const opt = Object.assign({}, this._config, config);
    const { bucket, track, progressCallback, level, resumable } = opt;
    const {
      contentType,
      contentDisposition,
      contentEncoding,
      cacheControl,
      expires,
      metadata,
      tagging,
      acl
    } = opt;
    const {
      serverSideEncryption,
      SSECustomerAlgorithm,
      SSECustomerKey,
      SSECustomerKeyMD5,
      SSEKMSKeyId
    } = opt;
    const type = contentType ? contentType : "binary/octet-stream";
    const params = {
      Bucket: bucket,
      Key: key,
      Body: object,
      ContentType: type
    };
    if (cacheControl) {
      params.CacheControl = cacheControl;
    }
    if (contentDisposition) {
      params.ContentDisposition = contentDisposition;
    }
    if (contentEncoding) {
      params.ContentEncoding = contentEncoding;
    }
    if (expires) {
      params.Expires = expires;
    }
    if (metadata) {
      params.Metadata = metadata;
    }
    if (tagging) {
      params.Tagging = tagging;
    }
    if (serverSideEncryption) {
      params.ServerSideEncryption = serverSideEncryption;
    }
    if (SSECustomerAlgorithm) {
      params.SSECustomerAlgorithm = SSECustomerAlgorithm;
    }
    if (SSECustomerKey) {
      params.SSECustomerKey = SSECustomerKey;
    }
    if (SSECustomerKeyMD5) {
      params.SSECustomerKeyMD5 = SSECustomerKeyMD5;
    }
    if (SSEKMSKeyId) {
      params.SSEKMSKeyId = SSEKMSKeyId;
    }
    const emitter = new events2.EventEmitter();
    const uploader = new AWSS3ProviderManagedUpload(params, opt, emitter);
    if (acl) {
      params.ACL = acl;
    }
    if (resumable === true) {
      const s3Client = this._createNewS3Client(opt);
      s3Client.middlewareStack.add(createPrefixMiddleware(opt, key), prefixMiddlewareOptions);
      const addTaskInput = {
        bucket,
        key,
        s3Client,
        file: object,
        emitter,
        accessLevel: level,
        params
      };
      return this.startResumableUpload(addTaskInput, config);
    }
    try {
      if (progressCallback) {
        if (typeof progressCallback === "function") {
          emitter.on(SEND_UPLOAD_PROGRESS_EVENT, (progress) => {
            progressCallback(progress);
          });
        } else {
          logger4.warn("progressCallback should be a function, not a " + typeof progressCallback);
        }
      }
      return uploader.upload().then((response) => {
        logger4.debug("upload result", response);
        dispatchStorageEvent(track, "upload", { method: "put", result: "success" }, null, `Upload success for ${key}`);
        return { key };
      });
    } catch (error) {
      logger4.warn("error uploading", error);
      dispatchStorageEvent(track, "upload", { method: "put", result: "failed" }, null, `Error uploading ${key}`);
      throw error;
    }
  }
  async remove(key, config) {
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK || !this._isWithCredentials(this._config)) {
      throw new Error(StorageErrorStrings.NO_CREDENTIALS);
    }
    const opt = Object.assign({}, this._config, config);
    const { bucket, track } = opt;
    const prefix = this._prefix(opt);
    const final_key = prefix + key;
    const s3 = this._createNewS3Client(opt);
    logger4.debug("remove " + key + " from " + final_key);
    const params = {
      Bucket: bucket,
      Key: final_key
    };
    const deleteObjectCommand = new DeleteObjectCommand(params);
    try {
      const response = await s3.send(deleteObjectCommand);
      dispatchStorageEvent(track, "delete", { method: "remove", result: "success" }, null, `Deleted ${key} successfully`);
      return response;
    } catch (error) {
      dispatchStorageEvent(track, "delete", { method: "remove", result: "failed" }, null, `Deletion of ${key} failed with ${error}`);
      throw error;
    }
  }
  async list(path, config) {
    const credentialsOK = await this._ensureCredentials();
    if (!credentialsOK || !this._isWithCredentials(this._config)) {
      throw new Error(StorageErrorStrings.NO_CREDENTIALS);
    }
    const opt = Object.assign({}, this._config, config);
    const { bucket, track, maxKeys } = opt;
    const prefix = this._prefix(opt);
    const final_path = prefix + path;
    const s3 = this._createNewS3Client(opt);
    logger4.debug("list " + path + " from " + final_path);
    const params = {
      Bucket: bucket,
      Prefix: final_path,
      MaxKeys: maxKeys
    };
    const listObjectsCommand = new ListObjectsCommand(params);
    try {
      const response = await s3.send(listObjectsCommand);
      let list = [];
      if (response && response.Contents) {
        list = response.Contents.map((item) => {
          return {
            key: item.Key.substr(prefix.length),
            eTag: item.ETag,
            lastModified: item.LastModified,
            size: item.Size
          };
        });
      }
      dispatchStorageEvent(track, "list", { method: "list", result: "success" }, null, `${list.length} items returned from list operation`);
      logger4.debug("list", list);
      return list;
    } catch (error) {
      logger4.warn("list error", error);
      dispatchStorageEvent(track, "list", { method: "list", result: "failed" }, null, `Listing items failed: ${error.message}`);
      throw error;
    }
  }
  async _ensureCredentials() {
    try {
      const credentials = await Credentials3.get();
      if (!credentials)
        return false;
      const cred = Credentials3.shear(credentials);
      logger4.debug("set credentials for storage", cred);
      this._config.credentials = cred;
      return true;
    } catch (error) {
      logger4.warn("ensure credentials error", error);
      return false;
    }
  }
  _isWithCredentials(config) {
    return typeof config === "object" && config.hasOwnProperty("credentials");
  }
  _prefix(config) {
    const { credentials, level } = config;
    const customPrefix = config.customPrefix || {};
    const identityId = config.identityId || credentials.identityId;
    const privatePath = (customPrefix.private !== void 0 ? customPrefix.private : "private/") + identityId + "/";
    const protectedPath = (customPrefix.protected !== void 0 ? customPrefix.protected : "protected/") + identityId + "/";
    const publicPath = customPrefix.public !== void 0 ? customPrefix.public : "public/";
    switch (level) {
      case "private":
        return privatePath;
      case "protected":
        return protectedPath;
      default:
        return publicPath;
    }
  }
  async _credentialsProvider() {
    try {
      const credentials = await Credentials3.get();
      if (!credentials)
        return INVALID_CRED;
      const cred = Credentials3.shear(credentials);
      logger4.debug("credentials provider get credentials", cred);
      return cred;
    } catch (error) {
      logger4.warn("credentials provider error", error);
      return INVALID_CRED;
    }
  }
  _createNewS3Client(config, emitter) {
    const {
      region,
      cancelTokenSource,
      dangerouslyConnectToHttpEndpointForTesting
    } = config;
    let localTestingConfig = {};
    if (dangerouslyConnectToHttpEndpointForTesting) {
      localTestingConfig = {
        endpoint: localTestingStorageEndpoint,
        tls: false,
        bucketEndpoint: false,
        forcePathStyle: true
      };
    }
    const s3client = new S3Client({
      region,
      credentials: this._credentialsProvider,
      customUserAgent: getAmplifyUserAgent2(),
      ...localTestingConfig,
      requestHandler: new AxiosHttpHandler({}, emitter, cancelTokenSource)
    });
    return s3client;
  }
};
var AWSS3Provider = _AWSS3Provider;
AWSS3Provider.CATEGORY = "Storage";
AWSS3Provider.PROVIDER_NAME = "AWSS3";

// src/Storage.ts
var import_axios3 = __toModule(require_axios2());
var logger5 = new Logger5("StorageClass");
var DEFAULT_PROVIDER = "AWSS3";
var Storage = class {
  constructor() {
    this._config = {};
    this._pluggables = [];
    this._cancelTokenSourceMap = new WeakMap();
    logger5.debug("Storage Options", this._config);
    this.get = this.get.bind(this);
    this.put = this.put.bind(this);
    this.remove = this.remove.bind(this);
    this.list = this.list.bind(this);
  }
  getModuleName() {
    return "Storage";
  }
  addPluggable(pluggable) {
    if (pluggable && pluggable.getCategory() === "Storage") {
      this._pluggables.push(pluggable);
      let config = {};
      config = pluggable.configure(this._config[pluggable.getProviderName()]);
      return config;
    }
  }
  getPluggable(providerName) {
    const pluggable = this._pluggables.find((pluggable2) => pluggable2.getProviderName() === providerName);
    if (pluggable === void 0) {
      logger5.debug("No plugin found with providerName", providerName);
      return null;
    } else
      return pluggable;
  }
  removePluggable(providerName) {
    this._pluggables = this._pluggables.filter((pluggable) => pluggable.getProviderName() !== providerName);
    return;
  }
  configure(config) {
    logger5.debug("configure Storage");
    if (!config)
      return this._config;
    const amplifyConfig = Parser2.parseMobilehubConfig(config);
    const storageKeysFromConfig = Object.keys(amplifyConfig.Storage);
    const storageArrayKeys = [
      "bucket",
      "region",
      "level",
      "track",
      "customPrefix",
      "serverSideEncryption",
      "SSECustomerAlgorithm",
      "SSECustomerKey",
      "SSECustomerKeyMD5",
      "SSEKMSKeyId"
    ];
    const isInStorageArrayKeys = (k) => storageArrayKeys.some((x) => x === k);
    const checkConfigKeysFromArray = (k) => k.find((k2) => isInStorageArrayKeys(k2));
    if (storageKeysFromConfig && checkConfigKeysFromArray(storageKeysFromConfig) && !amplifyConfig.Storage[DEFAULT_PROVIDER]) {
      amplifyConfig.Storage[DEFAULT_PROVIDER] = {};
    }
    Object.entries(amplifyConfig.Storage).map(([key, value]) => {
      if (key && isInStorageArrayKeys(key) && value !== void 0) {
        amplifyConfig.Storage[DEFAULT_PROVIDER][key] = value;
        delete amplifyConfig.Storage[key];
      }
    });
    Object.keys(amplifyConfig.Storage).forEach((providerName) => {
      if (typeof amplifyConfig.Storage[providerName] !== "string") {
        this._config[providerName] = {
          ...this._config[providerName],
          ...amplifyConfig.Storage[providerName]
        };
      }
    });
    this._pluggables.forEach((pluggable) => {
      pluggable.configure(this._config[pluggable.getProviderName()]);
    });
    if (this._pluggables.length === 0) {
      this.addPluggable(new AWSS3Provider());
    }
    return this._config;
  }
  getCancellableTokenSource() {
    return import_axios3.default.CancelToken.source();
  }
  updateRequestToBeCancellable(request, cancelTokenSource) {
    this._cancelTokenSourceMap.set(request, cancelTokenSource);
  }
  isUploadTask(x) {
    return typeof x !== "undefined" && typeof x["pause"] === "function" && typeof x["resume"] === "function";
  }
  cancel(request, message) {
    if (request instanceof AWSS3UploadTask) {
      return request._cancel();
    }
    const cancelTokenSource = this._cancelTokenSourceMap.get(request);
    if (cancelTokenSource) {
      cancelTokenSource.cancel(message);
    } else {
      logger5.debug("The request does not map to any cancel token");
    }
  }
  copy(src, dest, config) {
    const provider = config?.provider || DEFAULT_PROVIDER;
    const prov = this._pluggables.find((pluggable) => pluggable.getProviderName() === provider);
    if (prov === void 0) {
      logger5.debug("No plugin found with providerName", provider);
      return Promise.reject("No plugin found in Storage for the provider");
    }
    const cancelTokenSource = this.getCancellableTokenSource();
    if (typeof prov.copy !== "function") {
      return Promise.reject(`.copy is not implemented on provider ${prov.getProviderName()}`);
    }
    const responsePromise = prov.copy(src, dest, {
      ...config,
      cancelTokenSource
    });
    this.updateRequestToBeCancellable(responsePromise, cancelTokenSource);
    return responsePromise;
  }
  get(key, config) {
    const provider = config?.provider || DEFAULT_PROVIDER;
    const prov = this._pluggables.find((pluggable) => pluggable.getProviderName() === provider);
    if (prov === void 0) {
      logger5.debug("No plugin found with providerName", provider);
      return Promise.reject("No plugin found in Storage for the provider");
    }
    const cancelTokenSource = this.getCancellableTokenSource();
    const responsePromise = prov.get(key, {
      ...config,
      cancelTokenSource
    });
    this.updateRequestToBeCancellable(responsePromise, cancelTokenSource);
    return responsePromise;
  }
  isCancelError(error) {
    return import_axios3.default.isCancel(error);
  }
  put(key, object, config) {
    const provider = config?.provider || DEFAULT_PROVIDER;
    const prov = this._pluggables.find((pluggable) => pluggable.getProviderName() === provider);
    if (prov === void 0) {
      logger5.debug("No plugin found with providerName", provider);
      return Promise.reject("No plugin found in Storage for the provider");
    }
    const cancelTokenSource = this.getCancellableTokenSource();
    const response = prov.put(key, object, {
      ...config,
      cancelTokenSource
    });
    if (!this.isUploadTask(response)) {
      this.updateRequestToBeCancellable(response, cancelTokenSource);
    }
    return response;
  }
  remove(key, config) {
    const provider = config?.provider || DEFAULT_PROVIDER;
    const prov = this._pluggables.find((pluggable) => pluggable.getProviderName() === provider);
    if (prov === void 0) {
      logger5.debug("No plugin found with providerName", provider);
      return Promise.reject("No plugin found in Storage for the provider");
    }
    return prov.remove(key, config);
  }
  list(path, config) {
    const provider = config?.provider || DEFAULT_PROVIDER;
    const prov = this._pluggables.find((pluggable) => pluggable.getProviderName() === provider);
    if (prov === void 0) {
      logger5.debug("No plugin found with providerName", provider);
      return Promise.reject("No plugin found in Storage for the provider");
    }
    return prov.list(path, config);
  }
};

// src/index.ts
import { Amplify, ConsoleLogger as Logger6 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger6 = new Logger6("Storage");
var _instance = null;
var getInstance = () => {
  if (_instance) {
    return _instance;
  }
  logger6.debug("Create Storage Instance, debug");
  _instance = new Storage();
  _instance.vault = new Storage();
  const old_configure = _instance.configure;
  _instance.configure = (options) => {
    logger6.debug("storage configure called");
    const vaultConfig = { ...old_configure.call(_instance, options) };
    Object.keys(vaultConfig).forEach((providerName) => {
      if (typeof vaultConfig[providerName] !== "string") {
        vaultConfig[providerName] = {
          ...vaultConfig[providerName],
          level: "private"
        };
      }
    });
    logger6.debug("storage vault configure called");
    _instance.vault.configure(vaultConfig);
  };
  return _instance;
};
var Storage2 = getInstance();
Amplify.register(Storage2);
var src_default = Storage2;
export {
  AWSS3Provider,
  Storage2 as Storage,
  Storage as StorageClass,
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
