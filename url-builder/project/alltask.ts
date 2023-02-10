import { BaseUrlBuilder } from '../base-url-builder';

export class AllTaskUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder, queryParams: string[]) {
    super(parent);
    this.setPath('mytask', queryParams);
  }
}
