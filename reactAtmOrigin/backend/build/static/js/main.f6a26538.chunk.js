(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(17),r=c.n(i),l=(c(40),c(41),c(22)),o=c(5),j=c(26),d=c.p+"static/media/logo.acb865cd.svg";c(42);var b=function(){return Object(n.jsxs)(j.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:d}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(j.a.Collapse,{id:"basic-navbar-nav"})]})},u=(c(45),c(15)),m=c(9),h=c(7),O=(c(46),c(18)),x=c.n(O),v=c(21),N=c(12),g=(c(48),c.p+"static/media/visaLogo.6713080c.png");c(49);var f=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return c(e.target.value)}})})};c(50);var p=function(e){var t=e.doNumber;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsxs)(l.b,{to:"/sectionpin",children:[" ",Object(n.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:t,children:"Ingresar Al sistema"})]})})};var C=function(e){var t=e.var1,c=e.setInputValue,s=Object(a.useState)(t),i=Object(N.a)(s,2),r=(i[0],i[1],Object(a.useState)(!1)),l=Object(N.a)(r,2),o=(l[0],l[1],Object(a.useState)(!1)),j=Object(N.a)(o,2),d=(j[0],j[1],Object(a.useState)({})),b=Object(N.a)(d,2);return b[0],b[1],Object(n.jsx)(u.a,{fluid:"md",children:Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)(f,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})},k=c(16),_=function(e){var t=e.width;return Object(n.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},w=function(e){var t=e.width,c=e.color;return Object(n.jsxs)("svg",{width:t,color:c,viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(n.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]})},S=s.a.createContext([]),A=function(){return Object(a.useContext)(S)},P=function(e){var t=e.children,c=(e.defaultCart,Object(a.useState)("")),s=Object(N.a)(c,2),i=s[0],r=s[1],l=Object(a.useState)(""),o=Object(N.a)(l,2),j=o[0],d=o[1],b=Object(a.useState)({isValid:!1,id:null,item:{}}),u=Object(N.a)(b,2),m=u[0],h=u[1],O=Object(a.useState)(!1),g=Object(N.a)(O,2),f=g[0],p=g[1],C=Object(a.useState)(!1),k=Object(N.a)(C,2),_=k[0],w=k[1];function A(){return P.apply(this,arguments)}function P(){return(P=Object(v.a)(x.a.mark((function e(){var t,c,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:i},e.next=3,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 3:return c=e.sent,e.next=6,c.json();case 6:(n=e.sent).length>0?0===n[0].estado?(a={item:n[0].estado},h(a),console.log(n[0].estado),w(!0)):1===n[0].estado&&(console.log("Probando si la tarjeta est\xe1 activa"),h({isValid:!0,id:"id",item:n})):0==n.length&&p(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){A()}),[]);return Object(n.jsx)(S.Provider,{value:{doNumber:A,AddNumber:function(e){var t=i;t.toString().length+1<=16&&r(0==t?e.target.value:t+e.target.value)},AddNumberPin:function(e){var t=j;t.toString().length+1<=4&&d(0==t?e.target.value:t+e.target.value)},handleDelete:function(e){0!=i&&r(i.substring(0,i.length-1)),d(j.substring(0,j.length-1))},setInputValue:function(e,t){(t=t.trim()).length},IngresarAlsistema:function(e){console.log(m)},test:function(){console.log(m),console.log(m.item),console.log(m.item[0].estado)},num:i,numPin:j,show:f,setShow:p,showBloked:_,setShowBloked:w,dateCard:m},children:t})};function y(){var e=A(),t=e.num,c=e.doNumber,a=e.IngresarAlsistema,s=e.show,i=e.setShow,r=e.showBloked,l=e.dateCard,o=e.setShowBloked,j=e.AddNumber,d=e.handleDelete;return Object(n.jsxs)(m.a,{className:"mt-2",children:[Object(n.jsx)(h.a,{sm:"4",children:Object(n.jsx)(C,{var1:t,doNumber:c})}),Object(n.jsx)(h.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:j,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:j,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:j,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:j,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:j,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:j,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:d,value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:j,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:c,className:"number ok",children:"Aceptar"}),Object(n.jsx)("button",{onClick:function(){console.log(l)},className:"number ok",children:"test"})]})]})})}),Object(n.jsxs)(h.a,{sm:"12",children:[l.isValid&&Object(n.jsx)(p,{Text:"Ingresar al sistema",doNumber:a}),0===l.item&&Object(n.jsxs)(k.a,{className:"toast",onClose:function(){return o(!1)},show:r,delay:4e3,autohide:!0,children:[Object(n.jsxs)(k.a.Header,{children:[Object(n.jsx)(_,{width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(n.jsxs)(k.a.Body,{children:["card existing but blocked",Object(n.jsx)(w,{color:"red",width:"20px"})]})]}),!l.isValid&&Object(n.jsxs)(k.a,{className:"toast",onClose:function(){return i(!1)},show:s,delay:4e3,autohide:!0,children:[Object(n.jsxs)(k.a.Header,{children:[Object(n.jsx)(_,{width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(n.jsxs)(k.a.Body,{children:["Card invalid ",Object(n.jsx)(w,{color:"red",width:"20px"})]})]})]})]})}var B=function(e){return e.titulo,Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(m.a,{className:"mt-5",children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(y,{})})})]})};c(54),c(55),c(56),c(57);var V=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return c(e.target.value)}})})};var I=function(e){var t=e.var1,c=e.setInputValue;return Object(n.jsx)(u.a,{fluid:"md",children:Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"credit-cardPin",children:[Object(n.jsx)("div",{className:"credit-cardPin__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-cardPin__number",children:Object(n.jsx)(V,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-cardPin__info",children:[Object(n.jsxs)("div",{className:"credit-cardPin__info_name",children:[Object(n.jsx)("div",{className:"credit-cardPin__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-cardPin__info_expiry",children:[Object(n.jsx)("div",{className:"credit-cardPin__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})};function M(){var e=A(),t=e.dateCard,c=e.numPin,a=e.AddNumberPin,s=e.handleDelete;return Object(n.jsxs)(m.a,{className:"mt-2",children:[Object(n.jsx)(h.a,{sm:"4",children:Object(n.jsx)(I,{var1:c})}),Object(n.jsx)(h.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:a,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:a,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:a,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:a,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:a,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:a,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:a,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:a,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:a,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:s,value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:a,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:function(){console.log("es igual"),console.log(t),console.log(c)},className:"number ok",children:"Ing"}),Object(n.jsx)("button",{onClick:function(){console.log(t),console.log(c)},className:"number ok",children:"test"})]})]})})}),Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("button",{className:"submitButton",class:"btn btn-primary",children:"Probando"})})]})}var T=function(e){return e.titulo,Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual - Pin"})})})}),Object(n.jsx)(m.a,{className:"mt-5",children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(M,{})})})]})};var z=function(){return Object(n.jsx)(P,{defaultCart:[],children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(b,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(B,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/sectionpin",children:Object(n.jsx)(T,{})})]})]})})},F=(c(58),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))});r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),F()}},[[59,1,2]]]);
//# sourceMappingURL=main.f6a26538.chunk.js.map