(this["webpackJsonpjob-finder-2"]=this["webpackJsonpjob-finder-2"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(13),l=c.n(a),i=(c(19),c(4)),o=(c(20),c.p+"static/media/loading.11562bdd.gif"),d=c.p+"static/media/404.ed881872.png",r=(c(21),c(0));var j=function(e){var t=e.newQuery,c=Object(s.useRef)(),n=Object(s.useRef)();return Object(r.jsx)("div",{className:"form",children:Object(r.jsxs)("form",{action:"",children:[Object(r.jsx)("input",{ref:c,type:"text",placeholder:"Job Description"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{ref:n,type:"text",placeholder:"Location"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){t(c.current.value,n.current.value)},type:"button",children:"Search"})]})})},b=(c(23),c.p+"static/media/job-logo.bb022661.svg");function u(e){var t,c=e.job,s="id-"+c.id;return Object(r.jsxs)("div",{className:"job-card",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("img",{src:null!==(t=c.company_logo)&&void 0!==t?t:b,alt:""})}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:c.title})}),Object(r.jsx)("div",{className:"company",children:Object(r.jsx)("h4",{children:c.company})}),Object(r.jsx)("div",{className:"type",children:Object(r.jsx)("p",{children:c.type})}),Object(r.jsx)("a",{className:"link",href:c.company_url,children:Object(r.jsx)("button",{className:"custom-btn",type:"button",children:"Apply"})}),Object(r.jsx)("button",{type:"button",className:"custom-btn details","data-bs-toggle":"modal","data-bs-target":"#"+s,children:"Details"}),Object(r.jsx)("div",{className:"modal fade",id:s,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:c.title}),Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsxs)("div",{className:"extra",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h3",{children:"Job Description"}),Object(r.jsx)("div",{className:"desc",dangerouslySetInnerHTML:{__html:"".concat(c.description)}})]}),Object(r.jsxs)("div",{className:"how-to-apply",children:[Object(r.jsx)("h3",{children:"How to Apply?"}),Object(r.jsx)("div",{className:"desc",dangerouslySetInnerHTML:{__html:"".concat(c.how_to_apply)}})]})]})}),Object(r.jsxs)("div",{className:"modal-footer",children:[Object(r.jsx)("button",{className:"custom-btn details",type:"button","data-bs-dismiss":"modal",children:"Close"}),Object(r.jsx)("a",{className:"link",href:c.company_url,children:Object(r.jsx)("button",{className:"custom-btn",type:"button",children:"Apply"})})]})]})})})]})}u.defaulProps={company_logo:"https://media-exp1.licdn.com/dms/image/C4D0BAQHluPICZRkHsA/company-logo_200_200/0/1577449468769?e=2159024400&v=beta&t=SU8ArbCWLdttCIu6Qpc89ppAabgH_Q4r4ERr78bOP28",title:"Fullstack Developer",company:"Clarusway",type:"Full-time",company_url:"https://clarusway.com/",id:"xyz"};var m=u;c(24);var h=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("img",{src:b,alt:""}),Object(r.jsx)("h1",{children:"GITHUB JOB FINDER"})]})},p=c(14),x=c.n(p);var O=function(){return Object(r.jsx)("div",{children:"Designed by Xyz"})};var v=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(),l=Object(i.a)(a,2),b=l[0],u=l[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{}),Object(r.jsx)(j,{newQuery:function(e,t){n(!0),x()({method:"get",url:"/positions.json?description=".concat(e,"&location=").concat(t)}).then((function(e){u(e.data)})).catch((function(e){return console.log(e)})).finally((function(){return n(!1)}))}}),0===(null===b||void 0===b?void 0:b.length)?Object(r.jsx)("img",{src:d,alt:""}):null,c?Object(r.jsx)("img",{src:o,alt:"",srcSet:""}):null,null===b||void 0===b?void 0:b.map((function(e){return Object(r.jsx)(m,{job:e},e.id)})),Object(r.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.327a67ac.chunk.js.map