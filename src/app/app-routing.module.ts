import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './sharedComponents/components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled', // Add options right here
          })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}