import{k as o,bI as I,L as f,aK as d,bJ as p,bK as E,r as v,K,n as L,G as y,aN as F,bL as _}from"./index-B8eLAHPn.js";const U=["class","style"],b=/^on[A-Z]/,w=(e={})=>{const{excludeListeners:u=!1,excludeKeys:n}=e,a=o(()=>((n==null?void 0:n.value)||[]).concat(U)),s=f();return s?o(()=>{var l;return I(Object.entries((l=s.proxy)==null?void 0:l.$attrs).filter(([r])=>!a.value.includes(r)&&!(u&&b.test(r))))}):o(()=>({}))},A=()=>{const e=d(p,void 0),u=d(E,void 0);return{form:e,formItem:u}},R=(e,{formItemContext:u,disableIdGeneration:n,disableIdManagement:a})=>{n||(n=v(!1)),a||(a=v(!1));const s=v();let l;const r=o(()=>{var t;return!!(!(e.label||e.ariaLabel)&&u&&u.inputIds&&((t=u.inputIds)==null?void 0:t.length)<=1)});return K(()=>{l=L([F(e,"id"),n],([t,i])=>{const c=t??(i?void 0:y().value);c!==s.value&&(u!=null&&u.removeInputId&&(s.value&&u.removeInputId(s.value),!(a!=null&&a.value)&&!i&&c&&u.addInputId(c)),s.value=c)},{immediate:!0})}),_(()=>{l&&l(),u!=null&&u.removeInputId&&s.value&&u.removeInputId(s.value)}),{isLabeledByFormItem:r,inputId:s}};export{w as a,R as b,A as u};
