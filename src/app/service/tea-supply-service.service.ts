import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeaSupplyServiceService {

  constructor(private http: HttpClient) { }

  submitTeaSupply(formData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/record-tea-supply', formData);
  }
}
