(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(20),i=n.n(r),l=(n(40),n(41),n(19)),o=n(6),j=n(26),d=n.p+"static/media/logo.acb865cd.svg";n(42);var b=function(){return Object(c.jsxs)(j.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(c.jsx)("img",{className:"Logo-navBar",width:"180",src:d}),Object(c.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(j.a.Collapse,{id:"basic-navbar-nav"})]})},u=(n(45),n(13)),h=n(8),m=n(5),x=(n(46),n(17)),O=n.n(x),v=n(18),N=n(10),g=(n(48),n.p+"static/media/visaLogo.6713080c.png");n(49);var f=function(e){var t=e.formatNumber,n=e.onChange;return Object(c.jsx)("div",{className:"inputField",children:Object(c.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return n(e.target.value)}})})};n(50);var p=function(e){var t=e.doNumber;return Object(c.jsx)("div",{className:"submitButton",children:Object(c.jsxs)(l.b,{to:"/sectionpin",children:[" ",Object(c.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary btn-lg",type:"button",onClick:t,children:"Ingresar Al sistema"})]})})};var C=function(e){var t=e.var1,n=e.setInputValue,s=Object(a.useState)(t),r=Object(N.a)(s,2),i=(r[0],r[1],Object(a.useState)(!1)),l=Object(N.a)(i,2),o=(l[0],l[1],Object(a.useState)(!1)),j=Object(N.a)(o,2),d=(j[0],j[1],Object(a.useState)({})),b=Object(N.a)(d,2);return b[0],b[1],Object(c.jsx)(u.a,{fluid:"md",children:Object(c.jsx)(h.a,{children:Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"credit-card",children:[Object(c.jsx)("div",{className:"credit-card__logo",children:Object(c.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(c.jsx)("div",{className:"credit-card__number",children:Object(c.jsx)(f,{formatNumber:function(e){var t,n=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),c=n&&n[0]||"",a=[],s=0;for(t=c.length;s<t;s+=4)a.push(c.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return n("numberCard",e)}})}),Object(c.jsxs)("div",{className:"credit-card__info",children:[Object(c.jsxs)("div",{className:"credit-card__info_name",children:[Object(c.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(c.jsx)("div",{children:"Gustavo Quintana"})]}),Object(c.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(c.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(c.jsx)("div",{children:"05/2025"})]})]})]})})})})},_=n(11),w=function(e){var t=e.width,n=e.color;return Object(c.jsx)("svg",{width:t,color:n,fill:"currentColor",viewBox:"0 0 20 20",children:Object(c.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},k=function(e){var t=e.width,n=e.color;return Object(c.jsxs)("svg",{width:t,color:n,viewBox:"0 0 16 16",fill:"currentColor",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(c.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]})},S=function(e){var t=e.width,n=e.height,a=e.color;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,color:a,fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})},y=s.a.createContext([]),A=function(){return Object(a.useContext)(y)},P=function(e){var t=e.children,n=(e.defaultCart,Object(a.useState)("")),s=Object(N.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(""),o=Object(N.a)(l,2),j=o[0],d=o[1],b=Object(a.useState)({isValid:!1,id:null,item:{}}),u=Object(N.a)(b,2),h=u[0],m=u[1],x=Object(a.useState)(!1),g=Object(N.a)(x,2),f=g[0],p=g[1],C=Object(a.useState)(!1),_=Object(N.a)(C,2),w=_[0],k=_[1];function S(){return A.apply(this,arguments)}function A(){return(A=Object(v.a)(O.a.mark((function e(){var t,n,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:r},e.next=3,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).length>0?0===c[0].estado?(a={item:c[0].estado},m(a),console.log(c[0].estado),k(!0)):1===c[0].estado&&(console.log("Probando si la tarjeta est\xe1 activa"),m({isValid:!0,id:"id",item:c})):0==c.length&&p(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){S()}),[]);return Object(c.jsx)(y.Provider,{value:{doNumber:S,AddNumber:function(e){var t=r;t.toString().length+1<=16&&i(0==t?e.target.value:t+e.target.value)},AddNumberPin:function(e){var t=j;t.toString().length+1<=4&&d(0==t?e.target.value:t+e.target.value)},handleDelete:function(e){0!=r&&i(r.substring(0,r.length-1)),d(j.substring(0,j.length-1))},setInputValue:function(e,t){(t=t.trim()).length},IngresarAlsistema:function(e){console.log(h)},test:function(){console.log(h),console.log(h.item),console.log(h.item[0].estado)},num:r,numPin:j,show:f,setShow:p,showBloked:w,setShowBloked:k,dateCard:h},children:t})};function B(){var e=A(),t=e.num,n=e.doNumber,a=e.IngresarAlsistema,s=e.show,r=e.setShow,i=e.showBloked,l=e.dateCard,o=e.setShowBloked,j=e.AddNumber,d=e.handleDelete;return Object(c.jsxs)(h.a,{className:"mt-2",children:[Object(c.jsx)(m.a,{sm:"4",children:Object(c.jsx)(C,{var1:t,doNumber:n})}),Object(c.jsx)(m.a,{sm:"8",children:Object(c.jsx)("div",{className:"calcShow",children:Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:j,value:"1",className:"number",children:"1"}),Object(c.jsx)("button",{onClick:j,value:"2",className:"number",children:"2"}),Object(c.jsx)("button",{onClick:j,value:"3",className:"number",children:"3"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:j,value:"4",className:"number",children:"4"}),Object(c.jsx)("button",{onClick:j,value:"5",className:"number",children:"5"}),Object(c.jsx)("button",{onClick:j,value:"6",className:"number",children:"6"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:j,value:"7",className:"number",children:"7"}),Object(c.jsx)("button",{onClick:j,value:"8",className:"number",children:"8"}),Object(c.jsx)("button",{onClick:j,value:"9",className:"number",children:"9"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:d,value:"delete",className:"number",children:"<"}),Object(c.jsx)("button",{onClick:j,value:"0",className:"number",children:"0"}),Object(c.jsx)("button",{onClick:n,className:"number ok",children:"Aceptar"}),Object(c.jsx)("button",{onClick:function(){console.log(l)},className:"number ok",children:"test"})]})]})})}),Object(c.jsxs)(m.a,{sm:"12",children:[l.isValid&&Object(c.jsx)(p,{Text:"Ingresar",doNumber:a}),0===l.item&&Object(c.jsxs)(_.a,{className:"toast",onClose:function(){return o(!1)},show:i,delay:4e3,autohide:!0,children:[Object(c.jsxs)(_.a.Header,{children:[Object(c.jsx)(w,{width:"20px"}),Object(c.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(c.jsxs)(_.a.Body,{children:["card existing but blocked",Object(c.jsx)(k,{color:"red",width:"20px"})]})]}),!l.isValid&&Object(c.jsxs)(_.a,{className:"toast",onClose:function(){return r(!1)},show:s,delay:4e3,autohide:!0,children:[Object(c.jsxs)(_.a.Header,{children:[Object(c.jsx)(w,{width:"20px"}),Object(c.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(c.jsxs)(_.a.Body,{children:["Card invalid ",Object(c.jsx)(k,{color:"red",width:"20px"})]})]})]})]})}var V=function(e){return e.titulo,Object(c.jsxs)(u.a,{children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(m.a,{sm:"12",children:Object(c.jsx)("div",{className:"text-center pt-3",children:Object(c.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(c.jsx)(h.a,{className:"mt-5",children:Object(c.jsx)(m.a,{sm:"12",children:Object(c.jsx)(B,{})})})]})};n(54),n(55),n(56),n(57);var I=function(e){var t=e.formatNumber,n=e.onChange;return Object(c.jsx)("div",{className:"inputField",children:Object(c.jsx)("input",{className:"input",type:"input",placeholder:"**** **** **** ****",value:t,onChange:function(e){return n(e.target.value)}})})};var z=function(e){var t=e.var1,n=e.setInputValue;return Object(c.jsx)(u.a,{fluid:"md",children:Object(c.jsx)(h.a,{children:Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"credit-cardPin",children:[Object(c.jsx)("div",{className:"credit-cardPin__logo",children:Object(c.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(c.jsx)("div",{className:"credit-cardPin__number",children:Object(c.jsx)(I,{formatNumber:function(e){var t,n=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),c=n&&n[0]||"",a=[],s=0;for(t=c.length;s<t;s+=4)a.push(c.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return n("numberCard",e)}})}),Object(c.jsxs)("div",{className:"credit-cardPin__info",children:[Object(c.jsxs)("div",{className:"credit-cardPin__info_name",children:[Object(c.jsx)("div",{className:"credit-cardPin__info_label",children:"Globant S.A"}),Object(c.jsx)("div",{children:"Gustavo Quintana"})]}),Object(c.jsxs)("div",{className:"credit-cardPin__info_expiry",children:[Object(c.jsx)("div",{className:"credit-cardPin__info_label",children:"Venc:"}),Object(c.jsx)("div",{children:"05/2025"})]})]})]})})})})};function M(){var e=A(),t=e.dateCard,n=e.numPin,s=e.AddNumberPin,r=e.handleDelete,i=Object(a.useState)(!1),o=Object(N.a)(i,2),j=o[0],d=o[1],b=Object(a.useState)(!1),x=Object(N.a)(b,2),g=x[0],f=x[1],p=Object(a.useState)(!1),C=Object(N.a)(p,2),y=C[0],P=C[1];function B(){return(B=Object(v.a)(O.a.mark((function e(){var c,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={cardNumbers:n},e.next=3,fetch("/isValidatePin",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberPin:c.cardNumbers})});case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,console.log(s[0].nro_tarjeta),console.log(t.item[0].nro_tarjeta),console.log(t),s[0].nro_tarjeta===t.item[0].nro_tarjeta?(d(!0),f(!0)):s[0].nro_tarjeta!=t.item[0].nro_tarjeta&&P(!0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)(u.a,{children:[Object(c.jsxs)(h.a,{className:"mt-2",children:[Object(c.jsx)(m.a,{sm:"4",children:Object(c.jsx)(z,{var1:n})}),Object(c.jsx)(m.a,{sm:"8",children:Object(c.jsx)("div",{className:"calcShow",children:Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:s,value:"1",className:"number",children:"1"}),Object(c.jsx)("button",{onClick:s,value:"2",className:"number",children:"2"}),Object(c.jsx)("button",{onClick:s,value:"3",className:"number",children:"3"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:s,value:"4",className:"number",children:"4"}),Object(c.jsx)("button",{onClick:s,value:"5",className:"number",children:"5"}),Object(c.jsx)("button",{onClick:s,value:"6",className:"number",children:"6"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:s,value:"7",className:"number",children:"7"}),Object(c.jsx)("button",{onClick:s,value:"8",className:"number",children:"8"}),Object(c.jsx)("button",{onClick:s,value:"9",className:"number",children:"9"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:r,value:"delete",className:"number",children:"<"}),Object(c.jsx)("button",{onClick:s,value:"0",className:"number",children:"0"}),Object(c.jsx)("button",{onClick:function(){return B.apply(this,arguments)},className:"number ok",children:"Ing"}),Object(c.jsx)("button",{onClick:function(){console.log(t)},className:"number ok",children:"test"})]})]})})})]}),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(m.a,{sm:"4 text-center justify-content-center m-auto pt-3",children:j&&Object(c.jsx)(l.b,{to:"/operations",children:Object(c.jsx)("button",{className:"submitButton",class:"btn btn-primary btn-lg",children:"Ingresar al Sistema"})})}),Object(c.jsxs)(m.a,{sm:"8",children:[j&&Object(c.jsxs)(_.a,{className:"toastPin",onClose:function(){return f(!1)},show:g,delay:4e3,autohide:!0,children:[Object(c.jsxs)(_.a.Header,{children:[Object(c.jsx)(w,{color:"green",width:"20px"}),Object(c.jsx)("strong",{className:"mr-auto",children:"Validation Card Number"})]}),Object(c.jsxs)(_.a.Body,{children:["Validation Successfull !",Object(c.jsx)(S,{color:"green",width:"25px",height:"25px"})]})]}),Object(c.jsxs)(_.a,{className:"toastPin",onClose:function(){return P(!1)},show:y,delay:4e3,autohide:!0,children:[Object(c.jsxs)(_.a.Header,{children:[Object(c.jsx)(w,{color:"red",width:"20px"}),Object(c.jsx)("strong",{className:"mr-auto",children:"Validation Card PIN"})]}),Object(c.jsxs)(_.a.Body,{children:["Pin Incorrect, you have 3 intents !",Object(c.jsx)(k,{color:"red",width:"25px"})]})]})]})]})]})}var T=function(e){return e.titulo,Object(c.jsxs)(u.a,{children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(m.a,{sm:"12",children:Object(c.jsx)("div",{className:"text-center pt-3",children:Object(c.jsx)("h2",{children:"ATM - Cajero Virtual - Pin"})})})}),Object(c.jsx)(h.a,{className:"mt-5",children:Object(c.jsx)(m.a,{sm:"12",children:Object(c.jsx)(M,{})})})]})};n(58);var L=function(){return Object(c.jsx)(u.a,{className:"containerButtons",children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(m.a,{sm:"4",children:Object(c.jsx)("button",{className:"menu_button1 button_up_deposit",children:"Balance "})}),Object(c.jsx)(m.a,{sm:"4",children:Object(c.jsx)("button",{className:"menu_button1 button_up_deposit",children:"Retiro "})}),Object(c.jsx)(m.a,{sm:"4",children:Object(c.jsx)("button",{className:"menu_button1 button_up_deposit",children:"Salir "})})]})})};var F=function(){return Object(c.jsx)(P,{defaultCart:[],children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(b,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",children:Object(c.jsx)(V,{})}),Object(c.jsx)(o.a,{exact:!0,path:"/sectionpin",children:Object(c.jsx)(T,{})}),Object(c.jsx)(o.a,{exact:!0,path:"/operations",children:Object(c.jsx)(L,{})})]})]})})},H=(n(59),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))});i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),H()}},[[60,1,2]]]);
//# sourceMappingURL=main.f54f282d.chunk.js.map