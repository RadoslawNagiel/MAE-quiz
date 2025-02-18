import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslateModule],
  templateUrl: `./app.component.html`,
  styleUrl: `./app.style.scss`,
})
export class AppComponent {
  readonly translateService = inject(TranslateService);
  readonly languages = [
    {
      langKey: `pl`,
      value: `PL`,
    },
    {
      langKey: `en`,
      value: `EN`,
    },
  ];

  setLanguage(language: string) {
    this.translateService.setDefaultLang(language);
  }
}
