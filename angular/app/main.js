"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic'); /*Lets us use Angular in our web app*/
var app_module_1 = require('./app.module'); /*Here, we connect AppModule which loads the entire app*/
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule); /*Launches the application*/
//# sourceMappingURL=main.js.map