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
var PartnerComponent = (function () {
    function PartnerComponent() {
        this.partners = [
            {
                "img": "bettercode_resources/7-1.png"
            },
            {
                "img": "bettercode_resources/7-2.png"
            },
            {
                "img": "bettercode_resources/7-3.png"
            },
            {
                "img": "bettercode_resources/7-4.png"
            },
            {
                "img": "bettercode_resources/7-5.png"
            },
            {
                "img": "bettercode_resources/7-6.png"
            },
            {
                "img": "bettercode_resources/7-7.png"
            }
        ];
    }
    PartnerComponent = __decorate([
        core_1.Component({
            selector: "partner",
            templateUrl: "app/module/partner.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PartnerComponent);
    return PartnerComponent;
}());
exports.PartnerComponent = PartnerComponent;
//# sourceMappingURL=app.component.partner.js.map