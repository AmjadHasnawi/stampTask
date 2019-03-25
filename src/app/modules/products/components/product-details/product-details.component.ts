import { Component, OnInit } from '@angular/core';

import { DataService } from "./../../../../data.service";

import { Product } from './../../../../product';

declare let $ :any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentProduct.subscribe(product => this.product = product)
  }
  // mouseEnter() {
  //   $("#details").css({
  //     // "width": "100%",
  //     // "display": "block",
  //     // "transition": "0.5s" 
  //     "animation-name": "example",
  //     "animation-duration": "4s",
  //   })
  // }

  // mouseLeave() {
  //   $("#details").css({
  //     "width": "0",
  //     "display": "none",
  //     "transition": "0.5s" 
  //   })
  // }
}
