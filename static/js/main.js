"use strict";(()=>{function ir(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function bp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fa={duration:.5,overwrite:!1,delay:0},_h,un,Dt,vi=1e8,Et=1/vi,ch=Math.PI*2,b0=ch/4,T0=0,Tp=Math.sqrt,E0=Math.cos,A0=Math.sin,en=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},Ol=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},xh=function(){return typeof window<"u"},El=function(e){return zt(e)||en(e)},Ep=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,w0=/random\([^)]+\)/g,R0=/,\s*/g,mp=/(?:-?\.?\d|\.)+/gi,vh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yh=/[+-]=-?[.\d]+/,C0=/[^,'"\[\]\s]+/gi,P0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,zi,uh,Mh,ti={},Cl={},Ap,wp=function(e){return(Cl=to(e,ti))&&xn},Fl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},da=function(e,t){return!t&&console.warn(e)},Rp=function(e,t){return e&&(ti[e]=t)&&Cl&&(Cl[e]=t)||ti},pa=function(){return 0},I0={suppressEvents:!0,isStart:!0,kill:!1},Al={suppressEvents:!0,kill:!1},L0={suppressEvents:!0},Sh={},Ur=[],hh={},Cp,Vn={},ih={},gp=30,wl=[],bh="",Th=function(e){var t=e[0],n,i;if(Vi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wl.length;i--&&!wl[i].targetTest(t););n=wl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rh(e[i],n)))||e.splice(i,1);return e},Or=function(e){return e._gsap||Th(yi(e))[0]._gsap},Eh=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Ol(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},D0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Pl=function(){var e=Ur.length,t=Ur.slice(0),n,i;for(hh={},Ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ah=function(e){return!!(e._initted||e._startAt||e.add)},Pp=function(e,t,n,i){Ur.length&&!un&&Pl(),e.render(t,n,i||!!(un&&t<0&&Ah(e))),Ur.length&&!un&&Pl()},Ip=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(C0).length<2?t:en(e)?e.trim():e},Lp=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},N0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},to=function(e,t){for(var n in t)e[n]=t[n];return e},_p=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Il=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||Ot,n=e.keyframes?N0(_n(e.keyframes)):ni;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},U0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Dp=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Bl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},O0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},fh=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(Al):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},F0=function s(e){return!e||e._ts&&s(e.parent)},xp=function(e){return e._repeat?no(e._tTime,e=e.duration()+e._rDelay)*e:0},no=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kl=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},zl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kl(e),n._dirty||ls(n,e)),e},Np=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ll(e.rawTime(),t),(!t._dur||xa(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Hi=function(e,t,n,i){return t.parent&&Fr(t),t._start=Ut((sr(n)?n:!n&&Dl(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ot?xi(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dp(e,t,"_first","_last",e._sort?"_start":0),Dl(t)||(e._recent=t),i||Np(e,t),e._ts<0&&zl(e,e._tTime),e},Up=function(e,t){return(ti.ScrollTrigger||Fl("scrollTrigger",t))&&ti.ScrollTrigger.create(t,e)},Op=function(e,t,n,i,r){if(Ih(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cp!==Gn.frame)return Ur.push(e),e._lazy=[r,i],1},B0=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Dl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},k0=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&B0(e)&&!(!e._initted&&Dl(e))||(e._ts<0||e._dp._ts<0)&&!Dl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=xa(0,e._tDur,t),u=no(l,a),e._yoyo&&u&1&&(o=1-o),u!==no(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||un||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Op(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&fh(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fr(e,1),!n&&!un&&(ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},z0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},io=function(e,t,n,i){var r=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ut(o*(r+1)+e._rDelay*r):o,a>0&&!i&&zl(e,e._tTime=e._tDur*a),e.parent&&kl(e),n||ls(e.parent,e),e},vp=function(e){return e instanceof gn?ls(e):io(e,e._dur)},H0={_start:0,endTime:pa,totalDuration:pa},xi=function s(e,t,n){var i=e.labels,r=e._recent||H0,o=e.duration()>=vi?r.endTime(!1):e._dur,a,l,c;return en(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ua=function(e,t,n){var i=sr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;o.immediateRender=Wn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Wt(t[0],o,t[r+1])},Br=function(e,t){return e||e===0?t(e):t},xa=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!en(e)||!(t=P0.exec(e))?"":t[1]},V0=function(e,t,n){return Br(n,function(i){return xa(e,t,i)})},dh=[].slice,Fp=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==zi},G0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return en(i)&&!t||Fp(i,1)?(r=n).push.apply(r,yi(i)):n.push(i)})||n},yi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):en(e)&&!n&&(uh||!ro())?dh.call((t||Mh).querySelectorAll(e),0):_n(e)?G0(e,n):Fp(e)?dh.call(e,0):e?[e]:[]},ph=function(e){return e=yi(e)[0]||da("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yi(t,n.querySelectorAll?n:n===e?da("Invalid scope")||Mh.createElement("div"):e)}},Bp=function(e){return e.sort(function(){return .5-Math.random()})},kp=function(e){if(zt(e))return e;var t=Vi(e)?e:{each:e},n=cs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,M,y,x,A,w,E,C,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,vi])[1],!S){for(E=-vi;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(p=o[g]=[],m=l?Math.min(S,g)*u-.5:i%S,M=S===vi?0:l?g*h/S-.5:i/S|0,E=0,C=vi,w=0;w<g;w++)y=w%S-m,x=M-(w/S|0),p[w]=A=c?Math.abs(c==="y"?x:y):Tp(y*y+x*x),A>E&&(E=A),A<C&&(C=A);i==="random"&&Bp(p),p.max=E-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=hn(t.amount||t.each)||0,n=n&&g<0?nx(n):n}return g=(p[f]-p.min)/p.max||0,Ut(p.b+(n?n(g):g)*p.v)+p.u}},mh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(sr(n)?0:hn(n))}},zp=function(e,t){var n=_n(e),i,r;return!n&&Vi(e)&&(i=n=e.radius||vi,e.values?(e=yi(e.values),(r=!sr(e[0]))&&(i*=i)):e=mh(e.increment)),Br(t,n?zt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=vi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||sr(o)?u:u+hn(o)}:mh(e))},Hp=function(e,t,n,i){return Br(_n(e)?!t:n===!0?!!(n=0):!i,function(){return _n(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},W0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},X0=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},q0=function(e,t,n){return Gp(e,t,0,1,n)},Vp=function(e,t,n){return Br(n,function(i){return e[~~t(i)]})},Y0=function s(e,t,n){var i=t-e;return _n(e)?Vp(e,s(0,e.length),t):Br(n,function(r){return(i+(r-e)%i)%i+e})},Z0=function s(e,t,n){var i=t-e,r=i*2;return _n(e)?Vp(e,s(0,e.length-1),t):Br(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},so=function(e){return e.replace(w0,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(R0);return Hp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gp=function(e,t,n,i,r){var o=t-e,a=i-n;return Br(r,function(l){return n+((l-e)/o*a||0)})},K0=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=en(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(_n(e)&&!_n(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=to(_n(e)?[]:{},e));if(!u){for(l in t)Ch.call(a,e,l,"get",t[l]);r=function(_){return Nh(_,a)||(o?e.p:e)}}}return Br(n,r)},yp=function(e,t,n){var i=e.labels,r=vi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ei=function(e,t,n){var i=e.vars,r=i[t],o=Dt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ur.length&&Pl(),a&&(Dt=a),u=l?r.apply(c,l):r.call(c),Dt=o,u},aa=function(e){return Fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&ei(e,"onInterrupt"),e},eo,Wp=[],Xp=function(e){if(e)if(e=!e.name&&e.default||e,xh()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:pa,render:Nh,add:Ch,kill:fx,modifier:hx,rawVars:0},o={targetTest:0,get:0,getSetter:Hl,aliases:{},register:0};if(ro(),e!==i){if(Vn[t])return;ni(i,ni(Il(e,r),o)),to(i.prototype,to(r,Il(e,o))),Vn[i.prop=t]=i,e.targetTest&&(wl.push(i),Sh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rp(t,i),e.register&&e.register(xn,i,Pn)}else Wp.push(e)},Rt=255,la={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},rh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},qp=function(e,t,n){var i=e?sr(e)?[e>>16,e>>8&Rt,e&Rt]:0:la.black,r,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),la[e])i=la[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Rt,i&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(mp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=rh(l+1/3,r,o),i[1]=rh(l,r,o),i[2]=rh(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(vh),n&&i.length<4&&(i[3]=1),i}else i=e.match(mp)||la.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Rt,o=i[1]/Rt,a=i[2]/Rt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yp=function(e){var t=[],n=[],i=-1;return e.split(rr).forEach(function(r){var o=r.match(hs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Mp=function(e,t,n){var i="",r=(e+i).match(rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=qp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Yp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rr,"1").split(hs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(rr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},rr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in la)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),$0=/hsl[a]?\(/,wh=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=$0.test(t),e[1]=Mp(e[1],n),e[0]=Mp(e[0],n,Yp(e[1])),!0},ma,Gn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,_=function g(p){var m=s()-i,M=p===!0,y,x,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,y=A-o,(y>0||M)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=y+(y>=r?0:r-y),x=1),M||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](A,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Ap&&(!uh&&xh()&&(zi=uh=window,Mh=zi.document||{},ti.gsap=xn,(zi.gsapVersions||(zi.gsapVersions=[])).push(xn.version),wp(Cl||zi.GreenSockGlobals||!zi.gsap&&zi||{}),Wp.forEach(Xp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ma=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ma=0,c=pa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,M){var y=m?function(x,A,w,E){p(x,A,w,E),h.remove(y)}:p;return h.remove(p),a[M?"unshift":"push"](y),ro(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),ro=function(){return!ma&&Gn.wake()},dt={},J0=/^[\d.\-M][\d.\-,\s]/,j0=/["']/g,Q0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(j0,"").trim():+c,i=l.substr(a+1).trim();return t},ex=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},tx=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Q0(t[1])]:ex(e).split(",").map(Ip)):dt._CE&&J0.test(e)?dt._CE("",e):n},nx=function(e){return function(t){return 1-e(1-t)}},cs=function(e,t){return e&&(zt(e)?e:dt[e]||tx(e))||t},ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Cn(e,function(a){dt[a]=ti[a]=r,dt[o=a.toLowerCase()]=n;for(var l in r)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=r[l]}),r},Zp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/ch*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*A0((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Zp(a);return r=ch/r,l.config=function(c,u){return s(e,c,u)},l},oh=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Zp(n);return i.config=function(r){return s(e,r)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ds(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;ds("Elastic",sh("in"),sh("out"),sh());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ds("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ds("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ds("Circ",function(s){return-(Tp(1-s*s)-1)});ds("Sine",function(s){return s===1?1:-E0(s*b0)+1});ds("Back",oh("in"),oh("out"),oh());dt.SteppedEase=dt.steps=ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Et;return function(a){return((i*xa(0,o,a)|0)+r)*n}}};fa.ease=dt["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return bh+=s+","+s+"Params,"});var Rh=function(e,t){this.id=T0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Eh,this.set=t?t.getSetter:Hl},ga=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,io(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),ma||Gn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ro(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zl(this,n),!r._dp||r.parent||Np(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?no(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ll(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(xa(-Math.abs(this._delay),a,r),i!==!1),kl(this),O0(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ro(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Et,o;if(r)for(this._tTime-=Et,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Et){r=!1;break}o=o._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ll(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=L0);var i=un;return un=n,Ah(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),Wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Et)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=zt(n)?n:Lp,l=function(){var u=i.then;i.then=null,r&&r(),zt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){aa(this)},s})();ni(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var gn=(function(s){bp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Wn(n.sortChildren),Ot&&Hi(n.parent||Ot,ir(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Up(ir(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ua(0,arguments,this),this},t.from=function(i,r,o){return ua(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ua(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Wt(i,r,xi(this,o),1),this},t.call=function(i,r,o){return Hi(this,Wt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(i,o,xi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,ca(o).immediateRender=Wn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,ca(a).immediateRender=Wn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,M,y,x,A,w,E;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Ut(u%p),u===l?(g=this._repeat,f=c):(A=Ut(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=no(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),w&&g&1&&(f=c-f,E=1),g!==A&&!this._lock){var C=w&&A&1,S=C===(w&&g&1);if(g<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ut(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=z0(this,Ut(a),Ut(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!r&&!A&&(ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Et);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,o||un&&Ah(d)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=v?-Et:Et);break}}d=_}}if(M&&!r&&(this.pause(),M.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=x,kl(this),this.render(i,r,o);this._onUpdate&&!r&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(sr(r)||(r=xi(this,r,i)),!(i instanceof ga)){if(_n(i))return i.forEach(function(a){return o.add(a,r)}),this;if(en(i))return this.addLabel(i,r);if(zt(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Hi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return en(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&Bl(this,i),i===this._recent&&(this._recent=this._last),ls(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=xi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Wt.delayedCall(0,r||pa,o);return a.data="isPause",this._hasPause=1,Hi(this,a,xi(this,i))},t.removePause=function(i){var r=this._first;for(i=xi(this,i);r;)r._start===i&&r.data==="isPause"&&Fr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Nr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=yi(i),l=this._first,c=sr(r),u;l;)l instanceof Wt?D0(l._targets,a)&&(c?(!Nr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=xi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Wt.to(o,ni({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&io(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ni({startAt:{time:xi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yp(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yp(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return ls(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ls(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=vi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;io(o,o===Ot&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(Pp(Ot,Ll(i,Ot)),Cp=Gn.frame),Gn.frame>=gp){gp+=Xn.autoSleep||120;var r=Ot._first;if((!r||!r._ts)&&Xn.autoSleep&&Gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Gn.sleep()}}},e})(ga);ni(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ix=function(e,t,n,i,r,o,a){var l=new Pn(this._pt,e,t,0,1,Dh,null,r),c=0,u=0,h,f,d,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=so(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(nh)||[];h=nh.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?fs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=nh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(yh.test(i)||m)&&(l.e=0),this._pt=l,l},Ch=function(e,t,n,i,r,o,a,l,c,u){zt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?lx:$p:Lh,_;if(en(i)&&(~i.indexOf("random(")&&(i=so(i)),i.charAt(1)==="="&&(_=fs(f,i)+(hn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||gh)return!isNaN(f*i)&&i!==""?(_=new Pn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?ux:Jp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Fl(t,i),ix.call(this,e,t,f,i,d,l||Xn.stringFilter,c))},rx=function(e,t,n,i,r){if(zt(e)&&(e=ha(e,r,t,n,i)),!Vi(e)||e.style&&e.nodeType||_n(e)||Ep(e))return en(e)?ha(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ha(e[a],r,t,n,i);return o},Ph=function(e,t,n,i,r,o){var a,l,c,u;if(Vn[e]&&(a=new Vn[e]).init(r,a.rawVars?t[e]:rx(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==eo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Nr,gh,Ih=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!_h,x=e.timeline,A=i.easeReverse||h,w,E,C,S,v,L,O,k,V,$,X,K,H;if(x&&(!f||!r)&&(r="none"),e._ease=cs(r,fa.ease),e._rEase=A&&(cs(A)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(k=p[0]?Or(p[0]).harness:0,K=k&&i[k.prop],w=Il(i,Sh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Al:I0),g._lazy=0),o){if(Fr(e._startAt=Wt.set(p,ni({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!a&&!d)&&e._startAt.revert(Al),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),C=ni({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Wn(l),immediateRender:a,stagger:0,parent:m},w),K&&(C[k.prop]=K),Fr(e._startAt=Wt.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(Al):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Wn(l)||l&&!_,E=0;E<p.length;E++){if(v=p[E],O=v._gsap||Th(p)[E]._gsap,e._ptLookup[E]=$={},hh[O.id]&&Ur.length&&Pl(),X=M===p?E:M.indexOf(v),k&&(V=new k).init(v,K||w,e,X,M)!==!1&&(e._pt=S=new Pn(e._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(se){$[se]=S}),V.priority&&(L=1)),!k||K)for(C in w)Vn[C]&&(V=Ph(C,w,e,X,v,M))?V.priority&&(L=1):$[C]=S=Ch.call(e,v,C,"get",w[C],X,M,0,i.stringFilter);e._op&&e._op[E]&&e.kill(v,e._op[E]),y&&e._pt&&(Nr=e,Ot.killTweensOf(v,$,e.globalTime(t)),H=!e.parent,Nr=0),e._pt&&l&&(hh[O.id]=1)}L&&Uh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&x.render(vi,!0,!0)},sx=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return gh=1,e.vars[t]="+=0",Ih(e,a),gh=0,l?da(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},ox=function(e,t){var n=e[0]?Or(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=to({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ax=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(_n(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ha=function(e,t,n,i,r){return zt(e)?e.call(t,n,i,r):en(e)&&~e.indexOf("random(")?so(e):e},Nl=bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Kp={};Cn(Nl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Kp[s]=1});Nl=Nl.split(",");var Wt=(function(s){bp(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ca(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Ot,M=(_n(n)||Ep(n)?sr(n[0]):"length"in i)?[n]:yi(n),y,x,A,w,E,C,S,v;if(a._targets=M.length?Th(M):da("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||El(c)||El(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(y=a.timeline=new gn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:M}),y.kill(),y.parent=y._dp=ir(a),y._start=0,f||El(c)||El(u)){if(w=M.length,S=f&&kp(f),Vi(f))for(E in f)~Nl.indexOf(E)&&(v||(v={}),v[E]=f[E]);for(x=0;x<w;x++)A=Il(i,Kp),A.stagger=0,L&&(A.easeReverse=L),v&&to(A,v),C=M[x],A.duration=+ha(c,ir(a),x,C,M),A.delay=(+ha(u,ir(a),x,C,M)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(C,A,S?S(x,C,M):0),y._ease=dt.none;y.duration()?c=u=0:a.timeline=0}else if(_){ca(ni(y.vars.defaults,{ease:"none"})),y._ease=cs(_.ease||i.ease||"none");var O=0,k,V,$;if(_n(_))_.forEach(function(X){return y.to(M,X,">")}),y.duration();else{A={};for(E in _)E==="ease"||E==="easeEach"||ax(E,_[E],A,_.easeEach);for(E in A)for(k=A[E].sort(function(X,K){return X.t-K.t}),O=0,x=0;x<k.length;x++)V=k[x],$={ease:V.e,duration:(V.t-(x?k[x-1].t:0))/100*c},$[E]=V.v,y.to(M,$,O),O+=$.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!_h&&(Nr=ir(a),Ot.killTweensOf(M),Nr=0),Hi(m,ir(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ut(m._time)&&Wn(h)&&F0(ir(a))&&m.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),p&&Up(ir(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Et&&!u?l:i<Et?0:i,f,d,_,g,p,m,M,y;if(!c)k0(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(f=Ut(h%g),h===l?(_=this._repeat,f=c):(p=Ut(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=no(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ut(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Op(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var A=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(x?-1:1)/A:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(f/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!r&&!p&&(ei(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&fh(this,i,r,o),ei(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&fh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Fr(this,1),!r&&!(u&&!a)&&(h||a||m)&&(ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){ma||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ih(this,c),u=this._ease(c/this._dur),sx(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(zl(this,0),this.parent||Dp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Nr&&Nr.vars.overwrite!==!0)._first||aa(this),this.parent&&o!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!r||r==="all")&&U0(a,l))return r==="all"&&(this._pt=0),aa(this);for(h=this._op=this._op||[],r!=="all"&&(en(r)&&(g={},Cn(r,function(M){return g[M]=1}),r=g),r=ox(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(h[m]=r,_=f,d={}):(d=h[m]=h[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Bl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&aa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ua(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ua(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ot.killTweensOf(i,r,o)},e})(ga);ni(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(s){Wt[s]=function(){var e=new gn,t=dh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Lh=function(e,t,n){return e[t]=n},$p=function(e,t,n){return e[t](n)},lx=function(e,t,n,i){return e[t](i.fp,n)},cx=function(e,t,n){return e.setAttribute(t,n)},Hl=function(e,t){return zt(e[t])?$p:Ol(e[t])&&e.setAttribute?cx:Lh},Jp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ux=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hx=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},fx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},dx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Uh=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Pn=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Jp,this.d=l||this,this.set=c||Lh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=dx,this.m=n,this.mt=r,this.tween=i},s})();Cn(bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Sh[s]=1});ti.TweenMax=ti.TweenLite=Wt;ti.TimelineLite=ti.TimelineMax=gn;Ot=new gn({sortChildren:!1,defaults:fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=wh;var us=[],Rl={},px=[],Sp=0,mx=0,ah=function(e){return(Rl[e]||px).map(function(t){return t()})},_a=function(){var e=Date.now(),t=[];e-Sp>2&&(ah("matchMediaInit"),us.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=zi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ah("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sp=e,ah("matchMedia"))},jp=(function(){function s(t,n){this.selector=n&&ph(n),this.data=[],this._r=[],this.isReverted=!1,this.id=mx++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){zt(n)&&(r=i,i=n,n=zt);var o=this,a=function(){var c=Dt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=ph(r)),Dt=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),Dt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=us.length;o--;)us[o].id===this.id&&us.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(_a):a.removeEventListener("change",_a)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),gx=(function(){function s(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Vi(n)||(n={matches:n});var o=new jp(0,r||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(us.indexOf(o)<0&&us.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(_a):l.addEventListener("change",_a),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ul={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xp(i)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){en(e)&&(e=yi(e)[0]);var r=Or(e||{}).get,o=n?Lp:Ip;return n==="native"&&(n=""),e&&(t?o((Vn[t]&&Vn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Vn[a]&&Vn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=yi(e),e.length>1){var i=e.map(function(u){return xn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Vn[t],a=Or(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;eo._pt=0,h.init(e,n?u+n:u,eo,0,[e]),h.render(1,h),eo._pt&&Nh(1,eo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=xn.to(e,ni((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cs(e.ease,fa.ease)),_p(fa,e||{})},config:function(e){return _p(Xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Vn[a]&&!ti[a]&&da(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,c){return n(yi(a),ni(l||{},r),c)},o&&(gn.prototype[t]=function(a,l,c){return this.add(ih[t](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=cs(t)},parseEase:function(e,t){return arguments.length?cs(e,t):dt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gn(e),i,r;for(n.smoothChildTiming=Wn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=r;return Hi(Ot,n,0),n},context:function(e,t){return e?new jp(e,t):Dt},matchMedia:function(e){return new gx(e)},matchMediaRefresh:function(){return us.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_a()},addEventListener:function(e,t){var n=Rl[e]||(Rl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Rl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Y0,wrapYoyo:Z0,distribute:kp,random:Hp,snap:zp,normalize:q0,getUnit:hn,clamp:V0,splitColor:qp,toArray:yi,selector:ph,mapRange:Gp,pipe:W0,unitize:X0,interpolate:K0,shuffle:Bp},install:wp,effects:ih,ticker:Gn,updateRoot:gn.updateRoot,plugins:Vn,globalTimeline:Ot,core:{PropTween:Pn,globals:Rp,Tween:Wt,Timeline:gn,Animation:ga,getCache:Or,_removeLinkedListItem:Bl,reverting:function(){return un},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return _h=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ul[s]=Wt[s]});Gn.add(gn.updateRoot);eo=Ul.to({},{duration:0});var _x=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xx=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=_x(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},lh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(en(r)&&(l={},Cn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}xx(a,r)}}}},xn=Ul.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lh("roundProps",mh),lh("modifiers"),lh("snap",zp))||Ul;Wt.version=gn.version=xn.version="3.15.1";Ap=1;xh()&&ro();var vx=dt.Power0,yx=dt.Power1,Mx=dt.Power2,Sx=dt.Power3,bx=dt.Power4,Tx=dt.Linear,Ex=dt.Quad,Ax=dt.Cubic,wx=dt.Quart,Rx=dt.Quint,Cx=dt.Strong,Px=dt.Elastic,Ix=dt.Back,Lx=dt.SteppedEase,Dx=dt.Bounce,Nx=dt.Sine,Ux=dt.Expo,Ox=dt.Circ;var Qp,kr,ao,Hh,_s,Fx,em,Vh,Bx=function(){return typeof window<"u"},ar={},gs=180/Math.PI,lo=Math.PI/180,oo=Math.atan2,tm=1e8,Gh=/([A-Z])/g,kx=/(left|right|width|margin|padding|x)/i,zx=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},cm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},um=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Xx=function(e,t,n){return e.style[t]=n},qx=function(e,t,n){return e.style.setProperty(t,n)},Yx=function(e,t,n){return e._gsap[t]=n},Zx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Kx=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},$x=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ft="transform",qn=Ft+"Origin",Jx=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ar&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=or(i,a)}):this.tfm[e]=o.x?o[e]:or(i,e),e===qn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=Ft}(r||t)&&this.props.push(e,t,r[e])},hm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Gh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Vh(),(!r||!r.isStart)&&!n[Ft]&&(hm(n),i.zOrigin&&n[qn]&&(n[qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},fm=function(e,t){var n={target:e,props:[],revert:jx,save:Jx};return e._gsap||xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},dm,Bh=function(e,t){var n=kr.createElementNS?kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kr.createElement(e);return n&&n.style?n:kr.createElement(e)},ii=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,co(t)||t,1)||""},nm="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,n){var i=t||_s,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(nm[o]+e in r););return o<0?null:(o===3?"ms":o>=0?nm[o]:"")+e},kh=function(){Bx()&&window.document&&(Qp=window,kr=Qp.document,ao=kr.documentElement,_s=Bh("div")||{style:{}},Fx=Bh("div"),Ft=co(Ft),qn=Ft+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dm=!!co("perspective"),Vh=xn.core.reverting,Hh=1)},im=function(e){var t=e.ownerSVGElement,n=Bh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ao.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ao.removeChild(n),r},rm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},pm=function(e){var t,n;try{t=e.getBBox()}catch{t=im(e),n=1}return t&&(t.width||t.height)||n||(t=im(e)),t&&!t.width&&!t.x&&!t.y?{x:+rm(e,["x","cx","x1"])||0,y:+rm(e,["y","cy","y1"])||0,width:0,height:0}:t},mm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pm(e))},Hr=function(e,t){if(t){var n=e.style,i;t in ar&&t!==qn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gh,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,i,r,o){var a=new Pn(e._pt,t,n,0,1,o?um:cm);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},sm={deg:1,rad:1,turn:1},Qx={grid:1,flex:1},Vr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=_s.style,l=kx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!r||sm[i]||sm[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&mm(e),(d||o==="%")&&(ar[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ht(d?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===kr||!g.appendChild)&&(g=kr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Gn.time&&!p.uncache)return Ht(r/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Hr(e,t)}else(d||o==="%")&&!Qx[ii(g,"display")]&&(a.position=ii(e,"position")),g===e&&(a.position="static"),g.appendChild(_s),_=_s[u],g.removeChild(_s),a.position="absolute";return l&&d&&(p=Or(g),p.time=Gn.time,p.width=g[u]),Ht(f?_*r/h:_&&r?h/_*r:0)},or=function(e,t,n,i){var r;return Hh||kh(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ar[t]&&t!=="transform"?(r=Ma(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Gl(ii(e,qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Vl[t]&&Vl[t](e,t,n)||ii(e,t)||Eh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Vr(e,t,r,n)+n:r},ev=function(e,t,n,i){if(!n||n==="none"){var r=co(t,e,1),o=r&&ii(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var a=new Pn(this._pt,e.style,t,0,1,Dh),l=0,c=0,u,h,f,d,_,g,p,m,M,y,x,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ii(e,t)||i,g?e.style[t]=g:Hr(e,t)),u=[n,i],wh(u),n=u[0],i=u[1],f=n.match(hs)||[],A=i.match(hs)||[],A.length){for(;h=hs.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=fs(d,p)+x),m=parseFloat(p),y=p.substr((m+"").length),l=hs.lastIndex-y.length,y||(y=y||Xn.units[t]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(d=Vr(e,t,g,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?um:cm;return yh.test(i)&&(a.e=0),this._pt=a,a},om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=om[n]||n,t[1]=om[i]||i,t.join(" ")},nv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ar[a]&&(l=1,a=a==="transformOrigin"?qn:Ft),Hr(n,a);l&&(Hr(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ma(n,1),o.uncache=1,hm(i)))}},Vl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Pn(e._pt,t,n,0,0,nv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ya=[1,0,0,1,0,0],gm={},_m=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},am=function(e){var t=ii(e,Ft);return _m(t)?ya:t.substr(7).match(vh).map(Ht)},Wh=function(e,t){var n=e._gsap||Or(e),i=e.style,r=am(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ya:r):(r===ya&&!e.offsetParent&&e!==ao&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),r=am(e),l?i.display=l:Hr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},zh=function(e,t,n,i,r,o){var a=e._gsap,l=r||Wh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],y=t.split(" "),x=parseFloat(y[0])||0,A=parseFloat(y[1])||0,w,E,C,S;n?l!==ya&&(E=d*p-_*g)&&(C=x*(p/E)+A*(-g/E)+(g*M-p*m)/E,S=x*(-_/E)+A*(d/E)-(d*M-_*m)/E,x=C,A=S):(w=pm(e),x=w.x+(~y[0].indexOf("%")?x/100*w.width:x),A=w.y+(~(y[1]||y[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=x-c,M=A-u,a.xOffset=h+(m*d+M*g)-m,a.yOffset=f+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[qn]="0px 0px",o&&(zr(o,a,"xOrigin",c,x),zr(o,a,"yOrigin",u,A),zr(o,a,"xOffset",h,a.xOffset),zr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+A)},Ma=function(e,t){var n=e._gsap||new Rh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ii(e,qn)||"0",u,h,f,d,_,g,p,m,M,y,x,A,w,E,C,S,v,L,O,k,V,$,X,K,H,se,I,ce,Pe,Je,Z,ne;return u=h=f=g=p=m=M=y=x=0,d=_=1,n.svg=!!(e.getCTM&&mm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),E=Wh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),zh(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,w=n.yOrigin||0,E!==ya&&(L=E[0],O=E[1],k=E[2],V=E[3],u=$=E[4],h=X=E[5],E.length===6?(d=Math.sqrt(L*L+O*O),_=Math.sqrt(V*V+k*k),g=L||O?oo(O,L)*gs:0,M=k||V?oo(k,V)*gs+g:0,M&&(_*=Math.abs(Math.cos(M*lo))),n.svg&&(u-=A-(A*L+w*k),h-=w-(A*O+w*V))):(ne=E[6],Je=E[7],I=E[8],ce=E[9],Pe=E[10],Z=E[11],u=E[12],h=E[13],f=E[14],C=oo(ne,Pe),p=C*gs,C&&(S=Math.cos(-C),v=Math.sin(-C),K=$*S+I*v,H=X*S+ce*v,se=ne*S+Pe*v,I=$*-v+I*S,ce=X*-v+ce*S,Pe=ne*-v+Pe*S,Z=Je*-v+Z*S,$=K,X=H,ne=se),C=oo(-k,Pe),m=C*gs,C&&(S=Math.cos(-C),v=Math.sin(-C),K=L*S-I*v,H=O*S-ce*v,se=k*S-Pe*v,Z=V*v+Z*S,L=K,O=H,k=se),C=oo(O,L),g=C*gs,C&&(S=Math.cos(C),v=Math.sin(C),K=L*S+O*v,H=$*S+X*v,O=O*S-L*v,X=X*S-$*v,L=K,$=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ht(Math.sqrt(L*L+O*O+k*k)),_=Ht(Math.sqrt(X*X+ne*ne)),C=oo($,X),M=Math.abs(C)>2e-4?C*gs:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!_m(ii(e,Ft)),K&&e.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ht(d),n.scaleY=Ht(_),n.rotation=Ht(g)+a,n.rotationX=Ht(p)+a,n.rotationY=Ht(m)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[qn]=Gl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?rv:dm?xm:iv,n.uncache=0,n},Gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oh=function(e,t,n){var i=hn(t);return Ht(parseFloat(t)+parseFloat(Vr(e,"x",n+"px",i)))+i},iv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xm(e,t)},ps="0deg",va="0px",ms=") ",xm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,y=n.zOrigin,x="",A=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==ps||u!==ps)){var w=parseFloat(u)*lo,E=Math.sin(w),C=Math.cos(w),S;w=parseFloat(h)*lo,S=Math.cos(w),o=Oh(M,o,E*S*-y),a=Oh(M,a,-Math.sin(w)*-y),l=Oh(M,l,C*S*-y+y)}p!==va&&(x+="perspective("+p+ms),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(A||o!==va||a!==va||l!==va)&&(x+=l!==va||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ms),c!==ps&&(x+="rotate("+c+ms),u!==ps&&(x+="rotateY("+u+ms),h!==ps&&(x+="rotateX("+h+ms),(f!==ps||d!==ps)&&(x+="skew("+f+", "+d+ms),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ms),M.style[Ft]=x||"translate(0, 0)"},rv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,y=parseFloat(o),x=parseFloat(a),A,w,E,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=lo,c*=lo,A=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=lo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Ht(A),w=Ht(w),E=Ht(E),C=Ht(C)):(A=h,C=f,w=E=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Vr(d,"x",o,"px"),x=Vr(d,"y",a,"px")),(_||g||p||m)&&(y=Ht(y+_-(_*A+g*E)+p),x=Ht(x+g-(_*w+g*C)+m)),(i||r)&&(S=d.getBBox(),y=Ht(y+i/100*S.width),x=Ht(x+r/100*S.height)),S="matrix("+A+","+w+","+E+","+C+","+y+","+x+")",d.setAttribute("transform",S),M&&(d.style[Ft]=S)},sv=function(e,t,n,i,r){var o=360,a=en(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?gs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*tm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*tm)%o-~~(c/o)*o)),e._pt=f=new Pn(e._pt,t,n,i,c,Hx),f.e=u,f.u="deg",e._props.push(n),f},lm=function(e,t){for(var n in t)e[n]=t[n];return e},ov=function(e,t,n){var i=lm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=Ma(n,1),Hr(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=Ma(n,1),o[Ft]=c);for(l in ar)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=hn(c),_=hn(u),h=d!==_?Vr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Pn(e._pt,a,l,h,f-h,Fh),e._pt.u=_||0,e._props.push(l));lm(a,i)};Cn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Vl[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return or(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Xh={name:"css",register:kh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,M,y,x,A,w,E,C,S;Hh||kh(),this.styles=this.styles||fm(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Vn[g]&&Ph(g,t,n,i,e,r)))){if(d=typeof u,_=Vl[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=so(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(p=hn(c),m=hn(u),m?p!==m&&(c=Vr(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],en(c)&&~c.indexOf("random(")&&(c=so(c)),hn(c+"")||c==="auto"||(c+=Xn.units[g]||hn(or(e,g))||""),(c+"").charAt(1)==="="&&(c=or(e,g))):c=or(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Gi&&(g==="autoAlpha"&&(f===1&&or(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),zr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in ar,y){if(this.styles.save(g),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ii(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=ii(e,"perspective"),v?e.style.perspective=v:Hr(e,"perspective")}h=parseFloat(u)}if(x||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,x=this._pt=new Pn(this._pt,a,Ft,0,1,A.renderTransform,A,0,-1),x.dep=1),g==="scale")this._pt=new Pn(this._pt,A,"scaleY",A.scaleY,(M?fs(A.scaleY,M+h):h)-A.scaleY||0,Fh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(qn,0,a[qn]),u=tv(u),A.svg?zh(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&zr(this,A,"zOrigin",A.zOrigin,m),zr(this,a,g,Gl(c),Gl(u)));continue}else if(g==="svgOrigin"){zh(e,u,1,w,0,this);continue}else if(g in gm){sv(this,A,g,f,M?fs(f,M+u):u);continue}else if(g==="smoothOrigin"){zr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){ov(this,u,e);continue}}else g in a||(g=co(g)||g);if(y||(h||h===0)&&(f||f===0)&&!zx.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=hn(u)||(g in Xn.units?Xn.units[g]:p),p!==m&&(f=Vr(e,g,c,m)),this._pt=new Pn(this._pt,y?A:a,g,f,(M?fs(f,M+h):h)-f,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Wx:Fh),this._pt.u=m||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=Gx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Vx);else if(g in a)ev.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,r);else if(g!=="parseTransform"){Fl(g,u);continue}y||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}E&&Uh(this)},render:function(e,t){if(t.tween._time||!Vh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:Gi,getSetter:function(e,t,n){var i=Gi[t];return i&&i.indexOf(",")<0&&(t=i),t in ar&&t!==qn&&(e._gsap.x||or(e,"x"))?n&&em===n?t==="scale"?Zx:Yx:(em=n||{})&&(t==="scale"?Kx:$x):e.style&&!Ol(e.style[t])?Xx:~t.indexOf("-")?qx:Hl(e,t)},core:{_removeProperty:Hr,_getMatrix:Wh}};xn.utils.checkPrefix=co;xn.core.getStyleSaver=fm;(function(s,e,t,n){var i=Cn(s+","+e+","+t,function(r){ar[r]=1});Cn(e,function(r){Xn.units[r]="deg",gm[r]=1}),Gi[i[13]]=s+","+e,Cn(n,function(r){var o=r.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Xn.units[s]="px"});xn.registerPlugin(Xh);var _t=xn.registerPlugin(Xh)||xn,RE=_t.core.Tween;function vm(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function av(s,e,t){return e&&vm(s.prototype,e),t&&vm(s,t),s}var fn,ql,lv,Yn,Gr,Wr,ho,Mm,xs,fo,Sm,lr,Pi,bm,Tm=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},Em=1,uo=[],it=[],Ii=[],ba=Date.now,qh=function(e,t){return t},cv=function(){var e=fo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Ii),it=n,Ii=i,qh=function(o,a){return t[o](a)}},ur=function(e,t){return~Ii.indexOf(e)&&Ii[Ii.indexOf(e)+1][t]},Ta=function(e){return!!~Sm.indexOf(e)},Ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},In=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wl="scrollLeft",Xl="scrollTop",Yh=function(){return lr&&lr.isPressed||it.cache++},Yl=function(e,t){var n=function i(r){if(r||r===0){Em&&Yn.history.scrollRestoration!=="manual"&&(Yn.history.scrollRestoration="manual");var o=lr&&lr.isPressed;r=i.v=Math.round(r)||(lr&&lr.iOS?1:0),e(r),i.cacheID=it.cache,o&&qh("ss",r)}else(t||it.cache!==i.cacheID||qh("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:Wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yl(function(s){return arguments.length?Yn.scrollTo(s,Yt.sc()):Yn.pageXOffset||Gr[Wl]||Wr[Wl]||ho[Wl]||0})},Yt={s:Xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:Yl(function(s){return arguments.length?Yn.scrollTo(vn.sc(),s):Yn.pageYOffset||Gr[Xl]||Wr[Xl]||ho[Xl]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cr=function(e,t){var n=t.s,i=t.sc;Ta(e)&&(e=Gr.scrollingElement||Wr);var r=it.indexOf(e),o=i===Yt.sc?1:2;!~r&&(r=it.push(e)-1),it[r+o]||Ln(e,"scroll",Yh);var a=it[r+o],l=a||(it[r+o]=Yl(ur(e,n),!0)||(Ta(e)?i:Yl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),l},Zl=function(e,t,n){var i=e,r=e,o=ba(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=ba();g||p-o>l?(r=i,i=_,a=o,o=p):n?i+=_:i=r+(_-r)/(p-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(_){var g=a,p=r,m=ba();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Sa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ym=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Am=function(){fo=fn.core.globals().ScrollTrigger,fo&&fo.core&&cv()},wm=function(e){return fn=e||Tm(),!ql&&fn&&typeof document<"u"&&document.body&&(Yn=window,Gr=document,Wr=Gr.documentElement,ho=Gr.body,Sm=[Yn,Gr,Wr,ho],lv=fn.utils.clamp,bm=fn.core.context||function(){},xs="onpointerenter"in ho?"pointer":"mouse",Mm=Vt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pi=Vt.eventTypes=("ontouchstart"in Wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Em=0},500),ql=1),fo||Am(),ql};vn.op=Yt;it.cache=0;var Vt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){ql||wm(fn)||console.warn("Please gsap.registerPlugin(Observer)"),fo||Am();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,y=n.onPress,x=n.onRelease,A=n.onRight,w=n.onLeft,E=n.onUp,C=n.onDown,S=n.onChangeX,v=n.onChangeY,L=n.onChange,O=n.onToggleX,k=n.onToggleY,V=n.onHover,$=n.onHoverEnd,X=n.onMove,K=n.ignoreCheck,H=n.isNormalizer,se=n.onGestureStart,I=n.onGestureEnd,ce=n.onWheel,Pe=n.onEnable,Je=n.onDisable,Z=n.onClick,ne=n.scrollSpeed,de=n.capture,oe=n.allowClicks,Te=n.lockAxis,Ue=n.onLockAxis;this.target=a=Dn(a)||Wr,this.vars=n,d&&(d=fn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(ho).lineHeight)||22);var Ce,je,qe,xe,P,mt,Oe,B=this,ye=0,nt=0,Me=n.passive||!u&&n.passive!==!1,R=cr(a,vn),b=cr(a,Yt),z=R(),te=b(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Pi[0]==="pointerdown",j=Ta(a),he=a.ownerDocument||Gr,le=[0,0,0],fe=[0,0,0],Ge=0,ie=function(){return Ge=ba()},ae=function(Ae,Ze){return(B.event=Ae)&&d&&uv(Ae.target,d)||Ze&&Q&&Ae.pointerType!=="touch"||K&&K(Ae,Ze)},De=function(){B._vx.reset(),B._vy.reset(),je.pause(),h&&h(B)},Ie=function(){var Ae=B.deltaX=ym(le),Ze=B.deltaY=ym(fe),pe=Math.abs(Ae)>=i,Be=Math.abs(Ze)>=i;L&&(pe||Be)&&L(B,Ae,Ze,le,fe),pe&&(A&&B.deltaX>0&&A(B),w&&B.deltaX<0&&w(B),S&&S(B),O&&B.deltaX<0!=ye<0&&O(B),ye=B.deltaX,le[0]=le[1]=le[2]=0),Be&&(C&&B.deltaY>0&&C(B),E&&B.deltaY<0&&E(B),v&&v(B),k&&B.deltaY<0!=nt<0&&k(B),nt=B.deltaY,fe[0]=fe[1]=fe[2]=0),(xe||qe)&&(X&&X(B),qe&&(p&&qe===1&&p(B),M&&M(B),qe=0),xe=!1),mt&&!(mt=!1)&&Ue&&Ue(B),P&&(ce(B),P=!1),Ce=0},ve=function(Ae,Ze,pe){le[pe]+=Ae,fe[pe]+=Ze,B._vx.update(Ae),B._vy.update(Ze),c?Ce||(Ce=requestAnimationFrame(Ie)):Ie()},Ye=function(Ae,Ze){Te&&!Oe&&(B.axis=Oe=Math.abs(Ae)>Math.abs(Ze)?"x":"y",mt=!0),Oe!=="y"&&(le[2]+=Ae,B._vx.update(Ae,!0)),Oe!=="x"&&(fe[2]+=Ze,B._vy.update(Ze,!0)),c?Ce||(Ce=requestAnimationFrame(Ie)):Ie()},Fe=function(Ae){if(!ae(Ae,1)){Ae=Sa(Ae,u);var Ze=Ae.clientX,pe=Ae.clientY,Be=Ze-B.x,we=pe-B.y,We=B.isDragging;B.x=Ze,B.y=pe,(We||(Be||we)&&(Math.abs(B.startX-Ze)>=r||Math.abs(B.startY-pe)>=r))&&(qe||(qe=We?2:1),We||(B.isDragging=!0),Ye(Be,we))}},ht=B.onPress=function(me){ae(me,1)||me&&me.button||(B.axis=Oe=null,je.pause(),B.isPressed=!0,me=Sa(me),ye=nt=0,B.startX=B.x=me.clientX,B.startY=B.y=me.clientY,B._vx.reset(),B._vy.reset(),Ln(H?a:he,Pi[1],Fe,Me,!0),B.deltaX=B.deltaY=0,y&&y(B))},D=B.onRelease=function(me){if(!ae(me,1)){In(H?a:he,Pi[1],Fe,!0);var Ae=!isNaN(B.y-B.startY),Ze=B.isDragging,pe=Ze&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Be=Sa(me);!pe&&Ae&&(B._vx.reset(),B._vy.reset(),u&&oe&&fn.delayedCall(.08,function(){if(ba()-Ge>300&&!me.defaultPrevented){if(me.target.click)me.target.click();else if(he.createEvent){var we=he.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,Yn,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),me.target.dispatchEvent(we)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&Ze&&!H&&je.restart(!0),qe&&Ie(),m&&Ze&&m(B),x&&x(B,pe)}},ue=function(Ae){return Ae.touches&&Ae.touches.length>1&&(B.isGesturing=!0)&&se(Ae,B.isDragging)},Y=function(){return(B.isGesturing=!1)||I(B)},ee=function(Ae){if(!ae(Ae)){var Ze=R(),pe=b();ve((Ze-z)*ne,(pe-te)*ne,1),z=Ze,te=pe,h&&je.restart(!0)}},W=function(Ae){if(!ae(Ae)){Ae=Sa(Ae,u),ce&&(P=!0);var Ze=(Ae.deltaMode===1?l:Ae.deltaMode===2?Yn.innerHeight:1)*_;ve(Ae.deltaX*Ze,Ae.deltaY*Ze,0),h&&!H&&je.restart(!0)}},J=function(Ae){if(!ae(Ae)){var Ze=Ae.clientX,pe=Ae.clientY,Be=Ze-B.x,we=pe-B.y;B.x=Ze,B.y=pe,xe=!0,h&&je.restart(!0),(Be||we)&&Ye(Be,we)}},Se=function(Ae){B.event=Ae,V(B)},Ve=function(Ae){B.event=Ae,$(B)},Xe=function(Ae){return ae(Ae)||Sa(Ae,u)&&Z(B)};je=B._dc=fn.delayedCall(f||.25,De).pause(),B.deltaX=B.deltaY=0,B._vx=Zl(0,50,!0),B._vy=Zl(0,50,!0),B.scrollX=R,B.scrollY=b,B.isDragging=B.isGesturing=B.isPressed=!1,bm(this),B.enable=function(me){return B.isEnabled||(Ln(j?he:a,"scroll",Yh),o.indexOf("scroll")>=0&&Ln(j?he:a,"scroll",ee,Me,de),o.indexOf("wheel")>=0&&Ln(a,"wheel",W,Me,de),(o.indexOf("touch")>=0&&Mm||o.indexOf("pointer")>=0)&&(Ln(a,Pi[0],ht,Me,de),Ln(he,Pi[2],D),Ln(he,Pi[3],D),oe&&Ln(a,"click",ie,!0,!0),Z&&Ln(a,"click",Xe),se&&Ln(he,"gesturestart",ue),I&&Ln(he,"gestureend",Y),V&&Ln(a,xs+"enter",Se),$&&Ln(a,xs+"leave",Ve),X&&Ln(a,xs+"move",J)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=xe=qe=!1,B._vx.reset(),B._vy.reset(),z=R(),te=b(),me&&me.type&&ht(me),Pe&&Pe(B)),B},B.disable=function(){B.isEnabled&&(uo.filter(function(me){return me!==B&&Ta(me.target)}).length||In(j?he:a,"scroll",Yh),B.isPressed&&(B._vx.reset(),B._vy.reset(),In(H?a:he,Pi[1],Fe,!0)),In(j?he:a,"scroll",ee,de),In(a,"wheel",W,de),In(a,Pi[0],ht,de),In(he,Pi[2],D),In(he,Pi[3],D),In(a,"click",ie,!0),In(a,"click",Xe),In(he,"gesturestart",ue),In(he,"gestureend",Y),In(a,xs+"enter",Se),In(a,xs+"leave",Ve),In(a,xs+"move",J),B.isEnabled=B.isPressed=B.isDragging=!1,Je&&Je(B))},B.kill=B.revert=function(){B.disable();var me=uo.indexOf(B);me>=0&&uo.splice(me,1),lr===B&&(lr=0)},uo.push(B),H&&Ta(a)&&(lr=B),B.enable(g)},av(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Vt.version="3.15.1";Vt.create=function(s){return new Vt(s)};Vt.register=wm;Vt.getAll=function(){return uo.slice()};Vt.getById=function(s){return uo.filter(function(e){return e.vars.id===s})[0]};Tm()&&fn.registerPlugin(Vt);var Re,_o,ot,St,oi,Mt,lf,uc,Fa,Ia,Aa,Kl,yn,dc,ef,Un,Rm,Cm,xo,Xm,Zh,qm,Nn,tf,Ym,Zm,Xr,nf,cf,vo,uf,qr,rf,Kh,$l=1,Mn=Date.now,$h=Mn(),bi=0,wa=0,Pm=function(e,t,n){var i=si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Im=function(e,t){return t&&(!si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hv=function s(){return wa&&requestAnimationFrame(s)},Lm=function(){return dc=1},Dm=function(){return dc=0},Wi=function(e){return e},Ra=function(e){return Math.round(e*1e5)/1e5||0},Km=function(){return typeof window<"u"},$m=function(){return Re||Km()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Ts=function(e){return!!~lf.indexOf(e)},Jm=function(e){return(e==="Height"?uf:ot["inner"+e])||oi["client"+e]||Mt["client"+e]},jm=function(e){return ur(e,"getBoundingClientRect")||(Ts(e)?function(){return cc.width=ot.innerWidth,cc.height=uf,cc}:function(){return hr(e)})},fv=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Jm(r):e["client"+r])||0}},dv=function(e,t){return!t||~Ii.indexOf(e)?jm(e):function(){return cc}},Xi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ur(e,n))?o()-jm(e)()[r]:Ts(e)?(oi[n]||Mt[n])-Jm(i):e[n]-e["offset"+i])},Jl=function(e,t){for(var n=0;n<xo.length;n+=3)(!t||~t.indexOf(xo[n+1]))&&e(xo[n],xo[n+1],xo[n+2])},si=function(e){return typeof e=="string"},Sn=function(e){return typeof e=="function"},Ca=function(e){return typeof e=="number"},vs=function(e){return typeof e=="object"},Ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},po=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},mo=Math.abs,Qm="left",eg="top",hf="right",ff="bottom",Ms="width",Ss="height",La="Right",Da="Left",Na="Top",Ua="Bottom",Zt="padding",Mi="margin",Mo="Width",df="Height",tn="px",Si=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},pv=function(e){var t=Si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Nm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hr=function(e,t){var n=t&&Si(e)[ef]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},hc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},tg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},mv=function(e){return function(t){return Re.utils.snap(tg(e),t)}},pf=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},gv=function(e){return function(t,n){return pf(tg(e))(t,n.direction)}},jl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},on=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ql=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Um={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ec={toggleActions:"play",anticipatePin:0},fc={top:0,left:0,center:.5,bottom:1,right:1},sc=function(e,t){if(si(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fc?fc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},tc=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=St.createElement("div"),g=Ts(n)||ur(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?Mt:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,y=M?c:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(x+=(i===Yt?hf:ff)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],oc(_,0,i,M),_},oc=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Mo]=1,r["border"+a+Mo]=0,r[n.p]=t+"px",Re.set(e,r)},st=[],sf={},Ba,Om=function(){return Mn()-bi>34&&(Ba||(Ba=requestAnimationFrame(fr)))},go=function(){(!Nn||!Nn.isPressed||Nn.startX>Mt.clientWidth)&&(it.cache++,Nn?Ba||(Ba=requestAnimationFrame(fr)):fr(),bi||As("scrollStart"),bi=Mn())},Jh=function(){Zm=ot.innerWidth,Ym=ot.innerHeight},Pa=function(e){it.cache++,(e===!0||!yn&&!qm&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!tf||Zm!==ot.innerWidth||Math.abs(ot.innerHeight-Ym)>ot.innerHeight*.25))&&uc.restart(!0)},Es={},_v=[],ng=function s(){return sn(Ke,"scrollEnd",s)||ys(!0)},As=function(e){return Es[e]&&Es[e].map(function(t){return t()})||_v},ri=[],ig=function(e){for(var t=0;t<ri.length;t+=5)(!e||ri[t+4]&&ri[t+4].query===e)&&(ri[t].style.cssText=ri[t+1],ri[t].getBBox&&ri[t].setAttribute("transform",ri[t+2]||""),ri[t+3].uncache=1)},rg=function(){it.cache++,it.forEach(function(e){return Sn(e)&&(e.rec=e())})},mf=function(e,t){var n;for(Un=0;Un<st.length;Un++)n=st[Un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));qr=!0,t&&ig(t),t||As("revert")},sg=function(e,t){it.cache++,(t||!On)&&it.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),si(e)&&(cf=e,ot.history.scrollRestoration!==e&&(ot.history.scrollRestoration=e))},On,bs=0,Fm,xv=function(){if(Fm!==bs){var e=Fm=bs;requestAnimationFrame(function(){return e===bs&&ys(!0)})}},og=function(){Mt.appendChild(vo),uf=!Nn&&vo.offsetHeight||ot.innerHeight,Mt.removeChild(vo)},Bm=function(e){return Fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(oi=St.documentElement,Mt=St.body,lf=[ot,St,oi,Mt],bi&&!e&&!qr){on(Ke,"scrollEnd",ng);return}og(),On=Ke.isRefreshing=!0,qr||rg();var n=As("refreshInit");Xm&&Ke.sort(),t||mf(),it.forEach(function(i){Sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),qr=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),rf=1,Bm(!0),st.forEach(function(i){var r=Xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Bm(!1),rf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){Sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sg(cf,1),uc.pause(),bs++,On=2,fr(2),st.forEach(function(i){return Sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),On=Ke.isRefreshing=!1,As("refresh")},of=0,ac=1,Oa,fr=function(e){if(e===2||!On&&!qr){Ke.isUpdating=!0,Oa&&Oa.update(0);var t=st.length,n=Mn(),i=n-$h>=50,r=t&&st[0].scroll();if(ac=of>r?-1:1,On||(of=r),i&&(bi&&!dc&&n-bi>200&&(bi=0,As("scrollEnd")),Aa=$h,$h=n),ac<0){for(Un=t;Un-- >0;)st[Un]&&st[Un].update(0,i);ac=1}else for(Un=0;Un<t;Un++)st[Un]&&st[Un].update(0,i);Ke.isUpdating=!1}Ba=0},af=[Qm,eg,ff,hf,Mi+Ua,Mi+La,Mi+Na,Mi+Da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lc=af.concat([Ms,Ss,"boxSizing","max"+Mo,"max"+df,"position",Mi,Zt,Zt+Na,Zt+La,Zt+Ua,Zt+Da]),vv=function(e,t,n){yo(n);var i=e._gsap;if(i.spacerIsNative)yo(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},jh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=af.length,o=t.style,a=e.style,l;r--;)l=af[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ff]=a[hf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ms]=hc(e,vn)+tn,o[Ss]=hc(e,Yt)+tn,o[Zt]=a[Mi]=a[eg]=a[Qm]="0",yo(i),a[Ms]=a["max"+Mo]=n[Ms],a[Ss]=a["max"+df]=n[Ss],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yv=/([A-Z])/g,yo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(yv,"-$1").toLowerCase())}},nc=function(e){for(var t=lc.length,n=e.style,i=[],r=0;r<t;r++)i.push(lc[r],n[lc[r]]);return i.t=e,i},Mv=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},cc={left:0,top:0},km=function(e,t,n,i,r,o,a,l,c,u,h,f,d,_){Sn(e)&&(e=e(l)),si(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?sc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Ca(e))d&&(e=Re.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&oc(a,n,i,!0);else{Sn(t)&&(t=t(l));var y=(e||"0").split(" "),x,A,w,E;M=Dn(t,l)||Mt,x=hr(M)||{},(!x||!x.left&&!x.top)&&Si(M).display==="none"&&(E=M.style.display,M.style.display="block",x=hr(M),E?M.style.display=E:M.style.removeProperty("display")),A=sc(y[0],x[i.d]),w=sc(y[1]||"0",n),e=x[i.p]-c[i.p]-u+A+r-w,a&&oc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;p="scroll"+i.d2,oc(o,C,i,S&&C>20||!S&&(h?Math.max(Mt[p],oi[p]):o.parentNode[p])<=C+1),h&&(c=hr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tn))}return d&&M&&(p=hr(M),d.seek(f),m=hr(M),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Sv=/(webkit|moz|length|cssText|inset)/i,zm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Mt){e._stOrig=r.cssText,a=Si(e);for(o in a)!+o&&!Sv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},ag=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},ic=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},Hm=function(e,t){var n=cr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=ag(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,o.tween&&fr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Re.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},on(e,"wheel",n.wheelHandler),Ke.isTouch&&on(e,"touchmove",n.wheelHandler),r},Ke=(function(){function s(t,n){_o||s.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),nf(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!wa){this.update=this.refresh=this.kill=Wi;return}n=Nm(si(n)||Ca(n)||n.nodeType?{trigger:n}:n,ec);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,M=r.onSnapComplete,y=r.once,x=r.snap,A=r.pinReparent,w=r.pinSpacer,E=r.containerAnimation,C=r.fastScrollEnd,S=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:Yt,L=!h&&h!==0,O=Dn(n.scroller||ot),k=Re.core.getCache(O),V=Ts(O),$=("pinType"in n?n.pinType:ur(O,"pinType")||V&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=L&&n.toggleActions.split(" "),H="markers"in n?n.markers:ec.markers,se=V?0:parseFloat(Si(O)["border"+v.p2+Mo])||0,I=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Pe=fv(O,V,v),Je=dv(O,V),Z=0,ne=0,de=0,oe=cr(O,v),Te,Ue,Ce,je,qe,xe,P,mt,Oe,B,ye,nt,Me,R,b,z,te,Q,j,he,le,fe,Ge,ie,ae,De,Ie,ve,Ye,Fe,ht,D,ue,Y,ee,W,J,Se,Ve;if(I._startClamp=I._endClamp=!1,I._dir=v,p*=45,I.scroller=O,I.scroll=E?E.time.bind(E):oe,je=oe(),qr&&oe.rec==null&&(oe.rec=je),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xm=1,n.refreshPriority===-9999&&(Oa=I)),k.tweenScroll=k.tweenScroll||{top:Hm(O,Yt),left:Hm(O,vn)},I.tweenTo=Te=k.tweenScroll[v.p],I.scrubDuration=function(pe){ue=Ca(pe)&&pe,ue?D?D.duration(pe):D=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return m&&m(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),Fe=0,l||(l=i.vars.id)),x&&((!vs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Mt.style&&Re.set(V?[Mt,oi]:O,{scrollBehavior:"auto"}),it.forEach(function(pe){return Sn(pe)&&pe.target===(V?St.scrollingElement||oi:O)&&(pe.smooth=!1)}),Ce=Sn(x.snapTo)?x.snapTo:x.snapTo==="labels"?mv(i):x.snapTo==="labelsDirectional"?gv(i):x.directional!==!1?function(pe,Be){return pf(x.snapTo)(pe,Mn()-ne<500?0:Be.direction)}:Re.utils.snap(x.snapTo),Y=x.duration||{min:.1,max:2},Y=vs(Y)?Ia(Y.min,Y.max):Ia(Y,Y),ee=Re.delayedCall(x.delay||ue/2||.1,function(){var pe=oe(),Be=Mn()-ne<500,we=Te.tween;if((Be||Math.abs(I.getVelocity())<10)&&!we&&!dc&&Z!==pe){var We=(pe-xe)/R,Gt=i&&!L?i.totalProgress():We,at=Be?0:(Gt-ht)/(Mn()-Aa)*1e3||0,Pt=Re.utils.clamp(-We,1-We,mo(at/2)*at/.185),Jt=We+(x.inertia===!1?0:Pt),At,wt,xt=x,jn=xt.onStart,It=xt.onInterrupt,wn=xt.onComplete;if(At=Ce(Jt,I),Ca(At)||(At=Jt),wt=Math.max(0,Math.round(xe+At*R)),pe<=P&&pe>=xe&&wt!==pe){if(we&&!we._initted&&we.data<=mo(wt-pe))return;x.inertia===!1&&(Pt=At-We),Te(wt,{duration:Y(mo(Math.max(mo(Jt-Gt),mo(At-Gt))*.185/at/.05||0)),ease:x.ease||"power3",data:mo(wt-pe),onInterrupt:function(){return ee.restart(!0)&&It&&po(I,It)},onComplete:function(){I.update(),Z=oe(),i&&!L&&(D?D.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),Fe=ht=i&&!L?i.totalProgress():I.progress,M&&M(I),wn&&po(I,wn)}},pe,Pt*R,wt-pe-Pt*R),jn&&po(I,jn,Te.tween)}}else I.isActive&&Z!==pe&&ee.restart(!0)}).pause()),l&&(sf[l]=I),f=I.trigger=Dn(f||d!==!0&&d),Ve=f&&f._gsap&&f._gsap.stRevert,Ve&&(Ve=Ve(I)),d=d===!0?f:Dn(d),si(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Mi||(_=!_&&d.parentNode&&d.parentNode.style&&Si(d.parentNode).display==="flex"?!1:Zt),I.pin=d,Ue=Re.core.getCache(d),Ue.spacer?b=Ue.pinState:(w&&(w=Dn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ue.spacerIsNative=!!w,w&&(Ue.spacerState=nc(w))),Ue.spacer=Q=w||St.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ue.pinState=b=nc(d)),n.force3D!==!1&&Re.set(d,{force3D:!0}),I.spacer=Q=Ue.spacer,Ye=Si(d),ie=Ye[_+v.os2],he=Re.getProperty(d),le=Re.quickSetter(d,v.a,tn),jh(d,Q,Ye),te=nc(d)),H){nt=vs(H)?Nm(H,Um):Um,B=tc("scroller-start",l,O,v,nt,0),ye=tc("scroller-end",l,O,v,nt,0,B),j=B["offset"+v.op.d2];var Xe=Dn(ur(O,"content")||O);mt=this.markerStart=tc("start",l,Xe,v,nt,j,0,E),Oe=this.markerEnd=tc("end",l,Xe,v,nt,j,0,E),E&&(Se=Re.quickSetter([mt,Oe],v.a,tn)),!$&&!(Ii.length&&ur(O,"fixedMarkers")===!0)&&(pv(V?Mt:O),Re.set([B,ye],{force3D:!0}),De=Re.quickSetter(B,v.a,tn),ve=Re.quickSetter(ye,v.a,tn))}if(E){var me=E.vars.onUpdate,Ae=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){I.update(0,0,1),me&&me.apply(E,Ae||[])})}if(I.previous=function(){return st[st.indexOf(I)-1]},I.next=function(){return st[st.indexOf(I)+1]},I.revert=function(pe,Be){if(!Be)return I.kill(!0);var we=pe!==!1||!I.enabled,We=yn;we!==I.isReverted&&(we&&(W=Math.max(oe(),I.scroll.rec||0),de=I.progress,J=i&&i.progress()),mt&&[mt,Oe,B,ye].forEach(function(Gt){return Gt.style.display=we?"none":"block"}),we&&(yn=I,I.update(we)),d&&(!A||!I.isActive)&&(we?vv(d,Q,b):jh(d,Q,Si(d),ae)),we||I.update(we),yn=We,I.isReverted=we)},I.refresh=function(pe,Be,we,We){if(!((yn||!I.enabled)&&!Be)){if(d&&pe&&bi){on(s,"scrollEnd",ng);return}!On&&ce&&ce(I),yn=I,Te.tween&&!we&&(Te.tween.kill(),Te.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Qe){return Qe.vars.immediateRender&&Qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Gt=Pe(),at=Je(),Pt=E?E.duration():Xi(O,v),Jt=R<=.01||!R,At=0,wt=We||0,xt=vs(we)?we.end:n.end,jn=n.endTrigger||f,It=vs(we)?we.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),wn=I.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,I),mi=f&&Math.max(0,st.indexOf(I))||0,jt=mi,Qt,T,U,q,G,N,re,ge,Ee,be,Ne,ze,Le;for(H&&vs(we)&&(ze=Re.getProperty(B,v.p),Le=Re.getProperty(ye,v.p));jt-- >0;)N=st[jt],N.end||N.refresh(0,1)||(yn=I),re=N.pin,re&&(re===f||re===d||re===wn)&&!N.isReverted&&(be||(be=[]),be.unshift(N),N.revert(!0,!0)),N!==st[jt]&&(mi--,jt--);for(Sn(It)&&(It=It(I)),It=Pm(It,"start",I),xe=km(It,f,Gt,v,oe(),mt,B,I,at,se,$,Pt,E,I._startClamp&&"_startClamp")||(d?-.001:0),Sn(xt)&&(xt=xt(I)),si(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(si(It)?It.split(" ")[0]:"")+xt:(At=sc(xt.substr(2),Gt),xt=si(It)?It:(E?Re.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,xe):xe)+At,jn=f)),xt=Pm(xt,"end",I),P=Math.max(xe,km(xt||(jn?"100% 0":Pt),jn,Gt,v,oe()+At,Oe,ye,I,at,se,$,Pt,E,I._endClamp&&"_endClamp"))||-.001,At=0,jt=mi;jt--;)N=st[jt]||{},re=N.pin,re&&N.start-N._pinPush<=xe&&!E&&N.end>0&&(Qt=N.end-(I._startClamp?Math.max(0,N.start):N.start),(re===f&&N.start-N._pinPush<xe||re===wn)&&isNaN(It)&&(At+=Qt*(1-N.progress)),re===d&&(wt+=Qt));if(xe+=At,P+=At,I._startClamp&&(I._startClamp+=At),I._endClamp&&!On&&(I._endClamp=P||-.001,P=Math.min(P,Xi(O,v))),R=P-xe||(xe-=.01)&&.001,Jt&&(de=Re.utils.clamp(0,1,Re.utils.normalize(xe,P,W))),I._pinPush=wt,mt&&At&&(Qt={},Qt[v.a]="+="+At,wn&&(Qt[v.p]="-="+oe()),Re.set([mt,Oe],Qt)),d&&!(rf&&I.end>=Xi(O,v)))Qt=Si(d),q=v===Yt,U=oe(),fe=parseFloat(he(v.a))+wt,!Pt&&P>1&&(Ne=(V?St.scrollingElement||oi:O).style,Ne={style:Ne,value:Ne["overflow"+v.a.toUpperCase()]},V&&Si(Mt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ne.style["overflow"+v.a.toUpperCase()]="scroll")),jh(d,Q,Qt),te=nc(d),T=hr(d,!0),ge=$&&cr(O,q?vn:Yt)(),_?(ae=[_+v.os2,R+wt+tn],ae.t=Q,jt=_===Zt?hc(d,v)+R+wt:0,jt&&(ae.push(v.d,jt+tn),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=jt+tn)),yo(ae),wn&&st.forEach(function(Qe){Qe.pin===wn&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),$&&oe(W)):(jt=hc(d,v),jt&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=jt+tn)),$&&(G={top:T.top+(q?U-xe:ge)+tn,left:T.left+(q?ge:U-xe)+tn,boxSizing:"border-box",position:"fixed"},G[Ms]=G["max"+Mo]=Math.ceil(T.width)+tn,G[Ss]=G["max"+df]=Math.ceil(T.height)+tn,G[Mi]=G[Mi+Na]=G[Mi+La]=G[Mi+Ua]=G[Mi+Da]="0",G[Zt]=Qt[Zt],G[Zt+Na]=Qt[Zt+Na],G[Zt+La]=Qt[Zt+La],G[Zt+Ua]=Qt[Zt+Ua],G[Zt+Da]=Qt[Zt+Da],z=Mv(b,G,A),On&&oe(0)),i?(Ee=i._initted,Zh(1),i.render(i.duration(),!0,!0),Ge=he(v.a)-fe+R+wt,Ie=Math.abs(R-Ge)>1,$&&Ie&&z.splice(z.length-2,2),i.render(0,!0,!0),Ee||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zh(0)):Ge=R,Ne&&(Ne.value?Ne.style["overflow"+v.a.toUpperCase()]=Ne.value:Ne.style.removeProperty("overflow-"+v.a));else if(f&&oe()&&!E)for(T=f.parentNode;T&&T!==Mt;)T._pinOffset&&(xe-=T._pinOffset,P-=T._pinOffset),T=T.parentNode;be&&be.forEach(function(Qe){return Qe.revert(!1,!0)}),I.start=xe,I.end=P,je=qe=On?W:oe(),!E&&!On&&!qr&&(je<W&&oe(W),I.scroll.rec=0),I.revert(!1,!0),ne=Mn(),ee&&(Z=-1,ee.restart(!0)),yn=0,i&&L&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Jt||de!==I.progress||E||g||i&&!i._initted)&&(i&&!L&&(i._initted||de||i.vars.immediateRender!==!1)&&i.totalProgress(E&&xe<-.001&&!de?Re.utils.normalize(xe,P,0):de,!0),I.progress=Jt||(je-xe)/R===de?0:de),d&&_&&(Q._pinOffset=Math.round(I.progress*Ge)),D&&D.invalidate(),isNaN(ze)||(ze-=Re.getProperty(B,v.p),Le-=Re.getProperty(ye,v.p),ic(B,v,ze),ic(mt,v,ze-(We||0)),ic(ye,v,Le),ic(Oe,v,Le-(We||0))),Jt&&!On&&I.update(),u&&!On&&!Me&&(Me=!0,u(I),Me=!1)}},I.getVelocity=function(){return(oe()-qe)/(Mn()-Aa)*1e3||0},I.endAnimation=function(){Ea(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||Ea(i,I.direction<0,1):Ea(i,i.reversed()))},I.labelToScroll=function(pe){return i&&i.labels&&(xe||I.refresh()||xe)+i.labels[pe]/i.duration()*R||0},I.getTrailing=function(pe){var Be=st.indexOf(I),we=I.direction>0?st.slice(0,Be).reverse():st.slice(Be+1);return(si(pe)?we.filter(function(We){return We.vars.preventOverlaps===pe}):we).filter(function(We){return I.direction>0?We.end<=xe:We.start>=P})},I.update=function(pe,Be,we){if(!(E&&!we&&!pe)){var We=On===!0?W:I.scroll(),Gt=pe?0:(We-xe)/R,at=Gt<0?0:Gt>1?1:Gt||0,Pt=I.progress,Jt,At,wt,xt,jn,It,wn,mi;if(Be&&(qe=je,je=E?oe():We,x&&(ht=Fe,Fe=i&&!L?i.totalProgress():at)),p&&d&&!yn&&!$l&&bi&&(!at&&xe<We+(We-qe)/(Mn()-Aa)*p?at=1e-4:at===1&&P>We+(We-qe)/(Mn()-Aa)*p&&(at=.9999)),at!==Pt&&I.enabled){if(Jt=I.isActive=!!at&&at<1,At=!!Pt&&Pt<1,It=Jt!==At,jn=It||!!at!=!!Pt,I.direction=at>Pt?1:-1,I.progress=at,jn&&!yn&&(wt=at&&!Pt?0:at===1?1:Pt===1?2:3,L&&(xt=!It&&K[wt+1]!=="none"&&K[wt+1]||K[wt],mi=i&&(xt==="complete"||xt==="reset"||xt in i))),S&&(It||mi)&&(mi||h||!i)&&(Sn(S)?S(I):I.getTrailing(S).forEach(function(U){return U.endAnimation()})),L||(D&&!yn&&!$l?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",at,i._tTime/i._tDur):(D.vars.totalProgress=at,D.invalidate().restart())):i&&i.totalProgress(at,!!(yn&&(ne||pe)))),d){if(pe&&_&&(Q.style[_+v.os2]=ie),!$)le(Ra(fe+Ge*at));else if(jn){if(wn=!pe&&at>Pt&&P+1>We&&We+1>=Xi(O,v),A)if(!pe&&(Jt||wn)){var jt=hr(d,!0),Qt=We-xe;zm(d,Mt,jt.top+(v===Yt?Qt:0)+tn,jt.left+(v===Yt?0:Qt)+tn)}else zm(d,Q);yo(Jt||wn?z:te),Ie&&at<1&&Jt||le(fe+(at===1&&!wn?Ge:0))}}x&&!Te.tween&&!yn&&!$l&&ee.restart(!0),a&&(It||y&&at&&(at<1||!Kh))&&Fa(a.targets).forEach(function(U){return U.classList[Jt||y?"add":"remove"](a.className)}),o&&!L&&!pe&&o(I),jn&&!yn?(L&&(mi&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),o&&o(I)),(It||!Kh)&&(c&&It&&po(I,c),X[wt]&&po(I,X[wt]),y&&(at===1?I.kill(!1,1):X[wt]=0),It||(wt=at===1?1:3,X[wt]&&po(I,X[wt]))),C&&!Jt&&Math.abs(I.getVelocity())>(Ca(C)?C:2500)&&(Ea(I.callbackAnimation),D?D.progress(1):Ea(i,xt==="reverse"?1:!at,1))):L&&o&&!yn&&o(I)}if(ve){var T=E?We/E.duration()*(E._caScrollDist||0):We;De(T+(B._isFlipped?1:0)),ve(T)}Se&&Se(-We/E.duration()*(E._caScrollDist||0))}},I.enable=function(pe,Be){I.enabled||(I.enabled=!0,on(O,"resize",Pa),V||on(O,"scroll",go),ce&&on(s,"refreshInit",ce),pe!==!1&&(I.progress=de=0,je=qe=Z=oe()),Be!==!1&&I.refresh())},I.getTween=function(pe){return pe&&Te?Te.tween:D},I.setPositions=function(pe,Be,we,We){if(E){var Gt=E.scrollTrigger,at=E.duration(),Pt=Gt.end-Gt.start;pe=Gt.start+Pt*pe/at,Be=Gt.start+Pt*Be/at}I.refresh(!1,!1,{start:Im(pe,we&&!!I._startClamp),end:Im(Be,we&&!!I._endClamp)},We),I.update()},I.adjustPinSpacing=function(pe){if(ae&&pe){var Be=ae.indexOf(v.d)+1;ae[Be]=parseFloat(ae[Be])+pe+tn,ae[1]=parseFloat(ae[1])+pe+tn,yo(ae)}},I.disable=function(pe,Be){if(pe!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Be||D&&D.pause(),W=0,Ue&&(Ue.uncache=1),ce&&sn(s,"refreshInit",ce),ee&&(ee.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!V)){for(var we=st.length;we--;)if(st[we].scroller===O&&st[we]!==I)return;sn(O,"resize",Pa),V||sn(O,"scroll",go)}},I.kill=function(pe,Be){I.disable(pe,Be),D&&!Be&&D.kill(),l&&delete sf[l];var we=st.indexOf(I);we>=0&&st.splice(we,1),we===Un&&ac>0&&Un--,we=0,st.forEach(function(We){return We.scroller===I.scroller&&(we=1)}),we||On||qr||(I.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Be||i.kill()),mt&&[mt,Oe,B,ye].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),Oa===I&&(Oa=0),d&&(Ue&&(Ue.uncache=1),we=0,st.forEach(function(We){return We.pin===d&&we++}),we||(Ue.spacer=0)),n.onKill&&n.onKill(I)},st.push(I),I.enable(!1,!1),Ve&&Ve(I),i&&i.add&&!R){var Ze=I.update;I.update=function(){I.update=Ze,it.cache++,xe||P||I.refresh()},Re.delayedCall(.01,I.update),R=.01,xe=P=0}else I.refresh();d&&xv()},s.register=function(n){return _o||(Re=n||$m(),Km()&&window.document&&s.enable(),_o=wa),_o},s.defaults=function(n){if(n)for(var i in n)ec[i]=n[i];return ec},s.disable=function(n,i){wa=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(ot,"wheel",go),sn(St,"scroll",go),clearInterval(Kl),sn(St,"touchcancel",Wi),sn(Mt,"touchstart",Wi),jl(sn,St,"pointerdown,touchstart,mousedown",Lm),jl(sn,St,"pointerup,touchend,mouseup",Dm),uc.kill(),Jl(sn);for(var r=0;r<it.length;r+=3)Ql(sn,it[r],it[r+1]),Ql(sn,it[r],it[r+2])},s.enable=function(){if(ot=window,St=document,oi=St.documentElement,Mt=St.body,Re){if(Fa=Re.utils.toArray,Ia=Re.utils.clamp,nf=Re.core.context||Wi,Zh=Re.core.suppressOverwrites||Wi,cf=ot.history.scrollRestoration||"auto",of=ot.pageYOffset||0,Re.core.globals("ScrollTrigger",s),Mt){wa=1,vo=document.createElement("div"),vo.style.height="100vh",vo.style.position="absolute",og(),hv(),Vt.register(Re),s.isTouch=Vt.isTouch,Xr=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tf=Vt.isTouch===1,on(ot,"wheel",go),lf=[ot,St,oi,Mt],Re.matchMedia?(s.matchMedia=function(u){var h=Re.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Re.addEventListener("matchMediaInit",function(){rg(),mf()}),Re.addEventListener("matchMediaRevert",function(){return ig()}),Re.addEventListener("matchMedia",function(){ys(0,1),As("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Jh(),Jh})):console.warn("Requires GSAP 3.11.0 or later"),Jh(),on(St,"scroll",go);var n=Mt.hasAttribute("style"),i=Mt.style,r=i.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=hr(Mt),Yt.m=Math.round(a.top+Yt.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Mt.setAttribute("style",""),Mt.removeAttribute("style")),Kl=setInterval(Om,250),Re.delayedCall(.5,function(){return $l=0}),on(St,"touchcancel",Wi),on(Mt,"touchstart",Wi),jl(on,St,"pointerdown,touchstart,mousedown",Lm),jl(on,St,"pointerup,touchend,mouseup",Dm),ef=Re.utils.checkPrefix("transform"),lc.push(ef),_o=Mn(),uc=Re.delayedCall(.2,ys).pause(),xo=[St,"visibilitychange",function(){var u=ot.innerWidth,h=ot.innerHeight;St.hidden?(Rm=u,Cm=h):(Rm!==u||Cm!==h)&&Pa()},St,"DOMContentLoaded",ys,ot,"load",ys,ot,"resize",Pa],Jl(on),st.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)Ql(sn,it[l],it[l+1]),Ql(sn,it[l],it[l+2])}else if(St){var c=function u(){s.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Kh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Kl)||(Kl=i)&&setInterval(Om,i),"ignoreMobileResize"in n&&(tf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jl(sn)||Jl(on,n.autoRefreshEvents||"none"),qm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Dn(n),o=it.indexOf(r),a=Ts(r);~o&&it.splice(o,a?6:2),i&&(a?Ii.unshift(ot,i,Mt,i,oi,i):Ii.unshift(r,i))},s.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(si(n)?Dn(n):n).getBoundingClientRect(),a=o[r?Ms:Ss]*i||0;return r?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},s.positionInViewport=function(n,i,r){si(n)&&(n=Dn(n));var o=n.getBoundingClientRect(),a=o[r?Ms:Ss],l=i==null?a/2:i in fc?fc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},s.killAll=function(n){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Es.killAll||[];Es={},i.forEach(function(r){return r()})}},s})();Ke.version="3.15.1";Ke.saveStyles=function(s){return s?Fa(s).forEach(function(e){if(e&&e.style){var t=ri.indexOf(e);t>=0&&ri.splice(t,5),ri.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),nf())}}):ri};Ke.revert=function(s,e){return mf(!s,e)};Ke.create=function(s,e){return new Ke(s,e)};Ke.refresh=function(s){return s?Pa(!0):(_o||Ke.register())&&ys(!0)};Ke.update=function(s){return++it.cache&&fr(s===!0?2:0)};Ke.clearScrollMemory=sg;Ke.maxScroll=function(s,e){return Xi(s,e?vn:Yt)};Ke.getScrollFunc=function(s,e){return cr(Dn(s),e?vn:Yt)};Ke.getById=function(s){return sf[s]};Ke.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!bi};Ke.snapDirectional=pf;Ke.addEventListener=function(s,e){var t=Es[s]||(Es[s]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(s,e){var t=Es[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Re.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Sn(r)&&(r=r(),on(Ke,"refresh",function(){return r=e.batchMax()})),Fa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ke.create(c))}),t};var Vm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Qh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===oi&&s(Mt,t)},rc={auto:1,scroll:1},bv=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Re.core.getCache(r),a=Mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Mt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(rc[(l=Si(r)).overflowY]||rc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ts(r)&&(rc[(l=Si(r)).overflowY]||rc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},lg=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&bv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(St,Vt.eventTypes[0],Wm,!1,!0)},onDisable:function(){return sn(St,Vt.eventTypes[0],Wm,!0)}})},Tv=/(input|label|select|textarea)/i,Gm,Wm=function(e){var t=Tv.test(e.target.tagName);(t||Gm)&&(e._gsapAllow=!0,Gm=t)},Ev=function(e){vs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Dn(e.target)||oi,u=Re.core.globals().ScrollSmoother,h=u&&u.get(),f=Xr&&(e.content&&Dn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=cr(c,Yt),_=cr(c,vn),g=1,p=(Vt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,m=0,M=Sn(i)?function(){return i(a)}:function(){return i||2.8},y,x,A=lg(c,e.type,!0,r),w=function(){return x=!1},E=Wi,C=Wi,S=function(){l=Xi(c,Yt),C=Ia(Xr?1:0,l),n&&(E=Ia(0,Xi(c,vn))),y=bs},v=function(){f._gsap.y=Ra(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(x){requestAnimationFrame(w);var H=Ra(a.deltaY/2),se=C(d.v-H);if(f&&se!==d.v+d.offset){d.offset=se-d.v;var I=Ra((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=it.cache,fr()}return!0}d.offset&&v(),x=!0},O,k,V,$,X=function(){S(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return f&&Re.set(f,{y:"+=0"}),e.ignoreCheck=function(K){return Xr&&K.type==="touchmove"&&L(K)||g>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){x=!1;var K=g;g=Ra((ot.visualViewport&&ot.visualViewport.scale||1)/p),O.pause(),K!==g&&Qh(c,g>1.01?!0:n?!1:"x"),k=_(),V=d(),S(),y=bs},e.onRelease=e.onGestureStart=function(K,H){if(d.offset&&v(),!H)$.restart(!0);else{it.cache++;var se=M(),I,ce;n&&(I=_(),ce=I+se*.05*-K.velocityX/.227,se*=Vm(_,I,ce,Xi(c,vn)),O.vars.scrollX=E(ce)),I=d(),ce=I+se*.05*-K.velocityY/.227,se*=Vm(d,I,ce,Xi(c,Yt)),O.vars.scrollY=C(ce),O.invalidate().duration(se).play(.01),(Xr&&O.vars.scrollY>=l||I>=l-1)&&Re.to({},{onUpdate:X,duration:se})}o&&o(K)},e.onWheel=function(){O._ts&&O.pause(),Mn()-m>1e3&&(y=0,m=Mn())},e.onChange=function(K,H,se,I,ce){if(bs!==y&&S(),H&&n&&_(E(I[2]===H?k+(K.startX-K.x):_()+H-I[1])),se){d.offset&&v();var Pe=ce[2]===se,Je=Pe?V+K.startY-K.y:d()+se-ce[1],Z=C(Je);Pe&&Je!==Z&&(V+=Z-Je),d(Z)}(se||H)&&fr()},e.onEnable=function(){Qh(c,n?!1:"x"),Ke.addEventListener("refresh",X),on(ot,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){Qh(c,!0),sn(ot,"resize",X),Ke.removeEventListener("refresh",X),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Vt(e),a.iOS=Xr,Xr&&!d()&&d(1),Xr&&Re.ticker.add(Wi),$=a._dc,O=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ag(d,d(),function(){return O.pause()})},onUpdate:fr,onComplete:$.vars.onComplete}),a};Ke.sort=function(s){if(Sn(s))return st.sort(s);var e=ot.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),st.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(s){return new Vt(s)};Ke.normalizeScroll=function(s){if(typeof s>"u")return Nn;if(s===!0&&Nn)return Nn.enable();if(s===!1){Nn&&Nn.kill(),Nn=s;return}var e=s instanceof Vt?s:Ev(s);return Nn&&Nn.target===e.target&&Nn.kill(),Ts(e.target)&&(Nn=e),e};Ke.core={_getVelocityProp:Zl,_inputObserver:lg,_scrollers:it,_proxies:Ii,bridge:{ss:function(){bi||As("scrollStart"),bi=Mn()},ref:function(){return yn}}};$m()&&Re.registerPlugin(Ke);var Xg=0,jf=1,qg=2;var Qf=1,Yg=2,er=3,Fi=0,mn=1,Jn=2,Pr=0,Ds=1,ed=2,td=3,nd=4,Zg=5,es=100,Kg=101,$g=102,Jg=103,jg=104,Qg=200,e_=201,t_=202,n_=203,kc=204,zc=205,i_=206,r_=207,s_=208,o_=209,a_=210,l_=211,c_=212,u_=213,h_=214,ru=0,su=1,ou=2,Ns=3,au=4,lu=5,cu=6,uu=7,id=0,f_=1,d_=2,Ir=0,p_=1,m_=2,g_=3,__=4,x_=5,v_=6,y_=7,Hf="attached",M_="detached",rd=300,Gs=301,Ws=302,hu=303,fu=304,gl=306,ts=1e3,Yi=1001,Oo=1002,dn=1003,du=1004;var Xs=1005;var Bn=1006,Zo=1007;var ki=1008;var tr=1009,sd=1010,od=1011,Ko=1012,pu=1013,rs=1014,wi=1015,$o=1016,mu=1017,gu=1018,qs=1020,ad=35902,ld=1021,cd=1022,pi=1023,ud=1024,hd=1025,Ls=1026,Us=1027,_u=1028,xu=1029,fd=1030,vu=1031;var yu=1033,_l=33776,xl=33777,vl=33778,yl=33779,Mu=35840,Su=35841,bu=35842,Tu=35843,Eu=36196,Au=37492,wu=37496,Ru=37808,Cu=37809,Pu=37810,Iu=37811,Lu=37812,Du=37813,Nu=37814,Uu=37815,Ou=37816,Fu=37817,Bu=37818,ku=37819,zu=37820,Hu=37821,Ml=36492,Vu=36494,Gu=36495,dd=36283,Wu=36284,Xu=36285,qu=36286;var Os=2300,Fs=2301,Bc=2302,Vf=2400,Gf=2401,Wf=2402,S_=2500;var pd=0,Sl=1,Jo=2,b_=3200,T_=3201;var md=0,E_=1,Lr="",Xt="srgb",pn="srgb-linear",Ka="linear",Tt="srgb";var Is=7680;var Xf=519,A_=512,w_=513,R_=514,gd=515,C_=516,P_=517,I_=518,L_=519,Hc=35044;var _d="300 es",Zi=2e3,$a=2001;var Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cg=1234567,Ya=Math.PI/180,Bs=180/Math.PI;function Oi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function xd(s,e){return(s%e+e)%e}function Av(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function wv(s,e,t){return s!==e?(t-s)/(e-s):0}function Za(s,e,t){return(1-t)*s+t*e}function Rv(s,e,t,n){return Za(s,e,1-Math.exp(-t*n))}function Cv(s,e=1){return e-Math.abs(xd(s,e*2)-e)}function Pv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Iv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Lv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dv(s,e){return s+Math.random()*(e-s)}function Nv(s){return s*(.5-Math.random())}function Uv(s){s!==void 0&&(cg=s);let e=cg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(s){return s*Ya}function Fv(s){return s*Bs}function Bv(s){return(s&s-1)===0&&s!==0}function kv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hv(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var zn={DEG2RAD:Ya,RAD2DEG:Bs,generateUUID:Oi,clamp:ct,euclideanModulo:xd,mapLinear:Av,inverseLerp:wv,lerp:Za,damp:Rv,pingpong:Cv,smoothstep:Pv,smootherstep:Iv,randInt:Lv,randFloat:Dv,randFloatSpread:Nv,seededRandom:Uv,degToRad:Ov,radToDeg:Fv,isPowerOfTwo:Bv,ceilPowerOfTwo:kv,floorPowerOfTwo:zv,setQuaternionFromProperEuler:Hv,normalize:bt,denormalize:Ui},$e=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],y=i[4],x=i[7],A=i[2],w=i[5],E=i[8];return r[0]=o*g+a*M+l*A,r[3]=o*p+a*y+l*w,r[6]=o*m+a*x+l*E,r[1]=c*g+u*M+h*A,r[4]=c*p+u*y+h*w,r[7]=c*m+u*x+h*E,r[2]=f*g+d*M+_*A,r[5]=f*p+d*y+_*w,r[8]=f*m+d*x+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gf.makeScale(e,t)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gf=new tt;function vd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function D_(){let s=Fo("canvas");return s.style.display="block",s}var ug={};function ss(s){s in ug||(ug[s]=!0,console.warn(s))}function N_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function U_(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O_(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var hg=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){let s={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=Uo(i.r),i.g=Uo(i.g),i.b=Uo(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Lr?Ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[pn]:{primaries:e,whitePoint:n,transfer:Ka,toXYZ:hg,fromXYZ:fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:hg,fromXYZ:fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),s}var ft=Vv();function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var So,Vc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{So===void 0&&(So=Fo("canvas")),So.width=e.width,So.height=e.height;let n=So.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=So}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=yr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gv=0,Bo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_f(i[o].image)):r.push(_f(i[o]))}else r=_f(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function _f(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wv=0,ln=class s extends Mr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Yi,i=Yi,r=Bn,o=ki,a=pi,l=tr,c=s.DEFAULT_ANISOTROPY,u=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Oi(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=rd;ln.DEFAULT_ANISOTROPY=1;var pt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(d+1)/2,A=(m+1)/2,w=(u+f)/4,E=(h+g)/4,C=(_+p)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=E/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=C/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends Mr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ki=class extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ja=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wc=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a,m=l*f+c*d+u*_+h*g,M=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let A=Math.sqrt(y),w=Math.atan2(A,m*M);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}let x=a*M;if(l=l*p+f*x,c=c*p+d*x,u=u*p+_*x,h=h*p+g*x,p===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xf=new F,dg=new Ei,hi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Li):Li.fromBufferAttribute(r,o),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),mc.subVectors(this.max,ka),bo.subVectors(e.a,ka),To.subVectors(e.b,ka),Eo.subVectors(e.c,ka),Yr.subVectors(To,bo),Zr.subVectors(Eo,To),ws.subVectors(bo,Eo);let t=[0,-Yr.z,Yr.y,0,-Zr.z,Zr.y,0,-ws.z,ws.y,Yr.z,0,-Yr.x,Zr.z,0,-Zr.x,ws.z,0,-ws.x,-Yr.y,Yr.x,0,-Zr.y,Zr.x,0,-ws.y,ws.x,0];return!vf(t,bo,To,Eo,mc)||(t=[1,0,0,0,1,0,0,0,1],!vf(t,bo,To,Eo,mc))?!1:(gc.crossVectors(Yr,Zr),t=[gc.x,gc.y,gc.z],vf(t,bo,To,Eo,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dr=[new F,new F,new F,new F,new F,new F,new F,new F],Li=new F,pc=new hi,bo=new F,To=new F,Eo=new F,Yr=new F,Zr=new F,ws=new F,ka=new F,mc=new F,gc=new F,Rs=new F;function vf(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rs.fromArray(s,r);let a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Xv=new hi,za=new F,yf=new F,Zn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);let t=za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(za,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(yf)),this.expandByPoint(za.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pr=new F,Mf=new F,_c=new F,Kr=new F,Sf=new F,xc=new F,bf=new F,ks=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mf.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Mf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_c),a=Kr.dot(this.direction),l=-Kr.dot(_c),c=Kr.lengthSq(),u=Math.abs(1-o*o),h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Mf).addScaledVector(_c,f),d}intersectSphere(e,t){pr.subVectors(e.center,this.origin);let n=pr.dot(this.direction),i=pr.dot(pr)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,n,i,r){Sf.subVectors(t,e),xc.subVectors(n,e),bf.crossVectors(Sf,xc);let o=this.direction.dot(bf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kr.subVectors(this.origin,e);let l=a*this.direction.dot(xc.crossVectors(Kr,xc));if(l<0)return null;let c=a*this.direction.dot(Sf.cross(Kr));if(c<0||l+c>o)return null;let u=-a*Kr.dot(bf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ao.setFromMatrixColumn(e,0).length(),r=1/Ao.setFromMatrixColumn(e,1).length(),o=1/Ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,Yv)}lookAt(e,t,n){let i=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),$r.crossVectors(n,ai),$r.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),$r.crossVectors(n,ai)),$r.normalize(),vc.crossVectors(ai,$r),i[0]=$r.x,i[4]=vc.x,i[8]=ai.x,i[1]=$r.y,i[5]=vc.y,i[9]=ai.y,i[2]=$r.z,i[6]=vc.z,i[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],y=n[7],x=n[11],A=n[15],w=i[0],E=i[4],C=i[8],S=i[12],v=i[1],L=i[5],O=i[9],k=i[13],V=i[2],$=i[6],X=i[10],K=i[14],H=i[3],se=i[7],I=i[11],ce=i[15];return r[0]=o*w+a*v+l*V+c*H,r[4]=o*E+a*L+l*$+c*se,r[8]=o*C+a*O+l*X+c*I,r[12]=o*S+a*k+l*K+c*ce,r[1]=u*w+h*v+f*V+d*H,r[5]=u*E+h*L+f*$+d*se,r[9]=u*C+h*O+f*X+d*I,r[13]=u*S+h*k+f*K+d*ce,r[2]=_*w+g*v+p*V+m*H,r[6]=_*E+g*L+p*$+m*se,r[10]=_*C+g*O+p*X+m*I,r[14]=_*S+g*k+p*K+m*ce,r[3]=M*w+y*v+x*V+A*H,r[7]=M*E+y*L+x*$+A*se,r[11]=M*C+y*O+x*X+A*I,r[15]=M*S+y*k+x*K+A*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,y=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,A=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,w=t*M+n*y+i*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return e[0]=M*E,e[1]=(g*f*r-h*p*r-g*i*d+n*p*d+h*i*m-n*f*m)*E,e[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=y*E,e[5]=(u*p*r-_*f*r+_*i*d-t*p*d-u*i*m+t*f*m)*E,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=x*E,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*m-t*h*m)*E,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*m+t*a*m)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=A*E,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*E,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,g=o*u,p=o*h,m=a*h,M=l*c,y=l*u,x=l*h,A=n.x,w=n.y,E=n.z;return i[0]=(1-(g+m))*A,i[1]=(d+x)*A,i[2]=(_-y)*A,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(_+y)*E,i[9]=(p-M)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ao.set(i[0],i[1],i[2]).length(),o=Ao.set(i[4],i[5],i[6]).length(),a=Ao.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Di.copy(this);let c=1/r,u=1/o,h=1/a;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=h,Di.elements[9]*=h,Di.elements[10]*=h,t.setFromRotationMatrix(Di),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Zi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,_;if(a===Zi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$a)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zi){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u,_,g;if(a===Zi)_=(o+r)*h,g=-2*h;else if(a===$a)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ao=new F,Di=new et,qv=new F(0,0,0),Yv=new F(1,1,1),$r=new F,vc=new F,ai=new F,pg=new et,mg=new Ei,Bi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mg.setFromEuler(this),this.setFromQuaternion(mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zv=0,gg=new F,wo=new Ei,mr=new et,yc=new F,Ha=new F,Kv=new F,$v=new Ei,_g=new F(1,0,0),xg=new F(0,1,0),vg=new F(0,0,1),yg={type:"added"},Jv={type:"removed"},Ro={type:"childadded",child:null},Tf={type:"childremoved",child:null},Bt=class s extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new Bi,n=new Ei,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new tt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(_g,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,t){return gg.copy(e).applyQuaternion(this.quaternion),this.position.add(gg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_g,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yc.copy(e):yc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Ha,yc,this.up):mr.lookAt(yc,Ha,this.up),this.quaternion.setFromRotationMatrix(mr),i&&(mr.extractRotation(i.matrixWorld),wo.setFromRotationMatrix(mr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv),Tf.child=e,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,$v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new F,gr=new F,Ef=new F,_r=new F,Co=new F,Po=new F,Mg=new F,Af=new F,wf=new F,Rf=new F,Cf=new pt,Pf=new pt,If=new pt,Qr=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ni.subVectors(e,t),i.cross(Ni);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ni.subVectors(i,t),gr.subVectors(n,t),Ef.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(gr),l=Ni.dot(Ef),c=gr.dot(gr),u=gr.dot(Ef),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Cf.setScalar(0),Pf.setScalar(0),If.setScalar(0),Cf.fromBufferAttribute(e,t),Pf.fromBufferAttribute(e,n),If.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cf,r.x),o.addScaledVector(Pf,r.y),o.addScaledVector(If,r.z),o}static isFrontFacing(e,t,n,i){return Ni.subVectors(n,t),gr.subVectors(e,t),Ni.cross(gr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ni.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Co.subVectors(i,n),Po.subVectors(r,n),Af.subVectors(e,n);let l=Co.dot(Af),c=Po.dot(Af);if(l<=0&&c<=0)return t.copy(n);wf.subVectors(e,i);let u=Co.dot(wf),h=Po.dot(wf);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Co,o);Rf.subVectors(e,r);let d=Co.dot(Rf),_=Po.dot(Rf);if(_>=0&&d<=_)return t.copy(r);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Po,a);let p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Mg.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Mg,a);let m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(Co,o).addScaledVector(Po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Lf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=xd(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lf(o,r,e+1/3),this.g=Lf(o,r,e),this.b=Lf(o,r,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=F_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ft.fromWorkingColorSpace(Tn.copy(this),e),Math.round(ct(Tn.r*255,0,255))*65536+Math.round(ct(Tn.g*255,0,255))*256+Math.round(ct(Tn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Tn.copy(this),t);let n=Tn.r,i=Tn.g,r=Tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Xt){ft.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,i=Tn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(Mc);let n=Za(Jr.h,Mc.h,t),i=Za(Jr.s,Mc.s,t),r=Za(Jr.l,Mc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new He;He.NAMES=F_;var jv=0,Kn=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ds,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=zc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==zc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fi=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new F,Sc=new $e,Qv=0,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}};var Qa=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var el=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ui=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ey=0,Ti=new et,Df=new Bt,Io=new F,li=new hi,Va=new hi,an=new F,kn=class s extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?el:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ui(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Va.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(li.min,Va.min),li.expandByPoint(an),an.addVectors(li.max,Va.max),li.expandByPoint(an)):(li.expandByPoint(Va.min),li.expandByPoint(Va.max))}li.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Io.fromBufferAttribute(e,c),an.add(Io)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new F,l[C]=new F;let c=new F,u=new F,h=new F,f=new $e,d=new $e,_=new $e,g=new F,p=new F;function m(C,S,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);let L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(L),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[C].add(g),a[S].add(g),a[v].add(g),l[C].add(p),l[S].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){let v=M[C],L=v.start,O=v.count;for(let k=L,V=L+O;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new F,x=new F,A=new F,w=new F;function E(C){A.fromBufferAttribute(i,C),w.copy(A);let S=a[C];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(w,S);let L=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,S=M.length;C<S;++C){let v=M[C],L=v.start,O=v.count;for(let k=L,V=L+O;k<V;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Nt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sg=new et,Cs=new ks,bc=new Zn,bg=new F,Tc=new F,Ec=new F,Ac=new F,Nf=new F,wc=new F,Tg=new F,Rc=new F,lt=class extends Bt{constructor(e=new kn,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){wc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Nf.fromBufferAttribute(h,e),o?wc.addScaledVector(Nf,u):wc.addScaledVector(Nf.sub(t),u))}t.add(wc)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(bc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(bc,bg)===null||Cs.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(Sg.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Sg),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,A=y;x<A;x+=3){let w=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);i=Cc(this,m,e,n,c,u,h,w,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){let M=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);i=Cc(this,o,e,n,c,u,h,M,y,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,A=y;x<A;x+=3){let w=x,E=x+1,C=x+2;i=Cc(this,m,e,n,c,u,h,w,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){let M=p,y=p+1,x=p+2;i=Cc(this,o,e,n,c,u,h,M,y,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function ty(s,e,t,n,i,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Fi,a),l===null)return null;Rc.copy(a),Rc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Rc);return c<t.near||c>t.far?null:{distance:c,point:Rc.clone(),object:s}}function Cc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Tc),s.getVertexPosition(l,Ec),s.getVertexPosition(c,Ac);let u=ty(s,e,t,n,Tc,Ec,Ac,Tg);if(u){let h=new F;Qr.getBarycoord(Tg,Tc,Ec,Ac,h),i&&(u.uv=Qr.getInterpolatedAttribute(i,a,l,c,h,new $e)),r&&(u.uv1=Qr.getInterpolatedAttribute(r,a,l,c,h,new $e)),o&&(u.normal=Qr.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};Qr.getNormal(Tc,Ec,Ac,f.normal),u.face=f,u.barycoord=h}return u}var ns=class s extends kn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(h,2));function _(g,p,m,M,y,x,A,w,E,C,S){let v=x/E,L=A/C,O=x/2,k=A/2,V=w/2,$=E+1,X=C+1,K=0,H=0,se=new F;for(let I=0;I<X;I++){let ce=I*L-k;for(let Pe=0;Pe<$;Pe++){let Je=Pe*v-O;se[g]=Je*M,se[p]=ce*y,se[m]=V,c.push(se.x,se.y,se.z),se[g]=0,se[p]=0,se[m]=w>0?1:-1,u.push(se.x,se.y,se.z),h.push(Pe/E),h.push(1-I/C),K+=1}}for(let I=0;I<C;I++)for(let ce=0;ce<E;ce++){let Pe=f+ce+$*I,Je=f+ce+$*(I+1),Z=f+(ce+1)+$*(I+1),ne=f+(ce+1)+$*I;l.push(Pe,Je,ne),l.push(Je,Z,ne),H+=6}a.addGroup(d,H,S),d+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ys(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){let e={};for(let t=0;t<s.length;t++){let n=Ys(s[t]);for(let i in n)e[i]=n[i]}return e}function ny(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var B_={clone:Ys,merge:An},iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},tl=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jr=new F,Eg=new $e,Ag=new $e,$t=class extends tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,Eg,Ag),t.subVectors(Ag,Eg)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lo=-90,Do=1,Xc=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $t(Lo,Do,e,t);i.layers=this.layers,this.add(i);let r=new $t(Lo,Do,e,t);r.layers=this.layers,this.add(r);let o=new $t(Lo,Do,e,t);o.layers=this.layers,this.add(o);let a=new $t(Lo,Do,e,t);a.layers=this.layers,this.add(a);let l=new $t(Lo,Do,e,t);l.layers=this.layers,this.add(l);let c=new $t(Lo,Do,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},nl=class extends ln{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ns(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Pr});r.uniforms.tEquirect.value=t;let o=new lt(i,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Bn),new Xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},ci=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sy={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Sr=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new F,Ho=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wg=new F,Rg=new pt,Cg=new pt,oy=new F,Pg=new et,Pc=new F,Uf=new Zn,Ig=new et,Of=new ks,il=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingBox.expandByPoint(Pc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingSphere.expandByPoint(Pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uf.copy(this.boundingSphere),Uf.applyMatrix4(i),e.ray.intersectsSphere(Uf)!==!1&&(Ig.copy(i).invert(),Of.copy(e.ray).applyMatrix4(Ig),!(this.boundingBox!==null&&Of.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Of)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===M_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Rg.fromBufferAttribute(i.attributes.skinIndex,e),Cg.fromBufferAttribute(i.attributes.skinWeight,e),wg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Cg.getComponent(r);if(o!==0){let a=Rg.getComponent(r);Pg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oy.copy(wg).applyMatrix4(Pg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Vo=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},rl=class extends ln{constructor(e=null,t=1,n=1,i,r,o,a,l,c=dn,u=dn,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lg=new et,ay=new et,sl=class s{constructor(e=[],t=[]){this.uuid=Oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ay;Lg.multiplyMatrices(a,t[r]),Lg.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new rl(t,e,e,pi,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vo),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},is=class extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},No=new et,Dg=new et,Ic=[],Ng=new hi,ly=new et,Ga=new lt,Wa=new Zn,ol=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ly)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,No),Ng.copy(e.boundingBox).applyMatrix4(No),this.boundingBox.union(Ng)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,No),Wa.copy(e.boundingSphere).applyMatrix4(No),this.boundingSphere.union(Wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(n),e.ray.intersectsSphere(Wa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,No),Dg.multiplyMatrices(n,No),Ga.matrixWorld=Dg,Ga.raycast(e,Ic);for(let o=0,a=Ic.length;o<a;o++){let l=Ic[o];l.instanceId=r,l.object=this,t.push(l)}Ic.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rl(new Float32Array(i*this.count),i,this.count,_u,wi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ff=new F,cy=new F,uy=new tt,qi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ff.subVectors(n,t).cross(cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ff),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uy.getNormalMatrix(e),i=this.coplanarPoint(Ff).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new Zn,Lc=new F,Go=class{constructor(e=new qi,t=new qi,n=new qi,i=new qi,r=new qi,o=new qi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,p-d,x-m).normalize(),n[1].setComponents(l+r,f+c,p+d,x+m).normalize(),n[2].setComponents(l+o,f+u,p+_,x+M).normalize(),n[3].setComponents(l-o,f-u,p-_,x-M).normalize(),n[4].setComponents(l-a,f-h,p-g,x-y).normalize(),t===Zi)n[5].setComponents(l+a,f+h,p+g,x+y).normalize();else if(t===$a)n[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Lc.x=i.normal.x>0?e.max.x:e.min.x,Lc.y=i.normal.y>0?e.max.y:e.min.y,Lc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wo=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yc=new F,Zc=new F,Ug=new et,Xa=new ks,Dc=new Zn,Bf=new F,Og=new F,zs=class extends Bt{constructor(e=new kn,t=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yc.fromBufferAttribute(t,i-1),Zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(i),Dc.radius+=r,e.ray.intersectsSphere(Dc)===!1)return;Ug.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Ug);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){let m=u.getX(g),M=u.getX(g+1),y=Nc(this,e,Xa,l,m,M,g);y&&t.push(y)}if(this.isLineLoop){let g=u.getX(_-1),p=u.getX(d),m=Nc(this,e,Xa,l,g,p,_-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){let m=Nc(this,e,Xa,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){let g=Nc(this,e,Xa,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nc(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Yc.fromBufferAttribute(a,i),Zc.fromBufferAttribute(a,r),t.distanceSqToSegment(Yc,Zc,Bf,Og)>n)return;Bf.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Bf);if(!(c<e.near||c>e.far))return{distance:c,point:Og.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Fg=new F,Bg=new F,al=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fg.fromBufferAttribute(t,i),Bg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fg.distanceTo(Bg);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ll=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xo=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kg=new et,qf=new ks,Uc=new Zn,Oc=new F,Hs=class extends Bt{constructor(e=new kn,t=new Xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=r,e.ray.intersectsSphere(Uc)===!1)return;kg.copy(i).invert(),qf.copy(e.ray).applyMatrix4(kg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){let p=c.getX(_);Oc.fromBufferAttribute(h,p),zg(Oc,p,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Oc.fromBufferAttribute(h,_),zg(Oc,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zg(s,e,t,n,i,r,o){let a=qf.distanceSqToPoint(s);if(a<t){let l=new F;qf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var cl=class extends ln{constructor(e,t,n,i,r,o,a,l,c,u=Ls){if(u!==Ls&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ls&&(n=rs),n===void 0&&u===Us&&(n=qs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var br=class s extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){let M=m*f-o;for(let y=0;y<c;y++){let x=y*h-r;_.push(x,-M,0),g.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let y=M+c*m,x=M+c*(m+1),A=M+1+c*(m+1),w=M+1+c*m;d.push(y,x,w),d.push(x,A,w)}this.setIndex(d),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(g,3)),this.setAttribute("uv",new ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ai=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$n=class extends Ai{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Kc=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function hy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function fy(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hg(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function k_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Tr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends Tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vf,endingEnd:Vf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gf:r=e,a=2*t-n;break;case Wf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gf:o=e,l=2*n-t;break;case Wf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,y=(-1-d)*p+(1.5+d)*g+.5*_,x=d*p-d*g;for(let A=0;A!==a;++A)r[A]=m*o[u+A]+M*o[c+A]+y*o[l+A]+x*o[h+A];return r}},jc=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Qc=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fc(t,this.TimeBufferType),this.values=Fc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fc(e.times,Array),values:Fc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case Bc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&hy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Fs;var Er=class extends di{constructor(e,t,n){super(e,t,n)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Os;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends di{};ul.prototype.ValueTypeName="color";var $i=class extends di{};$i.prototype.ValueTypeName="number";var eu=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ei.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ji=class extends di{InterpolantFactoryMethodLinear(e){return new eu(this.times,this.values,this.getValueSize(),e)}};Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ar=class extends di{constructor(e,t,n){super(e,t,n)}};Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Os;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends di{};ji.prototype.ValueTypeName="vector";var hl=class{constructor(e="",t=-1,n=[],i=S_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Oi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(py(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=fy(l);l=Hg(l,1,u),c=Hg(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $i(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,_,g){if(d.length!==0){let p=[],m=[];k_(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(let g in d){let p=[],m=[];for(let M=0;M!==f[_].morphTargets.length;++M){let y=f[_];p.push(y.time),m.push(y.morphTarget===g?1:0)}i.push(new $i(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(ji,d+".position",f,"pos",i),n(Ji,d+".quaternion",f,"rot",i),n(ji,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function dy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return ul;case"quaternion":return Ji;case"bool":case"boolean":return Er;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function py(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dy(s.type);if(s.times===void 0){let t=[],n=[];k_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var vr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},tu=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}},z_=new tu,Qi=class{constructor(e){this.manager=e!==void 0?e:z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr={},Yf=class extends Error{constructor(e,t){super(e),this.response=t}},qo=class extends Qi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xr[e]!==void 0){xr[e].push({onLoad:t,onProgress:n,onError:i});return}xr[e]=[],xr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=xr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0,g=0,p=new ReadableStream({start(m){M();function M(){h.read().then(({done:y,value:x})=>{if(y)m.close();else{g+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,E=u.length;w<E;w++){let C=u[w];C.onProgress&&C.onProgress(A)}m.enqueue(x),M()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Yf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{vr.add(e,c);let u=xr[e];delete xr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=xr[e];if(u===void 0)throw this.manager.itemError(e),c;delete xr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var nu=class extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fo("img");function l(){u(),vr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var fl=class extends Qi{constructor(e){super(e)}load(e,t,n,i){let r=new ln,o=new nu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Yo=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var kf=new et,Vg=new F,Gg=new F,dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vg),Gg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gg),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zf=class extends dl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},pl=class extends Yo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wg=new et,qa=new F,zf=new F,Kf=class extends dl{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qa.setFromMatrixPosition(e.matrixWorld),n.position.copy(qa),zf.copy(n.position),zf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zf),n.updateMatrixWorld(),i.makeTranslation(-qa.x,-qa.y,-qa.z),Wg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wg)}},Vs=class extends Yo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wr=class extends tl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$f=class extends dl{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new $f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ml=class extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vr.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),vr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vr.add(e,l),r.manager.itemStart(e)}};var iu=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Md="\\[\\]\\.:\\/",my=new RegExp("["+Md+"]","g"),Sd="[^"+Md+"]",gy="[^"+Md.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",Sd),xy=/(WCOD+)?/.source.replace("WCOD",gy),vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sd),yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sd),My=new RegExp("^"+_y+xy+vy+yy+"$"),Sy=["material","materials","bones","map"],Jf=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(my,"")}static parseTrackName(e){let t=My.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Jf;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DE=new Float32Array(1);function bd(s,e,t,n){let i=by(n);switch(t){case ld:return s*e;case ud:return s*e;case hd:return s*e*2;case _u:return s*e/i.components*i.byteLength;case xu:return s*e/i.components*i.byteLength;case fd:return s*e*2/i.components*i.byteLength;case vu:return s*e*2/i.components*i.byteLength;case cd:return s*e*3/i.components*i.byteLength;case pi:return s*e*4/i.components*i.byteLength;case yu:return s*e*4/i.components*i.byteLength;case _l:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Su:case Tu:return Math.max(s,16)*Math.max(e,8)/4;case Mu:case bu:return Math.max(s,8)*Math.max(e,8)/2;case Eu:case Au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ku:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Vu:case Gu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dd:case Wu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xu:case qu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(s){switch(s){case tr:case sd:return{byteLength:1,components:1};case Ko:case od:case $o:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case rs:case pu:case wi:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"174"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="174");function u0(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ey(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){let _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){let g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ny=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ky=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Ay,alphahash_pars_fragment:wy,alphamap_fragment:Ry,alphamap_pars_fragment:Cy,alphatest_fragment:Py,alphatest_pars_fragment:Iy,aomap_fragment:Ly,aomap_pars_fragment:Dy,batching_pars_vertex:Ny,batching_vertex:Uy,begin_vertex:Oy,beginnormal_vertex:Fy,bsdfs:By,iridescence_fragment:ky,bumpmap_pars_fragment:zy,clipping_planes_fragment:Hy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Gy,clipping_planes_vertex:Wy,color_fragment:Xy,color_pars_fragment:qy,color_pars_vertex:Yy,color_vertex:Zy,common:Ky,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Jy,displacementmap_pars_vertex:jy,displacementmap_vertex:Qy,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:sM,envmap_pars_fragment:oM,envmap_pars_vertex:aM,envmap_physical_pars_fragment:xM,envmap_vertex:lM,fog_vertex:cM,fog_pars_vertex:uM,fog_fragment:hM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:_M,lights_toon_fragment:vM,lights_toon_pars_fragment:yM,lights_phong_fragment:MM,lights_phong_pars_fragment:SM,lights_physical_fragment:bM,lights_physical_pars_fragment:TM,lights_fragment_begin:EM,lights_fragment_maps:AM,lights_fragment_end:wM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:IM,map_fragment:LM,map_pars_fragment:DM,map_particle_fragment:NM,map_particle_pars_fragment:UM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:FM,morphinstance_vertex:BM,morphcolor_vertex:kM,morphnormal_vertex:zM,morphtarget_pars_vertex:HM,morphtarget_vertex:VM,normal_fragment_begin:GM,normal_fragment_maps:WM,normal_pars_fragment:XM,normal_pars_vertex:qM,normal_vertex:YM,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:JM,iridescence_pars_fragment:jM,opaque_fragment:QM,packing:eS,premultiplied_alpha_fragment:tS,project_vertex:nS,dithering_fragment:iS,dithering_pars_fragment:rS,roughnessmap_fragment:sS,roughnessmap_pars_fragment:oS,shadowmap_pars_fragment:aS,shadowmap_pars_vertex:lS,shadowmap_vertex:cS,shadowmask_pars_fragment:uS,skinbase_vertex:hS,skinning_pars_vertex:fS,skinning_vertex:dS,skinnormal_vertex:pS,specularmap_fragment:mS,specularmap_pars_fragment:gS,tonemapping_fragment:_S,tonemapping_pars_fragment:xS,transmission_fragment:vS,transmission_pars_fragment:yS,uv_pars_fragment:MS,uv_pars_vertex:SS,uv_vertex:bS,worldpos_vertex:TS,background_vert:ES,background_frag:AS,backgroundCube_vert:wS,backgroundCube_frag:RS,cube_vert:CS,cube_frag:PS,depth_vert:IS,depth_frag:LS,distanceRGBA_vert:DS,distanceRGBA_frag:NS,equirect_vert:US,equirect_frag:OS,linedashed_vert:FS,linedashed_frag:BS,meshbasic_vert:kS,meshbasic_frag:zS,meshlambert_vert:HS,meshlambert_frag:VS,meshmatcap_vert:GS,meshmatcap_frag:WS,meshnormal_vert:XS,meshnormal_frag:qS,meshphong_vert:YS,meshphong_frag:ZS,meshphysical_vert:KS,meshphysical_frag:$S,meshtoon_vert:JS,meshtoon_frag:jS,points_vert:QS,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:rb},_e={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},nr={basic:{uniforms:An([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:An([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:An([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:An([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:An([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new He(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:An([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:An([_e.points,_e.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:An([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:An([_e.common,_e.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:An([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:An([_e.sprite,_e.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:An([_e.common,_e.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:An([_e.lights,_e.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};nr.physical={uniforms:An([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Yu={r:0,b:0,g:0},Zs=new Bi,sb=new et;function ob(s,e,t,n,i,r,o){let a=new He(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function g(y){let x=!1,A=_(y);A===null?m(a,l):A&&A.isColor&&(m(A,1),x=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,x){let A=_(x);A&&(A.isCubeTexture||A.mapping===gl)?(u===void 0&&(u=new lt(new ns(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ys(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Zs.copy(x.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Zs)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==Tt,(h!==A||f!==A.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new lt(new br(2,2),new En({name:"BackgroundMaterial",uniforms:Ys(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==Tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Yu,yd(s)),n.buffers.color.setClear(Yu.r,Yu.g,Yu.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p,dispose:M}}function ab(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(v,L,O,k,V){let $=!1,X=h(k,O,L);r!==X&&(r=X,c(r.object)),$=d(v,k,O,V),$&&_(v,k,O,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(v,L,O,k),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,L,O){let k=O.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let $=V[L.id];$===void 0&&($={},V[L.id]=$);let X=$[k];return X===void 0&&(X=f(l()),$[k]=X),X}function f(v){let L=[],O=[],k=[];for(let V=0;V<t;V++)L[V]=0,O[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,L,O,k){let V=r.attributes,$=L.attributes,X=0,K=O.getAttributes();for(let H in K)if(K[H].location>=0){let I=V[H],ce=$[H];if(ce===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),I===void 0||I.attribute!==ce||ce&&I.data!==ce.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function _(v,L,O,k){let V={},$=L.attributes,X=0,K=O.getAttributes();for(let H in K)if(K[H].location>=0){let I=$[H];I===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(I=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(I=v.instanceColor));let ce={};ce.attribute=I,I&&I.data&&(ce.data=I.data),V[H]=ce,X++}r.attributes=V,r.attributesNum=X,r.index=k}function g(){let v=r.newAttributes;for(let L=0,O=v.length;L<O;L++)v[L]=0}function p(v){m(v,0)}function m(v,L){let O=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;O[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),V[v]!==L&&(s.vertexAttribDivisor(v,L),V[v]=L)}function M(){let v=r.newAttributes,L=r.enabledAttributes;for(let O=0,k=L.length;O<k;O++)L[O]!==v[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function y(v,L,O,k,V,$,X){X===!0?s.vertexAttribIPointer(v,L,O,V,$):s.vertexAttribPointer(v,L,O,k,V,$)}function x(v,L,O,k){g();let V=k.attributes,$=O.getAttributes(),X=L.defaultAttributeValues;for(let K in $){let H=$[K];if(H.location>=0){let se=V[K];if(se===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){let I=se.normalized,ce=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;let Je=Pe.buffer,Z=Pe.type,ne=Pe.bytesPerElement,de=Z===s.INT||Z===s.UNSIGNED_INT||se.gpuType===pu;if(se.isInterleavedBufferAttribute){let oe=se.data,Te=oe.stride,Ue=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)m(H.location+Ce,oe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)p(H.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let Ce=0;Ce<H.locationSize;Ce++)y(H.location+Ce,ce/H.locationSize,Z,I,Te*ne,(Ue+ce/H.locationSize*Ce)*ne,de)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,ce/H.locationSize,Z,I,ce*ne,ce/H.locationSize*oe*ne,de)}}else if(X!==void 0){let I=X[K];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(H.location,I);break;case 3:s.vertexAttrib3fv(H.location,I);break;case 4:s.vertexAttrib4fv(H.location,I);break;default:s.vertexAttrib1fv(H.location,I)}}}}M()}function A(){C();for(let v in n){let L=n[v];for(let O in L){let k=L[O];for(let V in k)u(k[V].object),delete k[V];delete L[O]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let O in L){let k=L[O];for(let V in k)u(k[V].object),delete k[V];delete L[O]}delete n[v.id]}function E(v){for(let L in n){let O=n[L];if(O[v.id]===void 0)continue;let k=O[v.id];for(let V in k)u(k[V].object),delete k[V];delete O[v.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function lb(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==pi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==tr&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wi&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function ub(s){let e=this,t=null,n=0,i=!1,r=!1,o=new qi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,y=M*4,x=m.clippingState||null;l.value=x,x=u(_,f,y,d);for(let A=0;A!==y;++A)x[A]=t[A];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){let g=h!==null?h.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function hb(s){let e=new WeakMap;function t(o,a){return a===hu?o.mapping=Gs:a===fu&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hu||a===fu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qc(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qo=4,H_=[.125,.215,.35,.446,.526,.582],Js=20,Td=new wr,V_=new He,Ed=null,Ad=0,wd=0,Rd=!1,$s=(1+Math.sqrt(5))/2,jo=1/$s,G_=[new F(-$s,jo,0),new F($s,jo,0),new F(-jo,0,$s),new F(jo,0,$s),new F(0,$s,-jo),new F(0,$s,jo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],fb=new F,ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=fb}=r;Ed=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Ad,wd),this._renderer.xr.enabled=Rd,e.scissorTest=!1,Zu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:$o,format:pi,colorSpace:pn,depthBuffer:!1},i=W_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W_(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=db(r)),this._blurMaterial=pb(r,e,t)}return i}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Td)}_sceneToCubeUV(e,t,n,i,r){let l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(V_),h.toneMapping=Ir,h.autoClear=!1;let _=new fi({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new lt(new ns,_),p=!1,m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(V_),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let x=this._cubeSize;Zu(i,y*x,M>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Gs||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Zu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Td)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=G_[(i-r-1)%G_.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new lt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Js-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Js;p>Js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Js}`);let m=[],M=0;for(let E=0;E<Js;++E){let C=E/g,S=Math.exp(-C*C/2);m.push(S),E===0?M+=S:E<p&&(M+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;let x=this._sizeLods[i],A=3*x*(i>y-Qo?i-y+Qo:0),w=4*(this._cubeSize-x);Zu(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(h,Td)}};function db(s){let e=[],t=[],n=[],i=s,r=s-Qo+1+H_.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Qo?l=H_[o-s+Qo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*d),y=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let w=0;w<d;w++){let E=w%3*2/3-1,C=w>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];M.set(S,g*_*w),y.set(f,p*_*w);let v=[w,w,w,w,w,w];x.set(v,m*_*w)}let A=new kn;A.setAttribute("position",new Nt(M,g)),A.setAttribute("uv",new Nt(y,p)),A.setAttribute("faceIndex",new Nt(x,m)),e.push(A),i>Qo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function W_(s,e,t){let n=new Ki(s,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zu(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function pb(s,e,t){let n=new Float32Array(Js),i=new F(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function X_(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function q_(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mb(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hu||l===fu,u=l===Gs||l===Ws;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ta(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ta(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _b(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,_=h.attributes.position,g=0;if(d!==null){let M=d.array;g=d.version;for(let y=0,x=M.length;y<x;y+=3){let A=M[y+0],w=M[y+1],E=M[y+2];f.push(A,w,w,E,E,A)}}else if(_!==void 0){let M=_.array;g=_.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let A=y+0,w=y+1,E=y+2;f.push(A,w,w,E,E,A)}}else return;let p=new(vd(f)?el:Qa)(f,1);p.version=g;let m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xb(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=d[M]*g[M];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yb(s,e,t){let n=new WeakMap,i=new pt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*A*4*h),E=new Ja(w,x,A,h);E.type=wi,E.needsUpdate=!0;let C=y*4;for(let v=0;v<h;v++){let L=p[v],O=m[v],k=M[v],V=x*A*4*v;for(let $=0;$<L.count;$++){let X=$*C;d===!0&&(i.fromBufferAttribute(L,$),w[V+X+0]=i.x,w[V+X+1]=i.y,w[V+X+2]=i.z,w[V+X+3]=0),_===!0&&(i.fromBufferAttribute(O,$),w[V+X+4]=i.x,w[V+X+5]=i.y,w[V+X+6]=i.z,w[V+X+7]=0),g===!0&&(i.fromBufferAttribute(k,$),w[V+X+8]=i.x,w[V+X+9]=i.y,w[V+X+10]=i.z,w[V+X+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new $e(x,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Mb(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var h0=new ln,Y_=new cl(1,1),f0=new Ja,d0=new Wc,p0=new nl,Z_=[],K_=[],$_=new Float32Array(16),J_=new Float32Array(9),j_=new Float32Array(4);function ia(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Z_[i];if(r===void 0&&(r=new Float32Array(i),Z_[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $u(s,e){let t=K_[e];t===void 0&&(t=new Int32Array(e),K_[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Sb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function Tb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function Eb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function Ab(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;j_.set(n),s.uniformMatrix2fv(this.addr,!1,j_),rn(t,n)}}function wb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;J_.set(n),s.uniformMatrix3fv(this.addr,!1,J_),rn(t,n)}}function Rb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;$_.set(n),s.uniformMatrix4fv(this.addr,!1,$_),rn(t,n)}}function Cb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function Ib(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function Lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function Db(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function Ub(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function Ob(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function Fb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Y_.compareFunction=gd,r=Y_):r=h0,t.setTexture2D(e||r,i)}function Bb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||d0,i)}function kb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||p0,i)}function zb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||f0,i)}function Hb(s){switch(s){case 5126:return Sb;case 35664:return bb;case 35665:return Tb;case 35666:return Eb;case 35674:return Ab;case 35675:return wb;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Lb;case 5125:return Db;case 36294:return Nb;case 36295:return Ub;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return zb}}function Vb(s,e){s.uniform1fv(this.addr,e)}function Gb(s,e){let t=ia(e,this.size,2);s.uniform2fv(this.addr,t)}function Wb(s,e){let t=ia(e,this.size,3);s.uniform3fv(this.addr,t)}function Xb(s,e){let t=ia(e,this.size,4);s.uniform4fv(this.addr,t)}function qb(s,e){let t=ia(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Yb(s,e){let t=ia(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zb(s,e){let t=ia(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Kb(s,e){s.uniform1iv(this.addr,e)}function $b(s,e){s.uniform2iv(this.addr,e)}function Jb(s,e){s.uniform3iv(this.addr,e)}function jb(s,e){s.uniform4iv(this.addr,e)}function Qb(s,e){s.uniform1uiv(this.addr,e)}function eT(s,e){s.uniform2uiv(this.addr,e)}function tT(s,e){s.uniform3uiv(this.addr,e)}function nT(s,e){s.uniform4uiv(this.addr,e)}function iT(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||h0,r[o])}function rT(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||d0,r[o])}function sT(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||p0,r[o])}function oT(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||f0,r[o])}function aT(s){switch(s){case 5126:return Vb;case 35664:return Gb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return $b;case 35668:case 35672:return Jb;case 35669:case 35673:return jb;case 5125:return Qb;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}var Pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hb(t.type)}},Id=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aT(t.type)}},Ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Cd=/(\w+)(\])?(\[|\.)?/g;function Q_(s,e){s.seq.push(e),s.map[e.id]=e}function lT(s,e,t){let n=s.name,i=n.length;for(Cd.lastIndex=0;;){let r=Cd.exec(n),o=Cd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Q_(t,c===void 0?new Pd(a,s,e):new Id(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Ld(a),Q_(t,h)),t=h}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);lT(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function e0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var cT=37297,uT=0;function hT(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var t0=new tt;function fT(s){ft._getMatrix(t0,ft.workingColorSpace,s);let e=`mat3( ${t0.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(s)){case Ka:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function n0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hT(s.getShaderSource(e),o)}else return i}function dT(s,e){let t=fT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pT(s,e){let t;switch(e){case p_:t="Linear";break;case m_:t="Reinhard";break;case g_:t="Cineon";break;case __:t="ACESFilmic";break;case v_:t="AgX";break;case y_:t="Neutral";break;case x_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ku=new F;function mT(){ft.getLuminanceCoefficients(Ku);let s=Ku.x.toFixed(4),e=Ku.y.toFixed(4),t=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function _T(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xT(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function bl(s){return s!==""}function i0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(s){return s.replace(vT,MT)}var yT=new Map;function MT(s,e){let t=rt[e];if(t===void 0){let n=yT.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}var ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(s){return s.replace(ST,bT)}function bT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function o0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function ET(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function wT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case d_:e="ENVMAP_BLENDING_ADD";break}return e}function RT(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function CT(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=TT(t),c=ET(t),u=AT(t),h=wT(t),f=RT(t),d=gT(t),_=_T(r),g=i.createProgram(),p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bl).join(`
`),m.length>0&&(m+=`
`)):(p=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),m=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ir?pT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,dT("linearToOutputTexel",t.outputColorSpace),mT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bl).join(`
`)),o=Dd(o),o=i0(o,t),o=r0(o,t),a=Dd(a),a=i0(a,t),a=r0(a,t),o=s0(o),a=s0(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=M+p+o,x=M+m+a,A=e0(i,i.VERTEX_SHADER,y),w=e0(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(L){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim(),$=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,w);else{let K=n0(i,A,"vertex"),H=n0(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+K+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||V==="")&&(X=!1);X&&(L.diagnostics={runnable:$,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(A),i.deleteShader(w),C=new ea(i,g),S=xT(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,cT)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}var PT=0,Nd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ud(e),t.set(e,n)),n}},Ud=class{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}};function IT(s,e,t,n,i,r,o){let a=new ja,l=new Nd,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,L,O,k){let V=O.fog,$=k.geometry,X=S.isMeshStandardMaterial?O.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=K&&K.mapping===gl?K.image.height:null,se=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let I=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=I!==void 0?I.length:0,Pe=0;$.morphAttributes.position!==void 0&&(Pe=1),$.morphAttributes.normal!==void 0&&(Pe=2),$.morphAttributes.color!==void 0&&(Pe=3);let Je,Z,ne,de;if(se){let me=nr[se];Je=me.vertexShader,Z=me.fragmentShader}else Je=S.vertexShader,Z=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);let oe=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Ce=k.isBatchedMesh===!0,je=!!S.map,qe=!!S.matcap,xe=!!K,P=!!S.aoMap,mt=!!S.lightMap,Oe=!!S.bumpMap,B=!!S.normalMap,ye=!!S.displacementMap,nt=!!S.emissiveMap,Me=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,te=S.dispersion>0,Q=S.iridescence>0,j=S.sheen>0,he=S.transmission>0,le=b&&!!S.anisotropyMap,fe=z&&!!S.clearcoatMap,Ge=z&&!!S.clearcoatNormalMap,ie=z&&!!S.clearcoatRoughnessMap,ae=Q&&!!S.iridescenceMap,De=Q&&!!S.iridescenceThicknessMap,Ie=j&&!!S.sheenColorMap,ve=j&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Fe=!!S.specularColorMap,ht=!!S.specularIntensityMap,D=he&&!!S.transmissionMap,ue=he&&!!S.thicknessMap,Y=!!S.gradientMap,ee=!!S.alphaMap,W=S.alphaTest>0,J=!!S.alphaHash,Se=!!S.extensions,Ve=Ir;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ve=s.toneMapping);let Xe={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:Z,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:pn,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:qe,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:mt,bumpMap:Oe,normalMap:B,displacementMap:f&&ye,emissiveMap:nt,normalMapObjectSpace:B&&S.normalMapType===E_,normalMapTangentSpace:B&&S.normalMapType===md,metalnessMap:Me,roughnessMap:R,anisotropy:b,anisotropyMap:le,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ie,dispersion:te,iridescence:Q,iridescenceMap:ae,iridescenceThicknessMap:De,sheen:j,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:Ye,specularColorMap:Fe,specularIntensityMap:ht,transmission:he,transmissionMap:D,thicknessMap:ue,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:W,alphaHash:J,combine:S.combine,mapUv:je&&g(S.map.channel),aoMapUv:P&&g(S.aoMap.channel),lightMapUv:mt&&g(S.lightMap.channel),bumpMapUv:Oe&&g(S.bumpMap.channel),normalMapUv:B&&g(S.normalMap.channel),displacementMapUv:ye&&g(S.displacementMap.channel),emissiveMapUv:nt&&g(S.emissiveMap.channel),metalnessMapUv:Me&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(S.sheenRoughnessMap.channel),specularMapUv:Ye&&g(S.specularMap.channel),specularColorMapUv:Fe&&g(S.specularColorMap.channel),specularIntensityMapUv:ht&&g(S.specularIntensityMap.channel),transmissionMapUv:D&&g(S.transmissionMap.channel),thicknessMapUv:ue&&g(S.thicknessMap.channel),alphaMapUv:ee&&g(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(B||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(je||ee),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Pe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)v.push(L),v.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=_[S.type],L;if(v){let O=nr[v];L=B_.clone(O.uniforms)}else L=S.uniforms;return L}function A(S,v){let L;for(let O=0,k=u.length;O<k;O++){let V=u[O];if(V.cacheKey===v){L=V,++L.usedTimes;break}}return L===void 0&&(L=new CT(s,v,S,r),u.push(L)),L}function w(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:C}}function LT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function DT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function a0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function l0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){let m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){let m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||DT),n.length>1&&n.sort(f||a0),i.length>1&&i.sort(f||a0)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function NT(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new l0,s.set(n,[o])):i>=r.length?(o=new l0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function UT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new He};break;case"SpotLight":t={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function OT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var FT=0;function BT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kT(s){let e=new UT,t=OT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new et,o=new et;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,M=0,y=0,x=0,A=0,w=0,E=0;c.sort(BT);for(let S=0,v=c.length;S<v;S++){let L=c[S],O=L.color,k=L.intensity,V=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*k,h+=O.g*k,f+=O.b*k;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],k);E++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,H=t.get(L);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=X,d++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[g]=X;let K=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=K.matrix,L.castShadow){let H=t.get(L);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=$,x++}g++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=X,p++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let K=L.shadow,H=t.get(L);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=L.shadow.matrix,y++}n.point[_]=X,_++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(k),X.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[m]=X,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=E,n.version=FT++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0,p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let y=c[m];if(y.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(y.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function c0(s){let e=new kT(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zT(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new c0(s),e.set(i,[a])):r>=o.length?(a=new c0(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GT(s,e,t){let n=new Go,i=new $e,r=new $e,o=new pt,a=new Kc({depthPacking:T_}),l=new $c,c={},u=t.maxTextureSize,h={[Fi]:mn,[mn]:Fi,[Jn]:Jn},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:HT,fragmentShader:VT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new kn;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let m=this.type;this.render=function(w,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let S=s.getRenderTarget(),v=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Pr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=m!==er&&this.type===er,V=m===er&&this.type!==er;for(let $=0,X=w.length;$<X;$++){let K=w[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let se=H.getFrameExtents();if(i.multiply(se),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/se.x),i.x=r.x*se.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/se.y),i.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||k===!0||V===!0){let ce=this.type!==er?{minFilter:dn,magFilter:dn}:{};H.map!==null&&H.map.dispose(),H.map=new Ki(i.x,i.y,ce),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let I=H.getViewportCount();for(let ce=0;ce<I;ce++){let Pe=H.getViewport(ce);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),O.viewport(o),H.updateMatrices(K,ce),n=H.getFrustum(),x(E,C,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===er&&M(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(S,v,L)};function M(w,E){let C=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,C,d,g,null)}function y(w,E,C,S){let v=null,L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)v=L;else if(v=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=v.uuid,k=E.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let $=V[k];$===void 0&&($=v.clone(),V[k]=$,E.addEventListener("dispose",A)),v=$}if(v.visible=E.visible,v.wireframe=E.wireframe,S===er?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=s.properties.get(v);O.light=C}return v}function x(w,E,C,S,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===er)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let k=e.update(w),V=w.material;if(Array.isArray(V)){let $=k.groups;for(let X=0,K=$.length;X<K;X++){let H=$[X],se=V[H.materialIndex];if(se&&se.visible){let I=y(w,se,S,v);w.onBeforeShadow(s,w,E,C,k,I,H),s.renderBufferDirect(C,null,k,I,w,H),w.onAfterShadow(s,w,E,C,k,I,H)}}}else if(V.visible){let $=y(w,V,S,v);w.onBeforeShadow(s,w,E,C,k,$,null),s.renderBufferDirect(C,null,k,$,w,null),w.onAfterShadow(s,w,E,C,k,$,null)}}let O=w.children;for(let k=0,V=O.length;k<V;k++)x(O[k],E,C,S,v)}function A(w){w.target.removeEventListener("dispose",A);for(let C in c){let S=c[C],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var WT={[ru]:su,[ou]:cu,[au]:uu,[Ns]:lu,[su]:ru,[cu]:ou,[uu]:au,[lu]:Ns};function XT(s,e){function t(){let D=!1,ue=new pt,Y=null,ee=new pt(0,0,0,0);return{setMask:function(W){Y!==W&&!D&&(s.colorMask(W,W,W,W),Y=W)},setLocked:function(W){D=W},setClear:function(W,J,Se,Ve,Xe){Xe===!0&&(W*=Ve,J*=Ve,Se*=Ve),ue.set(W,J,Se,Ve),ee.equals(ue)===!1&&(s.clearColor(W,J,Se,Ve),ee.copy(ue))},reset:function(){D=!1,Y=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,Y=null,ee=null,W=null;return{setReversed:function(J){if(ue!==J){let Se=e.get("EXT_clip_control");ue?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT);let Ve=W;W=null,this.setClear(Ve)}ue=J},getReversed:function(){return ue},setTest:function(J){J?oe(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(J){Y!==J&&!D&&(s.depthMask(J),Y=J)},setFunc:function(J){if(ue&&(J=WT[J]),ee!==J){switch(J){case ru:s.depthFunc(s.NEVER);break;case su:s.depthFunc(s.ALWAYS);break;case ou:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case au:s.depthFunc(s.EQUAL);break;case lu:s.depthFunc(s.GEQUAL);break;case cu:s.depthFunc(s.GREATER);break;case uu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=J}},setLocked:function(J){D=J},setClear:function(J){W!==J&&(ue&&(J=1-J),s.clearDepth(J),W=J)},reset:function(){D=!1,Y=null,ee=null,W=null,ue=!1}}}function i(){let D=!1,ue=null,Y=null,ee=null,W=null,J=null,Se=null,Ve=null,Xe=null;return{setTest:function(me){D||(me?oe(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(me){ue!==me&&!D&&(s.stencilMask(me),ue=me)},setFunc:function(me,Ae,Ze){(Y!==me||ee!==Ae||W!==Ze)&&(s.stencilFunc(me,Ae,Ze),Y=me,ee=Ae,W=Ze)},setOp:function(me,Ae,Ze){(J!==me||Se!==Ae||Ve!==Ze)&&(s.stencilOp(me,Ae,Ze),J=me,Se=Ae,Ve=Ze)},setLocked:function(me){D=me},setClear:function(me){Xe!==me&&(s.clearStencil(me),Xe=me)},reset:function(){D=!1,ue=null,Y=null,ee=null,W=null,J=null,Se=null,Ve=null,Xe=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,M=null,y=null,x=null,A=null,w=null,E=new He(0,0,0),C=0,S=!1,v=null,L=null,O=null,k=null,V=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let se=null,I={},ce=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Je=new pt().fromArray(ce),Z=new pt().fromArray(Pe);function ne(D,ue,Y,ee){let W=new Uint8Array(4),J=s.createTexture();s.bindTexture(D,J),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<Y;Se++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,W):s.texImage2D(ue+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,W);return J}let de={};de[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(s.DEPTH_TEST),o.setFunc(Ns),Oe(!1),B(jf),oe(s.CULL_FACE),P(Pr);function oe(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Te(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ue(D,ue){return h[D]!==ue?(s.bindFramebuffer(D,ue),h[D]=ue,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ce(D,ue){let Y=d,ee=!1;if(D){Y=f.get(ue),Y===void 0&&(Y=[],f.set(ue,Y));let W=D.textures;if(Y.length!==W.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let J=0,Se=W.length;J<Se;J++)Y[J]=s.COLOR_ATTACHMENT0+J;Y.length=W.length,ee=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ee=!0);ee&&s.drawBuffers(Y)}function je(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let qe={[es]:s.FUNC_ADD,[Kg]:s.FUNC_SUBTRACT,[$g]:s.FUNC_REVERSE_SUBTRACT};qe[Jg]=s.MIN,qe[jg]=s.MAX;let xe={[Qg]:s.ZERO,[e_]:s.ONE,[t_]:s.SRC_COLOR,[kc]:s.SRC_ALPHA,[a_]:s.SRC_ALPHA_SATURATE,[s_]:s.DST_COLOR,[i_]:s.DST_ALPHA,[n_]:s.ONE_MINUS_SRC_COLOR,[zc]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[r_]:s.ONE_MINUS_DST_ALPHA,[l_]:s.CONSTANT_COLOR,[c_]:s.ONE_MINUS_CONSTANT_COLOR,[u_]:s.CONSTANT_ALPHA,[h_]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,ue,Y,ee,W,J,Se,Ve,Xe,me){if(D===Pr){g===!0&&(Te(s.BLEND),g=!1);return}if(g===!1&&(oe(s.BLEND),g=!0),D!==Zg){if(D!==p||me!==S){if((m!==es||x!==es)&&(s.blendEquation(s.FUNC_ADD),m=es,x=es),me)switch(D){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.ONE,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,y=null,A=null,w=null,E.set(0,0,0),C=0,p=D,S=me}return}W=W||ue,J=J||Y,Se=Se||ee,(ue!==m||W!==x)&&(s.blendEquationSeparate(qe[ue],qe[W]),m=ue,x=W),(Y!==M||ee!==y||J!==A||Se!==w)&&(s.blendFuncSeparate(xe[Y],xe[ee],xe[J],xe[Se]),M=Y,y=ee,A=J,w=Se),(Ve.equals(E)===!1||Xe!==C)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Xe),E.copy(Ve),C=Xe),p=D,S=!1}function mt(D,ue){D.side===Jn?Te(s.CULL_FACE):oe(s.CULL_FACE);let Y=D.side===mn;ue&&(Y=!Y),Oe(Y),D.blending===Ds&&D.transparent===!1?P(Pr):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function B(D){D!==Xg?(oe(s.CULL_FACE),D!==L&&(D===jf?s.cullFace(s.BACK):D===qg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),L=D}function ye(D){D!==O&&(X&&s.lineWidth(D),O=D)}function nt(D,ue,Y){D?(oe(s.POLYGON_OFFSET_FILL),(k!==ue||V!==Y)&&(s.polygonOffset(ue,Y),k=ue,V=Y)):Te(s.POLYGON_OFFSET_FILL)}function Me(D){D?oe(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+$-1),se!==D&&(s.activeTexture(D),se=D)}function b(D,ue,Y){Y===void 0&&(se===null?Y=s.TEXTURE0+$-1:Y=se);let ee=I[Y];ee===void 0&&(ee={type:void 0,texture:void 0},I[Y]=ee),(ee.type!==D||ee.texture!==ue)&&(se!==Y&&(s.activeTexture(Y),se=Y),s.bindTexture(D,ue||de[D]),ee.type=D,ee.texture=ue)}function z(){let D=I[se];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Je.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function ve(D){Z.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Ye(D,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let ee=Y.get(D);ee===void 0&&(ee=s.getUniformBlockIndex(ue,D.name),Y.set(D,ee))}function Fe(D,ue){let ee=c.get(ue).get(D);l.get(ue)!==ee&&(s.uniformBlockBinding(ue,ee,D.__bindingPointIndex),l.set(ue,ee))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},se=null,I={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,M=null,y=null,x=null,A=null,w=null,E=new He(0,0,0),C=0,S=!1,v=null,L=null,O=null,k=null,V=null,Je.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Te,bindFramebuffer:Ue,drawBuffers:Ce,useProgram:je,setBlending:P,setMaterial:mt,setFlipSided:Oe,setCullFace:B,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:Me,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:te,compressedTexImage3D:Q,texImage2D:ae,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:Ge,texStorage3D:ie,texSubImage2D:j,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ie,viewport:ve,reset:ht}}function qT(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return d?new OffscreenCanvas(R,b):Fo("canvas")}function g(R,b,z){let te=1,Q=Me(R);if((Q.width>z||Q.height>z)&&(te=z/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(te*Q.width),he=Math.floor(te*Q.height);h===void 0&&(h=_(j,he));let le=b?_(j,he):h;return le.width=j,le.height=he,le.getContext("2d").drawImage(R,0,0,j,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+he+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,b,z,te,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),b===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGB8UI),z===s.UNSIGNED_SHORT&&(j=s.RGB16UI),z===s.UNSIGNED_INT&&(j=s.RGB32UI),z===s.BYTE&&(j=s.RGB8I),z===s.SHORT&&(j=s.RGB16I),z===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),z===s.UNSIGNED_INT&&(j=s.RGBA32UI),z===s.BYTE&&(j=s.RGBA8I),z===s.SHORT&&(j=s.RGBA16I),z===s.INT&&(j=s.RGBA32I)),b===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),b===s.RGBA){let he=Q?Ka:ft.getTransfer(te);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=he===Tt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,b){let z;return R?b===null||b===rs||b===qs?z=s.DEPTH24_STENCIL8:b===wi?z=s.DEPTH32F_STENCIL8:b===Ko&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===rs||b===qs?z=s.DEPTH_COMPONENT24:b===wi?z=s.DEPTH_COMPONENT32F:b===Ko&&(z=s.DEPTH_COMPONENT16),z}function A(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){let b=R.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&u.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),v(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,te=f.get(z);if(te){let Q=te[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(te).length===0&&f.delete(z)}n.remove(R)}function S(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let z=R.source,te=f.get(z);delete te[b.__cacheKey],o.memory.textures--}function v(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let Q=0;Q<b.__webglFramebuffer[te].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[te][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)s.deleteFramebuffer(b.__webglFramebuffer[te]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let te=0,Q=z.length;te<Q;te++){let j=n.get(z[te]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[te])}n.remove(R)}let L=0;function O(){L=0}function k(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function V(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function $(R,b){let z=n.get(R);if(R.isVideoTexture&&ye(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,R,b);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function X(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Z(z,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function K(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Z(z,R,b);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function H(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){ne(z,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}let se={[ts]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Oo]:s.MIRRORED_REPEAT},I={[dn]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Zo]:s.LINEAR_MIPMAP_NEAREST,[ki]:s.LINEAR_MIPMAP_LINEAR},ce={[A_]:s.NEVER,[L_]:s.ALWAYS,[w_]:s.LESS,[gd]:s.LEQUAL,[R_]:s.EQUAL,[I_]:s.GEQUAL,[C_]:s.GREATER,[P_]:s.NOTEQUAL};function Pe(R,b){if(b.type===wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Zo||b.magFilter===Xs||b.magFilter===ki||b.minFilter===Bn||b.minFilter===Zo||b.minFilter===Xs||b.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,se[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,se[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,se[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,I[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Xs&&b.minFilter!==ki||b.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Je(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));let te=b.source,Q=f.get(te);Q===void 0&&(Q={},f.set(te,Q));let j=V(b);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[j].usedTimes++;let he=Q[R.__cacheKey];he!==void 0&&(Q[R.__cacheKey].usedTimes--,he.usedTimes===0&&S(b)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return z}function Z(R,b,z){let te=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=s.TEXTURE_3D);let Q=Je(R,b),j=b.source;t.bindTexture(te,R.__webglTexture,s.TEXTURE0+z);let he=n.get(j);if(j.version!==he.__version||Q===!0){t.activeTexture(s.TEXTURE0+z);let le=ft.getPrimaries(ft.workingColorSpace),fe=b.colorSpace===Lr?null:ft.getPrimaries(b.colorSpace),Ge=b.colorSpace===Lr||le===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ie=g(b.image,!1,i.maxTextureSize);ie=nt(b,ie);let ae=r.convert(b.format,b.colorSpace),De=r.convert(b.type),Ie=y(b.internalFormat,ae,De,b.colorSpace,b.isVideoTexture);Pe(te,b);let ve,Ye=b.mipmaps,Fe=b.isVideoTexture!==!0,ht=he.__version===void 0||Q===!0,D=j.dataReady,ue=A(b,ie);if(b.isDepthTexture)Ie=x(b.format===Us,b.type),ht&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ie,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ae,De,null));else if(b.isDataTexture)if(Ye.length>0){Fe&&ht&&t.texStorage2D(s.TEXTURE_2D,ue,Ie,Ye[0].width,Ye[0].height);for(let Y=0,ee=Ye.length;Y<ee;Y++)ve=Ye[Y],Fe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ae,De,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Ie,ve.width,ve.height,0,ae,De,ve.data);b.generateMipmaps=!1}else Fe?(ht&&t.texStorage2D(s.TEXTURE_2D,ue,Ie,ie.width,ie.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,ae,De,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ae,De,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ie,Ye[0].width,Ye[0].height,ie.depth);for(let Y=0,ee=Ye.length;Y<ee;Y++)if(ve=Ye[Y],b.format!==pi)if(ae!==null)if(Fe){if(D)if(b.layerUpdates.size>0){let W=bd(ve.width,ve.height,b.format,b.type);for(let J of b.layerUpdates){let Se=ve.data.subarray(J*W/ve.data.BYTES_PER_ELEMENT,(J+1)*W/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,J,ve.width,ve.height,1,ae,Se)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,ae,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ie,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,ae,De,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ie,ve.width,ve.height,ie.depth,0,ae,De,ve.data)}else{Fe&&ht&&t.texStorage2D(s.TEXTURE_2D,ue,Ie,Ye[0].width,Ye[0].height);for(let Y=0,ee=Ye.length;Y<ee;Y++)ve=Ye[Y],b.format!==pi?ae!==null?Fe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ae,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ae,De,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Ie,ve.width,ve.height,0,ae,De,ve.data)}else if(b.isDataArrayTexture)if(Fe){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ie,ie.width,ie.height,ie.depth),D)if(b.layerUpdates.size>0){let Y=bd(ie.width,ie.height,b.format,b.type);for(let ee of b.layerUpdates){let W=ie.data.subarray(ee*Y/ie.data.BYTES_PER_ELEMENT,(ee+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ae,De,W)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,De,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,ae,De,ie.data);else if(b.isData3DTexture)Fe?(ht&&t.texStorage3D(s.TEXTURE_3D,ue,Ie,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,De,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,ae,De,ie.data);else if(b.isFramebufferTexture){if(ht)if(Fe)t.texStorage2D(s.TEXTURE_2D,ue,Ie,ie.width,ie.height);else{let Y=ie.width,ee=ie.height;for(let W=0;W<ue;W++)t.texImage2D(s.TEXTURE_2D,W,Ie,Y,ee,0,ae,De,null),Y>>=1,ee>>=1}}else if(Ye.length>0){if(Fe&&ht){let Y=Me(Ye[0]);t.texStorage2D(s.TEXTURE_2D,ue,Ie,Y.width,Y.height)}for(let Y=0,ee=Ye.length;Y<ee;Y++)ve=Ye[Y],Fe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ae,De,ve):t.texImage2D(s.TEXTURE_2D,Y,Ie,ae,De,ve);b.generateMipmaps=!1}else if(Fe){if(ht){let Y=Me(ie);t.texStorage2D(s.TEXTURE_2D,ue,Ie,Y.width,Y.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,De,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ie,ae,De,ie);p(b)&&m(te),he.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ne(R,b,z){if(b.image.length!==6)return;let te=Je(R,b),Q=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);let j=n.get(Q);if(Q.version!==j.__version||te===!0){t.activeTexture(s.TEXTURE0+z);let he=ft.getPrimaries(ft.workingColorSpace),le=b.colorSpace===Lr?null:ft.getPrimaries(b.colorSpace),fe=b.colorSpace===Lr||he===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ge=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,ae=[];for(let ee=0;ee<6;ee++)!Ge&&!ie?ae[ee]=g(b.image[ee],!0,i.maxCubemapSize):ae[ee]=ie?b.image[ee].image:b.image[ee],ae[ee]=nt(b,ae[ee]);let De=ae[0],Ie=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),Ye=y(b.internalFormat,Ie,ve,b.colorSpace),Fe=b.isVideoTexture!==!0,ht=j.__version===void 0||te===!0,D=Q.dataReady,ue=A(b,De);Pe(s.TEXTURE_CUBE_MAP,b);let Y;if(Ge){Fe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ye,De.width,De.height);for(let ee=0;ee<6;ee++){Y=ae[ee].mipmaps;for(let W=0;W<Y.length;W++){let J=Y[W];b.format!==pi?Ie!==null?Fe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W,0,0,J.width,J.height,Ie,J.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W,Ye,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W,0,0,J.width,J.height,Ie,ve,J.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W,Ye,J.width,J.height,0,Ie,ve,J.data)}}}else{if(Y=b.mipmaps,Fe&&ht){Y.length>0&&ue++;let ee=Me(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){Fe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ae[ee].width,ae[ee].height,Ie,ve,ae[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ae[ee].width,ae[ee].height,0,Ie,ve,ae[ee].data);for(let W=0;W<Y.length;W++){let Se=Y[W].image[ee].image;Fe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W+1,0,0,Se.width,Se.height,Ie,ve,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W+1,Ye,Se.width,Se.height,0,Ie,ve,Se.data)}}else{Fe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,ve,ae[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Ie,ve,ae[ee]);for(let W=0;W<Y.length;W++){let J=Y[W];Fe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W+1,0,0,Ie,ve,J.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W+1,Ye,Ie,ve,J.image[ee])}}}p(b)&&m(s.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,z,te,Q,j){let he=r.convert(z.format,z.colorSpace),le=r.convert(z.type),fe=y(z.internalFormat,he,le,z.colorSpace),Ge=n.get(b),ie=n.get(z);if(ie.__renderTarget=b,!Ge.__hasExternalTextures){let ae=Math.max(1,b.width>>j),De=Math.max(1,b.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,fe,ae,De,b.depth,0,he,le,null):t.texImage2D(Q,j,fe,ae,De,0,he,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),B(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,ie.__webglTexture,0,Oe(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,ie.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(R,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let te=b.depthTexture,Q=te&&te.isDepthTexture?te.type:null,j=x(b.stencilBuffer,Q),he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Oe(b);B(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,j,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,R)}else{let te=b.textures;for(let Q=0;Q<te.length;Q++){let j=te[Q],he=r.convert(j.format,j.colorSpace),le=r.convert(j.type),fe=y(j.internalFormat,he,le,j.colorSpace),Ge=Oe(b);z&&B(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,fe,b.width,b.height):B(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let Q=te.__webglTexture,j=Oe(b);if(b.depthTexture.format===Ls)B(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Us)B(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let te=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=te}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Te(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=s.createRenderbuffer(),oe(b.__webglDepthbuffer[te],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),oe(b.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(R,b,z){let te=n.get(R);b!==void 0&&de(te.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ue(R)}function je(R){let b=R.texture,z=n.get(R),te=n.get(b);R.addEventListener("dispose",E);let Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=b.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let fe=0;fe<b.mipmaps.length;fe++)z.__webglFramebuffer[le][fe]=s.createFramebuffer()}else z.__webglFramebuffer[le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)z.__webglFramebuffer[le]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(he)for(let le=0,fe=Q.length;le<fe;le++){let Ge=n.get(Q[le]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&B(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let fe=Q[le];z.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[le]);let Ge=r.convert(fe.format,fe.colorSpace),ie=r.convert(fe.type),ae=y(fe.internalFormat,Ge,ie,fe.colorSpace,R.isXRRenderTarget===!0),De=Oe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ae,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,z.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)de(z.__webglFramebuffer[le][fe],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else de(z.__webglFramebuffer[le],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let le=0,fe=Q.length;le<fe;le++){let Ge=Q[le],ie=n.get(Ge);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),Pe(s.TEXTURE_2D,Ge),de(z.__webglFramebuffer,R,Ge,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),p(Ge)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Pe(le,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)de(z.__webglFramebuffer[fe],R,b,s.COLOR_ATTACHMENT0,le,fe);else de(z.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,le,0);p(b)&&m(le),t.unbindTexture()}R.depthBuffer&&Ue(R)}function qe(R){let b=R.textures;for(let z=0,te=b.length;z<te;z++){let Q=b[z];if(p(Q)){let j=M(R),he=n.get(Q).__webglTexture;t.bindTexture(j,he),m(j),t.unbindTexture()}}}let xe=[],P=[];function mt(R){if(R.samples>0){if(B(R)===!1){let b=R.textures,z=R.width,te=R.height,Q=s.COLOR_BUFFER_BIT,j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(R),le=b.length>1;if(le)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Ge=n.get(b[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,z,te,0,0,z,te,Q,s.NEAREST),l===!0&&(xe.length=0,P.length=0,xe.push(s.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(xe.push(j),P.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Ge=n.get(b[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Oe(R){return Math.min(i.maxSamples,R.samples)}function B(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(R){let b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function nt(R,b){let z=R.colorSpace,te=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==pn&&z!==Lr&&(ft.getTransfer(z)===Tt?(te!==pi||Q!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ce,this.setupRenderTarget=je,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=de,this.useMultisampledRTT=B}function YT(s,e){function t(n,i=Lr){let r,o=ft.getTransfer(i);if(n===tr)return s.UNSIGNED_BYTE;if(n===mu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return s.BYTE;if(n===od)return s.SHORT;if(n===Ko)return s.UNSIGNED_SHORT;if(n===pu)return s.INT;if(n===rs)return s.UNSIGNED_INT;if(n===wi)return s.FLOAT;if(n===$o)return s.HALF_FLOAT;if(n===ld)return s.ALPHA;if(n===cd)return s.RGB;if(n===pi)return s.RGBA;if(n===ud)return s.LUMINANCE;if(n===hd)return s.LUMINANCE_ALPHA;if(n===Ls)return s.DEPTH_COMPONENT;if(n===Us)return s.DEPTH_STENCIL;if(n===_u)return s.RED;if(n===xu)return s.RED_INTEGER;if(n===fd)return s.RG;if(n===vu)return s.RG_INTEGER;if(n===yu)return s.RGBA_INTEGER;if(n===_l||n===xl||n===vl||n===yl)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mu||n===Su||n===bu||n===Tu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Su)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eu||n===Au||n===wu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eu||n===Au)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu||n===Ou||n===Fu||n===Bu||n===ku||n===zu||n===Hu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ru)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Iu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Du)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ou)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ku)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Vu||n===Gu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dd||n===Wu||n===Xu||n===qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new ln,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:ZT,fragmentShader:KT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fd=class extends Mr{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null,g=new Od,p=t.getContextAttributes(),m=null,M=null,y=[],x=[],A=new $e,w=null,E=new $t;E.viewport=new pt;let C=new $t;C.viewport=new pt;let S=[E,C],v=new iu,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=y[Z];return ne===void 0&&(ne=new ko,y[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=y[Z];return ne===void 0&&(ne=new ko,y[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=y[Z];return ne===void 0&&(ne=new ko,y[Z]=ne),ne.getHandSpace()};function k(Z){let ne=x.indexOf(Z.inputSource);if(ne===-1)return;let de=y[ne];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||o),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",$);for(let Z=0;Z<y.length;Z++){let ne=x[Z];ne!==null&&(x[Z]=null,y[Z].disconnect(ne))}L=null,O=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,oe=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?Us:Ls,oe=p.stencil?qs:rs);let Ue={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ki(f.textureWidth,f.textureHeight,{format:pi,type:tr,depthTexture:new cl(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ki(d.framebufferWidth,d.framebufferHeight,{format:pi,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Z){for(let ne=0;ne<Z.removed.length;ne++){let de=Z.removed[ne],oe=x.indexOf(de);oe>=0&&(x[oe]=null,y[oe].disconnect(de))}for(let ne=0;ne<Z.added.length;ne++){let de=Z.added[ne],oe=x.indexOf(de);if(oe===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(de),oe=Ue;break}else if(x[Ue]===null){x[Ue]=de,oe=Ue;break}if(oe===-1)break}let Te=y[oe];Te&&Te.connect(de)}}let X=new F,K=new F;function H(Z,ne,de){X.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);let oe=X.distanceTo(K),Te=ne.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Ce=Te[14]/(Te[10]-1),je=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],xe=(Te[9]-1)/Te[5],P=(Te[8]-1)/Te[0],mt=(Ue[8]+1)/Ue[0],Oe=Ce*P,B=Ce*mt,ye=oe/(-P+mt),nt=ye*-P;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(nt),Z.translateZ(ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Me=Ce+ye,R=je+ye,b=Oe-nt,z=B+(oe-nt),te=qe*je/R*Me,Q=xe*je/R*Me;Z.projectionMatrix.makePerspective(b,z,te,Q,Me,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ne=Z.near,de=Z.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(de=g.depthFar)),v.near=C.near=E.near=ne,v.far=C.far=E.far=de,(L!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,O=v.far),E.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,v.layers.mask=E.layers.mask|C.layers.mask;let oe=Z.parent,Te=v.cameras;se(v,oe);for(let Ue=0;Ue<Te.length;Ue++)se(Te[Ue],oe);Te.length===2?H(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),I(Z,v,oe)};function I(Z,ne,de){de===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ce=null;function Pe(Z,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){let de=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let oe=!1;de.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ce=0;Ce<de.length;Ce++){let je=de[Ce],qe=null;if(d!==null)qe=d.getViewport(je);else{let P=h.getViewSubImage(f,je);qe=P.viewport,Ce===0&&(e.setRenderTargetTextures(M,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(M))}let xe=S[Ce];xe===void 0&&(xe=new $t,xe.layers.enable(Ce),xe.viewport=new pt,S[Ce]=xe),xe.matrix.fromArray(je.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(je.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(qe.x,qe.y,qe.width,qe.height),Ce===0&&(v.matrix.copy(xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(xe)}let Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){let Ce=h.getDepthInformation(de[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,i.renderState)}}for(let de=0;de<y.length;de++){let oe=x[de],Te=y[de];oe!==null&&Te!==void 0&&Te.update(oe,ne,c||o)}ce&&ce(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}let Je=new u0;Je.setAnimationLoop(Pe),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}},Ks=new Bi,$T=new et;function JT(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,yd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),y=M.envMap,x=M.envMapRotation;y&&(p.envMap.value=y,Ks.copy(x),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),p.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(Ks)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jT(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=i[M.id];x===void 0&&(_(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",p));let A=y.program;n.updateUBOMapping(M,A);let w=e.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function u(M){let y=h();M.__bindingPointIndex=y;let x=s.createBuffer(),A=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=i[M.id],x=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){let C=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,v=C.length;S<v;S++){let L=C[S];if(d(L,w,S,A)===!0){let O=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],V=0;for(let $=0;$<k.length;$++){let X=k[$],K=g(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+V,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,y,x,A){let w=M.value,E=y+"_"+x;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{let C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(M){let y=M.uniforms,x=0,A=16;for(let E=0,C=y.length;E<C;E++){let S=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,L=S.length;v<L;v++){let O=S[v],k=Array.isArray(O.value)?O.value:[O.value];for(let V=0,$=k.length;V<$;V++){let X=k[V],K=g(X),H=x%A,se=H%K.boundary,I=H+se;x+=se,I!==0&&A-I<K.storage&&(x+=A-I),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}let w=x%A;return w>0&&(x+=A-w),M.__size=x,M.__cache={},this}function g(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){let y=M.target;y.removeEventListener("dispose",p);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var na=class{constructor(e={}){let{canvas:t=D_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),g=new Int32Array(4),p=null,m=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Ir,this.toneMappingExposure=1;let x=this,A=!1,w=0,E=0,C=null,S=-1,v=null,L=new pt,O=new pt,k=null,V=new He(0),$=0,X=t.width,K=t.height,H=1,se=null,I=null,ce=new pt(0,0,X,K),Pe=new pt(0,0,X,K),Je=!1,Z=new Go,ne=!1,de=!1;this.transmissionResolutionScale=1;let oe=new et,Te=new et,Ue=new F,Ce=new pt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function xe(){return C===null?H:1}let P=n;function mt(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"174"}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",J,!1),P===null){let U="webgl2";if(P=mt(U,T),P===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,B,ye,nt,Me,R,b,z,te,Q,j,he,le,fe,Ge,ie,ae,De,Ie,ve,Ye,Fe,ht,D;function ue(){Oe=new gb(P),Oe.init(),Fe=new YT(P,Oe),B=new cb(P,Oe,e,Fe),ye=new XT(P,Oe),B.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),nt=new vb(P),Me=new LT,R=new qT(P,Oe,ye,Me,B,Fe,nt),b=new hb(x),z=new mb(x),te=new Ey(P),ht=new ab(P,te),Q=new _b(P,te,nt,ht),j=new Mb(P,Q,te,nt),Ie=new yb(P,B,R),ie=new ub(Me),he=new IT(x,b,z,Oe,B,ht,ie),le=new JT(x,Me),fe=new NT,Ge=new zT(Oe),De=new ob(x,b,z,ye,j,d,l),ae=new GT(x,j,B),D=new jT(P,nt,B,ye),ve=new lb(P,Oe,nt),Ye=new xb(P,Oe,nt),nt.programs=he.programs,x.capabilities=B,x.extensions=Oe,x.properties=Me,x.renderLists=fe,x.shadowMap=ae,x.state=ye,x.info=nt}ue();let Y=new Fd(x,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,U,q=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=U,t.width=Math.floor(T*H),t.height=Math.floor(U*H),q===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(T,U,q){X=T,K=U,H=q,t.width=Math.floor(T*q),t.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,U,q,G){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,U,q,G),ye.viewport(L.copy(ce).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Pe)},this.setScissor=function(T,U,q,G){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,U,q,G),ye.scissor(O.copy(Pe).multiplyScalar(H).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){ye.setScissorTest(Je=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let G=0;if(T){let N=!1;if(C!==null){let re=C.texture.format;N=re===yu||re===vu||re===xu}if(N){let re=C.texture.type,ge=re===tr||re===rs||re===Ko||re===qs||re===mu||re===gu,Ee=De.getClearColor(),be=De.getClearAlpha(),Ne=Ee.r,ze=Ee.g,Le=Ee.b;ge?(_[0]=Ne,_[1]=ze,_[2]=Le,_[3]=be,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Ne,g[1]=ze,g[2]=Le,g[3]=be,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),q&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",J,!1),De.dispose(),fe.dispose(),Ge.dispose(),Me.dispose(),b.dispose(),z.dispose(),j.dispose(),ht.dispose(),D.dispose(),he.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",pe),Y.removeEventListener("sessionend",Be),we.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=nt.autoReset,U=ae.enabled,q=ae.autoUpdate,G=ae.needsUpdate,N=ae.type;ue(),nt.autoReset=T,ae.enabled=U,ae.autoUpdate=q,ae.needsUpdate=G,ae.type=N}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Se(T){let U=T.target;U.removeEventListener("dispose",Se),Ve(U)}function Ve(T){Xe(T),Me.remove(T)}function Xe(T){let U=Me.get(T).programs;U!==void 0&&(U.forEach(function(q){he.releaseProgram(q)}),T.isShaderMaterial&&he.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,G,N,re){U===null&&(U=je);let ge=N.isMesh&&N.matrixWorld.determinant()<0,Ee=jn(T,U,q,G,N);ye.setMaterial(G,ge);let be=q.index,Ne=1;if(G.wireframe===!0){if(be=Q.getWireframeAttribute(q),be===void 0)return;Ne=2}let ze=q.drawRange,Le=q.attributes.position,Qe=ze.start*Ne,vt=(ze.start+ze.count)*Ne;re!==null&&(Qe=Math.max(Qe,re.start*Ne),vt=Math.min(vt,(re.start+re.count)*Ne)),be!==null?(Qe=Math.max(Qe,0),vt=Math.min(vt,be.count)):Le!=null&&(Qe=Math.max(Qe,0),vt=Math.min(vt,Le.count));let qt=vt-Qe;if(qt<0||qt===1/0)return;ht.setup(N,G,Ee,q,be);let kt,gt=ve;if(be!==null&&(kt=te.get(be),gt=Ye,gt.setIndex(kt)),N.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*xe()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(N.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),ye.setLineWidth(ke*xe()),N.isLineSegments?gt.setMode(P.LINES):N.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else N.isPoints?gt.setMode(P.POINTS):N.isSprite&&gt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))gt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let ke=N._multiDrawStarts,cn=N._multiDrawCounts,yt=N._multiDrawCount,Ci=be?te.get(be).bytesPerElement:1,Qs=Me.get(G).currentProgram.getUniforms();for(let Qn=0;Qn<yt;Qn++)Qs.setValue(P,"_gl_DrawID",Qn),gt.render(ke[Qn]/Ci,cn[Qn])}else if(N.isInstancedMesh)gt.renderInstances(Qe,qt,N.count);else if(q.isInstancedBufferGeometry){let ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,cn=Math.min(q.instanceCount,ke);gt.renderInstances(Qe,qt,cn)}else gt.render(Qe,qt)};function me(T,U,q){T.transparent===!0&&T.side===Jn&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,At(T,U,q),T.side=Fi,T.needsUpdate=!0,At(T,U,q),T.side=Jn):At(T,U,q)}this.compile=function(T,U,q=null){q===null&&(q=T),m=Ge.get(q),m.init(U),y.push(m),q.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),T!==q&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let re=N.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let Ee=re[ge];me(Ee,q,N),G.add(Ee)}else me(re,q,N),G.add(re)}),m=y.pop(),G},this.compileAsync=function(T,U,q=null){let G=this.compile(T,U,q);return new Promise(N=>{function re(){if(G.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){N(T);return}setTimeout(re,10)}Oe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ae=null;function Ze(T){Ae&&Ae(T)}function pe(){we.stop()}function Be(){we.start()}let we=new u0;we.setAnimationLoop(Ze),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(T){Ae=T,Y.setAnimationLoop(T),T===null?we.stop():we.start()},Y.addEventListener("sessionstart",pe),Y.addEventListener("sessionend",Be),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,C),m=Ge.get(T,y.length),m.init(U),y.push(m),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Te),de=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,de),p=fe.get(T,M.length),p.init(),M.push(p),Y.enabled===!0&&Y.isPresenting===!0){let re=x.xr.getDepthSensingMesh();re!==null&&We(re,U,-1/0,x.sortObjects)}We(T,U,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(se,I),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&De.addToRenderList(p,T),this.info.render.frame++,ne===!0&&ie.beginShadows();let q=m.state.shadowsArray;ae.render(q,T,U),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=p.opaque,N=p.transmissive;if(m.setupLights(),U.isArrayCamera){let re=U.cameras;if(N.length>0)for(let ge=0,Ee=re.length;ge<Ee;ge++){let be=re[ge];at(G,N,T,be)}qe&&De.render(T);for(let ge=0,Ee=re.length;ge<Ee;ge++){let be=re[ge];Gt(p,T,be,be.viewport)}}else N.length>0&&at(G,N,T,U),qe&&De.render(T),Gt(p,T,U);C!==null&&E===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,U),ht.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(m=y[y.length-1],ne===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function We(T,U,q,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){G&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);let ge=j.update(T),Ee=T.material;Ee.visible&&p.push(T,ge,Ee,q,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let ge=j.update(T),Ee=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ce.copy(ge.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Ee)){let be=ge.groups;for(let Ne=0,ze=be.length;Ne<ze;Ne++){let Le=be[Ne],Qe=Ee[Le.materialIndex];Qe&&Qe.visible&&p.push(T,ge,Qe,q,Ce.z,Le)}}else Ee.visible&&p.push(T,ge,Ee,q,Ce.z,null)}}let re=T.children;for(let ge=0,Ee=re.length;ge<Ee;ge++)We(re[ge],U,q,G)}function Gt(T,U,q,G){let N=T.opaque,re=T.transmissive,ge=T.transparent;m.setupLightsView(q),ne===!0&&ie.setGlobalState(x.clippingPlanes,q),G&&ye.viewport(L.copy(G)),N.length>0&&Pt(N,U,q),re.length>0&&Pt(re,U,q),ge.length>0&&Pt(ge,U,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function at(T,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ki(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?$o:tr,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let re=m.state.transmissionRenderTarget[G.id],ge=G.viewport||L;re.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);let Ee=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(V),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),qe&&De.render(q);let be=x.toneMapping;x.toneMapping=Ir;let Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),ne===!0&&ie.setGlobalState(x.clippingPlanes,G),Pt(T,q,G),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,Qe=U.length;Le<Qe;Le++){let vt=U[Le],qt=vt.object,kt=vt.geometry,gt=vt.material,ke=vt.group;if(gt.side===Jn&&qt.layers.test(G.layers)){let cn=gt.side;gt.side=mn,gt.needsUpdate=!0,Jt(qt,q,G,kt,gt,ke),gt.side=cn,gt.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}x.setRenderTarget(Ee),x.setClearColor(V,$),Ne!==void 0&&(G.viewport=Ne),x.toneMapping=be}function Pt(T,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=T.length;N<re;N++){let ge=T[N],Ee=ge.object,be=ge.geometry,Ne=G===null?ge.material:G,ze=ge.group;Ee.layers.test(q.layers)&&Jt(Ee,U,q,be,Ne,ze)}}function Jt(T,U,q,G,N,re){T.onBeforeRender(x,U,q,G,N,re),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,U,q,G,T,re),N.transparent===!0&&N.side===Jn&&N.forceSinglePass===!1?(N.side=mn,N.needsUpdate=!0,x.renderBufferDirect(q,U,G,N,T,re),N.side=Fi,N.needsUpdate=!0,x.renderBufferDirect(q,U,G,N,T,re),N.side=Jn):x.renderBufferDirect(q,U,G,N,T,re),T.onAfterRender(x,U,q,G,N,re)}function At(T,U,q){U.isScene!==!0&&(U=je);let G=Me.get(T),N=m.state.lights,re=m.state.shadowsArray,ge=N.state.version,Ee=he.getParameters(T,N.state,re,U,q),be=he.getProgramCacheKey(Ee),Ne=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Se),Ne=new Map,G.programs=Ne);let ze=Ne.get(be);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===ge)return xt(T,Ee),ze}else Ee.uniforms=he.getUniforms(T),T.onBeforeCompile(Ee,x),ze=he.acquireProgram(Ee,be),Ne.set(be,ze),G.uniforms=Ee.uniforms;let Le=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ie.uniform),xt(T,Ee),G.needsLights=wn(T),G.lightsStateVersion=ge,G.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function wt(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ea.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function xt(T,U){let q=Me.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function jn(T,U,q,G,N){U.isScene!==!0&&(U=je),R.resetTextureUnits();let re=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,Ee=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pn,be=(G.isMeshStandardMaterial?z:b).get(G.envMap||ge),Ne=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,vt=!!q.morphAttributes.color,qt=Ir;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qt=x.toneMapping);let kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=kt!==void 0?kt.length:0,ke=Me.get(G),cn=m.state.lights;if(ne===!0&&(de===!0||T!==v)){let Rn=T===v&&G.id===S;ie.setState(G,T,Rn)}let yt=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==cn.state.version||ke.outputColorSpace!==Ee||N.isBatchedMesh&&ke.batching===!1||!N.isBatchedMesh&&ke.batching===!0||N.isBatchedMesh&&ke.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ke.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ke.instancing===!1||!N.isInstancedMesh&&ke.instancing===!0||N.isSkinnedMesh&&ke.skinning===!1||!N.isSkinnedMesh&&ke.skinning===!0||N.isInstancedMesh&&ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ke.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ke.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ke.instancingMorph===!1&&N.morphTexture!==null||ke.envMap!==be||G.fog===!0&&ke.fog!==re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ie.numPlanes||ke.numIntersection!==ie.numIntersection)||ke.vertexAlphas!==Ne||ke.vertexTangents!==ze||ke.morphTargets!==Le||ke.morphNormals!==Qe||ke.morphColors!==vt||ke.toneMapping!==qt||ke.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,ke.__version=G.version);let Ci=ke.currentProgram;yt===!0&&(Ci=At(G,U,N));let Qs=!1,Qn=!1,oa=!1,Lt=Ci.getUniforms(),gi=ke.uniforms;if(ye.useProgram(Ci.program)&&(Qs=!0,Qn=!0,oa=!0),G.id!==S&&(S=G.id,Qn=!0),Qs||v!==T){ye.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),U_(oe),O_(oe),Lt.setValue(P,"projectionMatrix",oe)):Lt.setValue(P,"projectionMatrix",T.projectionMatrix),Lt.setValue(P,"viewMatrix",T.matrixWorldInverse);let Hn=Lt.map.cameraPosition;Hn!==void 0&&Hn.setValue(P,Ue.setFromMatrixPosition(T.matrixWorld)),B.logarithmicDepthBuffer&&Lt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Lt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Qn=!0,oa=!0)}if(N.isSkinnedMesh){Lt.setOptional(P,N,"bindMatrix"),Lt.setOptional(P,N,"bindMatrixInverse");let Rn=N.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Lt.setValue(P,"boneTexture",Rn.boneTexture,R))}N.isBatchedMesh&&(Lt.setOptional(P,N,"batchingTexture"),Lt.setValue(P,"batchingTexture",N._matricesTexture,R),Lt.setOptional(P,N,"batchingIdTexture"),Lt.setValue(P,"batchingIdTexture",N._indirectTexture,R),Lt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Lt.setValue(P,"batchingColorTexture",N._colorsTexture,R));let _i=q.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Ie.update(N,q,Ci),(Qn||ke.receiveShadow!==N.receiveShadow)&&(ke.receiveShadow=N.receiveShadow,Lt.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gi.envMap.value=be,gi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),Qn&&(Lt.setValue(P,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&It(gi,oa),re&&G.fog===!0&&le.refreshFogUniforms(gi,re),le.refreshMaterialUniforms(gi,G,H,K,m.state.transmissionRenderTarget[T.id]),ea.upload(P,wt(ke),gi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ea.upload(P,wt(ke),gi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Lt.setValue(P,"center",N.center),Lt.setValue(P,"modelViewMatrix",N.modelViewMatrix),Lt.setValue(P,"normalMatrix",N.normalMatrix),Lt.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Rn=G.uniformsGroups;for(let Hn=0,th=Rn.length;Hn<th;Hn++){let as=Rn[Hn];D.update(as,Ci),D.bind(as,Ci)}}return Ci}function It(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function wn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,q){Me.get(T.texture).__webglTexture=U,Me.get(T.depthTexture).__webglTexture=q;let G=Me.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let q=Me.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0};let mi=P.createFramebuffer();this.setRenderTarget=function(T,U=0,q=0){C=T,w=U,E=q;let G=!0,N=null,re=!1,ge=!1;if(T){let be=Me.get(T);if(be.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(be.__hasExternalTextures)R.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Le=T.depthTexture;if(be.__boundDepthTexture!==Le){if(Le!==null&&Me.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);let ze=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?N=ze[U][q]:N=ze[U],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[q]:N=ze,L.copy(T.viewport),O.copy(T.scissor),k=T.scissorTest}else L.copy(ce).multiplyScalar(H).floor(),O.copy(Pe).multiplyScalar(H).floor(),k=Je;if(q!==0&&(N=mi),ye.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&ye.drawBuffers(T,N),ye.viewport(L),ye.scissor(O),ye.setScissorTest(k),re){let be=Me.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,q)}else if(ge){let be=Me.get(T.texture),Ne=U;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,q,Ne)}else if(T!==null&&q!==0){let be=Me.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(T,U,q,G,N,re,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){ye.bindFramebuffer(P.FRAMEBUFFER,Ee);try{let be=T.texture,Ne=be.format,ze=be.type;if(!B.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&q>=0&&q<=T.height-N&&P.readPixels(U,q,G,N,Fe.convert(Ne),Fe.convert(ze),re)}finally{let be=C!==null?Me.get(C).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,G,N,re,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){let be=T.texture,Ne=be.format,ze=be.type;if(!B.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-G&&q>=0&&q<=T.height-N){ye.bindFramebuffer(P.FRAMEBUFFER,Ee);let Le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(U,q,G,N,Fe.convert(Ne),Fe.convert(ze),0);let Qe=C!==null?Me.get(C).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Qe);let vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await N_(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(Le),P.deleteSync(vt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,q=0){T.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let G=Math.pow(2,-q),N=Math.floor(T.image.width*G),re=Math.floor(T.image.height*G),ge=U!==null?U.x:0,Ee=U!==null?U.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,ge,Ee,N,re),ye.unbindTexture()};let jt=P.createFramebuffer(),Qt=P.createFramebuffer();this.copyTextureToTexture=function(T,U,q=null,G=null,N=0,re=null){T.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],U=arguments[2],re=arguments[3]||0,q=null),re===null&&(N!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=N,N=0):re=0);let ge,Ee,be,Ne,ze,Le,Qe,vt,qt,kt=T.isCompressedTexture?T.mipmaps[re]:T.image;if(q!==null)ge=q.max.x-q.min.x,Ee=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,ze=q.min.y,Le=q.isBox3?q.min.z:0;else{let _i=Math.pow(2,-N);ge=Math.floor(kt.width*_i),Ee=Math.floor(kt.height*_i),T.isDataArrayTexture?be=kt.depth:T.isData3DTexture?be=Math.floor(kt.depth*_i):be=1,Ne=0,ze=0,Le=0}G!==null?(Qe=G.x,vt=G.y,qt=G.z):(Qe=0,vt=0,qt=0);let gt=Fe.convert(U.format),ke=Fe.convert(U.type),cn;U.isData3DTexture?(R.setTexture3D(U,0),cn=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),cn=P.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),cn=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let yt=P.getParameter(P.UNPACK_ROW_LENGTH),Ci=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Qs=P.getParameter(P.UNPACK_SKIP_PIXELS),Qn=P.getParameter(P.UNPACK_SKIP_ROWS),oa=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,kt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,kt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le);let Lt=T.isDataArrayTexture||T.isData3DTexture,gi=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let _i=Me.get(T),Rn=Me.get(U),Hn=Me.get(_i.__renderTarget),th=Me.get(Rn.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Hn.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,th.__webglFramebuffer);for(let as=0;as<be;as++)Lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(T).__webglTexture,N,Le+as),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,re,qt+as)),P.blitFramebuffer(Ne,ze,ge,Ee,Qe,vt,ge,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||Me.has(T)){let _i=Me.get(T),Rn=Me.get(U);ye.bindFramebuffer(P.READ_FRAMEBUFFER,jt),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qt);for(let Hn=0;Hn<be;Hn++)Lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_i.__webglTexture,N,Le+Hn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_i.__webglTexture,N),gi?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rn.__webglTexture,re,qt+Hn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rn.__webglTexture,re),N!==0?P.blitFramebuffer(Ne,ze,ge,Ee,Qe,vt,ge,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):gi?P.copyTexSubImage3D(cn,re,Qe,vt,qt+Hn,Ne,ze,ge,Ee):P.copyTexSubImage2D(cn,re,Qe,vt,Ne,ze,ge,Ee);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gi?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(cn,re,Qe,vt,qt,ge,Ee,be,gt,ke,kt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(cn,re,Qe,vt,qt,ge,Ee,be,gt,kt.data):P.texSubImage3D(cn,re,Qe,vt,qt,ge,Ee,be,gt,ke,kt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,Qe,vt,ge,Ee,gt,ke,kt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,Qe,vt,kt.width,kt.height,gt,kt.data):P.texSubImage2D(P.TEXTURE_2D,re,Qe,vt,ge,Ee,gt,ke,kt);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ci),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,oa),re===0&&U.generateMipmaps&&P.generateMipmap(cn),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,U,q=null,G=null,N=0){return T.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,G=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,q,G,N)},this.initRenderTarget=function(T){Me.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,ye.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};function kd(s,e){if(e===pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Jo||e===Sl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Jo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ju=class extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new ip(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new sp(t)}),this.register(function(t){return new op(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Cr.extractUrlBase(e);o=Cr.resolveURL(c,this.path)}else o=Cr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===y0){try{o[ut.KHR_BINARY_GLTF]=new ap(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new pp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ut.KHR_MATERIALS_UNLIT:o[h]=new Wd;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[h]=new lp(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[h]=new cp;break;case ut.KHR_MESH_QUANTIZATION:o[h]=new up;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function QT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gd=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new He(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vs(u),c.distance=h;break;case"spot":c=new pl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Dr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Wd=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){let i=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(i)}},Xd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},qd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},Yd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Zd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Kd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},$d=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Jd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}},jd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xt)),Promise.all(r)}},ep=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},tp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},np=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ip=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},rp=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},sp=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},op=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ri.TRIANGLES&&c.mode!==Ri.TRIANGLE_STRIP&&c.mode!==Ri.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let _ of h){let g=new et,p=new F,m=new Ei,M=new F(1,1,1),y=new ol(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(p,m,M));for(let x in l)if(x==="_COLOR_0"){let A=l[x];y.instanceColor=new is(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Bt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},y0="glTF",Tl=12,g0={JSON:1313821514,BIN:5130562},ap=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Tl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Tl,r=new DataView(e,Tl),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===g0.JSON){let c=new Uint8Array(e,Tl+o,a);this.content=n.decode(c)}else if(l===g0.BIN){let c=Tl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},lp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=fp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=fp[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=ra[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let _ in d.attributes){let g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},a,c,pn,f)})})}},cp=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},up=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},ju=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,M=1-p,y=m-f+h;for(let x=0;x!==a;x++){let A=o[g+x+a],w=o[g+x+l]*u,E=o[_+x+a],C=o[_+x]*u;r[x]=M*A+y*w+p*E+m*C}return r}},eE=new Ei,hp=class extends ju{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return eE.fromArray(r).normalize().toArray(r),r}},Ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_0={9728:dn,9729:Bn,9984:du,9985:Zo,9986:Xs,9987:ki},x0={33071:Yi,33648:Oo,10497:ts},zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tE={CUBICSPLINE:void 0,LINEAR:Fs,STEP:Os},Hd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ai({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),s.DefaultMaterial}function js(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function rE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sE(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vd(t.attributes):e=s.indices+":"+Vd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Vd(s.targets[n]);return e}function Vd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dp(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var aE=new et,pp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new fl(this.options.manager):this.textureLoader=new ml(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return js(r,a,i),Dr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Cr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=zd[i.type],a=ra[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Nt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=zd[i.type],c=ra[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,g,p;if(d&&d!==h){let m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,y=t.cache.get(M);y||(g=new c(a,m*d,i.count*d/u),y=new zo(g,d/u),t.cache.add(M,y)),p=new Ho(y,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Nt(g,l,_);if(i.sparse!==void 0){let m=zd.SCALAR,M=ra[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new M(o[1],y,i.sparse.count*m),w=new c(o[2],x,i.sparse.count*l);a!==null&&(p=new Nt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,C=A.length;E<C;E++){let S=A[E];if(p.setX(S,w[E*l]),l>=2&&p.setY(S,w[E*l+1]),l>=3&&p.setZ(S,w[E*l+2]),l>=4&&p.setW(S,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=_0[f.magFilter]||Bn,u.minFilter=_0[f.minFilter]||ki,u.wrapS=x0[f.wrapS]||ts,u.wrapT=x0[f.wrapT]||ts,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==dn&&u.minFilter!==Bn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let p=new ln(g);p.needsUpdate=!0,f(p)}),t.load(Cr.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Dr(h,o),h.userData.mimeType=o.mimeType||oE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xo,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Wo,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ai}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let h=i[ut.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],pn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jn);let u=r.alphaMode||Hd.OPAQUE;if(u===Hd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Hd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==fi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fi){let h=r.emissiveFactor;a.emissive=new He().setRGB(h[0],h[1],h[2],pn)}return r.emissiveTexture!==void 0&&o!==fi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Dr(h,r),t.associations.set(h,{materials:e}),r.extensions&&js(i,h,r),h})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return v0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=sE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=v0(new kn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?nE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){let g=u[d],p=o[d],m,M=c[d];if(p.mode===Ri.TRIANGLES||p.mode===Ri.TRIANGLE_STRIP||p.mode===Ri.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new il(g,M):new lt(g,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ri.TRIANGLE_STRIP?m.geometry=kd(m.geometry,Sl):p.mode===Ri.TRIANGLE_FAN&&(m.geometry=kd(m.geometry,Jo));else if(p.mode===Ri.LINES)m=new al(g,M);else if(p.mode===Ri.LINE_STRIP)m=new zs(g,M);else if(p.mode===Ri.LINE_LOOP)m=new ll(g,M);else if(p.mode===Ri.POINTS)m=new Hs(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&rE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Dr(m,r),p.extensions&&js(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&js(i,h[0],r),h[0];let f=new ci;r.extensions&&js(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(zn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new et;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let M=0,y=f.length;M<y;M++){let x=f[M],A=d[M],w=_[M],E=g[M],C=p[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let S=n._createAnimationTracks(x,A,w,E,C);if(S)for(let v=0;v<S.length;v++)m.push(S[v])}return new hl(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,aE)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Vo:c.length>1?u=new ci:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Dr(u,r),r.extensions&&js(n,u,r),r.matrix!==void 0){let h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ci;n.name&&(r.name=i.createUniqueName(n.name)),Dr(r,n),n.extensions&&js(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof Kn||f instanceof ln)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];os[r.path]===os.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(os[r.path]){case os.weights:c=$i;break;case os.rotation:c=Ji;break;case os.position:case os.scale:c=ji;break;default:switch(n.itemSize){case 1:c=$i;break;case 2:case 3:default:c=ji;break}break}let u=i.interpolation!==void 0?tE[i.interpolation]:Fs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let _=new c(l[f]+"."+os[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=dp(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ji?hp:ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lE(s,e,t){let n=e.attributes,i=new hi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let u=dp(ra[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){let g=dp(ra[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function v0(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=fp[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ft.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Dr(s,e),lE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iE(s,e.targets,t):s})}var Qu=class extends Sr{constructor(){super();let e=new ns;e.deleteAttribute("uv");let t=new Ai({side:mn}),n=new Ai,i=new Vs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new lt(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new lt(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new lt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new lt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new lt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new lt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new lt(e,sa(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new lt(e,sa(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let _=new lt(e,sa(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let g=new lt(e,sa(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let p=new lt(e,sa(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new lt(e,sa(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function sa(s){let e=new fi;return e.color.setScalar(s),e}function M0(s,e,t={}){let n;try{n=new na({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return t.onFallback?.(),{ready:Promise.resolve(!1),setHandoff(){},setReveal(){},setScrollProgress(){},renderOnce(){},dispose(){}}}n.setClearColor(0,0),n.outputColorSpace=Xt;let i=new Sr,r=new $t(35,1,.1,100);r.position.z=6;let o=new ci;i.add(o);let a={uTime:{value:0},uReveal:{value:0},uScroll:{value:0},uPointer:{value:new $e(.5,.5)},uMotion:{value:0},uHandoff:{value:1},uResolution:{value:new $e(1,1)},uMobile:{value:0}},l=new ta(n),c=l.fromScene(new Qu,.08).texture;i.environment=c,i.environmentIntensity=.55;let u=new Rr(16048127,1.15);u.position.set(-3,4,5),i.add(u);let h=new Rr(4308991,1.05);h.position.set(4,1,3),i.add(h);let f=new Rr(9253119,.8);f.position.set(-4,-2,1),i.add(f);let d=document.createElement("div");d.className="hero__sculpture-control",d.tabIndex=0,d.setAttribute("role","group"),d.setAttribute("aria-label","Rotate the Pallindrome emblem. Drag or use arrow keys; press Home to reset."),e.appendChild(d),e.classList.add("has-sculpture-control");let _=0,g=0,p=!1,m=-1,M=0,y=0,x=0,A=0,w=!!t.reducedMotion,E=1,C=()=>{},S=new Promise(W=>{C=W}),v=null;new Ju().load("/static/models/loader-emblem.glb",W=>{if(qe){W.scene.traverse(J=>{J instanceof lt&&(J.geometry.dispose(),(Array.isArray(J.material)?J.material:[J.material]).forEach(Ve=>Ve.dispose()))});return}v=W.scene,v.traverse(J=>{if(!(J instanceof lt))return;(Array.isArray(J.material)?J.material:[J.material]).forEach(Ve=>{Ve instanceof Ai&&(Ve.side=Jn,Ve.onBeforeCompile=Xe=>{Xe.uniforms.uHandoff=a.uHandoff,Xe.uniforms.uTime=a.uTime,Xe.uniforms.uMotion=a.uMotion,Xe.uniforms.uReveal=a.uReveal,Xe.uniforms.uScroll=a.uScroll,Xe.fragmentShader=Xe.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal; uniform float uScroll; uniform float uHandoff;`),Xe.fragmentShader=Xe.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = mix(diffuseColor.rgb, outgoingLight, uHandoff);
#include <opaque_fragment>
gl_FragColor.a *= smoothstep(.05,.75,uReveal) * (1.0-uScroll*.85);`)},Ve.transparent=!0,Ve.needsUpdate=!0)})}),o.add(v);try{n.compile(i,r),ie(),C(!0)}catch{C(!1)}},void 0,()=>{C(!1),d.remove(),e.classList.remove("has-sculpture-control"),t.onFallback?.()});let O=new br(7,7),k=new En({uniforms:a,transparent:!0,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform float uTime, uReveal, uScroll, uHandoff, uMobile;
      uniform vec2 uResolution, uPointer;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);
      }
      float fbm(vec2 p){return noise(p)*.57+noise(p*2.03+7.1)*.28+noise(p*4.1+14.7)*.15;}
      void main(){
        vec2 p=(vUv-.5)*2.0;
        vec2 screen=gl_FragCoord.xy/uResolution;
        float time=uTime*.035;
        vec2 drift=vec2(time,-time*.35)+(uPointer-.5)*.025;
        float haze=fbm(p*2.15+drift);
        float wisps=fbm(p*3.0+vec2(haze*.65,-haze*.4)-drift*.7);
        float envelope=exp(-dot(p*vec2(1.0,1.13),p*vec2(1.0,1.13))*2.0);
        float mist=smoothstep(.28,.77,haze*.68+wisps*.32)*envelope;
        vec3 color=mix(vec3(.40,.035,.64),vec3(.018,.29,.52),smoothstep(-.65,.7,p.x+p.y*.25));
        color=mix(color,vec3(.48,.04,.34),smoothstep(.48,.85,wisps)*.23);
        // Several broad, feathered light shafts rather than hard radial lines.
        float beamAxis=p.x+p.y*.48+sin(time*.8)*.035;
        float ray1=(beamAxis+.42)*4.4, ray2=(beamAxis-.08)*5.2, ray3=(beamAxis-.47)*4.0;
        float shafts=exp(-ray1*ray1)*.24;
        shafts+=exp(-ray2*ray2)*.22;
        shafts+=exp(-ray3*ray3)*.13;
        shafts*=envelope*(.62+.38*haze);
        vec3 light=mix(vec3(.34,.12,.58),vec3(.035,.43,.58),smoothstep(-.7,.7,p.x));
        // Keep color and opacity separate: multiplying by haze in both
        // channels made the earlier atmosphere nearly invisible on black.
        color=mix(color,light,clamp(shafts*1.1,0.0,.48));
        float desktopGuard=smoothstep(.47,.66,screen.x);
        float mobileGuard=1.0-smoothstep(.36,.75,screen.y);
        float guard=mix(desktopGuard,mobileGuard,uMobile);
        float edge=1.0-smoothstep(.45,1.0,length(p));
        float amount=guard*edge*smoothstep(.05,.85,uReveal)*smoothstep(.12,.85,uHandoff)*(1.0-uScroll);
        gl_FragColor=vec4(color,clamp((mist*.72+shafts*.72+envelope*.09)*amount,0.0,.58));
      }`}),V=new lt(O,k);V.renderOrder=-1,i.add(V);let $=833,X=new Float32Array($*3),K=new Float32Array($*3),H=new Float32Array($*3),se=[9109759,15663311,26367,55807,16763136].map(W=>new He(W)),I=261107,ce=()=>(I=I*1664525+1013904223>>>0,I/4294967296),Pe=34,Je=25;for(let W=0;W<$;W++){let J=W*367%(Pe*Je),Se=(J%Pe+.08+ce()*.84)/Pe,Ve=(Math.floor(J/Pe)+.08+ce()*.84)/Je;X.set([Se,Ve,0],W*3);let Xe=se[W%11===0?4:W%4];K.set([Xe.r,Xe.g,Xe.b],W*3);let me=ce();H.set([me,ce()*6.283,ce()],W*3)}let Z=new kn;Z.setAttribute("position",new Nt(X,3)),Z.setAttribute("aColor",new Nt(K,3)),Z.setAttribute("aDetails",new Nt(H,3));let ne={uTime:a.uTime,uReveal:a.uReveal,uScroll:a.uScroll,uHandoff:a.uHandoff,uMobile:a.uMobile,uDustPointer:{value:new $e(.25,.5)},uTextRect:{value:new pt(.12,.45,.2,.7)},uPixelRatio:{value:1}},de=new En({uniforms:ne,transparent:!0,depthWrite:!1,depthTest:!1,vertexShader:`
      attribute vec3 aColor, aDetails;
      uniform float uTime,uReveal,uScroll,uHandoff,uPixelRatio,uMobile;
      uniform vec2 uDustPointer;
      uniform vec4 uTextRect;
      varying vec3 vColor; varying float vAlpha,vSoft;
      void main(){
        float depth=aDetails.x, phase=aDetails.y, variation=aDetails.z;
        vec2 p=position.xy;
        p.x=fract(p.x+uTime*(.0015+.0025*depth));
        p+=vec2(sin(uTime*.11+phase),cos(uTime*.08+phase*1.3))*(.002+.004*depth);
        p+=(uDustPointer-vec2(.25,.5))*(.003+.009*depth);
        vec2 nearest=clamp(p,vec2(uTextRect.x,uTextRect.z),vec2(uTextRect.y,uTextRect.w));
        float quiet=.78+.22*smoothstep(0.,.055,length(p-nearest));
        float edge=smoothstep(.0,.04,p.x)*(1.-smoothstep(.96,1.,p.x))*smoothstep(0.,.035,p.y)*(1.-smoothstep(.96,1.,p.y));
        float shimmer=.82+.18*sin(uTime*.3+phase);
        vColor=aColor; vSoft=step(.68,variation);
        vAlpha=(.78+.22*depth)*quiet*edge*shimmer*uReveal*smoothstep(.05,.8,uHandoff)*(1.-uScroll);
        gl_Position=vec4(p*2.-1.,0.,1.);
        gl_PointSize=(2.2+depth*2.0+vSoft*.9)*uPixelRatio*2.379718656;
      }`,fragmentShader:`
      precision mediump float;
      varying vec3 vColor; varying float vAlpha,vSoft;
      void main(){
        float d=length(gl_PointCoord-.5)*2.;
        float sharp=1.-smoothstep(.3,.95,d);
        float soft=exp(-d*d*3.6)*(1.-smoothstep(.85,1.,d));
        // The hero vignette darkens this canvas by up to 78%; a bright
        // pinpoint core retains colored edges after that compositing step.
        float core=(1.-smoothstep(.0,.50,d))*(1.-vSoft*.65);
        vec3 luminous=mix(vColor,vec3(1.0),.10+core*.20);
        gl_FragColor=vec4(luminous,mix(sharp,soft,vSoft)*vAlpha);
        #include <colorspace_fragment>
      }`}),oe=new Hs(Z,de);oe.frustumCulled=!1,oe.renderOrder=-2,i.add(oe);let Te=.25,Ue=.5,Ce=.25,je=.5,qe=!1,xe=!0,P=0,mt=0,Oe=0,B=0,ye=0,nt=.5,Me=.5,R=.5,b=.5,z=0,te=1,Q=0,j=0,he=1,le=0,fe=0;function Ge(){let W=e.clientWidth,J=e.clientHeight;if(!W||!J)return;let Se=W<768;n.setPixelRatio(Math.min(window.devicePixelRatio||1,Se?1.25:1.5)),n.setSize(W,J,!1),r.aspect=W/J,r.updateProjectionMatrix(),n.getDrawingBufferSize(a.uResolution.value),a.uMobile.value=Se?1:0,ne.uPixelRatio.value=n.getPixelRatio();let Ve=e.querySelector(".hero__editorial");if(Ve){let Be=e.getBoundingClientRect(),we=Ve.getBoundingClientRect();ne.uTextRect.value.set((we.left-Be.left)/W,(we.right-Be.left)/W,1-(we.bottom-Be.top)/J,1-(we.top-Be.top)/J)}let Xe=2*Math.tan(zn.degToRad(r.fov/2))*r.position.z,me=Xe*r.aspect,Ae=Se?Math.min(W*.84,J*.43):Math.min(W*.48,J*.73);d.style.width=`${Ae}px`,d.style.height=`${Ae}px`,d.style.left=`${W*(Se?.5:.755)-Ae/2}px`,d.style.top=`${J*(Se?.68:.515)-Ae/2}px`,te=Ae/J*Xe/3.6,Q=(Se?-.18:-.015)*Xe,j=(Se?.5:.755)*me-me/2;let Ze=Math.min(window.innerWidth/1280,window.innerHeight/720),pe=e.getBoundingClientRect();he=520*Ze/J*Xe/3.4,le=((window.innerWidth/2-pe.left)/W-.5)*me,fe=(.5-(window.innerHeight/2+5*Ze-pe.top)/J)*Xe,o.scale.setScalar(te),o.position.set(j,Q,0),ie()}function ie(){a.uTime.value=B,a.uReveal.value=mt,a.uScroll.value=Oe,a.uPointer.value.set(nt,Me),a.uMotion.value=z;let W=zn.lerp(he,te,E);o.scale.setScalar(W*(1+Math.sin(B*.42)*.008*E)),o.position.x=zn.lerp(le,j,E),o.position.y=zn.lerp(fe,Q,E)+Math.sin(B*.35)*.025*te*E,V.scale.setScalar(W),V.position.set(o.position.x,o.position.y,-.65),a.uHandoff.value=E,o.rotation.y=g+A+.1*E+(w&&!p?(nt-.5)*.05*E:0),o.rotation.x=_-.035*E+(w&&!p?-(Me-.5)*.04*E:0),o.rotation.z=0,n.render(i,r)}function ae(W){if(P=0,qe||!xe||document.hidden||t.reducedMotion)return;let J=ye?Math.min((W-ye)/1e3,.05):0;if(ye=W,B+=J,!w&&v&&mt>=.8&&E>=1){x=Math.min(x+J,3.2);let Se=x/3.2;A=-(Se*Se*(3-2*Se))*Math.PI*2,Se===1&&(A=0,w=!0)}Te+=(Ce-Te)*.025,Ue+=(je-Ue)*.025,ne.uDustPointer.value.set(Te,Ue),nt+=(R-nt)*.045,Me+=(b-Me)*.045,z+=((Math.abs(R-nt)+Math.abs(b-Me))*3-z)*.06,ie(),P=requestAnimationFrame(ae)}function De(){!P&&!qe&&xe&&!document.hidden&&!t.reducedMotion&&(ye=0,P=requestAnimationFrame(ae))}function Ie(W){let J=e.getBoundingClientRect();!t.reducedMotion&&J.width&&J.height&&(Ce=zn.clamp((W.clientX-J.left)/J.width,0,1),je=zn.clamp(1-(W.clientY-J.top)/J.height,0,1));let Se=J.width*(J.width<768?.5:.755),Ve=J.height*(J.width<768?.68:.515),Xe=J.width<768?Math.min(J.width*.84,J.height*.43):Math.min(J.width*.48,J.height*.73);R=zn.clamp((W.clientX-J.left-Se)/Xe+.5,0,1),b=zn.clamp(.5-(W.clientY-J.top-Ve)/Xe,0,1)}function ve(){R=.5,b=.5,Ce=.25,je=.5}function Ye(){w||(g+=A,A=0,w=!0)}function Fe(W){W.button!==0||p||(Ye(),p=!0,m=W.pointerId,M=W.clientX,y=W.clientY,d.setPointerCapture(W.pointerId),d.classList.add("is-dragging"))}function ht(W){!p||W.pointerId!==m||(g+=(W.clientX-M)*.012,_+=(W.clientY-y)*.012,M=W.clientX,y=W.clientY,t.reducedMotion&&ie())}function D(W){W.pointerId===m&&(p=!1,m=-1,d.classList.remove("is-dragging"),d.hasPointerCapture(W.pointerId)&&d.releasePointerCapture(W.pointerId))}function ue(W){if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes(W.key))return;Ye();let J=Math.PI/12;if(W.key==="ArrowLeft")g-=J;else if(W.key==="ArrowRight")g+=J;else if(W.key==="ArrowUp")_-=J;else if(W.key==="ArrowDown")_+=J;else if(W.key==="Home")_=0,g=0;else return;W.preventDefault(),t.reducedMotion&&ie()}d.addEventListener("pointerdown",Fe),d.addEventListener("pointermove",ht),d.addEventListener("pointerup",D),d.addEventListener("pointercancel",D),d.addEventListener("lostpointercapture",D),d.addEventListener("keydown",ue);function Y(){document.hidden&&P?(cancelAnimationFrame(P),P=0):De()}let ee=new IntersectionObserver(W=>{xe=W[0].isIntersecting,xe?De():P&&(cancelAnimationFrame(P),P=0)},{threshold:.01});return ee.observe(e),window.addEventListener("resize",Ge,{passive:!0}),e.addEventListener("pointermove",Ie,{passive:!0}),e.addEventListener("pointerleave",ve),document.addEventListener("visibilitychange",Y),t.reducedMotion&&(mt=1),Ge(),De(),{ready:S,setHandoff(W){E=zn.clamp(W,0,1),ie()},setReveal(W){mt=zn.clamp(W,0,1),t.reducedMotion&&ie()},setScrollProgress(W){Oe=zn.clamp(W,0,1),t.reducedMotion&&ie()},renderOnce:ie,dispose(){qe=!0,cancelAnimationFrame(P),ee.disconnect(),window.removeEventListener("resize",Ge),e.removeEventListener("pointermove",Ie),e.removeEventListener("pointerleave",ve),document.removeEventListener("visibilitychange",Y),d.remove(),e.classList.remove("has-sculpture-control"),v?.traverse(W=>{W instanceof lt&&(W.geometry.dispose(),(Array.isArray(W.material)?W.material:[W.material]).forEach(Se=>Se.dispose()))}),c.dispose(),l.dispose(),Z.dispose(),de.dispose(),O.dispose(),k.dispose(),n.dispose()}}}function S0(s,e,t,n){let i=document.createElement("canvas");i.className="chromatic-portal",i.setAttribute("aria-hidden","true"),document.body.appendChild(i);let r;try{r=new na({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"})}catch{return i.remove(),{setOpening(){}}}r.setClearColor(0,0);let o=new Sr,a=new wr(-1,1,1,-1,0,1),l=new br(2,2),c={uProgress:{value:0},uOpening:{value:0},uAspect:{value:1},uSource:{value:new $e},uTarget:{value:new $e},uHalf:{value:new $e}},u=new En({uniforms:c,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv; gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform float uProgress,uOpening,uAspect;
      uniform vec2 uSource,uTarget,uHalf;
      float hash(float n){return fract(sin(n*127.1)*43758.5453);}
      void main(){
        vec2 p=vec2(vUv.x*uAspect,vUv.y);
        vec2 a=vec2(uSource.x*uAspect,uSource.y);
        vec2 b=vec2(uTarget.x*uAspect,uTarget.y);
        float appear=smoothstep(.08,.35,uProgress);
        float dissolve=1.0-smoothstep(.12,.95,uOpening);
        vec3 col=vec3(0.); float alpha=0.;
        // Filaments follow a curved path from the moving logo to the card.
        for(int i=0;i<7;i++){
          float fi=float(i); float t=clamp((a.y-p.y)/max(.12,a.y-b.y),0.,1.);
          float spread=sin(t*3.14159);
          float center=mix(a.x,b.x,t)+sin(t*5.0+fi*1.7+uProgress*3.0)*spread*(.055+fi*.006);
          center+=(fi-3.0)*(.014+.035*t);
          float dx=abs(p.x-center);
          float width=.0015+(.003+fi*.00025)*spread;
          float thread=exp(-dx/width);
          float sheath=exp(-dx/(width*5.0))*.12;
          float travel=smoothstep(t-.23,t+.08,uProgress*1.35);
          float bounds=smoothstep(b.y-.04,b.y+.10,p.y)*(1.0-smoothstep(a.y-.07,a.y+.08,p.y));
          vec3 hue=mix(vec3(.40,.06,.95),vec3(.02,.65,1.),.5+.5*sin(fi*1.8+t*4.));
          hue=mix(hue,vec3(.94,.05,.58),.35*(.5+.5*cos(fi+t*7.)));
          float strength=(thread*.40+sheath)*bounds*travel*appear*dissolve;
          col+=hue*strength; alpha+=strength;
        }
        // A few glints move with scroll, rather than drifting on a timer.
        for(int i=0;i<18;i++){
          float fi=float(i); float t=fract(hash(fi+3.)+uProgress*.67);
          vec2 pos=mix(a,b,t); pos.x+=sin(t*5.+fi)*sin(t*3.14159)*.09;
          float d=length((p-pos)*vec2(1.,1.6));
          float spark=exp(-d*450.)*smoothstep(.1,.4,uProgress)*dissolve*.55;
          col+=mix(vec3(.6,.15,1.),vec3(.1,.8,1.),hash(fi))*spark; alpha+=spark;
        }
        // The same energy gathers around the actual, expanding panel bounds.
        vec2 q=abs(p-b)-vec2(uHalf.x*uAspect,uHalf.y);
        float edge=abs(length(max(q,0.))+min(max(q.x,q.y),0.));
        float edgeGlow=exp(-edge*95.)*smoothstep(.55,.98,uProgress)*dissolve;
        vec3 edgeColor=mix(vec3(.55,.09,.95),vec3(.04,.72,1.),smoothstep(-.3,.3,p.x-b.x));
        col+=edgeColor*edgeGlow*.46; alpha+=edgeGlow*.46;
        gl_FragColor=vec4(col,clamp(alpha,0.,.8));
      }`});o.add(new lt(l,u));let h=0,f=0,d=0,_=0,g=0;function p(){let y=window.innerWidth,x=window.innerHeight;if(!y||!x)return;let A=h>.05&&f<.99;if(i.style.visibility=A?"visible":"hidden",!A)return;let w=Math.min(window.devicePixelRatio||1,y<901?1:1.25);(y!==d||x!==_||w!==g)&&(d=y,_=x,g=w,r.setPixelRatio(w),r.setSize(y,x,!1));let E=s.getBoundingClientRect(),C=t.getBoundingClientRect(),S=y<768;c.uSource.value.set(S?.5:.755,1-(E.top+E.height*(S?.68:.515))/x),c.uTarget.value.set((C.left+C.width/2)/y,1-(C.top+C.height/2)/x),c.uHalf.value.set(C.width/(2*y),C.height/(2*x)),c.uAspect.value=y/x,c.uProgress.value=h,c.uOpening.value=f,r.render(o,a)}let m=Ke.create({trigger:s,start:"top top",endTrigger:e,end:"top top",onUpdate(y){h=y.progress,n(h),p()},onRefresh(y){h=y.progress,n(h),p()}}),M=()=>{n(h),p()};return window.addEventListener("resize",M,{passive:!0}),i.addEventListener("webglcontextlost",y=>{y.preventDefault(),i.style.visibility="hidden"}),n(m.progress),{setOpening(y){f=y,p()}}}_t.registerPlugin(Ke);var cE={"rajamanickam-chit-fund":"Rajamanickam Chit Funds","zsi-yogesh":"ZSI Portfolio",kaiforge:"KaiForge",palindrome:"Palindrome",neuroshield:"NeuroShield",mfalmion:"Mfalmion"},eh=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function uE(){let s=document.documentElement,e=document.getElementById("intro-splash"),t=document.getElementById("intro-video"),n=document.getElementById("hero"),i=document.getElementById("hero-canvas"),r=document.getElementById("masthead"),o=document.getElementById("hero-scroll"),a=document.getElementById("hero-content"),l=Array.from(document.querySelectorAll(".hero__line-inner")),c=Array.from(document.querySelectorAll("[data-hero-stagger]")),u=eh(),h=null;if(n&&i)try{h=M0(i,n,{reducedMotion:u,onFallback:()=>n.classList.add("is-webgl-fallback")})}catch{n.classList.add("is-webgl-fallback")}else n&&n.classList.add("is-webgl-fallback");u||(_t.set(l,{yPercent:112,opacity:0}),_t.set(c,{y:20,opacity:0}),r&&_t.set(r,{y:-14,opacity:0}),o&&_t.set(o,{opacity:0,y:10}));let f=!1,d=_=>{if(f)return;if(f=!0,u){h?.setReveal(1),s.classList.remove("intro-active");return}let g=_t.timeline({defaults:{ease:"power4.out"}}),p={value:0};if(_&&e&&h){let y=n?.querySelector(".hero__vignette");y&&_t.set(y,{opacity:0}),h.setHandoff(0),h.setReveal(1),h.renderOnce();let x={value:0};g.to(e,{opacity:0,duration:.45,ease:"sine.inOut",onComplete:()=>{t?.pause(),s.classList.remove("intro-active"),e.style.opacity=""}},0),g.to(x,{value:1,duration:1.45,ease:"power2.inOut",onUpdate:()=>h?.setHandoff(x.value)},.36),y&&g.to(y,{opacity:1,duration:1.45,ease:"power2.inOut",clearProps:"opacity"},.36)}else s.classList.remove("intro-active"),g.to(p,{value:1,duration:1.05,ease:"power3.out",onUpdate:()=>h?.setReveal(p.value)},0);let m=_?.4:.04;c[0]&&g.to(c[0],{y:0,opacity:1,duration:.62,ease:"power3.out"},m),l.length&&g.to(l,{yPercent:0,opacity:1,duration:.85,stagger:.08,ease:"power4.out"},m+.06);let M=c.slice(1);M.length&&g.to(M,{y:0,opacity:1,duration:.68,stagger:.08,ease:"power3.out"},m+.28),r&&g.to(r,{y:0,opacity:1,duration:.65,ease:"power3.out",clearProps:"transform"},m+.18),o&&g.to(o,{opacity:1,y:0,duration:.6,ease:"power2.out"},m+.45)};if(n&&!u&&Ke.create({trigger:n,start:"top top",end:"bottom top",scrub:!0,onUpdate:_=>{h?.setScrollProgress(_.progress),a&&_t.set(a,{y:_.progress*-48,opacity:Math.max(.18,1-_.progress*1.15)}),o&&_t.set(o,{opacity:Math.max(0,1-_.progress*3.5)})}}),!u&&s.classList.contains("intro-active")&&e&&t){let _=!1,g=0,p=async y=>{if(_)return;if(_=!0,g&&window.clearTimeout(g),!y||!h){d(!1);return}let x=await Promise.race([h.ready,new Promise(A=>window.setTimeout(()=>A(!1),2e3))]);d(x)},m=t.dataset.src;m&&!t.getAttribute("src")&&(t.src=m),t.muted=!0,t.playsInline=!0,t.addEventListener("ended",()=>{p(!0)},{once:!0}),t.addEventListener("error",()=>{p(!1)},{once:!0}),t.addEventListener("loadedmetadata",()=>{let y=Number.isFinite(t.duration)&&t.duration>0?Math.ceil(t.duration*1e3)+1500:8e3;g&&window.clearTimeout(g),g=window.setTimeout(()=>{p(!1)},y)}),g=window.setTimeout(()=>{p(!1)},8e3);let M=t.play();M&&typeof M.catch=="function"&&M.catch(()=>{p(!1)})}else d(!1)}function hE(){if(eh()||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let s=Array.from(document.querySelectorAll("[data-magnetic]"));for(let e of s){let t=_t.quickTo(e,"x",{duration:.42,ease:"power3.out"}),n=_t.quickTo(e,"y",{duration:.42,ease:"power3.out"});e.addEventListener("pointermove",i=>{let r=e.getBoundingClientRect();if(!r.width||!r.height)return;let o=((i.clientX-r.left)/r.width-.5)*14,a=((i.clientY-r.top)/r.height-.5)*10;t(o),n(a)}),e.addEventListener("pointerleave",()=>{t(0),n(0)})}}function fE(){let s=document.getElementById("scroll-progress"),e=document.getElementById("masthead"),t=Array.from(document.querySelectorAll("[data-nav-link]")),n=Array.from(document.querySelectorAll("main section[id]")),i=()=>{if(e&&e.classList.toggle("is-scrolled",window.scrollY>24),s){let r=document.documentElement.scrollHeight-window.innerHeight,o=r>0?Math.min(1,Math.max(0,window.scrollY/r)):0;s.style.transform=`scaleX(${o.toFixed(4)})`}};if(i(),window.addEventListener("scroll",i,{passive:!0}),n.length&&t.length&&"IntersectionObserver"in window){let r=new IntersectionObserver(o=>{for(let a of o){if(!a.isIntersecting)continue;let l=a.target.getAttribute("id");for(let c of t)c.classList.toggle("is-active",c.getAttribute("href")===`#${l}`)}},{rootMargin:"-42% 0px -48% 0px"});for(let o of n)r.observe(o)}}function dE(){let s=Array.from(document.querySelectorAll("[data-reveal]"));if(!s.length)return;if(eh()||!("IntersectionObserver"in window)){for(let t of s)t.classList.add("is-revealed");return}let e=new IntersectionObserver((t,n)=>{for(let i of t)i.isIntersecting&&(i.target.classList.add("is-revealed"),n.unobserve(i.target))},{threshold:.1,rootMargin:"0px 0px -30px 0px"});for(let t of s)t.getBoundingClientRect().top<window.innerHeight*.94?t.classList.add("is-revealed"):e.observe(t)}function pE(){let s=document.getElementById("menu-toggle"),e=document.getElementById("mobile-drawer");if(!s||!e)return;let t=i=>{s.setAttribute("aria-expanded",String(i)),e.setAttribute("aria-hidden",String(!i)),e.classList.toggle("is-open",i),document.body.style.overflow=i?"hidden":""};s.addEventListener("click",()=>{let i=s.getAttribute("aria-expanded")==="true";t(!i)});let n=e.querySelectorAll("[data-drawer-link]");for(let i of n)i.addEventListener("click",()=>t(!1));window.addEventListener("keydown",i=>{i.key==="Escape"&&s.getAttribute("aria-expanded")==="true"&&(t(!1),s.focus())})}function mE(){let s=Array.from(document.querySelectorAll("[data-work-filter]")),e=Array.from(document.querySelectorAll("[data-work-card]")),t=Array.from(document.querySelectorAll("[data-inspect-card]"));for(let n of s)n.addEventListener("click",()=>{let i=n.dataset.workFilter||"All";for(let r of s){let o=r===n;r.classList.toggle("is-active",o),r.setAttribute("aria-selected",String(o))}for(let r of e){let o=i==="All"||r.dataset.workGroup===i;r.hidden=!o}});for(let n of t)n.addEventListener("click",()=>{let i=n.getAttribute("aria-controls");if(!i)return;let r=document.getElementById(i),o=n.closest("[data-work-card]");if(!r)return;let a=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!a)),r.hidden=a,o?.classList.toggle("is-expanded",!a),n.textContent=a?"Inspect Details +":"Hide Details \u2212"})}function gE(){let s=Array.from(document.querySelectorAll("[data-skill-filter]")),e=Array.from(document.querySelectorAll("[data-skill-item]")),t=document.getElementById("inspector-category"),n=document.getElementById("inspector-name"),i=document.getElementById("inspector-focus"),r=document.getElementById("inspector-summary"),o=document.getElementById("inspector-projects");if(!e.length)return;let a=l=>{for(let c of e){let u=c===l;c.classList.toggle("is-selected",u),c.setAttribute("aria-selected",String(u))}if(t&&(t.textContent=l.dataset.skillCategory||""),n&&(n.textContent=l.dataset.skillName||""),i&&(i.textContent=l.dataset.skillFocus||""),r&&(r.textContent=l.dataset.skillSummary||""),o){let c=(l.dataset.skillProjects||"").split(",").filter(Boolean);o.innerHTML="";for(let u of c){let h=document.createElement("a");h.href=`#project-${u}`,h.className="skill-project-chip",h.textContent=cE[u]||u,o.appendChild(h)}}};for(let l of e)l.addEventListener("click",()=>a(l)),l.addEventListener("mouseenter",()=>a(l));for(let l of s)l.addEventListener("click",()=>{let c=l.dataset.skillFilter||"all";for(let f of s){let d=f===l;f.classList.toggle("is-active",d),f.setAttribute("aria-selected",String(d))}let u=null;for(let f of e){let d=c==="all"||f.dataset.skillCategory===c;f.hidden=!d,d&&!u&&(u=f)}!e.find(f=>f.classList.contains("is-selected")&&!f.hidden)&&u&&a(u)})}function _E(){let s=Array.from(document.querySelectorAll("[data-honor-tab]")),e=Array.from(document.querySelectorAll("[data-honor-panel]"));if(!(!s.length||!e.length))for(let t of s)t.addEventListener("click",()=>{let n=t.dataset.honorTab;for(let i of s){let r=i===t;i.classList.toggle("is-active",r),i.setAttribute("aria-selected",String(r))}for(let i of e)i.hidden=i.dataset.honorPanel!==n})}function xE(){let s=document.getElementById("contact-form"),e=document.getElementById("contact-name"),t=document.getElementById("contact-email"),n=document.getElementById("contact-type"),i=document.getElementById("contact-description"),r=document.getElementById("description-count"),o=document.getElementById("contact-submit"),a=document.getElementById("form-status"),l=document.querySelectorAll("[data-select-service]");for(let g of l)g.addEventListener("click",()=>{let p=g.dataset.selectService;p&&n&&(n.value=p),e&&window.setTimeout(()=>e.focus(),350)});let c=document.querySelectorAll("[data-copy-text]");for(let g of c)g.addEventListener("click",async()=>{let p=g.dataset.copyText;if(p)try{await navigator.clipboard.writeText(p);let m=g.textContent;g.textContent="Copied",window.setTimeout(()=>{g.textContent=m},1600)}catch{}});if(!s||!e||!t||!n||!i||!o||!a)return;let u=()=>{r&&(r.textContent=`${i.value.length} / 2500`)};u(),i.addEventListener("input",u);let h=(g,p)=>{let m=document.getElementById(`error-${g}`);m&&(m.textContent=p)},f=()=>{for(let g of["name","email","project_type","description"])h(g,"");a.hidden=!0,a.className="form-status",a.textContent=""},d=(g,p)=>{a.hidden=!1,a.className=`form-status form-status--${g}`,a.textContent=p},_=g=>{let p=!0;return g.name.length<2&&(h("name","Please enter at least 2 characters."),p=!1),/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(g.email)||(h("email","Please enter a valid email address."),p=!1),g.project_type||(h("project_type","Please select a service package."),p=!1),g.description.length<15&&(h("description","Please describe your project in at least 15 characters."),p=!1),p};s.addEventListener("submit",async g=>{g.preventDefault(),f();let p={name:e.value.trim(),email:t.value.trim(),project_type:n.value.trim(),description:i.value.trim()};if(!_(p)){d("error","Please fix the highlighted fields before sending.");return}let m=encodeURIComponent(`Project inquiry: ${p.project_type}`),M=encodeURIComponent(`Name: ${p.name}
Email: ${p.email}
Service: ${p.project_type}

Project brief:
${p.description}`);window.location.href=`mailto:antoniusjairusofficial@gmail.com?subject=${m}&body=${M}`,d("success","Your email app should open with a draft. Please send it to complete your inquiry.")})}function vE(){let s=document.getElementById("glow-cursor-layer");if(!s||!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches)return;s.replaceChildren();let e=document.createElement("div");e.className="custom-cursor",e.innerHTML='<span class="custom-cursor__ring"></span><span class="custom-cursor__dot"></span>',s.appendChild(e);let t=document.documentElement,n=i=>{if(i.pointerType==="touch")return;let r=i.target instanceof Element?i.target:null,a=!!!r?.closest('input, textarea, select, [contenteditable="true"]')&&!t.classList.contains("intro-active");t.classList.toggle("has-custom-cursor",a),e.classList.toggle("is-visible",a),e.classList.toggle("is-link",!!r?.closest('a, button, [role="button"], label')),e.style.transform=`translate3d(${i.clientX}px, ${i.clientY}px, 0)`};window.addEventListener("pointermove",n,{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>{t.classList.remove("has-custom-cursor"),e.classList.remove("is-visible")}),window.addEventListener("blur",()=>{t.classList.remove("has-custom-cursor"),e.classList.remove("is-visible")})}document.addEventListener("DOMContentLoaded",()=>{uE(),vE(),hE(),fE(),dE(),pE(),mE(),gE(),_E(),xE()});function yE(){let s=document.querySelector(".proof"),e=document.querySelector("[data-proof-stage]"),t=document.querySelector("[data-proof-panel]"),n=document.querySelector("[data-proof-intro]"),i=document.querySelector("[data-proof-exhibition]");if(!s||!e||!t||!n||!i)return;let r=document.querySelector("#hero"),o=null,a=r&&!eh()?S0(r,e,t,c=>{let u=_t.utils.clamp(0,1,(c-.68)/.28),h=window.innerWidth>900?t:n;o&&o!==h&&_t.set(o,{clearProps:"opacity,transform"}),o=h,_t.set(h,{opacity:u,y:(1-u)*24})}):null,l=_t.matchMedia();l.add("(max-width: 900px) and (prefers-reduced-motion: no-preference)",()=>{let c=_t.context(()=>{Ke.create({trigger:n,start:"top 65%",end:"bottom 35%",onUpdate:u=>a?.setOpening(u.progress),onRefresh:u=>a?.setOpening(u.progress)}),_t.fromTo(n,{scale:.92,borderRadius:20},{scale:1,borderRadius:0,ease:"none",scrollTrigger:{trigger:n,start:"top 90%",end:"bottom 65%",scrub:!0}}),s.querySelectorAll(".proof-mobile-image").forEach(u=>{_t.fromTo(u,{y:24,opacity:.75},{y:0,opacity:1,ease:"none",scrollTrigger:{trigger:u,start:"top 95%",end:"top 55%",scrub:!0}})})},s);return()=>c.revert()}),l.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)",()=>{s.classList.add("is-cinematic");let c=_t.utils.toArray("[data-project]",s),u=_t.utils.toArray(".proof-frame",s),h=_t.utils.toArray(".proof-background",s),f=_t.utils.toArray("[data-proof-nav]",s),d=s.querySelector("[data-proof-count]"),_=s.querySelector("[data-proof-progress]"),g=-1,p=M=>{M!==g&&(g=M,s.classList.toggle("proof--light-background",c[M]?.id==="project-rajamanickam-chit-fund"),c.forEach((y,x)=>{y.classList.toggle("is-active",x===M),y.setAttribute("aria-hidden",String(x!==M)),y.inert=x!==M,_t.to(y,{opacity:x===M?1:0,y:x===M?0:12,duration:.3,overwrite:!0})}),f.forEach((y,x)=>{y.classList.toggle("is-active",x===M),x===M?y.setAttribute("aria-current","true"):y.removeAttribute("aria-current")}),d&&(d.textContent=String(M+1).padStart(2,"0")),_&&(_.style.width=`${(M+1)/c.length*100}%`))},m=Ke.create({trigger:e,start:"top top",end:()=>`+=${window.innerHeight*(c.length+.8)}`,pin:!0,scrub:!0,onUpdate(M){let y=Math.min(1,M.progress/.14);a?.setOpening(y),_t.set(t,{width:`${43+57*y}vw`,height:`${52+48*y}vh`,borderRadius:18*(1-y)}),_t.set(n,{opacity:Math.max(0,1-y*1.35),visibility:y>.75?"hidden":"visible"}),_t.set(i,{opacity:Math.max(0,(y-.3)/.7)});let x=Math.max(0,Math.min(c.length-1,(M.progress-.14)/.76*(c.length-1))),A=Math.min(c.length-1,Math.round(x));p(A),u.forEach((w,E)=>{let C=E-x;_t.set(w,{xPercent:0,yPercent:-50,y:C*window.innerHeight*.37,scale:Math.max(.33,1-Math.abs(C)*.67),opacity:Math.max(0,1-Math.abs(C)*.38),zIndex:Math.round(10-Math.abs(C)*5),filter:`brightness(${Math.max(.48,1-Math.abs(C)*.5)})`})}),h.forEach((w,E)=>_t.set(w,{opacity:Math.max(0,1-Math.abs(E-x))}))}});return f.forEach((M,y)=>{M.onclick=()=>{let x=.14+y/(c.length-1)*.76;window.scrollTo({top:m.start+(m.end-m.start)*x,behavior:"smooth"})}}),p(0),Ke.refresh(),()=>{m.kill(),s.classList.remove("is-cinematic","proof--light-background"),c.forEach(M=>{M.inert=!1,M.removeAttribute("aria-hidden"),M.classList.remove("is-active"),_t.set(M,{clearProps:"all"})}),f.forEach(M=>{M.onclick=null}),_t.set([t,n,i,...u,...h],{clearProps:"all"})}})}document.addEventListener("DOMContentLoaded",yE);})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
