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
import { Directive, Host, HostListener, Input, ElementRef, Renderer } from '@angular/core';
import { JhiSortDirective } from './sort.directive';
import { ConfigService } from '../config.service';
var JhiSortByDirective = (function () {
    function JhiSortByDirective(jhiSort, el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.jhiSort = jhiSort;
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
export { JhiSortByDirective };
JhiSortByDirective.decorators = [
    { type: Directive, args: [{
                selector: '[jhiSortBy]'
            },] },
];
/** @nocollapse */
JhiSortByDirective.ctorParameters = function () { return [
    { type: JhiSortDirective, decorators: [{ type: Host },] },
    { type: ElementRef, },
    { type: Renderer, },
]; };
JhiSortByDirective.propDecorators = {
    'jhiSortBy': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click',] },],
};
