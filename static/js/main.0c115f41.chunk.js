(this["webpackJsonpqr-to-txt"]=this["webpackJsonpqr-to-txt"]||[]).push([[1],{46:function(e,n,t){e.exports=t(76)},53:function(e,n,t){var r={"./ion-action-sheet.entry.js":[78,5],"./ion-alert.entry.js":[79,6],"./ion-app_8.entry.js":[80,7],"./ion-avatar_3.entry.js":[81,17],"./ion-back-button.entry.js":[82,18],"./ion-backdrop.entry.js":[83,43],"./ion-button_2.entry.js":[84,19],"./ion-card_5.entry.js":[85,20],"./ion-checkbox.entry.js":[86,21],"./ion-chip.entry.js":[87,22],"./ion-col_3.entry.js":[88,44],"./ion-datetime_3.entry.js":[89,10],"./ion-fab_3.entry.js":[90,23],"./ion-img.entry.js":[91,45],"./ion-infinite-scroll_2.entry.js":[92,46],"./ion-input.entry.js":[93,24],"./ion-item-option_3.entry.js":[94,25],"./ion-item_8.entry.js":[95,26],"./ion-loading.entry.js":[96,27],"./ion-menu_3.entry.js":[97,28],"./ion-modal.entry.js":[98,8],"./ion-nav_2.entry.js":[99,14],"./ion-popover.entry.js":[100,9],"./ion-progress-bar.entry.js":[101,29],"./ion-radio_2.entry.js":[102,30],"./ion-range.entry.js":[103,31],"./ion-refresher_2.entry.js":[104,11],"./ion-reorder_2.entry.js":[105,16],"./ion-ripple-effect.entry.js":[106,47],"./ion-route_4.entry.js":[107,32],"./ion-searchbar.entry.js":[108,33],"./ion-segment_2.entry.js":[109,34],"./ion-select_3.entry.js":[110,35],"./ion-slide_2.entry.js":[111,48],"./ion-spinner.entry.js":[112,13],"./ion-split-pane.entry.js":[113,49],"./ion-tab-bar_2.entry.js":[114,36],"./ion-tab_2.entry.js":[115,15],"./ion-text.entry.js":[116,37],"./ion-textarea.entry.js":[117,38],"./ion-toast.entry.js":[118,39],"./ion-toggle.entry.js":[119,12],"./ion-virtual-scroll.entry.js":[120,50]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=53,e.exports=a},55:function(e,n,t){var r={"./ion-icon.entry.js":[122,57]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=55,e.exports=a},56:function(e,n,t){},74:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(27),c=t.n(o),i=t(3),l=t(7),s=t.n(l),u=t(16),d=t(21),f=t(41).a.Storage;function y(e,n){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(s.a.mark((function e(n,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.set({key:n,value:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(u.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get({key:n});case 2:if(t=e.sent,null!=(r=t.value)){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",JSON.parse(String(r)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=t(8),h=(t(56),t(39)),b=t.n(h),E=function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)({data:[]}),l=Object(d.a)(c,2),f=l[0],j=l[1],h=Object(r.useState)(!1),E=Object(d.a)(h,2),v=E[0],g=E[1],k=Object(r.useState)(!1),x=Object(d.a)(k,2),w=x[0],O=x[1],_=Object(r.useState)(""),C=Object(d.a)(_,2),S=C[0],D=C[1];v||function(e){return m.apply(this,arguments)}("data").then((function(e){if(null!==e){for(var n="",t=0;t<e.data.length;t++)n+=e.data[t]+"\r\n";j(e),D(n)}g(!0)})).catch((function(){console.log("Error attemtpting to read data."),g(!0)}));function N(){return(N=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(){o(!1)};return a.a.createElement(i.k,null,a.a.createElement(i.i,null,a.a.createElement(i.m,null,a.a.createElement(i.l,null,"QR code to text file"))),a.a.createElement(i.h,{fullscreen:!0},a.a.createElement(i.i,{collapse:"condense"},a.a.createElement(i.m,null,a.a.createElement(i.l,{size:"large"},"QR code to text file"))),a.a.createElement("br",null),a.a.createElement(i.c,{expand:"full",onClick:function(){return function(){return N.apply(this,arguments)}()}},a.a.createElement(i.j,{slot:"start",icon:p.j}),"Start scan"),t&&a.a.createElement(b.a,{delay:500,onError:function(){},onScan:function(e){if(e){var n=f;D(S+e+"\r\n"),n.data.push(e),y("data",n),j(n),o(!1)}},style:{width:"100%"}}),t&&a.a.createElement(i.c,{expand:"full",onClick:function(){return U()},color:"danger"},a.a.createElement(i.j,{slot:"start",icon:p.e}),"Stop scan"),f.data.length>0&&a.a.createElement(i.d,null,a.a.createElement(i.f,null,a.a.createElement(i.g,null,"QR Codes")),f.data.map((function(e,n){return a.a.createElement(i.e,{key:n},e)}))),f.data.length>0&&a.a.createElement("div",null,a.a.createElement("textarea",{id:"dataToDownload",value:S,style:{color:"black"},onChange:U,hidden:!0}),a.a.createElement(i.c,{expand:"full",color:"success",onClick:function(){var e=document.createElement("a"),n=document.getElementById("dataToDownload"),t=new Blob([n.value],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="data.txt",document.body.appendChild(e),e.click()}},"Download txt file"),a.a.createElement(i.c,{onClick:function(){return O(!0)},color:"warning",expand:"full"},a.a.createElement(i.j,{slot:"start",icon:p.o}),"Delete data")),f.data.length>0&&a.a.createElement(i.a,{isOpen:w,onDidDismiss:function(){return O(!1)},cssClass:"my-custom-class",buttons:[{text:"Confirm delete",role:"destructive",icon:p.o,handler:function(){j({data:[]}),y("data",{data:[]}),D("")}},{text:"Cancel",icon:p.e,role:"cancel",handler:function(){console.log("Cancel clicked")}}]})))},v=(t(64),t(65),t(66),t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(74),function(){return a.a.createElement(i.b,null,a.a.createElement(E,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,3,4]]]);
//# sourceMappingURL=main.0c115f41.chunk.js.map