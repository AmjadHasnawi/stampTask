import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ProductService } from './../../../../product.service'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  myForm: FormGroup;

  constructor(private productService: ProductService, 
    private router : Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      productCode: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      description: ['', [Validators.required]],
      image: ["https://getmystamp.com/assets/dist/img/bg/security.png", [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    })
  }
  // Create a new product
  createProduct() {
    this.productService.createProduct(this.myForm.value)
    .subscribe(product => console.log(product))
    this.router.navigate(['products'])
  }
  // To validate inputs
  get productCode() {
    return this.myForm.get('productCode');
  }

  get productName() {
    return this.myForm.get('productName');
  }

  get price() {
    return this.myForm.get('price');
  }

  get quantity() {
    return this.myForm.get('quantity');
  }

  get description() {
    return this.myForm.get('description');
  }

  get agree() {
    return this.myForm.get('agree');
  }
}
