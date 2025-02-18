import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ``,
    loadComponent: async () => import(`./modules/home/home.component`),
  },
  {
    path: `**`,
    redirectTo: ``,
  },
];
