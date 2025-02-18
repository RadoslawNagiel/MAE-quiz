import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export enum AvailableLanguages {
  pl = `pl`,
  en = `en`,
}

export const languages = [
  {
    langKey: AvailableLanguages.pl,
    value: `pl`,
  },
  {
    langKey: AvailableLanguages.en,
    value: `en`,
  },
];

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translateService = inject(TranslateService);

  setLanguage(language: AvailableLanguages) {
    this.translateService.setDefaultLang(language);
  }
}
