import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { languages, LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslateModule],
  templateUrl: `./app.component.html`,
  styleUrl: `./app.style.scss`,
})
export class AppComponent {
  readonly languageService = inject(LanguageService);
  readonly languages = languages;
}
