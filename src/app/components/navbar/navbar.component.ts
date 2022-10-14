import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  itemInCart: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((items) => {
      this.itemInCart = items.length;
    });
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
