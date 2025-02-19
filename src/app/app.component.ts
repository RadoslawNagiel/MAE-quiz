import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { routeAnimations } from './shared/animations/route-animations';
import { IdleService } from './shared/services/idle.service';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslateModule],
  templateUrl: `./app.component.html`,
  styleUrl: `./app.style.scss`,
  animations: [routeAnimations],
})
export class AppComponent {
  readonly languageService = inject(LanguageService);
  readonly idleService = inject(IdleService);

  readonly languages = environment.availableLanguages;

  getRouteState(routerOutlet: RouterOutlet) {
    return routerOutlet?.activatedRouteData?.[`animation`];
  }
}
