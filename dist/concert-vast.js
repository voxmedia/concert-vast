(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['ConcertVast'] = factory();
  else root['ConcertVast'] = factory();
})(window, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './node_modules/@babel/runtime-corejs2/core-js/array/from.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/array/from.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/object/assign.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/object/assign.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/object/values.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/object/values.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/parse-int.js':
        /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/parse-int.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/promise.js':
        /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/promise.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/array/from.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\n__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/array/from.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/object/assign.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/object/assign.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/object/values.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/object/values.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/parse-int.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseInt;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/parse-int.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/promise.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");\n__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\n__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");\n__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");\n__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");\n__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/promise.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_a-function.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_a-function.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_add-to-unscopables.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_add-to-unscopables.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_an-instance.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_an-instance.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_an-object.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + \' is not an object!\');\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_an-object.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_array-includes.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_array-includes.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_classof.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_classof.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_cof.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_cof.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_core.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_core.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_create-property.js':
        /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_create-property.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_ctx.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_ctx.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_defined.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError("Can\'t call method on  " + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_defined.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_descriptors.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_descriptors.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_dom-create.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;\n// typeof document.createElement is \'object\' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_dom-create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_enum-bug-keys.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_enum-bug-keys.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_export.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar PROTOTYPE = \'prototype\';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != \'function\' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == \'function\' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_export.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_fails.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_fails.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_for-of.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != \'function\') throw TypeError(iterable + \' is not iterable!\');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_for-of.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_global.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_global.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_has.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_has.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_hide.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_hide.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_html.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_html.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_ie8-dom-define.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")(\'div\'), \'a\', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_ie8-dom-define.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_invoke.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_invoke.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iobject.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iobject.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_is-array-iter.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_is-array-iter.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_is-object.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_is-object.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iter-call.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator[\'return\'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iter-call.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iter-create.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + \' Iterator\');\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iter-create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iter-define.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\');\nvar BUGGY = !([].keys && \'next\' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = \'@@iterator\';\nvar KEYS = \'keys\';\nvar VALUES = \'values\';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + \' Iterator\';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod(\'entries\') : undefined;\n  var $anyNative = NAME == \'Array\' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != \'function\') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iter-define.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iter-detect.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iter-detect.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iter-step.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iter-step.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_iterators.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = {};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_iterators.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_library.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = true;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_library.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_microtask.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == \'process\';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode(\'\');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_microtask.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_new-promise-capability.js':
        /*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError(\'Bad Promise constructor\');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_new-promise-capability.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-assign.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");\nvar pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = \'abcdefghijklmnopqrst\';\n  A[S] = 7;\n  K.split(\'\').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join(\'\') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-assign.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-create.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-create.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-dp.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if (\'get\' in Attributes || \'set\' in Attributes) throw TypeError(\'Accessors not supported!\');\n  if (\'value\' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-dp.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-dps.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-dps.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-gops.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-gops.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-gpo.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")(\'IE_PROTO\');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == \'function\' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-gpo.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-keys-internal.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")(\'IE_PROTO\');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don\'t enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-keys-internal.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-keys.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-keys.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-pie.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-pie.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-to-array.js':
        /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-to-array.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_parse-int.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + \'08\') !== 8 || $parseInt(ws + \'0x16\') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_parse-int.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_perform.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_perform.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_promise-resolve.js':
        /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_promise-resolve.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_property-desc.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_property-desc.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_redefine-all.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_redefine-all.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_redefine.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_redefine.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_set-species.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\nvar SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'species\');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == \'function\' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_set-species.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_set-to-string-tag.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'toStringTag\');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_set-to-string-tag.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_shared-key.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")(\'keys\');\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_shared-key.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_shared.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_shared.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_species-constructor.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\nvar SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'species\');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_species-constructor.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_string-at.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? \'\' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_string-at.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_string-trim.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/library/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_string-trim.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_string-ws.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_string-ws.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_task.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_task.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_to-absolute-index.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_to-absolute-index.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_to-integer.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_to-integer.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_to-iobject.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_to-iobject.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_to-length.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_to-length.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_to-object.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_to-object.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_to-primitive.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_to-primitive.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_uid.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_uid.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_user-agent.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || \'\';\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_user-agent.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_wks.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")(\'wks\');\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");\nvar Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;\nvar USE_SYMBOL = typeof Symbol == \'function\';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)(\'Symbol.\' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_wks.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/core.get-iterator-method.js':
        /*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\');\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");\nmodule.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it[\'@@iterator\']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/core.get-iterator-method.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.array.from.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");\nvar createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), \'Array\', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == \'function\' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn\'t iterable or it\'s array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.array.from.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.array.iterator.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.array.iterator.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.object.assign.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n\n$export($export.S + $export.F, \'Object\', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.object.assign.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.object.to-string.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.object.to-string.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.parse-int.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.parse-int.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.promise.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");\nvar forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");\nvar task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");\nvar perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");\nvar PROMISE = \'Promise\';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || \'\';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == \'process\';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'species\')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == \'function\')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can\'t detect it synchronously, so just check versions\n      && v8.indexOf(\'6.6\') !== 0\n      && userAgent.indexOf(\'Chrome/66\') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == \'function\' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError(\'Promise-chain cycle\'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can\'t use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit(\'unhandledRejection\', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error(\'Unhandled promise rejection\', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit(\'rejectionHandled\', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError("Promise can\'t be resolved itself");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, \'_h\');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == \'function\' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == \'function\' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    \'catch\': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {\n  $Promise.all(iter)[\'catch\'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.promise.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.string.iterator.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, \'String\', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.string.iterator.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.object.values.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);\n\n$export($export.S, \'Object\', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.object.values.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.promise.finally.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");\n\n$export($export.P + $export.R, \'Promise\', { \'finally\': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == \'function\';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.promise.finally.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.promise.try.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");\nvar perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");\n\n$export($export.S, \'Promise\', { \'try\': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.promise.try.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/web.dom.iterable.js':
        /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/web.dom.iterable.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_a-function.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_a-function.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_add-to-unscopables.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'unscopables\');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_add-to-unscopables.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_an-object.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + \' is not an object!\');\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_an-object.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-includes.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_array-includes.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_cof.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_cof.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_core.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_core.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_ctx.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_ctx.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_defined.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError("Can\'t call method on  " + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_defined.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_descriptors.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_descriptors.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_dom-create.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;\n// typeof document.createElement is \'object\' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_dom-create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_enum-bug-keys.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_enum-bug-keys.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_export.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");\nvar PROTOTYPE = \'prototype\';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == \'function\' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_export.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_fails.js':
        /*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_fails.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_function-to-string.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")(\'native-function-to-string\', Function.toString);\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_function-to-string.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_global.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_global.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_has.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_has.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_hide.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_hide.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_html.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_html.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_ie8-dom-define.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")(\'div\'), \'a\', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_ie8-dom-define.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_iobject.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_iobject.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_is-object.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_is-object.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_iter-create.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'iterator\'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + \' Iterator\');\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_iter-create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_iter-define.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'iterator\');\nvar BUGGY = !([].keys && \'next\' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = \'@@iterator\';\nvar KEYS = \'keys\';\nvar VALUES = \'values\';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + \' Iterator\';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod(\'entries\') : undefined;\n  var $anyNative = NAME == \'Array\' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != \'function\') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_iter-define.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_iter-step.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_iter-step.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_iterators.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = {};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_iterators.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_library.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = false;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_library.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-create.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-create.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-dp.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if (\'get\' in Attributes || \'set\' in Attributes) throw TypeError(\'Accessors not supported!\');\n  if (\'value\' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-dp.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-dps.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-dps.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gpo.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")(\'IE_PROTO\');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == \'function\' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-gpo.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-keys-internal.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")(\'IE_PROTO\');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don\'t enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-keys-internal.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-keys.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-keys.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_property-desc.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_property-desc.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_redefine.js':
        /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_redefine.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_set-to-string-tag.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'toStringTag\');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_set-to-string-tag.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_shared-key.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")(\'keys\');\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_shared-key.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_shared.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_shared.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-absolute-index.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_to-absolute-index.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-integer.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_to-integer.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-iobject.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_to-iobject.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-length.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_to-length.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-object.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_to-object.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-primitive.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_to-primitive.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_uid.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_uid.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_wks.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")(\'wks\');\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");\nvar Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;\nvar USE_SYMBOL = typeof Symbol == \'function\';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)(\'Symbol.\' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_wks.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.iterator.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.iterator.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/web.dom.iterable.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");\nvar wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");\nvar ITERATOR = wks(\'iterator\');\nvar TO_STRING_TAG = wks(\'toStringTag\');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/web.dom.iterable.js?'
          );

          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_vast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/vast */ "./src/lib/vast.js");\n\n/* harmony default export */ __webpack_exports__["default"] = (_lib_vast__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://ConcertVast/./src/index.js?'
          );

          /***/
        },

      /***/ './src/lib/applications/video_element.js':
        /*!***********************************************!*\
  !*** ./src/lib/applications/video_element.js ***!
  \***********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoElement; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ \"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ \"./node_modules/@babel/runtime-corejs2/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _quartile_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quartile_support */ \"./src/lib/quartile_support.js\");\n\n\n\nconst EVENT_MAPPING = {\n  muted: 'mute',\n  pause: 'pause'\n};\nconst VIDEO_CONTROLS_HEIGHT = 50;\nconst VAST_LOADED_CLASS = 'vast-running';\nconst VAST_PLAYING_CLASS = 'vast-playing';\nconst VAST_DELAYED_ATTRIBUTE = 'vast-delayed-src';\nconst DEFAULT_OPTIONS = {\n  autoplay: false,\n  muted: true,\n  restoreOriginalVideoOnComplete: true\n};\nclass VideoElement {\n  constructor(_ref) {\n    let {\n      vast,\n      videoElement\n    } = _ref;\n    this.vast = vast;\n    this.videoElement = videoElement;\n    this.previousVolume = this.videoElement.volume;\n    this.quartileSupport = new _quartile_support__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this._vastPresented = null;\n    this.restoreVideoPlayer = false;\n    this.autoplay = false;\n    this.muted = true;\n  }\n  applyAsPreroll() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    options = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, DEFAULT_OPTIONS, options);\n    this.autoplay = options.autoplay;\n    this.muted = options.muted;\n    this.restoreVideoPlayer = options.restoreOriginalVideoOnComplete;\n    this._vastPresented = true;\n    this.setInitialVolume();\n    this.addClassToVideo();\n    this.pauseExistingVideoSources();\n    this.setupQuartileSupport();\n    this.setupVideoEventListeners();\n    this.setupImpressions();\n    this.loadVastVideo();\n    if (this.autoplay) {\n      this.playVideo();\n    }\n  }\n  applyAsPrimary() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.applyAsPreroll(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({\n      restoreOriginalVideoOnComplete: false\n    }, options));\n  }\n\n  // private\n\n  pauseExistingVideoSources() {\n    _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.videoElement.querySelectorAll('source')).forEach(n => {\n      n.setAttribute(VAST_DELAYED_ATTRIBUTE, n.getAttribute('src'));\n      n.setAttribute('src', null);\n    });\n  }\n  setupVideoEventListeners() {\n    // handle mute support\n    this.videoElement.addEventListener('volumechange', this.muteObserver.bind(this));\n    for (const nativeEventName in EVENT_MAPPING) {\n      this.videoElement.addEventListener(nativeEventName, () => {\n        if (!this.vastPresented()) return;\n        this.vast.addImpressionTrackingImagesFor(EVENT_MAPPING[nativeEventName]);\n      });\n    }\n    this.videoElement.addEventListener('timeupdate', () => {\n      if (!this.vastPresented()) return;\n      this.quartileSupport.setCurrentTime(this.videoElement.currentTime);\n    });\n    this.videoElement.addEventListener('play', () => {\n      if (!this.vastPresented()) return;\n      this.videoElement.classList.add(VAST_PLAYING_CLASS);\n    });\n    this.videoElement.addEventListener('ended', this.vastVideoEndedObserver.bind(this));\n    this.videoElement.addEventListener('click', this.clickObserver.bind(this));\n    this.videoElement.addEventListener('loadedmetadata', this.updateQuartileDuration.bind(this));\n    this.videoElement.addEventListener('durationchange', this.updateQuartileDuration.bind(this));\n    document.addEventListener('fullscreenchange', this.fullscreenObserver.bind(this));\n    document.addEventListener('webkitfullscreenchange', this.fullscreenObserver.bind(this));\n  }\n  loadVastVideo() {\n    const bestVideo = this.vast.bestVideo({\n      height: this.videoElement.clientHeight,\n      width: this.videoElement.clientWidth\n    });\n    const videoSource = document.createElement('source');\n    videoSource.setAttribute('src', bestVideo.url());\n    videoSource.setAttribute('vast-added', true);\n    videoSource.setAttribute('type', bestVideo.mimeType());\n    this.videoElement.appendChild(videoSource);\n    this.videoElement.load();\n  }\n  updateQuartileDuration() {\n    this.quartileSupport.setDuration(this.videoElement.duration);\n  }\n  addClassToVideo() {\n    this.videoElement.classList.add(VAST_LOADED_CLASS);\n  }\n  setupImpressions() {\n    this.vast.addImpressionUrls();\n  }\n  vastVideoEndedObserver() {\n    if (!this.vastPresented()) return;\n    this.videoElement.classList.remove(VAST_PLAYING_CLASS);\n    if (!this.restoreVideoPlayer) return;\n    this.videoElement.classList.remove(VAST_LOADED_CLASS);\n    this._vastPresented = false;\n    _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.videoElement.querySelectorAll('source[vast-added=\"true\"]')).forEach(n => {\n      n.remove();\n    });\n    _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.videoElement.querySelectorAll('source')).forEach(n => {\n      n.setAttribute('src', n.getAttribute(VAST_DELAYED_ATTRIBUTE));\n      if (n.removeAttribute) {\n        n.removeAttribute(VAST_DELAYED_ATTRIBUTE);\n      }\n    });\n    this.videoElement.load();\n  }\n  muteObserver() {\n    if (!this.vastPresented()) return;\n    if (this.previousVolume <= 0 && this.videoElement.volume != 0) {\n      this.vast.addImpressionTrackingImagesFor('unmute');\n    } else if (this.previousVolume > 0 && this.videoElement.volume == 0 || this.videoElement.muted) {\n      this.vast.addImpressionTrackingImagesFor('mute');\n    }\n    this.previousVolume = this.videoElement.muted ? -1 : this.videoElement.volume;\n  }\n  setInitialVolume() {\n    if (this.muted) {\n      this.videoElement.muted = true;\n      this.previousVolume = -1;\n    }\n  }\n  playVideo() {\n    this.videoElement.addEventListener('canplay', () => {\n      this.videoElement.play();\n    });\n  }\n  clickObserver(clickEvent) {\n    if (!this.vastPresented()) return;\n    if (clickEvent.target) {\n      const height = clickEvent.target.clientHeight;\n      if (clickEvent.offsetY <= height - VIDEO_CONTROLS_HEIGHT && this.isBeyondFirstFrame()) {\n        this.vast.openClickthroughUrl();\n      }\n    }\n  }\n  fullscreenObserver(fullscreenEvent) {\n    if (!this.vastPresented()) return;\n    if (document.fullscreenElement || document.webkitIsFullScreen) {\n      this.vast.addImpressionTrackingImagesFor('fullscreen');\n    }\n  }\n  setupQuartileSupport() {\n    this.quartileSupport.onQuartileChange(quartile => {\n      if (!this.vastPresented()) return;\n      this.vast.addImpressionTrackingImagesFor(quartile);\n    });\n  }\n  isBeyondFirstFrame() {\n    return this.videoElement.currentTime > 0;\n  }\n  vastPresented() {\n    return this._vastPresented;\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/applications/video_element.js?"
          );

          /***/
        },

      /***/ './src/lib/applications/video_js.js':
        /*!******************************************!*\
  !*** ./src/lib/applications/video_js.js ***!
  \******************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoJs; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ \"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _quartile_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quartile_support */ \"./src/lib/quartile_support.js\");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_value */ \"./src/lib/node_value.js\");\n\n\n\nconst EVENT_MAPPING = {\n  muted: 'mute',\n  pause: 'pause'\n};\nconst VIDEO_CONTROLS_HEIGHT = 50;\nconst VAST_LOADED_CLASS = 'vast-running';\nconst VAST_PLAYING_CLASS = 'vast-playing';\nconst DEFAULT_OPTIONS = {\n  autoplay: false,\n  muted: true,\n  restoreOriginalVideoOnComplete: true\n};\nclass VideoJs {\n  constructor(_ref) {\n    let {\n      vast,\n      videoJsPlayer\n    } = _ref;\n    this.vast = vast;\n    this.videoJsPlayer = videoJsPlayer;\n    this.previousVolume = this.videoJsPlayer.volume();\n    this.previousSources = [];\n    this._vastPresented = null;\n    this.quartileSupport = new _quartile_support__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.restoreVideoPlayer = false;\n    this.autoplay = false;\n    this.muted = true;\n  }\n  applyAsPreroll() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    options = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, DEFAULT_OPTIONS, options);\n    this.autoplay = options.autoplay;\n    this.muted = options.muted;\n    this.restoreVideoPlayer = options.restoreOriginalVideoOnComplete;\n    this.includeHlsSource = options.includeHlsSource;\n    this._vastPresented = true;\n    this.setInitialVolume();\n    this.addClassToVideo();\n    this.pauseExistingVideoSources();\n    this.setupQuartileSupport();\n    this.setupVideoEventListeners();\n    this.setupImpressions();\n    this.loadVastVideo();\n    if (this.autoplay) {\n      this.autoPlayVideo();\n    }\n  }\n  applyAsPrimary() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.applyAsPreroll(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({\n      restoreOriginalVideoOnComplete: false\n    }, options));\n  }\n\n  // private\n\n  pauseExistingVideoSources() {\n    this.previousSources = this.videoJsPlayer.src();\n  }\n  setupVideoEventListeners() {\n    this.videoJsPlayer.on('volumechange', this.muteObserver.bind(this));\n    for (const nativeEventName in EVENT_MAPPING) {\n      this.videoJsPlayer.on(nativeEventName, () => {\n        if (!this.vastPresented()) return;\n        this.vast.addImpressionTrackingImagesFor(EVENT_MAPPING[nativeEventName]);\n      });\n    }\n    this.videoJsPlayer.on('timeupdate', () => {\n      if (!this.vastPresented()) return;\n      this.quartileSupport.setCurrentTime(this.videoJsPlayer.currentTime());\n    });\n    this.videoJsPlayer.on('play', () => {\n      if (!this.vastPresented()) return;\n      this.videoJsPlayer.addClass(VAST_PLAYING_CLASS);\n    });\n    this.videoJsPlayer.on('ended', this.vastVideoEndedObserver.bind(this));\n    this.videoJsPlayer.off('click');\n    this.videoJsPlayer.on('click', this.clickObserver.bind(this));\n    this.videoJsPlayer.on('loadedmetadata', this.updateQuartileDuration.bind(this));\n    this.videoJsPlayer.on('durationchange', this.updateQuartileDuration.bind(this));\n    this.videoJsPlayer.on('enterFullWindow', this.fullscreenObserver.bind(this));\n    document.addEventListener('fullscreenchange', this.fullscreenObserver.bind(this));\n    document.addEventListener('webkitfullscreenchange', this.fullscreenObserver.bind(this));\n  }\n  loadVastVideo() {\n    const bestVideos = this.vast.bestVideo({\n      height: this.videoJsPlayer.height(),\n      width: this.videoJsPlayer.width(),\n      includeHlsSource: this.includeHlsSource\n    });\n    this.videoJsPlayer.src(bestVideos.map(bestVideo => {\n      return {\n        type: bestVideo.element.getAttribute('type'),\n        src: _node_value__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromElement(bestVideo.element)\n      };\n    }));\n  }\n  updateQuartileDuration() {\n    this.quartileSupport.setDuration(this.videoJsPlayer.duration());\n  }\n  addClassToVideo() {\n    this.videoJsPlayer.addClass(VAST_LOADED_CLASS);\n  }\n  setupImpressions() {\n    this.vast.addImpressionUrls();\n  }\n  vastVideoEndedObserver() {\n    if (!this.vastPresented()) return;\n    this.videoJsPlayer.removeClass(VAST_PLAYING_CLASS);\n    if (!this.restoreVideoPlayer) return;\n    this.videoJsPlayer.removeClass(VAST_LOADED_CLASS);\n    this._vastPresented = false;\n    this.videoJsPlayer.src(this.previousSources);\n  }\n  muteObserver() {\n    if (!this.vastPresented()) return;\n    if (this.previousVolume <= 0 && this.videoJsPlayer.volume() != 0) {\n      this.vast.addImpressionTrackingImagesFor('unmute');\n    } else if (this.previousVolume > 0 && (this.videoJsPlayer.volume() == 0 || this.videoJsPlayer.muted())) {\n      this.vast.addImpressionTrackingImagesFor('mute');\n    }\n    this.previousVolume = this.videoJsPlayer.muted() ? -1 : this.videoJsPlayer.volume();\n  }\n  setInitialVolume() {\n    if (this.muted) {\n      this.videoJsPlayer.muted(true);\n      this.previousVolume = -1;\n    }\n  }\n  autoPlayVideo() {\n    this.videoJsPlayer.ready(() => {\n      this.videoJsPlayer.play().then(() => {}).catch(e => {\n        if (!this.videoJsPlayer.muted()) {\n          this.videoJsPlayer.muted(true);\n          this.autoPlayVideo();\n        }\n      });\n    });\n  }\n  clickObserver(clickEvent) {\n    if (!this.vastPresented()) return;\n    if (clickEvent.target) {\n      const height = clickEvent.target.clientHeight;\n      if (clickEvent.offsetY <= height - VIDEO_CONTROLS_HEIGHT && this.isBeyondFirstFrame()) {\n        this.vast.openClickthroughUrl();\n      }\n    }\n  }\n  fullscreenObserver() {\n    let fullscreenEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    if (!this.vastPresented()) return;\n    this.vast.addImpressionTrackingImagesFor('fullscreen');\n  }\n  setupQuartileSupport() {\n    const events = this.vast.trackingEventNamesWithOffsetPercent();\n    for (const name in events) {\n      this.quartileSupport.addEvent({\n        name: name,\n        offset: events[name]\n      });\n    }\n    this.quartileSupport.onQuartileChange(quartile => {\n      if (!this.vastPresented()) return;\n      this.vast.addImpressionTrackingImagesFor(quartile);\n    });\n  }\n  isBeyondFirstFrame() {\n    return this.videoJsPlayer.currentTime() > 0;\n  }\n  vastPresented() {\n    return this._vastPresented;\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/applications/video_js.js?"
          );

          /***/
        },

      /***/ './src/lib/node_value.js':
        /*!*******************************!*\
  !*** ./src/lib/node_value.js ***!
  \*******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeValue; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);\n\nclass NodeValue {\n  /**\n   * Returns the first TEXT or CDATA value from an XML element.\n   *\n   * @param {DOM Element} el An elemenet with a single CDATA or TEXT entity\n   */\n  static fromElement(el) {\n    if (!el) return null;\n    const matchedItem = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(el.childNodes).find(n => {\n      return (n.nodeType == Node.TEXT_NODE || n.nodeType == Node.CDATA_SECTION_NODE) && !!n.nodeValue.trim();\n    });\n    return matchedItem ? matchedItem.nodeValue.trim() : null;\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/node_value.js?'
          );

          /***/
        },

      /***/ './src/lib/quartile_support.js':
        /*!*************************************!*\
  !*** ./src/lib/quartile_support.js ***!
  \*************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuartileSupport; });\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst QUARTILES = [[0.0, 'start'], [0.25, 'firstQuartile'], [0.5, 'midpoint'], [0.75, 'thirdQuartile'], [0.99, 'complete']];\nclass QuartileSupport {\n  static quartiles() {\n    let quartiles = {};\n    QUARTILES.forEach(quart => {\n      quartiles[quart[1]] = quart[0];\n    });\n    return quartiles;\n  }\n  constructor() {\n    this.quartiles = QUARTILES.slice(0);\n    this.seenQuartiles = [];\n    this.callbacks = [];\n    this.currentTime = 0;\n    this.duration = Infinity;\n  }\n  addEvent(_ref) {\n    let {\n      name,\n      offset\n    } = _ref;\n    this.quartiles.push([offset, name]);\n  }\n  setDuration(time) {\n    if (time != 0) {\n      this.duration = time;\n    }\n    this.checkForQuartileEvent();\n  }\n  onQuartileChange(func) {\n    this.callbacks.push(func);\n  }\n  setCurrentTime(currentTime) {\n    this.currentTime = currentTime;\n    this.checkForQuartileEvent();\n  }\n\n  // private\n\n  checkForQuartileEvent() {\n    const percentComplete = this.currentTime / this.duration;\n    const matchingQuartiles = this.quartiles.filter(quartile => {\n      return quartile[0] < percentComplete;\n    });\n    matchingQuartiles.forEach(quartile => {\n      const [percent, name] = quartile;\n      if (!this.seenQuartiles.includes(percent)) {\n        this.seenQuartiles.push(percent);\n        this.quartileChangeCallback(name);\n      }\n    });\n  }\n  quartileChangeCallback(quartileName) {\n    this.callbacks.forEach(fn => fn.call(null, quartileName));\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/quartile_support.js?"
          );

          /***/
        },

      /***/ './src/lib/remote.js':
        /*!***************************!*\
  !*** ./src/lib/remote.js ***!
  \***************************/
        /*! exports provided: VastNetworkError, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VastNetworkError\", function() { return VastNetworkError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Remote; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nclass VastNetworkError extends Error {}\nclass Remote {\n  /**\n   * Fetches a remote XML Vast url. It has no knowledge of XML or the Vast structure\n   *\n   * @async\n   * @param {String} url - Where to download the XML\n   * @param {Integer} timeout - time in milleseconds to wait until for remote load\n   * @param {Function} onBandwidthUpdate - Callback when there is a new bandwidth estimate available,\n   *                                       will be be passed a number representing KB/s\n   * @returns {Promise<String>} XML Response from the url\n   */\n  static async loadUrl(_ref) {\n    let {\n      url,\n      timeout = 10000,\n      onBandwidthUpdate = () => {}\n    } = _ref;\n    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {\n      this.vastUrl = url;\n      const request = new XMLHttpRequest();\n      request.timeout = timeout;\n      let startTime;\n      request.addEventListener('load', async e => {\n        const downloadTime = new Date().getTime() - startTime;\n        const downloadSize = request.responseText.length;\n        const bandwidthEstimateInKbs = downloadSize * 8 / (downloadTime / 1000) / 1024;\n        onBandwidthUpdate(bandwidthEstimateInKbs);\n        resolve(request.response);\n      });\n      request.addEventListener('error', e => {\n        reject(new VastNetworkError(`Network Error: Request status: ${request.status}, ${request.responseText}`));\n      });\n      request.addEventListener('abort', e => {\n        reject(new VastNetworkError('Network Aborted'));\n      });\n      request.addEventListener('timeout', e => {\n        reject(new VastNetworkError(`Network Timeout: Request did not complete in ${timeout}ms`));\n      });\n      startTime = new Date().getTime();\n      request.open('GET', this.vastUrl);\n      request.send();\n    });\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/remote.js?"
          );

          /***/
        },

      /***/ './src/lib/stream_chooser.js':
        /*!***********************************!*\
  !*** ./src/lib/stream_chooser.js ***!
  \***********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StreamChooser; });\n/* harmony import */ var _supported_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supported_formats */ "./src/lib/supported_formats.js");\n\nclass StreamChooser {\n  constructor() {\n    this.videos = null;\n    this.playerWidth = 0;\n    this.playerHeight = 0;\n    this.supportedMimeTypes = Object(_supported_formats__WEBPACK_IMPORTED_MODULE_0__["supportedMimeTypes"])();\n    this.bandwidthInKbs = 0;\n  }\n  useVideosFromMediaFile(mediaFiles) {\n    this.videos = mediaFiles;\n  }\n  setPlayerDimensions(_ref) {\n    let {\n      height,\n      width\n    } = _ref;\n    this.playerHeight = height;\n    this.playerWidth = width;\n  }\n  setSupportedMimeTypes(types) {\n    this.supportedMimeTypes = types;\n  }\n  setBandwidth(bandwidthInKbs) {\n    this.bandwidthInKbs = bandwidthInKbs;\n  }\n  hlsVideo() {\n    return Object(_supported_formats__WEBPACK_IMPORTED_MODULE_0__["getHlsFormats"])(this.videos);\n  }\n  bestStandardVideo() {\n    const matchingFormats = this.videos.filter(v => this.compatibleStandardFormats(v));\n    const closestSize = matchingFormats.sort((a, b) => this.closestSized(a, b));\n    const notExceedingBandwidth = closestSize.filter(v => this.underBandwidth(v));\n    if (matchingFormats.length <= 1) return matchingFormats[0];\n    if (closestSize.length <= 1) return closestSize[0];\n    if (notExceedingBandwidth.length == 0) return closestSize[0];\n    return notExceedingBandwidth[0];\n  }\n  bestVideos() {\n    return [this.hlsVideo(), this.bestStandardVideo()].filter(Boolean);\n  }\n\n  /**\n   * Returns true of this video is playable on the device/browser\n   * Follows the filter callback interface\n   * @param {MediaElement} video\n   */\n  compatibleStandardFormats(video) {\n    return this.supportedMimeTypes.indexOf(video.mimeType()) != -1;\n  }\n\n  /**\n   * Sorts the videos interms of the closest one to the playersize\n   * This follows the sort callback interface.\n   *\n   * @param {MediaElement} a the first video in the sort params\n   * @param {MediaElement} b the second video in the sort params\n   */\n  closestSized(a, b) {\n    const aWProximity = Math.abs(this.playerWidth - a.width()) / this.playerWidth;\n    const bWProximity = Math.abs(this.playerWidth - b.width()) / this.playerWidth;\n    const aHProximity = Math.abs(this.playerHeight - a.height()) / this.playerHeight;\n    const bHProximity = Math.abs(this.playerHeight - b.height()) / this.playerHeight;\n    return aWProximity * aHProximity - bWProximity * bHProximity;\n  }\n\n  /**\n   * Returns true if the video\'s bandwidth is at or below\n   * the calculated bandwidth\n   * Conforms to the filter callback interface\n   * @param {MediaElement} video\n   */\n  underBandwidth(video) {\n    const OVERHEAD_FACTOR_FOR_BANDWIDTH_CALCULATION = 1.25;\n    return video.bitrate() <= this.bandwidthInKbs * OVERHEAD_FACTOR_FOR_BANDWIDTH_CALCULATION;\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/stream_chooser.js?'
          );

          /***/
        },

      /***/ './src/lib/supported_formats.js':
        /*!**************************************!*\
  !*** ./src/lib/supported_formats.js ***!
  \**************************************/
        /*! exports provided: getHlsFormats, supportedFormats, supportedMimeTypes, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHlsFormats", function() { return getHlsFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedFormats", function() { return supportedFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedMimeTypes", function() { return supportedMimeTypes; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);\n\nconst STANDARD_FORMATS = {\n  ogg: \'video/ogg; codecs="theora"\',\n  h264: \'video/mp4; codecs="avc1.42E01E"\',\n  webm: \'video/webm; codecs="vp8, vorbis"\',\n  vp9: \'video/webm; codecs="vp9"\'\n};\nconst HLS_FORMATS = {\n  hls: \'application/vnd.apple.mpegurl\',\n  hlsLegacy: \'application/x-mpegURL\'\n};\nfunction getHlsFormats(videos) {\n  return videos.find(v => hlsFormats(v));\n}\nfunction hlsFormats(video) {\n  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(HLS_FORMATS).indexOf(video.mimeType()) != -1;\n}\nfunction supportedFormats() {\n  let {\n    doc\n  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    doc: document\n  };\n  const v = doc.createElement(\'video\');\n  let supported = {};\n  for (const name in STANDARD_FORMATS) {\n    if (v.canPlayType(STANDARD_FORMATS[name]) === \'probably\') {\n      supported[name] = STANDARD_FORMATS[name];\n    }\n  }\n  return supported;\n}\nfunction supportedMimeTypes() {\n  let {\n    doc\n  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    doc: document\n  };\n  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(supportedFormats({\n    doc: doc\n  })).map(mimeTypeAndCode => mimeTypeAndCode.split(\';\')[0]);\n}\n/* harmony default export */ __webpack_exports__["default"] = ({\n  supportedFormats,\n  supportedMimeTypes,\n  getHlsFormats\n});\n\n//# sourceURL=webpack://ConcertVast/./src/lib/supported_formats.js?'
          );

          /***/
        },

      /***/ './src/lib/timecodes.js':
        /*!******************************!*\
  !*** ./src/lib/timecodes.js ***!
  \******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timecode; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Timecode {\n  /**\n   * Converts seconds to a three segment timecode hh:mm:ss\n   * Examples: 30 => "00:00:30"\n   *           90 => "00:01:30"\n   *\n   * @param {String|Number} maybeSeconds\n   * @returns {String} "hh:mm:ss" timecode\n   */\n  static secondsToTimecode(maybeSeconds) {\n    const seconds = Number(maybeSeconds);\n    if (isNaN(seconds) || maybeSeconds.toString().indexOf(\'%\') != -1) {\n      return null;\n    }\n    const date = new Date(null);\n    date.setSeconds(seconds);\n    return date.toISOString().substr(11, 8);\n  }\n\n  /**\n   * Converts timecode hh:mm:ss to total seconds\n   * Examples: "00:00:30" => 30\n   *           "00:10:10" => 610\n   *\n   * @param {String} timecode Timecode input\n   * @returns {Number} the number of seconds represented in the timecode\n   */\n  static timecodeToSeconds(timecode) {\n    let parts = timecode.split(\':\');\n    let seconds = 0;\n    let multiplier = 1;\n    while (parts.length > 0) {\n      seconds += multiplier * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(parts.pop(), 10);\n      multiplier *= 60;\n    }\n    return seconds;\n  }\n\n  /**\n   * Will properly format the timecode into three segment parts\n   * Example: "01:10" => "00:01:10"\n   *\n   * @param {String} code input timecode\n   * @returns {String} three segment timecode hh:mm:ss\n   */\n  static timecodeToTimecode(code) {\n    const result = this.secondsToTimecode(this.timecodeToSeconds(code));\n    return result;\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/timecodes.js?'
          );

          /***/
        },

      /***/ './src/lib/vast.js':
        /*!*************************!*\
  !*** ./src/lib/vast.js ***!
  \*************************/
        /*! exports provided: VastXMLParsingError, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VastXMLParsingError", function() { return VastXMLParsingError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vast; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vast_elements_media_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vast_elements/media_files */ "./src/lib/vast_elements/media_files.js");\n/* harmony import */ var _vast_elements_clickthrough__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vast_elements/clickthrough */ "./src/lib/vast_elements/clickthrough.js");\n/* harmony import */ var _vast_elements_impression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vast_elements/impression */ "./src/lib/vast_elements/impression.js");\n/* harmony import */ var _vast_elements_error_impression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vast_elements/error_impression */ "./src/lib/vast_elements/error_impression.js");\n/* harmony import */ var _vast_elements_tracking_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vast_elements/tracking_events */ "./src/lib/vast_elements/tracking_events.js");\n/* harmony import */ var _vast_elements_wrapper_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vast_elements/wrapper_url */ "./src/lib/vast_elements/wrapper_url.js");\n/* harmony import */ var _stream_chooser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stream_chooser */ "./src/lib/stream_chooser.js");\n/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remote */ "./src/lib/remote.js");\n/* harmony import */ var _applications_video_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./applications/video_element */ "./src/lib/applications/video_element.js");\n/* harmony import */ var _applications_video_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./applications/video_js */ "./src/lib/applications/video_js.js");\n\n\n\n\n\n\n\n\n\n\n\nclass VastXMLParsingError extends Error {}\nclass Vast {\n  constructor() {\n    let {\n      xml,\n      numberWrapperFollowsAllowed\n    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      numberWrapperFollowsAllowed: 5\n    };\n    this.vastXml = null;\n    this.vastUrl = null;\n    this.vastDocument = null;\n    this.bandwidthEstimateInKbs = 0;\n    this.wrapperFollowsRemaining = numberWrapperFollowsAllowed;\n    this.loadedElements = {\n      MediaFiles: new _vast_elements_media_files__WEBPACK_IMPORTED_MODULE_1__["default"](this),\n      Clickthrough: new _vast_elements_clickthrough__WEBPACK_IMPORTED_MODULE_2__["default"](this),\n      Impression: new _vast_elements_impression__WEBPACK_IMPORTED_MODULE_3__["default"](this),\n      ErrorImpression: new _vast_elements_error_impression__WEBPACK_IMPORTED_MODULE_4__["default"](this),\n      TrackingEvents: new _vast_elements_tracking_events__WEBPACK_IMPORTED_MODULE_5__["default"](this),\n      WrapperUrl: new _vast_elements_wrapper_url__WEBPACK_IMPORTED_MODULE_6__["default"](this)\n    };\n    if (xml) {\n      this.useXmlString(xml);\n    }\n  }\n  async useXmlString(xml) {\n    this.vastXml = xml;\n    this.vastDocument = null;\n    await this.parse();\n  }\n  bandwidth() {\n    return this.bandwidthEstimateInKbs;\n  }\n  videos() {\n    return this.loadedElements[\'MediaFiles\'].videos();\n  }\n  clickthroughUrl() {\n    return this.loadedElements[\'Clickthrough\'].clickthroughUrl();\n  }\n  openClickthroughUrl() {\n    return this.loadedElements[\'Clickthrough\'].openClickthroughUrl();\n  }\n  wrapperUrl() {\n    return this.loadedElements[\'WrapperUrl\'].wrapperUrl();\n  }\n  url() {\n    return this.vastUrl;\n  }\n  impressionUrls() {\n    return this.loadedElements[\'Impression\'].impressionUrls();\n  }\n  addImpressionUrls() {\n    let doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n    return this.loadedElements[\'Impression\'].addImpressionUrls(doc);\n  }\n  errorImpressionUrls() {\n    return this.loadedElements[\'ErrorImpression\'].impressionUrls();\n  }\n  addErrorImpressionUrls() {\n    let doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n    return this.loadedElements[\'ErrorImpression\'].addImpressionUrls(doc);\n  }\n  trackingUrlsFor(eventName) {\n    return this.loadedElements[\'TrackingEvents\'].trackingUrlsFor(eventName);\n  }\n  trackingEventNamesWithOffsets() {\n    return this.loadedElements[\'TrackingEvents\'].trackingEventNamesWithOffsets();\n  }\n  trackingEventNamesWithOffsetPercent() {\n    return this.loadedElements[\'TrackingEvents\'].trackingEventNamesWithOffsetPercent();\n  }\n  addImpressionTrackingImagesFor(eventName) {\n    let doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    return this.loadedElements[\'TrackingEvents\'].addImpressionTrackingImagesFor(eventName, doc);\n  }\n  applyToVideoElementAsPreroll(videoElement) {\n    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    const vea = new _applications_video_element__WEBPACK_IMPORTED_MODULE_9__["default"]({\n      vast: this,\n      videoElement: videoElement\n    });\n    vea.applyAsPreroll(opts);\n  }\n  applyToVideoElement(videoElement) {\n    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    const videoElApplication = new _applications_video_element__WEBPACK_IMPORTED_MODULE_9__["default"]({\n      vast: this,\n      videoElement: videoElement\n    });\n    videoElApplication.applyAsPrimary(opts);\n  }\n  applyToVideoJsAsPreroll(videoJsPlayer) {\n    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    const videoJsApplication = new _applications_video_js__WEBPACK_IMPORTED_MODULE_10__["default"]({\n      vast: this,\n      videoJsPlayer: videoJsPlayer\n    });\n    videoJsApplication.applyAsPreroll(opts);\n  }\n  applyToVideoJs(videoJsPlayer) {\n    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    const videoJsApplication = new _applications_video_js__WEBPACK_IMPORTED_MODULE_10__["default"]({\n      vast: this,\n      videoJsPlayer: videoJsPlayer\n    });\n    videoJsApplication.applyAsPrimary(opts);\n  }\n  bestVideo() {\n    let {\n      width,\n      height,\n      bandwidth,\n      mimeTypes,\n      includeHlsSource\n    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      width: 800,\n      height: 600,\n      bandwidth: null,\n      mimeTypes: null,\n      includeHlsSource: false\n    };\n    const chooser = new _stream_chooser__WEBPACK_IMPORTED_MODULE_7__["default"]();\n    chooser.useVideosFromMediaFile(this.videos());\n    chooser.setBandwidth(this.bandwidth());\n    if (bandwidth) chooser.setBandwidth(bandwidth);\n    if (mimeTypes) chooser.setSupportedMimeTypes(mimeTypes);\n    chooser.setPlayerDimensions({\n      width: width,\n      height: height\n    });\n    return includeHlsSource ? chooser.bestVideos() : chooser.bestStandardVideo();\n  }\n  async parse() {\n    if (!this.vastDocument) {\n      const parser = new DOMParser();\n      this.vastDocument = parser.parseFromString(this.vastXml, \'application/xml\');\n      if (this.vastDocument.documentElement.nodeName == \'parsererror\') {\n        throw new VastXMLParsingError(`Error parsing ${this.vastXml}. Not valid XML`);\n      } else {\n        await this.processElements();\n      }\n    }\n  }\n  async loadRemoteVast(url) {\n    let {\n      timeout\n    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n      timeout: 10000\n    };\n    this.vastUrl = url;\n    const remoteVastXml = await _remote__WEBPACK_IMPORTED_MODULE_8__["default"].loadUrl({\n      url: url,\n      timeout: timeout,\n      onBandwidthUpdate: bw => {\n        this.bandwidthEstimateInKbs = bw;\n      }\n    });\n    await this.useXmlString(remoteVastXml);\n  }\n  async processElements() {\n    _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.loadedElements).forEach(e => e.process());\n    if (this.wrapperUrl()) {\n      if (this.wrapperFollowsRemaining-- > 0) {\n        await this.loadRemoteVast(this.wrapperUrl());\n      } else {\n        this.addErrorImpressionUrls();\n        throw new _remote__WEBPACK_IMPORTED_MODULE_8__["VastNetworkError"](\'Network Error: Too Many Vast Wrapper Follows\');\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast.js?'
          );

          /***/
        },

      /***/ './src/lib/vast_elements/clickthrough.js':
        /*!***********************************************!*\
  !*** ./src/lib/vast_elements/clickthrough.js ***!
  \***********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clickthrough; });\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\nclass Clickthrough extends _vast_element_base__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  setup() {\n    this.clickthrough = null;\n  }\n  static selector() {\n    return \'Creative VideoClicks ClickThrough\';\n  }\n  onVastReady() {\n    this.clickthrough = this.elements.map(el => _node_value__WEBPACK_IMPORTED_MODULE_1__["default"].fromElement(el))[0];\n  }\n  clickthroughUrl() {\n    return this.clickthrough;\n  }\n  openClickthroughUrl() {\n    const win = window.open(this.clickthroughUrl(), \'_blank\');\n    win.focus();\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/clickthrough.js?'
          );

          /***/
        },

      /***/ './src/lib/vast_elements/error_impression.js':
        /*!***************************************************!*\
  !*** ./src/lib/vast_elements/error_impression.js ***!
  \***************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorImpression; });\n/* harmony import */ var _impression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impression */ "./src/lib/vast_elements/impression.js");\n\nclass ErrorImpression extends _impression__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  setup() {\n    this._impressionUrls = [];\n  }\n  static selector() {\n    return \'Ad Error\';\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/error_impression.js?'
          );

          /***/
        },

      /***/ './src/lib/vast_elements/impression.js':
        /*!*********************************************!*\
  !*** ./src/lib/vast_elements/impression.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Impression; });\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\nclass Impression extends _vast_element_base__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  setup() {\n    this._impressionUrls = [];\n  }\n  static selector() {\n    return \'Ad Impression\';\n  }\n  onVastReady() {\n    this._impressionUrls = this.elements.map(el => _node_value__WEBPACK_IMPORTED_MODULE_1__["default"].fromElement(el));\n  }\n  impressionUrls() {\n    return this._impressionUrls;\n  }\n  addImpressionUrls() {\n    let doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n    this.impressionUrls().forEach(url => {\n      this.addImpressionUrl(url, {\n        doc: doc,\n        name: \'impression\'\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/impression.js?'
          );

          /***/
        },

      /***/ './src/lib/vast_elements/media_files.js':
        /*!**********************************************!*\
  !*** ./src/lib/vast_elements/media_files.js ***!
  \**********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaFiles; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\n\nclass MediaFile {\n  constructor(mediaElement) {\n    this.element = mediaElement;\n  }\n  bitrate() {\n    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.element.getAttribute(\'bitrate\'), 10);\n  }\n  width() {\n    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.element.getAttribute(\'width\'), 10);\n  }\n  height() {\n    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.element.getAttribute(\'height\'), 10);\n  }\n  mimeType() {\n    return this.element.getAttribute(\'type\');\n  }\n  url() {\n    return _node_value__WEBPACK_IMPORTED_MODULE_2__["default"].fromElement(this.element);\n  }\n  isVideoType() {\n    return this.mimeType().match(/^video\\/|application\\//);\n  }\n}\nclass MediaFiles extends _vast_element_base__WEBPACK_IMPORTED_MODULE_1__["default"] {\n  // Think of this as the constructor\n  setup() {\n    this.mediaFiles = [];\n  }\n\n  // Selector to consume elements\n  static selector() {\n    return \'Creative MediaFiles MediaFile\';\n  }\n\n  // Elements available\n  onVastReady() {\n    this.mediaFiles = this.elements.map(el => {\n      return new MediaFile(el);\n    });\n  }\n\n  // Private stuff ---\n\n  videos() {\n    return this.mediaFiles.filter(v => {\n      return v.isVideoType();\n    });\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/media_files.js?'
          );

          /***/
        },

      /***/ './src/lib/vast_elements/tracking_events.js':
        /*!**************************************************!*\
  !*** ./src/lib/vast_elements/tracking_events.js ***!
  \**************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrackingEvents; });\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _timecodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timecodes */ "./src/lib/timecodes.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n/* harmony import */ var _quartile_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quartile_support */ "./src/lib/quartile_support.js");\n\n\n\n\nclass TrackingEvent {\n  constructor(_ref) {\n    let {\n      eventName,\n      url\n    } = _ref;\n    this.eventName = eventName;\n    this._url = url;\n  }\n  matches(string) {\n    return this.eventName == string;\n  }\n  name() {\n    return this.eventName;\n  }\n  offsetInSeconds(duration) {\n    const quarts = _quartile_support__WEBPACK_IMPORTED_MODULE_3__["default"].quartiles();\n    return quarts[this.eventName] * duration;\n  }\n  offsetInPercent(duration) {\n    const quarts = _quartile_support__WEBPACK_IMPORTED_MODULE_3__["default"].quartiles();\n    return quarts[this.eventName];\n  }\n  url() {\n    return this._url;\n  }\n}\nclass ProgressTrackingEvent {\n  constructor(_ref2) {\n    let {\n      offset,\n      url\n    } = _ref2;\n    this.offset = offset;\n    this._url = url;\n  }\n  matches(secondsOrTimeCodeOrPercent) {\n    return this.offset == secondsOrTimeCodeOrPercent || this.offset == _timecodes__WEBPACK_IMPORTED_MODULE_1__["default"].secondsToTimecode(secondsOrTimeCodeOrPercent) || this.offset == _timecodes__WEBPACK_IMPORTED_MODULE_1__["default"].timecodeToTimecode(secondsOrTimeCodeOrPercent);\n  }\n  name() {\n    return this.offset;\n  }\n  offsetInSeconds(duration) {\n    if (this.offset.indexOf(\'%\') != -1) {\n      return duration * (Number(this.offset.replace(\'%\', \'\')) / 100.0);\n    } else {\n      return _timecodes__WEBPACK_IMPORTED_MODULE_1__["default"].timecodeToSeconds(this.offset);\n    }\n  }\n  offsetInPercent(duration) {\n    return Math.min(1.0, this.offsetInSeconds(duration) / duration);\n  }\n  url() {\n    return this._url;\n  }\n}\nclass TrackingEvents extends _vast_element_base__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  setup() {\n    this.trackingEvents = [];\n    this.duration = undefined;\n  }\n  static selector() {\n    return \'Ad TrackingEvents Tracking, Ad Creative Duration\';\n  }\n  onVastReady() {\n    const durationValue = _node_value__WEBPACK_IMPORTED_MODULE_2__["default"].fromElement(this.elements.find(el => el.nodeName == \'Duration\'));\n    this.duration = _timecodes__WEBPACK_IMPORTED_MODULE_1__["default"].timecodeToSeconds(durationValue || \'0\');\n    this.trackingEvents = this.elements.filter(el => el.nodeName != \'Duration\').map(el => {\n      const trackingEvent = el.hasAttribute(\'offset\') ? ProgressTrackingEvent : TrackingEvent;\n      return new trackingEvent({\n        eventName: el.getAttribute(\'event\'),\n        offset: el.getAttribute(\'offset\'),\n        url: _node_value__WEBPACK_IMPORTED_MODULE_2__["default"].fromElement(el)\n      });\n    });\n  }\n  trackingUrlsFor(eventName) {\n    return this.trackingEvents.filter(t => t.matches(eventName)).map(t => t.url());\n  }\n  addImpressionTrackingImagesFor(eventName) {\n    let doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    this.trackingUrlsFor(eventName).forEach(url => {\n      this.addImpressionUrl(url, {\n        doc: doc,\n        name: eventName\n      });\n    });\n  }\n  trackingEventNamesWithOffsets() {\n    return this.trackingEvents.reduce((all, event) => {\n      const offsetSeconds = event.offsetInSeconds(this.duration);\n      if (offsetSeconds) {\n        all[event.name()] = offsetSeconds;\n      }\n      return all;\n    }, {});\n  }\n  trackingEventNamesWithOffsetPercent() {\n    return this.trackingEvents.reduce((all, event) => {\n      const offsetPercent = event.offsetInPercent(this.duration);\n      if (offsetPercent) {\n        all[event.name()] = offsetPercent;\n      }\n      return all;\n    }, {});\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/tracking_events.js?'
          );

          /***/
        },

      /***/ './src/lib/vast_elements/vast_element_base.js':
        /*!****************************************************!*\
  !*** ./src/lib/vast_elements/vast_element_base.js ***!
  \****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VastElementBase; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ \"./node_modules/@babel/runtime-corejs2/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);\n\nclass VastElementBase {\n  constructor(vastBase) {\n    this.vast = vastBase;\n    this.setup();\n    this.elements = [];\n  }\n\n  // Selector to determine applicable vast elements\n  static selector() {}\n\n  // When following Vast redirects (wrappers) should the elements\n  // be added to the existing list or should they replace the existing elements\n  // True will append\n  // False will replace\n  static appendElementsOnFollow() {\n    return true;\n  }\n\n  // Subclasses have be loaded\n  setup() {}\n\n  // Vast file has been loaded and is ready to use\n  onVastReady() {}\n\n  // Each time a vast document is loaded this method will be called\n  // and the selector method will be used to return matched elements.\n  // there by building up a collection of elements to be used by the\n  // onVastReady() function\n  //\n  //                     ┌─────────┐     ┌ ─ ─ ─ ─ ┐\n  //                     │         │\n  //                     │Vast XML │     │Vast XML │\n  //                     │   Doc   │────▶    Doc\n  //                     │         │     │         │\n  //                     │         │\n  //                     └─────────┘     └ ─ ─ ─ ─ ┘\n  //                           │               │\n  //                           │\n  //                           └───────┬ ─ ─ ─ ┘\n  //                       ┌───────────┼──┐\n  //  .───────────.        │ ┌─────────▼──┴─┐\n  // │`───────────'│       │ │ ┌────────────┴─┐\n  // │             │       │ │ │              │\n  // │Collection of│       │ │ │ VastElement  │\n  // │  Elements   │◀──────┼─┼─│    Class     │\n  // │             │       └─┤ │              │\n  // │.───────────.│         └─┤              │\n  //  `───────────'            └──────────────┘\n  //\n  //\n  process() {\n    if (!this.vast.vastDocument) return;\n    const selector = this.constructor.selector();\n    const matchedElements = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.vast.vastDocument.querySelectorAll(selector));\n    this.elements = this.constructor.appendElementsOnFollow() ? this.elements.concat(matchedElements) : matchedElements;\n    this.onVastReady();\n  }\n  addImpressionUrl(url) {\n    let {\n      doc,\n      name\n    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n      doc: document,\n      name: ''\n    };\n    const impressionImage = doc.createElement('img');\n    impressionImage.style.height = 1;\n    impressionImage.style.width = 1;\n    impressionImage.style.top = 0;\n    impressionImage.style.left = 0;\n    impressionImage.style.visibility = 'hidden';\n    impressionImage.className = 'vast-pixel';\n    impressionImage.src = url;\n    if (name) {\n      impressionImage.setAttribute('data-for', name);\n    }\n    doc.body.appendChild(impressionImage);\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/vast_element_base.js?"
          );

          /***/
        },

      /***/ './src/lib/vast_elements/wrapper_url.js':
        /*!**********************************************!*\
  !*** ./src/lib/vast_elements/wrapper_url.js ***!
  \**********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperUrl; });\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\nclass WrapperUrl extends _vast_element_base__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  setup() {\n    this.url = null;\n  }\n  static selector() {\n    return \'Ad Wrapper VASTAdTagURI\';\n  }\n  static appendElementsOnFollow() {\n    return false;\n  }\n  onVastReady() {\n    this.url = this.elements.map(el => {\n      return _node_value__WEBPACK_IMPORTED_MODULE_1__["default"].fromElement(el);\n    })[0];\n  }\n  wrapperUrl() {\n    return this.url;\n  }\n}\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/wrapper_url.js?'
          );

          /***/
        },

      /***/ 0:
        /*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");\n\n\n//# sourceURL=webpack://ConcertVast/multi_./src/index.js?'
          );

          /***/
        },

      /******/
    }
  )['default'];
});
