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
exports.ProjectUrlBuilder = void 0;
var base_url_builder_1 = require("../base-url-builder");
var alltask_1 = require("./alltask");
var detail_1 = require("./detail");
var mytask_1 = require("./mytask");
var ProjectUrlBuilder = /** @class */ (function (_super) {
    __extends(ProjectUrlBuilder, _super);
    function ProjectUrlBuilder(parent, name, queryParams) {
        var _this = _super.call(this, parent) || this;
        _this.queryParams = queryParams;
        _this.queryParamKeys = ['task_id'];
        _this.setPath('project', queryParams);
        return _this;
    }
    ProjectUrlBuilder.prototype.mytask = function () {
        return new mytask_1.MytaskUrlBuilder(this);
    };
    ProjectUrlBuilder.prototype.alltask = function () {
        return new alltask_1.AllTaskUrlBuilder(this, ['task_detail']);
    };
    ProjectUrlBuilder.prototype.detail = function (projectId) {
        return new detail_1.ProjectDetailUrlBuilder(this, projectId, __spreadArray(__spreadArray([], this.queryParams), this.queryParamKeys));
    };
    return ProjectUrlBuilder;
}(base_url_builder_1.BaseUrlBuilder));
exports.ProjectUrlBuilder = ProjectUrlBuilder;
