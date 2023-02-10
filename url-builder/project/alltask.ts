import { BaseUrlBuilder } from '../base-url-builder';

export class AllTaskUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder) {
    super(parent);
    this.pathes.push('alltask');
  }
}
