import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = 'http://localhost:3000/api/suppliers'; // Assuming your backend API endpoint for suppliers
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient) { }

  registerSupplier(formData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, formData);
  }
  // loginSupplier(formData: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/login`, formData);
  // }

  loginSupplier(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map(response => {
          // Assuming the response contains a token or some indication of successful login
          this.isLoggedIn = true;
          return response;
        })
      );
  }
  getSupplierNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/suppliers`);
  }
}

