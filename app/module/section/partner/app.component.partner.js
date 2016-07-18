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
                "name": "E-Land",
                "img": "bettercode_resources/7-1.png",
                "content": "是由韩国衣恋集团投资注册，坐落于北京朝阳区恒通商务园内，是一家集软件应用程序开发、自主产品研发为一体的软件研发公司，国家级高新技术企业。公司主要致力于提供ERP等商务解决方案，引领顾客进行改革，以推动社会的发展和进步。"
            },
            {
                "name": "천재교육",
                "img": "bettercode_resources/7-2.png",
                "content": "한국 최대 교과서 출판사로서 2016년 교육 스타트업을 위한 인큐베이터인 천재 에듀테크 센터를 오픈하고 입주 스타트업의 해외 진출을 당사와 함께 지원하고 있습니다"
            },
            {
                "name": "BEIYANG",
                "img": "bettercode_resources/7-3.png",
                "content": "北洋电子信息孵化器是由威海北洋电气集团投资成立的一家国有控股电子信息专业孵化器，经威海火炬高技术产业开发区管委会批准，成立于2014年7月，注册资金500万，建筑面积近2万平方米。"
            },
            {
                "name": "Harbin Institution of Technology",
                "img": "bettercode_resources/7-4.png",
                "content": "중국정부가 선정한 9대 명문대학중 하나로, 과학기술분야에 있어 중국 최고의 역사를 자랑하며, 하얼빈, 위해, 심천 3개 도시에 캠퍼스를 운영하고 있다."
            },
            {
                "name": "XG Enter",
                "img": "bettercode_resources/7-5.png",
                "content": "星河集团与韩国光州信息文化产业振兴院合作成立的ICT创造中心"
            },
            {
                "name": "daxue consulting",
                "img": "bettercode_resources/7-6.png",
                "content": "북경대학 동문이 운영하는 중국 컨설팅 및 마케팅 전문회사로 주요 고객으로는 Paypal, 남아프리카공화국 정부, 삼성전자등이 있다"
            },
            {
                "name": "Fast Campus",
                "img": "bettercode_resources/7-7.png",
                "content": "Fast Campus",
            }
        ];
    }
    PartnerComponent.prototype.imgDetail = function (content) {
        alert(content);
    };
    PartnerComponent = __decorate([
        core_1.Component({
            selector: "partner",
            styleUrls: ["app/module/section/partner/partner.css"],
            templateUrl: "app/module/section/partner/partner.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PartnerComponent);
    return PartnerComponent;
}());
exports.PartnerComponent = PartnerComponent;
//# sourceMappingURL=app.component.partner.js.map