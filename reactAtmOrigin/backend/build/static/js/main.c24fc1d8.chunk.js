(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),r=c(10),i=c.n(r),l=(c(30),c(31),c(14)),o=c.p+"static/media/logo.acb865cd.svg";c(32);var b=function(){return Object(n.jsxs)(l.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:o}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav"})]})},j=(c(36),c(13)),u=c(9),d=c(7),m=c(11),h=c.n(m),O=c(12),x=c(8),v=(c(38),c(39),c(58),c.p+"static/media/visaLogo.6713080c.png");c(59);var g=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"probando",value:t,onChange:function(e){return c(e.target.value)}})})};c(60);var N=function(e){var t=e.doNumber;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:t,children:"Ingresar Al sistema"})})};var f=function(e){var t=e.var1,c=e.setInputValue,s=Object(a.useState)(t),r=Object(x.a)(s,2),i=(r[0],r[1],Object(a.useState)(!1)),l=Object(x.a)(i,2),o=(l[0],l[1],Object(a.useState)(!1)),b=Object(x.a)(o,2),m=(b[0],b[1],Object(a.useState)({})),h=Object(x.a)(m,2);return h[0],h[1],Object(n.jsx)(j.a,{fluid:"md",children:Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:v,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)(g,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})};function p(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(x.a)(r,2),l=(i[0],i[1],Object(a.useState)({})),o=Object(x.a)(l,2),b=(o[0],o[1],function(e){var t=c;t.toString().length+1<=16&&s(0==t?e.target.value:t+e.target.value)});function j(){return m.apply(this,arguments)}function m(){return(m=Object(O.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:c},e.prev=1,e.next=4,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 4:return n=e.sent,e.next=7,n.json();case 7:(a=e.sent)&&a.success?console.log("funca locooo"):a&&!1===a.success&&(console.log("No funca!!!!"),console.log("probando "+a.msg)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:console.log(t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(n.jsxs)(u.a,{className:"mt-2",children:[Object(n.jsx)(d.a,{sm:"4",children:Object(n.jsx)(f,{var1:c,setInputValue:function(e,t){(t=t.trim()).length},doNumber:j})}),Object(n.jsx)(d.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:b,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:b,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:b,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:b,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:b,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:b,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:b,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:b,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:b,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&s(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:b,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:b,className:"number ok",children:"Ing"})]})]})})}),Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)(N,{Text:"Ingresar al sistema",doNumber:j})})]})}var C=function(e){return e.titulo,Object(n.jsxs)(j.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(u.a,{className:"mt-5",children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)(p,{})})})]})};var _=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{}),Object(n.jsx)(C,{})]})},k=(c(61),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))});i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.c24fc1d8.chunk.js.map