/**
 * Created by donghoon on 2016. 7. 11..
 */
import {Component} from '@angular/core';
import {TeamComponent} from './app.component.team'

@Component({
    selector: "news",
    directives: [TeamComponent],
    templateUrl: "app/module/news.html"
})
export class NewsComponent {

    public introduces = [
        {
            "content": "中韩跨境环境下的IT咨询、系统设计、开发",
        },
        {
            "content": "为中韩联合创业留学生们提供孵化环境、天使投资"
        }
    ];

    public newses = [
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