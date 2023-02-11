"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlBuilder = void 0;
var root_1 = require("./root");
var UrlBuilder = /** @class */ (function () {
    function UrlBuilder() {
    }
    UrlBuilder.root = function () {
        return new root_1.RootUrlHandler();
    };
    return UrlBuilder;
}());
exports.UrlBuilder = UrlBuilder;
