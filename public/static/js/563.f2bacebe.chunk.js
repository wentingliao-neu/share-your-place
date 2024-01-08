"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[563],{563:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(433),n=a(791),s=a(25),i=a(975),l=a(101),o=a(573),c=a(822),d=a(35),u=a(301),p=a(641),h=a(784),m=(a(238),a(184));function v(){const{isLoading:e,error:t,sendRequest:a,clearError:v}=(0,d.x)(),f=(0,n.useContext)(h.V),[x,g]=(0,r.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),j=(0,s.k6)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{error:t,onClear:v}),(0,m.jsxs)("form",{className:"place-form",onSubmit:async function(e){e.preventDefault();try{const e=new FormData;e.append("title",x.inputs.title.value),e.append("description",x.inputs.description.value),e.append("address",x.inputs.address.value),e.append("image",x.inputs.image.value),await a("https://mern-project-731ce5afc606.herokuapp.com/api/places","POST",e,{Authorization:"Bearer "+f.token}),j.push("/")}catch(t){}},children:[e&&(0,m.jsx)(c.Z,{asOverlay:!0}),(0,m.jsx)(i.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,l.hg)()],errorText:"Please enter a valid title.",onInput:g}),(0,m.jsx)(i.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,l.CP)(5)],errorText:"Please enter a valid description(at least 5 characters).",onInput:g}),(0,m.jsx)(i.Z,{id:"address",element:"input",label:"Address",validators:[(0,l.hg)()],errorText:"Please enter a valid address.",onInput:g}),(0,m.jsx)(p.Z,{id:"image",onInput:g,errorText:"Please provide an image."}),(0,m.jsx)(u.Z,{type:"submit",disabled:!x.isValid,children:"ADD PLACE"})]})]})}},641:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(791),n=a(301),s=a(184);function i(e){const[t,a]=(0,r.useState)(),[i,l]=(0,r.useState)(),[o,c]=(0,r.useState)(!1),d=(0,r.useRef)();return(0,r.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{l(e.result)},e.readAsDataURL(t)}),[t]),(0,s.jsxs)("div",{className:"form-control",children:[(0,s.jsx)("input",{id:e.id,style:{display:"none"},ref:d,type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){let r,n=o;t.target.files||1===t.target.files.length?(r=t.target.files[0],a(r),c(!0),n=!0):(c(!1),n=!1),e.onInput(e.id,r,n)}}),(0,s.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,s.jsx)("div",{className:"image-upload__preview",children:i?(0,s.jsx)("img",{src:i,alt:"preview"}):(0,s.jsx)("p",{children:"Please pick an image."})}),(0,s.jsx)(n.Z,{type:"button",onClick:function(){d.current.click()},children:"PICK IMAGE"})]}),!o&&(0,s.jsx)("p",{children:e.errorText})]})}},975:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(791),n=a(101),s=a(184);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,n.Gu)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},l=e=>{const[t,a]=(0,r.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:n,onInput:l}=e,{value:o,isValid:c}=t;(0,r.useEffect)((()=>{l(n,o,c)}),[n,o,c,l]);const d=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},p="input"===e.element?(0,s.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:u,value:t.value}):(0,s.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:u,value:t.value});return(0,s.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,s.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,s.jsx)("p",{children:e.errorText})]})}},573:(e,t,a)=>{a.d(t,{Z:()=>i});a(791);var r=a(938),n=a(301),s=a(184);const i=e=>(0,s.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,s.jsx)(n.Z,{onClick:e.onClear,children:"Okay"}),children:(0,s.jsx)("p",{children:e.error})})},938:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(164),n=a(549),s=a(327),i=a(184);const l=e=>{const t=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return r.createPortal(t,document.getElementById("modal-hook"))};function o(e){return(0,i.jsxs)(i.Fragment,{children:[e.show&&(0,i.jsx)(s.Z,{onClick:e.onCancel}),(0,i.jsx)(n.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(l,{...e})})]})}},433:(e,t,a)=>{a.d(t,{c:()=>s});var r=a(791);const n=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const r in e.inputs)e.inputs[r]&&(a=a&&(r===t.inputId?t.isValid:e.inputs[r].isValid));return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}};function s(e,t){const[a,s]=(0,r.useReducer)(n,{inputs:e,isValid:t});return[a,(0,r.useCallback)(((e,t,a)=>{s({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,r.useCallback)(((e,t)=>{s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},35:(e,t,a)=>{a.d(t,{x:()=>n});var r=a(791);function n(){const[e,t]=(0,r.useState)(!1),[a,n]=(0,r.useState)(null),s=(0,r.useRef)([]),i=(0,r.useCallback)((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const o=new AbortController;s.current.push(o);try{const a=await fetch(e,{method:r,body:i,headers:l,signal:o.signal}),n=await a.json();if(s.current=s.current.filter((e=>e!==o)),!a.ok)throw new Error(n.message);return t(!1),n}catch(c){if("The user aborted a request."!==c.message)throw n(c.message),t(!1),a}}),[a]);return(0,r.useEffect)((()=>()=>{try{s.current.forEach((e=>e.abort()))}catch(e){}}),[]),{isLoading:e,error:a,sendRequest:i,clearError:function(){n(null)}}}},101:(e,t,a)=>{a.d(t,{CP:()=>o,Gu:()=>d,Ox:()=>c,hg:()=>l});const r="REQUIRE",n="MINLENGTH",s="MAXLENGTH",i="EMAIL",l=()=>({type:r}),o=e=>({type:n,val:e}),c=()=>({type:i}),d=(e,t)=>{let a=!0;for(const l of t)l.type===r&&(a=a&&e.trim().length>0),l.type===n&&(a=a&&e.trim().length>=l.val),l.type===s&&(a=a&&e.trim().length<=l.val),"MIN"===l.type&&(a=a&&+e>=l.val),"MAX"===l.type&&(a=a&&+e<=l.val),l.type===i&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},238:()=>{}}]);
//# sourceMappingURL=563.f2bacebe.chunk.js.map