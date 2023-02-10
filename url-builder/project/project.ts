import { BaseUrlBuilder } from '../base-url-builder';
import { AllTaskUrlBuilder } from './alltask';
import { ProjectDetailUrlBuilder } from './detail';
import { MytaskUrlBuilder } from './mytask';

export class ProjectUrlBuilder extends BaseUrlBuilder {
  public constructor(parent: BaseUrlBuilder) {
    super(parent);
    this.pathes.push('project');
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
