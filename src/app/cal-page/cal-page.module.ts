import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalPagePage } from './cal-page.page';
import { NgCalendarModule  } from 'ionic2-calendar';

const routes: Routes = [
  {
    path: '',
    component: CalPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCalendarModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalPagePage]
})
export class CalPagePageModule {}
