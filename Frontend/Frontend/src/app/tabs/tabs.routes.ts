import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'citymap',
        loadComponent: () =>
          import('../citymap/citymap.page').then((m) => m.CitymapPage)
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
