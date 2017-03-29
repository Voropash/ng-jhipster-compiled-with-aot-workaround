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
import { Injectable } from '@angular/core';
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
export { ModuleConfig };
ModuleConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModuleConfig.ctorParameters = function () { return []; };
