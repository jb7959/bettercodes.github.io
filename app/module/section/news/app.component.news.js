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
var app_component_team_1 = require('./team/app.component.team');
var NewsComponent = (function () {
    function NewsComponent() {
        this.introduces = [
            {
                "content": "中韩跨境环境下的IT咨询、系统设计、开发",
            },
            {
                "content": "为中韩联合创业留学生们提供孵化环境、天使投资"
            }
        ];
        this.newses = [
            {
                "date": "06/20",
                "content": "Tony Ahn delivers a lecture on iOS programming at Fast Track Campus until the end of month."
            },
            {
                "date": "06/14",
                "content": "bettercode signed an MOU with China Weihai Beiyang Incubation Center."
            }
        ];
    }
    NewsComponent = __decorate([
        core_1.Component({
            selector: "news",
            directives: [app_component_team_1.TeamComponent],
            templateUrl: "app/module/section/news/news.html"
        }), 
        __metadata('design:paramtypes', [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=app.component.news.js.map