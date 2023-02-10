"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.BaseUrlBuilder = void 0;
var BaseUrlBuilder = /** @class */ (function () {
    function BaseUrlBuilder(parent) {
        this.parent = parent;
        this._pathes = [];
        this._params = [];
        this._queryParamKeys = {};
    }
    // abstract setQueryParamKeys(keys: string[]): void;
    BaseUrlBuilder.prototype.setPath = function (path, queryParamKeys) {
        var _this = this;
        if (queryParamKeys === void 0) { queryParamKeys = []; }
        this._pathes.push(path);
        queryParamKeys.forEach(function (key) {
            _this._queryParamKeys[key] = key;
        });
    };
    BaseUrlBuilder.prototype.params = function (key, value) {
        this._params.push([key, value]);
        return this;
    };
    BaseUrlBuilder.prototype.build = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? { isDev: false } : _a, isDev = _b.isDev;
        if (isDev) {
            console.log('[DEBUG] urlBuilder - defined queryParams: ', this._queryParamKeys);
            console.log('[DEBUG] urlBuilder - current queryParams: ', this._params);
        }
        var isQueryError = this._params.some(function (_a) {
            var key = _a[0];
            if (!_this._queryParamKeys[key]) {
                console.error("[URL-BUILDER] Query param key " + key + " is not defined");
                return true;
            }
            return false;
        });
        if (isQueryError) {
            return null;
        }
        var pathes = this._pathes.slice(0);
        var params = this._params.slice(0);
        var parent = this.parent;
        while (parent) {
            pathes.splice.apply(pathes, __spreadArray([0, 0], parent._pathes));
            params.splice.apply(params, __spreadArray([0, 0], parent._params));
            parent = parent.parent;
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
