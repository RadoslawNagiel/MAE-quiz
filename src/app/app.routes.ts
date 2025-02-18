import { Routes } from '@angular/router';

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
    loadComponent: async () => import(`./modules/results/results.component`),
  },
  {
    path: `summary`,
    loadComponent: async () => import(`./modules/summary/summary.component`),
  },
  {
    path: `**`,
    redirectTo: ``,
  },
];
