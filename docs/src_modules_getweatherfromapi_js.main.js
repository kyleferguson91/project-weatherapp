"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_weatherapp"] = self["webpackChunkproject_weatherapp"] || []).push([["src_modules_getweatherfromapi_js"],{

/***/ "./src/modules/getweatherfromapi.js":
/*!******************************************!*\
  !*** ./src/modules/getweatherfromapi.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getForecast\": () => (/* binding */ getForecast),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n\r\n// this module will get the relevant weather data from the API based off of the input\r\n// it will be called with a specific type to determine the API call to make\r\n// other than different API calls all processing on returned object is the same\r\n\r\n\r\n\r\n// api key and units stored for default\r\n\r\nlet key = 'e7586190b18aabfa5360d51959d40794'\r\nlet units = 'metric'\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function getWeather(type, units, ...args) {\r\n//console.log(units, 1298371928379281)\r\n// the function will take the type, based on the type it will make the appropriate api call from api object\r\nconst apiObject = {\r\n    search:`https://api.openweathermap.org/data/2.5/weather?q=${args[0]},${args[1]}&appid=${key}&units=${units}`,\r\n    postal:`https://api.openweathermap.org/data/2.5/weather?zip=${args[0]},${args[1]}&appid=${key}&units=${units}`,\r\n    latlong:`https://api.openweathermap.org/data/2.5/weather?lat=${args[0]}&lon=${args[1]}&appid=${key}&units=${units}`,\r\n   \r\n}\r\n\r\n// depending on the type and arguments passed, await the returned response\r\n\r\nlet response = await fetch(apiObject[type], {mode: 'cors'})\r\n\r\n\r\n// extract json out of that response which returns a promise\r\nresponse = await response.json()\r\n\r\n\r\n// after response json promise resolves, log the response\r\nreturn response\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n// THIS FUNCTION WILL GET THE 5 DAY FORECAST FROM THE RELEVANT LONG AND LAT OF THE ABOVE FUNCTION\r\n\r\n\r\nasync function getForecast(lat,lon) {\r\n\r\n    try {\r\n         let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`)\r\n        \r\n\r\n    response = response.json()\r\n    return response\r\n        }\r\n\r\n        catch(err) {\r\n            console.log('error in getForecast', err) \r\n        }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project-weatherapp/./src/modules/getweatherfromapi.js?");

/***/ })

}]);