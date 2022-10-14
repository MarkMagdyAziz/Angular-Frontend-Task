import { BehaviorSubject } from 'rxjs';
import { Iproduct } from './../interfaces/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  placeholder: Iproduct[] = [];
  cartItems = new BehaviorSubject([]);

  constructor() {
    const lStorage = this.getMyCart();
    // emmit the cart to subscribers
    if (lStorage) this.cartItems.next(lStorage);
  }
  addItemToCart(product: Iproduct) {
    const lStorage = this.getMyCart();
    let exist: Iproduct;

    if (lStorage) {
      exist = lStorage.find((item) => {
        return item.id === product.id;
      });
    }
    if (exist) {
      exist.qty ? exist.qty++ : (exist.qty = 1);
      this.setMyCart(lStorage);
    } else {
      if (lStorage) {
        const newData = [...lStorage, product];
        this.setMyCart(newData);
        this.cartItems.next(this.getMyCart());
      }
      this.placeholder.push(product);
      this.setMyCart(this.placeholder);
      this.cartItems.next(this.getMyCart());
    }
  }
  getMyCart() {
    return JSON.parse(localStorage.getItem('myCart'));
  }
  setMyCart(product: any) {
    localStorage.setItem('myCart', JSON.stringify(product));
    this.cartItems.next(this.getMyCart());
  }
}
