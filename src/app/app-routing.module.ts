import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' },
    { path: 'products', component: ProductsListComponent },
    { path: 'productDetails', component: ProductDetailsComponent }


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}