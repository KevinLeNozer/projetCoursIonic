import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheCoursPage } from './recherche-cours.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheCoursPageRoutingModule {}
