"use strict";(()=>{function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},Yu,sn,Ct,si=1e8,vt=1/si,zu=Math.PI*2,Qg=zu/4,jg=0,Td=Math.sqrt,e_=Math.cos,t_=Math.sin,Jt=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},tl=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},Zu=function(){return typeof window<"u"},Wa=function(e){return Nt(e)||Jt(e)},Ed=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,n_=/random\([^)]+\)/g,i_=/,\s*/g,md=/(?:-?\.?\d|\.)+/gi,Ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Du=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$u=/[+-]=-?[.\d]+/,r_=/[^,'"\[\]\s]+/gi,s_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,Ri,ku,Ku,Wn={},Za={},wd,Ad=function(e){return(Za=Ps(e,Wn))&&hn},nl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uo=function(e,t){return!t&&console.warn(e)},Cd=function(e,t){return e&&(Wn[e]=t)&&Za&&(Za[e]=t)||Wn},No=function(){return 0},o_={suppressEvents:!0,isStart:!0,kill:!1},Xa={suppressEvents:!0,kill:!1},a_={suppressEvents:!0},Qu={},ur=[],Vu={},Rd,Un={},Lu={},gd=30,qa=[],ju="",eh=function(e){var t=e[0],n,i;if(Ii(t)||Nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=qa.length;i--&&!qa[i].targetTest(t););n=qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new rh(e[i],n)))||e.splice(i,1);return e},hr=function(e){return e._gsap||eh(oi(e))[0]._gsap},th=function(e,t,n){return(n=e[t])&&Nt(n)?e[t]():tl(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Wr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},l_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ja=function(){var e=ur.length,t=ur.slice(0),n,i;for(Vu={},ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nh=function(e){return!!(e._initted||e._startAt||e.add)},Pd=function(e,t,n,i){ur.length&&!sn&&Ja(),e.render(t,n,i||!!(sn&&t<0&&nh(e))),ur.length&&!sn&&Ja()},Id=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(r_).length<2?t:Jt(e)?e.trim():e},Dd=function(e){return e},Xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},c_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ps=function(e,t){for(var n in t)e[n]=t[n];return e},_d=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},$a=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Po=function(e){var t=e.parent||Pt,n=e.keyframes?c_(un(e.keyframes)):Xn;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},u_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ld=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},kr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},h_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hu=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(Xa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},f_=function r(e){return!e||e._ts&&r(e.parent)},xd=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Ka=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},sl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rl(e),n._dirty||kr(n,e)),e},Ud=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ka(e.rawTime(),t),(!t._dur||zo(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),kr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},Pi=function(e,t,n,i){return t.parent&&fr(t),t._start=Rt((Wi(n)?n:!n&&Qa(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Pt?ri(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ld(e,t,"_first","_last",e._sort?"_start":0),Qa(t)||(e._recent=t),i||Ud(e,t),e._ts<0&&sl(e,e._tTime),e},Nd=function(e,t){return(Wn.ScrollTrigger||nl("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Fd=function(e,t,n,i,s){if(ah(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rd!==Nn.frame)return ur.push(e),e._lazy=[s,i],1},d_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Qa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},p_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&d_(e)&&!(!e._initted&&Qa(e))||(e._ts<0||e._dp._ts<0)&&!Qa(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=zo(0,e._tDur,t),u=Is(l,a),e._yoyo&&u&1&&(o=1-o),u!==Is(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Fd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Hu(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&fr(e,1),!n&&!sn&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},m_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ds=function(e,t,n,i){var s=e._repeat,o=Rt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Rt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&sl(e,e._tTime=e._tDur*a),e.parent&&rl(e),n||kr(e.parent,e),e},vd=function(e){return e instanceof cn?kr(e):Ds(e,e._dur)},g_={_start:0,endTime:No,totalDuration:No},ri=function r(e,t,n){var i=e.labels,s=e._recent||g_,o=e.duration()>=si?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Io=function(e,t,n){var i=Wi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},dr=function(e,t){return e||e===0?t(e):t},zo=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!Jt(e)||!(t=s_.exec(e))?"":t[1]},__=function(e,t,n){return dr(n,function(i){return zo(e,t,i)})},Gu=[].slice,Od=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Ri},x_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||Od(i,1)?(s=n).push.apply(s,oi(i)):n.push(i)})||n},oi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):Jt(e)&&!n&&(ku||!Ls())?Gu.call((t||Ku).querySelectorAll(e),0):un(e)?x_(e,n):Od(e)?Gu.call(e,0):e?[e]:[]},Wu=function(e){return e=oi(e)[0]||Uo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?Uo("Invalid scope")||Ku.createElement("div"):e)}},Bd=function(e){return e.sort(function(){return .5-Math.random()})},zd=function(e){if(Nt(e))return e;var t=Ii(e)?e:{each:e},n=Vr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,S,b,v,E,C,w,R,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,si])[1],!y){for(w=-si;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,S=y===si?0:l?g*h/y-.5:i/y|0,w=0,R=si,C=0;C<g;C++)b=C%y-p,v=S-(C/y|0),m[C]=E=c?Math.abs(c==="y"?v:b):Td(b*b+v*v),E>w&&(w=E),E<R&&(R=E);i==="random"&&Bd(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=on(t.amount||t.each)||0,n=n&&g<0?I_(n):n}return g=(m[d]-m.min)/m.max||0,Rt(m.b+(n?n(g):g)*m.v)+m.u}},Xu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:on(n))}},kd=function(e,t){var n=un(e),i,s;return!n&&Ii(e)&&(i=n=e.radius||si,e.values?(e=oi(e.values),(s=!Wi(e[0]))&&(i*=i)):e=Xu(e.increment)),dr(t,n?Nt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=si,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Wi(o)?u:u+on(o)}:Xu(e))},Vd=function(e,t,n,i){return dr(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},v_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},y_=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},M_=function(e,t,n){return Gd(e,t,0,1,n)},Hd=function(e,t,n){return dr(n,function(i){return e[~~t(i)]})},S_=function r(e,t,n){var i=t-e;return un(e)?Hd(e,r(0,e.length),t):dr(n,function(s){return(i+(s-e)%i)%i+e})},b_=function r(e,t,n){var i=t-e,s=i*2;return un(e)?Hd(e,r(0,e.length-1),t):dr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Us=function(e){return e.replace(n_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(i_);return Vd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gd=function(e,t,n,i,s){var o=t-e,a=i-n;return dr(s,function(l){return n+((l-e)/o*a||0)})},T_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Jt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Ps(un(e)?[]:{},e));if(!u){for(l in t)sh.call(a,e,l,"get",t[l]);s=function(_){return uh(_,a)||(o?e.p:e)}}}return dr(n,s)},yd=function(e,t,n){var i=e.labels,s=si,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,n){var i=e.vars,s=i[t],o=Ct,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ur.length&&Ja(),a&&(Ct=a),u=l?s.apply(c,l):s.call(c),Ct=o,u},Co=function(e){return fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Gn(e,"onInterrupt"),e},Rs,Wd=[],Xd=function(e){if(e)if(e=!e.name&&e.default||e,Zu()||e.headless){var t=e.name,n=Nt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:No,render:uh,add:sh,kill:V_,modifier:k_,rawVars:0},o={targetTest:0,get:0,getSetter:ol,aliases:{},register:0};if(Ls(),e!==i){if(Un[t])return;Xn(i,Xn($a(e,s),o)),Ps(i.prototype,Ps(s,$a(e,o))),Un[i.prop=t]=i,e.targetTest&&(qa.push(i),Qu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cd(t,i),e.register&&e.register(hn,i,Tn)}else Wd.push(e)},St=255,Ro={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Uu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},qd=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&St,e&St]:0:Ro.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ro[e])i=Ro[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(md),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Uu(l+1/3,s,o),i[1]=Uu(l,s,o),i[2]=Uu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ju),n&&i.length<4&&(i[3]=1),i}else i=e.match(md)||Ro.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(s){var o=s.match(Gr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Md=function(e,t,n){var i="",s=(e+i).match(Gi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=qd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Yd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gi,"1").split(Gr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Gi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Gi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ro)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),E_=/hsl[a]?\(/,ih=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=E_.test(t),e[1]=Md(e[1],n),e[0]=Md(e[0],n,Yd(e[1])),!0},Fo,Nn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,S=m===!0,b,v,E,C;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,b=E-o,(b>0||S)&&(C=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=b+(b>=s?0:s-b),v=1),S||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](E,d,C,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){wd&&(!ku&&Zu()&&(Ri=ku=window,Ku=Ri.document||{},Wn.gsap=hn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(hn.version),Ad(Za||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Wd.forEach(Xd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Fo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fo=0,c=No},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,S){var b=p?function(v,E,C,w){m(v,E,C,w),h.remove(b)}:m;return h.remove(m),a[S?"unshift":"push"](b),Ls(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),Ls=function(){return!Fo&&Nn.wake()},ot={},w_=/^[\d.\-M][\d.\-,\s]/,A_=/["']/g,C_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(A_,"").trim():+c,i=l.substr(a+1).trim();return t},R_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},P_=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[C_(t[1])]:R_(e).split(",").map(Id)):ot._CE&&w_.test(e)?ot._CE("",e):n},I_=function(e){return function(t){return 1-e(1-t)}},Vr=function(e,t){return e&&(Nt(e)?e:ot[e]||P_(e))||t},Xr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){ot[a]=Wn[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},Zd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/zu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*t_((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Zd(a);return s=zu/s,l.config=function(c,u){return r(e,c,u)},l},Fu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Zd(n);return i.config=function(s){return r(e,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Xr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Xr("Elastic",Nu("in"),Nu("out"),Nu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Xr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Xr("Circ",function(r){return-(Td(1-r*r)-1)});Xr("Sine",function(r){return r===1?1:-e_(r*Qg)+1});Xr("Back",Fu("in"),Fu("out"),Fu());ot.SteppedEase=ot.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((i*zo(0,o,a)|0)+s)*n}}};Lo.ease=ot["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ju+=r+","+r+"Params,"});var rh=function(e,t){this.id=jg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:th,this.set=t?t.getSetter:ol},Oo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ds(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Fo||Nn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sl(this,n),!s._dp||s.parent||Ud(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ka(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(zo(-Math.abs(this._delay),a,s),i!==!1),rl(this),h_(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ls(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==vt,o;if(s)for(this._tTime-=vt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+vt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ka(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=a_);var i=sn;return sn=n,nh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ri(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i)),this._dur||(this._zTime=-vt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Nt(n)?n:Dd,l=function(){var u=i.then;i.then=null,s&&s(),Nt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Co(this)},r})();Xn(Oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var cn=(function(r){bd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Pt&&Pi(n.parent||Pt,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nd(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Io(0,arguments,this),this},t.from=function(i,s,o){return Io(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Io(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,ri(this,o),1),this},t.call=function(i,s,o){return Pi(this,kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new kt(i,o,ri(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Po(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Po(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,S,b,v,E,C,w;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,b=this._ts,p=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Rt(u%m),u===l?(g=this._repeat,d=c):(E=Rt(u/m),g=~~E,g&&g===E&&(d=c,g--),d>c&&(d=c)),E=Is(this._tTime,m),!a&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),C&&g&1&&(d=c-d,w=1),g!==E&&!this._lock){var R=C&&E&1,y=R===(C&&g&1);if(g<E&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Rt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=m_(this,Rt(a),Rt(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!E&&(Gn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-vt);break}}f=_}else{f=this._last;for(var x=i<0?i:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||sn&&nh(f)),d!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=x?-vt:vt);break}}f=_}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-vt)._zTime=d>=a?1:-1,this._ts))return this._start=v,rl(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wi(s)||(s=ri(this,s,i)),!(i instanceof Oo)){if(un(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Nt(i))i=kt.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Nt(i)?this.killTweensOf(i):(i.parent===this&&il(this,i),i===this._recent&&(this._recent=this._last),kr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=kt.delayedCall(0,s||No,o);return a.data="isPause",this._hasPause=1,Pi(this,a,ri(this,i))},t.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&fr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=oi(i),l=this._first,c=Wi(s),u;l;)l instanceof kt?l_(l._targets,a)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ri(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=kt.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ds(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Xn({startAt:{time:ri(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yd(this,ri(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yd(this,ri(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Rt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return kr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),kr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=si,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Rt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ds(o,o===Pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(Pd(Pt,Ka(i,Pt)),Rd=Nn.frame),Nn.frame>=gd){gd+=On.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&On.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e})(Oo);Xn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var D_=function(e,t,n,i,s,o,a){var l=new Tn(this._pt,e,t,0,1,ch,null,s),c=0,u=0,h,d,f,_,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Us(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(Du)||[];h=Du.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Wr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Du.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,($u.test(i)||p)&&(l.e=0),this._pt=l,l},sh=function(e,t,n,i,s,o,a,l,c,u){Nt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Nt(h)?c?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Nt(h)?c?O_:$d:lh,_;if(Jt(i)&&(~i.indexOf("random(")&&(i=Us(i)),i.charAt(1)==="="&&(_=Wr(d,i)+(on(d)||0),(_||_===0)&&(i=_))),!u||d!==i||qu)return!isNaN(d*i)&&i!==""?(_=new Tn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?z_:Kd,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&nl(t,i),D_.call(this,e,t,d,i,f,l||On.stringFilter,c))},L_=function(e,t,n,i,s){if(Nt(e)&&(e=Do(e,s,t,n,i)),!Ii(e)||e.style&&e.nodeType||un(e)||Ed(e))return Jt(e)?Do(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Do(e[a],s,t,n,i);return o},oh=function(e,t,n,i,s,o){var a,l,c,u;if(Un[e]&&(a=new Un[e]).init(s,a.rawVars?t[e]:L_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},cr,qu,ah=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Yu,v=e.timeline,E=i.easeReverse||h,C,w,R,y,x,D,F,B,V,J,H,Y,k;if(v&&(!d||!s)&&(s="none"),e._ease=Vr(s,Lo.ease),e._rEase=E&&(Vr(E)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(B=m[0]?hr(m[0]).harness:0,Y=B&&i[B.prop],C=$a(i,Qu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Xa:o_),g._lazy=0),o){if(fr(e._startAt=kt.set(m,Xn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!a&&!f)&&e._startAt.revert(Xa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),R=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Fn(l),immediateRender:a,stagger:0,parent:p},C),Y&&(R[B.prop]=Y),fr(e._startAt=kt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Xa):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Fn(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],F=x._gsap||eh(m)[w]._gsap,e._ptLookup[w]=J={},Vu[F.id]&&ur.length&&Ja(),H=S===m?w:S.indexOf(x),B&&(V=new B).init(x,Y||C,e,H,S)!==!1&&(e._pt=y=new Tn(e._pt,x,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ee){J[ee]=y}),V.priority&&(D=1)),!B||Y)for(R in C)Un[R]&&(V=oh(R,C,e,H,x,S))?V.priority&&(D=1):J[R]=y=sh.call(e,x,R,"get",C[R],H,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),b&&e._pt&&(cr=e,Pt.killTweensOf(x,J,e.globalTime(t)),k=!e.parent,cr=0),e._pt&&l&&(Vu[F.id]=1)}D&&hh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&v.render(si,!0,!0)},U_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qu=1,e.vars[t]="+=0",ah(e,a),qu=0,l?Uo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ft(n)+on(h.e)),h.b&&(h.b=u.s+on(h.b))},N_=function(e,t){var n=e[0]?hr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ps({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},F_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Do=function(e,t,n,i,s){return Nt(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?Us(e):e},ja=ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jd={};bn(ja+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jd[r]=1});ja=ja.split(",");var kt=(function(r){bd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Po(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Pt,S=(un(n)||Ed(n)?Wi(n[0]):"length"in i)?[n]:oi(n),b,v,E,C,w,R,y,x;if(a._targets=S.length?eh(S):Uo("GSAP target "+n+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Wa(c)||Wa(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(b=a.timeline=new cn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),b.kill(),b.parent=b._dp=Hi(a),b._start=0,d||Wa(c)||Wa(u)){if(C=S.length,y=d&&zd(d),Ii(d))for(w in d)~ja.indexOf(w)&&(x||(x={}),x[w]=d[w]);for(v=0;v<C;v++)E=$a(i,Jd),E.stagger=0,D&&(E.easeReverse=D),x&&Ps(E,x),R=S[v],E.duration=+Do(c,Hi(a),v,R,S),E.delay=(+Do(u,Hi(a),v,R,S)||0)-a._delay,!d&&C===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),b.to(R,E,y?y(v,R,S):0),b._ease=ot.none;b.duration()?c=u=0:a.timeline=0}else if(_){Po(Xn(b.vars.defaults,{ease:"none"})),b._ease=Vr(_.ease||i.ease||"none");var F=0,B,V,J;if(un(_))_.forEach(function(H){return b.to(S,H,">")}),b.duration();else{E={};for(w in _)w==="ease"||w==="easeEach"||F_(w,_[w],E,_.easeEach);for(w in E)for(B=E[w].sort(function(H,Y){return H.t-Y.t}),F=0,v=0;v<B.length;v++)V=B[v],J={ease:V.e,duration:(V.t-(v?B[v-1].t:0))/100*c},J[w]=V.v,b.to(S,J,F),F+=J.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!Yu&&(cr=Hi(a),Pt.killTweensOf(S),cr=0),Pi(p,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Rt(p._time)&&Fn(h)&&f_(Hi(a))&&p.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),m&&Nd(Hi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-vt&&!u?l:i<vt?0:i,d,f,_,g,m,p,S,b;if(!c)p_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=Rt(h%g),h===l?(_=this._repeat,d=c):(m=Rt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Is(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Rt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Fd(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var E=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(v?-1:1)/E:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(d/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Hu(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Hu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&fr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Fo||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ah(this,c),u=this._ease(c/this._dur),U_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(sl(this,0),this.parent||Ld(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Co(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||Co(this),this.parent&&o!==this.timeline.totalDuration()&&Ds(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?oi(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&u_(a,l))return s==="all"&&(this._pt=0),Co(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(g={},bn(s,function(S){return g[S]=1}),s=g),s=N_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&il(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Co(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Io(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Io(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Pt.killTweensOf(i,s,o)},e})(Oo);Xn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new cn,t=Gu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var lh=function(e,t,n){return e[t]=n},$d=function(e,t,n){return e[t](n)},O_=function(e,t,n,i){return e[t](i.fp,n)},B_=function(e,t,n){return e.setAttribute(t,n)},ol=function(e,t){return Nt(e[t])?$d:tl(e[t])&&e.setAttribute?B_:lh},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},z_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ch=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},uh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},k_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},V_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},H_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Tn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Kd,this.d=l||this,this.set=c||lh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=H_,this.m=n,this.mt=s,this.tween=i},r})();bn(ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Qu[r]=1});Wn.TweenMax=Wn.TweenLite=kt;Wn.TimelineLite=Wn.TimelineMax=cn;Pt=new cn({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=ih;var Hr=[],Ya={},G_=[],Sd=0,W_=0,Ou=function(e){return(Ya[e]||G_).map(function(t){return t()})},Bo=function(){var e=Date.now(),t=[];e-Sd>2&&(Ou("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ri.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ou("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sd=e,Ou("matchMedia"))},Qd=(function(){function r(t,n){this.selector=n&&Wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=W_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Nt(n)&&(s=i,i=n,n=Nt);var o=this,a=function(){var c=Ct,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Wu(s)),Ct=o,h=i.apply(o,arguments),Nt(h)&&o._r.push(h),Ct=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Nt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Bo):a.removeEventListener("change",Bo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),X_=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ii(n)||(n={matches:n});var o=new Qd(0,s||this.scope),a=o.conditions={},l,c,u;Ct&&!o.selector&&(o.selector=Ct.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Bo):l.addEventListener("change",Bo),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),el={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xd(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=oi(e)[0]);var s=hr(e||{}).get,o=n?Dd:Id;return n==="native"&&(n=""),e&&(t?o((Un[t]&&Un[t].get||s)(e,t,n,i)):function(a,l,c){return o((Un[a]&&Un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var i=e.map(function(u){return hn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Un[t],a=hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Rs._pt=0,h.init(e,n?u+n:u,Rs,0,[e]),h.render(1,h),Rs._pt&&uh(1,Rs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=hn.to(e,Xn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vr(e.ease,Lo.ease)),_d(Lo,e||{})},config:function(e){return _d(On,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Wn[a]&&Uo(t+" effect requires "+a+" plugin.")}),Lu[t]=function(a,l,c){return n(oi(a),Xn(l||{},s),c)},o&&(cn.prototype[t]=function(a,l,c){return this.add(Lu[t](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Vr(t)},parseEase:function(e,t){return arguments.length?Vr(e,t):ot},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(Pt,n,0),n},context:function(e,t){return e?new Qd(e,t):Ct},matchMedia:function(e){return new X_(e)},matchMediaRefresh:function(){return Hr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Bo()},addEventListener:function(e,t){var n=Ya[e]||(Ya[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ya[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:S_,wrapYoyo:b_,distribute:zd,random:Vd,snap:kd,normalize:M_,getUnit:on,clamp:__,splitColor:qd,toArray:oi,selector:Wu,mapRange:Gd,pipe:v_,unitize:y_,interpolate:T_,shuffle:Bd},install:Ad,effects:Lu,ticker:Nn,updateRoot:cn.updateRoot,plugins:Un,globalTimeline:Pt,core:{PropTween:Tn,globals:Cd,Tween:kt,Timeline:cn,Animation:Oo,getCache:hr,_removeLinkedListItem:il,reverting:function(){return sn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return Yu=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return el[r]=kt[r]});Nn.add(cn.updateRoot);Rs=el.to({},{duration:0});var q_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Y_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=q_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Bu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Y_(a,s)}}}},hn=el.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bu("roundProps",Xu),Bu("modifiers"),Bu("snap",kd))||el;kt.version=cn.version=hn.version="3.15.1";wd=1;Zu()&&Ls();var Z_=ot.Power0,J_=ot.Power1,$_=ot.Power2,K_=ot.Power3,Q_=ot.Power4,j_=ot.Linear,e0=ot.Quad,t0=ot.Cubic,n0=ot.Quart,i0=ot.Quint,r0=ot.Strong,s0=ot.Elastic,o0=ot.Back,a0=ot.SteppedEase,l0=ot.Bounce,c0=ot.Sine,u0=ot.Expo,h0=ot.Circ;var jd,pr,Fs,_h,Jr,f0,ep,xh,d0=function(){return typeof window<"u"},qi={},Zr=180/Math.PI,Os=Math.PI/180,Ns=Math.atan2,tp=1e8,vh=/([A-Z])/g,p0=/(left|right|width|margin|padding|x)/i,m0=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},g0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},x0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},v0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},cp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},up=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},y0=function(e,t,n){return e.style[t]=n},M0=function(e,t,n){return e.style.setProperty(t,n)},S0=function(e,t,n){return e._gsap[t]=n},b0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},T0=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},E0=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},It="transform",Bn=It+"Origin",w0=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Xi(i,a)}):this.tfm[e]=o.x?o[e]:Xi(i,e),e===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},hp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},A0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xh(),(!s||!s.isStart)&&!n[It]&&(hp(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},fp=function(e,t){var n={target:e,props:[],revert:A0,save:w0};return e._gsap||hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},dp,ph=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Bs(t)||t,1)||""},np="O,Moz,ms,Ms,Webkit".split(","),Bs=function(e,t,n){var i=t||Jr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(np[o]+e in s););return o<0?null:(o===3?"ms":o>=0?np[o]:"")+e},mh=function(){d0()&&window.document&&(jd=window,pr=jd.document,Fs=pr.documentElement,Jr=ph("div")||{style:{}},f0=ph("div"),It=Bs(It),Bn=It+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dp=!!Bs("perspective"),xh=hn.core.reverting,_h=1)},ip=function(e){var t=e.ownerSVGElement,n=ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fs.removeChild(n),s},rp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},pp=function(e){var t,n;try{t=e.getBBox()}catch{t=ip(e),n=1}return t&&(t.width||t.height)||n||(t=ip(e)),t&&!t.width&&!t.x&&!t.y?{x:+rp(e,["x","cx","x1"])||0,y:+rp(e,["y","cy","y1"])||0,width:0,height:0}:t},mp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pp(e))},gr=function(e,t){if(t){var n=e.style,i;t in qi&&t!==Bn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(vh,"-$1").toLowerCase())):n.removeAttribute(t)}},mr=function(e,t,n,i,s,o){var a=new Tn(e._pt,t,n,0,1,o?up:cp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},sp={deg:1,rad:1,turn:1},C0={grid:1,flex:1},_r=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Jr.style,l=p0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||sp[i]||sp[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&mp(e),(f||o==="%")&&(qi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ft(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===pr||!g.appendChild)&&(g=pr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Nn.time&&!m.uncache)return Ft(s/m.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:gr(e,t)}else(f||o==="%")&&!C0[qn(g,"display")]&&(a.position=qn(e,"position")),g===e&&(a.position="static"),g.appendChild(Jr),_=Jr[u],g.removeChild(Jr),a.position="absolute";return l&&f&&(m=hr(g),m.time=Nn.time,m.width=g[u]),Ft(d?_*s/h:_&&s?h/_*s:0)},Xi=function(e,t,n,i){var s;return _h||mh(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(s=Ho(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ll(qn(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=al[t]&&al[t](e,t,n)||qn(e,t)||th(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(e,t,s,n)+n:s},R0=function(e,t,n,i){if(!n||n==="none"){var s=Bs(t,e,1),o=s&&qn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=qn(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,ch),l=0,c=0,u,h,d,f,_,g,m,p,S,b,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=qn(e,t)||i,g?e.style[t]=g:gr(e,t)),u=[n,i],ih(u),n=u[0],i=u[1],d=n.match(Gr)||[],E=i.match(Gr)||[],E.length){for(;h=Gr.exec(i);)m=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=Wr(f,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=Gr.lastIndex-b.length,b||(b=b||On.units[t]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(f=_r(e,t,g,b)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?up:cp;return $u.test(i)&&(a.e=0),this._pt=a,a},op={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},P0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=op[n]||n,t[1]=op[i]||i,t.join(" ")},I0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qi[a]&&(l=1,a=a==="transformOrigin"?Bn:It),gr(n,a);l&&(gr(n,It),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ho(n,1),o.uncache=1,hp(i)))}},al={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,n,0,0,I0);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Vo=[1,0,0,1,0,0],gp={},_p=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ap=function(e){var t=qn(e,It);return _p(t)?Vo:t.substr(7).match(Ju).map(Ft)},yh=function(e,t){var n=e._gsap||hr(e),i=e.style,s=ap(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Vo:s):(s===Vo&&!e.offsetParent&&e!==Fs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Fs.appendChild(e)),s=ap(e),l?i.display=l:gr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gh=function(e,t,n,i,s,o){var a=e._gsap,l=s||yh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],b=t.split(" "),v=parseFloat(b[0])||0,E=parseFloat(b[1])||0,C,w,R,y;n?l!==Vo&&(w=f*m-_*g)&&(R=v*(m/w)+E*(-g/w)+(g*S-m*p)/w,y=v*(-_/w)+E*(f/w)-(f*S-_*p)/w,v=R,E=y):(C=pp(e),v=C.x+(~b[0].indexOf("%")?v/100*C.width:v),E=C.y+(~(b[1]||b[0]).indexOf("%")?E/100*C.height:E)),i||i!==!1&&a.smooth?(p=v-c,S=E-u,a.xOffset=h+(p*f+S*g)-p,a.yOffset=d+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bn]="0px 0px",o&&(mr(o,a,"xOrigin",c,v),mr(o,a,"yOrigin",u,E),mr(o,a,"xOffset",h,a.xOffset),mr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},Ho=function(e,t){var n=e._gsap||new rh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qn(e,Bn)||"0",u,h,d,f,_,g,m,p,S,b,v,E,C,w,R,y,x,D,F,B,V,J,H,Y,k,ee,P,oe,Ie,We,q,te;return u=h=d=g=m=p=S=b=v=0,f=_=1,n.svg=!!(e.getCTM&&mp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),w=yh(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),gh(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,C=n.yOrigin||0,w!==Vo&&(D=w[0],F=w[1],B=w[2],V=w[3],u=J=w[4],h=H=w[5],w.length===6?(f=Math.sqrt(D*D+F*F),_=Math.sqrt(V*V+B*B),g=D||F?Ns(F,D)*Zr:0,S=B||V?Ns(B,V)*Zr+g:0,S&&(_*=Math.abs(Math.cos(S*Os))),n.svg&&(u-=E-(E*D+C*B),h-=C-(E*F+C*V))):(te=w[6],We=w[7],P=w[8],oe=w[9],Ie=w[10],q=w[11],u=w[12],h=w[13],d=w[14],R=Ns(te,Ie),m=R*Zr,R&&(y=Math.cos(-R),x=Math.sin(-R),Y=J*y+P*x,k=H*y+oe*x,ee=te*y+Ie*x,P=J*-x+P*y,oe=H*-x+oe*y,Ie=te*-x+Ie*y,q=We*-x+q*y,J=Y,H=k,te=ee),R=Ns(-B,Ie),p=R*Zr,R&&(y=Math.cos(-R),x=Math.sin(-R),Y=D*y-P*x,k=F*y-oe*x,ee=B*y-Ie*x,q=V*x+q*y,D=Y,F=k,B=ee),R=Ns(F,D),g=R*Zr,R&&(y=Math.cos(R),x=Math.sin(R),Y=D*y+F*x,k=J*y+H*x,F=F*y-D*x,H=H*y-J*x,D=Y,J=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ft(Math.sqrt(D*D+F*F+B*B)),_=Ft(Math.sqrt(H*H+te*te)),R=Ns(J,H),S=Math.abs(R)>2e-4?R*Zr:0,v=q?1/(q<0?-q:q):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!_p(qn(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ft(f),n.scaleY=Ft(_),n.rotation=Ft(g)+a,n.rotationX=Ft(m)+a,n.rotationY=Ft(p)+a,n.skewX=S+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=ll(c)),n.xOffset=n.yOffset=0,n.force3D=On.force3D,n.renderTransform=n.svg?L0:dp?xp:D0,n.uncache=0,n},ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},fh=function(e,t,n){var i=on(t);return Ft(parseFloat(t)+parseFloat(_r(e,"x",n+"px",i)))+i},D0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xp(e,t)},qr="0deg",ko="0px",Yr=") ",xp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,b=n.zOrigin,v="",E=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==qr||u!==qr)){var C=parseFloat(u)*Os,w=Math.sin(C),R=Math.cos(C),y;C=parseFloat(h)*Os,y=Math.cos(C),o=fh(S,o,w*y*-b),a=fh(S,a,-Math.sin(C)*-b),l=fh(S,l,R*y*-b+b)}m!==ko&&(v+="perspective("+m+Yr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||o!==ko||a!==ko||l!==ko)&&(v+=l!==ko||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yr),c!==qr&&(v+="rotate("+c+Yr),u!==qr&&(v+="rotateY("+u+Yr),h!==qr&&(v+="rotateX("+h+Yr),(d!==qr||f!==qr)&&(v+="skew("+d+", "+f+Yr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Yr),S.style[It]=v||"translate(0, 0)"},L0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,b=parseFloat(o),v=parseFloat(a),E,C,w,R,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Os,c*=Os,E=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Os,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),E*=y,C*=y)),E=Ft(E),C=Ft(C),w=Ft(w),R=Ft(R)):(E=h,R=d,C=w=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=_r(f,"x",o,"px"),v=_r(f,"y",a,"px")),(_||g||m||p)&&(b=Ft(b+_-(_*E+g*w)+m),v=Ft(v+g-(_*C+g*R)+p)),(i||s)&&(y=f.getBBox(),b=Ft(b+i/100*y.width),v=Ft(v+s/100*y.height)),y="matrix("+E+","+C+","+w+","+R+","+b+","+v+")",f.setAttribute("transform",y),S&&(f.style[It]=y)},U0=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*tp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*tp)%o-~~(c/o)*o)),e._pt=d=new Tn(e._pt,t,n,i,c,g0),d.e=u,d.u="deg",e._props.push(n),d},lp=function(e,t){for(var n in t)e[n]=t[n];return e},N0=function(e,t,n){var i=lp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[It]=t,a=Ho(n,1),gr(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],o[It]=t,a=Ho(n,1),o[It]=c);for(l in qi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=on(c),_=on(u),h=f!==_?_r(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Tn(e._pt,a,l,h,d-h,dh),e._pt.u=_||0,e._props.push(l));lp(a,i)};bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});al[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return Xi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var Mh={name:"css",register:mh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,S,b,v,E,C,w,R,y;_h||mh(),this.styles=this.styles||fp(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Un[g]&&oh(g,t,n,i,e,s)))){if(f=typeof u,_=al[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Us(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(m=on(c),p=on(u),p?m!==p&&(c=_r(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Jt(c)&&~c.indexOf("random(")&&(c=Us(c)),on(c+"")||c==="auto"||(c+=On.units[g]||on(Xi(e,g))||""),(c+"").charAt(1)==="="&&(c=Xi(e,g))):c=Xi(e,g),d=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Di&&(g==="autoAlpha"&&(d===1&&Xi(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,a.visibility),mr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in qi,b){if(this.styles.save(g),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=qn(e,"perspective"),x?e.style.perspective=x:gr(e,"perspective")}h=parseFloat(u)}if(v||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),C=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new Tn(this._pt,a,It,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new Tn(this._pt,E,"scaleY",E.scaleY,(S?Wr(E.scaleY,S+h):h)-E.scaleY||0,dh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Bn,0,a[Bn]),u=P0(u),E.svg?gh(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&mr(this,E,"zOrigin",E.zOrigin,p),mr(this,a,g,ll(c),ll(u)));continue}else if(g==="svgOrigin"){gh(e,u,1,C,0,this);continue}else if(g in gp){U0(this,E,g,d,S?Wr(d,S+u):u);continue}else if(g==="smoothOrigin"){mr(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){N0(this,u,e);continue}}else g in a||(g=Bs(g)||g);if(b||(h||h===0)&&(d||d===0)&&!m0.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),p=on(u)||(g in On.units?On.units[g]:m),m!==p&&(d=_r(e,g,c,p)),this._pt=new Tn(this._pt,b?E:a,g,d,(S?Wr(d,S+h):h)-d,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?v0:dh),this._pt.u=p||0,b&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=x0):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=_0);else if(g in a)R0.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){nl(g,u);continue}b||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),o.push(g)}}w&&hh(this)},render:function(e,t){if(t.tween._time||!xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==Bn&&(e._gsap.x||Xi(e,"x"))?n&&ep===n?t==="scale"?b0:S0:(ep=n||{})&&(t==="scale"?T0:E0):e.style&&!tl(e.style[t])?y0:~t.indexOf("-")?M0:ol(e,t)},core:{_removeProperty:gr,_getMatrix:yh}};hn.utils.checkPrefix=Bs;hn.core.getStyleSaver=fp;(function(r,e,t,n){var i=bn(r+","+e+","+t,function(s){qi[s]=1});bn(e,function(s){On.units[s]="deg",gp[s]=1}),Di[i[13]]=r+","+e,bn(n,function(s){var o=s.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){On.units[r]="px"});hn.registerPlugin(Mh);var ai=hn.registerPlugin(Mh)||hn,qb=ai.core.Tween;function vp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function F0(r,e,t){return e&&vp(r.prototype,e),t&&vp(r,t),r}var an,hl,O0,zn,xr,vr,ks,Mp,$r,Vs,Sp,Yi,xi,bp,Tp=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Ep=1,zs=[],Qe=[],vi=[],Wo=Date.now,Sh=function(e,t){return t},B0=function(){var e=Vs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,vi),Qe=n,vi=i,Sh=function(o,a){return t[o](a)}},Ji=function(e,t){return~vi.indexOf(e)&&vi[vi.indexOf(e)+1][t]},Xo=function(e){return!!~Sp.indexOf(e)},wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},En=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cl="scrollLeft",ul="scrollTop",bh=function(){return Yi&&Yi.isPressed||Qe.cache++},fl=function(e,t){var n=function i(s){if(s||s===0){Ep&&zn.history.scrollRestoration!=="manual"&&(zn.history.scrollRestoration="manual");var o=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),e(s),i.cacheID=Qe.cache,o&&Sh("ss",s)}else(t||Qe.cache!==i.cacheID||Sh("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},fn={s:cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(r){return arguments.length?zn.scrollTo(r,Gt.sc()):zn.pageXOffset||xr[cl]||vr[cl]||ks[cl]||0})},Gt={s:ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:fn,sc:fl(function(r){return arguments.length?zn.scrollTo(fn.sc(),r):zn.pageYOffset||xr[ul]||vr[ul]||ks[ul]||0})},An=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},z0=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zi=function(e,t){var n=t.s,i=t.sc;Xo(e)&&(e=xr.scrollingElement||vr);var s=Qe.indexOf(e),o=i===Gt.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+o]||wn(e,"scroll",bh);var a=Qe[s+o],l=a||(Qe[s+o]=fl(Ji(e,n),!0)||(Xo(e)?i:fl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},dl=function(e,t,n){var i=e,s=e,o=Wo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Wo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=Wo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Go=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},wp=function(){Vs=an.core.globals().ScrollTrigger,Vs&&Vs.core&&B0()},Ap=function(e){return an=e||Tp(),!hl&&an&&typeof document<"u"&&document.body&&(zn=window,xr=document,vr=xr.documentElement,ks=xr.body,Sp=[zn,xr,vr,ks],O0=an.utils.clamp,bp=an.core.context||function(){},$r="onpointerenter"in ks?"pointer":"mouse",Mp=Ot.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,xi=Ot.eventTypes=("ontouchstart"in vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ep=0},500),hl=1),Vs||wp(),hl};fn.op=Gt;Qe.cache=0;var Ot=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){hl||Ap(an)||console.warn("Please gsap.registerPlugin(Observer)"),Vs||wp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,b=n.onPress,v=n.onRelease,E=n.onRight,C=n.onLeft,w=n.onUp,R=n.onDown,y=n.onChangeX,x=n.onChangeY,D=n.onChange,F=n.onToggleX,B=n.onToggleY,V=n.onHover,J=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,k=n.isNormalizer,ee=n.onGestureStart,P=n.onGestureEnd,oe=n.onWheel,Ie=n.onEnable,We=n.onDisable,q=n.onClick,te=n.scrollSpeed,ce=n.capture,ie=n.allowClicks,Se=n.lockAxis,we=n.onLockAxis;this.target=a=An(a)||vr,this.vars=n,f&&(f=an.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,te=te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(ks).lineHeight)||22);var Ae,Ye,Xe,xe,I,ft,Ne,z=this,ye=0,rt=0,re=n.passive||!u&&n.passive!==!1,A=Zi(a,fn),M=Zi(a,Gt),G=A(),j=M(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&xi[0]==="pointerdown",$=Xo(a),fe=a.ownerDocument||xr,le=[0,0,0],pe=[0,0,0],qe=0,se=function(){return qe=Wo()},ae=function(Ce,Ke){return(z.event=Ce)&&f&&z0(Ce.target,f)||Ke&&Q&&Ce.pointerType!=="touch"||Y&&Y(Ce,Ke)},Fe=function(){z._vx.reset(),z._vy.reset(),Ye.pause(),h&&h(z)},Ue=function(){var Ce=z.deltaX=yp(le),Ke=z.deltaY=yp(pe),me=Math.abs(Ce)>=i,Ge=Math.abs(Ke)>=i;D&&(me||Ge)&&D(z,Ce,Ke,le,pe),me&&(E&&z.deltaX>0&&E(z),C&&z.deltaX<0&&C(z),y&&y(z),F&&z.deltaX<0!=ye<0&&F(z),ye=z.deltaX,le[0]=le[1]=le[2]=0),Ge&&(R&&z.deltaY>0&&R(z),w&&z.deltaY<0&&w(z),x&&x(z),B&&z.deltaY<0!=rt<0&&B(z),rt=z.deltaY,pe[0]=pe[1]=pe[2]=0),(xe||Xe)&&(H&&H(z),Xe&&(m&&Xe===1&&m(z),S&&S(z),Xe=0),xe=!1),ft&&!(ft=!1)&&we&&we(z),I&&(oe(z),I=!1),Ae=0},Me=function(Ce,Ke,me){le[me]+=Ce,pe[me]+=Ke,z._vx.update(Ce),z._vy.update(Ke),c?Ae||(Ae=requestAnimationFrame(Ue)):Ue()},$e=function(Ce,Ke){Se&&!Ne&&(z.axis=Ne=Math.abs(Ce)>Math.abs(Ke)?"x":"y",ft=!0),Ne!=="y"&&(le[2]+=Ce,z._vx.update(Ce,!0)),Ne!=="x"&&(pe[2]+=Ke,z._vy.update(Ke,!0)),c?Ae||(Ae=requestAnimationFrame(Ue)):Ue()},ke=function(Ce){if(!ae(Ce,1)){Ce=Go(Ce,u);var Ke=Ce.clientX,me=Ce.clientY,Ge=Ke-z.x,Pe=me-z.y,He=z.isDragging;z.x=Ke,z.y=me,(He||(Ge||Pe)&&(Math.abs(z.startX-Ke)>=s||Math.abs(z.startY-me)>=s))&&(Xe||(Xe=He?2:1),He||(z.isDragging=!0),$e(Ge,Pe))}},lt=z.onPress=function(ve){ae(ve,1)||ve&&ve.button||(z.axis=Ne=null,Ye.pause(),z.isPressed=!0,ve=Go(ve),ye=rt=0,z.startX=z.x=ve.clientX,z.startY=z.y=ve.clientY,z._vx.reset(),z._vy.reset(),wn(k?a:fe,xi[1],ke,re,!0),z.deltaX=z.deltaY=0,b&&b(z))},L=z.onRelease=function(ve){if(!ae(ve,1)){En(k?a:fe,xi[1],ke,!0);var Ce=!isNaN(z.y-z.startY),Ke=z.isDragging,me=Ke&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ge=Go(ve);!me&&Ce&&(z._vx.reset(),z._vy.reset(),u&&ie&&an.delayedCall(.08,function(){if(Wo()-qe>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(fe.createEvent){var Pe=fe.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,zn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Pe)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&Ke&&!k&&Ye.restart(!0),Xe&&Ue(),p&&Ke&&p(z),v&&v(z,me)}},he=function(Ce){return Ce.touches&&Ce.touches.length>1&&(z.isGesturing=!0)&&ee(Ce,z.isDragging)},Z=function(){return(z.isGesturing=!1)||P(z)},K=function(Ce){if(!ae(Ce)){var Ke=A(),me=M();Me((Ke-G)*te,(me-j)*te,1),G=Ke,j=me,h&&Ye.restart(!0)}},ue=function(Ce){if(!ae(Ce)){Ce=Go(Ce,u),oe&&(I=!0);var Ke=(Ce.deltaMode===1?l:Ce.deltaMode===2?zn.innerHeight:1)*_;Me(Ce.deltaX*Ke,Ce.deltaY*Ke,0),h&&!k&&Ye.restart(!0)}},de=function(Ce){if(!ae(Ce)){var Ke=Ce.clientX,me=Ce.clientY,Ge=Ke-z.x,Pe=me-z.y;z.x=Ke,z.y=me,xe=!0,h&&Ye.restart(!0),(Ge||Pe)&&$e(Ge,Pe)}},Ve=function(Ce){z.event=Ce,V(z)},ct=function(Ce){z.event=Ce,J(z)},Lt=function(Ce){return ae(Ce)||Go(Ce,u)&&q(z)};Ye=z._dc=an.delayedCall(d||.25,Fe).pause(),z.deltaX=z.deltaY=0,z._vx=dl(0,50,!0),z._vy=dl(0,50,!0),z.scrollX=A,z.scrollY=M,z.isDragging=z.isGesturing=z.isPressed=!1,bp(this),z.enable=function(ve){return z.isEnabled||(wn($?fe:a,"scroll",bh),o.indexOf("scroll")>=0&&wn($?fe:a,"scroll",K,re,ce),o.indexOf("wheel")>=0&&wn(a,"wheel",ue,re,ce),(o.indexOf("touch")>=0&&Mp||o.indexOf("pointer")>=0)&&(wn(a,xi[0],lt,re,ce),wn(fe,xi[2],L),wn(fe,xi[3],L),ie&&wn(a,"click",se,!0,!0),q&&wn(a,"click",Lt),ee&&wn(fe,"gesturestart",he),P&&wn(fe,"gestureend",Z),V&&wn(a,$r+"enter",Ve),J&&wn(a,$r+"leave",ct),H&&wn(a,$r+"move",de)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=xe=Xe=!1,z._vx.reset(),z._vy.reset(),G=A(),j=M(),ve&&ve.type&&lt(ve),Ie&&Ie(z)),z},z.disable=function(){z.isEnabled&&(zs.filter(function(ve){return ve!==z&&Xo(ve.target)}).length||En($?fe:a,"scroll",bh),z.isPressed&&(z._vx.reset(),z._vy.reset(),En(k?a:fe,xi[1],ke,!0)),En($?fe:a,"scroll",K,ce),En(a,"wheel",ue,ce),En(a,xi[0],lt,ce),En(fe,xi[2],L),En(fe,xi[3],L),En(a,"click",se,!0),En(a,"click",Lt),En(fe,"gesturestart",he),En(fe,"gestureend",Z),En(a,$r+"enter",Ve),En(a,$r+"leave",ct),En(a,$r+"move",de),z.isEnabled=z.isPressed=z.isDragging=!1,We&&We(z))},z.kill=z.revert=function(){z.disable();var ve=zs.indexOf(z);ve>=0&&zs.splice(ve,1),Yi===z&&(Yi=0)},zs.push(z),k&&Xo(a)&&(Yi=z),z.enable(g)},F0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ot.version="3.15.1";Ot.create=function(r){return new Ot(r)};Ot.register=Ap;Ot.getAll=function(){return zs.slice()};Ot.getById=function(r){return zs.filter(function(e){return e.vars.id===r})[0]};Tp()&&an.registerPlugin(Ot);var Ee,Xs,tt,_t,Jn,gt,Oh,Rl,ra,Qo,Yo,pl,dn,Dl,Ph,Rn,Cp,Rp,qs,Xp,Th,qp,Cn,Ih,Yp,Zp,yr,Dh,Bh,Ys,zh,Mr,Lh,Eh,ml=1,pn=Date.now,wh=pn(),ui=0,Zo=0,Pp=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ip=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},k0=function r(){return Zo&&requestAnimationFrame(r)},Dp=function(){return Dl=1},Lp=function(){return Dl=0},Li=function(e){return e},Jo=function(e){return Math.round(e*1e5)/1e5||0},Jp=function(){return typeof window<"u"},$p=function(){return Ee||Jp()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},ns=function(e){return!!~Oh.indexOf(e)},Kp=function(e){return(e==="Height"?zh:tt["inner"+e])||Jn["client"+e]||gt["client"+e]},Qp=function(e){return Ji(e,"getBoundingClientRect")||(ns(e)?function(){return Cl.width=tt.innerWidth,Cl.height=zh,Cl}:function(){return $i(e)})},V0=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ji(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Kp(s):e["client"+s])||0}},H0=function(e,t){return!t||~vi.indexOf(e)?Qp(e):function(){return Cl}},Ui=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ji(e,n))?o()-Qp(e)()[s]:ns(e)?(Jn[n]||gt[n])-Kp(i):e[n]-e["offset"+i])},gl=function(e,t){for(var n=0;n<qs.length;n+=3)(!t||~t.indexOf(qs[n+1]))&&e(qs[n],qs[n+1],qs[n+2])},Zn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},$o=function(e){return typeof e=="number"},Kr=function(e){return typeof e=="object"},qo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Hs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Gs=Math.abs,jp="left",em="top",kh="right",Vh="bottom",jr="width",es="height",jo="Right",ea="Left",ta="Top",na="Bottom",Wt="padding",li="margin",Js="Width",Hh="Height",$t="px",ci=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},G0=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Up=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$i=function(e,t){var n=t&&ci(e)[Ph]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},tm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},W0=function(e){return function(t){return Ee.utils.snap(tm(e),t)}},Gh=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},X0=function(e){return function(t,n){return Gh(tm(e))(t,n.direction)}},_l=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},en=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Np={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vl={toggleActions:"play",anticipatePin:0},Il={top:0,left:0,center:.5,bottom:1,right:1},Tl=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Il?Il[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=_t.createElement("div"),g=ns(n)||Ji(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,b=S?c:u,v="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Gt?kh:Vh)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],El(_,0,i,S),_},El=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Js]=1,s["border"+a+Js]=0,s[n.p]=t+"px",Ee.set(e,s)},et=[],Uh={},sa,Fp=function(){return pn()-ui>34&&(sa||(sa=requestAnimationFrame(Ki)))},Ws=function(){(!Cn||!Cn.isPressed||Cn.startX>gt.clientWidth)&&(Qe.cache++,Cn?sa||(sa=requestAnimationFrame(Ki)):Ki(),ui||rs("scrollStart"),ui=pn())},Ah=function(){Zp=tt.innerWidth,Yp=tt.innerHeight},Ko=function(e){Qe.cache++,(e===!0||!dn&&!qp&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!Ih||Zp!==tt.innerWidth||Math.abs(tt.innerHeight-Yp)>tt.innerHeight*.25))&&Rl.restart(!0)},is={},q0=[],nm=function r(){return jt(nt,"scrollEnd",r)||Qr(!0)},rs=function(e){return is[e]&&is[e].map(function(t){return t()})||q0},Yn=[],im=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},rm=function(){Qe.cache++,Qe.forEach(function(e){return mn(e)&&(e.rec=e())})},Wh=function(e,t){var n;for(Rn=0;Rn<et.length;Rn++)n=et[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Mr=!0,t&&im(t),t||rs("revert")},sm=function(e,t){Qe.cache++,(t||!Pn)&&Qe.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(Bh=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},Pn,ts=0,Op,Y0=function(){if(Op!==ts){var e=Op=ts;requestAnimationFrame(function(){return e===ts&&Qr(!0)})}},om=function(){gt.appendChild(Ys),zh=!Cn&&Ys.offsetHeight||tt.innerHeight,gt.removeChild(Ys)},Bp=function(e){return ra(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Qr=function(e,t){if(Jn=_t.documentElement,gt=_t.body,Oh=[tt,_t,Jn,gt],ui&&!e&&!Mr){en(nt,"scrollEnd",nm);return}om(),Pn=nt.isRefreshing=!0,Mr||rm();var n=rs("refreshInit");Xp&&nt.sort(),t||Wh(),Qe.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Mr=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Lh=1,Bp(!0),et.forEach(function(i){var s=Ui(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Bp(!1),Lh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sm(Bh,1),Rl.pause(),ts++,Pn=2,Ki(2),et.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Pn=nt.isRefreshing=!1,rs("refresh")},Nh=0,wl=1,ia,Ki=function(e){if(e===2||!Pn&&!Mr){nt.isUpdating=!0,ia&&ia.update(0);var t=et.length,n=pn(),i=n-wh>=50,s=t&&et[0].scroll();if(wl=Nh>s?-1:1,Pn||(Nh=s),i&&(ui&&!Dl&&n-ui>200&&(ui=0,rs("scrollEnd")),Yo=wh,wh=n),wl<0){for(Rn=t;Rn-- >0;)et[Rn]&&et[Rn].update(0,i);wl=1}else for(Rn=0;Rn<t;Rn++)et[Rn]&&et[Rn].update(0,i);nt.isUpdating=!1}sa=0},Fh=[jp,em,Vh,kh,li+na,li+jo,li+ta,li+ea,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Al=Fh.concat([jr,es,"boxSizing","max"+Js,"max"+Hh,"position",li,Wt,Wt+ta,Wt+jo,Wt+na,Wt+ea]),Z0=function(e,t,n){Zs(n);var i=e._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ch=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Fh.length,o=t.style,a=e.style,l;s--;)l=Fh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vh]=a[kh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jr]=Pl(e,fn)+$t,o[es]=Pl(e,Gt)+$t,o[Wt]=a[li]=a[em]=a[jp]="0",Zs(i),a[jr]=a["max"+Js]=n[jr],a[es]=a["max"+Hh]=n[es],a[Wt]=n[Wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},J0=/([A-Z])/g,Zs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(J0,"-$1").toLowerCase())}},Ml=function(e){for(var t=Al.length,n=e.style,i=[],s=0;s<t;s++)i.push(Al[s],n[Al[s]]);return i.t=e,i},$0=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Cl={left:0,top:0},zp=function(e,t,n,i,s,o,a,l,c,u,h,d,f,_){mn(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Tl("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,S;if(f&&f.seek(0),isNaN(e)||(e=+e),$o(e))f&&(e=Ee.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&El(a,n,i,!0);else{mn(t)&&(t=t(l));var b=(e||"0").split(" "),v,E,C,w;S=An(t,l)||gt,v=$i(S)||{},(!v||!v.left&&!v.top)&&ci(S).display==="none"&&(w=S.style.display,S.style.display="block",v=$i(S),w?S.style.display=w:S.style.removeProperty("display")),E=Tl(b[0],v[i.d]),C=Tl(b[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-C,a&&El(a,C,i,n-C<20||a._isStart&&C>20),n-=n-C}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+n,y=o._isStart;m="scroll"+i.d2,El(o,R,i,y&&R>20||!y&&(h?Math.max(gt[m],Jn[m]):o.parentNode[m])<=R+1),h&&(c=$i(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$t))}return f&&S&&(m=$i(S),f.seek(d),p=$i(S),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},K0=/(webkit|moz|length|cssText|inset)/i,kp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=ci(e);for(o in a)!+o&&!K0.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},am=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Sl=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Vp=function(e,t){var n=Zi(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=am(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){Qe.cache++,o.tween&&Ki()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ee.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(e,"wheel",n.wheelHandler),nt.isTouch&&en(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){Xs||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zo){this.update=this.refresh=this.kill=Li;return}n=Up(Zn(n)||$o(n)||n.nodeType?{trigger:n}:n,vl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,b=s.once,v=s.snap,E=s.pinReparent,C=s.pinSpacer,w=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?fn:Gt,D=!h&&h!==0,F=An(n.scroller||tt),B=Ee.core.getCache(F),V=ns(F),J=("pinType"in n?n.pinType:Ji(F,"pinType")||V&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=D&&n.toggleActions.split(" "),k="markers"in n?n.markers:vl.markers,ee=V?0:parseFloat(ci(F)["border"+x.p2+Js])||0,P=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Ie=V0(F,V,x),We=H0(F,V),q=0,te=0,ce=0,ie=Zi(F,x),Se,we,Ae,Ye,Xe,xe,I,ft,Ne,z,ye,rt,re,A,M,G,j,Q,$,fe,le,pe,qe,se,ae,Fe,Ue,Me,$e,ke,lt,L,he,Z,K,ue,de,Ve,ct;if(P._startClamp=P._endClamp=!1,P._dir=x,m*=45,P.scroller=F,P.scroll=w?w.time.bind(w):ie,Ye=ie(),Mr&&ie.rec==null&&(ie.rec=Ye),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xp=1,n.refreshPriority===-9999&&(ia=P)),B.tweenScroll=B.tweenScroll||{top:Vp(F,Gt),left:Vp(F,fn)},P.tweenTo=Se=B.tweenScroll[x.p],P.scrubDuration=function(me){he=$o(me)&&me,he?L?L.duration(me):L=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ke=0,l||(l=i.vars.id)),v&&((!Kr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in gt.style&&Ee.set(V?[gt,Jn]:F,{scrollBehavior:"auto"}),Qe.forEach(function(me){return mn(me)&&me.target===(V?_t.scrollingElement||Jn:F)&&(me.smooth=!1)}),Ae=mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?W0(i):v.snapTo==="labelsDirectional"?X0(i):v.directional!==!1?function(me,Ge){return Gh(v.snapTo)(me,pn()-te<500?0:Ge.direction)}:Ee.utils.snap(v.snapTo),Z=v.duration||{min:.1,max:2},Z=Kr(Z)?Qo(Z.min,Z.max):Qo(Z,Z),K=Ee.delayedCall(v.delay||he/2||.1,function(){var me=ie(),Ge=pn()-te<500,Pe=Se.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!Pe&&!Dl&&q!==me){var He=(me-xe)/A,zt=i&&!D?i.totalProgress():He,st=Ge?0:(zt-lt)/(pn()-Yo)*1e3||0,bt=Ee.utils.clamp(-He,1-He,Gs(st/2)*st/.185),qt=He+(v.inertia===!1?0:bt),yt,Mt,dt=v,Vn=dt.onStart,Tt=dt.onInterrupt,Mn=dt.onComplete;if(yt=Ae(qt,P),$o(yt)||(yt=qt),Mt=Math.max(0,Math.round(xe+yt*A)),me<=I&&me>=xe&&Mt!==me){if(Pe&&!Pe._initted&&Pe.data<=Gs(Mt-me))return;v.inertia===!1&&(bt=yt-He),Se(Mt,{duration:Z(Gs(Math.max(Gs(qt-zt),Gs(yt-zt))*.185/st/.05||0)),ease:v.ease||"power3",data:Gs(Mt-me),onInterrupt:function(){return K.restart(!0)&&Tt&&Hs(P,Tt)},onComplete:function(){P.update(),q=ie(),i&&!D&&(L?L.resetTo("totalProgress",yt,i._tTime/i._tDur):i.progress(yt)),ke=lt=i&&!D?i.totalProgress():P.progress,S&&S(P),Mn&&Hs(P,Mn)}},me,bt*A,Mt-me-bt*A),Vn&&Hs(P,Vn,Se.tween)}}else P.isActive&&q!==me&&K.restart(!0)}).pause()),l&&(Uh[l]=P),d=P.trigger=An(d||f!==!0&&f),ct=d&&d._gsap&&d._gsap.stRevert,ct&&(ct=ct(P)),f=f===!0?d:An(f),Zn(a)&&(a={targets:d,className:a}),f&&(_===!1||_===li||(_=!_&&f.parentNode&&f.parentNode.style&&ci(f.parentNode).display==="flex"?!1:Wt),P.pin=f,we=Ee.core.getCache(f),we.spacer?M=we.pinState:(C&&(C=An(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),we.spacerIsNative=!!C,C&&(we.spacerState=Ml(C))),we.spacer=Q=C||_t.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),we.pinState=M=Ml(f)),n.force3D!==!1&&Ee.set(f,{force3D:!0}),P.spacer=Q=we.spacer,$e=ci(f),se=$e[_+x.os2],fe=Ee.getProperty(f),le=Ee.quickSetter(f,x.a,$t),Ch(f,Q,$e),j=Ml(f)),k){rt=Kr(k)?Up(k,Np):Np,z=yl("scroller-start",l,F,x,rt,0),ye=yl("scroller-end",l,F,x,rt,0,z),$=z["offset"+x.op.d2];var Lt=An(Ji(F,"content")||F);ft=this.markerStart=yl("start",l,Lt,x,rt,$,0,w),Ne=this.markerEnd=yl("end",l,Lt,x,rt,$,0,w),w&&(Ve=Ee.quickSetter([ft,Ne],x.a,$t)),!J&&!(vi.length&&Ji(F,"fixedMarkers")===!0)&&(G0(V?gt:F),Ee.set([z,ye],{force3D:!0}),Fe=Ee.quickSetter(z,x.a,$t),Me=Ee.quickSetter(ye,x.a,$t))}if(w){var ve=w.vars.onUpdate,Ce=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(w,Ce||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(me,Ge){if(!Ge)return P.kill(!0);var Pe=me!==!1||!P.enabled,He=dn;Pe!==P.isReverted&&(Pe&&(ue=Math.max(ie(),P.scroll.rec||0),ce=P.progress,de=i&&i.progress()),ft&&[ft,Ne,z,ye].forEach(function(zt){return zt.style.display=Pe?"none":"block"}),Pe&&(dn=P,P.update(Pe)),f&&(!E||!P.isActive)&&(Pe?Z0(f,Q,M):Ch(f,Q,ci(f),ae)),Pe||P.update(Pe),dn=He,P.isReverted=Pe)},P.refresh=function(me,Ge,Pe,He){if(!((dn||!P.enabled)&&!Ge)){if(f&&me&&ui){en(r,"scrollEnd",nm);return}!Pn&&oe&&oe(P),dn=P,Se.tween&&!Pe&&(Se.tween.kill(),Se.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ze){return Ze.vars.immediateRender&&Ze.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var zt=Ie(),st=We(),bt=w?w.duration():Ui(F,x),qt=A<=.01||!A,yt=0,Mt=He||0,dt=Kr(Pe)?Pe.end:n.end,Vn=n.endTrigger||d,Tt=Kr(Pe)?Pe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Mn=P.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,P),ti=d&&Math.max(0,et.indexOf(P))||0,Yt=ti,Zt,T,O,X,W,N,ne,ge,Te,be,Le,Be,De;for(k&&Kr(Pe)&&(Be=Ee.getProperty(z,x.p),De=Ee.getProperty(ye,x.p));Yt-- >0;)N=et[Yt],N.end||N.refresh(0,1)||(dn=P),ne=N.pin,ne&&(ne===d||ne===f||ne===Mn)&&!N.isReverted&&(be||(be=[]),be.unshift(N),N.revert(!0,!0)),N!==et[Yt]&&(ti--,Yt--);for(mn(Tt)&&(Tt=Tt(P)),Tt=Pp(Tt,"start",P),xe=zp(Tt,d,zt,x,ie(),ft,z,P,st,ee,J,bt,w,P._startClamp&&"_startClamp")||(f?-.001:0),mn(dt)&&(dt=dt(P)),Zn(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(Zn(Tt)?Tt.split(" ")[0]:"")+dt:(yt=Tl(dt.substr(2),zt),dt=Zn(Tt)?Tt:(w?Ee.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,xe):xe)+yt,Vn=d)),dt=Pp(dt,"end",P),I=Math.max(xe,zp(dt||(Vn?"100% 0":bt),Vn,zt,x,ie()+yt,Ne,ye,P,st,ee,J,bt,w,P._endClamp&&"_endClamp"))||-.001,yt=0,Yt=ti;Yt--;)N=et[Yt]||{},ne=N.pin,ne&&N.start-N._pinPush<=xe&&!w&&N.end>0&&(Zt=N.end-(P._startClamp?Math.max(0,N.start):N.start),(ne===d&&N.start-N._pinPush<xe||ne===Mn)&&isNaN(Tt)&&(yt+=Zt*(1-N.progress)),ne===f&&(Mt+=Zt));if(xe+=yt,I+=yt,P._startClamp&&(P._startClamp+=yt),P._endClamp&&!Pn&&(P._endClamp=I||-.001,I=Math.min(I,Ui(F,x))),A=I-xe||(xe-=.01)&&.001,qt&&(ce=Ee.utils.clamp(0,1,Ee.utils.normalize(xe,I,ue))),P._pinPush=Mt,ft&&yt&&(Zt={},Zt[x.a]="+="+yt,Mn&&(Zt[x.p]="-="+ie()),Ee.set([ft,Ne],Zt)),f&&!(Lh&&P.end>=Ui(F,x)))Zt=ci(f),X=x===Gt,O=ie(),pe=parseFloat(fe(x.a))+Mt,!bt&&I>1&&(Le=(V?_t.scrollingElement||Jn:F).style,Le={style:Le,value:Le["overflow"+x.a.toUpperCase()]},V&&ci(gt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Le.style["overflow"+x.a.toUpperCase()]="scroll")),Ch(f,Q,Zt),j=Ml(f),T=$i(f,!0),ge=J&&Zi(F,X?fn:Gt)(),_?(ae=[_+x.os2,A+Mt+$t],ae.t=Q,Yt=_===Wt?Pl(f,x)+A+Mt:0,Yt&&(ae.push(x.d,Yt+$t),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Yt+$t)),Zs(ae),Mn&&et.forEach(function(Ze){Ze.pin===Mn&&Ze.vars.pinSpacing!==!1&&(Ze._subPinOffset=!0)}),J&&ie(ue)):(Yt=Pl(f,x),Yt&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Yt+$t)),J&&(W={top:T.top+(X?O-xe:ge)+$t,left:T.left+(X?ge:O-xe)+$t,boxSizing:"border-box",position:"fixed"},W[jr]=W["max"+Js]=Math.ceil(T.width)+$t,W[es]=W["max"+Hh]=Math.ceil(T.height)+$t,W[li]=W[li+ta]=W[li+jo]=W[li+na]=W[li+ea]="0",W[Wt]=Zt[Wt],W[Wt+ta]=Zt[Wt+ta],W[Wt+jo]=Zt[Wt+jo],W[Wt+na]=Zt[Wt+na],W[Wt+ea]=Zt[Wt+ea],G=$0(M,W,E),Pn&&ie(0)),i?(Te=i._initted,Th(1),i.render(i.duration(),!0,!0),qe=fe(x.a)-pe+A+Mt,Ue=Math.abs(A-qe)>1,J&&Ue&&G.splice(G.length-2,2),i.render(0,!0,!0),Te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Th(0)):qe=A,Le&&(Le.value?Le.style["overflow"+x.a.toUpperCase()]=Le.value:Le.style.removeProperty("overflow-"+x.a));else if(d&&ie()&&!w)for(T=d.parentNode;T&&T!==gt;)T._pinOffset&&(xe-=T._pinOffset,I-=T._pinOffset),T=T.parentNode;be&&be.forEach(function(Ze){return Ze.revert(!1,!0)}),P.start=xe,P.end=I,Ye=Xe=Pn?ue:ie(),!w&&!Pn&&!Mr&&(Ye<ue&&ie(ue),P.scroll.rec=0),P.revert(!1,!0),te=pn(),K&&(q=-1,K.restart(!0)),dn=0,i&&D&&(i._initted||de)&&i.progress()!==de&&i.progress(de||0,!0).render(i.time(),!0,!0),(qt||ce!==P.progress||w||g||i&&!i._initted)&&(i&&!D&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(w&&xe<-.001&&!ce?Ee.utils.normalize(xe,I,0):ce,!0),P.progress=qt||(Ye-xe)/A===ce?0:ce),f&&_&&(Q._pinOffset=Math.round(P.progress*qe)),L&&L.invalidate(),isNaN(Be)||(Be-=Ee.getProperty(z,x.p),De-=Ee.getProperty(ye,x.p),Sl(z,x,Be),Sl(ft,x,Be-(He||0)),Sl(ye,x,De),Sl(Ne,x,De-(He||0))),qt&&!Pn&&P.update(),u&&!Pn&&!re&&(re=!0,u(P),re=!1)}},P.getVelocity=function(){return(ie()-Xe)/(pn()-Yo)*1e3||0},P.endAnimation=function(){qo(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||qo(i,P.direction<0,1):qo(i,i.reversed()))},P.labelToScroll=function(me){return i&&i.labels&&(xe||P.refresh()||xe)+i.labels[me]/i.duration()*A||0},P.getTrailing=function(me){var Ge=et.indexOf(P),Pe=P.direction>0?et.slice(0,Ge).reverse():et.slice(Ge+1);return(Zn(me)?Pe.filter(function(He){return He.vars.preventOverlaps===me}):Pe).filter(function(He){return P.direction>0?He.end<=xe:He.start>=I})},P.update=function(me,Ge,Pe){if(!(w&&!Pe&&!me)){var He=Pn===!0?ue:P.scroll(),zt=me?0:(He-xe)/A,st=zt<0?0:zt>1?1:zt||0,bt=P.progress,qt,yt,Mt,dt,Vn,Tt,Mn,ti;if(Ge&&(Xe=Ye,Ye=w?ie():He,v&&(lt=ke,ke=i&&!D?i.totalProgress():st)),m&&f&&!dn&&!ml&&ui&&(!st&&xe<He+(He-Xe)/(pn()-Yo)*m?st=1e-4:st===1&&I>He+(He-Xe)/(pn()-Yo)*m&&(st=.9999)),st!==bt&&P.enabled){if(qt=P.isActive=!!st&&st<1,yt=!!bt&&bt<1,Tt=qt!==yt,Vn=Tt||!!st!=!!bt,P.direction=st>bt?1:-1,P.progress=st,Vn&&!dn&&(Mt=st&&!bt?0:st===1?1:bt===1?2:3,D&&(dt=!Tt&&Y[Mt+1]!=="none"&&Y[Mt+1]||Y[Mt],ti=i&&(dt==="complete"||dt==="reset"||dt in i))),y&&(Tt||ti)&&(ti||h||!i)&&(mn(y)?y(P):P.getTrailing(y).forEach(function(O){return O.endAnimation()})),D||(L&&!dn&&!ml?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",st,i._tTime/i._tDur):(L.vars.totalProgress=st,L.invalidate().restart())):i&&i.totalProgress(st,!!(dn&&(te||me)))),f){if(me&&_&&(Q.style[_+x.os2]=se),!J)le(Jo(pe+qe*st));else if(Vn){if(Mn=!me&&st>bt&&I+1>He&&He+1>=Ui(F,x),E)if(!me&&(qt||Mn)){var Yt=$i(f,!0),Zt=He-xe;kp(f,gt,Yt.top+(x===Gt?Zt:0)+$t,Yt.left+(x===Gt?0:Zt)+$t)}else kp(f,Q);Zs(qt||Mn?G:j),Ue&&st<1&&qt||le(pe+(st===1&&!Mn?qe:0))}}v&&!Se.tween&&!dn&&!ml&&K.restart(!0),a&&(Tt||b&&st&&(st<1||!Eh))&&ra(a.targets).forEach(function(O){return O.classList[qt||b?"add":"remove"](a.className)}),o&&!D&&!me&&o(P),Vn&&!dn?(D&&(ti&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),o&&o(P)),(Tt||!Eh)&&(c&&Tt&&Hs(P,c),H[Mt]&&Hs(P,H[Mt]),b&&(st===1?P.kill(!1,1):H[Mt]=0),Tt||(Mt=st===1?1:3,H[Mt]&&Hs(P,H[Mt]))),R&&!qt&&Math.abs(P.getVelocity())>($o(R)?R:2500)&&(qo(P.callbackAnimation),L?L.progress(1):qo(i,dt==="reverse"?1:!st,1))):D&&o&&!dn&&o(P)}if(Me){var T=w?He/w.duration()*(w._caScrollDist||0):He;Fe(T+(z._isFlipped?1:0)),Me(T)}Ve&&Ve(-He/w.duration()*(w._caScrollDist||0))}},P.enable=function(me,Ge){P.enabled||(P.enabled=!0,en(F,"resize",Ko),V||en(F,"scroll",Ws),oe&&en(r,"refreshInit",oe),me!==!1&&(P.progress=ce=0,Ye=Xe=q=ie()),Ge!==!1&&P.refresh())},P.getTween=function(me){return me&&Se?Se.tween:L},P.setPositions=function(me,Ge,Pe,He){if(w){var zt=w.scrollTrigger,st=w.duration(),bt=zt.end-zt.start;me=zt.start+bt*me/st,Ge=zt.start+bt*Ge/st}P.refresh(!1,!1,{start:Ip(me,Pe&&!!P._startClamp),end:Ip(Ge,Pe&&!!P._endClamp)},He),P.update()},P.adjustPinSpacing=function(me){if(ae&&me){var Ge=ae.indexOf(x.d)+1;ae[Ge]=parseFloat(ae[Ge])+me+$t,ae[1]=parseFloat(ae[1])+me+$t,Zs(ae)}},P.disable=function(me,Ge){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||L&&L.pause(),ue=0,we&&(we.uncache=1),oe&&jt(r,"refreshInit",oe),K&&(K.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!V)){for(var Pe=et.length;Pe--;)if(et[Pe].scroller===F&&et[Pe]!==P)return;jt(F,"resize",Ko),V||jt(F,"scroll",Ws)}},P.kill=function(me,Ge){P.disable(me,Ge),L&&!Ge&&L.kill(),l&&delete Uh[l];var Pe=et.indexOf(P);Pe>=0&&et.splice(Pe,1),Pe===Rn&&wl>0&&Rn--,Pe=0,et.forEach(function(He){return He.scroller===P.scroller&&(Pe=1)}),Pe||Pn||Mr||(P.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Ge||i.kill()),ft&&[ft,Ne,z,ye].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),ia===P&&(ia=0),f&&(we&&(we.uncache=1),Pe=0,et.forEach(function(He){return He.pin===f&&Pe++}),Pe||(we.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),ct&&ct(P),i&&i.add&&!A){var Ke=P.update;P.update=function(){P.update=Ke,Qe.cache++,xe||I||P.refresh()},Ee.delayedCall(.01,P.update),A=.01,xe=I=0}else P.refresh();f&&Y0()},r.register=function(n){return Xs||(Ee=n||$p(),Jp()&&window.document&&r.enable(),Xs=Zo),Xs},r.defaults=function(n){if(n)for(var i in n)vl[i]=n[i];return vl},r.disable=function(n,i){Zo=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),jt(tt,"wheel",Ws),jt(_t,"scroll",Ws),clearInterval(pl),jt(_t,"touchcancel",Li),jt(gt,"touchstart",Li),_l(jt,_t,"pointerdown,touchstart,mousedown",Dp),_l(jt,_t,"pointerup,touchend,mouseup",Lp),Rl.kill(),gl(jt);for(var s=0;s<Qe.length;s+=3)xl(jt,Qe[s],Qe[s+1]),xl(jt,Qe[s],Qe[s+2])},r.enable=function(){if(tt=window,_t=document,Jn=_t.documentElement,gt=_t.body,Ee){if(ra=Ee.utils.toArray,Qo=Ee.utils.clamp,Dh=Ee.core.context||Li,Th=Ee.core.suppressOverwrites||Li,Bh=tt.history.scrollRestoration||"auto",Nh=tt.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),gt){Zo=1,Ys=document.createElement("div"),Ys.style.height="100vh",Ys.style.position="absolute",om(),k0(),Ot.register(Ee),r.isTouch=Ot.isTouch,yr=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ih=Ot.isTouch===1,en(tt,"wheel",Ws),Oh=[tt,_t,Jn,gt],Ee.matchMedia?(r.matchMedia=function(u){var h=Ee.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Ee.addEventListener("matchMediaInit",function(){rm(),Wh()}),Ee.addEventListener("matchMediaRevert",function(){return im()}),Ee.addEventListener("matchMedia",function(){Qr(0,1),rs("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),en(_t,"scroll",Ws);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=$i(gt),Gt.m=Math.round(a.top+Gt.sc())||0,fn.m=Math.round(a.left+fn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),pl=setInterval(Fp,250),Ee.delayedCall(.5,function(){return ml=0}),en(_t,"touchcancel",Li),en(gt,"touchstart",Li),_l(en,_t,"pointerdown,touchstart,mousedown",Dp),_l(en,_t,"pointerup,touchend,mouseup",Lp),Ph=Ee.utils.checkPrefix("transform"),Al.push(Ph),Xs=pn(),Rl=Ee.delayedCall(.2,Qr).pause(),qs=[_t,"visibilitychange",function(){var u=tt.innerWidth,h=tt.innerHeight;_t.hidden?(Cp=u,Rp=h):(Cp!==u||Rp!==h)&&Ko()},_t,"DOMContentLoaded",Qr,tt,"load",Qr,tt,"resize",Ko],gl(en),et.forEach(function(u){return u.enable(0,1)}),l=0;l<Qe.length;l+=3)xl(jt,Qe[l],Qe[l+1]),xl(jt,Qe[l],Qe[l+2])}else if(_t){var c=function u(){r.enable(),_t.removeEventListener("DOMContentLoaded",u)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Eh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(pl)||(pl=i)&&setInterval(Fp,i),"ignoreMobileResize"in n&&(Ih=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gl(jt)||gl(en,n.autoRefreshEvents||"none"),qp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=Qe.indexOf(s),a=ns(s);~o&&Qe.splice(o,a?6:2),i&&(a?vi.unshift(tt,i,gt,i,Jn,i):vi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?An(n):n).getBoundingClientRect(),a=o[s?jr:es]*i||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?jr:es],l=i==null?a/2:i in Il?Il[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=is.killAll||[];is={},i.forEach(function(s){return s()})}},r})();nt.version="3.15.1";nt.saveStyles=function(r){return r?ra(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Dh())}}):Yn};nt.revert=function(r,e){return Wh(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?Ko(!0):(Xs||nt.register())&&Qr(!0)};nt.update=function(r){return++Qe.cache&&Ki(r===!0?2:0)};nt.clearScrollMemory=sm;nt.maxScroll=function(r,e){return Ui(r,e?fn:Gt)};nt.getScrollFunc=function(r,e){return Zi(An(r),e?fn:Gt)};nt.getById=function(r){return Uh[r]};nt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!ui};nt.snapDirectional=Gh;nt.addEventListener=function(r,e){var t=is[r]||(is[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ee.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return mn(s)&&(s=s(),en(nt,"refresh",function(){return s=e.batchMax()})),ra(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var Hp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===Jn&&r(gt,t)},bl={auto:1,scroll:1},Q0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bl[(l=ci(s)).overflowY]||bl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ns(s)&&(bl[(l=ci(s)).overflowY]||bl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},lm=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Q0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(_t,Ot.eventTypes[0],Wp,!1,!0)},onDisable:function(){return jt(_t,Ot.eventTypes[0],Wp,!0)}})},j0=/(input|label|select|textarea)/i,Gp,Wp=function(e){var t=j0.test(e.target.tagName);(t||Gp)&&(e._gsapAllow=!0,Gp=t)},ex=function(e){Kr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=An(e.target)||Jn,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),d=yr&&(e.content&&An(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Zi(c,Gt),_=Zi(c,fn),g=1,m=(Ot.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,S=mn(i)?function(){return i(a)}:function(){return i||2.8},b,v,E=lm(c,e.type,!0,s),C=function(){return v=!1},w=Li,R=Li,y=function(){l=Ui(c,Gt),R=Qo(yr?1:0,l),n&&(w=Qo(0,Ui(c,fn))),b=ts},x=function(){d._gsap.y=Jo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(C);var k=Jo(a.deltaY/2),ee=R(f.v-k);if(d&&ee!==f.v+f.offset){f.offset=ee-f.v;var P=Jo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=Qe.cache,Ki()}return!0}f.offset&&x(),v=!0},F,B,V,J,H=function(){y(),F.isActive()&&F.vars.scrollY>l&&(f()>l?F.progress(1)&&f(l):F.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return yr&&Y.type==="touchmove"&&D(Y)||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=g;g=Jo((tt.visualViewport&&tt.visualViewport.scale||1)/m),F.pause(),Y!==g&&Rh(c,g>1.01?!0:n?!1:"x"),B=_(),V=f(),y(),b=ts},e.onRelease=e.onGestureStart=function(Y,k){if(f.offset&&x(),!k)J.restart(!0);else{Qe.cache++;var ee=S(),P,oe;n&&(P=_(),oe=P+ee*.05*-Y.velocityX/.227,ee*=Hp(_,P,oe,Ui(c,fn)),F.vars.scrollX=w(oe)),P=f(),oe=P+ee*.05*-Y.velocityY/.227,ee*=Hp(f,P,oe,Ui(c,Gt)),F.vars.scrollY=R(oe),F.invalidate().duration(ee).play(.01),(yr&&F.vars.scrollY>=l||P>=l-1)&&Ee.to({},{onUpdate:H,duration:ee})}o&&o(Y)},e.onWheel=function(){F._ts&&F.pause(),pn()-p>1e3&&(b=0,p=pn())},e.onChange=function(Y,k,ee,P,oe){if(ts!==b&&y(),k&&n&&_(w(P[2]===k?B+(Y.startX-Y.x):_()+k-P[1])),ee){f.offset&&x();var Ie=oe[2]===ee,We=Ie?V+Y.startY-Y.y:f()+ee-oe[1],q=R(We);Ie&&We!==q&&(V+=q-We),f(q)}(ee||k)&&Ki()},e.onEnable=function(){Rh(c,n?!1:"x"),nt.addEventListener("refresh",H),en(tt,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){Rh(c,!0),jt(tt,"resize",H),nt.removeEventListener("refresh",H),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=yr,yr&&!f()&&f(1),yr&&Ee.ticker.add(Li),J=a._dc,F=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:am(f,f(),function(){return F.pause()})},onUpdate:Ki,onComplete:J.vars.onComplete}),a};nt.sort=function(r){if(mn(r))return et.sort(r);var e=tt.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new Ot(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return Cn;if(r===!0&&Cn)return Cn.enable();if(r===!1){Cn&&Cn.kill(),Cn=r;return}var e=r instanceof Ot?r:ex(r);return Cn&&Cn.target===e.target&&Cn.kill(),ns(e.target)&&(Cn=e),e};nt.core={_getVelocityProp:dl,_inputObserver:lm,_scrollers:Qe,_proxies:vi,bridge:{ss:function(){ui||rs("scrollStart"),ui=pn()},ref:function(){return dn}}};$p()&&Ee.registerPlugin(nt);var Lm=0,wf=1,Um=2;var Af=1,Nm=2,Bi=3,rr=0,Dn=1,pi=2,Ci=0,hs=1,vs=2,Cf=3,Rf=4,Fm=5,Pr=100,Om=101,Bm=102,zm=103,km=104,Vm=200,Hm=201,Gm=202,Wm=203,tc=204,nc=205,Xm=206,qm=207,Ym=208,Zm=209,Jm=210,$m=211,Km=212,Qm=213,jm=214,wc=0,Ac=1,Cc=2,fs=3,Rc=4,Pc=5,Ic=6,Dc=7,Pf=0,eg=1,tg=2,or=0,Lc=1,Uc=2,Nc=3,xo=4,Fc=5,Oc=6,Bc=7;var If=300,ys=301,Ms=302,zc=303,kc=304,Ua=306,ic=1e3,Rr=1001,rc=1002,fi=1003,ng=1004;var Na=1005;var bi=1006,Vc=1007;var Nr=1008;var zi=1009,Df=1010,Lf=1011,vo=1012,Hc=1013,Fr=1014,ki=1015,mi=1016,Gc=1017,Wc=1018,Ss=1020,Uf=35902,Nf=1021,Ff=1022,gi=1023,Of=1024,Bf=1025,us=1026,ds=1027,zf=1028,Xc=1029,kf=1030,qc=1031;var Yc=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,Zc=35840,Jc=35841,$c=35842,Kc=35843,Qc=36196,jc=37492,eu=37496,tu=37808,nu=37809,iu=37810,ru=37811,su=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,ka=36492,mu=36494,gu=36495,Vf=36283,_u=36284,xu=36285,vu=36286;var da=2300,sc=2301,ec=2302,_f=2400,xf=2401,vf=2402;var ig=3200,rg=3201;var Hf=0,sg=1,ar="",Qn="srgb",ps="srgb-linear",pa="linear",ht="srgb";var cs=7680;var yf=519,og=512,ag=513,lg=514,Gf=515,cg=516,ug=517,hg=518,fg=519,Mf=35044;var Wf="300 es",Fi=2e3,ma=2001;var sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cm=1234567,ha=Math.PI/180,uo=180/Math.PI;function yo(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function Xf(r,e){return(r%e+e)%e}function tx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function nx(r,e,t){return r!==e?(t-r)/(e-r):0}function fa(r,e,t){return(1-t)*r+t*e}function ix(r,e,t,n){return fa(r,e,1-Math.exp(-t*n))}function rx(r,e=1){return e-Math.abs(Xf(r,e*2)-e)}function sx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ox(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ax(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lx(r,e){return r+Math.random()*(e-r)}function cx(r){return r*(.5-Math.random())}function ux(r){r!==void 0&&(cm=r);let e=cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hx(r){return r*ha}function fx(r){return r*uo}function dx(r){return(r&r-1)===0&&r!==0}function px(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gx(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function lo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Va={DEG2RAD:ha,RAD2DEG:uo,generateUUID:yo,clamp:it,euclideanModulo:Xf,mapLinear:tx,inverseLerp:nx,lerp:fa,damp:ix,pingpong:rx,smoothstep:sx,smootherstep:ox,randInt:ax,randFloat:lx,randFloatSpread:cx,seededRandom:ux,degToRad:hx,radToDeg:fx,isPowerOfTwo:dx,ceilPowerOfTwo:px,floorPowerOfTwo:mx,setQuaternionFromProperEuler:gx,normalize:In,denormalize:lo},ze=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],b=i[4],v=i[7],E=i[2],C=i[5],w=i[8];return s[0]=o*g+a*S+l*E,s[3]=o*m+a*b+l*C,s[6]=o*p+a*v+l*w,s[1]=c*g+u*S+h*E,s[4]=c*m+u*b+h*C,s[7]=c*p+u*v+h*w,s[2]=d*g+f*S+_*E,s[5]=d*m+f*b+_*C,s[8]=d*p+f*v+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xh.makeScale(e,t)),this}rotate(e){return this.premultiply(Xh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xh=new Je;function qf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dg(){let r=ga("canvas");return r.style.display="block",r}var um={};function Or(r){r in um||(um[r]=!0,console.warn(r))}function pg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function mg(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gg(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var hm=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _x(){let r={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=co(i.r),i.g=co(i.g),i.b=co(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ar?pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ps]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:hm,fromXYZ:fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:hm,fromXYZ:fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),r}var at=_x();function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var $s,oc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=ga("canvas")),$s.width=e.width,$s.height=e.height;let n=$s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$s}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ga("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xx=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qh(i[o].image)):s.push(qh(i[o]))}else s=qh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vx=0,jn=class r extends sr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Rr,i=Rr,s=bi,o=Nr,a=gi,l=zi,c=r.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=yo(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=If;jn.DEFAULT_ANISOTROPY=1;var xt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(f+1)/2,E=(p+1)/2,C=(u+d)/4,w=(h+g)/4,R=(_+m)/4;return b>v&&b>E?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=C/n,s=w/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=R/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ac=class extends sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new jn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends jn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fi,this.minFilter=fi,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends jn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fi,this.minFilter=fi,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-a,p=l*d+c*f+u*_+h*g,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let E=Math.sqrt(b),C=Math.atan2(E,p*S);m=Math.sin(m*C)/E,a=Math.sin(a*C)/E}let v=a*S;if(l=l*m+d*v,c=c*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yh.copy(this).projectOnVector(e),this.sub(Yh)}reflect(e){return this.sub(Yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yh=new U,dm=new Ti,Ir=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(s,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ul.subVectors(this.max,oa),Ks.subVectors(e.a,oa),Qs.subVectors(e.b,oa),js.subVectors(e.c,oa),Sr.subVectors(Qs,Ks),br.subVectors(js,Qs),ss.subVectors(Ks,js);let t=[0,-Sr.z,Sr.y,0,-br.z,br.y,0,-ss.z,ss.y,Sr.z,0,-Sr.x,br.z,0,-br.x,ss.z,0,-ss.x,-Sr.y,Sr.x,0,-br.y,br.x,0,-ss.y,ss.x,0];return!Zh(t,Ks,Qs,js,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Zh(t,Ks,Qs,js,Ul))?!1:(Nl.crossVectors(Sr,br),t=[Nl.x,Nl.y,Nl.z],Zh(t,Ks,Qs,js,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qi=[new U,new U,new U,new U,new U,new U,new U,new U],yi=new U,Ll=new Ir,Ks=new U,Qs=new U,js=new U,Sr=new U,br=new U,ss=new U,oa=new U,Ul=new U,Nl=new U,os=new U;function Zh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){os.fromArray(r,s);let a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var yx=new Ir,aa=new U,Jh=new U,ms=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Jh)),this.expandByPoint(aa.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new U,$h=new U,Fl=new U,Tr=new U,Kh=new U,Ol=new U,Qh=new U,xa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$h.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub($h);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Fl),a=Tr.dot(this.direction),l=-Tr.dot(Fl),c=Tr.lengthSq(),u=Math.abs(1-o*o),h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){let g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($h).addScaledVector(Fl,d),f}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),i=ji.dot(ji)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,i,s){Kh.subVectors(t,e),Ol.subVectors(n,e),Qh.crossVectors(Kh,Ol);let o=this.direction.dot(Qh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);let l=a*this.direction.dot(Ol.crossVectors(Tr,Ol));if(l<0)return null;let c=a*this.direction.dot(Kh.cross(Tr));if(c<0||l+c>o)return null;let u=-a*Tr.dot(Qh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class r{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/eo.setFromMatrixColumn(e,0).length(),s=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mx,e,Sx)}lookAt(e,t,n){let i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Er.crossVectors(n,$n),Er.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Er.crossVectors(n,$n)),Er.normalize(),Bl.crossVectors($n,Er),i[0]=Er.x,i[4]=Bl.x,i[8]=$n.x,i[1]=Er.y,i[5]=Bl.y,i[9]=$n.y,i[2]=Er.z,i[6]=Bl.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],b=n[7],v=n[11],E=n[15],C=i[0],w=i[4],R=i[8],y=i[12],x=i[1],D=i[5],F=i[9],B=i[13],V=i[2],J=i[6],H=i[10],Y=i[14],k=i[3],ee=i[7],P=i[11],oe=i[15];return s[0]=o*C+a*x+l*V+c*k,s[4]=o*w+a*D+l*J+c*ee,s[8]=o*R+a*F+l*H+c*P,s[12]=o*y+a*B+l*Y+c*oe,s[1]=u*C+h*x+d*V+f*k,s[5]=u*w+h*D+d*J+f*ee,s[9]=u*R+h*F+d*H+f*P,s[13]=u*y+h*B+d*Y+f*oe,s[2]=_*C+g*x+m*V+p*k,s[6]=_*w+g*D+m*J+p*ee,s[10]=_*R+g*F+m*H+p*P,s[14]=_*y+g*B+m*Y+p*oe,s[3]=S*C+b*x+v*V+E*k,s[7]=S*w+b*D+v*J+E*ee,s[11]=S*R+b*F+v*H+E*P,s[15]=S*y+b*B+v*Y+E*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=h*m*c-g*d*c+g*l*f-a*m*f-h*l*p+a*d*p,b=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,v=u*g*c-_*h*c+_*a*f-o*g*f-u*a*p+o*h*p,E=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,C=t*S+n*b+i*v+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=S*w,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*w,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*w,e[4]=b*w,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*w,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=v*w,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=E*w,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,g=o*u,m=o*h,p=a*h,S=l*c,b=l*u,v=l*h,E=n.x,C=n.y,w=n.z;return i[0]=(1-(g+p))*E,i[1]=(f+v)*E,i[2]=(_-b)*E,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(d+p))*C,i[6]=(m+S)*C,i[7]=0,i[8]=(_+b)*w,i[9]=(m-S)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=eo.set(i[0],i[1],i[2]).length(),o=eo.set(i[4],i[5],i[6]).length(),a=eo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);let c=1/s,u=1/o,h=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Fi){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,_;if(a===Fi)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ma)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Fi){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u,_,g;if(a===Fi)_=(o+s)*h,g=-2*h;else if(a===ma)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},eo=new U,Mi=new wt,Mx=new U(0,0,0),Sx=new U(1,1,1),Er=new U,Bl=new U,$n=new U,pm=new wt,mm=new Ti,Ei=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bx=0,gm=new U,to=new Ti,er=new wt,zl=new U,la=new U,Tx=new U,Ex=new Ti,_m=new U(1,0,0),xm=new U(0,1,0),vm=new U(0,0,1),ym={type:"added"},wx={type:"removed"},no={type:"childadded",child:null},jh={type:"childremoved",child:null},kn=class r extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new U,t=new Ei,n=new Ti,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zl.copy(e):zl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(la,zl,this.up):er.lookAt(zl,la,this.up),this.quaternion.setFromRotationMatrix(er),i&&(er.extractRotation(i.matrixWorld),to.setFromRotationMatrix(er),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wx),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,Tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};kn.DEFAULT_UP=new U(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new U,tr=new U,ef=new U,nr=new U,io=new U,ro=new U,Mm=new U,tf=new U,nf=new U,rf=new U,sf=new xt,of=new xt,af=new xt,Cr=class r{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Si.subVectors(i,t),tr.subVectors(n,t),ef.subVectors(e,t);let o=Si.dot(Si),a=Si.dot(tr),l=Si.dot(ef),c=tr.dot(tr),u=tr.dot(ef),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nr.x),l.addScaledVector(o,nr.y),l.addScaledVector(a,nr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(e,t),of.fromBufferAttribute(e,n),af.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(sf,s.x),o.addScaledVector(of,s.y),o.addScaledVector(af,s.z),o}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),tr.subVectors(e,t),Si.cross(tr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Si.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;io.subVectors(i,n),ro.subVectors(s,n),tf.subVectors(e,n);let l=io.dot(tf),c=ro.dot(tf);if(l<=0&&c<=0)return t.copy(n);nf.subVectors(e,i);let u=io.dot(nf),h=ro.dot(nf);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(io,o);rf.subVectors(e,s);let f=io.dot(rf),_=ro.dot(rf);if(_>=0&&f<=_)return t.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ro,a);let m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return Mm.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Mm,a);let p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(io,o).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function lf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Xf(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=lf(o,s,e+1/3),this.g=lf(o,s,e),this.b=lf(o,s,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){let n=_g[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return at.fromWorkingColorSpace(_n.copy(this),e),Math.round(it(_n.r*255,0,255))*65536+Math.round(it(_n.g*255,0,255))*256+Math.round(it(_n.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Qn){at.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(kl);let n=fa(wr.h,kl.h,t),i=fa(wr.s,kl.s,t),s=fa(wr.l,kl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Re;Re.NAMES=_g;var Ax=0,wi=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=hs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==rr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==Pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ai=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new U,Vl=new ze,Cx=0,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mf,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mf&&(e.usage=this.usage),e}};var ya=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rx=0,hi=new wt,cf=new kn,so=new U,Kn=new Ir,ca=new Ir,tn=new U,vn=class r extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Ma:ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Kn.min,ca.min),Kn.expandByPoint(tn),tn.addVectors(Kn.max,ca.max),Kn.expandByPoint(tn)):(Kn.expandByPoint(ca.min),Kn.expandByPoint(ca.max))}Kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(e,c),tn.add(so)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let c=new U,u=new U,h=new U,d=new ze,f=new ze,_=new ze,g=new U,m=new U;function p(R,y,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),_.sub(d);let D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(D),a[R].add(g),a[y].add(g),a[x].add(g),l[R].add(m),l[y].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,y=S.length;R<y;++R){let x=S[R],D=x.start,F=x.count;for(let B=D,V=D+F;B<V;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new U,v=new U,E=new U,C=new U;function w(R){E.fromBufferAttribute(i,R),C.copy(E);let y=a[R];b.copy(y),b.sub(E.multiplyScalar(E.dot(y))).normalize(),v.crossVectors(C,y);let D=v.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,D)}for(let R=0,y=S.length;R<y;++R){let x=S[R],D=x.start,F=x.count;for(let B=D,V=D+F;B<V;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sm=new wt,as=new xa,Hl=new ms,bm=new U,Gl=new U,Wl=new U,Xl=new U,uf=new U,ql=new U,Tm=new U,Yl=new U,Vt=class extends kn{constructor(e=new vn,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(uf.fromBufferAttribute(h,e),o?ql.addScaledVector(uf,u):ql.addScaledVector(uf.sub(t),u))}t.add(ql)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Hl.containsPoint(as.origin)===!1&&(as.intersectSphere(Hl,bm)===null||as.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),as.copy(e.ray).applyMatrix4(Sm),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=b;v<E;v+=3){let C=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);i=Zl(this,p,e,n,c,u,h,C,w,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=Zl(this,o,e,n,c,u,h,S,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=b;v<E;v+=3){let C=v,w=v+1,R=v+2;i=Zl(this,p,e,n,c,u,h,C,w,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=m,b=m+1,v=m+2;i=Zl(this,o,e,n,c,u,h,S,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Px(r,e,t,n,i,s,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===rr,a),l===null)return null;Yl.copy(a),Yl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Yl);return c<t.near||c>t.far?null:{distance:c,point:Yl.clone(),object:r}}function Zl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Gl),r.getVertexPosition(l,Wl),r.getVertexPosition(c,Xl);let u=Px(r,e,t,n,Gl,Wl,Xl,Tm);if(u){let h=new U;Cr.getBarycoord(Tm,Gl,Wl,Xl,h),i&&(u.uv=Cr.getInterpolatedAttribute(i,a,l,c,h,new ze)),s&&(u.uv1=Cr.getInterpolatedAttribute(s,a,l,c,h,new ze)),o&&(u.normal=Cr.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Cr.getNormal(Gl,Wl,Xl,d.normal),u.face=d,u.barycoord=h}return u}var fo=class r extends vn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function _(g,m,p,S,b,v,E,C,w,R,y){let x=v/w,D=E/R,F=v/2,B=E/2,V=C/2,J=w+1,H=R+1,Y=0,k=0,ee=new U;for(let P=0;P<H;P++){let oe=P*D-B;for(let Ie=0;Ie<J;Ie++){let We=Ie*x-F;ee[g]=We*S,ee[m]=oe*b,ee[p]=V,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Ie/w),h.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let oe=0;oe<w;oe++){let Ie=d+oe+J*P,We=d+oe+J*(P+1),q=d+(oe+1)+J*(P+1),te=d+(oe+1)+J*P;l.push(Ie,We,te),l.push(We,q,te),k+=6}a.addGroup(f,k,y),f+=k,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function bs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){let e={};for(let t=0;t<r.length;t++){let n=bs(r[t]);for(let i in n)e[i]=n[i]}return e}function Ix(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var lr={clone:bs,merge:yn},Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Sa=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ar=new U,Em=new ze,wm=new ze,ln=class extends Sa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,Em,wm),t.subVectors(wm,Em)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oo=-90,ao=1,cc=class extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ln(oo,ao,e,t);i.layers=this.layers,this.add(i);let s=new ln(oo,ao,e,t);s.layers=this.layers,this.add(s);let o=new ln(oo,ao,e,t);o.layers=this.layers,this.add(o);let a=new ln(oo,ao,e,t);a.layers=this.layers,this.add(a);let l=new ln(oo,ao,e,t);l.layers=this.layers,this.add(l);let c=new ln(oo,ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ba=class extends jn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uc=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ba(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fo(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Ci});s.uniforms.tEquirect.value=t;let o=new Vt(i,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=bi),new cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Oi=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ux={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var mo=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var hf=new U,Nx=new U,Fx=new Je,Ni=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hf.subVectors(n,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fx.getNormalMatrix(e),i=this.coplanarPoint(hf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new ms,Jl=new U,go=class{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],b=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+_,v+S).normalize(),n[3].setComponents(l-o,d-u,m-_,v-S).normalize(),n[4].setComponents(l-a,d-h,m-g,v-b).normalize(),t===Fi)n[5].setComponents(l+a,d+h,m+g,v+b).normalize();else if(t===ma)n[5].setComponents(a,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Jl.x=i.normal.x>0?e.max.x:e.min.x,Jl.y=i.normal.y>0?e.max.y:e.min.y,Jl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hc=class extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Am=new wt,Sf=new xa,$l=new ms,Kl=new U,Ta=class extends kn{constructor(e=new vn,t=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(i),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;Am.copy(i).invert(),Sf.copy(e.ray).applyMatrix4(Am);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);Kl.fromBufferAttribute(h,m),Cm(Kl,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Kl.fromBufferAttribute(h,_),Cm(Kl,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Cm(r,e,t,n,i,s,o){let a=Sf.distanceSqToPoint(r);if(a<t){let l=new U;Sf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ea=class extends jn{constructor(e,t,n,i,s,o,a,l,c,u=us){if(u!==us&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Fr),n===void 0&&u===ds&&(n=Ss),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fi,this.minFilter=l!==void 0?l:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ze:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,i=[],s=[],o=[],a=new U,l=new wt;for(let f=0;f<=e;f++){let _=f/e;i[f]=this.getTangentAt(_,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(it(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(it(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Zf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Ql=new U,ff=new Zf,df=new Zf,pf=new Zf,wa=class extends fc{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ql.subVectors(i[0],i[1]).add(i[0]),c=Ql);let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ql.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ql),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ff.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),df.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),pf.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(ff.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),df.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),pf.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ff.calc(l),df.calc(l),pf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var gs=class r extends vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let S=p*d-o;for(let b=0;b<c;b++){let v=b*h-s;_.push(v,-S,0),g.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let b=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),C=S+1+c*p;f.push(b,v,C),f.push(v,E,C)}this.setIndex(f),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Aa=class r extends vn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new U,d=new U,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let S=[],b=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let C=E/t;h.x=-e*Math.cos(i+C*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+C*s)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(C+v,1-b),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let b=u[p][S+1],v=u[p][S],E=u[p+1][S],C=u[p+1][S+1];(p!==0||o>0)&&f.push(b,v,C),(p!==n-1||l<Math.PI)&&f.push(v,E,C)}this.setIndex(f),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ca=class r extends vn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new U,h=new U,d=new U;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let g=_/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,S=(i+1)*f+_;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ra=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dc=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pa=class extends dc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pc=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ox(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var _s=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_f,endingEnd:_f}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xf:s=e,a=2*t-n;break;case vf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xf:o=e,l=2*n-t;break;case vf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*m+(1.5+f)*g+.5*_,v=f*m-f*g;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+S*o[c+E]+b*o[l+E]+v*o[h+E];return s}},_c=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},xc=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jl(t,this.TimeBufferType),this.values=jl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jl(e.times,Array),values:jl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case sc:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ox(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ec,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=sc;var Dr=class extends di{constructor(e,t,n){super(e,t,n)}};Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=da;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends di{};vc.prototype.ValueTypeName="color";var yc=class extends di{};yc.prototype.ValueTypeName="number";var Mc=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ti.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ia=class extends di{InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends di{constructor(e,t,n){super(e,t,n)}};Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=da;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends di{};Sc.prototype.ValueTypeName="vector";var bc=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}},xg=new bc,Tc=class{constructor(e){this.manager=e!==void 0?e:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var mf=new wt,Rm=new U,Pm=new U,bf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rm),Pm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pm),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Im=new wt,ua=new U,gf=new U,Tf=class extends bf{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(ua),gf.copy(n.position),gf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gf),n.updateMatrixWorld(),i.makeTranslation(-ua.x,-ua.y,-ua.z),Im.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Im)}},Ur=class extends Da{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_o=class extends Sa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var La=class extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ec=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}},xs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Dm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Dm(){return performance.now()}var Jf="\\[\\]\\.:\\/",Bx=new RegExp("["+Jf+"]","g"),$f="[^"+Jf+"]",zx="[^"+Jf.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",$f),Vx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$f),Gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$f),Wx=new RegExp("^"+kx+Vx+Hx+Gx+"$"),Xx=["material","materials","bones","map"],Ef=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=Wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Xx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Ef;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kb=new Float32Array(1);function Kf(r,e,t,n){let i=qx(n);switch(t){case Nf:return r*e;case Of:return r*e;case Bf:return r*e*2;case zf:return r*e/i.components*i.byteLength;case Xc:return r*e/i.components*i.byteLength;case kf:return r*e*2/i.components*i.byteLength;case qc:return r*e*2/i.components*i.byteLength;case Ff:return r*e*3/i.components*i.byteLength;case gi:return r*e*4/i.components*i.byteLength;case Yc:return r*e*4/i.components*i.byteLength;case Fa:case Oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jc:case Kc:return Math.max(r,16)*Math.max(e,8)/4;case Zc:case $c:return Math.max(r,8)*Math.max(e,8)/2;case Qc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case su:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case au:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ka:case mu:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Vf:case _u:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xu:case vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(r){switch(r){case zi:case Df:return{byteLength:1,components:1};case vo:case Lf:case mi:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Fr:case Hc:case ki:return{byteLength:4,components:1};case Uf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"174"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="174");function Hg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zx(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){let _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){let g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tv=`#ifdef USE_AOMAP
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
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`#ifdef USE_BATCHING
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lv=`#ifdef USE_IRIDESCENCE
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
#endif`,cv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xv=`#define PI 3.141592653589793
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
} // validated`,vv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
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
}`,Ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
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
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qv=`PhysicalMaterial material;
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
#endif`,Yv=`struct PhysicalMaterial {
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
}`,Zv=`
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
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
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,dM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,_M=`#define PHONG
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
}`,xM=`#define STANDARD
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
}`,vM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,MM=`#define TOON
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
}`,SM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,wM=`uniform float rotation;
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
}`,AM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Jx,alphahash_pars_fragment:$x,alphamap_fragment:Kx,alphamap_pars_fragment:Qx,alphatest_fragment:jx,alphatest_pars_fragment:ev,aomap_fragment:tv,aomap_pars_fragment:nv,batching_pars_vertex:iv,batching_vertex:rv,begin_vertex:sv,beginnormal_vertex:ov,bsdfs:av,iridescence_fragment:lv,bumpmap_pars_fragment:cv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:dv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:gv,color_vertex:_v,common:xv,cube_uv_reflection_fragment:vv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Mv,displacementmap_vertex:Sv,emissivemap_fragment:bv,emissivemap_pars_fragment:Tv,colorspace_fragment:Ev,colorspace_pars_fragment:wv,envmap_fragment:Av,envmap_common_pars_fragment:Cv,envmap_pars_fragment:Rv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Vv,envmap_vertex:Iv,fog_vertex:Dv,fog_pars_vertex:Lv,fog_fragment:Uv,fog_pars_fragment:Nv,gradientmap_pars_fragment:Fv,lightmap_pars_fragment:Ov,lights_lambert_fragment:Bv,lights_lambert_pars_fragment:zv,lights_pars_begin:kv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Gv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:qv,lights_physical_pars_fragment:Yv,lights_fragment_begin:Zv,lights_fragment_maps:Jv,lights_fragment_end:$v,logdepthbuf_fragment:Kv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:ry,metalnessmap_fragment:sy,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:uy,morphtarget_vertex:hy,normal_fragment_begin:fy,normal_fragment_maps:dy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:yy,iridescence_pars_fragment:My,opaque_fragment:Sy,packing:by,premultiplied_alpha_fragment:Ty,project_vertex:Ey,dithering_fragment:wy,dithering_pars_fragment:Ay,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Py,shadowmap_pars_vertex:Iy,shadowmap_vertex:Dy,shadowmask_pars_fragment:Ly,skinbase_vertex:Uy,skinning_pars_vertex:Ny,skinning_vertex:Fy,skinnormal_vertex:Oy,specularmap_fragment:By,specularmap_pars_fragment:zy,tonemapping_fragment:ky,tonemapping_pars_fragment:Vy,transmission_fragment:Hy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:Zy,background_frag:Jy,backgroundCube_vert:$y,backgroundCube_frag:Ky,cube_vert:Qy,cube_frag:jy,depth_vert:eM,depth_frag:tM,distanceRGBA_vert:nM,distanceRGBA_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:oM,linedashed_frag:aM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:fM,meshmatcap_frag:dM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:_M,meshphysical_vert:xM,meshphysical_frag:vM,meshtoon_vert:yM,meshtoon_frag:MM,points_vert:SM,points_frag:bM,shadow_vert:TM,shadow_frag:EM,sprite_vert:wM,sprite_frag:AM},_e={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Vi={basic:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:yn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:yn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:yn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:yn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:yn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:yn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:yn([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:yn([_e.lights,_e.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Vi.physical={uniforms:yn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var yu={r:0,b:0,g:0},Ts=new Ei,CM=new wt;function RM(r,e,t,n,i,s,o){let a=new Re(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function g(b){let v=!1,E=_(b);E===null?p(a,l):E&&E.isColor&&(p(E,1),v=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,v){let E=_(v);E&&(E.isCubeTexture||E.mapping===Ua)?(u===void 0&&(u=new Vt(new fo(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:bs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ts.copy(v.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(Ts)),u.material.toneMapped=at.getTransfer(E.colorSpace)!==ht,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Vt(new gs(2,2),new Bt({name:"BackgroundMaterial",uniforms:bs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(yu,Yf(r)),n.buffers.color.setClear(yu.r,yu.g,yu.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m,dispose:S}}function PM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(x,D,F,B,V){let J=!1,H=h(B,F,D);s!==H&&(s=H,c(s.object)),J=f(x,B,F,V),J&&_(x,B,F,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(x,D,F,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,D,F){let B=F.wireframe===!0,V=n[x.id];V===void 0&&(V={},n[x.id]=V);let J=V[D.id];J===void 0&&(J={},V[D.id]=J);let H=J[B];return H===void 0&&(H=d(l()),J[B]=H),H}function d(x){let D=[],F=[],B=[];for(let V=0;V<t;V++)D[V]=0,F[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,D,F,B){let V=s.attributes,J=D.attributes,H=0,Y=F.getAttributes();for(let k in Y)if(Y[k].location>=0){let P=V[k],oe=J[k];if(oe===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),P===void 0||P.attribute!==oe||oe&&P.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function _(x,D,F,B){let V={},J=D.attributes,H=0,Y=F.getAttributes();for(let k in Y)if(Y[k].location>=0){let P=J[k];P===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(P=x.instanceColor));let oe={};oe.attribute=P,P&&P.data&&(oe.data=P.data),V[k]=oe,H++}s.attributes=V,s.attributesNum=H,s.index=B}function g(){let x=s.newAttributes;for(let D=0,F=x.length;D<F;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let F=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;F[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),V[x]!==D&&(r.vertexAttribDivisor(x,D),V[x]=D)}function S(){let x=s.newAttributes,D=s.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==x[F]&&(r.disableVertexAttribArray(F),D[F]=0)}function b(x,D,F,B,V,J,H){H===!0?r.vertexAttribIPointer(x,D,F,V,J):r.vertexAttribPointer(x,D,F,B,V,J)}function v(x,D,F,B){g();let V=B.attributes,J=F.getAttributes(),H=D.defaultAttributeValues;for(let Y in J){let k=J[Y];if(k.location>=0){let ee=V[Y];if(ee===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){let P=ee.normalized,oe=ee.itemSize,Ie=e.get(ee);if(Ie===void 0)continue;let We=Ie.buffer,q=Ie.type,te=Ie.bytesPerElement,ce=q===r.INT||q===r.UNSIGNED_INT||ee.gpuType===Hc;if(ee.isInterleavedBufferAttribute){let ie=ee.data,Se=ie.stride,we=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<k.locationSize;Ae++)p(k.location+Ae,ie.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)m(k.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ae=0;Ae<k.locationSize;Ae++)b(k.location+Ae,oe/k.locationSize,q,P,Se*te,(we+oe/k.locationSize*Ae)*te,ce)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie,ee.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<k.locationSize;ie++)m(k.location+ie);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ie=0;ie<k.locationSize;ie++)b(k.location+ie,oe/k.locationSize,q,P,oe*te,oe/k.locationSize*ie*te,ce)}}else if(H!==void 0){let P=H[Y];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(k.location,P);break;case 3:r.vertexAttrib3fv(k.location,P);break;case 4:r.vertexAttrib4fv(k.location,P);break;default:r.vertexAttrib1fv(k.location,P)}}}}S()}function E(){R();for(let x in n){let D=n[x];for(let F in D){let B=D[F];for(let V in B)u(B[V].object),delete B[V];delete D[F]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let D=n[x.id];for(let F in D){let B=D[F];for(let V in B)u(B[V].object),delete B[V];delete D[F]}delete n[x.id]}function w(x){for(let D in n){let F=n[D];if(F[x.id]===void 0)continue;let B=F[x.id];for(let V in B)u(B[V].object),delete B[V];delete F[x.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function IM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==gi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==zi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ki&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:E,maxSamples:C}}function LM(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ni,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{let S=s?0:n,b=S*4,v=p.clippingState||null;l.value=v,v=u(_,d,b,f);for(let E=0;E!==b;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==g;++b,v+=4)o.copy(h[b]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function UM(r){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=ys:a===kc&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===zc||a===kc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uc(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var So=4,vg=[.125,.215,.35,.446,.526,.582],As=20,Qf=new _o,yg=new Re,jf=null,ed=0,td=0,nd=!1,ws=(1+Math.sqrt(5))/2,Mo=1/ws,Mg=[new U(-ws,Mo,0),new U(ws,Mo,0),new U(-Mo,0,ws),new U(Mo,0,ws),new U(0,ws,-Mo),new U(0,ws,Mo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],NM=new U,To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=NM}=s;jf=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jf,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,Mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jf=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:mi,format:gi,colorSpace:ps,depthBuffer:!1},i=Sg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FM(s)),this._blurMaterial=OM(s,e,t)}return i}_compileMaterial(e){let t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Qf)}_sceneToCubeUV(e,t,n,i,s){let l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yg),h.toneMapping=or,h.autoClear=!1;let _=new Ai({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new Vt(new fo,_),m=!1,p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(yg),m=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let v=this._cubeSize;Mu(i,b*v,S>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ys||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Mu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mg[(i-s-1)%Mg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Vt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*As-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):As;m>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let p=[],S=0;for(let w=0;w<As;++w){let R=w/g,y=Math.exp(-R*R/2);p.push(y),w===0?S+=y:w<m&&(S+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;let v=this._sizeLods[i],E=3*v*(i>b-So?i-b+So:0),C=4*(this._cubeSize-v);Mu(t,E,C,3*v,2*v),l.setRenderTarget(t),l.render(h,Qf)}};function FM(r){let e=[],t=[],n=[],i=r,s=r-So+1+vg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-So?l=vg[o-r+So-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*f),b=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let C=0;C<f;C++){let w=C%3*2/3-1,R=C>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(y,g*_*C),b.set(d,m*_*C);let x=[C,C,C,C,C,C];v.set(x,p*_*C)}let E=new vn;E.setAttribute("position",new nn(S,g)),E.setAttribute("uv",new nn(b,m)),E.setAttribute("faceIndex",new nn(v,p)),e.push(E),i>So&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sg(r,e,t){let n=new xn(r,e,t);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mu(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function OM(r,e,t){let n=new Float32Array(As),i=new U(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bg(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Tg(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function BM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===zc||l===kc,u=l===ys||l===Ms;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new To(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new To(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kM(r,e,t,n){let i={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,_=h.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let b=0,v=S.length;b<v;b+=3){let E=S[b+0],C=S[b+1],w=S[b+2];d.push(E,C,C,w,w,E)}}else if(_!==void 0){let S=_.array;g=_.version;for(let b=0,v=S.length/3-1;b<v;b+=3){let E=b+0,C=b+1,w=b+2;d.push(E,C,C,w,w,E)}}else return;let m=new(qf(d)?Ma:ya)(d,1);m.version=g;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function VM(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*g[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function HM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function GM(r,e,t){let n=new WeakMap,i=new xt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;f===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let v=a.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*E*4*h),w=new _a(C,v,E,h);w.type=ki,w.needsUpdate=!0;let R=b*4;for(let x=0;x<h;x++){let D=m[x],F=p[x],B=S[x],V=v*E*4*x;for(let J=0;J<D.count;J++){let H=J*R;f===!0&&(i.fromBufferAttribute(D,J),C[V+H+0]=i.x,C[V+H+1]=i.y,C[V+H+2]=i.z,C[V+H+3]=0),_===!0&&(i.fromBufferAttribute(F,J),C[V+H+4]=i.x,C[V+H+5]=i.y,C[V+H+6]=i.z,C[V+H+7]=0),g===!0&&(i.fromBufferAttribute(B,J),C[V+H+8]=i.x,C[V+H+9]=i.y,C[V+H+10]=i.z,C[V+H+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new ze(v,E)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function WM(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Gg=new jn,Eg=new Ea(1,1),Wg=new _a,Xg=new lc,qg=new ba,wg=[],Ag=[],Cg=new Float32Array(16),Rg=new Float32Array(9),Pg=new Float32Array(4);function Eo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=wg[i];if(s===void 0&&(s=new Float32Array(i),wg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Tu(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function XM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function YM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function ZM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function JM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Pg.set(n),r.uniformMatrix2fv(this.addr,!1,Pg),Qt(t,n)}}function $M(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Rg.set(n),r.uniformMatrix3fv(this.addr,!1,Rg),Qt(t,n)}}function KM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Cg.set(n),r.uniformMatrix4fv(this.addr,!1,Cg),Qt(t,n)}}function QM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function eS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function tS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function nS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function iS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function rS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function sS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function oS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Eg.compareFunction=Gf,s=Eg):s=Gg,t.setTexture2D(e||s,i)}function aS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xg,i)}function lS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qg,i)}function cS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wg,i)}function uS(r){switch(r){case 5126:return XM;case 35664:return qM;case 35665:return YM;case 35666:return ZM;case 35674:return JM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return QM;case 35667:case 35671:return jM;case 35668:case 35672:return eS;case 35669:case 35673:return tS;case 5125:return nS;case 36294:return iS;case 36295:return rS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}function hS(r,e){r.uniform1fv(this.addr,e)}function fS(r,e){let t=Eo(e,this.size,2);r.uniform2fv(this.addr,t)}function dS(r,e){let t=Eo(e,this.size,3);r.uniform3fv(this.addr,t)}function pS(r,e){let t=Eo(e,this.size,4);r.uniform4fv(this.addr,t)}function mS(r,e){let t=Eo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gS(r,e){let t=Eo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _S(r,e){let t=Eo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xS(r,e){r.uniform1iv(this.addr,e)}function vS(r,e){r.uniform2iv(this.addr,e)}function yS(r,e){r.uniform3iv(this.addr,e)}function MS(r,e){r.uniform4iv(this.addr,e)}function SS(r,e){r.uniform1uiv(this.addr,e)}function bS(r,e){r.uniform2uiv(this.addr,e)}function TS(r,e){r.uniform3uiv(this.addr,e)}function ES(r,e){r.uniform4uiv(this.addr,e)}function wS(r,e,t){let n=this.cache,i=e.length,s=Tu(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gg,s[o])}function AS(r,e,t){let n=this.cache,i=e.length,s=Tu(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xg,s[o])}function CS(r,e,t){let n=this.cache,i=e.length,s=Tu(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qg,s[o])}function RS(r,e,t){let n=this.cache,i=e.length,s=Tu(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wg,s[o])}function PS(r){switch(r){case 5126:return hS;case 35664:return fS;case 35665:return dS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return xS;case 35667:case 35671:return vS;case 35668:case 35672:return yS;case 35669:case 35673:return MS;case 5125:return SS;case 36294:return bS;case 36295:return TS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return RS}}var rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uS(t.type)}},sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PS(t.type)}},od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},id=/(\w+)(\])?(\[|\.)?/g;function Ig(r,e){r.seq.push(e),r.map[e.id]=e}function IS(r,e,t){let n=r.name,i=n.length;for(id.lastIndex=0;;){let s=id.exec(n),o=id.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ig(t,c===void 0?new rd(a,r,e):new sd(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new od(a),Ig(t,h)),t=h}}}var bo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);IS(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Dg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var DS=37297,LS=0;function US(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Lg=new Je;function NS(r){at._getMatrix(Lg,at.workingColorSpace,r);let e=`mat3( ${Lg.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case pa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ug(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+US(r.getShaderSource(e),o)}else return i}function FS(r,e){let t=NS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function OS(r,e){let t;switch(e){case Lc:t="Linear";break;case Uc:t="Reinhard";break;case Nc:t="Cineon";break;case xo:t="ACESFilmic";break;case Oc:t="AgX";break;case Bc:t="Neutral";break;case Fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Su=new U;function BS(){at.getLuminanceCoefficients(Su);let r=Su.x.toFixed(4),e=Su.y.toFixed(4),t=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function kS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ha(r){return r!==""}function Ng(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var HS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(r){return r.replace(HS,WS)}var GS=new Map;function WS(r,e){let t=je[e];if(t===void 0){let n=GS.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ad(t)}var XS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(r){return r.replace(XS,qS)}function qS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Nm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function $S(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pf:e="ENVMAP_BLENDING_MULTIPLY";break;case eg:e="ENVMAP_BLENDING_MIX";break;case tg:e="ENVMAP_BLENDING_ADD";break}return e}function KS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function QS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=YS(t),c=ZS(t),u=JS(t),h=$S(t),d=KS(t),f=zS(t),_=kS(s),g=i.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),p=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?je.tonemapping_pars_fragment:"",t.toneMapping!==or?OS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),BS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),o=ad(o),o=Ng(o,t),o=Fg(o,t),a=ad(a),a=Ng(a,t),a=Fg(a,t),o=Og(o),a=Og(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,v=S+p+a,E=Dg(i,i.VERTEX_SHADER,b),C=Dg(i,i.FRAGMENT_SHADER,v);i.attachShader(g,E),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(D){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(E).trim(),V=i.getShaderInfoLog(C).trim(),J=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,C);else{let Y=Ug(i,E,"vertex"),k=Ug(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Y+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||V==="")&&(H=!1);H&&(D.diagnostics={runnable:J,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(E),i.deleteShader(C),R=new bo(i,g),y=VS(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,DS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=C,this}var jS=0,ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cd(e),t.set(e,n)),n}},cd=class{constructor(e){this.id=jS++,this.code=e,this.usedTimes=0}};function eb(r,e,t,n,i,s,o){let a=new va,l=new ld,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,D,F,B){let V=F.fog,J=B.geometry,H=y.isMeshStandardMaterial?F.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),k=Y&&Y.mapping===Ua?Y.image.height:null,ee=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let P=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,oe=P!==void 0?P.length:0,Ie=0;J.morphAttributes.position!==void 0&&(Ie=1),J.morphAttributes.normal!==void 0&&(Ie=2),J.morphAttributes.color!==void 0&&(Ie=3);let We,q,te,ce;if(ee){let ve=Vi[ee];We=ve.vertexShader,q=ve.fragmentShader}else We=y.vertexShader,q=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);let ie=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,Ye=!!y.map,Xe=!!y.matcap,xe=!!Y,I=!!y.aoMap,ft=!!y.lightMap,Ne=!!y.bumpMap,z=!!y.normalMap,ye=!!y.displacementMap,rt=!!y.emissiveMap,re=!!y.metalnessMap,A=!!y.roughnessMap,M=y.anisotropy>0,G=y.clearcoat>0,j=y.dispersion>0,Q=y.iridescence>0,$=y.sheen>0,fe=y.transmission>0,le=M&&!!y.anisotropyMap,pe=G&&!!y.clearcoatMap,qe=G&&!!y.clearcoatNormalMap,se=G&&!!y.clearcoatRoughnessMap,ae=Q&&!!y.iridescenceMap,Fe=Q&&!!y.iridescenceThicknessMap,Ue=$&&!!y.sheenColorMap,Me=$&&!!y.sheenRoughnessMap,$e=!!y.specularMap,ke=!!y.specularColorMap,lt=!!y.specularIntensityMap,L=fe&&!!y.transmissionMap,he=fe&&!!y.thicknessMap,Z=!!y.gradientMap,K=!!y.alphaMap,ue=y.alphaTest>0,de=!!y.alphaHash,Ve=!!y.extensions,ct=or;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ct=r.toneMapping);let Lt={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:q,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ps,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:Xe,envMap:xe,envMapMode:xe&&Y.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:ft,bumpMap:Ne,normalMap:z,displacementMap:d&&ye,emissiveMap:rt,normalMapObjectSpace:z&&y.normalMapType===sg,normalMapTangentSpace:z&&y.normalMapType===Hf,metalnessMap:re,roughnessMap:A,anisotropy:M,anisotropyMap:le,clearcoat:G,clearcoatMap:pe,clearcoatNormalMap:qe,clearcoatRoughnessMap:se,dispersion:j,iridescence:Q,iridescenceMap:ae,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:$e,specularColorMap:ke,specularIntensityMap:lt,transmission:fe,transmissionMap:L,thicknessMap:he,gradientMap:Z,opaque:y.transparent===!1&&y.blending===hs&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ue,alphaHash:de,combine:y.combine,mapUv:Ye&&g(y.map.channel),aoMapUv:I&&g(y.aoMap.channel),lightMapUv:ft&&g(y.lightMap.channel),bumpMapUv:Ne&&g(y.bumpMap.channel),normalMapUv:z&&g(y.normalMap.channel),displacementMapUv:ye&&g(y.displacementMap.channel),emissiveMapUv:rt&&g(y.emissiveMap.channel),metalnessMapUv:re&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:le&&g(y.anisotropyMap.channel),clearcoatMapUv:pe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(y.sheenRoughnessMap.channel),specularMapUv:$e&&g(y.specularMap.channel),specularColorMapUv:ke&&g(y.specularColorMap.channel),specularIntensityMapUv:lt&&g(y.specularIntensityMap.channel),transmissionMapUv:L&&g(y.transmissionMap.channel),thicknessMapUv:he&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(z||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Ye||K),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:rt&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pi,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ve&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&y.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)x.push(D),x.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(S(x,y),b(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let x=_[y.type],D;if(x){let F=Vi[x];D=lr.clone(F.uniforms)}else D=y.uniforms;return D}function E(y,x){let D;for(let F=0,B=u.length;F<B;F++){let V=u[F];if(V.cacheKey===x){D=V,++D.usedTimes;break}}return D===void 0&&(D=new QS(r,x,y,s),u.push(D)),D}function C(y){if(--y.usedTimes===0){let x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:R}}function tb(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,d,f,_,g,m){let p=o(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){let p=o(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||nb),n.length>1&&n.sort(d||zg),i.length>1&&i.sort(d||zg)}function u(){for(let h=e,d=r.length;h<d;h++){let f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function ib(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new kg,r.set(n,[o])):i>=s.length?(o=new kg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function rb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function sb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var ob=0;function ab(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lb(r){let e=new rb,t=sb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,s=new wt,o=new wt;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,b=0,v=0,E=0,C=0,w=0;c.sort(ab);for(let y=0,x=c.length;y<x;y++){let D=c[y],F=D.color,B=D.intensity,V=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*B,h+=F.g*B,d+=F.b*B;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],B);w++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,k=t.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=D.shadow.matrix,S++}n.directional[f]=H,f++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(B),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[g]=H;let Y=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,Y.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[g]=Y.matrix,D.castShadow){let k=t.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=J,v++}g++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let Y=D.shadow,k=t.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=D.shadow.matrix,b++}n.point[_]=H,_++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(B),H.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+E-C,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=w,n.version=ob++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let b=c[p];if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(b.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Vg(r){let e=new lb(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cb(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Vg(r),e.set(i,[a])):s>=o.length?(a=new Vg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
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
}`;function fb(r,e,t){let n=new go,i=new ze,s=new ze,o=new xt,a=new pc({depthPacking:rg}),l=new mc,c={},u=t.maxTextureSize,h={[rr]:Dn,[Dn]:rr,[pi]:pi},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:ub,fragmentShader:hb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new vn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af;let p=this.type;this.render=function(C,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let y=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==Bi&&this.type===Bi,V=p===Bi&&this.type!==Bi;for(let J=0,H=C.length;J<H;J++){let Y=C[J],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let ee=k.getFrameExtents();if(i.multiply(ee),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ee.x),i.x=s.x*ee.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ee.y),i.y=s.y*ee.y,k.mapSize.y=s.y)),k.map===null||B===!0||V===!0){let oe=this.type!==Bi?{minFilter:fi,magFilter:fi}:{};k.map!==null&&k.map.dispose(),k.map=new xn(i.x,i.y,oe),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let P=k.getViewportCount();for(let oe=0;oe<P;oe++){let Ie=k.getViewport(oe);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),F.viewport(o),k.updateMatrices(Y,oe),n=k.getFrustum(),v(w,R,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Bi&&S(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,x,D)};function S(C,w){let R=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,R,f,g,null)}function b(C,w,R,y){let x=null,D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)x=D;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=x.uuid,B=w.uuid,V=c[F];V===void 0&&(V={},c[F]=V);let J=V[B];J===void 0&&(J=x.clone(),V[B]=J,w.addEventListener("dispose",E)),x=J}if(x.visible=w.visible,x.wireframe=w.wireframe,y===Bi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let F=r.properties.get(x);F.light=R}return x}function v(C,w,R,y,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Bi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);let B=e.update(C),V=C.material;if(Array.isArray(V)){let J=B.groups;for(let H=0,Y=J.length;H<Y;H++){let k=J[H],ee=V[k.materialIndex];if(ee&&ee.visible){let P=b(C,ee,y,x);C.onBeforeShadow(r,C,w,R,B,P,k),r.renderBufferDirect(R,null,B,P,C,k),C.onAfterShadow(r,C,w,R,B,P,k)}}}else if(V.visible){let J=b(C,V,y,x);C.onBeforeShadow(r,C,w,R,B,J,null),r.renderBufferDirect(R,null,B,J,C,null),C.onAfterShadow(r,C,w,R,B,J,null)}}let F=C.children;for(let B=0,V=F.length;B<V;B++)v(F[B],w,R,y,x)}function E(C){C.target.removeEventListener("dispose",E);for(let R in c){let y=c[R],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}var db={[wc]:Ac,[Cc]:Ic,[Rc]:Dc,[fs]:Pc,[Ac]:wc,[Ic]:Cc,[Dc]:Rc,[Pc]:fs};function pb(r,e){function t(){let L=!1,he=new xt,Z=null,K=new xt(0,0,0,0);return{setMask:function(ue){Z!==ue&&!L&&(r.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){L=ue},setClear:function(ue,de,Ve,ct,Lt){Lt===!0&&(ue*=ct,de*=ct,Ve*=ct),he.set(ue,de,Ve,ct),K.equals(he)===!1&&(r.clearColor(ue,de,Ve,ct),K.copy(he))},reset:function(){L=!1,Z=null,K.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,Z=null,K=null,ue=null;return{setReversed:function(de){if(he!==de){let Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let ct=ue;ue=null,this.setClear(ct)}he=de},getReversed:function(){return he},setTest:function(de){de?ie(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(de){Z!==de&&!L&&(r.depthMask(de),Z=de)},setFunc:function(de){if(he&&(de=db[de]),K!==de){switch(de){case wc:r.depthFunc(r.NEVER);break;case Ac:r.depthFunc(r.ALWAYS);break;case Cc:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case Rc:r.depthFunc(r.EQUAL);break;case Pc:r.depthFunc(r.GEQUAL);break;case Ic:r.depthFunc(r.GREATER);break;case Dc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=de}},setLocked:function(de){L=de},setClear:function(de){ue!==de&&(he&&(de=1-de),r.clearDepth(de),ue=de)},reset:function(){L=!1,Z=null,K=null,ue=null,he=!1}}}function i(){let L=!1,he=null,Z=null,K=null,ue=null,de=null,Ve=null,ct=null,Lt=null;return{setTest:function(ve){L||(ve?ie(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(ve){he!==ve&&!L&&(r.stencilMask(ve),he=ve)},setFunc:function(ve,Ce,Ke){(Z!==ve||K!==Ce||ue!==Ke)&&(r.stencilFunc(ve,Ce,Ke),Z=ve,K=Ce,ue=Ke)},setOp:function(ve,Ce,Ke){(de!==ve||Ve!==Ce||ct!==Ke)&&(r.stencilOp(ve,Ce,Ke),de=ve,Ve=Ce,ct=Ke)},setLocked:function(ve){L=ve},setClear:function(ve){Lt!==ve&&(r.clearStencil(ve),Lt=ve)},reset:function(){L=!1,he=null,Z=null,K=null,ue=null,de=null,Ve=null,ct=null,Lt=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,b=null,v=null,E=null,C=null,w=new Re(0,0,0),R=0,y=!1,x=null,D=null,F=null,B=null,V=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Y>=2);let ee=null,P={},oe=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),We=new xt().fromArray(oe),q=new xt().fromArray(Ie);function te(L,he,Z,K){let ue=new Uint8Array(4),de=r.createTexture();r.bindTexture(L,de),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<Z;Ve++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(he+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return de}let ce={};ce[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(fs),Ne(!1),z(wf),ie(r.CULL_FACE),I(Ci);function ie(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function we(L,he){return h[L]!==he?(r.bindFramebuffer(L,he),h[L]=he,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Ae(L,he){let Z=f,K=!1;if(L){Z=d.get(he),Z===void 0&&(Z=[],d.set(he,Z));let ue=L.textures;if(Z.length!==ue.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let de=0,Ve=ue.length;de<Ve;de++)Z[de]=r.COLOR_ATTACHMENT0+de;Z.length=ue.length,K=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,K=!0);K&&r.drawBuffers(Z)}function Ye(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Xe={[Pr]:r.FUNC_ADD,[Om]:r.FUNC_SUBTRACT,[Bm]:r.FUNC_REVERSE_SUBTRACT};Xe[zm]=r.MIN,Xe[km]=r.MAX;let xe={[Vm]:r.ZERO,[Hm]:r.ONE,[Gm]:r.SRC_COLOR,[tc]:r.SRC_ALPHA,[Jm]:r.SRC_ALPHA_SATURATE,[Ym]:r.DST_COLOR,[Xm]:r.DST_ALPHA,[Wm]:r.ONE_MINUS_SRC_COLOR,[nc]:r.ONE_MINUS_SRC_ALPHA,[Zm]:r.ONE_MINUS_DST_COLOR,[qm]:r.ONE_MINUS_DST_ALPHA,[$m]:r.CONSTANT_COLOR,[Km]:r.ONE_MINUS_CONSTANT_COLOR,[Qm]:r.CONSTANT_ALPHA,[jm]:r.ONE_MINUS_CONSTANT_ALPHA};function I(L,he,Z,K,ue,de,Ve,ct,Lt,ve){if(L===Ci){g===!0&&(Se(r.BLEND),g=!1);return}if(g===!1&&(ie(r.BLEND),g=!0),L!==Fm){if(L!==m||ve!==y){if((p!==Pr||v!==Pr)&&(r.blendEquation(r.FUNC_ADD),p=Pr,v=Pr),ve)switch(L){case hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vs:r.blendFunc(r.ONE,r.ONE);break;case Cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,E=null,C=null,w.set(0,0,0),R=0,m=L,y=ve}return}ue=ue||he,de=de||Z,Ve=Ve||K,(he!==p||ue!==v)&&(r.blendEquationSeparate(Xe[he],Xe[ue]),p=he,v=ue),(Z!==S||K!==b||de!==E||Ve!==C)&&(r.blendFuncSeparate(xe[Z],xe[K],xe[de],xe[Ve]),S=Z,b=K,E=de,C=Ve),(ct.equals(w)===!1||Lt!==R)&&(r.blendColor(ct.r,ct.g,ct.b,Lt),w.copy(ct),R=Lt),m=L,y=!1}function ft(L,he){L.side===pi?Se(r.CULL_FACE):ie(r.CULL_FACE);let Z=L.side===Dn;he&&(Z=!Z),Ne(Z),L.blending===hs&&L.transparent===!1?I(Ci):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function z(L){L!==Lm?(ie(r.CULL_FACE),L!==D&&(L===wf?r.cullFace(r.BACK):L===Um?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),D=L}function ye(L){L!==F&&(H&&r.lineWidth(L),F=L)}function rt(L,he,Z){L?(ie(r.POLYGON_OFFSET_FILL),(B!==he||V!==Z)&&(r.polygonOffset(he,Z),B=he,V=Z)):Se(r.POLYGON_OFFSET_FILL)}function re(L){L?ie(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+J-1),ee!==L&&(r.activeTexture(L),ee=L)}function M(L,he,Z){Z===void 0&&(ee===null?Z=r.TEXTURE0+J-1:Z=ee);let K=P[Z];K===void 0&&(K={type:void 0,texture:void 0},P[Z]=K),(K.type!==L||K.texture!==he)&&(ee!==Z&&(r.activeTexture(Z),ee=Z),r.bindTexture(L,he||ce[L]),K.type=L,K.texture=he)}function G(){let L=P[ee];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){We.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function Me(L){q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function $e(L,he){let Z=c.get(he);Z===void 0&&(Z=new WeakMap,c.set(he,Z));let K=Z.get(L);K===void 0&&(K=r.getUniformBlockIndex(he,L.name),Z.set(L,K))}function ke(L,he){let K=c.get(he).get(L);l.get(he)!==K&&(r.uniformBlockBinding(he,K,L.__bindingPointIndex),l.set(he,K))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,P={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,b=null,v=null,E=null,C=null,w=new Re(0,0,0),R=0,y=!1,x=null,D=null,F=null,B=null,V=null,We.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Se,bindFramebuffer:we,drawBuffers:Ae,useProgram:Ye,setBlending:I,setMaterial:ft,setFlipSided:Ne,setCullFace:z,setLineWidth:ye,setPolygonOffset:rt,setScissorTest:re,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ae,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:qe,texStorage3D:se,texSubImage2D:$,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ue,viewport:Me,reset:lt}}function mb(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return f?new OffscreenCanvas(A,M):ga("canvas")}function g(A,M,G){let j=1,Q=re(A);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(j*Q.width),fe=Math.floor(j*Q.height);h===void 0&&(h=_($,fe));let le=M?_($,fe):h;return le.width=$,le.height=fe,le.getContext("2d").drawImage(A,0,0,$,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+fe+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(A,M,G,j,Q=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===r.RED&&(G===r.FLOAT&&($=r.R32F),G===r.HALF_FLOAT&&($=r.R16F),G===r.UNSIGNED_BYTE&&($=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.R8UI),G===r.UNSIGNED_SHORT&&($=r.R16UI),G===r.UNSIGNED_INT&&($=r.R32UI),G===r.BYTE&&($=r.R8I),G===r.SHORT&&($=r.R16I),G===r.INT&&($=r.R32I)),M===r.RG&&(G===r.FLOAT&&($=r.RG32F),G===r.HALF_FLOAT&&($=r.RG16F),G===r.UNSIGNED_BYTE&&($=r.RG8)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RG8UI),G===r.UNSIGNED_SHORT&&($=r.RG16UI),G===r.UNSIGNED_INT&&($=r.RG32UI),G===r.BYTE&&($=r.RG8I),G===r.SHORT&&($=r.RG16I),G===r.INT&&($=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGB8UI),G===r.UNSIGNED_SHORT&&($=r.RGB16UI),G===r.UNSIGNED_INT&&($=r.RGB32UI),G===r.BYTE&&($=r.RGB8I),G===r.SHORT&&($=r.RGB16I),G===r.INT&&($=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGBA8UI),G===r.UNSIGNED_SHORT&&($=r.RGBA16UI),G===r.UNSIGNED_INT&&($=r.RGBA32UI),G===r.BYTE&&($=r.RGBA8I),G===r.SHORT&&($=r.RGBA16I),G===r.INT&&($=r.RGBA32I)),M===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),M===r.RGBA){let fe=Q?pa:at.getTransfer(j);G===r.FLOAT&&($=r.RGBA32F),G===r.HALF_FLOAT&&($=r.RGBA16F),G===r.UNSIGNED_BYTE&&($=fe===ht?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(A,M){let G;return A?M===null||M===Fr||M===Ss?G=r.DEPTH24_STENCIL8:M===ki?G=r.DEPTH32F_STENCIL8:M===vo&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fr||M===Ss?G=r.DEPTH_COMPONENT24:M===ki?G=r.DEPTH_COMPONENT32F:M===vo&&(G=r.DEPTH_COMPONENT16),G}function E(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fi&&A.minFilter!==bi?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){let M=A.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&u.delete(M)}function w(A){let M=A.target;M.removeEventListener("dispose",w),x(M)}function R(A){let M=n.get(A);if(M.__webglInit===void 0)return;let G=A.source,j=d.get(G);if(j){let Q=j[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(j).length===0&&d.delete(G)}n.remove(A)}function y(A){let M=n.get(A);r.deleteTexture(M.__webglTexture);let G=A.source,j=d.get(G);delete j[M.__cacheKey],o.memory.textures--}function x(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Q=0;Q<M.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=A.textures;for(let j=0,Q=G.length;j<Q;j++){let $=n.get(G[j]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(A)}let D=0;function F(){D=0}function B(){let A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function V(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function J(A,M){let G=n.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,A,M);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function H(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function Y(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,M);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function k(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){te(G,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let ee={[ic]:r.REPEAT,[Rr]:r.CLAMP_TO_EDGE,[rc]:r.MIRRORED_REPEAT},P={[fi]:r.NEAREST,[ng]:r.NEAREST_MIPMAP_NEAREST,[Na]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[Vc]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},oe={[og]:r.NEVER,[fg]:r.ALWAYS,[ag]:r.LESS,[Gf]:r.LEQUAL,[lg]:r.EQUAL,[hg]:r.GEQUAL,[cg]:r.GREATER,[ug]:r.NOTEQUAL};function Ie(A,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bi||M.magFilter===Vc||M.magFilter===Na||M.magFilter===Nr||M.minFilter===bi||M.minFilter===Vc||M.minFilter===Na||M.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ee[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fi||M.minFilter!==Na&&M.minFilter!==Nr||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function We(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));let j=M.source,Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));let $=V(M);if($!==A.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;let fe=Q[A.__cacheKey];fe!==void 0&&(Q[A.__cacheKey].usedTimes--,fe.usedTimes===0&&y(M)),A.__cacheKey=$,A.__webglTexture=Q[$].texture}return G}function q(A,M,G){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);let Q=We(A,M),$=M.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+G);let fe=n.get($);if($.version!==fe.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);let le=at.getPrimaries(at.workingColorSpace),pe=M.colorSpace===ar?null:at.getPrimaries(M.colorSpace),qe=M.colorSpace===ar||le===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=g(M.image,!1,i.maxTextureSize);se=rt(M,se);let ae=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),Ue=b(M.internalFormat,ae,Fe,M.colorSpace,M.isVideoTexture);Ie(j,M);let Me,$e=M.mipmaps,ke=M.isVideoTexture!==!0,lt=fe.__version===void 0||Q===!0,L=$.dataReady,he=E(M,se);if(M.isDepthTexture)Ue=v(M.format===ds,M.type),lt&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Ue,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ue,se.width,se.height,0,ae,Fe,null));else if(M.isDataTexture)if($e.length>0){ke&&lt&&t.texStorage2D(r.TEXTURE_2D,he,Ue,$e[0].width,$e[0].height);for(let Z=0,K=$e.length;Z<K;Z++)Me=$e[Z],ke?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Me.width,Me.height,ae,Fe,Me.data):t.texImage2D(r.TEXTURE_2D,Z,Ue,Me.width,Me.height,0,ae,Fe,Me.data);M.generateMipmaps=!1}else ke?(lt&&t.texStorage2D(r.TEXTURE_2D,he,Ue,se.width,se.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ae,Fe,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,se.width,se.height,0,ae,Fe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Ue,$e[0].width,$e[0].height,se.depth);for(let Z=0,K=$e.length;Z<K;Z++)if(Me=$e[Z],M.format!==gi)if(ae!==null)if(ke){if(L)if(M.layerUpdates.size>0){let ue=Kf(Me.width,Me.height,M.format,M.type);for(let de of M.layerUpdates){let Ve=Me.data.subarray(de*ue/Me.data.BYTES_PER_ELEMENT,(de+1)*ue/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,de,Me.width,Me.height,1,ae,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,se.depth,ae,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Ue,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,se.depth,ae,Fe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Ue,Me.width,Me.height,se.depth,0,ae,Fe,Me.data)}else{ke&&lt&&t.texStorage2D(r.TEXTURE_2D,he,Ue,$e[0].width,$e[0].height);for(let Z=0,K=$e.length;Z<K;Z++)Me=$e[Z],M.format!==gi?ae!==null?ke?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Me.width,Me.height,ae,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Me.width,Me.height,ae,Fe,Me.data):t.texImage2D(r.TEXTURE_2D,Z,Ue,Me.width,Me.height,0,ae,Fe,Me.data)}else if(M.isDataArrayTexture)if(ke){if(lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Ue,se.width,se.height,se.depth),L)if(M.layerUpdates.size>0){let Z=Kf(se.width,se.height,M.format,M.type);for(let K of M.layerUpdates){let ue=se.data.subarray(K*Z/se.data.BYTES_PER_ELEMENT,(K+1)*Z/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,ae,Fe,ue)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ae,Fe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,se.width,se.height,se.depth,0,ae,Fe,se.data);else if(M.isData3DTexture)ke?(lt&&t.texStorage3D(r.TEXTURE_3D,he,Ue,se.width,se.height,se.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ae,Fe,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,se.width,se.height,se.depth,0,ae,Fe,se.data);else if(M.isFramebufferTexture){if(lt)if(ke)t.texStorage2D(r.TEXTURE_2D,he,Ue,se.width,se.height);else{let Z=se.width,K=se.height;for(let ue=0;ue<he;ue++)t.texImage2D(r.TEXTURE_2D,ue,Ue,Z,K,0,ae,Fe,null),Z>>=1,K>>=1}}else if($e.length>0){if(ke&&lt){let Z=re($e[0]);t.texStorage2D(r.TEXTURE_2D,he,Ue,Z.width,Z.height)}for(let Z=0,K=$e.length;Z<K;Z++)Me=$e[Z],ke?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ae,Fe,Me):t.texImage2D(r.TEXTURE_2D,Z,Ue,ae,Fe,Me);M.generateMipmaps=!1}else if(ke){if(lt){let Z=re(se);t.texStorage2D(r.TEXTURE_2D,he,Ue,Z.width,Z.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Fe,se)}else t.texImage2D(r.TEXTURE_2D,0,Ue,ae,Fe,se);m(M)&&p(j),fe.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function te(A,M,G){if(M.image.length!==6)return;let j=We(A,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);let $=n.get(Q);if(Q.version!==$.__version||j===!0){t.activeTexture(r.TEXTURE0+G);let fe=at.getPrimaries(at.workingColorSpace),le=M.colorSpace===ar?null:at.getPrimaries(M.colorSpace),pe=M.colorSpace===ar||fe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let qe=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!qe&&!se?ae[K]=g(M.image[K],!0,i.maxCubemapSize):ae[K]=se?M.image[K].image:M.image[K],ae[K]=rt(M,ae[K]);let Fe=ae[0],Ue=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),$e=b(M.internalFormat,Ue,Me,M.colorSpace),ke=M.isVideoTexture!==!0,lt=$.__version===void 0||j===!0,L=Q.dataReady,he=E(M,Fe);Ie(r.TEXTURE_CUBE_MAP,M);let Z;if(qe){ke&&lt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,$e,Fe.width,Fe.height);for(let K=0;K<6;K++){Z=ae[K].mipmaps;for(let ue=0;ue<Z.length;ue++){let de=Z[ue];M.format!==gi?Ue!==null?ke?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,de.width,de.height,Ue,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,$e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,de.width,de.height,Ue,Me,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,$e,de.width,de.height,0,Ue,Me,de.data)}}}else{if(Z=M.mipmaps,ke&&lt){Z.length>0&&he++;let K=re(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,$e,K.width,K.height)}for(let K=0;K<6;K++)if(se){ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,Ue,Me,ae[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,ae[K].width,ae[K].height,0,Ue,Me,ae[K].data);for(let ue=0;ue<Z.length;ue++){let Ve=Z[ue].image[K].image;ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ve.width,Ve.height,Ue,Me,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,$e,Ve.width,Ve.height,0,Ue,Me,Ve.data)}}else{ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,Me,ae[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Ue,Me,ae[K]);for(let ue=0;ue<Z.length;ue++){let de=Z[ue];ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ue,Me,de.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,$e,Ue,Me,de.image[K])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ce(A,M,G,j,Q,$){let fe=s.convert(G.format,G.colorSpace),le=s.convert(G.type),pe=b(G.internalFormat,fe,le,G.colorSpace),qe=n.get(M),se=n.get(G);if(se.__renderTarget=M,!qe.__hasExternalTextures){let ae=Math.max(1,M.width>>$),Fe=Math.max(1,M.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,pe,ae,Fe,M.depth,0,fe,le,null):t.texImage2D(Q,$,pe,ae,Fe,0,fe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),z(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,se.__webglTexture,0,Ne(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,se.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(A,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){let j=M.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=v(M.stencilBuffer,Q),fe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ne(M);z(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,$,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,$,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,$,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,A)}else{let j=M.textures;for(let Q=0;Q<j.length;Q++){let $=j[Q],fe=s.convert($.format,$.colorSpace),le=s.convert($.type),pe=b($.internalFormat,fe,le,$.colorSpace),qe=Ne(M);G&&z(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,pe,M.width,M.height):z(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let Q=j.__webglTexture,$=Ne(M);if(M.depthTexture.format===us)z(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===ds)z(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(A){let M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=j}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),ie(M.__webglDepthbuffer[j],A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ie(M.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(A,M,G){let j=n.get(A);M!==void 0&&ce(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&we(A)}function Ye(A){let M=A.texture,G=n.get(A),j=n.get(M);A.addEventListener("dispose",w);let Q=A.textures,$=A.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let pe=0;pe<M.mipmaps.length;pe++)G.__webglFramebuffer[le][pe]=r.createFramebuffer()}else G.__webglFramebuffer[le]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)G.__webglFramebuffer[le]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(fe)for(let le=0,pe=Q.length;le<pe;le++){let qe=n.get(Q[le]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&z(A)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let pe=Q[le];G.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[le]);let qe=s.convert(pe.format,pe.colorSpace),se=s.convert(pe.type),ae=b(pe.internalFormat,qe,se,pe.colorSpace,A.isXRRenderTarget===!0),Fe=Ne(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,ae,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,G.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ce(G.__webglFramebuffer[le][pe],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else ce(G.__webglFramebuffer[le],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,pe=Q.length;le<pe;le++){let qe=Q[le],se=n.get(qe);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Ie(r.TEXTURE_2D,qe),ce(G.__webglFramebuffer,A,qe,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(qe)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Ie(le,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ce(G.__webglFramebuffer[pe],A,M,r.COLOR_ATTACHMENT0,le,pe);else ce(G.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,le,0);m(M)&&p(le),t.unbindTexture()}A.depthBuffer&&we(A)}function Xe(A){let M=A.textures;for(let G=0,j=M.length;G<j;G++){let Q=M[G];if(m(Q)){let $=S(A),fe=n.get(Q).__webglTexture;t.bindTexture($,fe),p($),t.unbindTexture()}}}let xe=[],I=[];function ft(A){if(A.samples>0){if(z(A)===!1){let M=A.textures,G=A.width,j=A.height,Q=r.COLOR_BUFFER_BIT,$=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(A),le=M.length>1;if(le)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let qe=n.get(M[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,Q,r.NEAREST),l===!0&&(xe.length=0,I.length=0,xe.push(r.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let qe=n.get(M[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ne(A){return Math.min(i.maxSamples,A.samples)}function z(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(A){let M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function rt(A,M){let G=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ps&&G!==ar&&(at.getTransfer(G)===ht?(j!==gi||Q!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=Ae,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=z}function gb(r,e){function t(n,i=ar){let s,o=at.getTransfer(i);if(n===zi)return r.UNSIGNED_BYTE;if(n===Gc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Uf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return r.BYTE;if(n===Lf)return r.SHORT;if(n===vo)return r.UNSIGNED_SHORT;if(n===Hc)return r.INT;if(n===Fr)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===mi)return r.HALF_FLOAT;if(n===Nf)return r.ALPHA;if(n===Ff)return r.RGB;if(n===gi)return r.RGBA;if(n===Of)return r.LUMINANCE;if(n===Bf)return r.LUMINANCE_ALPHA;if(n===us)return r.DEPTH_COMPONENT;if(n===ds)return r.DEPTH_STENCIL;if(n===zf)return r.RED;if(n===Xc)return r.RED_INTEGER;if(n===kf)return r.RG;if(n===qc)return r.RG_INTEGER;if(n===Yc)return r.RGBA_INTEGER;if(n===Fa||n===Oa||n===Ba||n===za)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zc||n===Jc||n===$c||n===Kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qc||n===jc||n===eu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qc||n===jc)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===iu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ru)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===su)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ou)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===au)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===du)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===mu||n===gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ka)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===_u||n===xu||n===vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
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

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new jn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:_b,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends sr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null,g=new ud,m=t.getContextAttributes(),p=null,S=null,b=[],v=[],E=new ze,C=null,w=new ln;w.viewport=new xt;let R=new ln;R.viewport=new xt;let y=[w,R],x=new Ec,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=b[q];return te===void 0&&(te=new po,b[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=b[q];return te===void 0&&(te=new po,b[q]=te),te.getGripSpace()},this.getHand=function(q){let te=b[q];return te===void 0&&(te=new po,b[q]=te),te.getHandSpace()};function B(q){let te=v.indexOf(q.inputSource);if(te===-1)return;let ce=b[te];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",J);for(let q=0;q<b.length;q++){let te=v[q];te!==null&&(v[q]=null,b[q].disconnect(te))}D=null,F=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,S=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ie=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?ds:us,ie=m.stencil?Ss:Fr);let we={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new xn(d.textureWidth,d.textureHeight,{format:gi,type:zi,depthTexture:new Ea(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new xn(f.framebufferWidth,f.framebufferHeight,{format:gi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(q){for(let te=0;te<q.removed.length;te++){let ce=q.removed[te],ie=v.indexOf(ce);ie>=0&&(v[ie]=null,b[ie].disconnect(ce))}for(let te=0;te<q.added.length;te++){let ce=q.added[te],ie=v.indexOf(ce);if(ie===-1){for(let we=0;we<b.length;we++)if(we>=v.length){v.push(ce),ie=we;break}else if(v[we]===null){v[we]=ce,ie=we;break}if(ie===-1)break}let Se=b[ie];Se&&Se.connect(ce)}}let H=new U,Y=new U;function k(q,te,ce){H.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);let ie=H.distanceTo(Y),Se=te.projectionMatrix.elements,we=ce.projectionMatrix.elements,Ae=Se[14]/(Se[10]-1),Ye=Se[14]/(Se[10]+1),Xe=(Se[9]+1)/Se[5],xe=(Se[9]-1)/Se[5],I=(Se[8]-1)/Se[0],ft=(we[8]+1)/we[0],Ne=Ae*I,z=Ae*ft,ye=ie/(-I+ft),rt=ye*-I;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let re=Ae+ye,A=Ye+ye,M=Ne-rt,G=z+(ie-rt),j=Xe*Ye/A*re,Q=xe*Ye/A*re;q.projectionMatrix.makePerspective(M,G,j,Q,re,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,ce=q.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),x.near=R.near=w.near=te,x.far=R.far=w.far=ce,(D!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,F=x.far),w.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=w.layers.mask|R.layers.mask;let ie=q.parent,Se=x.cameras;ee(x,ie);for(let we=0;we<Se.length;we++)ee(Se[we],ie);Se.length===2?k(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),P(q,x,ie)};function P(q,te,ce){ce===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=uo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let oe=null;function Ie(q,te){if(u=te.getViewerPose(c||o),_=te,u!==null){let ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ie=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Ae=0;Ae<ce.length;Ae++){let Ye=ce[Ae],Xe=null;if(f!==null)Xe=f.getViewport(Ye);else{let I=h.getViewSubImage(d,Ye);Xe=I.viewport,Ae===0&&(e.setRenderTargetTextures(S,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(S))}let xe=y[Ae];xe===void 0&&(xe=new ln,xe.layers.enable(Ae),xe.viewport=new xt,y[Ae]=xe),xe.matrix.fromArray(Ye.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ye.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ae===0&&(x.matrix.copy(xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(xe)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){let Ae=h.getDepthInformation(ce[0]);Ae&&Ae.isValid&&Ae.texture&&g.init(e,Ae,i.renderState)}}for(let ce=0;ce<b.length;ce++){let ie=v[ce],Se=b[ce];ie!==null&&Se!==void 0&&Se.update(ie,te,c||o)}oe&&oe(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}let We=new Hg;We.setAnimationLoop(Ie),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}},Es=new Ei,vb=new wt;function yb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,v=S.envMapRotation;b&&(m.envMap.value=b,Es.copy(v),Es.x*=-1,Es.y*=-1,Es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(Es)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mb(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let v=b.program;n.uniformBlockBinding(S,v)}function c(S,b){let v=i[S.id];v===void 0&&(_(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));let E=b.program;n.updateUBOMapping(S,E);let C=e.render.frame;s[S.id]!==C&&(d(S),s[S.id]=C)}function u(S){let b=h();S.__bindingPointIndex=b;let v=r.createBuffer(),E=S.__size,C=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=i[S.id],v=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let C=0,w=v.length;C<w;C++){let R=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,x=R.length;y<x;y++){let D=R[y];if(f(D,C,y,E)===!0){let F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],V=0;for(let J=0;J<B.length;J++){let H=B[J],Y=g(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,F+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,b,v,E){let C=S.value,w=b+"_"+v;if(E[w]===void 0)return typeof C=="number"||typeof C=="boolean"?E[w]=C:E[w]=C.clone(),!0;{let R=E[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return E[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(S){let b=S.uniforms,v=0,E=16;for(let w=0,R=b.length;w<R;w++){let y=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,D=y.length;x<D;x++){let F=y[x],B=Array.isArray(F.value)?F.value:[F.value];for(let V=0,J=B.length;V<J;V++){let H=B[V],Y=g(H),k=v%E,ee=k%Y.boundary,P=k+ee;v+=ee,P!==0&&E-P<Y.storage&&(v+=E-P),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Y.storage}}}let C=v%E;return C>0&&(v+=E-C),S.__size=v,S.__cache={},this}function g(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(let S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var bu=class{constructor(e={}){let{canvas:t=dg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=or,this.toneMappingExposure=1;let v=this,E=!1,C=0,w=0,R=null,y=-1,x=null,D=new xt,F=new xt,B=null,V=new Re(0),J=0,H=t.width,Y=t.height,k=1,ee=null,P=null,oe=new xt(0,0,H,Y),Ie=new xt(0,0,H,Y),We=!1,q=new go,te=!1,ce=!1;this.transmissionResolutionScale=1;let ie=new wt,Se=new wt,we=new U,Ae=new xt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function xe(){return R===null?k:1}let I=n;function ft(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"174"}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",de,!1),I===null){let O="webgl2";if(I=ft(O,T),I===null)throw ft(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ne,z,ye,rt,re,A,M,G,j,Q,$,fe,le,pe,qe,se,ae,Fe,Ue,Me,$e,ke,lt,L;function he(){Ne=new zM(I),Ne.init(),ke=new gb(I,Ne),z=new DM(I,Ne,e,ke),ye=new pb(I,Ne),z.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),rt=new HM(I),re=new tb,A=new mb(I,Ne,ye,re,z,ke,rt),M=new UM(v),G=new BM(v),j=new Zx(I),lt=new PM(I,j),Q=new kM(I,j,rt,lt),$=new WM(I,Q,j,rt),Ue=new GM(I,z,A),se=new LM(re),fe=new eb(v,M,G,Ne,z,lt,se),le=new yb(v,re),pe=new ib,qe=new cb(Ne),Fe=new RM(v,M,G,ye,$,f,l),ae=new fb(v,$,z),L=new Mb(I,rt,z,ye),Me=new IM(I,Ne,rt),$e=new VM(I,Ne,rt),rt.programs=fe.programs,v.capabilities=z,v.extensions=Ne,v.properties=re,v.renderLists=pe,v.shadowMap=ae,v.state=ye,v.info=rt}he();let Z=new hd(v,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=O,t.width=Math.floor(T*k),t.height=Math.floor(O*k),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*k,Y*k).floor()},this.setDrawingBufferSize=function(T,O,X){H=T,Y=O,k=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,O,X,W){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,O,X,W),ye.viewport(D.copy(oe).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,O,X,W){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,O,X,W),ye.scissor(F.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){ye.setScissorTest(We=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let W=0;if(T){let N=!1;if(R!==null){let ne=R.texture.format;N=ne===Yc||ne===qc||ne===Xc}if(N){let ne=R.texture.type,ge=ne===zi||ne===Fr||ne===vo||ne===Ss||ne===Gc||ne===Wc,Te=Fe.getClearColor(),be=Fe.getClearAlpha(),Le=Te.r,Be=Te.g,De=Te.b;ge?(_[0]=Le,_[1]=Be,_[2]=De,_[3]=be,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Le,g[1]=Be,g[2]=De,g[3]=be,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Fe.dispose(),pe.dispose(),qe.dispose(),re.dispose(),M.dispose(),G.dispose(),$.dispose(),lt.dispose(),L.dispose(),fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",me),Z.removeEventListener("sessionend",Ge),Pe.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=rt.autoReset,O=ae.enabled,X=ae.autoUpdate,W=ae.needsUpdate,N=ae.type;he(),rt.autoReset=T,ae.enabled=O,ae.autoUpdate=X,ae.needsUpdate=W,ae.type=N}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){let O=T.target;O.removeEventListener("dispose",Ve),ct(O)}function ct(T){Lt(T),re.remove(T)}function Lt(T){let O=re.get(T).programs;O!==void 0&&(O.forEach(function(X){fe.releaseProgram(X)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,W,N,ne){O===null&&(O=Ye);let ge=N.isMesh&&N.matrixWorld.determinant()<0,Te=Vn(T,O,X,W,N);ye.setMaterial(W,ge);let be=X.index,Le=1;if(W.wireframe===!0){if(be=Q.getWireframeAttribute(X),be===void 0)return;Le=2}let Be=X.drawRange,De=X.attributes.position,Ze=Be.start*Le,pt=(Be.start+Be.count)*Le;ne!==null&&(Ze=Math.max(Ze,ne.start*Le),pt=Math.min(pt,(ne.start+ne.count)*Le)),be!==null?(Ze=Math.max(Ze,0),pt=Math.min(pt,be.count)):De!=null&&(Ze=Math.max(Ze,0),pt=Math.min(pt,De.count));let Ht=pt-Ze;if(Ht<0||Ht===1/0)return;lt.setup(N,W,Te,X,be);let Ut,ut=Me;if(be!==null&&(Ut=j.get(be),ut=$e,ut.setIndex(Ut)),N.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*xe()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(N.isLine){let Oe=W.linewidth;Oe===void 0&&(Oe=1),ye.setLineWidth(Oe*xe()),N.isLineSegments?ut.setMode(I.LINES):N.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else N.isPoints?ut.setMode(I.POINTS):N.isSprite&&ut.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Oe=N._multiDrawStarts,rn=N._multiDrawCounts,mt=N._multiDrawCount,_i=be?j.get(be).bytesPerElement:1,Cs=re.get(W).currentProgram.getUniforms();for(let Hn=0;Hn<mt;Hn++)Cs.setValue(I,"_gl_DrawID",Hn),ut.render(Oe[Hn]/_i,rn[Hn])}else if(N.isInstancedMesh)ut.renderInstances(Ze,Ht,N.count);else if(X.isInstancedBufferGeometry){let Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,rn=Math.min(X.instanceCount,Oe);ut.renderInstances(Ze,Ht,rn)}else ut.render(Ze,Ht)};function ve(T,O,X){T.transparent===!0&&T.side===pi&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,yt(T,O,X),T.side=rr,T.needsUpdate=!0,yt(T,O,X),T.side=pi):yt(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),p=qe.get(X),p.init(O),b.push(p),X.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==X&&T.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ne=N.material;if(ne)if(Array.isArray(ne))for(let ge=0;ge<ne.length;ge++){let Te=ne[ge];ve(Te,X,N),W.add(Te)}else ve(ne,X,N),W.add(ne)}),p=b.pop(),W},this.compileAsync=function(T,O,X=null){let W=this.compile(T,O,X);return new Promise(N=>{function ne(){if(W.forEach(function(ge){re.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){N(T);return}setTimeout(ne,10)}Ne.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ce=null;function Ke(T){Ce&&Ce(T)}function me(){Pe.stop()}function Ge(){Pe.start()}let Pe=new Hg;Pe.setAnimationLoop(Ke),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(T){Ce=T,Z.setAnimationLoop(T),T===null?Pe.stop():Pe.start()},Z.addEventListener("sessionstart",me),Z.addEventListener("sessionend",Ge),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,R),p=qe.get(T,b.length),p.init(O),b.push(p),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Se),ce=this.localClippingEnabled,te=se.init(this.clippingPlanes,ce),m=pe.get(T,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ne=v.xr.getDepthSensingMesh();ne!==null&&He(ne,O,-1/0,v.sortObjects)}He(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,P),Xe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Xe&&Fe.addToRenderList(m,T),this.info.render.frame++,te===!0&&se.beginShadows();let X=p.state.shadowsArray;ae.render(X,T,O),te===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ne=O.cameras;if(N.length>0)for(let ge=0,Te=ne.length;ge<Te;ge++){let be=ne[ge];st(W,N,T,be)}Xe&&Fe.render(T);for(let ge=0,Te=ne.length;ge<Te;ge++){let be=ne[ge];zt(m,T,be,be.viewport)}}else N.length>0&&st(W,N,T,O),Xe&&Fe.render(T),zt(m,T,O);R!==null&&w===0&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,O),lt.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function He(T,O,X,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let ge=$.update(T),Te=T.material;Te.visible&&m.push(T,ge,Te,X,Ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let ge=$.update(T),Te=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ae.copy(ge.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){let be=ge.groups;for(let Le=0,Be=be.length;Le<Be;Le++){let De=be[Le],Ze=Te[De.materialIndex];Ze&&Ze.visible&&m.push(T,ge,Ze,X,Ae.z,De)}}else Te.visible&&m.push(T,ge,Te,X,Ae.z,null)}}let ne=T.children;for(let ge=0,Te=ne.length;ge<Te;ge++)He(ne[ge],O,X,W)}function zt(T,O,X,W){let N=T.opaque,ne=T.transmissive,ge=T.transparent;p.setupLightsView(X),te===!0&&se.setGlobalState(v.clippingPlanes,X),W&&ye.viewport(D.copy(W)),N.length>0&&bt(N,O,X),ne.length>0&&bt(ne,O,X),ge.length>0&&bt(ge,O,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function st(T,O,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new xn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?mi:zi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ne=p.state.transmissionRenderTarget[W.id],ge=W.viewport||D;ne.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);let Te=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(V),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Fe.render(X);let be=v.toneMapping;v.toneMapping=or;let Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),te===!0&&se.setGlobalState(v.clippingPlanes,W),bt(T,X,W),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let De=0,Ze=O.length;De<Ze;De++){let pt=O[De],Ht=pt.object,Ut=pt.geometry,ut=pt.material,Oe=pt.group;if(ut.side===pi&&Ht.layers.test(W.layers)){let rn=ut.side;ut.side=Dn,ut.needsUpdate=!0,qt(Ht,X,W,Ut,ut,Oe),ut.side=rn,ut.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}v.setRenderTarget(Te),v.setClearColor(V,J),Le!==void 0&&(W.viewport=Le),v.toneMapping=be}function bt(T,O,X){let W=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ne=T.length;N<ne;N++){let ge=T[N],Te=ge.object,be=ge.geometry,Le=W===null?ge.material:W,Be=ge.group;Te.layers.test(X.layers)&&qt(Te,O,X,be,Le,Be)}}function qt(T,O,X,W,N,ne){T.onBeforeRender(v,O,X,W,N,ne),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,O,X,W,T,ne),N.transparent===!0&&N.side===pi&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,v.renderBufferDirect(X,O,W,N,T,ne),N.side=rr,N.needsUpdate=!0,v.renderBufferDirect(X,O,W,N,T,ne),N.side=pi):v.renderBufferDirect(X,O,W,N,T,ne),T.onAfterRender(v,O,X,W,N,ne)}function yt(T,O,X){O.isScene!==!0&&(O=Ye);let W=re.get(T),N=p.state.lights,ne=p.state.shadowsArray,ge=N.state.version,Te=fe.getParameters(T,N.state,ne,O,X),be=fe.getProgramCacheKey(Te),Le=W.programs;W.environment=T.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Ve),Le=new Map,W.programs=Le);let Be=Le.get(be);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ge)return dt(T,Te),Be}else Te.uniforms=fe.getUniforms(T),T.onBeforeCompile(Te,v),Be=fe.acquireProgram(Te,be),Le.set(be,Be),W.uniforms=Te.uniforms;let De=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=se.uniform),dt(T,Te),W.needsLights=Mn(T),W.lightsStateVersion=ge,W.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Mt(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=bo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function dt(T,O){let X=re.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Vn(T,O,X,W,N){O.isScene!==!0&&(O=Ye),A.resetTextureUnits();let ne=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,Te=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ps,be=(W.isMeshStandardMaterial?G:M).get(W.envMap||ge),Le=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,pt=!!X.morphAttributes.color,Ht=or;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ht=v.toneMapping);let Ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=Ut!==void 0?Ut.length:0,Oe=re.get(W),rn=p.state.lights;if(te===!0&&(ce===!0||T!==x)){let Sn=T===x&&W.id===y;se.setState(W,T,Sn)}let mt=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rn.state.version||Oe.outputColorSpace!==Te||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==be||W.fog===!0&&Oe.fog!==ne||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==se.numPlanes||Oe.numIntersection!==se.numIntersection)||Oe.vertexAlphas!==Le||Oe.vertexTangents!==Be||Oe.morphTargets!==De||Oe.morphNormals!==Ze||Oe.morphColors!==pt||Oe.toneMapping!==Ht||Oe.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Oe.__version=W.version);let _i=Oe.currentProgram;mt===!0&&(_i=yt(W,O,N));let Cs=!1,Hn=!1,Ao=!1,At=_i.getUniforms(),ni=Oe.uniforms;if(ye.useProgram(_i.program)&&(Cs=!0,Hn=!0,Ao=!0),W.id!==y&&(y=W.id,Hn=!0),Cs||x!==T){ye.buffers.depth.getReversed()?(ie.copy(T.projectionMatrix),mg(ie),gg(ie),At.setValue(I,"projectionMatrix",ie)):At.setValue(I,"projectionMatrix",T.projectionMatrix),At.setValue(I,"viewMatrix",T.matrixWorldInverse);let Ln=At.map.cameraPosition;Ln!==void 0&&Ln.setValue(I,we.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Hn=!0,Ao=!0)}if(N.isSkinnedMesh){At.setOptional(I,N,"bindMatrix"),At.setOptional(I,N,"bindMatrixInverse");let Sn=N.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),At.setValue(I,"boneTexture",Sn.boneTexture,A))}N.isBatchedMesh&&(At.setOptional(I,N,"batchingTexture"),At.setValue(I,"batchingTexture",N._matricesTexture,A),At.setOptional(I,N,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",N._indirectTexture,A),At.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",N._colorsTexture,A));let ii=X.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Ue.update(N,X,_i),(Hn||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,At.setValue(I,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ni.envMap.value=be,ni.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(ni.envMapIntensity.value=O.environmentIntensity),Hn&&(At.setValue(I,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Tt(ni,Ao),ne&&W.fog===!0&&le.refreshFogUniforms(ni,ne),le.refreshMaterialUniforms(ni,W,k,Y,p.state.transmissionRenderTarget[T.id]),bo.upload(I,Mt(Oe),ni,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bo.upload(I,Mt(Oe),ni,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(I,"center",N.center),At.setValue(I,"modelViewMatrix",N.modelViewMatrix),At.setValue(I,"normalMatrix",N.normalMatrix),At.setValue(I,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Sn=W.uniformsGroups;for(let Ln=0,Iu=Sn.length;Ln<Iu;Ln++){let zr=Sn[Ln];L.update(zr,_i),L.bind(zr,_i)}}return _i}function Tt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Mn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,X){re.get(T.texture).__webglTexture=O,re.get(T.depthTexture).__webglTexture=X;let W=re.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){let X=re.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let ti=I.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){R=T,C=O,w=X;let W=!0,N=null,ne=!1,ge=!1;if(T){let be=re.get(T);if(be.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(be.__hasExternalTextures)A.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let De=T.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&re.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ge=!0);let Be=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?N=Be[O][X]:N=Be[O],ne=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?N=re.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[X]:N=Be,D.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else D.copy(oe).multiplyScalar(k).floor(),F.copy(Ie).multiplyScalar(k).floor(),B=We;if(X!==0&&(N=ti),ye.bindFramebuffer(I.FRAMEBUFFER,N)&&W&&ye.drawBuffers(T,N),ye.viewport(D),ye.scissor(F),ye.setScissorTest(B),ne){let be=re.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,X)}else if(ge){let be=re.get(T.texture),Le=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,X,Le)}else if(T!==null&&X!==0){let be=re.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(T,O,X,W,N,ne,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){ye.bindFramebuffer(I.FRAMEBUFFER,Te);try{let be=T.texture,Le=be.format,Be=be.type;if(!z.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&X>=0&&X<=T.height-N&&I.readPixels(O,X,W,N,ke.convert(Le),ke.convert(Be),ne)}finally{let be=R!==null?re.get(R).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,W,N,ne,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){let be=T.texture,Le=be.format,Be=be.type;if(!z.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-W&&X>=0&&X<=T.height-N){ye.bindFramebuffer(I.FRAMEBUFFER,Te);let De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,ne.byteLength,I.STREAM_READ),I.readPixels(O,X,W,N,ke.convert(Le),ke.convert(Be),0);let Ze=R!==null?re.get(R).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Ze);let pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pg(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ne),I.deleteBuffer(De),I.deleteSync(pt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,X=0){T.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-X),N=Math.floor(T.image.width*W),ne=Math.floor(T.image.height*W),ge=O!==null?O.x:0,Te=O!==null?O.y:0;A.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ge,Te,N,ne),ye.unbindTexture()};let Yt=I.createFramebuffer(),Zt=I.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,W=null,N=0,ne=null){T.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],O=arguments[2],ne=arguments[3]||0,X=null),ne===null&&(N!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let ge,Te,be,Le,Be,De,Ze,pt,Ht,Ut=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(X!==null)ge=X.max.x-X.min.x,Te=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Le=X.min.x,Be=X.min.y,De=X.isBox3?X.min.z:0;else{let ii=Math.pow(2,-N);ge=Math.floor(Ut.width*ii),Te=Math.floor(Ut.height*ii),T.isDataArrayTexture?be=Ut.depth:T.isData3DTexture?be=Math.floor(Ut.depth*ii):be=1,Le=0,Be=0,De=0}W!==null?(Ze=W.x,pt=W.y,Ht=W.z):(Ze=0,pt=0,Ht=0);let ut=ke.convert(O.format),Oe=ke.convert(O.type),rn;O.isData3DTexture?(A.setTexture3D(O,0),rn=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),rn=I.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),rn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let mt=I.getParameter(I.UNPACK_ROW_LENGTH),_i=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cs=I.getParameter(I.UNPACK_SKIP_PIXELS),Hn=I.getParameter(I.UNPACK_SKIP_ROWS),Ao=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De);let At=T.isDataArrayTexture||T.isData3DTexture,ni=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let ii=re.get(T),Sn=re.get(O),Ln=re.get(ii.__renderTarget),Iu=re.get(Sn.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Iu.__webglFramebuffer);for(let zr=0;zr<be;zr++)At&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.get(T).__webglTexture,N,De+zr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.get(O).__webglTexture,ne,Ht+zr)),I.blitFramebuffer(Le,Be,ge,Te,Ze,pt,ge,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||re.has(T)){let ii=re.get(T),Sn=re.get(O);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Yt),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zt);for(let Ln=0;Ln<be;Ln++)At?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ii.__webglTexture,N,De+Ln):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ii.__webglTexture,N),ni?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,ne,Ht+Ln):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,ne),N!==0?I.blitFramebuffer(Le,Be,ge,Te,Ze,pt,ge,Te,I.COLOR_BUFFER_BIT,I.NEAREST):ni?I.copyTexSubImage3D(rn,ne,Ze,pt,Ht+Ln,Le,Be,ge,Te):I.copyTexSubImage2D(rn,ne,Ze,pt,Le,Be,ge,Te);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ni?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(rn,ne,Ze,pt,Ht,ge,Te,be,ut,Oe,Ut.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(rn,ne,Ze,pt,Ht,ge,Te,be,ut,Ut.data):I.texSubImage3D(rn,ne,Ze,pt,Ht,ge,Te,be,ut,Oe,Ut):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ne,Ze,pt,ge,Te,ut,Oe,Ut.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ne,Ze,pt,Ut.width,Ut.height,ut,Ut.data):I.texSubImage2D(I.TEXTURE_2D,ne,Ze,pt,ge,Te,ut,Oe,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_i),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cs),I.pixelStorei(I.UNPACK_SKIP_ROWS,Hn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ao),ne===0&&O.generateMipmaps&&I.generateMipmap(rn),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X=null,W=null,N=0){return T.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,W=arguments[1]||null,T=arguments[2],O=arguments[3],N=arguments[4]||0),Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,X,W,N)},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,ye.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Eu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bb=new _o(-1,1,1,-1,0,1),dd=class extends vn{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},Tb=new dd,Br=class{constructor(e){this._mesh=new Vt(Tb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wu=class extends ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lr.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Br(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ga=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Au=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Cu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ze);this._width=n.width,this._height=n.height,t=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wu(Eu),this.copyPass.material.blending=Ci,this.clock=new xs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ga!==void 0&&(o instanceof Ga?n=!0:o instanceof Au&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ru=class extends ei{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Yg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var wo=class r extends ei{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(s,o,{type:mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new xn(s,o,{type:mi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new xn(s,o,{type:mi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Yg;this.highPassUniforms=lr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ze(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Eu;this.copyUniforms=lr.clone(u.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:vs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Ai,this.fsQuad=new Br(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ze(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};wo.BlurDirectionX=new ze(1,0);wo.BlurDirectionY=new ze(0,1);var Zg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Pu=class extends ei{constructor(){super();let e=Zg;this.uniforms=lr.clone(e.uniforms),this.material=new Ra({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Br(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Eb(r){let e=new To(r);e.compileEquirectangularShader();let t=new mo;t.background=new Re(131588);let n=(s,o,a,l,c=[0,0,0])=>{let u=new gs(a[0],a[1]),h=new Ai({color:new Re(s).multiplyScalar(o),side:pi}),d=new Vt(u,h);d.position.set(l[0],l[1],l[2]),d.lookAt(c[0],c[1],c[2]),t.add(d)};n(16119287,3.6,[6,1.4],[-4.5,5.5,4]),n(15663311,4.2,[5.5,2.2],[-6.5,1.2,2.5]),n(9109759,3.8,[4.5,3],[-4,-4.5,-2.5]),n(55807,4.4,[5.5,2.2],[6.5,-.8,2.8]),n(2643455,3.4,[4.5,2.8],[4.5,4.5,-2.5]),n(16763136,1.9,[1.6,1.6],[0,.2,-5.5]);let i=e.fromScene(t,.04);return t.traverse(s=>{s instanceof Vt&&(s.geometry.dispose(),s.material instanceof wi&&s.material.dispose())}),e.dispose(),i.texture}function Jg(r){let e=new wa(r.points,!1,"centripetal",.5),t=180,n=22,i=[],s=[],o=[],a=[],l=[],c=[];for(let E=0;E<=t;E++){let C=E/t;c.push(e.getPointAt(C)),l.push(e.getTangentAt(C).normalize())}let u=[],h=[],d=new U(0,0,1);Math.abs(l[0].dot(d))>.9&&d.set(1,0,0);let f=new U().crossVectors(l[0],d).normalize(),_=new U().crossVectors(l[0],f).normalize();u.push(f.clone()),h.push(_.clone());let g=new U,m=new Ti;for(let E=1;E<=t;E++){if(g.crossVectors(l[E-1],l[E]),g.lengthSq()>1e-10){g.normalize();let C=Math.acos(Va.clamp(l[E-1].dot(l[E]),-1,1));m.setFromAxisAngle(g,C),f=f.clone().applyQuaternion(m).normalize()}_=new U().crossVectors(l[E],f).normalize(),u.push(f),h.push(_)}let p=new Re,S=new U;for(let E=0;E<=t;E++){let C=E/t,w=c[E],R=Math.pow(Math.sin(Math.PI*C),.92),y=.72+.28*Math.sin(Math.PI*C*2),x=r.maxHalfWidth*R*y,D=r.maxHalfThickness*Math.pow(Math.sin(Math.PI*C),1.05),F=(C-.5)*Math.PI*r.twistTurns,B=Math.cos(F),V=Math.sin(F),J=u[E],H=h[E],Y=new U().addScaledVector(J,B).addScaledVector(H,V).normalize(),k=new U().addScaledVector(J,-V).addScaledVector(H,B).normalize();p.copy(r.colorStart).lerp(r.colorEnd,C);for(let ee=0;ee<=n;ee++){let P=ee/n*Math.PI*2,oe=Math.cos(P),Ie=Math.sin(P),We=Math.sign(oe)*Math.pow(Math.abs(oe),.78)*x,q=Math.sign(Ie)*Math.pow(Math.abs(Ie),1.35)*D;S.copy(w).addScaledVector(Y,We).addScaledVector(k,q),i.push(S.x,S.y,S.z),s.push(p.r,p.g,p.b),o.push(C,ee/n)}}let b=n+1;for(let E=0;E<t;E++)for(let C=0;C<n;C++){let w=E*b+C,R=(E+1)*b+C,y=(E+1)*b+(C+1),x=E*b+(C+1);a.push(w,R,x),a.push(R,y,x)}let v=new vn;return v.setAttribute("position",new Dt(i,3)),v.setAttribute("color",new Dt(s,3)),v.setAttribute("uv",new Dt(o,2)),v.setIndex(a),v.computeVertexNormals(),v}function $g(r,e){let t={uTime:{value:0},uReveal:{value:0},uPointer:{value:new ze(0,0)},uPhase:{value:r.phaseOffset}},n=new Pa({vertexColors:!0,metalness:.34,roughness:.14,clearcoat:1,clearcoatRoughness:.06,iridescence:.92,iridescenceIOR:1.44,iridescenceThicknessRange:[180,560],sheen:.55,sheenRoughness:.3,sheenColor:r.colorEnd,envMap:e,envMapIntensity:1.45,emissive:r.emissiveTint,emissiveIntensity:.24,transparent:!0,opacity:1});return n.onBeforeCompile=i=>{i.uniforms.uTime=t.uTime,i.uniforms.uReveal=t.uReveal,i.uniforms.uPointer=t.uPointer,i.uniforms.uPhase=t.uPhase,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform float uReveal;
        uniform vec2 uPointer;
        uniform float uPhase;
        varying float vRibbonT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vRibbonT = uv.x;
        float envelope = sin(uv.x * 3.14159265);
        float breathe = sin(uv.x * 5.2 - uTime * 0.85 + uPhase) * 0.085;
        float secondary = cos(uv.x * 3.1 + uTime * 0.55 - uPhase) * 0.045;
        transformed += normal * (breathe + secondary) * envelope;
        transformed.xy += uPointer * (0.09 * envelope);
        float revealScale = mix(0.68, 1.0, smoothstep(0.0, 1.0, uReveal));
        transformed *= revealScale;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform float uReveal;
        uniform float uPhase;
        varying float vRibbonT;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float energyPulse = 0.5 + 0.5 * sin(vRibbonT * 6.2831 - uTime * 1.15 + uPhase);
        float edgeGlow = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.6);
        totalEmissiveRadiance += diffuseColor.rgb * (edgeGlow * 0.55 + energyPulse * 0.14);
        totalEmissiveRadiance *= smoothstep(0.0, 0.85, uReveal);`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        gl_FragColor.a *= smoothstep(0.0, 0.9, uReveal);`)},n.customProgramCacheKey=()=>`palindrome-ribbon-${r.phaseOffset}`,{material:n,uniforms:t}}function wb(r){let e=r?120:240,t=new Float32Array(e*3),n=new Float32Array(e*3),i=new Float32Array(e),s=new Float32Array(e),o=[new Re(9109759),new Re(15663311),new Re(55807),new Re(2643455),new Re(16763136)];for(let h=0;h<e;h++){let d=Math.random()*Math.PI*2,f=.75+Math.pow(Math.random(),.75)*2.15,_=(Math.random()-.5)*1.1;t[h*3]=Math.cos(d)*f*.72+_*.45,t[h*3+1]=Math.sin(d)*f*1.18+(Math.random()-.5)*.65,t[h*3+2]=(Math.random()-.5)*2.1;let g=Math.random(),m=g<.34?o[0]:g<.64?o[1]:g<.9?o[2]:g<.96?o[3]:o[4];n[h*3]=m.r,n[h*3+1]=m.g,n[h*3+2]=m.b,i[h]=.55+Math.random()*1.35,s[h]=Math.random()*Math.PI*2}let a=new vn;a.setAttribute("position",new nn(t,3)),a.setAttribute("aColor",new nn(n,3)),a.setAttribute("aScale",new nn(i,1)),a.setAttribute("aSeed",new nn(s,1));let l={uTime:{value:0},uReveal:{value:0},uPointer:{value:new ze(0,0)},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,1.75)}},c=new Bt({uniforms:l,transparent:!0,depthWrite:!1,blending:vs,vertexShader:`
      attribute vec3 aColor;
      attribute float aScale;
      attribute float aSeed;
      uniform float uTime;
      uniform float uReveal;
      uniform vec2 uPointer;
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = aColor;
        vec3 pos = position;

        // Gentle orbital drift
        float angle = uTime * 0.16 + aSeed;
        pos.x += cos(angle) * 0.14;
        pos.y += sin(angle * 0.85) * 0.18;
        pos.z += sin(uTime * 0.25 + aSeed) * 0.12;

        // Subtle cursor parallax weighted by depth
        pos.xy += uPointer * (0.18 + pos.z * 0.06);

        // Expand gently outward during intro-to-hero handoff
        float burst = mix(0.42, 1.0, smoothstep(0.0, 1.0, uReveal));
        pos *= burst;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aScale * 18.0 * uPixelRatio * (1.0 / max(1.2, -mvPosition.z));
        vAlpha = smoothstep(0.05, 0.95, uReveal) * (0.42 + 0.35 * sin(uTime * 0.9 + aSeed));
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float glow = pow(1.0 - dist * 2.0, 2.2);
        gl_FragColor = vec4(vColor, glow * vAlpha * 0.65);
      }
    `});return{points:new Ta(a,c),uniforms:l,dispose:()=>{a.dispose(),c.dispose()}}}function Kg(r,e,t){let n;try{n=new bu({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return t.onFallback(),null}if(!n.getContext())return t.onFallback(),null;let i=window.innerWidth<960,s=i?1.5:1.75,o=Math.min(window.devicePixelRatio||1,s);n.setPixelRatio(o),n.setClearColor(0,1),n.toneMapping=xo,n.toneMappingExposure=1.12;let a=new mo;a.background=new Re(0);let l=new ln(36,1,.1,40);l.position.set(0,0,7.6);let c=Eb(n);a.environment=c;let u=new Oi;a.add(u);let h={points:[new U(-.06,1.92,-.14),new U(.92,1.24,.44),new U(1.12,.14,.22),new U(.4,-.84,-.32),new U(-.52,-1.62,-.16),new U(-.16,-2.02,.2)],colorStart:new Re(9109759),colorEnd:new Re(15663311),emissiveTint:new Re(4915330),phaseOffset:0,twistTurns:1.15,maxHalfWidth:.38,maxHalfThickness:.075},d={points:h.points.map(re=>new U(-re.x,-re.y,-re.z*.85)),colorStart:new Re(2047231),colorEnd:new Re(55807),emissiveTint:new Re(16230),phaseOffset:Math.PI,twistTurns:-1.15,maxHalfWidth:.38,maxHalfThickness:.075},f=Jg(h),_=Jg(d),g=$g(h,c),m=$g(d,c),p=new Vt(f,g.material),S=new Vt(_,m.material);u.add(p,S);let b=new Oi,v=new Ca(.28,.0065,12,72),E=new Ai({color:16763136,transparent:!0,opacity:0}),C=new Vt(v,E);C.rotation.set(Math.PI*.36,.4,.2);let w=new Aa(.028,16,16),R=new Ai({color:16767053,transparent:!0,opacity:0}),y=new Vt(w,R);b.add(C,y),u.add(b);let x=wb(i);u.add(x.points);let D=new La(1446944,.7),F=new Ur(15663311,12,16,1.6);F.position.set(-3.2,2.2,3);let B=new Ur(55807,12,16,1.6);B.position.set(3.4,-1.6,3.2);let V=new Ur(9109759,9,15,1.5);V.position.set(0,3.5,-3.2);let J=new Ur(16763136,1.4,3.2,2);J.position.set(0,0,.2),a.add(D,F,B,V,J);let H=new Cu(n),Y=new Ru(a,l),k=new wo(new ze(e.clientWidth||1,e.clientHeight||1),.34,.58,.76),ee=new Pu;H.addPass(Y),H.addPass(k),H.addPass(ee);let P=0,oe=0,Ie=0,We=0,q=0,te=0,ce=1.45,ie=.05,Se=1,we=0,Ae=!0,Ye=!1,Xe=new xs,xe=()=>{let re=e.clientWidth||window.innerWidth,A=e.clientHeight||window.innerHeight,M=re<960;l.aspect=re/Math.max(1,A),l.position.z=M?8.8:re<1200?8:7.4,l.updateProjectionMatrix(),n.setPixelRatio(Math.min(window.devicePixelRatio||1,M?1.5:1.75)),n.setSize(re,A,!1),H.setSize(re,A),k.setSize(re,A),x.uniforms.uPixelRatio.value=n.getPixelRatio(),M?(ce=.24,ie=.92,Se=.64):re<1240?(ce=1.15,ie=-.1,Se=.84):(ce=1.48,ie=-.1,Se=.92)},I=re=>{q+=(Ie-q)*.055,te+=(We-te)*.055,g.uniforms.uTime.value=re,m.uniforms.uTime.value=re,x.uniforms.uTime.value=re,g.uniforms.uReveal.value=P,m.uniforms.uReveal.value=P,x.uniforms.uReveal.value=P,g.uniforms.uPointer.value.set(q,te),m.uniforms.uPointer.value.set(-q,-te),x.uniforms.uPointer.value.set(q,te);let A=Math.max(0,Math.min(1,(P-.2)*1.25));E.opacity=A*.42,R.opacity=A*.92,b.rotation.y=re*.32,b.rotation.z=Math.sin(re*.45)*.25;let M=oe*.85,G=Se*(1-oe*.12);u.position.set(ce+q*.24,ie+te*.18+M,-oe*1.1),u.scale.setScalar(G),u.rotation.y=Math.sin(re*.24)*.22+q*.26+oe*.45,u.rotation.x=Math.cos(re*.19)*.1-te*.18,u.rotation.z=Math.sin(re*.14)*.06-.14,F.position.x=-3.2+Math.sin(re*.4)*.4+q*.6,B.position.x=3.4+Math.cos(re*.35)*.4-q*.6,J.intensity=1.4*P,H.render()},ft=()=>{if(Ye||document.hidden||!Ae||t.reducedMotion){we=0;return}I(Xe.getElapsedTime()),we=window.requestAnimationFrame(ft)},Ne=()=>{!we&&!Ye&&!document.hidden&&Ae&&!t.reducedMotion&&(Xe.start(),we=window.requestAnimationFrame(ft))},z=re=>{if(t.reducedMotion)return;let A=e.getBoundingClientRect();!A.width||!A.height||(Ie=((re.clientX-A.left)/A.width-.5)*2,We=-((re.clientY-A.top)/A.height-.5)*2)},ye=()=>{document.hidden&&we?(window.cancelAnimationFrame(we),we=0):!document.hidden&&Ae&&Ne()},rt=new IntersectionObserver(re=>{for(let A of re)Ae=A.isIntersecting,Ae?Ne():we&&(window.cancelAnimationFrame(we),we=0)},{threshold:.02});return xe(),rt.observe(e),window.addEventListener("resize",xe,{passive:!0}),window.addEventListener("pointermove",z,{passive:!0}),document.addEventListener("visibilitychange",ye),t.reducedMotion?(P=1,I(.6)):Ne(),{setReveal(re){P=Va.clamp(re,0,1),t.reducedMotion&&I(.6)},setScrollProgress(re){oe=Va.clamp(re,0,1),t.reducedMotion&&I(.6)},renderOnce(){I(Xe.getElapsedTime())},dispose(){Ye=!0,we&&window.cancelAnimationFrame(we),rt.disconnect(),window.removeEventListener("resize",xe),window.removeEventListener("pointermove",z),document.removeEventListener("visibilitychange",ye),f.dispose(),_.dispose(),g.material.dispose(),m.material.dispose(),v.dispose(),E.dispose(),w.dispose(),R.dispose(),x.dispose(),c.dispose(),H.dispose(),n.dispose()}}}ai.registerPlugin(nt);var Ab={"rajamanickam-chit-fund":"Rajamanickam Chit Funds","zsi-yogesh":"ZSI Portfolio",kaiforge:"KaiForge",palindrome:"Palindrome",neuroshield:"NeuroShield",mfalmion:"Mfalmion"},Cb="palindrome_intro_seen",pd=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Rb(){try{window.localStorage.setItem(Cb,"1")}catch{}}function Pb(){let r=document.documentElement,e=document.getElementById("intro-splash"),t=document.getElementById("intro-video"),n=document.getElementById("hero"),i=document.getElementById("hero-canvas"),s=document.getElementById("masthead"),o=document.getElementById("hero-scroll"),a=document.getElementById("hero-content"),l=Array.from(document.querySelectorAll(".hero__line-inner")),c=Array.from(document.querySelectorAll("[data-hero-stagger]")),u=pd(),h=null;n&&i?h=Kg(i,n,{reducedMotion:u,onFallback:()=>{n.classList.add("is-webgl-fallback")}}):n&&n.classList.add("is-webgl-fallback"),u||(ai.set(l,{yPercent:112,opacity:0}),ai.set(c,{y:20,opacity:0}),s&&ai.set(s,{y:-14,opacity:0}),o&&ai.set(o,{opacity:0,y:10}));let d=!1,f=_=>{if(d)return;if(d=!0,u){h?.setReveal(1),r.classList.remove("intro-active");return}let g=ai.timeline({defaults:{ease:"power4.out"}}),m={value:0};_&&e?g.to(e,{opacity:0,duration:.78,ease:"power3.inOut",onComplete:()=>{t?.pause(),r.classList.remove("intro-active"),e.style.opacity=""}},0):r.classList.remove("intro-active"),g.to(m,{value:1,duration:_?1.35:1.05,ease:"power3.out",onUpdate:()=>{h?.setReveal(m.value)}},_?.1:0);let p=_?.24:.04;c[0]&&g.to(c[0],{y:0,opacity:1,duration:.62,ease:"power3.out"},p),l.length&&g.to(l,{yPercent:0,opacity:1,duration:.85,stagger:.08,ease:"power4.out"},p+.06);let S=c.slice(1);S.length&&g.to(S,{y:0,opacity:1,duration:.68,stagger:.08,ease:"power3.out"},p+.28),s&&g.to(s,{y:0,opacity:1,duration:.65,ease:"power3.out",clearProps:"transform"},p+.18),o&&g.to(o,{opacity:1,y:0,duration:.6,ease:"power2.out"},p+.45)};if(n&&!u&&nt.create({trigger:n,start:"top top",end:"bottom top",scrub:!0,onUpdate:_=>{h?.setScrollProgress(_.progress),a&&ai.set(a,{y:_.progress*-48,opacity:Math.max(.18,1-_.progress*1.15)}),o&&ai.set(o,{opacity:Math.max(0,1-_.progress*3.5)})}}),!u&&r.classList.contains("intro-active")&&e&&t){Rb();let _=!1,g=0,m=()=>{_||(_=!0,g&&window.clearTimeout(g),f(!0))},p=t.dataset.src;p&&!t.getAttribute("src")&&(t.src=p),t.muted=!0,t.playsInline=!0,t.addEventListener("ended",m,{once:!0}),t.addEventListener("error",m,{once:!0}),t.addEventListener("loadedmetadata",()=>{let b=Number.isFinite(t.duration)&&t.duration>0?Math.ceil(t.duration*1e3)+1500:8e3;g&&window.clearTimeout(g),g=window.setTimeout(m,b)}),g=window.setTimeout(m,8e3);let S=t.play();S&&typeof S.catch=="function"&&S.catch(()=>{m()})}else f(!1)}function Ib(){if(pd()||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let r=Array.from(document.querySelectorAll("[data-magnetic]"));for(let e of r){let t=ai.quickTo(e,"x",{duration:.42,ease:"power3.out"}),n=ai.quickTo(e,"y",{duration:.42,ease:"power3.out"});e.addEventListener("pointermove",i=>{let s=e.getBoundingClientRect();if(!s.width||!s.height)return;let o=((i.clientX-s.left)/s.width-.5)*14,a=((i.clientY-s.top)/s.height-.5)*10;t(o),n(a)}),e.addEventListener("pointerleave",()=>{t(0),n(0)})}}function Db(){let r=document.getElementById("scroll-progress"),e=document.getElementById("masthead"),t=Array.from(document.querySelectorAll("[data-nav-link]")),n=Array.from(document.querySelectorAll("main section[id]")),i=()=>{if(e&&e.classList.toggle("is-scrolled",window.scrollY>24),r){let s=document.documentElement.scrollHeight-window.innerHeight,o=s>0?Math.min(1,Math.max(0,window.scrollY/s)):0;r.style.transform=`scaleX(${o.toFixed(4)})`}};if(i(),window.addEventListener("scroll",i,{passive:!0}),n.length&&t.length&&"IntersectionObserver"in window){let s=new IntersectionObserver(o=>{for(let a of o){if(!a.isIntersecting)continue;let l=a.target.getAttribute("id");for(let c of t)c.classList.toggle("is-active",c.getAttribute("href")===`#${l}`)}},{rootMargin:"-42% 0px -48% 0px"});for(let o of n)s.observe(o)}}function Lb(){let r=Array.from(document.querySelectorAll("[data-reveal]"));if(!r.length)return;if(pd()||!("IntersectionObserver"in window)){for(let t of r)t.classList.add("is-revealed");return}let e=new IntersectionObserver((t,n)=>{for(let i of t)i.isIntersecting&&(i.target.classList.add("is-revealed"),n.unobserve(i.target))},{threshold:.1,rootMargin:"0px 0px -30px 0px"});for(let t of r)t.getBoundingClientRect().top<window.innerHeight*.94?t.classList.add("is-revealed"):e.observe(t)}function Ub(){let r=document.getElementById("menu-toggle"),e=document.getElementById("mobile-drawer");if(!r||!e)return;let t=i=>{r.setAttribute("aria-expanded",String(i)),e.setAttribute("aria-hidden",String(!i)),e.classList.toggle("is-open",i),document.body.style.overflow=i?"hidden":""};r.addEventListener("click",()=>{let i=r.getAttribute("aria-expanded")==="true";t(!i)});let n=e.querySelectorAll("[data-drawer-link]");for(let i of n)i.addEventListener("click",()=>t(!1));window.addEventListener("keydown",i=>{i.key==="Escape"&&r.getAttribute("aria-expanded")==="true"&&(t(!1),r.focus())})}function Nb(){let r=Array.from(document.querySelectorAll("[data-work-filter]")),e=Array.from(document.querySelectorAll("[data-work-card]")),t=Array.from(document.querySelectorAll("[data-inspect-card]"));for(let n of r)n.addEventListener("click",()=>{let i=n.dataset.workFilter||"All";for(let s of r){let o=s===n;s.classList.toggle("is-active",o),s.setAttribute("aria-selected",String(o))}for(let s of e){let o=i==="All"||s.dataset.workGroup===i;s.hidden=!o}});for(let n of t)n.addEventListener("click",()=>{let i=n.getAttribute("aria-controls");if(!i)return;let s=document.getElementById(i),o=n.closest("[data-work-card]");if(!s)return;let a=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!a)),s.hidden=a,o?.classList.toggle("is-expanded",!a),n.textContent=a?"Inspect Details +":"Hide Details \u2212"})}function Fb(){let r=Array.from(document.querySelectorAll("[data-skill-filter]")),e=Array.from(document.querySelectorAll("[data-skill-item]")),t=document.getElementById("inspector-category"),n=document.getElementById("inspector-name"),i=document.getElementById("inspector-focus"),s=document.getElementById("inspector-summary"),o=document.getElementById("inspector-projects");if(!e.length)return;let a=l=>{for(let c of e){let u=c===l;c.classList.toggle("is-selected",u),c.setAttribute("aria-selected",String(u))}if(t&&(t.textContent=l.dataset.skillCategory||""),n&&(n.textContent=l.dataset.skillName||""),i&&(i.textContent=l.dataset.skillFocus||""),s&&(s.textContent=l.dataset.skillSummary||""),o){let c=(l.dataset.skillProjects||"").split(",").filter(Boolean);o.innerHTML="";for(let u of c){let h=document.createElement("a");h.href=`#project-${u}`,h.className="skill-project-chip",h.textContent=Ab[u]||u,o.appendChild(h)}}};for(let l of e)l.addEventListener("click",()=>a(l)),l.addEventListener("mouseenter",()=>a(l));for(let l of r)l.addEventListener("click",()=>{let c=l.dataset.skillFilter||"all";for(let d of r){let f=d===l;d.classList.toggle("is-active",f),d.setAttribute("aria-selected",String(f))}let u=null;for(let d of e){let f=c==="all"||d.dataset.skillCategory===c;d.hidden=!f,f&&!u&&(u=d)}!e.find(d=>d.classList.contains("is-selected")&&!d.hidden)&&u&&a(u)})}function Ob(){let r=Array.from(document.querySelectorAll("[data-honor-tab]")),e=Array.from(document.querySelectorAll("[data-honor-panel]"));if(!(!r.length||!e.length))for(let t of r)t.addEventListener("click",()=>{let n=t.dataset.honorTab;for(let i of r){let s=i===t;i.classList.toggle("is-active",s),i.setAttribute("aria-selected",String(s))}for(let i of e)i.hidden=i.dataset.honorPanel!==n})}function Bb(){let r=document.getElementById("contact-form"),e=document.getElementById("contact-name"),t=document.getElementById("contact-email"),n=document.getElementById("contact-type"),i=document.getElementById("contact-description"),s=document.getElementById("description-count"),o=document.getElementById("contact-submit"),a=document.getElementById("form-status"),l=document.querySelectorAll("[data-select-service]");for(let g of l)g.addEventListener("click",()=>{let m=g.dataset.selectService;m&&n&&(n.value=m),e&&window.setTimeout(()=>e.focus(),350)});let c=document.querySelectorAll("[data-copy-text]");for(let g of c)g.addEventListener("click",async()=>{let m=g.dataset.copyText;if(m)try{await navigator.clipboard.writeText(m);let p=g.textContent;g.textContent="Copied",window.setTimeout(()=>{g.textContent=p},1600)}catch{}});if(!r||!e||!t||!n||!i||!o||!a)return;let u=()=>{s&&(s.textContent=`${i.value.length} / 2500`)};u(),i.addEventListener("input",u);let h=(g,m)=>{let p=document.getElementById(`error-${g}`);p&&(p.textContent=m)},d=()=>{for(let g of["name","email","project_type","description"])h(g,"");a.hidden=!0,a.className="form-status",a.textContent=""},f=(g,m)=>{a.hidden=!1,a.className=`form-status form-status--${g}`,a.textContent=m},_=g=>{let m=!0;return g.name.length<2&&(h("name","Please enter at least 2 characters."),m=!1),/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(g.email)||(h("email","Please enter a valid email address."),m=!1),g.project_type||(h("project_type","Please select a service package."),m=!1),g.description.length<15&&(h("description","Please describe your project in at least 15 characters."),m=!1),m};r.addEventListener("submit",async g=>{g.preventDefault(),d();let m={name:e.value.trim(),email:t.value.trim(),project_type:n.value.trim(),description:i.value.trim()};if(!_(m)){f("error","Please fix the highlighted fields before sending.");return}let p=o.querySelector("span:first-child");o.disabled=!0,p&&(p.textContent="Sending...");try{let S=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),b=await S.json();if(!S.ok){if(Array.isArray(b.detail))for(let v of b.detail){let E=String(v.loc?.[v.loc.length-1]??"");E&&v.msg&&h(E,v.msg.replace(/^Value error,\s*/i,""))}f("error","Unable to submit yet. Please check your details and try again.");return}r.reset(),u(),f("success",b.message||"Project inquiry received by Palindrome Labs.")}catch{f("error","Network error while contacting the Python backend. Please try again.")}finally{o.disabled=!1,p&&(p.textContent="Send Project Inquiry")}})}document.addEventListener("DOMContentLoaded",()=>{Pb(),Ib(),Db(),Lb(),Ub(),Nb(),Fb(),Ob(),Bb()});})();
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
