import { BaseUrlBuilder } from '../base-url-builder';
import { AllTaskUrlBuilder } from './alltask';
import { ProjectDetailUrlBuilder } from './detail';
import { MytaskUrlBuilder } from './mytask';

export class ProjectUrlBuilder extends BaseUrlBuilder {
  queryParamKeys = ['task_id'];

  public constructor(parent: BaseUrlBuilder, name: string, private queryParams: string[]) {
    super(parent);
    this.setPath('project', queryParams);
  }

  public mytask(): MytaskUrlBuilder {
    return new MytaskUrlBuilder(this);
  }

  public alltask(): AllTaskUrlBuilder {
    return new AllTaskUrlBuilder(this, ['task_detail']);
  }

  public detail(projectId: string): ProjectDetailUrlBuilder {
    return new ProjectDetailUrlBuilder(this, projectId, [...this.queryParams, ...this.queryParamKeys]);
  }
}
