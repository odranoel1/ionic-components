import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FabPage } from './fab.page';

// <-- List of Componentes to use -->
import { ComponentsModule } from '../../components/components.module';

const routes : Routes = [
  {
    path: '',
    component: FabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule,
    ComponentsModule
  ],
  declarations: [FabPage]
})

export class FabPageModule {

}
