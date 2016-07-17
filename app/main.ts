/**
 * Created by donghoon on 2016. 7. 11..
 */
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

bootstrap(AppComponent, [
    GOOGLE_MAPS_PROVIDERS
]);
