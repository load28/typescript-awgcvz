import { UrlBuilder } from './url-builder/url-builder';
import { URL_PARAM_TYPE } from './url-builder/url-builder.const';

console.log(
  UrlBuilder.root()
    .organization('swit-tech')
    .project()
    .detail('210907063909376dcVW')
    .param(URL_PARAM_TYPE.TASK_DETAIL, '210907064060UaqMxmL')
    .build()
);
