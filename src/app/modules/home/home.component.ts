import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import ButtonComponent from '../../shared/dumb-components/button/button.component';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  readonly quizService = inject(QuizService);
}
