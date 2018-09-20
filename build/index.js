module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deepEqual = __webpack_require__(2);

var UnstructuredSelect = function (_Component) {
  _inherits(UnstructuredSelect, _Component);

  function UnstructuredSelect(props) {
    _classCallCheck(this, UnstructuredSelect);

    var _this = _possibleConstructorReturn(this, (UnstructuredSelect.__proto__ || Object.getPrototypeOf(UnstructuredSelect)).call(this, props));

    _this.state = {};
    _this.onChange = _this.onChange.bind(_this);
    _this.renderOptions = _this.renderOptions.bind(_this);
    return _this;
  }

  // on mount construct an object that includes options labels and a value of any type 


  _createClass(UnstructuredSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var optionsObject = this.props.options.map(function (optionObject, idx) {
        return {
          index: idx,
          value: optionObject.value,
          label: optionObject.label || optionObject.value
        };
      });
      // if no default value passed in dont set a default value 
      var defaultValue = this.props.defaultValue;
      if (!defaultValue) {
        this.setState({
          options: optionsObject
        });
        return;
      }
      // if default value prop doesn't match the value of an option passed in raise an error
      if (!this.props.options.find(function (option) {
        return deepEqual(option.value, _this2.props.defaultValue);
      })) {
        throw Error("Default value must be in options");
      }
      if (this.isMultiple()) {
        // if defaultValue is a string it should not be destructured even if isMultiple
        defaultValue = typeof defaultValue === 'string' ? [defaultValue] : [].concat(_toConsumableArray(defaultValue));
      }
      this.setState({
        options: optionsObject,
        value: defaultValue
      });
    }

    // Use the object in state of complex types and the index to convert the options value (which is an index) into the appropriate complex value

  }, {
    key: 'onChange',
    value: function onChange(event) {
      var value = [];

      if (this.isMultiple()) {
        var selectedValues = [].concat(_toConsumableArray(event.target.selectedOptions)).map(function (obj) {
          return obj.value;
        });
        value = this.state.options.filter(function (option) {
          return selectedValues.includes(option.index);
        }).map(function (obj) {
          return obj.value;
        });
      } else {
        value = this.state.options.find(function (option) {
          return option.index === event.target.value;
        }).value;
      }

      this.setState({
        value: value
      });
      this.props.onChange(value);
    }
  }, {
    key: 'isMultiple',
    value: function isMultiple() {
      return this.props.multiple;
    }
  }, {
    key: 'getAdditionalAttributes',
    value: function getAdditionalAttributes() {
      var attributeObj = {};
      if (this.props.multiple) {
        attributeObj.multiple = true;
      }
      if (this.props.autofocus) {
        attributeObj.autofocus = true;
      }
      if (this.props.disabled) {
        attributeObj.disabled = true;
      }
      if (this.props.form) {
        attributeObj.form = this.props.form;
      }
      return attributeObj;
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      if (!this.state.options) return _react2.default.createElement('div', null);else {
        return _react2.default.createElement(
          'select',
          _extends({
            value: this.state.value,
            onChange: this.onChange
          }, this.getAdditionalAttributes()),
          this.state.options.map(function (option) {
            return _react2.default.createElement(
              'option',
              { key: option.index, value: option.index },
              option.label
            );
          })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderOptions()
      );
    }
  }]);

  return UnstructuredSelect;
}(_react.Component);

exports.default = UnstructuredSelect;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(0);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _select2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);