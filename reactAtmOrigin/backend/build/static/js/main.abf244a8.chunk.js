(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(20),i=c.n(r),l=(c(40),c(41),c(19)),o=c(6),j=c(26),d=c.p+"static/media/logo.acb865cd.svg";c(42);var b=function(){return Object(n.jsxs)(j.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:d}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(j.a.Collapse,{id:"basic-navbar-nav"})]})},u=(c(45),c(13)),h=c(8),m=c(5),x=(c(46),c(17)),O=c.n(x),v=c(18),N=c(10),f=(c(48),c.p+"static/media/visaLogo.6713080c.png");c(49);var p=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return c(e.target.value)}})})};c(50);var g=function(e){var t=e.doNumber;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsxs)(l.b,{to:"/sectionpin",children:[" ",Object(n.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary btn-lg",type:"button",onClick:t,children:"Ingresar Al sistema"})]})})};var C=function(e){var t=e.var1,c=e.setInputValue,s=Object(a.useState)(t),r=Object(N.a)(s,2),i=(r[0],r[1],Object(a.useState)(!1)),l=Object(N.a)(i,2),o=(l[0],l[1],Object(a.useState)(!1)),j=Object(N.a)(o,2),d=(j[0],j[1],Object(a.useState)({})),b=Object(N.a)(d,2);return b[0],b[1],Object(n.jsx)(u.a,{fluid:"md",children:Object(n.jsx)(h.a,{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:f,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)(p,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})},_=c(11),w=function(e){var t=e.width,c=e.color;return Object(n.jsx)("svg",{width:t,color:c,fill:"currentColor",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},k=function(e){var t=e.width,c=e.color;return Object(n.jsxs)("svg",{width:t,color:c,viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(n.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]})},S=function(e){var t=e.width,c=e.height,a=e.color;return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:c,color:a,fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})},y=s.a.createContext([]),A=function(){return Object(a.useContext)(y)},P=function(e){var t=e.children,c=(e.defaultCart,Object(a.useState)("")),s=Object(N.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(""),o=Object(N.a)(l,2),j=o[0],d=o[1],b=Object(a.useState)({isValid:!1,id:null,item:{}}),u=Object(N.a)(b,2),h=u[0],m=u[1],x=Object(a.useState)(!1),f=Object(N.a)(x,2),p=f[0],g=f[1],C=Object(a.useState)(!1),_=Object(N.a)(C,2),w=_[0],k=_[1];function S(){return A.apply(this,arguments)}function A(){return(A=Object(v.a)(O.a.mark((function e(){var t,c,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:r},e.next=3,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 3:return c=e.sent,e.next=6,c.json();case 6:(n=e.sent).length>0?0===n[0].estado?(a={item:n[0].estado},m(a),console.log(n[0].estado),k(!0)):1===n[0].estado&&(console.log("Probando si la tarjeta est\xe1 activa"),m({isValid:!0,id:"id",item:n})):0==n.length&&g(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){S()}),[]);return Object(n.jsx)(y.Provider,{value:{doNumber:S,AddNumber:function(e){var t=r;t.toString().length+1<=16&&i(0==t?e.target.value:t+e.target.value)},AddNumberPin:function(e){var t=j;t.toString().length+1<=4&&d(0==t?e.target.value:t+e.target.value)},handleDelete:function(e){0!=r&&i(r.substring(0,r.length-1)),d(j.substring(0,j.length-1))},setInputValue:function(e,t){(t=t.trim()).length},IngresarAlsistema:function(e){console.log(h)},test:function(){console.log(h),console.log(h.item),console.log(h.item[0].estado)},num:r,numPin:j,show:p,setShow:g,showBloked:w,setShowBloked:k,dateCard:h},children:t})};function B(){var e=A(),t=e.num,c=e.doNumber,a=e.IngresarAlsistema,s=e.show,r=e.setShow,i=e.showBloked,l=e.dateCard,o=e.setShowBloked,j=e.AddNumber,d=e.handleDelete;return Object(n.jsxs)(h.a,{className:"mt-2",children:[Object(n.jsx)(m.a,{sm:"4",children:Object(n.jsx)(C,{var1:t,doNumber:c})}),Object(n.jsx)(m.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:j,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:j,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:j,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:j,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:j,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:j,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:d,value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:j,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:c,className:"number ok",children:"Aceptar"}),Object(n.jsx)("button",{onClick:function(){console.log(l)},className:"number ok",children:"test"})]})]})})}),Object(n.jsxs)(m.a,{sm:"12",children:[l.isValid&&Object(n.jsx)(g,{Text:"Ingresar",doNumber:a}),0===l.item&&Object(n.jsxs)(_.a,{className:"toast",onClose:function(){return o(!1)},show:i,delay:4e3,autohide:!0,children:[Object(n.jsxs)(_.a.Header,{children:[Object(n.jsx)(w,{width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(n.jsxs)(_.a.Body,{children:["card existing but blocked",Object(n.jsx)(k,{color:"red",width:"20px"})]})]}),!l.isValid&&Object(n.jsxs)(_.a,{className:"toast",onClose:function(){return r(!1)},show:s,delay:4e3,autohide:!0,children:[Object(n.jsxs)(_.a.Header,{children:[Object(n.jsx)(w,{width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(n.jsxs)(_.a.Body,{children:["Card invalid ",Object(n.jsx)(k,{color:"red",width:"20px"})]})]})]})]})}var V=function(e){return e.titulo,Object(n.jsxs)(u.a,{children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(m.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(h.a,{className:"mt-5",children:Object(n.jsx)(m.a,{sm:"12",children:Object(n.jsx)(B,{})})})]})};c(54),c(55),c(56),c(57);var I=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return c(e.target.value)}})})};var z=function(e){var t=e.var1,c=e.setInputValue;return Object(n.jsx)(u.a,{fluid:"md",children:Object(n.jsx)(h.a,{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)("div",{className:"credit-cardPin",children:[Object(n.jsx)("div",{className:"credit-cardPin__logo",children:Object(n.jsx)("img",{className:"logo",src:f,width:"50"})}),Object(n.jsx)("div",{className:"credit-cardPin__number",children:Object(n.jsx)(I,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-cardPin__info",children:[Object(n.jsxs)("div",{className:"credit-cardPin__info_name",children:[Object(n.jsx)("div",{className:"credit-cardPin__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-cardPin__info_expiry",children:[Object(n.jsx)("div",{className:"credit-cardPin__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})};function M(){var e=A(),t=e.dateCard,c=e.numPin,s=e.AddNumberPin,r=e.handleDelete,i=Object(a.useState)(!1),o=Object(N.a)(i,2),j=o[0],d=o[1],b=Object(a.useState)(!1),x=Object(N.a)(b,2),f=x[0],p=x[1],g=Object(a.useState)(!1),C=Object(N.a)(g,2),y=C[0],P=C[1];function B(){return(B=Object(v.a)(O.a.mark((function e(){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={cardNumbers:c},e.next=3,fetch("/isValidatePin",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberPin:n.cardNumbers})});case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent[0].nro_tarjeta===t.item[0].nro_tarjeta?(d(!0),p(!0)):(alert("error"),P(!0));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(h.a,{className:"mt-2",children:[Object(n.jsx)(m.a,{sm:"4",children:Object(n.jsx)(z,{var1:c})}),Object(n.jsx)(m.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:s,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:s,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:s,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:s,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:s,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:s,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:s,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:s,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:s,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:r,value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:s,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:function(){return B.apply(this,arguments)},className:"number ok",children:"Ing"}),Object(n.jsx)("button",{onClick:function(){console.log(t)},className:"number ok",children:"test"})]})]})})})]}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(m.a,{sm:"4 text-center justify-content-center m-auto pt-3",children:j&&Object(n.jsx)(l.b,{to:"/operations",children:Object(n.jsx)("button",{className:"submitButton",class:"btn btn-primary btn-lg",children:"Ingresar al Sistema"})})}),Object(n.jsxs)(m.a,{sm:"8",children:[j&&Object(n.jsxs)(_.a,{className:"toastPin",onClose:function(){return p(!1)},show:f,delay:4e3,autohide:!0,children:[Object(n.jsxs)(_.a.Header,{children:[Object(n.jsx)(w,{color:"green",width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(n.jsxs)(_.a.Body,{children:["Validation Successfull !",Object(n.jsx)(S,{color:"green",width:"25px",height:"25px"})]})]}),y&&Object(n.jsxs)(_.a,{className:"toastPin",onClose:function(){return P(!1)},show:y,delay:4e3,autohide:!0,children:[Object(n.jsxs)(_.a.Header,{children:[Object(n.jsx)(w,{color:"red",width:"20px"}),Object(n.jsx)("strong",{className:"mr-auto",children:"Validation Card PIN"})]}),Object(n.jsxs)(_.a.Body,{children:["Pin Incorrect, you have 3 intents !",Object(n.jsx)(k,{color:"red",width:"25px"})]})]})]})]})]})}var T=function(e){return e.titulo,Object(n.jsxs)(u.a,{children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(m.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual - Pin"})})})}),Object(n.jsx)(h.a,{className:"mt-5",children:Object(n.jsx)(m.a,{sm:"12",children:Object(n.jsx)(M,{})})})]})};c(58);var L=function(){return Object(n.jsx)(u.a,{className:"containerButtons",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(m.a,{sm:"4",children:Object(n.jsx)("button",{className:"menu_button1 button_up_deposit",children:"Balance "})}),Object(n.jsx)(m.a,{sm:"4",children:Object(n.jsx)("button",{className:"menu_button1 button_up_deposit",children:"Retiro "})}),Object(n.jsx)(m.a,{sm:"4",children:Object(n.jsx)("button",{className:"menu_button1 button_up_deposit",children:"Salir "})})]})})};var F=function(){return Object(n.jsx)(P,{defaultCart:[],children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(b,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(V,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/sectionpin",children:Object(n.jsx)(T,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/operations",children:Object(n.jsx)(L,{})})]})]})})},H=(c(59),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))});i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),H()}},[[60,1,2]]]);
//# sourceMappingURL=main.abf244a8.chunk.js.map