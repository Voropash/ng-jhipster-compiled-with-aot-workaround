import { Renderer, EventEmitter, ElementRef } from '@angular/core';
import { ConfigService } from '../config.service';
export declare class JhiSortDirective {
    predicate: string;
    ascending: boolean;
    callback: Function;
    sortIcon: string;
    sortAscIcon: string;
    sortDescIcon: string;
    sortIconSelector: string;
    predicateChange: EventEmitter<any>;
    ascendingChange: EventEmitter<any>;
    element: any;
    constructor(el: ElementRef, renderer: Renderer);
    sort(field: any): void;
    private resetClasses();
}
