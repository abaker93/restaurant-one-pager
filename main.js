!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),c=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(c).concat([r]).join("\n")}var a,i,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(r[a]=!0)}for(var i=0;i<t.length;i++){var l=[].concat(t[i]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";e.a=n.p+"da08ee448b291b10947bf9e6999ee796.png"},function(t,e,n){"use strict";e.a=n.p+"533367b014f0fa92c376264fb3989ea3.jpg"},function(t,e,n){"use strict";e.a=n.p+"cd43e90a549381ef921880835962ecad.png"},function(t,e,n){"use strict";e.a=n.p+"0b77fe68031021128a97fdd0f9fbd0b4.jpg"},function(t,e,n){"use strict";e.a=n.p+"b091d2f125f053aaa774f7871ebceef9.jpg"},function(t,e,n){var o=n(8),r=n(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var c={insert:"head",singleton:!1};o(r,c);t.exports=r.locals||{}},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function i(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],r=0;r<t.length;r++){var c=t[r],l=e.base?c[0]+e.base:c[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=i(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:b(p,e),references:1}),o.push(d)}return o}function s(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=c(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var c=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(c,a[e]):t.appendChild(c)}}function f(t,e,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,h=0;function b(t,e){var n,o,r;if(e.singleton){var c=h++;n=m||(m=s(e)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else n=s(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var c=l(t,e),s=0;s<n.length;s++){var d=i(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=c}}}},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),c=n(0),a=n.n(c),i=n(2),l=n(3),s=n(4),d=n(5),u=n(6),p=r()(!1),f=a()(i.a),m=a()(l.a),h=a()(s.a),b=a()(d.a),g=a()(u.a);p.push([t.i,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}h1,h2,h3,h4,h5,h6{font-family:p22-pooper-black-pro,sans-serif;font-weight:400;font-style:normal}h1{font-size:100px}h2{font-size:80px;color:#e6ae5c}h3{font-family:arboria,sans-serif;font-weight:700;font-style:normal;text-transform:uppercase;font-size:22px;letter-spacing:.1em;position:relative;margin-bottom:70px}h3:after{content:"";position:absolute;height:4px;width:25px;bottom:-38px;left:0;background-color:rgba(85,85,85,.1)}h4{font-family:arboria,sans-serif;font-weight:700;font-style:normal;text-transform:uppercase;font-size:15px;letter-spacing:.1em;padding-top:25px;padding-bottom:10px}p{color:#555;margin-bottom:30px}.strong{font-weight:700}footer{background-color:#222;padding:100px 0 0;position:relative}footer:before{content:"";width:100%;height:15px;display:block;position:absolute;top:0;left:0;background-image:url('+f+");background-repeat:repeat-x;background-size:12px 15px;z-index:10}footer h3{color:#fff}footer h3:after{background-color:rgba(255,255,255,.1)}footer p,footer li{color:#fff}footer svg{fill:#fff}footer .container{display:grid;grid-template-columns:repeat(3, 1fr);grid-column-gap:100px}footer #footer-contact ul li{display:grid;grid-template-columns:16px 1fr;grid-column-gap:10px;align-items:center;margin-bottom:20px}footer #footer-contact ul li:last-child{align-items:start}footer #footer-recipes ul li{display:grid;grid-template-columns:75px 1fr;grid-column-gap:25px;align-items:center}footer #footer-recipes ul li img{width:70px;border-radius:50%;border:4px solid #090909;grid-row:1/3}footer #footer-hours{padding-bottom:50px}footer #footer-hours ul li{display:grid;grid-template-columns:repeat(2, auto);justify-content:space-between}footer #subfooter{text-align:right;padding:50px 0;background-color:#020202}footer #subfooter p{width:60%;max-width:1500px;margin:0 auto}footer #subfooter p a{color:#fff;text-decoration:none}footer #subfooter p a:hover{color:#e6ae5c;text-decoration:underline}header#header{background-image:url("+m+');background-size:cover;background-position:center;position:relative;color:#fff;height:100vh}header#header:after{content:"";width:100%;height:15px;display:block;position:absolute;bottom:0;left:0;background-image:url('+h+");background-repeat:repeat-x;background-size:12px 15px;z-index:10}header#header nav{font-family:arboria,sans-serif;font-weight:400;font-style:normal;background:linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0) 100%);position:fixed;width:100%;z-index:999;text-transform:uppercase}header#header nav .container{display:grid;grid-template-columns:repeat(2, auto);justify-content:space-between;align-items:center}header#header nav #logo{height:50px;fill:#fff}header#header nav ul{display:grid;grid-template-columns:repeat(3, auto)}header#header nav ul li{border-top:5px solid transparent;padding:30px}header#header nav ul li.active{border-top-color:#e6ae5c}header#header .hero-title{height:100%;width:100%;display:grid;justify-content:center;align-content:center;text-align:center}section#about{padding:100px 0}section#about .container{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:100px}section#about header{text-align:center;padding-bottom:100px;grid-column:1/3}section#about .left{position:relative}section#about .left .photo1{background-image:url("+b+");background-size:cover;background-position:center;width:80%;padding-top:80%;border-radius:50%;border:10px solid #eee;float:right}section#about .left .photo2{background-image:url("+g+");background-size:cover;background-position:center;width:35%;padding-top:35%;border-radius:50%;border:10px solid #eee;position:absolute;top:0;left:0}body{font-family:span,serif;font-weight:400;font-style:normal;font-size:15px;line-height:1.4;color:#222}body .container{width:60%;max-width:1500px;margin:0 auto}body img{max-width:100%}body .subheader{font-family:arboria,sans-serif;font-weight:700;font-style:normal;text-transform:uppercase;font-size:20px;background-color:#000;margin:0 auto;padding:6px 13px 9px;border-radius:3px;transform:rotate(-3deg);box-shadow:0 0 0 5px rgba(0,0,0,.25);color:#fff;display:inline-block}body button{font-family:arboria,sans-serif;font-weight:700;font-style:normal;border:none;background:none;text-transform:uppercase;font-size:15px;padding:15px 25px 18px;margin-right:20px;border-radius:3px}body button.btn-light{background-color:#eee;color:#020202}body button.btn-light:hover,body button.btn-light:focus{background-color:#020202;color:#eee;transition:all ease-in-out .2s}body button.btn-dark{background-color:#020202;color:#eee}body button.btn-dark:hover,body button.btn-dark:focus{background-color:#eee;color:#020202;transition:all ease-in-out .2s}",""]),e.default=p},function(t,e,n){"use strict";n.r(e);n(7);const o=document.createElement("header");o.setAttribute("id","header");const r=document.createElement("nav");r.setAttribute("id","main-nav");const c=document.createElement("div");c.setAttribute("class","container");const a=document.createElement("div");a.innerHTML='<svg id="logo" viewBox="0 0 404.8 112.1">\n\t\t<path id="P" d="M86.9 106.2c-19.4 9.7-47.1 7.3-64.2-6.5C6.2 86.4 0.4 68.4 0 49.3c0.4-0.1 0.7-0.4 1.3-0.3C5.3 33.4 13.5 18.4 28.1 8.7c16.3-11 41.7-11.2 58.8-2.5 5.5 3.7 11.2 7.7 15.6 12.8 -0.4 0.3-2-1.3-2.7 0 1.5 2.5 3.1 4.4 4.8 6.9l2.8 2.4c0.8-1-0.7-2.7-1.1-4.1l0.1-0.6c6.6 8.9 11.4 18.6 11.8 30.1C119.2 75.6 107.1 96.4 86.9 106.2zM4.9 49.3c1.7-5.6 3.1-11.5 5.2-17.1C6.2 36.9 4.1 43.3 4.9 49.3zM8.7 75.7l-0.4 0.7c2 4.2 4.1 9.4 7.5 11.9L8.7 75.7zM49.8 34.7c-2 1-5.1-1.3-5.5 1.7 -0.6 13.6 1.8 26.7 2.1 40.5 1.1 0.3 2.8 3 4.4 0.6 1-5.6-0.6-10.7-0.8-16.6l0.8-1.1c7.7-0.8 16.9 1.5 22.2-5.2 2.5-3.1 1.8-8 1.5-11.9C69.4 33.8 59.3 33.1 49.8 34.7zM64.8 53.8c-4.9 0.6-10.5 1.1-15 0.3 -0.7-4.9 0-10-0.6-15.2 5.8-0.7 10.7-0.1 16.3 0.4 2.7 0.7 3.2 3.5 4.4 5.3C69.6 48.5 68.5 52.4 64.8 53.8zM102.9 19.8c0.8 0.1 0.8 1 1.5 1.4C104.3 21.6 102.7 20.9 102.9 19.8zM114.6 43.1l-0.7 1.3c0.8 3.7 0.6 8.2 2.5 11.1C117.9 51.3 116.4 46.8 114.6 43.1z"/>\n\t\t<path d="M129.5 75.5V63.4c0-2.4 0.2-12.2 0.2-14 0-0.3 0.3-3.2 0.3-3.6v-8.5c0-0.4-0.2-3.1-0.3-3.8 0-0.2-0.2-1.5-0.2-1.7v-2c0.1-0.3 0.5-1.5 0.9-1.7 0-0.1 0.5-0.4 0.7-0.6 0.2-0.1 1.3-0.4 1.6-0.4h8.3c0.4 0 2.7 0.2 2.9 0.2h0.8l0.6 0.2h2c0 0 0.6 0.3 0.7 0.3l0.9 0.5c0.2 0 0.5 0.5 0.5 0.6 0 0.1 0.2 0.5 0.2 0.5v0.3c0 0.2-0.2 0.9-0.2 0.9 -0.1 0.3-0.6 0.7-0.9 0.9 0 0-0.6 0.3-0.7 0.3 -0.1 0-0.5 0.4-0.5 0.5 -0.1 0-0.7 0.3-0.9 0.3h-1c-0.3 0-1.5-0.3-1.7-0.3 -0.1 0-0.5-0.2-0.6-0.3 -0.2 0-0.8-0.2-0.8-0.2h-5.6l-0.4 0.2c0 0.5-0.1 2.4-0.2 2.9 0 0-0.2 0.5-0.2 0.7 0 0.1-0.2 1.1-0.2 1.2 0 0.2-0.4 1-0.4 1.2 -0.1 0.2-0.2 1.4-0.3 1.6 0 0.4-0.2 2.5-0.2 2.7 0 0.4-0.3 2.1-0.3 2.3 0 0.9-0.2 3.8-0.2 4.3v3.6c0 1.3 0.2 4.4 0.2 4.6l0.3 0.2h1.8c0.1 0 1.5 0.2 1.7 0.2h2c0.1 0 1-0.2 1.1-0.2 0.4-0.1 1.6-0.2 1.8-0.2 0 0 0.7-0.2 1-0.2 0.1 0 0.9 0.2 0.9 0.2 0.1 0 1 0.1 1.2 0.2 0.2 0 0.6 0.1 0.6 0.2 0.1 0.1 0.5 0.5 0.6 0.5 0 0.1 0.2 0.4 0.2 0.6 0 0.1 0.2 1.1 0.2 1.2v1.2c-0.1 0.2-1 1.1-1.2 1.3 -0.2 0-1.4 0.2-1.8 0.2h-2.6c-0.1 0-1.1 0.2-1.3 0.2h-2.3c-0.1 0-1.1-0.2-1.2-0.2h-3c-0.1 0.1-0.2 1-0.2 1.2 0 0-0.2 1.7-0.2 2.3 0 0.6 0.2 2.6 0.2 2.8 0 0.8 0.2 7.7 0.2 8.5v3c0 0.7 0.2 3.3 0.2 3.7 0 0 0.3 0.4 0.3 0.5l0.2 0.2c0.1 0.1 0.9 0.2 1.1 0.3h0.2c0.6 0 4.4-0.1 5-0.1h3c0.2 0 2-0.5 2.4-0.5L147 84c0.1 0 0.4 0.1 0.5 0.1 0 0 0.3 0.2 0.4 0.3 0.1 0.1 1.1 0.8 1.2 1 0.1 0.1 0.4 0.7 0.4 0.8v0.5c0 0.4-0.2 1.4-0.2 1.5 0 0-0.6 0.6-0.9 0.8 0 0.1-0.4 0.2-0.5 0.2 -0.2 0.1-2.2 0.2-2.7 0.3h-0.9c-0.6 0-3.1 0.3-3.6 0.3 -0.2 0-1.8 0.2-2.1 0.2 -0.3 0-3.2-0.2-3.6-0.2h-2c-0.1 0-0.8-0.3-1-0.3 -0.5-0.1-1.4-0.4-1.5-0.5 0 0-0.6-0.5-0.6-0.6l-0.5-0.8c0-0.1-0.3-0.5-0.3-0.5v-1C129.2 85.1 129.5 76.6 129.5 75.5z"/>\n\t\t<path d="M161.3 45.3V34.1c0-0.3-0.2-1.5-0.2-1.8 -0.1 0-0.6-0.7-0.7-0.7 0-0.1-0.2-0.5-0.2-0.6v-0.5c0-0.3 0.2-1.2 0.2-1.2 0.2-0.4 1.3-1.4 1.5-1.7h0.4c0.2-0.1 3.6-0.4 3.8-0.5h0.3c0 0.1 0.2 0.2 0.2 0.2h3c0.1 0 1.2 0.2 1.2 0.3h0.6c0.4 0 1.8 0.4 2.2 0.5 0.1 0 0.8 0.3 1 0.5 0.3 0.2 1.2 0.8 1.2 0.8 0.2 0.1 1.2 1.2 1.5 1.5 0.1 0.1 0.4 0.5 0.5 0.8l0.3 0.4 0.2 0.3 0.8 2.3c0 0.1 0.2 1 0.2 1.2 0.1 0.9 0.5 3.7 0.5 4 0.1 0.7 0.2 3.7 0.2 4.2 0 0.2 0.1 3 0.1 3.9 0 1.1-0.1 3.7-0.1 3.7 0 0.2-0.1 2.6-0.2 3.4 0 0.5-0.2 2.3-0.2 2.5 0 0.2-0.3 1.2-0.3 1.2l-1 2.3c-0.1 0.1-0.5 0.6-0.5 0.7 -0.1 0.1-0.4 0.2-0.5 0.2l-1.5 1c-0.2 0.2-1.2 0.5-1.4 0.5l-1.6 0.3h-1.3c-0.3-0.1-1.3-0.3-1.4-0.3 -0.3 0-1.4 0.2-1.7 0.3 -0.1 0-1.2-0.1-1.4 0 0 0-0.2 0.3-0.2 0.4v6.6c0 1.1-0.2 11.7-0.2 12.7v3.5c0 0.1 0.2 0.2 0.2 0.2 0.1 0.2 0.5 1.2 0.5 1.5 0 0 0.1 0.1 0.1 0.3 0 0.1-0.1 0.2-0.1 0.2s-0.1 0.2-0.3 0.2l-0.4 0.4 -0.9 1c-0.2 0-0.5 0.3-0.5 0.3h-1.9c0 0-0.6-0.8-0.7-0.8 -0.1 0-0.5-0.2-0.6-0.2l-0.7-0.7c-0.1-0.1-0.2-0.6-0.2-0.7V51C161.1 50.2 161.3 46.2 161.3 45.3zM166.5 58.8h0.2c0.2 0 1-0.3 1.1-0.3 1-0.1 4.5-0.1 5.1 0l1.1-0.8c0.1-0.1 0.2-0.4 0.2-0.4 0-0.1 0.4-1.4 0.4-1.9 0.1-0.3 0.2-1.8 0.3-2.1 0-0.8 0.2-2.9 0.2-3.1V46c0-0.8-0.2-4.4-0.2-5.3 -0.1-0.3-0.2-1.7-0.3-2.2 0-0.1-0.2-0.9-0.4-1.2 0-0.4-0.2-1.1-0.2-1.2 -0.1-0.2-0.8-1.1-0.8-1.2 -0.1 0-0.6-0.8-0.8-0.9 -0.1-0.1-0.4-0.4-0.4-0.6 -0.2 0-0.7-0.3-0.9-0.3h-3.7l-0.2 0.3c-0.1 0.2-0.2 1.4-0.3 2 0 0.7-0.3 3-0.3 3.3v3.9c0 0.5-0.2 3.7-0.2 4 -0.1 1.9-0.2 7.8-0.2 8.5C166.2 55.8 166.4 58.2 166.5 58.8z"/>\n\t\t<path d="M192 87.4v-1.6c0.1-0.4 0-2.2 0.1-2.5 -0.1-0.5-0.2-3.8-0.2-4.3 0-0.2-0.2-1.7-0.2-2 0-0.1-0.1-1-0.1-1.1 0.1-0.4 0-2.6 0.1-2.9 -0.1-0.8-0.3-4.6-0.3-5.5 0-0.2-0.1-1.2-0.1-1.2 -0.1-0.6 0.1-2.6 0.1-2.8 0-0.6 0.5-5.3 0.6-6 0-0.2-0.1-2.2 0-2.5 -0.1-0.3-0.5-2-0.4-2.4 0-0.4 0.1-3.7 0.1-4v-4.9c-0.1-0.2-0.1-1.6-0.2-1.8 0-0.1 0.1-0.9 0.1-0.9 0-0.4 0.1-2.1 0-2.7v-1.7c0-0.2 0.1-1.1 0.1-1.4 0.2-0.4 0.2-1.2 0.2-1.2 0.1-0.4 0.5-2.8 0.5-3.1v-0.5c0-0.2-0.2-1.4-0.1-1.6v-0.9c0 0 0.7-0.7 1-0.8 0.1-0.2 0.5-0.5 0.7-0.6h0.2c0 0 1.1-0.1 1.2-0.1 0.4-0.1 1.6-0.4 1.7-0.4 0.2 0 1.2 0 1.6 0.1h0.2c0.7 0 2.4 0.4 2.7 0.4 0.1 0 1.2 0.3 1.2 0.3l1 0.1c0.1 0 0.7 0.4 0.7 0.4 0.3 0 1.2 0.3 1.3 0.3l1.7 0.7 1.2 0.6c0.2 0.2 0.9 0.6 0.9 0.6 0.2 0.1 1 1.4 1 1.7 0.3 0.2 0.7 1.5 0.9 1.9 0.1 0.3 0.5 2.7 0.7 3.3 0.1 0.4 0.3 1.4 0.4 1.6 0 0.2 0.1 1.2 0.1 1.4 0 0.2 0.2 1 0.2 1.2 0 0.1 0.1 1.3 0.1 1.6V44c0 0.2-0.1 2.7-0.3 3.7 -0.1 0.9-0.4 3.7-0.4 3.7 0 0.1-0.3 1.7-0.4 2.3 0 0.1-0.3 1.4-0.3 1.5 0 0.2-0.4 2.1-0.5 2.3 -0.1 0-0.6 1.2-0.8 1.2 0 0.1-0.4 0.5-0.5 0.6 0-0.1-1.1 1.3-1.2 1.2l-1 0.8c-0.1-0.1-0.5 0-0.6 0 0 0-0.5 0.3-0.6 0.3 -0.3 0-1.4 0.2-1.6 0.3 0 0-1.3 0.2-1.6 0.4 -0.2 0-1.2 0.3-1.3 0.3 -0.1 0.1-1.3 0.3-1.5 0.2 -0.2 0-0.9 0.3-1 0.3 -0.2-0.2-1.1-0.3-1.2-0.2 0 0-0.8 0.6-1.2 0.9l-0.2 0.2v1.5c0.1 0.3 0.2 2.2 0.3 2.4 0 0.4 0.1 1.2 0.1 1.3 0 0.6-0.1 4-0.1 4.5 0 0.2 0.4 3.6 0.6 5.1 0 0.1 0.1 1.2 0.1 1.2v5.2c0 0.1 0 0.9 0.1 1 0.2 0.6 0.3 2 0.2 2.1v0.7c0 0.1-0.3 0.4-0.3 0.5h-0.3c-0.3 0-1 0.1-1 0.1 -0.1 0-0.2 0.4-0.2 0.4 -0.1 0.2-0.5 0.4-0.6 0.5 -0.1 0-2.5 0.1-2.7 0h-0.5c-0.1 0-0.7-0.6-0.9-0.9 -0.1 0-0.2-0.4-0.3-0.5 0 0-0.3-0.3-0.3-0.4v-0.3C191 88.5 192 87.6 192 87.4zM197.5 58.7h0.2c0.1 0 1.2-0.4 1.3-0.4 0.2-0.1 1 0.1 1 0.1 0.1-0.1 1.2-0.4 1.3-0.5 0.1 0 1.4-0.4 1.6-0.4 0-0.1 0.3-0.1 0.3-0.2 0.1 0 1-0.2 1.1-0.1 0 0 0.3-0.3 0.5-0.3 0.1-0.1 0.4-0.4 0.5-0.4 0.2 0 0.3-0.1 0.3-0.2 0 0 0.4-1.3 0.6-1.8 0-0.1 0.2-0.9 0.2-1.1 0.1-0.8 0.6-2.7 0.6-2.7 0-0.1 0.1-2.2 0.2-3 0-0.5 0.2-2.5 0.2-3 0-0.2-0.2-0.9-0.2-1v-1.2c0-0.2-0.1-1.8 0-2.1 0-0.2-0.2-1.2-0.1-1.4 -0.1-0.1-0.1-0.8-0.1-1 -0.2-0.8-0.6-3-0.6-3.1 -0.1-0.3-0.3-1.1-0.3-1.2 0-0.1-0.5-0.8-0.5-0.9 0-0.1-0.4-0.5-0.5-0.6 0-0.1-0.7-0.4-0.9-0.5 -0.3-0.3-1-0.6-1.1-0.7 -0.1 0-1.9-0.2-2-0.2s-0.5-0.2-0.5-0.2c-0.1-0.1-0.6-0.4-0.7-0.4h-0.5c-0.1 0-0.5-0.2-0.6-0.2 0 0.6-0.3 2.7-0.3 3.2 0 0-0.3 0.5-0.4 0.8 0 0 0 0.2-0.1 0.3 0 0.1-0.5 0.6-0.5 0.6 0 0.9-0.2 4.6-0.3 5.5 -0.2 1.3-0.5 5.2-0.5 5.5 -0.1 0.7-0.1 3.6-0.1 4 0 0.3 0.1 2.3 0.1 2.6 0 0.2 0 1.6 0.1 1.8 0 0.1 0.1 1.4 0.1 1.5 0 0.4-0.2 1.8-0.2 2.1C197 58.3 197.5 58.7 197.5 58.7z"/>\n\t\t<path d="M223.9 84.6v-5.5c0-0.5 0.2-4 0.2-4.4v-5.2c0.1-0.5 0.2-3.7 0.3-4.2v-1.4c0-1 0.3-7.4 0.3-8.4v-1.2c0-0.5-0.3-3.9-0.3-4.4 -0.1-0.6 0-7.4 0-8 0-0.4-0.2-3.4-0.3-4.2 0-0.5-0.1-2.3-0.2-2.7 0-0.4-0.3-1.3-0.3-1.5 -0.1-0.4-1.2-3.4-1.3-3.7v-1.4c0-0.1 0.3-0.4 0.3-0.5 0.1 0 0.2-0.3 0.2-0.3 0.2-0.1 1.4-0.3 1.6-0.3h4.4c0.1 0 1.2 0.3 1.2 0.3 0.3 0 1.4 0.3 1.5 0.3 0.2 0 1.5-0.3 2.9 0 0.1 0 1-0.3 1.1-0.3h3.4c0 0 0.6 0.3 0.7 0.3 0.1 0.1 0.4 0.2 0.6 0.2 0 0.1 0.3 0.8 0.4 1v0.6l-1.2 2.1c0 0-2 0.2-2.8 0.2 -1.1 0-6.2-0.1-7.3-0.1V33c0 0.4-0.2 3.9-0.2 4.4v15.8l0.2 1.2c0 0 2.6-0.1 3.7 0.3 0.1 0 1 0.2 1.2 0.2 0.5 0 2 0.2 2.3 0.2h2.1c0.7 0.3 2.3 1.2 2.3 1.3v1.6c0 0.2-0.1 0.3-0.3 0.4 -0.1 0.1-0.6 0.4-0.6 0.4 -0.2 0-0.8 0.3-1.1 0.3h-0.4c-0.4 0-1.2 0.2-1.3 0.2h-0.8c-0.3 0-2.1-0.2-2.3-0.2h-1.2c-0.2 0-2.4 0.7-2.8 0.7h-0.7c-0.1 0-0.2 0.3-0.3 0.3 0 1.2-0.2 5.2-0.2 6.3 0 2.2-0.3 10.6-0.3 10.8V81c0 0.6 0.6 3 0.5 3.4l0.3 0.3c0.2 0.2 0.6 0.3 0.8 0.4 0 0 0.9 0.1 1.4 0.2 0.2 0 1.3 0.2 1.4 0.2 0.7 0.1 6.1-0.4 6.7-0.3 0.1 0 0.6 0.1 0.7 0.1 0.2 0 0.5 0.1 0.5 0.1 0.3 0 0.6 0.2 0.8 0.3 0.2 0.1 0.7 0.8 0.7 0.9v1.3c0 0.2-0.2 0.8-0.2 0.8s-0.4 0.3-0.5 0.4c-0.1 0.2-0.5 0.7-0.5 0.7 -0.2 0.1-0.5 0.2-0.6 0.2h-1.2c-0.3 0-2.5-0.4-2.9-0.4 -0.2 0-1.5 0-1.8 0.1 -0.2 0-2.2 0.3-2.4 0.2h-1.7c-0.1 0-0.9 0.1-1.1 0 -0.1 0.1-0.7 0.1-0.9 0.3 0 0-0.8 0.1-0.9 0.1 -0.1 0-0.5 0.1-0.6 0.1 0 0-0.5 0.1-0.9 0.1h-1c-0.2 0-0.7-0.2-0.8-0.2 0 0-0.4-0.6-0.5-0.8 -0.1 0-0.2-0.4-0.3-0.6l-0.5-1.4v-2.3C223.6 85 223.7 84.6 223.9 84.6z"/>\n\t\t<path d="M254.3 73.5c0.1-0.5-0.1-4.9-0.1-5.5 0-0.9-0.1-7.6 0-8.5 0-0.1-0.1-1.3-0.1-1.9 -0.1-0.3-0.5-2.7-0.5-3.1 0-0.9 0.1-4.8 0.1-5.8 -0.1-0.3-0.3-2.5-0.3-2.8 -0.2-0.4-0.3-3.1-0.2-3.6 -0.1-0.4 0-3.4 0-3.8 0-0.2-0.1-1.6-0.2-1.8 0-0.5-0.1-3.7-0.1-4.1 0-0.1-0.3-1.2-0.3-1.3 0-0.1 0-1.2 0.1-1.6v-1.4c0-0.1 0.3-0.6 0.3-0.7 0.2-0.2 1.1-1.1 1.2-1.1 0.1 0 1.1-0.2 1.3-0.3 0.1 0 1.2 0.1 1.2 0 0.1 0 1.1-0.3 1.2-0.4 0.6 0.1 2.6 0.1 3.1 0.1 0.6 0 2.6 0.1 2.7 0.1 0.3 0 2.1 0.4 2.3 0.4h0.6c0.5 0.1 1.4 0.4 1.5 0.5 0.3 0 1.1 0.5 1.2 0.7 0 0.1 1 1.2 1.1 1.2 0 0.2 0.7 0.3 0.7 0.4 0.3 0 0.6 0.7 0.7 0.8 0.1 0 0.4 1.2 0.4 1.3l0.3 0.5c0 0.3 0.5 1.1 0.5 1.2 0 0.1 0.2 0.8 0.2 0.9 0 0.3 0.1 2.1 0.1 2.3 0.2 0.1 0.3 1.4 0.3 1.6v7.7c-0.1 0.7-0.3 3.8-0.3 4.2 -0.1 0.1-0.2 0.8-0.4 1 -0.1 0.6-0.9 2.3-0.9 2.5 -0.1 0.1-0.7 1.1-0.8 1.1 -0.1 0.2-1.1 1.8-1.2 2.1 -0.1 0.1-0.5 0.7-0.5 0.7l-0.9 0.9c-0.1 0.1-1.8 0.4-1.9 0.6 0 0-0.3 0.1-0.3 0.2v0.2c0.1 0.1 0.5 0.7 0.7 0.7 0.1 0.1 1.9 0.6 2 0.7 0.1 0 0.2 0.2 0.3 0.2 0.1 0.1 0.9 0.7 0.9 0.8 0.3 0.1 0.7 0.7 0.7 0.7l0.8 1.5c0 0 0.4 0.6 0.4 0.7 0 0.1 0.2 0.3 0.2 0.5 0.1 0.1 0.4 1 0.5 1.2 0 0.1 0.2 0.6 0.2 0.7 0 0.1 0.2 0.8 0.2 0.9 0.2 0.5 0.2 1.7 0.2 1.8 0 0.7-0.1 6.7-0.1 7.2 0 0.3 0.1 3.5 0.1 3.8v0.4c0.1 0.2 0.2 1.3 0.3 1.3 0 0.2 0.1 1.6 0.2 1.9 0 0 0.1 0.3 0.2 0.4 0 0.1 0.2 0.3 0.2 0.3 0.1 0.1 0.8 0.2 1 0.4 0.1 0 1.1 1 1.2 1.3 0 0 0.3 0.3 0.3 0.4v0.6c0 0.1-0.4 0.5-0.4 0.6 0 0 0 0.2-0.1 0.2 -0.3 0.4-1.2 1.1-1.2 1.1 -0.2 0-0.7 0.1-0.9 0.1 0 0.1-1 0.6-1.1 0.7 -0.1 0.1-0.6 0.2-0.7 0.2H271l-0.7-0.3h-0.5c-0.2-0.1-0.7-1.2-1-1.3 0-0.1-0.2-0.7-0.2-0.8v-0.3c-0.1-0.3-0.1-1.6-0.1-1.8 -0.1 0-0.2-0.2-0.3-0.3 0-0.8-0.1-4-0.1-4.7 0-0.8-0.1-7.6-0.1-8.4 0-0.3-0.2-3.1-0.2-3.6 0-0.1-0.1-0.8-0.1-0.9 -0.3-0.4-0.8-2.5-1-2.7 -0.1-0.2-0.5-0.7-0.8-0.8 -0.2-0.3-1-0.8-1.1-0.8 -0.6-0.3-3.2-1.2-3.5-1.2 -0.2 0-1.7-0.1-2.4-0.3h-0.3c0 0-0.2 0.3-0.2 0.4v0.2l0.4 2.2c-0.1 0.9-0.2 6.2-0.1 7 0 0.1 0.2 1.2 0.3 1.4 0 0.1 0.3 1.2 0.3 1.3l0.6 2.3c0 0.1 0.2 0.7 0.2 0.8 -0.1 0.2 0.1 1.1 0.1 1.3 0 0.6 0.2 3 0.1 3.4v2.5c0 0.3-0.1 1.9-0.1 2.4 -0.1 0.1-0.4 0.6-0.4 0.7l-0.2 0.2 -0.6 0.7 -0.2 0.5c-0.1 0.1-1 0.1-1.1 0.2l-0.3 0.2c-0.1 0-0.4 0.3-0.6 0.3h-1.7l-0.5-0.5c-0.1-0.2-0.5-0.7-0.5-0.8L254 87C254.1 85 254.3 75.6 254.3 73.5zM258.3 50.4c0 0.1 0.2 0.7 0.2 0.8v0.1c0 0.4 0.2 3.5 0.2 3.7v1c0 0.1 0.1 0.5 0.1 0.5h0.8c0.1 0 0.9-0.2 1-0.2h0.8c0.1 0 0.7-0.2 0.8-0.2s1.1-0.2 1.2-0.2c0.1-0.1 0.9-0.3 1-0.4l0.7-0.7 0.8-1c0-0.2 0.2-0.4 0.2-0.5 0 0 0.2-0.6 0.2-0.7 0.2-0.1 0.3-0.5 0.3-0.5 0.1-0.1 0.8-0.9 0.8-0.9 0-0.1 0.2-0.7 0.2-0.8 0-0.2 0.2-1.6 0.2-1.7l0.4-1 0.3-9.8c0-0.1-0.5-2-0.5-2.5 0 0-0.1-0.7-0.2-1 0-0.1-0.4-0.9-0.4-1.1 -0.1 0-0.2-0.6-0.3-0.7 0-0.2-0.4-0.9-0.5-1l-0.2-0.1h-0.2c-0.2-0.2-0.4-0.5-0.5-0.5 -0.1-0.1-0.5-0.3-0.5-0.3l-5.4-0.1c0 0-0.2 0.3-0.3 0.5 0 0-0.3 0.7-0.3 1.1 -0.1 0.3-0.5 2.9-0.7 3.2 0 0.1-0.2 0.6-0.2 0.7v1.5c0 0.5-0.1 1.6-0.1 1.8 0 0.1 0.2 0.8 0.2 1.1 0.2 0 0.3 0.7 0.4 0.7 0.6 0.3-0.5 7.2-0.6 7.2C258.1 48.8 258.3 50.2 258.3 50.4z"/>\n\t\t<path d="M287.2 60.7c0-0.6 0.2-5.5 0.2-6.2 0.2-1.5 0-14.1 0-15.8 0-0.3 0.4-3.4 0.5-3.7 0-0.1-0.1-0.7 0-0.7 0-0.3 0.4-1.2 0.5-1.6 0 0 0.2-0.3 0.2-0.4 0.1-0.3 0.7-1.1 0.8-1.2l1-1.5c0.4-0.6 2.2-1.9 2.3-2 0 0 1.5-0.4 2.2-0.7 0.2-0.1 1-0.3 1-0.3 0.1 0 1.8-0.1 2.3-0.1 0.4 0 1.3 0.1 1.3 0.1 0.3 0 2.5 1 3.1 1.3 0.1 0 0.8 0.7 1 0.9 0.1 0.2 0.5 0.7 0.5 0.8v1.5c0 0 0.4 0.3 0.6 0.5 0.1 0.1 0.9 0.6 1 0.8l1.2 1c0 0 0.5 0.3 0.5 0.5l0.8 1.8c0 0.1 0.8 1 0.8 1.2 0.1 0 0.2 0.3 0.2 0.4l0.6 1.8c0 0.2 0.2 0.9 0.2 1 0 0.1 0.2 1.3 0.2 1.4 0.2 0.4 0.5 2.6 0.6 2.8 0 0.7 0.2 3.7 0.2 4.5v14.5c-0.1 0.3-0.2 2.2-0.2 2.5 -0.1 0.2-0.2 3.6-0.3 4.8 0 0.4-0.1 4.8-0.3 5.4 0 0.2-0.2 1-0.2 1.1 0 0.3-0.2 1.9-0.2 2.1 0 0.3-0.3 1.2-0.3 1.3 -0.2 0.6-0.6 2.2-0.9 2.4 -0.1 0.3-0.5 1.3-0.8 1.5 0 0.3-1.1 1.3-1.2 1.6 -0.2 0-0.6 0.9-0.7 0.9 -0.1 0.2-1.6 1.7-1.9 2.1 -0.2 0-0.5 0.2-0.6 0.2 0 0.1-0.9 0.7-0.9 0.8 -0.2 0-1.2 0.1-1.5 0.2 -0.3 0-1.4 0.3-1.5 0.3H297c-0.2 0-1.8-0.3-2-0.3 -0.1-0.1-0.8-0.4-1-0.6 -0.4-0.2-1.8-1.2-2-1.3 0 0-0.6-0.7-0.8-0.7 0-0.3-0.4-0.4-0.4-0.5 -0.2 0-0.6-0.1-0.6-0.2 -0.1 0-0.2-0.1-0.3-0.3 0-0.1-0.5-0.9-0.5-1 -0.1 0-0.4-0.7-0.4-0.7 -0.1-0.1-0.3-0.9-0.4-1 0-0.2-0.7-1.9-0.7-2.1 0 0-0.2-0.8-0.2-0.9 -0.3-0.7-0.7-2.6-0.7-2.6 0-0.3-0.2-5.2-0.2-7v-2.1C287 68.1 287.2 62.3 287.2 60.7zM292.9 76c0 0.2 0.4 2.1 0.5 2.8 0 0.1 0.2 0.9 0.2 1 0.3 0.6 1 2.4 1.1 2.8 0.1 0.2 0.5 0.9 1.2 1 0.1 0.4 2 1.3 2.3 1.5 0 0 0.5 0.2 0.6 0.2h0.8c0.2 0 0.5-0.2 0.5-0.2 0.2-0.1 0.6-0.4 0.7-0.6 0.1-0.1 0.6-1.2 0.7-1.5 0 0 1.7-0.4 1.9-0.4 0-0.1 0.2-0.5 0.2-0.6l0.7-2.2c0.1-0.1 0.2-0.8 0.3-1 0.1-0.7 0.5-2.1 0.5-2.2 0 0 0.1-2.9 0.2-4 0.2-1.2 0.4-4.3 0.4-4.3 0.1-1.1 0.2-10.5 0.3-13.5v-3.2c-0.1-1.2-0.2-5.6-0.3-6.3 0-0.2-0.2-1.3-0.4-1.6 -0.1-0.4-0.7-3.2-0.7-3.6 -0.1-0.1-0.2-1.1-0.3-1.2l-0.2-0.4c0-0.1-0.3-0.8-0.3-0.9s-0.6-1-0.8-1.2c0-0.1-1.6-0.7-1.7-0.7 -0.2-0.1-0.7-0.9-0.8-1 0-0.1-0.4-0.6-0.4-0.7 0 0-0.1-0.2-0.2-0.2 -0.1 0-0.7-0.5-0.8-0.5 0-0.1-0.6-0.7-0.7-0.8 -0.1 0-0.6-0.2-0.8-0.2h-0.7c-1 0-1.8 0.3-1.9 0.4 -0.2 0.4-0.8 1.3-0.8 1.6l-0.6 1.9c0 0.1-0.1 2.1-0.2 2.8 0 0.8-0.2 3.1-0.2 3.3 0 0.9-0.3 6.2-0.3 7.5 -0.1 2.1-0.2 11.1-0.2 12.7V69C292.7 70.4 292.8 75.3 292.9 76z"/>\n\t\t<path d="M324.5 81.2c0-0.4 0.3-3.4 0.3-3.7v-0.4c0-1.5-0.4-8.7-0.5-10.3 -0.1-1-0.1-4-0.1-4.5 0-0.1-0.2-2.3-0.2-2.9 -0.1-0.3-0.3-2.3-0.4-2.7 -0.1-1.4-0.4-5.2-0.4-5.3 0-0.3-0.5-5-0.5-5.3l-0.3-2.3c0-0.4-0.2-3.1-0.2-3.4 0-0.5-0.1-2.5-0.1-2.9v-6.7c0-0.5 0.1-1.4 0.1-1.5 0.1-0.2 0.7-1 1-1.2 0.3-0.2 1.5-0.9 1.8-1h1.1c0.1 0.1 0.5 0.2 0.7 0.4 0.1 0 0.9 0.5 1.1 0.6 0.1 0.2 0.5 0.5 0.5 0.5 0.1 0.1 0.1 0.8 0.1 0.9l0.4 1.3c0.4 0.6 1.3 3 1.4 3.4 0.2 0.2 0.6 1.2 0.7 1.4 0 0.1 0.8 1.4 0.8 1.6 0.2 0.2 0.7 1.6 0.7 1.8 0.2 0.5 1.3 2.9 1.7 3.4l1 2.3c0.1 0.1 0.2 0.5 0.2 0.5 0.2 0.3 0.5 1.3 0.6 1.3 0.1 0.2 0.8 4.7 0.9 5.1 0 0 0.2 0.3 0.3 0.4 0 0.2 0.4 0.8 0.4 0.9 0.1 0 0.6 0.9 0.6 1l1 2.1c0.2 0.1 0.3 0.8 0.4 0.9 0.1 0.2 0.9 1.7 0.9 2l0.7 1.6c0 0.1 0.4 1.6 0.4 1.7l0.3 0.9c0.2 0.6 1.2 3.2 1.3 3.7 0 0 0.2 0.3 0.2 0.4 0 0.1 0.5 0.8 0.5 0.9l0.9 1.7 0.7 1.3 0.7 1.3c0.2 0.3 1.1 1.9 1.3 2.3 0.1-0.1 0.3-0.8 0.4-1.2 0-0.2 0.3-1.5 0.3-1.9v-4.1c0-0.5-0.3-2-0.3-2.7v-15c-0.1-0.2-0.2-1.4-0.2-1.7v-5.8c0-0.5 0.2-2.6 0.2-2.8v-0.4c-0.1-0.3-0.3-1.9-0.4-2.1 0-0.2-0.3-1.8-0.3-2.1 0-0.2 0.2-2.4 0.2-2.6 -0.1-0.4-0.2-2.3-0.2-2.8 0 0-0.2-0.6-0.2-0.7 0-0.3 0.2-0.7 0.2-0.7 0-0.1 0.1-0.6 0.2-0.7l1-1.2c0 0 1.2-0.3 1.4-0.4h0.2c0.2 0 0.7 0.2 0.9 0.2 0.2 0.1 1 0.7 1.2 0.7l0.3 0.3c0.1 0.1 0.2 0.5 0.2 0.5 0 0.7 0.2 3.2 0.2 3.7 0.1 0.5 0 3.4 0.1 3.7v1.2c0 0.1 0.1 1.2 0 1.4 -0.1 0.6-0.1 2-0.1 2.2v2.8c0 0.1 0.2 1.7 0.2 2 0.1 1.3-0.2 7.3-0.2 8.7 0.1 0.2-0.2 1.3-0.1 1.6v1.9c0 0.1 0.1 0.6 0.1 0.8 0 0.4-0.2 2.5-0.2 3.1v2.9c0 0.2 0.2 2.2 0.2 2.5 0.1 1.1-0.2 6.7-0.1 8.1 0 0.1 0.2 0.5 0.2 0.6 0.1 0.1 0.2 0.7 0.2 0.7v8.8c0.6 0.8 0.3 4.7 0 4.3 0 0-0.3 0.4-0.4 0.5l-1.1 0.8c-0.1 0-0.5 0.2-0.7 0.2h-1.6c-0.2 0-1.3-0.6-1.5-0.8 -0.1-0.2-0.6-0.6-0.6-0.7 -0.1-0.2-0.4-1.7-0.4-1.8 -0.2 0-0.3-0.5-0.4-0.5 0-0.2-0.6-1.7-0.7-2 -0.1-0.2-0.8-2-0.9-2.1 0-0.1-0.4-1.1-0.4-1.2 -0.3-0.8-1.5-3.4-1.8-3.8 0-0.2-0.5-0.8-0.5-1.1 -0.1-0.1-0.7-1.2-0.7-1.2 -0.1-0.3-0.4-1.2-0.6-1.3s-1.7-2.6-1.8-2.9c-0.1-0.2-0.6-1.2-0.7-1.7 0-0.1-0.5-0.9-0.6-1.1 0-0.1-0.4-1.4-0.4-1.6 -0.1-0.1-0.5-1.1-0.5-1.2 0-0.2-0.7-1.7-0.7-2 -0.1-0.3-0.4-1.1-0.6-1.2 0-0.3-0.5-1.5-0.5-1.7 -0.2-0.1-0.4-0.9-0.5-1.1 -0.1-0.3-1-2-1.2-2.2 0-0.1-0.2-0.6-0.2-0.7 -0.1-0.3-0.6-1.4-0.6-1.5 -0.1-0.2-0.4-1.5-0.6-1.5 0-0.2-0.4-3.5-0.5-3.7 -0.2-0.2-0.8-1.8-1-2.1l-0.8-1.6c-0.3-0.9-1.4-3.5-1.6-3.8 0-0.1-0.7-0.9-0.9-1.1 0-0.1-0.2-0.2-0.2-0.2v0.9c0 0.6 0.4 4 0.4 4.5 0.2 0.3 0 2.7 0 3 0 0.2 0.3 3.8 0.5 4.2 0 0.2 0.2 1.5 0.2 1.6v2.4c0 0.7 0.6 6.1 0.6 6.7 0.1 0.4 0 4.2 0 4.7 0 0.2 0.2 2.5 0.2 2.6v4.3c0 1.1 0.1 3.7 0.2 3.7l1.1 1.4c0 0.1 0.1 4 0.2 5.8v2.3l-0.2 0.3c-0.1 0-0.5 0.2-0.6 0.2l-0.2 0.2c0 0.1-0.5 0.7-0.5 0.8 0 0-0.9 0.2-1.4 0.2h-1.6c-0.1-0.1-0.7-0.5-0.8-0.8 0 0-0.1-0.4-0.3-0.4 -0.1-0.1-0.2-0.7-0.2-0.9v-2.7C324.3 85.3 324.4 82.3 324.5 81.2z"/>\n\t\t<path d="M364.7 86.7c0-0.2 0.3-2.9 0.4-3.7 0.2-0.6 0.7-4 0.9-4.5 0-0.3 0.2-1.6 0.2-1.8 0-0.1 0.2-1.2 0.2-1.4 0.1-0.4 0.2-3.7 0.4-4.3 0-0.2 0.2-2.2 0.2-2.4 0-1 0.1-9.7 0.2-10.7 0-0.4 0.2-2.8 0.2-3.2 0.2-1.1 0.4-10.6 0.4-11.2 0-0.2 0.1-4.3 0.1-5.9 0-0.9-0.1-5-0.1-5.9 0-0.2-0.4-1.7-0.4-2v-0.3c0.4-0.2 1.1-1.2 1.2-1.4 0.1-0.1 0.6-0.5 0.7-0.5s1-0.3 1.2-0.3h0.5c0.1 0 0.9 0.5 1.2 0.6l0.2 0.2c0 0.1 0.2 0.5 0.2 0.6 0 0.1 0.3 1.2 0.3 1.4 0 0 0.4 0.4 0.5 0.4 0 0.1 0.3 1.2 0.3 1.3v0.8l-0.6 1c0 0.6-0.1 3.4-0.2 4 0 0.2-0.3 2.4-0.3 2.8 0 0.5-0.2 5.7-0.2 6.4 0 0.2-0.2 7.8-0.2 8.5 -0.1 0.2-0.4 2.1-0.4 2.3v3c0 0.7-0.1 4.3-0.2 5.2 0 0.4-0.3 2.8-0.3 3 0 0.6-0.3 5.2-0.3 5.8 0 0.1-0.2 1.9-0.2 2v1.2c-0.1 0.2-0.3 1.8-0.3 2v3.3c0.1 0.3 0.2 3.1 0.3 3.6v2.6c-0.1 0.1-0.5 1.2-0.6 1.3 0 0.1-0.2 0.9-0.2 1 -0.1 0.3-0.8 1.2-1 1.2 0 0-0.7 0.2-1 0.2h-0.9c-0.1 0-0.8-0.3-1-0.4 -0.1-0.2-0.7-0.5-0.7-0.6 -0.1 0-0.5-0.4-0.6-0.5 0-0.1-0.2-0.4-0.2-0.5V86.7z"/>\n\t\t<path d="M383.6 81.9c0.2-0.4 0.4-1.2 0.4-1.2 0.1-0.1 0.9-0.5 1-0.5 0-0.1 0.7-0.7 0.7-0.7 0.4-0.1 1.8-0.5 2-0.5 0.2-0.2 2.7-0.3 3.7-0.3l0.6 0.1c0.2 0.2 1.3 0.4 1.4 0.4 0.1 0.1 0.6 0.3 0.7 0.6 0.1 0.1 0.8 0.8 0.8 0.8 0.1 0.4-0.3 2.1-0.3 2.3 0 0.1 0 1.8 0 2.1l-0.1 0.6c0 0.1-1 1.2-1 1.4 0 0.2-0.3 0.6-0.3 0.7 -0.3 0.5-1.4 1.6-1.4 1.7 -0.4 0.2-1.6 1.3-1.8 1.4 -0.1 0-1.2 0.1-1.6 0l-2.1-0.3c-0.2 0-1.1-0.4-1.2-0.4l-1.2-1.5c0 0-0.4-0.7-0.4-1 -0.1 0-0.3-0.4-0.4-0.5 0-0.1-0.1-0.9-0.1-1 0-0.1 0-1.7 0-2.2l0.1-0.5C383.2 83.4 383.6 82.2 383.6 81.9zM390.1 59.8c0-0.4 0.7-3.5 0.8-3.8l0.4-3.5c0.2-0.5 0.8-5.3 1-5.9 0.1-6.5 1.5-21.4 1.6-26.2 0-0.1 0-0.9 0-1l-0.3-0.4c-0.6-0.8-0.5-3.6-0.2-5.1l0-0.4c0-0.1 0.7-1 0.8-1.1 0.4 0 1-1.2 1.2-1.3 0-0.1 1-1 1.3-1.2 0.1 0 0.3-0.2 0.4-0.2 0.2 0.1 1.5 0.4 1.8 0.5l0.9 0c0.4 0 1.5 0.4 1.6 0.7 0.1 0 0.6 0.2 0.7 0.2 0.1 0.1 0.8 0.8 0.7 1 0.1 0 0.2 0.3 0.2 0.3l-0.1 0.6c-0.1 0.1-0.2 0.6-0.2 0.7l-0.8 1.3c0 0-0.1 0.9-0.3 1.1 0 0.4-0.3 1.1-0.3 1.1 0 0.2-0.1 1.6 0 1.7 -0.2 0.6-0.3 2.2-0.3 2.3 0 0.2-0.7 3.7-1 4.9 -0.1 0.6-1.2 5.4-1.2 6.1 -0.2 0.6-0.3 2.8-0.5 3.3 0.2 1-0.8 6.2-2.3 11.1 0 0.2-0.3 1.7-0.4 2.1 -0.2 0.6-0.7 3.5-0.7 4.4 -0.2 0.2-0.5 2.2-0.4 2.4 0 0.2 0 1.1 0 1.2 0 0.1 0 1.4-0.1 1.5l-0.7 5.5c0 0-0.3 0.3-0.4 0.1 0 0.2-0.2 0.3-0.3 0.3l-1.2 2.1c-0.1-0.3-0.2-0.5-0.2-0.4 -0.1 0-0.7 0.3-0.8 0.3 0 0-0.4 0-0.5-0.2l-0.6-0.1c0 0-0.1-0.9-0.1-1 -0.1 0-0.2-0.4-0.3-0.7C389.5 63.3 390 60.4 390.1 59.8z"/>\n\t</svg>';const i=document.createElement("ul");for(let t=0;t<3;t++){const e=document.createElement("li"),n=["Home","Menu","Contact"];e.setAttribute("class","nav-item"),e.setAttribute("id","nav-{i}"),e.innerText=n[t],i.append(e)}const l=document.createElement("div");l.setAttribute("class","hero-title");const s=document.createElement("span");s.setAttribute("class","subheader"),s.innerText="World class pizza";const d=document.createElement("h1");d.innerText="Delivery, Takeout, or Dinein!",o.append(r),r.append(c),c.append(a),c.append(i),o.append(l),l.append(s),l.append(d);const u=document.createElement("main"),p=document.createElement("section");p.setAttribute("id","about");const f=document.createElement("div");f.setAttribute("class","container");const m=document.createElement("header"),h=document.createElement("h2");h.innerText="About Us";const b=document.createElement("span");b.setAttribute("class","subheader"),b.innerText="What's our story?";const g=document.createElement("div");g.setAttribute("class","left");const v=document.createElement("div");v.setAttribute("class","photo1");const y=document.createElement("div");y.setAttribute("class","photo2");const x=document.createElement("div");x.setAttribute("class","right"),x.innerHTML='<h3>It Started, Quite Simply, Like This...</h3>\n    <p class="strong">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\n    <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>\n    <div class="buttons">\n        <button class="btn-light">Learn More</button>\n        <button class="btn-dark">See the Menu!</button>\n    </div>',u.append(p),p.append(f),f.append(m),m.append(h),m.append(b),f.append(g),g.append(v),g.append(y),f.append(x);const k=document.createElement("footer");k.setAttribute("id","footer");const M=document.createElement("div");M.setAttribute("class","container");const z=document.createElement("div");z.setAttribute("id","footer-contact"),z.innerHTML='<h3>Contact Us</h3>\n\t<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.</p>\n\t<ul>\n\t\t<li>\n\t\t\t<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>\n\t\t\t<span>555-555-5555</span>\n\t\t</li>\n\t\t<li>\n\t\t\t<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>\n\t\t\t<span>info@website.com</span>\n\t\t</li>\n\t\t<li>\n\t\t\t<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>\n\t\t\t<span>123 Street Dr.<br />City, ST USA</span>\n\t\t</li>\n\t</ul>';const w=document.createElement("div");w.setAttribute("id","footer-recipes"),w.innerHTML='<h3>Latest Recipes</h3>\n\t<ul>\n\t\t<li>\n\t\t\t<img src="../src/img/footer.jpg" />\n\t\t\t<h4>Fancy Pizza 1</h4>\n\t\t\t<p>Lorem ipsum dolor sit amet</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<img src="../src/img/footer.jpg" />\n\t\t\t<h4>Fancy Pizza 2</h4>\n\t\t\t<p>Lorem ipsum dolor sit amet</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<img src="../src/img/footer.jpg" />\n\t\t\t<h4>Fancy Pizza 3</h4>\n\t\t\t<p>Lorem ipsum dolor sit amet</p>\n\t\t</li>\n\t</ul>';const C=document.createElement("div");C.setAttribute("id","footer-hours"),C.innerHTML='<h3>Hours</h3>\n\t<ul>\n\t\t<li>\n\t\t\t<p class="strong">Monday</p>\n\t\t\t<p>5pm - 11pm</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p class="strong">Tuesday</p>\n\t\t\t<p>5pm - 11pm</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p class="strong">Wednesday</p>\n\t\t\t<p>Closed</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p class="strong">Thursday</p>\n\t\t\t<p>5pm - 11pm</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p class="strong">Friday</p>\n\t\t\t<p>5pm - Midnight</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p class="strong">Saturday</p>\n\t\t\t<p>4pm - Midnight</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p class="strong">Sunday</p>\n\t\t\t<p>5pm - 11pm</p>\n\t\t</li>\n\t</ul>';const E=document.createElement("div");E.setAttribute("id","subfooter"),E.innerHTML='<p><a target="_blank" href="http://annabaker.design" />Anna Baker Design</a></p>',k.append(M),M.append(z),M.append(w),M.append(C),k.append(E);(()=>{const t=document.getElementById("App");t.append(o),t.append(u),t.append(k)})();window.onscroll=()=>{document.body.scrollTop>80||document.documentElement.scrollTop>80?(document.getElementById("main-nav").style.background="#222222",document.getElementById("P").style.fill="#F63E37"):(document.getElementById("main-nav").style.background="linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.70) 20%, rgba(0,0,0,0.25) 50%, rgba(0, 0, 0, 0) 100%)",document.getElementById("P").style.fill="#FFFFFF")}}]);