"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1059],{11059:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});const n={name:"Orders",data:function(){return{columns:[{label:"ID",field:"id"},{label:"Дата",field:"created_at"},{label:"Имя",field:"name"},{label:"Телефон",field:"phone"},{label:"Тип сообщения",field:"order_type",tagged:!0}],window:{width:0,height:0},countItems:3,tags:[{tag:"User",style:"background:blue; color:white;"}],showModal:!1,editItem:{}}},created:function(){},mounted:function(){this.$store.dispatch("setUsers")},computed:{menu:function(){return this.$store.getters.menu},users:function(){return this.$store.getters.users},preloader:function(){return this.$store.getters.preloader}},methods:{}};const r=(0,s(14486).A)(n,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"row m-auto mb-4 justify-content-center align-items-center",staticStyle:{width:"100%",height:"100%"},attrs:{id:"client"}},[t("data-table",{attrs:{title:"История заказов",columns:e.columns,rows:e.users,perPage:[5,10,25,50],expandMode:!0,tagBackgrounds:e.tags},scopedSlots:e._u([{key:"expand-panel",fn:function(s){return[t("p",[e._v(e._s(s.row.name))])]}}])})],1)])}),[],!1,null,"5cc89176",null).exports}}]);
//# sourceMappingURL=1059.js.map