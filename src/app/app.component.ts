import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tea-app-project';

  constructor(private router: Router) { }

  ngOnInit() {
    // Navigate to the login page when the application starts
    this.router.navigate(['/first']);
  }

  navigateToRegistration() {
    this.router.navigate(['/registration']);
  }
}
