import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getVendorWidgets(token: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `${this.baseUrl}/Home/GetVendorWidgetTypes`,
      {},
      { headers }
    );
  }
}
