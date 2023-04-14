import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'citymap',
        loadComponent: () =>
          import('../citymap/citymap.page').then((m) => m.CitymapPage)
      },
      {
        path: 'addbin',
        loadComponent: () => import('../addbin/addbin.page').then( m => m.AddbinPage)
      }, 
      {
        path: 'lookposts',
        loadComponent: () =>
          import('../lookposts/lookposts.page').then((m) => m.LookpostsPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: 'citymap',
        pathMatch: 'full'
      },
    ],
  },
];
