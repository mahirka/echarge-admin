import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewComponent } from './view/view.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},
  {path:'view/:machineId',component:ViewComponent},
  {path:'new',component:NewComponent},
  {path:'edit/:machineId',component:EditComponent},
  {path:'add-vendor',component:AddVendorComponent},
  
];

@NgModule({
  declarations: [ViewAllComponent, ViewComponent, NewComponent, EditComponent, AddVendorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ChartsModule,
  ]
})
export class ChargingMechinesModule { }
