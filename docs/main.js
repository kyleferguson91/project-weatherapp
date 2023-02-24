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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"importWeather\": () => (/* binding */ importWeather)\n/* harmony export */ });\n\r\n\r\n// this function runs the initial domLogic, that which renders the page!!\r\n\r\nasync function domLogic() {\r\n\r\n\r\n    // once we import sdmodule, do something with it!\r\n    let dom = await __webpack_require__.e(/*! import() */ \"src_modules_domLogic_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/domLogic.js */ \"./src/modules/domLogic.js\"))\r\n\r\n\r\n// call the function to render the page initially!\r\n// and call with certain defaults..\r\n    \r\ndom.initialRender()\r\n\r\n    \r\n}\r\n\r\ndomLogic()\r\n\r\n\r\n\r\n\r\n//after we render page call the logic that adds event listeners!\r\n\r\nasync function addEvents() {\r\n\r\n\r\n    // return the import promise of button module\r\n    let events = await __webpack_require__.e(/*! import() */ \"src_modules_buttonlogic_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/buttonlogic.js */ \"./src/modules/buttonlogic.js\"))\r\n\r\n    // now run function to add all logic!\r\n    events.addButtonLogic()\r\n\r\n\r\n\r\n}\r\n\r\naddEvents()\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// this function will import the module that gets the weather data from the api and returns response.json()\r\n// this function will then extract that data into variables\r\n// once we have those variables, we can call dom logic, etc\r\n\r\nasync function importWeather(type, ...args) {\r\ntry {\r\n    \r\n\r\n    // wait for the weather module to import\r\nlet weather = await __webpack_require__.e(/*! import() */ \"src_modules_getweatherfromapi_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/getweatherfromapi.js */ \"./src/modules/getweatherfromapi.js\"))\r\n\r\n// once we have module can run the get weather function with the relevant type and the params..\r\n// since it is async we must await the response\r\n\r\nlet weatherResponse = await weather.getWeather(type, ...args)\r\n\r\n// it returns a resolved promise with the response of the weather object\r\n// log the object which can be filtered for the data we want\r\n\r\n\r\n// filter the data below\r\n// create the data we need\r\n\r\nconst city = weatherResponse.name\r\nconst lat = weatherResponse.coord.lat\r\nconst lon = weatherResponse.coord.lon\r\n\r\nconst tempfeelslike = weatherResponse.main.feels_like\r\nconst temp = weatherResponse.main.temp\r\nconst temphigh = weatherResponse.main.temp_max\r\nconst templow = weatherResponse.main.temp_min\r\nconst humidity = weatherResponse.main.humidity\r\nconst rainchance = ''\r\nconst windspeed = weatherResponse.wind.speed\r\n\r\nconst today = new Date()\r\n\r\n\r\n\r\n\r\n// create a loop to check for relevant weather icons and conditions!\r\nlet multipleconditions, multipledescriptions,maincondition, icon, multipleicons,weathertypemain,weatherdescription\r\nmultipleicons = []\r\nmultipleconditions = []\r\nmultipledescriptions = []\r\n// condition if only one weather condition\r\n\r\nif (weatherResponse.weather.length > 1) {\r\n    console.log('cond length 1',   weatherResponse.weather[0]\r\n    )\r\n\r\n    icon = weatherResponse.weather[0].icon\r\n     weathertypemain = weatherResponse.weather[0].main\r\n weatherdescription = weatherResponse.weather[0].description\r\n}\r\n\r\nelse if (weatherResponse.weather.length == 1) {\r\n\r\n   \r\n\r\n    // for all additional items.. \r\n\r\n    for (let item of weatherResponse.weather) {\r\n\r\n        if (weatherResponse.weather.indexOf(item) == 0) {\r\n             // set the main weather and description to first object and icon\r\n    icon = item.icon\r\n    weathertypemain = item.main\r\n    weatherdescription = item.description\r\n    console.log(item, 'item')\r\n        }\r\n\r\n        else {\r\n            multipleicons.push(item.icon)\r\n            multipleconditions.push(item.main)\r\n            multipledescriptions.push(item.description)\r\n    }\r\n\r\n    }\r\n\r\n}\r\n\r\n//icon now holds the correct code for the image we need!\r\n\r\n\r\n// conditions and icons log\r\nconsole.log('conds icons', icon, weathertypemain, weatherdescription, multipleconditions, multipledescriptions, multipleicons)\r\n\r\n\r\n// log the data here\r\n\r\nconsole.log(city, weathertypemain,weatherdescription, tempfeelslike, temp,temphigh,templow,humidity,rainchance, windspeed, today)\r\n\r\n\r\n// we can also call the function to populate the five day forecast data for us\r\n// as we have the lat and long from above\r\nconst forecast = await weather.getForecast(lat,lon)\r\n\r\n\r\n\r\nconsole.log('FIVE DAY FORECAST BELOW')\r\n\r\nfor  (let index of forecast.list) {\r\nconsole.log('index')\r\n}\r\n\r\n\r\n\r\n// now we call the dom update function any time we run this function\r\n// with the relevant variables created above\r\n\r\nconst dom = await __webpack_require__.e(/*! import() */ \"src_modules_domLogic_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../src/modules/domLogic.js */ \"./src/modules/domLogic.js\"))\r\n\r\ndom.initialRender(today, weatherdescription)\r\n\r\n\r\n}\r\n\r\n// catch an error in importWeather async function\r\ncatch(err) {\r\n    console.log('error in importWeather', err)\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\nconsole.log('RUN FUNCTION TO GET WEATHER AND POST FORECAST AS WELL')\r\n//importWeather('latlong', '43.3668', '-80.9497')\r\nimportWeather('search', 'stratford', 'CA')\r\n// importWeather('postal', 'N4Z', 'CA')\r\n\r\n\r\n// we will run import weather when we need weather!\n\n//# sourceURL=webpack://project-weatherapp/./src/script.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "project-weatherapp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject_weatherapp"] = self["webpackChunkproject_weatherapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;