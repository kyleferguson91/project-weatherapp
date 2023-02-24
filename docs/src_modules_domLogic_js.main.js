"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_weatherapp"] = self["webpackChunkproject_weatherapp"] || []).push([["src_modules_domLogic_js"],{

/***/ "./src/modules/domLogic.js":
/*!*********************************!*\
  !*** ./src/modules/domLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialRender\": () => (/* binding */ initialRender)\n/* harmony export */ });\n/* harmony import */ var _images_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/bg.jpg */ \"./src/images/bg.jpg\");\n\r\n\r\nasync function initialRender(today = new Date(), type = \"Wind\", city = \"Stratford\") {\r\n\r\n// set background image to image\r\nconst body = document.querySelector('body')\r\nbody.style.backgroundImage = `url(${_images_bg_jpg__WEBPACK_IMPORTED_MODULE_0__})`\r\n\r\n\r\n\r\n\r\nconst date = document.querySelector('.date')\r\n// set date to todays value\r\ndate.textContent = today\r\n\r\n\r\n\r\n\r\n// set type of weather in dom to the current type of weather\r\nconst typeofweather = document.querySelector('.typeweather')\r\ntypeofweather.textContent = type\r\n\r\nconst cityselect = document.querySelector('.city')\r\ncityselect.textContent = city\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://project-weatherapp/./src/modules/domLogic.js?");

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd4d3b8442fc7919c47e.jpg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/bg.jpg?");

/***/ })

}]);