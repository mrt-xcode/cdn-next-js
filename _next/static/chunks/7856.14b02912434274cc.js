(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7856],{27856:function(e){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}:Reflect.construct).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a,i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,s=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return n(e,r(t))});var y=x(Array.prototype.forEach),b=x(Array.prototype.pop),T=x(Array.prototype.push),N=x(String.prototype.toLowerCase),v=x(String.prototype.toString),E=x(String.prototype.match),A=x(String.prototype.replace),S=x(String.prototype.indexOf),_=x(String.prototype.trim),w=x(RegExp.prototype.test),k=(a=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(a,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function L(e,t,n){n=n||N,l&&l(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(c(t)||(t[r]=a),o=a)}e[o]=!0}return e}function O(e){var t,n=p(null);for(t in e)!0===h(i,e,[t])&&(n[t]=e[t]);return n}function C(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var D=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),q=f(/\${[\w\W]*}/gm),Y=f(/^data-[\-\w.\u00B7-\uFFFF]/),$=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=f(/^(?:\w+script|data):/i),X=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),J=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function t(){var n,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,i=function(e){return t(e)};if(i.version="2.4.5",i.removed=[],!a||!a.document||9!==a.document.nodeType)return i.isSupported=!1,i;var l=a.document,c=a.document,s=a.DocumentFragment,u=a.HTMLTemplateElement,f=a.Node,p=a.Element,d=a.NodeFilter,h=a.NamedNodeMap,g=void 0===h?a.NamedNodeMap||a.MozNamedAttrMap:h,x=a.HTMLFormElement,Q=a.DOMParser,ee=a.trustedTypes,et=p.prototype,en=C(et,"cloneNode"),er=C(et,"nextSibling"),eo=C(et,"childNodes"),ea=C(et,"parentNode");if("function"==typeof u){var ei=c.createElement("template");ei.content&&ei.content.ownerDocument&&(c=ei.content.ownerDocument)}var el=J(ee,l),ec=el?el.createHTML(""):"",es=c,eu=es.implementation,em=es.createNodeIterator,ef=es.createDocumentFragment,ep=es.getElementsByTagName,ed=l.importNode,eh={};try{eh=O(c).documentMode?c.documentMode:{}}catch(eg){}var ey={};i.isSupported="function"==typeof ea&&eu&&void 0!==eu.createHTMLDocument&&9!==eh;var eb=K,eT=null,eN=L({},[].concat(r(D),r(R),r(M),r(F),r(H))),ev=null,eE=L({},[].concat(r(z),r(P),r(B),r(j))),eA=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eS=null,e_=null,ew=!0,ek=!0,ex=!1,eL=!0,eO=!1,eC=!1,eD=!1,eR=!1,eM=!1,eI=!1,eF=!1,eU=!0,eH=!1,ez=!0,eP=!1,eB={},ej=null,eG=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eW=null,eq=L({},["audio","video","img","source","image","track"]),eY=null,e$=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eK="http://www.w3.org/1998/Math/MathML",eV="http://www.w3.org/2000/svg",eX="http://www.w3.org/1999/xhtml",eZ=eX,eJ=!1,eQ=null,e0=L({},[eK,eV,eX],v),e1=["application/xhtml+xml","text/html"],e2=null,e9=c.createElement("form"),e3=function(e){return e instanceof RegExp||e instanceof Function},e8=function(t){e2&&e2===t||(t&&"object"===e(t)||(t={}),t=O(t),o="application/xhtml+xml"===(n=n=-1===e1.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE)?v:N,eT="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,o):eN,ev="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,o):eE,eQ="ALLOWED_NAMESPACES"in t?L({},t.ALLOWED_NAMESPACES,v):e0,eY="ADD_URI_SAFE_ATTR"in t?L(O(e$),t.ADD_URI_SAFE_ATTR,o):e$,eW="ADD_DATA_URI_TAGS"in t?L(O(eq),t.ADD_DATA_URI_TAGS,o):eq,ej="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,o):eG,eS="FORBID_TAGS"in t?L({},t.FORBID_TAGS,o):{},e_="FORBID_ATTR"in t?L({},t.FORBID_ATTR,o):{},eB="USE_PROFILES"in t&&t.USE_PROFILES,ew=!1!==t.ALLOW_ARIA_ATTR,ek=!1!==t.ALLOW_DATA_ATTR,ex=t.ALLOW_UNKNOWN_PROTOCOLS||!1,eL=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,eO=t.SAFE_FOR_TEMPLATES||!1,eC=t.WHOLE_DOCUMENT||!1,eM=t.RETURN_DOM||!1,eI=t.RETURN_DOM_FRAGMENT||!1,eF=t.RETURN_TRUSTED_TYPE||!1,eR=t.FORCE_BODY||!1,eU=!1!==t.SANITIZE_DOM,eH=t.SANITIZE_NAMED_PROPS||!1,ez=!1!==t.KEEP_CONTENT,eP=t.IN_PLACE||!1,eb=t.ALLOWED_URI_REGEXP||eb,eZ=t.NAMESPACE||eX,eA=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&e3(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eA.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&e3(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eA.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eA.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),eO&&(ek=!1),eI&&(eM=!0),eB&&(eT=L({},r(H)),ev=[],!0===eB.html&&(L(eT,D),L(ev,z)),!0===eB.svg&&(L(eT,R),L(ev,P),L(ev,j)),!0===eB.svgFilters&&(L(eT,M),L(ev,P),L(ev,j)),!0===eB.mathMl&&(L(eT,F),L(ev,B),L(ev,j))),t.ADD_TAGS&&(eT===eN&&(eT=O(eT)),L(eT,t.ADD_TAGS,o)),t.ADD_ATTR&&(ev===eE&&(ev=O(ev)),L(ev,t.ADD_ATTR,o)),t.ADD_URI_SAFE_ATTR&&L(eY,t.ADD_URI_SAFE_ATTR,o),t.FORBID_CONTENTS&&(ej===eG&&(ej=O(ej)),L(ej,t.FORBID_CONTENTS,o)),ez&&(eT["#text"]=!0),eC&&L(eT,["html","head","body"]),eT.table&&(L(eT,["tbody"]),delete eS.tbody),m&&m(t),e2=t)},e5=L({},["mi","mo","mn","ms","mtext"]),e6=L({},["foreignobject","desc","title","annotation-xml"]),e4=L({},["title","style","font","a","script"]),e7=L({},R);L(e7,M),L(e7,I);var te=L({},F);L(te,U);var tt=function(e){var t=ea(e);t&&t.tagName||(t={namespaceURI:eZ,tagName:"template"});var r=N(e.tagName),o=N(t.tagName);return!!eQ[e.namespaceURI]&&(e.namespaceURI===eV?t.namespaceURI===eX?"svg"===r:t.namespaceURI===eK?"svg"===r&&("annotation-xml"===o||e5[o]):Boolean(e7[r]):e.namespaceURI===eK?t.namespaceURI===eX?"math"===r:t.namespaceURI===eV?"math"===r&&e6[o]:Boolean(te[r]):e.namespaceURI===eX?(t.namespaceURI!==eV||!!e6[o])&&(t.namespaceURI!==eK||!!e5[o])&&!te[r]&&(e4[r]||!e7[r]):"application/xhtml+xml"===n&&!!eQ[e.namespaceURI])},tn=function(e){T(i.removed,{element:e});try{e.parentNode.removeChild(e)}catch(n){try{e.outerHTML=ec}catch(t){e.remove()}}},tr=function(e,t){try{T(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch(n){T(i.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ev[e]){if(eM||eI)try{tn(t)}catch(r){}else try{t.setAttribute(e,"")}catch(o){}}},to=function(e){if(eR)e="<remove></remove>"+e;else{var t,r,o=E(e,/^[\r\n\t ]+/);r=o&&o[0]}"application/xhtml+xml"===n&&eZ===eX&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=el?el.createHTML(e):e;if(eZ===eX)try{t=new Q().parseFromString(a,n)}catch(i){}if(!t||!t.documentElement){t=eu.createDocument(eZ,"template",null);try{t.documentElement.innerHTML=eJ?ec:a}catch(l){}}var s=t.body||t.documentElement;return(e&&r&&s.insertBefore(c.createTextNode(r),s.childNodes[0]||null),eZ===eX)?ep.call(t,eC?"html":"body")[0]:eC?t.documentElement:s},ta=function(e){return em.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},ti=function(t){return"object"===e(f)?t instanceof f:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},tl=function(e,t,n){ey[e]&&y(ey[e],function(e){e.call(i,t,n,e2)})},tc=function(e){if(tl("beforeSanitizeElements",e,null),e instanceof x&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof g)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)||w(/[\u0080-\uFFFF]/,e.nodeName))return tn(e),!0;var t,n=o(e.nodeName);if(tl("uponSanitizeElement",e,{tagName:n,allowedTags:eT}),e.hasChildNodes()&&!ti(e.firstElementChild)&&(!ti(e.content)||!ti(e.content.firstElementChild))&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent)||"select"===n&&w(/<template/i,e.innerHTML))return tn(e),!0;if(!eT[n]||eS[n]){if(!eS[n]&&tu(n)&&(eA.tagNameCheck instanceof RegExp&&w(eA.tagNameCheck,n)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(n)))return!1;if(ez&&!ej[n]){var r=ea(e)||e.parentNode,a=eo(e)||e.childNodes;if(a&&r)for(var l=a.length,c=l-1;c>=0;--c)r.insertBefore(en(a[c],!0),er(e))}return tn(e),!0}return e instanceof p&&!tt(e)||("noscript"===n||"noembed"===n)&&w(/<\/no(script|embed)/i,e.innerHTML)?(tn(e),!0):(eO&&3===e.nodeType&&(t=A(t=e.textContent,G," "),t=A(t,W," "),t=A(t,q," "),e.textContent!==t&&(T(i.removed,{element:e.cloneNode()}),e.textContent=t)),tl("afterSanitizeElements",e,null),!1)},ts=function(e,t,n){if(eU&&("id"===t||"name"===t)&&(n in c||n in e9))return!1;if(ek&&!e_[t]&&w(Y,t));else if(ew&&w($,t));else if(!ev[t]||e_[t]){if(!(tu(e)&&(eA.tagNameCheck instanceof RegExp&&w(eA.tagNameCheck,e)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(e))&&(eA.attributeNameCheck instanceof RegExp&&w(eA.attributeNameCheck,t)||eA.attributeNameCheck instanceof Function&&eA.attributeNameCheck(t))||"is"===t&&eA.allowCustomizedBuiltInElements&&(eA.tagNameCheck instanceof RegExp&&w(eA.tagNameCheck,n)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(n))))return!1}else if(eY[t]);else if(w(eb,A(n,X,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===S(n,"data:")&&eW[e]);else if(ex&&!w(V,A(n,X,"")));else if(n)return!1;return!0},tu=function(e){return e.indexOf("-")>0},tm=function(t){tl("beforeSanitizeAttributes",t,null);var n,r,a,l,c=t.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ev};for(l=c.length;l--;){var u=(n=c[l]).name,m=n.namespaceURI;if(r="value"===u?n.value:_(n.value),a=o(u),s.attrName=a,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,tl("uponSanitizeAttribute",t,s),r=s.attrValue,!s.forceKeepAttr&&(tr(u,t),s.keepAttr)){if(!eL&&w(/\/>/i,r)){tr(u,t);continue}eO&&(r=A(r,G," "),r=A(r,W," "),r=A(r,q," "));var f=o(t.nodeName);if(ts(f,a,r)){if(eH&&("id"===a||"name"===a)&&(tr(u,t),r="user-content-"+r),el&&"object"===e(ee)&&"function"==typeof ee.getAttributeType){if(m);else switch(ee.getAttributeType(f,a)){case"TrustedHTML":r=el.createHTML(r);break;case"TrustedScriptURL":r=el.createScriptURL(r)}}try{m?t.setAttributeNS(m,u,r):t.setAttribute(u,r),b(i.removed)}catch(p){}}}}tl("afterSanitizeAttributes",t,null)}},tf=function e(t){var n,r=ta(t);for(tl("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)tl("uponSanitizeShadowNode",n,null),tc(n)||(n.content instanceof s&&e(n.content),tm(n));tl("afterSanitizeShadowDOM",t,null)};return i.sanitize=function(t){var n,r,c,u,m,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((eJ=!t)&&(t="<!-->"),"string"!=typeof t&&!ti(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!i.isSupported){if("object"===e(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof t)return a.toStaticHTML(t);if(ti(t))return a.toStaticHTML(t.outerHTML)}return t}if(eD||e8(p),i.removed=[],"string"==typeof t&&(eP=!1),eP){if(t.nodeName){var d=o(t.nodeName);if(!eT[d]||eS[d])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof f)1===(r=(n=to("<!---->")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!eM&&!eO&&!eC&&-1===t.indexOf("<"))return el&&eF?el.createHTML(t):t;if(!(n=to(t)))return eM?null:eF?ec:""}n&&eR&&tn(n.firstChild);for(var h=ta(eP?t:n);c=h.nextNode();)3===c.nodeType&&c===u||tc(c)||(c.content instanceof s&&tf(c.content),tm(c),u=c);if(u=null,eP)return t;if(eM){if(eI)for(m=ef.call(n.ownerDocument);n.firstChild;)m.appendChild(n.firstChild);else m=n;return(ev.shadowroot||ev.shadowrootmod)&&(m=ed.call(l,m,!0)),m}var g=eC?n.outerHTML:n.innerHTML;return eC&&eT["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&w(Z,n.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+g),eO&&(g=A(g,G," "),g=A(g,W," "),g=A(g,q," ")),el&&eF?el.createHTML(g):g},i.setConfig=function(e){e8(e),eD=!0},i.clearConfig=function(){e2=null,eD=!1},i.isValidAttribute=function(e,t,n){return e2||e8({}),ts(o(e),o(t),n)},i.addHook=function(e,t){"function"==typeof t&&(ey[e]=ey[e]||[],T(ey[e],t))},i.removeHook=function(e){if(ey[e])return b(ey[e])},i.removeHooks=function(e){ey[e]&&(ey[e]=[])},i.removeAllHooks=function(){ey={}},i}()}()}}]);
//# sourceMappingURL=7856.14b02912434274cc.js.map