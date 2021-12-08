/*!
 * Mars2D平台插件,原生JS下的项目widget模块化设计功能模块
 * 版本信息：v3.0.1, hash值: 91ab458eead9446b93dc
 * 编译日期：2021-12-07 13:34:58
 * 版权所有：Copyright by 火星科技 http://mars2d.cn
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("mars2d")):"function"==typeof define&&define.amd?define("mars2dWidget",["mars2d"],t):"object"==typeof exports?exports.mars2dWidget=t(require("mars2d")):e.mars2dWidget=t(e.mars2d)}(window,(function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(t,n){t.exports=e},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var i=n(9);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var i=n(1).default,r=n(10);e.exports=function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){},function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,i)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t),n.d(t,"widget",(function(){return i}));var i={};n.r(i),n.d(i,"init",(function(){return C})),n.d(i,"getDefWindowOptions",(function(){return I})),n.d(i,"activate",(function(){return E})),n.d(i,"getWidget",(function(){return S})),n.d(i,"getClass",(function(){return V})),n.d(i,"isActivate",(function(){return D})),n.d(i,"disable",(function(){return M})),n.d(i,"disableAll",(function(){return z})),n.d(i,"disableGroup",(function(){return H})),n.d(i,"eachWidget",(function(){return N})),n.d(i,"bindClass",(function(){return q})),n.d(i,"removeDebugeBar",(function(){return F})),n.d(i,"getCacheVersion",(function(){return G})),n.d(i,"getBasePath",(function(){return Q})),n.d(i,"destroy",(function(){return $})),n.d(i,"eventTarget",(function(){return J})),n.d(i,"on",(function(){return X})),n.d(i,"off",(function(){return Y})),n.d(i,"fire",(function(){return Z})),n.d(i,"once",(function(){return ee})),n.d(i,"listens",(function(){return te}));var r=n(0),o=(n(8),n(1)),a=n.n(o),s=n(2),u=n.n(s),c=new RegExp("\\.css"),l=document.head||document.getElementsByTagName("head")[0],f=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i,"$1")<536;function d(e){return"complete"===e.readyState||"loaded"===e.readyState}function p(e,t,n){var i="onload"in e;function r(){e.onload=e.onreadystatechange=null,e=null,t()}"css"===n&&(f||!i)?setTimeout((function(){!function e(t,n){var i;t.sheet&&(i=!0),setTimeout((function(){i?n():e(t,n)}),20)}(e,t)}),1):i?(e.onload=r,e.onerror=function(t){e.onerror=null,"css"==n?console.error("该css文件不存在："+e.href,t):console.error("该js文件不存在："+e.src,t),r()}):e.onreadystatechange=function(){d(e)&&r()}}function h(e,t,n,i){function r(){var n=t.indexOf(e);n>-1&&t.splice(n,1),0===t.length&&i()}e?c.test(e)?function(e,t,n){var i=document.createElement("link");i.rel="stylesheet",p(i,n,"css"),i.async=!0,i.href=e,l.appendChild(i)}(e,0,r):function(e,t,n){var i=document.createElement("script");i.charset="utf-8",p(i,n,"js"),i.async=!t.sync,i.src=e,l.appendChild(i)}(e,n,r):setTimeout((function(){r()}))}function v(e,t,n){var i=function(){n&&n()};if(0!==(e=Array.prototype.slice.call(e||[])).length)for(var r=0,o=e.length;r<o;r++)h(e[r],e,t,i);else i()}function y(e,t){if(d(e))t();else{var n=!1;window.addEventListener("load",(function(){n||(t(),n=!0)})),setTimeout((function(){n||(t(),n=!0)}),1500)}}var g=function(e,t){y(document,(function(){v(e,{},t)}))},b={beforeCreate:"beforeCreate",created:"created",beforeActivate:"beforeActivate",activated:"activated",openView:"openView",beforeDisable:"beforeDisable",disabled:"disabled",loadBefore:"loadBefore",load:"load"};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m,x,O,k,P,A=window.jQuery,j=[],W=["_class"];function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};m=e,j=[],x=r.Util.merge({windowOptions:{position:"rt",maxmin:!1,resize:!0},autoDisable:!0,disableOther:!0},t.defaultOptions),"time"==(O=t.version)&&(O=(new Date).getTime());var n=t.openAtStart;if(n&&n.length>0)for(var i=0;i<n.length;i++){var o=n[i];o.hasOwnProperty("uri")&&""!=o.uri?o.hasOwnProperty("visible")&&!o.visible||(o.autoDisable=!1,o.openAtStart=!0,o._nodebug=!0,B(o),o._firstConfigBak=_({},o),j.push(o)):console.error("widget未配置uri",o)}if(k=t.debugger){var a='<div id="widget-testbar" class="mars2d-widgetbar animation-slide-bottom no-print-view" >      <div style="height: 30px; line-height:30px;"><b style="color: #4db3ff;">widget测试栏</b>&nbsp;&nbsp;<button  id="widget-testbar-remove"  type="button" class="btn btn-link btn-xs">关闭</button> </div>     <button id="widget-testbar-disableAll" type="button" class="btn btn-info" ><i class="fa fa-globe"></i>漫游</button></div>';A("body").append(a),A("#widget-testbar-remove").click((function(e){F()})),A("#widget-testbar-disableAll").click((function(e){z()}))}if((n=t.widgets)&&n.length>0){for(var s=0;s<n.length;s++){var u=n[s];if("group"==u.type){for(var c=' <div class="btn-group dropup">  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-align-justify"></i>'+u.name+' <span class="caret"></span></button> <ul class="dropdown-menu">',l=0;l<u.children.length;l++){var f=u.children[l];f.hasOwnProperty("uri")&&""!=f.uri?(c+=' <li data-widget="'+f.uri+'" class="widget-btn" ><a href="#"><i class="fa fa-star"></i>'+f.name+"</a></li>",B(f),f._firstConfigBak=_({},f),j.push(f)):console.error("widget未配置uri",f)}c+="</ul></div>",k&&!u._nodebug&&A("#widget-testbar").append(c)}else{if(!u.hasOwnProperty("uri")||""==u.uri){console.error("widget未配置uri",u);continue}if(k&&!u._nodebug){var d='<button type="button" class="btn btn-primary widget-btn" data-widget="'+u.uri+'"  > <i class="fa fa-globe"></i>'+u.name+" </button>";A("#widget-testbar").append(d)}B(u),u._firstConfigBak=_({},u),j.push(u)}}k&&A("#widget-testbar .widget-btn").each((function(){A(this).click((function(e){var t=A(this).attr("data-widget");null!=t&&""!=t&&(D(t)?M(t):E(t))}))}))}for(var p=0;p<j.length;p++){var h=j[p];(h.openAtStart||h.createAtStart)&&K.push(h)}if(A(window).resize((function(){for(var e=0;e<j.length;e++){var t=j[e];t._class&&t._class.indexResize()}})),k){var v=T();v&&E(v)}L()}function I(){return r.Util.clone(x.windowOptions,W)}function T(){var e=window.location.toString();return-1===e.indexOf("#")?"":(e=e.split("#"))&&e.length>0?e[1]:void 0}function B(e){if(x)for(var t in x)"windowOptions"==t||e.hasOwnProperty(t)||(e[t]=x[t]);var n,i;e.path=(n=""+e.uri,i=n.lastIndexOf("/"),n.substring(0,i+1)),e.name=e.name||e.label}function E(e,t){var n;null==m&&e.map&&C(e.map,{},e.basePath),"string"==typeof e?(e={uri:e},null!=t&&(e.disableOther=!t)):null==e.uri&&console.error("activate激活widget时需要uri参数！",e);for(var i=0;i<j.length;i++){var r=j[i];if(e.uri==r.uri||r.id&&e.uri==r.id){if((n=r).isloading)return n;for(var o in e)"uri"!=o&&(n[o]=e[o]);break}}if(null==n&&(B(e),n=e,e._firstConfigBak||(e._firstConfigBak=_({},e)),j.push(e)),k&&(console.log("开始激活widget："+n.uri),window.location.hash="#"+n.uri),n.hasOwnProperty("disableOhter")&&!n.hasOwnProperty("disableOther")&&(n.disableOther=n.disableOhter),n.disableOther?z(n.uri,n.group):H(n.group,n.uri),n._class)n._class.isActivate?n._class.update?n._class.update():function(e){clearInterval(P),e._class.disableBase(),P=setInterval((function(){e._class.isActivate||(e._class.activateBase(),clearInterval(P))}),200)}(n):n._class.activateBase();else{for(var a=0;a<K.length;a++)if(K[a].uri==n.uri)return K[a];K.push(n),1==K.length&&L()}return n}function S(e){for(var t=0;t<j.length;t++){var n=j[t];if(e==n.uri||e==n.id)return n}}function V(e){var t=S(e);return t?t._class:null}function D(e){var t=V(e);return null!=t&&t.isActivate}function M(e){if(null==e)return!1;"object"===("undefined"==typeof id?"undefined":a()(id))&&(e=e.uri);for(var t=0;t<j.length;t++){var n=j[t];if(n._class&&(e==n.uri||e==n.id))return n._class.disableBase(),!0}return!1}function z(e,t){for(var n=0;n<j.length;n++){var i=j[n];if(t&&i.group==t);else if(!0!==e&&!i.autoDisable)continue;(!e||e!=i.uri&&e!=i.id)&&(i._class&&i._class.disableBase())}}function H(e,t){if(null!=e)for(var n=0;n<j.length;n++){var i=j[n];if(i.group==e){if(t&&(t==i.uri||t==i.id))continue;i._class&&i._class.disableBase()}}}function N(e){for(var t=0;t<j.length;t++){e(j[t])}}var R,U,K=[];function L(){if(0!=K.length)if(U)setTimeout(L,500);else{U=!0,(R=K[0]).isloading=!0;var e=R.uri;O&&(-1==e.indexOf("?")?e+="?cache="+O:e+="&cache="+O),window.NProgress&&window.NProgress.start(),Z(b.loadBefore,{sourceTarget:R}),g([""+e],(function(){U=!1,R.isloading=!1,window.NProgress&&window.NProgress.done(!0),K.shift(),L()}))}}function q(e){if(Z(b.load,{sourceTarget:e}),null!=R)return R.isloading=!1,R._class=new e(m,R),R._class.activateBase(),R._class;for(var t=function(){for(var e,t=document.scripts,n=t.length-1;n>=0;n--)if(null!=(e=t[n].src)&&""!=e&&-1!=e.indexOf("widgets"))return e;return""}(),n=0;n<j.length;n++){var i=j[n];if(t.endsWith(i.uri))return i.isloading=!1,i._class=new e(m,i),i._class.activateBase(),i._class}}function F(){A("#widget-testbar").remove()}function G(){return O}function Q(){return""}function $(){for(var e=0;e<j.length;e++){var t=j[e];t._class&&(t._class.disableBase(),t._class.destroy&&t._class.destroy(),delete t._class)}m=null}var J=new r.BaseClass;function X(e,t,n){return J.on(e,t,n)}function Y(e,t,n){return J.off(e,t,n)}function Z(e,t,n){return J.fire(e,t,n)}function ee(e,t,n){return J.once(e,t,n)}function te(e,t){return J.listens(e,t)}var ne=n(4),ie=n.n(ne),re=n(5),oe=n.n(re),ae=n(6),se=n.n(ae),ue=n(7),ce=n.n(ue),le=n(3),fe=n.n(le);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=fe()(e);if(t){var r=fe()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return ce()(this,n)}}var ve=window.jQuery,ye=window.layer,ge=r.BaseClass,be=[],we=function(e){se()(n,e);var t=he(n);function n(e,i){var r;return ie()(this,n),(r=t.call(this,i)).map=e,r.options=i,r.config=i,r.path=i.path||"",r.isActivate=!1,r.isCreate=!1,r._viewcreate_allcount=0,r._viewcreate_okcount=0,r._viewConfig=r.view,r.init(),r}return oe()(n,[{key:"resources",get:function(){return null}},{key:"view",get:function(){return null}},{key:"activateBase",value:function(){var e=this;if(this.isActivate)this.eachView((function(e){e._dom&&(ve(".layui-layer").each((function(){ve(this).css("z-index",19891e3)})),ve(e._dom).css("z-index",19891014))}));else{if(J.fire(b.beforeActivate,{sourceTarget:this}),this.beforeActivate(),this.isActivate=!0,!this.isCreate){if(J.fire(b.beforeCreate,{sourceTarget:this}),this.resources&&this.resources.length>0){for(var t=[],n=0;n<this.resources.length;n++){var i=this.resources[n];i=this._getUrl(i),-1==be.indexOf(i)&&t.push(i)}return be=be.concat(t),void g(t,(function(){var t=e.create((function(){e._createWidgetView(),e.isCreate=!0}));if(J.fire(b.created,{sourceTarget:e}),!t){if(e.options.createAtStart)return e.options.createAtStart=!1,e.isActivate=!1,void(e.isCreate=!0);e._createWidgetView(),e.isCreate=!0}}))}var r=this.create((function(){e._createWidgetView(),this.isCreate=!0}));if(J.fire(b.created,{sourceTarget:this}),r)return;if(e.options.createAtStart)return e.options.createAtStart=!1,e.isActivate=!1,void(e.isCreate=!0);this.isCreate=!0}this._createWidgetView()}}},{key:"init",value:function(){}},{key:"create",value:function(){}},{key:"_createWidgetView",value:function(){var e=this._viewConfig;if(null==e)this._startActivate();else if(Array.isArray(e)){this._viewcreate_allcount=e.length,this._viewcreate_okcount=0;for(var t=0;t<e.length;t++)this.createItemView(e[t])}else this._viewcreate_allcount=1,this._viewcreate_okcount=0,this.createItemView(e)}},{key:"eachView",value:function(e,t){var n=this._viewConfig;if(null==n)return!1;if(Array.isArray(n)){var i=!1;if(null!=t)return e(n[t]);for(var r=0;r<n.length;r++)i=e(n[r]);return i}return e(n)}},{key:"createItemView",value:function(e){var t=this;switch(e.type){default:case"window":this._openWindow(e);break;case"divwindow":this._openDivWindow(e);break;case"append":t.getHtml(this._getUrl(e.url),(function(n){t._appendView(e,n)}));break;case"custom":e.open(this._getUrl(e.url),(function(n){t.winCreateOK(e,n),J.fire(b.openView,{sourceTarget:t,view:e,dom:n}),t._viewcreate_okcount++,t._viewcreate_okcount>=t._viewcreate_allcount&&t._startActivate(n)}),this)}}},{key:"_openWindow",value:function(e){var t=this,n=this._getUrl(e.url),i={type:2,content:[n,"no"],success:function(i,o){if(t.isActivate){e._layerIdx!=o&&(ye.close(e._layerIdx),e._layerIdx=o),e._layerOpening=!1,e._dom=i;var a,s=window[i.find("iframe")[0].name];if(t.options.css&&ve("#layui-layer"+e._layerIdx).css(t.options.css),t.options.hasOwnProperty("visible")&&!t.options.visible&&ve(i).hide(),ye.setTop(i),t.winCreateOK(e,s),J.fire(b.openView,{sourceTarget:t,view:e,dom:i}),t._viewcreate_okcount++,t._viewcreate_okcount>=t._viewcreate_allcount&&t._startActivate(i),s&&s.initWidgetView)null!==(a=t.config)&&void 0!==a&&a.style&&ve(s.document.body).addClass(t.config.style),s.initWidgetView(t);else r.Log.logError(n+"页面没有定义function initWidgetView(widget)方法，无法初始化widget页面!")}else ye.close(o)}};e._layerIdx&&e._layerIdx>0&&(ye.close(e._layerIdx),e._layerIdx=-1),e._layerOpening=!0,e._layerIdx=ye.open(this._getWinOpt(e,i))}},{key:"_openDivWindow",value:function(e){var t=this,n=this._getUrl(e.url);this.getHtml(n,(function(n){var i={type:1,content:n,success:function(n,i){t.isActivate?(e._layerIdx!=i&&(ye.close(e._layerIdx),e._layerIdx=i),e._layerOpening=!1,e._dom=n,t.options.hasOwnProperty("show")&&!t.options.show&&ve(n).hide(),ye.setTop(n),t.winCreateOK(e,n),J.fire(b.openView,{sourceTarget:t,view:e,dom:n}),t._viewcreate_okcount++,t._viewcreate_okcount>=t._viewcreate_allcount&&t._startActivate(n)):ye.close(i)}};e._layerOpening=!0,e._layerIdx=ye.open(t._getWinOpt(e,i))}))}},{key:"_getUrl",value:function(e){return(e=this.addCacheVersion(e)).startsWith("/")||e.startsWith(".")||e.startsWith("http")?e:this.path+e}},{key:"_getWinOpt",value:function(e,t){var n=pe(pe(pe({},I()),e.windowOptions),this.options.windowOptions);e.windowOptions=n;var i=this,r=this._getWinSize(n),o=!1;return n.noTitle||(o=this.options.name||" ",this.options.icon&&(o='<i class="'+this.options.icon+'" ></i>&nbsp;'+o)),pe(pe(pe({},{title:o,area:r.area,offset:r.offset,shade:0,maxmin:!1,beforeEnd:function(){i.beforeDisable()},end:function(){e._layerIdx=-1,e._dom=null,i.disableBase()},full:function(e){i.winFull(e)},min:function(e){i.winMin(e)},restore:function(e){i.winRestore(e)}}),n),t)}},{key:"_getWinSize",value:function(e){var t=this.bfb2Number(e.width,document.documentElement.clientWidth,e),n=this.bfb2Number(e.height,document.documentElement.clientHeight,e),i="",r=e.position;if(r)if("string"==typeof r)i=r;else if("object"===a()(r)){var o,s;if(r.hasOwnProperty("top")&&null!=r.top&&(o=this.bfb2Number(r.top,document.documentElement.clientHeight,e)),r.hasOwnProperty("bottom")&&null!=r.bottom){e._hasresize=!0;var u=this.bfb2Number(r.bottom,document.documentElement.clientHeight,e);null!=o?n=document.documentElement.clientHeight-o-u:o=document.documentElement.clientHeight-n-u}if(r.hasOwnProperty("left")&&null!=r.left&&(s=this.bfb2Number(r.left,document.documentElement.clientWidth,e)),r.hasOwnProperty("right")&&null!=r.right){e._hasresize=!0;var c=this.bfb2Number(r.right,document.documentElement.clientWidth,e);null!=s?t=document.documentElement.clientWidth-s-c:s=document.documentElement.clientWidth-t-c}null==o&&(o=(document.documentElement.clientHeight-n)/2),null==s&&(s=(document.documentElement.clientWidth-t)/2),i=[o+"px",s+"px"]}return e.hasOwnProperty("minHeight")&&n<e.minHeight&&(e._hasresize=!0,n=e.minHeight),e.hasOwnProperty("maxHeight")&&n>e.maxHeight&&(e._hasresize=!0,n=e.maxHeight),e.hasOwnProperty("minWidth")&&t<e.minWidth&&(e._hasresize=!0,t=e.minWidth),e.hasOwnProperty("maxWidth")&&t>e.maxWidth&&(e._hasresize=!0,t=e.maxWidth),{area:t&&n?[t+"px",n+"px"]:t+"px",offset:i}}},{key:"indexResize",value:function(){if(this.isActivate){var e=this;this.eachView((function(t){if(null!=t._layerIdx&&-1!=t._layerIdx&&null!=t.windowOptions&&t.windowOptions._hasresize){var n=e._getWinSize(t.windowOptions),i={};Array.isArray(n.area)&&(n.area[0]&&(i.width=n.area[0]),n.area[1]&&(i.height=n.area[1])),Array.isArray(n.offset)&&(n.offset[1]&&(i.top=n.offset[0]),n.offset[1]&&(i.left=n.offset[1])),ve(t._dom).attr("myTopLeft",!0),ye.style(t._layerIdx,i),"divwindow"==t.type&&ye.iframeAuto(t._layerIdx)}}))}}},{key:"_appendView",value:function(e,t){e._dom=ve(t).appendTo(e.parent||"body"),this.options.css&&ve(e._dom).css(this.options.css),this.winCreateOK(e,t),this._viewcreate_okcount++,this._viewcreate_okcount>=this._viewcreate_allcount&&this._startActivate(t)}},{key:"winCreateOK",value:function(e,t){}},{key:"winFull",value:function(){}},{key:"winMin",value:function(){}},{key:"winRestore",value:function(){}},{key:"_startActivate",value:function(e){this.activate(e),J.fire(b.activated,{sourceTarget:this}),this.options.success&&(this.options.success(this),delete this.options.success),this.isActivate||this.disableBase()}},{key:"beforeActivate",value:function(){}},{key:"activate",value:function(){}},{key:"disableBase",value:function(){this.isActivate&&(this.isActivate=!1,this.beforeDisable(),J.fire(b.beforeDisable,{sourceTarget:this}),this.eachView((function(e){return e._layerIdx&&e._layerIdx>0?(ye.close(e._layerIdx),e._layerOpening||(e._layerIdx=-1),!0):("append"==e.type&&e._dom&&(e._dom.remove(),e._dom=null),"custom"==e.type&&e.close&&e.close(),!1)})),this.disable(),this.options.autoReset&&this.resetConfig(),J.fire(b.disabled,{sourceTarget:this}))}},{key:"beforeDisable",value:function(){}},{key:"disable",value:function(){}},{key:"bfb2Number",value:function(e,t,n){return"string"==typeof e&&-1!=e.indexOf("%")?(n._hasresize=!0,t*Number(e.replace("%",""))/100):e}},{key:"addCacheVersion",value:function(e){if(null==e)return e;var t=G();return t&&(-1==e.indexOf("?")?e+="?cache="+t:-1==e.indexOf("cache="+t)&&(e+="&cache="+t)),e}},{key:"resetConfig",value:function(){if(this.options._firstConfigBak){var e=this.options._firstConfigBak;for(var t in e)"uri"!=t&&(this.options[t]=e[t])}}},{key:"setViewShow",value:function(e,t){this.eachView((function(t){t._layerIdx&&t._layerIdx>0?e?ve("#layui-layer"+t._layerIdx).show():ve("#layui-layer"+t._layerIdx).hide():"append"==t.type&&t._dom&&(e?ve(t._dom).show():ve(t._dom).hide())}),t)}},{key:"setViewCss",value:function(e,t){this.eachView((function(t){null!=t._layerIdx&&t._layerIdx>0?ye.style(t._layerIdx,e):"append"==t.type&&t._dom&&ve(t._dom).css(e)}),t)}},{key:"setTitle",value:function(e,t){this.eachView((function(t){t._dom&&t._dom.find(".layui-layer-title").html(e)}),t)}},{key:"getHtml",value:function(e,t){ve.ajax({url:e,type:"GET",dataType:"html",timeout:0,success:function(e){t(e)}})}}]),n}(ge);r.widget=i,r.widget.BaseWidget=we,r.widget.WidgetEventType=b,r.widget.EventType=b}])}));