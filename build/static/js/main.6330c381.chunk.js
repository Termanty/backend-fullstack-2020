(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(2),i=function(e){var n=e.notification;return null===n?null:r.a.createElement("p",{className:n.type},n.message)},l=function(e){var n=e.filter,t=e.handelFilterChange;return r.a.createElement("p",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.onAdd,t=e.newName,a=e.handelNameChange,u=e.newNumber,o=e.handelNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.person,t=e.onDelete;return r.a.createElement("li",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t(n.id)},"delete"))},d=function(e){var n=e.persons,t=e.filter,a=e.onDelete;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(f,{person:e,onDelete:a,key:e.name})})))},s=t(3),h=t.n(s),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},E=function(e){return h.a.post(b,e).then((function(e){return e.data}))},v=function(e){return h.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))};t(36);o.a.render(r.a.createElement((function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),f=Object(c.a)(o,2),s=f[0],h=f[1],b=Object(a.useState)(""),w=Object(c.a)(b,2),j=w[0],C=w[1],O=Object(a.useState)(""),y=Object(c.a)(O,2),N=y[0],D=y[1],k=Object(a.useState)(null),S=Object(c.a)(k,2),A=S[0],F=S[1];Object(a.useEffect)((function(){p().then((function(e){u(e)}))}),[]),Object(a.useEffect)((function(){null!==A&&(h(""),C(""),setTimeout((function(){F(null)}),5e3))}),[A]);return r.a.createElement("div",null,r.a.createElement(i,{notification:A}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(l,{filter:N,handelFilterChange:function(e){return D(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(m,{onAdd:function(e){e.preventDefault(),t.map((function(e){return e.name})).includes(s)?window.confirm("".concat(s," is already added to phonebook, do you want to change phone number"))&&function(){var e=t.find((function(e){return e.name===s})),n={id:e.id,name:s,number:j};v(n).then((function(e){u(t.map((function(n){return n.name===s?{id:e.id,name:e.name,number:e.number}:{id:n.id,name:n.name,number:n.number}}))),F({message:"Updated number for ".concat(e.name),type:"notification"})})).catch((function(n){u(t.filter((function(n){return n.id!==e.id}))),F({message:"Information of ".concat(e.name," has been removed from server"),type:"error"})}))}():E({name:s,number:j}).then((function(e){u(t.concat(e)),F({message:"Added ".concat(e.name),type:"notification"})})).catch((function(e){F({message:e.response.data.error,type:"error"})}))},newName:s,handelNameChange:function(e){return h(e.target.value)},newNumber:j,handelNumberChange:function(e){return C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:t,filter:N,onDelete:function(e){return function(){var n=t.find((function(n){return n.id===e})).name;window.confirm("Delete ".concat(n))&&g(e).then((function(){u(t.filter((function(n){return n.id!==e}))),F({message:"Deleted ".concat(n),type:"notification"})}))}}}))}),null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6330c381.chunk.js.map