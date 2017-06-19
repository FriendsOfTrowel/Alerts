(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TrowelAlerts", [], factory);
	else if(typeof exports === 'object')
		exports["TrowelAlerts"] = factory();
	else
		root["TrowelAlerts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrowelAlerts = function TrowelAlerts(elements) {
  _classCallCheck(this, TrowelAlerts);

  elements.forEach(function (element, index) {
    var element_obj = new TrowelAlert(element);
  });
};

exports.default = TrowelAlerts;

var TrowelAlert = function () {
  function TrowelAlert(element) {
    _classCallCheck(this, TrowelAlert);

    this.element = element;
    this.timesCollection = [].slice.call(this.element.querySelectorAll('[data-alert="times"]'));

    this.events = this.events();
    this.listener();
    this.element.dispatchEvent(this.events.mounted);
    return;
  }

  _createClass(TrowelAlert, [{
    key: 'events',
    value: function events() {
      var mounted = new Event('trowel.alert.mounted');
      var remove = new Event('trowel.alert.remove');
      var removed = new Event('trowel.alert.removed');

      return { mounted: mounted, remove: remove, removed: removed };
    }
  }, {
    key: 'removeAlert',
    value: function removeAlert() {
      this.element.dispatchEvent(this.events.remove);
      this.element.remove();
      this.element.dispatchEvent(this.events.removed);
      return;
    }
  }, {
    key: 'listener',
    value: function listener() {
      var _this = this;

      return this.timesCollection.map(function (times) {
        return times.addEventListener('click', _this.removeAlert.bind(_this));
      });
    }
  }]);

  return TrowelAlert;
}();

module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=alerts.js.map