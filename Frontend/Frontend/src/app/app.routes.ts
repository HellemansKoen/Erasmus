import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'addpost',
    loadComponent: () => import('./addpost/addpost.page').then(m => m.AddpostPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'managebins',
    loadComponent: () => import('./managebins/managebins.page').then( m => m.ManagebinsPage)
  },
  {
    path: 'manageposts',
    loadComponent: () => import('./manageposts/manageposts.page').then( m => m.ManagepostsPage)
  },
  {
    path: 'forgotpassword',
    loadComponent: () => import('./forgotpassword/forgotpassword.page').then( m => m.ForgotpasswordPage)
  }
];
