import { Injectable } from '@angular/core';

import { Product } from './product';

declare let $ :any;

@Injectable({
  providedIn: 'root'
})
export class FiltrationService {

  constructor() { }

  filter(products: Product[], val: string) {
    console.log(products, val);
    if (val === "ascending") {
      return products.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (val === "descending"){
      return products.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (val === "lessThan5") {
      return products.filter((a) => {
        return a.price < 5;
      });
    } else if (val === "between") {
      return products.filter((a) => {
        return a.price >= 5 && a.price <= 15;
      });
    } else if (val === "moreThan15") {
      return products.filter((a) => {
        return a.price > 15 ;
      });
    } else if (val === "available") {
      return products.filter((a) => {
        return a.quantity > 0 ;
      });
    } else if (val === "unavailable") {
      return products.filter((a) => {
        return a.quantity === 0 ;
      });
    }
  }

  search() {
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myDIV #child").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }
}
