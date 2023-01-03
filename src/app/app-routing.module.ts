import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'saisie-cours',
    loadChildren: () => import('./saisie-cours/saisie-cours.module').then( m => m.SaisieCoursPageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./liste-cours/liste-cours.module').then( m => m.ListeCoursPageModule)
  },
  {
    path: 'recherche-cours',
    loadChildren: () => import('./recherche-cours/recherche-cours.module').then( m => m.RechercheCoursPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
