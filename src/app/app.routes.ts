import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { QuizService } from './shared/services/quiz.service';

export const routes: Routes = [
  {
    path: ``,
    loadComponent: async () => import(`./modules/home/home.component`),
    data: { animation: 'home' },
  },
  {
    path: `quiz/:index`,
    loadComponent: async () => import(`./modules/quiz/quiz.component`),
    data: { animation: 'quiz' },
  },
  {
    path: `results`,
    canActivate: [() => inject(QuizService).isQuizAnswered(true)],
    loadComponent: async () => import(`./modules/results/results.component`),
    data: { animation: 'results' },
  },
  {
    path: `summary`,
    canActivate: [() => inject(QuizService).isQuizAnswered(true)],
    loadComponent: async () => import(`./modules/summary/summary.component`),
    data: { animation: 'summary' },
  },
  {
    path: `**`,
    redirectTo: ``,
  },
];
