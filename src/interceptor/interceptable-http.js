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
import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Headers } from '@angular/http';
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
            options = new RequestOptions();
        }
        if (!options.headers) {
            options.headers = new Headers();
        }
        return !this.firstInterceptor ? options : this.firstInterceptor.processRequestInterception(options);
    };
    InterceptableHttp.prototype.intercept = function (observable) {
        return !this.firstInterceptor ? observable : this.firstInterceptor.processResponseInterception(observable);
    };
    return InterceptableHttp;
}(Http));
export { InterceptableHttp };
InterceptableHttp.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InterceptableHttp.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
    { type: Array, },
]; };
