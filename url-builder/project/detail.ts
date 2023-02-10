import { BaseUrlBuilder } from '../base-url-builder';

export class ProjectDetailUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder, projectId: string) {
    super(parent);
    this.pathes.push(projectId);
  }
}
