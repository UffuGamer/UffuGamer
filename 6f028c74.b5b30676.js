(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),c=t(7),o=(t(0),t(323)),a={title:"include/sleepy_discord/websocketpp_connection.h"},p={unversionedId:"reference/Files/websocketpp__connection_8h",id:"reference/Files/websocketpp__connection_8h",isDocsHomePage:!1,title:"include/sleepy_discord/websocketpp_connection.h",description:"Namespaces",source:"@site/docs/reference/Files/websocketpp__connection_8h.md",slug:"/reference/Files/websocketpp__connection_8h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__connection_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/websocketpp_common.h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__common_8h"},next:{title:"sleepy_discord/websocketpp_websocket.cpp",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8cpp"}},i=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],s={toc:i};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(o.b)("h2",{id:"source-code"},"Source code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "websocketpp_common.h"\n\nnamespace SleepyDiscord {\n#ifndef NONEXISTENT_WEBSOCKETPP\n    typedef websocketpp::connection_hdl WebsocketConnection;\n#endif\n}\n')),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on  4 March 2021 at 22:10:49 UTC"))}l.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),l=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=l(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return t?c.a.createElement(f,p(p({ref:n},s),{},{components:t})):c.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);