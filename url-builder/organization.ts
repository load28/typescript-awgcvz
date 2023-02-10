import { BaseUrlBuilder } from './base-url-builder';
import { ProjectUrlBuilder } from './project/project';

export class OrganizationUrlBuilder extends BaseUrlBuilder {
  queryParamKeys = ['task_detail'];

  public constructor(parent: BaseUrlBuilder, name: string, private queryParams: string[]) {
    super(parent);
    this.setPath(name, queryParams);
  }

  public project(): ProjectUrlBuilder {
    return new ProjectUrlBuilder(this, 'project', [...this.queryParams, ...this.queryParamKeys]);
  }
}
