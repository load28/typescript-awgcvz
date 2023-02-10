import { URL_PARAM_TYPE } from './url-builder.const';

export abstract class BaseUrlBuilder {
  private _pathes: string[] = [];
  private _params: [string, string][] = [];
  private _queryParamKeys: Record<string, string> = {};

  public constructor(public readonly parent?: BaseUrlBuilder ) {}

  // abstract setQueryParamKeys(keys: string[]): void;

  setPath(path: string, queryParamKeys: string[] = []) {
    this._pathes.push(path);
    queryParamKeys.forEach(key => {
      this._queryParamKeys[key] = key;
    });
  }

  params(key: string, value: string): BaseUrlBuilder {
    this._params.push([key, value]);
    return this;
  }

  build({isDev}: {isDev: boolean;} = {isDev: false}): string {
    if(isDev) {
      console.log('[DEBUG] urlBuilder - defined queryParams: ', this._queryParamKeys);
      console.log('[DEBUG] urlBuilder - current queryParams: ', this._params);
    }

    const isQueryError = this._params.some(([key]) => {
        if (!this._queryParamKeys[key]) {
            console.error(`[URL-BUILDER] Query param key ${key} is not defined`);
            return true;
        }
        return false;
    })

    if(isQueryError) {
      return null;
    }

    const pathes = this._pathes.slice(0);
    const params = this._params.slice(0);

    let parent = this.parent;
    while (parent) {
      pathes.splice(0, 0, ...parent._pathes);
      params.splice(0, 0, ...parent._params);
      parent = parent.parent;
    }

    let url = '/' + pathes.join('/');
    if (params.length) {
      url += '?';
      url += params.map(([key, value]) => `${key}=${value}`);
    }

    return url;
  }
}
