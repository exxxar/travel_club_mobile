(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8bzX":function(t,e,s){var n=s("IAu3");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,r);n.locals&&(t.exports=n.locals)},FQ5G:function(t,e,s){"use strict";s.r(e);var n=s("o0o1"),r=s.n(n),o=s("OmDE");function i(t,e,s,n,r,o,i){try{var a=t[o](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(n,r)}function a(t){return function(){var e=this,s=arguments;return new Promise((function(n,r){var o=t.apply(e,s);function a(t){i(o,n,r,a,c,"next",t)}function c(t){i(o,n,r,a,c,"throw",t)}a(void 0)}))}}var c={props:{tours:{type:Array,required:!0,default:function(){return[]}},loading:{type:Boolean,default:!0},totalRows:{type:Number,required:!0,default:0}},data:function(){return{sortBy:"id",sortDesc:!1,currentPage:1,perPage:5,sortDirection:"asc",filter:null,filterOn:[],pageOptions:[5,10,15,25,50,100],fields:[{key:"id",label:"ID",sortable:!0,sortDirection:"desc"},{key:"created_at",label:"Дата создания",sortable:!0,sortDirection:"desc"},{key:"TourInfo.date_range.start",label:"С",sortable:!0,sortDirection:"desc"},{key:"TourInfo.date_range.end",label:"По",sortable:!0,sortDirection:"desc"},{key:"TourInfo.country.Name",label:"Страна",sortable:!0,sortDirection:"desc"},{key:"TourInfo.resort.Name",label:"Курорт",sortable:!0,sortDirection:"desc"},{key:"TourInfo.price",label:"Цена",sortable:!0,sortDirection:"desc"},{key:"TourInfo.paid",label:"Выплачено",sortable:!0,sortDirection:"desc"},{key:"action1",label:"Показать"},{key:"action2",label:"Действия"}],meals:[{Id:"115",Name:"AI",desc:"завтраки, обеды, ужины, напитки"},{Id:"114",Name:"BB",desc:"завтраки"},{Id:"112",Name:"FB",desc:"завтраки, обеды, ужины"},{Id:"121",Name:"FB+",desc:"завтраки, обеды, ужины - расширенное меню"},{Id:"113",Name:"HB",desc:"завтраки, ужины"},{Id:"122",Name:"HB+",desc:"завтраки, ужины - расширенное меню"},{Id:"117",Name:"RO",desc:"без питания"},{Id:"116",Name:"UAI",desc:"завтраки, обеды, ужины, напитки - расширенное меню"},{Id:"129",Name:"SC",desc:"самообслуживание"}],seconds:0,interval:"",flag:!1,loadingFiles:!1}},mounted:function(){},computed:{isAdmin:function(){return this.$store.getters.isAdmin},isManager:function(){return this.$store.getters.isManager},sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},tourModule:function(){return this.$store.getters.tourModule},countries:function(){return this.$store.getters.countries},cities:function(){return this.$store.getters.cities},hotels:function(){return this.$store.getters.hotels},branches:function(){return this.$store.getters.branches},isCountriesLoading:function(){return this.$store.getters.isCountriesLoading},isCitiesLoading:function(){return this.$store.getters.isCitiesLoading},isHotelsLoading:function(){return this.$store.getters.isHotelsLoading}},methods:{toEditTour:function(t){this.isAdmin&&this.$router.push("/admin/client-tours/"+this.$route.params.id+"/edit/"+t),this.isManager&&this.$router.push("/manager/client-tours/"+this.$route.params.id+"/edit/"+t)},changeEditDateRange:function(t){this.save(t)},sendMessage:function(t){this.$notify({group:"info",type:"travel",title:"Туры пользователей",text:t})},destroy:function(t){var e=this;return a(r.a.mark((function s(){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e.$store.dispatch("forceDeleteClientTour",{client_id:e.$route.params.id,id:t}).then((function(t){e.sendMessage(t.data.message)}));case 1:case"end":return s.stop()}}),s)})))()},save:function(t,e,s){var n=this;return a(r.a.mark((function o(){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.$store.dispatch("saveClientTour",{id:e,key:s,value:t}).then((function(t){n.$store.commit("saveClientTour",t.data.user),n.sendMessage(t.data.message)}));case 1:case"end":return r.stop()}}),o)})))()},saveInfo:function(t,e,s){var n=this;return a(r.a.mark((function o(){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:"date_range"==s&&(n.save(moment(t.start,"DD-MM-YYYY"),e,"StartAt"),n.save(moment(t.end,"DD-MM-YYYY"),e,"EndAt")),i={id:e,param:s,value:t},n.$store.dispatch("saveClientTourInfo",i).then((function(t){n.sendMessage(t.data.message)}));case 3:case"end":return r.stop()}}),o)})))()},saveFiles:function(t,e){var s=this;return a(r.a.mark((function n(){var o,i,a,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.loadingFiles=!0,(o=new FormData).append("id",t.id),o.append("param","files"),o.append("action",e),o.append("TourInfo",JSON.stringify(t.TourInfo)),1==e)for(i=0;i<t.new_files.length;i++)a=t.new_files[i].data,o.append("files["+i+"]",a);else for(i=0;i<t.delete_files.length;i++)c=t.delete_files[i].data,o.append("files["+i+"]",c);s.$store.dispatch("saveClientTourInfo",o).then((function(e){t.new_files=[],t.deleted_files=[],s.sendMessage(e.data.message)}));case 8:case"end":return n.stop()}}),n)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},chooseEditResortCountry:function(t,e){e.TourInfo.resort={Name:"Любой"},e.TourInfo.hotel={Name:"Любой"},e.TourInfo.country=t,this.$store.dispatch("getCities",e.TourInfo.country.Id),this.$store.dispatch("getHotels",{country_id:e.TourInfo.country.Id,town_id:"0",star_id:"0"}),this.saveInfo(t,e.id,"country"),this.saveInfo({Name:"Любой"},e.id,"resort"),this.saveInfo({Name:"Любой"},e.id,"hotel")},chooseEditResort:function(t,e){var s=this;if(e.TourInfo.resort=t,"Любой"!=e.TourInfo.resort.Name){var n=e.TourInfo.resort.Id;this.$store.dispatch("getHotels",{country_id:e.TourInfo.country.Id,town_id:n,star_id:"0"}).then((function(){-1==s.hotels.findIndex((function(t){return t.Id==e.TourInfo.hotel.Id}))&&(e.TourInfo.hotel={Name:"Любой"},s.saveInfo({Name:"Любой"},e.id,"hotel"))}))}else this.$store.dispatch("getHotels",{country_id:e.TourInfo.country.Id,town_id:"0",star_id:"0"});this.saveInfo(t,e.id,"resort")},changeEditPrice:function(t){t.TourInfo.left=t.TourInfo.price-t.TourInfo.paid,this.saveInfo(t.TourInfo.left,t.id,"left")},handleEditFiles:function(t){for(var e=this.$refs["tour_files"+t.id].files,s=0;s<e.length&&/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(e[s].name);s++){var n=new Date;t.new_files.push({type:"file",name:e[s].name,data:e[s],date:n}),t.TourInfo.files.push({type:"file",name:e[s].name,data:e[s],date:n}),this.getImagePreviews(t.TourInfo.files),this.saveFiles(t,1)}},onEditResult:function(t,e){var s=Date.now(),n=new Date;e.new_files.push({type:"audio",name:"record-"+s+".mp3",src:window.URL.createObjectURL(t),data:t,date:n,seconds:this.seconds}),e.TourInfo.files.push({type:"audio",name:"record-"+s+".mp3",src:window.URL.createObjectURL(t),data:t,date:n,seconds:this.seconds}),this.countSeconds(),this.saveFiles(e,1),this.getImagePreviews(e.new_files)},deleteFile:function(t,e,s){s.delete_files.push(t),s.TourInfo.files.splice(e,1),this.saveFiles(s,0)},getImagePreviews:function(t){for(var e=this,s=function(s){if(/\.(jpe?g|png|svg)$/i.test(t[s].name)){var n=new FileReader;n.addEventListener("load",function(){this.$refs["preview"+parseInt(s)][0].src=n.result}.bind(e),!1),n.readAsDataURL(t[s].data)}else e.$nextTick((function(){this.$refs["preview"+parseInt(s)][0].src="/images/LOGO-1.png"}))},n=0;n<t.length;n++)s(n)},onStream:function(t){this.countSeconds(),console.log("Got a stream object:",t)},countSeconds:function(){this.flag=!this.flag,1==this.flag?(this.seconds=0,this.interval=setInterval(this.incrementSeconds,1e3)):clearInterval(this.interval)},incrementSeconds:function(){this.seconds+=1}},directives:{mask:o.mask}},u=(s("KCfq"),s("XjWu"),s("KHd+"));function l(t,e,s,n,r,o,i){try{var a=t[o](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(n,r)}var d={components:{UserTable:Object(u.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-100 m-auto"},[s("b-row",[s("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Сортировка","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"sortBySelect1"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-select",{staticClass:"w-75",attrs:{id:"sortBySelect1",options:t.sortOptions},scopedSlots:t._u([{key:"first",fn:function(){return[s("option",{attrs:{value:""}},[t._v("-- none --")])]},proxy:!0}]),model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),t._v(" "),s("b-form-select",{staticClass:"w-25",attrs:{size:"sm",disabled:!t.sortBy},model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[s("option",{domProps:{value:!1}},[t._v("Asc")]),t._v(" "),s("option",{domProps:{value:!0}},[t._v("Desc")])])],1)],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Поиск","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Введите для поиска"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Очистить")])],1)],1)],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"На странице","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect1"}},[s("b-form-select",{attrs:{id:"perPageSelect1",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),t._v(" "),s("b-table",{attrs:{"show-empty":"",small:"",stacked:"md",items:t.tours,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,filterIncludedFields:t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,busy:t.loading,"empty-text":"Нет записей для отображения","empty-filtered-text":"Нет записей, соответствующих вашему запросу"},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(created_at)",fn:function(e){return[t._v("\n                "+t._s(t._f("moment")(e.item.created_at,"DD.MM.YYYY"))+"\n            ")]}},{key:"cell(action1)",fn:function(e){return[s("b-input-group",{attrs:{size:"sm"}},[s("b-button",{staticClass:"w-100 btn btn-travel mr-1 mb-1 btn-travel",on:{click:function(s){return t.toEditTour(e.item.id)}}},[t._v("\n                        Редактировать\n                    ")])],1)]}},{key:"cell(action2)",fn:function(e){return[s("b-input-group",{attrs:{size:"sm"}},[null==e.item.deleted_at?s("b-button",{staticClass:"btn btn-info mr-1 mb-1 btn-travel w-100",attrs:{disabled:null===e.item.id},on:{click:function(s){return t.destroy(e.item.id)}}},[t._v("\n                            Удалить\n                    ")]):t._e()],1)]}},{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-warning my-2"},[s("b-spinner",{staticClass:"align-middle",attrs:{variant:"warning"}}),t._v(" "),s("strong",[t._v("Загрузка...")])],1)]},proxy:!0}])})],1)}),[],!1,null,"304d7631",null).exports},data:function(){return{loading:!1,toursTotalRows:0,deletedToursTotalRows:0,current_client:{},clientTours:[]}},computed:{menu:function(){return this.$store.getters.menu},isAdmin:function(){return this.$store.getters.isAdmin},isManager:function(){return this.$store.getters.isManager},clients:function(){return this.$store.getters.clients},client:function(){return this.current_client},managers:function(){return this.$store.getters.managers},manager:function(){return this.current_manager},tourModule:function(){return this.$store.getters.tourModule},countries:function(){return this.$store.getters.countries},cities:function(){return this.$store.getters.cities},hotels:function(){return this.$store.getters.hotels},branches:function(){return this.$store.getters.branches},isCountriesLoading:function(){return this.$store.getters.isCountriesLoading},isCitiesLoading:function(){return this.$store.getters.isCitiesLoading},isHotelsLoading:function(){return this.$store.getters.isHotelsLoading}},created:function(){var t=this;0===this.countries.length&&this.$store.dispatch("getCountries",{town_id:0}),this.clients.length>0?(this.loading=!0,this.current_client=this.clients.find((function(e){return e.id==t.$route.params.id})),this.loading=!1):this.getClient()},mounted:function(){},methods:{toCreateTour:function(){this.isAdmin&&this.$router.push("/admin/client-tours/"+this.$route.params.id+"/create"),this.isManager&&this.$router.push("/manager/client-tours/"+this.$route.params.id+"/create")},getClient:function(){var t,e=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("setClients").then((function(t){e.$store.commit("setClients",t.data.users),e.$store.commit("setDeletedClients",t.data.deleted_users),e.current_client=e.clients.find((function(t){return t.id==e.$route.params.id})),e.toursTotalRows=e.current_client.tours.length,e.loading=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(n,r){var o=t.apply(e,s);function i(t){l(o,n,r,i,a,"next",t)}function a(t){l(o,n,r,i,a,"throw",t)}i(void 0)}))})()},sendMessage:function(t){this.$notify({group:"info",type:"travel",title:"Туры пользователей",text:t})}}},f=(s("sHsW"),Object(u.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"row w-100 my-3"},[e("b-button",{staticClass:"btn-travel",attrs:{variant:"primary"},on:{click:this.toCreateTour}},[this._v("Создать тур")])],1),this._v(" "),e("div",{staticClass:"row w-100 mt-3"},[e("user-table",{attrs:{tours:this.client.tours,loading:this.loading,totalRows:this.toursTotalRows}})],1)])}),[],!1,null,null,null));e.default=f.exports},IAu3:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".btn-travel[data-v-304d7631]{background:#e17e4e;background-position-x:0;background-position-y:0;background-image:none;background-size:auto;background-image:linear-gradient(to bottom left,#e17e4e,#ffbf00,#e17e4e);background-size:210% 210%;background-position:100% 0;background-color:#e17e4e;transition:all .15s ease;box-shadow:none;color:#fff;max-width:300px;border:none}",""])},KCfq:function(t,e,s){"use strict";s("8bzX")},Sm6T:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".page-item.active .page-link{background:#f08b23;border:1px solid #f08b23;transition:all .15s ease;box-shadow:none;color:#fff}.tours .vhd-input{min-width:100%}",""])},XjWu:function(t,e,s){"use strict";s("xtRF")},fgVb:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".nav-link{color:#f08b23}.nav-link:hover{color:#0d274b}",""])},sHsW:function(t,e,s){"use strict";s("sp3M")},sp3M:function(t,e,s){var n=s("fgVb");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,r);n.locals&&(t.exports=n.locals)},xtRF:function(t,e,s){var n=s("Sm6T");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,r);n.locals&&(t.exports=n.locals)}}]);