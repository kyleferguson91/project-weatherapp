"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_weatherapp"] = self["webpackChunkproject_weatherapp"] || []).push([["src_modules_buttonlogic_js"],{

/***/ "./src/modules/buttonlogic.js":
/*!************************************!*\
  !*** ./src/modules/buttonlogic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addButtonLogic\": () => (/* binding */ addButtonLogic),\n/* harmony export */   \"addSearchButtonLogic\": () => (/* binding */ addSearchButtonLogic)\n/* harmony export */ });\n// this is a master function that will call all functions to add button logic!\r\nfunction addButtonLogic() {\r\n    addSearchButtonLogic()\r\n}\r\n\r\n\r\n\r\nasync function addSearchButtonLogic() {\r\n\r\n    const searchbutton = document.querySelector('#submitbutton')\r\n\r\n    searchbutton.addEventListener('click', async (e) => {\r\n       \r\n        e.preventDefault()\r\n\r\n\r\n        const input = document.querySelector('#searcher')\r\n        const country = document.querySelectorAll('option')\r\n        let selectedcountry = 'CA';\r\n\r\n        country.forEach((elem,ind,arr) => {\r\n           if (elem.selected) {\r\n            selectedcountry = elem.value\r\n           }\r\n        \r\n        })\r\n\r\n        console.log(input.value, selectedcountry)\r\n   \r\n\r\n\r\n\r\n\r\n        // now wait for main weathergetfunction through script\r\n        let weather = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../script.js */ \"./src/script.js\"))\r\n\r\n\r\n        // now it is imported, wait upon the promise to resolve the response\r\n        // this will console log itself\r\n   \r\n       weather = await weather.importWeather('search', input.value, selectedcountry)\r\n    \r\n       // now we have the relevant variables created within \r\n       //import weather to update the dom accordingly!\r\n\r\n    })\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project-weatherapp/./src/modules/buttonlogic.js?");

/***/ })

}]);