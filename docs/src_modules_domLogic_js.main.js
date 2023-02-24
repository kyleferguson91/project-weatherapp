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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeUnit\": () => (/* binding */ changeUnit),\n/* harmony export */   \"forecastLogic\": () => (/* binding */ forecastLogic),\n/* harmony export */   \"initialRender\": () => (/* binding */ initialRender),\n/* harmony export */   \"setWeatherImage\": () => (/* binding */ setWeatherImage)\n/* harmony export */ });\n/* harmony import */ var _images_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/bg.jpg */ \"./src/images/bg.jpg\");\n/* harmony import */ var _images_thermometer_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/thermometer-svgrepo-com.svg */ \"./src/images/thermometer-svgrepo-com.svg\");\n/* harmony import */ var _images_moisture_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/moisture-svgrepo-com.svg */ \"./src/images/moisture-svgrepo-com.svg\");\n/* harmony import */ var _images_wind_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/wind-svgrepo-com.svg */ \"./src/images/wind-svgrepo-com.svg\");\n/* harmony import */ var _images_temp_cold_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/temp-cold-svgrepo-com.svg */ \"./src/images/temp-cold-svgrepo-com.svg\");\n/* harmony import */ var _images_temperature_feels_like_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/temperature-feels-like-svgrepo-com.svg */ \"./src/images/temperature-feels-like-svgrepo-com.svg\");\n//import bgimage from '../images/bg1.svg'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet speed = 'm/s'\r\n\r\n// this function will run on the main page render, rerender and load!\r\nasync function initialRender(weatherObject, forecastObject, units) {\r\n\r\n// set background image to image\r\nconst body = document.querySelector('body')\r\nbody.style.backgroundImage = `url(${_images_bg_jpg__WEBPACK_IMPORTED_MODULE_0__})`\r\n\r\n\r\n// set city to selected city \r\nconst cityselect = document.querySelector('.city')\r\ncityselect.textContent = `${weatherObject.city}, ${weatherObject.country}`\r\n\r\n\r\n// set date to todays value\r\nconst date = document.querySelector('.date')\r\ndate.textContent = weatherObject.today\r\n\r\n\r\n\r\n//set thermometer image\r\nconst thermometer = document.querySelector('.thermometer')\r\nthermometer.src = _images_thermometer_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__\r\n\r\n// set the temp to the temp!\r\nconst temp = document.querySelector('.currenttemp')\r\ntemp.textContent = weatherObject.temp + '°'\r\n\r\n\r\n\r\n//set moisture image\r\nconst moisture = document.querySelector('.moisture')\r\nmoisture.src = _images_moisture_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__\r\n\r\n// set the humidity to the humidity!\r\nconst humidity = document.querySelector('.humidity')\r\nhumidity.textContent = weatherObject.humidity\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(units,92389047982374234)\r\n\r\n    \r\nconst slider = document.querySelector('.slider')\r\n// set the slider position based on units\r\n\r\nif (units == 'imperial') {\r\n    speed = 'mi/hr'\r\nslider.classList.add('moveselector')\r\n\r\n}\r\nelse if (units == \"metric\") {\r\n    speed = 'm/s'\r\nslider.classList.remove('moveselector')\r\n\r\n}\r\n\r\n\r\n\r\n\r\n//set wind speed image\r\nconst windspeed = document.querySelector('.windspeed')\r\nwindspeed.src = _images_wind_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__\r\n\r\n// set the windspeed\r\nconst windspeedtext = document.querySelector('.windspeedtext')\r\nwindspeedtext.textContent = weatherObject.windspeed + ' ' + speed\r\n\r\n\r\n\r\n//set lowtemp speed image\r\nconst lowtemp = document.querySelector('.lowtempimage')\r\nlowtemp.src = _images_temp_cold_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__\r\n\r\n// set the lowtemp\r\nconst lowtemptext = document.querySelector('.lowtemptext')\r\nlowtemptext.textContent = weatherObject.templow + '°'\r\n\r\n\r\n\r\n//set feelslike image\r\nconst feelslike = document.querySelector('.feelslike')\r\nfeelslike.src = _images_temperature_feels_like_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ \r\n\r\n// set the feelslike\r\nconst feelsliketext = document.querySelector('.feelsliketext')\r\nfeelsliketext.textContent = weatherObject.tempfeelslike + '°'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// set the weather image based on icon code!\r\nsetWeatherImage(weatherObject.icon)\r\n// set type of weather in dom to the current type of weather\r\nconst descriptionofweather = document.querySelector('.descriptionofweather')\r\ndescriptionofweather.textContent = weatherObject.weatherdescription\r\n\r\n\r\n\r\n\r\n\r\n//call function to build the 5 day forecast logic!\r\nforecastLogic(forecastObject)\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n// this function will set the weather image based on the main type!\r\nasync function setWeatherImage(icon) {\r\n\r\nconst image = document.querySelector('.mainweatherimage')\r\n\r\nlet src = `http://openweathermap.org/img/wn/${icon}@2x.png`\r\n\r\n\r\nimage.src = src\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n// this function will be called by dom logic to build the 5 day forecast layout!!\r\n\r\nasync function forecastLogic(forecastObject) {\r\n\r\nlet forecasticons = [], forecasttemps = [], forecastdescriptions = []\r\n\r\n\r\n    // first we need to determine which day it is right now!\r\nlet dates = await __webpack_require__.e(/*! import() */ \"vendors-node_modules_date-fns_esm_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! date-fns */ \"./node_modules/date-fns/esm/index.js\"))\r\nlet today = dates.format(new Date(), 'EEEE')\r\nconsole.log(today, 'today in forcastlogic')\r\n\r\n\r\n\r\n\r\n// we can use the function to add the days to the current day, and then \r\n// format it into the name of the day of the week, which we can append to the forecast children!\r\n\r\nconst forecastdays = document.querySelectorAll('.forecastday')\r\nlet daystotake = []\r\n// loop through the days, add each day onto the relevant child\r\n\r\nlet i = 1\r\nwhile (i < 6) {\r\n   // console.log()\r\n    forecastdays[i-1].textContent = dates.format(new Date(dates.addDays(new Date(), i)), 'EEEE')\r\n    daystotake.push(dates.format(new Date(dates.addDays(new Date(), i)), 'EEEE'))\r\n    i++\r\n}\r\n\r\n\r\n// now that the day text has been set, we must set the data based on the response\r\n// there are several responses from the api, lets filter them \r\n\r\n\r\n\r\nfor (let object of forecastObject) \r\n{\r\n\r\n    // if the day is today, skip the logic!\r\n    if (dates.format(new Date(object.dt*1000), 'EEEE') == today) {\r\n       continue; \r\n    }\r\n\r\n        // if the day is included in the days to take, take the first instance of it\r\n    // then skip all others\r\n\r\n    else if (daystotake.includes(dates.format(new Date(object.dt*1000), 'EEEE'))) {\r\n\r\n\r\n       // console.log('pww', dates.format(new Date(object.dt*1000), 'EEEE'))\r\n        // take the information once, then remove it from the array so it is not checked again..\r\n\r\n        //extract the information we want into arrays..\r\n        // we want the temp, the kind of weather, and the icon code!\r\n        \r\n\r\n        // ideally this part is when we should call a function from dom logic, \r\n        // but we made this in dom logic, should belong in a different module!\r\n\r\n        // add the values into our arrays \r\n\r\nforecasticons.push(object.weather[0].icon)\r\n\r\nforecastdescriptions.push(object.weather[0].description)\r\n\r\nforecasttemps.push(object.main.temp)\r\n\r\ndaystotake.splice(daystotake.indexOf(dates.format(new Date(object.dt*1000), 'EEEE')), 1)\r\n\r\n    }\r\n    \r\n\r\n\r\n\r\n}\r\n//console.log(forecasttemps, forecasticons, forecastdescriptions)\r\n\r\n\r\n// now we update the forecast with this info\r\n\r\nconst descriptions = document.querySelectorAll('.weatherdescription')\r\nconst forecasttemp = document.querySelectorAll('.forecasttemp')\r\nconst forecastimages = document.querySelectorAll('.forecastimage')\r\n\r\n\r\n// we want to supply the array values to each of the description values at a 1-1 ratio\r\n\r\nfor (let index in forecastdescriptions) {\r\n  //  console.log(index)\r\ndescriptions[index].textContent = forecastdescriptions[index]\r\nforecasttemp[index].textContent = forecasttemps[index] + '°'\r\nforecastimages[index].src =  `http://openweathermap.org/img/wn/${forecasticons[index]}@2x.png`\r\n\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\nasync function changeUnit(unit) {\r\n\r\n// we want to call the API with this function to get new weather info\r\n// we only want to update the units for each value..\r\n// if the unit is metric do one thing, if imperial do another\r\n\r\n\r\nconst temp = document.querySelector('.currenttemp')\r\nconst forecasttemps = document.querySelectorAll('.forecasttemp')\r\nconst windspeedtext = document.querySelector('.windspeedtext')\r\n// set the lowtemp\r\nconst lowtemptext = document.querySelector('.lowtemptext')\r\n// set the feelslike\r\nconst feelsliketext = document.querySelector('.feelsliketext')\r\n\r\n\r\n\r\n\r\nconsole.log(windspeedtext.textContent)\r\n\r\n\r\nfunction converttoC(value) {\r\n    return (value - 32) * (5/9)\r\n }\r\nfunction converttoF(value) {\r\n    return (value*(9/5)) + 32\r\n}\r\n\r\nfunction converttomihr(value) {\r\n    return value*2.237\r\n}\r\nfunction converttoms(value) {\r\n    return value/2.237\r\n}\r\n\r\n\r\n\r\n\r\nif (unit == 'metric') {\r\n// assume it was imperial before..\r\n// all the same except windspeed.\r\ntemp.textContent =  converttoC(parseFloat(temp.textContent)).toFixed(2)+ '°'\r\nspeed = 'm/s'\r\nwindspeedtext.textContent = converttoms(parseFloat(windspeedtext.textContent)).toFixed(2) + ' ' + speed\r\nlowtemptext.textContent = converttoC(parseFloat(lowtemptext.textContent)).toFixed(2)+ '°'\r\nfeelsliketext.textContent = converttoC(parseFloat(feelsliketext.textContent)).toFixed(2)+ '°'\r\n\r\n\r\n\r\n\r\nforecasttemps.forEach((elem,ind,arr) => {\r\n    elem.textContent = converttoC(parseFloat(elem.textContent)).toFixed(2) + '°'\r\n   \r\n  })\r\n}\r\n\r\nelse if (unit == 'imperial') {\r\n    // assume it was metric before\r\n    // all the same except windspeed\r\n    temp.textContent =  converttoF(parseFloat(temp.textContent)).toFixed(2)+ '°'\r\n    speed = 'mi/hr'\r\n    windspeedtext.textContent = converttomihr(parseFloat(windspeedtext.textContent)).toFixed(2) + ' ' + speed\r\n    lowtemptext.textContent = converttoF(parseFloat(lowtemptext.textContent)).toFixed(2)+ '°'\r\n    feelsliketext.textContent = converttoF(parseFloat(feelsliketext.textContent)).toFixed(2)+ '°'\r\n\r\n\r\n    forecasttemps.forEach((elem,ind,arr) => {\r\n        elem.textContent = converttoF(parseFloat(elem.textContent)).toFixed(2) + '°'\r\n   \r\n      })\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project-weatherapp/./src/modules/domLogic.js?");

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd4d3b8442fc7919c47e.jpg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/bg.jpg?");

/***/ }),

/***/ "./src/images/moisture-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/images/moisture-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"508cc00784c916b5420d.svg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/moisture-svgrepo-com.svg?");

/***/ }),

/***/ "./src/images/temp-cold-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/images/temp-cold-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4bc5c0ee555b455793e6.svg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/temp-cold-svgrepo-com.svg?");

/***/ }),

/***/ "./src/images/temperature-feels-like-svgrepo-com.svg":
/*!***********************************************************!*\
  !*** ./src/images/temperature-feels-like-svgrepo-com.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"319220b42afbe0f087d7.svg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/temperature-feels-like-svgrepo-com.svg?");

/***/ }),

/***/ "./src/images/thermometer-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./src/images/thermometer-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cf86b9b3cd7a70008e6.svg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/thermometer-svgrepo-com.svg?");

/***/ }),

/***/ "./src/images/wind-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/images/wind-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b0526c3b690a98eb07c.svg\";\n\n//# sourceURL=webpack://project-weatherapp/./src/images/wind-svgrepo-com.svg?");

/***/ })

}]);