import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AvatarPage } from './avatar.page';

//List of Components to use


const routes : Routes = [
  {
    path: '',
    component: AvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule,
  ],
  declarations: [AvatarPage]
})

export class AvatarPageModule {

}
