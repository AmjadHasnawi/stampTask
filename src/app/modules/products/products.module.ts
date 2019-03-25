import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: []
})

export class ProductsModule {}