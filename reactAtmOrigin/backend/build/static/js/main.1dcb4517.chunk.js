(this.webpackJsonpcard_atm_origin=this.webpackJsonpcard_atm_origin||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},24:function(e,c,t){},28:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t(0),s=t.n(a),r=t(9),i=t.n(r),l=(t(22),t(23),t(13)),b=t.p+"static/media/logo.acb865cd.svg";t(24);var j=function(){return Object(n.jsxs)(l.a,{bg:"dark",variant:"light",expand:"lg",children:[Object(n.jsx)("img",{className:"Logo-navBar",width:"180",src:b}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav"})]})},o=(t(28),t(11)),u=t(8),d=t(6),m=t(16),O=t(10),h=t.n(O),x=t(12),v=t(7),g=(t(30),t(31),t.p+"static/media/visaLogo.6713080c.png");var p=function(e){var c=e.num,t=Object(a.useState)(""),s=Object(v.a)(t,2),r=(s[0],s[1]),i=Object(a.useState)(!1),l=Object(v.a)(i,2),b=(l[0],l[1]),j=Object(a.useState)(!1),m=Object(v.a)(j,2),O=(m[0],m[1],Object(a.useState)({})),p=Object(v.a)(O,2);function f(){return(f=Object(x.a)(h.a.mark((function e(t){var n,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={numberCard:c},e.prev=1,e.next=4,fetch("/isValidateNumber",{method:"post",header:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({numberCard:n.numberCard})});case 4:return a=e.sent,console.log("segunda linea"),console.log(n),e.next=9,a.json();case 9:(s=e.sent)&&s.success?b(!0):s&&!1===s.success&&(console.log("No funca!!!!"),console.log("probando "+s.msg)),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return p[0],p[1],Object(n.jsx)(o.a,{fluid:"md",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"credit-card",children:[Object(n.jsx)("div",{className:"credit-card__logo",children:Object(n.jsx)("img",{className:"logo",src:g,width:"50"})}),Object(n.jsx)("div",{className:"credit-card__number",children:Object(n.jsx)("input",{name:"numberCard",onChange:function(e){return r({name:e.target.value})},id:"numberCard",className:"btn btn-primary btn-block",type:"input",value:function(e){var c,t=e.toString().replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),n=t&&t[0]||"",a=[],s=0;for(c=n.length;s<c;s+=4)a.push(n.substring(s,s+4));return a.length?a.join("-"):e}(c)})}),Object(n.jsxs)("div",{className:"credit-card__info",children:[Object(n.jsxs)("div",{className:"credit-card__info_name",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Globant S.A"}),Object(n.jsx)("div",{children:"Gustavo Quintana"})]}),Object(n.jsxs)("div",{className:"credit-card__info_expiry",children:[Object(n.jsx)("div",{className:"credit-card__info_label",children:"Venc:"}),Object(n.jsx)("div",{children:"05/2025"})]})]})]})}),Object(n.jsx)(d.a,{sm:"12 pt-3 ml-4",children:Object(n.jsx)("button",{onClick:function(e){return f.apply(this,arguments)},className:"btn btn-outline-primary btn-lg btn-block",children:"Ingresar al Sistema"})})]})})};function f(){var e=Object(a.useState)(0),c=Object(v.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)(!1),i=Object(v.a)(r,2),l=(i[0],i[1],Object(a.useState)({})),b=Object(v.a)(l,2);b[0],b[1];Object(a.useEffect)((function(){}));var j=function(e){var c=t;c.toString().length+1<=16&&s(0==c?e.target.value:c+e.target.value),console.log(t)};return Object(n.jsxs)(u.a,{className:"mt-2",children:[Object(n.jsx)(d.a,{sm:"4",children:Object(n.jsx)(p,Object(m.a)({},{num:t}))}),Object(n.jsx)(d.a,{sm:"8",children:Object(n.jsx)("div",{className:"calcShow",children:Object(n.jsxs)("div",{className:"numbers",children:[Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"1",className:"number",children:"1"}),Object(n.jsx)("button",{onClick:j,value:"2",className:"number",children:"2"}),Object(n.jsx)("button",{onClick:j,value:"3",className:"number",children:"3"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"4",className:"number",children:"4"}),Object(n.jsx)("button",{onClick:j,value:"5",className:"number",children:"5"}),Object(n.jsx)("button",{onClick:j,value:"6",className:"number",children:"6"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:j,value:"7",className:"number",children:"7"}),Object(n.jsx)("button",{onClick:j,value:"8",className:"number",children:"8"}),Object(n.jsx)("button",{onClick:j,value:"9",className:"number",children:"9"})]}),Object(n.jsxs)("div",{className:"numbersAnimation",children:[Object(n.jsx)("button",{onClick:function(e){0!=t&&s(t.substring(0,t.length-1))},value:"delete",className:"number",children:"<"}),Object(n.jsx)("button",{onClick:j,value:"0",className:"number",children:"0"}),Object(n.jsx)("button",{onClick:j,className:"number ok",children:"Ing"})]})]})})})]})}var N=function(e){return e.titulo,Object(n.jsxs)(o.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)("div",{className:"text-center pt-3",children:Object(n.jsx)("h2",{children:"ATM - Cajero Virtual"})})})}),Object(n.jsx)(u.a,{className:"mt-5",children:Object(n.jsx)(d.a,{sm:"12",children:Object(n.jsx)(f,{})})})]})};var C=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{}),Object(n.jsx)(N,{})]})},_=(t(32),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))});i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),_()}},[[33,1,2]]]);
//# sourceMappingURL=main.1dcb4517.chunk.js.map