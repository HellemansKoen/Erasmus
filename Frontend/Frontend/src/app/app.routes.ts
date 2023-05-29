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
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./leaderboard/leaderboard.page').then( m => m.LeaderboardPage)
  },
  {
    path: 'singlebininfo',
    loadComponent: () => import('./singlebininfo/singlebininfo.page').then( m => m.SinglebininfoPage)
  },
  {
    path: 'cityposts',
    loadComponent: () => import('./cityposts/cityposts.page').then( m => m.CitypostsPage)
  },
  {
    path: 'generalposts',
    loadComponent: () => import('./generalposts/generalposts.page').then( m => m.GeneralpostsPage)
  },
  {
    path: 'individualcityposts',
    loadComponent: () => import('./individualcityposts/individualcityposts.page').then( m => m.IndividualcitypostsPage)
  }
];
