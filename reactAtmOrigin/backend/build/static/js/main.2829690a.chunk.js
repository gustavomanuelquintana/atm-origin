(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),i=c(9),r=c.n(i),l=(c(22),c(23),c(13)),b=c.p+"static/media/logo.acb865cd.svg";c(24);var j=function(){return Object(n.jsxs)(l.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:b}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav"})]})},o=(c(28),c(11)),u=c(8),d=c(6),m=c(16),O=c(10),h=c.n(O),x=c(12),v=c(7),g=(c(30),c(31),c.p+"static/media/visaLogo.6713080c.png");var p=function(e){var t=e.num,c=t,s=Object(a.useState)(t),i=Object(v.a)(s,2),r=i[0],l=i[1],b=Object(a.useState)(!1),j=Object(v.a)(b,2),m=(j[0],j[1]),O=Object(a.useState)(!1),p=Object(v.a)(O,2),f=(p[0],p[1],Object(a.useState)({})),N=Object(v.a)(f,2);function C(){return(C=Object(x.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isValidateNumber",{method:"post",header:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({numberCard:r})});case 3:return c=e.sent,e.next=6,c.json();case 6:(n=e.sent)&&n.success?m(!0):n&&!1===n.success&&(console.log("No funca!!!!"),console.log("probando "+n.msg)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return N[0],N[1],Object(n.jsx)(o.a,{fluid:"md",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)("input",{name:"numberCard",onChange:function(e){return l({name:e.target.value})},id:"numberCard",className:"btn btn-primary btn-block",type:"input",value:function(e){var t,c=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=c&&c[0]||"",a=[],s=0;for(t=n.length;s<t;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(c)})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})}),Object(n.jsx)(d.a,{sm:"12 pt-3 ml-4",children:Object(n.jsx)("button",{onClick:function(e){return C.apply(this,arguments)},className:"btn btn-outline-primary btn-lg btn-block",children:"Ingresar al Sistema"})})]})})};function f(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(v.a)(i,2),l=(r[0],r[1],Object(a.useState)({})),b=Object(v.a)(l,2);b[0],b[1];Object(a.useEffect)((function(){}));var j=function(e){var t=c;t.toString().length+1<=16&&s(0==t?e.target.value:t+e.target.value),console.log(c)};return Object(n.jsxs)(u.a,{className:"mt-2",children:[Object(n.jsx)(d.a,{sm:"4",children:Object(n.jsx)(p,Object(m.a)({},{num:c}))}),Object(n.jsx)(d.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:j,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:j,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:j,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:j,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:j,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:j,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=c&&s(c.substring(0,c.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:j,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:j,className:"number ok",children:"Ing"})]})]})})})]})}var N=function(e){return e.titulo,Object(n.jsxs)(o.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(u.a,{className:"mt-5",children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)(f,{})})})]})};var C=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{}),Object(n.jsx)(N,{})]})},_=(c(32),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))});r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),_()}},[[33,1,2]]]);
//# sourceMappingURL=main.2829690a.chunk.js.map