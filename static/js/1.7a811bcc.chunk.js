"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[1],{7001:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var t=a(9439),r=a(2791),i="ContactForm_contactForm__y0Rca",o="ContactForm_formContainer__TWEE2",l=a(9434),c=a(6266),s=function(e){return e.contacts},u=function(e){return e.filter},d=a(2800),m=a(6151),h=a(184),f=function(){var e=(0,r.useState)(""),n=(0,t.Z)(e,2),a=n[0],u=n[1],f=(0,r.useState)(""),p=(0,t.Z)(f,2),v=p[0],x=p[1],b=(0,l.I0)(),j=(0,l.v9)(s),y=function(e){var n=e.target;switch(n.name){case"name":u(n.value);break;case"number":x(n.value);break;default:console.log("hi")}};return(0,h.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),function(e,n){if(j.items.find((function(n){return n.name===e})))return alert("".concat(e," is already in contacts"));b((0,c.uK)({name:e,number:n}))}(a,v),u(""),x("")},children:[(0,h.jsx)("h2",{children:"Phonebook"}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)(d.Z,{type:"text",name:"name",id:"outlined-basic",label:"Name",variant:"outlined",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:y,value:a,margin:"normal",placeholder:"Fill the name"}),(0,h.jsx)(d.Z,{type:"number",name:"number",id:"outlined-basic",label:"Number",variant:"outlined",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},required:!0,onChange:y,value:v,margin:"normal",placeholder:"Fill the number"}),(0,h.jsx)(m.Z,{variant:"contained",type:"submit",margin:"normal",children:"Add contact"})]})]})},p=a(3400),v=a(7247),x=function(){var e=(0,l.v9)(s),n=e.items,a=e.error,t=(0,l.v9)(u),r=(0,l.I0)(),i=n.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center",margin:5},children:[a&&(0,h.jsx)("p",{children:a}),i.length>0&&(0,h.jsx)("ul",{children:i.map((function(e){return(0,h.jsxs)("li",{children:[e.name,": ",e.number,(0,h.jsx)(p.Z,{"aria-label":"delete",type:"button",color:"primary",onClick:function(){return r((0,c.zY)(e.id))},children:(0,h.jsx)(v.Z,{})})]},e.id)}))})]})},b=a(1273),j=function(){var e=(0,l.I0)(),n=(0,l.v9)(u);return(0,h.jsx)("form",{style:{display:"flex",justifyContent:"center"},children:(0,h.jsxs)("div",{style:{display:"inline-grid"},children:[(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(d.Z,{type:"text",name:"filter",id:"outlined-basic",label:"Find contacts by name",variant:"outlined",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){var a=(0,b.Tv)(n.target.value.toLowerCase());e(a)},value:n,margin:"normal",placeholder:"Fill the name"})]})})},y=function(){var e=(0,l.I0)(),n=(0,l.v9)(s),a=n.isLoading,t=n.error;return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)(f,{}),(0,h.jsx)(j,{}),a&&!t&&(0,h.jsx)("p",{children:"Loading..."}),(0,h.jsx)(x,{})]})}},7247:function(e,n,a){var t=a(4836);n.Z=void 0;var r=t(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o}}]);
//# sourceMappingURL=1.7a811bcc.chunk.js.map