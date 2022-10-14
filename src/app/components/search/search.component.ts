import { ProductsService } from './../../services/products.service';
import { Iproduct } from './../../interfaces/iproduct';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  products: Iproduct[] = [];
  query: string = '';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.products = [];
  }
  handeSearchQuery(query: string) {
    if (query.length > 1)
      this.productsService.searchProduct(query).subscribe((data) => {
        this.products = data.products;
      });
    this.products = [];
  }
}
