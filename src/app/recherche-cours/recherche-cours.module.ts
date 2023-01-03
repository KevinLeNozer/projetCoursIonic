import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheCoursPageRoutingModule } from './recherche-cours-routing.module';

import { RechercheCoursPage } from './recherche-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheCoursPageRoutingModule
  ],
  declarations: [RechercheCoursPage]
})
export class RechercheCoursPageModule {}
