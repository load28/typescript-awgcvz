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
exports.__esModule = true;
exports.AllTaskUrlBuilder = void 0;
var base_url_builder_1 = require("../base-url-builder");
var AllTaskUrlBuilder = /** @class */ (function (_super) {
    __extends(AllTaskUrlBuilder, _super);
    function AllTaskUrlBuilder(parent, queryParams) {
        var _this = _super.call(this, parent) || this;
        _this.setPath('mytask', queryParams);
        return _this;
    }
    return AllTaskUrlBuilder;
}(base_url_builder_1.BaseUrlBuilder));
exports.AllTaskUrlBuilder = AllTaskUrlBuilder;
