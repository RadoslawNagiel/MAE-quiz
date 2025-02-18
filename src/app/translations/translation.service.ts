import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: `root`,
})
export class TranslationService implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const translationsPromise = Promise.all([
      import(`./languages/${lang}.json` as any),
    ]).then(
      async (data) =>
        new Promise((resolve) => {
          resolve(Object.assign({}, ...data));
        })
    );
    return from(translationsPromise);
  }
}
