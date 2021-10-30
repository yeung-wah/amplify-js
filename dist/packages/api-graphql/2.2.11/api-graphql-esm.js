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

// node_modules/graphql/jsutils/devAssert.js
var require_devAssert = __commonJS({
  "node_modules/graphql/jsutils/devAssert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = devAssert;
    function devAssert(condition, message) {
      var booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message);
      }
    }
  }
});

// node_modules/graphql/jsutils/defineToStringTag.js
var require_defineToStringTag = __commonJS({
  "node_modules/graphql/jsutils/defineToStringTag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = defineToStringTag;
    function defineToStringTag(classObject) {
      if (typeof Symbol === "function" && Symbol.toStringTag) {
        Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
          get: function get() {
            return this.constructor.name;
          }
        });
      }
    }
  }
});

// node_modules/graphql/language/source.js
var require_source = __commonJS({
  "node_modules/graphql/language/source.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Source = void 0;
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _defineToStringTag = _interopRequireDefault(require_defineToStringTag());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Source2 = function Source3(body, name, locationOffset) {
      this.body = body;
      this.name = name || "GraphQL request";
      this.locationOffset = locationOffset || {
        line: 1,
        column: 1
      };
      this.locationOffset.line > 0 || (0, _devAssert.default)(0, "line in locationOffset is 1-indexed and must be positive");
      this.locationOffset.column > 0 || (0, _devAssert.default)(0, "column in locationOffset is 1-indexed and must be positive");
    };
    exports.Source = Source2;
    (0, _defineToStringTag.default)(Source2);
  }
});

// node_modules/graphql/language/location.js
var require_location = __commonJS({
  "node_modules/graphql/language/location.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getLocation = getLocation2;
    function getLocation2(source, position) {
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

// node_modules/graphql/language/printLocation.js
var require_printLocation = __commonJS({
  "node_modules/graphql/language/printLocation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printLocation = printLocation2;
    exports.printSourceLocation = printSourceLocation2;
    var _location = require_location();
    function printLocation2(location) {
      return printSourceLocation2(location.source, (0, _location.getLocation)(location.source, location.start));
    }
    function printSourceLocation2(source, sourceLocation) {
      var firstLineColumnOffset = source.locationOffset.column - 1;
      var body = whitespace(firstLineColumnOffset) + source.body;
      var lineIndex = sourceLocation.line - 1;
      var lineOffset = source.locationOffset.line - 1;
      var lineNum = sourceLocation.line + lineOffset;
      var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
      var columnNum = sourceLocation.column + columnOffset;
      var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
      var lines = body.split(/\r\n|[\n\r]/g);
      var locationLine = lines[lineIndex];
      if (locationLine.length > 120) {
        var sublineIndex = Math.floor(columnNum / 80);
        var sublineColumnNum = columnNum % 80;
        var sublines = [];
        for (var i = 0; i < locationLine.length; i += 80) {
          sublines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function(subline) {
          return ["", subline];
        }), [[" ", whitespace(sublineColumnNum - 1) + "^"], ["", sublines[sublineIndex + 1]]]));
      }
      return locationStr + printPrefixedLines([
        ["".concat(lineNum - 1), lines[lineIndex - 1]],
        ["".concat(lineNum), locationLine],
        ["", whitespace(columnNum - 1) + "^"],
        ["".concat(lineNum + 1), lines[lineIndex + 1]]
      ]);
    }
    function printPrefixedLines(lines) {
      var existingLines = lines.filter(function(_ref) {
        var _ = _ref[0], line = _ref[1];
        return line !== void 0;
      });
      var padLen = Math.max.apply(Math, existingLines.map(function(_ref2) {
        var prefix = _ref2[0];
        return prefix.length;
      }));
      return existingLines.map(function(_ref3) {
        var prefix = _ref3[0], line = _ref3[1];
        return lpad(padLen, prefix) + " | " + line;
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

// node_modules/graphql/language/kinds.js
var require_kinds = __commonJS({
  "node_modules/graphql/language/kinds.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Kind = void 0;
    var Kind2 = Object.freeze({
      NAME: "Name",
      DOCUMENT: "Document",
      OPERATION_DEFINITION: "OperationDefinition",
      VARIABLE_DEFINITION: "VariableDefinition",
      SELECTION_SET: "SelectionSet",
      FIELD: "Field",
      ARGUMENT: "Argument",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_FRAGMENT: "InlineFragment",
      FRAGMENT_DEFINITION: "FragmentDefinition",
      VARIABLE: "Variable",
      INT: "IntValue",
      FLOAT: "FloatValue",
      STRING: "StringValue",
      BOOLEAN: "BooleanValue",
      NULL: "NullValue",
      ENUM: "EnumValue",
      LIST: "ListValue",
      OBJECT: "ObjectValue",
      OBJECT_FIELD: "ObjectField",
      DIRECTIVE: "Directive",
      NAMED_TYPE: "NamedType",
      LIST_TYPE: "ListType",
      NON_NULL_TYPE: "NonNullType",
      SCHEMA_DEFINITION: "SchemaDefinition",
      OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
      SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
      OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
      FIELD_DEFINITION: "FieldDefinition",
      INPUT_VALUE_DEFINITION: "InputValueDefinition",
      INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
      UNION_TYPE_DEFINITION: "UnionTypeDefinition",
      ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
      ENUM_VALUE_DEFINITION: "EnumValueDefinition",
      INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
      DIRECTIVE_DEFINITION: "DirectiveDefinition",
      SCHEMA_EXTENSION: "SchemaExtension",
      SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
      OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
      INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
      UNION_TYPE_EXTENSION: "UnionTypeExtension",
      ENUM_TYPE_EXTENSION: "EnumTypeExtension",
      INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
    });
    exports.Kind = Kind2;
  }
});

// node_modules/graphql/language/tokenKind.js
var require_tokenKind = __commonJS({
  "node_modules/graphql/language/tokenKind.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TokenKind = void 0;
    var TokenKind2 = Object.freeze({
      SOF: "<SOF>",
      EOF: "<EOF>",
      BANG: "!",
      DOLLAR: "$",
      AMP: "&",
      PAREN_L: "(",
      PAREN_R: ")",
      SPREAD: "...",
      COLON: ":",
      EQUALS: "=",
      AT: "@",
      BRACKET_L: "[",
      BRACKET_R: "]",
      BRACE_L: "{",
      PIPE: "|",
      BRACE_R: "}",
      NAME: "Name",
      INT: "Int",
      FLOAT: "Float",
      STRING: "String",
      BLOCK_STRING: "BlockString",
      COMMENT: "Comment"
    });
    exports.TokenKind = TokenKind2;
  }
});

// node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js
var require_nodejsCustomInspectSymbol = __commonJS({
  "node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
    var _default = nodejsCustomInspectSymbol;
    exports.default = _default;
  }
});

// node_modules/graphql/jsutils/defineToJSON.js
var require_defineToJSON = __commonJS({
  "node_modules/graphql/jsutils/defineToJSON.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = defineToJSON;
    var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function defineToJSON(classObject) {
      var fn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : classObject.prototype.toString;
      classObject.prototype.toJSON = fn;
      classObject.prototype.inspect = fn;
      if (_nodejsCustomInspectSymbol.default) {
        classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
      }
    }
  }
});

// node_modules/graphql/jsutils/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/graphql/jsutils/isObjectLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isObjectLike;
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function isObjectLike(value) {
      return _typeof(value) == "object" && value !== null;
    }
  }
});

// node_modules/graphql/error/GraphQLError.js
var require_GraphQLError = __commonJS({
  "node_modules/graphql/error/GraphQLError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLError = GraphQLError2;
    exports.printError = printError2;
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _location = require_location();
    var _printLocation = require_printLocation();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
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
      var _extensions = extensions;
      if (_extensions == null && originalError != null) {
        var originalExtensions = originalError.extensions;
        if ((0, _isObjectLike.default)(originalExtensions)) {
          _extensions = originalExtensions;
        }
      }
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
          return printError2(this);
        }
      }
    });
    function printError2(error) {
      var output = error.message;
      if (error.nodes) {
        for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
          var node = _error$nodes2[_i2];
          if (node.loc) {
            output += "\n\n" + (0, _printLocation.printLocation)(node.loc);
          }
        }
      } else if (error.source && error.locations) {
        for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
          var location = _error$locations2[_i4];
          output += "\n\n" + (0, _printLocation.printSourceLocation)(error.source, location);
        }
      }
      return output;
    }
  }
});

// node_modules/graphql/error/syntaxError.js
var require_syntaxError = __commonJS({
  "node_modules/graphql/error/syntaxError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.syntaxError = syntaxError2;
    var _GraphQLError = require_GraphQLError();
    function syntaxError2(source, position, description) {
      return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), void 0, source, [position]);
    }
  }
});

// node_modules/graphql/language/blockString.js
var require_blockString = __commonJS({
  "node_modules/graphql/language/blockString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dedentBlockStringValue = dedentBlockStringValue;
    exports.getBlockStringIndentation = getBlockStringIndentation;
    exports.printBlockString = printBlockString;
    function dedentBlockStringValue(rawString) {
      var lines = rawString.split(/\r\n|[\n\r]/g);
      var commonIndent = getBlockStringIndentation(lines);
      if (commonIndent !== 0) {
        for (var i = 1; i < lines.length; i++) {
          lines[i] = lines[i].slice(commonIndent);
        }
      }
      while (lines.length > 0 && isBlank(lines[0])) {
        lines.shift();
      }
      while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
        lines.pop();
      }
      return lines.join("\n");
    }
    function getBlockStringIndentation(lines) {
      var commonIndent = null;
      for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        var indent = leadingWhitespace(line);
        if (indent === line.length) {
          continue;
        }
        if (commonIndent === null || indent < commonIndent) {
          commonIndent = indent;
          if (commonIndent === 0) {
            break;
          }
        }
      }
      return commonIndent === null ? 0 : commonIndent;
    }
    function leadingWhitespace(str) {
      var i = 0;
      while (i < str.length && (str[i] === " " || str[i] === "	")) {
        i++;
      }
      return i;
    }
    function isBlank(str) {
      return leadingWhitespace(str) === str.length;
    }
    function printBlockString(value) {
      var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var isSingleLine = value.indexOf("\n") === -1;
      var hasLeadingSpace = value[0] === " " || value[0] === "	";
      var hasTrailingQuote = value[value.length - 1] === '"';
      var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
      var result = "";
      if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
        result += "\n" + indentation;
      }
      result += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
      if (printAsMultipleLines) {
        result += "\n";
      }
      return '"""' + result.replace(/"""/g, '\\"""') + '"""';
    }
  }
});

// node_modules/graphql/language/lexer.js
var require_lexer = __commonJS({
  "node_modules/graphql/language/lexer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createLexer = createLexer2;
    exports.isPunctuatorToken = isPunctuatorToken;
    var _defineToJSON = _interopRequireDefault(require_defineToJSON());
    var _syntaxError = require_syntaxError();
    var _blockString = require_blockString();
    var _tokenKind = require_tokenKind();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function createLexer2(source, options) {
      var startOfFileToken = new Tok(_tokenKind.TokenKind.SOF, 0, 0, 0, 0, null);
      var lexer = {
        source,
        options,
        lastToken: startOfFileToken,
        token: startOfFileToken,
        line: 1,
        lineStart: 0,
        advance: advanceLexer,
        lookahead
      };
      return lexer;
    }
    function advanceLexer() {
      this.lastToken = this.token;
      var token = this.token = this.lookahead();
      return token;
    }
    function lookahead() {
      var token = this.token;
      if (token.kind !== _tokenKind.TokenKind.EOF) {
        do {
          token = token.next || (token.next = readToken(this, token));
        } while (token.kind === _tokenKind.TokenKind.COMMENT);
      }
      return token;
    }
    function isPunctuatorToken(token) {
      var kind = token.kind;
      return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
    }
    function Tok(kind, start, end, line, column, prev, value) {
      this.kind = kind;
      this.start = start;
      this.end = end;
      this.line = line;
      this.column = column;
      this.value = value;
      this.prev = prev;
      this.next = null;
    }
    (0, _defineToJSON.default)(Tok, function() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    });
    function printCharCode(code) {
      return isNaN(code) ? _tokenKind.TokenKind.EOF : code < 127 ? JSON.stringify(String.fromCharCode(code)) : '"\\u'.concat(("00" + code.toString(16).toUpperCase()).slice(-4), '"');
    }
    function readToken(lexer, prev) {
      var source = lexer.source;
      var body = source.body;
      var bodyLength = body.length;
      var pos = positionAfterWhitespace(body, prev.end, lexer);
      var line = lexer.line;
      var col = 1 + pos - lexer.lineStart;
      if (pos >= bodyLength) {
        return new Tok(_tokenKind.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
      }
      var code = body.charCodeAt(pos);
      switch (code) {
        case 33:
          return new Tok(_tokenKind.TokenKind.BANG, pos, pos + 1, line, col, prev);
        case 35:
          return readComment(source, pos, line, col, prev);
        case 36:
          return new Tok(_tokenKind.TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
        case 38:
          return new Tok(_tokenKind.TokenKind.AMP, pos, pos + 1, line, col, prev);
        case 40:
          return new Tok(_tokenKind.TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
        case 41:
          return new Tok(_tokenKind.TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
        case 46:
          if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
            return new Tok(_tokenKind.TokenKind.SPREAD, pos, pos + 3, line, col, prev);
          }
          break;
        case 58:
          return new Tok(_tokenKind.TokenKind.COLON, pos, pos + 1, line, col, prev);
        case 61:
          return new Tok(_tokenKind.TokenKind.EQUALS, pos, pos + 1, line, col, prev);
        case 64:
          return new Tok(_tokenKind.TokenKind.AT, pos, pos + 1, line, col, prev);
        case 91:
          return new Tok(_tokenKind.TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
        case 93:
          return new Tok(_tokenKind.TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
        case 123:
          return new Tok(_tokenKind.TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
        case 124:
          return new Tok(_tokenKind.TokenKind.PIPE, pos, pos + 1, line, col, prev);
        case 125:
          return new Tok(_tokenKind.TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return readName(source, pos, line, col, prev);
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return readNumber(source, pos, code, line, col, prev);
        case 34:
          if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
            return readBlockString(source, pos, line, col, prev, lexer);
          }
          return readString(source, pos, line, col, prev);
      }
      throw (0, _syntaxError.syntaxError)(source, pos, unexpectedCharacterMessage(code));
    }
    function unexpectedCharacterMessage(code) {
      if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
        return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
      }
      if (code === 39) {
        return `Unexpected single quote character ('), did you mean to use a double quote (")?`;
      }
      return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
    }
    function positionAfterWhitespace(body, startPosition, lexer) {
      var bodyLength = body.length;
      var position = startPosition;
      while (position < bodyLength) {
        var code = body.charCodeAt(position);
        if (code === 9 || code === 32 || code === 44 || code === 65279) {
          ++position;
        } else if (code === 10) {
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 13) {
          if (body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          ++lexer.line;
          lexer.lineStart = position;
        } else {
          break;
        }
      }
      return position;
    }
    function readComment(source, start, line, col, prev) {
      var body = source.body;
      var code;
      var position = start;
      do {
        code = body.charCodeAt(++position);
      } while (!isNaN(code) && (code > 31 || code === 9));
      return new Tok(_tokenKind.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
    }
    function readNumber(source, start, firstCode, line, col, prev) {
      var body = source.body;
      var code = firstCode;
      var position = start;
      var isFloat = false;
      if (code === 45) {
        code = body.charCodeAt(++position);
      }
      if (code === 48) {
        code = body.charCodeAt(++position);
        if (code >= 48 && code <= 57) {
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
        }
      } else {
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 69 || code === 101) {
        isFloat = true;
        code = body.charCodeAt(++position);
        if (code === 43 || code === 45) {
          code = body.charCodeAt(++position);
        }
        position = readDigits(source, position, code);
      }
      return new Tok(isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
    }
    function readDigits(source, start, firstCode) {
      var body = source.body;
      var position = start;
      var code = firstCode;
      if (code >= 48 && code <= 57) {
        do {
          code = body.charCodeAt(++position);
        } while (code >= 48 && code <= 57);
        return position;
      }
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    }
    function readString(source, start, line, col, prev) {
      var body = source.body;
      var position = start + 1;
      var chunkStart = position;
      var code = 0;
      var value = "";
      while (position < body.length && !isNaN(code = body.charCodeAt(position)) && code !== 10 && code !== 13) {
        if (code === 34) {
          value += body.slice(chunkStart, position);
          return new Tok(_tokenKind.TokenKind.STRING, start, position + 1, line, col, prev, value);
        }
        if (code < 32 && code !== 9) {
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        }
        ++position;
        if (code === 92) {
          value += body.slice(chunkStart, position - 1);
          code = body.charCodeAt(position);
          switch (code) {
            case 34:
              value += '"';
              break;
            case 47:
              value += "/";
              break;
            case 92:
              value += "\\";
              break;
            case 98:
              value += "\b";
              break;
            case 102:
              value += "\f";
              break;
            case 110:
              value += "\n";
              break;
            case 114:
              value += "\r";
              break;
            case 116:
              value += "	";
              break;
            case 117: {
              var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));
              if (charCode < 0) {
                var invalidSequence = body.slice(position + 1, position + 5);
                throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
              }
              value += String.fromCharCode(charCode);
              position += 4;
              break;
            }
            default:
              throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
          }
          ++position;
          chunkStart = position;
        }
      }
      throw (0, _syntaxError.syntaxError)(source, position, "Unterminated string.");
    }
    function readBlockString(source, start, line, col, prev, lexer) {
      var body = source.body;
      var position = start + 3;
      var chunkStart = position;
      var code = 0;
      var rawValue = "";
      while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          rawValue += body.slice(chunkStart, position);
          return new Tok(_tokenKind.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockString.dedentBlockStringValue)(rawValue));
        }
        if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        }
        if (code === 10) {
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 13) {
          if (body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
          rawValue += body.slice(chunkStart, position) + '"""';
          position += 4;
          chunkStart = position;
        } else {
          ++position;
        }
      }
      throw (0, _syntaxError.syntaxError)(source, position, "Unterminated string.");
    }
    function uniCharCode(a, b, c, d) {
      return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
    }
    function char2hex(a) {
      return a >= 48 && a <= 57 ? a - 48 : a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : -1;
    }
    function readName(source, start, line, col, prev) {
      var body = source.body;
      var bodyLength = body.length;
      var position = start + 1;
      var code = 0;
      while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
        ++position;
      }
      return new Tok(_tokenKind.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
    }
  }
});

// node_modules/graphql/jsutils/inspect.js
var require_inspect = __commonJS({
  "node_modules/graphql/jsutils/inspect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inspect;
    var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var MAX_ARRAY_LENGTH = 10;
    var MAX_RECURSIVE_DEPTH = 2;
    function inspect(value) {
      return formatValue(value, []);
    }
    function formatValue(value, seenValues) {
      switch (_typeof(value)) {
        case "string":
          return JSON.stringify(value);
        case "function":
          return value.name ? "[function ".concat(value.name, "]") : "[function]";
        case "object":
          if (value === null) {
            return "null";
          }
          return formatObjectValue(value, seenValues);
        default:
          return String(value);
      }
    }
    function formatObjectValue(value, previouslySeenValues) {
      if (previouslySeenValues.indexOf(value) !== -1) {
        return "[Circular]";
      }
      var seenValues = [].concat(previouslySeenValues, [value]);
      var customInspectFn = getCustomFn(value);
      if (customInspectFn !== void 0) {
        var customValue = customInspectFn.call(value);
        if (customValue !== value) {
          return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
        }
      } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
      }
      return formatObject(value, seenValues);
    }
    function formatObject(object, seenValues) {
      var keys = Object.keys(object);
      if (keys.length === 0) {
        return "{}";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[" + getObjectTag(object) + "]";
      }
      var properties = keys.map(function(key) {
        var value = formatValue(object[key], seenValues);
        return key + ": " + value;
      });
      return "{ " + properties.join(", ") + " }";
    }
    function formatArray(array, seenValues) {
      if (array.length === 0) {
        return "[]";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[Array]";
      }
      var len = Math.min(MAX_ARRAY_LENGTH, array.length);
      var remaining = array.length - len;
      var items = [];
      for (var i = 0; i < len; ++i) {
        items.push(formatValue(array[i], seenValues));
      }
      if (remaining === 1) {
        items.push("... 1 more item");
      } else if (remaining > 1) {
        items.push("... ".concat(remaining, " more items"));
      }
      return "[" + items.join(", ") + "]";
    }
    function getCustomFn(object) {
      var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];
      if (typeof customInspectFn === "function") {
        return customInspectFn;
      }
      if (typeof object.inspect === "function") {
        return object.inspect;
      }
    }
    function getObjectTag(object) {
      var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
      if (tag === "Object" && typeof object.constructor === "function") {
        var name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
          return name;
        }
      }
      return tag;
    }
  }
});

// node_modules/graphql/language/directiveLocation.js
var require_directiveLocation = __commonJS({
  "node_modules/graphql/language/directiveLocation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DirectiveLocation = void 0;
    var DirectiveLocation2 = Object.freeze({
      QUERY: "QUERY",
      MUTATION: "MUTATION",
      SUBSCRIPTION: "SUBSCRIPTION",
      FIELD: "FIELD",
      FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
      FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
      INLINE_FRAGMENT: "INLINE_FRAGMENT",
      VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
      SCHEMA: "SCHEMA",
      SCALAR: "SCALAR",
      OBJECT: "OBJECT",
      FIELD_DEFINITION: "FIELD_DEFINITION",
      ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
      INTERFACE: "INTERFACE",
      UNION: "UNION",
      ENUM: "ENUM",
      ENUM_VALUE: "ENUM_VALUE",
      INPUT_OBJECT: "INPUT_OBJECT",
      INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
    });
    exports.DirectiveLocation = DirectiveLocation2;
  }
});

// node_modules/graphql/language/parser.js
var require_parser = __commonJS({
  "node_modules/graphql/language/parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = parse2;
    exports.parseValue = parseValue2;
    exports.parseType = parseType2;
    var _inspect = _interopRequireDefault(require_inspect());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _defineToJSON = _interopRequireDefault(require_defineToJSON());
    var _syntaxError = require_syntaxError();
    var _kinds = require_kinds();
    var _source = require_source();
    var _lexer = require_lexer();
    var _directiveLocation = require_directiveLocation();
    var _tokenKind = require_tokenKind();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse2(source, options) {
      var parser = new Parser(source, options);
      return parser.parseDocument();
    }
    function parseValue2(source, options) {
      var parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      var value = parser.parseValueLiteral(false);
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return value;
    }
    function parseType2(source, options) {
      var parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      var type = parser.parseTypeReference();
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return type;
    }
    var Parser = /* @__PURE__ */ function() {
      function Parser2(source, options) {
        var sourceObj = typeof source === "string" ? new _source.Source(source) : source;
        sourceObj instanceof _source.Source || (0, _devAssert.default)(0, "Must provide Source. Received: ".concat((0, _inspect.default)(sourceObj)));
        this._lexer = (0, _lexer.createLexer)(sourceObj);
        this._options = options || {};
      }
      var _proto = Parser2.prototype;
      _proto.parseName = function parseName() {
        var token = this.expectToken(_tokenKind.TokenKind.NAME);
        return {
          kind: _kinds.Kind.NAME,
          value: token.value,
          loc: this.loc(token)
        };
      };
      _proto.parseDocument = function parseDocument() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.DOCUMENT,
          definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF),
          loc: this.loc(start)
        };
      };
      _proto.parseDefinition = function parseDefinition() {
        if (this.peek(_tokenKind.TokenKind.NAME)) {
          switch (this._lexer.token.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "schema":
            case "scalar":
            case "type":
            case "interface":
            case "union":
            case "enum":
            case "input":
            case "directive":
              return this.parseTypeSystemDefinition();
            case "extend":
              return this.parseTypeSystemExtension();
          }
        } else if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        } else if (this.peekDescription()) {
          return this.parseTypeSystemDefinition();
        }
        throw this.unexpected();
      };
      _proto.parseOperationDefinition = function parseOperationDefinition() {
        var start = this._lexer.token;
        if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
          return {
            kind: _kinds.Kind.OPERATION_DEFINITION,
            operation: "query",
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        }
        var operation = this.parseOperationType();
        var name;
        if (this.peek(_tokenKind.TokenKind.NAME)) {
          name = this.parseName();
        }
        return {
          kind: _kinds.Kind.OPERATION_DEFINITION,
          operation,
          name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      };
      _proto.parseOperationType = function parseOperationType() {
        var operationToken = this.expectToken(_tokenKind.TokenKind.NAME);
        switch (operationToken.value) {
          case "query":
            return "query";
          case "mutation":
            return "mutation";
          case "subscription":
            return "subscription";
        }
        throw this.unexpected(operationToken);
      };
      _proto.parseVariableDefinitions = function parseVariableDefinitions() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
      };
      _proto.parseVariableDefinition = function parseVariableDefinition() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseValueLiteral(true) : void 0,
          directives: this.parseDirectives(true),
          loc: this.loc(start)
        };
      };
      _proto.parseVariable = function parseVariable() {
        var start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.DOLLAR);
        return {
          kind: _kinds.Kind.VARIABLE,
          name: this.parseName(),
          loc: this.loc(start)
        };
      };
      _proto.parseSelectionSet = function parseSelectionSet() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.SELECTION_SET,
          selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R),
          loc: this.loc(start)
        };
      };
      _proto.parseSelection = function parseSelection() {
        return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      };
      _proto.parseField = function parseField() {
        var start = this._lexer.token;
        var nameOrAlias = this.parseName();
        var alias;
        var name;
        if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }
        return {
          kind: _kinds.Kind.FIELD,
          alias,
          name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0,
          loc: this.loc(start)
        };
      };
      _proto.parseArguments = function parseArguments(isConst) {
        var item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
      };
      _proto.parseArgument = function parseArgument() {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return {
          kind: _kinds.Kind.ARGUMENT,
          name,
          value: this.parseValueLiteral(false),
          loc: this.loc(start)
        };
      };
      _proto.parseConstArgument = function parseConstArgument() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.ARGUMENT,
          name: this.parseName(),
          value: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseValueLiteral(true)),
          loc: this.loc(start)
        };
      };
      _proto.parseFragment = function parseFragment() {
        var start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.SPREAD);
        var hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
          return {
            kind: _kinds.Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false),
            loc: this.loc(start)
          };
        }
        return {
          kind: _kinds.Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      };
      _proto.parseFragmentDefinition = function parseFragmentDefinition() {
        var start = this._lexer.token;
        this.expectKeyword("fragment");
        if (this._options.experimentalFragmentVariables) {
          return {
            kind: _kinds.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        }
        return {
          kind: _kinds.Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      };
      _proto.parseFragmentName = function parseFragmentName() {
        if (this._lexer.token.value === "on") {
          throw this.unexpected();
        }
        return this.parseName();
      };
      _proto.parseValueLiteral = function parseValueLiteral(isConst) {
        var token = this._lexer.token;
        switch (token.kind) {
          case _tokenKind.TokenKind.BRACKET_L:
            return this.parseList(isConst);
          case _tokenKind.TokenKind.BRACE_L:
            return this.parseObject(isConst);
          case _tokenKind.TokenKind.INT:
            this._lexer.advance();
            return {
              kind: _kinds.Kind.INT,
              value: token.value,
              loc: this.loc(token)
            };
          case _tokenKind.TokenKind.FLOAT:
            this._lexer.advance();
            return {
              kind: _kinds.Kind.FLOAT,
              value: token.value,
              loc: this.loc(token)
            };
          case _tokenKind.TokenKind.STRING:
          case _tokenKind.TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();
          case _tokenKind.TokenKind.NAME:
            if (token.value === "true" || token.value === "false") {
              this._lexer.advance();
              return {
                kind: _kinds.Kind.BOOLEAN,
                value: token.value === "true",
                loc: this.loc(token)
              };
            } else if (token.value === "null") {
              this._lexer.advance();
              return {
                kind: _kinds.Kind.NULL,
                loc: this.loc(token)
              };
            }
            this._lexer.advance();
            return {
              kind: _kinds.Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
          case _tokenKind.TokenKind.DOLLAR:
            if (!isConst) {
              return this.parseVariable();
            }
            break;
        }
        throw this.unexpected();
      };
      _proto.parseStringLiteral = function parseStringLiteral() {
        var token = this._lexer.token;
        this._lexer.advance();
        return {
          kind: _kinds.Kind.STRING,
          value: token.value,
          block: token.kind === _tokenKind.TokenKind.BLOCK_STRING,
          loc: this.loc(token)
        };
      };
      _proto.parseList = function parseList(isConst) {
        var _this = this;
        var start = this._lexer.token;
        var item = function item2() {
          return _this.parseValueLiteral(isConst);
        };
        return {
          kind: _kinds.Kind.LIST,
          values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R),
          loc: this.loc(start)
        };
      };
      _proto.parseObject = function parseObject(isConst) {
        var _this2 = this;
        var start = this._lexer.token;
        var item = function item2() {
          return _this2.parseObjectField(isConst);
        };
        return {
          kind: _kinds.Kind.OBJECT,
          fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R),
          loc: this.loc(start)
        };
      };
      _proto.parseObjectField = function parseObjectField(isConst) {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return {
          kind: _kinds.Kind.OBJECT_FIELD,
          name,
          value: this.parseValueLiteral(isConst),
          loc: this.loc(start)
        };
      };
      _proto.parseDirectives = function parseDirectives(isConst) {
        var directives = [];
        while (this.peek(_tokenKind.TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }
        return directives;
      };
      _proto.parseDirective = function parseDirective(isConst) {
        var start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.AT);
        return {
          kind: _kinds.Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst),
          loc: this.loc(start)
        };
      };
      _proto.parseTypeReference = function parseTypeReference() {
        var start = this._lexer.token;
        var type;
        if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
          type = this.parseTypeReference();
          this.expectToken(_tokenKind.TokenKind.BRACKET_R);
          type = {
            kind: _kinds.Kind.LIST_TYPE,
            type,
            loc: this.loc(start)
          };
        } else {
          type = this.parseNamedType();
        }
        if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
          return {
            kind: _kinds.Kind.NON_NULL_TYPE,
            type,
            loc: this.loc(start)
          };
        }
        return type;
      };
      _proto.parseNamedType = function parseNamedType() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.NAMED_TYPE,
          name: this.parseName(),
          loc: this.loc(start)
        };
      };
      _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
        var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition();
          }
        }
        throw this.unexpected(keywordToken);
      };
      _proto.peekDescription = function peekDescription() {
        return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
      };
      _proto.parseDescription = function parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      };
      _proto.parseSchemaDefinition = function parseSchemaDefinition() {
        var start = this._lexer.token;
        this.expectKeyword("schema");
        var directives = this.parseDirectives(true);
        var operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        return {
          kind: _kinds.Kind.SCHEMA_DEFINITION,
          directives,
          operationTypes,
          loc: this.loc(start)
        };
      };
      _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
        var start = this._lexer.token;
        var operation = this.parseOperationType();
        this.expectToken(_tokenKind.TokenKind.COLON);
        var type = this.parseNamedType();
        return {
          kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
          operation,
          type,
          loc: this.loc(start)
        };
      };
      _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("scalar");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
          description,
          name,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("type");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
          kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
        var types = [];
        if (this.expectOptionalKeyword("implements")) {
          this.expectOptionalToken(_tokenKind.TokenKind.AMP);
          do {
            types.push(this.parseNamedType());
          } while (this.expectOptionalToken(_tokenKind.TokenKind.AMP) || this._options.allowLegacySDLImplementsInterfaces && this.peek(_tokenKind.TokenKind.NAME));
        }
        return types;
      };
      _proto.parseFieldsDefinition = function parseFieldsDefinition() {
        if (this._options.allowLegacySDLEmptyFields && this.peek(_tokenKind.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind.TokenKind.BRACE_R) {
          this._lexer.advance();
          this._lexer.advance();
          return [];
        }
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
      };
      _proto.parseFieldDefinition = function parseFieldDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        this.expectToken(_tokenKind.TokenKind.COLON);
        var type = this.parseTypeReference();
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.FIELD_DEFINITION,
          description,
          name,
          arguments: args,
          type,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseArgumentDefs = function parseArgumentDefs() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
      };
      _proto.parseInputValueDef = function parseInputValueDef() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        var type = this.parseTypeReference();
        var defaultValue;
        if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
          defaultValue = this.parseValueLiteral(true);
        }
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
          description,
          name,
          type,
          defaultValue,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("interface");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
          kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("union");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        return {
          kind: _kinds.Kind.UNION_TYPE_DEFINITION,
          description,
          name,
          directives,
          types,
          loc: this.loc(start)
        };
      };
      _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
        var types = [];
        if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
          this.expectOptionalToken(_tokenKind.TokenKind.PIPE);
          do {
            types.push(this.parseNamedType());
          } while (this.expectOptionalToken(_tokenKind.TokenKind.PIPE));
        }
        return types;
      };
      _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("enum");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        return {
          kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
          description,
          name,
          directives,
          values,
          loc: this.loc(start)
        };
      };
      _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
      };
      _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
          description,
          name,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("input");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        return {
          kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
      };
      _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
        var keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension();
          }
        }
        throw this.unexpected(keywordToken);
      };
      _proto.parseSchemaExtension = function parseSchemaExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        var directives = this.parseDirectives(true);
        var operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.SCHEMA_EXTENSION,
          directives,
          operationTypes,
          loc: this.loc(start)
        };
      };
      _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        if (directives.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
          name,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
          name,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.UNION_TYPE_EXTENSION,
          name,
          directives,
          types,
          loc: this.loc(start)
        };
      };
      _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
          name,
          directives,
          values,
          loc: this.loc(start)
        };
      };
      _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(_tokenKind.TokenKind.AT);
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        var repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        var locations = this.parseDirectiveLocations();
        return {
          kind: _kinds.Kind.DIRECTIVE_DEFINITION,
          description,
          name,
          arguments: args,
          repeatable,
          locations,
          loc: this.loc(start)
        };
      };
      _proto.parseDirectiveLocations = function parseDirectiveLocations() {
        this.expectOptionalToken(_tokenKind.TokenKind.PIPE);
        var locations = [];
        do {
          locations.push(this.parseDirectiveLocation());
        } while (this.expectOptionalToken(_tokenKind.TokenKind.PIPE));
        return locations;
      };
      _proto.parseDirectiveLocation = function parseDirectiveLocation() {
        var start = this._lexer.token;
        var name = this.parseName();
        if (_directiveLocation.DirectiveLocation[name.value] !== void 0) {
          return name;
        }
        throw this.unexpected(start);
      };
      _proto.loc = function loc(startToken) {
        if (!this._options.noLocation) {
          return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
        }
      };
      _proto.peek = function peek(kind) {
        return this._lexer.token.kind === kind;
      };
      _proto.expectToken = function expectToken(kind) {
        var token = this._lexer.token;
        if (token.kind === kind) {
          this._lexer.advance();
          return token;
        }
        throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
      };
      _proto.expectOptionalToken = function expectOptionalToken(kind) {
        var token = this._lexer.token;
        if (token.kind === kind) {
          this._lexer.advance();
          return token;
        }
        return void 0;
      };
      _proto.expectKeyword = function expectKeyword(value) {
        var token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
          this._lexer.advance();
        } else {
          throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, 'Expected "'.concat(value, '", found ').concat(getTokenDesc(token)));
        }
      };
      _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
        var token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
          this._lexer.advance();
          return true;
        }
        return false;
      };
      _proto.unexpected = function unexpected(atToken) {
        var token = atToken || this._lexer.token;
        return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
      };
      _proto.any = function any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];
        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }
        return nodes;
      };
      _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          var nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        return [];
      };
      _proto.many = function many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      };
      return Parser2;
    }();
    function Loc(startToken, endToken, source) {
      this.start = startToken.start;
      this.end = endToken.end;
      this.startToken = startToken;
      this.endToken = endToken;
      this.source = source;
    }
    (0, _defineToJSON.default)(Loc, function() {
      return {
        start: this.start,
        end: this.end
      };
    });
    function getTokenDesc(token) {
      var value = token.value;
      return value ? "".concat(token.kind, ' "').concat(value, '"') : token.kind;
    }
  }
});

// node_modules/graphql/language/visitor.js
var require_visitor = __commonJS({
  "node_modules/graphql/language/visitor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.visit = visit2;
    exports.visitInParallel = visitInParallel2;
    exports.visitWithTypeInfo = visitWithTypeInfo2;
    exports.getVisitFn = getVisitFn2;
    exports.BREAK = exports.QueryDocumentKeys = void 0;
    var _inspect = _interopRequireDefault(require_inspect());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
      InterfaceTypeDefinition: ["description", "name", "directives", "fields"],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    exports.QueryDocumentKeys = QueryDocumentKeys;
    var BREAK2 = Object.freeze({});
    exports.BREAK = BREAK2;
    function visit2(root, visitor) {
      var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
      var stack = void 0;
      var inArray = Array.isArray(root);
      var keys = [root];
      var index = -1;
      var edits = [];
      var node = void 0;
      var key = void 0;
      var parent = void 0;
      var path = [];
      var ancestors = [];
      var newRoot = root;
      do {
        index++;
        var isLeaving = index === keys.length;
        var isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
          key = ancestors.length === 0 ? void 0 : path[path.length - 1];
          node = parent;
          parent = ancestors.pop();
          if (isEdited) {
            if (inArray) {
              node = node.slice();
            } else {
              var clone = {};
              for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
                var k = _Object$keys2[_i2];
                clone[k] = node[k];
              }
              node = clone;
            }
            var editOffset = 0;
            for (var ii = 0; ii < edits.length; ii++) {
              var editKey = edits[ii][0];
              var editValue = edits[ii][1];
              if (inArray) {
                editKey -= editOffset;
              }
              if (inArray && editValue === null) {
                node.splice(editKey, 1);
                editOffset++;
              } else {
                node[editKey] = editValue;
              }
            }
          }
          index = stack.index;
          keys = stack.keys;
          edits = stack.edits;
          inArray = stack.inArray;
          stack = stack.prev;
        } else {
          key = parent ? inArray ? index : keys[index] : void 0;
          node = parent ? parent[key] : newRoot;
          if (node === null || node === void 0) {
            continue;
          }
          if (parent) {
            path.push(key);
          }
        }
        var result = void 0;
        if (!Array.isArray(node)) {
          if (!isNode(node)) {
            throw new Error("Invalid AST Node: " + (0, _inspect.default)(node));
          }
          var visitFn = getVisitFn2(visitor, node.kind, isLeaving);
          if (visitFn) {
            result = visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK2) {
              break;
            }
            if (result === false) {
              if (!isLeaving) {
                path.pop();
                continue;
              }
            } else if (result !== void 0) {
              edits.push([key, result]);
              if (!isLeaving) {
                if (isNode(result)) {
                  node = result;
                } else {
                  path.pop();
                  continue;
                }
              }
            }
          }
        }
        if (result === void 0 && isEdited) {
          edits.push([key, node]);
        }
        if (isLeaving) {
          path.pop();
        } else {
          stack = {
            inArray,
            index,
            keys,
            edits,
            prev: stack
          };
          inArray = Array.isArray(node);
          keys = inArray ? node : visitorKeys[node.kind] || [];
          index = -1;
          edits = [];
          if (parent) {
            ancestors.push(parent);
          }
          parent = node;
        }
      } while (stack !== void 0);
      if (edits.length !== 0) {
        newRoot = edits[edits.length - 1][1];
      }
      return newRoot;
    }
    function isNode(maybeNode) {
      return Boolean(maybeNode && typeof maybeNode.kind === "string");
    }
    function visitInParallel2(visitors) {
      var skipping = new Array(visitors.length);
      return {
        enter: function enter(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (!skipping[i]) {
              var fn = getVisitFn2(visitors[i], node.kind, false);
              if (fn) {
                var result = fn.apply(visitors[i], arguments);
                if (result === false) {
                  skipping[i] = node;
                } else if (result === BREAK2) {
                  skipping[i] = BREAK2;
                } else if (result !== void 0) {
                  return result;
                }
              }
            }
          }
        },
        leave: function leave(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (!skipping[i]) {
              var fn = getVisitFn2(visitors[i], node.kind, true);
              if (fn) {
                var result = fn.apply(visitors[i], arguments);
                if (result === BREAK2) {
                  skipping[i] = BREAK2;
                } else if (result !== void 0 && result !== false) {
                  return result;
                }
              }
            } else if (skipping[i] === node) {
              skipping[i] = null;
            }
          }
        }
      };
    }
    function visitWithTypeInfo2(typeInfo, visitor) {
      return {
        enter: function enter(node) {
          typeInfo.enter(node);
          var fn = getVisitFn2(visitor, node.kind, false);
          if (fn) {
            var result = fn.apply(visitor, arguments);
            if (result !== void 0) {
              typeInfo.leave(node);
              if (isNode(result)) {
                typeInfo.enter(result);
              }
            }
            return result;
          }
        },
        leave: function leave(node) {
          var fn = getVisitFn2(visitor, node.kind, true);
          var result;
          if (fn) {
            result = fn.apply(visitor, arguments);
          }
          typeInfo.leave(node);
          return result;
        }
      };
    }
    function getVisitFn2(visitor, kind, isLeaving) {
      var kindVisitor = visitor[kind];
      if (kindVisitor) {
        if (!isLeaving && typeof kindVisitor === "function") {
          return kindVisitor;
        }
        var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
        if (typeof kindSpecificVisitor === "function") {
          return kindSpecificVisitor;
        }
      } else {
        var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
        if (specificVisitor) {
          if (typeof specificVisitor === "function") {
            return specificVisitor;
          }
          var specificKindVisitor = specificVisitor[kind];
          if (typeof specificKindVisitor === "function") {
            return specificKindVisitor;
          }
        }
      }
    }
  }
});

// node_modules/graphql/language/printer.js
var require_printer = __commonJS({
  "node_modules/graphql/language/printer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.print = print2;
    var _visitor = require_visitor();
    var _blockString = require_blockString();
    function print2(ast) {
      return (0, _visitor.visit)(ast, {
        leave: printDocASTReducer
      });
    }
    var printDocASTReducer = {
      Name: function Name(node) {
        return node.value;
      },
      Variable: function Variable(node) {
        return "$" + node.name;
      },
      Document: function Document(node) {
        return join(node.definitions, "\n\n") + "\n";
      },
      OperationDefinition: function OperationDefinition(node) {
        var op = node.operation;
        var name = node.name;
        var varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
        var directives = join(node.directives, " ");
        var selectionSet = node.selectionSet;
        return !name && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], " ");
      },
      VariableDefinition: function VariableDefinition(_ref) {
        var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
        return variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "));
      },
      SelectionSet: function SelectionSet(_ref2) {
        var selections = _ref2.selections;
        return block(selections);
      },
      Field: function Field(_ref3) {
        var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
        return join([wrap("", alias, ": ") + name + wrap("(", join(args, ", "), ")"), join(directives, " "), selectionSet], " ");
      },
      Argument: function Argument(_ref4) {
        var name = _ref4.name, value = _ref4.value;
        return name + ": " + value;
      },
      FragmentSpread: function FragmentSpread(_ref5) {
        var name = _ref5.name, directives = _ref5.directives;
        return "..." + name + wrap(" ", join(directives, " "));
      },
      InlineFragment: function InlineFragment(_ref6) {
        var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
        return join(["...", wrap("on ", typeCondition), join(directives, " "), selectionSet], " ");
      },
      FragmentDefinition: function FragmentDefinition(_ref7) {
        var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
        return "fragment ".concat(name).concat(wrap("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap("", join(directives, " "), " ")) + selectionSet;
      },
      IntValue: function IntValue(_ref8) {
        var value = _ref8.value;
        return value;
      },
      FloatValue: function FloatValue(_ref9) {
        var value = _ref9.value;
        return value;
      },
      StringValue: function StringValue(_ref10, key) {
        var value = _ref10.value, isBlockString = _ref10.block;
        return isBlockString ? (0, _blockString.printBlockString)(value, key === "description" ? "" : "  ") : JSON.stringify(value);
      },
      BooleanValue: function BooleanValue(_ref11) {
        var value = _ref11.value;
        return value ? "true" : "false";
      },
      NullValue: function NullValue() {
        return "null";
      },
      EnumValue: function EnumValue(_ref12) {
        var value = _ref12.value;
        return value;
      },
      ListValue: function ListValue(_ref13) {
        var values = _ref13.values;
        return "[" + join(values, ", ") + "]";
      },
      ObjectValue: function ObjectValue(_ref14) {
        var fields = _ref14.fields;
        return "{" + join(fields, ", ") + "}";
      },
      ObjectField: function ObjectField(_ref15) {
        var name = _ref15.name, value = _ref15.value;
        return name + ": " + value;
      },
      Directive: function Directive(_ref16) {
        var name = _ref16.name, args = _ref16.arguments;
        return "@" + name + wrap("(", join(args, ", "), ")");
      },
      NamedType: function NamedType(_ref17) {
        var name = _ref17.name;
        return name;
      },
      ListType: function ListType(_ref18) {
        var type = _ref18.type;
        return "[" + type + "]";
      },
      NonNullType: function NonNullType(_ref19) {
        var type = _ref19.type;
        return type + "!";
      },
      SchemaDefinition: function SchemaDefinition(_ref20) {
        var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
        return join(["schema", join(directives, " "), block(operationTypes)], " ");
      },
      OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
        var operation = _ref21.operation, type = _ref21.type;
        return operation + ": " + type;
      },
      ScalarTypeDefinition: addDescription(function(_ref22) {
        var name = _ref22.name, directives = _ref22.directives;
        return join(["scalar", name, join(directives, " ")], " ");
      }),
      ObjectTypeDefinition: addDescription(function(_ref23) {
        var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
        return join(["type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
      }),
      FieldDefinition: addDescription(function(_ref24) {
        var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
        return name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "));
      }),
      InputValueDefinition: addDescription(function(_ref25) {
        var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
        return join([name + ": " + type, wrap("= ", defaultValue), join(directives, " ")], " ");
      }),
      InterfaceTypeDefinition: addDescription(function(_ref26) {
        var name = _ref26.name, directives = _ref26.directives, fields = _ref26.fields;
        return join(["interface", name, join(directives, " "), block(fields)], " ");
      }),
      UnionTypeDefinition: addDescription(function(_ref27) {
        var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
        return join(["union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
      }),
      EnumTypeDefinition: addDescription(function(_ref28) {
        var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
        return join(["enum", name, join(directives, " "), block(values)], " ");
      }),
      EnumValueDefinition: addDescription(function(_ref29) {
        var name = _ref29.name, directives = _ref29.directives;
        return join([name, join(directives, " ")], " ");
      }),
      InputObjectTypeDefinition: addDescription(function(_ref30) {
        var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
        return join(["input", name, join(directives, " "), block(fields)], " ");
      }),
      DirectiveDefinition: addDescription(function(_ref31) {
        var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
        return "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
      }),
      SchemaExtension: function SchemaExtension(_ref32) {
        var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
        return join(["extend schema", join(directives, " "), block(operationTypes)], " ");
      },
      ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
        var name = _ref33.name, directives = _ref33.directives;
        return join(["extend scalar", name, join(directives, " ")], " ");
      },
      ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
        var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
        return join(["extend type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
      },
      InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
        var name = _ref35.name, directives = _ref35.directives, fields = _ref35.fields;
        return join(["extend interface", name, join(directives, " "), block(fields)], " ");
      },
      UnionTypeExtension: function UnionTypeExtension(_ref36) {
        var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
        return join(["extend union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
      },
      EnumTypeExtension: function EnumTypeExtension(_ref37) {
        var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
        return join(["extend enum", name, join(directives, " "), block(values)], " ");
      },
      InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
        var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
        return join(["extend input", name, join(directives, " "), block(fields)], " ");
      }
    };
    function addDescription(cb) {
      return function(node) {
        return join([node.description, cb(node)], "\n");
      };
    }
    function join(maybeArray, separator) {
      return maybeArray ? maybeArray.filter(function(x) {
        return x;
      }).join(separator || "") : "";
    }
    function block(array) {
      return array && array.length !== 0 ? "{\n" + indent(join(array, "\n")) + "\n}" : "";
    }
    function wrap(start, maybeString, end) {
      return maybeString ? start + maybeString + (end || "") : "";
    }
    function indent(maybeString) {
      return maybeString && "  " + maybeString.replace(/\n/g, "\n  ");
    }
    function isMultiline(string) {
      return string.indexOf("\n") !== -1;
    }
    function hasMultilineItems(maybeArray) {
      return maybeArray && maybeArray.some(isMultiline);
    }
  }
});

// node_modules/graphql/language/predicates.js
var require_predicates = __commonJS({
  "node_modules/graphql/language/predicates.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDefinitionNode = isDefinitionNode2;
    exports.isExecutableDefinitionNode = isExecutableDefinitionNode2;
    exports.isSelectionNode = isSelectionNode2;
    exports.isValueNode = isValueNode2;
    exports.isTypeNode = isTypeNode2;
    exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode2;
    exports.isTypeDefinitionNode = isTypeDefinitionNode2;
    exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode2;
    exports.isTypeExtensionNode = isTypeExtensionNode2;
    var _kinds = require_kinds();
    function isDefinitionNode2(node) {
      return isExecutableDefinitionNode2(node) || isTypeSystemDefinitionNode2(node) || isTypeSystemExtensionNode2(node);
    }
    function isExecutableDefinitionNode2(node) {
      return node.kind === _kinds.Kind.OPERATION_DEFINITION || node.kind === _kinds.Kind.FRAGMENT_DEFINITION;
    }
    function isSelectionNode2(node) {
      return node.kind === _kinds.Kind.FIELD || node.kind === _kinds.Kind.FRAGMENT_SPREAD || node.kind === _kinds.Kind.INLINE_FRAGMENT;
    }
    function isValueNode2(node) {
      return node.kind === _kinds.Kind.VARIABLE || node.kind === _kinds.Kind.INT || node.kind === _kinds.Kind.FLOAT || node.kind === _kinds.Kind.STRING || node.kind === _kinds.Kind.BOOLEAN || node.kind === _kinds.Kind.NULL || node.kind === _kinds.Kind.ENUM || node.kind === _kinds.Kind.LIST || node.kind === _kinds.Kind.OBJECT;
    }
    function isTypeNode2(node) {
      return node.kind === _kinds.Kind.NAMED_TYPE || node.kind === _kinds.Kind.LIST_TYPE || node.kind === _kinds.Kind.NON_NULL_TYPE;
    }
    function isTypeSystemDefinitionNode2(node) {
      return node.kind === _kinds.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode2(node) || node.kind === _kinds.Kind.DIRECTIVE_DEFINITION;
    }
    function isTypeDefinitionNode2(node) {
      return node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION;
    }
    function isTypeSystemExtensionNode2(node) {
      return node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode2(node);
    }
    function isTypeExtensionNode2(node) {
      return node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
    }
  }
});

// node_modules/graphql/language/index.js
var require_language = __commonJS({
  "node_modules/graphql/language/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Source", {
      enumerable: true,
      get: function get() {
        return _source.Source;
      }
    });
    Object.defineProperty(exports, "getLocation", {
      enumerable: true,
      get: function get() {
        return _location.getLocation;
      }
    });
    Object.defineProperty(exports, "printLocation", {
      enumerable: true,
      get: function get() {
        return _printLocation.printLocation;
      }
    });
    Object.defineProperty(exports, "printSourceLocation", {
      enumerable: true,
      get: function get() {
        return _printLocation.printSourceLocation;
      }
    });
    Object.defineProperty(exports, "Kind", {
      enumerable: true,
      get: function get() {
        return _kinds.Kind;
      }
    });
    Object.defineProperty(exports, "TokenKind", {
      enumerable: true,
      get: function get() {
        return _tokenKind.TokenKind;
      }
    });
    Object.defineProperty(exports, "createLexer", {
      enumerable: true,
      get: function get() {
        return _lexer.createLexer;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function get() {
        return _parser.parse;
      }
    });
    Object.defineProperty(exports, "parseValue", {
      enumerable: true,
      get: function get() {
        return _parser.parseValue;
      }
    });
    Object.defineProperty(exports, "parseType", {
      enumerable: true,
      get: function get() {
        return _parser.parseType;
      }
    });
    Object.defineProperty(exports, "print", {
      enumerable: true,
      get: function get() {
        return _printer.print;
      }
    });
    Object.defineProperty(exports, "visit", {
      enumerable: true,
      get: function get() {
        return _visitor.visit;
      }
    });
    Object.defineProperty(exports, "visitInParallel", {
      enumerable: true,
      get: function get() {
        return _visitor.visitInParallel;
      }
    });
    Object.defineProperty(exports, "visitWithTypeInfo", {
      enumerable: true,
      get: function get() {
        return _visitor.visitWithTypeInfo;
      }
    });
    Object.defineProperty(exports, "getVisitFn", {
      enumerable: true,
      get: function get() {
        return _visitor.getVisitFn;
      }
    });
    Object.defineProperty(exports, "BREAK", {
      enumerable: true,
      get: function get() {
        return _visitor.BREAK;
      }
    });
    Object.defineProperty(exports, "isDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isExecutableDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isExecutableDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isSelectionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isSelectionNode;
      }
    });
    Object.defineProperty(exports, "isValueNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isValueNode;
      }
    });
    Object.defineProperty(exports, "isTypeNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeSystemDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemExtensionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeSystemExtensionNode;
      }
    });
    Object.defineProperty(exports, "isTypeExtensionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeExtensionNode;
      }
    });
    Object.defineProperty(exports, "DirectiveLocation", {
      enumerable: true,
      get: function get() {
        return _directiveLocation.DirectiveLocation;
      }
    });
    var _source = require_source();
    var _location = require_location();
    var _printLocation = require_printLocation();
    var _kinds = require_kinds();
    var _tokenKind = require_tokenKind();
    var _lexer = require_lexer();
    var _parser = require_parser();
    var _printer = require_printer();
    var _visitor = require_visitor();
    var _predicates = require_predicates();
    var _directiveLocation = require_directiveLocation();
  }
});

// node_modules/graphql/error/locatedError.js
var require_locatedError = __commonJS({
  "node_modules/graphql/error/locatedError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.locatedError = locatedError2;
    var _GraphQLError = require_GraphQLError();
    function locatedError2(originalError, nodes, path) {
      if (originalError && Array.isArray(originalError.path)) {
        return originalError;
      }
      return new _GraphQLError.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
    }
  }
});

// node_modules/graphql/error/formatError.js
var require_formatError = __commonJS({
  "node_modules/graphql/error/formatError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatError = formatError2;
    var _devAssert = _interopRequireDefault(require_devAssert());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function formatError2(error) {
      error || (0, _devAssert.default)(0, "Received null or undefined error.");
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

// node_modules/graphql/error/index.js
var require_error = __commonJS({
  "node_modules/graphql/error/index.js"(exports) {
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
    Object.defineProperty(exports, "printError", {
      enumerable: true,
      get: function get() {
        return _GraphQLError.printError;
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
    Object.defineProperty(exports, "formatError", {
      enumerable: true,
      get: function get() {
        return _formatError.formatError;
      }
    });
    var _GraphQLError = require_GraphQLError();
    var _syntaxError = require_syntaxError();
    var _locatedError = require_locatedError();
    var _formatError = require_formatError();
  }
});

// node_modules/graphql/index.mjs
var import_language = __toModule(require_language());
var import_error = __toModule(require_error());

// src/GraphQLAPI.ts
import {
  Amplify,
  ConsoleLogger as Logger,
  Constants,
  Credentials,
  INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
import PubSub from "http://localhost:8080/packages/pubsub/4.1.14/pubsub-esm.js";
import Auth from "http://localhost:8080/packages/auth/4.3.12/auth-esm.js";
import Cache from "http://localhost:8080/packages/cache/4.0.24/cache-esm.js";

// src/types/index.ts
var GRAPHQL_AUTH_MODE;
(function(GRAPHQL_AUTH_MODE2) {
  GRAPHQL_AUTH_MODE2["API_KEY"] = "API_KEY";
  GRAPHQL_AUTH_MODE2["AWS_IAM"] = "AWS_IAM";
  GRAPHQL_AUTH_MODE2["OPENID_CONNECT"] = "OPENID_CONNECT";
  GRAPHQL_AUTH_MODE2["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
  GRAPHQL_AUTH_MODE2["AWS_LAMBDA"] = "AWS_LAMBDA";
})(GRAPHQL_AUTH_MODE || (GRAPHQL_AUTH_MODE = {}));
var GraphQLAuthError;
(function(GraphQLAuthError2) {
  GraphQLAuthError2["NO_API_KEY"] = "No api-key configured";
  GraphQLAuthError2["NO_CURRENT_USER"] = "No current user";
  GraphQLAuthError2["NO_CREDENTIALS"] = "No credentials";
  GraphQLAuthError2["NO_FEDERATED_JWT"] = "No federated jwt";
  GraphQLAuthError2["NO_AUTH_TOKEN"] = "No auth token specified";
})(GraphQLAuthError || (GraphQLAuthError = {}));

// src/GraphQLAPI.ts
import { RestClient } from "http://localhost:8080/packages/api-rest/2.0.22/api-rest-esm.js";
var USER_AGENT_HEADER = "x-amz-user-agent";
var logger = new Logger("GraphQLAPI");
var graphqlOperation = (query, variables = {}, authToken) => ({
  query,
  variables,
  authToken
});
var GraphQLAPIClass = class {
  constructor(options) {
    this._api = null;
    this.Auth = Auth;
    this.Cache = Cache;
    this.Credentials = Credentials;
    this._options = options;
    logger.debug("API Options", this._options);
  }
  getModuleName() {
    return "GraphQLAPI";
  }
  configure(options) {
    const { API = {}, ...otherOptions } = options || {};
    let opt = { ...otherOptions, ...API };
    logger.debug("configure GraphQL API", { opt });
    if (opt["aws_project_region"]) {
      opt = Object.assign({}, opt, {
        region: opt["aws_project_region"],
        header: {}
      });
    }
    if (typeof opt.graphql_headers !== "undefined" && typeof opt.graphql_headers !== "function") {
      logger.warn("graphql_headers should be a function");
      opt.graphql_headers = void 0;
    }
    this._options = Object.assign({}, this._options, opt);
    this.createInstance();
    return this._options;
  }
  createInstance() {
    logger.debug("create Rest instance");
    if (this._options) {
      this._api = new RestClient(this._options);
      this._api.Credentials = this.Credentials;
      return true;
    } else {
      return Promise.reject("API not configured");
    }
  }
  async _headerBasedAuth(defaultAuthenticationType, additionalHeaders = {}) {
    const {
      aws_appsync_authenticationType,
      aws_appsync_apiKey: apiKey
    } = this._options;
    const authenticationType = defaultAuthenticationType || aws_appsync_authenticationType || "AWS_IAM";
    let headers = {};
    switch (authenticationType) {
      case "API_KEY":
        if (!apiKey) {
          throw new Error(GraphQLAuthError.NO_API_KEY);
        }
        headers = {
          Authorization: null,
          "X-Api-Key": apiKey
        };
        break;
      case "AWS_IAM":
        const credentialsOK = await this._ensureCredentials();
        if (!credentialsOK) {
          throw new Error(GraphQLAuthError.NO_CREDENTIALS);
        }
        break;
      case "OPENID_CONNECT":
        try {
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
            throw new Error(GraphQLAuthError.NO_FEDERATED_JWT);
          }
          headers = {
            Authorization: token
          };
        } catch (e) {
          throw new Error(GraphQLAuthError.NO_CURRENT_USER);
        }
        break;
      case "AMAZON_COGNITO_USER_POOLS":
        try {
          const session = await this.Auth.currentSession();
          headers = {
            Authorization: session.getAccessToken().getJwtToken()
          };
        } catch (e) {
          throw new Error(GraphQLAuthError.NO_CURRENT_USER);
        }
        break;
      case "AWS_LAMBDA":
        if (!additionalHeaders.Authorization) {
          throw new Error(GraphQLAuthError.NO_AUTH_TOKEN);
        }
        headers = {
          Authorization: additionalHeaders.Authorization
        };
        break;
      default:
        headers = {
          Authorization: null
        };
        break;
    }
    return headers;
  }
  getGraphqlOperationType(operation) {
    const doc = (0, import_language.parse)(operation);
    const definitions = doc.definitions;
    const [{ operation: operationType }] = definitions;
    return operationType;
  }
  graphql({ query: paramQuery, variables = {}, authMode, authToken }, additionalHeaders) {
    const query = typeof paramQuery === "string" ? (0, import_language.parse)(paramQuery) : (0, import_language.parse)((0, import_language.print)(paramQuery));
    const [operationDef = {}] = query.definitions.filter((def) => def.kind === "OperationDefinition");
    const {
      operation: operationType
    } = operationDef;
    const headers = additionalHeaders || {};
    if (authToken) {
      headers.Authorization = authToken;
    }
    switch (operationType) {
      case "query":
      case "mutation":
        const cancellableToken = this._api.getCancellableToken();
        const initParams = { cancellableToken };
        const responsePromise = this._graphql({ query, variables, authMode }, headers, initParams);
        this._api.updateRequestToBeCancellable(responsePromise, cancellableToken);
        return responsePromise;
      case "subscription":
        return this._graphqlSubscribe({ query, variables, authMode }, headers);
    }
    throw new Error(`invalid operation type: ${operationType}`);
  }
  async _graphql({ query, variables, authMode }, additionalHeaders = {}, initParams = {}) {
    if (!this._api) {
      await this.createInstance();
    }
    const {
      aws_appsync_region: region,
      aws_appsync_graphqlEndpoint: appSyncGraphqlEndpoint,
      graphql_headers = () => ({}),
      graphql_endpoint: customGraphqlEndpoint,
      graphql_endpoint_iam_region: customEndpointRegion
    } = this._options;
    const headers = {
      ...!customGraphqlEndpoint && await this._headerBasedAuth(authMode, additionalHeaders),
      ...customGraphqlEndpoint && (customEndpointRegion ? await this._headerBasedAuth(authMode, additionalHeaders) : { Authorization: null }),
      ...await graphql_headers({ query, variables }),
      ...additionalHeaders,
      ...!customGraphqlEndpoint && {
        [USER_AGENT_HEADER]: Constants.userAgent
      }
    };
    const body = {
      query: (0, import_language.print)(query),
      variables
    };
    const init = Object.assign({
      headers,
      body,
      signerServiceInfo: {
        service: !customGraphqlEndpoint ? "appsync" : "execute-api",
        region: !customGraphqlEndpoint ? region : customEndpointRegion
      }
    }, initParams);
    const endpoint = customGraphqlEndpoint || appSyncGraphqlEndpoint;
    if (!endpoint) {
      const error = new import_error.GraphQLError("No graphql endpoint provided.");
      throw {
        data: {},
        errors: [error]
      };
    }
    let response;
    try {
      response = await this._api.post(endpoint, init);
    } catch (err) {
      if (this._api.isCancel(err)) {
        throw err;
      }
      response = {
        data: {},
        errors: [new import_error.GraphQLError(err.message, null, null, null, null, err)]
      };
    }
    const { errors } = response;
    if (errors && errors.length) {
      throw response;
    }
    return response;
  }
  isCancel(error) {
    return this._api.isCancel(error);
  }
  cancel(request, message) {
    return this._api.cancel(request, message);
  }
  _graphqlSubscribe({
    query,
    variables,
    authMode: defaultAuthenticationType,
    authToken
  }, additionalHeaders = {}) {
    const {
      aws_appsync_region: region,
      aws_appsync_graphqlEndpoint: appSyncGraphqlEndpoint,
      aws_appsync_authenticationType,
      aws_appsync_apiKey: apiKey,
      graphql_headers = () => ({})
    } = this._options;
    const authenticationType = defaultAuthenticationType || aws_appsync_authenticationType || "AWS_IAM";
    if (PubSub && typeof PubSub.subscribe === "function") {
      return PubSub.subscribe("", {
        provider: INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER,
        appSyncGraphqlEndpoint,
        authenticationType,
        apiKey,
        query: (0, import_language.print)(query),
        region,
        variables,
        graphql_headers,
        additionalHeaders,
        authToken
      });
    } else {
      logger.debug("No pubsub module applied for subscription");
      throw new Error("No pubsub module applied for subscription");
    }
  }
  _ensureCredentials() {
    return this.Credentials.get().then((credentials) => {
      if (!credentials)
        return false;
      const cred = this.Credentials.shear(credentials);
      logger.debug("set credentials for api", cred);
      return true;
    }).catch((err) => {
      logger.warn("ensure credentials error", err);
      return false;
    });
  }
};
var GraphQLAPI = new GraphQLAPIClass(null);
Amplify.register(GraphQLAPI);

// src/index.ts
var src_default = GraphQLAPI;
export {
  GRAPHQL_AUTH_MODE,
  GraphQLAPI,
  GraphQLAPIClass,
  GraphQLAuthError,
  src_default as default,
  graphqlOperation
};
