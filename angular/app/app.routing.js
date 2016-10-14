"use strict";
var router_1 = require('@angular/router');
var profile_component_1 = require('./components/profile/profile.component');
var home_component_1 = require('./components/home/home.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map