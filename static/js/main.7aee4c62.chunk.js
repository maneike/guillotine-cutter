(this["webpackJsonpguillotine-cutter"]=this["webpackJsonpguillotine-cutter"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),r=n.n(i),s=n(6),a=n.n(s),l=(n(42),n(43),n(34)),j=n(12),o=n(33),u=n.n(o),b=n(74);n(44),n(45);function h(e){var t=e.rectangles.map((function(e){return Object(c.jsxs)("div",{style:{width:e.w,height:e.h,backgroundColor:e.c,display:"inline-block",float:"left",position:"relative"},children:[2*e.w," x ",2*e.h]})}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"workspace",children:t})})}function d(e){var t=Object(i.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(i.useState)(""),o=Object(j.a)(a,2),d=o[0],O=o[1],p=Object(i.useState)([]),x=Object(j.a)(p,2),g=x[0],f=x[1],m=Object(i.useState)(""),v=Object(j.a)(m,2),S=v[0],y=v[1],F=Object(i.useState)(2e3),N=Object(j.a)(F,2),w=N[0],C=(N[1],Object(i.useState)(2e3)),k=Object(j.a)(C,2),A=k[0];k[1];function D(){return isNaN(r)||isNaN(d)||r<=0||d<=0||null===r||null===d?(y("Enter correct dimensions"),!1):!(r>w||d>A)||(y("Dimensions too big"),!1)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("br",{}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(""),D(),D()&&f([].concat(Object(l.a)(g),[{w:r/2,h:d/2,c:"#"+(Math.random().toString(16)+"000000").slice(2,8)}]))},children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{children:"Rectangle dimensions:"}),"Width: ",Object(c.jsx)("input",{type:"text",placeholder:"e.g. 200",value:r,onChange:function(e){return s(e.target.value)},autoFocus:!0})," Height: ",Object(c.jsx)("input",{type:"text",placeholder:"e.g. 100",value:d,onChange:function(e){return O(e.target.value)}})]}),Object(c.jsx)("p",{style:{color:"crimson"},children:S}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Add"}),Object(c.jsx)(b.a,{title:"Some rectangles may appear invisible. That's because the color of the figures probably matches the background color.",children:Object(c.jsx)(u.a,{})})]}),Object(c.jsxs)("p",{children:["Current space: ",w," x ",A]}),Object(c.jsx)(h,{rectangles:g})]})}var O=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Guillotine-cutter App"})}),Object(c.jsx)(d,{}),Object(c.jsx)("p",{className:"version",children:"v1.0.46"})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[56,1,2]]]);
//# sourceMappingURL=main.7aee4c62.chunk.js.map