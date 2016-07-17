/**
 * Created by donghoon on 2016. 7. 11..
 */
import {Component} from '@angular/core';

@Component({
    selector: "partner",
    styleUrls: ["app/module/section/partner/partner.css"],
    templateUrl: "app/module/section/partner/partner.html"
})
export class PartnerComponent {

    public partners = [
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