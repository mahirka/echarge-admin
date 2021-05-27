import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewComponent } from './view/view.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},
  {path:'view',component:ViewComponent},
  {path:'new',component:NewComponent},
  {path:'edit',component:EditComponent},
  
];

@NgModule({
  declarations: [ViewAllComponent, ViewComponent, NewComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ChargingMechinesModule { }
