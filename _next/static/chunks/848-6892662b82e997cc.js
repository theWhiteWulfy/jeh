(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{8030:function(e,t,n){"use strict";var r,o;n.r(t),n.d(t,{DataContext:function(){return w},DataCtxReader:function(){return L},DataProvider:function(){return A},PageParamsProvider:function(){return T},PlasmicCanvasContext:function(){return b},PlasmicCanvasHost:function(){return _},applySelector:function(){return R},mkMetaName:function(){return j},mkMetaValue:function(){return x},registerComponent:function(){return U},registerGlobalContext:function(){return N},registerTrait:function(){return B},repeatedElement:function(){return G},unstable_registerFetcher:function(){return I},useDataEnv:function(){return k},usePlasmicCanvasContext:function(){return h},useSelector:function(){return M},useSelectors:function(){return S}});var a=n(7294),u=n(3935);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var d=[],p=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,d.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function m(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var v=0;function y(e){v++,p.set(e)}var b=(0,a.createContext)(!1),h=function(){return(0,a.useContext)(b)};function g(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,i=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,l=function(){var e=(0,a.useState)(0)[1];return(0,a.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,a.useLayoutEffect)((function(){return d.push(l),function(){var e=d.indexOf(l);e>=0&&d.splice(e,1)}}),[l]),(0,a.useEffect)((function(){i&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=m();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[i,n]),(0,a.useEffect)((function(){if(!i&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=m()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[i]),!n)return null;if(r||o){var c=document.querySelector("#plasmic-app.__wab_user-body");c||((c=document.createElement("div")).id="plasmic-app",c.classList.add("__wab_user-body"),document.body.appendChild(c));var s=new URLSearchParams(location.hash),f=!!r&&{componentName:s.get("componentName")};return(0,u.createPortal)((0,a.createElement)(E,{key:""+v},(0,a.createElement)(b.Provider,{value:f},p.get())),c,"plasmic-app")}return i&&window.parent===window?(0,a.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var _=function(e){var t=e.enableWebpackHmr,n=(0,a.useState)(null),r=n[0],o=n[1];return(0,a.useEffect)((function(){o((0,a.createElement)(g,null))}),[]),(0,a.createElement)(a.Fragment,null,!t&&(0,a.createElement)(O,null),r)},C=[];function P(e){return C.push(e),function(){var t=C.indexOf(e);t>=0&&C.splice(t,1)}}var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){C.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,a.createElement)("div",null,"Error: ",""+this.state.error.message):(0,a.createElement)(a.Fragment,null,this.props.children)},r}(a.Component);function O(){return null}var w=(0,a.createContext)(void 0);function j(e){return"__plasmic_meta_"+e}function x(e){return e}function R(e,t){if(t){for(var n,r=e,o=s(t.split("."));!(n=o()).done;){var a,u=n.value;r=null==(a=r)?void 0:a[u]}return r}}function M(e){return R(k(),e)}function S(e){void 0===e&&(e={});var t=k();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,R(t,r))})))}function k(){return(0,a.useContext)(w)}function A(e){var t,n,r=e.name,o=e.data,u=e.hidden,l=e.label,c=e.children,s=null!=(t=k())?t:{};return r?a.createElement(w.Provider,{value:i({},s,(n={},n[r]=o,n[j(r)]={hidden:u,label:l},n))},c):a.createElement(a.Fragment,null,c)}function T(e){var t=e.children,n=e.params,r=void 0===n?{}:n,o=e.query,u=void 0===o?{}:o;return a.createElement(A,{name:"params",data:r,label:"Page route params"},a.createElement(A,{name:"query",data:u,label:"Page query params"},t))}function L(e){return(0,e.children)(k())}var D=globalThis;function I(e,t){D.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}D.__PlasmicFetcherRegistry=[];var F=globalThis;function U(e,t){F.__PlasmicComponentRegistry.push({component:e,meta:t})}null==F.__PlasmicComponentRegistry&&(F.__PlasmicComponentRegistry=[]);var H=globalThis;function N(e,t){H.__PlasmicContextRegistry.push({component:e,meta:t})}null==H.__PlasmicContextRegistry&&(H.__PlasmicContextRegistry=[]);var q,V,Z=globalThis;function B(e,t){Z.__PlasmicTraitRegistry.push({trait:e,meta:t})}function G(e,t){return K(e,t)}null==Z.__PlasmicTraitRegistry&&(Z.__PlasmicTraitRegistry=[]);var K=function(e,t){return Array.isArray(t)?t.map((function(t){return K(e,t)})):t&&(0,a.isValidElement)(t)&&"string"!==typeof t?(0,a.cloneElement)(t):t},z=globalThis,$=null!=(q=null==z||null==(V=z.__Sub)?void 0:V.setRepeatedElementFn)?q:function(e){K=e},W={__proto__:null,PlasmicCanvasContext:b,PlasmicCanvasHost:_,usePlasmicCanvasContext:h,unstable_registerFetcher:I,registerComponent:U,registerGlobalContext:N,registerTrait:B,repeatedElement:G,DataContext:w,mkMetaName:j,mkMetaValue:x,applySelector:R,useSelector:M,useSelectors:S,useDataEnv:k,DataProvider:A,PageParamsProvider:T,DataCtxReader:L},J=globalThis;null==J.__Sub&&(J.__Sub=i({React:r||(r=n.t(a,2)),ReactDOM:o||(o=n.t(u,2)),hostModule:W,hostVersion:"1.0.71",hostUtils:{setPlasmicRootNode:y,registerRenderErrorListener:P,setRepeatedElementFn:$},setPlasmicRootNode:y,registerRenderErrorListener:P,setRepeatedElementFn:$},W))},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),i=n(2725),l=n(3462),c=n(1018),s=n(7190),f=n(1210),d=n(8684);var p="undefined"!==typeof a.default.useTransition,m={};function v(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,b=e.children,h=e.prefetch,g=e.passHref,_=e.replace,C=e.shallow,P=e.scroll,E=e.locale,O=e.onClick,w=e.onMouseEnter,j=e.legacyBehavior,x=void 0===j?!0!==Boolean(!1):j,R=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,!x||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var M=!1!==h,S=r(p?a.default.useTransition():[],2)[1],k=a.default.useContext(l.RouterContext),A=a.default.useContext(c.AppRouterContext);A&&(k=A);var T,L=a.default.useMemo((function(){var e=r(u.resolveHref(k,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?u.resolveHref(k,y):n||t}}),[k,o,y]),D=L.href,I=L.as,F=a.default.useRef(D),U=a.default.useRef(I);x&&(T=a.default.Children.only(n));var H=x?T&&"object"===typeof T&&T.ref:t,N=r(s.useIntersection({rootMargin:"200px"}),3),q=N[0],V=N[1],Z=N[2],B=a.default.useCallback((function(e){U.current===I&&F.current===D||(Z(),U.current=I,F.current=D),q(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[I,H,D,Z,q]);a.default.useEffect((function(){var e=V&&M&&u.isLocalURL(D),t="undefined"!==typeof E?E:k&&k.locale,n=m[D+"%"+I+(t?"%"+t:"")];e&&!n&&v(k,D,I,{locale:t})}),[I,D,V,E,M,k]);var G={ref:B,onClick:function(e){x||"function"!==typeof O||O(e),x&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var s=function(){t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i})};c?c(s):s()}}(e,k,D,I,_,C,P,E,A?S:void 0)},onMouseEnter:function(e){x||"function"!==typeof w||w(e),x&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),u.isLocalURL(D)&&v(k,D,I,{priority:!0})}};if(!x||g||"a"===T.type&&!("href"in T.props)){var K="undefined"!==typeof E?E:k&&k.locale,z=k&&k.isLocaleDomain&&f.getDomainLocale(I,K,k.locales,k.domainLocales);G.href=z||d.addBasePath(i.addLocale(I,K,k&&k.defaultLocale))}return x?a.default.cloneElement(T,G):a.default.createElement("a",Object.assign({},R,G),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],m=r(o.useState(null),2),v=m[0],y=m[1];o.useEffect((function(){if(u){if(s.current&&(s.current(),s.current=void 0),c||d)return;return v&&v.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[v,c,n,t,d]);var b=o.useCallback((function(){p(!1)}),[]);return[y,d,b]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var a=o.default.createContext(null);t.AppRouterContext=a;var u=o.default.createContext(null);t.AppTreeContext=u;var i=o.default.createContext(null);t.FullAppTreeContext=i},7575:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},797:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);