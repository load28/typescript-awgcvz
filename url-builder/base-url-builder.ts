import { URL_PARAM_TYPE } from './url-builder.const';

export class BaseUrlBuilder {
  pathes: string[] = [];
  params: [string, string][] = [];

  public constructor(public readonly parent?: BaseUrlBuilder) {}

  param(key: URL_PARAM_TYPE, value: string): this {
    this.params.push([key, value]);
    return this;
  }

  build(): string {
    const pathes = this.pathes.slice(0);
    const params = this.params.slice(0);

    let parent = this.parent;
    while (parent) {
      pathes.splice(0, 0, ...parent.pathes);
      params.splice(0, 0, ...parent.params);
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
