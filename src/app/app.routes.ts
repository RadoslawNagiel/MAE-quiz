import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { QuizService } from './shared/services/quiz.service';

export const routes: Routes = [
  {
    path: ``,
    loadComponent: async () => import(`./modules/home/home.component`),
  },
  {
    path: `quiz`,
    loadComponent: async () => import(`./modules/quiz/quiz.component`),
  },
  {
    path: `results`,
    canActivate: [() => inject(QuizService).isQuizAnswered()],
    loadComponent: async () => import(`./modules/results/results.component`),
  },
  {
    path: `summary`,
    canActivate: [() => inject(QuizService).isQuizAnswered()],
    loadComponent: async () => import(`./modules/summary/summary.component`),
  },
  {
    path: `**`,
    redirectTo: ``,
  },
];
