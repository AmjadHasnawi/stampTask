import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './modules/products/products.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './sharedComponents/components/footer/footer.component';
import { HomeComponent } from './sharedComponents/components/home/home.component';
import { NavbarComponent } from './sharedComponents/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ProductsModule,
    HttpClientModule,
    HttpModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}