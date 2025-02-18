import { Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import ButtonComponent from '../../shared/dumb-components/button/button.component';
import { QuizService } from '../../shared/services/quiz.service';
import { environment } from '../../../environments/environment';

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
      (question) => question.selectedAnswerKey === question.correctAnswerKey,
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
    const foundThreshold = environment.resultsThresholds.find((threshold) => {
      return (
        threshold.minPercentage <= percentageResults &&
        threshold.maxPercentage >= percentageResults
      );
    });
    return foundThreshold ? foundThreshold.translationKey : ``;
  });
}
