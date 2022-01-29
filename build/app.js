/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/bigScript.js":
/*!*************************!*\
  !*** ./js/bigScript.js ***!
  \*************************/
/***/ (() => {

eval("// \"use strict\";\n{\n  function InBLock() {\n    console.log(\"Try to invoke me outside this block\");\n  }\n}\n// InBLock();\nconsole.log(\"Hello\");\n\nconst t = 200000;\nfor (let i = 0; i < t; i++) {\n  // uncomment to see how 'console logs' slow down things\n  //   console.log(\"Hello\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9iaWdTY3JpcHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLWpzLy4vanMvYmlnU2NyaXB0LmpzP2JhNDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2Ugc3RyaWN0XCI7XG57XG4gIGZ1bmN0aW9uIEluQkxvY2soKSB7XG4gICAgY29uc29sZS5sb2coXCJUcnkgdG8gaW52b2tlIG1lIG91dHNpZGUgdGhpcyBibG9ja1wiKTtcbiAgfVxufVxuLy8gSW5CTG9jaygpO1xuY29uc29sZS5sb2coXCJIZWxsb1wiKTtcblxuY29uc3QgdCA9IDIwMDAwMDtcbmZvciAobGV0IGkgPSAwOyBpIDwgdDsgaSsrKSB7XG4gIC8vIHVuY29tbWVudCB0byBzZWUgaG93ICdjb25zb2xlIGxvZ3MnIHNsb3cgZG93biB0aGluZ3NcbiAgLy8gICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/bigScript.js\n");

/***/ }),

/***/ "./js/debounceAndThrottle.js":
/*!***********************************!*\
  !*** ./js/debounceAndThrottle.js ***!
  \***********************************/
/***/ (() => {

eval("// debouncing\nfunction debouncedFunction(fn, delay) {\n  let timer = null;\n  return function () {\n    let context = this,\n      args = arguments;\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn.apply(context, args);\n    }, delay);\n  };\n}\n\n//throttling\nfunction throttledFunction(fn, interval) {\n  let timer;\n  return function () {\n    if (timer) return;\n    let context = this,\n      args = arguments;\n    timer = setTimeout(() => {\n      fn.apply(context, args);\n      timer = null;\n    }, interval);\n  };\n}\n\nlet inputEleD = document.getElementById(\"myInputDebounce\");\nlet inputEleT = document.getElementById(\"myInputThrottle\");\n\ninputEleD.addEventListener(\"input\", (event) => {\n  debouncedGetData(event.target.value);\n});\n\ninputEleT.addEventListener(\"input\", (event) => {\n  throttledGetData(event.target.value);\n});\n\nfunction getData(val) {\n  console.log(val);\n}\nconst debouncedGetData = debouncedFunction(getData, 1000);\nconst throttledGetData = throttledFunction(getData, 1000);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9kZWJvdW5jZUFuZFRocm90dGxlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtanMvLi9qcy9kZWJvdW5jZUFuZFRocm90dGxlLmpzPzFlMzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGVib3VuY2luZ1xuZnVuY3Rpb24gZGVib3VuY2VkRnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbi8vdGhyb3R0bGluZ1xuZnVuY3Rpb24gdGhyb3R0bGVkRnVuY3Rpb24oZm4sIGludGVydmFsKSB7XG4gIGxldCB0aW1lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGltZXIpIHJldHVybjtcbiAgICBsZXQgY29udGV4dCA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9LCBpbnRlcnZhbCk7XG4gIH07XG59XG5cbmxldCBpbnB1dEVsZUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXREZWJvdW5jZVwiKTtcbmxldCBpbnB1dEVsZVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRUaHJvdHRsZVwiKTtcblxuaW5wdXRFbGVELmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgZGVib3VuY2VkR2V0RGF0YShldmVudC50YXJnZXQudmFsdWUpO1xufSk7XG5cbmlucHV0RWxlVC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIHRocm90dGxlZEdldERhdGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXREYXRhKHZhbCkge1xuICBjb25zb2xlLmxvZyh2YWwpO1xufVxuY29uc3QgZGVib3VuY2VkR2V0RGF0YSA9IGRlYm91bmNlZEZ1bmN0aW9uKGdldERhdGEsIDEwMDApO1xuY29uc3QgdGhyb3R0bGVkR2V0RGF0YSA9IHRocm90dGxlZEZ1bmN0aW9uKGdldERhdGEsIDEwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/debounceAndThrottle.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bigScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigScript */ \"./js/bigScript.js\");\n/* harmony import */ var _bigScript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bigScript__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _debounceAndThrottle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounceAndThrottle */ \"./js/debounceAndThrottle.js\");\n/* harmony import */ var _debounceAndThrottle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_debounceAndThrottle__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUNvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLWpzLy4vanMvaW5kZXguanM/ZWUxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmlnU2NyaXB0IGZyb20gXCIuL2JpZ1NjcmlwdFwiO1xuaW1wb3J0IGRlYm91bmNlQW5kVGhyb3R0bGUgZnJvbSBcIi4vZGVib3VuY2VBbmRUaHJvdHRsZVwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;