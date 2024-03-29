import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { SupplierService } from './supplier.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private loginService: LoginService, private router: Router, private supplierService: SupplierService) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn || this.supplierService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
