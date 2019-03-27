import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ProductService } from './../../../../product.service'

import { Product } from './../../../../product';

// import { storage } from './../firebase'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // storage: any = {}
  // image : any;
  // url: string;
  myForm: FormGroup;
  product: Product = {
    productCode: '',
    productName: '',
    price: null,
    quantity: null,
    description: "",
    image: "https://getmystamp.com/assets/dist/img/bg/security.png"
  };

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
    this.myForm.valueChanges.subscribe(console.log)
  }

  createProduct() {
    console.log("FE", this.product);
    this.productService.createProduct(this.product)
    .subscribe(product => console.log(product))
    this.product = {
      productCode: '',
      productName: '',
      price: null,
      quantity: null,
      description: "",
      image: "https://getmystamp.com/assets/dist/img/bg/security.png"
    };
    this.router.navigate(['products'])
  }

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

  // Save an image before uploading it
  // saveImage(event: any) {
  //   if (event.target.files[0]) {
  //     this.image = event.target.files[0];
  //   }
  // }


  // upload() {
  //   const uploadImage = storage.ref(`images/${this.image.name}`).put(this.image);
  //   uploadImage.on('state_changed', (snapshot: any) => {
  //     console.log(snapshot);
  //   }, (error: any) => {
  //       console.log(error)
  //   }, () => {
  //       storage.ref('images').child(this.image.name).getDownloadURL().then((url: any) => {
  //         console.log(url);
  //         this.url = url
  //       })
  //   });
  // }
}
