import { RootUrlHandler } from './root';

export class UrlBuilder {
  public static root() {
    return new RootUrlHandler();
  }
}
