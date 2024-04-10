"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[227],{227:(e,n,s)=>{s.r(n),s.d(n,{default:()=>p});var r=s(791),t=s(848),a=s(301),c=s(938),o=s(184);const l=e=>{const{center:n,zoom:s}=e;(0,r.useEffect)((()=>{const r=new window.google.maps.Map(t.current,{center:n,zoom:s});new window.google.maps.Marker({position:e.center,map:r})}),[e.center,e.zoom,n,s]);const t=(0,r.useRef)();return(0,o.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style})};var i=s(573),d=s(822),h=s(784),u=s(35);function m(e){let{place:n,onDelete:s}=e;const m=(0,r.useContext)(h.V),{isLoading:x,error:j,sendRequest:p,clearError:f}=(0,u.x)(),[C,g]=(0,r.useState)(!1),[v,E]=(0,r.useState)(!1),w=()=>g(!1);function N(){E(!1)}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{error:j,onClear:f}),(0,o.jsx)(c.Z,{show:C,onCancel:w,header:n.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,o.jsx)(a.Z,{onClick:w,children:"CLOSE"}),children:(0,o.jsx)("div",{className:"map-container",children:(0,o.jsx)(l,{center:n.location,zoom:16})})}),(0,o.jsx)(c.Z,{show:v,onCancel:N,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{reverse:!0,onClick:N,children:"CANCEL"}),(0,o.jsx)(a.Z,{danger:!0,onClick:async function(){E(!1),await p("".concat("https://share-your-place-orpin.vercel.app/api","/places/").concat(n.id),"DELETE",null,{Authorization:"Bearer "+m.token}),s(n.id)},children:"DELETE"})]}),children:(0,o.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,o.jsx)("li",{className:"place-item",children:(0,o.jsxs)(t.Z,{className:"place-item__content",children:[x&&(0,o.jsx)(d.Z,{asOverlay:!0}),(0,o.jsx)("div",{className:"place-item__image",children:(0,o.jsx)("img",{src:n.image,alt:n.title})}),(0,o.jsxs)("div",{className:"place-item__info",children:[(0,o.jsx)("h2",{children:n.title}),(0,o.jsx)("h3",{children:n.address}),(0,o.jsx)("p",{children:n.description})]}),(0,o.jsxs)("div",{className:"place-item__actions",children:[(0,o.jsx)(a.Z,{inverse:!0,onClick:()=>g(!0),children:"VIEW ON MAP"}),m.userId===n.creator&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{to:"/places/".concat(n.id),children:"EDIT"}),(0,o.jsx)(a.Z,{danger:!0,onClick:function(){E(!0)},children:"DELETE"})]})]})]})})]})}function x(e){return 0===e.items.length?(0,o.jsx)("div",{className:"place-list center",children:(0,o.jsxs)(t.Z,{children:[(0,o.jsx)("h2",{children:"No places found. Maybe Create one?"}),(0,o.jsx)(a.Z,{to:"/places/new",children:"Share Place"})]})}):(0,o.jsx)("ul",{className:"place-list",children:e.items.map((n=>(0,o.jsx)(m,{place:n,onDelete:e.onDeletePlace},n.id)))})}var j=s(25);const p=()=>{const e=(0,j.UO)().userId,{isLoading:n,error:s,sendRequest:t,clearError:a}=(0,u.x)(),[c,l]=(0,r.useState)();return(0,r.useEffect)((()=>{!async function(){try{const n=await t("".concat("https://share-your-place-orpin.vercel.app/api","/places/user/").concat(e));l(n.places)}catch(n){}}()}),[t,e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{error:s,onClear:a}),n&&(0,o.jsx)("div",{className:"center",children:(0,o.jsx)(d.Z,{})}),!n&&c&&(0,o.jsx)(x,{items:c,onDeletePlace:function(e){l((n=>n.filter((n=>n.id!==e))))}})]})}},848:(e,n,s)=>{s.d(n,{Z:()=>t});s(791);var r=s(184);const t=e=>(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},573:(e,n,s)=>{s.d(n,{Z:()=>c});s(791);var r=s(938),t=s(301),a=s(184);const c=e=>(0,a.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(t.Z,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})},938:(e,n,s)=>{s.d(n,{Z:()=>l});var r=s(164),t=s(549),a=s(327),c=s(184);const o=e=>{const n=(0,c.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,c.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,c.jsx)("h2",{children:e.header})}),(0,c.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,c.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,c.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return r.createPortal(n,document.getElementById("modal-hook"))};function l(e){return(0,c.jsxs)(c.Fragment,{children:[e.show&&(0,c.jsx)(a.Z,{onClick:e.onCancel}),(0,c.jsx)(t.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(o,{...e})})]})}},35:(e,n,s)=>{s.d(n,{x:()=>t});var r=s(791);function t(){const[e,n]=(0,r.useState)(!1),[s,t]=(0,r.useState)(null),a=(0,r.useRef)([]),c=(0,r.useCallback)((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};n(!0);const l=new AbortController;a.current.push(l);try{const s=await fetch(e,{method:r,body:c,headers:o,signal:l.signal}),t=await s.json();if(a.current=a.current.filter((e=>e!==l)),!s.ok)throw new Error(t.message);return n(!1),t}catch(i){if("The user aborted a request."!==i.message)throw t(i.message),n(!1),s}}),[s]);return(0,r.useEffect)((()=>()=>{try{a.current.forEach((e=>e.abort()))}catch(e){}}),[]),{isLoading:e,error:s,sendRequest:c,clearError:function(){t(null)}}}}}]);
//# sourceMappingURL=227.32dc838f.chunk.js.map