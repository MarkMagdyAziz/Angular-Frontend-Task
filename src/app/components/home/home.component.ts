import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemInCart: number = 1;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}
}
