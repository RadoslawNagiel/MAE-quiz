import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Question } from '../types/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly router = inject(Router);
  questions = signal<Question[]>([]);

  constructor() {
    this.setQuestions();
  }

  private setQuestions() {
    this.questions.set(structuredClone(environment.quizQuestions));
  }

  selectAnswer(index: number, key: string) {
    const questions = structuredClone(this.questions());
    questions[index].selectedAnswerKey = key;
    this.questions.set(questions);
  }

  resetQuiz() {
    this.setQuestions();
  }

  isQuizAnswered(redirect = false): boolean {
    const questions = structuredClone(this.questions());
    const isAnswered =
      questions.filter((question) => !question.selectedAnswerKey).length === 0;
    if (redirect && !isAnswered) {
      this.router.navigate(['']);
    }
    return isAnswered;
  }
}
