import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login } from '../../shared/models/auth.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  login(body: login) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.baseUrl}/Authenticate/Login`, body, {
      headers,
    });
  }
}
