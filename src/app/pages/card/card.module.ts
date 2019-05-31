import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CardPage } from './card.page';

//<--- List of Components to use -->//
import { ComponentsModule } from '../../components/components.module';

const routes : Routes = [
  {
    path: '',
    component: CardPage
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
  declarations: [CardPage]
})

export class CardPageModule {

}
