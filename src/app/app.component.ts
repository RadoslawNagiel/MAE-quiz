import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './shared/services/language.service';
import { IdleService } from './shared/services/idle.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslateModule],
  templateUrl: `./app.component.html`,
  styleUrl: `./app.style.scss`,
})
export class AppComponent {
  readonly languageService = inject(LanguageService);
  readonly idleService = inject(IdleService);
  readonly languages = environment.availableLanguages;
}
