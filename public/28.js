(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{A3YX:function(t,i,e){"use strict";e.r(i);var s=e("o0o1"),a=e.n(s),o=e("wd/R"),r=e.n(o);function n(t,i,e,s,a,o,r){try{var n=t[o](r),c=n.value}catch(t){return void e(t)}n.done?i(c):Promise.resolve(c).then(s,a)}function c(t){return function(){var i=this,e=arguments;return new Promise((function(s,a){var o=t.apply(i,e);function r(t){n(o,s,a,r,c,"next",t)}function c(t){n(o,s,a,r,c,"throw",t)}r(void 0)}))}}var l={name:"ClientProfile",data:function(){return{perPage:["10","25","50"],columns:[{label:"ID",field:"id"},{label:"Name",field:"name"},{label:"Email",field:"email"}],window:{width:0,height:0},countItems:3,tours:[],current_tour:{},tour_title:"Текущий"}},computed:{menu:function(){return this.$store.getters.menu},user:function(){return this.$store.getters.user},preloader:function(){return this.$store.getters.preloader},branches:function(){return this.$store.getters.branches}},created:function(){this.getUser(),this.branches.length<=0&&this.loadBranches()},mounted:function(){},methods:{toTourInfo:function(t){this.$router.push("/client/tour-info/"+t)},getUser:function(){var t=this;return c(a.a.mark((function i(){var e;return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(t.user){i.next=5;break}return i.next=3,t.$store.dispatch("getUser").then((function(){t.tours=t.user.tours.filter((function(t){if(0==t.Archive)return!0}))}));case 3:i.next=6;break;case 5:t.tours=t.user.tours.filter((function(t){if(0==t.Archive)return!0}));case 6:t.tours.length>0&&(t.tours.sort((function(t,i){return new Date(i.EndAt)-new Date(t.EndAt)})),e=r()(new Date),t.current_tour=t.tours.find((function(t){var i=r()(t.StartAt),s=r()(t.EndAt),a=!!i.isBefore(e),o=!!s.isAfter(e);if(1==a&&1==o)return!0})),t.current_tour||(t.current_tour=t.tours[0],t.tour_title="Последний"));case 7:case"end":return i.stop()}}),i)})))()},loadBranches:function(){var t=this;return c(a.a.mark((function i(){return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$store.dispatch("setBranches");case 2:case"end":return i.stop()}}),i)})))()}}},d=(e("Nr1U"),e("gGw3"),e("KHd+")),u=Object(d.a)(l,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"client"}},[e("div",{staticClass:"container m-auto",staticStyle:{height:"100%"}},[e("div",{staticClass:"row m-auto justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"},attrs:{id:"main-title"}},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row m-auto justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"col-12 col-md-8 col-sm-12"},[e("div",{staticClass:"row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",staticStyle:{height:"100px",width:"100%"}},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-7 p-0"},[e("div",{staticClass:"row ml-auto mr-0 my-auto travel-card-title",staticStyle:{position:"relative",height:"50px",width:"250px"}},[e("h1",{staticClass:"title-2"},[e("span",[t._v(t._s(t.user.info.FullName))])]),t._v(" "),e("img",{staticClass:"orange-brush",staticStyle:{position:"absolute"},attrs:{src:"/images/orange-brush.svg"}})])])])])])])]),t._v(" "),t.tours.length>0?e("div",{staticClass:"row mx-auto mt-3 mb-3 justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"row m-auto travel-card justify-content-center",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"col-md-6 col-sm-12 p-0",on:{click:function(i){return t.toTourInfo(t.current_tour.id)}}},[e("div",{staticClass:"mx-auto v-card elevation-24",staticStyle:{height:"400px","max-width":"100%","border-radius":"20px"}},[e("div",{staticClass:"v-responsive v-image",staticStyle:{height:"100%"}},[e("div",{staticClass:"v-responsive__sizer"}),t._v(" "),e("div",{staticClass:"v-image__image v-image__image--cover",staticStyle:{"background-image":"url('/images/test.jpg')","background-position":"center center"}}),t._v(" "),e("div",{staticClass:"v-responsive__content"},[e("div",{staticClass:"v-card__title"},[e("div",{staticClass:"white--text active-tour d-sm-block d-md-none"},[t._v(t._s(t.tour_title))])]),t._v(" "),e("div",{staticClass:"v-card__subtitle white--text d-sm-block d-md-none"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",[t._v(t._s(t.current_tour.TourInfo.resort.Name)+", "+t._s(t.current_tour.TourInfo.country.Name))])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("span",{staticClass:"white--text active-tour float-right"},[t._v(t._s(t.current_tour.TourInfo.price))])])])])])])])]),t._v(" "),e("div",{staticClass:"col-md-6 d-none d-md-block"},[e("div",{staticClass:"row mx-auto mt-3 mb-3 align-items-center justify-content-center"},[e("span",{staticClass:"white--text active-tour",staticStyle:{background:"#062348","font-size":"24px"}},[t._v(t._s(t.tour_title)+" тур")])]),t._v(" "),e("div",{staticClass:"row m-auto align-items-center justify-content-center"},[e("h3",{staticClass:"subtitle"},[t._v(t._s(t.current_tour.TourInfo.resort.Name)+",\n                                    "),e("b",{staticClass:"ml-1 mr-1",class:"slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_"+t.current_tour.TourInfo.country.Id,staticStyle:{border:"1px solid #063065"}}),t._v("\n                                    "+t._s(t.current_tour.TourInfo.country.Name)+"\n                                ")])]),t._v(" "),e("div",{staticClass:"row features align-items-center justify-content-center m-auto",staticStyle:{width:"100%"}},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row align-items-center justify-content-center m-auto",staticStyle:{width:"100%"}},[t._m(1),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row align-items-center w-100 m-auto"},[e("div",{staticClass:"subtitle"},[t._v(t._s(t.current_tour.TourInfo.hotel.Name)+" "),e("span",{staticClass:"ml-3",staticStyle:{color:"#0f213d"}},[t._v(t._s(t.current_tour.TourInfo.hotel.StarName))])]),t._v(" "),e("svg",{staticClass:"icon-star my-auto ml-1",staticStyle:{width:"20px",height:"20px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[e("path",{attrs:{fill:"#ffca00",d:"M9.5 0l3.131 5.97 6.367 1.29-4.432 4.97.804 6.77-5.87-2.9L3.63 19l.804-6.77L.002 7.26l6.367-1.29L9.5 0"}})])])])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row align-items-center justify-content-center m-auto",staticStyle:{width:"100%",height:"100%"}},[t._m(2),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"subtitle"},[t._v(t._s(t.current_tour.TourInfo.room_type))])])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row align-items-center justify-content-center m-auto",staticStyle:{width:"100%",height:"100%"}},[t._m(3),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"subtitle"},[t._v(t._s(t.current_tour.TourInfo.meal.Name)),e("span",{staticClass:"my-auto",staticStyle:{color:"#0f213d","font-size":"14px"}},[t._v(" - "+t._s(t.current_tour.TourInfo.meal.desc))])])])])])]),t._v(" "),e("div",{staticClass:"travel-card-description row m-auto align-items-center justify-content-center"}),t._v(" "),e("div",{staticClass:"travel-card-more row m-auto float-right align-items-center"},[e("h5",{staticClass:"more-text mt-auto mb-auto",on:{click:function(i){return t.toTourInfo(t.current_tour.id)}}},[t._v("подробнее")]),t._v(" "),e("div",{staticClass:"more-button",on:{click:function(i){return t.toTourInfo(t.current_tour.id)}}},[e("div",{staticClass:"icon icon-keyboard_arrow_right"})])])])])])]):t._e(),t._v(" "),t._m(4),t._v(" "),t.tours.length>0?e("div",{staticClass:"row mx-auto mt-3 mb-3 justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"}},[e("hooper",{staticClass:"mr-auto ml-auto desktop",staticStyle:{height:"100%"},attrs:{itemsToShow:3,infiniteScroll:!1}},[t._l(t.tours,(function(i){return e("slide",{key:i.id,on:{click:function(e){return t.toTourInfo(i.id)}}},[e("div",{staticClass:"mx-auto v-card elevation-24",staticStyle:{height:"350px","max-width":"100%",width:"350px","border-radius":"20px",cursor:"pointer"},on:{click:function(e){return t.toTourInfo(i.id)}}},[e("div",{staticClass:"v-responsive v-image",staticStyle:{height:"100%"}},[e("div",{staticClass:"v-responsive__sizer"}),t._v(" "),e("div",{staticClass:"v-image__image v-image__image--cover",staticStyle:{"background-image":"url('/images/test.jpg')","background-position":"center center"}}),t._v(" "),e("div",{staticClass:"v-responsive__content"},[e("div",{staticClass:"v-card__title"},[e("div",{staticClass:"ml-auto white--text active-tour"},[e("div",{staticClass:"row m-auto align-items-center justify-content-center",staticStyle:{height:"100%",width:"100%"}},[e("div",{staticClass:"icon icon-calendar mr-2"}),t._v(t._s(t._f("moment")(i.StartAt,"DD.MM"))+" - "+t._s(t._f("moment")(i.EndAt,"DD.MM"))+"\n                                            ")])])]),t._v(" "),e("div",{staticClass:"v-card__subtitle white--text"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-2"},[e("h4",[t._v(t._s(i.TourInfo.resort.Name)+", "+t._s(i.TourInfo.country.Name))])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("span",{staticClass:"white--text active-tour float-right"},[t._v(t._s(i.TourInfo.price))])])])])])])])])})),t._v(" "),e("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2),t._v(" "),e("hooper",{staticClass:"mr-auto ml-auto tablet",staticStyle:{height:"100%"},attrs:{itemsToShow:2,infiniteScroll:!1}},[t._l(t.tours,(function(i){return e("slide",{key:i.id,on:{click:function(e){return t.toTourInfo(i.id)}}},[e("div",{staticClass:"mx-auto v-card elevation-24",staticStyle:{height:"350px","max-width":"100%",width:"350px","border-radius":"20px",cursor:"pointer"},on:{click:function(e){return t.toTourInfo(i.id)}}},[e("div",{staticClass:"v-responsive v-image",staticStyle:{height:"100%"}},[e("div",{staticClass:"v-responsive__sizer"}),t._v(" "),e("div",{staticClass:"v-image__image v-image__image--cover",staticStyle:{"background-image":"url('/images/test.jpg')","background-position":"center center"}}),t._v(" "),e("div",{staticClass:"v-responsive__content"},[e("div",{staticClass:"v-card__title"},[e("div",{staticClass:"ml-auto white--text active-tour"},[e("div",{staticClass:"row m-auto align-items-center justify-content-center",staticStyle:{height:"100%",width:"100%"}},[e("div",{staticClass:"icon icon-calendar mr-2"}),t._v(t._s(t._f("moment")(i.StartAt,"DD.MM"))+" - "+t._s(t._f("moment")(i.EndAt,"DD.MM"))+"\n                                            ")])])]),t._v(" "),e("div",{staticClass:"v-card__subtitle white--text"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-2"},[e("h4",[t._v(t._s(i.TourInfo.resort.Name)+", "+t._s(i.TourInfo.country.Name))])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("span",{staticClass:"white--text active-tour float-right"},[t._v(t._s(i.TourInfo.price))])])])])])])])])})),t._v(" "),e("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2),t._v(" "),e("hooper",{staticClass:"mr-auto ml-auto mobile",staticStyle:{height:"100%"},attrs:{itemsToShow:1,infiniteScroll:!0}},[t._l(t.tours,(function(i){return e("slide",{key:i.id,on:{click:function(e){return t.toTourInfo(i.id)}}},[e("div",{staticClass:"mx-auto v-card elevation-24",staticStyle:{height:"350px","max-width":"100%",width:"350px","border-radius":"20px",cursor:"pointer"},on:{click:function(e){return t.toTourInfo(i.id)}}},[e("div",{staticClass:"v-responsive v-image",staticStyle:{height:"100%"}},[e("div",{staticClass:"v-responsive__sizer"}),t._v(" "),e("div",{staticClass:"v-image__image v-image__image--cover",staticStyle:{"background-image":"url('/images/test.jpg')","background-position":"center center"}}),t._v(" "),e("div",{staticClass:"v-responsive__content"},[e("div",{staticClass:"v-card__title"},[e("div",{staticClass:"ml-auto white--text active-tour"},[e("div",{staticClass:"row m-auto align-items-center justify-content-center",staticStyle:{height:"100%",width:"100%"}},[e("div",{staticClass:"icon icon-calendar mr-2"}),t._v(t._s(t._f("moment")(i.StartAt,"DD.MM"))+" - "+t._s(t._f("moment")(i.EndAt,"DD.MM"))+"\n                                            ")])])]),t._v(" "),e("div",{staticClass:"v-card__subtitle white--text"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-2"},[e("h4",[t._v(t._s(i.TourInfo.resort.Name)+", "+t._s(i.TourInfo.country.Name))])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("span",{staticClass:"white--text active-tour float-right"},[t._v(t._s(i.TourInfo.price))])])])])])])])])})),t._v(" "),e("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1):t._e(),t._v(" "),0==t.tours.length?e("div",{staticClass:"row mx-auto mt-3 mb-3 justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"}},[t._v("\n                У Вас пока нет туров :( Возможно они все в архиве.\n            ")]):t._e()])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-md-7 p-0"},[i("div",{staticClass:"row mr-auto ml-0 my-auto travel-card-title",staticStyle:{position:"relative",height:"50px",width:"250px"}},[i("h1",{staticClass:"title-1"},[i("span",[this._v("З")]),this._v("дравствуйте,")]),this._v(" "),i("img",{staticClass:"blue-brush",staticStyle:{position:"absolute"},attrs:{src:"/images/blue-brush.svg"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-12"},[i("div",{staticClass:"title"},[i("i",{staticClass:"icon-icon-list mr-1",staticStyle:{"font-size":"11px"}},[i("span",{staticClass:"path1"},[i("span",{staticClass:"path2"})])]),this._v("название отеля:\n                                            ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-12"},[i("div",{staticClass:"title"},[i("i",{staticClass:"icon-icon-list mr-1",staticStyle:{"font-size":"11px"}},[i("span",{staticClass:"path1"},[i("span",{staticClass:"path2"})])]),this._v("\n                                                категория номера:\n                                            ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-12"},[i("div",{staticClass:"title"},[i("i",{staticClass:"icon-icon-list mr-1",staticStyle:{"font-size":"11px"}},[i("span",{staticClass:"path1"},[i("span",{staticClass:"path2"})])]),this._v("\n                                                питание\n                                            ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row mx-auto mt-5 mb-5 justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%","border-top":"4px solid #f08b23"}},[i("span",{staticClass:"white--text active-tour",staticStyle:{background:"#062348","font-size":"24px",position:"absolute"}},[this._v("Туры")])])}],!1,null,"77c97757",null);i.default=u.exports},Fz25:function(t,i,e){var s=e("dKq+");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,a);s.locals&&(t.exports=s.locals)},IczF:function(t,i,e){(t.exports=e("I1BE")(!1)).push([t.i,".title-1[data-v-77c97757]{position:absolute;z-index:1;left:0;top:10px;color:#062348;font-family:Bello Pro!important;font-size:35px}.title-1 span[data-v-77c97757]{font-size:40px}.title-2[data-v-77c97757]{position:absolute;z-index:1;left:52px;top:25px;color:#fff;font-family:Open Sans!important;font-weight:900;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.title-2 span[data-v-77c97757]{text-transform:uppercase}.orange-brush[data-v-77c97757]{top:5px;left:10px;width:265px}.blue-brush[data-v-77c97757]{top:10px;left:-55px;width:330px;height:50px;opacity:1}.title[data-v-77c97757]{font-size:15px;color:#0d274b;letter-spacing:2px;font-weight:900}.subtitle[data-v-77c97757]{font-size:18px;color:#f08b23;font-weight:900}@media screen and (max-width:576px){.title[data-v-77c97757]{font-size:12px}.subtitle[data-v-77c97757]{font-size:15px}}",""])},Nr1U:function(t,i,e){"use strict";e("zhWD")},"dKq+":function(t,i,e){(t.exports=e("I1BE")(!1)).push([t.i,".travel-card-description{color:#062348;font-size:13px;font-weight:900;font-family:Open Sans}.more-text{font-family:Open Sans;text-transform:uppercase;color:#f08b23;font-weight:600;font-size:16px;cursor:pointer}.more-button{cursor:pointer;margin:0 10px;right:10px}.more-button div{width:40px;height:40px;display:block;border-radius:50px;text-decoration:none;font-size:40px;color:#fff;background:#f08b23;padding:0!important}.travel-card{border-radius:20px;background:#fff;box-shadow:0 3px 15px rgba(0,0,0,.4196078431372549);-moz-box-shadow:0 3px 15px rgba(0,0,0,.4196078431372549);-webkit-box-shadow:0 3px 15px rgba(0,0,0,.4196078431372549)}#client .hooper-slide{padding-left:5px!important;padding-right:5px!important}#client .hooper-next,#client .hooper-prev{outline:0!important}#client .desktop .hooper-next{outline:0!important;right:-5%!important}#client .desktop .hooper-prev{outline:0!important;left:-5%!important}#client .tablet .hooper-next{outline:0!important;right:-10%!important}#client .tablet .hooper-prev{outline:0!important;left:-10%!important}#client .hooper-next svg{fill:#062348;height:40px;width:40px}#client .mobile .hooper-next svg,#client .mobile .hooper-prev svg{fill:#fff}#client .hooper-prev svg{fill:#062348;height:40px;width:40px}.active-tour{background:#f08b23;border-radius:20px;padding:3px 20px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);font-weight:900;text-transform:uppercase;font-family:Open Sans}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-image{z-index:0}.v-card{overflow-wrap:break-word;white-space:normal}.v-responsive__sizer{background:rgba(13,39,75,.3803921568627451);transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}.v-image__image--cover{background-size:cover}.v-image__image{background-repeat:no-repeat}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-responsive__content{flex:1 0 0px;max-width:100%}.elevation-24{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__subtitle{position:absolute;bottom:0;left:0}.v-card__subtitle h4{font-weight:900;font-family:Open Sans}.white--text{color:#fff!important;caret-color:#fff!important}",""])},gGw3:function(t,i,e){"use strict";e("Fz25")},zhWD:function(t,i,e){var s=e("IczF");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,a);s.locals&&(t.exports=s.locals)}}]);