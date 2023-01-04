import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'saisie-cours',
        loadChildren: () => import('../saisie-cours/saisie-cours.module').then(m => m.SaisieCoursPageModule)
      },
      {
        path: 'liste-cours',
        loadChildren: () => import('../liste-cours/liste-cours.module').then(m => m.ListeCoursPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
    },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
