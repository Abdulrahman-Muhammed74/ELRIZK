import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login } from '../../shared/models/auth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = '/api/Authenticate/';
  constructor(private http: HttpClient) {}

  login(body: login) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.baseUrl}Login`, body, { headers });
  }
}
