"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4430],{94822:(t,n,e)=>{e.d(n,{A:()=>o});var a=e(45627),s=e.n(a),i=e(76798),A=e.n(i)()(s());A.push([t.id,"#appCapsule[data-v-fc775f3a]{margin-bottom:env(safe-area-inset-bottom);margin-top:env(safe-area-inset-top);padding:56px 0}.start-form[data-v-fc775f3a]{margin:auto;max-width:500px}.section[data-v-fc775f3a]{padding:0 16px}.start-form p[data-v-fc775f3a]{font-size:12px;font-style:italic}.form-button-group[data-v-fc775f3a]{align-items:center;background:#fff;bottom:0;display:flex;justify-content:center;left:0;max-height:56px;padding-bottom:env(safe-area-inset-bottom);padding-left:16px;padding-right:16px;position:fixed;right:0;width:100%}.form-button-group .btn[data-v-fc775f3a]{background:#0f213d;border:0;border-radius:50px;color:#fff;font-family:Open Sans;font-size:24px;font-weight:900;outline:none;text-transform:uppercase}form-button-group .btn[data-v-fc775f3a]:focus{box-shadow:none!important;outline:none!important}.title-1[data-v-fc775f3a]{color:#062348;font-family:Bello Pro!important;font-size:27px;left:0;position:absolute;top:16px;z-index:1}.title-1 span[data-v-fc775f3a]{font-size:40px}.title-2[data-v-fc775f3a]{color:#fff;font-family:Open Sans!important;font-size:25px;font-weight:900;left:52px;position:absolute;top:18px;z-index:1}.title-2 span[data-v-fc775f3a]{text-transform:uppercase}.orange-brush[data-v-fc775f3a]{left:10px;top:5px;width:265px}.blue-brush[data-v-fc775f3a]{height:50px;left:-55px;opacity:1;top:10px;width:330px}.form-image[data-v-fc775f3a]{height:auto;width:100%}","",{version:3,sources:["webpack://./resources/js/desktop/mobile/pages/AviaModule/Start.vue"],names:[],mappings:"AAoKA,6BAEA,yCAAA,CACA,mCAAA,CAFA,cAGA,CACA,6BAGA,WAAA,CAFA,eAIA,CACA,0BACA,cACA,CACA,+BAEA,cAAA,CADA,iBAEA,CACA,oCAWA,kBAAA,CAHA,eAAA,CANA,QAAA,CAQA,YAAA,CAEA,sBAAA,CATA,MAAA,CAMA,eAAA,CAIA,0CAAA,CAPA,iBAAA,CACA,kBAAA,CANA,cAAA,CAGA,OAAA,CACA,UASA,CACA,yCACA,kBAAA,CAMA,QAAA,CACA,kBAAA,CANA,UAAA,CAGA,qBAAA,CADA,cAAA,CAEA,eAAA,CAGA,YAAA,CANA,wBAOA,CACA,8CAEA,yBAAA,CADA,sBAEA,CACA,0BAKA,aAAA,CACA,+BAAA,CACA,cAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,QAAA,CAFA,SAMA,CACA,+BACA,cACA,CACA,0BAKA,UAAA,CACA,+BAAA,CAEA,cAAA,CADA,eAAA,CAJA,SAAA,CAFA,iBAAA,CAGA,QAAA,CAFA,SAOA,CACA,+BACA,wBACA,CACA,+BAEA,SAAA,CADA,OAAA,CAEA,WACA,CACA,6BAIA,WAAA,CAFA,UAAA,CAGA,SAAA,CAJA,QAAA,CAEA,WAGA,CACA,6BAGA,WAAA,CAFA,UAGA",sourcesContent:['<template>\n    <div class="start-form mt-1">\n        <div class="section">\n            <img class="form-image" src="/images/avatar.svg" style="width: 100%; height: 40vh"/>\n        </div>\n        <div class="section">\n            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">\n                <div class="col-12 col-md-12 col-sm-12">\n                    <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">\n                        <div class="col-md-7 p-0">\n                            <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">\n                                <h1 class="title-1">Подберите авиабилеты</h1>\n                                <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>\n                            </div>\n                        </div>\n                        <div class="col-md-7 p-0">\n                            <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">\n                                <h1 class="title-2">с <span>TravelClub</span></h1>\n                                <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="section">\n            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">\n                <p style="color: #0f213d; font-family: \'Open Sans\'; font-weight: 900">\n                    Надоело искать, подбирать авиабилеты и следить за их ценой самостоятельно? Мы предлагаем заполнить заявку на подбор авиабилетов и наши менеджеры сделают всё за Вас!\n                </p>\n            </div>\n        </div>\n        <div class="form-button-group">\n            <button type="submit" class="btn btn-block btn-lg" @click="start">Начать</button>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: "Start",\n        data: () => ({\n        }),\n        mounted() {\n\n        },\n        computed:\n            {\n                menu() {\n                    return this.$store.getters.menu\n                },\n                aviaModule() {\n                    return this.$store.getters.aviaModule\n                },\n                preloader() {\n                    return this.$store.getters.preloader\n                },\n                avia_steps() {\n                    return this.$store.getters.avia_steps\n                }\n            },\n        methods:\n            {\n                start() {\n                    this.$store.dispatch(\'changeAviaSteps\', {key:\'step1\', value:true});\n                    this.$router.push(\'/avia-module/avia\')\n                }\n            }\n    }\n<\/script>\n\n<style scoped>\n    #appCapsule {\n        padding: 56px 0;\n        margin-bottom: env(safe-area-inset-bottom);\n        margin-top: env(safe-area-inset-top);\n    }\n    .start-form {\n        max-width: 500px;\n        margin: auto;\n        margin-top: auto;\n        /*text-align: center;*/\n    }\n    .section {\n        padding: 0 16px;\n    }\n    .start-form p {\n        font-style: italic;\n        font-size: 12px;\n    }\n    .form-button-group {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        width: 100%;\n        padding-left: 16px;\n        padding-right: 16px;\n        background: #FFF;\n        max-height: 56px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding-bottom: env(safe-area-inset-bottom);\n    }\n    .form-button-group .btn {\n        background: #0f213d;\n        color: white;\n        text-transform: uppercase;\n        font-size: 24px;\n        font-family: "Open Sans";\n        font-weight: 900;\n        border: 0;\n        border-radius: 50px;\n        outline: none;\n    }\n    form-button-group .btn:focus {\n        outline: none !important;\n        box-shadow: none !important;\n    }\n    .title-1 {\n        position: absolute;\n        z-index: 1;\n        left: 0px;\n        top: 16px;\n        color:#062348;\n        font-family: \'Bello Pro\' !important;\n        font-size: 27px;\n    }\n    .title-1 span {\n        font-size: 40px;\n    }\n    .title-2 {\n        position: absolute;\n        z-index: 1;\n        left: 52px;\n        top: 18px;\n        color:white;\n        font-family: \'Open Sans\' !important;\n        font-weight:900;\n        font-size: 25px;\n    }\n    .title-2 span {\n        text-transform: uppercase;\n    }\n    .orange-brush{\n        top: 5px;\n        left: 10px;\n        width: 265px;\n    }\n    .blue-brush{\n        top: 10px;\n        left: -55px;\n        width: 330px;\n        height: 50px;\n        opacity: 1;\n    }\n    .form-image {\n        width: 100%;\n        /*max-width: 200px;*/\n        height: auto;\n    }\n</style>\n'],sourceRoot:""}]);const o=A},14430:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});const a={name:"Start",data:function(){return{}},mounted:function(){},computed:{menu:function(){return this.$store.getters.menu},aviaModule:function(){return this.$store.getters.aviaModule},preloader:function(){return this.$store.getters.preloader},avia_steps:function(){return this.$store.getters.avia_steps}},methods:{start:function(){this.$store.dispatch("changeAviaSteps",{key:"step1",value:!0}),this.$router.push("/avia-module/avia")}}};var s=e(85072),i=e.n(s),A=e(94822),o={insert:"head",singleton:!1};i()(A.A,o);A.A.locals;const r=(0,e(14486).A)(a,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"start-form mt-1"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"form-button-group"},[n("button",{staticClass:"btn btn-block btn-lg",attrs:{type:"submit"},on:{click:t.start}},[t._v("Начать")])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"section"},[t("img",{staticClass:"form-image",staticStyle:{width:"100%",height:"40vh"},attrs:{src:"/images/avatar.svg"}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"section"},[n("div",{staticClass:"row m-auto justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"}},[n("div",{staticClass:"col-12 col-md-12 col-sm-12"},[n("div",{staticClass:"row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",staticStyle:{height:"100px",width:"100%"}},[n("div",{staticClass:"col-md-7 p-0"},[n("div",{staticClass:"row mr-auto ml-0 my-auto travel-card-title",staticStyle:{position:"relative",height:"50px",width:"250px"}},[n("h1",{staticClass:"title-1"},[t._v("Подберите авиабилеты")]),t._v(" "),n("img",{staticClass:"blue-brush",staticStyle:{position:"absolute"},attrs:{src:"/images/blue-brush.svg"}})])]),t._v(" "),n("div",{staticClass:"col-md-7 p-0"},[n("div",{staticClass:"row ml-auto mr-0 my-auto travel-card-title",staticStyle:{position:"relative",height:"50px",width:"250px"}},[n("h1",{staticClass:"title-2"},[t._v("с "),n("span",[t._v("TravelClub")])]),t._v(" "),n("img",{staticClass:"orange-brush",staticStyle:{position:"absolute"},attrs:{src:"/images/orange-brush.svg"}})])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"section"},[t("div",{staticClass:"row m-auto justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"}},[t("p",{staticStyle:{color:"#0f213d","font-family":"'Open Sans'","font-weight":"900"}},[this._v("\n                Надоело искать, подбирать авиабилеты и следить за их ценой самостоятельно? Мы предлагаем заполнить заявку на подбор авиабилетов и наши менеджеры сделают всё за Вас!\n            ")])])])}],!1,null,"fc775f3a",null).exports}}]);
//# sourceMappingURL=4430.js.map