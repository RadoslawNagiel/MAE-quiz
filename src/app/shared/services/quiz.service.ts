import { Injectable, signal } from '@angular/core';
import { shuffleArray } from '../functions/shuffle-array';

export interface Question {
  key: string;
  question: string;
  answers: {
    key: string;
    correct: boolean;
    value: string;
  }[];
  selectedAnswer?: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions = signal<Question[]>([]);

  constructor() {
    this.setQuestions();
  }

  setQuestions() {
    this.questions.set(
      [`question1`, `question2`, `question3`].map((key) => {
        return {
          key,
          question: `quiz.${key}.value`,
          answers: shuffleArray([
            `rightAnswer`,
            `wrongAnswer1`,
            `wrongAnswer2`,
            `wrongAnswer3`,
          ]).map((answerKey) => {
            return {
              key: answerKey,
              correct: answerKey === `rightAnswer`,
              value: `quiz.${key}.${answerKey}`,
            };
          }),
        };
      }),
    );
  }

  selectAnswer(index: number, key: string) {
    const questions = [...this.questions()];
    questions[index].selectedAnswer = key;
    this.questions.set(questions);
  }

  resetQuiz() {
    this.setQuestions();
  }
}
