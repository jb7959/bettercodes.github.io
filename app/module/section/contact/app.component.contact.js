"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by donghoon on 2016. 7. 11..
 */
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var ContactComponent = (function () {
    function ContactComponent() {
        this.map_img = {
            "src": "bettercode_resources/korea_china_map.png"
        };
        // google maps zoom level
        this.zoom = 5;
        // initial center position for the map
        this.lat = 32.077261;
        this.lng = 123.636225;
        this.markers = [
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
    ContactComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    ContactComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    };
    ContactComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "contact",
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            styleUrls: ["app/module/section/contact/contact.css"],
            templateUrl: "app/module/section/contact/contact.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=app.component.contact.js.map