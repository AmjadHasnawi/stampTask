import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../../../product.service'
import { Product } from './../../../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }

}

