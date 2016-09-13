"use strict";
var router_1 = require('@angular/router');
var evs_component_1 = require('./evs.component');
var dashboard_component_1 = require('./dashboard.component');
var ev_detail_component_1 = require('./ev-detail.component');
var appRoutes = [
    {
        path: 'evs',
        component: evs_component_1.EVsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: ev_detail_component_1.EVDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map