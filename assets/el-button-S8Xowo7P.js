import{k as f,aK as K,ab as j,ac as T,r as U,Q,bA as M,x as O,a7 as R,C as z,bB as W,y as X,j as $,bC as Y,z as _,o as b,f as y,w as h,c as N,F as q,A as B,S as i,Y as I,W as x,aQ as C,X as E,U as H,a1 as G,aP as J,a as L,aN as P,a2 as Z,bn as tt}from"./index-C5s8F-_r.js";import{u as ot}from"./index-0qsWRH-7.js";import{u as et}from"./use-global-config-Yrj5ys2j.js";import{u as at}from"./use-form-item-DnOdzJYD.js";const F=Symbol("buttonGroupContextKey"),nt=(t,r)=>{ot({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>t.type==="text"));const a=K(F,void 0),e=et("button"),{form:l}=at(),s=j(f(()=>a==null?void 0:a.size)),o=T(),c=U(),u=Q(),m=f(()=>t.type||(a==null?void 0:a.type)||""),v=f(()=>{var n,p,g;return(g=(p=t.autoInsertSpace)!=null?p:(n=e.value)==null?void 0:n.autoInsertSpace)!=null?g:!1}),k=f(()=>t.tag==="button"?{ariaDisabled:o.value||t.loading,disabled:o.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),S=f(()=>{var n;const p=(n=u.default)==null?void 0:n.call(u);if(v.value&&(p==null?void 0:p.length)===1){const g=p[0];if((g==null?void 0:g.type)===M){const A=g.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(A.trim())}}return!1});return{_disabled:o,_size:s,_type:m,_ref:c,_props:k,shouldAddSpace:S,handleClick:n=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",n)}}},st=["default","primary","success","warning","info","danger","text",""],lt=["button","submit","reset"],V=O({size:R,disabled:Boolean,type:{type:String,values:st,default:""},icon:{type:z},nativeType:{type:String,values:lt,default:"button"},loading:Boolean,loadingIcon:{type:z,default:()=>W},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:X([String,Object]),default:"button"}}),rt={click:t=>t instanceof MouseEvent};function d(t,r=20){return t.mix("#141414",r).toString()}function it(t){const r=T(),a=$("button");return f(()=>{let e={},l=t.color;if(l){const s=l.match(/var\((.*?)\)/);s&&(l=window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));const o=new Y(l),c=t.dark?o.tint(20).toString():d(o,20);if(t.plain)e=a.cssVarBlock({"bg-color":t.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?d(o,50):o.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":c,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":c}),r.value&&(e[a.cssVarBlockName("disabled-bg-color")]=t.dark?d(o,90):o.tint(90).toString(),e[a.cssVarBlockName("disabled-text-color")]=t.dark?d(o,50):o.tint(50).toString(),e[a.cssVarBlockName("disabled-border-color")]=t.dark?d(o,80):o.tint(80).toString());else{const u=t.dark?d(o,30):o.tint(30).toString(),m=o.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(e=a.cssVarBlock({"bg-color":l,"text-color":m,"border-color":l,"hover-bg-color":u,"hover-text-color":m,"hover-border-color":u,"active-bg-color":c,"active-border-color":c}),r.value){const v=t.dark?d(o,50):o.tint(50).toString();e[a.cssVarBlockName("disabled-bg-color")]=v,e[a.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,e[a.cssVarBlockName("disabled-border-color")]=v}}}return e})}const ct=_({name:"ElButton"}),ut=_({...ct,props:V,emits:rt,setup(t,{expose:r,emit:a}){const e=t,l=it(e),s=$("button"),{_ref:o,_size:c,_type:u,_disabled:m,_props:v,shouldAddSpace:k,handleClick:S}=nt(e,a),w=f(()=>[s.b(),s.m(u.value),s.m(c.value),s.is("disabled",m.value),s.is("loading",e.loading),s.is("plain",e.plain),s.is("round",e.round),s.is("circle",e.circle),s.is("text",e.text),s.is("link",e.link),s.is("has-bg",e.bg)]);return r({ref:o,size:c,type:u,disabled:m,shouldAddSpace:k}),(n,p)=>(b(),y(C(n.tag),H({ref_key:"_ref",ref:o},i(v),{class:i(w),style:i(l),onClick:i(S)}),{default:h(()=>[n.loading?(b(),N(q,{key:0},[n.$slots.loading?B(n.$slots,"loading",{key:0}):(b(),y(i(I),{key:1,class:x(i(s).is("loading"))},{default:h(()=>[(b(),y(C(n.loadingIcon)))]),_:1},8,["class"]))],64)):n.icon||n.$slots.icon?(b(),y(i(I),{key:1},{default:h(()=>[n.icon?(b(),y(C(n.icon),{key:0})):B(n.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),n.$slots.default?(b(),N("span",{key:2,class:x({[i(s).em("text","expand")]:i(k)})},[B(n.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var dt=G(ut,[["__file","button.vue"]]);const bt={size:V.size,type:V.type},ft=_({name:"ElButtonGroup"}),mt=_({...ft,props:bt,setup(t){const r=t;J(F,L({size:P(r,"size"),type:P(r,"type")}));const a=$("button");return(e,l)=>(b(),N("div",{class:x(i(a).b("group"))},[B(e.$slots,"default")],2))}});var D=G(mt,[["__file","button-group.vue"]]);const kt=Z(dt,{ButtonGroup:D});tt(D);export{kt as E};
