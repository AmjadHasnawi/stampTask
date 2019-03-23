import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
    ProductsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}