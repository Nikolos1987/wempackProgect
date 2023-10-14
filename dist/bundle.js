/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const soundData = [\n    {\n        name: \"summer\",\n        path: \"files/assets/sounds/summer.mp3\",\n        chect: false,\n        audio: new Audio(\"files/assets/sounds/summer.mp3\"),\n        value: 100\n    },\n    {\n        name: \"rain\",\n        path: \"files/assets/sounds/rain.mp3\",\n        chect: false,\n        audio: new Audio(\"files/assets/sounds/rain.mp3\"),\n        value: 50\n    },\n\n    {\n        name: \"winter\",\n        path: \"files/assets/sounds/winter.mp3\",\n        chect: false,\n        audio: new Audio(\"files/assets/sounds/winter.mp3\"),\n        value: 100\n    },\n]\nconst startAudio = () => {\n    soundData.forEach(e => {\n        if (e.chect) {\n            e.audio.play();\n            e.value = e.value\n        }\n        else {\n            e.audio.pause();\n            outputUpdate(100)\n        }\n    })\n}\nconst start = (names) => {\n    soundData.forEach(e => {\n        if (e.name == names) {\n            e.chect = !e.chect;\n        }\n        else {\n            e.chect = false;\n        }\n    })\n    startAudio();\n    chengebg(names)\n    range(names)\n    console.log(names);\n\n}\nconst btn = document.querySelectorAll('button')\nbtn.forEach(e => e.addEventListener('click', (e) => {\n    let name = e.target.dataset.name;\n    start(name);\n}))\n\n\n\nfunction outputUpdate(vol) {\n    console.log(vol);\n    soundData.forEach(e => {\n        e.audio.volume = vol / 100;\n    })\n}\n\nlet inout = document.querySelector('input').value\nconst chengebg = (url) => {\n    document.querySelector('.blur').style.backgroundImage = `url('files/assets/${url}-bg.jpg')`\n}\n\n\nconst range = (names) => {\n    let inpt = document.querySelectorAll('.range')\n    let index = soundData.findIndex(e => e.name == names)\n    inpt.forEach(e => {\n        e.style.display = 'none'\n    })\n    inpt[index].style.display = 'block'\n}\n\n\n\n\n//# sourceURL=webpack://webpackprogect/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;