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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// show qr codes status\nvar qrStatus = true;\n\nif (qrStatus === true || qrStatus == true) {} else {\n  $(\"#hero-qr-button\").addClass(\"is-hidden\");\n  $(\".qrWidget\").addClass(\"is-hidden\");\n  $(\".qr-button\").addClass(\"is-hidden\");\n}\n\n$(document).ready(function () {\n  setTimeout(function () {\n    $(\".pageLoader\").fadeToggle(200);\n  }, 1000); // hide delay when page load\n\n  var modeInCash = localStorage.getItem(\"travelclub-mode\");\n  if (modeInCash && modeInCash === \"dark\") $(\"body\").addClass(\"dark-mode-active\");else $(\"body\").removeClass(\"dark-mode-active\");\n});\n$(\".qr-button .close-button\").click(function () {\n  $(\".qr-button\").toggle();\n});\n$(\"#darkmodeswitch, #darkmodeswitch-2\").click(function () {\n  var mode = !$(\"body\").hasClass(\"dark-mode-active\");\n\n  if (mode) {\n    localStorage.setItem(\"travelclub-mode\", \"dark\");\n    $(\"body\").addClass(\"dark-mode-active\");\n  } else {\n    localStorage.setItem(\"travelclub-mode\", \"light\");\n    $(\"body\").removeClass(\"dark-mode-active\");\n  }\n});\n$(\".sidebarTrigger\").click(function (e) {\n  e.preventDefault();\n\n  if ($(\"body\").hasClass(\"sidebar-open\")) {\n    $(\"body\").removeClass(\"sidebar-open\");\n    $(\"body\").addClass(\"sidebar-closed\");\n  } else if ($(\"body\").hasClass(\"sidebar-closed\")) {\n    $(\"body\").removeClass(\"sidebar-closed\");\n    $(\"body\").addClass(\"sidebar-open\");\n  } else {\n    $(\"body\").addClass(\"sidebar-open\");\n  }\n});\n$('.owl-carousel').each(function () {\n  //Find each set of dots in this carousel\n  $(this).find('.owl-dot').each(function (index) {\n    //Add one to index so it starts from 1\n    $(this).attr('aria-label', index + 1);\n  });\n});\n$(\".ymaps-2-1-78-gototech\").attr(\"rel\", \"noreferrer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz8yNGVkIl0sIm5hbWVzIjpbInFyU3RhdHVzIiwiJCIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNldFRpbWVvdXQiLCJmYWRlVG9nZ2xlIiwibW9kZUluQ2FzaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwidG9nZ2xlIiwibW9kZSIsImhhc0NsYXNzIiwic2V0SXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVhY2giLCJmaW5kIiwiaW5kZXgiLCJhdHRyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUdBLElBQUlBLFFBQVEsR0FBRyxJQUFmOztBQUNBLElBQUlBLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLElBQUksSUFBckMsRUFBMkMsQ0FDMUMsQ0FERCxNQUNPO0FBQ0hDLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxRQUFyQixDQUE4QixXQUE5QjtBQUNBRCxHQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLFFBQWYsQ0FBd0IsV0FBeEI7QUFDQUQsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsUUFBaEIsQ0FBeUIsV0FBekI7QUFDSDs7QUFFREQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCQyxZQUFVLENBQUMsWUFBTTtBQUNiSixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxVQUFqQixDQUE0QixHQUE1QjtBQUNILEdBRlMsRUFFUCxJQUZPLENBQVYsQ0FEMEIsQ0FHaEI7O0FBR1YsTUFBSUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWpCO0FBRUEsTUFBSUYsVUFBVSxJQUFJQSxVQUFVLEtBQUssTUFBakMsRUFDSU4sQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxRQUFWLENBQW1CLGtCQUFuQixFQURKLEtBR0lELENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVMsV0FBVixDQUFzQixrQkFBdEI7QUFHUCxDQWREO0FBZ0JBVCxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QlUsS0FBOUIsQ0FBb0MsWUFBWTtBQUM1Q1YsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlcsTUFBaEI7QUFDSCxDQUZEO0FBSUFYLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDVSxLQUF4QyxDQUE4QyxZQUFZO0FBR3RELE1BQUlFLElBQUksR0FBRyxDQUFDWixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVhLFFBQVYsQ0FBbUIsa0JBQW5CLENBQVo7O0FBR0EsTUFBSUQsSUFBSixFQUFVO0FBQ05MLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDLE1BQXhDO0FBQ0FkLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsUUFBVixDQUFtQixrQkFBbkI7QUFDSCxHQUhELE1BR087QUFDSE0sZ0JBQVksQ0FBQ08sT0FBYixDQUFxQixpQkFBckIsRUFBd0MsT0FBeEM7QUFDQWQsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUyxXQUFWLENBQXNCLGtCQUF0QjtBQUNIO0FBR0osQ0FmRDtBQWlCQVQsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJVLEtBQXJCLENBQTJCLFVBQVVLLENBQVYsRUFBYTtBQUVwQ0EsR0FBQyxDQUFDQyxjQUFGOztBQUNBLE1BQUloQixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVhLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBSixFQUF3QztBQUNwQ2IsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUyxXQUFWLENBQXNCLGNBQXRCO0FBQ0FULEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsUUFBVixDQUFtQixnQkFBbkI7QUFDSCxHQUhELE1BR08sSUFBSUQsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYSxRQUFWLENBQW1CLGdCQUFuQixDQUFKLEVBQTBDO0FBQzdDYixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLFdBQVYsQ0FBc0IsZ0JBQXRCO0FBQ0FULEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsUUFBVixDQUFtQixjQUFuQjtBQUNILEdBSE0sTUFHQTtBQUNIRCxLQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLFFBQVYsQ0FBbUIsY0FBbkI7QUFDSDtBQUVKLENBYkQ7QUFnQkFELENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpQixJQUFuQixDQUF3QixZQUFXO0FBQy9CO0FBQ0FqQixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLENBQWEsVUFBYixFQUF5QkQsSUFBekIsQ0FBOEIsVUFBU0UsS0FBVCxFQUFnQjtBQUMxQztBQUNBbkIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixDQUFhLFlBQWIsRUFBMkJELEtBQUssR0FBRyxDQUFuQztBQUNILEdBSEQ7QUFJSCxDQU5EO0FBUUFuQixDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm9CLElBQTVCLENBQWlDLEtBQWpDLEVBQXVDLFlBQXZDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaG93IHFyIGNvZGVzIHN0YXR1c1xuXG5cbnZhciBxclN0YXR1cyA9IHRydWU7XG5pZiAocXJTdGF0dXMgPT09IHRydWUgfHwgcXJTdGF0dXMgPT0gdHJ1ZSkge1xufSBlbHNlIHtcbiAgICAkKFwiI2hlcm8tcXItYnV0dG9uXCIpLmFkZENsYXNzKFwiaXMtaGlkZGVuXCIpO1xuICAgICQoXCIucXJXaWRnZXRcIikuYWRkQ2xhc3MoXCJpcy1oaWRkZW5cIik7XG4gICAgJChcIi5xci1idXR0b25cIikuYWRkQ2xhc3MoXCJpcy1oaWRkZW5cIik7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJChcIi5wYWdlTG9hZGVyXCIpLmZhZGVUb2dnbGUoMjAwKTtcbiAgICB9LCAxMDAwKTsgLy8gaGlkZSBkZWxheSB3aGVuIHBhZ2UgbG9hZFxuXG5cbiAgICBsZXQgbW9kZUluQ2FzaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidHJhdmVsY2x1Yi1tb2RlXCIpXG5cbiAgICBpZiAobW9kZUluQ2FzaCAmJiBtb2RlSW5DYXNoID09PSBcImRhcmtcIilcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJkYXJrLW1vZGUtYWN0aXZlXCIpXG4gICAgZWxzZVxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImRhcmstbW9kZS1hY3RpdmVcIilcblxuXG59KTtcblxuJChcIi5xci1idXR0b24gLmNsb3NlLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5xci1idXR0b25cIikudG9nZ2xlKCk7XG59KTtcblxuJChcIiNkYXJrbW9kZXN3aXRjaCwgI2Rhcmttb2Rlc3dpdGNoLTJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXG5cbiAgICBsZXQgbW9kZSA9ICEkKFwiYm9keVwiKS5oYXNDbGFzcyhcImRhcmstbW9kZS1hY3RpdmVcIilcblxuXG4gICAgaWYgKG1vZGUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0cmF2ZWxjbHViLW1vZGVcIiwgXCJkYXJrXCIpXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiZGFyay1tb2RlLWFjdGl2ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidHJhdmVsY2x1Yi1tb2RlXCIsIFwibGlnaHRcIilcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJkYXJrLW1vZGUtYWN0aXZlXCIpXG4gICAgfVxuXG5cbn0pXG5cbiQoXCIuc2lkZWJhclRyaWdnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIikpIHtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwic2lkZWJhci1jbG9zZWRcIik7XG4gICAgfSBlbHNlIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcInNpZGViYXItY2xvc2VkXCIpKSB7XG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1jbG9zZWRcIik7XG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xuICAgIH1cblxufSk7XG5cblxuJCgnLm93bC1jYXJvdXNlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy9GaW5kIGVhY2ggc2V0IG9mIGRvdHMgaW4gdGhpcyBjYXJvdXNlbFxuICAgICQodGhpcykuZmluZCgnLm93bC1kb3QnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIC8vQWRkIG9uZSB0byBpbmRleCBzbyBpdCBzdGFydHMgZnJvbSAxXG4gICAgICAgICQodGhpcykuYXR0cignYXJpYS1sYWJlbCcsIGluZGV4ICsgMSk7XG4gICAgfSk7XG59KTtcblxuJChcIi55bWFwcy0yLTEtNzgtZ290b3RlY2hcIikuYXR0cihcInJlbFwiLFwibm9yZWZlcnJlclwiKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/js/app.js\n");

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi ./resources/assets/js/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\tc_mob\resources\assets\js\app.js */"./resources/assets/js/app.js");


/***/ })

/******/ });