import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StocksComponent} from './stocks.component';
import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';


const appRoutes: Routes = [
    {    
        path: '',
        component: DashboardComponent
    },

    {
       path:'stocks',
       component: StocksComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);