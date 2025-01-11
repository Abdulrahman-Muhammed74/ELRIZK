import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = '/api/Home/';
  constructor(private http: HttpClient) {}

  getVendorWidgets(token: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `${this.baseUrl}GetVendorWidgetTypes`,
      {},
      { headers }
    );
  }
}
