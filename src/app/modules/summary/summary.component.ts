import { Component } from '@angular/core';
import QuizQuestionsComponent from '../../shared/smart-components/quiz-questions/quiz-questions.component';

@Component({
  selector: 'app-summary',
  imports: [QuizQuestionsComponent],
  templateUrl: './summary.component.html',
})
export default class SummaryComponent {}
