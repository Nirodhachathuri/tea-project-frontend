import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  // login(email: string, password: string) {
  //   return this.http.post<any>('http://localhost:3000/api/login', { email, password });
  // }

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/api/login', { email, password })
      .pipe(
        map(response => {
          // Assuming the response contains a token or some indication of successful login
          this.isLoggedIn = true;
          return response;
        })
      );
  }
}
