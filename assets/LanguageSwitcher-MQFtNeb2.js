import{c as r,r as d,u as h,aO as l,j as e,a1 as m}from"./index-BP9cMd7C.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],k=r("moon",_);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],x=r("sun",v),j="/assets/appraisalsuite-logo-light-M8h-E5WA.png",b="/assets/appraisalsuite-logo-dark-CHIFbM0r.png",L=({placement:g="menu",hint:n=""})=>{const o=d.useId(),{t:s}=h("common"),c=l(a=>a.locale),t=l(a=>a.changing),p=l(a=>a.error),i=l(a=>a.setLocale),u=[{value:"en",label:s("english")},{value:"fr",label:s("french")}];return e.jsxs("div",{className:`ap-language ap-language--${g}`,title:n||void 0,children:[e.jsxs("div",{className:"ap-language__caption",children:[e.jsx(m,{size:15,"aria-hidden":"true"}),e.jsx("span",{children:s("language")})]}),e.jsx("div",{className:"ap-language__choices",role:"group","aria-label":s("changeLanguage"),"aria-describedby":n?o:void 0,children:u.map(a=>e.jsx("button",{type:"button",className:`ap-language__option ${c===a.value?"ap-language__option--current":""}`,onClick:()=>{i(a.value)},"aria-pressed":c===a.value,"aria-busy":t,children:a.label},a.value))}),e.jsx("span",{className:"ap-language__sr-only",role:"status",children:t?s("languageLoading"):""}),n&&e.jsx("span",{id:o,className:"ap-language__sr-only",children:n}),p&&e.jsx("small",{className:"ap-language__error",role:"alert",children:s("languageSaveFailed")})]})};export{L,k as M,x as S,b as a,j as b};
