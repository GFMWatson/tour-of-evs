import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { EVsComponent }             from './evs.component';
import { DashboardComponent }       from './dashboard.component';
import { EVDetailComponent }        from './ev-detail.component';

const appRoutes: Routes = [
    {
        path: 'evs',
        component: EVsComponent
    },
        {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: EVDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);