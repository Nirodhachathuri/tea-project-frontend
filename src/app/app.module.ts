import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistreComponent } from './registre/registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { SupplyInputComponent } from './supply-input/supply-input.component';
import { SupplyPredictionComponent } from './supply-prediction/supply-prediction.component';
import { AuthGuardService } from './service/auth-guard.service';
import { FirstComponent } from './first/first.component';
import { FactoryLoginComponent } from './factory-login/factory-login.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { AgmCoreModule } from '@agm/core';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    LoginComponent,
    DashboardComponent,
    SupplierManagementComponent,
    SupplyInputComponent,
    SupplyPredictionComponent,
    FirstComponent,
    FactoryLoginComponent,
    SupplierRegistrationComponent,
    SupplierDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBPPXrvKoBlwSXoZ-95aryGZYuVXt06xSM' 
    })
  ],
  providers: [RegisterService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
