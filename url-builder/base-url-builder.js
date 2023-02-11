"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUrlBuilder = void 0;
var BaseUrlBuilder = /** @class */ (function () {
    function BaseUrlBuilder(parent) {
        this.parent = parent;
        this._pathes = [];
        this._params = [];
        this._queryParamKeys = {};
    }
    BaseUrlBuilder.prototype.setPath = function (path) {
        this._pathes.push(path);
    };
    BaseUrlBuilder.prototype.setQueryParams = function (params) {
        this._queryParamKeys = params;
    };
    BaseUrlBuilder.prototype.params = function (key, value) {
        this._params.push([key, value]);
        return this;
    };
    BaseUrlBuilder.prototype.build = function (_a) {
        var _b = _a === void 0 ? { isDev: false } : _a, isDev = _b.isDev;
        var pathes = this._pathes.slice(0);
        var params = this._params.slice(0);
        var queryParamKeys = Object.values(this._queryParamKeys).slice(0);
        var parent = this.parent;
        while (parent) {
            pathes.splice.apply(pathes, __spreadArray([0, 0], parent._pathes));
            params.splice.apply(params, __spreadArray([0, 0], parent._params));
            queryParamKeys.splice.apply(queryParamKeys, __spreadArray([0, 0], Object.values(parent._queryParamKeys)));
            parent = parent.parent;
        }
        if (isDev) {
            console.log('[DEBUG] urlBuilder - defined queryParams: ', queryParamKeys);
            console.log('[DEBUG] urlBuilder - current queryParams: ', params);
            console.log('[DEBUG] urlBuilder - current pathes: ', pathes);
        }
        var isQueryError = params.some(function (_a) {
            var key = _a[0];
            if (queryParamKeys.indexOf(key) === -1) {
                console.error("[URL-BUILDER] Query param key " + key + " is not defined");
                return true;
            }
            return false;
        });
        if (isQueryError) {
            return null;
        }
        var url = '/' + pathes.join('/');
        if (params.length) {
            url += '?';
            url += params.map(function (_a) {
                var key = _a[0], value = _a[1];
                return key + "=" + value;
            });
        }
        return url;
    };
    return BaseUrlBuilder;
}());
exports.BaseUrlBuilder = BaseUrlBuilder;
