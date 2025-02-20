import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  HostBinding,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import ButtonComponent from '../../dumb-components/button/button.component';
import { QuizService } from '../../services/quiz.service';
import ProgressBarComponent from '../../dumb-components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-quiz-questions',
  imports: [
    NgClass,
    TranslateModule,
    ButtonComponent,
    NgTemplateOutlet,
    ProgressBarComponent,
  ],
  templateUrl: './quiz-questions.component.html',
  styleUrl: './quiz-questions.style.scss',
})
export default class QuizQuestionsComponent<T> implements OnInit, OnDestroy {
  @HostBinding(`style`)
  style = `height: 100%;`;

  showPreviousButton = input<boolean>(false);
  isReadonly = input<boolean>(false);
  finishButton = input<TemplateRef<T>>();

  readonly quizService = inject(QuizService);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly router = inject(Router);

  currentQuestion = signal(0);

  routeSubscription = new Subscription();

  progressBarPercentage = computed(() => {
    const isSelected = Boolean(
      this.questions()[this.currentQuestion()].selectedAnswerKey,
    );
    return Math.round(
      ((this.currentQuestion() + (isSelected ? 1 : 0)) /
        this.questions().length) *
        100,
    );
  });

  questions = computed(() => {
    return this.quizService.questions();
  });

  previousRoute = computed(() => {
    const route = this.router.url.split(`/`).slice(0, -1).join(`/`);
    const previousIndex = this.currentQuestion() - 1;
    return `${route}/${previousIndex}`;
  });

  nextRoute = computed(() => {
    const route = this.router.url.split(`/`).slice(0, -1).join(`/`);
    const nextIndex = this.currentQuestion() + 1;
    return `${route}/${nextIndex}`;
  });

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe((result) => {
      if (result[`index`]) {
        this.currentQuestion.set(Number(result[`index`]));
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
