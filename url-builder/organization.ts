import { BaseUrlBuilder } from './base-url-builder';
import { ProjectUrlBuilder } from './project/project';

export const PROJECT_QUERY_PARAMS: Record<string, string> = {
  WS_ID: 'ws_id',
};

export class OrganizationUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder, name: string) {
    super(parent);
    this.setPath(name);
    this.setQueryParams(PROJECT_QUERY_PARAMS);
  }

  public project(): ProjectUrlBuilder {
    return new ProjectUrlBuilder(this, 'project');
  }
}
