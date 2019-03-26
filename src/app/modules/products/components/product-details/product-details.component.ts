import { Component, OnInit } from '@angular/core';

import { DataService } from "./../../../../data.service";
import { ProductService } from './../../../../product.service'

import { Product } from './../../../../product';

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
    private productService: ProductService) { }

  ngOnInit() {
    // Get the value of the product from the shared service
    this.data.currentProduct.subscribe(product => this.product = product)
  }
  // To give the user the ability to edit the product
  edit() {
    this.editStatus = true;
  }
  // Apply changes to the product
  applyChanges() {
    console.log("FE", this.product);
    this.editStatus = false;
    this.productService.applyChanges(this.product)
    .subscribe(product => console.log(product) );
  }
}
