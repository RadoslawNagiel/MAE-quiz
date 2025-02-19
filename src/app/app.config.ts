import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslationService } from './translations/translation.service';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTranslateService({
      defaultLanguage: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
      },
    }),
    provideAnimations(),
  ],
};
