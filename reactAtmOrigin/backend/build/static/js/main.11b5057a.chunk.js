(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},24:function(e,c,t){},28:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t(0),s=t.n(a),i=t(9),r=t.n(i),l=(t(22),t(23),t(11)),j=t.p+"static/media/logo.acb865cd.svg";t(24);var b=function(){return Object(n.jsxs)(l.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:j}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav"})]})},o=(t(28),t(10)),d=t(8),u=t(6),m=t(16),O=(t(14),t(15),t(7)),h=(t(30),t(31),t.p+"static/media/visaLogo.6713080c.png");var x=function(e){var c=e.num,t=Object(a.useState)(""),s=Object(O.a)(t,2),i=(s[0],s[1]),r=Object(a.useState)(!1),l=Object(O.a)(r,2),j=(l[0],l[1]),b=Object(a.useState)({}),m=Object(O.a)(b,2),x=(m[0],m[1]);return Object(n.jsx)(o.a,{fluid:"md",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:h,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)("input",{name:"numberCard",onChange:function(e){return i({name:e.target.value})},id:"numberCard",className:"btn btn-primary btn-block",type:"input",value:function(e){var c,t=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=t&&t[0]||"",a=[],s=0;for(c=n.length;s<c;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(c)})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})}),Object(n.jsx)(u.a,{sm:"12 pt-3 ml-4",children:Object(n.jsx)("button",{onClick:function(e){var t={numberCard:c};fetch("/isLoggedIn",{method:"post",header:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({numberCard:t})}).json().then((function(e){return x(e)})).catch((function(e){return j(e)})),console.log(t)},className:"btn btn-outline-primary btn-lg btn-block",children:"Ingresar al Sistema"})})]})})};function v(){var e=Object(a.useState)(0),c=Object(O.a)(e,2),t=c[0],s=c[1],i=Object(a.useState)(!1),r=Object(O.a)(i,2),l=(r[0],r[1],Object(a.useState)({})),j=Object(O.a)(l,2);j[0],j[1];Object(a.useEffect)((function(){}));var b=function(e){var c=t;c.toString().length+1<=16&&s(0==c?e.target.value:c+e.target.value),console.log(t)};return Object(n.jsxs)(d.a,{className:"mt-2",children:[Object(n.jsx)(u.a,{sm:"4",children:Object(n.jsx)(x,Object(m.a)({},{num:t}))}),Object(n.jsx)(u.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:b,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:b,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:b,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:b,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:b,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:b,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:b,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:b,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:b,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=t&&s(t.substring(0,t.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:b,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:b,className:"number ok",children:"Ing"})]})]})})})]})}var g=function(e){return e.titulo,Object(n.jsxs)(o.a,{children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(d.a,{className:"mt-5",children:Object(n.jsx)(u.a,{sm:"12",children:Object(n.jsx)(v,{})})})]})};var f=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{}),Object(n.jsx)(g,{})]})},N=(t(32),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,i=c.getTTFB;t(e),n(e),a(e),s(e),i(e)}))});r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.11b5057a.chunk.js.map