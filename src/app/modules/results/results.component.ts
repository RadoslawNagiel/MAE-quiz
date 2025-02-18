import { Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import ButtonComponent from '../../shared/dumb-components/button/button.component';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-results',
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.style.scss',
})
export default class ResultsComponent {
  readonly quizService = inject(QuizService);

  correctAnswers = computed(() => {
    const questions = structuredClone(this.quizService.questions());
    const correctQuestions = questions.filter(
      (question) => question.selectedAnswer === question.correctAnswer,
    );
    return correctQuestions.length;
  });

  wrongAnswers = computed(() => {
    const questions = structuredClone(this.quizService.questions());
    return questions.length - this.correctAnswers();
  });

  percentageResults = computed(() => {
    const correctAnswers = this.correctAnswers();
    const wrongAnswers = this.wrongAnswers();
    return Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100);
  });

  resultsText = computed(() => {
    const percentageResults = this.percentageResults();
    if (percentageResults <= 50) {
      return `results.text.bad`;
    }
    if (percentageResults <= 80) {
      return `results.text.average`;
    }
    return `results.text.good`;
  });
}
