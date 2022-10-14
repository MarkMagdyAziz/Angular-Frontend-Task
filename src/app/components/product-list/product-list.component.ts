import { Component, OnInit } from '@angular/core';
import { Iproduct } from './../../interfaces/iproduct';
import { ProductsService } from './../../services/products.service';
import { Icategory } from './../../interfaces/icategory';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];
  categories: Icategory[] = [];
  selectedCatgeory: string = '';
  throttle = 800;
  distance = 1;
  skip = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts(this.skip)
      .pipe(
        map((data) => {
          return data.products.map((product: any) => {
            return {
              thumbnail: product.thumbnail,
              title: product.title,
              price: product.price,
              discountPercentage: product.discountPercentage,
              id: product.id,
            };
          });
        })
      )
      .subscribe((transformedProducts) => {
        this.products = transformedProducts;
      });

    this.productsService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
  filterCategory() {
    if (this.selectedCatgeory == '') {
      this.productsService.getProducts(9).subscribe((data: any) => {
        this.products = data.products;
      });
    } else {
      this.productsService
        .getFilteredProducts(this.selectedCatgeory)
        .subscribe((data: any) => {
          this.products = data.products;
        });
    }
  }
  onScroll(): void {
    this.skip += 15;
    if (this.products.length < 65)
      this.productsService.getProducts(this.skip).subscribe((data: any) => {
        this.products.push(...data.products);
      });
  }
}
