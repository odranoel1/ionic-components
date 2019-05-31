import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ButtonsPage } from './buttons.page';

//<--- List of Components to use -->//

const routes : Routes = [
  {
    path: '',
    component: ButtonsPage
  }
];

@NgModule ({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule,
  ],
  declarations: [ButtonsPage]
})

export class ButtonsPageModule {

}
