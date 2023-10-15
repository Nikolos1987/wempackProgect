/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackprogect/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soundData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soundData.js */ \"./src/soundData.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\nconst startAudio = () => {\n    _soundData_js__WEBPACK_IMPORTED_MODULE_0__.soundData.forEach(e => {\n        if (e.chect) {\n            e.audio.play();\n            e.value = e.value\n        }\n        else {\n            e.audio.pause();\n            outputUpdate(100)\n        }\n    })\n}\nconst start = (names) => {\n    _soundData_js__WEBPACK_IMPORTED_MODULE_0__.soundData.forEach(e => {\n        if (e.name == names) {\n            e.chect = !e.chect;\n        }\n        else {\n            e.chect = false;\n        }\n    })\n    startAudio();\n    chengebg(names);\n    range(names);\n}\nconst btn = document.querySelectorAll('button');\nbtn.forEach(e => e.addEventListener('click', (e) => {\n    let name = e.target.dataset.name;\n    start(name);\n}))\nfunction outputUpdate(vol) {\n    _soundData_js__WEBPACK_IMPORTED_MODULE_0__.soundData.forEach(e => {\n        e.audio.volume = vol / 100;\n    });\n}\n\nlet inout = document.querySelector('input').value\nconst chengebg = (url) => {\n    document.querySelector('.blur').style.backgroundImage = `url('files/assets/${url}-bg.jpg')`\n}\nconst range = (names) => {\n    let inpt = document.querySelectorAll('.range')\n    let index = _soundData_js__WEBPACK_IMPORTED_MODULE_0__.soundData.findIndex(e => e.name == names)\n    inpt.forEach(e => {\n        e.style.display = 'none'\n    })\n    inpt[index].style.display = 'block'\n}\n\n\n\n\n//# sourceURL=webpack://webpackprogect/./src/index.js?");

/***/ }),

/***/ "./src/soundData.js":
/*!**************************!*\
  !*** ./src/soundData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   soundData: () => (/* binding */ soundData)\n/* harmony export */ });\nconst soundData = [\n    {\n        name: \"summer\",\n        path: \"files/assets/sounds/summer.mp3\",\n        chect: false,\n        audio: new Audio(\"files/assets/sounds/summer.mp3\"),\n        value: 100\n    },\n    {\n        name: \"rain\",\n        path: \"files/assets/sounds/rain.mp3\",\n        chect: false,\n        audio: new Audio(\"files/assets/sounds/rain.mp3\"),\n        value: 50\n    },\n\n    {\n        name: \"winter\",\n        path: \"files/assets/sounds/winter.mp3\",\n        chect: false,\n        audio: new Audio(\"files/assets/sounds/winter.mp3\"),\n        value: 100\n    },\n]\n\n\n\n//# sourceURL=webpack://webpackprogect/./src/soundData.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;