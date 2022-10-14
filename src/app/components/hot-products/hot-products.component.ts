import { Iproduct } from './../../interfaces/iproduct';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hot-products',
  templateUrl: './hot-products.component.html',
  styleUrls: ['./hot-products.component.css'],
})
export class HotProductsComponent implements OnInit, OnChanges {
  hotProducts: Iproduct[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService
      .getProducts(1)
      .pipe(
        map((data) => {
          return data.products.filter((product: any) => {
            return product.discountPercentage > 15 ? product : false;
          });
        })
      )
      .subscribe((hotProducts) => {
        this.hotProducts = hotProducts;
      });
  }
  ngOnChanges(): void {}
}
