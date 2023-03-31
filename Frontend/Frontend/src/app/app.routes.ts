import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'citymap',
    loadComponent: () => import('./citymap/citymap.page').then( m => m.CitymapPage)
  },

];
