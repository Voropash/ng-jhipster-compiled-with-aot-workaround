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
import { Directive, Input, Output, Renderer, EventEmitter, ElementRef } from '@angular/core';
import { ConfigService } from '../config.service';
var JhiSortDirective = (function () {
    function JhiSortDirective(el, renderer) {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sortIconSelector = 'span.fa';
        this.predicateChange = new EventEmitter();
        this.ascendingChange = new EventEmitter();
        this.element = el.nativeElement;
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
export { JhiSortDirective };
JhiSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[jhiSort]'
            },] },
];
/** @nocollapse */
JhiSortDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
JhiSortDirective.propDecorators = {
    'predicate': [{ type: Input },],
    'ascending': [{ type: Input },],
    'callback': [{ type: Input },],
    'predicateChange': [{ type: Output },],
    'ascendingChange': [{ type: Output },],
};
