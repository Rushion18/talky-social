// register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8000/user/register'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  registerUser(user:any): Observable<any> {
   
    return this.http.post(`http://localhost:8000/user/register`,user);
  }
}
