module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-dom")},function(e,n){e.exports=require("classnames")},function(e,n){e.exports=require("react-draggable")},function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(7)(!1)).push([e.i,".resize-handle {\n  background: #e6e6e6;\n  position: relative;\n}\n.resize-handle-no-drag {\n  cursor: not-allowed !important;\n}\n.react-draggable-dragging {\n  z-index: 1;\n}\n.react-draggable-dragging-sibling {\n  pointer-events: none;\n  user-select: none;\n}\n.resize-handle-e,\n.resize-handle-w {\n  width: 10px;\n  height: 100%;\n  cursor: e-resize;\n}\n.resize-handle-w {\n  cursor: w-resize;\n}\n.resize-handle-button-w,\n.resize-handle-button-e {\n  cursor: pointer;\n  height: 30%;\n  min-height: 40px;\n  max-height: 110px;\n  width: 10px;\n  background-color: #c6c6c6;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.resize-handle-button-w::after,\n.resize-handle-button-e::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 2px;\n  border: 6px solid transparent;\n  margin-top: -5px;\n}\n.resize-handle-button-w:hover,\n.resize-handle-button-e:hover {\n  background: #999;\n}\n.resize-handle-button-w {\n  border-radius: 18px 2px 2px 18px;\n}\n.resize-handle-button-w::after {\n  border-right-color: #666;\n  left: -4px;\n}\n.resize-handle-button-w:hover::after {\n  border-right-color: #fff;\n}\n.resize-handle-button-e {\n  border-radius: 2px 18px 18px 2px;\n}\n.resize-handle-button-e::after {\n  border-left-color: #666;\n}\n.resize-handle-button-e:hover::after {\n  border-left-color: #fff;\n}\n.resize-handle-button-n,\n.resize-handle-button-s {\n  cursor: pointer;\n  height: 10px;\n  width: 50%;\n  max-width: 110px;\n  min-width: 40px;\n  background-color: #c6c6c6;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n}\n.resize-handle-button-n::after,\n.resize-handle-button-s::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  top: 2px;\n  border: 6px solid transparent;\n  margin-left: -5px;\n}\n.resize-handle-button-n:hover,\n.resize-handle-button-s:hover {\n  background: #999;\n}\n.resize-handle-button-n {\n  border-radius: 18px 18px 2px 2px;\n}\n.resize-handle-button-n::after {\n  border-bottom-color: #666;\n  top: -4px;\n}\n.resize-handle-button-n:hover::after {\n  border-bottom-color: #fff;\n}\n.resize-handle-button-s {\n  border-radius: 2px 2px 18px 18px;\n}\n.resize-handle-button-s::after {\n  border-top-color: #666;\n}\n.resize-handle-button-s:hover::after {\n  border-top-color: #fff;\n}\n.resize-handle-n,\n.resize-handle-s {\n  width: 100%;\n  height: 10px;\n  cursor: n-resize;\n}\n.resize-handle-s {\n  cursor: s-resize;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[t].concat(i).concat([o]).join("\n")}var a,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function l(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],n))}else{for(var s=[];a<r.parts.length;a++)s.push(b(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function c(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}var f=null,h=0;function b(e,n){var t,r,o;if(n.singleton){var i=h++;t=f||(f=c(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=c(n),r=function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=s(e,n);return l(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var a=t[i],c=o[a.id];c&&(c.refs--,r.push(c))}e&&l(s(e,n),n);for(var u=0;u<r.length;u++){var d=r[u];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete o[d.id]}}}}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(2),a=t(3),s=t.n(a),l=t(0),c=t.n(l),u=t(4),d=t.n(u);t(5);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={n:"s",s:"n",w:"e",e:"w"},x="react-draggable-dragging-sibling",m=function(e){function n(e){var t,r,i;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,i=h(n).call(this,e),t=!i||"object"!==p(i)&&"function"!=typeof i?b(r):i,v(b(t),"handleWindowResize",function(){if(t.dragged&&!t.cleared){var e=b(t),n=e.preSibling,r=e.nextSibling,o=t.props.direction,i="n"===o||"s"===o?["height","clientHeight"]:["width","clientWidth"],a=Number(n.style[i[0]].replace("px","")),s=Number(r.style[i[0]].replace("px","")),l=n[i[1]],c=r[i[1]];t.cleared=!0,a!==l&&(console.log("run this prev"),n.style[i[0]]=null),s!==c&&(console.log("run this next"),r.style[i[0]]=null)}}),v(b(t),"handleStart",function(){t.dragged=!0,t.preSibling&&t.nextSibling&&(t.preSibling.classList.add(x),t.nextSibling.classList.add(x))}),v(b(t),"handleStop",function(e,n){var r=b(t),o=r.preSibling,i=r.nextSibling;o&&i&&(o.classList.remove(x),i.classList.remove(x)),t.handleResize(e,n)}),v(b(t),"handleResize",function(e,n){var r=n.node,o=n.x,i=n.y;if(0!==o||0!==i){var a=t.props,s=a.direction,l=a.onResize,c=t.state.closed,u=b(t),d=u.preSibling,p=u.nextSibling;if(d&&p)if("n"===s||"s"===s){var f=d.getBoundingClientRect().height,h=p.getBoundingClientRect().height;d.style.height="".concat(f+i,"px"),p.style.height="".concat(h-i,"px")}else{var g=d.getBoundingClientRect().width,v=p.getBoundingClientRect().width;d.style.width="".concat(g+o,"px"),p.style.width="".concat(v-o,"px")}c&&{e:o<0,w:o>0,n:i>0,s:i<0}[s]&&t.setState({closed:!1}),"function"==typeof l&&l(e,{node:r,x:o,y:i})}}),v(b(t),"toggleWithDirection",function(){var e=t.props,n=e.direction,r=e.adaptive,o=t.state.closed,i=b(t),a=i.preSibling,s=i.nextSibling,l="n"===n||"s"===n?"height":"width",c=a.getBoundingClientRect(),u=c.width,d=c.height,p=s.getBoundingClientRect(),f=p.width,h=p.height,g={n:[h,d],s:[d,h],w:[f,u],e:[u,f]},v=["n","w"].includes(n)?a:s,y=["n","w"].includes(n)?s:a;o?(v.style[l]="".concat(t.toogleSize,"px"),v.style.overflow=t.prevOverflow,r||(y.style[l]="".concat(g[n][0]-t.toogleSize,"px"))):(t.toogleSize=g[n][1],v.style[l]="0px",v.style.overflow="hidden",r||(y.style[l]="".concat(g[n][0]+t.toogleSize,"px")))}),v(b(t),"handleToogle",function(e){var n=t.props.onToggleClose,r=t.state.closed,o=b(t),i=o.preSibling,a=o.nextSibling;i&&a&&(t.toggleWithDirection(),t.setState({closed:!r}),"function"==typeof n&&n(e,i,a))}),t.state={closed:e.defaultClosed,position:e.defaultPosition},t.toogleSize=0,t.dragged=!1,t.reiseHandle=o.a.createRef(),t.cleared=!1,t}var t,r,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,o.a.Component),t=n,(r=[{key:"componentDidMount",value:function(){var e=this.props.dragDisabled?this.reiseHandle.current:Object(i.findDOMNode)(this.reiseHandle.current);this.preSibling=e.previousElementSibling,this.nextSibling=e.nextElementSibling,this.prevOverflow=getComputedStyle(this.preSibling).getPropertyValue("overflow"),window.addEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this.state,n=e.closed,t=e.position,r=this.props,i=r.direction,a=r.closable,l=r.style,c=r.dragDisabled,u=i;n&&(u=y[u]);var p=s()("resize-handle",{"resize-handle-closed":n},"resize-handle-".concat(i),{"resize-handle-no-drag":c});return c?o.a.createElement("div",{className:p,style:l,ref:this.reiseHandle},a&&o.a.createElement("span",{onClick:this.handleToogle,className:"resize-handle-button-".concat(u)})):o.a.createElement(d.a,{axis:"n"===i||"s"===i?"y":"x",onStart:this.handleStart,onStop:this.handleStop,position:t,ref:this.reiseHandle},o.a.createElement("div",{className:p,style:l},a&&o.a.createElement("span",{onClick:this.handleToogle,className:"resize-handle-button-".concat(u)})))}}])&&f(t.prototype,r),a&&f(t,a),n}();v(m,"propTypes",{direction:c.a.string.isRequired,closable:c.a.bool,onResize:c.a.func,onToggleClose:c.a.func,defaultClosed:c.a.bool,defaultPosition:c.a.object,style:c.a.object,dragDisabled:c.a.bool,adaptive:c.a.bool}),v(m,"defaultProps",{closable:!0,onResize:null,onToggleClose:null,defaultPosition:{x:0,y:0},defaultClosed:!1,style:{},dragDisabled:!1,adaptive:!1});var w=m;n.default=w}]);