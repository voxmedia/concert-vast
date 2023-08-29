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

      /***/ './node_modules/@babel/runtime-corejs2/core-js/array/is-array.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/get-iterator.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/map.js':
        /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/map.js?'
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

      /***/ './node_modules/@babel/runtime-corejs2/core-js/object/create.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/object/create.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/object/define-property.js':
        /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js':
        /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js':
        /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?'
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

      /***/ './node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js':
        /*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/core-js/library/fn/reflect/construct.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/symbol.js':
        /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/symbol.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js':
        /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");\n\nfunction _arrayWithHoles(arr) {\n  if (_Array$isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js':
        /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js':
        /*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    _Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new _Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/construct.js':
        /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");\n\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");\n\nfunction isNativeReflectConstruct() {\n  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;\n  if (_Reflect$construct.sham) return false;\n  if (typeof Proxy === "function") return true;\n\n  try {\n    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction _construct(Parent, args, Class) {\n  if (isNativeReflectConstruct()) {\n    module.exports = _construct = _Reflect$construct;\n  } else {\n    module.exports = _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n      var Constructor = Function.bind.apply(Parent, a);\n      var instance = new Constructor();\n      if (Class) setPrototypeOf(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\nmodule.exports = _construct;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/construct.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/createClass.js':
        /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if ("value" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/createClass.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");\n\nvar _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");\n\nfunction _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || _Object$getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/inherits.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");\n\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== "function" && superClass !== null) {\n    throw new TypeError("Super expression must either be null or a function");\n  }\n\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/inherits.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js':
        /*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js ***!
  \*************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'function _isNativeFunction(fn) {\n  return Function.toString.call(fn).indexOf("[native code]") !== -1;\n}\n\nmodule.exports = _isNativeFunction;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i["return"] != null) _i["return"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js':
        /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js ***!
  \************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'function _nonIterableRest() {\n  throw new TypeError("Invalid attempt to destructure non-iterable instance");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js':
        /*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === "object" || typeof call === "function")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");\n\nfunction _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/typeof.js':
        /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");\n\nfunction _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/typeof.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js':
        /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js ***!
  \************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");\n\nvar _Map = __webpack_require__(/*! ../core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");\n\nvar getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");\n\nvar isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js");\n\nvar construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js");\n\nfunction _wrapNativeSuper(Class) {\n  var _cache = typeof _Map === "function" ? new _Map() : undefined;\n\n  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {\n    if (Class === null || !isNativeFunction(Class)) return Class;\n\n    if (typeof Class !== "function") {\n      throw new TypeError("Super expression must either be null or a function");\n    }\n\n    if (typeof _cache !== "undefined") {\n      if (_cache.has(Class)) return _cache.get(Class);\n\n      _cache.set(Class, Wrapper);\n    }\n\n    function Wrapper() {\n      return construct(Class, arguments, getPrototypeOf(this).constructor);\n    }\n\n    Wrapper.prototype = _Object$create(Class.prototype, {\n      constructor: {\n        value: Wrapper,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n    return setPrototypeOf(Wrapper, Class);\n  };\n\n  return _wrapNativeSuper(Class);\n}\n\nmodule.exports = _wrapNativeSuper;\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js?'
          );

          /***/
        },

      /***/ './node_modules/@babel/runtime-corejs2/regenerator/index.js':
        /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/@babel/runtime-corejs2/regenerator/index.js?'
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

      /***/ './node_modules/core-js/library/fn/array/is-array.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/array/is-array.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/get-iterator.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");\n__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/get-iterator.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/map.js':
        /*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");\n__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\n__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");\n__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");\n__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");\n__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");\n__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/map.js?'
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

      /***/ './node_modules/core-js/library/fn/object/create.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/object/create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/object/define-property.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/object/define-property.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/object/get-prototype-of.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/object/get-prototype-of.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/object/set-prototype-of.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/object/set-prototype-of.js?'
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

      /***/ './node_modules/core-js/library/fn/reflect/construct.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/core-js/library/modules/es6.reflect.construct.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Reflect.construct;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/reflect/construct.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/symbol/index.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/symbol/index.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/fn/symbol/iterator.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f(\'iterator\');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/fn/symbol/iterator.js?'
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

      /***/ './node_modules/core-js/library/modules/_array-from-iterable.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_array-from-iterable.js?'
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

      /***/ './node_modules/core-js/library/modules/_array-methods.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");\nvar asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_array-methods.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_array-species-constructor.js':
        /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");\nvar SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'species\');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == \'function\' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_array-species-constructor.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_array-species-create.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_array-species-create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_bind.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_bind.js?"
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

      /***/ './node_modules/core-js/library/modules/_collection-strong.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;\nvar create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");\nvar forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");\nvar step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\nvar fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");\nvar SIZE = DESCRIPTORS ? \'_s\' : \'size\';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== \'F\') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, \'_i\');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      \'delete\': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, \'size\', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== \'F\') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == \'keys\') return step(0, entry.k);\n      if (kind == \'values\') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? \'entries\' : \'values\', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_collection-strong.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_collection-to-json.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn\'t generic");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_collection-to-json.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_collection.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");\nvar forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");\nvar dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;\nvar each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? \'set\' : \'add\';\n  var proto = C && C.prototype;\n  var O = {};\n  if (!DESCRIPTORS || typeof C != \'function\' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    C = wrapper(function (target, iterable) {\n      anInstance(target, C, NAME, \'_c\');\n      target._c = new Base();\n      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);\n    });\n    each(\'add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON\'.split(\',\'), function (KEY) {\n      var IS_ADDER = KEY == \'add\' || KEY == \'set\';\n      if (KEY in proto && !(IS_WEAK && KEY == \'clear\')) hide(C.prototype, KEY, function (a, b) {\n        anInstance(this, C, KEY);\n        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == \'get\' ? undefined : false;\n        var result = this._c[KEY](a === 0 ? 0 : a, b);\n        return IS_ADDER ? this : result;\n      });\n    });\n    IS_WEAK || dP(C.prototype, \'size\', {\n      get: function () {\n        return this._c.size;\n      }\n    });\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F, O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_collection.js?'
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
            "var core = module.exports = { version: '2.6.4' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_core.js?"
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

      /***/ './node_modules/core-js/library/modules/_enum-keys.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");\nvar pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_enum-keys.js?'
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

      /***/ './node_modules/core-js/library/modules/_is-array.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == \'Array\';\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_is-array.js?'
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

      /***/ './node_modules/core-js/library/modules/_meta.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_meta.js?"
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
            '\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");\nvar pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = \'abcdefghijklmnopqrst\';\n  A[S] = 7;\n  K.split(\'\').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join(\'\') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-assign.js?'
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

      /***/ './node_modules/core-js/library/modules/_object-gopd.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-gopd.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-gopn-ext.js':
        /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == \'object\' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == \'[object Window]\' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-gopn-ext.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_object-gopn.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat(\'length\', \'prototype\');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-gopn.js?'
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

      /***/ './node_modules/core-js/library/modules/_object-sap.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), \'Object\', exp);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-sap.js?'
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
            'var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) if (isEnum.call(O, key = keys[i++])) {\n      result.push(isEntries ? [key, O[key]] : O[key]);\n    } return result;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_object-to-array.js?'
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

      /***/ './node_modules/core-js/library/modules/_set-collection-from.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_set-collection-from.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_set-collection-of.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_set-collection-of.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_set-proto.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// Works with __proto__ only. Old v8 can\'t work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can\'t set as prototype!");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || (\'__proto__\' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, \'__proto__\').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_set-proto.js?'
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
            "var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_shared.js?"
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

      /***/ './node_modules/core-js/library/modules/_validate-collection.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_validate-collection.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_wks-define.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != \'_\' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_wks-define.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/_wks-ext.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/_wks-ext.js?'
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

      /***/ './node_modules/core-js/library/modules/core.get-iterator.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");\nmodule.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != \'function\') throw TypeError(it + \' is not iterable!\');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/core.get-iterator.js?'
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

      /***/ './node_modules/core-js/library/modules/es6.array.is-array.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n\n$export($export.S, \'Array\', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.array.is-array.js?'
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

      /***/ './node_modules/core-js/library/modules/es6.map.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");\nvar validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");\nvar MAP = \'Map\';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.map.js?'
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

      /***/ './node_modules/core-js/library/modules/es6.object.create.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, \'Object\', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.object.create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.object.define-property.js':
        /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), \'Object\', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.object.define-property.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.object.get-prototype-of.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");\n\n__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")(\'getPrototypeOf\', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es6.object.set-prototype-of.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n$export($export.S, \'Object\', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?'
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

      /***/ './node_modules/core-js/library/modules/es6.reflect.construct.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");\nvar bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/library/modules/_bind.js");\nvar rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), \'Reflect\', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.reflect.construct.js?'
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

      /***/ './node_modules/core-js/library/modules/es6.symbol.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");\nvar META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");\nvar shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");\nvar wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");\nvar isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nvar _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");\nvar $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = \'prototype\';\nvar HIDDEN = wks(\'_hidden\');\nvar TO_PRIMITIVE = wks(\'toPrimitive\');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared(\'symbol-registry\');\nvar AllSymbols = shared(\'symbols\');\nvar OPSymbols = shared(\'op-symbols\');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == \'function\';\nvar QObject = global.QObject;\n// Don\'t use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, \'a\', {\n    get: function () { return dP(this, \'a\', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == \'symbol\' ? function (it) {\n  return typeof it == \'symbol\';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError(\'Symbol is not a constructor!\');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], \'toString\', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {\n    redefine(ObjectProto, \'propertyIsEnumerable\', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  \'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\'\n).split(\',\'), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, \'Symbol\', {\n  // 19.4.2.1 Symbol.for(key)\n  \'for\': function (key) {\n    return has(SymbolRegistry, key += \'\')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + \' is not a symbol!\');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, \'Object\', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != \'[null]\' || _stringify({ a: S }) != \'{}\' || _stringify(Object(S)) != \'{}\';\n})), \'JSON\', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == \'function\') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, \'Symbol\');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, \'Math\', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, \'JSON\', true);\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es6.symbol.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.map.from.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")(\'Map\');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.map.from.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.map.of.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")(\'Map\');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.map.of.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.map.to-json.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n\n$export($export.P + $export.R, \'Map\', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")(\'Map\') });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.map.to-json.js?'
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

      /***/ './node_modules/core-js/library/modules/es7.symbol.async-iterator.js':
        /*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")(\'asyncIterator\');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/library/modules/es7.symbol.observable.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")(\'observable\');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/library/modules/es7.symbol.observable.js?'
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

      /***/ './node_modules/core-js/modules/_advance-string-index.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_advance-string-index.js?'
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

      /***/ './node_modules/core-js/modules/_array-methods.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");\nvar asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_array-methods.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-reduce.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError(\'Reduce of empty array with no initial value\');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_array-reduce.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-species-constructor.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");\nvar SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'species\');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == \'function\' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_array-species-constructor.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-species-create.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_array-species-create.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_bind.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_bind.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_classof.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_classof.js?"
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
            "var core = module.exports = { version: '2.6.4' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_core.js?"
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

      /***/ './node_modules/core-js/modules/_date-to-iso-string.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_date-to-iso-string.js?"
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

      /***/ './node_modules/core-js/modules/_fails-is-regexp.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_fails-is-regexp.js?"
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

      /***/ './node_modules/core-js/modules/_fix-re-wks.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_fix-re-wks.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_flags.js':
        /*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_flags.js?"
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

      /***/ './node_modules/core-js/modules/_inherit-if-required.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == \'function\' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_inherit-if-required.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_invoke.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_invoke.js?'
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

      /***/ './node_modules/core-js/modules/_is-array.js':
        /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == \'Array\';\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_is-array.js?'
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

      /***/ './node_modules/core-js/modules/_is-regexp.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");\nvar MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'match\');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == \'RegExp\');\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_is-regexp.js?'
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

      /***/ './node_modules/core-js/modules/_object-gopd.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-gopd.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gopn.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat(\'length\', \'prototype\');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-gopn.js?'
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

      /***/ './node_modules/core-js/modules/_object-pie.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_object-pie.js?'
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

      /***/ './node_modules/core-js/modules/_regexp-exec-abstract.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_regexp-exec-abstract.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_regexp-exec.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_regexp-exec.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_set-proto.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// Works with __proto__ only. Old v8 can\'t work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can\'t set as prototype!");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || (\'__proto__\' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, \'__proto__\').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_set-proto.js?'
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
            "var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_shared.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_species-constructor.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");\nvar SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'species\');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_species-constructor.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_strict-method.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_strict-method.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-at.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? \'\' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_string-at.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-context.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError(\'String#\' + NAME + " doesn\'t accept regex!");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_string-context.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-trim.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_string-trim.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-ws.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            "module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/_string-ws.js?"
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

      /***/ './node_modules/core-js/modules/es6.array.filter.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), \'Array\', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.filter.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.find.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);\nvar KEY = \'find\';\nvar forced = true;\n// Shouldn\'t skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, \'Array\', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.find.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.for-each.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, \'Array\', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.for-each.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.index-of.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), \'Array\', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.index-of.js?'
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

      /***/ './node_modules/core-js/modules/es6.array.map.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), \'Array\', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.map.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.reduce.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), \'Array\', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.reduce.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.sort.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), \'Array\', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.array.sort.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.date.to-iso-string.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), \'Date\', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.date.to-iso-string.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.date.to-string.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.date.to-string.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.function.bind.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\n\n$export($export.P, \'Function\', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.function.bind.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.function.name.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.function.name.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.number.constructor.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;\nvar NUMBER = \'Number\';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;\nvar TRIM = \'trim\' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == \'string\' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number(\'+0x1\') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(\' 0o1\') || !$Number(\'0b1\') || $Number(\'+0x1\')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (\n    // ES3:\n    \'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,\' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    \'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,\' +\n    \'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger\'\n  ).split(\',\'), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.number.constructor.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.exec.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");\n__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({\n  target: \'RegExp\',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.regexp.exec.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.flags.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != \'g\') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, \'flags\', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.regexp.flags.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.match.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")(\'match\', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === \'\') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.regexp.match.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.replace.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.regexp.replace.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.split.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.regexp.split.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.to-string.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.regexp.to-string.js?"
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.string.includes.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");\nvar INCLUDES = \'includes\';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), \'String\', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.string.includes.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.string.trim.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")(\'trim\', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es6.string.trim.js?'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es7.array.includes.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            '\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);\n\n$export($export.P, \'Array\', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(\'includes\');\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/core-js/modules/es7.array.includes.js?'
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

      /***/ './node_modules/regenerator-runtime/runtime-module.js':
        /*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            '/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() {\n  return this || (typeof self === "object" && self);\n})() || Function("return this")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/regenerator-runtime/runtime-module.js?'
          );

          /***/
        },

      /***/ './node_modules/regenerator-runtime/runtime.js':
        /*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            '/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  "use strict";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === "function" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || "@@iterator";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";\n  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";\n\n  var inModule = typeof module === "object";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we\'re in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don\'t bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we\'re in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there\'s no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don\'t have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: "normal", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: "throw", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = "suspendedStart";\n  var GenStateSuspendedYield = "suspendedYield";\n  var GenStateExecuting = "executing";\n  var GenStateCompleted = "completed";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don\'t natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = "GeneratorFunction";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    ["next", "throw", "return"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === "function" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === "GeneratorFunction"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = "GeneratorFunction";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, "__await")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === "throw") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === "object" &&\n            hasOwn.call(value, "__await")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke("next", value, resolve, reject);\n          }, function(err) {\n            invoke("throw", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke("throw", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error("Generator is already running");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === "throw") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === "next") {\n          // Setting context._sent for legacy support of Babel\'s\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === "throw") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === "return") {\n          context.abrupt("return", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === "normal") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === "throw") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = "throw";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === "throw") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = "return";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === "throw") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // "return" to "throw", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = "throw";\n        context.arg = new TypeError(\n          "The iterator does not provide a \'throw\' method");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === "throw") {\n      context.method = "throw";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = "throw";\n      context.arg = new TypeError("iterator result is not an object");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was "throw" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was "next", forget context.arg since it has been\n      // "consumed" by the delegate iterator. If context.method was\n      // "return", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== "return") {\n        context.method = "next";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = "Generator";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers\' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn\'t happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return "[object Generator]";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = "normal";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: "root" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === "function") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel\'s\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = "next";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === "t" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === "throw") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = "throw";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = "next";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === "root") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle("end");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, "catchLoc");\n          var hasFinally = hasOwn.call(entry, "finallyLoc");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error("try statement without catch or finally");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, "finallyLoc") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === "break" ||\n           type === "continue") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = "next";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === "throw") {\n        throw record.arg;\n      }\n\n      if (record.type === "break" ||\n          record.type === "continue") {\n        this.next = record.arg;\n      } else if (record.type === "return") {\n        this.rval = this.arg = record.arg;\n        this.method = "return";\n        this.next = "end";\n      } else if (record.type === "normal" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    "catch": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === "throw") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error("illegal catch attempt");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === "next") {\n        // Deliberately forget the last sent value so that we don\'t\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we\'re in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() {\n    return this || (typeof self === "object" && self);\n  })() || Function("return this")()\n);\n\n\n//# sourceURL=webpack://ConcertVast/./node_modules/regenerator-runtime/runtime.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoElement; });\n/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");\n/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _quartile_support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quartile_support */ "./src/lib/quartile_support.js");\n\n\n\n\n\n\n\n\nvar EVENT_MAPPING = {\n  muted: \'mute\',\n  pause: \'pause\'\n};\nvar VIDEO_CONTROLS_HEIGHT = 50;\nvar VAST_LOADED_CLASS = \'vast-running\';\nvar VAST_PLAYING_CLASS = \'vast-playing\';\nvar VAST_DELAYED_ATTRIBUTE = \'vast-delayed-src\';\nvar DEFAULT_OPTIONS = {\n  autoplay: false,\n  muted: true,\n  restoreOriginalVideoOnComplete: true\n};\n\nvar VideoElement =\n/*#__PURE__*/\nfunction () {\n  function VideoElement(_ref) {\n    var vast = _ref.vast,\n        videoElement = _ref.videoElement;\n\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, VideoElement);\n\n    this.vast = vast;\n    this.videoElement = videoElement;\n    this.previousVolume = this.videoElement.volume;\n    this.quartileSupport = new _quartile_support__WEBPACK_IMPORTED_MODULE_7__["default"]();\n    this._vastPresented = null;\n    this.restoreVideoPlayer = false;\n    this.autoplay = false;\n    this.muted = true;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(VideoElement, [{\n    key: "applyAsPreroll",\n    value: function applyAsPreroll() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      options = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, DEFAULT_OPTIONS, options);\n      this.autoplay = options.autoplay;\n      this.muted = options.muted;\n      this.restoreVideoPlayer = options.restoreOriginalVideoOnComplete;\n      this._vastPresented = true;\n      this.setInitialVolume();\n      this.addClassToVideo();\n      this.pauseExistingVideoSources();\n      this.setupQuartileSupport();\n      this.setupVideoEventListeners();\n      this.setupImpressions();\n      this.loadVastVideo();\n\n      if (this.autoplay) {\n        this.playVideo();\n      }\n    }\n  }, {\n    key: "applyAsPrimary",\n    value: function applyAsPrimary() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.applyAsPreroll(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({\n        restoreOriginalVideoOnComplete: false\n      }, options));\n    } // private\n\n  }, {\n    key: "pauseExistingVideoSources",\n    value: function pauseExistingVideoSources() {\n      _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.videoElement.querySelectorAll(\'source\')).forEach(function (n) {\n        n.setAttribute(VAST_DELAYED_ATTRIBUTE, n.getAttribute(\'src\'));\n        n.setAttribute(\'src\', null);\n      });\n    }\n  }, {\n    key: "setupVideoEventListeners",\n    value: function setupVideoEventListeners() {\n      var _this = this;\n\n      // handle mute support\n      this.videoElement.addEventListener(\'volumechange\', this.muteObserver.bind(this));\n\n      var _loop = function _loop(nativeEventName) {\n        _this.videoElement.addEventListener(nativeEventName, function () {\n          if (!_this.vastPresented()) return;\n\n          _this.vast.addImpressionTrackingImagesFor(EVENT_MAPPING[nativeEventName]);\n        });\n      };\n\n      for (var nativeEventName in EVENT_MAPPING) {\n        _loop(nativeEventName);\n      }\n\n      this.videoElement.addEventListener(\'timeupdate\', function () {\n        if (!_this.vastPresented()) return;\n\n        _this.quartileSupport.setCurrentTime(_this.videoElement.currentTime);\n      });\n      this.videoElement.addEventListener(\'play\', function () {\n        if (!_this.vastPresented()) return;\n\n        _this.videoElement.classList.add(VAST_PLAYING_CLASS);\n      });\n      this.videoElement.addEventListener(\'ended\', this.vastVideoEndedObserver.bind(this));\n      this.videoElement.addEventListener(\'click\', this.clickObserver.bind(this));\n      this.videoElement.addEventListener(\'loadedmetadata\', this.updateQuartileDuration.bind(this));\n      this.videoElement.addEventListener(\'durationchange\', this.updateQuartileDuration.bind(this));\n      document.addEventListener(\'fullscreenchange\', this.fullscreenObserver.bind(this));\n      document.addEventListener(\'webkitfullscreenchange\', this.fullscreenObserver.bind(this));\n    }\n  }, {\n    key: "loadVastVideo",\n    value: function loadVastVideo() {\n      var bestVideo = this.vast.bestVideo({\n        height: this.videoElement.clientHeight,\n        width: this.videoElement.clientWidth\n      });\n      var videoSource = document.createElement(\'source\');\n      videoSource.setAttribute(\'src\', bestVideo.url());\n      videoSource.setAttribute(\'vast-added\', true);\n      videoSource.setAttribute(\'type\', bestVideo.mimeType());\n      this.videoElement.appendChild(videoSource);\n      this.videoElement.load();\n    }\n  }, {\n    key: "updateQuartileDuration",\n    value: function updateQuartileDuration() {\n      this.quartileSupport.setDuration(this.videoElement.duration);\n    }\n  }, {\n    key: "addClassToVideo",\n    value: function addClassToVideo() {\n      this.videoElement.classList.add(VAST_LOADED_CLASS);\n    }\n  }, {\n    key: "setupImpressions",\n    value: function setupImpressions() {\n      this.vast.addImpressionUrls();\n    }\n  }, {\n    key: "vastVideoEndedObserver",\n    value: function vastVideoEndedObserver() {\n      if (!this.vastPresented()) return;\n      this.videoElement.classList.remove(VAST_PLAYING_CLASS);\n      if (!this.restoreVideoPlayer) return;\n      this.videoElement.classList.remove(VAST_LOADED_CLASS);\n      this._vastPresented = false;\n\n      _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.videoElement.querySelectorAll(\'source[vast-added="true"]\')).forEach(function (n) {\n        n.remove();\n      });\n\n      _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.videoElement.querySelectorAll(\'source\')).forEach(function (n) {\n        n.setAttribute(\'src\', n.getAttribute(VAST_DELAYED_ATTRIBUTE));\n\n        if (n.removeAttribute) {\n          n.removeAttribute(VAST_DELAYED_ATTRIBUTE);\n        }\n      });\n\n      this.videoElement.load();\n    }\n  }, {\n    key: "muteObserver",\n    value: function muteObserver() {\n      if (!this.vastPresented()) return;\n\n      if (this.previousVolume <= 0 && this.videoElement.volume != 0) {\n        this.vast.addImpressionTrackingImagesFor(\'unmute\');\n      } else if (this.previousVolume > 0 && this.videoElement.volume == 0 || this.videoElement.muted) {\n        this.vast.addImpressionTrackingImagesFor(\'mute\');\n      }\n\n      this.previousVolume = this.videoElement.muted ? -1 : this.videoElement.volume;\n    }\n  }, {\n    key: "setInitialVolume",\n    value: function setInitialVolume() {\n      if (this.muted) {\n        this.videoElement.muted = true;\n        this.previousVolume = -1;\n      }\n    }\n  }, {\n    key: "playVideo",\n    value: function playVideo() {\n      var _this2 = this;\n\n      this.videoElement.addEventListener(\'canplay\', function () {\n        _this2.videoElement.play();\n      });\n    }\n  }, {\n    key: "clickObserver",\n    value: function clickObserver(clickEvent) {\n      if (!this.vastPresented()) return;\n\n      if (clickEvent.target) {\n        var height = clickEvent.target.clientHeight;\n\n        if (clickEvent.offsetY <= height - VIDEO_CONTROLS_HEIGHT && this.isBeyondFirstFrame()) {\n          this.vast.openClickthroughUrl();\n        }\n      }\n    }\n  }, {\n    key: "fullscreenObserver",\n    value: function fullscreenObserver(fullscreenEvent) {\n      if (!this.vastPresented()) return;\n\n      if (document.fullscreenElement || document.webkitIsFullScreen) {\n        this.vast.addImpressionTrackingImagesFor(\'fullscreen\');\n      }\n    }\n  }, {\n    key: "setupQuartileSupport",\n    value: function setupQuartileSupport() {\n      var _this3 = this;\n\n      this.quartileSupport.onQuartileChange(function (quartile) {\n        if (!_this3.vastPresented()) return;\n\n        _this3.vast.addImpressionTrackingImagesFor(quartile);\n      });\n    }\n  }, {\n    key: "isBeyondFirstFrame",\n    value: function isBeyondFirstFrame() {\n      return this.videoElement.currentTime > 0;\n    }\n  }, {\n    key: "vastPresented",\n    value: function vastPresented() {\n      return this._vastPresented;\n    }\n  }]);\n\n  return VideoElement;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/applications/video_element.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoJs; });\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");\n/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _quartile_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quartile_support */ "./src/lib/quartile_support.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\n\n\n\n\n\n\nvar EVENT_MAPPING = {\n  muted: \'mute\',\n  pause: \'pause\'\n};\nvar VIDEO_CONTROLS_HEIGHT = 50;\nvar VAST_LOADED_CLASS = \'vast-running\';\nvar VAST_PLAYING_CLASS = \'vast-playing\';\nvar DEFAULT_OPTIONS = {\n  autoplay: false,\n  muted: true,\n  restoreOriginalVideoOnComplete: true\n};\n\nvar VideoJs =\n/*#__PURE__*/\nfunction () {\n  function VideoJs(_ref) {\n    var vast = _ref.vast,\n        videoJsPlayer = _ref.videoJsPlayer;\n\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, VideoJs);\n\n    this.vast = vast;\n    this.videoJsPlayer = videoJsPlayer;\n    this.previousVolume = this.videoJsPlayer.volume();\n    this.previousSources = [];\n    this._vastPresented = null;\n    this.quartileSupport = new _quartile_support__WEBPACK_IMPORTED_MODULE_6__["default"]();\n    this.restoreVideoPlayer = false;\n    this.autoplay = false;\n    this.muted = true;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(VideoJs, [{\n    key: "applyAsPreroll",\n    value: function applyAsPreroll() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      options = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, DEFAULT_OPTIONS, options);\n      this.autoplay = options.autoplay;\n      this.muted = options.muted;\n      this.restoreVideoPlayer = options.restoreOriginalVideoOnComplete;\n      this.includeHlsSource = options.includeHlsSource;\n      this._vastPresented = true;\n      this.setInitialVolume();\n      this.addClassToVideo();\n      this.pauseExistingVideoSources();\n      this.setupQuartileSupport();\n      this.setupVideoEventListeners();\n      this.setupImpressions();\n      this.loadVastVideo();\n\n      if (this.autoplay) {\n        this.autoPlayVideo();\n      }\n    }\n  }, {\n    key: "applyAsPrimary",\n    value: function applyAsPrimary() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.applyAsPreroll(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({\n        restoreOriginalVideoOnComplete: false\n      }, options));\n    } // private\n\n  }, {\n    key: "pauseExistingVideoSources",\n    value: function pauseExistingVideoSources() {\n      this.previousSources = this.videoJsPlayer.src();\n    }\n  }, {\n    key: "setupVideoEventListeners",\n    value: function setupVideoEventListeners() {\n      var _this = this;\n\n      this.videoJsPlayer.on(\'volumechange\', this.muteObserver.bind(this));\n\n      var _loop = function _loop(nativeEventName) {\n        _this.videoJsPlayer.on(nativeEventName, function () {\n          if (!_this.vastPresented()) return;\n\n          _this.vast.addImpressionTrackingImagesFor(EVENT_MAPPING[nativeEventName]);\n        });\n      };\n\n      for (var nativeEventName in EVENT_MAPPING) {\n        _loop(nativeEventName);\n      }\n\n      this.videoJsPlayer.on(\'timeupdate\', function () {\n        if (!_this.vastPresented()) return;\n\n        _this.quartileSupport.setCurrentTime(_this.videoJsPlayer.currentTime());\n      });\n      this.videoJsPlayer.on(\'play\', function () {\n        if (!_this.vastPresented()) return;\n\n        _this.videoJsPlayer.addClass(VAST_PLAYING_CLASS);\n      });\n      this.videoJsPlayer.on(\'ended\', this.vastVideoEndedObserver.bind(this));\n      this.videoJsPlayer.off(\'click\');\n      this.videoJsPlayer.on(\'click\', this.clickObserver.bind(this));\n      this.videoJsPlayer.on(\'loadedmetadata\', this.updateQuartileDuration.bind(this));\n      this.videoJsPlayer.on(\'durationchange\', this.updateQuartileDuration.bind(this));\n      this.videoJsPlayer.on(\'enterFullWindow\', this.fullscreenObserver.bind(this));\n      document.addEventListener(\'fullscreenchange\', this.fullscreenObserver.bind(this));\n      document.addEventListener(\'webkitfullscreenchange\', this.fullscreenObserver.bind(this));\n    }\n  }, {\n    key: "loadVastVideo",\n    value: function loadVastVideo() {\n      var bestVideos = this.vast.bestVideo({\n        height: this.videoJsPlayer.height(),\n        width: this.videoJsPlayer.width(),\n        includeHlsSource: this.includeHlsSource\n      });\n      this.videoJsPlayer.src(bestVideos.map(function (bestVideo) {\n        return {\n          type: bestVideo.element.getAttribute(\'type\'),\n          src: _node_value__WEBPACK_IMPORTED_MODULE_7__["default"].fromElement(bestVideo.element)\n        };\n      }));\n    }\n  }, {\n    key: "updateQuartileDuration",\n    value: function updateQuartileDuration() {\n      this.quartileSupport.setDuration(this.videoJsPlayer.duration());\n    }\n  }, {\n    key: "addClassToVideo",\n    value: function addClassToVideo() {\n      this.videoJsPlayer.addClass(VAST_LOADED_CLASS);\n    }\n  }, {\n    key: "setupImpressions",\n    value: function setupImpressions() {\n      this.vast.addImpressionUrls();\n    }\n  }, {\n    key: "vastVideoEndedObserver",\n    value: function vastVideoEndedObserver() {\n      if (!this.vastPresented()) return;\n      this.videoJsPlayer.removeClass(VAST_PLAYING_CLASS);\n      if (!this.restoreVideoPlayer) return;\n      this.videoJsPlayer.removeClass(VAST_LOADED_CLASS);\n      this._vastPresented = false;\n      this.videoJsPlayer.src(this.previousSources);\n    }\n  }, {\n    key: "muteObserver",\n    value: function muteObserver() {\n      if (!this.vastPresented()) return;\n\n      if (this.previousVolume <= 0 && this.videoJsPlayer.volume() != 0) {\n        this.vast.addImpressionTrackingImagesFor(\'unmute\');\n      } else if (this.previousVolume > 0 && (this.videoJsPlayer.volume() == 0 || this.videoJsPlayer.muted())) {\n        this.vast.addImpressionTrackingImagesFor(\'mute\');\n      }\n\n      this.previousVolume = this.videoJsPlayer.muted() ? -1 : this.videoJsPlayer.volume();\n    }\n  }, {\n    key: "setInitialVolume",\n    value: function setInitialVolume() {\n      if (this.muted) {\n        this.videoJsPlayer.muted(true);\n        this.previousVolume = -1;\n      }\n    }\n  }, {\n    key: "autoPlayVideo",\n    value: function autoPlayVideo() {\n      var _this2 = this;\n\n      this.videoJsPlayer.ready(function () {\n        _this2.videoJsPlayer.play().then(function () {}).catch(function (e) {\n          if (!_this2.videoJsPlayer.muted()) {\n            _this2.videoJsPlayer.muted(true);\n\n            _this2.autoPlayVideo();\n          }\n        });\n      });\n    }\n  }, {\n    key: "clickObserver",\n    value: function clickObserver(clickEvent) {\n      if (!this.vastPresented()) return;\n\n      if (clickEvent.target) {\n        var height = clickEvent.target.clientHeight;\n\n        if (clickEvent.offsetY <= height - VIDEO_CONTROLS_HEIGHT && this.isBeyondFirstFrame()) {\n          this.vast.openClickthroughUrl();\n        }\n      }\n    }\n  }, {\n    key: "fullscreenObserver",\n    value: function fullscreenObserver() {\n      var fullscreenEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      if (!this.vastPresented()) return;\n      this.vast.addImpressionTrackingImagesFor(\'fullscreen\');\n    }\n  }, {\n    key: "setupQuartileSupport",\n    value: function setupQuartileSupport() {\n      var _this3 = this;\n\n      var events = this.vast.trackingEventNamesWithOffsetPercent();\n\n      for (var name in events) {\n        this.quartileSupport.addEvent({\n          name: name,\n          offset: events[name]\n        });\n      }\n\n      this.quartileSupport.onQuartileChange(function (quartile) {\n        if (!_this3.vastPresented()) return;\n\n        _this3.vast.addImpressionTrackingImagesFor(quartile);\n      });\n    }\n  }, {\n    key: "isBeyondFirstFrame",\n    value: function isBeyondFirstFrame() {\n      return this.videoJsPlayer.currentTime() > 0;\n    }\n  }, {\n    key: "vastPresented",\n    value: function vastPresented() {\n      return this._vastPresented;\n    }\n  }]);\n\n  return VideoJs;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/applications/video_js.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeValue; });\n/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");\n/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar NodeValue =\n/*#__PURE__*/\nfunction () {\n  function NodeValue() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NodeValue);\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NodeValue, null, [{\n    key: "fromElement",\n\n    /**\n     * Returns the first TEXT or CDATA value from an XML element.\n     *\n     * @param {DOM Element} el An elemenet with a single CDATA or TEXT entity\n     */\n    value: function fromElement(el) {\n      if (!el) return null;\n\n      var matchedItem = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(el.childNodes).find(function (n) {\n        return (n.nodeType == Node.TEXT_NODE || n.nodeType == Node.CDATA_SECTION_NODE) && !!n.nodeValue.trim();\n      });\n\n      return matchedItem ? matchedItem.nodeValue.trim() : null;\n    }\n  }]);\n\n  return NodeValue;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/node_value.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuartileSupport; });\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar QUARTILES = [[0.0, \'start\'], [0.25, \'firstQuartile\'], [0.5, \'midpoint\'], [0.75, \'thirdQuartile\'], [0.99, \'complete\']];\n\nvar QuartileSupport =\n/*#__PURE__*/\nfunction () {\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(QuartileSupport, null, [{\n    key: "quartiles",\n    value: function quartiles() {\n      var quartiles = {};\n      QUARTILES.forEach(function (quart) {\n        quartiles[quart[1]] = quart[0];\n      });\n      return quartiles;\n    }\n  }]);\n\n  function QuartileSupport() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, QuartileSupport);\n\n    this.quartiles = QUARTILES.slice(0);\n    this.seenQuartiles = [];\n    this.callbacks = [];\n    this.currentTime = 0;\n    this.duration = Infinity;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(QuartileSupport, [{\n    key: "addEvent",\n    value: function addEvent(_ref) {\n      var name = _ref.name,\n          offset = _ref.offset;\n      this.quartiles.push([offset, name]);\n    }\n  }, {\n    key: "setDuration",\n    value: function setDuration(time) {\n      if (time != 0) {\n        this.duration = time;\n      }\n\n      this.checkForQuartileEvent();\n    }\n  }, {\n    key: "onQuartileChange",\n    value: function onQuartileChange(func) {\n      this.callbacks.push(func);\n    }\n  }, {\n    key: "setCurrentTime",\n    value: function setCurrentTime(currentTime) {\n      this.currentTime = currentTime;\n      this.checkForQuartileEvent();\n    } // private\n\n  }, {\n    key: "checkForQuartileEvent",\n    value: function checkForQuartileEvent() {\n      var _this = this;\n\n      var percentComplete = this.currentTime / this.duration;\n      var matchingQuartiles = this.quartiles.filter(function (quartile) {\n        return quartile[0] < percentComplete;\n      });\n      matchingQuartiles.forEach(function (quartile) {\n        var _quartile = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(quartile, 2),\n            percent = _quartile[0],\n            name = _quartile[1];\n\n        if (!_this.seenQuartiles.includes(percent)) {\n          _this.seenQuartiles.push(percent);\n\n          _this.quartileChangeCallback(name);\n        }\n      });\n    }\n  }, {\n    key: "quartileChangeCallback",\n    value: function quartileChangeCallback(quartileName) {\n      this.callbacks.forEach(function (fn) {\n        return fn.call(null, quartileName);\n      });\n    }\n  }]);\n\n  return QuartileSupport;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/quartile_support.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VastNetworkError", function() { return VastNetworkError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Remote; });\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar VastNetworkError =\n/*#__PURE__*/\nfunction (_Error) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(VastNetworkError, _Error);\n\n  function VastNetworkError() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, VastNetworkError);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(VastNetworkError).apply(this, arguments));\n  }\n\n  return VastNetworkError;\n}(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_9___default()(Error));\n\nvar Remote =\n/*#__PURE__*/\nfunction () {\n  function Remote() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Remote);\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Remote, null, [{\n    key: "loadUrl",\n\n    /**\n     * Fetches a remote XML Vast url. It has no knowledge of XML or the Vast structure\n     *\n     * @async\n     * @param {String} url - Where to download the XML\n     * @param {Integer} timeout - time in milleseconds to wait until for remote load\n     * @param {Function} onBandwidthUpdate - Callback when there is a new bandwidth estimate available,\n     *                                       will be be passed a number representing KB/s\n     * @returns {Promise<String>} XML Response from the url\n     */\n    value: function () {\n      var _loadUrl = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {\n        var _this = this;\n\n        var url, _ref$timeout, timeout, _ref$onBandwidthUpdat, onBandwidthUpdate;\n\n        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                url = _ref.url, _ref$timeout = _ref.timeout, timeout = _ref$timeout === void 0 ? 10000 : _ref$timeout, _ref$onBandwidthUpdat = _ref.onBandwidthUpdate, onBandwidthUpdate = _ref$onBandwidthUpdat === void 0 ? function () {} : _ref$onBandwidthUpdat;\n                return _context2.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {\n                  _this.vastUrl = url;\n                  var request = new XMLHttpRequest();\n                  request.timeout = timeout;\n                  var startTime;\n                  request.addEventListener(\'load\',\n                  /*#__PURE__*/\n                  function () {\n                    var _ref2 = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(\n                    /*#__PURE__*/\n                    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n                      var downloadTime, downloadSize, bandwidthEstimateInKbs;\n                      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                        while (1) {\n                          switch (_context.prev = _context.next) {\n                            case 0:\n                              downloadTime = new Date().getTime() - startTime;\n                              downloadSize = request.responseText.length;\n                              bandwidthEstimateInKbs = downloadSize * 8 / (downloadTime / 1000) / 1024;\n                              onBandwidthUpdate(bandwidthEstimateInKbs);\n                              resolve(request.response);\n\n                            case 5:\n                            case "end":\n                              return _context.stop();\n                          }\n                        }\n                      }, _callee, this);\n                    }));\n\n                    return function (_x2) {\n                      return _ref2.apply(this, arguments);\n                    };\n                  }());\n                  request.addEventListener(\'error\', function (e) {\n                    reject(new VastNetworkError("Network Error: Request status: ".concat(request.status, ", ").concat(request.responseText)));\n                  });\n                  request.addEventListener(\'abort\', function (e) {\n                    reject(new VastNetworkError(\'Network Aborted\'));\n                  });\n                  request.addEventListener(\'timeout\', function (e) {\n                    reject(new VastNetworkError("Network Timeout: Request did not complete in ".concat(timeout, "ms")));\n                  });\n                  startTime = new Date().getTime();\n                  request.open(\'GET\', _this.vastUrl);\n                  request.send();\n                }));\n\n              case 2:\n              case "end":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function loadUrl(_x) {\n        return _loadUrl.apply(this, arguments);\n      }\n\n      return loadUrl;\n    }()\n  }]);\n\n  return Remote;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/remote.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StreamChooser; });\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");\n/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _supported_formats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supported_formats */ "./src/lib/supported_formats.js");\n\n\n\n\n\n\n\nvar StreamChooser =\n/*#__PURE__*/\nfunction () {\n  function StreamChooser() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, StreamChooser);\n\n    this.videos = null;\n    this.playerWidth = 0;\n    this.playerHeight = 0;\n    this.supportedMimeTypes = Object(_supported_formats__WEBPACK_IMPORTED_MODULE_5__["supportedMimeTypes"])();\n    this.bandwidthInKbs = 0;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(StreamChooser, [{\n    key: "useVideosFromMediaFile",\n    value: function useVideosFromMediaFile(mediaFiles) {\n      this.videos = mediaFiles;\n    }\n  }, {\n    key: "setPlayerDimensions",\n    value: function setPlayerDimensions(_ref) {\n      var height = _ref.height,\n          width = _ref.width;\n      this.playerHeight = height;\n      this.playerWidth = width;\n    }\n  }, {\n    key: "setSupportedMimeTypes",\n    value: function setSupportedMimeTypes(types) {\n      this.supportedMimeTypes = types;\n    }\n  }, {\n    key: "setBandwidth",\n    value: function setBandwidth(bandwidthInKbs) {\n      this.bandwidthInKbs = bandwidthInKbs;\n    }\n  }, {\n    key: "hlsVideo",\n    value: function hlsVideo() {\n      return Object(_supported_formats__WEBPACK_IMPORTED_MODULE_5__["getHlsFormats"])(this.videos);\n    }\n  }, {\n    key: "bestStandardVideo",\n    value: function bestStandardVideo() {\n      var _this = this;\n\n      var matchingFormats = this.videos.filter(function (v) {\n        return _this.compatibleStandardFormats(v);\n      });\n      var closestSize = matchingFormats.sort(function (a, b) {\n        return _this.closestSized(a, b);\n      });\n      var notExceedingBandwidth = closestSize.filter(function (v) {\n        return _this.underBandwidth(v);\n      });\n      if (matchingFormats.length <= 1) return matchingFormats[0];\n      if (closestSize.length <= 1) return closestSize[0];\n      if (notExceedingBandwidth.length == 0) return closestSize[0];\n      return notExceedingBandwidth[0];\n    }\n  }, {\n    key: "bestVideos",\n    value: function bestVideos() {\n      return [this.hlsVideo(), this.bestStandardVideo()].filter(Boolean);\n    }\n    /**\n     * Returns true of this video is playable on the device/browser\n     * Follows the filter callback interface\n     * @param {MediaElement} video\n     */\n\n  }, {\n    key: "compatibleStandardFormats",\n    value: function compatibleStandardFormats(video) {\n      return this.supportedMimeTypes.indexOf(video.mimeType()) != -1;\n    }\n    /**\n     * Sorts the videos interms of the closest one to the playersize\n     * This follows the sort callback interface.\n     *\n     * @param {MediaElement} a the first video in the sort params\n     * @param {MediaElement} b the second video in the sort params\n     */\n\n  }, {\n    key: "closestSized",\n    value: function closestSized(a, b) {\n      var aWProximity = Math.abs(this.playerWidth - a.width()) / this.playerWidth;\n      var bWProximity = Math.abs(this.playerWidth - b.width()) / this.playerWidth;\n      var aHProximity = Math.abs(this.playerHeight - a.height()) / this.playerHeight;\n      var bHProximity = Math.abs(this.playerHeight - b.height()) / this.playerHeight;\n      return aWProximity * aHProximity - bWProximity * bHProximity;\n    }\n    /**\n     * Returns true if the video\'s bandwidth is at or below\n     * the calculated bandwidth\n     * Conforms to the filter callback interface\n     * @param {MediaElement} video\n     */\n\n  }, {\n    key: "underBandwidth",\n    value: function underBandwidth(video) {\n      var OVERHEAD_FACTOR_FOR_BANDWIDTH_CALCULATION = 1.25;\n      return video.bitrate() <= this.bandwidthInKbs * OVERHEAD_FACTOR_FOR_BANDWIDTH_CALCULATION;\n    }\n  }]);\n\n  return StreamChooser;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/stream_chooser.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHlsFormats", function() { return getHlsFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedFormats", function() { return supportedFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedMimeTypes", function() { return supportedMimeTypes; });\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar STANDARD_FORMATS = {\n  ogg: \'video/ogg; codecs="theora"\',\n  h264: \'video/mp4; codecs="avc1.42E01E"\',\n  webm: \'video/webm; codecs="vp8, vorbis"\',\n  vp9: \'video/webm; codecs="vp9"\'\n};\nvar HLS_FORMATS = {\n  hls: \'application/vnd.apple.mpegurl\',\n  hlsLegacy: \'application/x-mpegURL\'\n};\nfunction getHlsFormats(videos) {\n  return videos.find(function (v) {\n    return hlsFormats(v);\n  });\n}\n\nfunction hlsFormats(video) {\n  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(HLS_FORMATS).indexOf(video.mimeType()) != -1;\n}\n\nfunction supportedFormats() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    doc: document\n  },\n      doc = _ref.doc;\n\n  var v = doc.createElement(\'video\');\n  var supported = {};\n\n  for (var name in STANDARD_FORMATS) {\n    if (v.canPlayType(STANDARD_FORMATS[name]) === \'probably\') {\n      supported[name] = STANDARD_FORMATS[name];\n    }\n  }\n\n  return supported;\n}\nfunction supportedMimeTypes() {\n  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    doc: document\n  },\n      doc = _ref2.doc;\n\n  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(supportedFormats({\n    doc: doc\n  })).map(function (mimeTypeAndCode) {\n    return mimeTypeAndCode.split(\';\')[0];\n  });\n}\n/* harmony default export */ __webpack_exports__["default"] = ({\n  supportedFormats: supportedFormats,\n  supportedMimeTypes: supportedMimeTypes,\n  getHlsFormats: getHlsFormats\n});\n\n//# sourceURL=webpack://ConcertVast/./src/lib/supported_formats.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timecode; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");\n/* harmony import */ var core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");\n/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar Timecode =\n/*#__PURE__*/\nfunction () {\n  function Timecode() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Timecode);\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Timecode, null, [{\n    key: "secondsToTimecode",\n\n    /**\n     * Converts seconds to a three segment timecode hh:mm:ss\n     * Examples: 30 => "00:00:30"\n     *           90 => "00:01:30"\n     *\n     * @param {String|Number} maybeSeconds\n     * @returns {String} "hh:mm:ss" timecode\n     */\n    value: function secondsToTimecode(maybeSeconds) {\n      var seconds = Number(maybeSeconds);\n\n      if (isNaN(seconds) || maybeSeconds.toString().indexOf(\'%\') != -1) {\n        return null;\n      }\n\n      var date = new Date(null);\n      date.setSeconds(seconds);\n      return date.toISOString().substr(11, 8);\n    }\n    /**\n     * Converts timecode hh:mm:ss to total seconds\n     * Examples: "00:00:30" => 30\n     *           "00:10:10" => 610\n     *\n     * @param {String} timecode Timecode input\n     * @returns {Number} the number of seconds represented in the timecode\n     */\n\n  }, {\n    key: "timecodeToSeconds",\n    value: function timecodeToSeconds(timecode) {\n      var parts = timecode.split(\':\');\n      var seconds = 0;\n      var multiplier = 1;\n\n      while (parts.length > 0) {\n        seconds += multiplier * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(parts.pop(), 10);\n        multiplier *= 60;\n      }\n\n      return seconds;\n    }\n    /**\n     * Will properly format the timecode into three segment parts\n     * Example: "01:10" => "00:01:10"\n     *\n     * @param {String} code input timecode\n     * @returns {String} three segment timecode hh:mm:ss\n     */\n\n  }, {\n    key: "timecodeToTimecode",\n    value: function timecodeToTimecode(code) {\n      var result = this.secondsToTimecode(this.timecodeToSeconds(code));\n      return result;\n    }\n  }]);\n\n  return Timecode;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/timecodes.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VastXMLParsingError", function() { return VastXMLParsingError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vast; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _vast_elements_media_files__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vast_elements/media_files */ "./src/lib/vast_elements/media_files.js");\n/* harmony import */ var _vast_elements_clickthrough__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vast_elements/clickthrough */ "./src/lib/vast_elements/clickthrough.js");\n/* harmony import */ var _vast_elements_impression__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vast_elements/impression */ "./src/lib/vast_elements/impression.js");\n/* harmony import */ var _vast_elements_error_impression__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vast_elements/error_impression */ "./src/lib/vast_elements/error_impression.js");\n/* harmony import */ var _vast_elements_tracking_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vast_elements/tracking_events */ "./src/lib/vast_elements/tracking_events.js");\n/* harmony import */ var _vast_elements_wrapper_url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vast_elements/wrapper_url */ "./src/lib/vast_elements/wrapper_url.js");\n/* harmony import */ var _stream_chooser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stream_chooser */ "./src/lib/stream_chooser.js");\n/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remote */ "./src/lib/remote.js");\n/* harmony import */ var _applications_video_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./applications/video_element */ "./src/lib/applications/video_element.js");\n/* harmony import */ var _applications_video_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./applications/video_js */ "./src/lib/applications/video_js.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar VastXMLParsingError =\n/*#__PURE__*/\nfunction (_Error) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(VastXMLParsingError, _Error);\n\n  function VastXMLParsingError() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, VastXMLParsingError);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(VastXMLParsingError).apply(this, arguments));\n  }\n\n  return VastXMLParsingError;\n}(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_11___default()(Error));\n\nvar Vast =\n/*#__PURE__*/\nfunction () {\n  function Vast() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      numberWrapperFollowsAllowed: 5\n    },\n        xml = _ref.xml,\n        numberWrapperFollowsAllowed = _ref.numberWrapperFollowsAllowed;\n\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Vast);\n\n    this.vastXml = null;\n    this.vastUrl = null;\n    this.vastDocument = null;\n    this.bandwidthEstimateInKbs = 0;\n    this.wrapperFollowsRemaining = numberWrapperFollowsAllowed;\n    this.loadedElements = {\n      MediaFiles: new _vast_elements_media_files__WEBPACK_IMPORTED_MODULE_12__["default"](this),\n      Clickthrough: new _vast_elements_clickthrough__WEBPACK_IMPORTED_MODULE_13__["default"](this),\n      Impression: new _vast_elements_impression__WEBPACK_IMPORTED_MODULE_14__["default"](this),\n      ErrorImpression: new _vast_elements_error_impression__WEBPACK_IMPORTED_MODULE_15__["default"](this),\n      TrackingEvents: new _vast_elements_tracking_events__WEBPACK_IMPORTED_MODULE_16__["default"](this),\n      WrapperUrl: new _vast_elements_wrapper_url__WEBPACK_IMPORTED_MODULE_17__["default"](this)\n    };\n\n    if (xml) {\n      this.useXmlString(xml);\n    }\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Vast, [{\n    key: "useXmlString",\n    value: function () {\n      var _useXmlString = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(xml) {\n        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.vastXml = xml;\n                this.vastDocument = null;\n                _context.next = 4;\n                return this.parse();\n\n              case 4:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function useXmlString(_x) {\n        return _useXmlString.apply(this, arguments);\n      }\n\n      return useXmlString;\n    }()\n  }, {\n    key: "bandwidth",\n    value: function bandwidth() {\n      return this.bandwidthEstimateInKbs;\n    }\n  }, {\n    key: "videos",\n    value: function videos() {\n      return this.loadedElements[\'MediaFiles\'].videos();\n    }\n  }, {\n    key: "clickthroughUrl",\n    value: function clickthroughUrl() {\n      return this.loadedElements[\'Clickthrough\'].clickthroughUrl();\n    }\n  }, {\n    key: "openClickthroughUrl",\n    value: function openClickthroughUrl() {\n      return this.loadedElements[\'Clickthrough\'].openClickthroughUrl();\n    }\n  }, {\n    key: "wrapperUrl",\n    value: function wrapperUrl() {\n      return this.loadedElements[\'WrapperUrl\'].wrapperUrl();\n    }\n  }, {\n    key: "url",\n    value: function url() {\n      return this.vastUrl;\n    }\n  }, {\n    key: "impressionUrls",\n    value: function impressionUrls() {\n      return this.loadedElements[\'Impression\'].impressionUrls();\n    }\n  }, {\n    key: "addImpressionUrls",\n    value: function addImpressionUrls() {\n      var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n      return this.loadedElements[\'Impression\'].addImpressionUrls(doc);\n    }\n  }, {\n    key: "errorImpressionUrls",\n    value: function errorImpressionUrls() {\n      return this.loadedElements[\'ErrorImpression\'].impressionUrls();\n    }\n  }, {\n    key: "addErrorImpressionUrls",\n    value: function addErrorImpressionUrls() {\n      var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n      return this.loadedElements[\'ErrorImpression\'].addImpressionUrls(doc);\n    }\n  }, {\n    key: "trackingUrlsFor",\n    value: function trackingUrlsFor(eventName) {\n      return this.loadedElements[\'TrackingEvents\'].trackingUrlsFor(eventName);\n    }\n  }, {\n    key: "trackingEventNamesWithOffsets",\n    value: function trackingEventNamesWithOffsets() {\n      return this.loadedElements[\'TrackingEvents\'].trackingEventNamesWithOffsets();\n    }\n  }, {\n    key: "trackingEventNamesWithOffsetPercent",\n    value: function trackingEventNamesWithOffsetPercent() {\n      return this.loadedElements[\'TrackingEvents\'].trackingEventNamesWithOffsetPercent();\n    }\n  }, {\n    key: "addImpressionTrackingImagesFor",\n    value: function addImpressionTrackingImagesFor(eventName) {\n      var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n      return this.loadedElements[\'TrackingEvents\'].addImpressionTrackingImagesFor(eventName, doc);\n    }\n  }, {\n    key: "applyToVideoElementAsPreroll",\n    value: function applyToVideoElementAsPreroll(videoElement) {\n      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var vea = new _applications_video_element__WEBPACK_IMPORTED_MODULE_20__["default"]({\n        vast: this,\n        videoElement: videoElement\n      });\n      vea.applyAsPreroll(opts);\n    }\n  }, {\n    key: "applyToVideoElement",\n    value: function applyToVideoElement(videoElement) {\n      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var videoElApplication = new _applications_video_element__WEBPACK_IMPORTED_MODULE_20__["default"]({\n        vast: this,\n        videoElement: videoElement\n      });\n      videoElApplication.applyAsPrimary(opts);\n    }\n  }, {\n    key: "applyToVideoJsAsPreroll",\n    value: function applyToVideoJsAsPreroll(videoJsPlayer) {\n      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var videoJsApplication = new _applications_video_js__WEBPACK_IMPORTED_MODULE_21__["default"]({\n        vast: this,\n        videoJsPlayer: videoJsPlayer\n      });\n      videoJsApplication.applyAsPreroll(opts);\n    }\n  }, {\n    key: "applyToVideoJs",\n    value: function applyToVideoJs(videoJsPlayer) {\n      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var videoJsApplication = new _applications_video_js__WEBPACK_IMPORTED_MODULE_21__["default"]({\n        vast: this,\n        videoJsPlayer: videoJsPlayer\n      });\n      videoJsApplication.applyAsPrimary(opts);\n    }\n  }, {\n    key: "bestVideo",\n    value: function bestVideo() {\n      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n        width: 800,\n        height: 600,\n        bandwidth: null,\n        mimeTypes: null,\n        includeHlsSource: false\n      },\n          width = _ref2.width,\n          height = _ref2.height,\n          bandwidth = _ref2.bandwidth,\n          mimeTypes = _ref2.mimeTypes,\n          includeHlsSource = _ref2.includeHlsSource;\n\n      var chooser = new _stream_chooser__WEBPACK_IMPORTED_MODULE_18__["default"]();\n      chooser.useVideosFromMediaFile(this.videos());\n      chooser.setBandwidth(this.bandwidth());\n      if (bandwidth) chooser.setBandwidth(bandwidth);\n      if (mimeTypes) chooser.setSupportedMimeTypes(mimeTypes);\n      chooser.setPlayerDimensions({\n        width: width,\n        height: height\n      });\n      return includeHlsSource ? chooser.bestVideos() : chooser.bestStandardVideo();\n    }\n  }, {\n    key: "parse",\n    value: function () {\n      var _parse = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {\n        var parser;\n        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (this.vastDocument) {\n                  _context2.next = 9;\n                  break;\n                }\n\n                parser = new DOMParser();\n                this.vastDocument = parser.parseFromString(this.vastXml, \'application/xml\');\n\n                if (!(this.vastDocument.documentElement.nodeName == \'parsererror\')) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                throw new VastXMLParsingError("Error parsing ".concat(this.vastXml, ". Not valid XML"));\n\n              case 7:\n                _context2.next = 9;\n                return this.processElements();\n\n              case 9:\n              case "end":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function parse() {\n        return _parse.apply(this, arguments);\n      }\n\n      return parse;\n    }()\n  }, {\n    key: "loadRemoteVast",\n    value: function () {\n      var _loadRemoteVast = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(url) {\n        var _this = this;\n\n        var _ref3,\n            timeout,\n            remoteVastXml,\n            _args3 = arguments;\n\n        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _ref3 = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {\n                  timeout: 10000\n                }, timeout = _ref3.timeout;\n                this.vastUrl = url;\n                _context3.next = 4;\n                return _remote__WEBPACK_IMPORTED_MODULE_19__["default"].loadUrl({\n                  url: url,\n                  timeout: timeout,\n                  onBandwidthUpdate: function onBandwidthUpdate(bw) {\n                    _this.bandwidthEstimateInKbs = bw;\n                  }\n                });\n\n              case 4:\n                remoteVastXml = _context3.sent;\n                _context3.next = 7;\n                return this.useXmlString(remoteVastXml);\n\n              case 7:\n              case "end":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function loadRemoteVast(_x2) {\n        return _loadRemoteVast.apply(this, arguments);\n      }\n\n      return loadRemoteVast;\n    }()\n  }, {\n    key: "processElements",\n    value: function () {\n      var _processElements = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(\n      /*#__PURE__*/\n      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {\n        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.loadedElements).forEach(function (e) {\n                  return e.process();\n                });\n\n                if (!this.wrapperUrl()) {\n                  _context4.next = 9;\n                  break;\n                }\n\n                if (!(this.wrapperFollowsRemaining-- > 0)) {\n                  _context4.next = 7;\n                  break;\n                }\n\n                _context4.next = 5;\n                return this.loadRemoteVast(this.wrapperUrl());\n\n              case 5:\n                _context4.next = 9;\n                break;\n\n              case 7:\n                this.addErrorImpressionUrls();\n                throw new _remote__WEBPACK_IMPORTED_MODULE_19__["VastNetworkError"](\'Network Error: Too Many Vast Wrapper Follows\');\n\n              case 9:\n              case "end":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function processElements() {\n        return _processElements.apply(this, arguments);\n      }\n\n      return processElements;\n    }()\n  }]);\n\n  return Vast;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clickthrough; });\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\n\n\n\n\n\n\n\nvar Clickthrough =\n/*#__PURE__*/\nfunction (_VastElementBase) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Clickthrough, _VastElementBase);\n\n  function Clickthrough() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Clickthrough);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Clickthrough).apply(this, arguments));\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Clickthrough, [{\n    key: "setup",\n    value: function setup() {\n      this.clickthrough = null;\n    }\n  }, {\n    key: "onVastReady",\n    value: function onVastReady() {\n      this.clickthrough = this.elements.map(function (el) {\n        return _node_value__WEBPACK_IMPORTED_MODULE_7__["default"].fromElement(el);\n      })[0];\n    }\n  }, {\n    key: "clickthroughUrl",\n    value: function clickthroughUrl() {\n      return this.clickthrough;\n    }\n  }, {\n    key: "openClickthroughUrl",\n    value: function openClickthroughUrl() {\n      var win = window.open(this.clickthroughUrl(), \'_blank\');\n      win.focus();\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {\n      return \'Creative VideoClicks ClickThrough\';\n    }\n  }]);\n\n  return Clickthrough;\n}(_vast_element_base__WEBPACK_IMPORTED_MODULE_6__["default"]);\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/clickthrough.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorImpression; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _impression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impression */ "./src/lib/vast_elements/impression.js");\n\n\n\n\n\n\n\nvar ErrorImpression =\n/*#__PURE__*/\nfunction (_Impression) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ErrorImpression, _Impression);\n\n  function ErrorImpression() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorImpression);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ErrorImpression).apply(this, arguments));\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorImpression, [{\n    key: "setup",\n    value: function setup() {\n      this._impressionUrls = [];\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {\n      return \'Ad Error\';\n    }\n  }]);\n\n  return ErrorImpression;\n}(_impression__WEBPACK_IMPORTED_MODULE_5__["default"]);\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/error_impression.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Impression; });\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\n\n\n\n\n\n\n\n\n\nvar Impression =\n/*#__PURE__*/\nfunction (_VastElementBase) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Impression, _VastElementBase);\n\n  function Impression() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Impression);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Impression).apply(this, arguments));\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Impression, [{\n    key: "setup",\n    value: function setup() {\n      this._impressionUrls = [];\n    }\n  }, {\n    key: "onVastReady",\n    value: function onVastReady() {\n      this._impressionUrls = this.elements.map(function (el) {\n        return _node_value__WEBPACK_IMPORTED_MODULE_9__["default"].fromElement(el);\n      });\n    }\n  }, {\n    key: "impressionUrls",\n    value: function impressionUrls() {\n      return this._impressionUrls;\n    }\n  }, {\n    key: "addImpressionUrls",\n    value: function addImpressionUrls() {\n      var _this = this;\n\n      var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n      this.impressionUrls().forEach(function (url) {\n        _this.addImpressionUrl(url, {\n          doc: doc,\n          name: \'impression\'\n        });\n      });\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {\n      return \'Ad Impression\';\n    }\n  }]);\n\n  return Impression;\n}(_vast_element_base__WEBPACK_IMPORTED_MODULE_8__["default"]);\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/impression.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaFiles; });\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");\n/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\n\n\n\n\n\n\n\n\n\n\nvar MediaFile =\n/*#__PURE__*/\nfunction () {\n  function MediaFile(mediaElement) {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, MediaFile);\n\n    this.element = mediaElement;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(MediaFile, [{\n    key: "bitrate",\n    value: function bitrate() {\n      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(this.element.getAttribute(\'bitrate\'), 10);\n    }\n  }, {\n    key: "width",\n    value: function width() {\n      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(this.element.getAttribute(\'width\'), 10);\n    }\n  }, {\n    key: "height",\n    value: function height() {\n      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(this.element.getAttribute(\'height\'), 10);\n    }\n  }, {\n    key: "mimeType",\n    value: function mimeType() {\n      return this.element.getAttribute(\'type\');\n    }\n  }, {\n    key: "url",\n    value: function url() {\n      return _node_value__WEBPACK_IMPORTED_MODULE_10__["default"].fromElement(this.element);\n    }\n  }, {\n    key: "isVideoType",\n    value: function isVideoType() {\n      return this.mimeType().match(/^video\\/|application\\//);\n    }\n  }]);\n\n  return MediaFile;\n}();\n\nvar MediaFiles =\n/*#__PURE__*/\nfunction (_VastElementBase) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MediaFiles, _VastElementBase);\n\n  function MediaFiles() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, MediaFiles);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MediaFiles).apply(this, arguments));\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(MediaFiles, [{\n    key: "setup",\n    // Think of this as the constructor\n    value: function setup() {\n      this.mediaFiles = [];\n    } // Selector to consume elements\n\n  }, {\n    key: "onVastReady",\n    // Elements available\n    value: function onVastReady() {\n      this.mediaFiles = this.elements.map(function (el) {\n        return new MediaFile(el);\n      });\n    } // Private stuff ---\n\n  }, {\n    key: "videos",\n    value: function videos() {\n      return this.mediaFiles.filter(function (v) {\n        return v.isVideoType();\n      });\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {\n      return \'Creative MediaFiles MediaFile\';\n    }\n  }]);\n\n  return MediaFiles;\n}(_vast_element_base__WEBPACK_IMPORTED_MODULE_9__["default"]);\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/media_files.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrackingEvents; });\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");\n/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");\n/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");\n/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _timecodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../timecodes */ "./src/lib/timecodes.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n/* harmony import */ var _quartile_support__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../quartile_support */ "./src/lib/quartile_support.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar TrackingEvent =\n/*#__PURE__*/\nfunction () {\n  function TrackingEvent(_ref) {\n    var eventName = _ref.eventName,\n        url = _ref.url;\n\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, TrackingEvent);\n\n    this.eventName = eventName;\n    this._url = url;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(TrackingEvent, [{\n    key: "matches",\n    value: function matches(string) {\n      return this.eventName == string;\n    }\n  }, {\n    key: "name",\n    value: function name() {\n      return this.eventName;\n    }\n  }, {\n    key: "offsetInSeconds",\n    value: function offsetInSeconds(duration) {\n      var quarts = _quartile_support__WEBPACK_IMPORTED_MODULE_18__["default"].quartiles();\n      return quarts[this.eventName] * duration;\n    }\n  }, {\n    key: "offsetInPercent",\n    value: function offsetInPercent(duration) {\n      var quarts = _quartile_support__WEBPACK_IMPORTED_MODULE_18__["default"].quartiles();\n      return quarts[this.eventName];\n    }\n  }, {\n    key: "url",\n    value: function url() {\n      return this._url;\n    }\n  }]);\n\n  return TrackingEvent;\n}();\n\nvar ProgressTrackingEvent =\n/*#__PURE__*/\nfunction () {\n  function ProgressTrackingEvent(_ref2) {\n    var offset = _ref2.offset,\n        url = _ref2.url;\n\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, ProgressTrackingEvent);\n\n    this.offset = offset;\n    this._url = url;\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(ProgressTrackingEvent, [{\n    key: "matches",\n    value: function matches(secondsOrTimeCodeOrPercent) {\n      return this.offset == secondsOrTimeCodeOrPercent || this.offset == _timecodes__WEBPACK_IMPORTED_MODULE_16__["default"].secondsToTimecode(secondsOrTimeCodeOrPercent) || this.offset == _timecodes__WEBPACK_IMPORTED_MODULE_16__["default"].timecodeToTimecode(secondsOrTimeCodeOrPercent);\n    }\n  }, {\n    key: "name",\n    value: function name() {\n      return this.offset;\n    }\n  }, {\n    key: "offsetInSeconds",\n    value: function offsetInSeconds(duration) {\n      if (this.offset.indexOf(\'%\') != -1) {\n        return duration * (Number(this.offset.replace(\'%\', \'\')) / 100.0);\n      } else {\n        return _timecodes__WEBPACK_IMPORTED_MODULE_16__["default"].timecodeToSeconds(this.offset);\n      }\n    }\n  }, {\n    key: "offsetInPercent",\n    value: function offsetInPercent(duration) {\n      return Math.min(1.0, this.offsetInSeconds(duration) / duration);\n    }\n  }, {\n    key: "url",\n    value: function url() {\n      return this._url;\n    }\n  }]);\n\n  return ProgressTrackingEvent;\n}();\n\nvar TrackingEvents =\n/*#__PURE__*/\nfunction (_VastElementBase) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(TrackingEvents, _VastElementBase);\n\n  function TrackingEvents() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, TrackingEvents);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(TrackingEvents).apply(this, arguments));\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(TrackingEvents, [{\n    key: "setup",\n    value: function setup() {\n      this.trackingEvents = [];\n      this.duration = undefined;\n    }\n  }, {\n    key: "onVastReady",\n    value: function onVastReady() {\n      var durationValue = _node_value__WEBPACK_IMPORTED_MODULE_17__["default"].fromElement(this.elements.find(function (el) {\n        return el.nodeName == \'Duration\';\n      }));\n      this.duration = _timecodes__WEBPACK_IMPORTED_MODULE_16__["default"].timecodeToSeconds(durationValue || \'0\');\n      this.trackingEvents = this.elements.filter(function (el) {\n        return el.nodeName != \'Duration\';\n      }).map(function (el) {\n        var trackingEvent = el.hasAttribute(\'offset\') ? ProgressTrackingEvent : TrackingEvent;\n        return new trackingEvent({\n          eventName: el.getAttribute(\'event\'),\n          offset: el.getAttribute(\'offset\'),\n          url: _node_value__WEBPACK_IMPORTED_MODULE_17__["default"].fromElement(el)\n        });\n      });\n    }\n  }, {\n    key: "trackingUrlsFor",\n    value: function trackingUrlsFor(eventName) {\n      return this.trackingEvents.filter(function (t) {\n        return t.matches(eventName);\n      }).map(function (t) {\n        return t.url();\n      });\n    }\n  }, {\n    key: "addImpressionTrackingImagesFor",\n    value: function addImpressionTrackingImagesFor(eventName) {\n      var _this = this;\n\n      var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n      this.trackingUrlsFor(eventName).forEach(function (url) {\n        _this.addImpressionUrl(url, {\n          doc: doc,\n          name: eventName\n        });\n      });\n    }\n  }, {\n    key: "trackingEventNamesWithOffsets",\n    value: function trackingEventNamesWithOffsets() {\n      var _this2 = this;\n\n      return this.trackingEvents.reduce(function (all, event) {\n        var offsetSeconds = event.offsetInSeconds(_this2.duration);\n\n        if (offsetSeconds) {\n          all[event.name()] = offsetSeconds;\n        }\n\n        return all;\n      }, {});\n    }\n  }, {\n    key: "trackingEventNamesWithOffsetPercent",\n    value: function trackingEventNamesWithOffsetPercent() {\n      var _this3 = this;\n\n      return this.trackingEvents.reduce(function (all, event) {\n        var offsetPercent = event.offsetInPercent(_this3.duration);\n\n        if (offsetPercent) {\n          all[event.name()] = offsetPercent;\n        }\n\n        return all;\n      }, {});\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {\n      return \'Ad TrackingEvents Tracking, Ad Creative Duration\';\n    }\n  }]);\n\n  return TrackingEvents;\n}(_vast_element_base__WEBPACK_IMPORTED_MODULE_15__["default"]);\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/tracking_events.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VastElementBase; });\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");\n/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar VastElementBase =\n/*#__PURE__*/\nfunction () {\n  function VastElementBase(vastBase) {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, VastElementBase);\n\n    this.vast = vastBase;\n    this.setup();\n    this.elements = [];\n  } // Selector to determine applicable vast elements\n\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(VastElementBase, [{\n    key: "setup",\n    // Subclasses have be loaded\n    value: function setup() {} // Vast file has been loaded and is ready to use\n\n  }, {\n    key: "onVastReady",\n    value: function onVastReady() {} // Each time a vast document is loaded this method will be called\n    // and the selector method will be used to return matched elements.\n    // there by building up a collection of elements to be used by the\n    // onVastReady() function\n    //\n    //                     ┌─────────┐     ┌ ─ ─ ─ ─ ┐\n    //                     │         │\n    //                     │Vast XML │     │Vast XML │\n    //                     │   Doc   │────▶    Doc\n    //                     │         │     │         │\n    //                     │         │\n    //                     └─────────┘     └ ─ ─ ─ ─ ┘\n    //                           │               │\n    //                           │\n    //                           └───────┬ ─ ─ ─ ┘\n    //                       ┌───────────┼──┐\n    //  .───────────.        │ ┌─────────▼──┴─┐\n    // │`───────────\'│       │ │ ┌────────────┴─┐\n    // │             │       │ │ │              │\n    // │Collection of│       │ │ │ VastElement  │\n    // │  Elements   │◀──────┼─┼─│    Class     │\n    // │             │       └─┤ │              │\n    // │.───────────.│         └─┤              │\n    //  `───────────\'            └──────────────┘\n    //\n    //\n\n  }, {\n    key: "process",\n    value: function process() {\n      if (!this.vast.vastDocument) return;\n      var selector = this.constructor.selector();\n\n      var matchedElements = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.vast.vastDocument.querySelectorAll(selector));\n\n      this.elements = this.constructor.appendElementsOnFollow() ? this.elements.concat(matchedElements) : matchedElements;\n      this.onVastReady();\n    }\n  }, {\n    key: "addImpressionUrl",\n    value: function addImpressionUrl(url) {\n      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n        doc: document,\n        name: \'\'\n      },\n          doc = _ref.doc,\n          name = _ref.name;\n\n      var impressionImage = doc.createElement(\'img\');\n      impressionImage.style.height = 1;\n      impressionImage.style.width = 1;\n      impressionImage.style.top = 0;\n      impressionImage.style.left = 0;\n      impressionImage.style.visibility = \'hidden\';\n      impressionImage.className = \'vast-pixel\';\n      impressionImage.src = url;\n\n      if (name) {\n        impressionImage.setAttribute(\'data-for\', name);\n      }\n\n      doc.body.appendChild(impressionImage);\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {} // When following Vast redirects (wrappers) should the elements\n    // be added to the existing list or should they replace the existing elements\n    // True will append\n    // False will replace\n\n  }, {\n    key: "appendElementsOnFollow",\n    value: function appendElementsOnFollow() {\n      return true;\n    }\n  }]);\n\n  return VastElementBase;\n}();\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/vast_element_base.js?'
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
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperUrl; });\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vast_element_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vast_element_base */ "./src/lib/vast_elements/vast_element_base.js");\n/* harmony import */ var _node_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_value */ "./src/lib/node_value.js");\n\n\n\n\n\n\n\n\n\nvar WrapperUrl =\n/*#__PURE__*/\nfunction (_VastElementBase) {\n  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WrapperUrl, _VastElementBase);\n\n  function WrapperUrl() {\n    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WrapperUrl);\n\n    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WrapperUrl).apply(this, arguments));\n  }\n\n  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WrapperUrl, [{\n    key: "setup",\n    value: function setup() {\n      this.url = null;\n    }\n  }, {\n    key: "onVastReady",\n    value: function onVastReady() {\n      this.url = this.elements.map(function (el) {\n        return _node_value__WEBPACK_IMPORTED_MODULE_7__["default"].fromElement(el);\n      })[0];\n    }\n  }, {\n    key: "wrapperUrl",\n    value: function wrapperUrl() {\n      return this.url;\n    }\n  }], [{\n    key: "selector",\n    value: function selector() {\n      return \'Ad Wrapper VASTAdTagURI\';\n    }\n  }, {\n    key: "appendElementsOnFollow",\n    value: function appendElementsOnFollow() {\n      return false;\n    }\n  }]);\n\n  return WrapperUrl;\n}(_vast_element_base__WEBPACK_IMPORTED_MODULE_6__["default"]);\n\n\n\n//# sourceURL=webpack://ConcertVast/./src/lib/vast_elements/wrapper_url.js?'
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
