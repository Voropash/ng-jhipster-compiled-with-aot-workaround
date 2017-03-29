import { ElementRef, Renderer } from '@angular/core';
import { JhiSortDirective } from './sort.directive';
import { ConfigService } from '../config.service';
export declare class JhiSortByDirective {
    private el;
    private renderer;
    jhiSortBy: string;
    sortAscIcon: string;
    sortDescIcon: string;
    jhiSort: JhiSortDirective;
    constructor(jhiSort: JhiSortDirective, el: ElementRef, renderer: Renderer);
    onClick(): void;
    private applyClass();
}
