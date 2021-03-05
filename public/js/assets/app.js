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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// show qr codes status
var qrStatus = true;

if (qrStatus === true || qrStatus == true) {} else {
  $("#hero-qr-button").addClass("is-hidden");
  $(".qrWidget").addClass("is-hidden");
  $(".qr-button").addClass("is-hidden");
}

$(document).ready(function () {
  setTimeout(function () {
    $(".pageLoader").fadeToggle(200);
  }, 1000); // hide delay when page load

  var modeInCash = localStorage.getItem("travelclub-mode");
  if (modeInCash && modeInCash === "dark") $("body").addClass("dark-mode-active");else $("body").removeClass("dark-mode-active");
});
$(".qr-button .close-button").click(function () {
  $(".qr-button").toggle();
});
$("#darkmodeswitch, #darkmodeswitch-2").click(function () {
  var mode = !$("body").hasClass("dark-mode-active");

  if (mode) {
    localStorage.setItem("travelclub-mode", "dark");
    $("body").addClass("dark-mode-active");
  } else {
    localStorage.setItem("travelclub-mode", "light");
    $("body").removeClass("dark-mode-active");
  }
});
$(".sidebarTrigger").click(function (e) {
  e.preventDefault();

  if ($("body").hasClass("sidebar-open")) {
    $("body").removeClass("sidebar-open");
    $("body").addClass("sidebar-closed");
  } else if ($("body").hasClass("sidebar-closed")) {
    $("body").removeClass("sidebar-closed");
    $("body").addClass("sidebar-open");
  } else {
    $("body").addClass("sidebar-open");
  }
});
$('.owl-carousel').each(function () {
  //Find each set of dots in this carousel
  $(this).find('.owl-dot').each(function (index) {
    //Add one to index so it starts from 1
    $(this).attr('aria-label', index + 1);
  });
});

/***/ }),

/***/ 1:
/*!******************************************!*\
  !*** multi ./resources/assets/js/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\tc_mob\resources\assets\js\app.js */"./resources/assets/js/app.js");


/***/ })

/******/ });