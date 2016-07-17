/**
 * Created by donghoon on 2016. 7. 11..
 */
import {Component} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
    selector: "contact",
    directives: [GOOGLE_MAPS_DIRECTIVES],
    styleUrls: ["app/module/section/contact/contact.css"],
    templateUrl: "app/module/section/contact/contact.html"
})
export class ContactComponent {

    private map_img = {
        "src": "bettercode_resources/korea_china_map.png"
    };

    lat:number = 37.335887;
    lng:number = 126.584063;
}