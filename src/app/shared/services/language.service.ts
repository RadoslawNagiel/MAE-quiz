import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translateService = inject(TranslateService);

  selectedLanguage = signal(environment.defaultLanguage);

  setLanguage(language: string) {
    this.selectedLanguage.set(language);
    this.translateService.setDefaultLang(language);
  }
}
