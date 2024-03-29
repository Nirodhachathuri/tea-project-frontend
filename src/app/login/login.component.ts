import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(private supplierService: SupplierService, private router: Router) { }

  login() {
    this.supplierService.loginSupplier(this.email, this.password)
      .subscribe(
        response => {
          // Redirect to dashboard upon successful login
          this.router.navigate(['/supplier-dashboard'],{ state: { supplier: response.supplier } });
        },
        error => {
          console.error('Login failed:', error);
          // Handle login failure, such as displaying an error message
        }
      );
  }
}
