"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by donghoon on 2016. 7. 11..
 */
var core_1 = require('@angular/core');
var TeamComponent = (function () {
    function TeamComponent() {
        this.managements = [
            {
                "name": "Tony Ahn (CEO)",
                "explanation": " (前)IT Wise Co-Founder & Executive Consultant Advisory committee member for City of Seoul Korea Spring User Group Co-Founder"
            },
            {
                "name": "Youngwan Ahn (CMO)",
                "explanation": " (前)Global Marketing Office at Samsung Electronics MBA from 光华管理学院 at Peking University Member of Korean Angel Investor Association"
            }
        ];
        this.advisories = [
            {
                "name": "Roger Chen",
                "explanation": " Vice President of Samsung China"
            },
            {
                "name": "Bin Dai",
                "explanation": " Head of App Annie China"
            },
            {
                "name": "Xuefeng Piao",
                "explanation": " Professor of Harbin Institution of Technology"
            },
            {
                "name": "YongSeok Park",
                "explanation": " Head of Com2Us China"
            }
        ];
    }
    TeamComponent = __decorate([
        core_1.Component({
            selector: "team",
            templateUrl: "app/module/section/news/team/team.html"
        })
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=app.component.team.js.map