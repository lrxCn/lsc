"use strict";(self["webpackChunksmart_agriculture"]=self["webpackChunksmart_agriculture"]||[]).push([[797],{4367:function(t,e,s){s.r(e),s.d(e,{default:function(){return Gt}});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("AdaptSmartTouch",{scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"smart-touch-top"},[e("div",[e("green-house-select",{attrs:{list:t.greenHouseList,active:t.smartTouchActive},on:{change:t.handleGreenHouseChange}})],1),e("div",[e("WeatherList",{attrs:{list:t.weatherList}})],1)])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"smart-touch-content"},[e("SmartTouchContent",{attrs:{cameras:t.cameras}})],1)]},proxy:!0},{key:"info",fn:function(){return[e("SmartTouchInfo",{key:t.smartTouchActive,attrs:{cameras:t.cameras,btns:t.smartTouchInfoBtns,active:t.smartTouchInfoBtnsActive,options:t.options},on:{handleActive:t.handleActive}})]},proxy:!0},{key:"side",fn:function(){return[e("div",{staticClass:"smart-touch-side"},[t.controlList.length?e("SmartTouchBtns",{attrs:{list:t.controlList}}):t._e()],1)]},proxy:!0}])})},n=[],a=s(9754),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"adapt-smart-touch-container"},[e("div",{staticClass:"adapt-smart-touch-mask"}),e("div",{staticClass:"adapt-smart-touch"},[e("div",{staticClass:"adapt-smart-touch-top"},[t._t("top")],2),e("div",{staticClass:"adapt-smart-touch-bottom"},[e("div",{staticClass:"adapt-smart-touch-bottom-main"},[e("div",{staticClass:"adapt-smart-touch-bottom-main-content"},[t._t("content")],2),e("div",{staticClass:"adapt-smart-touch-bottom-main-info"},[t._t("info")],2)]),e("div",{staticClass:"adapt-smart-touch-bottom-side"},[t._t("side")],2)])])])},r=[],c=a["default"].extend({name:"AdaptSmartTouch"}),l=c,u=s(6432),h=(0,u.Z)(l,o,r,!1,null,"26c6db7d",null),d=h.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"greenhouseselect"},[e("div",{staticClass:"greenhouseselect-info"},[t._v("已选牛棚：")]),e("el-cascader",{attrs:{value:t.innerActive,options:t.list,"popper-class":"greenhouseselect-popper"},on:{change:t.handleChange}})],1)},v=[],p={props:{active:[Number,String],list:Array},name:"GreenHouseSelect",mounted(){this.innerActive=this.active},computed:{},watch:{active(){this.innerActive=this.active}},data(){return{innerActive:0,area:"",info:[{value:"zhinan1",label:"指南1"},{value:"zhinan2",label:"指南2"},{value:"zhinan3",label:"指南3"},{value:"zhinan4",label:"指南4"}]}},methods:{handleChange([t]=[]){this.$emit("change",t)},handleActive(t){this.$emit("change",t)}}},f=p,g=(0,u.Z)(f,m,v,!1,null,null,null),b=g.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"weatherlist"},t._l(t.list,(function({code:s,date:i},n){return e("div",{key:n,staticClass:"weatherlist-item"},[e("i",{class:`qi-${s} weatherlist-item-icon`}),e("span",{staticClass:"weatherlist-item-text"},[t._v(t._s(i))])])})),0)},C=[],S={props:{list:Array},name:"WeatherList",mounted(){},computed:{},watch:{},data(){return{}},methods:{}},_=S,A=(0,u.Z)(_,y,C,!1,null,"00fee6a9",null),T=A.exports,w=function(){var t=this,e=t._self._c;return e("div",{class:t.out?"smart-touch-btn smart-touch-btn-active":"smart-touch-btn",attrs:{id:"SmartTouchBtns"},on:{mouseenter:function(e){return t.handleOpen(!0)},mouseleave:function(e){return t.handleOpen(!1)}}},[e("div",{class:t.out?"smart-touch-btn-left smart-touch-btn-left-active":"smart-touch-btn-left",on:{click:function(e){return t.handleOpen(!t.out,!0)}}},[t._v(" 控 制 开 关 ")]),e("div",{staticClass:"smart-touch-btn-content"},t._l(t.renderList,(function({gzName:s,code:i,type:n,status:a,groupIdentifier:o,channelIdentifier:r,icon:c}){return e("div",{key:i,staticClass:"smart-touch-btn-content-item"},[e("div",{staticClass:"smart-touch-btn-content-item-info"},[e("img",{attrs:{src:`/smartTouchBtns/${c}/${a}.png`,alt:""}}),e("div",{staticClass:"smart-touch-btn-content-item-info-switch"},["1"===n?e("SwitchThree",{attrs:{color:c,list:t.switchList,value:a,groupIdentifier:o,channelIdentifier:r},on:{change:t.handleChange}}):e("SwitchTwo",{attrs:{value:!!~~a,color:c,groupIdentifier:o,channelIdentifier:r},on:{input:t.handleChange}})],1)]),e("div",{staticClass:"smart-touch-btn-content-item-text"},[t._v(" "+t._s(s)+" ")])])})),0)])},I=[],k=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"switch-two"},t._l(t.list,(function({key:s,title:i}){return e("div",{key:i,class:t.value===s?"item item-active":"item",on:{click:function(e){return t.trigger(s)}}},[e("div",{staticClass:"title"},[t._v(t._s(i))]),e("div",{staticClass:"sq"})])})),0)},x=[],L=a["default"].extend({name:"SwitchTwo",props:{groupIdentifier:String,channelIdentifier:String,value:{default:!1}},mounted(){},computed:{},data:()=>({list:[{key:!0,title:"开"},{key:!1,title:"关"}]}),methods:{trigger(){this.$emit("input",this.groupIdentifier,this.channelIdentifier,~~!this.value)}}}),$=L,B=(0,u.Z)($,k,x,!1,null,"59e4827c",null),E=B.exports,O=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"switch3"},t._l(t.list,(function({key:s,title:i}){return e("div",{key:s,class:t.value==s?"switch3-item switch3-item-active":"switch3-item",on:{click:function(e){return t.trigger(s)}}},[e("div",[t._v(t._s(i))]),e("div")])})),0)},V=[],Z=a["default"].extend({name:"SwitchThree",props:{value:[Number,String],list:Array,color:{type:String,default:"default"},groupIdentifier:String,channelIdentifier:String},mounted(){},data:()=>({}),methods:{trigger(t){this.$emit("change",t,this.groupIdentifier,this.channelIdentifier)}},components:{}}),N=Z,M=(0,u.Z)(N,O,V,!1,null,"51735bd8",null),H=M.exports,D=s(2232),R=s(3036),P={components:{SwitchTwo:E,SwitchThree:H},props:{list:Array,dadKey:String},name:"SmartTouchBtns",mounted(){this.renderList=this.list,this.cycleRequest()},watch:{list(){this.getStatus()}},data(){return{renderList:[],out:!1,switchs:{},active:0,switchList:[{key:2,title:"关"},{key:0,title:"停"},{key:1,title:"开"}]}},timer:null,cycleTimer:null,destroyed(){clearInterval(this.timer),clearInterval(this.cycleTimer)},methods:{cycleRequest(){this.cycleTimer=setInterval((()=>{this.getStatus()}),5e3)},handleOpen(t=!this.out,e){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.out=t}),t||e?0:10*D.mv)},handleChange(t,e,s){this.Notification.success({title:"成功",dangerouslyUseHTMLString:!0,message:"<strong>已向设备发送命令，约10秒后生效，请勿重复点击</strong>"}),e=1==(0,D.E)(location.toString())?.realmode?e:this.getLightInRenderListByIcon(),(0,R.xA)({groupIdentifier:t,channelIdentifier:e,value:s}).then((()=>{this.getStatus()})).catch((()=>{this.Notification.warning({title:"警告",dangerouslyUseHTMLString:!0,message:"<strong>控制失败</strong>"})}))},getLightInRenderListByIcon(){return this.renderList.find((({icon:t})=>"3"===t))?.channelIdentifier},getStatus(){const t=[...new Set(this.renderList.map((({groupIdentifier:t})=>t)))],e=t.map((t=>(0,R.NC)({groupIdentifier:t})));Promise.all(e).then((t=>{const e=t.map((t=>{const e={};return Object.keys(t).forEach((s=>{e[`${t.groupName}_${s}`]=t[s]})),e})),s=e.reduce(((t,e)=>({...t,...e})),{});this.renderList=this.renderList.map((t=>({...t,status:s[t._onlyKey]})))}))}}},W=P,J=(0,u.Z)(W,w,I,!1,null,"deddfb48",null),U=J.exports,K=function(){var t=this,e=t._self._c;return t.cameras.length||t.options.length||t.btns.length?e("div",{staticClass:"sticon"},[e("div",{staticClass:"sticon-btns"},t._l(t.btns,(function({deviceCode:s,type:i,name:n,num:a}){return e("div",{key:s,class:t.active===s?"sticon-btns-item sticon-btns-item-active":"sticon-btns-item",on:{click:function(e){return t.handleActive(s)}}},[e("div",{staticClass:"sticon-btns-item-imgcon"},[e("safe-img",{attrs:{src:`/smartTouchBtmIcon/${t.iconMap[i]}`}})],1),e("span",[t._v(t._s(n))]),e("div",{staticClass:"sticon-btns-item-decorate-1 sticon-btns-item-decorate"}),e("div",{staticClass:"sticon-btns-item-decorate-2 sticon-btns-item-decorate"}),e("div",{staticClass:"sticon-btns-item-decorate-3 sticon-btns-item-decorate"}),e("div",{staticClass:"sticon-btns-item-decorate-4 sticon-btns-item-decorate"})])})),0),e("div",{staticClass:"sticon-content"},[t.active===t.monitorCode?e("SmartTouchMonitor",{attrs:{list:t.cameras}}):e("SmartTouchInfoCard",{attrs:{icon:`/smartTouchBtmIcon/${t.activeInfo?.icon}`,option:t.options[t.active],title:t.activeInfo?.name,subTitle:t.activeInfo?.subname,value:t.activeInfo?.value}})],1)]):e("div",{staticClass:"sticon-none"},[t._v(" 暂无数据 ")])},G=[],Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sbbm"},[e("SmartBtmBtnTitle",{attrs:{title:"实时监控"}}),e("div",{staticClass:"sbbm-content"},[e("div",{staticClass:"sbbm-content-btns"},t._l(t.list,(function({channelName:i},n){return e("div",{key:n,class:t.active===n?"sbbm-content-btns-item sbbm-content-btns-item-active":"sbbm-content-btns-item",on:{click:function(e){t.active=n}}},[e("img",{attrs:{src:s(853),alt:""}}),e("span",[t._v(t._s(i))])])})),0),e("wrap-video",{attrs:{option:t.list[t.active]}})],1)],1)},X=[],j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"smart-btm-btn-title"},[e("span",[t._v(t._s(t.title))]),e("div",{staticClass:"smart-btm-btn-title-line"})])},q=[],z={name:"SmartBtmBtnTitle",props:{title:String,color:String},components:{},computed:{},methods:{},data:()=>({}),mounted(){}},F=z,Q=(0,u.Z)(F,j,q,!1,null,"53f45807",null),tt=Q.exports,et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap-video-con"},[e("div",{staticClass:"wrap-video",attrs:{id:"wrap-video"}}),e("div",{staticClass:"wrap-video-con-sign"},[t._v(t._s(t.option.channelName))])])},st=[],it=s(3275),nt=s.n(it),at=s(6930),ot={components:{},props:{option:Object},name:"WrapVideo",watch:{option:{handler(){this.plyr?(D.Ww.open(),this.plyr.changePlayUrl({type:"live",deviceSerial:this.option.deviceSerial,channelNo:this.option.channelNo,accessToken:this.option.accessToken}).then((()=>{D.Ww.close()})).catch((()=>{D.Ww.close()}))):this.createPlyr()},immediate:!0,deep:!0}},mounted(){this.addListener()},beforeDestroy(){this.removeListener()},methods:{createPlyr(){this.plyr=new(nt().EZUIKitPlayer)({id:"wrap-video",accessToken:this.option.accessToken,url:this.option.url,width:(0,D.Zk)(483),height:(0,D.Zk)(257),themeData:at.dg})},onCloseVideo(){this.plyr.stop()},onReOpenVideo(){this.plyr.play()},addListener(){this.events.forEach((t=>{this.$bus.$on(t,this[`on${t}`])}))},removeListener(){this.events.forEach((t=>{this.$bus.$off(t,this[`on${t}`])}))}},data(){return{events:[D.r1.CLOSE_VIDEO,D.r1.REOPEN_VIDEO]}}},rt=ot,ct=(0,u.Z)(rt,et,st,!1,null,"cd1e19b6",null),lt=ct.exports,ut={props:{list:Array},name:"SmartTouchMonitor",mounted(){this.init()},computed:{},watch:{list:{handler(){console.log(this.list)},immediate:!0,deep:!0}},data(){return{active:0}},methods:{init(){}},components:{SmartBtmBtnTitle:tt,WrapVideo:lt}},ht=ut,dt=(0,u.Z)(ht,Y,X,!1,null,"707bcbf0",null),mt=dt.exports,vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sbbm"},[e("SmartBtmBtnTitle",{attrs:{title:t.title}}),t.option?e("div",{staticClass:"sbbm-content"},[e("div",{staticClass:"sbbm-content-left"},[e("img",{attrs:{src:t.icon,alt:""}}),e("span",{staticClass:"sbbm-content-left-span-1"},[t._v(t._s(t.subTitle))]),e("span",{staticClass:"sbbm-content-left-span-2"},[t._v(t._s(t.value))])]),e("div",{staticClass:"sbbm-content-right"},[e("echarts-wrap",{attrs:{option:t.option}})],1)]):e("div",{staticClass:"sbbm-content-empty"},[t._v("暂无数据")])],1)},pt=[],ft={props:{icon:String,title:String,subTitle:String,value:String,option:Object},name:"SmartTouchInfoCard",components:{SmartBtmBtnTitle:tt}},gt=ft,bt=(0,u.Z)(gt,vt,pt,!1,null,"73b264f7",null),yt=bt.exports,Ct={props:{active:[String,Number],btns:Array,options:[Object,Array],cameras:Array},name:"SmartTouchInfo",mounted(){},computed:{activeInfo(){const{subname:t,value:e,name:s,type:i}=this.btns.find((({deviceCode:t})=>t===this.active))||{};return{subname:t,value:e,name:s,icon:at.zm[i]}}},data(){return{iconMap:at.zm,monitorCode:at.MJ}},methods:{handleActive(t){this.$emit("handleActive",t)}},components:{SmartTouchMonitor:mt,SmartTouchInfoCard:yt}},St=Ct,_t=(0,u.Z)(St,K,G,!1,null,"5ff59981",null),At=_t.exports,Tt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"stc"},t._l(t.cameras.slice(0,3),(function({url:s,accessToken:i},n){return e("SmartTouchLive",{key:n,attrs:{x:t.poss[n].x,y:t.poss[n].y,url:s,accessToken:i,id:`topLive${n}`}})})),1)},wt=[],It=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"stc-item",style:`left: ${t.x}%;bottom:${t.y}%`},[e("img",{attrs:{src:s(8050),alt:""},on:{click:function(e){return t.toggleModal()}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.videoVis,expression:"videoVis"}],staticClass:"smart-touch-live-modal"},[e("div",{staticClass:"smart-touch-live",attrs:{id:`stl-video-container-${t.id}`}})])])},kt=[],xt=s(7441),Lt=s.n(xt),$t={props:{x:Number,y:Number,url:String,accessToken:String,id:String},directives:{ClickOutside:Lt()},name:"SmartTouchLive",mounted(){this.popupItem=this.$el},data(){return{videoVis:!1}},watch:{},computed:{},methods:{createPlyr(){this.plyr=new(nt().EZUIKitPlayer)({id:`stl-video-container-${this.id}`,accessToken:this.accessToken,url:this.url,width:(0,D.Zk)(180),height:(0,D.Zk)(180),themeData:at.dg}),this.$bus.$emit(D.r1.CLOSE_VIDEO,!1)},toggleModal(t){this.videoVis=t===D.i_?!this.videoVis:t,this.plyr||this.createPlyr(),this.videoVis?(this.plyr.play(),this.$bus.$emit(D.r1.CLOSE_VIDEO,!1)):this.plyr.stop()?.then((()=>{this.$bus.$emit(D.r1.REOPEN_VIDEO,!1)}))},closeModal(){this.videoVis=!1,this.plyr?.stop()?.then((()=>{this.$bus.$emit(D.r1.REOPEN_VIDEO,!1)}))}}},Bt=$t,Et=(0,u.Z)(Bt,It,kt,!1,null,"40944031",null),Ot=Et.exports,Vt=a["default"].extend({timer:null,name:"SmartTouchContent",components:{SmartTouchLive:Ot},props:{cameras:Array},computed:{},data:()=>({active:-1,poss:[{x:20,y:20},{x:80,y:10},{x:50,y:10}]}),methods:{},watch:{},mounted(){},destroyed(){}}),Zt=Vt,Nt=(0,u.Z)(Zt,Tt,wt,!1,null,"bde4643e",null),Mt=Nt.exports,Ht=s(1333),Dt=s(8291),Rt=s(5813);const{mapState:Pt,mapActions:Wt}=(0,Rt._p)("smarttouch/");var Jt=a["default"].extend({name:"SmartTouch",components:{AdaptSmartTouch:d,GreenHouseSelect:b,WeatherList:T,SmartTouchBtns:U,SmartTouchInfo:At,SmartTouchContent:Mt},computed:{...Pt(["cameras","smartTouchInfoBtnsActive","smartTouchActive","weatherList","greenHouseList","smartTouchInfoBtns","options","controlList"])},mounted(){const{[D.id]:t,[D.Qj]:e}=D.WL.getItems([D.id,D.Qj]);t&&e?this.fetchLogin({username:t,password:e}).then((t=>{const{isLogin:e}=t?.user||{};e?this.fetchHome():this.$router.replace({path:"/loginView"})})):this.$router.replace({path:"/loginView"})},methods:{...(0,Rt.nv)({fetchLogin:Dt.yv}),...Wt({handleActive:Ht.xp,fetchHome:Ht.Lm,handleGreenHouseActive:Ht.S0}),handleGreenHouseChange(t){this.handleGreenHouseActive(t)}}}),Ut=Jt,Kt=(0,u.Z)(Ut,i,n,!1,null,"38358a90",null),Gt=Kt.exports},853:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAATCAYAAAAeVmTJAAAAAXNSR0IArs4c6QAAAWBJREFUSEvFlk0rRVEUhp9XFFO/QJKMDETSxcDM0MxHkpJSpBgpM2WmRCkpSSh/wIgRGYiBDAwkv+EyMPDxautc3U7nfnTqOme41nrXes7au7W2AGzPA5NAM/ARbCm/euAdOJe0XCmH7TlgWhHAdiVBCv+ppNFSOtv7ASD4A8Qj0JGiSDWSdklP8UDbu8BsZM8HiBegpZqMKWIGJV0W62xvAotFtrdad6JX0k2hoO0tYCH2M/8HYXsNWE3o5v9A2J4B9kocZ80heiTd2j4CJrKC6JZ0Z/swmkNJHDXvRAHibyZkcScKEAfAVNbHcQyMZwXxOydsrwDrWUM0AifASBZ3Ij4xz4DhpIn5DLSm2AvVSAYkXcV2xwUwFN8dYcu1VZMxRUynpIeELRrAcpH9NSywDWApRYFKknugS9J3UqDta6Cv8J5oAHaAfqAJ+KqUvYy/DvgEQnfHJOXL5YreFbkfkOe+ouRbgwYAAAAASUVORK5CYII="}}]);