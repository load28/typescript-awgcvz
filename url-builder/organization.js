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
exports.OrganizationUrlBuilder = exports.PROJECT_QUERY_PARAMS = void 0;
var base_url_builder_1 = require("./base-url-builder");
var project_1 = require("./project/project");
exports.PROJECT_QUERY_PARAMS = {
    WS_ID: 'ws_id',
};
var OrganizationUrlBuilder = /** @class */ (function (_super) {
    __extends(OrganizationUrlBuilder, _super);
    function OrganizationUrlBuilder(parent, name) {
        var _this = _super.call(this, parent) || this;
        _this.setPath(name);
        _this.setQueryParams(exports.PROJECT_QUERY_PARAMS);
        return _this;
    }
    OrganizationUrlBuilder.prototype.project = function () {
        return new project_1.ProjectUrlBuilder(this, 'project');
    };
    return OrganizationUrlBuilder;
}(base_url_builder_1.BaseUrlBuilder));
exports.OrganizationUrlBuilder = OrganizationUrlBuilder;
