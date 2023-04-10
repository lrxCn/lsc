"use strict";(self["webpackChunksmart_agriculture"]=self["webpackChunksmart_agriculture"]||[]).push([[531],{663:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cascader"},[e("el-cascader",{attrs:{value:t.area,options:t.info,"popper-class":"cascader-popper"},on:{change:t.handleChange}})],1)},a=[],o={name:"AreaSelect",props:{info:Array,area:Array},methods:{handleChange(t){this.$emit("change",t)}}},r=o,n=s(6432),l=(0,n.Z)(r,i,a,!1,null,null,null),c=l.exports},1559:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"module-title"},[t._m(0),e("span",[t._v(t._s(t.title))])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"module-title-bg"},[e("div"),e("div")])}],o={name:"ModuleTitle",props:{title:String}},r=o,n=s(6432),l=(0,n.Z)(r,i,a,!1,null,"7d207a09",null),c=l.exports},9697:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pmcs"},[e("module-title",{attrs:{title:t.title}}),e("div",{staticClass:"pmcs-list"},t._l(t.cropList,(function({src:s,activeSrc:i,key:a,title:o}){return e("div",{key:a,class:t.zwType===a?"pmcs-list-item-active pmcs-list-item":"pmcs-list-item",on:{click:function(e){return t.handleActive(t.zwType===a?void 0:a)}}},[e("el-tooltip",{attrs:{placement:"top-start",trigger:"hover",content:o,effect:"light"}},[e("safe-img",{attrs:{src:t.zwType===a?i:s,defaultSrc:t.zwType===a?"/cropIcon/active/cropBackup.png":"/cropIcon/cropBackup.png",alt:o}})],1)],1)})),0)],1)},a=[],o=s(1559),r={components:{ModuleTitle:o.Z},name:"PlantManageCropSelection",props:{title:String,cropList:Array,zwType:String},data:()=>({}),methods:{handleActive(t){this.$emit("handleActive",t)}}},n=r,l=s(6432),c=(0,l.Z)(n,i,a,!1,null,"49770061",null),d=c.exports},5731:function(t,e,s){s.r(e),s.d(e,{default:function(){return pt}});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("AdaptMoneyManage",{scopedSlots:t._u([{key:"slot-left",fn:function(){return[e("PlantManageCropSelection",{attrs:{zwType:t.zwType,cropList:t.cropList,title:"作物选择"},on:{handleActive:t.handleClickZW}}),e("InvestmentStatistics",{attrs:{info:t.investmentStatistics}}),e("SalesVolumeStatistics",{attrs:{info:t.salesVolumeStatistics}}),e("ProfitStatistics",{attrs:{info:t.profitStatistics}})]},proxy:!0},{key:"slot-center",fn:function(){return[e("div",{staticClass:"mm-top"},[e("div",{staticClass:"mm-top-dashboard"},t._l(t.dashboard,(function({title:s,value:i,unit:a},o){return e("DashBoard",{key:o,attrs:{title:s,value:i,unit:a,max:t.dashboardMax}})})),1),e("div",{staticClass:"mm-top-selectarea"},[e("AreaSelect",{attrs:{info:t.province,area:t.moneyManageSelectArea},on:{change:t.handleSelectArea}})],1)])]},proxy:!0},{key:"slot-right-top",fn:function(){return[e("CustomerType",{attrs:{info:t.customerType}})]},proxy:!0},{key:"slot-right-bottom",fn:function(){return[e("CommodityCategory",{attrs:{info:t.commodityCategory}})]},proxy:!0}])})},a=[],o=s(663),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"commodity-category"},[e("div",{staticClass:"commodity-category-title"},[e("module-title",{attrs:{title:"商品种类"}})],1),e("div",{staticClass:"commodity-category-chart"},[e("div",{staticClass:"commodity-category-chart-list"},t._l(t.info,(function({title:t,color:s,bgColor:i,lineColor:a,lineHeight:o,top:r,left:n,right:l,bottom:c},d){return e("div",{key:d,staticClass:"commodity-category-chart-list-item",style:`left:${n};top:${r};bottom:${c};right:${l};`},[e("RectItem",{attrs:{title:t,color:s,bgcolor:i,linecolor:a,lineheight:o}})],1)})),0),t._m(0)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"commodity-category-chart-title"},[e("div",{staticClass:"commodity-category-chart-title-circle-1"},[e("div",{staticClass:"commodity-category-chart-title-circle-2"},[t._v(" 商品种类 ")])])])}],l=s(1559),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rect-item",style:`border-color:${t.color};background-color:${t.bgcolor}`},[t._v(" "+t._s(t.title)+" "),e("div",{staticClass:"rect-item-tri",style:`border-color:${t.color};background-color:${t.bgcolor}`}),e("div",{staticClass:"rect-item-line",style:`border-color:${t.linecolor};height:${t.lineheight};`})])},d=[],u={components:{},props:{title:String,bgcolor:String,color:String,linecolor:String,lineheight:String},computed:{},name:"RectItem",mounted(){},methods:{},data(){return{}}},m=u,p=s(6432),h=(0,p.Z)(m,c,d,!1,null,"6f6c564a",null),f=h.exports,v={props:{info:Array},name:"CommodityCategory",mounted(){},computed:{},watch:{},data(){return{}},methods:{},components:{RectItem:f,ModuleTitle:l.Z}},g=v,y=(0,p.Z)(g,r,n,!1,null,"705066a4",null),C=y.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"customer-type"},[e("div",{staticClass:"customer-type-title"},[e("module-title",{attrs:{title:"客户类型"}})],1),e("div",{staticClass:"customer-type-chart"},[e("echarts-wrap",{attrs:{option:t.info}})],1)])},S=[],b={props:{info:Object},name:"CustomerType",computed:{},watch:{},data(){return{}},methods:{},components:{ModuleTitle:l.Z}},x=b,Z=(0,p.Z)(x,_,S,!1,null,"10011f84",null),w=Z.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"investment-statistics"},[e("ModuleTitle",{attrs:{title:"投入品统计（万元）"}}),e("div",{staticClass:"investment-statistics-chart"},[e("echarts-wrap",{attrs:{option:t.info}})],1)],1)},k=[],T={name:"InvestmentStatistics",props:{info:Object},data:()=>({}),components:{ModuleTitle:l.Z}},A=T,$=(0,p.Z)(A,M,k,!1,null,"235b7f10",null),L=$.exports,z=s(9697),D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profit-statistics"},[e("ModuleTitle",{attrs:{title:"利润统计（万元）"}}),e("div",{staticClass:"profit-statistics-chart"},[e("echarts-wrap",{attrs:{option:t.info}})],1)],1)},P=[],I={name:"ProfitStatistics",props:{info:Object},components:{ModuleTitle:l.Z}},j=I,V=(0,p.Z)(j,D,P,!1,null,"13fbd481",null),B=V.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sales-volume-statistics"},[e("ModuleTitle",{attrs:{title:"销售额统计"}}),e("div",{staticClass:"sales-volume-statistics-chart"},[e("echarts-wrap",{attrs:{option:t.info}})],1)],1)},F=[],H={name:"SalesVolumeStatistics",props:{info:Object},components:{ModuleTitle:l.Z}},R=H,W=(0,p.Z)(R,O,F,!1,null,"1a968e50",null),N=W.exports,Q=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"adaptmm"},[e("div",{staticClass:"adaptmm-mask"}),e("div",{staticClass:"adaptmm-left"},[t._t("slot-left")],2),e("div",{staticClass:"adaptmm-center"},[t._t("slot-center")],2),e("div",{staticClass:"adaptmm-right"},[e("div",{staticClass:"adaptmm-right-top"},[t._t("slot-right-top")],2),e("div",{staticClass:"adaptmm-right-bottom"},[t._t("slot-right-bottom")],2)])])},E=[],q=s(9754),G=q["default"].extend({name:"AdaptMoneyManage",components:{}}),J=G,K=(0,p.Z)(J,Q,E,!1,null,"9a8773c0",null),U=K.exports,X=s(3051),Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dash-board"},[e("div",{ref:"chart",staticClass:"dash-board-chart"}),e("div",{staticClass:"dash-board-span-2"},[t._v(t._s(t.title))]),e("div",{staticClass:"dash-board-span-1"},[t._v(t._s(t.unit))])])},tt=[],et=s(2232),st={components:{},props:{title:String,value:[Number,String],unit:String,max:Number},name:"DashBoard",mounted(){let t=this.$echarts.init(this.$refs.chart);t.setOption(this.option)},data(){return{option:{grid:{left:"0%",top:"0%",bottom:"0%",right:"0%"},series:[{type:"gauge",animationDuration:5e3,progress:{show:!0,itemStyle:{color:"#33F3DF"},width:(0,et.Zk)(4)},pointer:{show:!1},axisLine:{lineStyle:{color:[[1,"#D0D6D7"]],width:(0,et.Zk)(4)}},axisTick:{show:!1},splitLine:{length:(0,et.Zk)(5),distance:0,lineStyle:{width:(0,et.Zk)(2),color:"#33F3DF"}},axisLabel:{show:!1},anchor:{show:!1},detail:{valueAnimation:!0,fontSize:(0,et.Zk)(24),color:"#fff",offsetCenter:[0,0]},max:this.max,data:[{value:this.value}]}]}}},methods:{}},it=st,at=(0,p.Z)(it,Y,tt,!1,null,"1c7e7e45",null),ot=at.exports,rt=s(5813),nt=s(8291);const{mapState:lt,mapActions:ct}=(0,rt._p)("money/");var dt=q["default"].extend({name:"MoneyManage",computed:{...(0,rt.rn)(["province","moneyManageSelectArea"]),...lt(["cropList","customerType","investmentStatistics","salesVolumeStatistics","zwType","dashboard","flowMapData","commodityCategory","profitStatistics"]),dashboardMax(){return 1.25*Math.max(...this.dashboard.map((({value:t})=>t)))}},mounted(){this.load()},data:()=>({}),methods:{...(0,rt.nv)({getProvince:nt.oz,fetchLogin:nt.yv,setArea:nt.E6}),load(){const{[et.id]:t,[et.Qj]:e}=et.WL.getItems([et.id,et.Qj]);t&&e?this.fetchLogin({username:t,password:e}).then((t=>{const{isLogin:e}=t?.user||{};e?(this.getProvince(),this.fetchHome()):this.$router.replace({path:"/loginView"})})):this.$router.replace({path:"/loginView"})},...ct({fetchHome:X.gT,handleClickZW:X.jv}),handleSelectArea(t){this.setArea(t),this.fetchHome()}},components:{DashBoard:ot,AreaSelect:o.Z,AdaptMoneyManage:U,CustomerType:w,CommodityCategory:C,PlantManageCropSelection:z.Z,ProfitStatistics:B,InvestmentStatistics:L,SalesVolumeStatistics:N}}),ut=dt,mt=(0,p.Z)(ut,i,a,!1,null,"ac385d6a",null),pt=mt.exports},5079:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pwait"},[t._v(" 敬请期待 ")])},a=[],o=s(6432),r={},n=(0,o.Z)(r,i,a,!1,null,null,null),l=n.exports}}]);