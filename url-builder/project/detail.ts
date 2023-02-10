import { BaseUrlBuilder } from '../base-url-builder';

export class ProjectDetailUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder, projectId: string, queryParams: string[]) {
    super(parent);
    this.setPath(projectId, queryParams);
  }
}
