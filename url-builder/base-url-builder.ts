import { URL_PARAM_TYPE } from './url-builder.const';

export class BaseUrlBuilder {
  private _pathes: string[] = [];
  private _params: [string, string][] = [];
  _queryParamKeys: Record<string, string> = {};

  public constructor(public readonly parent?: BaseUrlBuilder ) {}

  setPath(path: string) {
    this._pathes.push(path);
  }

  setQueryParams(params: Record<string, string>): void {
    this._queryParamKeys = params;
  }

  params(key: string, value: string): BaseUrlBuilder {
    this._params.push([key, value]);
    return this;
  }

  build<T = any>({isDev}: {isDev: boolean;} = {isDev: false}): string {
    const pathes = this._pathes.slice(0);
    const params = this._params.slice(0);
    const queryParamKeys = Object.values(this._queryParamKeys).slice(0);

    let parent = this.parent;
    while (parent) {
      pathes.splice(0, 0, ...parent._pathes);
      params.splice(0, 0, ...parent._params);
      queryParamKeys.splice(0, 0, ...Object.values(parent._queryParamKeys));
      parent = parent.parent;
    }

    if(isDev) {
      console.log('[DEBUG] urlBuilder - defined queryParams: ', queryParamKeys);
      console.log('[DEBUG] urlBuilder - current queryParams: ', params);
      console.log('[DEBUG] urlBuilder - current pathes: ', pathes);
    }

    const isQueryError = params.some(([key]) => {
      if (queryParamKeys.indexOf(key) === -1) {
        console.error(`[URL-BUILDER] Query param key ${key} is not defined`);
        return true;
      }
      return false;
    })

    if(isQueryError) {
      return null;
    }

    let url = '/' + pathes.join('/');
    if (params.length) {
      url += '?';
      url += params.map(([key, value]) => `${key}=${value}`);
    }

    return url;
  }
}
