(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),i=a(6),m=a(1),o=(a(21),function(){return l.a.createElement("h1",null,"Home page")}),u=(a(22),function(e){var t=e.tabId,a=e.title;return l.a.createElement("div",null,l.a.createElement(i.b,{to:"/tabs/".concat(t),className:"nav__link"},a))}),s=(a(28),function(e){var t=e.tabs,a=e.tabId,n=t.find((function(e){return e.id===a}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Tabs"),l.a.createElement("nav",null,l.a.createElement("ul",{className:"tabs__nav"},t.map((function(e){return l.a.createElement("li",{key:e.title},l.a.createElement(u,{tabId:e.id,title:e.title}))})))),l.a.createElement("div",{className:"tabs__content"},n&&n.content))}),b=(a(29),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"menu"},l.a.createElement("span",null,l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("span",null,l.a.createElement(i.b,{to:"/tabs"},"Tabs"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:o}),l.a.createElement(m.a,{path:"/tabs/:id?",render:function(e){var t=e.match;return l.a.createElement(s,{tabs:b,tabId:t.params.id})}})))};r.a.render(l.a.createElement(i.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b7cf234e.chunk.js.map