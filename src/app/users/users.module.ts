import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewComponent } from './view/view.component';
import { AuthGuard } from '../core/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},
  {path:'view/:userId',component:ViewComponent},
  
];


@NgModule({
  declarations: [ViewAllComponent, ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ChartsModule,
  
  ]
})
export class UsersModule { }
