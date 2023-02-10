import { BaseUrlBuilder } from './base-url-builder';
import { ProjectUrlBuilder } from './project/project';

export class OrganizationUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder, name: string) {
    super(parent);
    this.pathes.push(name);
  }

  public project(): ProjectUrlBuilder {
    return new ProjectUrlBuilder(this);
  }
}
