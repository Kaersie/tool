import{r as u,o as _,f,w as p,d as r,g as h,b as t}from"./index-C5s8F-_r.js";/* empty css                */import{E as x}from"./el-button-S8Xowo7P.js";import{E as V}from"./el-input-C-ZnwRPG.js";import{E as s}from"./el-message-Cql_QLl8.js";import{E as b}from"./index-cQRbi1Hy.js";import"./index-0qsWRH-7.js";import"./use-global-config-Yrj5ys2j.js";import"./index-9mPCBuOW.js";import"./index-dQ_Tq-ly.js";import"./use-form-item-DnOdzJYD.js";import"./event-BB_Ol6Sd.js";const g=t("h2",{style:{margin:"10px"}},"成语词典",-1),v=t("br",null,null,-1),E=t("br",null,null,-1),y=t("br",null,null,-1),w=t("br",null,null,-1),B=t("br",null,null,-1),G={__name:"text",setup(k){const n=u(""),o=u("");async function m(){o.value==""?s.error("起码先输入点东西吧..."):fetch("https://api.vore.top/api/idiom?q="+o.value).then(l=>l.json()).then(l=>{const{data:e}=l;e.成语==null?s.error("成语不存在"):(s.success("查询成功"),n.value="成语: "+e.成语+`
 拼音: `+e.拼音+`
 释义: `+e.释义+`
 出处: `+e.出处+`
 例句: `+e.例句)})}return(l,e)=>{const i=V,d=x,c=b;return _(),f(c,{style:{margin:"30px"}},{default:p(()=>[g,r(i,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),style:{width:"30%",margin:"20px"},placeholder:"成语"},null,8,["modelValue"]),v,r(d,{style:{margin:"20px"},onClick:m,bg:"",text:""},{default:p(()=>[h("生成")]),_:1}),E,r(i,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),rows:6,type:"textarea",style:{width:"80%",margin:"20px"},placeholder:"这里会显示结果....."},null,8,["modelValue"]),y,w,B]),_:1})}}};export{G as default};
