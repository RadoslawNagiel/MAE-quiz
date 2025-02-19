import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  imports: [TranslateModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.style.scss',
})
export default class ButtonComponent {
  text = input.required<string>();
  routerLink = input.required<string>();
  clicked = output();
}
