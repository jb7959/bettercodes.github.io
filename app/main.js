"use strict";
/**
 * Created by donghoon on 2016. 7. 11..
 */
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_2 = require('angular2-google-maps/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    core_2.GOOGLE_MAPS_PROVIDERS,
    core_1.provide(core_2.LazyMapsAPILoaderConfig, {
        useFactory: function () {
            var config = new core_2.LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyBt9OsYuGxAYepF-GKbdgcBF32M_W3d5wY';
            return config;
        }
    })
]);
//# sourceMappingURL=main.js.map