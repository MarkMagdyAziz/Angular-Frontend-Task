import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Iproduct } from './../../interfaces/iproduct';
import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  product = {} as Iproduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let productID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productsService.getProductDetails(productID).subscribe((product) => {
      this.product = product;
    });
  }
  ngOnDestroy(): void {}
  ngDoCheck(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  addToCart(product: Iproduct) {
    this.cartService.addItemToCart(product);
  }
}
