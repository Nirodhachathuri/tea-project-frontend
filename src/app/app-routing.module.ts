import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';

import { AuthGuardService } from './service/auth-guard.service'; // Import AuthGuard here
import { SupplyInputComponent } from './supply-input/supply-input.component';
import { SupplyPredictionComponent } from './supply-prediction/supply-prediction.component';
import { FirstComponent } from './first/first.component';
import { FactoryLoginComponent } from './factory-login/factory-login.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';

const routes: Routes = [{ path: 'first', component: FirstComponent },
{ path: 'factory-login', component: FactoryLoginComponent },
 { path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistreComponent },
{path:'supplier-registration',component:SupplierRegistrationComponent},
{ path: 'supplier-dashboard', component: SupplierDashboardComponent ,canActivate: [AuthGuardService]},
{ path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService]},
{path: 'supplier-management',component:SupplierManagementComponent,canActivate: [AuthGuardService]},
{path:'supply-Input',component:SupplyInputComponent,canActivate: [AuthGuardService]},
{path:'supply-prediction',component:SupplyPredictionComponent,canActivate:[AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
