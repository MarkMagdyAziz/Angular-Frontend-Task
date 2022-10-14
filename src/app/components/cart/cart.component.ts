import { Iproduct } from './../../interfaces/iproduct';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  myCart: Iproduct[] = [];
  cartItemsQuantity: number = 1;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    let items = this.cartService.getMyCart();
    this.myCart = items.map((item) => {
      return {
        qty: item.qty ? item.qty : (item.qty = 1),
        price: item.price,
        title: item.title,
        brand: item.brand,
        thumbnail: item.thumbnail,
        id: item.id,
      };
    });
    this.cartItemsQuantity = this.myCart.length;
  }
  onDelete(productID: number) {
    let filteredItems = this.myCart.filter((item) => item.id !== productID);
    this.cartService.setMyCart(filteredItems);
    this.getCartItems();
    this.cartService.cartItems.next(this.cartService.getMyCart());
  }
}
