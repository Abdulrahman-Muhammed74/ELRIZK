import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isMenuHidden = false;
  products = [
    {
      src: 'assets/images/mechanic.png',
      name: 'Magneti Maerlli',
    },
    {
      src: 'assets/images/Ellipse 576 (1).png',
      name: 'NK Gas Springs',
    },
    {
      src: 'assets/images/Ellipse 576 (2).png',
      name: 'Valeo Stock',
    },
    {
      src: 'assets/images/autoparts.png',
      name: 'Search SKU',
    },
    {
      src: 'assets/images/Ellipse 576 (3).png',
      name: 'Search SKU',
    },
    {
      src: 'assets/images/mechanic.png',
      name: 'Magneti Maerlli',
    },
    {
      src: 'assets/images/Ellipse 576 (1).png',
      name: 'NK Gas Springs',
    },
    {
      src: 'assets/images/Ellipse 576 (2).png',
      name: 'Valeo Stock',
    },
    {
      src: 'assets/images/autoparts.png',
      name: 'Search SKU',
    },
    {
      src: 'assets/images/Ellipse 576 (3).png',
      name: 'Search SKU',
    },
  ];

  responsiveOptions: any[] | undefined;
  constructor() {}

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
