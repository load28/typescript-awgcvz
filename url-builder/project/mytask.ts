import { BaseUrlBuilder } from "../base-url-builder";

export class MytaskUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder) {
    super(parent);
    this.pathes.push('mytask');
  }
}