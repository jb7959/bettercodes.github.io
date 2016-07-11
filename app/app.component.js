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
var app_component_header_1 = require('./module/commons/app.component.header');
var app_component_footer_1 = require('./module/commons/app.component.footer');
var app_component_news_1 = require('./module/app.component.news');
var app_component_team_1 = require('./module/app.component.team');
var app_component_partner_1 = require('./module/app.component.partner');
var app_component_contact_1 = require('./module/app.component.contact');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [app_component_header_1.HeaderComponent, app_component_footer_1.FooterComponent, app_component_news_1.NewsComponent, app_component_team_1.TeamComponent, app_component_partner_1.PartnerComponent, app_component_contact_1.ContactComponent],
            templateUrl: "app/bettercode_index.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map