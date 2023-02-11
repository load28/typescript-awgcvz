import { BaseUrlBuilder } from './base-url-builder';
import { OrganizationUrlBuilder } from './organization';

export class RootUrlHandler extends BaseUrlBuilder {
  public organization(name: string): OrganizationUrlBuilder {
    return new OrganizationUrlBuilder(this, name);
  }
}
