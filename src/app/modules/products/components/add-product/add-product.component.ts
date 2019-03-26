import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../../../product.service'


import { Product } from './../../../../product';

// import { storage } from './../firebase'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  storage: any = {}
  image : any;
  url: string;
  product: Product = {
    productCode: '',
    productName: '',
    price: null,
    quantity: null,
    description: "",
    image: "https://getmystamp.com/assets/dist/img/bg/security.png"
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  createProduct() {
    console.log("FE", this.product);
    this.productService.createProduct(this.product)
    .subscribe((product: any) => console.log(product))
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
