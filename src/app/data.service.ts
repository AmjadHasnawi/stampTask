import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productDefault: Product;

  private productSource = new BehaviorSubject(this.productDefault);
  currentProduct = this.productSource.asObservable();

  constructor() { }

  changeProduct(product: Product) {
    localStorage.setItem("product", JSON.stringify(product))
    this.productSource.next(product)
  }
}
