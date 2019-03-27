import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from "./../../../../data.service";
import { ProductService } from './../../../../product.service'

import { Product } from './../../../../product';
import { stringify } from 'querystring';

declare let $ :any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  editStatus: boolean = false;

  constructor(
    private data: DataService,
    private productService: ProductService,
    private router : Router) { }

  ngOnInit() {
    // Get the value of the product from the shared service
    this.data.currentProduct.subscribe(product => this.product = product)
    if (!this.product) {
      this.product = JSON.parse((localStorage.getItem("product")));
    }
  }
  // To give the user the ability to edit the product
  edit() {
    this.editStatus = true;
  }
  // Apply changes to the product
  applyChanges() {
    this.editStatus = false;
    this.productService.applyChanges(this.product)
    .subscribe(product => console.log(product));
  }
  // Delete a product
  deleteProduct() {
    this.productService.deleteProduct(this.product)
    .subscribe(product => console.log(product));
    this.router.navigate(['products'])
  }

}
