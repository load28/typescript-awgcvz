import { UrlBuilder } from './url-builder/url-builder';
import { URL_PARAM_TYPE } from './url-builder/url-builder.const';


const url = UrlBuilder.root()
    .organization('swit-tech')
    .project()
    .detail('210907063909376dcVW').params('ws_id', '23').build({isDev: true});

// setParamsFn(URL_PARAM_TYPE.TASK_DETAIL, '23');
// setParamsFn('task_detail', '23');
//
// const url = builder.build();
//
// console.log(url);
// console.log(builder.getQueryParams());

console.log(url);
