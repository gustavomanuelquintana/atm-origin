(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(16),r=n.n(i),l=(n(40),n(41),n(21)),o=n(5),d=n(26),j=n.p+"static/media/logo.acb865cd.svg";n(42);var u=function(){return Object(c.jsxs)(d.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(c.jsx)("img",{className:"Logo-navBar",width:"180",src:j}),Object(c.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(d.a.Collapse,{id:"basic-navbar-nav"})]})},b=(n(45),n(14)),m=n(9),h=n(7),x=(n(46),n(47),n.p+"static/media/visaLogo.6713080c.png");n(48);var O=function(e){var t=e.formatNumber,n=e.onChange;return Object(c.jsx)("div",{className:"inputField",children:Object(c.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return n(e.target.value)}})})};var v=function(e){var t=e.var1,n=e.setInputValue;return Object(c.jsx)(b.a,{fluid:"md",children:Object(c.jsx)(m.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{className:"credit-card",children:[Object(c.jsx)("div",{className:"credit-card__logo",children:Object(c.jsx)("img",{className:"logo",src:x,width:"50"})}),Object(c.jsx)("div",{className:"credit-card__number",children:Object(c.jsx)(O,{formatNumber:function(e){var t,n=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),c=n&&n[0]||"",a=[],s=0;for(t=c.length;s<t;s+=4)a.push(c.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return n("numberCard",e)}})}),Object(c.jsxs)("div",{className:"credit-card__info",children:[Object(c.jsxs)("div",{className:"credit-card__info_name",children:[Object(c.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(c.jsx)("div",{children:"Gustavo Quintana"})]}),Object(c.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(c.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(c.jsx)("div",{children:"05/2025"})]})]})]})})})})},f=n(15);n(49);var N=function(){return Object(c.jsx)("div",{className:"submitButton",children:Object(c.jsxs)(l.b,{to:"/sectionpin",children:[" ",Object(c.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:function(){},children:"Ingresar Al sistema"})]})})},g=function(e){var t=e.width;return Object(c.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(c.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},p=function(e){var t=e.width,n=e.color;return Object(c.jsxs)("svg",{width:t,color:n,viewBox:"0 0 16 16",fill:"currentColor",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(c.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]})},C=n(17),_=n.n(C),k=n(22),w=n(18),A=s.a.createContext([]),y=function(){return Object(a.useContext)(A)},S=function(e){var t=e.children,n=(e.defaultCart,Object(a.useState)("")),s=Object(w.a)(n,2),i=s[0],r=s[1],l=Object(a.useState)(""),o=Object(w.a)(l,2),d=o[0],j=o[1],u=Object(a.useState)({isValid:!1,id:null,item:{}}),b=Object(w.a)(u,2),m=b[0],h=b[1],x=Object(a.useState)(!1),O=Object(w.a)(x,2),v=O[0],f=O[1],N=Object(a.useState)(!1),g=Object(w.a)(N,2),p=g[0],C=g[1];function y(){return S.apply(this,arguments)}function S(){return(S=Object(k.a)(_.a.mark((function e(){var t,n,c,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:i},e.next=3,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).length>0?0===c[0].estado?(a={item:c[0].estado},h(a),console.log(c[0].estado),C(!0)):1===c[0].estado&&(console.log("Probando si la tarjeta est\xe1 activa"),h({isValid:!0,id:"id",item:c})):0==c.length&&f(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){y()}),[]);return Object(c.jsx)(A.Provider,{value:{doNumber:y,AddNumber:function(e){var t=i;t.toString().length+1<=16&&r(0==t?e.target.value:t+e.target.value)},AddNumberPin:function(e){var t=d;t.toString().length+1<=4&&j(0==t?e.target.value:t+e.target.value)},handleDelete:function(e){0!=i&&r(i.substring(0,i.length-1)),j(d.substring(0,d.length-1))},setInputValue:function(e,t){(t=t.trim()).length},IngresarAlsistema:function(e){console.log(m)},test:function(){console.log(m),console.log(m.item),console.log(m.item[0].estado)},num:i,numPin:d,show:v,setShow:f,showBloked:p,setShowBloked:C,dateCard:m},children:t})};function P(){var e=y(),t=e.doNumber,n=e.AddNumber,a=e.handleDelete,s=e.IngresarAlsistema,i=e.num,r=e.show,l=e.setShow,o=e.setShowBloked,d=e.showBloked,j=e.dateCard;return Object(c.jsxs)(m.a,{className:"mt-2",children:[Object(c.jsx)(h.a,{sm:"4",children:Object(c.jsx)(v,{var1:i,doNumber:t})}),Object(c.jsx)(h.a,{sm:"8",children:Object(c.jsx)("div",{className:"calcShow",children:Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:n,value:"1",className:"number",children:"1"}),Object(c.jsx)("button",{onClick:n,value:"2",className:"number",children:"2"}),Object(c.jsx)("button",{onClick:n,value:"3",className:"number",children:"3"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:n,value:"4",className:"number",children:"4"}),Object(c.jsx)("button",{onClick:n,value:"5",className:"number",children:"5"}),Object(c.jsx)("button",{onClick:n,value:"6",className:"number",children:"6"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:n,value:"7",className:"number",children:"7"}),Object(c.jsx)("button",{onClick:n,value:"8",className:"number",children:"8"}),Object(c.jsx)("button",{onClick:n,value:"9",className:"number",children:"9"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:a,value:"delete",className:"number",children:"<"}),Object(c.jsx)("button",{onClick:n,value:"0",className:"number",children:"0"}),Object(c.jsx)("button",{onClick:t,className:"number ok",children:"Aceptar"})]})]})})}),Object(c.jsxs)(h.a,{sm:"12",children:[j.isValid&&Object(c.jsx)(N,{Text:"Ingresar al sistema",doNumber:s}),0===j.item&&Object(c.jsxs)(f.a,{className:"toast",onClose:function(){return o(!1)},show:d,delay:4e3,autohide:!0,children:[Object(c.jsxs)(f.a.Header,{children:[Object(c.jsx)(g,{width:"20px"}),Object(c.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(c.jsxs)(f.a.Body,{children:["card existing but blocked",Object(c.jsx)(p,{color:"red",width:"20px"})]})]}),!j.isValid&&Object(c.jsxs)(f.a,{className:"toast",onClose:function(){return l(!1)},show:r,delay:4e3,autohide:!0,children:[Object(c.jsxs)(f.a.Header,{children:[Object(c.jsx)(g,{width:"20px"}),Object(c.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(c.jsxs)(f.a.Body,{children:["Card invalid ",Object(c.jsx)(p,{color:"red",width:"20px"})]})]})]})]})}var V=function(e){return e.titulo,Object(c.jsxs)(b.a,{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(h.a,{sm:"12",children:Object(c.jsx)("div",{className:"text-center pt-3",children:Object(c.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(c.jsx)(m.a,{className:"mt-5",children:Object(c.jsx)(h.a,{sm:"12",children:Object(c.jsx)(P,{})})})]})};n(54),n(55),n(56),n(57);var B=function(e){var t=e.formatNumber,n=e.onChange;return Object(c.jsx)("div",{className:"inputField",children:Object(c.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return n(e.target.value)}})})};var I=function(e){var t=e.var1,n=e.setInputValue;return Object(c.jsx)(b.a,{fluid:"md",children:Object(c.jsx)(m.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{className:"credit-cardPin",children:[Object(c.jsx)("div",{className:"credit-cardPin__logo",children:Object(c.jsx)("img",{className:"logo",src:x,width:"50"})}),Object(c.jsx)("div",{className:"credit-cardPin__number",children:Object(c.jsx)(B,{formatNumber:function(e){var t,n=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),c=n&&n[0]||"",a=[],s=0;for(t=c.length;s<t;s+=4)a.push(c.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return n("numberCard",e)}})}),Object(c.jsxs)("div",{className:"credit-cardPin__info",children:[Object(c.jsxs)("div",{className:"credit-cardPin__info_name",children:[Object(c.jsx)("div",{className:"credit-cardPin__info_label",children:"Globant S.A"}),Object(c.jsx)("div",{children:"Gustavo Quintana"})]}),Object(c.jsxs)("div",{className:"credit-cardPin__info_expiry",children:[Object(c.jsx)("div",{className:"credit-cardPin__info_label",children:"Venc:"}),Object(c.jsx)("div",{children:"05/2025"})]})]})]})})})})};function T(){var e=y(),t=e.dateCard,n=e.numPin,s=e.AddNumberPin,i=e.handleDelete;function r(){return l.apply(this,arguments)}function l(){return(l=Object(k.a)(_.a.mark((function e(){var c,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/isValidatePin",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.item,numberPin:n})});case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){r()}),[]);return Object(c.jsxs)(m.a,{className:"mt-2",children:[Object(c.jsx)(h.a,{sm:"4",children:Object(c.jsx)(I,{var1:n})}),Object(c.jsx)(h.a,{sm:"8",children:Object(c.jsx)("div",{className:"calcShow",children:Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:s,value:"1",className:"number",children:"1"}),Object(c.jsx)("button",{onClick:s,value:"2",className:"number",children:"2"}),Object(c.jsx)("button",{onClick:s,value:"3",className:"number",children:"3"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:s,value:"4",className:"number",children:"4"}),Object(c.jsx)("button",{onClick:s,value:"5",className:"number",children:"5"}),Object(c.jsx)("button",{onClick:s,value:"6",className:"number",children:"6"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:s,value:"7",className:"number",children:"7"}),Object(c.jsx)("button",{onClick:s,value:"8",className:"number",children:"8"}),Object(c.jsx)("button",{onClick:s,value:"9",className:"number",children:"9"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:i,value:"delete",className:"number",children:"<"}),Object(c.jsx)("button",{onClick:s,value:"0",className:"number",children:"0"}),Object(c.jsx)("button",{onClick:r,className:"number ok",children:"Ing"}),Object(c.jsx)("button",{onClick:function(){console.log(t)},className:"number ok",children:"test"})]})]})})}),Object(c.jsx)(h.a,{sm:"12",children:Object(c.jsx)("button",{className:"submitButton",class:"btn btn-primary",children:"Probando"})})]})}var M=function(e){return e.titulo,Object(c.jsxs)(b.a,{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(h.a,{sm:"12",children:Object(c.jsx)("div",{className:"text-center pt-3",children:Object(c.jsx)("h2",{children:"ATM - Cajero Virtual - Pin"})})})}),Object(c.jsx)(m.a,{className:"mt-5",children:Object(c.jsx)(h.a,{sm:"12",children:Object(c.jsx)(T,{})})})]})};var z=function(){return Object(c.jsx)(S,{defaultCart:[],children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",children:Object(c.jsx)(V,{})}),Object(c.jsx)(o.a,{exact:!0,path:"/sectionpin",children:Object(c.jsx)(M,{})})]})]})})},F=(n(58),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))});r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),F()}},[[59,1,2]]]);
//# sourceMappingURL=main.b36be119.chunk.js.map