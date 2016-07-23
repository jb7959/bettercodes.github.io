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

    public partners:partner[] = [
        {
            "name": "E-Land",
            "img": "bettercode_resources/7-1.png",
            "china_title": "北京衣念科技发展有限公司",
            "eng_title": "E-Land Systems China",
            "content": "是由韩国衣恋集团投资注册，坐落于北京朝阳区恒通商务园内，是一家集软件应用程序开发、自主产品研发为一体的软件研发公司，国家级高新技术企业。公司主要致力于提供ERP等商务解决方案，引领顾客进行改革，以推动社会的发展和进步。"
        },
        {
            "name": "천재교육",
            "img": "bettercode_resources/7-2.png",
            "china_title": "천재교육",
            "eng_title": "Chunjae Education Inc.",
            "content": "한국 최대 교과서 출판사로서 2016년 교육 스타트업을 위한 인큐베이터인 천재 에듀테크 센터를 오픈하고 입주 스타트업의 해외 진출을 당사와 함께 지원하고 있습니다"
        },
        {
            "name": "BEIYANG",
            "img": "bettercode_resources/7-3.png",
            "china_title": "'北洋之星孵化器",
            "eng_title": "Northern Star Incubator",
            "content": "北洋电子信息孵化器是由威海北洋电气集团投资成立的一家国有控股电子信息专业孵化器，经威海火炬高技术产业开发区管委会批准，成立于2014年7月，注册资金500万，建筑面积近2万平方米。"
        },
        {
            "name": "Harbin Institution of Technology",
            "img": "bettercode_resources/7-4.png",
            "china_title": "'哈尔滨工业大学",
            "eng_title": "Harbin Institution of Technology",
            "content": "중국정부가 선정한 9대 명문대학중 하나로, 과학기술분야에 있어 중국 최고의 역사를 자랑하며, 하얼빈, 위해, 심천 3개 도시에 캠퍼스를 운영하고 있다."
        },
        {
            "name": "XG Enter",
            "img": "bettercode_resources/7-5.png",
            "china_title": "星光联创",
            "eng_title": "XG Enter",
            "content": "星河集团与韩国光州信息文化产业振兴院合作成立的ICT创造中心"
        },
        {
            "name": "daxue consulting",
            "img": "bettercode_resources/7-6.png",
            "china_title": "",
            "eng_title": "Daxue Consulting",
            "content": "북경대학 동문이 운영하는 중국 컨설팅 및 마케팅 전문회사로 주요 고객으로는 Paypal, 남아프리카공화국 정부, 삼성전자등이 있다"
        },
        {
            "name": "Fast Campus",
            "img": "bettercode_resources/7-7.png",
            "china_title": "",
            "eng_title": "",
            "content": "Fast Campus",
        }
    ];

    imgDetail(content, index) {
        console.log(content);
        console.log(index);
        document.getElementById("bettercode_partner-default").style.display = "none";

        if (index === 0) {
            document.getElementById("bettercode_partner-0").style.display = "block";
            document.getElementById("bettercode_partner-1").style.display = "none";
            document.getElementById("bettercode_partner-2").style.display = "none";
            document.getElementById("bettercode_partner-3").style.display = "none";
            document.getElementById("bettercode_partner-4").style.display = "none";
            document.getElementById("bettercode_partner-5").style.display = "none";
            document.getElementById("bettercode_partner-6").style.display = "none";
        } else if (index === 1) {
            document.getElementById("bettercode_partner-0").style.display = "none";
            document.getElementById("bettercode_partner-1").style.display = "block";
            document.getElementById("bettercode_partner-2").style.display = "none";
            document.getElementById("bettercode_partner-3").style.display = "none";
            document.getElementById("bettercode_partner-4").style.display = "none";
            document.getElementById("bettercode_partner-5").style.display = "none";
            document.getElementById("bettercode_partner-6").style.display = "none";
        } else if (index === 2) {
            document.getElementById("bettercode_partner-0").style.display = "none";
            document.getElementById("bettercode_partner-1").style.display = "none";
            document.getElementById("bettercode_partner-2").style.display = "block";
            document.getElementById("bettercode_partner-3").style.display = "none";
            document.getElementById("bettercode_partner-4").style.display = "none";
            document.getElementById("bettercode_partner-5").style.display = "none";
            document.getElementById("bettercode_partner-6").style.display = "none";
        } else if (index === 3) {
            document.getElementById("bettercode_partner-0").style.display = "none";
            document.getElementById("bettercode_partner-1").style.display = "none";
            document.getElementById("bettercode_partner-2").style.display = "none";
            document.getElementById("bettercode_partner-3").style.display = "block";
            document.getElementById("bettercode_partner-4").style.display = "none";
            document.getElementById("bettercode_partner-5").style.display = "none";
            document.getElementById("bettercode_partner-6").style.display = "none";
        } else if (index === 4) {
            document.getElementById("bettercode_partner-0").style.display = "none";
            document.getElementById("bettercode_partner-1").style.display = "none";
            document.getElementById("bettercode_partner-2").style.display = "none";
            document.getElementById("bettercode_partner-3").style.display = "none";
            document.getElementById("bettercode_partner-4").style.display = "block";
            document.getElementById("bettercode_partner-5").style.display = "none";
            document.getElementById("bettercode_partner-6").style.display = "none";
        } else if (index === 5) {
            document.getElementById("bettercode_partner-0").style.display = "none";
            document.getElementById("bettercode_partner-1").style.display = "none";
            document.getElementById("bettercode_partner-2").style.display = "none";
            document.getElementById("bettercode_partner-3").style.display = "none";
            document.getElementById("bettercode_partner-4").style.display = "none";
            document.getElementById("bettercode_partner-5").style.display = "block";
            document.getElementById("bettercode_partner-6").style.display = "none";
        } else if (index === 6) {
            document.getElementById("bettercode_partner-0").style.display = "none";
            document.getElementById("bettercode_partner-1").style.display = "none";
            document.getElementById("bettercode_partner-2").style.display = "none";
            document.getElementById("bettercode_partner-3").style.display = "none";
            document.getElementById("bettercode_partner-4").style.display = "none";
            document.getElementById("bettercode_partner-5").style.display = "none";
            document.getElementById("bettercode_partner-6").style.display = "block";
        }
    }

}

interface partner {
    name:string,
    img:string,
    content:string
}