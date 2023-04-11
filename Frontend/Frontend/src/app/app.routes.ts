import { Routes } from '@angular/router';

export const routes: Routes = [
 /*{
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },*/
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // Can't follow why it doeesn't work -> citymap on this place is without the tabs
  {
    path: 'test',
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
    path: 'addbin',
    loadComponent: () => import('./addbin/addbin.page').then( m => m.AddbinPage)
  },
  /*{
    path: 'lookposts',
    loadComponent: () => import('./lookposts/lookposts.page').then( m => m.LookpostsPage)
  },*/
  {
    path: 'addpost',
    loadComponent: () => import('./addpost/addpost.page').then( m => m.AddpostPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
 
];
