import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleBrandsComponent } from './vehicle-brands/vehicle-brands.component';
import { VehicleModelsComponent } from './vehicle-models/vehicle-models.component';
import { BrandNewComponent } from './brand-new/brand-new.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ModelNewComponent } from './model-new/model-new.component';
import { ModelEditComponent } from './model-edit/model-edit.component';
import { MarketVehiclesComponent } from './market-vehicles/market-vehicles.component';
import { MarketVehicleNewComponent } from './market-vehicle-new/market-vehicle-new.component';
import { MarketVehicleEditComponent } from './market-vehicle-edit/market-vehicle-edit.component';

const routes: Routes = [

  {path:'view-all',component:ViewAllComponent},
  {path:'vehicle-brands',component:VehicleBrandsComponent},
  {path:'vehicle-models',component:VehicleModelsComponent},
  {path:'brand-new',component:BrandNewComponent},
  {path:'brand-edit',component:BrandEditComponent},
  {path:'model-new',component:ModelNewComponent},
  {path:'model-edit',component:ModelEditComponent},
  {path:'market-vehicles',component:MarketVehiclesComponent},
  {path:'market-vehicle-new',component:MarketVehicleNewComponent},
  {path:'market-vehicle-edit',component:MarketVehicleEditComponent},

];



@NgModule({
  declarations: [ViewAllComponent, VehicleBrandsComponent, VehicleModelsComponent, BrandNewComponent, BrandEditComponent, ModelNewComponent, ModelEditComponent, MarketVehiclesComponent, MarketVehicleNewComponent, MarketVehicleEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class VehiclesModule { }
