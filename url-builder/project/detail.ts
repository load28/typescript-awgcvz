import { BaseUrlBuilder } from '../base-url-builder';

export const PROJECT_QUERY_PARAMS: Record<string, string> = {
  DETAIL_ID: 'detail_id',
};

export class ProjectDetailUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder, projectId: string) {
    super(parent);
    this.setPath(projectId);
    this.setQueryParams(PROJECT_QUERY_PARAMS);
  }
}
