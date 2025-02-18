import { Injectable } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: `root`,
})
export class TranslationService implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    const translationsPromise: Promise<TranslationObject> = Promise.all([
      import(`./languages/${lang}.json`),
    ]).then(
      async (data) =>
        new Promise((resolve) => {
          resolve(Object.assign({}, ...data));
        }),
    );
    return from(translationsPromise);
  }
}
