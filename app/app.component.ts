/**
 * Created by donghoon on 2016. 7. 11..
 */
import {Component} from '@angular/core';
import {HeaderComponent} from './module/commons/app.component.header'
import {FooterComponent} from './module/commons/app.component.footer'
import {NewsComponent} from './module/app.component.news'
import {PartnerComponent} from './module/app.component.partner'
import {ContactComponent} from './module/app.component.contact'

@Component({
    selector: "my-app",
    directives: [HeaderComponent, FooterComponent, NewsComponent, PartnerComponent, ContactComponent],
    templateUrl: "app/bettercode_index.html"
})
export class AppComponent {
}