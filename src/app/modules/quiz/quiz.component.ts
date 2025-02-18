import { Component, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import ButtonComponent from '../../shared/dumb-components/button/button.component';
import { QuizService } from '../../shared/services/quiz.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [NgClass, TranslateModule, ButtonComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.style.scss',
})
export default class QuizComponent {
  readonly quizService = inject(QuizService);
  currentQuestion = signal(0);

  questions = computed(() => {
    return this.quizService.questions();
  });

  selectedAnswerKey = computed(() => {
    return this.quizService.questions()[this.currentQuestion()].selectedAnswer;
  });

  nextClick() {
    this.currentQuestion.set(1 + this.currentQuestion());
  }
}
