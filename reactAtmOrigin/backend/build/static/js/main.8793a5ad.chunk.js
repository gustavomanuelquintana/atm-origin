(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),i=c(17),r=c.n(i),l=(c(40),c(41),c(22)),j=c(5),b=c(26),o=c.p+"static/media/logo.acb865cd.svg";c(42);var d=function(){return Object(n.jsxs)(b.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:o}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(b.a.Collapse,{id:"basic-navbar-nav"})]})},u=(c(45),c(16)),m=c(10),h=c(8),O=c(18),x=c.n(O),v=c(21),N=c(11),g=(c(47),c(48),c.p+"static/media/visaLogo.6713080c.png");c(49);var f=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return c(e.target.value)}})})};c(50);var p=function(e){var t=e.doNumber;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsxs)(l.b,{to:"/sectionpin",children:[" ",Object(n.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:t,children:"Ingresar Al sistema"})]})})};var C=function(e){var t=e.var1,c=e.setInputValue,s=Object(a.useState)(t),i=Object(N.a)(s,2),r=(i[0],i[1],Object(a.useState)(!1)),l=Object(N.a)(r,2),j=(l[0],l[1],Object(a.useState)(!1)),b=Object(N.a)(j,2),o=(b[0],b[1],Object(a.useState)({})),d=Object(N.a)(o,2);return d[0],d[1],Object(n.jsx)(u.a,{fluid:"md",children:Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)(f,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})},k=c(15),_=function(e){var t=e.width;return Object(n.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},w=function(e){var t=e.width,c=e.color;return Object(n.jsxs)("svg",{width:t,color:c,viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(n.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]})};function S(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)({isValid:!1,id:null,item:{}}),r=Object(N.a)(i,2),l=r[0],j=r[1],b=Object(a.useState)(!1),o=Object(N.a)(b,2),d=o[0],u=o[1],O=Object(a.useState)(!1),g=Object(N.a)(O,2),f=g[0],S=g[1];function A(){return y.apply(this,arguments)}function y(){return(y=Object(v.a)(x.a.mark((function e(){var t,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:c},e.next=3,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).length>0?1===a[0].estado&&(console.log("Probando si la tarjeta est\xe1 activa"),j({isValid:!0,id:"id",item:a})):0==a.length?1!=a[0].estado&&S(!0):a.length>0&&u(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){A()}),[]);var V=function(e){var t=c;t.toString().length+1<=16&&s(0==t?e.target.value:t+e.target.value)};return Object(n.jsxs)(m.a,{className:"mt-2",children:[Object(n.jsx)(h.a,{sm:"4",children:Object(n.jsx)(C,{var1:c,setInputValue:function(e,t){(t=t.trim()).length},doNumber:A})}),Object(n.jsx)(h.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:V,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:V,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:V,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:V,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:V,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:V,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:V,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:V,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:V,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&s(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:V,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:A,className:"number ok",children:"Aceptar"}),Object(n.jsx)("button",{onClick:function(){console.log(l),console.log(l.item),console.log(l.item[0].estado)},className:"number ok",children:"test"})]})]})})}),Object(n.jsxs)(h.a,{sm:"12",children:[l.isValid&&Object(n.jsx)(p,{Text:"Ingresar al sistema",doNumber:function(e){console.log(l)}}),!l.isValid&&Object(n.jsxs)(k.a,{className:"toast",onClose:function(){return u(!1)},show:d,delay:4e3,autohide:!0,children:[Object(n.jsxs)(k.a.Header,{children:[Object(n.jsx)(_,{width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(n.jsxs)(k.a.Body,{children:["Card invalid ",Object(n.jsx)(w,{color:"red",width:"20px"})]})]}),!l.isValid&&Object(n.jsxs)(k.a,{className:"toast",onClose:function(){return S(!1)},show:f,delay:4e3,autohide:!0,children:[Object(n.jsxs)(k.a.Header,{children:[Object(n.jsx)(_,{width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"card existing but blocked"})]}),Object(n.jsxs)(k.a.Body,{children:["Card invalid ",Object(n.jsx)(w,{color:"red",width:"20px"})]})]})]})]})}var A=function(e){return e.titulo,Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(m.a,{className:"mt-5",children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(S,{})})})]})};c(54),c(55);function y(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),c=t[0],s=t[1],i=function(e){var t=c;t.toString().length+1<=16&&s(0==t?e.target.value:t+e.target.value)};return Object(n.jsxs)(m.a,{className:"mt-2",children:[Object(n.jsx)(h.a,{sm:"4",children:Object(n.jsx)("h2",{children:"Aqui ira la tarjeta"})}),Object(n.jsx)(h.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:i,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:i,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:i,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:i,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:i,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:i,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:i,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:i,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:i,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&s(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:i,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:i,className:"number ok",children:"Ing"})]})]})})}),Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("button",{children:"Probando"})})]})}var V=function(e){return e.titulo,Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual - Pin"})})})}),Object(n.jsx)(m.a,{className:"mt-5",children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(y,{})})})]})};var B=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(A,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/sectionpin",children:Object(n.jsx)(V,{})})]})]})})},I=(c(56),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))});r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),I()}},[[57,1,2]]]);
//# sourceMappingURL=main.8793a5ad.chunk.js.map