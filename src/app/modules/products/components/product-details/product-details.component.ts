import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from './../../../../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  key: any 
  constructor(private router : Router,
              private dataRoute: ActivatedRoute) { }

  ngOnInit() {
    this.key = this.dataRoute.snapshot.params['products-list'];
    console.log(this.key);
  }

}
