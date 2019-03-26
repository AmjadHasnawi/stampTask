import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const appRoutes: Routes = [
    { path: 'products', component: ProductsListComponent },
    { path: 'productDetails', component: ProductDetailsComponent },
    { path: 'addProduct', component: AddProductComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class ProductsRoutingModule {}