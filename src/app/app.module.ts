import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { ListNHttpInterceptor } from './core/http.interceptor';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { appReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LayoutComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot({appState:appReducer}, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ListNHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }