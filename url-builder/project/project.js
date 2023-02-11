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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUrlBuilder = exports.PROJECT_QUERY_PARAMS = void 0;
var base_url_builder_1 = require("../base-url-builder");
var alltask_1 = require("./alltask");
var detail_1 = require("./detail");
var mytask_1 = require("./mytask");
exports.PROJECT_QUERY_PARAMS = {
    TASK_ID: 'task_id',
};
var ProjectUrlBuilder = /** @class */ (function (_super) {
    __extends(ProjectUrlBuilder, _super);
    function ProjectUrlBuilder(parent, name) {
        var _this = _super.call(this, parent) || this;
        _this.setPath(name);
        _this.setQueryParams(exports.PROJECT_QUERY_PARAMS);
        return _this;
    }
    ProjectUrlBuilder.prototype.mytask = function () {
        return new mytask_1.MytaskUrlBuilder(this);
    };
    ProjectUrlBuilder.prototype.alltask = function () {
        return new alltask_1.AllTaskUrlBuilder(this);
    };
    ProjectUrlBuilder.prototype.detail = function (projectId) {
        return new detail_1.ProjectDetailUrlBuilder(this, projectId);
    };
    return ProjectUrlBuilder;
}(base_url_builder_1.BaseUrlBuilder));
exports.ProjectUrlBuilder = ProjectUrlBuilder;
