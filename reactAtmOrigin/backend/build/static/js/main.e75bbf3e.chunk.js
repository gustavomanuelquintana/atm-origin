(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),r=n(10),i=n.n(r),l=(n(30),n(31),n(14)),j=n.p+"static/media/logo.acb865cd.svg";n(32);var b=function(){return Object(c.jsxs)(l.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(c.jsx)("img",{className:"Logo-navBar",width:"180",src:j}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"basic-navbar-nav"})]})},u=(n(36),n(13)),o=n(9),d=n(7),m=n(11),h=n.n(m),O=n(12),x=n(8),v=(n(38),n(39),n(58),n.p+"static/media/visaLogo.6713080c.png");n(59);var g=function(e){var t=e.formatNumber,n=e.onChange;return Object(c.jsx)("div",{className:"inputField",children:Object(c.jsx)("input",{className:"input",type:"input",placeholder:"probando",value:t,onChange:function(e){return n(e.target.value)}})})};n(60);var p=function(e){var t=e.doNumber;return Object(c.jsx)("div",{className:"submitButton",children:Object(c.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:t,children:"Ingresar Al sistema"})})};var N=function(e){var t=e.var1,n=e.setInputValue,s=Object(a.useState)(t),r=Object(x.a)(s,2),i=(r[0],r[1],Object(a.useState)(!1)),l=Object(x.a)(i,2),j=(l[0],l[1],Object(a.useState)(!1)),b=Object(x.a)(j,2),m=(b[0],b[1],Object(a.useState)({})),h=Object(x.a)(m,2);return h[0],h[1],Object(c.jsx)(u.a,{fluid:"md",children:Object(c.jsx)(o.a,{children:Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"credit-card",children:[Object(c.jsx)("div",{className:"credit-card__logo",children:Object(c.jsx)("img",{className:"logo",src:v,width:"50"})}),Object(c.jsx)("div",{className:"credit-card__number",children:Object(c.jsx)(g,{formatNumber:function(e){var t,n=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),c=n&&n[0]||"",a=[],s=0;for(t=c.length;s<t;s+=4)a.push(c.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return n("numberCard",e)}})}),Object(c.jsxs)("div",{className:"credit-card__info",children:[Object(c.jsxs)("div",{className:"credit-card__info_name",children:[Object(c.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(c.jsx)("div",{children:"Gustavo Quintana"})]}),Object(c.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(c.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(c.jsx)("div",{children:"05/2025"})]})]})]})})})})};function f(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(x.a)(r,2),l=(i[0],i[1],Object(a.useState)({})),j=Object(x.a)(l,2),b=(j[0],j[1],function(e){var t=n;t.toString().length+1<=16&&s(0==t?e.target.value:t+e.target.value)});function u(){return m.apply(this,arguments)}function m(){return(m=Object(O.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{cardNumbers:n},console.log("probando servicio de respuesta:"),e.next=4,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,console.log(c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)(o.a,{className:"mt-2",children:[Object(c.jsx)(d.a,{sm:"4",children:Object(c.jsx)(N,{var1:n,setInputValue:function(e,t){(t=t.trim()).length},doNumber:u})}),Object(c.jsx)(d.a,{sm:"8",children:Object(c.jsx)("div",{className:"calcShow",children:Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:b,value:"1",className:"number",children:"1"}),Object(c.jsx)("button",{onClick:b,value:"2",className:"number",children:"2"}),Object(c.jsx)("button",{onClick:b,value:"3",className:"number",children:"3"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:b,value:"4",className:"number",children:"4"}),Object(c.jsx)("button",{onClick:b,value:"5",className:"number",children:"5"}),Object(c.jsx)("button",{onClick:b,value:"6",className:"number",children:"6"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:b,value:"7",className:"number",children:"7"}),Object(c.jsx)("button",{onClick:b,value:"8",className:"number",children:"8"}),Object(c.jsx)("button",{onClick:b,value:"9",className:"number",children:"9"})]}),Object(c.jsxs)("div",{className:"numbersAnimation",children:[Object(c.jsx)("button",{onClick:function(e){0!=n&&s(n.substring(0,n.length-1))},value:"delete",className:"number",children:"<"}),Object(c.jsx)("button",{onClick:b,value:"0",className:"number",children:"0"}),Object(c.jsx)("button",{onClick:b,className:"number ok",children:"Ing"})]})]})})}),Object(c.jsx)(d.a,{sm:"12",children:Object(c.jsx)(p,{Text:"Ingresar al sistema",doNumber:u})})]})}var C=function(e){return e.titulo,Object(c.jsxs)(u.a,{children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(d.a,{sm:"12",children:Object(c.jsx)("div",{className:"text-center pt-3",children:Object(c.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(c.jsx)(o.a,{className:"mt-5",children:Object(c.jsx)(d.a,{sm:"12",children:Object(c.jsx)(f,{})})})]})};var _=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsx)(C,{})]})},k=(n(61),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))});i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.e75bbf3e.chunk.js.map