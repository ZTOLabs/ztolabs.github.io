(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{838052:function(e,t,r){Promise.resolve().then(r.bind(r,9787))},703825:function(e,t,r){"use strict";var n=r(252601);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},9787:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(296893),s=r(486496),i=r.n(s),u=r(442861),o=r(675361);function c(e){let{color:t="#375de7",size:r="medium",duration:s=1e3,...i}=e,u={tiny:2.4,small:4,medium:5.6,large:7.2,extraLarge:8.8},o=e=>{let t=e.replace("#",""),r=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),s=parseInt(t.substring(4,6),16);return"".concat(r,", ").concat(n,", ").concat(s)},c=7*u[r];return(0,n.jsx)("div",{className:"inline-block",children:(0,n.jsx)("div",{className:"flex justify-center items-center",style:{width:"".concat(c,"px"),height:"".concat(c,"px")},children:(0,n.jsx)("div",{className:"animate-spin",style:{borderRadius:"".concat(u[r],"px"),width:"".concat(u[r],"px"),height:"".concat(u[r],"px"),animationDuration:"".concat(s,"ms"),boxShadow:({tiny:["6px 0px 0 0","4.85px 3.55px 0 0","1.8599999999999999px 5.7px 0 0","-1.8599999999999999px 5.7px 0 0","-4.85px 3.55px 0 0"],small:["10px 0px 0 0","8.1px 5.9px 0 0","3.1px 9.5px 0 0","-3.1px 9.5px 0 0","-8.1px 5.9px 0 0"],medium:["14px 0px 0 0","11.35px 8.25px 0 0","4.34px 13.3px 0 0","-4.34px 13.3px 0 0","-11.35px 8.25px 0 0"],large:["18px 0px 0 0","14.6px 10.6px 0 0","5.58px 17.1px 0 0","-5.58px 17.1px 0 0","-14.6px 10.6px 0 0"],extraLarge:["22px 0px 0 0","17.8px 13px 0 0","6.82px 20.9px 0 0","-6.82px 20.9px 0 0","-17.8px 13px 0 0"]})[r].map((e,r)=>"rgba(".concat(o(t),", ").concat(.2*(r+1),") ").concat(e)).join(", ")},...i})})})}var l=e=>{let{isFullPage:t=!1,loaderSize:r="large",dataTestId:s="center-loading",description:u,className:o,style:l,...a}=e;return(0,n.jsxs)("div",{className:i()("w-full h-full flex justify-center items-center py-12",t&&"max-h-screen",u&&"flex-col",o),"data-testid":s,style:l,...a,children:[(0,n.jsx)(c,{size:r}),u&&(0,n.jsx)("p",{className:"text-gray-500 text-md mt-4",children:u})]})};function a(){let{headerTheme:e}=(0,o.bp)(),t=e===u.Ov.LIGHT;return(0,n.jsxs)("section",{className:"flex-1 flex flex-col",children:[(0,n.jsx)("div",{className:i()(" pt-20",t?"bg-white":"bg-landingBackground")}),(0,n.jsx)("div",{className:"flex-grow flex items-center",children:(0,n.jsx)(l,{description:"Loading..."})})]})}function p(){return(0,n.jsx)(a,{})}},442861:function(e,t,r){"use strict";var n,s;r.d(t,{Ew:function(){return u},Oc:function(){return i},Ov:function(){return n}}),(s=n||(n={})).LIGHT="light",s.DARK="dark";let i=[{title:"Products & Services",slug:"/products-services",subItems:[{title:"Design & Development",slug:"/design-development"},{title:"Consulting",slug:"/consulting"},{title:"Team Development",slug:"/team-development"},{title:"R&D",slug:"/research-development"}]},{title:"Technologies",slug:"/technologies"},{title:"Customers",slug:"/customers"},{title:"Work with Us",slug:"/work-with-us"},{title:"About Us",slug:"/about-us"},{title:"Blog",slug:"/blog",disabled:!0}],u=[{title:"Terms of Service ",slug:"/terms"},{title:"Privacy Policy",slug:"/privacy-policy"},{title:"Career",slug:"/career"}]},675361:function(e,t,r){"use strict";r.d(t,{wI:function(){return x},bp:function(){return o}});var n=r(296893),s=r(703825),i=r(195395),u=r(442861);let[o,c]=function(){let e=i.createContext(void 0);return[function(){let t=i.useContext(e);if(void 0===t)throw Error("useContext must be inside a Provider with a value");return t},e]}(),l=e=>["/work-with-us","/customers","/career","/terms","/privacy-policy"].some(t=>null==e?void 0:e.startsWith(t))?u.Ov.LIGHT:u.Ov.DARK,a=(e,t)=>e||"/technologies"===t||"/customers"===t,p=e=>"/about-us"===e,x=e=>{var t;let{children:r}=e,u=(0,s.usePathname)(),o=null!==(t=null==u?void 0:u.includes("/products-services"))&&void 0!==t&&t,x=l(u),d=a(o,u),f=p(u),m=(0,i.useMemo)(()=>({headerTheme:x,hasWorkWithUsFooter:d,hasAbsoluteSliderFooter:f}),[f,d,x]);return(0,n.jsx)(c.Provider,{value:m,children:r})}},486496:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[988,914,744],function(){return e(e.s=838052)}),_N_E=e.O()}]);