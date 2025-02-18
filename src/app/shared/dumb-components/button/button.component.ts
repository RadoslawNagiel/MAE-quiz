import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  imports: [RouterLink, TranslateModule],
  templateUrl: './button.component.html',
  styleUrl: './button.style.scss',
})
export default class ButtonComponent {
  text = input.required<string>();
  routerLink = input<string>();
}
