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
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, MissingTranslationHandler, TranslateLoader } from 'ng2-translate';
import { JHI_PIPES, JHI_DIRECTIVES, JHI_COMPONENTS, JHI_SERVICES } from './src/jhi-components';
import { JhiMissingTranslationHandler, TranslatePartialLoader, JhiTranslateComponent, JhiLanguageService } from './src/language';
import { ModuleConfig } from './src/config';
import { ConfigService } from './src/config.service';
// Re export the files
export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/interceptor';
export function translatePartialLoader(http) {
    return new TranslatePartialLoader(http, 'i18n', '.json');
}
export function missingTranslationHandler(configService) {
    return new JhiMissingTranslationHandler(configService);
}
var NgJhipsterModule = (function () {
    function NgJhipsterModule() {
    }
    NgJhipsterModule.forRoot = function (moduleConfig) {
        return {
            ngModule: NgJhipsterModule,
            providers: JHI_SERVICES.concat([
                JhiLanguageService,
                { provide: ModuleConfig, useValue: moduleConfig }
            ])
        };
    };
    return NgJhipsterModule;
}());
export { NgJhipsterModule };
NgJhipsterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    TranslateModule.forRoot({
                        provide: TranslateLoader,
                        useFactory: translatePartialLoader,
                        deps: [Http]
                    }),
                    HttpModule,
                    CommonModule
                ],
                declarations: JHI_PIPES.concat(JHI_DIRECTIVES, JHI_COMPONENTS, [
                    JhiTranslateComponent
                ]),
                providers: [
                    {
                        provide: MissingTranslationHandler, useFactory: missingTranslationHandler, deps: [ConfigService]
                    }
                ],
                exports: JHI_PIPES.concat(JHI_DIRECTIVES, JHI_COMPONENTS, [
                    JhiTranslateComponent,
                    TranslateModule,
                    HttpModule,
                    CommonModule
                ])
            },] },
];
/** @nocollapse */
NgJhipsterModule.ctorParameters = function () { return []; };
