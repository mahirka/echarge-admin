import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},
  {path:'new',component:NewComponent},
  
];

@NgModule({
  declarations: [NewComponent, ViewAllComponent],
  imports: [
   
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ChartsModule,
  ]
})
export class PlugTypesModule { }
