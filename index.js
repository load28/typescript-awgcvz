"use strict";
exports.__esModule = true;
var url_builder_1 = require("./url-builder/url-builder");
var url = url_builder_1.UrlBuilder.root()
    .organization('swit-tech')
    .project()
    .detail('210907063909376dcVW').params('asd', '23').build({ isDev: true });
// setParamsFn(URL_PARAM_TYPE.TASK_DETAIL, '23');
// setParamsFn('task_detail', '23');
//
// const url = builder.build();
//
// console.log(url);
// console.log(builder.getQueryParams());
console.log(url);
