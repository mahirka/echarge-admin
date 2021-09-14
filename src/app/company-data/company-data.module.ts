import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},
  {path:'edit',component:EditComponent},
  
  
];


@NgModule({
  declarations: [ViewAllComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ChartsModule,
  ]
})
export class CompanyDataModule { }
