(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),s=c(5),i=c(1),b=c(4),l=c.n(b),r=c(0),d=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{className:"list block",children:e.map((function(t){return Object(r.jsx)("li",{className:"list__item",children:Object(r.jsx)("button",{className:l()("button is-secondary",{"is-primary is-danger":t.id===c}),type:"button",onClick:function(){return n(t)},children:t.title})},t.id)}))})})},o=(c(11),c(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(i.useState)(o[0]),e=Object(s.a)(t,2),c=e[0],n=e[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"App__container",children:[Object(r.jsx)("h1",{className:"App__title",children:"Selected tab is ".concat(c.title)}),Object(r.jsx)(d,{tabs:o,selectedTabId:c.id,onTabSelected:function(t){t.id!==c.id&&n(t)}}),Object(r.jsx)("p",{"data-cy":"tab-content",className:"App__content",children:c.content})]})})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.875f4053.chunk.js.map