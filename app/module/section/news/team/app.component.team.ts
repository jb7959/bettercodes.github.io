/**
 * Created by donghoon on 2016. 7. 11..
 */
import {Component} from '@angular/core';

@Component({
    selector: "team",
    styleUrls: ["app/module/section/news/team/team.css"],
    templateUrl: "app/module/section/news/team/team.html"
})
export class TeamComponent {

    public managements = [
        {
            "name": "Tony Ahn (CEO)",
            "explanation": " (前)IT Wise Co-Founder & Executive Consultant Advisory committee member for City of Seoul Korea Spring User Group Co-Founder"
        },
        {
            "name": "Youngwan Ahn (CMO)",
            "explanation": " (前)Global Marketing Office at Samsung Electronics MBA from 光华管理学院 at Peking University Member of Korean Angel Investor Association"
        }
    ];

    public advisories = [
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