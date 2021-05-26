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

  {path:'view-all',canActivate: [AuthGuard],component:ViewAllComponent},
  {path:'view',canActivate: [AuthGuard],component:ViewComponent},
  {path:'new',canActivate: [AuthGuard],component:NewComponent},
  {path:'edit',canActivate: [AuthGuard],component:EditComponent},
  
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
