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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./utils.ts\");\nvar propertyContainer = document.querySelector('.properties');\nvar footer = document.querySelector('.footer');\nvar isOpen;\n//Reviews\nvar reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: true,\n        date: '01-04-2021'\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: false,\n        date: '28-03-2021'\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: true,\n        date: '27-03-2021'\n    },\n];\n//Solutions\nvar you = {\n    firstName: ' Thando',\n    lastName: 'Funeka',\n    isReturning: true,\n    age: 20,\n    stayedAt: ['durban', 'johannesburg', 'cape town']\n};\n//Properties\nvar properties = [\n    {\n        image: 'images/Colombia-property.jpg',\n        title: 'Colombian Shack',\n        price: 45,\n        location: {\n            firstLine: 'shack 37',\n            city: 'Bogota',\n            code: 45632,\n            country: 'Colombia'\n        },\n        contactDetails: [1234567890, 'colombian@shack.com'],\n        isAvailable: true\n    },\n    {\n        image: 'images/Polish-property.jpg',\n        title: 'Polish Cottage',\n        price: 34,\n        location: {\n            firstLine: 'no 23',\n            city: 'Gdansk',\n            code: 34903,\n            country: 'Poland'\n        },\n        contactDetails: [1234567890, 'polish@cottage.com'],\n        isAvailable: false\n    },\n    {\n        image: 'images/London-property.jpg',\n        title: 'London Flat',\n        price: 23,\n        location: {\n            firstLine: 'flat 15',\n            city: 'London',\n            code: 35433,\n            country: 'United Kingdom'\n        },\n        contactDetails: [1234567890, 'london@flat.com'],\n        isAvailable: true\n    }\n];\n//Functions\n(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\n(0, utils_1.populateUser)(you.isReturning, you.firstName + you.lastName);\n//add properties to the DOM\nfor (var i = 0; i < properties.length; i++) {\n    var card = document.createElement('div');\n    card.classList.add('card');\n    card.innerHTML = properties[i].title;\n    var image = document.createElement('img');\n    image.setAttribute('src', properties[i].image);\n    card.appendChild(image);\n    propertyContainer === null || propertyContainer === void 0 ? void 0 : propertyContainer.appendChild(card);\n}\n//Time, Location and temperature\nvar currentLocation = ['Durban', '12:47', 30];\nfooter.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C';\n\n\n//# sourceURL=webpack://project/./index.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.showReviewTotal = showReviewTotal;\nexports.populateUser = populateUser;\nvar reviewTotalDisplay = document.querySelector('#reviews');\nvar returningUserDisplay = document.querySelector('#returning-user');\nvar userNameDisplay = document.querySelector('#user-name');\nfunction showReviewTotal(value, reviewer, isLoyalty) {\n    var iconDisplay = isLoyalty ? '&#9733;' : '';\n    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '| last reviewed by ' +\n        reviewer + ' ' + iconDisplay;\n}\nfunction populateUser(isReturning, userName) {\n    if (isReturning) {\n        returningUserDisplay.innerHTML = 'back';\n    }\n    userNameDisplay.innerHTML = userName;\n}\n\n\n//# sourceURL=webpack://project/./utils.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;