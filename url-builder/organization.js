"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.OrganizationUrlBuilder = void 0;
var base_url_builder_1 = require("./base-url-builder");
var project_1 = require("./project/project");
var OrganizationUrlBuilder = /** @class */ (function (_super) {
    __extends(OrganizationUrlBuilder, _super);
    function OrganizationUrlBuilder(parent, name, queryParams) {
        var _this = _super.call(this, parent) || this;
        _this.queryParams = queryParams;
        _this.queryParamKeys = ['task_detail'];
        _this.setPath(name, queryParams);
        return _this;
    }
    OrganizationUrlBuilder.prototype.project = function () {
        return new project_1.ProjectUrlBuilder(this, 'project', __spreadArray(__spreadArray([], this.queryParams), this.queryParamKeys));
    };
    return OrganizationUrlBuilder;
}(base_url_builder_1.BaseUrlBuilder));
exports.OrganizationUrlBuilder = OrganizationUrlBuilder;
