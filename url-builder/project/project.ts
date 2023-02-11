import { BaseUrlBuilder } from '../base-url-builder';
import { AllTaskUrlBuilder } from './alltask';
import { ProjectDetailUrlBuilder } from './detail';
import { MytaskUrlBuilder } from './mytask';

export const PROJECT_QUERY_PARAMS: Record<string, string> = {
  TASK_ID: 'task_id',
};

export class ProjectUrlBuilder extends BaseUrlBuilder {

  public constructor(parent: BaseUrlBuilder, name: string) {
    super(parent);
    this.setPath(name);
    this.setQueryParams(PROJECT_QUERY_PARAMS);
  }

  public mytask(): MytaskUrlBuilder {
    return new MytaskUrlBuilder(this);
  }

  public alltask(): AllTaskUrlBuilder {
    return new AllTaskUrlBuilder(this);
  }

  public detail(projectId: string): ProjectDetailUrlBuilder {
    return new ProjectDetailUrlBuilder(this, projectId);
  }
}
