(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),r=c(9),i=c.n(r),l=(c(22),c(23),c(13)),b=c.p+"static/media/logo.acb865cd.svg";c(24);var j=function(){return Object(n.jsxs)(l.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:b}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav"})]})},o=(c(28),c(11)),u=c(8),d=c(7),m=c(10),O=c.n(m),h=c(16),x=c(12),v=c(6),g=(c(30),c(31),c.p+"static/media/visaLogo.6713080c.png");c(32);var N=function(e){var t=e.formatNumber,c=e.onChange;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:"input",placeholder:"probando",value:t,onChange:function(e){return c(e.target.value)}})})};c(33);var f=function(e){var t=e.doNumber;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsx)("button",{name:"submitButton",id:"submitButton",class:"btn btn-primary",type:"button",onClick:t,children:"Ingresar Al sistema"})})};var p=function(e){var t=e.var1,c=e.setInputValue,s=Object(a.useState)(t),r=Object(v.a)(s,2),i=(r[0],r[1],Object(a.useState)(!1)),l=Object(v.a)(i,2),b=(l[0],l[1],Object(a.useState)(!1)),j=Object(v.a)(b,2),m=(j[0],j[1],Object(a.useState)({})),O=Object(v.a)(m,2);return O[0],O[1],Object(n.jsx)(o.a,{fluid:"md",children:Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)(N,{formatNumber:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(t),val:t,onChange:function(e){return c("numberCard",e)}})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})})})})};function C(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)({}),i=Object(v.a)(r,2),l=(i[0],i[1]),b=Object(a.useState)(!1),j=Object(v.a)(b,2),o=(j[0],j[1],Object(a.useState)({})),m=Object(v.a)(o,2),g=(m[0],m[1],function(e){var t=c;t.toString().length+1<=16&&s(0==t?e.target.value:t+e.target.value)});function N(){return C.apply(this,arguments)}function C(){return(C=Object(x.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={cardNumbers:c},e.prev=1,e.next=4,fetch("/isValidateNumber",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numberCard:t.cardNumbers})});case 4:return n=e.sent,e.next=7,n.json();case 7:(a=e.sent)&&a.success?alert("funca locooo"):a&&!1===a.success&&(console.log("No funca!!!!"),console.log("probando "+a.msg)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:console.log(t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(n.jsxs)(u.a,{className:"mt-2",children:[Object(n.jsx)(d.a,{sm:"4",children:Object(n.jsx)(p,{var1:c,setInputValue:function(e,t){(t=t.trim()).length>16||l(Object(h.a)({},e,t))},doNumber:N})}),Object(n.jsx)(d.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:g,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:g,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:g,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:g,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:g,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:g,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:g,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:g,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:g,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&s(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:g,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:g,className:"number ok",children:"Ing"})]})]})})}),Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)(f,{Text:"Ingresar al sistema",doNumber:N})})]})}var _=function(e){return e.titulo,Object(n.jsxs)(o.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(u.a,{className:"mt-5",children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)(C,{})})})]})};var k=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{}),Object(n.jsx)(_,{})]})},S=(c(34),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))});i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.dc8214d2.chunk.js.map