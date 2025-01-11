import { HomeService } from './../../core/services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isMenuHidden = false;
  vendorWidgets: any;

  products: any;

  responsiveOptions: any[] | undefined;
  token: any;
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    let userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.token = userData.token;
    this.getWidgets();
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  getWidgets() {
    this.homeService.getVendorWidgets(this.token).subscribe((res: any) => {
      this.products = res;
    });
  }
}
