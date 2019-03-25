import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../../../../product.service'
import { FiltrationService } from './../../../../filtration.service'

import { Product } from './../../../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = this.products;

  constructor(
    private productsService: ProductService,
    private filtrationService: FiltrationService,
    private router : Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
    .subscribe(products => {
      this.products = products;
      this.filteredProducts = products.slice();
    });
  }

  filtration(val: string) {
    console.log(typeof val);
    if (val == "all") {
      this.filteredProducts = this.products.slice();
      return ;
    } else {
    this.filteredProducts = this.filtrationService.filter(this.products.slice(), val);
    }
  }

  search() {
    this.filtrationService.search();
  }

  navigate(product: Product) {
    console.log(product);
    this.router.navigate(['/productDetails', JSON.stringify(product)]);
  }
}

