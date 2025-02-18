import { Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizService } from '../../shared/services/quiz.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-summary',
  imports: [TranslateModule, NgClass],
  templateUrl: './summary.component.html',
  styleUrl: './summary.style.scss',
})
export default class SummaryComponent {
  readonly quizService = inject(QuizService);

  questions = computed(() => {
    return this.quizService.questions();
  });
}
