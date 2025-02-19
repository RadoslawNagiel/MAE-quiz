import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import ButtonComponent from '../../shared/dumb-components/button/button.component';
import QuizQuestionsComponent from '../../shared/smart-components/quiz-questions/quiz-questions.component';

@Component({
  selector: 'app-quiz',
  imports: [TranslateModule, ButtonComponent, QuizQuestionsComponent],
  templateUrl: './quiz.component.html',
})
export default class QuizComponent {}
