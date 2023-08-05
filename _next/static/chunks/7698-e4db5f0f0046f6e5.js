"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7698],{48555:function(t,e,n){n.d(e,{Z:function(){return w}});var r=n(87462),i=n(67294),o=n(50344);n(80334);var s=n(1413),a=n(42550),c=n(34203),u=n(91033),h=new Map,f=new u.Z(function(t){t.forEach(function(t){var e,n=t.target;null===(e=h.get(n))||void 0===e||e.forEach(function(t){return t(n)})})}),d=n(15671),l=n(43144),p=n(32531),v=n(51630),m=function(t){(0,p.Z)(n,t);var e=(0,v.Z)(n);function n(){return(0,d.Z)(this,n),e.apply(this,arguments)}return(0,l.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(i.Component),b=i.createContext(null),_=i.forwardRef(function(t,e){var n=t.children,r=t.disabled,o=i.useRef(null),u=i.useRef(null),d=i.useContext(b),l="function"==typeof n,p=l?n(o):n,v=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),_=!l&&i.isValidElement(p)&&(0,a.Yr)(p),g=_?p.ref:null,w=i.useMemo(function(){return(0,a.sQ)(g,o)},[g,o]),y=function(){return(0,c.Z)(o.current)||(0,c.Z)(u.current)};i.useImperativeHandle(e,function(){return y()});var k=i.useRef(t);k.current=t;var E=i.useCallback(function(t){var e=k.current,n=e.onResize,r=e.data,i=t.getBoundingClientRect(),o=i.width,a=i.height,c=t.offsetWidth,u=t.offsetHeight,h=Math.floor(o),f=Math.floor(a);if(v.current.width!==h||v.current.height!==f||v.current.offsetWidth!==c||v.current.offsetHeight!==u){var l={width:h,height:f,offsetWidth:c,offsetHeight:u};v.current=l;var p=(0,s.Z)((0,s.Z)({},l),{},{offsetWidth:c===Math.round(o)?o:c,offsetHeight:u===Math.round(a)?a:u});null==d||d(p,t,r),n&&Promise.resolve().then(function(){n(p,t)})}},[]);return i.useEffect(function(){var t=y();return t&&!r&&(h.has(t)||(h.set(t,new Set),f.observe(t)),h.get(t).add(E)),function(){h.has(t)&&(h.get(t).delete(E),h.get(t).size||(f.unobserve(t),h.delete(t)))}},[o.current,r]),i.createElement(m,{ref:u},_?i.cloneElement(p,{ref:w}):p)}),g=i.forwardRef(function(t,e){var n=t.children;return("function"==typeof n?[n]:(0,o.Z)(n)).map(function(n,o){var s=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(o);return i.createElement(_,(0,r.Z)({},t,{key:s,ref:0===o?e:void 0}),n)})});g.Collection=function(t){var e=t.children,n=t.onBatchResize,r=i.useRef(0),o=i.useRef([]),s=i.useContext(b),a=i.useCallback(function(t,e,i){r.current+=1;var a=r.current;o.current.push({size:t,element:e,data:i}),Promise.resolve().then(function(){a===r.current&&(null==n||n(o.current),o.current=[])}),null==s||s(t,e,i)},[n,s]);return i.createElement(b.Provider,{value:a},e)};var w=g},66680:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(67294);function i(t){var e=r.useRef();return e.current=t,r.useCallback(function(){for(var t,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return null===(t=e.current)||void 0===t?void 0:t.call.apply(t,[e].concat(r))},[])}},21770:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(97685),i=n(66680),o=n(8410),s=n(30470);function a(t){return void 0!==t}function c(t,e){var n=e||{},c=n.defaultValue,u=n.value,h=n.onChange,f=n.postState,d=(0,s.Z)(function(){return a(u)?u:a(c)?"function"==typeof c?c():c:"function"==typeof t?t():t}),l=(0,r.Z)(d,2),p=l[0],v=l[1],m=void 0!==u?u:p,b=f?f(m):m,_=(0,i.Z)(h),g=(0,s.Z)([m]),w=(0,r.Z)(g,2),y=w[0],k=w[1];return(0,o.o)(function(){var t=y[0];p!==t&&_(p,t)},[y]),(0,o.o)(function(){a(u)||v(u)},[u]),[b,(0,i.Z)(function(t,e){v(t,e),k([m],e)})]}},31131:function(t,e){e.Z=function(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==t?void 0:t.substr(0,4))}},91033:function(t,e,n){var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function a(){s(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,20);i=t}return c}(this.refresh.bind(this),0)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},d=m(0,0,0,0);function l(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+l(t["border-"+n+"-width"])},0)}var v="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function m(t,e,n,r){return{x:t,y:e,width:n,height:r}}var b=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=function(t){if(!i)return d;if(v(t)){var e;return m(0,0,(e=t.getBBox()).width,e.height)}return function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=l(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,a=l(r.width),c=l(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=p(r,"left","right")+o),Math.round(c+s)!==n&&(c-=p(r,"top","bottom")+s)),t!==f(t).document.documentElement){var u=Math.round(a+o)-e,h=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(h)&&(c-=h)}return m(i.left,i.top,a,c)}(t)}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n,r,i,o,s,a=(n=e.x,r=e.y,i=e.width,o=e.height,h(s=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),s);h(this,{target:t,contentRect:a})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new b(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new _(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new r,y=function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(e,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach(function(t){y.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}});var k=void 0!==o.ResizeObserver?o.ResizeObserver:y;e.Z=k}}]);
//# sourceMappingURL=7698-e4db5f0f0046f6e5.js.map