import{o as m,c as b,b as u,W as d,r as E,d as n,w as s,g as r,F,a3 as D,a4 as C,a5 as w,a6 as B,f as $}from"./index-B8eLAHPn.js";import{s as h,E as I}from"./index-DkRa6EV5.js";import"./el-sub-menu-l0sNRNKZ.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-BB_Ol6Sd.js";import"./scroll-phxrFWva.js";const v={name:"FlipClock",data(){return{isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}},props:{frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:600}},methods:{_textClass(e){return"number"+e},_flip(e,t,l){if(this.isFlipping)return!1;this.frontTextFromData=t,this.backTextFromData=l,this.flipType=e,this.isFlipping=!0,setTimeout(()=>{this.isFlipping=!1,this.frontTextFromData=l},this.duration)},flipDown(e,t){this._flip("down",e,t)},flipUp(e,t){this._flip("up",e,t)},setFront(e){this.frontTextFromData=e},setBack(e){this.backTextFromData=e}},created(){this.frontTextFromData=this.frontText,this.backTextFromData=this.backText}};function A(e,t,l,i,o,f){return m(),b("div",{class:d(["M-Flipper",[o.flipType,{go:o.isFlipping}]])},[u("div",{class:d(["digital front",f._textClass(o.frontTextFromData)])},null,2),u("div",{class:d(["digital back",f._textClass(o.backTextFromData)])},null,2)],2)}const c=g(v,[["render",A]]),S={style:{},class:"father",id:"fullele"},M={class:"FlipClock",id:"clockitself",style:{"background-color":"#141414"}},j={name:"FlipClock",data(){return{timer:null,flipObjs:[]}},components:{Flipper:c},methods:{init(){let e=new Date,t=this.formatDate(new Date(e.getTime()),"hhiiss");for(let l=0;l<this.flipObjs.length;l++)this.flipObjs[l].setFront(t[l])},run(){this.timer=setInterval(()=>{let e=new Date,t=this.formatDate(new Date(e.getTime()-1e3),"hhiiss"),l=this.formatDate(e,"hhiiss");for(let i=0;i<this.flipObjs.length;i++)t[i]!==l[i]&&this.flipObjs[i].flipDown(t[i],l[i])},1e3)},formatDate(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));let l={"m+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"i+":e.getMinutes(),"s+":e.getSeconds()};for(let i in l)if(new RegExp(`(${i})`).test(t)){let o=l[i]+"";t=t.replace(RegExp.$1,RegExp.$1.length===1?o:this.padLeftZero(o))}return t},padLeftZero(e){return("00"+e).substr(e.length)}},mounted(){this.flipObjs=[this.$refs.flipperHour1,this.$refs.flipperHour2,this.$refs.flipperMinute1,this.$refs.flipperMinute2,this.$refs.flipperSecond1,this.$refs.flipperSecond2],this.init(),this.run()}},O=Object.assign(j,{setup(e){const t=E("2-1");function l(){document.getElementById("clockitself").setAttribute("style","background-color:#141414"),document.getElementById("fullele").setAttribute("style","background-color:#141414")}function i(){document.getElementById("clockitself").setAttribute("style","background-color:#93b5cf"),document.getElementById("fullele").setAttribute("style","background-color:#93b5cf")}function o(){document.getElementById("clockitself").setAttribute("style","background-color:#142334"),document.getElementById("fullele").setAttribute("style","background-color:#142334")}function f(){document.getElementById("clockitself").setAttribute("style","background-color:#f7f7f7"),document.getElementById("fullele").setAttribute("style","background-color:#f7f7f7")}function p(){document.getElementById("clockitself").setAttribute("style","background-color:#b6a476"),document.getElementById("fullele").setAttribute("style","background-color:#b6a476")}function k(){if(h.isEnabled){let _=document.getElementById("fullele");h.toggle(_)}}return(_,R)=>{const a=D,x=C,y=w,T=I;return m(),b(F,null,[u("div",S,[u("div",M,[n(c,{ref:"flipperHour1"},null,512),n(c,{ref:"flipperHour2"},null,512),n(c,{ref:"flipperMinute1"},null,512),n(c,{ref:"flipperMinute2"},null,512),n(c,{ref:"flipperSecond1"},null,512),n(c,{ref:"flipperSecond2"},null,512)])]),n(T,{position:"bottom",offset:2},{default:s(()=>[n(y,{"default-active":t.value,mode:"horizontal",style:{position:"fixed",bottom:"0px","z-index":"999",width:"100%"}},{default:s(()=>[n(a,{index:"1",style:{},onClick:k},{default:s(()=>[r("全屏")]),_:1}),n(x,null,{title:s(()=>[r("背景")]),default:s(()=>[n(a,{onClick:l,index:"2-1"},{default:s(()=>[r("邃黑")]),_:1}),n(a,{onClick:i,index:"2-2"},{default:s(()=>[r("星蓝")]),_:1}),n(a,{onClick:o,index:"2-3"},{default:s(()=>[r("钢青")]),_:1}),n(a,{onClick:f,index:"2-4"},{default:s(()=>[r("雅白")]),_:1}),n(a,{onClick:p,index:"2-5"},{default:s(()=>[r("尘灰")]),_:1})]),_:1})]),_:1},8,["default-active"])]),_:1})],64)}}}),N={name:"app",components:{FlipClock:O}};function H(e,t,l,i,o,f){const p=B("FlipClock");return m(),$(p)}const Y=g(N,[["render",H]]);export{Y as default};
