(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),i=c(15),r=c.n(i),l=(c(33),c(34),c(18)),j=c(4),b=c(19),u=c.p+"static/media/logo.acb865cd.svg";c(35);var o=function(){return Object(n.jsxs)(b.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:u}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(b.a.Collapse,{id:"basic-navbar-nav"})]})},d=(c(38),c(14)),m=c(10),h=c(8),O=c(16),x=c.n(O),v=c(17),N=c(12),g=(c(40),c(41),c.p+"static/media/visaLogo.6713080c.png");c(42);var f=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"probando",value:t,onChange:function(e){return c(e.target.value)}})})};c(43);var p=function(e){var t=e.doNumber;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsxs)(l.b,{to:"/sectionpin",children:[" ",Object(n.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:t,children:"Ingresar Al sistema"})]})})};var C=function(e){var t=e.var1,c=e.setInputValue,a=Object(s.useState)(t),i=Object(N.a)(a,2),r=(i[0],i[1],Object(s.useState)(!1)),l=Object(N.a)(r,2),j=(l[0],l[1],Object(s.useState)(!1)),b=Object(N.a)(j,2),u=(b[0],b[1],Object(s.useState)({})),o=Object(N.a)(u,2);return o[0],o[1],Object(n.jsx)(d.a,{fluid:"md",children:Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)(f,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",s=[],a=0;for(t=n.length;a<t;a+=4)s.push(n.substring(a,a+4));return s.length?s.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})};function k(){var e=Object(s.useState)(""),t=Object(N.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)({isValid:!1,id:null,item:{}}),r=Object(N.a)(i,2),l=(r[0],r[1]);function j(){return b.apply(this,arguments)}function b(){return(b=Object(v.a)(x.a.mark((function e(){var t,n,s,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:c},console.log("probando servicio de respuesta:"),e.next=4,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,a={isValid:!0,id:"id",item:s},console.log(a),l(s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){j()}),[]);var u=function(e){var t=c;t.toString().length+1<=16&&a(0==t?e.target.value:t+e.target.value)};return Object(n.jsxs)(m.a,{className:"mt-2",children:[Object(n.jsx)(h.a,{sm:"4",children:Object(n.jsx)(C,{var1:c,setInputValue:function(e,t){(t=t.trim()).length},doNumber:j})}),Object(n.jsx)(h.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:u,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:u,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:u,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:u,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:u,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:u,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:u,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:u,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:u,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&a(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:u,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:u,className:"number ok",children:"Ing"})]})]})})}),Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(p,{Text:"Ingresar al sistema",doNumber:j})})]})}var _=function(e){return e.titulo,Object(n.jsxs)(d.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(m.a,{className:"mt-5",children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(k,{})})})]})};c(47),c(48);function S(){var e=Object(s.useState)(""),t=Object(N.a)(e,2),c=t[0],a=t[1],i=function(e){var t=c;t.toString().length+1<=16&&a(0==t?e.target.value:t+e.target.value)};return Object(n.jsxs)(m.a,{className:"mt-2",children:[Object(n.jsx)(h.a,{sm:"4",children:Object(n.jsx)("h2",{children:"Aqui ira la tarjeta"})}),Object(n.jsx)(h.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:i,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:i,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:i,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:i,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:i,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:i,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:i,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:i,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:i,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&a(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:i,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:i,className:"number ok",children:"Ing"})]})]})})}),Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("button",{children:"Probando"})})]})}var A=function(e){return e.titulo,Object(n.jsxs)(d.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual - Pin"})})})}),Object(n.jsx)(m.a,{className:"mt-5",children:Object(n.jsx)(h.a,{sm:"12",children:Object(n.jsx)(S,{})})})]})};var y=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(o,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(_,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/sectionpin",children:Object(n.jsx)(A,{})})]})]})})},w=(c(49),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))});r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),w()}},[[50,1,2]]]);
//# sourceMappingURL=main.377fecce.chunk.js.map