import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DateTimePage } from './datetime.page';

// <-- List of Components to use -->
import { ComponentsModule } from '../../components/components.module';

const routes : Routes = [
  {
    path: '',
    component: DateTimePage
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
  declarations: [DateTimePage]
})

export class DateTimePageModule {

}
