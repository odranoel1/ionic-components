import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CheckPage } from './check.page';

//<--- List of Components to use -->//
import { ComponentsModule } from '../../components/components.module';

const routes : Routes = [
  {
      path: '',
      component: CheckPage
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
  declarations: [CheckPage]
})

export class CheckPageModule {

}
