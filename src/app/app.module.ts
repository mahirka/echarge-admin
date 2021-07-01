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
import { environment as env } from 'src/environments/environment.prod';
import { appReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { environment } from 'src/environments/environment';
import { Bugfender } from '@bugfender/sdk';




const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '',
};
Bugfender.init({
  appKey: '<YOUR_APP_KEY_HERE>',
  version: '<version>',
  build: '<build>',
});

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LayoutComponent,
    
    
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot({appState:appReducer}, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ListNHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }