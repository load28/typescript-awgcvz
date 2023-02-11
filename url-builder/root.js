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
exports.RootUrlHandler = void 0;
var base_url_builder_1 = require("./base-url-builder");
var organization_1 = require("./organization");
var RootUrlHandler = /** @class */ (function (_super) {
    __extends(RootUrlHandler, _super);
    function RootUrlHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootUrlHandler.prototype.organization = function (name) {
        return new organization_1.OrganizationUrlBuilder(this, name);
    };
    return RootUrlHandler;
}(base_url_builder_1.BaseUrlBuilder));
exports.RootUrlHandler = RootUrlHandler;
