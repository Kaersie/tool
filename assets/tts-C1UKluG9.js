import{r,o as h,f as v,w as i,d as c,g as m,b as t}from"./index-C5s8F-_r.js";/* empty css                */import{E as f}from"./el-button-S8Xowo7P.js";import{E as g}from"./el-input-C-ZnwRPG.js";import{E as p}from"./el-message-Cql_QLl8.js";import{E as x}from"./index-cQRbi1Hy.js";import"./index-0qsWRH-7.js";import"./use-global-config-Yrj5ys2j.js";import"./index-9mPCBuOW.js";import"./index-dQ_Tq-ly.js";import"./use-form-item-DnOdzJYD.js";import"./event-BB_Ol6Sd.js";const w=t("h2",{style:{margin:"10px"}},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{d:"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"})]),m(" TTS 文本朗读")],-1),V=t("br",null,null,-1),b=t("br",null,null,-1),E=["src"],y=t("br",null,null,-1),z=t("br",null,null,-1),B=t("br",null,null,-1),G={__name:"tts",setup(T){const l=r(""),a=r("");function u(){fetch("https://api.vore.top/api/TTS?text="+l.value).then(n=>n.json().then(e=>{const{data:{download:s,info:o}}=e;a.value="https"+s.slice(4),o=="生成成功"?p({message:o,type:"success"}):p.error(o)}))}return(n,e)=>{const s=g,o=f,_=x;return h(),v(_,{style:{margin:"30px"}},{default:i(()=>[w,c(s,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=d=>l.value=d),rows:8,type:"textarea",style:{width:"80%",margin:"20px"},placeholder:"朗读内容....."},null,8,["modelValue"]),V,c(o,{style:{margin:"20px"},onClick:u,bg:"",text:""},{default:i(()=>[m("生成")]),_:1}),b,t("audio",{controls:"",src:a.value,style:{margin:"20px",width:"80%"}},null,8,E),y,z,B]),_:1})}}};export{G as default};
