import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(formData: any): Observable<any> {
    console.log("data",formData)
    return this.http.post<any>('http://localhost:3000/api/register', formData);
  }
}
