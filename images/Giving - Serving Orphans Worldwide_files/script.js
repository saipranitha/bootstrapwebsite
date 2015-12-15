// Put all plugins here. Make sure each plugin is self contained, or has a good reason not to be.
/*! Video.js v4.8.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,k=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ba[a])return t.Ba[a];a=t.v(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}
var videojs=window.videojs=t;t.Ub="4.8";t.Sc="https:"==document.location.protocol?"https://":"http://";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{},errorDisplay:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.ve||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.Ub&&(videojs.options.flash.swf=t.Sc+"vjs.zencdn.net/"+t.Ub+"/video-js.swf");t.dd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.ga.Va(t.options.languages[a],c):c;return t.options.languages};t.Ba={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.qa=t.CoreObject=m();
t.qa.extend=function(a){var c,d;a=a||{};c=a.init||a.i||this.prototype.init||this.prototype.i||m();d=function(){c.apply(this,arguments)};d.prototype=t.h.create(this.prototype);d.prototype.constructor=d;d.extend=t.qa.extend;d.create=t.qa.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.qa.create=function(){var a=t.h.create(this.prototype);this.apply(a,arguments);return a};
t.d=function(a,c,d){if(t.h.isArray(c))return u(t.d,a,c,d);var e=t.getData(a);e.C||(e.C={});e.C[c]||(e.C[c]=[]);d.w||(d.w=t.w++);e.C[c].push(d);e.X||(e.disabled=l,e.X=function(c){if(!e.disabled){c=t.pc(c);var d=e.C[c.type];if(d)for(var d=d.slice(0),j=0,n=d.length;j<n&&!c.wc();j++)d[j].call(a,c)}});1==e.C[c].length&&(a.addEventListener?a.addEventListener(c,e.X,l):a.attachEvent&&a.attachEvent("on"+c,e.X))};
t.o=function(a,c,d){if(t.sc(a)){var e=t.getData(a);if(e.C){if(t.h.isArray(c))return u(t.o,a,c,d);if(c){var g=e.C[c];if(g){if(d){if(d.w)for(e=0;e<g.length;e++)g[e].w===d.w&&g.splice(e--,1)}else e.C[c]=[];t.jc(a,c)}}else for(g in e.C)c=g,e.C[c]=[],t.jc(a,c)}}};t.jc=function(a,c){var d=t.getData(a);0===d.C[c].length&&(delete d.C[c],a.removeEventListener?a.removeEventListener(c,d.X,l):a.detachEvent&&a.detachEvent("on"+c,d.X));t.Hb(d.C)&&(delete d.C,delete d.X,delete d.disabled);t.Hb(d)&&t.Fc(a)};
t.pc=function(a){function c(){return f}function d(){return l}if(!a||!a.Ib){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.yd=c;a.defaultPrevented=f};a.yd=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Ib=c};a.Ib=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.wc=c;a.stopPropagation()};a.wc=d;if(a.clientX!=k){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=k&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.l=function(a,c){var d=t.sc(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.pc(c);d.X&&d.X.call(a,c);if(e&&!c.Ib()&&c.bubbles!==l)t.l(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.W=function(a,c,d){function e(){t.o(a,c,e);d.apply(this,arguments)}if(t.h.isArray(c))return u(t.W,a,c,d);e.w=d.w=d.w||t.w++;t.d(a,c,e)};function u(a,c,d,e){t.hc.forEach(d,function(d){a(c,d,e)})}var v=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.h.Y(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.aa=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.h={};
t.h.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.h.Y=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};t.h.z=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};t.h.md=function(a,c){var d,e,g;a=t.h.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=t.h.Ta(e)&&t.h.Ta(g)?t.h.md(e,g):c[d]);return a};t.h.copy=function(a){return t.h.z({},a)};
t.h.Ta=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.h.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.Ad=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.w||(c.w=t.w++);e.w=d?d+"_"+c.w:c.w;return e};t.ua={};t.w=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.w++,t.ua[c]={});return t.ua[c]};
t.sc=function(a){a=a[t.expando];return!(!a||t.Hb(t.ua[a]))};t.Fc=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=k}}};t.Hb=function(a){for(var c in a)if(a[c]!==k)return l;return f};t.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};
t.p=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");t.L=navigator.userAgent;t.Yc=/iPhone/i.test(t.L);t.Xc=/iPad/i.test(t.L);t.Zc=/iPod/i.test(t.L);t.Wc=t.Yc||t.Xc||t.Zc;var aa=t,x;var y=t.L.match(/OS (\d+)_/i);x=y&&y[1]?y[1]:b;aa.ke=x;t.Uc=/Android/i.test(t.L);var ba=t,z;var A=t.L.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:k):z=k;ba.Tb=z;t.$c=t.Uc&&/webkit/i.test(t.L)&&2.3>t.Tb;t.Vc=/Firefox/i.test(t.L);t.le=/Chrome/i.test(t.L);t.dc=!!("ontouchstart"in window||window.Tc&&document instanceof window.Tc);t.Hc=function(a,c){t.h.Y(c,function(c,e){e===k||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};
t.za=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==k?f:l;c[e]=g}}return c};
t.re=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Gb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.Oa={};t.v=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.ya=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),j=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<j?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.gd=function(){document.body.focus();document.onselectstart=r(l)};t.ge=function(){document.onselectstart=r(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.zb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
t.get=function(a,c,d,e){var g,h,j,n;d=d||m();"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});h=new XMLHttpRequest;j=t.Td(a);n=window.location;j.protocol+j.host!==n.protocol+n.host&&window.XDomainRequest&&!("withCredentials"in
h)?(h=new window.XDomainRequest,h.onload=function(){c(h.responseText)},h.onerror=d,h.onprogress=m(),h.ontimeout=d):(g="file:"==j.protocol||"file:"==n.protocol,h.onreadystatechange=function(){4===h.readyState&&(200===h.status||g&&0===h.status?c(h.responseText):d(h.responseText))});try{h.open("GET",a,f),e&&(h.withCredentials=f)}catch(q){d(q);return}try{h.send()}catch(w){d(w)}};
t.Xd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};t.rc=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Td=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];e&&document.body.removeChild(c);return a};
function D(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){D(k,arguments)};t.log.history=[];t.log.error=function(){D("error",arguments)};t.log.warn=function(){D("warn",arguments)};
t.ud=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.hc={};t.hc.forEach=function(a,c,d){if(t.h.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};t.ga={};
t.ga.Va=function(a,c){var d,e,g;a=t.h.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.h.Ta(e)&&t.h.Ta(g)?t.ga.Va(e,g):c[d]);return a};
t.a=t.qa.extend({i:function(a,c,d){this.c=a;this.k=t.h.copy(this.k);c=this.options(c);this.T=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+t.w++);this.Gd=c.name||k;this.b=c.el||this.e();this.M=[];this.Pa={};this.Qa={};this.uc();this.I(d);if(c.Gc!==l){var e,g;e=t.bind(this.j(),this.j().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});s=t.a.prototype;
s.dispose=function(){this.l({type:"dispose",bubbles:l});if(this.M)for(var a=this.M.length-1;0<=a;a--)this.M[a].dispose&&this.M[a].dispose();this.Qa=this.Pa=this.M=k;this.o();this.b.parentNode&&this.b.parentNode.removeChild(this.b);t.Fc(this.b);this.b=k};s.c=f;s.j=p("c");s.options=function(a){return a===b?this.k:this.k=t.ga.Va(this.k,a)};s.e=function(a,c){return t.e(a,c)};s.s=function(a){var c=this.c.language(),d=this.c.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.v=p("b");
s.ja=function(){return this.u||this.b};s.id=p("T");s.name=p("Gd");s.children=p("M");s.wd=function(a){return this.Pa[a]};s.ka=function(a){return this.Qa[a]};s.Q=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.aa(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.M.push(d);"function"===typeof d.id&&(this.Pa[d.id()]=d);(e=e||d.name&&d.name())&&(this.Qa[e]=d);"function"===typeof d.el&&d.el()&&this.ja().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.ka(a));if(a&&this.M){for(var c=l,d=this.M.length-1;0<=d;d--)if(this.M[d]===a){c=f;this.M.splice(d,1);break}c&&(this.Pa[a.id]=k,this.Qa[a.name]=k,(c=a.v())&&c.parentNode===this.ja()&&this.ja().removeChild(a.v()))}};s.uc=function(){var a,c,d,e;a=this;if(c=this.options().children)if(t.h.isArray(c))for(var g=0;g<c.length;g++)d=c[g],"string"==typeof d?(e=d,d={}):e=d.name,a[e]=a.Q(e,d);else t.h.Y(c,function(c,d){d!==l&&(a[c]=a.Q(c,d))})};s.S=r("");
s.d=function(a,c){t.d(this.b,a,t.bind(this,c));return this};s.o=function(a,c){t.o(this.b,a,c);return this};s.W=function(a,c){t.W(this.b,a,t.bind(this,c));return this};s.l=function(a){t.l(this.b,a);return this};s.I=function(a){a&&(this.la?a.call(this):(this.ab===b&&(this.ab=[]),this.ab.push(a)));return this};s.Fa=function(){this.la=f;var a=this.ab;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.ab=[];this.l("ready")}};s.n=function(a){t.n(this.b,a);return this};
s.p=function(a){t.p(this.b,a);return this};s.show=function(){this.b.style.display="block";return this};s.V=function(){this.b.style.display="none";return this};function E(a){a.p("vjs-lock-showing")}s.disable=function(){this.V();this.show=m()};s.width=function(a,c){return F(this,"width",a,c)};s.height=function(a,c){return F(this,"height",a,c)};s.pd=function(a,c){return this.width(a,f).height(c)};
function F(a,c,d,e){if(d!==b){if(d===k||t.Ad(d))d=0;a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.l("resize");return a}if(!a.b)return 0;d=a.b.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+t.aa(c)],10)}
function G(a){var c,d,e,g,h,j,n,q;c=0;d=k;a.d("touchstart",function(a){1===a.touches.length&&(d=a.touches[0],c=(new Date).getTime(),g=f)});a.d("touchmove",function(a){1<a.touches.length?g=l:d&&(j=a.touches[0].pageX-d.pageX,n=a.touches[0].pageY-d.pageY,q=Math.sqrt(j*j+n*n),22<q&&(g=l))});h=function(){g=l};a.d("touchleave",h);a.d("touchcancel",h);a.d("touchend",function(a){d=k;g===f&&(e=(new Date).getTime()-c,250>e&&(a.preventDefault(),this.l("tap")))})}
t.t=t.a.extend({i:function(a,c){t.a.call(this,a,c);G(this);this.d("tap",this.r);this.d("click",this.r);this.d("focus",this.Ya);this.d("blur",this.Xa)}});s=t.t.prototype;
s.e=function(a,c){var d;c=t.h.z({className:this.S(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.u=t.e("div",{className:"vjs-control-content"}),this.xb=t.e("span",{className:"vjs-control-text",innerHTML:this.s(this.ta)||"Need Text"}),this.u.appendChild(this.xb),d.appendChild(this.u));return d};s.S=function(){return"vjs-control "+t.a.prototype.S.call(this)};s.r=m();s.Ya=function(){t.d(document,"keydown",t.bind(this,this.da))};
s.da=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.r()};s.Xa=function(){t.o(document,"keydown",t.bind(this,this.da))};
t.P=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.fd=this.ka(this.k.barName);this.handle=this.ka(this.k.handleName);this.d("mousedown",this.Za);this.d("touchstart",this.Za);this.d("focus",this.Ya);this.d("blur",this.Xa);this.d("click",this.r);this.c.d("controlsvisible",t.bind(this,this.update));a.d(this.Bc,t.bind(this,this.update));this.R={};this.R.move=t.bind(this,this.$a);this.R.end=t.bind(this,this.Lb)}});s=t.P.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.h.z({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.Za=function(a){a.preventDefault();t.gd();this.n("vjs-sliding");t.d(document,"mousemove",this.R.move);t.d(document,"mouseup",this.R.end);t.d(document,"touchmove",this.R.move);t.d(document,"touchend",this.R.end);this.$a(a)};s.$a=m();
s.Lb=function(){t.ge();this.p("vjs-sliding");t.o(document,"mousemove",this.R.move,l);t.o(document,"mouseup",this.R.end,l);t.o(document,"touchmove",this.R.move,l);t.o(document,"touchend",this.R.end,l);this.update()};s.update=function(){if(this.b){var a,c=this.Fb(),d=this.handle,e=this.fd;isNaN(c)&&(c=0);a=c;if(d){a=this.b.offsetWidth;var g=d.v().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.v().style.left=t.round(100*c,2)+"%"}e&&(e.v().style.width=t.round(100*a,2)+"%")}};
function H(a,c){var d,e,g,h;d=a.b;e=t.ud(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.v().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.v().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.Ya=function(){t.d(document,"keyup",t.bind(this,this.da))};
s.da=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.Kc();else if(38==a.which||39==a.which)a.preventDefault(),this.Lc()};s.Xa=function(){t.o(document,"keyup",t.bind(this,this.da))};s.r=function(a){a.stopImmediatePropagation();a.preventDefault()};t.Z=t.a.extend();t.Z.prototype.defaultValue=0;
t.Z.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.h.z({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};t.ha=t.a.extend();function ca(a,c){a.Q(c);c.d("click",t.bind(a,function(){E(this)}))}
t.ha.prototype.e=function(){var a=this.options().kc||"ul";this.u=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.u,className:"vjs-menu"});a.appendChild(this.u);t.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.H=t.t.extend({i:function(a,c){t.t.call(this,a,c);this.selected(c.selected)}});t.H.prototype.e=function(a,c){return t.t.prototype.e.call(this,"li",t.h.z({className:"vjs-menu-item",innerHTML:this.k.label},c))};
t.H.prototype.r=function(){this.selected(f)};t.H.prototype.selected=function(a){a?(this.n("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.p("vjs-selected"),this.b.setAttribute("aria-selected",l))};t.K=t.t.extend({i:function(a,c){t.t.call(this,a,c);this.Aa=this.wa();this.Q(this.Aa);this.N&&0===this.N.length&&this.V();this.d("keyup",this.da);this.b.setAttribute("aria-haspopup",f);this.b.setAttribute("role","button")}});s=t.K.prototype;s.sa=l;
s.wa=function(){var a=new t.ha(this.c);this.options().title&&a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.options().title),de:-1}));if(this.N=this.createItems())for(var c=0;c<this.N.length;c++)ca(a,this.N[c]);return a};s.va=m();s.S=function(){return this.className+" vjs-menu-button "+t.t.prototype.S.call(this)};s.Ya=m();s.Xa=m();s.r=function(){this.W("mouseout",t.bind(this,function(){E(this.Aa);this.b.blur()}));this.sa?I(this):J(this)};
s.da=function(a){a.preventDefault();32==a.which||13==a.which?this.sa?I(this):J(this):27==a.which&&this.sa&&I(this)};function J(a){a.sa=f;a.Aa.n("vjs-lock-showing");a.b.setAttribute("aria-pressed",f);a.N&&0<a.N.length&&a.N[0].v().focus()}function I(a){a.sa=l;E(a.Aa);a.b.setAttribute("aria-pressed",l)}t.D=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.h.z(this,a);this.message||(this.message=t.D.nd[this.code]||"")};t.D.prototype.code=0;
t.D.prototype.message="";t.D.prototype.status=k;t.D.Sa="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.D.nd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var K=0;K<t.D.Sa.length;K++)t.D[t.D.Sa[K]]=K,t.D.prototype[t.D.Sa[K]]=K;
var L,M,N,O;
L=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
M=L[0];for(O=0;O<L.length;O++)if(L[O][1]in document){N=L[O];break}if(N){t.Oa.Eb={};for(O=0;O<N.length;O++)t.Oa.Eb[M[O]]=N[O]}
t.Player=t.a.extend({i:function(a,c,d){this.O=a;a.id=a.id||"vjs_video_"+t.w++;this.ee=a&&t.za(a);c=t.h.z(da(a),c);this.Ua=c.language||t.options.language;this.Ed=c.languages||t.options.languages;this.F={};this.Cc=c.poster;this.yb=c.controls;a.controls=l;c.Gc=l;t.a.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");t.Ba[this.T]=this;c.plugins&&t.h.Y(c.plugins,function(a,c){this[a](c)},this);var e,g,h,j,n,q;e=t.bind(this,this.reportUserActivity);this.d("mousedown",
function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",function(a){if(a.screenX!=n||a.screenY!=q)n=a.screenX,q=a.screenY,e()});this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);h=setInterval(t.bind(this,function(){if(this.pa){this.pa=l;this.userActive(f);clearTimeout(j);var a=this.options().inactivityTimeout;0<a&&(j=setTimeout(t.bind(this,function(){this.pa||this.userActive(l)}),a))}}),250);this.d("dispose",function(){clearInterval(h);clearTimeout(j)})}});
s=t.Player.prototype;s.language=function(a){if(a===b)return this.Ua;this.Ua=a;return this};s.languages=p("Ed");s.k=t.options;s.dispose=function(){this.l("dispose");this.o("dispose");t.Ba[this.T]=k;this.O&&this.O.player&&(this.O.player=k);this.b&&this.b.player&&(this.b.player=k);this.m&&this.m.dispose();t.a.prototype.dispose.call(this)};
function da(a){var c={sources:[],tracks:[]};t.h.z(c,t.za(a));if(a.hasChildNodes()){var d,e,g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(t.za(d)):"track"===e&&c.tracks.push(t.za(d))}return c}
s.e=function(){var a=this.b=t.a.prototype.e.call(this,"div"),c=this.O,d;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var e,g,h,j,n;e=c.childNodes;g=e.length;for(n=[];g--;)h=e[g],j=h.nodeName.toLowerCase(),"track"===j&&n.push(h);for(e=0;e<n.length;e++)c.removeChild(n[e])}d=t.za(c);t.h.Y(d,function(c){a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.k.width,f);this.height(this.k.height,f);c.parentNode&&
c.parentNode.insertBefore(a,c);t.Gb(c,a);this.b=a;this.d("loadstart",this.Ld);this.d("waiting",this.Rd);this.d(["canplay","canplaythrough","playing","ended"],this.Qd);this.d("seeking",this.Od);this.d("seeked",this.Nd);this.d("ended",this.Hd);this.d("play",this.Nb);this.d("firstplay",this.Jd);this.d("pause",this.Mb);this.d("progress",this.Md);this.d("durationchange",this.zc);this.d("fullscreenchange",this.Kd);return a};
function P(a,c,d){a.m&&(a.la=l,a.m.dispose(),a.m=l);"Html5"!==c&&a.O&&(t.g.Bb(a.O),a.O=k);a.eb=c;a.la=l;var e=t.h.z({source:d,parentEl:a.b},a.k[c.toLowerCase()]);d&&(a.mc=d.type,d.src==a.F.src&&0<a.F.currentTime&&(e.startTime=a.F.currentTime),a.F.src=d.src);a.m=new window.videojs[c](a,e);a.m.I(function(){this.c.Fa()})}s.Ld=function(){this.error(k);this.paused()?(Q(this,l),this.W("play",function(){Q(this,f)})):this.l("firstplay")};s.tc=l;
function Q(a,c){c!==b&&a.tc!==c&&((a.tc=c)?(a.n("vjs-has-started"),a.l("firstplay")):a.p("vjs-has-started"))}s.Nb=function(){this.p("vjs-paused");this.n("vjs-playing")};s.Rd=function(){this.n("vjs-waiting")};s.Qd=function(){this.p("vjs-waiting")};s.Od=function(){this.n("vjs-seeking")};s.Nd=function(){this.p("vjs-seeking")};s.Jd=function(){this.k.starttime&&this.currentTime(this.k.starttime);this.n("vjs-has-started")};s.Mb=function(){this.p("vjs-playing");this.n("vjs-paused")};
s.Md=function(){1==this.bufferedPercent()&&this.l("loadedalldata")};s.Hd=function(){this.k.loop&&(this.currentTime(0),this.play())};s.zc=function(){var a=R(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.n("vjs-live"):this.p("vjs-live"))};s.Kd=function(){this.isFullscreen()?this.n("vjs-fullscreen"):this.p("vjs-fullscreen")};function S(a,c,d){if(a.m&&!a.m.la)a.m.I(function(){this[c](d)});else try{a.m[c](d)}catch(e){throw t.log(e),e;}}
function R(a,c){if(a.m&&a.m.la)try{return a.m[c]()}catch(d){throw a.m[c]===b?t.log("Video.js: "+c+" method not defined for "+a.eb+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.eb+" playback technology element.",d),a.m.la=l):t.log(d),d;}}s.play=function(){S(this,"play");return this};s.pause=function(){S(this,"pause");return this};s.paused=function(){return R(this,"paused")===l?l:f};
s.currentTime=function(a){return a!==b?(S(this,"setCurrentTime",a),this):this.F.currentTime=R(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.F.duration=parseFloat(a),this;this.F.duration===b&&this.zc();return this.F.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=R(this,"buffered");if(!a||!a.length)a=t.zb(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.F.volume=a,S(this,"setVolume",a),t.Xd(a),this;a=parseFloat(R(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(S(this,"setMuted",a),this):R(this,"muted")||l};s.Da=function(){return R(this,"supportsFullScreen")||l};s.vc=l;
s.isFullscreen=function(a){return a!==b?(this.vc=!!a,this):this.vc};s.requestFullscreen=function(){var a=t.Oa.Eb;this.isFullscreen(f);a?(t.d(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.o(document,a.fullscreenchange,arguments.callee);this.l("fullscreenchange")})),this.b[a.requestFullscreen]()):this.m.Da()?S(this,"enterFullScreen"):(this.oc(),this.l("fullscreenchange"));return this};
s.exitFullscreen=function(){var a=t.Oa.Eb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.m.Da()?S(this,"exitFullScreen"):(this.Cb(),this.l("fullscreenchange"));return this};s.oc=function(){this.zd=f;this.qd=document.documentElement.style.overflow;t.d(document,"keydown",t.bind(this,this.qc));document.documentElement.style.overflow="hidden";t.n(document.body,"vjs-full-window");this.l("enterFullWindow")};
s.qc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Cb())};s.Cb=function(){this.zd=l;t.o(document,"keydown",this.qc);document.documentElement.style.overflow=this.qd;t.p(document.body,"vjs-full-window");this.l("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.k.techOrder;c<d.length;c++){var e=t.aa(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,j=a;h<j.length;h++){var n=j[h];if(g.canPlaySource(n))return{source:n,m:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return R(this,"src");t.h.isArray(a)?T(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.eb].canPlaySource(a)?T(this,[a]):(this.F.src=a.src,this.mc=a.type||"",this.I(function(){S(this,"src",a.src);"auto"==this.k.preload&&this.load();this.k.autoplay&&this.play()})));return this};
function T(a,c){var d=a.selectSource(c),e;d?d.m===a.eb?a.src(d.source):P(a,d.m,d.source):(e=setTimeout(t.bind(a,function(){this.error({code:4,message:this.s(this.options().notSupportedMessage)})}),0),a.Fa(),a.d("dispose",function(){clearTimeout(e)}))}s.load=function(){S(this,"load");return this};s.currentSrc=function(){return R(this,"currentSrc")||this.F.src||""};s.Ra=function(){return this.mc||""};s.Ca=function(a){return a!==b?(S(this,"setPreload",a),this.k.preload=a,this):R(this,"preload")};
s.autoplay=function(a){return a!==b?(S(this,"setAutoplay",a),this.k.autoplay=a,this):R(this,"autoplay")};s.loop=function(a){return a!==b?(S(this,"setLoop",a),this.k.loop=a,this):R(this,"loop")};s.poster=function(a){if(a===b)return this.Cc;this.Cc=a;S(this,"setPoster",a);this.l("posterchange")};
s.controls=function(a){return a!==b?(a=!!a,this.yb!==a&&((this.yb=a)?(this.p("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.l("controlsenabled")):(this.p("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.l("controlsdisabled"))),this):this.yb};t.Player.prototype.Sb;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.Sb!==a&&((this.Sb=a)?(this.n("vjs-using-native-controls"),this.l("usingnativecontrols")):(this.p("vjs-using-native-controls"),this.l("usingcustomcontrols"))),this):this.Sb};s.ca=k;s.error=function(a){if(a===b)return this.ca;if(a===k)return this.ca=a,this.p("vjs-error"),this;this.ca=a instanceof t.D?a:new t.D(a);this.l("error");this.n("vjs-error");t.log.error("(CODE:"+this.ca.code+" "+t.D.Sa[this.ca.code]+")",this.ca.message,this.ca);return this};
s.ended=function(){return R(this,"ended")};s.seeking=function(){return R(this,"seeking")};s.pa=f;s.reportUserActivity=function(){this.pa=f};s.Rb=f;s.userActive=function(a){return a!==b?(a=!!a,a!==this.Rb&&((this.Rb=a)?(this.pa=f,this.p("vjs-user-inactive"),this.n("vjs-user-active"),this.l("useractive")):(this.pa=l,this.m&&this.m.W("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.p("vjs-user-active"),this.n("vjs-user-inactive"),this.l("userinactive"))),this):this.Rb};
s.playbackRate=function(a){return a!==b?(S(this,"setPlaybackRate",a),this):this.m&&this.m.featuresPlaybackRate?R(this,"playbackRate"):1};t.Ia=t.a.extend();t.Ia.prototype.k={se:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{}}};t.Ia.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};
t.Xb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.Xb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.u=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.s("Stream Type")+"</span>"+this.s("LIVE"),"aria-live":"off"});a.appendChild(this.u);return a};t.$b=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.d("play",t.bind(this,this.Nb));a.d("pause",t.bind(this,this.Mb))}});s=t.$b.prototype;s.ta="Play";
s.S=function(){return"vjs-play-control "+t.t.prototype.S.call(this)};s.r=function(){this.c.paused()?this.c.play():this.c.pause()};s.Nb=function(){t.p(this.b,"vjs-paused");t.n(this.b,"vjs-playing");this.b.children[0].children[0].innerHTML=this.s("Pause")};s.Mb=function(){t.p(this.b,"vjs-playing");t.n(this.b,"vjs-paused");this.b.children[0].children[0].innerHTML=this.s("Play")};t.hb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});
t.hb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.u);return a};t.hb.prototype.fa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();this.u.innerHTML='<span class="vjs-control-text">'+this.s("Current Time")+"</span> "+t.ya(a,this.c.duration())};
t.ib=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});t.ib.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.s("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.u);return a};
t.ib.prototype.fa=function(){var a=this.c.duration();a&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Duration Time")+"</span> "+t.ya(a))};t.fc=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.fc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.pb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});
t.pb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.u);return a};t.pb.prototype.fa=function(){this.c.duration()&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -"+t.ya(this.c.remainingTime()))};
t.Ja=t.t.extend({i:function(a,c){t.t.call(this,a,c)}});t.Ja.prototype.ta="Fullscreen";t.Ja.prototype.S=function(){return"vjs-fullscreen-control "+t.t.prototype.S.call(this)};t.Ja.prototype.r=function(){this.c.isFullscreen()?(this.c.exitFullscreen(),this.xb.innerHTML=this.s("Fullscreen")):(this.c.requestFullscreen(),this.xb.innerHTML=this.s("Non-Fullscreen"))};t.ob=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.ob.prototype.k={children:{seekBar:{}}};
t.ob.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.bc=t.P.extend({i:function(a,c){t.P.call(this,a,c);a.d("timeupdate",t.bind(this,this.oa));a.I(t.bind(this,this.oa))}});s=t.bc.prototype;s.k={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Bc="timeupdate";s.e=function(){return t.P.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.oa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();this.b.setAttribute("aria-valuenow",t.round(100*this.Fb(),2));this.b.setAttribute("aria-valuetext",t.ya(a,this.c.duration()))};s.Fb=function(){return this.c.currentTime()/this.c.duration()};s.Za=function(a){t.P.prototype.Za.call(this,a);this.c.bb=f;this.ie=!this.c.paused();this.c.pause()};s.$a=function(a){a=H(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
s.Lb=function(a){t.P.prototype.Lb.call(this,a);this.c.bb=l;this.ie&&this.c.play()};s.Lc=function(){this.c.currentTime(this.c.currentTime()+5)};s.Kc=function(){this.c.currentTime(this.c.currentTime()-5)};t.lb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("progress",t.bind(this,this.update))}});t.lb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Loaded")+"</span>: 0%</span>"})};
t.lb.prototype.update=function(){var a,c,d,e,g=this.c.buffered();a=this.c.duration();var h,j=this.c;h=j.buffered();j=j.duration();h=h.end(h.length-1);h>j&&(h=j);j=this.b.children;this.b.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=j[a])||(e=this.b.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=j.length;a>g.length;a--)this.b.removeChild(j[a-1])};t.Zb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});
t.Zb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Progress")+"</span>: 0%</span>"})};t.La=t.Z.extend({i:function(a,c){t.Z.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});t.La.prototype.defaultValue="00:00";t.La.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.La.prototype.fa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();this.b.innerHTML='<span class="vjs-control-text">'+t.ya(a,this.c.duration())+"</span>"};t.rb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}))}});t.rb.prototype.k={children:{volumeBar:{}}};
t.rb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.qb=t.P.extend({i:function(a,c){t.P.call(this,a,c);a.d("volumechange",t.bind(this,this.oa));a.I(t.bind(this,this.oa))}});s=t.qb.prototype;s.oa=function(){this.b.setAttribute("aria-valuenow",t.round(100*this.c.volume(),2));this.b.setAttribute("aria-valuetext",t.round(100*this.c.volume(),2)+"%")};s.k={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Bc="volumechange";s.e=function(){return t.P.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.$a=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(H(this,a))};s.Fb=function(){return this.c.muted()?0:this.c.volume()};s.Lc=function(){this.c.volume(this.c.volume()+0.1)};s.Kc=function(){this.c.volume(this.c.volume()-0.1)};t.gc=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});
t.gc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.sb=t.Z.extend();t.sb.prototype.defaultValue="00:00";t.sb.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ia=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.d("volumechange",t.bind(this,this.update));a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}))}});t.ia.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})};
t.ia.prototype.r=function(){this.c.muted(this.c.muted()?l:f)};t.ia.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?this.b.children[0].children[0].innerHTML!=this.s("Unmute")&&(this.b.children[0].children[0].innerHTML=this.s("Unmute")):this.b.children[0].children[0].innerHTML!=this.s("Mute")&&(this.b.children[0].children[0].innerHTML=this.s("Mute"));for(a=0;4>a;a++)t.p(this.b,"vjs-vol-"+a);t.n(this.b,"vjs-vol-"+c)};
t.ra=t.K.extend({i:function(a,c){t.K.call(this,a,c);a.d("volumechange",t.bind(this,this.update));a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}));this.n("vjs-menu-button")}});t.ra.prototype.wa=function(){var a=new t.ha(this.c,{kc:"div"}),c=new t.qb(this.c,t.h.z({vertical:f},this.k.we));a.Q(c);return a};t.ra.prototype.r=function(){t.ia.prototype.r.call(this);t.K.prototype.r.call(this)};
t.ra.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})};t.ra.prototype.update=t.ia.prototype.update;t.ac=t.K.extend({i:function(a,c){t.K.call(this,a,c);this.Qc();this.Pc();a.d("loadstart",t.bind(this,this.Qc));a.d("ratechange",t.bind(this,this.Pc))}});s=t.ac.prototype;
s.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-playback-rate vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+this.s("Playback Rate")+"</span></div>"});this.xc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.xc);return a};s.wa=function(){var a=new t.ha(this.j()),c=this.j().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.Q(new t.nb(this.j(),{rate:c[d]+"x"}));return a};
s.oa=function(){this.v().setAttribute("aria-valuenow",this.j().playbackRate())};s.r=function(){for(var a=this.j().playbackRate(),c=this.j().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.j().playbackRate(d)};function U(a){return a.j().m&&a.j().m.featuresPlaybackRate&&a.j().options().playbackRates&&0<a.j().options().playbackRates.length}s.Qc=function(){U(this)?this.p("vjs-hidden"):this.n("vjs-hidden")};
s.Pc=function(){U(this)&&(this.xc.innerHTML=this.j().playbackRate()+"x")};t.nb=t.H.extend({kc:"button",i:function(a,c){var d=this.label=c.rate,e=this.Ec=parseFloat(d,10);c.label=d;c.selected=1===e;t.H.call(this,a,c);this.j().d("ratechange",t.bind(this,this.update))}});t.nb.prototype.r=function(){t.H.prototype.r.call(this);this.j().playbackRate(this.Ec)};t.nb.prototype.update=function(){this.selected(this.j().playbackRate()==this.Ec)};
t.Ka=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.V();a.d("posterchange",t.bind(this,function(){this.src(a.poster())}));a.d("play",t.bind(this,this.V))}});var ea="backgroundSize"in t.A.style;t.Ka.prototype.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});ea||a.appendChild(t.e("img"));return a};t.Ka.prototype.src=function(a){var c=this.v();a!==b&&(ea?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};
t.Ka.prototype.r=function(){this.j().controls()&&this.c.play()};t.Yb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.Yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.fb=t.t.extend();t.fb.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.fb.prototype.r=function(){this.c.play()};
t.jb=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.update();a.d("error",t.bind(this,this.update))}});t.jb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.u=t.e("div");a.appendChild(this.u);return a};t.jb.prototype.update=function(){this.j().error()&&(this.u.innerHTML=this.s(this.j().error().message))};
t.q=t.a.extend({i:function(a,c,d){c=c||{};c.Gc=l;t.a.call(this,a,c,d);this.featuresProgressEvents||(this.yc=f,this.Dc=setInterval(t.bind(this,function(){var a=this.j().bufferedPercent();this.hd!=a&&this.j().l("progress");this.hd=a;1===a&&clearInterval(this.Dc)}),500));this.featuresTimeupdateEvents||(this.Kb=f,this.j().d("play",t.bind(this,this.Oc)),this.j().d("pause",t.bind(this,this.cb)),this.W("timeupdate",function(){this.featuresTimeupdateEvents=f;fa(this)}));var e,g;g=this;e=this.j();a=function(){if(e.controls()&&
!e.usingNativeControls()){var a;g.d("mousedown",g.r);g.d("touchstart",function(){a=this.c.userActive()});g.d("touchmove",function(){a&&this.j().reportUserActivity()});g.d("touchend",function(a){a.preventDefault()});G(g);g.d("tap",g.Pd)}};c=t.bind(g,g.Vd);this.I(a);e.d("controlsenabled",a);e.d("controlsdisabled",c);this.I(function(){this.networkState&&0<this.networkState()&&this.j().l("loadstart")})}});s=t.q.prototype;
s.Vd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};s.r=function(a){0===a.button&&this.j().controls()&&(this.j().paused()?this.j().play():this.j().pause())};s.Pd=function(){this.j().userActive(!this.j().userActive())};function fa(a){a.Kb=l;a.cb();a.o("play",a.Oc);a.o("pause",a.cb)}
s.Oc=function(){this.lc&&this.cb();this.lc=setInterval(t.bind(this,function(){this.j().l("timeupdate")}),250)};s.cb=function(){clearInterval(this.lc);this.j().l("timeupdate")};s.dispose=function(){this.yc&&(this.yc=l,clearInterval(this.Dc));this.Kb&&fa(this);t.a.prototype.dispose.call(this)};s.Pb=function(){this.Kb&&this.j().l("timeupdate")};s.Ic=m();t.q.prototype.featuresVolumeControl=f;t.q.prototype.featuresFullscreenResize=l;t.q.prototype.featuresPlaybackRate=l;
t.q.prototype.featuresProgressEvents=l;t.q.prototype.featuresTimeupdateEvents=l;t.media={};
t.g=t.q.extend({i:function(a,c,d){this.featuresVolumeControl=t.g.kd();this.featuresPlaybackRate=t.g.jd();this.movingMediaElementInDOM=!t.Wc;this.featuresProgressEvents=this.featuresFullscreenResize=f;t.q.call(this,a,c,d);for(d=t.g.kb.length-1;0<=d;d--)t.d(this.b,t.g.kb[d],t.bind(this,this.sd));if((c=c.source)&&this.b.currentSrc!==c.src)this.b.src=c.src;if(t.dc&&a.options().nativeControlsForTouch!==l){var e,g,h,j;e=this;g=this.j();c=g.controls();e.b.controls=!!c;h=function(){e.b.controls=f};j=function(){e.b.controls=
l};g.d("controlsenabled",h);g.d("controlsdisabled",j);c=function(){g.o("controlsenabled",h);g.o("controlsdisabled",j)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.I(function(){this.O&&(this.k.autoplay&&this.paused())&&(delete this.O.poster,this.play())});this.Fa()}});s=t.g.prototype;s.dispose=function(){t.g.Bb(this.b);t.q.prototype.dispose.call(this)};
s.e=function(){var a=this.c,c=a.O,d;if(!c||this.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),t.g.Bb(c),c=d,a.O=k):(c=t.e("video"),t.Hc(c,t.h.z(a.ee||{},{id:a.id()+"_html5_api","class":"vjs-tech"}))),c.player=a,t.Gb(c,a.v());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e],h={};"undefined"!==typeof a.k[g]&&(h[g]=a.k[g]);t.Hc(c,h)}return c};s.sd=function(a){"error"==a.type&&this.error()?this.j().error(this.error().code):(a.bubbles=l,this.j().l(a))};s.play=function(){this.b.play()};
s.pause=function(){this.b.pause()};s.paused=function(){return this.b.paused};s.currentTime=function(){return this.b.currentTime};s.Pb=function(a){try{this.b.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};s.duration=function(){return this.b.duration||0};s.buffered=function(){return this.b.buffered};s.volume=function(){return this.b.volume};s.be=function(a){this.b.volume=a};s.muted=function(){return this.b.muted};s.Zd=function(a){this.b.muted=a};s.width=function(){return this.b.offsetWidth};
s.height=function(){return this.b.offsetHeight};s.Da=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(t.L)||!/Chrome|Mac OS X 10.5/.test(t.L))?f:l};s.nc=function(){var a=this.b;a.paused&&a.networkState<=a.je?(this.b.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};s.td=function(){this.b.webkitExitFullScreen()};s.src=function(a){if(a===b)return this.b.src;this.b.src=a};s.load=function(){this.b.load()};s.currentSrc=function(){return this.b.currentSrc};
s.poster=function(){return this.b.poster};s.Ic=function(a){this.b.poster=a};s.Ca=function(){return this.b.Ca};s.ae=function(a){this.b.Ca=a};s.autoplay=function(){return this.b.autoplay};s.Wd=function(a){this.b.autoplay=a};s.controls=function(){return this.b.controls};s.loop=function(){return this.b.loop};s.Yd=function(a){this.b.loop=a};s.error=function(){return this.b.error};s.seeking=function(){return this.b.seeking};s.ended=function(){return this.b.ended};s.playbackRate=function(){return this.b.playbackRate};
s.$d=function(a){this.b.playbackRate=a};s.networkState=function(){return this.b.networkState};t.g.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.g.vb=function(a){try{return!!t.A.canPlayType(a.type)}catch(c){return""}};t.g.kd=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};t.g.jd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};var V,ga=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ha=/^video\/mp4/i;
t.g.Ac=function(){4<=t.Tb&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ga.test(a)?"maybe":V.call(this,a)});t.$c&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ha.test(a)?"maybe":V.call(this,a)})};t.g.he=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=V;V=k;return a};t.g.Ac();t.g.kb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
t.g.Bb=function(a){if(a){a.player=k;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.f=t.q.extend({i:function(a,c,d){t.q.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.b=t.e("div",{id:a.id()+"_temp_flash"}),h=a.id()+"_flash_api",j=a.k,j=t.h.z({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:j.autoplay,preload:j.Ca,loop:j.loop,muted:j.muted},c.flashVars),n=t.h.z({wmode:"opaque",bgcolor:"#000000"},c.params),h=t.h.z({id:h,name:h,"class":"vjs-tech"},c.attributes);e&&(e.type&&t.f.Cd(e.type)?
(e=t.f.Mc(e.src),j.rtmpConnection=encodeURIComponent(e.wb),j.rtmpStream=encodeURIComponent(e.Qb)):j.src=encodeURIComponent(t.rc(e.src)));t.Gb(g,d);c.startTime&&this.I(function(){this.load();this.play();this.currentTime(c.startTime)});t.Vc&&this.I(function(){t.d(this.v(),"mousemove",t.bind(this,function(){this.j().l({type:"mousemove",bubbles:l})}))});a.d("stageclick",a.reportUserActivity);this.b=t.f.rd(c.swf,g,j,n,h)}});t.f.prototype.dispose=function(){t.q.prototype.dispose.call(this)};
t.f.prototype.play=function(){this.b.vjs_play()};t.f.prototype.pause=function(){this.b.vjs_pause()};t.f.prototype.src=function(a){if(a===b)return this.currentSrc();t.f.Bd(a)?(a=t.f.Mc(a),this.te(a.wb),this.ue(a.Qb)):(a=t.rc(a),this.b.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.f.prototype.setCurrentTime=function(a){this.Fd=a;this.b.vjs_setProperty("currentTime",a);t.q.prototype.Pb.call(this)};
t.f.prototype.currentTime=function(){return this.seeking()?this.Fd||0:this.b.vjs_getProperty("currentTime")};t.f.prototype.currentSrc=function(){var a=this.b.vjs_getProperty("currentSrc");if(a==k){var c=this.rtmpConnection(),d=this.rtmpStream();c&&d&&(a=t.f.ce(c,d))}return a};t.f.prototype.load=function(){this.b.vjs_load()};t.f.prototype.poster=function(){this.b.vjs_getProperty("poster")};t.f.prototype.setPoster=m();t.f.prototype.buffered=function(){return t.zb(0,this.b.vjs_getProperty("buffered"))};
t.f.prototype.Da=r(l);t.f.prototype.nc=r(l);function ia(){var a=W[X],c=a.charAt(0).toUpperCase()+a.slice(1);ja["set"+c]=function(c){return this.b.vjs_setProperty(a,c)}}function ka(a){ja[a]=function(){return this.b.vjs_getProperty(a)}}
var ja=t.f.prototype,W="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),la="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),X;for(X=0;X<W.length;X++)ka(W[X]),ia();for(X=0;X<la.length;X++)ka(la[X]);t.f.isSupported=function(){return 10<=t.f.version()[0]};
t.f.vb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in t.f.vd||a in t.f.Nc)return"maybe"};t.f.vd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.f.Nc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.f.onReady=function(a){var c;if(c=(a=t.v(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.f.checkReady(c.m)};t.f.checkReady=function(a){a.v()&&(a.v().vjs_getProperty?a.Fa():setTimeout(function(){t.f.checkReady(a)},50))};t.f.onEvent=function(a,c){t.v(a).player.l(c)};
t.f.onError=function(a,c){var d=t.v(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};t.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.f.rd=function(a,c,d,e,g){a=t.f.xd(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.f.xd=function(a,c,d,e){var g="",h="",j="";c&&t.h.Y(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.h.z({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.h.Y(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.h.z({data:a,width:"100%",height:"100%"},e);t.h.Y(e,function(a,c){j+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+j+">"+h+"</object>"};t.f.ce=function(a,c){return a+"&"+c};
t.f.Mc=function(a){var c={wb:"",Qb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.wb=a.substring(0,d);c.Qb=a.substring(e,a.length);return c};t.f.Cd=function(a){return a in t.f.Nc};t.f.bd=/^rtmp[set]?:\/\//i;t.f.Bd=function(a){return t.f.bd.test(a)};
t.ad=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);if(!a.k.sources||0===a.k.sources.length){c=0;for(d=a.k.techOrder;c<d.length;c++){var e=t.aa(d[c]),g=window.videojs[e];if(g&&g.isSupported()){P(a,e);break}}}else a.src(a.k.sources)}});t.Player.prototype.textTracks=function(){return this.Ea=this.Ea||[]};
function ma(a,c,d,e,g){var h=a.Ea=a.Ea||[];g=g||{};g.kind=c;g.label=d;g.language=e;c=t.aa(c||"subtitles");var j=new window.videojs[c+"Track"](a,g);h.push(j);j.Ab()&&a.I(function(){setTimeout(function(){Y(j.j(),j.id())},0)})}function Y(a,c,d){for(var e=a.Ea,g=0,h=e.length,j,n;g<h;g++)j=e[g],j.id()===c?(j.show(),n=j):d&&(j.J()==d&&0<j.mode())&&j.disable();(c=n?n.J():d?d:l)&&a.l(c+"trackchange")}
t.B=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.T=c.id||"vjs_"+c.kind+"_"+c.language+"_"+t.w++;this.Jc=c.src;this.od=c["default"]||c.dflt;this.fe=c.title;this.Ua=c.srclang;this.Dd=c.label;this.ba=[];this.tb=[];this.ma=this.na=0;this.c.d("fullscreenchange",t.bind(this,this.ed))}});s=t.B.prototype;s.J=p("G");s.src=p("Jc");s.Ab=p("od");s.title=p("fe");s.language=p("Ua");s.label=p("Dd");s.ld=p("ba");s.cd=p("tb");s.readyState=p("na");s.mode=p("ma");
s.ed=function(){this.b.style.fontSize=this.c.isFullscreen()?140*(screen.width/this.c.width())+"%":""};s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-"+this.G+" vjs-text-track"})};s.show=function(){na(this);this.ma=2;t.a.prototype.show.call(this)};s.V=function(){na(this);this.ma=1;t.a.prototype.V.call(this)};
s.disable=function(){2==this.ma&&this.V();this.c.o("timeupdate",t.bind(this,this.update,this.T));this.c.o("ended",t.bind(this,this.reset,this.T));this.reset();this.c.ka("textTrackDisplay").removeChild(this);this.ma=0};function na(a){0===a.na&&a.load();0===a.ma&&(a.c.d("timeupdate",t.bind(a,a.update,a.T)),a.c.d("ended",t.bind(a,a.reset,a.T)),("captions"===a.G||"subtitles"===a.G)&&a.c.ka("textTrackDisplay").Q(a))}
s.load=function(){0===this.na&&(this.na=1,t.get(this.Jc,t.bind(this,this.Sd),t.bind(this,this.Id)))};s.Id=function(a){this.error=a;this.na=3;this.l("error")};s.Sd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,h=a.length;g<h;g++)if(e=t.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=t.trim(a[++g])):c=this.ba.length;c={id:c,index:this.ba.length};d=e.split(/[\t ]+/);c.startTime=oa(d[0]);c.xa=oa(d[2]);for(d=[];a[++g]&&(e=t.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.ba.push(c)}this.na=2;this.l("loaded")};
function oa(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
s.update=function(){if(0<this.ba.length){var a=this.c.options().trackTimeOffset||0,a=this.c.currentTime()+a;if(this.Ob===b||a<this.Ob||this.Wa<=a){var c=this.ba,d=this.c.duration(),e=0,g=l,h=[],j,n,q,w;a>=this.Wa||this.Wa===b?w=this.Db!==b?this.Db:0:(g=f,w=this.Jb!==b?this.Jb:c.length-1);for(;;){q=c[w];if(q.xa<=a)e=Math.max(e,q.xa),q.Na&&(q.Na=l);else if(a<q.startTime){if(d=Math.min(d,q.startTime),q.Na&&(q.Na=l),!g)break}else g?(h.splice(0,0,q),n===b&&(n=w),j=w):(h.push(q),j===b&&(j=w),n=w),d=Math.min(d,
q.xa),e=Math.max(e,q.startTime),q.Na=f;if(g)if(0===w)break;else w--;else if(w===c.length-1)break;else w++}this.tb=h;this.Wa=d;this.Ob=e;this.Db=j;this.Jb=n;j=this.tb;n="";a=0;for(c=j.length;a<c;a++)n+='<span class="vjs-tt-cue">'+j[a].text+"</span>";this.b.innerHTML=n;this.l("cuechange")}}};s.reset=function(){this.Wa=0;this.Ob=this.c.duration();this.Jb=this.Db=0};t.Vb=t.B.extend();t.Vb.prototype.G="captions";t.cc=t.B.extend();t.cc.prototype.G="subtitles";t.Wb=t.B.extend();t.Wb.prototype.G="chapters";
t.ec=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);if(a.k.tracks&&0<a.k.tracks.length){c=this.c;a=a.k.tracks;for(var e=0;e<a.length;e++)d=a[e],ma(c,d.kind,d.label,d.language,d)}}});t.ec.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.$=t.H.extend({i:function(a,c){var d=this.ea=c.track;c.label=d.label();c.selected=d.Ab();t.H.call(this,a,c);this.c.d(d.J()+"trackchange",t.bind(this,this.update))}});
t.$.prototype.r=function(){t.H.prototype.r.call(this);Y(this.c,this.ea.T,this.ea.J())};t.$.prototype.update=function(){this.selected(2==this.ea.mode())};t.mb=t.$.extend({i:function(a,c){c.track={J:function(){return c.kind},j:a,label:function(){return c.kind+" off"},Ab:r(l),mode:r(l)};t.$.call(this,a,c);this.selected(f)}});t.mb.prototype.r=function(){t.$.prototype.r.call(this);Y(this.c,this.ea.T,this.ea.J())};
t.mb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.J()==this.ea.J()&&2==e.mode()&&(g=l);this.selected(g)};t.U=t.K.extend({i:function(a,c){t.K.call(this,a,c);1>=this.N.length&&this.V()}});t.U.prototype.va=function(){var a=[],c;a.push(new t.mb(this.c,{kind:this.G}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}));return a};
t.Ga=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);this.b.setAttribute("aria-label","Captions Menu")}});t.Ga.prototype.G="captions";t.Ga.prototype.ta="Captions";t.Ga.prototype.className="vjs-captions-button";t.Ma=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);this.b.setAttribute("aria-label","Subtitles Menu")}});t.Ma.prototype.G="subtitles";t.Ma.prototype.ta="Subtitles";t.Ma.prototype.className="vjs-subtitles-button";
t.Ha=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);this.b.setAttribute("aria-label","Chapters Menu")}});s=t.Ha.prototype;s.G="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.va=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}));return a};
s.wa=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,h=this.N=[];c<d;c++)if(e=a[c],e.J()==this.G)if(0===e.readyState())e.load(),e.d("loaded",t.bind(this,this.wa));else{g=e;break}a=this.Aa;a===b&&(a=new t.ha(this.c),a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.G),de:-1})));if(g){e=g.ba;for(var j,c=0,d=e.length;c<d;c++)j=e[c],j=new t.gb(this.c,{track:g,cue:j}),h.push(j),a.Q(j);this.Q(a)}0<this.N.length&&this.show();return a};
t.gb=t.H.extend({i:function(a,c){var d=this.ea=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.xa;t.H.call(this,a,c);d.d("cuechange",t.bind(this,this.update))}});t.gb.prototype.r=function(){t.H.prototype.r.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.gb.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.xa)};
t.h.z(t.Ia.prototype.k.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var j,n,q=a[e];if(q&&"object"===typeof q)for(j in q)Object.prototype.hasOwnProperty.call(q,j)&&(n=d(q,j),n!==b?q[j]=n:delete q[j]);return c.call(a,e,q)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.ic=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==k&&(a=t.JSON.parse(a||"{}"),videojs(c,a)));else{t.ub();break}else t.Rc||t.ub()};t.ub=function(){setTimeout(t.ic,1)};"complete"===document.readyState?t.Rc=f:t.W(window,"load",function(){t.Rc=f});t.ub();t.Ud=function(a,c){t.Player.prototype[a]=c};var pa=this;function $(a,c){var d=a.split("."),e=pa;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ba);$("videojs.TOUCH_ENABLED",t.dc);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.j;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.i;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.ja;t.a.prototype.el=t.a.prototype.v;t.a.prototype.addChild=t.a.prototype.Q;
t.a.prototype.getChild=t.a.prototype.ka;t.a.prototype.getChildById=t.a.prototype.wd;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.uc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.d;t.a.prototype.off=t.a.prototype.o;t.a.prototype.one=t.a.prototype.W;t.a.prototype.trigger=t.a.prototype.l;t.a.prototype.triggerReady=t.a.prototype.Fa;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.V;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.pd;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.n;t.a.prototype.removeClass=t.a.prototype.p;t.a.prototype.buildCSSClass=t.a.prototype.S;t.a.prototype.localize=t.a.prototype.s;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.oc;t.Player.prototype.exitFullWindow=t.Player.prototype.Cb;
t.Player.prototype.preload=t.Player.prototype.Ca;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Da;t.Player.prototype.currentType=t.Player.prototype.Ra;t.Player.prototype.requestFullScreen=t.Player.prototype.Ra;t.Player.prototype.cancelFullScreen=t.Player.prototype.Ra;t.Player.prototype.isFullScreen=t.Player.prototype.Ra;$("videojs.MediaLoader",t.ad);$("videojs.TextTrackDisplay",t.ec);$("videojs.ControlBar",t.Ia);
$("videojs.Button",t.t);$("videojs.PlayToggle",t.$b);$("videojs.FullscreenToggle",t.Ja);$("videojs.BigPlayButton",t.fb);$("videojs.LoadingSpinner",t.Yb);$("videojs.CurrentTimeDisplay",t.hb);$("videojs.DurationDisplay",t.ib);$("videojs.TimeDivider",t.fc);$("videojs.RemainingTimeDisplay",t.pb);$("videojs.LiveDisplay",t.Xb);$("videojs.ErrorDisplay",t.jb);$("videojs.Slider",t.P);$("videojs.ProgressControl",t.ob);$("videojs.SeekBar",t.bc);$("videojs.LoadProgressBar",t.lb);$("videojs.PlayProgressBar",t.Zb);
$("videojs.SeekHandle",t.La);$("videojs.VolumeControl",t.rb);$("videojs.VolumeBar",t.qb);$("videojs.VolumeLevel",t.gc);$("videojs.VolumeMenuButton",t.ra);$("videojs.VolumeHandle",t.sb);$("videojs.MuteToggle",t.ia);$("videojs.PosterImage",t.Ka);$("videojs.Menu",t.ha);$("videojs.MenuItem",t.H);$("videojs.MenuButton",t.K);$("videojs.PlaybackRateMenuButton",t.ac);t.K.prototype.createItems=t.K.prototype.va;t.U.prototype.createItems=t.U.prototype.va;t.Ha.prototype.createItems=t.Ha.prototype.va;
$("videojs.SubtitlesButton",t.Ma);$("videojs.CaptionsButton",t.Ga);$("videojs.ChaptersButton",t.Ha);$("videojs.MediaTechController",t.q);t.q.prototype.featuresVolumeControl=t.q.prototype.qe;t.q.prototype.featuresFullscreenResize=t.q.prototype.me;t.q.prototype.featuresPlaybackRate=t.q.prototype.ne;t.q.prototype.featuresProgressEvents=t.q.prototype.oe;t.q.prototype.featuresTimeupdateEvents=t.q.prototype.pe;t.q.prototype.setPoster=t.q.prototype.Ic;$("videojs.Html5",t.g);t.g.Events=t.g.kb;
t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.vb;t.g.patchCanPlayType=t.g.Ac;t.g.unpatchCanPlayType=t.g.he;t.g.prototype.setCurrentTime=t.g.prototype.Pb;t.g.prototype.setVolume=t.g.prototype.be;t.g.prototype.setMuted=t.g.prototype.Zd;t.g.prototype.setPreload=t.g.prototype.ae;t.g.prototype.setAutoplay=t.g.prototype.Wd;t.g.prototype.setLoop=t.g.prototype.Yd;t.g.prototype.enterFullScreen=t.g.prototype.nc;t.g.prototype.exitFullScreen=t.g.prototype.td;t.g.prototype.playbackRate=t.g.prototype.playbackRate;
t.g.prototype.setPlaybackRate=t.g.prototype.$d;$("videojs.Flash",t.f);t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.vb;t.f.onReady=t.f.onReady;$("videojs.TextTrack",t.B);t.B.prototype.label=t.B.prototype.label;t.B.prototype.kind=t.B.prototype.J;t.B.prototype.mode=t.B.prototype.mode;t.B.prototype.cues=t.B.prototype.ld;t.B.prototype.activeCues=t.B.prototype.cd;$("videojs.CaptionsTrack",t.Vb);$("videojs.SubtitlesTrack",t.cc);$("videojs.ChaptersTrack",t.Wb);$("videojs.autoSetup",t.ic);
$("videojs.plugin",t.Ud);$("videojs.createTimeRange",t.zb);$("videojs.util",t.ga);t.ga.mergeOptions=t.ga.Va;t.addLanguage=t.dd;})();



(function($){

	/*
	    BigVideo - The jQuery Plugin for Big Background Video (and Images)
	    by John Polacek (@johnpolacek)

	    Dual licensed under MIT and GPL.

	    Dependencies: jQuery, jQuery UI (Slider), Video.js, ImagesLoaded
	*/

	(function (factory) {
	    'use strict';
	    if (typeof define === 'function' && define.amd) {
	        // Register as an anonymous AMD module:
	        define([
	            'jquery',
	            'videojs',
	            'imagesloaded',
	            'jquery-ui'
	        ], factory);
	    } else {
	        factory(jQuery, videojs);
	    }
	})(function($, videojs) {

	    $.BigVideo = function(options) {

	        var defaults = {
	            // If you want to use a single mp4 source, set as true
	            useFlashForFirefox:true,
	            // If you are doing a playlist, the video won't play the first time
	            // on a touchscreen unless the play event is attached to a user click
	            forceAutoplay:false,
	            controls:false,
	            doLoop:false,
	            container:$('body'),
	            shrinkable:false
	        };

	        var BigVideo = this,
	            player,
	            vidEl = '#big-video-vid',
	            wrap = $('<div id="big-video-wrap"></div>'),
	            video = $(''),
	            mediaAspect = 16/9,
	            vidDur = 0,
	            defaultVolume = 0.8,
	            isInitialized = false,
	            isSeeking = false,
	            isPlaying = false,
	            isQueued = false,
	            isAmbient = false,
	            playlist = [],
	            currMediaIndex,
	            currMediaType;

	        var settings = $.extend({}, defaults, options);

	        function updateSize() {
	            var containerW = settings.container.outerWidth() < $(window).width() ? settings.container.outerWidth() : $(window).width(),
	                containerH = settings.container.outerHeight() < $(window).height() ? settings.container.outerHeight() : $(window).height(),
	                containerAspect = containerW/containerH;

	            if (settings.container.is($('body'))) {
	                $('html,body').css('height',$(window).height() > $('body').css('height','auto').height() ? '100%' : 'auto');
	            }

	            if (containerAspect < mediaAspect) {
	                // taller
	                if (currMediaType == 'video') {
	                    player
	                        .width(containerH*mediaAspect)
	                        .height(containerH);
	                    if (!settings.shrinkable) {
	                        $(vidEl)
	                            .css('top',0)
	                            .css('left',-(containerH*mediaAspect-containerW)/2)
	                            .css('height',containerH);
	                    } else {
	                        $(vidEl)
	                            .css('top',-(containerW/mediaAspect-containerH)/2)
	                            .css('left',0)
	                            .css('height',containerW/mediaAspect);
	                    }
	                    $(vidEl+'_html5_api')
	                        .css('width',containerH*mediaAspect)
	                        .css('height',containerH);
	                    $(vidEl+'_flash_api')
	                        .css('width',containerH*mediaAspect)
	                        .css('height',containerH);
	                } else {
	                    // is image
	                    $('#big-video-image')
	                        .css({
	                            width: 'auto',
	                            height: containerH,
	                            top:0,
	                            left:-(containerH*mediaAspect-containerW)/2
	                        });
	                }
	            } else {
	                // wider
	                if (currMediaType == 'video') {
	                    player
	                        .width(containerW)
	                        .height(containerW/mediaAspect);
	                    $(vidEl)
	                        .css('top',-(containerW/mediaAspect-containerH)/2)
	                        .css('left',0)
	                        .css('height',containerW/mediaAspect);
	                    $(vidEl+'_html5_api')
	                        .css('width',$(vidEl+'_html5_api').parent().width()+"px")
	                        .css('height','auto');
	                    $(vidEl+'_flash_api')
	                        .css('width',containerW)
	                        .css('height',containerW/mediaAspect);
	                } else {
	                    // is image
	                    $('#big-video-image')
	                        .css({
	                            width: containerW,
	                            height: 'auto',
	                            top:-(containerW/mediaAspect-containerH)/2,
	                            left:0
	                        });
	                }
	            }
	        }

	        function initPlayControl() {
	            // create video controls
	            var markup = ''+
	                '<div id="big-video-control-container">'+
	                    '<div id="big-video-control">'+
	                        '<a href="#" id="big-video-control-play"></a>'+
	                        '<div id="big-video-control-middle">'+
	                            '<div id="big-video-control-bar">'+
	                                '<div id="big-video-control-bound-left"></div>'+
	                                '<div id="big-video-control-progress"></div>'+
	                                '<div id="big-video-control-track"></div>'+
	                                '<div id="big-video-control-bound-right"></div>'+
	                            '</div>'+
	                        '</div>'+
	                    '   <div id="big-video-control-timer"></div>'+
	                    '</div>'+
	                '</div>';
	            settings.container.append(markup);

	            // hide until playVideo
	            $('#big-video-control-container').css('display','none');
	            $('#big-video-control-timer').css('display','none');

	            // add events
	            $('#big-video-control-track').slider({
	                animate: true,
	                step: 0.01,
	                slide: function(e,ui) {
	                    isSeeking = true;
	                    $('#big-video-control-progress').css('width',(ui.value-0.16)+'%');
	                    player.currentTime((ui.value/100)*player.duration());
	                },
	                stop:function(e,ui) {
	                    isSeeking = false;
	                    player.currentTime((ui.value/100)*player.duration());
	                }
	            });
	            $('#big-video-control-bar').click(function(e) {
	                player.currentTime((e.offsetX/$(this).width())*player.duration());
	            });
	            $('#big-video-control-play').click(function(e) {
	                e.preventDefault();
	                playControl('toggle');
	            });
	            player.on('timeupdate', function() {
	                if (!isSeeking && (player.currentTime()/player.duration())) {
	                    var currTime = player.currentTime();
	                    var minutes = Math.floor(currTime/60);
	                    var seconds = Math.floor(currTime) - (60*minutes);
	                    if (seconds < 10) seconds='0'+seconds;
	                    var progress = player.currentTime()/player.duration()*100;
	                    $('#big-video-control-track').slider('value',progress);
	                    $('#big-video-control-progress').css('width',(progress-0.16)+'%');
	                    $('#big-video-control-timer').text(minutes+':'+seconds+'/'+vidDur);
	                }
	            });
	        }

	        function playControl(a) {
	            var action = a || 'toggle';
	            if (action == 'toggle') action = isPlaying ? 'pause' : 'play';
	            if (action == 'pause') {
	                player.pause();
	                $('#big-video-control-play').css('background-position','-16px');
	                isPlaying = false;

	            } else if (action == 'play') {
	                player.play();
	                $('#big-video-control-play').css('background-position','0');
	                isPlaying = true;
	            } else if (action == 'skip') {
	                nextMedia();
	            }
	        }

	        function setUpAutoPlay() {
	            player.play();
	            settings.container.off('click',setUpAutoPlay);
	        }

	        function nextMedia() {
	            currMediaIndex++;
	            if (currMediaIndex === playlist.length) currMediaIndex=0;
	            playVideo(playlist[currMediaIndex]);
	        }

	        function playVideo(source) {

	            // clear image
	            $(vidEl).css('display','block');
	            currMediaType = 'video';
	            player.src(source);
	            isPlaying = true;
	            if (isAmbient) {
	                $('#big-video-control-container').css('display','none');
	                player.ready(function(){
	                    player.volume(0);
	                });
	                doLoop = true;
	            } else {
	                $('#big-video-control-container').css('display','block');
	                player.ready(function(){
	                    player.volume(defaultVolume);
	                });
	                doLoop = false;
	            }
	            $('#big-video-image').css('display','none');
	            $(vidEl).css('display','block');
	        }

	        function showPoster(source) {
	            // remove old image
	            $('#big-video-image').remove();

	            // hide video
	            player.pause();
	            $(vidEl).css('display','none');
	            $('#big-video-control-container').css('display','none');

	            // show image
	            currMediaType = 'image';
	            var bgImage = $('<img id="big-video-image" src='+source+' />');
	            wrap.append(bgImage);

	            $('#big-video-image').imagesLoaded(function() {
	                mediaAspect = $('#big-video-image').width() / $('#big-video-image').height();
	                updateSize();
	            });
	        }

	        BigVideo.init = function() {
	            if (!isInitialized) {
	                // create player
	                settings.container.prepend(wrap);
	                var autoPlayString = settings.forceAutoplay ? 'autoplay' : '';
	                player = $('<video id="'+vidEl.substr(1)+'" class="video-js vjs-default-skin" preload="auto" data-setup="{}" '+autoPlayString+' webkit-playsinline></video>');
	                player.css('position','absolute');
	                wrap.append(player);

	                var videoTechOrder = ['html5','flash'];
	                // If only using mp4s and on firefox, use flash fallback
	                var ua = navigator.userAgent.toLowerCase();
	                var isFirefox = ua.indexOf('firefox') != -1;
	                if (settings.useFlashForFirefox && (isFirefox)) {
	                    videoTechOrder = ['flash', 'html5'];
	                }
	                player = videojs(vidEl.substr(1), {
	                    controls:false,
	                    autoplay:true,
	                    preload:'auto',
	                    techOrder:videoTechOrder
	                });

	                // add controls
	                if (settings.controls) initPlayControl();

	                // set initial state
	                updateSize();
	                isInitialized = true;
	                isPlaying = false;

	                if (settings.forceAutoplay) {
	                    $('body').on('click', setUpAutoPlay);
	                }

	                $('#big-video-vid_flash_api')
	                    .attr('scale','noborder')
	                    .attr('width','100%')
	                    .attr('height','100%');

	                // set events
	                $(window).on('resize.bigvideo', function() {
	                    updateSize();
	                });

	                player.on('loadedmetadata', function(data) {
	                    if (document.getElementById('big-video-vid_flash_api')) {
	                        // use flash callback to get mediaAspect ratio
	                        mediaAspect = document.getElementById('big-video-vid_flash_api').vjs_getProperty('videoWidth')/document.getElementById('big-video-vid_flash_api').vjs_getProperty('videoHeight');
	                    } else {
	                        // use html5 player to get mediaAspect
	                        mediaAspect = $('#big-video-vid_html5_api').prop('videoWidth')/$('#big-video-vid_html5_api').prop('videoHeight');
	                    }
	                    updateSize();
	                    var dur = Math.round(player.duration());
	                    var durMinutes = Math.floor(dur/60);
	                    var durSeconds = dur - durMinutes*60;
	                    if (durSeconds < 10) durSeconds='0'+durSeconds;
	                    vidDur = durMinutes+':'+durSeconds;
	                });

	                player.on('ended', function() {
	                    if (settings.doLoop) {
	                        player.currentTime(0);
	                        player.play();
	                    }
	                    if (isQueued) {
	                        nextMedia();
	                    }
	                });
	            }
	        };

	        /**
	         * Show video or image file
	         *
	         * @param source: The file to show, can be:
	         *      - an array with objects for video files types
	         *      - a string to a single video file
	         *      - a string to a image file
	         * @param options: An object with those possible attributes:
	         *      - boolean "ambient" to set video to loop
	         *      - function onShown
	         */
	        BigVideo.show = function(source,options) {
	            if (options === undefined) options = {};
	            isAmbient = options.ambient === true;
	            if (isAmbient || options.doLoop) settings.doLoop = true;

	            if (typeof(source) === 'string') {
	                // if input was a string, try show that image or video
	                var ext = ( source.lastIndexOf('?') > 0 ) ? source.substring(source.lastIndexOf('.')+1, source.lastIndexOf('?')) : source.substring( source.lastIndexOf('.')+1);
	                if (ext == 'jpg' || ext == 'gif' || ext == 'png') {
	                    showPoster(source);
	                } else if (ext == 'mp4' || ext == 'ogg' || ext == 'ogv'|| ext == 'webm') {
	                    playVideo(source);
	                    if (options.onShown) options.onShown();
	                    isQueued = false;
	                }
	            } else if ($.isArray(source)) {
	                // if the input was an array, pass it to videojs
	                playVideo(source);
	            } else if (typeof(source) === "object" && source.src && source.type) {
	                // if the input was an object with valid attributes, wrap it in an
	                // array and pass it to videojs
	                playVideo([source]);
	            } else {
	                // fail without valid input
	                throw("BigVideo.show received invalid input for parameter source");
	            }
	        };

	        /**
	         * Show a playlist of video files
	         *
	         * @param files: array of elements to pass to BigVideo.show in sequence
	         * @param options: An object with those possible attributes:
	         *      - boolean "ambient" to set video to loop
	         *      - function onShown
	         */
	        BigVideo.showPlaylist = function (files, options) {
	            if (!$.isArray(files)) {
	                throw("BigVideo.showPlaylist parameter files accepts only arrays");
	            }

	            if (options === undefined) options = {};
	            isAmbient = options.ambient === true;
	            if (isAmbient || options.doLoop) settings.doLoop = true;

	            playlist = files;
	            currMediaIndex = 0;
	            this.show(playlist[currMediaIndex]);
	            if (options.onShown) options.onShown();
	            isQueued = true;
	        };

	        // Expose Video.js player
	        BigVideo.getPlayer = function() {
	            return player;
	        };

	        // Remove/dispose the player
	        BigVideo.remove = BigVideo.dispose = function() {
	            isInitialized = false;

	            wrap.remove();
	            $(window).off('resize.bigvideo');

	            if(player) {
	                player.off('loadedmetadata');
	                player.off('ended');
	                player.dispose();
	            }
	        };

	        // Expose BigVideoJS player actions play, pause, skip (if a playlist is available)
	        // Example: BigVideo.triggerPlayer('skip')
	        BigVideo.triggerPlayer = function(action){
	            playControl(action);
	        };

	    };
	});

	$.fn.getTweet = function(username, numberOfTweets, options){
		$.fn.getTweet.defaults = {
				"username" : "jcutrell",
				"numberOfTweets" : "1"
		}
		if ($.isPlainObject(username) && username != null){ options = $.extend({}, username) }
		else if ($.isPlainObject(numberOfTweets && numberOfTweets != null )){ options = $.extend({}, numberOfTweets); options.username = username;}
		else { options = {}; options.username = username; options.numberOfTweets = numberOfTweets };
		var opts = $.extend({}, $.fn.getTweet.defaults, options);
		return this.each(function(){
			var that = $(this);
			var jsonurl = location.protocol + "//api.twitter.com/1/statuses/user_timeline/"+ opts.username +".json?count=" + opts.numberOfTweets + "&callback=?";
			$.getJSON(jsonurl, function(data){
				var html = '';
				if (opts.numberOfTweets > 1){
					html = "<ul id='getTweet'>";
					$.each(data, function(index, item){
						var tweet = item.text.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/g, "<a href='$1'>$1</a>");
						tweet = tweet.replace(/(?:^|\s)#([^\s]+)/g, "<a href='http://search.twitter.com/search?q=%23$1'> #$1</a> ");
						tweet = tweet.replace(/@([^\s]+)/g, '<a href="http://twitter.com/$1">@$1</a>');
						html += "<li class='tweet'>" + tweet + "</li>";
					});
					html += "</ul>";
				} else if (opts.numberOfTweets = 1) {
					tweettext = data[0].text;
					var tweet = tweettext.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/g, "<a href='$1'>$1</a>");
					var	html =  tweet.replace(/(?:^|\s)#([^\s]+)\s/g, "<a href='http://search.twitter.com/search?q=%23$1'> #$1</a> ");
						html = tweet.replace(/@([^\s]+)/g, '<a href="http://twitter.com/$1">@$1</a>');
				}
				that.html(html);
			});
		});
	}
	
	
	
//developer	
	$.getTweet = function(username, numberOfTweets, callback, options){
		$.getTweet.defaults = {
				"username" : "jcutrell",
				"numberOfTweets" : "1",
				"callback" : ''
		}
		$.getTweet.api = {}
		var options = $.extend({}, $.getTweet.defaults);
		if (!($.isFunction(username)) && $.isPlainObject(username) && username != null)
			{ options = $.extend({}, username) }
		else if($.isFunction(username))
			{options.callback = username}
			if($.isArray(username)){
				options.numberOfTweets = username;}
		if (!($.isFunction(numberOfTweets)) && $.isPlainObject(numberOfTweets) && numberOfTweets != null )
			{ options = $.extend({}, numberOfTweets); options.username = username;}
		else if($.isFunction(numberOfTweets))
			{options.callback = numberOfTweets; options.username = username}
		else if (!($.isFunction(callback)) && $.isPlainObject(callback) && callback != null )
			{ options = $.extend({}, callback); options.numberOfTweets = numberOfTweets; options.username = username;}
		else {
			var options = {}
			options.username = username;
			options.numberOfTweets = numberOfTweets;
			options.callback = callback;
			options.totalTweets = numberOfTweets;
		}
		if($.isArray(numberOfTweets)){
				options.totalTweets = Math.max(options.numberOfTweets[0], options.numberOfTweets[1]) + 1;
			} else {
				options.totalTweets = numberOfTweets;
			}
		var opts = $.extend({}, $.getTweet.defaults, options);
		var jsonurl = location.protocol + "//api.twitter.com/1/statuses/user_timeline/"+ opts.username +".json?count=" + opts.totalTweets + "&callback=?";
		$.getJSON(jsonurl, function(data){
			returnval = [];
			$.getTweet.api = data;
				if (opts.numberOfTweets > 1 && !($.isArray(opts.numberOfTweets))){
					$.each(data, function(index, item){
						returnval[index] = item.text;
					});
				} else if (opts.numberOfTweets == 1 && !($.isArray(opts.numberOfTweets))) {
					returnval[0] = data[0].text;
				} else {
					var start = opts.numberOfTweets[0],
						end = data.length-1;
						if (start > end){
							end = opts.numberOfTweets[0];
							start = opts.numberOfTweets[1];
							var reverse = true;
						}
						var i = start;
						for (var i = start; i <= end; i++){
								if(data[i]){
									returnval[(i-start)] = data[i].text;
							}
						}
						if (reverse){
							returnval = returnval.reverse();
						}
				}
				// if opts.callback has been defined, execute it;
				if(opts.callback != '' && $.isFunction(opts.callback)){
					opts.callback(returnval);
				};
			});
	};

})(jQuery);
// ColorBox v1.3.20.1 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,

		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',
	
	// Special Handling for IE
	isIE = !$.support.opacity && !$.support.style, // IE7 & IE8
	isIE6 = isIE && !window.XMLHttpRequest, // IE6
	event_ie6 = prefix + '_IE6',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? winWidth() : winHeight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
	function isImage(url) {
		return settings.photo || /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(url);
	}
	
	function winWidth() {
		// $(window).width() is incorrect for some mobile browsers, but
		// window.innerWidth is unsupported in IE8 and lower.
		return window.innerWidth || $window.width();
	}

	function winHeight() {
		return window.innerHeight || $window.height();
	}

	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object');
			}
		} else {
			settings = $.extend({}, data);
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || $(element).data('rel') || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		$.event.trigger(event);
		if (callback) {
			callback.call(element);
		}
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		start,
		stop,
		clear;
		
		if (settings.slideshow && $related[1]) {
			start = function () {
				$slideshow
					.text(settings.slideshowStop)
					.unbind(click)
					.bind(event_complete, function () {
						if (settings.loop || $related[index + 1]) {
							timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
						}
					})
					.bind(event_load, function () {
						clearTimeout(timeOut);
					})
					.one(click + ' ' + event_cleanup, stop);
				$box.removeClass(className + "off").addClass(className + "on");
				timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
			};
			
			stop = function () {
				clearTimeout(timeOut);
				$slideshow
					.text(settings.slideshowStart)
					.unbind([event_complete, event_load, event_cleanup, click].join(' '))
					.one(click, function () {
						publicMethod.next();
						start();
					});
				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		} else {
			$box.removeClass(className + "off " + className + "on");
		}
	}

	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox),
						relRelated;

					if (data) {
						relRelated =  $(this).data('rel') || data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to ColorBox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				$box.show();
				
				if (settings.returnFocus) {
					$(element).blur().one(event_closed, function () {
						$(this).focus();
					});
				}
				
				// +settings.opacity avoids a problem in IE when using non-zero-prefixed-string-values, like '.5'
				$overlay.css({"opacity": +settings.opacity, "cursor": settings.overlayClose ? "pointer" : "auto"}).show();
				
				// Opens inital empty ColorBox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position();
				
				if (isIE6) {
					$window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
						$overlay.css({width: winWidth(), height: winHeight(), top: $window.scrollTop(), left: $window.scrollLeft()});
					}).trigger('resize.' + event_ie6);
				}
				
				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();
				
				$close.html(settings.close).show();
			}
			
			publicMethod.load(true);
		}
	}

	// ColorBox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;

			$window = $(window);
			$box = $tag(div).attr({id: colorbox, 'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE') : ''}).hide();
			$overlay = $tag(div, "Overlay", isIE6 ? 'position:absolute' : '').hide();
			$loadingOverlay = $tag(div, "LoadingOverlay").add($tag(div, "LoadingGraphic"));
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$loaded = $tag(div, "LoadedContent", 'width:0; height:0; overflow:hidden'),
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$next = $tag(div, "Next"),
				$prev = $tag(div, "Previous"),
				$slideshow = $tag(div, "Slideshow").bind(event_open, slideshow),
				$close = $tag(div, "Close")
			);
			
			$wrap.append( // The 3x3 Grid that makes up ColorBox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add ColorBox's event bindings
	function addBindings() {
		if ($box) {
			if (!init) {
				init = true;

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();//Subtraction needed for IE6
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);
				
				// Setting padding to remove the need to do size conversions during the animation step.
				$box.css({"padding-bottom": interfaceHeight, "padding-right": interfaceWidth});

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1]) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				$('.' + boxElement, document).live('click', function (e) {
					// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
					// See: http://jacklmoore.com/notes/click-events/
					if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
						e.preventDefault();
						launch(this);
					}
				});
			}
			return true;
		}
		return false;
	}

	// Don't do anything if ColorBox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.fn.colorbox.close();
	// Usage from within an iframe: parent.$.fn.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if (!$this[0]) {
				if ($this.selector) { // if a selector was given and it didn't match any elements, go ahead and exit.
					return $this;
				}
				// if no selector was given (ie. $.colorbox()), create a temporary element to work with
				$this = $('<a/>');
				options.open = true; // assume an immediate open
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed && !isIE6) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max(winWidth() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max(winWidth() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max(winHeight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max(winHeight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left});

		// setting the speed to 0 to reduce the delay between same-sized content.
		speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height;
		}

		css = {width: settings.w + loadedWidth, height: settings.h + loadedHeight, top: top, left: left};
		if(speed===0){ // temporary workaround to side-step jQuery-UI 1.8 bug (http://bugs.jquery.com/ticket/12273)
			$box.css(css);
		}
		$box.dequeue().animate(css, {
			duration: speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}
			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}
			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}
			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}
			if (!options.innerHeight && !options.height) {
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}
			$loaded.css({height: settings.h});
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;
		
		$loaded.remove();
		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		//$(photo).css({'float': 'none', marginLeft: 'auto', marginRight: 'auto'});
		
		$(photo).css({'float': 'none'});
		
		// Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
		if (isIE6) {
			$('select').not($box.find('select')).filter(function () {
				return this.style.visibility !== 'hidden';
			}).css({'visibility': 'hidden'}).one(event_cleanup, function () {
				this.style.visibility = 'inherit';
			});
		}
		
		callback = function () {
			var preload,
				i,
				total = $related.length,
				iframe,
				frameBorder = 'frameBorder',
				allowTransparency = 'allowTransparency',
				complete,
				src,
				img,
				data;
			
			if (!open) {
				return;
			}
			
			function removeFilter() {
				if (isIE) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				// Detaching forces Andriod stock browser to redraw the area underneat the loading overlay.  Hiding alone isn't enough.
				$loadingOverlay.detach().hide();
				trigger(event_complete, settings.onComplete);
			};
			
			if (isIE) {
				//This fadeIn helps the bicubic resampling to kick-in.
				if (photo) {
					$loaded.fadeIn(100);
				}
			}
			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				if (settings.slideshow) {
					$slideshow.show();
				}
				
				// Preloads images within a rel group
				if (settings.preloading) {
					preload = [
						getIndex(-1),
						getIndex(1)
					];
					while (i = $related[preload.pop()]) {
						data = $.data(i, colorbox);
						
						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = i.href;
						}

						if (isImage(src)) {
							img = new Image();
							img.src = src;
						}
					}
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}
				// give the iframe a unique name to prevent caching
				iframe.name = prefix + (+new Date());
				if (settings.fastIframe) {
					complete();
				} else {
					$(iframe).one('load', complete);
				}
				iframe.src = settings.href;
				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				$(iframe).addClass(prefix + 'Iframe').appendTo($loaded).one(event_purge, function () {
					iframe.src = "//about:blank";
				});
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	publicMethod.load = function (launched) {
		var href, setResize, prep = publicMethod.prep;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		if (!launched) {
			makeSettings();
		}
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show().appendTo($content);
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when ColorBox closes or loads new content.
			$tag(div).hide().insertBefore($(href)[0]).one(event_purge, function () {
				$(this).replaceWith($loaded.children());
			});
			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(href)) {
			$(photo = new Image())
			.addClass(prefix + 'Photo')
			.error(function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.load(function () {
				var percent;
				photo.onload = null; //stops animated gifs from firing the onload repeatedly.
				
				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.h - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}
				
				if (isIE) {
					photo.style.msInterpolationMode = 'bicubic';
				}
				
				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status, xhr) {
				prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
			});
		}
	};
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			publicMethod.load();
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			publicMethod.load();
		}
	};

	// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix + ' .' + event_ie6);
			
			$overlay.fadeTo(200, 0);
			
			$box.stop().fadeTo(300, 0, function () {
			
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes ColorBox made to the document, but does not remove the plugin
	// from jQuery.
	publicMethod.remove = function () {
		$([]).add($box).add($overlay).remove();
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement)
			.die();
	};

	// A method for fetching the current element ColorBox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, this));


/**
 * @preserve Copyright 2011 Syd Lawrence ( www.sydlawrence.com ).
 * Version: 0.2
 *
 * Licensed under MIT and GPLv2.
 *
 * Usage: $('body').videoBG(options);
 *
 */

 (function( $ ){

  $.fn.videoBG = function( selector, options ) {
    if (options === undefined) {
      options = {};
    }
    if (typeof selector === "object") {
      options = $.extend({}, $.fn.videoBG.defaults, selector);
    }
    else if (!selector) {
      options = $.fn.videoBG.defaults;
    }
    else {
      return $(selector).videoBG(options);
    }

    var container = $(this);

    // check if elements available otherwise it will cause issues
    if (!container.length) {
      return;
    }

    // container to be at least relative
    if (container.css('position') == 'static' || !container.css('position')) {
      container.css('position','relative');
    }

    // we need a width
    if (options.width === 0) {
      options.width = container.width();
    }

    // we need a height
    if (options.height === 0) {
      options.height = container.height();
    }

    // get the wrapper
    var wrap = $.fn.videoBG.wrapper();
    wrap.height(options.height)
      .width(options.width);

    // if is a text replacement
    if (options.textReplacement) {

      // force sizes
      options.scale = true;

      // set sizes and forcing text out
      container.width(options.width)
        .height(options.height)
        .css('text-indent','-9999px');
    }
    else {

      // set the wrapper above the video
      wrap.css('z-index',options.zIndex+1);
    }

    // move the contents into the wrapper
    wrap.html(container.clone(true));

    // get the video
    var video = $.fn.videoBG.video(options);

    // if we are forcing width / height
    if (options.scale) {

      // overlay wrapper
      wrap.height(options.height)
        .width(options.width);

      // video
      video.height(options.height)
        .width(options.width);
    }

    // add it all to the container
    container.html(wrap);
    container.append(video);

    return video.find("video")[0];
  };

  // set to fullscreen
  $.fn.videoBG.setFullscreen = function($el) {
    var windowWidth = $(window).width(),
    windowHeight = $(window).height();

    $el.css('min-height',0).css('min-width',0);
    $el.parent().width(windowWidth).height(windowHeight);
    // if by width
    var shift = 0;
    if (windowWidth / windowHeight > $el.aspectRatio) {
      $el.width(windowWidth).height('auto');
      // shift the element up
      var height = $el.height();
      shift = (height - windowHeight) / 2;
      if (shift < 0) {
        shift = 0;
      }
      $el.css("top",-shift);
    } else {
      $el.width('auto').height(windowHeight);
      // shift the element left
      var width = $el.width();
      shift = (width - windowWidth) / 2;
      if (shift < 0) {
        shift = 0;
      }
      $el.css("left",-shift);

      // this is a hack mainly due to the iphone
      if (shift === 0) {
        var t = setTimeout(function() {
          $.fn.videoBG.setFullscreen($el);
        },500);
      }
    }

    $('body > .videoBG_wrapper').width(windowWidth).height(windowHeight);

  };

  // get the formatted video element
  $.fn.videoBG.video = function(options) {

    $('html, body').scrollTop(-1);

    // video container
    var $div = $('<div/>');
    $div.addClass('videoBG')
      .css('position',options.position)
      .css('z-index',options.zIndex)
      .css('top',0)
      .css('left',0)
      .css('height',options.height)
      .css('width',options.width)
      .css('opacity',options.opacity)
      .css('overflow','hidden');

    // video element
    var $video = $('<video/>');
    $video.css('position','absolute')
      .css('z-index',options.zIndex)
      .attr('poster',options.poster)
      .css('top',0)
      .css('left',0)
      .css('min-width','100%')
      .css('min-height','100%');

    if (options.autoplay) {
      $video.attr('autoplay',options.autoplay);
    }

    // if fullscreen
    if (options.fullscreen) {
      $video.bind('canplay',function() {
        // set the aspect ratio
        $video.aspectRatio = $video.width() / $video.height();
        $.fn.videoBG.setFullscreen($video);
      });

      // listen out for screenresize
      var resizeTimeout;
      $(window).resize(function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
          $.fn.videoBG.setFullscreen($video);
        },100);
      });
      $.fn.videoBG.setFullscreen($video);
    }


    // video standard element
    var v = $video[0];

    // if meant to loop
    if (options.loop) {
      loops_left = options.loop;

      // cant use the loop attribute as firefox doesnt support it
      $video.bind('ended', function(){

        // if we have some loops to throw
        if (loops_left) {
          // replay that bad boy
          v.play();
        }

        // if not forever
        if (loops_left !== true) {
          // one less loop
          loops_left--;
        }
      });
    }

    // when can play, play
    $video.bind('canplay', function(){

      if (options.autoplay) {
        // replay that bad boy
        v.play();
      }

    });


    // if supports video
    if ($.fn.videoBG.supportsVideo()) {

      // supports webm
      if ($.fn.videoBG.supportType('webm')){

        // play webm
        $video.attr('src',options.webm);
      }
      // supports mp4
      else if ($.fn.videoBG.supportType('mp4')) {

        // play mp4
        $video.attr('src',options.mp4);
      }
      // throw ogv at it then
      else {

        // play ogv
        $video.attr('src',options.ogv);
      }

    }

    // image for those that dont support the video
    var $img = $('<img/>');
    $img.attr('src',options.poster)
      .css('position','absolute')
      .css('z-index',options.zIndex)
      .css('top',0)
      .css('left',0)
      .css('min-width','100%')
      .css('min-height','100%');

    // add the image to the video
    // if suuports video
    if ($.fn.videoBG.supportsVideo()) {
      // add the video to the wrapper
      $div.html($video);
    }

    // nope - whoa old skool
    else {

      // add the image instead
      $div.html($img);
    }

    // if text replacement
    if (options.textReplacement) {

      // force the heights and widths
      $div.css('min-height',1).css('min-width',1);
      $video.css('min-height',1).css('min-width',1);
      $img.css('min-height',1).css('min-width',1);

      $div.height(options.height).width(options.width);
      $video.height(options.height).width(options.width);
      $img.height(options.height).width(options.width);
    }

    if ($.fn.videoBG.supportsVideo()) {
      v.play();
    }
    return $div;
  };

  // check if suuports video
  $.fn.videoBG.supportsVideo = function() {
    return (document.createElement('video').canPlayType);
  };

  // check which type is supported
  $.fn.videoBG.supportType = function(str) {

    // if not at all supported
    if (!$.fn.videoBG.supportsVideo()) {
      return false;
    }

    // create video
    var v = document.createElement('video');

    // check which?
    switch (str) {
      case 'webm' :
        return (v.canPlayType('video/webm; codecs="vp8, vorbis"'));
      case 'mp4' :
        return (v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
      case 'ogv' :
        return (v.canPlayType('video/ogg; codecs="theora, vorbis"'));
    }
    // nope
    return false;
  };

  // get the overlay wrapper
  $.fn.videoBG.wrapper = function() {
    var $wrap = $('<div/>');
    $wrap.addClass('videoBG_wrapper')
      .css('position','absolute')
      .css('top',0)
      .css('left',0);
    return $wrap;
  };

  // these are the defaults
  $.fn.videoBG.defaults = {
    mp4:'',
    ogv:'',
    webm:'',
    poster:'',
    autoplay:true,
    loop:true,
    scale:false,
    position:"absolute",
    opacity:1,
    textReplacement:false,
    zIndex:0,
    width:0,
    height:0,
    fullscreen:false,
    imgFallback:true
  };

})( jQuery );

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


(function($, window){

	var wb = {
    stripePopUp : {
      test : function() {
        return true;
      }, 
      run : function() {
        $('.donate-btn-0').click(function(e) {
          e.preventDefault();
          $('#20-Month-module').submit();
        });
      }
    },
    wordChange151 : {
      test : function() {
        return true;
      },
      run : function() {
        var counter, worsds, wordsLength;
        counter = 0;
        words = ["Family", "Friends", "Loved Ones"];
        wordsLength = words.length - 1;
        setInterval(function() {
          $('.word-context').html(words[counter]);
          if(counter == wordsLength) {
            counter = 0;
          } else {
            counter++;
          }
        }, 4000);
      }
    },
    emailPopUp : {
      test : function() {
        return true;
      },
      run : function() {
      
        setTimeout(function() {
            var popupshown = $.cookie('haveEmail');
            if(popupshown != 'true') {
              $('.popup-wrap').show();
            } else { }
        }, 3000);

        $('.email-close-popup').click(function(e) {
          e.preventDefault();
          $('.popup-wrap').hide();
          $.cookie('haveEmail', 'true', { expires: 7 });
        });

        $('.email-subscribe').click(function(e) {
          e.preventDefault();
          var userEmail = $('.email-subsc').val();

          function isValidEmailAddress(userEmail) {
              var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
              return pattern.test(userEmail);
          };

          if(isValidEmailAddress(userEmail)) { 
            $.cookie('haveEmail', 'true');
            $.post('https://us5.api.mailchimp.com/2.0/lists/subscribe.json?apikey=190d016dbc48432445c983c63d64785c-us5&id=576fd9c645&email[email]='+userEmail+'&double_optin=false&send_welcome=false');
            $('.invalid-email').html('You have successfully been added to the email list.');
            setTimeout(function() {
              $('.popup-wrap').hide();
            }, 2000);
          } else {
            $('.invalid-email').html('Please enter a valid email address.');
          }

        });
      
      }
    },
	  videoLightbox : {
      test : function() {
        return true;
      },
      run : function() {
        if ( $('.video-player-start').length ) {
          $('body').append('<div class="video-player"><div class="player-container"><div class="player-inner-wrap"><div class="iframe-wrapper"><div class="close-btn"></div></div></div></div></div>');
          var vp = $('.video-player'),
           bgvid = $('#big-video-wrap');
          $('body').on('click','.video-player-start',function(event){
             event.preventDefault();
             bgvid.fadeOut(300);
             var url = $(this).attr('href');
             $('body').addClass('video-on');
             vp.css('display','block');
             setTimeout(function(){
                 vp.css('opacity','1');
                 vp.addClass('zoomed');
                 setTimeout(function(){
                     vp.find('.iframe-wrapper').append('<iframe src="'+url+'?autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
                 },500);
             },50);
          });
          vp.on('click','.close-btn',function(event){
             event.preventDefault();
             vp.css('opacity','0').removeClass('zoomed');
             $('body').removeClass('video-on');
             bgvid.fadeIn(300);
             setTimeout(function(){
                 vp.css('display','none');
                 vp.find('iframe').remove();
             },500);
          })
        }
      }
    },
    background_video : {
      test : function () {
        return $('[data-bgvideo-mpfour]').length;
      },
      run : function () {
        var wid = $(window).width();
        if ( wid > 900) {
          $('.full-height').css({
            'height' : '100vh',
            'min-height' : '400px'
          });
          $('[data-bgvideo-mpfour]').each(function(i,e) {
            var mp4_url = $(e).attr('data-bgvideo-mpfour');
            var webm_url = $(e).attr('data-bgvideo-webm');
            $(e).videoBG({
                mp4:mp4_url,
                webm:mp4_url,
                poster:'http://soworldwide.org/wp-content/themes/launchframe-3/assets/img/placeholder-img.jpg',
                scale:true,
                zIndex:0
            });
          });
        } else {
          $('.full-image').css('background-image', 'url(http://soworldwide.org/wp-content/themes/launchframe-3/assets/img/placeholder-img.jpg)');
        }
      }
    },
    searchOrphanages : {
      test : function () {
          return true;
      },
      run : function () {
        $('.search').keyup(function() {
          var n = $(this).val().toUpperCase();
        $('.selection-option').each(function() {
            var i = $(this).data('option');
            i = i.toUpperCase();
            (i.indexOf(n) == 0) ? $(this).show() : $(this).hide();
          });
        });

        $('.filter').click(function() {
          var n = $(this).data('option');
          $('.'+n).siblings().hide();
          $('.'+n).show();
        });

        $('.regions').click(function() {
          $('.issues-options').hide();
          $('.region-options').show();
          $('.selection-option').show();
        });

        $('.issues').click(function() {
          $('.region-options').hide();
          $('.issues-options').show();
          $('.selection-option').show();
        });

        $('.see-more-button').on('click', function(e) {
           e.preventDefault(); 
           var i = $('.search-wrap').height();
           var n = 725;
           $('.search-wrap').css('height', i + n + "px");
        });
      }
    },
    mobileNav : {
      test : function() {
        return true;
      },
      run : function() {
        $('.mobile-nav-trigger').click(function() {
          $('#menu-mobile').toggle();
        });
      }
    },
    staff : {
      test : function () {
        return true;
      },
      run : function () {
        $('.staff').click(function() {
          var img, name, title, content;
          img = $(this).data('image');
          name = $(this).data('name');
          title = $(this).data('title');
          content = $(this).data('content');

          $('.view-staff').css('z-index', '1');
          $('.view-staff').css('opacity', '1');
          $('.view-staff img').attr("src",img);
          $('.view-staff h3').html(name);
          $('.view-staff h5').html(title);
          $('.view-staff p').html(content);
        });

        $('.view-staff i').click(function() {
          $('.view-staff').css('z-index', '-1');
          $('.view-staff').css('opacity', '0');
        });
      }
    },
    donations : {
      test : function () {
        return true;
      },
      run : function () {
        $('#donate-btn').on('click', function(e) {
          e.preventDefault();
          var orphanage = $('#donation-orphanage').val();
          var amount = $('#donation-amount').val();
          var subscription = $('#donation-subscription').is(':checked');
          
          if(subscription == true) {
            isSubscription();
          } else {
            isOneTime();
          }

          function isSubscription() {
            var setAmount = $('.subscription-plan').find('.sc-uea-custom-amount');
            var description = $('.subscription-plan').find('input[name=sc-description]');
            var subscriptionBtn = $('.subscription-plan').find('.sc-payment-btn');

            description.val(orphanage);
            setAmount.val(amount);
            $(subscriptionBtn).click();
          }

          function isOneTime() {
            var setAmount = $('.one-time-plan').find('input[name=sc_uea_custom_amount]');
            var description = $('.one-time-plan').find('input[name=sc-description]');
            var subscriptionBtn = $('.one-time-plan').find('.sc-payment-btn');

            description.val(orphanage);
            setAmount.val(parseInt(amount));
            $(subscriptionBtn).click();
          }
        });
      }
    }
	};

	for (var key in wb){
		if (wb[key].test()){
			wb[key].run();
		}
	}

}(jQuery, window));