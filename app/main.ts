/**
 * Created by donghoon on 2016. 7. 11..
 */
import {enableProdMode, provide} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

enableProdMode();

bootstrap(AppComponent, [
    GOOGLE_MAPS_PROVIDERS,
    provide(LazyMapsAPILoaderConfig, {
        useFactory: () => {
            let config = new LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyBt9OsYuGxAYepF-GKbdgcBF32M_W3d5wY';
            return config;
        }
    })
]);
