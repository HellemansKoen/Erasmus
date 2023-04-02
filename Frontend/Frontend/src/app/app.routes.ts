import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'citymap',
    loadComponent: () => import('./citymap/citymap.page').then( m => m.CitymapPage)
  },
  {
    path: 'login',
    loadComponent: () => 
    import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
];
