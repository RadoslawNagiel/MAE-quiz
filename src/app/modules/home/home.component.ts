import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import ButtonComponent from '../../shared/dumb-components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.style.scss',
})
export default class HomeComponent {}
