(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(7),i=n.n(o),u=n(8),s=n(2),l=n(16),b=n(4),j=n.n(b),d=function(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(s.a)(n,2),o=a[0],i=a[1],u=Object(r.useState)(""),b=Object(s.a)(u,2),d=b[0],m=b[1],p=Object(l.a)(),O=Object(l.a)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o,d),i(""),m("")},children:[Object(c.jsxs)("label",{htmlFor:p,children:["Name",Object(c.jsx)("input",{id:p,type:"text",value:o,onChange:function(e){i(e.currentTarget.value)},required:!0})]}),Object(c.jsxs)("label",{htmlFor:O,children:["Number",Object(c.jsx)("input",{id:O,type:"tel",value:d,onChange:function(e){m(e.currentTarget.value)},required:!0})]}),Object(c.jsx)("button",{className:j.a.Btn,type:"submit",children:"Add contact"})]})})},m=function(e){var t=e.value,n=e.onSubmit;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Find contacts by name "}),Object(c.jsx)("input",{type:"text",value:t,onChange:n})]})},p=function(e){var t=e.contacts,n=e.delMethot;return console.log(t),Object(c.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(c.jsxs)("li",{children:[r,":",a,Object(c.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})]},t)}))})};p.defaultProps={name:"",number:""};var O=p;function f(){var e,t=Object(r.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(s.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(""),b=Object(s.a)(i,2),p=b[0],f=b[1];Object(r.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(a))}),[a]),Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("contacts"))}),[]);var h=function(){var e=p.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)||t.number.includes(e)}))}();return Object(c.jsx)("div",{className:j.a.App,children:Object(c.jsxs)("div",{className:j.a.Wrapper,children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(d,{onSubmit:function(e,t){var n={id:Object(l.a)(),name:e,number:t},c=a.map((function(e){return Object.values(e.name.toLowerCase().split(", "))}));Object.keys(c).reduce((function(e,t){return e.concat(c[t])}),[]).includes(e.toLowerCase())?alert("".concat(e," is already in contacts")):o((function(e){return[n].concat(Object(u.a)(e))}))}}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(m,{value:p,onSubmit:function(e){f((function(t){return e.target.value}))}}),Object(c.jsx)(O,{contacts:h,delMethot:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})})}i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={App:"App_App__1XEtL",Wrapper:"App_Wrapper__3lwXB",Btn:"App_Btn__2zjyL"}}},[[15,1,2]]]);
//# sourceMappingURL=main.bcd72bf2.chunk.js.map