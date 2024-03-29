import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factory-login',
  templateUrl: './factory-login.component.html',
  styleUrls: ['./factory-login.component.css']
})
export class FactoryLoginComponent {

  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(
        () => {
          // Redirect to dashboard upon successful login
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login failed:', error);
          // Handle login failure, such as displaying an error message
        }
      );
  }
 

}
