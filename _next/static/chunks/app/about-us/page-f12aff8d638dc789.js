(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{170337:function(A,e,t){Promise.resolve().then(t.bind(t,749651))},995846:function(A,e,t){"use strict";t.d(e,{default:function(){return a.a}});var i=t(151531),a=t.n(i)},151531:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r}});let i=t(93603);t(296893),t(195395);let a=i._(t(88198));function r(A,e){var t;let i={loading:A=>{let{error:e,isLoading:t,pastDelay:i}=A;return null}};"function"==typeof A&&(i.loader=A);let r={...i,...e};return(0,a.default)({...r,modules:null==(t=r.loadableGenerated)?void 0:t.modules})}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),A.exports=e.default)},974867:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let i=t(60596);function a(A){let{reason:e,children:t}=A;if("undefined"==typeof window)throw new i.BailoutToCSRError(e);return t}},88198:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return d}});let i=t(296893),a=t(195395),r=t(974867),l=t(735195);function s(A){return{default:A&&"default"in A?A.default:A}}let n={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},d=function(A){let e={...n,...A},t=(0,a.lazy)(()=>e.loader().then(s)),d=e.loading;function o(A){let s=d?(0,i.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,n=e.ssr?(0,i.jsxs)(i.Fragment,{children:["undefined"==typeof window?(0,i.jsx)(l.PreloadCss,{moduleIds:e.modules}):null,(0,i.jsx)(t,{...A})]}):(0,i.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(t,{...A})});return(0,i.jsx)(a.Suspense,{fallback:s,children:n})}return o.displayName="LoadableComponent",o}},735195:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"PreloadCss",{enumerable:!0,get:function(){return r}});let i=t(296893),a=t(821393);function r(A){let{moduleIds:e}=A;if("undefined"!=typeof window)return null;let t=(0,a.getExpectedRequestStore)("next/dynamic css"),r=[];if(t.reactLoadableManifest&&e){let A=t.reactLoadableManifest;for(let t of e){if(!A[t])continue;let e=A[t].files.filter(A=>A.endsWith(".css"));r.push(...e)}}return 0===r.length?null:(0,i.jsx)(i.Fragment,{children:r.map(A=>(0,i.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(A),as:"style"},A))})}},749651:function(A,e,t){"use strict";t.d(e,{default:function(){return W}});var i=t(296893),a=t(629991),r={src:"/_next/static/media/hero.55019cdf.png",height:586,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEWNhH1/d3Kdl5ClmY+YpaulsrfN1tmKkJKtqJ6cinhRPi+2r6mPd2RaZVxfWkiGSRlreoFjaGqzv8asvMLc4+VQ59NbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhwEAIAgDsDqg4F7/32oCA/ORpahwkPnB+vBIUaQyG8K+HxGDAQhxFb7BAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},l={src:"/_next/static/media/hero@2x.b9c52e35.png",height:1172,width:2560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEWNhH2HkZawvsV/d3KNj4/N19mlsrehmJCtqJ6cinhRPi+Pd2RfWkm2r6laZVyFSRmYoqdreoFjaGqXqK/c4+VfBp7nAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVR4nAXBhQEAIAwDsG7McP3/VhIEZLFtRUcG0X2I0bKLKbzMinT4AxFPAP3CyAdOAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},s=t(938827),n={src:"/_next/static/media/logo-gotit.c0137c1d.png",height:48,width:118,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEUAAAAAAAAAAAUAAAIAAAIAAAAAAAQDAwMsTccrSr0wfXRMAAAACnRSTlMGWBFjXkg3QC5ScHjirwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACFJREFUeJwFwYcBADAMwjADGe3/D0eiejaWkCpxC/M+wAEEOABF8TF+hgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},d={src:"/_next/static/media/logo-gotit.51821986.webp",height:48,width:118,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAX1onQF4KTGZdfFBpUQlLWQAAKUoBAAEBAFZQOCA6AAAAsAEAnQEqCAADAAJAOCWMAnQA9IetUAD+/bmhKd1WT+Y9K8USMcDOz6N/5tgaaTM/fyR4Q5bQpoAAAA==",blurWidth:8,blurHeight:3};let o=[{name:"Peter Relan",title:"YouWeb's Founder",profileImage:{src:"/_next/static/media/advisor-peter-relan.9b5ffeea.png",height:192,width:192,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEWxrZ3Fu6KgmYrKx7PWRUjwVGn7XnWpppW9sZu6t6a8m4rXOkbgrKzZbnDuYXrLwKSTeFrW0MCEVzHd4dbdqY5sRim6pJq+Ih9OHQfFk3yrHhzAhmjlPEfCysHAjISQiIC8cVfc0MnMcGaoQk/+dYrHKTx8FiHZVGL2nJv9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAARUlEQVR4nAXBhQHAMAwDMBdTHjPz/x9OgmEggDhYljtjQRCmrFsrLApqBrcdCyreT+t1BwQ57qfSCnL2Mer0oPNKfjq9P2zkA6QrhAWFAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},mobileProfileImage:{src:"/_next/static/media/advisor-peter-relan.a103c1f9.webp",height:192,width:192,blurDataURL:"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoIAAgAAkA4JbACdAD5j11tP6gA/thPwM96r6vTwUK50AkSgIiEclzDfOCT9t67mNstxK+//BoFzw0P9hvdUGtl/jP7DuQ2//5EKfHMAAA=",blurWidth:8,blurHeight:8},related:[{name:"YouWeb Incubator",logo:{src:"/_next/static/media/logo-youweb.45b7673e.png",height:48,width:129,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEXQ0M7W2Nzm5+je3t7379H77Lf/8sPr7PDt48CdnqLWwXr/3mT/+uhj6MlBAAAAA3RSTlP9/fxScwWaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nGNg4GBjYWJmZmTg5OJmZWRgYGBgZGHlYWdmZgIABWUAZV9A6PUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},mobileLogo:{src:"/_next/static/media/logo-youweb.dbd6d6d4.webp",height:48,width:129,blurDataURL:"data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBMAAAABD6AgbQPGv+V2x0ZExEEBI/ofAFZQOCAuAAAA0AEAnQEqCAADAAJAOCWUAnQBDwEqwkAA/vxBDvkCIBEKw41TsB5Xtb5O80IAAA==",blurWidth:8,blurHeight:3}},{name:"Discord",logo:{src:"/_next/static/media/logo-discord.a31fa50b.png",height:48,width:172,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEVSZfpRZfhRZvpSZvpXZ/9QZPaxo+SwAAAABnRSTlM/hDBLIJg4WAHvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGUlEQVR4nAXBAQEAAAgCIMz6fzmQWwbJtHgA/QAXqnhgzwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},mobileLogo:{src:"/_next/static/media/logo-discord.d13b9fb1.webp",height:48,width:172,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAbIUWMSMrKzFndx47OzczOQBWUDggNgAAALABAJ0BKggAAgACQDgloAJ0AQtc3TgA/vNWeX2eJbOLlwQBj2g/YgyPnxZ/R04PiDiMM6wAAA==",blurWidth:8,blurHeight:2}}]},{name:"Hung Tran",title:"Got It Founder",profileImage:{src:"/_next/static/media/advisor-hung-tran.c168140f.png",height:192,width:192,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVYQiuUkG6plpK4pqCak4MoJCB2YkOQgWyBfGuupZuqnJ6jlZhfY0Kloqp+bVt+Zkqnjou1foGDdGe1eWHJtrWQi3yzprSFiYOKiHtHUy1dazmQYVCsak+lh327nIa3i4RzYliIY2sHYhcjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAARElEQVR4nAXBhQHAIBAEsMMe97rS/ZdsAj3L1DQBWhqlUgaMbOc3MnCwp9ebgD2wqzIC1Gb7G22AmUQpfllhuXDO8/gDbicDGG9CI7UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},mobileProfileImage:{src:"/_next/static/media/advisor-hung-tran.96461911.webp",height:192,width:192,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoIAAgAAkA4JQBOgMUA7S2nvl1wAPPB12ajUsuzVHa16X1zkF7Mg7gYsYe1OZIaPjXQUpcS2poezKk4AAA=",blurWidth:8,blurHeight:8},related:[{name:"Got It",logo:n,mobileLogo:d},{name:"STEAM for Vietnam",logo:{src:"/_next/static/media/logo-s4v.d3951843.png",height:48,width:127,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEUjLHMkLmUfLmUcVoVcV6v1Kon53Ul3g6WcR6L/cVglw98hJV4qt/Ns2LlhX5xLAAAADnRSTlMEJEUsOnGP0sPqUTbBzsL5FpsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAgSURBVHicY2DlZGNgZGRkZOBg52XmZmJiYmDh4WIAAQAFxgBjKBR1IgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},mobileLogo:{src:"/_next/static/media/logo-s4v.ef7822a4.webp",height:48,width:127,blurDataURL:"data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAActicCyMhDhrGpugdPDdATCXJPgIIBgkJAFZQOCBGAAAA0AEAnQEqCAADAAJAOCWgAnQBDvpiIgAA/t3hSr/jHqg+kj+ECJEk/QxhNLf8Z5NYdX+Gl6CH3WX16UeADCyynkuiqAAAAA==",blurWidth:8,blurHeight:3}}]},{name:"Vu Nguyen",title:"Got It Director of Engineering",profileImage:{src:"/_next/static/media/advisor-vu-nguyen.90b117da.png",height:192,width:192,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEUfHiSibSQ6LiQXGSHHky4hHRjPnDUUEQ/gsVC9jCmseB2zgSLftVyygiq5gUikcUJcRC5WOxeWZB5mSiLPoUFtTjK3hloAAACXdU/Unnl8ZFHOlmxjamSuiWSAYScyMCYGCQlqPxXyP7DIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAARElEQVR4nAXBBQLAIAwEsENbHOY+9v9PLkGMzMxCYLLWPq190FqnUjvBOZfP+yWkEPJ+XAThfVk2s2IYjZyrIUgFKAA/dFADAioTWqAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},mobileProfileImage:{src:"/_next/static/media/advisor-vu-nguyen.e0c1992f.webp",height:192,width:192,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABQAgCdASoIAAgAAkA4JbACdEf/gbiqvvC0EgAA/sX7neqc9pMoLDFgUG9bvdIQCIISobTFxT5uzGS85b+fqLgHtC2tdJWQJ78nc+8b68oAAAAA",blurWidth:8,blurHeight:8},related:[{name:"Got It",logo:n,mobileLogo:d}]},{name:"Tommy Le",title:"Got It Engineering Manager",profileImage:{src:"/_next/static/media/advisor-tommy-le.c86bf5f3.png",height:192,width:192,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEV2RxxqVivXsluSek2dgjjjsow7VW+SVRi1k0TGolB/ZEGufUs6KBmad1eDcjK0glpcc4ZhXklGW2+IUh+DTh2IUiCHUBtYSCRkRTHMmGdvWihwc3LVrYmjiz+XZ0a+p2ZNVlVITUMnJwI1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAARElEQVR4nAXBBQKAMAwEsFsnnRvu8P9PksBla5WUHk7ZJQKAU/uawCPoEkUHHkAiFr3xBMri1oFnPO1L59E8XmN67ab+XQ4DDhttgQoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},mobileProfileImage:{src:"/_next/static/media/advisor-tommy-le.9412a758.webp",height:192,width:192,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoIAAgAAkA4JZgCdAEOk2bgAADOOsz7uCc7eC2MNykURAQVFK/hxoSVCfSpMKkHbwl2QHMwZwIr6QWCXKHoujjfs/NoJkTX2LfwF4AA",blurWidth:8,blurHeight:8},related:[{name:"Got It",logo:n,mobileLogo:d}]}];function g(){return(0,i.jsx)("section",{className:"pb-12 lg:py-24",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row lg:gap-24",children:[(0,i.jsxs)("div",{className:"basis-[32%] text-left",children:[(0,i.jsx)("h2",{className:"text-display-sm lg:text-display-md text-primary font-semibold",children:"Advisors"}),(0,i.jsx)("p",{className:"text-lg lg:text-xl text-secondary mt-2 lg:mt-5",children:"We're a cross-disciplinary team that loves to create great experiences for our customers."})]}),(0,i.jsx)("div",{className:"flex-grow grid grid-cols-2 gap-x-8 gap-y-16 mt-8 lg:mt-0",children:o.map((A,e)=>(0,i.jsxs)("div",{className:"text-left flex flex-col",children:[(0,i.jsx)(s.default,{src:A.profileImage,mobileSrc:A.mobileProfileImage,alt:"","aria-hidden":!0,className:"rounded-full overflow-hidden w-[6rem] h-[6rem]"}),(0,i.jsx)("div",{className:"mt-5 text-lg text-primary",children:A.name}),(0,i.jsx)("div",{className:"text-md text-green-500",children:A.title}),(0,i.jsx)("div",{className:"mt-4 flex gap-4",children:A.related.map((A,e)=>(0,i.jsx)(s.default,{src:A.logo,mobileSrc:A.mobileLogo,alt:A.name,"aria-hidden":!0,className:"h-6 w-auto"},e))})]},e))})]})})})}var c={src:"/_next/static/media/ceo-phong-do.7e670855.png",height:440,width:392,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAb1BMVEWYvsitiH2Xo6XC1OGktb3i7fG8o590b2+zxc+XsrqdalhebXh8naXP4fKVkox2goJBOzZ8eXk2KiV7WUyXcGjVjnrIt7XGoJaEh4nAwsaUe3XIs657fH26zNvJ0NaIkJOzcGCtrq2xvcWFoLSJrLTmC8vGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBBQKAMAwEsJu2c9wd/v9GEjwv36d2UDH7zRikmC8CkD7pJwCBj4W0Q2A1i7pgX+3QtwQpRts11Q9mhgMTxYvwagAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},u={src:"/_next/static/media/ceo-phong-do@2x.141ed2c4.png",height:880,width:784,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAb1BMVEWzw82tiHx2cXHIs7B7enu9o56VdGyav8nA0uCfs7vFys+dalmHprSUkox8nKXP4fKQr7aUu8R5hYVtaWY/OTU2KSV+W07d5+rWj3rGn5bo8veEiIqlusGZnqCIkZOzcGCWp6pfcXutrqxcaXK5y9f5uF/4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQElEQVR4nAXBhQHAIBAEsMMfL9Td9t+RBAj4rsOCUvRym5FTvLkxyOHxeyn44TS3HV6QY7KChBLL1ONkq9Lj0ABkFAMISnQmggAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},h={src:"/_next/static/media/founding-story.ba592d55.png",height:544,width:560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/8v/5+/34+/739/v4+fz7/f75+/z5+/34+/z4+vv3+/z6+/729v/////JSvUBAAAADXRSTlMB2C4PWej4nb5ufU4f/PcHYQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwdy0ESACEIA8EEBFTM/7+7xc6pL4N1Hv5CeX1gW4rdw1KKDodTqQJpRilQ0kGvB/S12T8u9wFWr9u1vwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},m={src:"/_next/static/media/founding-story@2x.715b2b5d.png",height:1088,width:1120,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX09PT6+/739/v6+/37/f75+/z5+v34+/34+/z4+/z5+/z3+vz3+vz///8fwWTRAAAADXRSTlMBKw/a6PhQnVvLbX22u+gr9wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADlJREFUeJwdy7cRADEMxMCjESnz6L/dHwnRJtDcplcyjl/YB7nqshmEy+XBoBXLLCDVsFXTpDrv/wEsyQFEya/OtgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},b={src:"/_next/static/media/ceo-phong-do.2e13eaf6.webp",height:440,width:392,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoHAAgAAkA4JYwCdAEegm4q2rYAAP7YZRYxMckNmx2Ab5uoU6xMr/tGLZr/FYBpuYZVqDj8Ij9sAUt2clApNI60IQM1ZUAA",blurWidth:7,blurHeight:8},x={src:"/_next/static/media/ceo-phong-do@2x.ae863174.webp",height:880,width:784,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoHAAgAAkA4JYwCdAEegm4q2rYAAP7YZRYxMckNmx2Ab5uoU6xMr/tGLZr/FYBpuYZVqDj8Ij9sAUt2clApNI60IQM1ZUAA",blurWidth:7,blurHeight:8},p={src:"/_next/static/media/founding-story.2226fbd9.webp",height:544,width:560,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAATGoiAAAAAADr//uGBgAAACqw///vx0cAAACL////0QAEAw3k////iMvXODHf///kjf//eQdFUBMAR3AiAAAAAABWUDggUAAAABACAJ0BKggACAACQDglpAAOpwNk/NiDsgAA/uvAVfluR2A+0bR5w/PNvWqyrZbcRSs5s0k/8onr0IjhtjYM0n04cGEGl4SFllMaHr2Q4wAA",blurWidth:8,blurHeight:8},f={src:"/_next/static/media/founding-story@2x.b3a44bb8.webp",height:1088,width:1120,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAATGoiAAAAAADr//uGBgAAACqw///vx0cAAACL////0QAEAw3k////iMvXODHf///kjf//eAdFUBMAR3AiAAAAAABWUDggUAAAAPABAJ0BKggACAACQDglpAAOpEKRwrRlAAD+6KqZ/dZCN5vtLqjdGZFBNSBX68UK9JPmmKshr/8XDv3CjUJgznuR90KCfFSXCpk/R6OAAAAA",blurWidth:8,blurHeight:8};function w(){return(0,i.jsx)("section",{className:"py-12 lg:py-20",children:(0,i.jsx)("div",{className:"container pt-4",children:(0,i.jsxs)("div",{className:"flex flex-col lg:grid lg:grid-cols-2 lg:gap-12",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-md lg:text-sm text-secondary font-semibold uppercase",children:"Founding Story"}),(0,i.jsx)("h2",{className:"text-display-sm lg:text-display-md xl:text-display-lg text-primary font-semibold mt-4 lg:mt-6",children:"In the dynamic blend of Silicon Valley veterans and Vietnam's brightest tech minds, ZTO Labs came to life."}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-12 text-secondary text-lg lg:text-md",children:[(0,i.jsx)("p",{children:"Despite our diverse backgrounds, our shared passion for building impactful products unites us. Eager to dive into the fast-paced world of tech, we stay updated with the latest tools and techniques to solve even the toughest puzzles. Our goal? To help businesses build products that make a positive impact on millions of users worldwide."}),(0,i.jsx)("p",{children:"Along this journey, we're immensely thankful for the invaluable guidance and insights from some of the globe's most successful investors and entrepreneurs, including the luminaries of Silicon Valley. Welcome to ZTO Labs - where every idea is a potential breakthrough, and every challenge is an opportunity for success!"})]})]}),(0,i.jsxs)("div",{className:"flex items-center flex-col",children:[(0,i.jsxs)("div",{className:"relative lg:mt-24",children:[(0,i.jsx)(s.default,{src:h,src2x:m,mobileSrc:p,mobileSrc2x:f,alt:"","aria-hidden":!0,className:"max-h-[20rem] lg:max-h-[34rem] w-auto"}),(0,i.jsx)("div",{className:"absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center",children:(0,i.jsx)(s.default,{src:c,src2x:u,mobileSrc:b,mobileSrc2x:x,alt:"","aria-hidden":!0,priority:!0,className:"rounded-3xl overflow-hidden max-h-[16.1765rem] lg:max-h-[27.5rem] w-auto"})})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("div",{className:"text-primary font-bold text-display-xs",children:"Phong Do"}),(0,i.jsx)("div",{className:"text-brand-tertiary lg:mt-2 text-sm",children:"CEO"})]})]})]})})})}let U=[{title:"Dream Big",description:"Connecting 7 billions people's brains to make the world better. We always have huge challenges waiting for you."},{title:"Get Stuff Done",description:"Results are everything. In our approach, we prioritize outcomes over adherence to tradition and conformity to norms."},{title:"Have fun",description:"Wear shorts to work. Enjoy the freedom to design your own schedule. We value inclusivity and believe that everyone can thrive in our environment."}];function B(){return(0,i.jsx)("section",{className:"pt-12 lg:pt-24 pb-20",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"lg:text-center max-w-[46rem] mx-auto",children:[(0,i.jsx)("div",{className:"text-md text-secondary font-semibold uppercase",children:"Our people"}),(0,i.jsx)("h2",{className:"text-display-sm lg:text-display-md xl:text-display-lg text-primary font-semibold mt-4 lg:mt-8",children:"ZTO Labs' category-defining products are made by our exceptional people."})]}),(0,i.jsx)("div",{className:"mt-6 lg:mt-[3.75rem] grid lg:grid-cols-3 gap-4 lg:gap-[3.75rem] max-w-[58rem] mx-auto",children:U.map((A,e)=>(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h3",{className:"text-display-xs text-primary font-semibold",children:A.title}),(0,i.jsx)("p",{className:"text-md lg:text-sm text-secondary mt-2 lg:mt-5",children:A.description})]},e))})]})})}var R=t(814197),Q={src:"/_next/static/media/our-people-02.262741fc.webp",height:500,width:750,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAUAAkA4JQBOgCHXXDDgAP79IKjna1Dj1RaMgy610Z2Nw27sG3jYUJwhTKEB8eCEn2p3HTQPAAAA",blurWidth:8,blurHeight:5},E={src:"/_next/static/media/our-people-02@2x.3095a8c6.webp",height:1e3,width:1500,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAUAAkA4JQBOgCHXV0OAAP79IKjna1Dj1RZ+Pgautbj0Ehz1u3wU/CqAAQHx4ISfancdNA8AAAAA",blurWidth:8,blurHeight:5},C={src:"/_next/static/media/our-people-02.e16484c1.png",height:500,width:750,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEUAAABeY2UfICAXGBg+QUIODg0lKy2ekXtSU1F/goMUExJhXVc1NTWXlIuXnZ/rUK4cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nBXFyREAIAgAseUS8Oq/XMd8QijmwQRQsR+YKDC8hohvVnXfk/kACYMAoh41XEwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},v={src:"/_next/static/media/our-people-02@2x.b0e18e00.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUAAABeY2QBAQEVFRUlKSs+QEIdHR0NDg2MjopRU1FhXFc1NTWflYGdjHV6fH2XnZ+29CMfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVR4nAXBhwEAIAjAsDIF5//fmjAci4GBkmIoQEqieLSLxGJ23Vf7fAtYALwcGNbZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5};let j=[{src:{src:"/_next/static/media/our-people-01.3156d35c.png",height:500,width:750,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEVqXVTZ1tW7vb5rcGyCh4SWaUu0rq+Qj4LQlofMn5O3lIvcwKapnqTGrZJZMyMwJh7EnHlpTDx5fn3EuaiDgoGpjHJOJBKia1p5Z2CooJ7HysuLdW79/f4S3td7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNgYmQSYpaSlGBgYBBmZpGRFmPg5xNlEGHkFGcQYBVkZWfj5GDg5mXjYWfh4gAAKfQBxHmaAYQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},src2x:{src:"/_next/static/media/our-people-01@2x.8dfedb99.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEWAhILZ1tRqb2y3lYvPloezrq+8vb/Ko5JqXVSPj4GZb0+qn6XbwKaooJ7Fuql5Z2AwJh7IysvEnHloTDuJdG2SY0haNCSia1pPJRKpjHL+/P1XW3GDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVR4nAXBiQJAIBBAwde5mxBd4v8/1AzRROx9FFRPy9cX13wVIw91ayMF8ewScsL5HyT9AZnrDI/MAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},mobileSrc:{src:"/_next/static/media/our-people-01.86bd9d77.webp",height:500,width:750,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAUAAkA4JYgCdG1/Any784AAy0tIGRNMx6k0NfX71z5tdyXZDQZ+ydeyOuHBWa4FIsHwi+IPMhFJmeLg3UZpCiyAAA==",blurWidth:8,blurHeight:5},mobileSrc2x:{src:"/_next/static/media/our-people-01@2x.c8d8cc19.webp",height:1e3,width:1500,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoIAAUAAkA4JYgCdG1/Any784AAy0tIGRNMx6k0NfX71z5tdyXZDQZ+ydeyOuHBWa4FIsHwi+IPMhFJmeZM2gPHXqMgoAAA",blurWidth:8,blurHeight:5}},{src:C,src2x:v,mobileSrc:Q,mobileSrc2x:E},{src:{src:"/_next/static/media/our-people-03.d907b64e.png",height:500,width:750,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEXR3+m2s7bkwbHK2uO+mYXQxLZxa2KYk5CZi4GJfXmmdU2gh3qWd2XV0s+tf22vrqdrXVfD2OWHhoWkl5Fld2ugrJCHcWWGo4xAODuUn6KykX53l6WooqMKh80+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nAXBhwGAIBAEsKN8U6TZxf3nJMFTo7z7eeOLXjjzgY38X1IfaHBGYooAOL3WZQIuPQHIRPyJsQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},src2x:{src:"/_next/static/media/our-people-03@2x.feaebc46.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEXR4OjkwrHQw7aRiH1ybWS+mYSLfnqelJCgin/H2eSldEyvr6eTko2FoouUdWOqfGqTn6K5srGJh4Vld2uhrZJAODuzs7prXVeykH2GcWbV0s94mKanoaIGgOTZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAANElEQVR4nAXBhwGAIBAEsKN8U6TZxf3nJMF5k1Q5NjzkJJa44/PuX3MfMDT2iQMMuPTVZQIq3gHITJaz9QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},mobileSrc:{src:"/_next/static/media/our-people-03.9b6e5f4c.webp",height:500,width:750,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JZACdH8AFcheswAA/tUXsn2ZDCoDi1H5PS2PvisLW9bcqPfiFpgahFaqWBebpQOGNJWLWPu3QHgA",blurWidth:8,blurHeight:5},mobileSrc2x:{src:"/_next/static/media/our-people-03@2x.5003deb2.webp",height:1e3,width:1500,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JZACdH8AFcheswAA/tUXsn2ZDCoDi1H5PS2PvisLW9bcqPfiFpgahFaqWBebpQOGNJWLWPu3QHgA",blurWidth:8,blurHeight:5}},{src:C,src2x:v,mobileSrc:Q,mobileSrc2x:E}];function I(){return(0,i.jsx)(R.Z,{className:"mb-[-10rem] xl:mb-[-16rem]",items:j})}function W(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{image:{src:r,src2x:l},heading:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"font-serif italic underline text-brand-tertiary font-normal",children:"About"})," Us"]})}),(0,i.jsx)(w,{}),(0,i.jsx)(g,{}),(0,i.jsx)(B,{}),(0,i.jsx)(I,{})]})}},181501:function(A,e,t){"use strict";var i=t(296893),a=t(849323),r=t(486496),l=t.n(r),s=t(195395);let n={xs:"py-1 px-2 text-xs",sm:"py-2 px-4 text-sm",md:"py-[0.625rem] px-[1.375rem] text-md",lg:"py-4 px-8 text-lg"};e.Z=A=>{let{circle:e,hovered:t,className:r,size:d="md",variant:o="brand",...g}=A,c=(A,e)=>e?"border-primary-dark text-primary-dark":A?"".concat({brand:"hover:border-brand-tertiary hover:text-brand-tertiary hover:bg-brand-tertiary/10",landing:"hover:border-landingBackground hover:text-landingBackground hover:bg-landingBackground/10",primary:"hover:border-primary hover:text-primary hover:bg-primary/10"}[o]," cursor-pointer"):"".concat({brand:"border-brand-tertiary text-brand-tertiary hover:bg-brand-tertiary/10",landing:"border-landingBackground text-landingBackground hover:bg-landingBackground/10",primary:"border-primary text-primary hover:bg-primary/10"}[o]," cursor-pointer");return(0,i.jsx)(a.z,{...g,as:s.Fragment,children:A=>{let{disabled:s}=A;return(0,i.jsx)(a.z,{...g,className:l()("font-semibold text-md transition-colors duration-200",e?"rounded-full p-[0.8125rem] border":"rounded-[6.25rem] border-2",d&&!e&&n[d],c(!!t,s),r)})}})}},938827:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return n}});var i=t(296893),a=t(995846),r=t(195395),l=t(633228);let s=(0,a.default)(()=>t.e(138).then(t.bind(t,985138)),{loadableGenerated:{webpack:()=>[985138]},ssr:!1});function n(A){let{forceHideOnMobile:e=!1,src2x:t,mobileSrc:a,mobileSrc2x:n,...d}=A,{isMobile:o,devicePixelRatio:g}=(0,l.F)(),c=(0,l.s)(),u=(0,r.useMemo)(()=>o&&g<2,[o,g]),h=(0,r.useMemo)(()=>o&&g>2,[o,g]),m=(0,r.useMemo)(()=>!o&&g>2,[o,g]);return!c||!d.src||e&&o?(0,i.jsx)(i.Fragment,{}):u&&a?(0,i.jsx)(s,{...d,src:a}):h&&n?(0,i.jsx)(s,{...d,src:n}):m&&t?(0,i.jsx)(s,{...d,src:t}):(0,i.jsx)(s,{...d})}},629991:function(A,e,t){"use strict";t.d(e,{default:function(){return r}});var i=t(296893),a=t(938827);function r(A){let{image:e,heading:t}=A;return(0,i.jsxs)("div",{className:"relative h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[36.625rem] isolate flex items-end",children:[(0,i.jsxs)("div",{className:"absolute overflow-hidden h-full w-full top-0 left-0",children:[e.src&&(0,i.jsx)(a.default,{src:e.src,src2x:e.src2x,mobileSrc:e.mobileSrc,mobileSrc2x:e.mobileSrc2x,alt:"",priority:!0,"aria-hidden":!0,className:"object-cover object-center h-full w-full"}),(0,i.jsx)("div",{className:"absolute top-0 left-0  w-full h-full bg-gradient-to-r to-transparent from-20% from-landingBackground to-100%"})]}),(0,i.jsx)("div",{className:"container relative z-30",children:(0,i.jsx)("h1",{className:"text-display-md md:text-display-lg lg:text-[4rem] lg:leading-[4.625rem] font-semibold text-white mb-[2rem] xl:mb-[9.75rem]",children:t})})]})}},814197:function(A,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(296893),a=t(486496),r=t.n(a),l=t(195395),s=t(973234);t(943041);var n=t(821757),d=t(252496),o=t(181501),g=t(938827);function c(A){let{items:e,align:t="bottom",className:a}=A,[c,u]=(0,l.useState)(null);return(0,i.jsxs)("section",{className:r()("relative overflow-hidden",a),children:[(0,i.jsx)(d.tq,{slidesPerView:"auto",loop:!0,centeredSlides:!0,modules:[n.Qr],onSwiper:u,controller:{control:c},className:r()("swiper--center","swiper-align--".concat(t)),children:e.map((A,e)=>(0,i.jsx)(d.o5,{children:(0,i.jsx)("div",{className:"swiper-image relative",children:(0,i.jsx)(g.default,{src:A.src,src2x:A.src2x,mobileSrc:A.mobileSrc,mobileSrc2x:A.mobileSrc2x,alt:"","aria-hidden":!0,priority:!0,className:"rounded-2xl"})})},e))}),(0,i.jsx)("div",{className:"flex justify-center mt-12",children:(0,i.jsxs)("div",{className:"flex gap-4 relative z-[1]",children:[(0,i.jsx)(o.Z,{circle:!0,hovered:!0,onClick:()=>{null==c||c.slidePrev()},children:(0,i.jsx)(s.Y4O,{})}),(0,i.jsx)(o.Z,{circle:!0,hovered:!0,onClick:()=>{null==c||c.slideNext()},children:(0,i.jsx)(s.LZ3,{})})]})})]})}},633228:function(A,e,t){"use strict";t.d(e,{F:function(){return a},s:function(){return r}});var i=t(195395);let a=()=>{let[A,e]=(0,i.useState)(!1),[t,a]=(0,i.useState)(!1),[r,l]=(0,i.useState)(!1),[s,n]=(0,i.useState)(1);return(0,i.useEffect)(()=>{e(!0),a(window.navigator.maxTouchPoints>0),l(window.innerWidth<768),n(window.devicePixelRatio)},[]),{isClient:A,isTouchDevice:t,isMobile:r,devicePixelRatio:s}},r=()=>{let[A,e]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{e(!0)},[]),A}}},function(A){A.O(0,[574,632,323,376,423,988,914,744],function(){return A(A.s=170337)}),_N_E=A.O()}]);