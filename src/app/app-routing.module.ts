import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: 'authentication',loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path:'',component:LayoutComponent,children:[

    
    {path: 'dashboard/users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    {path: 'dashboard/vendors', loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsModule)},
    {path: 'dashboard/charging-stations', loadChildren: () => import('./charging-stations/charging-stations.module').then(m => m.ChargingStationsModule)},
    {path: 'dashboard/charging-machines', loadChildren: () => import('./charging-mechines/charging-mechines.module').then(m => m.ChargingMechinesModule)},
    {path: 'dashboard/orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
    {path: 'dashboard/vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)},
    {path: 'dashboard/notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)},
  

    {path: 'dashboard/profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
    {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},


  {path: '', redirectTo:"/dashboard",pathMatch:"full"},

  ]},
  {path: '', redirectTo:"/dashboard",pathMatch:"full"},

// {path: ion'', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }