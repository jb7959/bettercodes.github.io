/**
 * Created by donghoon on 2016. 7. 11..
 */
import {
    Component,
    provide
} from '@angular/core';
import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent,
    GOOGLE_MAPS_PROVIDERS,
    GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

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

    // google maps zoom level
    zoom:number = 5;

    // initial center position for the map
    lat:number = 32.077261;
    lng:number = 123.636225;

    clickedMarker(label:string, index:number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event:MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    }

    markerDragEnd(m:marker, $event:MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers:marker[] = [
        {
            lat: 37.482083,
            lng: 126.884745,
            label: '서울',
            draggable: true
        },
        {
            lat: 22.537977,
            lng: 114.062111,
            label: '선전',
            draggable: false
        },
        {
            lat: 31.244007,
            lng: 121.468485,
            label: '상하이',
            draggable: true
        },
        {
            lat: 39.905624,
            lng: 116.404319,
            label: '베이징',
            draggable: true
        },
        {
            lat: 37.515790,
            lng: 122.114409,
            label: '위해',
            draggable: true
        }
    ];
}

// just an interface for type safety.
interface marker {
    lat:number;
    lng:number;
    label?:string;
    draggable:boolean;
}