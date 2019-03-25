import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ProductService } from './../../../../product.service'
import { FiltrationService } from './../../../../filtration.service'
import { DataService } from "./../../../../data.service";

import { Product } from './../../../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  // A copy of products array; to not affect the original products array during filtering
  filteredProducts: Product[] = this.products;
  
  constructor(
    private productsService: ProductService,
    private filtrationService: FiltrationService,
    private data: DataService,
    private router : Router) { }

  ngOnInit() {
    this.getProducts();
  }

  // To fetch all the products
  getProducts() {
    this.productsService.getProducts()
    .subscribe(products => {
      this.products = products;
      this.filteredProducts = products.slice();
    });
  }

  // To filter products depending on different criterias
  filtration(val: string) {
    console.log(typeof val);
    if (val == "all") {
      this.filteredProducts = this.products.slice();
      return ;
    } else {
      this.filteredProducts = this.filtrationService.filter(this.products.slice(), val);
    }
  }

  // To search through all the products
  search() {
    this.filtrationService.search();
  }

  // To change the product in the shared service and navigate to the  product-details 
  productDetails(product: Product) {
    this.data.changeProduct(product);
    this.router.navigate(['productDetails'])
  }
}

