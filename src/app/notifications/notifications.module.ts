import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},


];


@NgModule({
  declarations: [ViewAllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class NotificationsModule { }
