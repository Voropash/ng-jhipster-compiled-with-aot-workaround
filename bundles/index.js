(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/http"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("rxjs/Rx"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/http", "@angular/common", "@angular/forms", "rxjs/Observable", "rxjs/Rx", "rxjs/add/observable/of", "rxjs/add/operator/map", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["ng-jhipster"] = factory(require("@angular/core"), require("@angular/http"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("rxjs/Rx"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/toArray"));
	else
		root["ng-jhipster"] = factory(root["@angular/core"], root["@angular/http"], root["@angular/common"], root["@angular/forms"], root["rxjs/Observable"], root["rxjs/Rx"], root["rxjs/add/observable/of"], root["rxjs/add/operator/map"], root["rxjs/add/operator/merge"], root["rxjs/add/operator/share"], root["rxjs/add/operator/toArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ConfigService = (function () {
    function ConfigService(moduleConfig) {
        this.CONFIG_OPTIONS = new __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ModuleConfig */]();
        this.setProperty('sortIcon', moduleConfig);
        this.setProperty('sortAscIcon', moduleConfig);
        this.setProperty('sortDescIcon', moduleConfig);
        this.setProperty('sortIconSelector', moduleConfig);
        this.setProperty('i18nEnabled', moduleConfig);
        this.setProperty('defaultI18nLocation', moduleConfig);
        this.setProperty('defaultI18nLang', moduleConfig);
        this.setProperty('noi18nMessage', moduleConfig);
    }
    ConfigService.prototype.getConfig = function () {
        return this.CONFIG_OPTIONS;
    };
    ConfigService.prototype.setProperty = function (property, moduleConfig) {
        this.CONFIG_OPTIONS[property] = (moduleConfig && moduleConfig[property]) ? moduleConfig[property] : this.CONFIG_OPTIONS[property];
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config__["a" /* ModuleConfig */]])
], ConfigService);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__translate_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TranslateStaticLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TranslateService; });









var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
var TranslateStaticLoader = (function () {
    function TranslateStaticLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = "i18n"; }
        if (suffix === void 0) { suffix = ".json"; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    TranslateStaticLoader.prototype.getTranslation = function (lang) {
        return this.http.get(this.prefix + "/" + lang + this.suffix)
            .map(function (res) { return res.json(); });
    };
    return TranslateStaticLoader;
}());
var TranslateService = (function () {
    /**
     *
     * @param currentLoader An instance of the loader currently used
     * @param missingTranslationHandler A handler for missing translations.
     */
    function TranslateService(currentLoader, parser, missingTranslationHandler) {
        this.currentLoader = currentLoader;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.translations = {};
        this.langs = [];
    }
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        this.defaultLang = lang;
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        var pending;
        // check if this language is available
        if (typeof this.translations[lang] === "undefined") {
            // not available, ask for it
            pending = this.getTranslation(lang);
        }
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.subscribe(function (res) {
                _this.changeLang(lang);
            }, function (err) {
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = this.currentLoader.getTranslation(lang).share();
        this.pending.subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = undefined;
        }, function (err) {
            _this.pending = undefined;
        });
        return this.pending;
    };
    /**
     * Manually sets an object of translations for a given language
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        if (shouldMerge && this.translations[lang]) {
            Object.assign(this.translations[lang], translations);
            this.onTranslationChange.emit({ translations: translations, lang: lang });
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (!res && this.missingTranslationHandler) {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return res !== undefined ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.pending.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = value;
        this.updateLangs();
        this.onTranslationChange.emit({ translations: (_a = {}, _a[key] = value, _a), lang: lang });
        var _a;
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    TranslateService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = [
        { type: TranslateLoader, },
        { type: __WEBPACK_IMPORTED_MODULE_7__translate_parser__["a" /* TranslateParser */], },
        { type: MissingTranslationHandler, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    ];
    return TranslateService;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equals;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDefined;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["d"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony export translateLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });










function translateLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["c" /* TranslateStaticLoader */](http);
}
var TranslateModule = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["a" /* TranslateLoader */],
            useFactory: translateLoaderFactory,
            deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]]
        }; }
        return {
            ngModule: TranslateModule,
            providers: [
                providedLoader,
                __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["d" /* TranslateService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__["b" /* DefaultTranslateParser */] }
            ]
        };
    };
    TranslateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__["a" /* TranslatePipe */],
                        __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                        __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__["a" /* TranslatePipe */],
                        __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                    ]
                },] },
    ];
    /** @nocollapse */
    TranslateModule.ctorParameters = [];
    return TranslateModule;
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultTranslateParser; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
var DefaultTranslateParser = (function (_super) {
    __extends(DefaultTranslateParser, _super);
    function DefaultTranslateParser() {
        _super.apply(this, arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    DefaultTranslateParser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(r) ? r : substring;
        });
    };
    DefaultTranslateParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    DefaultTranslateParser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DefaultTranslateParser.ctorParameters = [];
    return DefaultTranslateParser;
}(TranslateParser));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jhi_item_count_component__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__jhi_item_count_component__["a"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ModuleConfig = (function () {
    function ModuleConfig() {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sortIconSelector = 'span.fa';
        this.i18nEnabled = false;
        this.defaultI18nLocation = 'global';
        this.defaultI18nLang = 'en';
        this.noi18nMessage = 'translation-not-found';
    }
    return ModuleConfig;
}());
ModuleConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ModuleConfig);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maxbytes_directive__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__maxbytes_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minbytes_directive__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__minbytes_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_directive__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__sort_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_by_directive__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__sort_by_directive__["a"]; });






/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numberOfBytes;
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function numberOfBytes(base64String) {
    return base64String.length / 4 * 3 - paddingSize(base64String);
    function endsWith(suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    function paddingSize(value) {
        if (endsWith('==', value)) {
            return 2;
        }
        if (endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiSortDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var JhiSortDirective = (function () {
    function JhiSortDirective(el, renderer, configService) {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sortIconSelector = 'span.fa';
        this.predicateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ascendingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = el.nativeElement;
        var config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
        this.sortIconSelector = config.sortIconSelector;
    }
    JhiSortDirective.prototype.sort = function (field) {
        this.resetClasses();
        if (field !== this.predicate) {
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    };
    JhiSortDirective.prototype.resetClasses = function () {
        var _this = this;
        var allThIcons = this.element.querySelectorAll(this.sortIconSelector);
        allThIcons.forEach(function (value) {
            value.classList.remove(_this.sortAscIcon);
            value.classList.remove(_this.sortDescIcon);
            value.classList.add(_this.sortIcon);
        });
    };
    ;
    return JhiSortDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], JhiSortDirective.prototype, "predicate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], JhiSortDirective.prototype, "ascending", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], JhiSortDirective.prototype, "callback", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JhiSortDirective.prototype, "predicateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JhiSortDirective.prototype, "ascendingChange", void 0);
JhiSortDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[jhiSort]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]])
], JhiSortDirective);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_partial_loader__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__translate_partial_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_service__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__language_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jhi_translate_directive__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__jhi_translate_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jhi_missing_translation_config__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__jhi_missing_translation_config__["a"]; });






/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.filterByStringAndField = function (filter, field) {
        return function (value) {
            return !filter || (value[field] && value[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        };
    };
    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    FilterPipe.prototype.filterByString = function (filter) {
        return function (value) {
            return !filter || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        };
    };
    FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter === value;
        };
    };
    FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var i = 0, keys = Object.keys(filter); i < keys.length; i++) {
                var key = keys[i];
                var type = typeof value[key];
                var isMatching = void 0;
                if (type === 'string') {
                    isMatching = _this.filterByString(filter[key])(value[key]);
                }
                else if (type === 'object') {
                    isMatching = _this.filterByObject(filter[key])(value[key]);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(value[key]);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    FilterPipe.prototype.transform = function (input, filter, field) {
        if (!filter) {
            return input;
        }
        var type = typeof filter;
        if (type === 'string') {
            if (field) {
                return input.filter(this.filterByStringAndField(filter, field));
            }
            return input.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return input.filter(this.filterByObject(filter));
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter', pure: false })
], FilterPipe);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate_characters_pipe__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__truncate_characters_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truncate_words_pipe__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__truncate_words_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_by_pipe__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__order_by_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_pipe__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pure_filter_pipe__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__pure_filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capitalize_pipe__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys_pipe__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__keys_pipe__["a"]; });









/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_util_service__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_links_service__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__parse_links_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_util_service__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__data_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_util_service__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__date_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_manager_service__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__event_manager_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_service__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base64_service__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__base64_service__["a"]; });









/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(event.translations);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (translations) {
        var nodes = this.element.nativeElement.childNodes;
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                }
                else {
                    var content = node.textContent.trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = node.textContent;
                        }
                        else if (node.originalContent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(translations)) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            var interpolateParams = this.translateParams;
            if (node.lastKey === key && this.lastParams === interpolateParams) {
                return;
            }
            this.lastParams = interpolateParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = node.textContent;
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                node.textContent = _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue);
            };
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, interpolateParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, interpolateParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
    };
    TranslateDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[translate],[ng2-translate]'
                },] },
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["d" /* TranslateService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ];
    TranslateDirective.propDecorators = {
        'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TranslateDirective;
}());


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    TranslatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'translate',
                    pure: false // required to update the value when the promise is resolved
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["d" /* TranslateService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ];
    return TranslatePipe;
}());


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_jhi_components__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_language__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_config_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_pipe__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__src_pipe__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_directive__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__src_directive__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__src_directive__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__src_directive__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_9__src_directive__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_service__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_10__src_service__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_component__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_11__src_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_5__src_language__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__src_language__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_5__src_language__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_5__src_language__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_interceptor__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_12__src_interceptor__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_12__src_interceptor__["b"]; });
/* harmony export (immutable) */ __webpack_exports__["a"] = translatePartialLoader;
/* harmony export (immutable) */ __webpack_exports__["b"] = missingTranslationHandler;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgJhipsterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








// Re export the files






function translatePartialLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__src_language__["a" /* TranslatePartialLoader */](http, 'i18n', '.json');
}
function missingTranslationHandler(configService) {
    return new __WEBPACK_IMPORTED_MODULE_5__src_language__["d" /* JhiMissingTranslationHandler */](configService);
}
var NgJhipsterModule = NgJhipsterModule_1 = (function () {
    function NgJhipsterModule() {
    }
    NgJhipsterModule.forRoot = function (moduleConfig) {
        return {
            ngModule: NgJhipsterModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["a" /* JHI_SERVICES */].concat([
                __WEBPACK_IMPORTED_MODULE_5__src_language__["b" /* JhiLanguageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__src_config__["a" /* ModuleConfig */], useValue: moduleConfig }
            ])
        };
    };
    return NgJhipsterModule;
}());
NgJhipsterModule = NgJhipsterModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["a" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateLoader */],
                useFactory: translatePartialLoader,
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]]
            }),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["b" /* JHI_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["c" /* JHI_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["d" /* JHI_COMPONENTS */], [
            __WEBPACK_IMPORTED_MODULE_5__src_language__["c" /* JhiTranslateComponent */]
        ]),
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* MissingTranslationHandler */], useFactory: missingTranslationHandler, deps: [__WEBPACK_IMPORTED_MODULE_7__src_config_service__["a" /* ConfigService */]]
            }
        ],
        exports: __WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["b" /* JHI_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["c" /* JHI_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_4__src_jhi_components__["d" /* JHI_COMPONENTS */], [
            __WEBPACK_IMPORTED_MODULE_5__src_language__["c" /* JhiTranslateComponent */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ])
    })
], NgJhipsterModule);

var NgJhipsterModule_1;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "translatePartialLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "missingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NgJhipsterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TruncateCharactersPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TruncateWordsPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PureFilterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MaxbytesValidatorDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MinbytesValidatorDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiSortDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiSortByDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PaginationUtil", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ParseLinks", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataUtils", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiItemCountComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslatePartialLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiLanguageService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiTranslateComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiMissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptor", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InterceptableHttp", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["B"]; });
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiItemCountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A component that will take care of item count statistics of a pagination.
 */
var JhiItemCountComponent = (function () {
    function JhiItemCountComponent() {
    }
    return JhiItemCountComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], JhiItemCountComponent.prototype, "page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], JhiItemCountComponent.prototype, "total", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], JhiItemCountComponent.prototype, "itemsPerPage", void 0);
JhiItemCountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'jhi-item-count',
        template: "\n        <div class=\"info jhi-item-count\">\n            Showing {{((page - 1) * itemsPerPage) == 0 ? 1 : ((page - 1) * itemsPerPage + 1)}} -\n            {{(page * itemsPerPage) < total ? (page * itemsPerPage) : total}}\n            of {{total}} items.\n        </div>"
    }),
    __metadata("design:paramtypes", [])
], JhiItemCountComponent);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_of_bytes__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxbytesValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MaxbytesValidatorDirective = MaxbytesValidatorDirective_1 = (function () {
    function MaxbytesValidatorDirective() {
    }
    MaxbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__number_of_bytes__["a" /* numberOfBytes */])(c.value) <= this.jhiMaxbytes) ? null : {
            maxbytes: {
                valid: false
            }
        };
    };
    return MaxbytesValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MaxbytesValidatorDirective.prototype, "jhiMaxbytes", void 0);
MaxbytesValidatorDirective = MaxbytesValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[jhiMaxbytes][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaxbytesValidatorDirective_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], MaxbytesValidatorDirective);

var MaxbytesValidatorDirective_1;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_of_bytes__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinbytesValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MinbytesValidatorDirective = MinbytesValidatorDirective_1 = (function () {
    function MinbytesValidatorDirective() {
    }
    MinbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__number_of_bytes__["a" /* numberOfBytes */])(c.value) >= this.jhiMinbytes) ? null : {
            minbytes: {
                valid: false
            }
        };
    };
    return MinbytesValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MinbytesValidatorDirective.prototype, "jhiMinbytes", void 0);
MinbytesValidatorDirective = MinbytesValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[jhiMinbytes][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MinbytesValidatorDirective_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], MinbytesValidatorDirective);

var MinbytesValidatorDirective_1;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_directive__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiSortByDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var JhiSortByDirective = (function () {
    function JhiSortByDirective(jhiSort, el, renderer, configService) {
        this.el = el;
        this.renderer = renderer;
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.jhiSort = jhiSort;
        var config = configService.getConfig();
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
    }
    JhiSortByDirective.prototype.onClick = function () {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score') {
            this.jhiSort.sort(this.jhiSortBy);
            this.applyClass();
        }
    };
    JhiSortByDirective.prototype.applyClass = function () {
        var childSpan = this.el.nativeElement.children[1];
        var add = this.sortAscIcon;
        if (!this.jhiSort.ascending) {
            add = this.sortDescIcon;
        }
        this.renderer.setElementClass(childSpan, add, true);
    };
    ;
    return JhiSortByDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], JhiSortByDirective.prototype, "jhiSortBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JhiSortByDirective.prototype, "onClick", null);
JhiSortByDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[jhiSortBy]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sort_directive__["a" /* JhiSortDirective */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], JhiSortByDirective);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptor; });
/**
 * A HTTP interceptor responsibility chain member is a class, which may react on request and response of all requests
 * done by HTTP.
 */
var HttpInterceptor = (function () {
    function HttpInterceptor() {
        this._successor = null;
    }
    Object.defineProperty(HttpInterceptor.prototype, "successor", {
        set: function (successor) {
            this._successor = successor;
        },
        enumerable: true,
        configurable: true
    });
    HttpInterceptor.prototype.processRequestInterception = function (options) {
        return (!this._successor) ? this.requestIntercept(options) :
            this._successor.processRequestInterception(this.requestIntercept(options));
    };
    HttpInterceptor.prototype.processResponseInterception = function (response) {
        return (!this._successor) ? this.responseIntercept(response) :
            this._successor.processResponseInterception(this.responseIntercept(response));
    };
    return HttpInterceptor;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interceptable_http__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__interceptable_http__["a"]; });




/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptableHttp; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterceptableHttp = (function (_super) {
    __extends(InterceptableHttp, _super);
    function InterceptableHttp(backend, defaultOptions, interceptors) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        /**
         * building a responsibility chain of http interceptors, so when processXXXInterception is called on first interceptor,
         * all http interceptors are called in a row
         * Note: the array of interceptors are wired in customHttpProvider of the generated Jhipster app in file `http.provider.ts`
         *
        */
        if (interceptors && interceptors.length > 0) {
            interceptors.reduce(function (chain, current) {
                chain.successor = current;
                return current;
            });
            _this.firstInterceptor = interceptors[0];
        }
        return _this;
    }
    InterceptableHttp.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, this.getRequestOptionArgs(options)));
    };
    InterceptableHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptableHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptableHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptableHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptableHttp.prototype.getRequestOptionArgs = function (options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        }
        return !this.firstInterceptor ? options : this.firstInterceptor.processRequestInterception(options);
    };
    InterceptableHttp.prototype.intercept = function (observable) {
        return !this.firstInterceptor ? observable : this.firstInterceptor.processResponseInterception(observable);
    };
    return InterceptableHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));
InterceptableHttp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["ConnectionBackend"],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"], Array])
], InterceptableHttp);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JHI_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JHI_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JHI_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JHI_SERVICES; });
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var JHI_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__pipe__["f" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["d" /* FilterPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["g" /* KeysPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["c" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["e" /* PureFilterPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* TruncateCharactersPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["b" /* TruncateWordsPipe */]
];
var JHI_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__directive__["a" /* MaxbytesValidatorDirective */],
    __WEBPACK_IMPORTED_MODULE_1__directive__["b" /* MinbytesValidatorDirective */],
    __WEBPACK_IMPORTED_MODULE_1__directive__["c" /* JhiSortDirective */],
    __WEBPACK_IMPORTED_MODULE_1__directive__["d" /* JhiSortByDirective */]
];
var JHI_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__component__["a" /* JhiItemCountComponent */]
];
var JHI_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_3__service__["c" /* DataUtils */],
    __WEBPACK_IMPORTED_MODULE_3__service__["d" /* DateUtils */],
    __WEBPACK_IMPORTED_MODULE_3__service__["e" /* EventManager */],
    __WEBPACK_IMPORTED_MODULE_3__service__["b" /* ParseLinks */],
    __WEBPACK_IMPORTED_MODULE_3__service__["a" /* PaginationUtil */],
    __WEBPACK_IMPORTED_MODULE_3__service__["g" /* Base64 */]
];


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiMissingTranslationHandler; });
var JhiMissingTranslationHandler = (function () {
    function JhiMissingTranslationHandler(configService) {
        this.configService = configService;
    }
    JhiMissingTranslationHandler.prototype.handle = function (params) {
        var key = params.key;
        return this.configService.getConfig().noi18nMessage + "[" + key + "]";
    };
    return JhiMissingTranslationHandler;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiTranslateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ng2-translate is too verbose and buggy
 */
/* tslint:disable */
var JhiTranslateComponent = (function () {
    function JhiTranslateComponent() {
    }
    return JhiTranslateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], JhiTranslateComponent.prototype, "jhiTranslate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JhiTranslateComponent.prototype, "translateValues", void 0);
JhiTranslateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[jhiTranslate]',
        template: '<span [innerHTML]="jhiTranslate | translate:translateValues"></span>'
    })
], JhiTranslateComponent);

/* tslint:enable */


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiLanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var JhiLanguageService = (function () {
    function JhiLanguageService(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.defaultLocation = 'global';
        this.currentLang = 'en';
        this.locations = [];
        this.init();
    }
    JhiLanguageService.prototype.init = function () {
        var config = this.configService.getConfig();
        this.defaultLocation = config.defaultI18nLocation;
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.currentLang = this.currentLang;
    };
    JhiLanguageService.prototype.changeLanguage = function (languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.reload();
    };
    JhiLanguageService.prototype.setLocations = function (locations) {
        this.locations = locations;
        this.locations.push(this.defaultLocation);
        this.reload();
    };
    JhiLanguageService.prototype.addLocation = function (location) {
        if (this.locations.indexOf(location) === -1) {
            this.locations.push(location);
            this.reload();
        }
    };
    JhiLanguageService.prototype.reload = function () {
        this.translateService.setDefaultLang(this.currentLang);
        var translatePartialLoader = this.translateService.currentLoader;
        translatePartialLoader.setLocations(this.locations);
        // reset the language cache //FIXME not ideal as this increases the http requests
        this.translateService.resetLang(this.currentLang);
        this.translateService.use(this.currentLang);
    };
    JhiLanguageService.prototype.getCurrent = function () {
        return Promise.resolve(this.currentLang);
    };
    return JhiLanguageService;
}());
JhiLanguageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], JhiLanguageService);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePartialLoader; });

var TranslatePartialLoader = (function () {
    function TranslatePartialLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = 'i18n'; }
        if (suffix === void 0) { suffix = '.json'; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
        this.locations = [];
    }
    TranslatePartialLoader.prototype.setLocations = function (locations) {
        this.locations = locations;
    };
    TranslatePartialLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        var combinedObject = new Object();
        var oldObsevers;
        var newObserver;
        this.locations.forEach(function (value) {
            newObserver = _this.getPartFile(value, combinedObject, lang);
            if (oldObsevers == null) {
                oldObsevers = newObserver;
            }
            else {
                oldObsevers = oldObsevers.merge(newObserver);
            }
        });
        return oldObsevers;
    };
    TranslatePartialLoader.prototype.getPartFile = function (part, combinedObject, lang) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(_this.prefix + "/" + lang + "/" + part + _this.suffix).subscribe(function (res) {
                var responseObj = res.json();
                Object.keys(responseObj).forEach(function (key) {
                    if (!combinedObject[key]) {
                        combinedObject[key] = responseObj[key];
                    }
                    else {
                        Object.assign(combinedObject[key], responseObj[key]);
                    }
                });
                observer.next(combinedObject);
                // Call complete to close this stream (like a promise)
                observer.complete();
            });
        });
    };
    return TranslatePartialLoader;
}());



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        if (input !== null) {
            input = input.toLowerCase();
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var i = 0, valueKeys = Object.keys(value); i < valueKeys.length; i++) {
            var key = valueKeys[i];
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (values, predicate, reverse) {
        if (predicate === void 0) { predicate = ''; }
        if (reverse === void 0) { reverse = false; }
        if (predicate === '') {
            return reverse ? values.sort().reverse() : values.sort();
        }
        return values.sort(function (a, b) {
            if (a[predicate] < b[predicate]) {
                return reverse ? 1 : -1;
            }
            else if (b[predicate] < a[predicate]) {
                return reverse ? -1 : 1;
            }
            return 0;
        });
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy' })
], OrderByPipe);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_pipe__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureFilterPipe; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PureFilterPipe = (function (_super) {
    __extends(PureFilterPipe, _super);
    function PureFilterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureFilterPipe.prototype.transform = function (input, filter, field) {
        return _super.prototype.transform.call(this, input, filter, field);
    };
    return PureFilterPipe;
}(__WEBPACK_IMPORTED_MODULE_1__filter_pipe__["a" /* FilterPipe */]));
PureFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'pureFilter' })
], PureFilterPipe);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateCharactersPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TruncateCharactersPipe = (function () {
    function TruncateCharactersPipe() {
    }
    TruncateCharactersPipe.prototype.transform = function (input, chars, breakOnWord) {
        if (isNaN(chars)) {
            return input;
        }
        if (chars <= 0) {
            return '';
        }
        if (input && input.length > chars) {
            input = input.substring(0, chars);
            if (!breakOnWord) {
                var lastspace = input.lastIndexOf(' ');
                // Get last space
                if (lastspace !== -1) {
                    input = input.substr(0, lastspace);
                }
            }
            else {
                while (input.charAt(input.length - 1) === ' ') {
                    input = input.substr(0, input.length - 1);
                }
            }
            return input + '...';
        }
        return input;
    };
    return TruncateCharactersPipe;
}());
TruncateCharactersPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'truncateCharacters' })
], TruncateCharactersPipe);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateWordsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (input, words) {
        if (isNaN(words)) {
            return input;
        }
        if (words <= 0) {
            return '';
        }
        if (input) {
            var inputWords = input.split(/\s+/);
            if (inputWords.length > words) {
                input = inputWords.slice(0, words).join(' ') + '...';
            }
        }
        return input;
    };
    return TruncateWordsPipe;
}());
TruncateWordsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'truncateWords' })
], TruncateWordsPipe);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = (function () {
    function AlertService(sanitizer, toast, translateService) {
        this.sanitizer = sanitizer;
        this.toast = toast;
        this.translateService = translateService;
        this.alertId = 0; // unique id for each alert. Starts from 0.
        this.alerts = [];
        this.timeout = 5000; // default timeout in milliseconds
    }
    AlertService.prototype.clear = function () {
        this.alerts = [];
    };
    AlertService.prototype.get = function () {
        return this.alerts;
    };
    AlertService.prototype.success = function (msg, params, position) {
        return this.addAlert({
            type: 'success',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.error = function (msg, params, position) {
        return this.addAlert({
            type: 'danger',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.warning = function (msg, params, position) {
        return this.addAlert({
            type: 'warning',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.info = function (msg, params, position) {
        return this.addAlert({
            type: 'info',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.factory = function (alertOptions) {
        var _this = this;
        var alert = {
            type: alertOptions.type,
            msg: this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, alertOptions.msg),
            id: alertOptions.id,
            timeout: alertOptions.timeout,
            toast: alertOptions.toast,
            position: alertOptions.position ? alertOptions.position : 'top right',
            scoped: alertOptions.scoped,
            close: function (alerts) {
                return _this.closeAlert(alertOptions.id, alerts);
            }
        };
        if (!alert.scoped) {
            this.alerts.push(alert);
        }
        return alert;
    };
    AlertService.prototype.addAlert = function (alertOptions, extAlerts) {
        var _this = this;
        alertOptions.id = this.alertId++;
        if (this.translateService && alertOptions.msg) {
            alertOptions.msg = this.translateService.instant(alertOptions.msg, alertOptions.params);
        }
        var alert = this.factory(alertOptions);
        if (alertOptions.timeout && alertOptions.timeout > 0) {
            setTimeout(function () {
                _this.closeAlert(alertOptions.id, extAlerts);
            }, alertOptions.timeout);
        }
        return alert;
    };
    AlertService.prototype.closeAlert = function (id, extAlerts) {
        var thisAlerts = (extAlerts && extAlerts.length > 0) ? extAlerts : this.alerts;
        return this.closeAlertByIndex(thisAlerts.map(function (e) { return e.id; }).indexOf(id), thisAlerts);
    };
    AlertService.prototype.closeAlertByIndex = function (index, thisAlerts) {
        return thisAlerts.splice(index, 1);
    };
    AlertService.prototype.isToast = function () {
        return this.toast;
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"], Boolean, __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["d" /* TranslateService */]])
], AlertService);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Base64 = (function () {
    function Base64() {
        this.keyStr = 'ABCDEFGHIJKLMNOP' +
            'QRSTUVWXYZabcdef' +
            'ghijklmnopqrstuv' +
            'wxyz0123456789+/' +
            '=';
    }
    Base64.prototype.encode = function (input) {
        var output = '';
        var enc1 = '';
        var enc2 = '';
        var enc3 = '';
        var enc4 = '';
        var chr1 = '';
        var chr2 = '';
        var chr3 = '';
        var i = 0;
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this.keyStr.charAt(enc1) +
                this.keyStr.charAt(enc2) +
                this.keyStr.charAt(enc3) +
                this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';
        }
        return output;
    };
    Base64.prototype.decode = function (input) {
        var output = '';
        var enc1 = '';
        var enc2 = '';
        var enc3 = '';
        var enc4 = '';
        var chr1 = '';
        var chr2 = '';
        var chr3 = '';
        var i = 0;
        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        while (i < input.length) {
            enc1 = this.keyStr.indexOf(input.charAt(i++));
            enc2 = this.keyStr.indexOf(input.charAt(i++));
            enc3 = this.keyStr.indexOf(input.charAt(i++));
            enc4 = this.keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';
        }
        return output;
    };
    return Base64;
}());
Base64 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Base64);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataUtils; });
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * An utility service for data.
 */
var DataUtils = (function () {
    function DataUtils() {
    }
    /**
     * Method to abbreviate the text given
     */
    DataUtils.prototype.abbreviate = function (text, append) {
        if (append === void 0) { append = '...'; }
        if (text.length < 30) {
            return text;
        }
        return text ? (text.substring(0, 15) + append + text.slice(-10)) : '';
    };
    /**
     * Method to find the byte size of the string provides
     */
    DataUtils.prototype.byteSize = function (base64String) {
        return this._formatAsBytes(this._size(base64String));
    };
    DataUtils.prototype._endsWith = function (suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    DataUtils.prototype._paddingSize = function (value) {
        if (this._endsWith('==', value)) {
            return 2;
        }
        if (this._endsWith('=', value)) {
            return 1;
        }
        return 0;
    };
    DataUtils.prototype._size = function (value) {
        return value.length / 4 * 3 - this._paddingSize(value);
    };
    DataUtils.prototype._formatAsBytes = function (size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    };
    /**
     * Method to open file
     */
    DataUtils.prototype.openFile = function (type, data) {
        window.open('data:' + type + ';base64,' + data, '_blank', 'height=300,width=400');
    };
    /**
     * Method to convert the file to base64
     */
    DataUtils.prototype.toBase64 = function (file, cb) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
            cb(base64Data);
        };
    };
    return DataUtils;
}());
DataUtils = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataUtils);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateUtils; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An utility service for date.
 */
var DateUtils = (function () {
    function DateUtils(datePipe) {
        this.datePipe = datePipe;
        this.pattern = 'yyyy-MM-dd';
    }
    /**
     * Method to convert the date time from server into JS date object
     */
    DateUtils.prototype.convertDateTimeFromServer = function (date) {
        if (date) {
            return new Date(date);
        }
        else {
            return null;
        }
    };
    /**
     * Method to convert the date from server into JS date object
     */
    DateUtils.prototype.convertLocalDateFromServer = function (date) {
        if (date) {
            var dateString = date.split('-');
            return new Date(dateString[0], dateString[1] - 1, dateString[2]);
        }
        return null;
    };
    /**
     * Method to convert the JS date object into specified date pattern
     */
    DateUtils.prototype.convertLocalDateToServer = function (date, pattern) {
        if (pattern === void 0) { pattern = this.pattern; }
        if (date) {
            var newDate = new Date(date.year, date.month - 1, date.day);
            return this.datePipe.transform(newDate, pattern);
        }
        else {
            return null;
        }
    };
    /**
     * Method to get the default date pattern
     */
    DateUtils.prototype.dateformat = function () {
        return this.pattern;
    };
    // TODO Change this method when moving from datetime-local input to NgbDatePicker
    DateUtils.prototype.toDate = function (date) {
        if (date === undefined || date === null) {
            return null;
        }
        var dateParts = date.split(/\D+/);
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4]);
    };
    return DateUtils;
}());
DateUtils = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]])
], DateUtils);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventManager; });
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * An utily class to manage RX events
 */
var EventManager = (function () {
    function EventManager() {
        var _this = this;
        this.observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.observer = observer;
        }).share();
    }
    /**
     * Method to broadcast the event to observer
     */
    EventManager.prototype.broadcast = function (event) {
        if (this.observer != null) {
            this.observer.next(event);
        }
    };
    /**
     * Method to subscribe to an event with callback
     */
    EventManager.prototype.subscribe = function (eventName, callback) {
        var subscriber = this.observable.filter(function (event) {
            return event.name === eventName;
        }).subscribe(callback);
        return subscriber;
    };
    /**
     * Method to unsubscribe the subscription
     */
    EventManager.prototype.destroy = function (subscriber) {
        subscriber.unsubscribe();
    };
    return EventManager;
}());
EventManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], EventManager);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationUtil; });
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * An utility service for pagination
 */
var PaginationUtil = (function () {
    function PaginationUtil() {
    }
    /**
     * Method to find whether the sort is defined
     */
    PaginationUtil.prototype.parseAscending = function (sort) {
        var sortArray = sort.split(',');
        sortArray = sortArray.length > 1 ? sortArray : sort.split('%2C');
        if (sortArray.length > 1) {
            return sortArray.slice(-1)[0] === 'asc';
        }
        // default to true if no sort is defined
        return true;
    };
    /**
     * Method to query params are strings, and need to be parsed
     */
    PaginationUtil.prototype.parsePage = function (page) {
        return parseInt(page, 10);
    };
    /**
     * Method to sort can be in the format `id,asc` or `id`
     */
    PaginationUtil.prototype.parsePredicate = function (sort) {
        return sort.split(',')[0].split('%2C')[0];
    };
    return PaginationUtil;
}());
PaginationUtil = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PaginationUtil);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseLinks; });
/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * An utility service for link parsing.
 */
var ParseLinks = (function () {
    function ParseLinks() {
    }
    /**
     * Method to parse the links
     */
    ParseLinks.prototype.parse = function (header) {
        if (header.length === 0) {
            throw new Error('input must not be of zero length');
        }
        // Split parts by comma
        var parts = header.split(',');
        var links = {};
        // Parse each part into a named link
        parts.forEach(function (p) {
            var section = p.split(';');
            if (section.length !== 2) {
                throw new Error('section could not be split on ";"');
            }
            var url = section[0].replace(/<(.*)>/, '$1').trim();
            var queryString = {};
            url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) { return queryString[$1] = $3; });
            var page = queryString.page;
            if (typeof page === 'string') {
                page = parseInt(page, 10);
            }
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = page;
        });
        return links;
    };
    return ParseLinks;
}());
ParseLinks = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ParseLinks);



/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNTJiMmFmOTgzY2M3OGI1YzUxMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL34vbmcyLXRyYW5zbGF0ZS9zcmMvdHJhbnNsYXRlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZzItdHJhbnNsYXRlL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL34vbmcyLXRyYW5zbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L25nMi10cmFuc2xhdGUvc3JjL3RyYW5zbGF0ZS5wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmUvbnVtYmVyLW9mLWJ5dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmUvc29ydC5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2ZpbHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL34vbmcyLXRyYW5zbGF0ZS9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L25nMi10cmFuc2xhdGUvc3JjL3RyYW5zbGF0ZS5waXBlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbmctamhpcHN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9qaGktaXRlbS1jb3VudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZS9tYXhieXRlcy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZS9taW5ieXRlcy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZS9zb3J0LWJ5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3IvaHR0cC5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9yL2ludGVyY2VwdGFibGUtaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamhpLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL2poaS1taXNzaW5nLXRyYW5zbGF0aW9uLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFuZ3VhZ2UvamhpLXRyYW5zbGF0ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL2xhbmd1YWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL3RyYW5zbGF0ZS1wYXJ0aWFsLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZS9jYXBpdGFsaXplLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGUva2V5cy5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL29yZGVyLWJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGUvcHVyZS1maWx0ZXIucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZS90cnVuY2F0ZS1jaGFyYWN0ZXJzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGUvdHJ1bmNhdGUtd29yZHMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2Jhc2U2NC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2RhdGEtdXRpbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2RhdGUtdXRpbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2V2ZW50LW1hbmFnZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9wYWdpbmF0aW9uLXV0aWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9wYXJzZS1saW5rcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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LENBQ3ZELENBQUM7WUFFRixJQUFJLElBQUksR0FBUSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRWpDLEVBQUUsQ0FBQyxDQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFRCxJQUFJLElBQUksR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBM0NZLFVBQVU7SUFEdEIsZ0ZBQVUsRUFBRTs7R0FDQSxVQUFVLENBMkN0QjtBQTNDc0I7Ozs7Ozs7QUN0QnZCLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoibmctamhpcHN0ZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKSwgcmVxdWlyZShcInJ4anMvUnhcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2h0dHBcIiwgXCJAYW5ndWxhci9jb21tb25cIiwgXCJAYW5ndWxhci9mb3Jtc1wiLCBcInJ4anMvT2JzZXJ2YWJsZVwiLCBcInJ4anMvUnhcIiwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiLCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmctamhpcHN0ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpLCByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmctamhpcHN0ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wiQGFuZ3VsYXIvaHR0cFwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcIkBhbmd1bGFyL2Zvcm1zXCJdLCByb290W1wicnhqcy9PYnNlcnZhYmxlXCJdLCByb290W1wicnhqcy9SeFwiXSwgcm9vdFtcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80OV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81Ml9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUzX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNTJiMmFmOTgzY2M3OGI1YzUxMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgICBDT05GSUdfT1BUSU9OUzogTW9kdWxlQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlQ29uZmlnPzogTW9kdWxlQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuQ09ORklHX09QVElPTlMgPSBuZXcgTW9kdWxlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydHkoJ3NvcnRJY29uJywgbW9kdWxlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eSgnc29ydEFzY0ljb24nLCBtb2R1bGVDb25maWcpO1xuICAgICAgICB0aGlzLnNldFByb3BlcnR5KCdzb3J0RGVzY0ljb24nLCBtb2R1bGVDb25maWcpO1xuICAgICAgICB0aGlzLnNldFByb3BlcnR5KCdzb3J0SWNvblNlbGVjdG9yJywgbW9kdWxlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eSgnaTE4bkVuYWJsZWQnLCBtb2R1bGVDb25maWcpO1xuICAgICAgICB0aGlzLnNldFByb3BlcnR5KCdkZWZhdWx0STE4bkxvY2F0aW9uJywgbW9kdWxlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eSgnZGVmYXVsdEkxOG5MYW5nJywgbW9kdWxlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eSgnbm9pMThuTWVzc2FnZScsIG1vZHVsZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IE1vZHVsZUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkNPTkZJR19PUFRJT05TO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UHJvcGVydHkocHJvcGVydHksIG1vZHVsZUNvbmZpZykge1xuICAgICAgICB0aGlzLkNPTkZJR19PUFRJT05TW3Byb3BlcnR5XSA9IChtb2R1bGVDb25maWcgJiYgbW9kdWxlQ29uZmlnW3Byb3BlcnR5XSkgPyBtb2R1bGVDb25maWdbcHJvcGVydHldIDogdGhpcy5DT05GSUdfT1BUSU9OU1twcm9wZXJ0eV07XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29uZmlnLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGFyc2VyIH0gZnJvbSBcIi4vdHJhbnNsYXRlLnBhcnNlclwiO1xuaW1wb3J0IHsgaXNEZWZpbmVkIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IHZhciBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyKCkge1xuICAgIH1cbiAgICByZXR1cm4gTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjtcbn0oKSk7XG5leHBvcnQgdmFyIFRyYW5zbGF0ZUxvYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlTG9hZGVyKCkge1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlTG9hZGVyO1xufSgpKTtcbmV4cG9ydCB2YXIgVHJhbnNsYXRlU3RhdGljTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVTdGF0aWNMb2FkZXIoaHR0cCwgcHJlZml4LCBzdWZmaXgpIHtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9IFwiaTE4blwiOyB9XG4gICAgICAgIGlmIChzdWZmaXggPT09IHZvaWQgMCkgeyBzdWZmaXggPSBcIi5qc29uXCI7IH1cbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmFuc2xhdGlvbnMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVN0YXRpY0xvYWRlci5wcm90b3R5cGUuZ2V0VHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnByZWZpeCArIFwiL1wiICsgbGFuZyArIHRoaXMuc3VmZml4KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVTdGF0aWNMb2FkZXI7XG59KCkpO1xuZXhwb3J0IHZhciBUcmFuc2xhdGVTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjdXJyZW50TG9hZGVyIEFuIGluc3RhbmNlIG9mIHRoZSBsb2FkZXIgY3VycmVudGx5IHVzZWRcbiAgICAgKiBAcGFyYW0gbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBBIGhhbmRsZXIgZm9yIG1pc3NpbmcgdHJhbnNsYXRpb25zLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVNlcnZpY2UoY3VycmVudExvYWRlciwgcGFyc2VyLCBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvYWRlciA9IGN1cnJlbnRMb2FkZXI7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgICAgICB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgPSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxhbmcgY3VycmVudGx5IHVzZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSB0aGlzLmRlZmF1bHRMYW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmxhbmdzID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdG8gdXNlIGFzIGEgZmFsbGJhY2tcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnNldERlZmF1bHRMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzZWRcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXREZWZhdWx0TGFuZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwqPn1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGVuZGluZztcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBsYW5ndWFnZSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gbm90IGF2YWlsYWJsZSwgYXNrIGZvciBpdFxuICAgICAgICAgICAgcGVuZGluZyA9IHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwZW5kaW5nICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAvLyBvbiBpbml0IHNldCB0aGUgY3VycmVudExhbmcgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50TGFuZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGVuZGluZy5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZUxhbmcobGFuZyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2Ugd2l0aCB0aGUgY3VycmVudCBsb2FkZXJcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCo+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldFRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdGhpcy5jdXJyZW50TG9hZGVyLmdldFRyYW5zbGF0aW9uKGxhbmcpLnNoYXJlKCk7XG4gICAgICAgIHRoaXMucGVuZGluZy5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMudHJhbnNsYXRpb25zW2xhbmddID0gcmVzO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgICAgIF90aGlzLnBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIF90aGlzLnBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHNob3VsZE1lcmdlXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0VHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobGFuZywgdHJhbnNsYXRpb25zLCBzaG91bGRNZXJnZSkge1xuICAgICAgICBpZiAoc2hvdWxkTWVyZ2UgPT09IHZvaWQgMCkgeyBzaG91bGRNZXJnZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChzaG91bGRNZXJnZSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwgdHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHsgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnMsIGxhbmc6IGxhbmcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHRyYW5zbGF0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgbGFuZ3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldExhbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ncztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsYW5nc1xuICAgICAqIEFkZCBhdmFpbGFibGUgbGFuZ3NcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5hZGRMYW5ncyA9IGZ1bmN0aW9uIChsYW5ncykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBsYW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMubGFuZ3MuaW5kZXhPZihsYW5nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5sYW5ncy5wdXNoKGxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgbGFuZ3NcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVMYW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGRMYW5ncyhPYmplY3Qua2V5cyh0aGlzLnRyYW5zbGF0aW9ucykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGFyc2VkIHJlc3VsdCBvZiB0aGUgdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldFBhcnNlZFJlc3VsdCA9IGZ1bmN0aW9uICh0cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge30sIG9ic2VydmFibGVzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGtleV8xID0ga2V5OyBfaSA8IGtleV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrID0ga2V5XzFbX2ldO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrXSA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywgaywgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0W2tdLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVyZ2VkT2JzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwga2V5XzIgPSBrZXk7IF9hIDwga2V5XzIubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0ga2V5XzJbX2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JzID0gdHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIiA/IHJlc3VsdFtrXSA6IE9ic2VydmFibGUub2YocmVzdWx0W2tdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXJnZWRPYnMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZE9icyA9IG9icztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZE9icyA9IG1lcmdlZE9icy5tZXJnZShvYnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZWRPYnMudG9BcnJheSgpLm1hcChmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleVtpbmRleF1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0cmFuc2xhdGlvbnMsIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmRlZmF1bHRMYW5nICYmIHRoaXMuZGVmYXVsdExhbmcgIT09IHRoaXMuY3VycmVudExhbmcpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucGFyc2VyLmludGVycG9sYXRlKHRoaXMucGFyc2VyLmdldFZhbHVlKHRoaXMudHJhbnNsYXRpb25zW3RoaXMuZGVmYXVsdExhbmddLCBrZXkpLCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXMgJiYgdGhpcy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0geyBrZXk6IGtleSwgdHJhbnNsYXRlU2VydmljZTogdGhpcyB9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyA9IHRoaXMubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5oYW5kbGUocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzICE9PSB1bmRlZmluZWQgPyByZXMgOiBrZXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7YW55fSB0aGUgdHJhbnNsYXRlZCBrZXksIG9yIGFuIG9iamVjdCBvZiB0cmFuc2xhdGVkIGtleXNcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImtleVxcXCIgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlIGxvYWRpbmcgYSBuZXcgdHJhbnNsYXRpb24gdG8gdXNlXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF90aGlzLmdldFBhcnNlZFJlc3VsdChyZXMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvbkNvbXBsZXRlLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG9uRXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRyYW5zbGF0aW9uIGluc3RhbnRseSBmcm9tIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBsb2FkZWQgdHJhbnNsYXRpb24uXG4gICAgICogQWxsIHJ1bGVzIHJlZ2FyZGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgdGhlIHByZWZlcnJlZCBsYW5ndWFnZSBvZiBldmVuIGZhbGxiYWNrIGxhbmd1YWdlcyB3aWxsIGJlIHVzZWQgZXhjZXB0IGFueSBwcm9taXNlIGhhbmRsaW5nLlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmluc3RhbnQgPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImtleVxcXCIgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRoaXMudHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqXzEgPSB7fTtcbiAgICAgICAgICAgICAgICBrZXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ial8xW2tleVtpbmRleF1dID0ga2V5W2luZGV4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBsYW5nKSB7XG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9IHRoaXMuY3VycmVudExhbmc7IH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ11ba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHsgdHJhbnNsYXRpb25zOiAoX2EgPSB7fSwgX2Fba2V5XSA9IHZhbHVlLCBfYSksIGxhbmc6IGxhbmcgfSk7XG4gICAgICAgIHZhciBfYTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbGFuZ1xuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuY2hhbmdlTGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xuICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZS5lbWl0KHsgbGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnJlbG9hZExhbmcgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLnJlc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGlubmVyIHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5yZXNldExhbmcgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0QnJvd3NlckxhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyb3dzZXJMYW5nID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XG4gICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3NlckxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJy0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgICAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnXycpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicm93c2VyTGFuZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRCcm93c2VyQ3VsdHVyZUxhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyb3dzZXJDdWx0dXJlTGFuZyA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsO1xuICAgICAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJDdWx0dXJlTGFuZztcbiAgICB9O1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gW1xuICAgICAgICB7IHR5cGU6IFRyYW5zbGF0ZUxvYWRlciwgfSxcbiAgICAgICAgeyB0eXBlOiBUcmFuc2xhdGVQYXJzZXIsIH0sXG4gICAgICAgIHsgdHlwZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSxdIH0sXG4gICAgXTtcbiAgICByZXR1cm4gVHJhbnNsYXRlU2VydmljZTtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmcyLXRyYW5zbGF0ZS9zcmMvdHJhbnNsYXRlLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQG5hbWUgZXF1YWxzXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBEZXRlcm1pbmVzIGlmIHR3byBvYmplY3RzIG9yIHR3byB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogVHdvIG9iamVjdHMgb3IgdmFsdWVzIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnQgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcbiAqXG4gKiAqIEJvdGggb2JqZWN0cyBvciB2YWx1ZXMgcGFzcyBgPT09YCBjb21wYXJpc29uLlxuICogKiBCb3RoIG9iamVjdHMgb3IgdmFsdWVzIGFyZSBvZiB0aGUgc2FtZSB0eXBlIGFuZCBhbGwgb2YgdGhlaXIgcHJvcGVydGllcyBhcmUgZXF1YWwgYnlcbiAqICAgY29tcGFyaW5nIHRoZW0gd2l0aCBgZXF1YWxzYC5cbiAqXG4gKiBAcGFyYW0geyp9IG8xIE9iamVjdCBvciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvMiBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGFyZ3VtZW50cyBhcmUgZXF1YWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobzEsIG8yKSB7XG4gICAgaWYgKG8xID09PSBvMilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKG8xID09PSBudWxsIHx8IG8yID09PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG8xICE9PSBvMSAmJiBvMiAhPT0gbzIpXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBOYU4gPT09IE5hTlxuICAgIHZhciB0MSA9IHR5cGVvZiBvMSwgdDIgPSB0eXBlb2YgbzIsIGxlbmd0aCwga2V5LCBrZXlTZXQ7XG4gICAgaWYgKHQxID09IHQyICYmIHQxID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8xKSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8yKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9IG8xLmxlbmd0aCkgPT0gbzIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvMSkge1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChrZXkgaW4gbzIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2YgbzJba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZzItdHJhbnNsYXRlL3NyYy91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGFyc2VyLCBEZWZhdWx0VHJhbnNsYXRlUGFyc2VyIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlU3RhdGljTG9hZGVyIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoaHR0cCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHApO1xufVxuZXhwb3J0IHZhciBUcmFuc2xhdGVNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZU1vZHVsZSgpIHtcbiAgICB9XG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAocHJvdmlkZWRMb2FkZXIpIHtcbiAgICAgICAgaWYgKHByb3ZpZGVkTG9hZGVyID09PSB2b2lkIDApIHsgcHJvdmlkZWRMb2FkZXIgPSB7XG4gICAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgZGVwczogW0h0dHBdXG4gICAgICAgIH07IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBwcm92aWRlZExvYWRlcixcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogRGVmYXVsdFRyYW5zbGF0ZVBhcnNlciB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBUcmFuc2xhdGVNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0czogW0h0dHBNb2R1bGVdLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgVHJhbnNsYXRlTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gW107XG4gICAgcmV0dXJuIFRyYW5zbGF0ZU1vZHVsZTtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmcyLXRyYW5zbGF0ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNEZWZpbmVkIH0gZnJvbSBcIi4vdXRpbFwiO1xuZXhwb3J0IHZhciBUcmFuc2xhdGVQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVBhcnNlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zbGF0ZVBhcnNlcjtcbn0oKSk7XG5leHBvcnQgdmFyIERlZmF1bHRUcmFuc2xhdGVQYXJzZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWZhdWx0VHJhbnNsYXRlUGFyc2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlZmF1bHRUcmFuc2xhdGVQYXJzZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlTWF0Y2hlciA9IC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuICAgIH1cbiAgICBEZWZhdWx0VHJhbnNsYXRlUGFyc2VyLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChleHByLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBleHByICE9PSAnc3RyaW5nJyB8fCAhcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwci5yZXBsYWNlKHRoaXMudGVtcGxhdGVNYXRjaGVyLCBmdW5jdGlvbiAoc3Vic3RyaW5nLCBiKSB7XG4gICAgICAgICAgICB2YXIgciA9IF90aGlzLmdldFZhbHVlKHBhcmFtcywgYik7XG4gICAgICAgICAgICByZXR1cm4gaXNEZWZpbmVkKHIpID8gciA6IHN1YnN0cmluZztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0VHJhbnNsYXRlUGFyc2VyLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgICAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAga2V5ICs9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodGFyZ2V0KSAmJiBpc0RlZmluZWQodGFyZ2V0W2tleV0pICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleSArPSAnLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGtleXMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIERlZmF1bHRUcmFuc2xhdGVQYXJzZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBEZWZhdWx0VHJhbnNsYXRlUGFyc2VyLmN0b3JQYXJhbWV0ZXJzID0gW107XG4gICAgcmV0dXJuIERlZmF1bHRUcmFuc2xhdGVQYXJzZXI7XG59KFRyYW5zbGF0ZVBhcnNlcikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nMi10cmFuc2xhdGUvc3JjL3RyYW5zbGF0ZS5wYXJzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2poaS1pdGVtLWNvdW50LmNvbXBvbmVudCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50L2luZGV4LnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2R1bGVDb25maWcge1xuICAgIHNvcnRJY29uPyA9ICdmYS1zb3J0JztcbiAgICBzb3J0QXNjSWNvbj8gPSAnZmEtc29ydC1hc2MnO1xuICAgIHNvcnREZXNjSWNvbj8gPSAnZmEtc29ydC1kZXNjJztcbiAgICBzb3J0SWNvblNlbGVjdG9yPyA9ICdzcGFuLmZhJztcbiAgICBpMThuRW5hYmxlZD8gPSBmYWxzZTtcbiAgICBkZWZhdWx0STE4bkxvY2F0aW9uPyA9ICdnbG9iYWwnO1xuICAgIGRlZmF1bHRJMThuTGFuZz8gPSAnZW4nO1xuICAgIG5vaTE4bk1lc3NhZ2U/ID0gJ3RyYW5zbGF0aW9uLW5vdC1mb3VuZCc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29uZmlnLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9tYXhieXRlcy5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9taW5ieXRlcy5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zb3J0LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3NvcnQtYnkuZGlyZWN0aXZlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kaXJlY3RpdmUvaW5kZXgudHMiLCIvKlxuICogQ29weXJpZ2h0IDIwMTYgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJPZkJ5dGVzKGJhc2U2NFN0cmluZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGJhc2U2NFN0cmluZy5sZW5ndGggLyA0ICogMyAtIHBhZGRpbmdTaXplKGJhc2U2NFN0cmluZyk7XG5cbiAgICBmdW5jdGlvbiBlbmRzV2l0aChzdWZmaXg6IHN0cmluZywgc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYWRkaW5nU2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChlbmRzV2l0aCgnPT0nLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmRzV2l0aCgnPScsIHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZS9udW1iZXItb2YtYnl0ZXMudHMiLCIvKlxuICogQ29weXJpZ2h0IDIwMTYgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbamhpU29ydF0nXG59KVxuZXhwb3J0IGNsYXNzIEpoaVNvcnREaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpIHByZWRpY2F0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFzY2VuZGluZzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBzb3J0SWNvbiA9ICdmYS1zb3J0JztcbiAgICBzb3J0QXNjSWNvbiA9ICdmYS1zb3J0LWFzYyc7XG4gICAgc29ydERlc2NJY29uID0gJ2ZhLXNvcnQtZGVzYyc7XG4gICAgc29ydEljb25TZWxlY3RvciA9ICdzcGFuLmZhJztcblxuICAgIEBPdXRwdXQoKSBwcmVkaWNhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhc2NlbmRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZWxlbWVudDogYW55O1xuXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlciwgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgY29uZmlnID0gY29uZmlnU2VydmljZS5nZXRDb25maWcoKTtcbiAgICAgICAgdGhpcy5zb3J0SWNvbiA9IGNvbmZpZy5zb3J0SWNvbjtcbiAgICAgICAgdGhpcy5zb3J0QXNjSWNvbiA9IGNvbmZpZy5zb3J0QXNjSWNvbjtcbiAgICAgICAgdGhpcy5zb3J0RGVzY0ljb24gPSBjb25maWcuc29ydERlc2NJY29uO1xuICAgICAgICB0aGlzLnNvcnRJY29uU2VsZWN0b3IgPSBjb25maWcuc29ydEljb25TZWxlY3RvcjtcbiAgICB9XG5cbiAgICBzb3J0IChmaWVsZDogYW55KSB7XG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG4gICAgICAgIGlmIChmaWVsZCAhPT0gdGhpcy5wcmVkaWNhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXNjZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXNjZW5kaW5nID0gIXRoaXMuYXNjZW5kaW5nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gZmllbGQ7XG4gICAgICAgIHRoaXMucHJlZGljYXRlQ2hhbmdlLmVtaXQoZmllbGQpO1xuICAgICAgICB0aGlzLmFzY2VuZGluZ0NoYW5nZS5lbWl0KHRoaXMuYXNjZW5kaW5nKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRDbGFzc2VzKCkge1xuICAgICAgICBsZXQgYWxsVGhJY29ucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc29ydEljb25TZWxlY3Rvcik7XG4gICAgICAgIGFsbFRoSWNvbnMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zb3J0QXNjSWNvbik7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc29ydERlc2NJY29uKTtcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQodGhpcy5zb3J0SWNvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZGlyZWN0aXZlL3NvcnQuZGlyZWN0aXZlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi90cmFuc2xhdGUtcGFydGlhbC1sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9sYW5ndWFnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vamhpLXRyYW5zbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9qaGktbWlzc2luZy10cmFuc2xhdGlvbi5jb25maWcnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2xhbmd1YWdlL2luZGV4LnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZpbHRlcicsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgcHJpdmF0ZSBmaWx0ZXJCeVN0cmluZ0FuZEZpZWxkKGZpbHRlciwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhZmlsdGVyIHx8ICh2YWx1ZVtmaWVsZF0gJiYgdmFsdWVbZmllbGRdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1ZhZGltRGV6L25nMi1maWx0ZXItcGlwZVxuICAgIHByaXZhdGUgZmlsdGVyQnlTdHJpbmcoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWZpbHRlciB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlckRlZmF1bHQoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWZpbHRlciB8fCBmaWx0ZXIgPT09IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyQnlPYmplY3QoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcik7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBpc01hdGNoaW5nO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmcgPSB0aGlzLmZpbHRlckJ5U3RyaW5nKGZpbHRlcltrZXldKSh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmcgPSB0aGlzLmZpbHRlckJ5T2JqZWN0KGZpbHRlcltrZXldKSh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoaW5nID0gdGhpcy5maWx0ZXJEZWZhdWx0KGZpbHRlcltrZXldKSh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzTWF0Y2hpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGlucHV0OiBBcnJheTxhbnk+LCBmaWx0ZXI6IHN0cmluZywgZmllbGQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBmaWx0ZXI7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZpbHRlcih0aGlzLmZpbHRlckJ5U3RyaW5nQW5kRmllbGQoZmlsdGVyLCBmaWVsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZpbHRlcih0aGlzLmZpbHRlckJ5U3RyaW5nKGZpbHRlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuZmlsdGVyKHRoaXMuZmlsdGVyQnlPYmplY3QoZmlsdGVyKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9maWx0ZXIucGlwZS50cyIsImV4cG9ydCAqIGZyb20gJy4vdHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJ1bmNhdGUtd29yZHMucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLWJ5LnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXIucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL3B1cmUtZmlsdGVyLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXBpdGFsaXplLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9rZXlzLnBpcGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3BpcGUvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2luYXRpb24tdXRpbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2UtbGlua3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEtdXRpbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS11dGlsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudC1tYW5hZ2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFzZTY0LnNlcnZpY2UnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2UvaW5kZXgudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0IHZhciBUcmFuc2xhdGVEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZURpcmVjdGl2ZSh0cmFuc2xhdGVTZXJ2aWNlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZSA9IHRyYW5zbGF0ZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgaWYgKCF0aGlzLm9uTGFuZ0NoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGVja05vZGVzKGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5uZ0FmdGVyVmlld0NoZWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2RlcygpO1xuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5jaGVja05vZGVzID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9ucykge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1c2UgdGhlIGNvbnRlbnQgYXMgYSBrZXksIG5vdCB0aGUgdHJhbnNsYXRpb24gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSBub2RlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGNvbnRlbnQgd2FzIGNoYW5nZWQgZnJvbSB0aGUgdXNlciwgd2UnbGwgdXNlIGl0IGFzIGEgcmVmZXJlbmNlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUub3JpZ2luYWxDb250ZW50ICYmIGlzRGVmaW5lZCh0cmFuc2xhdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXN0S2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBjb250ZW50IGlzIHRoZSB0cmFuc2xhdGlvbiwgbm90IHRoZSBrZXksIHVzZSB0aGUgbGFzdCByZWFsIGNvbnRlbnQgYXMga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gbm9kZS5vcmlnaW5hbENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoa2V5LCBub2RlLCB0cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKGtleSwgbm9kZSwgdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZVBhcmFtcyA9IHRoaXMudHJhbnNsYXRlUGFyYW1zO1xuICAgICAgICAgICAgaWYgKG5vZGUubGFzdEtleSA9PT0ga2V5ICYmIHRoaXMubGFzdFBhcmFtcyA9PT0gaW50ZXJwb2xhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3RQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgICAgIHZhciBvblRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5vcmlnaW5hbENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcmlnaW5hbENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmN1cnJlbnRWYWx1ZSA9IGlzRGVmaW5lZChyZXMpID8gcmVzIDogKG5vZGUub3JpZ2luYWxDb250ZW50IHx8IGtleSk7XG4gICAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSBpbiB0aGUgb3JpZ2luYWwgY29udGVudCB0byBwcmVzZXJ2ZSBzcGFjZXMgdGhhdCB3ZSBtaWdodCBoYXZlIHRyaW1tZWRcbiAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gX3RoaXMua2V5ID8gbm9kZS5jdXJyZW50VmFsdWUgOiBub2RlLm9yaWdpbmFsQ29udGVudC5yZXBsYWNlKGtleSwgbm9kZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVHJhbnNsYXRpb24ocmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW3RyYW5zbGF0ZV0sW25nMi10cmFuc2xhdGVdJ1xuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gW1xuICAgICAgICB7IHR5cGU6IFRyYW5zbGF0ZVNlcnZpY2UsIH0sXG4gICAgICAgIHsgdHlwZTogRWxlbWVudFJlZiwgfSxcbiAgICBdO1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgJ3RyYW5zbGF0ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAgICAgJ3RyYW5zbGF0ZVBhcmFtcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVEaXJlY3RpdmU7XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nMi10cmFuc2xhdGUvc3JjL3RyYW5zbGF0ZS5kaXJlY3RpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBpcGUsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBlcXVhbHMsIGlzRGVmaW5lZCB9IGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCB2YXIgVHJhbnNsYXRlUGlwZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlUGlwZSh0cmFuc2xhdGUsIF9yZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvblRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IGtleTtcbiAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBrZXk7XG4gICAgICAgICAgICBfdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy50cmFuc2xhdGUuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlcy5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvblRyYW5zbGF0aW9uKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZVBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlIGFzayBhbm90aGVyIHRpbWUgZm9yIHRoZSBzYW1lIGtleSwgcmV0dXJuIHRoZSBsYXN0IHZhbHVlXG4gICAgICAgIGlmIChlcXVhbHMocXVlcnksIHRoaXMubGFzdEtleSkgJiYgZXF1YWxzKGFyZ3MsIHRoaXMubGFzdFBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgaWYgKGlzRGVmaW5lZChhcmdzWzBdKSAmJiBhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhcmdzWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFjY2VwdCBvYmplY3RzIHdyaXR0ZW4gaW4gdGhlIHRlbXBsYXRlIHN1Y2ggYXMge246MX0sIHsnbic6MX0sIHtuOid2J31cbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyB3aHkgd2UgbWlnaHQgbmVlZCB0byBjaGFuZ2UgaXQgdG8gcmVhbCBKU09OIG9iamVjdHMgc3VjaCBhcyB7XCJuXCI6MX0gb3Ige1wiblwiOlwidlwifVxuICAgICAgICAgICAgICAgIHZhciB2YWxpZEFyZ3MgPSBhcmdzWzBdXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFwnKT8oW2EtekEtWjAtOV9dKykoXFwnKT8oXFxzKT86L2csICdcIiQyXCI6JylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzooXFxzKT8oXFwnKSguKj8pKFxcJykvZywgJzpcIiQzXCInKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IEpTT04ucGFyc2UodmFsaWRBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiV3JvbmcgcGFyYW1ldGVyIGluIFRyYW5zbGF0ZVBpcGUuIEV4cGVjdGVkIGEgdmFsaWQgT2JqZWN0LCByZWNlaXZlZDogXCIgKyBhcmdzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcmUgdGhlIHF1ZXJ5LCBpbiBjYXNlIGl0IGNoYW5nZXNcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gcXVlcnk7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBwYXJhbXMsIGluIGNhc2UgdGhleSBjaGFuZ2VcbiAgICAgICAgdGhpcy5sYXN0UGFyYW1zID0gYXJncztcbiAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uIHRvIG9uTGFuZ0NoYW5nZSwgY2xlYW4gaXRcbiAgICAgICAgdGhpcy5fZGlzcG9zZSgpO1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIGNoYW5nZVxuICAgICAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3RLZXkgJiYgZXZlbnQubGFuZyA9PT0gX3RoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uTGFuZ0NoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3RLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdEtleSA9IG51bGw7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgcmV0dXJuIHRoZSBzYW1lIHZhbHVlIHVudGlsIGl0J3MgYmVlbiB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcywgZXZlbnQudHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsZWFuIGFueSBleGlzdGluZyBzdWJzY3JpcHRpb24gdG8gY2hhbmdlIGV2ZW50c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUuX2Rpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uTGFuZ0NoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2UoKTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZVBpcGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgICAgIHsgdHlwZTogUGlwZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RyYW5zbGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHB1cmU6IGZhbHNlIC8vIHJlcXVpcmVkIHRvIHVwZGF0ZSB0aGUgdmFsdWUgd2hlbiB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZFxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgVHJhbnNsYXRlUGlwZS5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgeyB0eXBlOiBUcmFuc2xhdGVTZXJ2aWNlLCB9LFxuICAgICAgICB7IHR5cGU6IENoYW5nZURldGVjdG9yUmVmLCB9LFxuICAgIF07XG4gICAgcmV0dXJuIFRyYW5zbGF0ZVBpcGU7XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nMi10cmFuc2xhdGUvc3JjL3RyYW5zbGF0ZS5waXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG5pbXBvcnQgeyBKSElfUElQRVMsIEpISV9ESVJFQ1RJVkVTLCBKSElfQ09NUE9ORU5UUywgSkhJX1NFUlZJQ0VTIH0gZnJvbSAnLi9zcmMvamhpLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuICAgIEpoaU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXG4gICAgVHJhbnNsYXRlUGFydGlhbExvYWRlcixcbiAgICBKaGlUcmFuc2xhdGVDb21wb25lbnQsXG4gICAgSmhpTGFuZ3VhZ2VTZXJ2aWNlXG59IGZyb20gJy4vc3JjL2xhbmd1YWdlJztcblxuaW1wb3J0IHsgTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zcmMvY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NyYy9jb25maWcuc2VydmljZSc7XG5cbi8vIFJlIGV4cG9ydCB0aGUgZmlsZXNcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2xhbmd1YWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2ludGVyY2VwdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXIoaHR0cDogSHR0cCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNsYXRlUGFydGlhbExvYWRlcihodHRwLCAnaTE4bicsICcuanNvbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcihjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgcmV0dXJuIG5ldyBKaGlNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyKGNvbmZpZ1NlcnZpY2UpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogdHJhbnNsYXRlUGFydGlhbExvYWRlcixcbiAgICAgICAgICAgIGRlcHM6IFtIdHRwXVxuICAgICAgICB9KSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgLi4uSkhJX1BJUEVTLFxuICAgICAgICAuLi5KSElfRElSRUNUSVZFUyxcbiAgICAgICAgLi4uSkhJX0NPTVBPTkVOVFMsXG4gICAgICAgIEpoaVRyYW5zbGF0ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUZhY3Rvcnk6IG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIGRlcHM6IFtDb25maWdTZXJ2aWNlXVxuICAgICAgICB9XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC4uLkpISV9QSVBFUyxcbiAgICAgICAgLi4uSkhJX0RJUkVDVElWRVMsXG4gICAgICAgIC4uLkpISV9DT01QT05FTlRTLFxuICAgICAgICBKaGlUcmFuc2xhdGVDb21wb25lbnQsXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0poaXBzdGVyTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChtb2R1bGVDb25maWc6IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5nSmhpcHN0ZXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAuLi5KSElfU0VSVklDRVMsXG4gICAgICAgICAgICAgICAgSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogbW9kdWxlQ29uZmlnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9uZy1qaGlwc3Rlci50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgd2lsbCB0YWtlIGNhcmUgb2YgaXRlbSBjb3VudCBzdGF0aXN0aWNzIG9mIGEgcGFnaW5hdGlvbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktaXRlbS1jb3VudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8gamhpLWl0ZW0tY291bnRcIj5cbiAgICAgICAgICAgIFNob3dpbmcge3soKHBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZSkgPT0gMCA/IDEgOiAoKHBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZSArIDEpfX0gLVxuICAgICAgICAgICAge3socGFnZSAqIGl0ZW1zUGVyUGFnZSkgPCB0b3RhbCA/IChwYWdlICogaXRlbXNQZXJQYWdlKSA6IHRvdGFsfX1cbiAgICAgICAgICAgIG9mIHt7dG90YWx9fSBpdGVtcy5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlJdGVtQ291bnRDb21wb25lbnQge1xuXG4gICAvKipcbiAgICAqICBjdXJyZW50IHBhZ2UgbnVtYmVyLlxuICAgICovXG4gICAgQElucHV0KCkgcGFnZTogbnVtYmVyO1xuXG4gICAvKipcbiAgICAqICBUb3RhbCBudW1iZXIgb2YgaXRlbXMuXG4gICAgKi9cbiAgICBASW5wdXQoKSB0b3RhbDogbnVtYmVyO1xuXG4gICAvKipcbiAgICAqICBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG4gICAgKi9cbiAgICBASW5wdXQoKSBpdGVtc1BlclBhZ2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnQvamhpLWl0ZW0tY291bnQuY29tcG9uZW50LnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBudW1iZXJPZkJ5dGVzIH0gZnJvbSAnLi9udW1iZXItb2YtYnl0ZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlNYXhieXRlc11bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heGJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlKSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF4Ynl0ZXNWYWxpZGF0b3JEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpIGpoaU1heGJ5dGVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gKGMudmFsdWUgJiYgbnVtYmVyT2ZCeXRlcyhjLnZhbHVlKSA8PSB0aGlzLmpoaU1heGJ5dGVzKSA/IG51bGwgOiB7XG4gICAgICAgICAgICBtYXhieXRlczoge1xuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kaXJlY3RpdmUvbWF4Ynl0ZXMuZGlyZWN0aXZlLnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBudW1iZXJPZkJ5dGVzIH0gZnJvbSAnLi9udW1iZXItb2YtYnl0ZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlNaW5ieXRlc11bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1pbmJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlKSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWluYnl0ZXNWYWxpZGF0b3JEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpIGpoaU1pbmJ5dGVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gKGMudmFsdWUgJiYgbnVtYmVyT2ZCeXRlcyhjLnZhbHVlKSA+PSB0aGlzLmpoaU1pbmJ5dGVzKSA/IG51bGwgOiB7XG4gICAgICAgICAgICBtaW5ieXRlczoge1xuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kaXJlY3RpdmUvbWluYnl0ZXMuZGlyZWN0aXZlLnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKaGlTb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9zb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlTb3J0QnldJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlTb3J0QnlEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpIGpoaVNvcnRCeTogc3RyaW5nO1xuXG4gICAgc29ydEFzY0ljb24gPSAnZmEtc29ydC1hc2MnO1xuICAgIHNvcnREZXNjSWNvbiA9ICdmYS1zb3J0LWRlc2MnO1xuXG4gICAgamhpU29ydDogSmhpU29ydERpcmVjdGl2ZTtcblxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgamhpU29ydDogSmhpU29ydERpcmVjdGl2ZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5qaGlTb3J0ID0gamhpU29ydDtcbiAgICAgICAgbGV0IGNvbmZpZyA9IGNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgICAgIHRoaXMuc29ydEFzY0ljb24gPSBjb25maWcuc29ydEFzY0ljb247XG4gICAgICAgIHRoaXMuc29ydERlc2NJY29uID0gY29uZmlnLnNvcnREZXNjSWNvbjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmpoaVNvcnQucHJlZGljYXRlICYmIHRoaXMuamhpU29ydC5wcmVkaWNhdGUgIT09ICdfc2NvcmUnKSB7XG4gICAgICAgICAgICB0aGlzLmpoaVNvcnQuc29ydCh0aGlzLmpoaVNvcnRCeSk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5Q2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlDbGFzcyAoKSB7XG4gICAgICAgIGxldCBjaGlsZFNwYW4gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGxldCBhZGQgPSB0aGlzLnNvcnRBc2NJY29uO1xuICAgICAgICBpZiAoIXRoaXMuamhpU29ydC5hc2NlbmRpbmcpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuc29ydERlc2NJY29uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGNoaWxkU3BhbiwgYWRkLCB0cnVlKTtcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZS9zb3J0LWJ5LmRpcmVjdGl2ZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnNBcmdzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8qKlxuICogQSBIVFRQIGludGVyY2VwdG9yIHJlc3BvbnNpYmlsaXR5IGNoYWluIG1lbWJlciBpcyBhIGNsYXNzLCB3aGljaCBtYXkgcmVhY3Qgb24gcmVxdWVzdCBhbmQgcmVzcG9uc2Ugb2YgYWxsIHJlcXVlc3RzXG4gKiBkb25lIGJ5IEhUVFAuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIHByaXZhdGUgX3N1Y2Nlc3NvcjogSHR0cEludGVyY2VwdG9yID0gbnVsbDtcblxuICAgIHNldCBzdWNjZXNzb3Ioc3VjY2Vzc29yOiBIdHRwSW50ZXJjZXB0b3IpIHtcbiAgICAgICAgdGhpcy5fc3VjY2Vzc29yID0gc3VjY2Vzc29yO1xuICAgIH1cblxuICAgIHByb2Nlc3NSZXF1ZXN0SW50ZXJjZXB0aW9uKG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICByZXR1cm4gKCF0aGlzLl9zdWNjZXNzb3IpID8gdGhpcy5yZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnMpIDpcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3Nvci5wcm9jZXNzUmVxdWVzdEludGVyY2VwdGlvbih0aGlzLnJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucykpO1xuICAgIH1cblxuICAgIHByb2Nlc3NSZXNwb25zZUludGVyY2VwdGlvbihyZXNwb25zZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiAoIXRoaXMuX3N1Y2Nlc3NvcikgPyB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0KHJlc3BvbnNlKSA6XG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzb3IucHJvY2Vzc1Jlc3BvbnNlSW50ZXJjZXB0aW9uKHRoaXMucmVzcG9uc2VJbnRlcmNlcHQocmVzcG9uc2UpKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3M7XG5cbiAgICBhYnN0cmFjdCByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvaW50ZXJjZXB0b3IvaHR0cC5pbnRlcmNlcHRvci50cyIsImV4cG9ydCAqIGZyb20gJy4vaHR0cC5pbnRlcmNlcHRvcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyY2VwdGFibGUtaHR0cCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvaW50ZXJjZXB0b3IvaW5kZXgudHMiLCIvKlxuICogQ29weXJpZ2h0IDIwMTYgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBDb25uZWN0aW9uQmFja2VuZCwgUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zQXJncywgUmVxdWVzdCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW50ZXJjZXB0YWJsZUh0dHAgZXh0ZW5kcyBIdHRwIHtcbiAgICBwcml2YXRlIGZpcnN0SW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBiYWNrZW5kOiBDb25uZWN0aW9uQmFja2VuZCxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLFxuICAgICAgICBpbnRlcmNlcHRvcnM6IEh0dHBJbnRlcmNlcHRvcltdXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYnVpbGRpbmcgYSByZXNwb25zaWJpbGl0eSBjaGFpbiBvZiBodHRwIGludGVyY2VwdG9ycywgc28gd2hlbiBwcm9jZXNzWFhYSW50ZXJjZXB0aW9uIGlzIGNhbGxlZCBvbiBmaXJzdCBpbnRlcmNlcHRvcixcbiAgICAgICAgICogYWxsIGh0dHAgaW50ZXJjZXB0b3JzIGFyZSBjYWxsZWQgaW4gYSByb3dcbiAgICAgICAgICogTm90ZTogdGhlIGFycmF5IG9mIGludGVyY2VwdG9ycyBhcmUgd2lyZWQgaW4gY3VzdG9tSHR0cFByb3ZpZGVyIG9mIHRoZSBnZW5lcmF0ZWQgSmhpcHN0ZXIgYXBwIGluIGZpbGUgYGh0dHAucHJvdmlkZXIudHNgXG4gICAgICAgICAqXG4gICAgICAgICovXG4gICAgICAgIGlmIChpbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5yZWR1Y2UoKGNoYWluLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY2hhaW4uc3VjY2Vzc29yID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZpcnN0SW50ZXJjZXB0b3IgPSBpbnRlcmNlcHRvcnNbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0KHVybDogc3RyaW5nIHwgUmVxdWVzdCwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0KHN1cGVyLnJlcXVlc3QodXJsLCB0aGlzLmdldFJlcXVlc3RPcHRpb25BcmdzKG9wdGlvbnMpKSk7XG4gICAgfVxuXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KHVybCwgdGhpcy5nZXRSZXF1ZXN0T3B0aW9uQXJncyhvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIucG9zdCh1cmwsIGJvZHksIHRoaXMuZ2V0UmVxdWVzdE9wdGlvbkFyZ3Mob3B0aW9ucykpO1xuICAgIH1cblxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIucHV0KHVybCwgYm9keSwgdGhpcy5nZXRSZXF1ZXN0T3B0aW9uQXJncyhvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuZGVsZXRlKHVybCwgdGhpcy5nZXRSZXF1ZXN0T3B0aW9uQXJncyhvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdE9wdGlvbkFyZ3Mob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICF0aGlzLmZpcnN0SW50ZXJjZXB0b3IgPyBvcHRpb25zIDogdGhpcy5maXJzdEludGVyY2VwdG9yLnByb2Nlc3NSZXF1ZXN0SW50ZXJjZXB0aW9uKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmZpcnN0SW50ZXJjZXB0b3IgPyBvYnNlcnZhYmxlIDogdGhpcy5maXJzdEludGVyY2VwdG9yLnByb2Nlc3NSZXNwb25zZUludGVyY2VwdGlvbihvYnNlcnZhYmxlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvaW50ZXJjZXB0b3IvaW50ZXJjZXB0YWJsZS1odHRwLnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1xuICAgIENhcGl0YWxpemVQaXBlLFxuICAgIEZpbHRlclBpcGUsXG4gICAgS2V5c1BpcGUsXG4gICAgT3JkZXJCeVBpcGUsXG4gICAgUHVyZUZpbHRlclBpcGUsXG4gICAgVHJ1bmNhdGVDaGFyYWN0ZXJzUGlwZSxcbiAgICBUcnVuY2F0ZVdvcmRzUGlwZVxufSBmcm9tICcuL3BpcGUnO1xuaW1wb3J0IHtcbiAgICBNYXhieXRlc1ZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBNaW5ieXRlc1ZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBKaGlTb3J0RGlyZWN0aXZlLFxuICAgIEpoaVNvcnRCeURpcmVjdGl2ZVxufSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBKaGlJdGVtQ291bnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIERhdGFVdGlscyxcbiAgICBEYXRlVXRpbHMsXG4gICAgRXZlbnRNYW5hZ2VyLFxuICAgIFBhcnNlTGlua3MsXG4gICAgUGFnaW5hdGlvblV0aWwsXG4gICAgQmFzZTY0XG59IGZyb20gJy4vc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBKSElfUElQRVMgPSBbXG4gICAgQ2FwaXRhbGl6ZVBpcGUsXG4gICAgRmlsdGVyUGlwZSxcbiAgICBLZXlzUGlwZSxcbiAgICBPcmRlckJ5UGlwZSxcbiAgICBQdXJlRmlsdGVyUGlwZSxcbiAgICBUcnVuY2F0ZUNoYXJhY3RlcnNQaXBlLFxuICAgIFRydW5jYXRlV29yZHNQaXBlXG5dO1xuXG5leHBvcnQgY29uc3QgSkhJX0RJUkVDVElWRVMgPSBbXG4gICAgTWF4Ynl0ZXNWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTWluYnl0ZXNWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgSmhpU29ydERpcmVjdGl2ZSxcbiAgICBKaGlTb3J0QnlEaXJlY3RpdmVcbl07XG5cbmV4cG9ydCBjb25zdCBKSElfQ09NUE9ORU5UUyA9IFtcbiAgICBKaGlJdGVtQ291bnRDb21wb25lbnRcbl07XG5cbmV4cG9ydCBjb25zdCBKSElfU0VSVklDRVMgPSBbXG4gICAgRGF0YVV0aWxzLFxuICAgIERhdGVVdGlscyxcbiAgICBFdmVudE1hbmFnZXIsXG4gICAgUGFyc2VMaW5rcyxcbiAgICBQYWdpbmF0aW9uVXRpbCxcbiAgICBCYXNlNjRcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvamhpLWNvbXBvbmVudHMudHMiLCIvKlxuICogQ29weXJpZ2h0IDIwMTYgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMgfSBmcm9tICduZzItdHJhbnNsYXRlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBKaGlNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIGltcGxlbWVudHMgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxuXG4gICAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcykge1xuICAgICAgICBsZXQga2V5ID0gcGFyYW1zLmtleTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKS5ub2kxOG5NZXNzYWdlfVske2tleX1dYDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbGFuZ3VhZ2UvamhpLW1pc3NpbmctdHJhbnNsYXRpb24uY29uZmlnLnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGRpcmVjdGl2ZSBvbiB0b3Agb2YgdGhlIHRyYW5zbGF0ZSBwaXBlIGFzIHRoZSBpbmJ1aWx0IHRyYW5zbGF0ZSBkaXJlY3RpdmUgZnJvbSBuZzItdHJhbnNsYXRlIGlzIHRvbyB2ZXJib3NlIGFuZCBidWdneVxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbamhpVHJhbnNsYXRlXScsXG4gICAgdGVtcGxhdGU6ICc8c3BhbiBbaW5uZXJIVE1MXT1cImpoaVRyYW5zbGF0ZSB8IHRyYW5zbGF0ZTp0cmFuc2xhdGVWYWx1ZXNcIj48L3NwYW4+J1xufSlcbmV4cG9ydCBjbGFzcyBKaGlUcmFuc2xhdGVDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgamhpVHJhbnNsYXRlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0cmFuc2xhdGVWYWx1ZXM6IGFueTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9sYW5ndWFnZS9qaGktdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVQYXJ0aWFsTG9hZGVyIH0gZnJvbSAnLi90cmFuc2xhdGUtcGFydGlhbC1sb2FkZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaUxhbmd1YWdlU2VydmljZSB7XG5cbiAgICBkZWZhdWx0TG9jYXRpb24gPSAnZ2xvYmFsJztcbiAgICBjdXJyZW50TGFuZyA9ICdlbic7XG4gICAgbG9jYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQgKCkge1xuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhdGlvbiA9IGNvbmZpZy5kZWZhdWx0STE4bkxvY2F0aW9uO1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gY29uZmlnLmRlZmF1bHRJMThuTGFuZztcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuY3VycmVudExhbmcpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcgPSB0aGlzLmN1cnJlbnRMYW5nO1xuICAgIH1cblxuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmd1YWdlS2V5O1xuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuQ09ORklHX09QVElPTlMuZGVmYXVsdEkxOG5MYW5nID0gbGFuZ3VhZ2VLZXk7XG4gICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnM7XG4gICAgICAgIHRoaXMubG9jYXRpb25zLnB1c2godGhpcy5kZWZhdWx0TG9jYXRpb24pO1xuICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIGFkZExvY2F0aW9uKGxvY2F0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb25zLmluZGV4T2YobG9jYXRpb24pID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMucHVzaChsb2NhdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsb2FkKCkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodGhpcy5jdXJyZW50TGFuZyk7XG4gICAgICAgIGxldCB0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyOiBUcmFuc2xhdGVQYXJ0aWFsTG9hZGVyID0gPFRyYW5zbGF0ZVBhcnRpYWxMb2FkZXI+IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TG9hZGVyO1xuICAgICAgICB0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyLnNldExvY2F0aW9ucyh0aGlzLmxvY2F0aW9ucyk7XG4gICAgICAgIC8vIHJlc2V0IHRoZSBsYW5ndWFnZSBjYWNoZSAvL0ZJWE1FIG5vdCBpZGVhbCBhcyB0aGlzIGluY3JlYXNlcyB0aGUgaHR0cCByZXF1ZXN0c1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UucmVzZXRMYW5nKHRoaXMuY3VycmVudExhbmcpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKHRoaXMuY3VycmVudExhbmcpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmN1cnJlbnRMYW5nKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc2VydmljZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICduZzItdHJhbnNsYXRlJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBhcnRpYWxMb2FkZXIgaW1wbGVtZW50cyBUcmFuc2xhdGVMb2FkZXIge1xuICAgIHByaXZhdGUgbG9jYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHByZWZpeCA9ICdpMThuJywgcHJpdmF0ZSBzdWZmaXggPSAnLmpzb24nKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvY2F0aW9ucyhsb2NhdGlvbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gbG9jYXRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgY29tYmluZWRPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIGxldCBvbGRPYnNldmVyczogT2JzZXJ2YWJsZTxhbnk+O1xuICAgICAgICBsZXQgbmV3T2JzZXJ2ZXI6IE9ic2VydmFibGU8YW55PjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIG5ld09ic2VydmVyID0gdGhpcy5nZXRQYXJ0RmlsZSh2YWx1ZSwgY29tYmluZWRPYmplY3QsIGxhbmcpO1xuICAgICAgICAgICAgaWYgKG9sZE9ic2V2ZXJzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvbGRPYnNldmVycyA9IG5ld09ic2VydmVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGRPYnNldmVycyA9IG9sZE9ic2V2ZXJzLm1lcmdlKG5ld09ic2VydmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvbGRPYnNldmVycztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBhcnRGaWxlKHBhcnQ6IHN0cmluZywgY29tYmluZWRPYmplY3Q6IGFueSwgbGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucHJlZml4fS8ke2xhbmd9LyR7cGFydH0ke3RoaXMuc3VmZml4fWApLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlT2JqID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZU9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbWJpbmVkT2JqZWN0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkT2JqZWN0W2tleV0gPSByZXNwb25zZU9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb21iaW5lZE9iamVjdFtrZXldLCByZXNwb25zZU9ialtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoY29tYmluZWRPYmplY3QpO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgY29tcGxldGUgdG8gY2xvc2UgdGhpcyBzdHJlYW0gKGxpa2UgYSBwcm9taXNlKVxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2xhbmd1YWdlL3RyYW5zbGF0ZS1wYXJ0aWFsLWxvYWRlci50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplJ30pXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG5cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGlucHV0LnN1YnN0cmluZygxKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9jYXBpdGFsaXplLnBpcGUudHMiLCIvKlxuICogQ29weXJpZ2h0IDIwMTYgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdrZXlzJ30pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlLCBhcmdzOiBzdHJpbmdbXSk6IGFueSB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgdmFsdWVLZXlzID0gT2JqZWN0LmtleXModmFsdWUpOyBpIDwgdmFsdWVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gdmFsdWVLZXlzW2ldO1xuICAgICAga2V5cy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlW2tleV19KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9waXBlL2tleXMucGlwZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ29yZGVyQnknfSlcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZXM6IGFueVtdLCBwcmVkaWNhdGUgPSAnJywgcmV2ZXJzZSA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiByZXZlcnNlID8gdmFsdWVzLnNvcnQoKS5yZXZlcnNlKCkgOiB2YWx1ZXMuc29ydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGFbcHJlZGljYXRlXSA8IGJbcHJlZGljYXRlXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZlcnNlID8gMSA6IC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiW3ByZWRpY2F0ZV0gPCBhW3ByZWRpY2F0ZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9vcmRlci1ieS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUGlwZSB9IGZyb20gJy4vZmlsdGVyLnBpcGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdwdXJlRmlsdGVyJyB9KVxuZXhwb3J0IGNsYXNzIFB1cmVGaWx0ZXJQaXBlIGV4dGVuZHMgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShpbnB1dDogQXJyYXk8YW55PiwgZmlsdGVyOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKGlucHV0LCBmaWx0ZXIsIGZpZWxkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9wdXJlLWZpbHRlci5waXBlLnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ3RydW5jYXRlQ2hhcmFjdGVycyd9KVxuZXhwb3J0IGNsYXNzIFRydW5jYXRlQ2hhcmFjdGVyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSAoaW5wdXQ6IHN0cmluZywgY2hhcnM6IG51bWJlciwgYnJlYWtPbldvcmQ/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGlzTmFOKGNoYXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFycyA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0Lmxlbmd0aCA+IGNoYXJzKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZygwLCBjaGFycyk7XG5cbiAgICAgICAgICAgIGlmICghYnJlYWtPbldvcmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdHNwYWNlID0gaW5wdXQubGFzdEluZGV4T2YoJyAnKTtcbiAgICAgICAgICAgICAgICAvLyBHZXQgbGFzdCBzcGFjZVxuICAgICAgICAgICAgICAgIGlmIChsYXN0c3BhY2UgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyKDAsIGxhc3RzcGFjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5wdXQuY2hhckF0KGlucHV0Lmxlbmd0aCAtIDEpID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICsgJy4uLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9waXBlL3RydW5jYXRlLWNoYXJhY3RlcnMucGlwZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICd0cnVuY2F0ZVdvcmRzJ30pXG5leHBvcnQgY2xhc3MgVHJ1bmNhdGVXb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG5cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgd29yZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmIChpc05hTih3b3JkcykpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAod29yZHMgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgbGV0IGlucHV0V29yZHMgPSBpbnB1dC5zcGxpdCgvXFxzKy8pO1xuICAgICAgICAgICAgaWYgKGlucHV0V29yZHMubGVuZ3RoID4gd29yZHMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0V29yZHMuc2xpY2UoMCwgd29yZHMpLmpvaW4oJyAnKSArICcuLi4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9waXBlL3RydW5jYXRlLXdvcmRzLnBpcGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBTYW5pdGl6ZXIsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG5leHBvcnQgdHlwZSBBbGVydFR5cGUgPSAgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnQge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHR5cGU6IEFsZXJ0VHlwZTtcbiAgICBtc2c6IHN0cmluZztcbiAgICBwYXJhbXM/OiBhbnk7XG4gICAgdGltZW91dD86IG51bWJlcjtcbiAgICB0b2FzdD86IGJvb2xlYW47XG4gICAgcG9zaXRpb24/OiBzdHJpbmc7XG4gICAgc2NvcGVkPzogYm9vbGVhbjtcbiAgICBjbG9zZT86IChhbGVydHM6IEFsZXJ0W10pID0+IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBhbGVydElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhbGVydHM6IEFsZXJ0W107XG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogU2FuaXRpemVyLCBwcml2YXRlIHRvYXN0PzogYm9vbGVhbiwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlPzogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmFsZXJ0SWQgPSAwOyAvLyB1bmlxdWUgaWQgZm9yIGVhY2ggYWxlcnQuIFN0YXJ0cyBmcm9tIDAuXG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XG4gICAgICAgIHRoaXMudGltZW91dCA9IDUwMDA7IC8vIGRlZmF1bHQgdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQoKTogQWxlcnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0cztcbiAgICB9XG5cbiAgICBzdWNjZXNzKG1zZzogc3RyaW5nLCBwYXJhbXM/OiBhbnksIHBvc2l0aW9uPzogc3RyaW5nKTogQWxlcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBtc2c6IG1zZyxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgdG9hc3Q6IHRoaXMudG9hc3QsXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIGVycm9yKG1zZzogc3RyaW5nLCBwYXJhbXM/OiBhbnksIHBvc2l0aW9uPzogc3RyaW5nKTogQWxlcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1zZzogbXNnLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICB0b2FzdDogdGhpcy50b2FzdCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgd2FybmluZyhtc2c6IHN0cmluZywgcGFyYW1zPzogYW55LCBwb3NpdGlvbj86IHN0cmluZyk6IEFsZXJ0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgbXNnOiBtc2csXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHRvYXN0OiB0aGlzLnRvYXN0LFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBpbmZvKG1zZzogc3RyaW5nLCBwYXJhbXM/OiBhbnksIHBvc2l0aW9uPzogc3RyaW5nKTogQWxlcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICBtc2c6IG1zZyxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgdG9hc3Q6IHRoaXMudG9hc3QsXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmFjdG9yeShhbGVydE9wdGlvbnM6IEFsZXJ0KTogQWxlcnQge1xuICAgICAgICBsZXQgYWxlcnQ6IEFsZXJ0ID0ge1xuICAgICAgICAgICAgdHlwZTogYWxlcnRPcHRpb25zLnR5cGUsXG4gICAgICAgICAgICBtc2c6IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBhbGVydE9wdGlvbnMubXNnKSxcbiAgICAgICAgICAgIGlkOiBhbGVydE9wdGlvbnMuaWQsXG4gICAgICAgICAgICB0aW1lb3V0OiBhbGVydE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIHRvYXN0OiBhbGVydE9wdGlvbnMudG9hc3QsXG4gICAgICAgICAgICBwb3NpdGlvbjogYWxlcnRPcHRpb25zLnBvc2l0aW9uID8gYWxlcnRPcHRpb25zLnBvc2l0aW9uIDogJ3RvcCByaWdodCcsXG4gICAgICAgICAgICBzY29wZWQ6IGFsZXJ0T3B0aW9ucy5zY29wZWQsXG4gICAgICAgICAgICBjbG9zZTogKGFsZXJ0czogQWxlcnRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlQWxlcnQoYWxlcnRPcHRpb25zLmlkLCBhbGVydHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWFsZXJ0LnNjb3BlZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydHMucHVzaChhbGVydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsZXJ0O1xuICAgIH1cblxuICAgIGFkZEFsZXJ0KGFsZXJ0T3B0aW9uczogQWxlcnQsIGV4dEFsZXJ0czogQWxlcnRbXSk6IEFsZXJ0IHtcbiAgICAgICAgYWxlcnRPcHRpb25zLmlkID0gdGhpcy5hbGVydElkKys7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UgJiYgYWxlcnRPcHRpb25zLm1zZykge1xuICAgICAgICAgICAgYWxlcnRPcHRpb25zLm1zZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KGFsZXJ0T3B0aW9ucy5tc2csIGFsZXJ0T3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbGVydCA9IHRoaXMuZmFjdG9yeShhbGVydE9wdGlvbnMpO1xuICAgICAgICBpZiAoYWxlcnRPcHRpb25zLnRpbWVvdXQgJiYgYWxlcnRPcHRpb25zLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxlcnQoYWxlcnRPcHRpb25zLmlkLCBleHRBbGVydHMpO1xuICAgICAgICAgICAgfSwgYWxlcnRPcHRpb25zLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGVydDtcbiAgICB9XG5cbiAgICBjbG9zZUFsZXJ0KGlkOiBudW1iZXIsIGV4dEFsZXJ0cz86IEFsZXJ0W10pOiBhbnkge1xuICAgICAgICBsZXQgdGhpc0FsZXJ0czogQWxlcnRbXSA9IChleHRBbGVydHMgJiYgZXh0QWxlcnRzLmxlbmd0aCA+IDApID8gZXh0QWxlcnRzIDogdGhpcy5hbGVydHM7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlQWxlcnRCeUluZGV4KHRoaXNBbGVydHMubWFwKGUgPT4gZS5pZCkuaW5kZXhPZihpZCksIHRoaXNBbGVydHMpO1xuICAgIH1cblxuICAgIGNsb3NlQWxlcnRCeUluZGV4KGluZGV4OiBudW1iZXIsIHRoaXNBbGVydHM6IEFsZXJ0W10pOiBBbGVydFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXNBbGVydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpc1RvYXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2FzdDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZTY0IHtcbiAgICBwcml2YXRlIGtleVN0cjogc3RyaW5nID0gJ0FCQ0RFRkdISUpLTE1OT1AnICtcbiAgICAgICAgJ1FSU1RVVldYWVphYmNkZWYnICtcbiAgICAgICAgJ2doaWprbG1ub3BxcnN0dXYnICtcbiAgICAgICAgJ3d4eXowMTIzNDU2Nzg5Ky8nICtcbiAgICAgICAgJz0nO1xuXG4gICAgZW5jb2RlIChpbnB1dCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgICAgIGxldCBlbmMxOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGVuYzI6IGFueSA9ICcnO1xuICAgICAgICBsZXQgZW5jMzogYW55ID0gJyc7XG4gICAgICAgIGxldCBlbmM0OiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGNocjE6IGFueSA9ICcnO1xuICAgICAgICBsZXQgY2hyMjogYW55ID0gJyc7XG4gICAgICAgIGxldCBjaHIzOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgICAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICAgICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgICAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgICAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICAgICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgICAgICAgICAgZW5jNCA9IDY0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgK1xuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RyLmNoYXJBdChlbmMxKSArXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdHIuY2hhckF0KGVuYzIpICtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0ci5jaGFyQXQoZW5jMykgK1xuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RyLmNoYXJBdChlbmM0KTtcbiAgICAgICAgICAgIGNocjEgPSBjaHIyID0gY2hyMyA9ICcnO1xuICAgICAgICAgICAgZW5jMSA9IGVuYzIgPSBlbmMzID0gZW5jNCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBkZWNvZGUgKGlucHV0KSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICAgICAgbGV0IGVuYzE6IGFueSA9ICcnO1xuICAgICAgICBsZXQgZW5jMjogYW55ID0gJyc7XG4gICAgICAgIGxldCBlbmMzOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGVuYzQ6IGFueSA9ICcnO1xuICAgICAgICBsZXQgY2hyMTogYW55ID0gJyc7XG4gICAgICAgIGxldCBjaHIyOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGNocjM6IGFueSA9ICcnO1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBBLVosIGEteiwgMC05LCArLCAvLCBvciA9XG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csICcnKTtcblxuICAgICAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5jMSA9IHRoaXMua2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgICAgICAgZW5jMiA9IHRoaXMua2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgICAgICAgZW5jMyA9IHRoaXMua2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgICAgICAgZW5jNCA9IHRoaXMua2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG4gICAgICAgICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcbiAgICAgICAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcbiAgICAgICAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cbiAgICAgICAgICAgIGlmIChlbmMzICE9PSA2NCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5jNCAhPT0gNjQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaHIxID0gY2hyMiA9IGNocjMgPSAnJztcbiAgICAgICAgICAgIGVuYzEgPSBlbmMyID0gZW5jMyA9IGVuYzQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2UvYmFzZTY0LnNlcnZpY2UudHMiLCIvKlxuICogQ29weXJpZ2h0IDIwMTYgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEFuIHV0aWxpdHkgc2VydmljZSBmb3IgZGF0YS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFVdGlscyB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGFiYnJldmlhdGUgdGhlIHRleHQgZ2l2ZW5cbiAgICAgKi9cbiAgICBhYmJyZXZpYXRlICh0ZXh0OiBzdHJpbmcsIGFwcGVuZCA9ICcuLi4nKSB7XG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoIDwgMzApIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0ID8gKHRleHQuc3Vic3RyaW5nKDAsIDE1KSArIGFwcGVuZCArIHRleHQuc2xpY2UoLTEwKSkgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gZmluZCB0aGUgYnl0ZSBzaXplIG9mIHRoZSBzdHJpbmcgcHJvdmlkZXNcbiAgICAgKi9cbiAgICBieXRlU2l6ZSAoYmFzZTY0U3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEFzQnl0ZXModGhpcy5fc2l6ZShiYXNlNjRTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9lbmRzV2l0aChzdWZmaXg6IHN0cmluZywgc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYWRkaW5nU2l6ZSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2VuZHNXaXRoKCc9PScsIHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2VuZHNXaXRoKCc9JywgdmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaXplKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoIC8gNCAqIDMgLSB0aGlzLl9wYWRkaW5nU2l6ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9ybWF0QXNCeXRlcyhzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2l6ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcgJykgKyAnIGJ5dGVzJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gb3BlbiBmaWxlXG4gICAgICovXG4gICAgb3BlbkZpbGUgKHR5cGU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdkYXRhOicgKyB0eXBlICsgJztiYXNlNjQsJyArIGRhdGEsICdfYmxhbmsnLCAnaGVpZ2h0PTMwMCx3aWR0aD00MDAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gY29udmVydCB0aGUgZmlsZSB0byBiYXNlNjRcbiAgICAgKi9cbiAgICB0b0Jhc2U2NCAoZmlsZTogRmlsZSwgY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAgICAgICAgIGxldCBiYXNlNjREYXRhID0gZS50YXJnZXQucmVzdWx0LnN1YnN0cihlLnRhcmdldC5yZXN1bHQuaW5kZXhPZignYmFzZTY0LCcpICsgJ2Jhc2U2NCwnLmxlbmd0aCk7XG4gICAgICAgICAgICBjYihiYXNlNjREYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9kYXRhLXV0aWwuc2VydmljZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEFuIHV0aWxpdHkgc2VydmljZSBmb3IgZGF0ZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVVdGlscyB7XG5cbiAgICBwcml2YXRlIHBhdHRlcm4gPSAneXl5eS1NTS1kZCc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHt9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gY29udmVydCB0aGUgZGF0ZSB0aW1lIGZyb20gc2VydmVyIGludG8gSlMgZGF0ZSBvYmplY3RcbiAgICAgKi9cbiAgICBjb252ZXJ0RGF0ZVRpbWVGcm9tU2VydmVyIChkYXRlOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGNvbnZlcnQgdGhlIGRhdGUgZnJvbSBzZXJ2ZXIgaW50byBKUyBkYXRlIG9iamVjdFxuICAgICAqL1xuICAgIGNvbnZlcnRMb2NhbERhdGVGcm9tU2VydmVyIChkYXRlOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBkYXRlU3RyaW5nID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmdbMF0sIGRhdGVTdHJpbmdbMV0gLSAxLCBkYXRlU3RyaW5nWzJdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gY29udmVydCB0aGUgSlMgZGF0ZSBvYmplY3QgaW50byBzcGVjaWZpZWQgZGF0ZSBwYXR0ZXJuXG4gICAgICovXG4gICAgY29udmVydExvY2FsRGF0ZVRvU2VydmVyIChkYXRlOiBhbnksIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm4pIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKG5ld0RhdGUsIHBhdHRlcm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gZ2V0IHRoZSBkZWZhdWx0IGRhdGUgcGF0dGVyblxuICAgICAqL1xuICAgIGRhdGVmb3JtYXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuO1xuICAgIH1cblxuICAgIC8vIFRPRE8gQ2hhbmdlIHRoaXMgbWV0aG9kIHdoZW4gbW92aW5nIGZyb20gZGF0ZXRpbWUtbG9jYWwgaW5wdXQgdG8gTmdiRGF0ZVBpY2tlclxuICAgIHRvRGF0ZShkYXRlOiBhbnkpOiBEYXRlIHtcbiAgICAgICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCB8fCBkYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0ZVBhcnRzID0gZGF0ZS5zcGxpdCgvXFxEKy8pO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVBhcnRzWzBdLCBkYXRlUGFydHNbMV0gLSAxLCBkYXRlUGFydHNbMl0sIGRhdGVQYXJ0c1szXSwgZGF0ZVBhcnRzWzRdKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9kYXRlLXV0aWwuc2VydmljZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1J4JztcblxuLyoqXG4gKiBBbiB1dGlseSBjbGFzcyB0byBtYW5hZ2UgUlggZXZlbnRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB9KS5zaGFyZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBicm9hZGNhc3QgdGhlIGV2ZW50IHRvIG9ic2VydmVyXG4gICAgICovXG4gICAgYnJvYWRjYXN0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gc3Vic2NyaWJlIHRvIGFuIGV2ZW50IHdpdGggY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uID0gdGhpcy5vYnNlcnZhYmxlLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBldmVudC5uYW1lID09PSBldmVudE5hbWU7XG4gICAgICAgIH0pLnN1YnNjcmliZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byB1bnN1YnNjcmliZSB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgZGVzdHJveShzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlL2V2ZW50LW1hbmFnZXIuc2VydmljZS50cyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNiB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQW4gdXRpbGl0eSBzZXJ2aWNlIGZvciBwYWdpbmF0aW9uXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uVXRpbCAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGZpbmQgd2hldGhlciB0aGUgc29ydCBpcyBkZWZpbmVkXG4gICAgICovXG4gICAgcGFyc2VBc2NlbmRpbmcgKHNvcnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc29ydEFycmF5ID0gc29ydC5zcGxpdCgnLCcpO1xuICAgICAgICBzb3J0QXJyYXkgPSBzb3J0QXJyYXkubGVuZ3RoID4gMSA/IHNvcnRBcnJheSA6IHNvcnQuc3BsaXQoJyUyQycpO1xuICAgICAgICBpZiAoc29ydEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0QXJyYXkuc2xpY2UoLTEpWzBdID09PSAnYXNjJztcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWZhdWx0IHRvIHRydWUgaWYgbm8gc29ydCBpcyBkZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBxdWVyeSBwYXJhbXMgYXJlIHN0cmluZ3MsIGFuZCBuZWVkIHRvIGJlIHBhcnNlZFxuICAgICAqL1xuICAgIHBhcnNlUGFnZSAocGFnZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHBhZ2UsIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gc29ydCBjYW4gYmUgaW4gdGhlIGZvcm1hdCBgaWQsYXNjYCBvciBgaWRgXG4gICAgICovXG4gICAgcGFyc2VQcmVkaWNhdGUgKHNvcnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzb3J0LnNwbGl0KCcsJylbMF0uc3BsaXQoJyUyQycpWzBdO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlL3BhZ2luYXRpb24tdXRpbC5zZXJ2aWNlLnRzIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiB1dGlsaXR5IHNlcnZpY2UgZm9yIGxpbmsgcGFyc2luZy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhcnNlTGlua3Mge1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIHBhcnNlIHRoZSBsaW5rc1xuICAgICAqL1xuICAgIHBhcnNlKGhlYWRlcjogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKGhlYWRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgb2YgemVybyBsZW5ndGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNwbGl0IHBhcnRzIGJ5IGNvbW1hXG4gICAgICAgIGxldCBwYXJ0czogc3RyaW5nW10gPSBoZWFkZXIuc3BsaXQoJywnKTtcbiAgICAgICAgbGV0IGxpbmtzOiBhbnkgPSB7fTtcblxuICAgICAgICAvLyBQYXJzZSBlYWNoIHBhcnQgaW50byBhIG5hbWVkIGxpbmtcbiAgICAgICAgcGFydHMuZm9yRWFjaCggcCA9PiB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbjogc3RyaW5nW10gPSBwLnNwbGl0KCc7Jyk7XG5cbiAgICAgICAgICAgIGlmIChzZWN0aW9uLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2VjdGlvbiBjb3VsZCBub3QgYmUgc3BsaXQgb24gXCI7XCInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gc2VjdGlvblswXS5yZXBsYWNlKC88KC4qKT4vLCAnJDEnKS50cmltKCk7XG4gICAgICAgICAgICBsZXQgcXVlcnlTdHJpbmc6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICB1cmwucmVwbGFjZShcbiAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXG4gICAgICAgICAgICAgICAgKCQwLCAkMSwgJDIsICQzKSA9PiB7IHJldHVybiBxdWVyeVN0cmluZ1skMV0gPSAkMzsgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHBhZ2U6IGFueSA9IHF1ZXJ5U3RyaW5nLnBhZ2U7XG5cbiAgICAgICAgICAgIGlmICggdHlwZW9mIHBhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlSW50KHBhZ2UsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IHNlY3Rpb25bMV0ucmVwbGFjZSgvcmVsPVwiKC4qKVwiLywgJyQxJykudHJpbSgpO1xuICAgICAgICAgICAgbGlua3NbbmFtZV0gPSBwYWdlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlL3BhcnNlLWxpbmtzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQ5X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81MF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81MV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==