import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import ButtonComponent from '../../shared/dumb-components/button/button.component';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [NgClass, TranslateModule, ButtonComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.style.scss',
})
export default class QuizComponent implements OnInit, OnDestroy {
  readonly quizService = inject(QuizService);
  readonly activatedRoute = inject(ActivatedRoute);

  currentQuestion = signal(0);

  routeSubscription = new Subscription();

  questions = computed(() => {
    return this.quizService.questions();
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
