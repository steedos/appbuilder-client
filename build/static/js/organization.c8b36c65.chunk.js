(this.webpackJsonpappsmith=this.webpackJsonpappsmith||[]).push([[10],{1934:function(e,t,n){"use strict";var a=n(5),r=n(6);function l(){var e=Object(a.a)(["\n  height: ",";\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n"]);return l=function(){return e},e}t.a=r.default.div(l(),(e=>"calc(100vh - ".concat(e.theme.smallHeaderHeight,")")))},1994:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));n(18);var a=n(5),r=(n(0),n(6)),l=(n(47),n(292),n(777),n(1995),n(2781),n(2772),n(2058),n(27),n(14));n(35),n(7),n(69),n(101),n(25),n(17);function c(){var e=Object(a.a)(["\n  width: ","px;\n  padding-left: ","px;\n"]);return c=function(){return e},e}function o(){var e=Object(a.a)(["\n  width: 320px;\n  height: 190px;\n  background-color: ",";\n  position: relative;\n\n  #fileInput {\n    display: none;\n  }\n\n  .drag-drop-text {\n    margin: ","px 0\n      ","px 0;\n    color: ",";\n  }\n\n  .upload-form-container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    place-items: center;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n  }\n\n  .centered {\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n\n    .success-container {\n      display: flex;\n      align-items: center;\n      .success-icon {\n        margin-right: ","px;\n      }\n\n      .success-text {\n        color: #03b365;\n        margin-right: ","px;\n      }\n    }\n  }\n\n  .file-description {\n    width: 95%;\n    margin: 0 auto;\n    margin-top: ",";\n    margin-bottom: ","px;\n    display: none;\n  }\n\n  .file-spec {\n    margin-bottom: ","px;\n    span {\n      margin-right: ","px;\n    }\n  }\n\n  .progress-container {\n    width: 100%;\n    background: ",";\n    transition: height 0.2s;\n  }\n\n  .progress-inner {\n    background-color: ",";\n    transition: width 0.4s ease;\n    height: ","px;\n    border-radius: ","px;\n    width: 0%;\n  }\n\n  .button-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .remove-button {\n    display: none;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background: linear-gradient(\n      180deg,\n      ",",\n      ","\n    );\n    opacity: 0.6;\n    width: 100%;\n\n    a {\n      width: 110px;\n      margin: ","px\n        ","px\n        ","px auto;\n      ."," {\n        margin-right: ","px;\n      }\n    }\n  }\n\n  &:hover {\n    .remove-button {\n      display: ",";\n    }\n  }\n"]);return o=function(){return e},e}var i,s={IMAGE:".jpeg,.png,.svg",JSON:".json",TEXT:".txt",ANY:"*"};!function(e){e.IMAGE="IMAGE",e.JSON="JSON",e.TEXT="TEXT",e.ANY="ANY"}(i||(i={}));var u=r.default.div(o(),(e=>e.theme.colors.filePicker.bg),(e=>e.theme.spaces[6]),(e=>e.theme.spaces[6]),(e=>e.theme.colors.filePicker.color),(e=>e.theme.spaces[4]),(e=>e.theme.spaces[4]),(e=>e.fileType===i.IMAGE?"auto":"0px"),(e=>e.theme.spaces[6]+1),(e=>e.theme.spaces[3]),(e=>e.theme.spaces[4]),(e=>e.theme.colors.filePicker.progress),(e=>e.theme.colors.success.light),(e=>e.theme.spaces[1]),(e=>e.theme.spaces[1]-1),(e=>e.theme.colors.filePicker.shadow.from),(e=>e.theme.colors.filePicker.shadow.to),(e=>e.theme.spaces[13]),(e=>e.theme.spaces[3]),(e=>e.theme.spaces[3]),l.a.ICON,(e=>e.theme.spaces[2]-1),(e=>e.isUploaded?"block":"none"));r.default.div(c(),(e=>e.theme.spaces[9]),(e=>e.theme.spaces[2]))},1995:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createElement("path",{fill:"#03B365",fillRule:"evenodd",d:"M19.6364 16H16.3636L13.6364 16V11.7333H15.8182L12.0001 7.46667L8.18188 11.7333H10.3636V16L7.63636 16H4.36364C1.95382 16 0 14.0896 0 11.7333C0 9.7408 1.404 8.08 3.29236 7.61173C3.50182 3.37493 7.07018 0 11.4545 0C15.7898 0 19.3287 3.2992 19.6091 7.46987C22.056 7.4528 24 9.38987 24 11.7333C24 14.0896 22.0462 16 19.6364 16Z",clipRule:"evenodd"});function o(e,t){var n=e.title,o=e.titleId,i=l(e,["title","titleId"]);return a.createElement("svg",r({width:24,height:16,fill:"none",viewBox:"0 0 24 16",ref:t,"aria-labelledby":o},i),n?a.createElement("title",{id:o},n):null,c)}var i=a.forwardRef(o);n.p},2118:function(e,t,n){"use strict";var a=n(18),r=n(5),l=n(0),c=n.n(l),o=n(6),i=n(47);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createElement("path",{fill:"#716E6E",d:"M27.4998 28.8185L37.0465 38.363L33.8628 41.5467L29.7498 37.4338V50H25.2498V37.4292L21.1368 41.5467L17.953 38.363L27.4998 28.8185ZM27.4998 5C31.363 5.00018 35.0914 6.42001 37.9762 8.98952C40.861 11.559 42.701 15.099 43.1463 18.9365C45.9459 19.7 48.3881 21.423 50.0463 23.8044C51.7044 26.1859 52.4729 29.0743 52.2174 31.9649C51.962 34.8554 50.6988 37.5643 48.6488 39.6181C46.5987 41.6718 43.8921 42.9398 41.002 43.2005V38.669C42.0374 38.5211 43.033 38.1685 43.9306 37.6317C44.8282 37.0949 45.6099 36.3846 46.23 35.5424C46.8502 34.7002 47.2963 33.7429 47.5425 32.7264C47.7886 31.7099 47.8298 30.6545 47.6636 29.6219C47.4974 28.5893 47.1272 27.6001 46.5746 26.7122C46.022 25.8242 45.298 25.0552 44.445 24.4501C43.5919 23.8449 42.6269 23.4158 41.6062 23.1877C40.5854 22.9596 39.5295 22.9371 38.5 23.1215C38.8524 21.481 38.8333 19.7824 38.4443 18.1502C38.0552 16.5181 37.3059 14.9936 36.2514 13.6884C35.1968 12.3833 33.8637 11.3306 32.3496 10.6074C30.8355 9.88426 29.1788 9.50893 27.5009 9.50893C25.823 9.50893 24.1663 9.88426 22.6522 10.6074C21.1381 11.3306 19.805 12.3833 18.7504 13.6884C17.6959 14.9936 16.9466 16.5181 16.5575 18.1502C16.1684 19.7824 16.1494 21.481 16.5018 23.1215C14.449 22.736 12.3272 23.1818 10.603 24.3607C8.87892 25.5397 7.69375 27.3552 7.30826 29.408C6.92277 31.4608 7.36853 33.5826 8.54748 35.3067C9.72642 37.0308 11.542 38.216 13.5948 38.6015L13.9998 38.669V43.2005C11.1095 42.9402 8.40267 41.6725 6.35231 39.6189C4.30195 37.5653 3.0385 34.8565 2.78278 31.9659C2.52706 29.0752 3.29534 26.1866 4.95334 23.805C6.61134 21.4233 9.0536 19.7001 11.8533 18.9365C12.2981 15.0988 14.1379 11.5585 17.0228 8.98895C19.9077 6.41934 23.6364 4.99969 27.4998 5Z"});function m(e,t){var n=e.title,a=e.titleId,r=u(e,["title","titleId"]);return l.createElement("svg",s({width:55,height:55,fill:"none",viewBox:"0 0 55 55",ref:t,"aria-labelledby":a},r),n?l.createElement("title",{id:a},n):null,d)}var p=l.forwardRef(m),f=(n.p,n(1995)),b=n(2781),h=n(2772),g=n(2058),v=n(27),O=n(14),E=n(35),y=n(7),x=n(69),j=n(101),w=n(25),C=n(1994);function k(){var e=Object(r.a)(["\n  width: ","px;\n  padding-left: ","px;\n"]);return k=function(){return e},e}function N(){var e=Object(r.a)(["\n  width: 100%;\n  height: 188px;\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23F86A2B' stroke-width='1.2' stroke-dasharray='6.4%2c 6.4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");\n  background-color: ",";\n"]);return N=function(){return e},e}var S=Object(o.default)(C.a)(N(),(e=>e.theme.colors.homepageBackground)),I=o.default.div(k(),(e=>e.theme.spaces[9]),(e=>e.theme.spaces[2]));function L(e){var t=e.fileType,n=e.logoUploadError,r=Object(l.useState)({name:"",size:0}),o=Object(a.a)(r,2),s=o[0],u=o[1],d=Object(l.useState)(!1),m=Object(a.a)(d,2),h=m[0],k=m[1],N=Object(l.useState)(""),L=Object(a.a)(N,2),P=L[0],T=L[1],R=Object(b.a)({accept:[g.a.FILE],drop(e,t){!function(e){if(e){var t=e.getItem().files;if(!t)return;Y(t)}}(t)},collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})}),A=Object(a.a)(R,2),D=A[0],M=D.canDrop,U=D.isOver,z=A[1],G=Object(l.useRef)(null),H=Object(l.useRef)(null),F=Object(l.useRef)(null),B=Object(l.useRef)(null),X=Object(l.useRef)(null);function _(e){F.current&&(F.current.style.width="".concat(e,"%")),100===e&&(k(!0),B.current&&H.current&&t===C.c.IMAGE&&(B.current.style.display="none",H.current.style.opacity="1"))}function V(t){e.onFileUploaded&&e.onFileUploaded(t)}function Y(n){t===C.c.IMAGE?function(t){var n=t&&t[0],a=0;if(!n)return;a=Math.floor(n.size/1024),u({name:n.name,size:a}),a<250?(H.current&&(H.current.style.backgroundImage="url(".concat(URL.createObjectURL(n),")"),H.current.style.opacity="0.5"),B.current&&(B.current.style.display="block"),X.current&&(X.current.style.display="none"),e.fileUploader&&e.fileUploader(n,_,V)):E.c.show({text:Object(y.si)(y.uc,"250 KB"),variant:O.c.warning})}(n):function(t){var n=t&&t[0],a=0;if(!n)return;a=Math.floor(n.size/1024),u({name:n.name,size:a}),e.delayedUpload&&(k(!0),_(100));B.current&&(B.current.style.display="flex");X.current&&(X.current.style.display="none");e.fileUploader&&e.fileUploader(n,_,V)}(n)}function K(){X.current&&(T(""),B.current&&(B.current.style.display="none"),X.current.style.display="flex",H.current&&(H.current.style.backgroundImage="url('')"),k(!1),e.onFileRemoved&&e.onFileRemoved())}var W=M&&U;Object(l.useEffect)((()=>{if(e.url){var t=e.url.split("/");"null"!==t[t.length-1]?T(e.url):T("")}}),[e.url]),Object(l.useEffect)((()=>{P&&!h&&t===C.c.IMAGE&&(k(!0),H.current&&(H.current.style.backgroundImage="url(".concat(P,")"),H.current.style.opacity="1"),B.current&&(B.current.style.display="none"),X.current&&(X.current.style.display="none"))}),[P,n]);var J=c.a.createElement("div",{className:"button-wrapper",ref:X},c.a.createElement(p,null),c.a.createElement(v.d,{className:"drag-drop-text",type:v.c.P2},"Drag & Drop files to upload or"),c.a.createElement("form",null,c.a.createElement("input",{accept:C.b[t],id:"fileInput",multiple:!1,onChange:e=>Y(e.target.files),ref:G,type:"file",value:""}),c.a.createElement(i.d,{category:i.a.tertiary,onClick:e=>(e.preventDefault(),void(G.current&&G.current.click())),size:i.c.medium,text:"Browse"}))),Z=c.a.createElement("div",{className:"file-spec"},c.a.createElement(v.d,{type:v.c.P1},s.name),c.a.createElement(v.d,{type:v.c.P1},s.size,"KB")),Q=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"upload-form-container",ref:H},J,c.a.createElement("div",{className:"file-description",id:"fileDesc",ref:B},Z,c.a.createElement("div",{className:"progress-container"},c.a.createElement("div",{className:"progress-inner",ref:F})))),c.a.createElement("div",{className:"remove-button"},c.a.createElement(i.d,{category:i.a.tertiary,icon:"delete",onClick:()=>K(),size:i.c.medium,text:"remove"}))),q=c.a.createElement("div",{className:"upload-form-container"},J,c.a.createElement("div",{className:"file-description centered",id:"fileDesc",ref:B},Z,c.a.createElement("div",{className:"success-container"},c.a.createElement(f.a,{className:"success-icon"}),c.a.createElement(v.d,{className:"success-text",type:v.c.H4},"Successfully Uploaded!"),c.a.createElement(x.a,{content:Object(y.cg)(),position:j.a.TOP},c.a.createElement(I,{className:"icon-wrapper",onClick:()=>K()},c.a.createElement(w.d,{name:"close",size:w.b.XL}))))));return c.a.createElement(S,{canDrop:M,fileType:t,isActive:W,isUploaded:h,ref:z},t===C.c.IMAGE?Q:q)}t.a=function(e){return c.a.createElement(h.a,{backend:g.b},c.a.createElement(L,e))}},2783:function(e,t,n){"use strict";n.r(t),n.d(t,"Organization",(function(){return mt}));var a=n(0),r=n.n(a),l=n(50),c=n(424),o=n(1934);var i=function(){return r.a.createElement(o.a,null,r.a.createElement("p",null,"This page is under construction"))},s=n(5),u=n(127),d=n(100),m=n(10),p=n(520),f=n(27),b=n(32),h=n(6),g=n(3),v=n(18),O=n(1e3),E=n(726),y=n(535),x=n(60),j=n(2011);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createElement("path",{fill:"#6D6D6D",fillRule:"evenodd",d:"M0 0L3 4L6 0L0 0Z",clipRule:"evenodd"});function N(e,t){var n=e.title,r=e.titleId,l=C(e,["title","titleId"]);return a.createElement("svg",w({width:6,height:4,fill:"none",viewBox:"0 0 6 4",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,k)}var S=a.forwardRef(N);n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=a.createElement("path",{fill:"#6D6D6D",fillRule:"evenodd",d:"M6 4L3 0L0 4L6 4Z",clipRule:"evenodd"});function T(e,t){var n=e.title,r=e.titleId,l=L(e,["title","titleId"]);return a.createElement("svg",I({width:6,height:4,fill:"none",viewBox:"0 0 6 4",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,P)}var R=a.forwardRef(T),A=(n.p,n(14));function D(){var e=Object(s.a)(["\n  visibility: hidden;\n"]);return D=function(){return e},e}function M(){var e=Object(s.a)(["\n  table {\n    border-spacing: 0;\n    width: 100%;\n\n    thead {\n      tr {\n        background-color: ",";\n\n        th:first-child {\n          padding: 0 ","px;\n        }\n\n        th {\n          padding: ","px 0;\n          text-align: left;\n          color: ",";\n          font-weight: ",";\n          font-size: ","px;\n          line-height: ","px;\n          letter-spacing: ","px;\n\n          svg {\n            margin-left: ","px;\n            margin-bottom: ","px;\n          }\n\n          &:hover {\n            color: ",";\n            cursor: pointer;\n            svg {\n              path {\n                fill: ",";\n              }\n            }\n          }\n        }\n      }\n    }\n\n    tbody {\n      tr {\n        td:first-child {\n          color: ",";\n          padding: 0 ","px;\n          font-weight: ",";\n        }\n\n        td {\n          padding: ","px 0;\n          color: ",";\n          font-size: ","px;\n          line-height: ","px;\n          letter-spacing: ","px;\n          font-weight: normal;\n          border-bottom: 1px solid ",";\n        }\n\n        &:hover {\n          background-color: ",";\n          ."," {\n            path {\n              fill: ",";\n            }\n          }\n          td:first-child {\n            color: ",";\n          }\n          td {\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n"]);return M=function(){return e},e}var U=h.default.div(M(),(e=>e.theme.colors.table.headerBg),(e=>e.theme.spaces[9]),(e=>e.theme.spaces[5]),(e=>e.theme.colors.table.headerText),(e=>e.theme.fontWeights[1]),(e=>e.theme.typography.h6.fontSize),(e=>e.theme.typography.h6.lineHeight),(e=>e.theme.typography.h6.letterSpacing),(e=>e.theme.spaces[2]),(e=>e.theme.spaces[0]+1),(e=>e.theme.colors.table.hover.headerColor),(e=>e.theme.colors.table.hover.headerColor),(e=>e.theme.colors.table.rowTitle),(e=>e.theme.spaces[9]),(e=>e.theme.fontWeights[1]),(e=>e.theme.spaces[4]),(e=>e.theme.colors.table.rowData),(e=>e.theme.typography.p1.fontSize),(e=>e.theme.typography.p1.lineHeight),(e=>e.theme.typography.p1.letterSpacing),(e=>e.theme.colors.table.border),(e=>e.theme.colors.table.hover.rowBg),A.a.ICON,(e=>e.theme.colors.table.hover.rowTitle),(e=>e.theme.colors.table.hover.rowTitle),(e=>e.theme.colors.table.hover.rowData)),z=Object(h.default)(S)(D());var G=function(e){var t=e.columns,n=e.data,a=Object(j.useTable)({columns:t,data:n},j.useSortBy),l=a.getTableBodyProps,c=a.getTableProps,o=a.headerGroups,i=a.prepareRow,s=a.rows;return r.a.createElement(U,null,r.a.createElement("table",c(),r.a.createElement("thead",null,o.map(((e,t)=>r.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{key:t}),e.headers.map(((e,t)=>r.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{key:t}),e.render("Header"),e.isSorted?e.isSortedDesc?r.a.createElement(R,null):r.a.createElement(S,null):r.a.createElement(z,null)))))))),r.a.createElement("tbody",l(),s.map(((e,t)=>(i(e),r.a.createElement("tr",Object.assign({},e.getRowProps(),{key:t}),e.cells.map(((e,t)=>r.a.createElement("td",Object.assign({},e.getCellProps(),{"data-colindex":t,key:t}),e.render("Cell")))))))))))},H=n(25),F=n(532),B=n(47),X=n(101),_=n(258),V=n(206);function Y(){var e=Object(s.a)(["\n  position: relative;\n\n  & ."," {\n    position: absolute;\n  }\n\n  & .selected-item {\n    ","\n  }\n"]);return Y=function(){return e},e}function K(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px 12px;\n  cursor: pointer;\n  ",";\n\n  .",":last-child {\n    margin-top: ","px;\n  }\n\n  &:hover {\n    ."," {\n      color: ",";\n    }\n  }\n"]);return K=function(){return e},e}function W(){var e=Object(s.a)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  box-shadow: ","px\n    ","px\n    ","px\n    ",";\n"]);return W=function(){return e},e}function J(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  ."," {\n    margin-right: ","px;\n    width: ",";\n  }\n"]);return J=function(){return e},e}var Z=h.default.div(J(),A.a.TEXT,(e=>e.theme.spaces[1]+1),(e=>e.width||"auto")),Q=h.default.div(W(),(e=>e.theme.colors.tableDropdown.bg),(e=>e.theme.spaces[0]),(e=>e.theme.spaces[5]),(e=>e.theme.spaces[13]-2),(e=>e.theme.colors.tableDropdown.shadow)),q=h.default.div(K(),(e=>e.isSelected?"background-color: ".concat(e.theme.colors.tableDropdown.selectedBg):null),A.a.TEXT,(e=>e.theme.spaces[1]+1),A.a.TEXT,(e=>e.theme.colors.tableDropdown.selectedText)),$=h.default.div(Y(),A.a.SPINNER,(e=>e.isLoading?"visibility: hidden;":null));var ee=function(e){var t=Object(a.useState)(e.selectedIndex),n=Object(v.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(v.a)(o,2),s=i[0],u=i[1],d=Object(a.useState)(e.options[e.selectedIndex]||{}),m=Object(v.a)(d,2),p=m[0],b=m[1];return e.isLoading?r.a.createElement(V.a,{size:H.b.LARGE}):r.a.createElement(_.a,{"data-cy":e.cypressSelector,interactionKind:_.b.CLICK,isOpen:s,onInteraction:e=>u(e),position:e.position||X.a.BOTTOM_LEFT,usePortal:!1},r.a.createElement($,{isLoading:e.isLoading},r.a.createElement(Z,{className:"selected-item",width:e.selectedTextWidth},r.a.createElement(f.d,{type:f.c.P1},p.name),r.a.createElement(H.d,{fillColor:"#A9A7A7",hoverFillColor:"#A9A7A7",name:"downArrow",size:H.b.XXXL}))),r.a.createElement(Q,null,e.options.map(((t,n)=>r.a.createElement(q,{isSelected:l===n,key:n,onClick:()=>(t=>{c(t),b(e.options[t]),e.onSelect&&e.onSelect(e.options[t]),u(!1)})(n)},r.a.createElement(f.d,{type:f.c.H5},t.name),r.a.createElement(f.d,{type:f.c.P3},t.desc))))))},te=n(331),ne=n(8),ae=n(177),re=n(13),le=n(1994),ce=n(2118),oe=n(73),ie=n(2068);function se(){var e=Object(s.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]);return se=function(){return e},e}function ue(){var e=Object(s.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n"]);return ue=function(){return e},e}function de(){var e=Object(s.a)(["\n  height: 190px;\n  width: 333px;\n  border-radius: 0;\n"]);return de=function(){return e},e}function me(){var e=Object(s.a)(["\n  height: 38px;\n  width: 320px;\n  border-radius: 0;\n"]);return me=function(){return e},e}function pe(){var e=Object(s.a)(["\n  color: ",";\n  display: inline-block;\n  margin-top: 25px;\n  margin-bottom: 10px;\n"]);return pe=function(){return e},e}function fe(){var e=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 15px;\n"]);return fe=function(){return e},e}function be(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n"]);return be=function(){return e},e}function he(){var e=Object(s.a)(["\n  width: ",";\n  margin: ",";\n"]);return he=function(){return e},e}var ge=h.default.div(he(),(e=>e.isPortrait?"336px":"383px"),(e=>e.isMobile?e.isPortrait?"auto":"120px":null)),ve=h.default.div(be()),Oe=h.default.div(fe()),Ee=Object(h.default)(f.d)(pe(),(e=>e.theme.colors.settingHeading)),ye=h.default.div(me()),xe=h.default.div(de()),je=h.default.div(ue()),we=h.default.div(se());function Ce(){var e=Object(l.i)().orgId,t=Object(m.c)(),n=Object(m.d)(d.e).filter((t=>t.id===e))[0];function a(e){t(Object(F.g)(e))}var c=1e3,o=Object(ne.debounce)((t=>{a({id:e,name:t})}),c),i=Object(ne.debounce)((t=>{a({id:e,website:t})}),c),s=Object(ne.debounce)((t=>{a({id:e,email:t})}),c),u=Object(m.d)(d.g).isFetchingOrg,p=Object(m.d)(d.d),b=Object(m.d)(oe.k),h=Object(ie.useMediaQuery)({maxWidth:767}),g=Object(ie.useMediaQuery)({query:"(orientation: portrait)"});return r.a.createElement(ge,{isMobile:h,isPortrait:g},r.a.createElement(Ee,{type:f.c.H1},r.a.createElement(je,null,r.a.createElement(we,null,"General Settings"))),r.a.createElement(Oe,null,r.a.createElement(je,null,r.a.createElement(we,null,r.a.createElement(ve,null,r.a.createElement(f.d,{type:f.c.P1},"Organization Name")),b&&r.a.createElement(ye,{className:re.a.SKELETON}),!b&&r.a.createElement(ae.a,{cypressSelector:"t--org-name-input",defaultValue:n&&n.name,fill:!0,onChange:o,placeholder:"Organization Name",validator:ae.c})))),r.a.createElement(Oe,null,r.a.createElement(je,{className:"t--organization-settings-filepicker"},r.a.createElement(we,null,r.a.createElement(ve,null,r.a.createElement(f.d,{type:f.c.P1},"Upload Logo")),u&&r.a.createElement(xe,{className:re.a.SKELETON}),!u&&r.a.createElement(ce.a,{fileType:le.c.IMAGE,fileUploader:(a,r,l)=>{t(Object(F.h)({id:e,logo:a,progress:e=>{var t=Math.round(e.loaded/e.total*100);100===t&&l(n.logoUrl||""),r(t)}}))},logoUploadError:p.message,onFileRemoved:()=>{t(Object(F.b)(e))},url:n&&n.logoUrl})))),r.a.createElement(Oe,null,r.a.createElement(je,null,r.a.createElement(we,null,r.a.createElement(ve,null,r.a.createElement(f.d,{type:f.c.P1},"Website")),b&&r.a.createElement(ye,{className:re.a.SKELETON}),!b&&r.a.createElement(ae.a,{cypressSelector:"t--org-website-input",defaultValue:n&&n.website||"",fill:!0,onChange:i,placeholder:"Your website"})))),r.a.createElement(Oe,null,r.a.createElement(je,null,r.a.createElement(we,null,r.a.createElement(ve,null,r.a.createElement(f.d,{type:f.c.P1},"Email")),b&&r.a.createElement(ye,{className:re.a.SKELETON}),!b&&r.a.createElement(ae.a,{cypressSelector:"t--org-email-input",defaultValue:n&&n.email||"",fill:!0,onChange:s,placeholder:"Email",validator:ae.b})))))}var ke=n(7),Ne=n(278),Se=n(9);function Ie(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: end;\n  margin-top: 20px;\n\n  & > a {\n    margin: 0 4px;\n  }\n"]);return Ie=function(){return e},e}function Le(){var e=Object(s.a)(["\n  height: 30px;\n  width: 81px;\n  pointer-events: ",";\n"]);return Le=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  text-align: left;\n"]);return Pe=function(){return e},e}function Te(){var e=Object(s.a)(["\n  && ."," {\n    padding-top: 0px;\n  }\n"]);return Te=function(){return e},e}var Re=Object(h.default)(Ne.a)(Te(),re.a.DIALOG_BODY),Ae=h.default.div(Pe()),De=Object(h.default)(B.d)(Le(),(e=>e.disabled?"none":"auto")),Me=h.default.div(Ie());var Ue=function(e){var t=e.isDeletingUser,n=e.isOpen,a=e.name,l=e.onClose,c=e.onConfirm,o=e.username;return r.a.createElement(Re,{canOutsideClickClose:!0,className:"t--member-delete-confirmation-modal",headerIcon:{name:"delete",fillColor:Se.a.DANGER_SOLID,hoverColor:Se.a.DANGER_SOLID_HOVER},isOpen:n,maxHeight:"540px",setModalClose:l,title:Object(ke.Cb)()},r.a.createElement(Ae,null,r.a.createElement(f.d,{textAlign:"center",type:f.c.P1},Object(ke.Bb)(a||o)),r.a.createElement(Me,null,r.a.createElement(De,{category:B.a.tertiary,className:".button-item",onClick:l,size:B.c.large,text:"CANCEL",variant:A.c.danger}),r.a.createElement(De,{className:".button-item",cypressSelector:"t--org-leave-button",isLoading:t,onClick:c,size:B.c.large,text:"REMOVE",variant:A.c.danger}))))},ze=n(107),Ge=n(173),He=n(91);function Fe(){var e=Object(s.a)(["\n  position: absolute;\n  top: ","px;\n  right: ","px;\n"]);return Fe=function(){return e},e}function Be(){var e=Object(s.a)(["\n  tbody {\n    tr:hover {\n      .t--deleteUser {\n        path {\n          fill: #ff6786;\n        }\n      }\n    }\n  }\n"]);return Be=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  box-shadow: none;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 0px;\n  padding: ","\n  width: 343px;\n  height: 201px;\n  margin: auto;\n  margin-bottom: ","px;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n  .avatar {\n    min-height: 71px;\n\n    ."," {\n      margin: auto;\n    }\n  }\n\n  ."," {\n    color: ",";\n    margin-top: ","px;\n    &.user-name {\n      margin-top: ","px;\n    }\n    &.user-email {\n      color: ",";\n    }\n    &.user-role {\n      margin-bottom: ","px;\n    }\n  }\n\n  .approve-btn {\n    padding: ",";\n  }\n  .delete-btn {\n    position: absolute;\n  }\n\n  .t--user-status {\n    background: transparent;\n    border: 0px;\n    width: fit-content;\n    margin: auto;\n    ."," {\n      width: fit-content;\n      margin-top: 0px;\n      color: ",";\n    }\n  }\n"]);return Xe=function(){return e},e}function _e(){var e=Object(s.a)(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  margin: auto;\n"]);return _e=function(){return e},e}function Ve(){var e=Object(s.a)(["\n  margin-top: 10px;\n  a {\n    padding: 0 8px;\n  }\n  span:last-child {\n    font-size: 14px;\n  }\n  svg {\n    path {\n      stroke: #ffffff;\n      fill: #ffffff;\n    }\n  }\n  button {\n    padding: 6px 8px;\n  }\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(s.a)(["\n  ","\n"]);return Ye=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  height: 120px;\n  width: 100%;\n"]);return Ke=function(){return e},e}var We=h.default.div(Ke()),Je=h.default.div(Ye(),(e=>e.isMobile?"width: 100%; margin: auto":null)),Ze=h.default.div(Ve()),Qe=h.default.div(_e()),qe=Object(h.default)(ze.d)(Xe(),Se.a.GREY_1,Se.a.GREY_3,(e=>"".concat(e.theme.spaces[15],"px ").concat(4*e.theme.spaces[7],"px;")),(e=>e.theme.spaces[7]-1),A.a.TEXT,A.a.TEXT,Se.a.GREY_10,(e=>e.theme.spaces[1]),(e=>e.theme.spaces[4]),Se.a.GREY_7,(e=>e.theme.spaces[3]),(e=>"".concat(e.theme.spaces[1],"px ").concat(e.theme.spaces[3],"px")),A.a.TEXT,Se.a.GREY_10),$e=Object(h.default)(G)(Be()),et=Object(h.default)(H.d)(Fe(),(e=>e.theme.spaces[9]),(e=>e.theme.spaces[7]));function tt(e){var t,n=e.match.params.orgId,l=Object(m.c)();Object(a.useEffect)((()=>{l(Object(F.f)(n)),l(Object(F.e)(n)),l(Object(F.d)(n))}),[n]);var c=Object(a.useState)(!1),o=Object(v.a)(c,2),i=o[0],s=o[1],u=Object(a.useState)(!1),p=Object(v.a)(u,2),b=p[0],h=p[1],j=()=>s(!1),w=Object(a.useState)(null),C=Object(v.a)(w,2),k=C[0],N=C[1],S=(e,t,n)=>{N({name:e,username:t,orgId:n}),s(!0)},I=Object(m.d)(d.g),L=I.deletingUserInfo,P=I.isFetchingAllRoles,T=I.isFetchingAllUsers,R=I.roleChangingUserInfo,D=Object(m.d)(d.a),M=Object(m.d)(d.b),U=Object(m.d)(x.a),z=Object(m.d)(d.e).filter((e=>e.id===n))[0];Object(a.useEffect)((()=>{if(k&&i){var e=M.find((e=>e.username===k.username));e?h(e.isDeleting):(N(null),j(),h(!1))}}),[M]);var G=M.map((e=>Object(g.a)(Object(g.a)({},e),{},{isCurrentUser:e.username===(null===U||void 0===U?void 0:U.username)}))),X=[{Header:"Name",accessor:"name"},{Header:"Email",accessor:"username"},{Header:"Role",accessor:"roleName",Cell:function(e){var t=Object(m.d)(d.a),a=t?Object.keys(t).map((e=>({name:e,desc:t[e]}))):[],c=a.findIndex((t=>t.name===e.cell.value));return e.cell.row.values.username===(null===U||void 0===U?void 0:U.username)?e.cell.value:r.a.createElement(ee,{isLoading:R&&R.username===e.cell.row.values.username,onSelect:t=>{l(Object(F.a)(n,t.name,e.cell.row.values.username))},options:a,selectedIndex:c,selectedTextWidth:"90px"})}},{Header:"Status",accessor:"status"},{Header:"Actions",accessor:"delete",disableSortBy:!0,Cell:function(e){return r.a.createElement(H.d,{className:"t--deleteUser",cypressSelector:"t--deleteUser",fillColor:"#FF6786",hoverFillColor:"#FF6786",isLoading:L&&L.username===e.cell.row.values.username,name:"trash-outline",onClick:()=>{S(e.cell.row.values.username,e.cell.row.values.username,n)},size:H.b.LARGE})}}],_=null!==(t=null===z||void 0===z?void 0:z.name)&&void 0!==t?t:"",V=Object(ie.useMediaQuery)({maxWidth:767}),Y=D?Object.keys(D).map((e=>({id:e,value:e,label:D[e]}))):[];return r.a.createElement(Je,{isMobile:V},r.a.createElement(O.a,null,r.a.createElement(Ee,{type:f.c.H1},"Manage Users"),r.a.createElement(y.b,{Form:E.b,canOutsideClickClose:!0,orgId:n,title:"Invite Users to ".concat(_),trigger:r.a.createElement(Ze,null,r.a.createElement(B.d,{cypressSelector:"t--invite-users",icon:"plus",size:B.c.medium,tag:"button",text:"Invite Users",variant:A.c.info}))})),T&&P?r.a.createElement(We,{className:re.a.SKELETON}):r.a.createElement(r.a.Fragment,null,!V&&r.a.createElement($e,{columns:X,data:G}),V&&r.a.createElement(Qe,null,M.map(((e,t)=>{var a=Y.find((t=>t.value===e.roleName))||Y[0],c=e.username===(null===U||void 0===U?void 0:U.username);return r.a.createElement(qe,{key:t},r.a.createElement(Ge.b,{className:"avatar",side:71,source:"/api/".concat(He.f,"/").concat(e.username),userName:e.name||e.username}),r.a.createElement(f.d,{className:"user-name",type:f.c.P1},e.name||e.username),r.a.createElement(f.d,{className:"user-email",type:f.c.P1},e.username),c&&r.a.createElement(f.d,{className:"user-role",type:f.c.P1},e.roleName),!c&&r.a.createElement(te.a,{boundary:"viewport",className:"t--user-status",defaultIcon:"downArrow",height:"31px",onSelect:t=>{var a,r;a=t,r=e.username,l(Object(F.a)(n,a,r))},options:Y,selected:a,width:"140px"}),r.a.createElement(B.d,{category:B.a.primary,className:"approve-btn",size:B.c.xxs,text:"Approve"}),r.a.createElement(et,{className:"t--deleteUser",cypressSelector:"t--deleteUser",fillColor:Se.a.DANGER_SOLID,hoverFillColor:Se.a.DANGER_SOLID_HOVER,name:"trash-outline",onClick:()=>{S(e.username,e.username,n)},size:H.b.LARGE}))}))),r.a.createElement(Ue,{isDeletingUser:b,isOpen:i,name:k&&k.name,onClose:j,onConfirm:()=>{if(!k)return null;l(Object(F.c)(k.orgId,k.username))},username:k&&k.username})))}var nt=n(487),at=n(172),rt=n(15);function lt(){var e=Object(s.a)(["\n  width: ",";\n  margin: 0 auto;\n"]);return lt=function(){return e},e}function ct(){var e=Object(s.a)(["\n  margin-top: 30px;\n  margin-bottom: 35px;\n  display: inline-block;\n  width: auto;\n  &:hover {\n    text-decoration: none;\n  }\n  svg {\n    cursor: pointer;\n  }\n  ","\n"]);return ct=function(){return e},e}var ot=nt.c(l.b),it=Object(h.default)(u.a)(ct(),rt.y),st=h.default.div(lt(),(e=>e.isMobile?"345px":"916px"));function ut(){var e=Object(l.i)().orgId,t=Object(m.d)(d.e).filter((t=>t.id===e))[0],n=Object(l.j)().path,c=Object(l.h)(),o=Object(m.c)();Object(a.useEffect)((()=>{t||o(Object(at.f)())}),[o,t]);var i=r.a.createElement("div",null,r.a.createElement(ot,{component:Ce,location:c,path:"".concat(n,"/general")}),r.a.createElement(ot,{component:tt,location:c,path:"".concat(n,"/members")})),s=[{key:"general",title:"General",panelComponent:i,icon:"gear",iconSize:H.b.XL},{key:"members",title:"Members",panelComponent:i,icon:"user-2",iconSize:H.b.XL}],u=-1!==c.pathname.indexOf("members"),h=Object(ie.useMediaQuery)({maxWidth:767});return r.a.createElement(st,{isMobile:h},r.a.createElement(it,{to:"/applications"},r.a.createElement(ze.n,{color:"#9F9F9F",icon:"chevron-left"}),r.a.createElement(f.d,{className:"t--organization-header",type:f.c.H1},t&&t.name)),r.a.createElement(p.a,{onSelect:e=>{var t=c.pathname.indexOf("settings")+"settings".length,n="";n="/"===c.pathname[t]?"".concat(c.pathname.substr(0,t),"/").concat(s[e].key):"".concat(c.pathname,"/").concat(s[e].key),b.a.push(n)},selectedIndex:u?1:0,tabs:s}))}var dt=nt.c(l.b);function mt(){var e=Object(l.j)().path,t=Object(l.h)();return r.a.createElement(c.a,{displayName:"Organization Settings"},r.a.createElement(l.d,{location:t},r.a.createElement(dt,{component:ut,path:"".concat(e,"/:orgId/settings")}),r.a.createElement(dt,{component:i})))}t.default=mt}}]);
//# sourceMappingURL=organization.c8b36c65.chunk.js.map