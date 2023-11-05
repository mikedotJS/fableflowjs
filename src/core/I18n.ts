type LanguageResources = {
  [key: string]: string;
};

export class I18n {
  private resources: LanguageResources;

  constructor(language: string) {
    this.resources = require(`./i18n/${language}.json`);
  }

  public t(key: string): string {
    return this.resources[key] || key;
  }
}
