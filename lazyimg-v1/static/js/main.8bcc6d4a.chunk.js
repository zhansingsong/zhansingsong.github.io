(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],[,,,,,,function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.LazyimgWrapper=t.withLazyimg=t.ID=void 0;var s=n(1);n(23);var c=n(24);t.ID=Date.now()+"";t.withLazyimg=function(e){void 0===e&&(e={});return function(n){var r=a(a(a({},{force:!1,element:"img",placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",animateType:"transition",isLazyimgWrapper:!1,timeout:300,root:null,rootMargin:"0px",threshold:0,loaded:function(){},end:function(){}}),e),n),l=r.force,o=r.element,m=r.placeholder,d=r.animateType,p=r.animateClassName,g=r.isLazyimgWrapper,j=r.timeout,u=r.parent,h=r.src,b=r.srcSet,f=r.root,y=r.rootMargin,x=r.threshold,O=r.children,v=r.loaded,N=void 0===v?function(){}:v,z=r.end,w=void 0===z?function(){}:z,L=i(r,["force","element","placeholder","animateType","animateClassName","isLazyimgWrapper","timeout","parent","src","srcSet","root","rootMargin","threshold","children","loaded","end"]),A=s.useRef(null),k=s.useRef(null),E=s.useRef({isLoaded:!1}),T=s.useState(!1),C=T[0],S=T[1],I=s.useState(!1),P=I[0],W=I[1];if("transition"===d&&void 0===p&&(p=["lazyimg-enter","lazyimg-enter-active"],c.appendStyle("\n      .lazyimg-exit {\n        opacity: 0.9;\n      }\n      .lazyimg-exit-active {\n        opacity: 0;\n        transition: opacity 300ms;\n      }\n      .lazyimg-enter {\n        opacity: 0.1;\n      }\n      .lazyimg-enter-active {\n        opacity: 1;\n        transition: opacity 300ms;\n      }\n    "),g&&!C&&(p=["lazyimg-exit","lazyimg-exit-active"])),g&&!C){var _=w;w=function(e){_(e),S(!0)}}s.useEffect((function(){if(A.current&&!l&&E.current.isLoaded){if("function"===typeof N)if(N(A.current))return;var e=A.current;void 0!==u&&(g?console.warn('[Lazyimg] \u26a0\ufe0f "parent" property invalid, as "isLazyimgWrapper" property takes a priority over "parent" property. if you need "parent" property, able to turn "isLazyimgWrapper" property off.'):e="number"===typeof u?c.parentLevel(A.current,u)||A.current:c.parents(A.current,u)||A.current),"none"!==d&&c.animate(d,e,p,j,w)}}),[P]),s.useEffect((function(){C&&w(A.current)}),[C,w]),s.useEffect((function(){if(!l){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&null!==A.current&&(!function(e,t){var n=new Image;n.src=e,void 0!==t&&(n.srcset=t),n.onload=function(){W(!0),E.current.isLoaded=!0},n.onerror=function(){W(!1),E.current.isLoaded=!1}}(h,b),e.unobserve(A.current),e.disconnect())}),{root:f,rootMargin:y,threshold:x});return A.current&&e.observe(A.current),function(){e.disconnect()}}}),[h]);var D=a({ref:A,key:t.ID},L),M=function(e){var t=D.height?D.height:void 0,n=D.width?D.width:void 0;return D.style=a(a({height:t,width:n},{backgroundImage:"url('"+h+"')",backgroundSize:t&&n?n+"px "+t+"px":void 0}),D.style),D.height=void 0,D.width=void 0,s.createElement(o,a(a({},D),e),O)};if(P||l){if(g&&!C&&!l)return s.createElement(s.Fragment,null,s.cloneElement(k.current,{key:"ph-"+t.ID,style:a({position:"absolute",top:0,left:0},k.current.props.style)}),"img"===o?s.createElement(o,a(a({},D),{src:h,srcSet:b||void 0,ref:void 0}),O):M({ref:void 0}));"img"===o?(D.src=h,void 0!==b&&(D.srcSet=b),k.current=s.createElement(o,D,O)):k.current=M()}else if(s.isValidElement(m)){var R={display:"inline-block",height:D.height?D.height:void 0,width:D.width?D.width:void 0};k.current=s.createElement("div",a(a({},D),{style:a(a({},R),m.props.wrapperStyle)}),s.cloneElement(m))}else"img"===o?D.src=m:D.style&&(D.style=a(a({},D.style),{backgroundImage:"url('"+m+"')"})),k.current=s.createElement(o,D,O);return k.current}};t.LazyimgWrapper=function(e){var t=e.element,n=void 0===t?"div":t,c=e.children,r=e.style,l=i(e,["element","children","style"]),o=s.Children.only(c);return c&&(o=s.cloneElement(o,{isLazyimgWrapper:!0})),s.createElement(n,a({style:a({position:"relative"},r)},l),o)},t.default=t.withLazyimg()},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parents=t.parentLevel=t.animate=t.appendStyle=void 0;var a=function(){if("undefined"===typeof window)return{};var e=document.createElement("b"),t=Object.create(null);return[{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}].forEach((function(n,a){Object.keys(n).forEach((function(i){void 0!==e.style[i]&&(t[0===a?"transition":"animation"]=n[i])}))})),t}();t.appendStyle=function(e,t){if(!document.head.querySelector("#lazyimg")){var n=document.createElement("style");n.id=t||"lazyimg",document.head.appendChild(n),n.type="text/css",n.appendChild(document.createTextNode(e))}},t.animate=function(e,t,n,i,s){var c;if(void 0===t||void 0===n||void 0===i)throw new Error("[react-lazyimg] "+(void 0===t?"element":"")+(void 0===n?"animateClassName":"")+(void 0===i?"timeout":"")+" parameter is required.");var r=a[e];if("transition"===e)t.classList.add(n[0]),t.scrollTop,t.classList.add(n[1]);else{var l=n;Array.isArray(n)||(l=[n]),(c=t.classList).add.apply(c,l)}!function(){var e=function(){var e;(e=t.classList).remove.apply(e,n),s(t)};if(r){t.addEventListener(r,(function n(){e(),t.removeEventListener(r,n,!1)}),!1)}else{setTimeout((function(){e()}),i)}}()},t.parentLevel=function(e,t){for(var n=e;t;){if(9===(n=n.parentNode).nodeType)return null;--t}return n},t.parents=function e(t,n){var a=t.parentNode;return 9===a.nodeType?null:Array.prototype.slice.call(document.querySelectorAll(n),0).some((function(e){return e===a}))?a:e(a,n)}},function(e,t,n){var a={"./bg1.jpg":26,"./bg10.jpg":27,"./bg11.jpg":28,"./bg12.jpg":29,"./bg2.jpg":30,"./bg3.jpg":31,"./bg4.jpg":32,"./bg5.png":33,"./bg6.jpg":34,"./bg7.jpg":35,"./bg8.jpg":36,"./bg9.jpg":37};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=25},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg1.5100b40f.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg10.aa827b2a.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg11.d390af9a.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg12.e5b3e9b1.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg2.7de1c1e8.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg3.a8a3e89c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg4.02651f08.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg5.82295415.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg6.59d728a1.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg7.f3d251ca.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg8.74101adb.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg9.26e57afc.jpg"},function(e,t,n){var a={"./1.jpg":39,"./11.jpg":40,"./2.jpg":41,"./22.jpg":42,"./3.jpg":43,"./33.jpg":44,"./4.jpg":45,"./44.jpg":46,"./55.jpg":47,"./66.jpg":48,"./77.jpg":49};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=38},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.afc30229.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/11.7056ce5e.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.9b947335.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/22.feef634c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3.cb9859a4.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/33.9c466456.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/4.e114351a.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/44.1c3f8ee0.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/55.0408af4b.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/66.34435710.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/77.d99a007e.jpg"},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(9),r=n.n(c),l=(n(16),n(17),n(2)),o=n(3),m=n(5),d=n(4),p=(n(18),n(19),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?"\u6807\u9898":t,i=e.className;e.style;return Object(a.jsx)("h2",{className:["title",i].filter((function(e){if(e)return e})).join(" "),children:n})}}]),n}(i.Component)),g=n.p+"static/media/lazyimg.a7c0be52.png",j=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("div",{className:"header-wp",children:[Object(a.jsxs)("h1",{className:"header-tt",children:[Object(a.jsx)("i",{className:"c1",children:"react-"}),Object(a.jsxs)("i",{className:"c2",children:["lazyimg-component",Object(a.jsx)("em",{className:"version",children:"v1.0.0"})]})]}),Object(a.jsxs)("p",{className:"header-desc",children:[Object(a.jsx)("strong",{className:"tt",children:"react-lazyimg-component v1.0.0"})," \u662f\u4f7f\u7528 "," ",Object(a.jsx)("a",{href:"https://www.typescriptlang.org/",target:"blank",className:"link link-a",children:"Typescript"}),"\u3001",Object(a.jsx)("a",{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html",target:"blank",className:"link link-a",children:"React Hooks"}),"\u3001",Object(a.jsx)("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",target:"blank",className:"link link-a",children:"Intersection Observer API"}),"\u5b8c\u5168\u91cd\u6784\u7684\uff0cReact \u56fe\u7247\u61d2\u52a0\u8f7d\u5c0f\u7ec4\u4ef6\u3002\u5e76\u4e14\u7ec4\u4ef6\u53c2\u8003\u4e86",Object(a.jsx)("a",{href:"https://reactcommunity.org//switch-transition",target:"blank",className:"link link-a",children:"React Transition Group \u7684 SwitchTransition"})," \u52a8\u753b\u5b9e\u73b0\u539f\u7406 \uff0c\u5f15\u5165\u5168\u65b0\u7684\u6e10\u8fdb\u6027\u81ea\u7136\u8fc7\u6e21\u6548\u679c(\u5982\u4e0b\u56fe ",Object(a.jsx)("strong",{children:"\u65b9\u6848 B"})," \u6240\u793a\uff09\u3002"]}),Object(a.jsx)("img",{className:"header-img",src:g}),Object(a.jsx)(p,{title:"\u7279\u5f81",className:"htt"}),Object(a.jsxs)("ul",{className:"header-list",children:[Object(a.jsx)("li",{children:"Typescript \u9759\u6001\u7c7b\u578b\u68c0\u67e5\uff0c\u53cb\u597d\u7684\u4ee3\u7801\u63d0\u793a\u4e0e\u8865\u5168"}),Object(a.jsx)("li",{children:"React Hooks \u5b9e\u73b0"}),Object(a.jsx)("li",{children:"Intersection Observer API \u53d6\u4ee3 scroll \u4e8b\u4ef6\uff0c\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\uff0c\u6027\u80fd\u66f4\u597d\u3002\u5e76\u4e14\u505a\u4e86\u517c\u5bb9\u5904\u7406"}),Object(a.jsx)("li",{children:"\u517c\u5bb9\u670d\u52a1\u7aef\u6e32\u67d3"}),Object(a.jsx)("li",{children:"\u9ed8\u8ba4\u5f00\u542f\u5168\u65b0\u7684\u6e10\u8fdb\u6027\u81ea\u7136\u8fc7\u6e21\u6548\u679c"}),Object(a.jsx)("li",{children:'\u5b9a\u5236\u9ed8\u8ba4 "props"'}),Object(a.jsx)("li",{children:"\u5c0f\u5de7\u8f7b\u4fbf\uff0c\u7b80\u5355\u6613\u7528\uff0c\u57fa\u672c\u65e0\u5b66\u4e60\u6210\u672c"}),Object(a.jsx)("li",{children:"\u652f\u6301 react \u7ec4\u4ef6\u5f0f placeholder"}),Object(a.jsx)("li",{children:"\u652f\u6301\u52a8\u753b\u6548\u679c\u4f5c\u7528\u4e8e\u7236\u7ea7\u5143\u7d20"}),Object(a.jsx)("li",{children:"\u652f\u6301\u54cd\u5e94\u5f0f\u56fe\u7247( picture / srcset )"})]})]})})}}]),n}(i.Component),u=(n(20),n(21),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"language-javascript":t,i=e.children;return Object(a.jsx)("pre",{className:n,children:Object(a.jsx)("code",{children:i})})}}]),n}(i.Component)),h=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"usage",children:Object(a.jsxs)("div",{className:"usage-wp",children:[Object(a.jsx)(p,{title:"\u5b89\u88c5"}),Object(a.jsx)("div",{className:"usage-cnt",children:Object(a.jsx)(u,{className:"language-javascript",children:"\n  // npm\n  $> npm install react-lazyimg-component\n  // yarn\n  $> yarn add react-lazyimg-component\n            "})}),Object(a.jsx)(p,{title:"\u5feb\u901f\u5165\u95e8"}),Object(a.jsx)("div",{className:"usage-cnt",children:Object(a.jsx)(u,{className:"language-javascript",children:"\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg from 'react-lazyimg-component';\n  // \u8c03\u7528\n  <Lazyimg \n    className=\"lazy\"\n    src={'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg'}\n  />\n            "})})]})})}}]),n}(i.Component),b=(n(22),n(6)),f=n.n(b),y=n(25),x=y.keys().map((function(e){return y(e).default})),O=function(){return x.pop()},v=n(38),N=v.keys().map((function(e){return v(e).default})),z=function(){return N.pop()},w=n(8),L=n(10),A=(n(50),function(e){var t=e.className,n=e.text,i=e.img,s=Object(L.a)(e,["className","text","img"]);return Object(a.jsxs)("div",Object(w.a)(Object(w.a)({className:["placeholder",t].filter((function(e){if(e)return e})).join(" ")},s),{},{children:[i&&Object(a.jsx)("img",{src:i,className:"placeholder-img"}),n&&Object(a.jsx)("span",{className:"placeholder-text",children:n})]}))}),k=n.p+"static/media/loading.7edbc42f.svg",E=n.p+"static/media/fire.bdee39b1.svg",T=(n(51),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.icon,n=(e.text,e.className),i=e.children;return Object(a.jsxs)("div",{className:["i",n].filter((function(e){if(e)return e})).join(" "),children:[Object(a.jsx)("i",{className:"i-icon",children:t}),i||Text]})}}]),n}(i.Component)),C=Object(b.withLazyimg)({placeholder:Object(a.jsx)(A,{img:k}),threshold:.98}),S=Object(b.withLazyimg)({placeholder:Object(a.jsx)(A,{img:k}),timeout:1e3,threshold:.98}),I=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"example",children:[Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"\u9ed8\u8ba4\u914d\u7f6e",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(f.a,{className:"lazy",src:O(),width:"100%",height:"100%",threshold:1})}),Object(a.jsx)(u,{children:"\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg from 'react-lazyimg-component';\n  // \u8c03\u7528\n  <Lazyimg \n    className=\"lazy\"\n    src={'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg'}\n  />\n            "})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:'\u4f7f\u7528 "LazyimgWrapper" \u5f00\u542f\u6e10\u8fdb\u6027\u8fc7\u6e21\u6548\u679c',className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(b.LazyimgWrapper,{style:{height:"100%",width:"100%"},children:Object(a.jsx)(f.a,{className:"lazy",src:O(),threshold:.98})})}),Object(a.jsx)(u,{children:"\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg, { LazyimgWrapper } from 'react-lazyimg-component';\n  <LazyimgWrapper>\n    <Lazyimg \n      className=\"lazy\"\n      src={'http://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg'}\n    />\n  </LazyimgWrapper>\n            "})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"placeholder \u7ec4\u4ef6",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(f.a,{className:"lazy",placeholder:Object(a.jsx)(A,{img:E}),src:O(),animateType:"animation",animateClassName:["animated","rollIn"],timeout:1e3})}),Object(a.jsxs)(T,{className:"i",children:["\u63d0\u793a\uff1a\u5982\u679c\u666e\u901a\u7684",Object(a.jsx)("strong",{className:"strong",children:"placeholder"}),"\u56fe\u7247\u4e0d\u80fd\u6ee1\u8db3\u4f60\uff0c\u53ef\u4ee5\u5b9a\u5236\u4e00\u4e2a react placeholder \u7ec4\u4ef6\u54e6\ud83d\ude1d"]}),Object(a.jsx)(u,{children:"\n  // \u5b9a\u4e49 placeholder \u7ec4\u4ef6\n  import React from 'react';\n  import './style.scss';\n  export default props => {\n    let { className, text, img, children } = props;\n    return (\n      <div\n        className={['placeholder', className]\n          .filter(item => {\n            if (item) {\n              return item;\n            }\n          })\n          .join(' ')}\n      >\n      { img && <img src={img} className=\"placeholder-img\" />}\n      { text && <span className=\"placeholder-text\" >{children || text}</span> }\n      </div>\n    );\n  };\n\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg from 'react-lazyimg-component';\n  // \u5f15\u5165 Placeholder\n  import Placeholder from './Placeholder';\n  // \u5f15\u5165 fire.svg\n  import Fire from './img/fire.svg';\n\n  <Lazyimg\n    placeholder={<Placeholder img={Fire} />}\n    animateType=\"animation\"\n    animateClassName={['animated', 'rollIn']}\n    className=\"lazy\"\n    timeout={1000}\n    src={'http://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg'}\n  />\n            "})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:'\u4f7f\u7528 "withLazying" \u914d\u7f6e react \u7ec4\u4ef6\u5f0f placeholder',className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(b.LazyimgWrapper,{style:{height:"100%",width:"100%"},children:Object(a.jsx)(C,{className:"lazy",src:O()})})}),Object(a.jsx)(u,{children:"\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg, { LazyimgWrapper, withLazyimg } from 'react-lazyimg-component';\n  // \u5f15\u5165 Placeholder\n  import Placeholder from './Placeholder';\n  // \u5f15\u5165 loading.svg\n  import Loading from './img/loading.svg';\n  // \u4f7f\u7528 withLazyimg \u914d\u7f6e\n  const Lazy = withLazyimg({\n    placeholder: <Placeholder img={Loading} />,\n    threshold:0.98,\n  });\n  <LazyimgWrapper style={{height: \"100%\", width: \"100%\"}}>\n    <Lazy \n      className=\"lazy\"\n      src={'http://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg'}\n    />\n  </LazyimgWrapper>\n            "})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"transition \u52a8\u753b\u6548\u679c",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(C,{animateType:"transition",animateClassName:["transition-enter","transition-enter-active"],className:"lazy",src:O()})}),Object(a.jsxs)(T,{className:"i-error",children:["\u6ce8\u610f\uff1a\u8fd9\u91cc ",Object(a.jsx)("strong",{className:"strong key",children:'"transition"'})," \u4f7f\u7528\u7684\u662f"," ",Object(a.jsx)("strong",{className:"strong",children:"\u8fdb\u52a8\u753b\uff08\u4e0d\u53ef\u89c1 ---\x3e \u53ef\u89c1\uff09"}),"\u3002\u5982\u679c\u4f7f\u7528"," ",Object(a.jsx)("strong",{className:"strong key",children:'"LazyimgWrapper"'}),"\uff0c\u5c31\u9700\u8981\u4f7f\u7528",Object(a.jsx)("strong",{className:"strong",children:"\u51fa\u52a8\u753b\uff08\u53ef\u89c1 ---\x3e \u4e0d\u53ef\u89c1\uff09"}),"\u3002\u540c\u65f6\u9700\u8981\u6307\u5b9a ",Object(a.jsx)("strong",{className:"code",children:"timeout={400}"})]}),Object(a.jsx)(u,{children:"\n  // transition css\n  .transition-enter {\n    opacity: 0;\n    transform: scale(1.04);\n  }\n\n  .transition-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: opacity 400ms, transform 400ms;\n  }\n            "}),Object(a.jsx)(u,{children:"\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg from 'react-lazyimg-component';\n\n  <Lazyimg\n    animateType=\"transition\"\n    animateClassName={['transition-enter', 'transition-enter-active']}\n    className=\"lazy\"\n    timeout={300}\n    src={'http://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg'}\n  />\n            "})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"animate.css \u52a8\u753b\u6548\u679c",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(b.LazyimgWrapper,{style:{height:"100%",width:"100%"},children:Object(a.jsx)(C,{animateType:"animation",animateClassName:["animated","slideOutDown"],className:"lazy",src:O()})})}),Object(a.jsxs)(T,{className:"i-error",children:["\u6ce8\u610f\uff1a\u8fd9\u91cc ",Object(a.jsx)("strong",{className:"strong key",children:'"animation"'})," \u4f9d\u8d56\u4e8e",Object(a.jsx)("a",{className:"strong link",href:"https://github.com/daneden/animate.css",target:"blank",children:"animate.css"}),"\uff0c \u5e76\u4e14\u4f7f\u7528\u4e86 ",Object(a.jsx)("strong",{className:"strong key",children:'"LazyimgWrapper"'}),"\uff0c\u5c31\u9700\u8981\u4f7f\u7528",Object(a.jsx)("strong",{className:"strong",children:"\u51fa\u52a8\u753b\uff08\u53ef\u89c1 ---\x3e \u4e0d\u53ef\u89c1\uff09"}),"\uff0c\u5982 ",Object(a.jsx)("strong",{children:'"slideOutDown"'}),"\u3002\u540c\u65f6\u9700\u8981\u6307\u5b9a ",Object(a.jsx)("strong",{className:"code",children:"timeout={1000}"})]}),"\u3002",Object(a.jsx)(u,{children:'\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg, { LazyimgWrapper, withLazyimg } from \'react-lazyimg-component\';\n  // \u5f15\u5165 Placeholder\n  import Placeholder from \'../Placeholder\';\n  // \u5f15\u5165 loading.svg\n  import Loading from \'../../img/loading.svg\';\n  // \u4f7f\u7528 withLazyimg \u914d\u7f6e\n  const Lazy = withLazyimg({\n    placeholder: <Placeholder img={Loading} />,\n    threshold:0.98\n  });\n  <LazyimgWrapper style={{height: "100%", width: "100%"}}>\n    <Lazy \n      animateType="animation"\n      animateClassName={["animated","slideOutDown"]}\n      timeout={1000}\n      className="lazy"\n      src={\'http://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg\'}\n    />\n  </LazyimgWrapper>\n            '})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"\u57fa\u4e8e loaded \u94a9\u5b50\u51fd\u6570\u81ea\u5b9a\u4e49\u52a8\u753b\u6548\u679c",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(f.a,{className:"lazy",src:O(),loaded:function(e){return window.Velocity(e,"transition.whirlIn",{duration:600}),!0}})}),Object(a.jsxs)(T,{className:"i",children:["\u63d0\u793a\uff1a\u5982\u679c",Object(a.jsxs)("a",{className:"link strong",href:"https://github.com/daneden/animate.css",target:"blank",children:[" ","animate.css"]}),"\u548c",Object(a.jsx)("a",{className:"link strong",href:"https://github.com/julianshapiro/velocity",target:"blank",children:"velocity.js"}),"\u52a8\u753b\u5e93\u90fd\u4e0d\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u3002\u53ef\u4ee5\u57fa\u4e8e",Object(a.jsx)("strong",{className:"strong key",children:'"loaded"'})," \u914d\u7f6e\u9879\u81ea\u5b9a\u4e49\u52a8\u753b\u6548\u679c\u3002\u53e6\u5916\uff0c\u9700\u8981\u786e\u4fdd",Object(a.jsx)("strong",{className:"strong key",children:'"loaded"'})," \u8fd4\u56de\u503c\u4e3a",Object(a.jsx)("strong",{className:"code",children:'"return true;"'}),"\uff0c\u8fd9\u6837\u53ef\u4ee5",Object(a.jsx)("strong",{children:"\u907f\u514d\u6267\u884c\u9ed8\u8ba4\u52a8\u753b\u903b\u8f91"}),"\u3002"]}),Object(a.jsx)(u,{children:"\n  // \u5f15\u5165 react-lazyimg-component\n  import Lazyimg from 'react-lazyimg-component';\n  // \u8c03\u7528\n  <Lazyimg\n    className=\"lazy\"\n    src={'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg'}\n    loaded={(el)=>{ // \u81ea\u5b9a\u4e49\u52a8\u753b\u6548\u679c\n      window.Velocity(el, 'transition.whirlIn', { // \u9700\u8981\u5f15\u5165 Velocity \u52a8\u753b\u5e93\n        duration: 600,\n      });\n      // \u907f\u514d\u6267\u884c\u9ed8\u8ba4\u52a8\u753b\u903b\u8f91\n      return true;\n    }}\n  />\n            "})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"\u7236\u7ea7\u52a8\u753b\u6548\u679c",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(C,{className:"lazy",src:O(),parent:2,animateType:"animation",animateClassName:["animated","flipInY"]})}),Object(a.jsx)(T,{className:"i-desc",children:"\u5f53\u56fe\u7247\u5143\u7d20\u52a0\u8f7d\u5b8c\uff0c\u52a8\u753b\u6548\u679c\u4f1a\u4f5c\u7528\u5728\u6307\u5b9a\u7684\u7236\u7ea7\u5143\u7d20\u4e0a\u3002"}),Object(a.jsx)(u,{children:'\n  <div className="example-wp"> // \u6307\u5b9a\u52a8\u753b\u6548\u679c\u4f5c\u7528\u4e8e\u8be5\u7236\u7ea7\u5143\u7d20\n    <Title title="\u7236\u7ea7\u52a8\u753b\u6548\u679c" className="sub" />\n    <div className="example-img">\n      <Lazyimg\n        className="lazy"\n        src={\'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg\'}\n        animateType="animation"\n        animateClassName={[\'animated\', \'flipInY\']}\n        timeout={1000}\n        parent=".example-wp" // \u6307\u5b9a\u7236\u7ea7\u5143\u7d20\u9009\u62e9\u5668\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u7236\u7ea7\u5c42\u7ea7level\uff1a2\n      />\n    </div>\n  </div>\n            '})]}),Object(a.jsxs)("div",{className:"example-wp",children:[Object(a.jsx)(p,{title:"\u54cd\u5e94\u5f0f\u56fe\u7247( picture / srcset )",className:"sub"}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(S,{className:"lazy",src:O(),srcSet:"".concat(z()," 1x, ").concat(z()," 2x, ").concat(z()," 3x"),animateType:"animation",animateClassName:["animated","bounceIn"]})}),Object(a.jsxs)(T,{className:"i-desc",children:["\u54cd\u5e94\u5f0f\u56fe\u7247\uff1a",Object(a.jsx)("strong",{className:"strong",children:"srcSet"}),"\u7684\u4f7f\u7528"]}),Object(a.jsx)(u,{children:"\n  // dpr\n  <Lazyimg\n    className=\"lazy\"\n    src={'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg'}\n    srcSet=\"source_1x.png 1x, source_2x.png 2x, source_3x.png 3x, source_3.5x.png 3.5x\"\n    timeout={1000}\n    animateType=\"animation\"\n    animateClassName={['animated', 'bounceIn']}\n  />\n            "}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsx)(C,{className:"lazy",src:O(),srcSet:"".concat(z()," 360w, ").concat(z()," 640w, ").concat(z()," 980w"),sizes:"(max-width: 370px) 90vw, (max-width: 640px) 100vw,(max-width: 980px) 100vw, 1300",animateType:"animation",animateClassName:["animated","bounceIn"]})}),Object(a.jsxs)(T,{className:"i-desc",children:["\u54cd\u5e94\u5f0f\u56fe\u7247\uff1a",Object(a.jsx)("strong",{className:"strong",children:"srcSet"}),"\u548c",Object(a.jsx)("strong",{className:"strong",children:"sizes"}),"\u7684\u4f7f\u7528"]}),Object(a.jsx)(u,{children:'\n// media-query\u3001srcSet\u3001sizes\n  <Lazyimg\n    className="lazy"\n    src={\'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg\'}\n    srcSet="source_360.png 360w, source_640.png 640w, source_980.png 980w, source_1290.png 1290w"\n    sizes="(min-width: 370px) 100vw, (min-width: 640px) 75vw,(max-width: 980px) 50vw, 360"\n    timeout={1000}\n    animateType="animation"\n    animateClassName={[\'animated\', \'bounceIn\']}\n  />\n            '}),Object(a.jsx)("div",{className:"example-img",children:Object(a.jsxs)("picture",{style:{position:"relative",display:"block",height:"100%"},children:[Object(a.jsx)("source",{media:"(min-width: 650px)",srcSet:z()}),Object(a.jsx)("source",{media:"(min-width: 465px)",srcSet:z()}),Object(a.jsx)(S,{className:"lazy",src:O(),animateType:"animation",animateClassName:["animated","zoomIn"]})]})}),Object(a.jsxs)(T,{className:"i-desc",children:["\u54cd\u5e94\u5f0f\u56fe\u7247\uff1a",Object(a.jsx)("strong",{className:"strong",children:"picture"}),"\u7684\u4f7f\u7528"]}),Object(a.jsx)(u,{children:'\n  <picture>\n      <source media="(min-width: 650px)" srcSet="https://www.w3schools.com/tags/img_pink_flowers.jpg" />\n      <source media="(min-width: 465px)" srcSet="https://www.w3schools.com/tags/img_white_flower.jpg"/>\n      <Lazyimg\n        className="lazy"\n        src={\'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg\'}\n        timeout={1000}\n        animateType="animation"\n        animateClassName={[\'animated\', \'zoomIn\']}\n    />\n  </picture>\n            '})]})]})}}]),n}(i.Component);var P=function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(j,{}),Object(a.jsx)(h,{}),Object(a.jsx)(I,{})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};n(52),n(53);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),W()}],[[54,1,2]]]);
//# sourceMappingURL=main.8bcc6d4a.chunk.js.map