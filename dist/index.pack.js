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

/***/ "./classes.ts":
/*!********************!*\
  !*** ./classes.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MainProperty = void 0;\nvar MainProperty = /** @class */ (function () {\n    function MainProperty(src, title, reviews) {\n        this.src = src;\n        this.title = title;\n        this.reviews = reviews;\n    }\n    return MainProperty;\n}());\nexports.MainProperty = MainProperty;\n\n\n//# sourceURL=webpack://project/./classes.ts?");

/***/ }),

/***/ "./enum.ts":
/*!*****************!*\
  !*** ./enum.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LoyaltyUser = exports.Permissions = void 0;\nvar Permissions;\n(function (Permissions) {\n    Permissions[\"ADMIN\"] = \"ADMIN\";\n    Permissions[\"READ_ONLY\"] = \"READ_ONLY\";\n})(Permissions || (exports.Permissions = Permissions = {}));\nvar LoyaltyUser;\n(function (LoyaltyUser) {\n    LoyaltyUser[\"GOLD_USER\"] = \"GOLD_USER\";\n    LoyaltyUser[\"SILVER_USER\"] = \"SILVER_USER\";\n    LoyaltyUser[\"BRONZE_USER\"] = \"BRONZE_USER\";\n})(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));\n\n\n//# sourceURL=webpack://project/./enum.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./utils.ts\");\nvar enum_1 = __webpack_require__(/*! ./enum */ \"./enum.ts\");\nvar classes_1 = __webpack_require__(/*! ./classes */ \"./classes.ts\");\nvar propertyContainer = document.querySelector('.properties');\nvar footer = document.querySelector('.footer');\nvar reviewsContainer = document.querySelector('.reviews');\nvar button = document.querySelector('button');\nvar container = document.querySelector('.container');\nvar mainImage = document.querySelector('#main-image');\nvar isLoggedIn;\nisLoggedIn = true;\n//Reviews\nvar reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: enum_1.LoyaltyUser.GOLD_USER,\n        date: '01-04-2021'\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: enum_1.LoyaltyUser.BRONZE_USER,\n        date: '28-03-2021'\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: enum_1.LoyaltyUser.SILVER_USER,\n        date: '27-03-2021',\n        description: 'Great hosts, location was a bit further than said'\n    },\n];\n//Solutions\nvar you = {\n    firstName: ' Thando',\n    lastName: 'Funeka',\n    permissions: enum_1.Permissions.ADMIN,\n    isReturning: true,\n    age: 20,\n    stayedAt: ['durban', 'johannesburg', 'cape town']\n};\n//Properties\nvar properties = [\n    {\n        image: './images/Colombia-property.jpeg',\n        title: 'Colombian Shack',\n        price: 45,\n        location: {\n            firstLine: 'shack 37',\n            city: 'Bogota',\n            code: 45632,\n            country: 'Colombia'\n        },\n        contactDetails: [1234567890, 'colombian@shack.com'],\n        isAvailable: true\n    },\n    {\n        image: './images/Poland-property.jpg',\n        title: 'Polish Cottage',\n        price: 34,\n        location: {\n            firstLine: 'no 23',\n            city: 'Gdansk',\n            code: 34903,\n            country: 'Poland'\n        },\n        contactDetails: [1234567890, 'polish@cottage.com'],\n        isAvailable: false\n    },\n    {\n        image: './images/London-property.jpeg',\n        title: 'London Flat',\n        price: 23,\n        location: {\n            firstLine: 'flat 15',\n            city: 'London',\n            code: 35433,\n            country: 'United Kingdom'\n        },\n        contactDetails: [1234567890, 'london@flat.com'],\n        isAvailable: true\n    },\n    {\n        image: './images/Malia-hotel.jpeg',\n        title: 'Malia Hotel',\n        price: 35,\n        location: {\n            firstLine: 'Room 4',\n            city: 'Malia',\n            code: 35433,\n            country: 'Malaysia'\n        },\n        contactDetails: [1234567890, 'malia@hotel.com'],\n        isAvailable: false\n    }\n];\n//Functions\n(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\n(0, utils_1.populateUser)(you.isReturning, you.firstName);\n//add properties to the DOM\nfor (var i = 0; i < properties.length; i++) {\n    var card = document.createElement('div');\n    card.classList.add('card');\n    card.innerHTML = properties[i].title;\n    var image_1 = document.createElement('img');\n    image_1.setAttribute('src', properties[i].image);\n    card.appendChild(image_1);\n    propertyContainer.appendChild(card);\n    (0, utils_1.showDetails)(you.permissions === enum_1.Permissions.ADMIN, card, properties[i].price);\n}\nvar count = 0;\nfunction addReviews(array) {\n    if (!count) {\n        count++;\n        var topTwo = (0, utils_1.getTopTwoReviews)(array);\n        for (var i = 0; i < topTwo.length; i++) {\n            var card = document.createElement('div');\n            card.classList.add('review-card');\n            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;\n            reviewsContainer === null || reviewsContainer === void 0 ? void 0 : reviewsContainer.appendChild(card);\n        }\n        container === null || container === void 0 ? void 0 : container.removeChild(button);\n    }\n}\nbutton.addEventListener('click', function () { return addReviews(reviews); });\n//Time, Location and temperature\nvar currentLocation = ['Durban', '12:47', 30];\nfooter.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C';\nvar yourMainProperty = new classes_1.MainProperty('./images/Main-image.jpeg', 'South African House', [{\n        name: 'Olive',\n        stars: 5,\n        loyaltyUser: enum_1.LoyaltyUser.GOLD_USER,\n        date: '12-04-2021'\n    }]);\nvar image = document.createElement('img');\nimage.setAttribute('src', yourMainProperty.src);\nmainImage.appendChild(image);\n\n\n//# sourceURL=webpack://project/./index.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.showReviewTotal = showReviewTotal;\nexports.populateUser = populateUser;\nexports.showDetails = showDetails;\nexports.makeMultiple = makeMultiple;\nexports.getTopTwoReviews = getTopTwoReviews;\n// Add these at the top, outside any function\nvar reviewTotalDisplay = document.querySelector('#reviews');\nvar returningUserDisplay = document.querySelector('#returning-user');\nvar userNameDisplay = document.querySelector('#user-name');\nvar userName = document.querySelector('#user');\nvar enum_1 = __webpack_require__(/*! ./enum */ \"./enum.ts\");\nfunction showReviewTotal(value, reviewer, isLoyalty) {\n    if (reviewTotalDisplay) {\n        var iconDisplay = enum_1.LoyaltyUser.GOLD_USER ? '⭐' : ' ';\n        reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' +\n            reviewer + ' ' + iconDisplay;\n    }\n}\nfunction populateUser(isReturning, userName) {\n    if (returningUserDisplay && isReturning === true) {\n        returningUserDisplay.innerHTML = 'back';\n    }\n    if (userNameDisplay) {\n        userNameDisplay.innerHTML = userName;\n    }\n}\nfunction showDetails(authorityStatus, element, price) {\n    if (authorityStatus) {\n        var priceDisplay = document.createElement('div');\n        priceDisplay.innerHTML = price.toString() + '/night';\n        element.appendChild(priceDisplay);\n    }\n}\nfunction makeMultiple(value) {\n    if (value > 1 || value == 0) {\n        return 's';\n    }\n    else\n        return '';\n}\nfunction getTopTwoReviews(reviews) {\n    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });\n    return sortedReviews.slice(0, 2);\n}\n\n\n//# sourceURL=webpack://project/./utils.ts?");

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