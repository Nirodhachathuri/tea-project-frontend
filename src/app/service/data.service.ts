import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getTotalQuantity(dateRange: { start: string, end: string }, supplier: string): Observable<{ totalSuppliers: number, totalTeaCollection: number }> {
    // You need to replace 'your-api-endpoint' with your actual backend API endpoint
    return this.http.post<{ totalSuppliers: number, totalTeaCollection: number }>('http://localhost:3000/api/supplier/total-tea-supply', { dateRange, supplier });
  }
  getAllSupplierQuantity(dateRange: { start: string, end: string }): Observable<{ totalSuppliers: number, totalTeaCollection: number }> {
    // You need to replace 'your-api-endpoint' with your actual backend API endpoint
    return this.http.post<{ totalSuppliers: number, totalTeaCollection: number }>('http://localhost:3000/api/supplier/total-tea-allsupply', { dateRange });
  }
}
